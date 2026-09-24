const playerImage = "image/kuromi.jpg";
const exitImage = "image/exit.jpg";
const trapImage = "image/aso.gif";
const gemImage = "image/heart.gif";


const dodgeCharacterImage = "image/memory/kurromi.gif";


const dodgeObjectImage = "image/memory/tnt.gif";

const memoryImages = [
    "image/memory/bear.gif",
    "image/memory/cat.gif",
    "image/memory/charmykitty.gif",
    "image/memory/downloa.gif",
    "image/memory/duck.gif",
    "image/memory/gifs.gif",
    "image/memory/hahashah.gif",
    "image/memory/images.gif",
    "image/memory/loading.gif",
    "image/memory/pikachu.gif"
];

const mazeCompleted = JSON.parse(localStorage.getItem("mazeCompletedLevels") || "[]");
const mazeBestTimes = JSON.parse(localStorage.getItem("mazeBestTimes") || "{}");

const memoryCompleted = JSON.parse(localStorage.getItem("memoryCompletedLevels") || "[]");
const memoryBestMoves = JSON.parse(localStorage.getItem("memoryBestMoves") || "{}");

const dodgeCompleted = JSON.parse(localStorage.getItem("dodgeCompletedLevels") || "[]");
const dodgeBestScores = JSON.parse(localStorage.getItem("dodgeBestScores") || "{}");

let currentLevel = 1;
let mazeGrid = [];
let mazeSize = 9;
let playerPosition = { row: 1, col: 1 };
let exitPosition = { row: 7, col: 7 };
let traps = [];
let gems = [];
let gameStarted = false;
let levelComplete = false;
let timerInterval = null;
let startTime = 0;

const maze = document.getElementById("maze");
const levelNumber = document.getElementById("level-number");
const timer = document.getElementById("timer");
const bestTime = document.getElementById("best-time");
const gameMessage = document.getElementById("game-message");
const locationIcon = document.getElementById("location-icon");
const locationName = document.getElementById("location-name");
const locationLabel = document.getElementById("location-label");
const replayBtn = document.getElementById("replay-btn");
const nextBtn = document.getElementById("next-btn");
const previewBtn = document.getElementById("preview-btn");
const previewModal = document.getElementById("preview-modal");
const closePreview = document.getElementById("close-preview");
const levelList = document.getElementById("level-list");

const locations = [
    [ "FOREST", "Whispering Forest"],
    [ "CASTLE", "Moonlit Castle"],
    [ "OCEAN", "Crystal Shore"],
    ["GARDEN", "Sakura Garden"],
    ["MOUNTAIN", "Frozen Mountain"],
    [ "NIGHT", "Midnight Valley"],
    [ "VOLCANO", "Ember Valley"],
    [ "DESERT", "Golden Desert"],
    ["SPACE", "Starlight Zone"],
    [ "TEMPLE", "Hidden Temple"],
    [ "JUNGLE", "Mystic Jungle"],
    [ "ICE", "Crystal Ice Cave"],
    [ "RAIN", "Rainy Woods"],
    [ "LAVA", "Lava Kingdom"],
    ["SKY", "Cloud Kingdom"],
    [ "FIELD", "Golden Flower Field"],
    [ "SHADOW", "Shadow Realm"],
    [ "GALAXY", "Dream Galaxy"],
    [ "ISLAND", "Secret Island"],
    [ "SUNSET", "Sunset Valley"],
    ["COSMOS", "Falling Star Realm"],
    [ "RUINS", "Forgotten Ruins"],
    [ "GROVE", "Ancient Grove"],
    ["STORM", "Thunder Valley"],
    [ "RAINBOW", "Rainbow Realm"],
    ["CRYSTAL", "Crystal Kingdom"],
    [ "FROST", "Frozen Kingdom"],
    [ "BLOSSOM", "Blossom Valley"],
    [ "DREAM", "Dream World"],
    [ "FINAL", "The Final Realm"]
];

function getMazeSize(level) {
    if (level <= 6) return 9;
    if (level <= 12) return 11;
    if (level <= 18) return 13;
    if (level <= 24) return 15;
    return 17;
}

function getTrapCount(level) {
    if (level <= 3) return 0;
    if (level <= 6) return 2;
    if (level <= 10) return 4;
    if (level <= 15) return 6;
    if (level <= 20) return 8;
    if (level <= 25) return 10;
    return 12;
}

function getGemCount(level) {
    if (level <= 6) return 1;
    if (level <= 12) return 2;
    if (level <= 20) return 3;
    return 4;
}

function createMaze(size) {
    const grid = Array.from({ length: size }, () =>
        Array(size).fill(1)
    );

    function carve(row, col) {
        grid[row][col] = 0;

        const directions = [
            [2, 0],
            [-2, 0],
            [0, 2],
            [0, -2]
        ];

        directions.sort(() => Math.random() - 0.5);

        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;

            if (
                newRow > 0 &&
                newRow < size - 1 &&
                newCol > 0 &&
                newCol < size - 1 &&
                grid[newRow][newCol] === 1
            ) {
                grid[row + dr / 2][col + dc / 2] = 0;
                carve(newRow, newCol);
            }
        }
    }

    carve(1, 1);

    grid[1][1] = 0;
    grid[size - 2][size - 2] = 0;

    return grid;
}

function getRandomPathCell() {
    const available = [];

    for (let row = 1; row < mazeSize - 1; row++) {
        for (let col = 1; col < mazeSize - 1; col++) {
            if (
                mazeGrid[row][col] === 0 &&
                !(row === 1 && col === 1) &&
                !(row === mazeSize - 2 && col === mazeSize - 2)
            ) {
                available.push({ row, col });
            }
        }
    }

    if (!available.length) {
        return null;
    }

    return available[Math.floor(Math.random() * available.length)];
}

function createMazeObjects() {
    traps = [];
    gems = [];

    for (let i = 0; i < getTrapCount(currentLevel); i++) {
        const cell = getRandomPathCell();

        if (cell) {
            const exists = traps.some(
                item => item.row === cell.row && item.col === cell.col
            );

            if (!exists) {
                traps.push(cell);
            }
        }
    }

    for (let i = 0; i < getGemCount(currentLevel); i++) {
        const cell = getRandomPathCell();

        if (cell) {
            const exists =
                gems.some(item => item.row === cell.row && item.col === cell.col) ||
                traps.some(item => item.row === cell.row && item.col === cell.col);

            if (!exists) {
                gems.push(cell);
            }
        }
    }
}

function renderMaze() {
    maze.innerHTML = "";

    maze.style.gridTemplateColumns = `repeat(${mazeSize}, 1fr)`;
    maze.style.gridTemplateRows = `repeat(${mazeSize}, 1fr)`;

    for (let row = 0; row < mazeSize; row++) {
        for (let col = 0; col < mazeSize; col++) {
            const cell = document.createElement("div");

            cell.className =
                mazeGrid[row][col] === 1
                    ? "cell wall"
                    : "cell path";

            if (
                playerPosition.row === row &&
                playerPosition.col === col
            ) {
                const image = document.createElement("img");
                image.src = playerImage;
                image.className = "maze-image player";
                cell.appendChild(image);
            } else if (
                exitPosition.row === row &&
                exitPosition.col === col
            ) {
                const image = document.createElement("img");
                image.src = exitImage;
                image.className = "maze-image exit";
                cell.appendChild(image);
            } else if (
                traps.some(item => item.row === row && item.col === col)
            ) {
                const image = document.createElement("img");
                image.src = trapImage;
                image.className = "maze-image trap";
                cell.appendChild(image);
            } else if (
                gems.some(item => item.row === row && item.col === col)
            ) {
                const image = document.createElement("img");
                image.src = gemImage;
                image.className = "maze-image gem";
                cell.appendChild(image);
            }

            maze.appendChild(cell);
        }
    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return (
        String(minutes).padStart(2, "0") +
        ":" +
        String(secs).padStart(2, "0")
    );
}

function updateTimer() {
    const seconds = Math.floor((Date.now() - startTime) / 1000);
    timer.textContent = formatTime(seconds);
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function startTimer() {
    stopTimer();

    startTime = Date.now();

    updateTimer();

    timerInterval = setInterval(updateTimer, 1000);
}

function showMazePlayScreen() {
    gameStarted = false;
    levelComplete = false;
    stopTimer();

  

    maze.innerHTML = `
        <div class="play-screen">
            <div class="play-icon"></div>
            <h2>Level ${currentLevel}</h2>
            <p>Reach the exit without touching the traps.</p>
            <button type="button" id="play-button">▶ Play</button>
        </div>
    `;

    gameMessage.textContent = "Press Play when you're ready.";
    nextBtn.disabled = true;

    const playButton = document.getElementById("play-button");

    if (playButton) {
        playButton.addEventListener("click", startMaze);
    }
}

function startMaze() {
    mazeSize = getMazeSize(currentLevel);

    mazeGrid = createMaze(mazeSize);

    playerPosition = {
        row: 1,
        col: 1
    };

    exitPosition = {
        row: mazeSize - 2,
        col: mazeSize - 2
    };

    createMazeObjects();
    renderMaze();

    gameStarted = true;
    levelComplete = false;

    gameMessage.textContent = "Find the exit!";

    startTimer();
}

function movePlayer(direction) {
    if (!gameStarted || levelComplete) {
        return;
    }

    let newRow = playerPosition.row;
    let newCol = playerPosition.col;

    if (direction === "up") newRow--;
    if (direction === "down") newRow++;
    if (direction === "left") newCol--;
    if (direction === "right") newCol++;

    if (
        newRow < 0 ||
        newRow >= mazeSize ||
        newCol < 0 ||
        newCol >= mazeSize
    ) {
        return;
    }

    if (mazeGrid[newRow][newCol] === 1) {
        return;
    }

    playerPosition = {
        row: newRow,
        col: newCol
    };

    const trapHit = traps.some(
        item =>
            item.row === newRow &&
            item.col === newCol
    );

    const gemIndex = gems.findIndex(
        item =>
            item.row === newRow &&
            item.col === newCol
    );

if (trapHit) {
    gameMessage.textContent = "You hit a trap! Restarting...";
    stopTimer();
    gameStarted = false;

    const trapIndex = traps.findIndex(
        item =>
            item.row === newRow &&
            item.col === newCol
    );

    if (trapIndex !== -1) {
        traps.splice(trapIndex, 1);
    }

    setTimeout(() => {
        playerPosition = {
            row: 1,
            col: 1
        };

        renderMaze();

        gameStarted = true;
        levelComplete = false;

        gameMessage.textContent = "Find the exit!";

        startTimer();
    }, 500);

    return;
}

    if (gemIndex !== -1) {
        gems.splice(gemIndex, 1);
        gameMessage.textContent = "You found a gem! 💖";
    }

    if (
        newRow === exitPosition.row &&
        newCol === exitPosition.col
    ) {
        completeMazeLevel();
        return;
    }

    renderMaze();
}

function completeMazeLevel() {
    levelComplete = true;
    gameStarted = false;

    stopTimer();

    const finalTime = Math.floor(
        (Date.now() - startTime) / 1000
    );

    const oldBest = mazeBestTimes[currentLevel];

    if (!oldBest || finalTime < oldBest) {
        mazeBestTimes[currentLevel] = finalTime;

        localStorage.setItem(
            "mazeBestTimes",
            JSON.stringify(mazeBestTimes)
        );
    }

    if (!mazeCompleted.includes(currentLevel)) {
        mazeCompleted.push(currentLevel);

        localStorage.setItem(
            "mazeCompletedLevels",
            JSON.stringify(mazeCompleted)
        );
    }

    updateBestTime();
    createConfetti();

    const isLastLevel = currentLevel >= 30;

    showGameCompletePopup(
        "Level Complete! 💖",
        isLastLevel
            ? `You completed all 30 levels! Time: ${formatTime(finalTime)}`
            : `You escaped the maze in ${formatTime(finalTime)}!`,
        () => {
            showMazePlayScreen();
        },
        () => {
            currentLevel++;

            updateMazeInfo();
            showMazePlayScreen();
        },
        isLastLevel
    );

    nextBtn.disabled = isLastLevel;
}

function updateBestTime() {
    const best = mazeBestTimes[currentLevel];

    bestTime.textContent = best
        ? formatTime(best)
        : "--:--";
}

function updateMazeInfo() {
    levelNumber.textContent = currentLevel;

    const location = locations[currentLevel - 1];

    locationIcon.textContent = location[0];
    locationLabel.textContent = location[1];
    locationName.textContent = location[2];

    updateBestTime();
}

function loadMazeLevel(level) {
    if (level < 1 || level > 30) {
        return;
    }

    if (
        level !== 1 &&
        !mazeCompleted.includes(level - 1)
    ) {
        return;
    }

    currentLevel = level;

    updateMazeInfo();
    showMazePlayScreen();
}

function createMazeLevelList() {
    levelList.innerHTML = "";

    for (let i = 1; i <= 30; i++) {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "level-item";

        const unlocked =
            i === 1 ||
            mazeCompleted.includes(i - 1);

        const completed =
            mazeCompleted.includes(i);

        if (!unlocked) {
            button.classList.add("locked");
        }

        if (completed) {
            button.classList.add("completed");
        }

        if (i === currentLevel) {
            button.classList.add("current");
        }

        button.innerHTML = `
            <strong>${i}</strong>
            <span>
                ${
                    completed
                        ? "✓ Done"
                        : unlocked
                            ? "Open"
                            : "Locked"
                }
            </span>
        `;

        if (unlocked) {
            button.addEventListener("click", () => {
                loadMazeLevel(i);
                previewModal.classList.remove("show");
            });
        }

        levelList.appendChild(button);
    }
}

document.querySelectorAll(".control").forEach(button => {
    button.addEventListener("click", () => {
        movePlayer(button.dataset.direction);
    });
});

document.addEventListener("keydown", event => {
    const keys = {
        ArrowUp: "up",
        ArrowDown: "down",
        ArrowLeft: "left",
        ArrowRight: "right",
        w: "up",
        s: "down",
        a: "left",
        d: "right"
    };

    const direction = keys[event.key];

    if (direction) {
        event.preventDefault();
        movePlayer(direction);
    }
});

replayBtn.addEventListener("click", () => {
    showMazePlayScreen();
});

nextBtn.addEventListener("click", () => {
    if (currentLevel < 30) {
        currentLevel++;
        updateMazeInfo();
        showMazePlayScreen();
    }
});

previewBtn.addEventListener("click", () => {
    createMazeLevelList();
    previewModal.classList.add("show");
});

closePreview.addEventListener("click", () => {
    previewModal.classList.remove("show");
});

previewModal.addEventListener("click", event => {
    if (event.target === previewModal) {
        previewModal.classList.remove("show");
    }
});

function createConfetti() {
    const container = document.createElement("div");

    container.className = "confetti-container";

    for (let i = 0; i < 35; i++) {
        const piece = document.createElement("span");

        piece.className = "confetti-piece";

        piece.style.left =
            Math.random() * 100 + "%";

        piece.style.width =
            Math.random() * 6 + 4 + "px";

        piece.style.height =
            Math.random() * 10 + 5 + "px";

        piece.style.animationDuration =
            Math.random() * 1.5 + 1.5 + "s";

        piece.style.animationDelay =
            Math.random() * 0.5 + "s";

        container.appendChild(piece);
    }

    document.body.appendChild(container);

    setTimeout(() => {
        container.remove();
    }, 3500);
}

function showGameCompletePopup(title, message, replayFunction, nextFunction, isLastLevel = false) {
    const oldPopup = document.getElementById("game-complete-popup");

    if (oldPopup) {
        oldPopup.remove();
    }

    const popup = document.createElement("div");

    popup.id = "game-complete-popup";

    popup.innerHTML = `
        <div class="complete-popup-box">
            <div class="complete-icon">🎉</div>

            <h2>${title}</h2>

            <p>${message}</p>

            <div class="complete-popup-buttons">
                <button type="button" id="complete-replay">
                    ↻ Replay
                </button>

                ${
                    isLastLevel
                        ? ""
                        : `
                            <button type="button" id="complete-next">
                                Next Level →
                            </button>
                        `
                }
            </div>
        </div>
    `;

    document.body.appendChild(popup);

    const replayButton =
        document.getElementById("complete-replay");

    const nextButton =
        document.getElementById("complete-next");

    replayButton.addEventListener("click", () => {
        popup.remove();
        replayFunction();
    });

    if (nextButton) {
        nextButton.addEventListener("click", () => {
            popup.remove();
            nextFunction();
        });
    }
}


let memoryLevel = 1;
let memoryMoves = 0;
let memoryFirstCard = null;
let memorySecondCard = null;
let memoryLock = false;
let memoryLevelComplete = false;

const memoryLevelElement = document.getElementById("memory-level");
const memoryMovesElement = document.getElementById("memory-moves");
const memoryBestElement = document.getElementById("memory-best");
const memoryBoard = document.getElementById("memory-board");
const memoryMessage = document.getElementById("memory-message");
const memoryReplayBtn = document.getElementById("memory-replay-btn");
const memoryNextBtn = document.getElementById("memory-next-btn");
const memoryPreviewBtn = document.getElementById("memory-preview-btn");
const memoryPreviewModal = document.getElementById("memory-preview-modal");
const memoryClosePreview = document.getElementById("memory-close-preview");
const memoryLevelList = document.getElementById("memory-level-list");

function getMemoryPairs(level) {
    if (level <= 3) return 2;
    if (level <= 6) return 3;
    if (level <= 9) return 4;
    if (level <= 12) return 5;
    if (level <= 15) return 6;
    if (level <= 18) return 7;
    if (level <= 21) return 8;
    if (level <= 24) return 9;
    return 10;
}

function showMemoryPlayScreen() {
    memoryBoard.innerHTML = `
        <div class="play-screen">
            <div class="play-icon"></div>

            <h2>
                Level ${memoryLevel}
            </h2>

            <p>
                Find all the matching pairs.
            </p>

            <button
                type="button"
                id="memory-play-button"
            >
                ▶ Play
            </button>
        </div>
    `;

    memoryMessage.textContent =
        "Press Play when you're ready.";

    memoryNextBtn.disabled = true;

    const playButton =
        document.getElementById(
            "memory-play-button"
        );

    if (playButton) {
        playButton.addEventListener(
            "click",
            startMemoryGame
        );
    }
}

function startMemoryGame() {
    memoryMoves = 0;
    memoryFirstCard = null;
    memorySecondCard = null;
    memoryLock = false;
    memoryLevelComplete = false;

    memoryMovesElement.textContent = "0";

    const pairCount = getMemoryPairs(memoryLevel);

    const selectedImages =
        memoryImages.slice(0, pairCount);

    const cards = [
        ...selectedImages,
        ...selectedImages
    ].sort(() => Math.random() - 0.5);

    memoryBoard.innerHTML = "";

    cards.forEach((image, index) => {
        const card = document.createElement("button");

        card.type = "button";
        card.className = "memory-card";
        card.dataset.image = image;
        card.dataset.index = index;

        card.innerHTML = `
            <div class="memory-card-inner">
                <div class="memory-card-front"></div>
                <div class="memory-card-back">
                    <img src="${image}" alt="Memory card">
                </div>
            </div>
        `;

        card.addEventListener(
            "click",
            () => flipMemoryCard(card)
        );

        memoryBoard.appendChild(card);
    });

    memoryMessage.textContent =
        "Find the matching pairs.";
}

function flipMemoryCard(card) {
    if (
        memoryLock ||
        card.classList.contains("flipped") ||
        card.classList.contains("matched") ||
        memoryLevelComplete
    ) {
        return;
    }

    card.classList.add("flipped");

    if (!memoryFirstCard) {
        memoryFirstCard = card;
        return;
    }

    memorySecondCard = card;
    memoryMoves++;

    memoryMovesElement.textContent =
        memoryMoves;

    checkMemoryMatch();
}

function checkMemoryMatch() {
    const firstImage =
        memoryFirstCard.dataset.image;

    const secondImage =
        memorySecondCard.dataset.image;

    if (firstImage === secondImage) {
        memoryFirstCard.classList.add("matched");
        memorySecondCard.classList.add("matched");

        memoryFirstCard = null;
        memorySecondCard = null;

        const remaining =
            document.querySelectorAll(
                ".memory-card:not(.matched)"
            );

        if (remaining.length === 0) {
            completeMemoryLevel();
        }

        return;
    }

    memoryLock = true;

    setTimeout(() => {
        memoryFirstCard.classList.remove("flipped");
        memorySecondCard.classList.remove("flipped");

        memoryFirstCard = null;
        memorySecondCard = null;
        memoryLock = false;
    }, 700);
}

function completeMemoryLevel() {
    memoryLevelComplete = true;

    const oldBest =
        memoryBestMoves[memoryLevel];

    if (
        !oldBest ||
        memoryMoves < oldBest
    ) {
        memoryBestMoves[memoryLevel] =
            memoryMoves;

        localStorage.setItem(
            "memoryBestMoves",
            JSON.stringify(memoryBestMoves)
        );
    }

    if (
        !memoryCompleted.includes(memoryLevel)
    ) {
        memoryCompleted.push(memoryLevel);

        localStorage.setItem(
            "memoryCompletedLevels",
            JSON.stringify(memoryCompleted)
        );
    }

    updateMemoryBest();
    createConfetti();

    const isLastLevel = memoryLevel >= 30;

    showGameCompletePopup(
        "Memory Complete!",
        isLastLevel
            ? `You completed all 30 levels in ${memoryMoves} moves!`
            : `You found all the pairs in ${memoryMoves} moves!`,
        () => {
            showMemoryPlayScreen();
        },
        () => {
            memoryLevel++;

            updateMemoryInfo();
            showMemoryPlayScreen();
        },
        isLastLevel
    );

    memoryNextBtn.disabled = isLastLevel;
}

function updateMemoryBest() {
    memoryBestElement.textContent =
        memoryBestMoves[memoryLevel] || "--";
}

function updateMemoryInfo() {
    memoryLevelElement.textContent =
        memoryLevel;

    updateMemoryBest();
}

function loadMemoryLevel(level) {
    if (
        level < 1 ||
        level > 30
    ) {
        return;
    }

    if (
        level !== 1 &&
        !memoryCompleted.includes(level - 1)
    ) {
        return;
    }

    memoryLevel = level;

    updateMemoryInfo();
    showMemoryPlayScreen();
}

function createMemoryLevelList() {
    memoryLevelList.innerHTML = "";

    for (let i = 1; i <= 30; i++) {
        const button =
            document.createElement("button");

        button.type = "button";
        button.className = "level-item";

        const unlocked =
            i === 1 ||
            memoryCompleted.includes(i - 1);

        const completed =
            memoryCompleted.includes(i);

        if (!unlocked) {
            button.classList.add("locked");
        }

        if (completed) {
            button.classList.add("completed");
        }

        if (i === memoryLevel) {
            button.classList.add("current");
        }

        button.innerHTML = `
            <strong>${i}</strong>
            <span>
                ${
                    completed
                        ? "✓ Done"
                        : unlocked
                            ? "Open"
                            : "Locked"
                }
            </span>
        `;

        if (unlocked) {
            button.addEventListener(
                "click",
                () => {
                    loadMemoryLevel(i);
                    memoryPreviewModal.classList.remove(
                        "show"
                    );
                }
            );
        }

        memoryLevelList.appendChild(button);
    }
}

memoryReplayBtn.addEventListener(
    "click",
    showMemoryPlayScreen
);

memoryNextBtn.addEventListener(
    "click",
    () => {
        if (memoryLevel < 30) {
            memoryLevel++;
            updateMemoryInfo();
            showMemoryPlayScreen();
        }
    }
);

memoryPreviewBtn.addEventListener(
    "click",
    () => {
        createMemoryLevelList();
        memoryPreviewModal.classList.add("show");
    }
);

memoryClosePreview.addEventListener(
    "click",
    () => {
        memoryPreviewModal.classList.remove("show");
    }
);

memoryPreviewModal.addEventListener(
    "click",
    event => {
        if (
            event.target === memoryPreviewModal
        ) {
            memoryPreviewModal.classList.remove(
                "show"
            );
        }
    }
);


let dodgeLevel = 1;
let dodgeScore = 0;
let dodgeLives = 3;
let dodgeGameRunning = false;
let dodgeGameOver = false;
let dodgePlayerX = 50;
let dodgeObjects = [];
let dodgeAnimation = null;
let dodgeSpawnTimer = null;
let dodgeLastTime = 0;

const gameThreeArea =
    document.getElementById("game-three-area");

const gameThreeMessage =
    document.getElementById("game-three-message");

const gameThreeReplay =
    document.getElementById("game-three-replay");

const gameThreeNext =
    document.getElementById("game-three-next");

const gameThreePreview =
    document.getElementById("game-three-preview");

const gameThreePreviewModal =
    document.getElementById("game-three-preview-modal");

const gameThreeClosePreview =
    document.getElementById("game-three-close-preview");

const gameThreeLevelList =
    document.getElementById("game-three-level-list");

function getDodgeSpeed(level) {
    return 100 + level * 8;
}

function getDodgeSpawnTime(level) {
    return Math.max(350, 900 - level * 18);
}

function getDodgeTargetScore(level) {
    return 100 + level * 25;
}

function createDodgeInterface() {
    if (!gameThreeArea) {
        return;
    }

    dodgeGameRunning = false;

    cancelAnimationFrame(dodgeAnimation);
    clearTimeout(dodgeSpawnTimer);

    dodgeObjects.forEach(object => {
        if (object.element) {
            object.element.remove();
        }
    });

    dodgeObjects = [];

    gameThreeArea.innerHTML = "";

    gameThreeArea.style.position = "relative";
    gameThreeArea.style.height = "330px";
    gameThreeArea.style.minHeight = "330px";
    gameThreeArea.style.background = "rgba(0,0,0,0.22)";
    gameThreeArea.style.overflow = "hidden";
    gameThreeArea.style.borderRadius = "12px";

    const topBar =
        document.createElement("div");

    topBar.style.position = "absolute";
    topBar.style.top = "8px";
    topBar.style.left = "8px";
    topBar.style.right = "8px";
    topBar.style.display = "flex";
    topBar.style.justifyContent = "space-between";
    topBar.style.alignItems = "center";
    topBar.style.zIndex = "10";
    topBar.style.fontSize = "11px";
    topBar.style.color = "white";

    topBar.innerHTML = `
        <span id="dodge-score-display">Score: 0</span>
        <span id="dodge-lives-display">❤️❤️❤️</span>
    `;

    gameThreeArea.appendChild(topBar);

    const player =
        document.createElement("img");

    player.id = "dodge-player";
    player.src = dodgeCharacterImage;
    player.alt = "Player";

    player.style.position = "absolute";
    player.style.width = "48px";
    player.style.height = "48px";
    player.style.objectFit = "contain";
    player.style.bottom = "55px";
    player.style.left = "50%";
    player.style.transform = "translateX(-50%)";
    player.style.userSelect = "none";
    player.style.pointerEvents = "none";
    player.style.zIndex = "5";

    gameThreeArea.appendChild(player);

    const start =
        document.createElement("button");

    start.id = "dodge-start-button";
    start.type = "button";
    start.textContent = "▶ Play";

    start.style.position = "absolute";
    start.style.left = "50%";
    start.style.top = "50%";
    start.style.transform =
        "translate(-50%, -50%)";
    start.style.border = "none";
    start.style.borderRadius = "14px";
    start.style.padding = "11px 27px";
    start.style.background = "#8b3f52";
    start.style.color = "white";
    start.style.fontSize = "13px";
    start.style.fontWeight = "600";
    start.style.cursor = "pointer";
    start.style.zIndex = "20";

    gameThreeArea.appendChild(start);

    start.addEventListener(
        "click",
        startDodgeGame
    );

    addDodgeControls();

    updateDodgeStats();
}

function addDodgeControls() {
    const controls =
        document.createElement("div");

    controls.id = "dodge-controls";

    controls.style.position = "absolute";
    controls.style.bottom = "8px";
    controls.style.left = "50%";
    controls.style.transform =
        "translateX(-50%)";
    controls.style.display = "flex";
    controls.style.gap = "8px";
    controls.style.zIndex = "20";

    const left =
        document.createElement("button");

    const right =
        document.createElement("button");

    left.type = "button";
    right.type = "button";

    left.textContent = "◀";
    right.textContent = "▶";

    [left, right].forEach(button => {
        button.style.width = "48px";
        button.style.height = "38px";
        button.style.border = "none";
        button.style.borderRadius = "11px";
        button.style.background =
            "rgba(255,255,255,0.13)";
        button.style.color = "white";
        button.style.fontSize = "16px";
        button.style.cursor = "pointer";
        button.style.touchAction = "none";
    });

    left.addEventListener(
        "pointerdown",
        event => {
            event.preventDefault();

            if (!dodgeGameRunning) {
                return;
            }

            dodgePlayerX -= 7;
            updateDodgePlayer();
        }
    );

    right.addEventListener(
        "pointerdown",
        event => {
            event.preventDefault();

            if (!dodgeGameRunning) {
                return;
            }

            dodgePlayerX += 7;
            updateDodgePlayer();
        }
    );

    controls.appendChild(left);
    controls.appendChild(right);

    gameThreeArea.appendChild(controls);
}

function updateDodgePlayer() {
    dodgePlayerX =
        Math.max(
            8,
            Math.min(
                92,
                dodgePlayerX
            )
        );

    const player =
        document.getElementById(
            "dodge-player"
        );

    if (player) {
        player.style.left =
            dodgePlayerX + "%";
    }
}

document.addEventListener(
    "keydown",
    event => {
        if (!dodgeGameRunning) {
            return;
        }

        if (
            event.key === "ArrowLeft" ||
            event.key.toLowerCase() === "a"
        ) {
            event.preventDefault();

            dodgePlayerX -= 5;
            updateDodgePlayer();
        }

        if (
            event.key === "ArrowRight" ||
            event.key.toLowerCase() === "d"
        ) {
            event.preventDefault();

            dodgePlayerX += 5;
            updateDodgePlayer();
        }
    }
);

function startDodgeGame() {
    dodgeScore = 0;
    dodgeLives = 3;
    dodgeGameRunning = true;
    dodgeGameOver = false;
    dodgePlayerX = 50;

    dodgeObjects.forEach(object => {
        if (object.element) {
            object.element.remove();
        }
    });

    dodgeObjects = [];

    clearTimeout(dodgeSpawnTimer);
    cancelAnimationFrame(dodgeAnimation);

    updateDodgePlayer();
    updateDodgeStats();

    const startButton =
        document.getElementById(
            "dodge-start-button"
        );

    if (startButton) {
        startButton.remove();
    }

    if (gameThreeMessage) {
        gameThreeMessage.textContent =
            "Dodge the falling TNT!";
    }

    dodgeLastTime =
        performance.now();

    spawnDodgeObject();

    dodgeAnimation =
        requestAnimationFrame(
            dodgeLoop
        );
}

function dodgeLoop(time) {
    if (!dodgeGameRunning) {
        return;
    }

    const delta =
        Math.min(
            50,
            time - dodgeLastTime
        );

    dodgeLastTime = time;

    updateDodgeObjects(delta);
    checkDodgeCollisions();

    if (
        dodgeScore >=
        getDodgeTargetScore(dodgeLevel)
    ) {
        completeDodgeLevel();
        return;
    }

    dodgeAnimation =
        requestAnimationFrame(
            dodgeLoop
        );
}

function spawnDodgeObject() {
    if (!dodgeGameRunning) {
        return;
    }

    const object =
        document.createElement("img");

    object.className =
        "dodge-falling-object";

    object.src =
        dodgeObjectImage;

    object.alt =
        "Falling TNT";

    object.style.position =
        "absolute";

    object.style.width =
        "42px";

    object.style.height =
        "42px";

    object.style.objectFit =
        "contain";

    object.style.top =
        "-50px";

    object.style.left =
        "0px";

    object.style.zIndex =
        "4";

    object.style.pointerEvents =
        "none";

    object.style.userSelect =
        "none";

    object.style.display =
        "block";

    gameThreeArea.appendChild(
        object
    );

    const areaWidth =
        gameThreeArea.clientWidth;

    const objectWidth =
        42;

    const maxX =
        Math.max(
            8,
            areaWidth -
                objectWidth -
                8
        );

    const randomX =
        Math.random() *
            (maxX - 8) +
        8;

    object.style.left =
        randomX + "px";

    dodgeObjects.push({
        element: object,
        x: randomX,
        y: -50
    });

    dodgeSpawnTimer =
        setTimeout(
            spawnDodgeObject,
            getDodgeSpawnTime(
                dodgeLevel
            )
        );
}

function updateDodgeObjects(delta) {
    const speed =
        getDodgeSpeed(
            dodgeLevel
        );

    dodgeObjects.forEach(
        object => {
            object.y +=
                speed *
                (delta / 1000);

            object.element.style.top =
                object.y + "px";
        }
    );

    dodgeObjects =
        dodgeObjects.filter(
            object => {
                if (
                    object.y >
                    gameThreeArea.clientHeight
                ) {
                    object.element.remove();

                    dodgeScore += 10;

                    updateDodgeStats();

                    return false;
                }

                return true;
            }
        );
}

function checkDodgeCollisions() {
    const player =
        document.getElementById(
            "dodge-player"
        );

    if (!player) {
        return;
    }

    const playerRect =
        player.getBoundingClientRect();

    dodgeObjects =
        dodgeObjects.filter(
            object => {
                const objectRect =
                    object.element.getBoundingClientRect();

                const hit =
                    playerRect.left <
                        objectRect.right &&
                    playerRect.right >
                        objectRect.left &&
                    playerRect.top <
                        objectRect.bottom &&
                    playerRect.bottom >
                        objectRect.top;

                if (hit) {
                    object.element.remove();

                    dodgeLives--;

                    updateDodgeStats();

                    if (
                        dodgeLives <= 0
                    ) {
                        endDodgeGame();
                    }

                    return false;
                }

                return true;
            }
        );
}

function updateDodgeStats() {
    const scoreDisplay =
        document.getElementById(
            "dodge-score-display"
        );

    const livesDisplay =
        document.getElementById(
            "dodge-lives-display"
        );

    if (scoreDisplay) {
        scoreDisplay.textContent =
            `Score: ${dodgeScore}`;
    }

    if (livesDisplay) {
        livesDisplay.textContent =
            "❤️".repeat(
                Math.max(
                    0,
                    dodgeLives
                )
            );
    }
}

function endDodgeGame() {
    dodgeGameRunning = false;
    dodgeGameOver = true;

    cancelAnimationFrame(
        dodgeAnimation
    );

    clearTimeout(
        dodgeSpawnTimer
    );

    dodgeObjects.forEach(
        object => {
            if (object.element) {
                object.element.remove();
            }
        }
    );

    dodgeObjects = [];

    if (gameThreeMessage) {
        gameThreeMessage.textContent =
            `Game Over! Score: ${dodgeScore}`;
    }

    setTimeout(
        () => {
            createDodgeInterface();
        },
        900
    );
}

function completeDodgeLevel() {
    dodgeGameRunning = false;

    cancelAnimationFrame(
        dodgeAnimation
    );

    clearTimeout(
        dodgeSpawnTimer
    );

    dodgeObjects.forEach(
        object => {
            if (object.element) {
                object.element.remove();
            }
        }
    );

    dodgeObjects = [];

    const oldBest =
        dodgeBestScores[dodgeLevel];

    if (
        !oldBest ||
        dodgeScore > oldBest
    ) {
        dodgeBestScores[dodgeLevel] =
            dodgeScore;

        localStorage.setItem(
            "dodgeBestScores",
            JSON.stringify(dodgeBestScores)
        );
    }

    if (
        !dodgeCompleted.includes(dodgeLevel)
    ) {
        dodgeCompleted.push(dodgeLevel);

        localStorage.setItem(
            "dodgeCompletedLevels",
            JSON.stringify(dodgeCompleted)
        );
    }

    updateDodgeStats();
    createConfetti();

    const isLastLevel = dodgeLevel >= 30;

    showGameCompletePopup(
        "Level Complete!",
        isLastLevel
            ? `You completed all 30 levels with ${dodgeScore} points!`
            : `You survived with ${dodgeScore} points!`,
        () => {
            createDodgeInterface();
        },
        () => {
            dodgeLevel++;

            createDodgeInterface();
        },
        isLastLevel
    );

    if (gameThreeNext) {
        gameThreeNext.disabled = isLastLevel;
    }
}
function loadDodgeLevel(level) {
    if (
        level < 1 ||
        level > 30
    ) {
        return;
    }

    if (
        level !== 1 &&
        !dodgeCompleted.includes(
            level - 1
        )
    ) {
        return;
    }

    dodgeLevel = level;

    if (gameThreeMessage) {
        gameThreeMessage.textContent =
            `Level ${dodgeLevel}`;
    }

    createDodgeInterface();
}

function createDodgeLevelList() {
    if (!gameThreeLevelList) {
        return;
    }

    gameThreeLevelList.innerHTML =
        "";

    for (
        let i = 1;
        i <= 30;
        i++
    ) {
        const button =
            document.createElement(
                "button"
            );

        button.type =
            "button";

        button.className =
            "level-item";

        const unlocked =
            i === 1 ||
            dodgeCompleted.includes(
                i - 1
            );

        const completed =
            dodgeCompleted.includes(
                i
            );

        if (!unlocked) {
            button.classList.add(
                "locked"
            );
        }

        if (completed) {
            button.classList.add(
                "completed"
            );
        }

        if (i === dodgeLevel) {
            button.classList.add(
                "current"
            );
        }

        button.innerHTML = `
            <strong>${i}</strong>
            <span>
                ${
                    completed
                        ? "✓ Done"
                        : unlocked
                            ? "Open"
                            : "Locked"
                }
            </span>
        `;

        if (unlocked) {
            button.addEventListener(
                "click",
                () => {
                    loadDodgeLevel(i);

                    if (
                        gameThreePreviewModal
                    ) {
                        gameThreePreviewModal.classList.remove(
                            "show"
                        );
                    }
                }
            );
        }

        gameThreeLevelList.appendChild(
            button
        );
    }
}

if (gameThreeReplay) {
    gameThreeReplay.addEventListener(
        "click",
        () => {
            createDodgeInterface();
        }
    );
}

if (gameThreeNext) {
    gameThreeNext.addEventListener(
        "click",
        () => {
            if (
                dodgeLevel < 30 &&
                dodgeCompleted.includes(
                    dodgeLevel
                )
            ) {
                dodgeLevel++;

                createDodgeInterface();
            }
        }
    );
}

if (gameThreePreview) {
    gameThreePreview.addEventListener(
        "click",
        () => {
            createDodgeLevelList();

            if (
                gameThreePreviewModal
            ) {
                gameThreePreviewModal.classList.add(
                    "show"
                );
            }
        }
    );
}

if (gameThreeClosePreview) {
    gameThreeClosePreview.addEventListener(
        "click",
        () => {
            if (
                gameThreePreviewModal
            ) {
                gameThreePreviewModal.classList.remove(
                    "show"
                );
            }
        }
    );
}

if (gameThreePreviewModal) {
    gameThreePreviewModal.addEventListener(
        "click",
        event => {
            if (
                event.target ===
                gameThreePreviewModal
            ) {
                gameThreePreviewModal.classList.remove(
                    "show"
                );
            }
        }
    );
}

document.querySelectorAll(".game-back").forEach(button => {
    button.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});


updateMazeInfo();
showMazePlayScreen();

updateMemoryInfo();
showMemoryPlayScreen();

createDodgeInterface();