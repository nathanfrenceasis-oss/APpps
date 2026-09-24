const surprises = [
    {
        type: "letter",
        title: "A Little Letter",
        icon: "💌",
        content: "Hii Ray, i just want to say na napapasaya mo ko and i hope na maging ganto tayo hanggang dulo, also don't forget to smile hehe💗"
    },
    {
        type: "music",
        title: "Music of the Day",
        icon: "🎵",
        song: "Balisong",
        artist: "Rico Blanco",
        image: "image/balisong.jpg",
        music: "song/balisong.mp3",
        content: "You Everything I Wanted."
    },
    {
        type: "letter",
        title: "Little Reminder",
        icon: "🌷",
        content: "I want you to remember something, don't forget to smile and mag pahinga lagi, ayukong napapagod future nurse ko"
    },
    {
        type: "game",
        title: "Reaction Speed Challenge",
        icon: "⚡",
        content: "Tignan natin kung gaano ako kabilis mag selos, este kung gaano kabilis ang reaction time mo! 😉"
    },
    {
        type: "quiz",
        title: "Quick Question!",
        icon: "🤑",
        question: "What do you think I would do first if I suddenly became rich?",
        options: [
            "Lalabas ng ibang bansa",
            "Magdadate tayo",
            "All in sa sugal"
        ],
        correctAnswer: "Matik magdadate tayo, tas sa ibang bansa pa ehehe❤️",
        revealMessage: "Did you guess it right? 👀"
    },

    {
        type: "music",
        title: "Music of the Day",
        icon: "🎵",
        song: "Mahal ang Magmahal",
        artist: "Esremborak",
        image: "image/mqdefault.jpg",
        music: "song/mahalmagmahal.mp3",
        content: "Ipa-pangako sa iyo ang Bituwin"
    },
    
     {
        type: "question",
        title: "Random Question",
        icon: "❓",
        content: "1. What's one thing about me that you didn't expect to like, but eventually did?\n2. Do you think I'm someone you could see staying in your life for a long time? Why?",
        formspreeUrl: "https://formspree.io/f/xoeveljv"
    },

    
   {
        type: "letter",
        title: "A Little Letter",
        icon: "💌",
        content: "I hope na nagustuhan mo 'tong ginawa ko para sayo hehe, ako nalang dapat ha. I love you so much! 💗"
    },
    
   {
        type: "catcher",
        title: "Catch My Love!",
        icon: "💖",
        content: "Tapikin ang mga 💖 at 🌸 sa loob ng 10 seconds. Iwasan ang 💣 kasi bawas puntos 'yan! 😉"
    },
  
    {
        type: "music",
        title: "Music of the Day",
        icon: "🎵",
        song: "Risk it All",
        artist: "Bruno Mars",
        image: "image/brunomars.jpg",
        music: "song/riskitall.mp3",
        content: "I Would run Through a Fire just To be By your Side"
    },

    {
        type: "question",
        title: "Random Question",
        icon: "❓",
        content: "Ano yung pinaka memorable memories na kasma moko?",
        formspreeUrl: "https://formspree.io/f/xoeveljv"
    },
    {
        type: "letter",
        title: "Daily Affirmation",
        icon: "🌸",
        content: "Proud na proud ako sayo sa lahat ng ginagawa mo. Kakayanin natin lahat ng pangarap natin nang magkasama!"
    },

    {
        type: "memory",
        title: "Memory Card Match!",
        icon: "🃏",
        content: "Subukan natin ang memorya mo! Hanapin ang 3 magkaparehong pares ng cards. 😉"
    },

    {
        type: "music",
        title: "Music of the Day",
        icon: "🎵",
        song: "kursunada",
        artist: "Adie",
        image: "image/kursunda.jpg",
        music: "song/kursunada.mp3",
        content: "Pinapanalangin ka palaging mapa-sa'kin Hihintayin ang mga pangitaing"
    },

    {
        type: "question",
        title: "Random Question",
        icon: "❓",
        content: "Ano 'yung pinaka-nagustuhan mong katangian ko noong bago pa lang tayong nagkakakilala?",
        formspreeUrl: "https://formspree.io/f/xoeveljv"
    },
    {
        type: "letter",
        title: "A Little Letter",
        icon: "💌",
        content: "Salamat sa pagiging pahinga ko araw-araw. "
    },

    {
        type: "whack",
        title: "Tap My Love!",
        icon: "🔨",
        content: "Whack-a-Heart style! Tapikin ang mga pusong lumilitaw sa bilog sa loob ng 12 seconds bago sila magtago! 😉"
    },

     {
        type: "letter",
        title: "Final Note",
        icon: "💗",
        content: "Palaging mong tandaan na nandito lang ako para sayo. mahal kita hanggang sa pagtanda!"
    },

    {
        type: "music",
        title: "Music of the Day",
        icon: "🎵",
        song: "Paninindigan kita",
        artist: "Ben&Ben",
        image: "image/paninindigan.jpg",
        music: "song/paninindigankita.mp3",
        content: "Paninindigan kita, ano mang sabihin ng magulong mundo"
    },

    
    {
        type: "wheel",
        title: "Wheel of Dates!",
        icon: "🎡",
        options: [
            "Church Date",
            "Street Food Crawl 🍢",
            "Ice Cream date 🍦",
            "Late Night Walk 🍿",
            "Up Diliman Date",
            "Sa bahay"
        ],
        content: "spin mo ang gulong para malaman natin kung anong uri ng date ang gagawin natin sa susunod!"
    },

    
    {
        type: "scratch",
        title: "Scratch & Reveal!",
        icon: "🎟️",
        secretMessage: "FREE UNLIMITED HUGS & KISSES COUPON 💖 (Valid anytime!)",
        content: "Kuskusin mo ang card gamit ang daliri o cursor mo para ma-reveal ang iyong voucher secret prize!"
    },

   
    {
        type: "coupon",
        title: "Special Love Pass",
        icon: "🎫",
        code: "LOVE-PASS-2026",
        passTitle: "YOU WIN ANY ARGUMENT PASS",
        description: "Ipakita lang ang pass na 'to kapag nagtatampo ka para matic ikaw agad ang panalo! bossing yarn ",
        content: "May nakuha kang special voucher coupon ngayong araw!"
    },

    {
        type: "question",
        title: "Future Bucket List",
        icon: "✈️",
        content: "If we could travel anywhere tomorrow for free, saan mo gustong pumunta kasama ako at bakit?",
        formspreeUrl: "https://formspree.io/f/xoeveljv"
    },
   
  
  

    {
        type: "fortune",
        title: "Love Fortune Cookie",
        icon: "🥠",
        fortuneMessage: "🔮 Sabi ng kapalaran: Tatanda daw tayo ng mag kasama unti-unti natin na aabot ang mga pangarap natin at mamumuhay tayo ng payapa, at ititira kita sa bahay ng walang sigawan 😘",
        content: "Basagin mo ang fortune cookie para malaman ang kapalaran ng love life natin ngayong araw!"
    },



    {
        type: "envelope",
        title: "A Letter For You",
        icon: "✉️",
        letterText: "Gusto ko lang ipaalala sa'yo na sobrang proud ako sa lahat ng pinaghihirapan at sa mga bagay na na achieve mo. Nandito lang ako palagi para sa'yo! hinde kita iiwan loveyouu ❤️",
        content: "Pindutin mo ang sobre para mabuksan ang liham na isinulat ko para sa'yo. (joke hinde sulat yan)"
    },

    {
        type: "bucketlist",
        title: "Our Travel Bucket List",
        icon: "✈️",
        places: [
          "Switzerland 🍓",
            "Boracay Beach Sunset 🌊",
            "Tokyo, Japan (Ito piliin mo please)  ☕",
            "Late Night City Tagaytay Drive 🌃"
        ],
        content: "Alin sa mga 'to ang gusto mong unahin nating puntahan sa susunod?"
    },

        {
        type: "question",
        title: "Random Question",
        icon: "❓",
        content: "Kung totoo man ang sinabi mona na i-iba sa lahat, pwede mo ba sabihin kung bakit? (curios lang)",
        formspreeUrl: "https://formspree.io/f/xoeveljv"
    },

        {
        type: "music",
        title: "Music of the Day",
        icon: "🎵",
        song: "Ikaw at Ako",
        artist: "TJ Monterde",
        image: "image/ikawataako.jpg",
        music: "song/ikawatako.mp3",
        content: "Ikaw at ako, 'Di na Muling magkakalayo"
    },
 
        {
        type: "letter",
        title: "A Little Letter",
        icon: "💌",
        content: "Kung umabot ka hanggang dito, thankyou! ang gaan sa pakiramdam kasi na aapreciate mo yung ginawa ko para sayo, ngayon lang ako gumawa ng ganto para sa nililigawan ko, wala eh tinatawag mo na kasi akong asawa AHHAHA, wala na tayo magagawa, ILOVEYOU Ray.",
    },


    {
        type: "quiz",
        title: "The Grand Love Quiz",
        icon: "🏆",
        content: "Sagutin ang final quiz para matapos ang 30-day challenge! 🎉",

        question: "After all these 30 days, what do you think is my favorite thing about you?",
        options: [
        "Your smile",
        "Your personality",
        "Everything about you"
    ],
    correctAnswer: "Everything about you ❤️",
    revealMessage: "You made it through all 30 days! 🎉❤️"
    }
];

let selectedDay = 1;
let challengeTimeout = null;
let startTime = 0;
let gameState = "IDLE"; 

const today = new Date();
today.setHours(0, 0, 0, 0);

let startDate = localStorage.getItem("startDate");

if (!startDate) {
    startDate = today.getTime();
    localStorage.setItem("startDate", startDate);
}

function getDayNumber() {
    const difference = today.getTime() - Number(startDate);
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    return days + 1;
}

function updateDayNumber() {
    selectedDay = getDayNumber();
    setFrontCardDay(selectedDay);
}

function setFrontCardDay(dayNum) {
    selectedDay = dayNum;

    const badge = document.getElementById("front-day-badge");
    if (badge) {
        badge.textContent = "✨ Day " + selectedDay + " ✨";
    }

    const frontCard = document.getElementById("front-card");
    const revealedCard = document.getElementById("revealed-card");

    if (frontCard && revealedCard) {
        frontCard.classList.remove("hidden");
        revealedCard.classList.add("hidden");

        frontCard.classList.remove("animate-reveal");
        void frontCard.offsetWidth;
        frontCard.classList.add("animate-reveal");
    }
}

function goBackToFront() {
    const frontCard = document.getElementById("front-card");
    const revealedCard = document.getElementById("revealed-card");

    if (frontCard && revealedCard) {
        revealedCard.classList.add("hidden");
        frontCard.classList.remove("hidden");
    }

    const audio = document.querySelector("#revealed-content audio");
    if (audio) {
        audio.pause();
    }
}

function revealSurprise() {
    const surprise = surprises[selectedDay - 1];
    const revealedCard = document.getElementById("revealed-card");
    const frontCard = document.getElementById("front-card");

    if (frontCard && revealedCard) {
        frontCard.classList.add("hidden");

        revealedCard.classList.remove("hidden");
        revealedCard.classList.remove("animate-reveal");
        void revealedCard.offsetWidth;
        revealedCard.classList.add("animate-reveal");
    }

    renderSurpriseContent(surprise, selectedDay);
    createConfetti();
}

function renderSurpriseContent(surprise, dayNum) {
    const contentDiv = document.getElementById("revealed-content");

    contentDiv.classList.remove("animate-content");
    void contentDiv.offsetWidth;
    contentDiv.classList.add("animate-content");

    if (challengeTimeout) clearTimeout(challengeTimeout);

    if (!surprise || !surprise.type) {
        document.getElementById("revealed-icon").textContent = "🔒";
        document.getElementById("revealed-title").textContent = "Coming Soon";
        document.getElementById("revealed-badge").textContent = " Day " + dayNum + " ";
        contentDiv.innerHTML = "<p>Wala pang surprise para sa araw na ito!</p>";
        return;
    }

    document.getElementById("revealed-icon").textContent = surprise.icon;
    document.getElementById("revealed-title").textContent = surprise.title;
    document.getElementById("revealed-badge").textContent = " Day " + dayNum + " ";

    if (surprise.type === "game" || surprise.type === "challenge") {
        gameState = "IDLE";

        contentDiv.innerHTML = `
            <div class="challenge-container">
                <p style="font-size: 14px; color: #581825; font-weight: 500; margin: 0 0 8px 0;">
                    ${surprise.content}
                </p>
                <p style="font-size: 12px; color: #777; margin: 0 0 12px 0;">
                    Tap the button when it turns green
                </p>
                <button id="challenge-btn" class="challenge-btn ready">
                    START 
                </button>
                <div id="challenge-result" class="challenge-result"></div>
            </div>
        `;

        const btn = document.getElementById("challenge-btn");
        const resultDiv = document.getElementById("challenge-result");

        btn.onclick = function () {
            if (gameState === "IDLE" || gameState === "FINISHED") {
                gameState = "WAITING";
                btn.textContent = "WAIT... 🔴";
                btn.className = "challenge-btn waiting";
                resultDiv.textContent = "";

                const randomDelay = Math.floor(Math.random() * 2500) + 2000;

                challengeTimeout = setTimeout(() => {
                    gameState = "READY";
                    startTime = Date.now();
                    btn.textContent = "TAP NOW!";
                    btn.className = "challenge-btn go";
                }, randomDelay);

            } else if (gameState === "WAITING") {
                clearTimeout(challengeTimeout);
                gameState = "FINISHED";
                btn.textContent = "TRY AGAIN 🔄";
                btn.className = "challenge-btn ready";
                resultDiv.innerHTML = "<span style='color: #e63946;'>❌ Enggkkk excited yarn? Wait mo mag green buseng </span>";

            } else if (gameState === "READY") {
                const reactionTime = ((Date.now() - startTime) / 1000).toFixed(2);
                gameState = "FINISHED";
                btn.textContent = "PLAY AGAIN 🔄";
                btn.className = "challenge-btn ready";

                let feedbackMessage = "";
                if (reactionTime < 0.45) {
                    feedbackMessage = " Eyyy ang bilis nya, story mona para mapa bilib mo kami";
                } else if (reactionTime <= 0.60) {
                    feedbackMessage = " Nice ang lupett, pwede nang mangarap!";
                } else {
                    feedbackMessage = " HAHAHA muntik na! Antok ka pa ata AHAHAH!";
                }

                resultDiv.innerHTML = `
                    <div style="font-size: 22px; font-weight: 700; color: #581825; margin-top: 8px;">${reactionTime} seconds! ⚡</div>
                    <div style="margin-top: 4px; font-weight: 600;">${feedbackMessage}</div>
                `;

                createConfetti();
            }
        };

    } else if (surprise.type === "music") {
        contentDiv.innerHTML = `
            <div class="music-player">
                <img
                    src="${surprise.image}"
                    class="music-cover"
                    alt="${surprise.song}"
                >
                <div class="music-info">
                    <h4>${surprise.song}</h4>
                    <p>${surprise.artist}</p>
                </div>
                <input
                    type="range"
                    class="progress-bar"
                    value="0"
                    min="0"
                    max="100"
                >
                <div class="music-controls">
                    <button class="prev-btn">⏮</button>
                    <button class="play-btn">▶</button>
                    <button class="next-btn">⏭</button>
                </div>
                <audio class="audio">
                    <source src="${surprise.music}" type="audio/mpeg">
                </audio>
                <p style="margin-top:16px; font-style:italic; color:#581825; font-size:13.5px; line-height:1.5;">
                    "${surprise.content}"
                </p>
            </div>
        `;

        const audio = contentDiv.querySelector(".audio");
        const playBtn = contentDiv.querySelector(".play-btn");
        const progressBar = contentDiv.querySelector(".progress-bar");

playBtn.onclick = function () {
    if (audio.paused) {
        audio.play();
        playBtn.classList.add("playing");
    } else {
        audio.pause();
        playBtn.classList.remove("playing");
    }
};

        audio.ontimeupdate = function () {
            if (audio.duration) {
                progressBar.value = (audio.currentTime / audio.duration) * 100;
            }
        };

        progressBar.oninput = function () {
            if (audio.duration) {
                audio.currentTime = (progressBar.value / 100) * audio.duration;
            }
        };

   audio.onended = function () {
    playBtn.classList.remove("playing");
    progressBar.value = 0;
};
        
    } else if (surprise.type === "quiz") {
        contentDiv.innerHTML = `
            <div class="quiz-container">
                <p class="quiz-question">${surprise.question}</p>
                <div class="quiz-options">
                    ${surprise.options.map((option, index) => `
                        <button class="quiz-opt-btn" onclick="handleQuizChoice(${index}, '${surprise.correctAnswer}', '${surprise.revealMessage}')">
                            ${option}
                        </button>
                    `).join('')}
                </div>
                <div id="quiz-result" class="quiz-result hidden"></div>
            </div>
        `;

    } else if (surprise.type === "question") {
        const savedAnswer = localStorage.getItem(`answer_day_${dayNum}`);

        contentDiv.innerHTML = `
            <div class="question-container">
                <p class="question-text">
                    "${surprise.content}"
                </p>
                
                <textarea 
                    id="user-answer-input" 
                    class="question-input"
                    placeholder="Type your answer here..." 
                    rows="3"
                >${savedAnswer ? savedAnswer : ""}</textarea>

                <button id="send-answer-btn" class="challenge-btn ready" style="padding: 12px; font-size: 15px;">
                     Send Answer
                </button>

                <div id="answer-status" class="answer-status"></div>
            </div>
        `;

        const sendBtn = document.getElementById("send-answer-btn");
        const answerInput = document.getElementById("user-answer-input");
        const statusDiv = document.getElementById("answer-status");

        sendBtn.onclick = function () {
            const answerText = answerInput.value.trim();

            if (!answerText) {
                alert("Sulat ka muna ng sagot mo hehe");
                return;
            }

            localStorage.setItem(`answer_day_${dayNum}`, answerText);

            sendBtn.textContent = "Sending... ⏳";
            sendBtn.disabled = true;

            fetch(surprise.formspreeUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    Day: dayNum,
                    Question: surprise.content,
                    Answer: answerText
                })
            })
            .then(res => {
                sendBtn.textContent =  "Sent!";
                sendBtn.disabled = false;
                statusDiv.textContent = "Nase-send na sa akin! Thank you";
                createConfetti();
            })
            .catch(err => {
                sendBtn.textContent = " Send Answer";
                sendBtn.disabled = false;
                statusDiv.textContent = "Na-save na ang sagot mo! ";
                createConfetti();
            });
        };

        } else if (surprise.type === "catcher") {
        contentDiv.innerHTML = `
            <div class="catcher-container" style="text-align: center; position: relative;">
                <p style="font-size: 13px; color: #581825; margin: 0 0 8px 0; font-weight: 500;">
                    ${surprise.content}
                </p>
                
                <div style="display: flex; justify-content: space-around; font-weight: 700; color: #581825; font-size: 14px; margin-bottom: 8px;">
                    <div>Score: <span id="catcher-score">0</span></div>
                    <div>Time: <span id="catcher-timer">10</span>s</div>
                </div>

                <div id="game-area" style="width: 100%; height: 220px; background: #fff0f3; border: 2px dashed #ff4d6d; border-radius: 12px; position: relative; overflow: hidden; touch-action: manipulation;">
                    <div id="catcher-start-overlay" style="position: absolute; inset: 0; background: rgba(255,255,255,0.85); display: flex; align-items: center; justify-content: center; z-index: 10;">
                        <button id="start-catcher-btn" class="challenge-btn ready" style="padding: 10px 20px; font-size: 14px;">
                            START GAME 
                        </button>
                    </div>
                </div>

                <div id="catcher-result" style="margin-top: 8px; font-weight: 700; font-size: 14px; color: #581825; min-height: 24px;"></div>
            </div>
        `;

        const gameArea = document.getElementById("game-area");
        const startBtn = document.getElementById("start-catcher-btn");
        const overlay = document.getElementById("catcher-start-overlay");
        const scoreDisplay = document.getElementById("catcher-score");
        const timerDisplay = document.getElementById("catcher-timer");
        const resultDiv = document.getElementById("catcher-result");

        let score = 0;
        let timeLeft = 10;
        let gameInterval = null;
        let spawnInterval = null;

        startBtn.onclick = function () {
            overlay.style.display = "none";
            score = 0;
            timeLeft = 10;
            scoreDisplay.textContent = score;
            timerDisplay.textContent = timeLeft;
            resultDiv.textContent = "";

           
            gameInterval = setInterval(() => {
                timeLeft--;
                timerDisplay.textContent = timeLeft;

                if (timeLeft <= 0) {
                    clearInterval(gameInterval);
                    clearInterval(spawnInterval);
                    gameArea.querySelectorAll(".falling-item").forEach(item => item.remove());
                    overlay.style.display = "flex";
                    startBtn.textContent = "PLAY AGAIN 🔄";

                    let feedback = "";
                    if (score >= 15) {
                        feedback = " bangiss, pwede na mag trabaho! ";
                        createConfetti();
                    } else if (score >= 8) {
                        feedback = " Eyyy pwede na! Nakuha mo halos lahat!, agnass 🌸";
                        createConfetti();
                    } else {
                        feedback = " Muntik na! Mabagal yata daliri ngayon ah? HAHAHA!";
                    }

                    resultDiv.innerHTML = `Game Over! Final Score: <b>${score}</b><br><span style="font-size: 12px; font-weight: 500;">${feedback}</span>`;
                }
            }, 1000);


            spawnInterval = setInterval(() => {
                if (timeLeft <= 0) return;

                const item = document.createElement("div");
                item.className = "falling-item";
                

                const isBomb = Math.random() < 0.2;
                const items = ["💖", "🌸", "🍬", "💗"];
                const icon = isBomb ? "💣" : items[Math.floor(Math.random() * items.length)];

                item.textContent = icon;
                item.style.position = "absolute";
                item.style.fontSize = "26px";
                item.style.cursor = "pointer";
                item.style.userSelect = "none";
                item.style.left = Math.random() * (gameArea.clientWidth - 35) + "px";
                item.style.top = "-30px";
                item.style.transition = "top 1.8s linear, opacity 0.2s";

                gameArea.appendChild(item);


                setTimeout(() => {
                    item.style.top = (gameArea.clientHeight - 30) + "px";
                }, 50);


                item.onclick = function (e) {
                    e.stopPropagation();
                    if (isBomb) {
                        score = Math.max(0, score - 3);
                        resultDiv.innerHTML = "<span style='color:#e63946;'>💣 Aww nagselos! -3 points!</span>";
                    } else {
                        score += 1;
                    }
                    scoreDisplay.textContent = score;
                    item.remove();
                };

                
                setTimeout(() => {
                    if (item.parentNode) item.remove();
                }, 1850);

            }, 450);
        };

        } else if (surprise.type === "memory") {
        contentDiv.innerHTML = `
            <div class="memory-container" style="text-align: center;">
                <p style="font-size: 13px; color: #581825; margin: 0 0 10px 0; font-weight: 500;">
                    ${surprise.content}
                </p>
                
                <div class="memory-stats">
                    <div>Flips: <span id="memory-flips">0</span></div>
                    <div>Pairs: <span id="memory-pairs">0</span>/3</div>
                </div>

                <div id="memory-grid" class="memory-grid"></div>

                <div id="memory-result" class="memory-result"></div>
            </div>
        `;

        const grid = document.getElementById("memory-grid");
        const flipsDisplay = document.getElementById("memory-flips");
        const pairsDisplay = document.getElementById("memory-pairs");
        const resultDiv = document.getElementById("memory-result");

        const icons = ["💖", "🌸", "🍦"];
        // I-duplicate ang icons para maging 3 pairs (6 cards) at i-shuffle
        let cardsData = [...icons, ...icons].sort(() => Math.random() - 0.5);

        let flippedCards = [];
        let matchedPairs = 0;
        let totalFlips = 0;
        let isLockGrid = false;

        cardsData.forEach((icon, index) => {
            const card = document.createElement("div");
            card.className = "memory-card";
            card.dataset.icon = icon;
            card.dataset.index = index;

            card.innerHTML = `
                <div class="memory-card-inner">
                    <div class="memory-card-front">❓</div>
                    <div class="memory-card-back">${icon}</div>
                </div>
            `;

            card.onclick = function () {
                if (isLockGrid || card.classList.contains("flipped") || card.classList.contains("matched")) {
                    return;
                }

                card.classList.add("flipped");
                flippedCards.push(card);

                if (flippedCards.length === 2) {
                    totalFlips++;
                    flipsDisplay.textContent = totalFlips;
                    isLockGrid = true;

                    const [card1, card2] = flippedCards;

                    if (card1.dataset.icon === card2.dataset.icon) {
                        // MATCH!
                        card1.classList.add("matched");
                        card2.classList.add("matched");
                        matchedPairs++;
                        pairsDisplay.textContent = matchedPairs;
                        flippedCards = [];
                        isLockGrid = false;

                        if (matchedPairs === 3) {
                            let feedback = totalFlips <= 4 
                                ? "PERFECT MEMORY! Sisiw lang sa'yo ah! ❤️" 
                                : " Ang galing! Nahulaan mo lahat ng pares! 🌸";

                            resultDiv.innerHTML = `
                                <div style="font-size: 15px; font-weight: 700; color: #2b9348; margin-top: 8px;">
                                     Panalo ka!
                                </div>
                                <div style="font-size: 12px; margin-top: 4px;">${feedback}</div>
                            `;
                            createConfetti();
                        }
                    } else {
                        // Mismatch - itataob ulit pagkaraan ng 0.8s
                        setTimeout(() => {
                            card1.classList.remove("flipped");
                            card2.classList.remove("flipped");
                            flippedCards = [];
                            isLockGrid = false;
                        }, 800);
                    }
                }
            };

            grid.appendChild(card);
        });


        } else if (surprise.type === "whack") {
        contentDiv.innerHTML = `
            <div class="whack-container" style="text-align: center;">
                <p style="font-size: 13px; color: #581825; margin: 0 0 8px 0; font-weight: 500;">
                    ${surprise.content}
                </p>

                <div class="whack-stats">
                    <div>Score: <span id="whack-score">0</span></div>
                    <div>Time: <span id="whack-timer">12</span>s</div>
                </div>

                <div id="whack-grid" class="whack-grid">
                    <div class="whack-hole" data-index="0"><span class="whack-item"></span></div>
                    <div class="whack-hole" data-index="1"><span class="whack-item"></span></div>
                    <div class="whack-hole" data-index="2"><span class="whack-item"></span></div>
                    <div class="whack-hole" data-index="3"><span class="whack-item"></span></div>
                    <div class="whack-hole" data-index="4"><span class="whack-item"></span></div>
                    <div class="whack-hole" data-index="5"><span class="whack-item"></span></div>
                    
                    <div id="whack-overlay" class="whack-overlay">
                        <button id="start-whack-btn" class="challenge-btn ready" style="padding: 10px 20px; font-size: 14px;">
                            START GAME 
                        </button>
                    </div>
                </div>

                <div id="whack-result" class="whack-result"></div>
            </div>
        `;

        const scoreDisplay = document.getElementById("whack-score");
        const timerDisplay = document.getElementById("whack-timer");
        const overlay = document.getElementById("whack-overlay");
        const startBtn = document.getElementById("start-whack-btn");
        const resultDiv = document.getElementById("whack-result");
        const holes = document.querySelectorAll(".whack-hole");

        let score = 0;
        let timeLeft = 12;
        let gameTimer = null;
        let popTimer = null;
        let lastHole = -1;

        const emojis = ["💖", "🌸", "🙈", "💗", "🍬"];

        function getRandomHole() {
            let idx = Math.floor(Math.random() * holes.length);
            while (idx === lastHole) {
                idx = Math.floor(Math.random() * holes.length);
            }
            lastHole = idx;
            return holes[idx];
        }

        function popEmoji() {
            if (timeLeft <= 0) return;

            const hole = getRandomHole();
            const item = hole.querySelector(".whack-item");
            const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

            item.textContent = randomEmoji;
            hole.classList.add("up");

          
            setTimeout(() => {
                hole.classList.remove("up");
            }, 750);
        }

        startBtn.onclick = function () {
            overlay.style.display = "none";
            score = 0;
            timeLeft = 12;
            scoreDisplay.textContent = score;
            timerDisplay.textContent = timeLeft;
            resultDiv.textContent = "";

          
            gameTimer = setInterval(() => {
                timeLeft--;
                timerDisplay.textContent = timeLeft;

                if (timeLeft <= 0) {
                    clearInterval(gameTimer);
                    clearInterval(popTimer);
                    holes.forEach(h => h.classList.remove("up"));
                    overlay.style.display = "flex";
                    startBtn.textContent = "PLAY AGAIN 🔄";

                    let feedback = "";
                    if (score >= 12) {
                        feedback = " SOBRANG BILIS! Ang talas ng reflexes mo madam! ";
                        createConfetti();
                    } else if (score >= 6) {
                        feedback = " Magaling! Marami ka ring natapik! 🌸";
                        createConfetti();
                    } else {
                        feedback = " Bitin! Bagalan mo mag-isip, bilisan mo mag-tap! HAHAHA!";
                    }

                    resultDiv.innerHTML = `Game Over! Score: <b>${score}</b><br><span style="font-size: 12px; font-weight: 500;">${feedback}</span>`;
                }
            }, 1000);

          
            popTimer = setInterval(popEmoji, 650);
        };

        
        holes.forEach(hole => {
            hole.onclick = function (e) {
                if (!hole.classList.contains("up")) return;

                score++;
                scoreDisplay.textContent = score;
                hole.classList.remove("up");

               
                const item = hole.querySelector(".whack-item");
                item.style.transform = "scale(1.3)";
                setTimeout(() => item.style.transform = "", 100);
            };
        });


        } else if (surprise.type === "wheel") {
        contentDiv.innerHTML = `
            <div class="wheel-container" style="text-align: center; position: relative;">
                <p style="font-size: 13px; color: #581825; margin: 0 0 10px 0; font-weight: 500;">
                    ${surprise.content}
                </p>

                <div class="wheel-wrapper" style="position: relative; display: inline-block;">
                    <!-- Pointer / Arrow sa Taas -->
                    <div class="wheel-pointer">▼</div>
                    <!-- Wheel Canvas -->
                    <canvas id="wheel-canvas" width="260" height="260"></canvas>
                </div>

                <div style="margin-top: 12px;">
                    <button id="spin-wheel-btn" class="challenge-btn ready" style="padding: 10px 24px; font-size: 14px;">
                        SPIN THE WHEEL 🎡
                    </button>
                </div>

                <div id="wheel-result" class="wheel-result"></div>
            </div>
        `;

        const canvas = document.getElementById("wheel-canvas");
        const ctx = canvas.getContext("2d");
        const spinBtn = document.getElementById("spin-wheel-btn");
        const resultDiv = document.getElementById("wheel-result");

        const options = surprise.options || [
            "Samgyupsal Date 🥩",
            "Street Food Crawl 🍢",
            "Ice Cream Date 🍦",
            "Movie Night 🍿",
            "Coffee & Talk ☕",
            "Kahit Ano Bastat Kasama Ka ❤️"
        ];

        const numOptions = options.length;
        const arcSize = (2 * Math.PI) / numOptions;
        const colors = ["#ff4d6d", "#ff758f", "#ff8fab", "#ffb3c1", "#ffccd5", "#ffe3e8"];

        let currentAngle = 0;
        let isSpinning = false;

        
        function drawWheel() {
            const radius = canvas.width / 2;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < numOptions; i++) {
                const angle = currentAngle + i * arcSize;

                
                ctx.beginPath();
                ctx.fillStyle = colors[i % colors.length];
                ctx.moveTo(radius, radius);
                ctx.arc(radius, radius, radius - 5, angle, angle + arcSize);
                ctx.lineTo(radius, radius);
                ctx.fill();
                ctx.lineWidth = 2;
                ctx.strokeStyle = "#ffffff";
                ctx.stroke();

               
                ctx.save();
                ctx.translate(radius, radius);
                ctx.rotate(angle + arcSize / 2);
                ctx.textAlign = "right";
                ctx.fillStyle = "#581825";
                ctx.font = "bold 11px Sans-Serif";

                
                let text = options[i];
                if (text.length > 18) text = text.substring(0, 16) + "..";

                ctx.fillText(text, radius - 15, 4);
                ctx.restore();
            }

           
            ctx.beginPath();
            ctx.arc(radius, radius, 20, 0, 2 * Math.PI);
            ctx.fillStyle = "#ffffff";
            ctx.fill();
            ctx.lineWidth = 3;
            ctx.strokeStyle = "#ff4d6d";
            ctx.stroke();
        }

        drawWheel();

        spinBtn.onclick = function () {
            if (isSpinning) return;

            isSpinning = true;
            spinBtn.disabled = true;
            resultDiv.textContent = "";

            
            const spinDegrees = Math.floor(Math.random() * 360) + 1800;
            const spinRadians = (spinDegrees * Math.PI) / 180;
            
            const duration = 4000; 
            const startTimestamp = performance.now();
            const initialAngle = currentAngle;

            function animateSpin(now) {
                const elapsed = now - startTimestamp;
                const progress = Math.min(elapsed / duration, 1);

               
                const easeOut = 1 - Math.pow(1 - progress, 3);

                currentAngle = initialAngle + spinRadians * easeOut;
                drawWheel();

                if (progress < 1) {
                    requestAnimationFrame(animateSpin);
                } else {
                    isSpinning = false;
                    spinBtn.disabled = false;
                    spinBtn.textContent = "SPIN AGAIN 🔄";

                    const actualAngle = currentAngle % (2 * Math.PI);
                    
                    let relativeAngle = (1.5 * Math.PI - actualAngle) % (2 * Math.PI);
                    if (relativeAngle < 0) {
                        relativeAngle += 2 * Math.PI;
                    }

                    const winningIndex = Math.floor(relativeAngle / arcSize);
                    const selectedOption = options[winningIndex];

                    resultDiv.innerHTML = `
                        <div style="font-size: 16px; font-weight: 700; color: #ff4d6d; margin-top: 10px;">
                            🎯 Resulta: ${selectedOption}
                        </div>
                        <div style="font-size: 12px; font-weight: 600; color: #581825; margin-top: 4px;">
                            Matic dapat matuloy 'to ha! Walang bawi! 😜❤️
                        </div>
                    `;

                    if (typeof createConfetti === "function") {
                        createConfetti();
                    }
                }
            }

            requestAnimationFrame(animateSpin);
        };
 
        } else if (surprise.type === "scratch") {
        contentDiv.innerHTML = `
            <div class="scratch-container" style="text-align: center;">
                <p style="font-size: 13px; color: #581825; margin: 0 0 10px 0; font-weight: 500;">
                    ${surprise.content}
                </p>

                <div class="scratch-card-wrapper">
                    <!-- Secret Message Layer (Nakatago sa ilalim) -->
                    <div class="scratch-secret-layer">
                        <div style="font-size: 28px; margin-bottom: 4px;">🎟️</div>
                        <div class="scratch-secret-title">SPECIAL VOUCHER</div>
                        <div class="scratch-secret-text">${surprise.secretMessage || "FREE UNLIMITED HUGS & KISSES COUPON 💖"}</div>
                    </div>

                    <!-- Scratch Canvas Cover (Ikus-kos layer) -->
                    <canvas id="scratch-canvas" width="260" height="150"></canvas>
                </div>

                <div id="scratch-result" class="scratch-result"></div>
            </div>
        `;

        const canvas = document.getElementById("scratch-canvas");
        const ctx = canvas.getContext("2d");
        const resultDiv = document.getElementById("scratch-result");

        
        function initScratchCard() {
            ctx.fillStyle = "#ff758f";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

           
            ctx.fillStyle = "#ffffff";
            ctx.font = "bold 14px Sans-Serif";
            ctx.textAlign = "center";
            ctx.fillText("✨ KUSKUSIN DITO ✨", canvas.width / 2, canvas.height / 2 + 5);
        }

        initScratchCard();

        let isScratching = false;
        let revealedPixels = 0;

        function getPos(e) {
            const rect = canvas.getBoundingClientRect();
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            return {
                x: clientX - rect.left,
                y: clientY - rect.top
            };
        }

        function scratch(e) {
            if (!isScratching) return;
            e.preventDefault();

            const pos = getPos(e);
            ctx.globalCompositeOperation = "destination-out";
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, 16, 0, Math.PI * 2);
            ctx.fill();

            checkRevealPercentage();
        }

        function checkRevealPercentage() {
           
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const pixels = imageData.data;
            let clearPixels = 0;

            for (let i = 3; i < pixels.length; i += 4) {
                if (pixels[i] === 0) clearPixels++;
            }

            const percentage = (clearPixels / (pixels.length / 4)) * 100;

            if (percentage > 45 && !canvas.classList.contains("cleared")) {
                canvas.classList.add("cleared");
                canvas.style.transition = "opacity 0.5s ease";
                canvas.style.opacity = "0";
                setTimeout(() => canvas.style.display = "none", 500);

                resultDiv.innerHTML = `
                    <div style="font-size: 15px; font-weight: 700; color: #2b9348; margin-top: 10px;">
                        🎉 Na-reveal mo na ang voucher!
                    </div>
                    <div style="font-size: 12px; font-weight: 600; color: #581825; margin-top: 2px;">
                        I-screenshot mo ito para ma-redeem mo sakin anytime! 😘
                    </div>
                `;

                if (typeof createConfetti === "function") {
                    createConfetti();
                }
            }
        }

      
        canvas.addEventListener("mousedown", (e) => { isScratching = true; scratch(e); });
        canvas.addEventListener("mousemove", scratch);
        window.addEventListener("mouseup", () => { isScratching = false; });

        
        canvas.addEventListener("touchstart", (e) => { isScratching = true; scratch(e); }, { passive: false });
        canvas.addEventListener("touchmove", scratch, { passive: false });
        window.addEventListener("touchend", () => { isScratching = false; });
      
   
        } else if (surprise.type === "coupon") {
        contentDiv.innerHTML = `
            <div class="coupon-container" style="text-align: center;">
                <p style="font-size: 13px; color: #581825; margin: 0 0 10px 0; font-weight: 500;">
                    ${surprise.content}
                </p>

                <!-- Coupon Pass Card -->
                <div class="coupon-card">
                    <div class="coupon-header">
                        <span>🎟️ OFFICIAL LOVE PASS</span>
                        <span class="coupon-code">${surprise.code || "LOVE-PASS-2026"}</span>
                    </div>

                    <div class="coupon-body">
                        <div class="coupon-title">${surprise.passTitle || "YOU WIN ANY ARGUMENT PASS"}</div>
                        <div class="coupon-desc">${surprise.description || "Ipakita lang ang pass na 'to kapag nagtatampo ka para matmatic ikaw agad ang panalo! 😉"}</div>
                    </div>

                    <div class="coupon-footer">
                        <div class="coupon-badge">VALID ANYTIME • NO EXPIRATION</div>
                        <button id="redeem-coupon-btn" class="challenge-btn ready" style="padding: 8px 18px; font-size: 13px; margin-top: 8px;">
                            USE COUPON NOW 💖
                        </button>
                    </div>
                </div>

                <div id="coupon-result" class="coupon-result"></div>
            </div>
        `;

        const redeemBtn = document.getElementById("redeem-coupon-btn");
        const resultDiv = document.getElementById("coupon-result");

        redeemBtn.onclick = function () {
            if (redeemBtn.classList.contains("claimed")) return;

            redeemBtn.classList.add("claimed");
            redeemBtn.style.background = "#2b9348";
            redeemBtn.style.borderColor = "#2b9348";
            redeemBtn.textContent = "COUPON REDEEMED! ✅";

            resultDiv.innerHTML = `
                <div style="font-size: 15px; font-weight: 700; color: #2b9348; margin-top: 10px;">
                    🎉 Na-claim mo na ang Special Pass mo!
                </div>
                <div style="font-size: 12px; font-weight: 600; color: #581825; margin-top: 2px;">
                    Naka-record na 'to saken! I-screenshot mo na para may ebidensya ka! 😘(Secret  mona kong pano ko nalalaman)
                </div>
            `;

            if (typeof createConfetti === "function") {
                createConfetti();
            }
        };

   
       

        } else if (surprise.type === "fortune") {
        contentDiv.innerHTML = `
            <div class="fortune-container" style="text-align: center;">
                <p style="font-size: 13px; color: #581825; margin: 0 0 10px 0; font-weight: 500;">
                    ${surprise.content}
                </p>

                <div class="fortune-cookie-wrapper">
                    <div id="fortune-cookie-icon" class="fortune-cookie-icon">🥠</div>
                    
                  
                    <div id="fortune-paper" class="fortune-paper">
                        <div style="font-size: 11px; font-weight: 800; color: #ff4d6d; letter-spacing: 1px; margin-bottom: 4px;">
                            🔮 YOUR LOVE FORTUNE
                        </div>
                        <div class="fortune-text">
                            ${surprise.fortuneMessage || "Sabi ng kapalaran: Tatanda daw tayo ng mag kasama unti-unti natin na aabot ang mga pangarap natin at mamumuhay tayo ng payapa, at ititira kita sa bahay ng walang sigawan 😘"}
                        </div>
                    </div>
                </div>

                <div style="margin-top: 14px;">
                    <button id="crack-cookie-btn" class="challenge-btn ready" style="padding: 10px 22px; font-size: 14px;">
                        CRACK THE COOKIE 🥠
                    </button>
                </div>

                <div id="fortune-result" class="fortune-result"></div>
            </div>
        `;

        const cookieIcon = document.getElementById("fortune-cookie-icon");
        const fortunePaper = document.getElementById("fortune-paper");
        const crackBtn = document.getElementById("crack-cookie-btn");
        const resultDiv = document.getElementById("fortune-result");

        let isCracked = false;

        crackBtn.onclick = function () {
            if (isCracked) return;
            isCracked = true;


            cookieIcon.classList.add("cracking");

            setTimeout(() => {
               
                cookieIcon.style.display = "none";
                fortunePaper.classList.add("reveal");

                crackBtn.style.display = "none";

                resultDiv.innerHTML = `
                    <div style="font-size: 15px; font-weight: 700; color: #2b9348; margin-top: 10px;">
                        ✨ Na-unlock mo na ang kapalaran mo!
                    </div>
                  
                `;

                if (typeof createConfetti === "function") {
                    createConfetti();
                }
            }, 800);
        };

        } else if (surprise.type === "envelope") {
        contentDiv.innerHTML = `
            <div class="envelope-container" style="text-align: center;">
                <p style="font-size: 13px; color: #581825; margin: 0 0 10px 0; font-weight: 500;">
                    ${surprise.content}
                </p>

                <div class="envelope-wrapper" id="envelope-wrapper">
                    <!-- Sobre Container -->
                    <div class="envelope" id="envelope">
                        <div class="envelope-flap"></div>
                        <div class="envelope-pocket"></div>
                        <div class="envelope-seal">💌</div>
                        
                        <!-- Liham sa loob -->
                        <div class="envelope-letter" id="envelope-letter">
                            <div class="letter-title">PARA SA PINAKAMAMAHAL KONG ASAWA ❤️</div>
                            <div class="letter-body">
                                ${surprise.letterText || "Gusto ko lang ipaalala sa'yo na sobrang proud ako sa lahat ng pinagdidiretsuhan at pinaghihirapan mo. Nandito lang ako palagi para suportahan at mahalin ka! 😘"}
                            </div>
                        </div>
                    </div>
                </div>

                <div style="margin-top: 14px;">
                    <button id="open-envelope-btn" class="challenge-btn ready" style="padding: 10px 22px; font-size: 14px;">
                        OPEN LETTER ✉️
                    </button>
                </div>

                <div id="envelope-result" class="envelope-result"></div>
            </div>
        `;

        const envelope = document.getElementById("envelope");
        const openBtn = document.getElementById("open-envelope-btn");
        const resultDiv = document.getElementById("envelope-result");

        let isOpen = false;

        function toggleEnvelope() {
            if (isOpen) return;
            isOpen = true;

            envelope.classList.add("open");
            openBtn.style.display = "none";

            setTimeout(() => {
                resultDiv.innerHTML = `
                    <div style="font-size: 14px; font-weight: 700; color: #2b9348; margin-top: 10px;">
                        ✨ Nabuksan mo na ang liham!
                    </div>
                    <div style="font-size: 12px; font-weight: 600; color: #581825; margin-top: 2px;">
                        Palaging tandaan ang mga nakasulat diyan ha? I love you! 😘❤️
                    </div>
                `;

                if (typeof createConfetti === "function") {
                    createConfetti();
                }
            }, 800);
        }

        openBtn.onclick = toggleEnvelope;
        envelope.onclick = toggleEnvelope;

} else if (surprise.type === "bucketlist") {
        const places = surprise.places || [
            "Switzerland 🍓",
            "Boracay Beach Sunset 🌊",
            "Tokyo, Japan (Ito piliin mo pleas)  ☕",
            "Late Night City Tagaytay Drive 🌃"
        ];

        contentDiv.innerHTML = `
            <div class="bucketlist-container" style="text-align: center;">
                <p style="font-size: 13px; color: #581825; margin: 0 0 10px 0; font-weight: 500;">
                    ${surprise.content}
                </p>

                <div class="bucketlist-stats">
                    Progress: <span id="bucket-count">0</span>/${places.length} Completed ✈️
                </div>

                <div class="bucketlist-items" id="bucket-list-group">
                    ${places.map((place, index) => `
                        <div class="bucket-item" data-index="${index}">
                            <div class="bucket-checkbox"></div>
                            <span class="bucket-text">${place}</span>
                        </div>
                    `).join('')}
                </div>

                <div id="bucket-result" class="bucket-result"></div>
            </div>
        `;

        const items = contentDiv.querySelectorAll(".bucket-item");
        const countDisplay = document.getElementById("bucket-count");
        const resultDiv = document.getElementById("bucket-result");

        let completedCount = 0;

        items.forEach(item => {
            item.onclick = function () {
                item.classList.toggle("checked");

                // Bilangin kung ilan na ang naka-check
                completedCount = contentDiv.querySelectorAll(".bucket-item.checked").length;
                countDisplay.textContent = completedCount;

                if (completedCount === places.length) {
                    resultDiv.innerHTML = `
                        <div style="font-size: 15px; font-weight: 700; color: #2b9348; margin-top: 10px;">
                            🎉 ALL BUCKET LIST CHECKED!
                        </div>
                        <div style="font-size: 12px; font-weight: 600; color: #581825; margin-top: 2px;">
                            Matutupad nating lahat 'to nang magkasama! Kaya wag mo 'ko iiwan ha ❤️
                        </div>
                    `;

                    if (typeof createConfetti === "function") {
                        createConfetti();
                    }
                } else if (completedCount > 0) {
                    resultDiv.innerHTML = `
                        <div style="font-size: 12px; font-weight: 600; color: #581825; margin-top: 8px;">
                            Sige lang, i-check mo lang ang mga gusto mong puntahan natin! 
                        </div>
                    `;
                } else {
                    resultDiv.innerHTML = "";
                }
            };
        });



} else if (surprise.type === "snake") {
    contentDiv.innerHTML = `
        <div style="text-align: center;">
            <p style="font-size: 13px; color: #581825; margin: 0 0 8px 0; font-weight: 500;">
                ${surprise.content || "Kainin ang mga puso! Makuha lang ang 5 points para manalo! 🐍💖"}
            </p>
            <div style="font-weight: 700; color: #ff4d6d; margin-bottom: 6px; font-size: 13px;">
                Score: <span id="snake-score">0</span> / 5
            </div>
            
            <div class="snake-game-container">
                <canvas id="snake-canvas" width="240" height="200"></canvas>
                
                <!-- Start Overlay -->
                <div id="snake-start-overlay" class="snake-overlay">
                    <div class="overlay-emoji">🐍💖</div>
                    <button id="snake-start-btn" class="snake-btn start-btn">▶️ Start Game</button>
                </div>
            </div>

            <!-- Direction Controls -->
            <div class="snake-controls">
                <div></div>
                <button class="snake-btn ctrl-btn" id="s-up">⬆️</button>
                <div></div>
                <button class="snake-btn ctrl-btn" id="s-left">⬅️</button>
                <button class="snake-btn ctrl-btn" id="s-down">⬇️</button>
                <button class="snake-btn ctrl-btn" id="s-right">➡️</button>
            </div>
            <div id="snake-result" style="margin-top: 8px; font-weight: 700; font-size: 13px; color: #2b9348;"></div>
        </div>
    `;

    const canvas = document.getElementById("snake-canvas");
    const ctx = canvas.getContext("2d");
    const scoreDisplay = document.getElementById("snake-score");
    const resultDiv = document.getElementById("snake-result");
    const startOverlay = document.getElementById("snake-start-overlay");
    const startBtn = document.getElementById("snake-start-btn");

    const grid = 20;
    let snake = [{x: 100, y: 100}, {x: 80, y: 100}];
    let dx = grid, dy = 0;
    let nextDx = dx, nextDy = dy;
    let food = {x: 160, y: 100};
    let score = 0;
    let gameInterval = null;

    function getRandomFoodPos() {
        let newX, newY, collision;
        do {
            collision = false;
            newX = Math.floor(Math.random() * (canvas.width / grid)) * grid;
            newY = Math.floor(Math.random() * (canvas.height / grid)) * grid;
            for (let part of snake) {
                if (part.x === newX && part.y === newY) {
                    collision = true;
                    break;
                }
            }
        } while (collision);
        return {x: newX, y: newY};
    }

    function runSnake() {
        if (!document.getElementById("snake-canvas")) {
            clearInterval(gameInterval);
            return;
        }

        dx = nextDx;
        dy = nextDy;
        const head = {x: snake[0].x + dx, y: snake[0].y + dy};

        let selfCollision = snake.some(part => part.x === head.x && part.y === head.y);
        let wallCollision = head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height;

        if (wallCollision || selfCollision) {
            clearInterval(gameInterval);
            startOverlay.style.display = "flex";
            startBtn.textContent = "🔄 Try Again";
            if (resultDiv) resultDiv.innerHTML = "💔 Ouch! Subukan ulit!";
            return;
        }

        snake.unshift(head);

        if (head.x === food.x && head.y === food.y) {
            score++;
            if (scoreDisplay) scoreDisplay.textContent = score;
            if (score >= 5) {
                clearInterval(gameInterval);
                if (resultDiv) resultDiv.innerHTML = "🎉 PANALO KA! Ang galing mo mag-control ng snake! ❤️";
                if (typeof createConfetti === "function") createConfetti();
                startOverlay.style.display = "flex";
                startBtn.textContent = "🏆 Play Again";
            } else {
                food = getRandomFoodPos();
            }
        } else {
            snake.pop();
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw Heart Food
        ctx.font = "16px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("💖", food.x + grid / 2, food.y + grid / 2 + 1);

        // Draw Snake Body & Head
        snake.forEach((part, index) => {
            ctx.fillStyle = index === 0 ? "#ff2a54" : "#ff758f";
            ctx.beginPath();
            ctx.roundRect(part.x + 1, part.y + 1, grid - 2, grid - 2, 6);
            ctx.fill();

            // Draw cute eyes on Snake Head
            if (index === 0) {
                ctx.fillStyle = "#ffffff";
                ctx.beginPath();
                ctx.arc(part.x + 6, part.y + 6, 2.5, 0, Math.PI * 2);
                ctx.arc(part.x + 14, part.y + 6, 2.5, 0, Math.PI * 2);
                ctx.fill();

                ctx.fillStyle = "#000000";
                ctx.beginPath();
                ctx.arc(part.x + 6, part.y + 6, 1, 0, Math.PI * 2);
                ctx.arc(part.x + 14, part.y + 6, 1, 0, Math.PI * 2);
                ctx.fill();
            }
        });
    }

    function startGame() {
        snake = [{x: 100, y: 100}, {x: 80, y: 100}];
        dx = grid; dy = 0;
        nextDx = grid; nextDy = 0;
        score = 0;
        food = getRandomFoodPos();
        if (scoreDisplay) scoreDisplay.textContent = score;
        if (resultDiv) resultDiv.innerHTML = "";
        startOverlay.style.display = "none";

        if (gameInterval) clearInterval(gameInterval);
        
        gameInterval = setInterval(runSnake, 290);
    }

    startBtn.onclick = startGame;

    // Controls
    document.getElementById("s-up").onclick = () => { if (dy === 0) { nextDx = 0; nextDy = -grid; } };
    document.getElementById("s-down").onclick = () => { if (dy === 0) { nextDx = 0; nextDy = grid; } };
    document.getElementById("s-left").onclick = () => { if (dx === 0) { nextDx = -grid; nextDy = 0; } };
    document.getElementById("s-right").onclick = () => { if (dx === 0) { nextDx = grid; nextDy = 0; } };


    } else if (surprise.type === "breakout") {
    contentDiv.innerHTML = `
        <div style="text-align: center;">
            <p style="font-size: 13px; color: #581825; margin: 0 0 8px 0; font-weight: 500;">
                ${surprise.content || "Basagin ang lahat ng puso sa taas para manalo! 🧱💖"}
            </p>
            
            <div class="game-container">
                <canvas id="bo-canvas" width="240" height="200"></canvas>
                
                <!-- Start Overlay -->
                <div id="bo-start-overlay" class="game-overlay">
                    <div class="overlay-emoji">🧱💖</div>
                    <button id="bo-start-btn" class="game-btn start-btn">▶️ Start Game</button>
                </div>
            </div>

            <!-- Paddle Controls for Mobile -->
            <div class="paddle-controls">
                <button class="game-btn ctrl-btn" id="bo-left">⬅️ Move Left</button>
                <button class="game-btn ctrl-btn" id="bo-right">Move Right ➡️</button>
            </div>

            <div id="bo-result" style="margin-top: 8px; font-weight: 700; font-size: 13px; color: #2b9348;"></div>
        </div>
    `;

    const canvas = document.getElementById("bo-canvas");
    const ctx = canvas.getContext("2d");
    const resultDiv = document.getElementById("bo-result");
    const startOverlay = document.getElementById("bo-start-overlay");
    const startBtn = document.getElementById("bo-start-btn");

    let paddle = { x: 90, width: 60, height: 10 };
    let ball = { x: 120, y: 150, dx: 2, dy: -2, radius: 6 };
    let bricks = [];
    const rows = 3, cols = 4, bWidth = 50, bHeight = 14, bPadding = 6, offsetTop = 20, offsetLeft = 11;
    let animId = null;

    function initBricks() {
        bricks = [];
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                bricks.push({ 
                    x: c * (bWidth + bPadding) + offsetLeft, 
                    y: r * (bHeight + bPadding) + offsetTop, 
                    status: 1 
                });
            }
        }
    }

    function drawBreakout() {
        if (!document.getElementById("bo-canvas")) {
            cancelAnimationFrame(animId);
            return;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        
        let remainingBricks = 0;
        bricks.forEach(b => {
            if (b.status === 1) {
                remainingBricks++;
                ctx.fillStyle = "#ff4d6d";
                ctx.beginPath();
                ctx.roundRect(b.x, b.y, bWidth, bHeight, 5);
                ctx.fill();


                ctx.fillStyle = "#ff758f";
                ctx.fillRect(b.x + 3, b.y + 2, bWidth - 6, 2);
            }
        });

        if (remainingBricks === 0) {
            cancelAnimationFrame(animId);
            if (resultDiv) resultDiv.innerHTML = "🎉 PANALO KA! Nabagbag mo lahat ng puso! ❤️";
            if (typeof createConfetti === "function") createConfetti();
            startOverlay.style.display = "flex";
            startBtn.textContent = "🏆 Play Again";
            return;
        }

     
        ctx.font = "14px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("💖", ball.x, ball.y);

     
        ctx.fillStyle = "#c9184a";
        ctx.beginPath();
        ctx.roundRect(paddle.x, canvas.height - paddle.height - 6, paddle.width, paddle.height, 5);
        ctx.fill();

    
        ball.x += ball.dx;
        ball.y += ball.dy;

        if (ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width) {
            ball.dx *= -1;
        }
        if (ball.y - ball.radius < 0) {
            ball.dy *= -1;
        }

     
        const paddleY = canvas.height - paddle.height - 6;
        if (ball.y + ball.radius >= paddleY && ball.y - ball.radius <= paddleY + paddle.height) {
            if (ball.x >= paddle.x && ball.x <= paddle.x + paddle.width) {
                ball.dy = -Math.abs(ball.dy);
                
                
                let hitPoint = ball.x - (paddle.x + paddle.width / 2);
                ball.dx = hitPoint * 0.12;
            }
        }

       
    
        bricks.forEach(b => {
            if (b.status === 1) {
                if (ball.x > b.x && ball.x < b.x + bWidth && ball.y - ball.radius < b.y + bHeight && ball.y + ball.radius > b.y) {
                    b.status = 0;
                    ball.dy *= -1;
                }
            }
        });

        
        if (ball.y > canvas.height) {
            cancelAnimationFrame(animId);
            startOverlay.style.display = "flex";
            startBtn.textContent = "🔄 Try Again";
            if (resultDiv) resultDiv.innerHTML = "💔 Nahulog ang puso! Subukan ulit!";
            return;
        }

        animId = requestAnimationFrame(drawBreakout);
    }

    function startGame() {
        paddle.x = (canvas.width - paddle.width) / 2;
        ball = { x: canvas.width / 2, y: canvas.height - 30, dx: (Math.random() > 0.5 ? 2 : -2), dy: -2.5, radius: 6 };
        initBricks();
        if (resultDiv) resultDiv.innerHTML = "";
        startOverlay.style.display = "none";

        if (animId) cancelAnimationFrame(animId);
        drawBreakout();
    }

    startBtn.onclick = startGame;

    
    canvas.addEventListener("mousemove", (e) => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        paddle.x = Math.max(0, Math.min(canvas.width - paddle.width, mouseX - paddle.width / 2));
    });

    
    canvas.addEventListener("touchmove", (e) => {
        const rect = canvas.getBoundingClientRect();
        const touchX = e.touches[0].clientX - rect.left;
        paddle.x = Math.max(0, Math.min(canvas.width - paddle.width, touchX - paddle.width / 2));
    }, { passive: true });

    
    let moveSpeed = 25;
    document.getElementById("bo-left").onclick = () => {
        paddle.x = Math.max(0, paddle.x - moveSpeed);
    };
    document.getElementById("bo-right").onclick = () => {
        paddle.x = Math.min(canvas.width - paddle.width, paddle.x + moveSpeed);
    };


    } else if (surprise.type === "flappy") {
    contentDiv.innerHTML = `
        <div style="text-align: center;">
            <p style="font-size: 13px; color: #581825; margin: 0 0 8px 0; font-weight: 500;">
                ${surprise.content || "I-tap ti screen wenno pinduten ti Jump tapno makalabas iti 3 a karayan ti puso! 🐥💖"}
            </p>
            <div style="font-weight: 700; color: #ff4d6d; margin-bottom: 6px; font-size: 13px;">
                Score: <span id="flappy-score">0</span> / 3
            </div>
            
            <div class="game-container">
                <canvas id="flappy-canvas" width="240" height="200"></canvas>
                
                <div id="flappy-start-overlay" class="game-overlay">
                    <div class="overlay-emoji">🐥💖</div>
                    <button id="flappy-start-btn" class="game-btn start-btn">▶️ Start Game</button>
                </div>
            </div>

            <div style="margin-top: 12px;">
                <button class="game-btn start-btn" id="flappy-jump-btn" style="width: 140px; font-size: 14px; padding: 10px;">🚀 JUMP!</button>
            </div>

            <div id="flappy-result" style="margin-top: 8px; font-weight: 700; font-size: 13px; color: #2b9348;"></div>
        </div>
    `;

    const canvas = document.getElementById("flappy-canvas");
    const ctx = canvas.getContext("2d");
    const scoreDisplay = document.getElementById("flappy-score");
    const resultDiv = document.getElementById("flappy-result");
    const startOverlay = document.getElementById("flappy-start-overlay");
    const startBtn = document.getElementById("flappy-start-btn");
    const jumpBtn = document.getElementById("flappy-jump-btn");

    let birdY = 100, velocity = 0, gravity = 0.25;
    let pipeX = 240, pipeGap = 75, pipeTop = 50, pipeWidth = 30;
    let score = 0;
    let animId = null;

    function drawFlappy() {
        if (!document.getElementById("flappy-canvas")) {
            cancelAnimationFrame(animId);
            return;
        }

        velocity += gravity;
        birdY += velocity;
        pipeX -= 1.8;

        if (pipeX < -pipeWidth) {
            pipeX = 240;
            pipeTop = Math.floor(Math.random() * 70) + 30;
            score++;
            if (scoreDisplay) scoreDisplay.textContent = score;

            if (score >= 3) {
                cancelAnimationFrame(animId);
                if (resultDiv) resultDiv.innerHTML = "🎉 PANALO KA! Naglikpalo ti imagayongmo! ❤️";
                if (typeof createConfetti === "function") createConfetti();
                startOverlay.style.display = "flex";
                startBtn.textContent = "🏆 Play Again";
                return;
            }
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#ff4d6d";
        ctx.beginPath();
        ctx.roundRect(pipeX, 0, pipeWidth, pipeTop, [0, 0, 8, 8]);
        ctx.roundRect(pipeX, pipeTop + pipeGap, pipeWidth, canvas.height - (pipeTop + pipeGap), [8, 8, 0, 0]);
        ctx.fill();

        ctx.fillStyle = "#ff758f";
        ctx.font = "14px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("💖", pipeX + pipeWidth / 2, pipeTop - 8);
        ctx.fillText("💖", pipeX + pipeWidth / 2, pipeTop + pipeGap + 14);

        ctx.font = "20px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("🐥", 45, birdY);

        let birdRadius = 10;
        let hitPipe = (pipeX < 45 + birdRadius && pipeX + pipeWidth > 45 - birdRadius) &&
                      (birdY - birdRadius < pipeTop || birdY + birdRadius > pipeTop + pipeGap);
        let hitBounds = birdY + birdRadius > canvas.height || birdY - birdRadius < 0;

        if (hitPipe || hitBounds) {
            cancelAnimationFrame(animId);
            startOverlay.style.display = "flex";
            startBtn.textContent = "🔄 Try Again";
            if (resultDiv) resultDiv.innerHTML = "💔 Napalnaog ti billit! Subliam manen!";
            return;
        }

        animId = requestAnimationFrame(drawFlappy);
    }

    function doJump() {
        if (startOverlay.style.display === "none") {
            velocity = -4.5;
        }
    }

    function startGame() {
        birdY = 100;
        velocity = 0;
        pipeX = 240;
        pipeTop = 50;
        score = 0;
        if (scoreDisplay) scoreDisplay.textContent = score;
        if (resultDiv) resultDiv.innerHTML = "";
        startOverlay.style.display = "none";

        if (animId) cancelAnimationFrame(animId);
        drawFlappy();
    }

    startBtn.onclick = startGame;
    jumpBtn.onclick = doJump;
    canvas.onclick = doJump;
    
    } else if (surprise.type === "grand_love" || surprise.type === "grandlove") {
    contentDiv.innerHTML = `
        <div style="text-align: center; padding: 5px;">
            <div class="grand-love-badge">✨ GRAND LOVE SPECIAL ✨</div>
            <p style="font-size: 13px; color: #581825; margin: 6px 0 12px 0; font-weight: 500;">
                ${surprise.content || "Pindutin ang puso sa ibaba para punuin ang iyong Love Meter at madama ang walang hanggang pagmamahal! 💖"}
            </p>
            
            <div class="grand-container">
                <div class="grand-glow-bg"></div>
                
                <!-- Main Interactive Heart Button -->
                <div id="grand-heart-btn" class="grand-heart-pulse">
                    <span class="grand-heart-emoji">💖</span>
                </div>
                
                <!-- Floating Particle Container -->
                <div id="grand-particles"></div>
            </div>

            <!-- Progress Meter -->
            <div style="margin: 14px 0 8px 0;">
                <div style="display: flex; justify-content: space-between; font-size: 11px; font-weight: bold; color: #c9184a; margin-bottom: 4px;">
                    <span>LOVE METER</span>
                    <span id="grand-counter">0 / 10</span>
                </div>
                <div class="grand-progress-track">
                    <div id="grand-progress-bar" style="width: 0%;"></div>
                </div>
            </div>

            <div id="grand-result" style="margin-top: 10px; font-weight: 700; font-size: 13px; color: #2b9348; min-height: 20px;"></div>
        </div>
    `;

    const heartBtn = document.getElementById("grand-heart-btn");
    const counterDisplay = document.getElementById("grand-counter");
    const progressBar = document.getElementById("grand-progress-bar");
    const resultDiv = document.getElementById("grand-result");
    const particlesContainer = document.getElementById("grand-particles");

    let loveScore = 0;
    const targetScore = 10;
    let isCompleted = false;

    heartBtn.onclick = (e) => {
        if (isCompleted) return;

        loveScore++;
        let percentage = (loveScore / targetScore) * 100;
        counterDisplay.textContent = `${loveScore} / ${targetScore}`;
        progressBar.style.width = `${percentage}%`;

        // Create mini floating heart on click
        createFloatingParticle(e);

        // Animation pop effect
        heartBtn.style.transform = "scale(1.2)";
        setTimeout(() => {
            heartBtn.style.transform = "scale(1)";
        }, 150);

        if (loveScore >= targetScore) {
            isCompleted = true;
            resultDiv.innerHTML = "✨ SOBRANG GANDA AT TAGUMPAY! Mahal na mahal kita! 💍💖";
            if (typeof createConfetti === "function") createConfetti();
            
            heartBtn.style.animation = "none";
            heartBtn.style.background = "linear-gradient(135deg, #ffd166, #ff4d6d)";
            
            // Extra celebratory particles
            for(let i = 0; i < 5; i++) {
                setTimeout(() => createBurstParticle(), i * 150);
            }
        }
    };

    function createFloatingParticle(e) {
        const rect = particlesContainer.getBoundingClientRect();
        const p = document.createElement("div");
        p.className = "floating-mini-heart";
        p.innerHTML = ["💖", "✨", "❤️", "🌹"][Math.floor(Math.random() * 4)];
        
        let x = e.clientX ? e.clientX - rect.left : rect.width / 2;
        let y = e.clientY ? e.clientY - rect.top : rect.height / 2;
        
        p.style.left = `${x}px`;
        p.style.top = `${y}px`;
        particlesContainer.appendChild(p);

        setTimeout(() => {
            p.remove();
        }, 1000);
    }

    function createBurstParticle() {
        const p = document.createElement("div");
        p.className = "floating-mini-heart";
        p.innerHTML = "💖";
        p.style.left = `${Math.random() * 200 + 20}px`;
        p.style.top = `${Math.random() * 80 + 40}px`;
        particlesContainer.appendChild(p);
        setTimeout(() => p.remove(), 1000);
    }


    } else {
        contentDiv.innerHTML = `
            <p class="message-text">
                ${surprise.content || "Walang laman ang surprise na ito."}
            </p>
        `;
    }
}
   


function handleQuizChoice(selectedIndex, correctAnswer, revealMessage) {
    const resultDiv = document.getElementById("quiz-result");
    const buttons = document.querySelectorAll(".quiz-opt-btn");

    buttons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === selectedIndex) {
            btn.classList.add("selected-opt");
        }
    });

    resultDiv.innerHTML = `
        <div class="reveal-box">
            <p class="correct-text"><strong>My Answer:</strong><br>"${correctAnswer}"</p>
            <p class="reaction-text">${revealMessage}</p>
        </div>
    `;
    resultDiv.classList.remove("hidden");
    
    if (typeof createConfetti === "function") {
        createConfetti();
    }
}

const PREVIEW_MODE = true;

function createDayList() {
    const dayList = document.getElementById("day-list");
    if (!dayList) return;

    dayList.innerHTML = "";
    const currentDay = getDayNumber();

    for (let i = 1; i <= 30; i++) {
        const dayButton = document.createElement("button");
        dayButton.classList.add("day-button");

        if (!PREVIEW_MODE && i > currentDay) {
            dayButton.classList.add("locked");
            dayButton.textContent = "🔒 Day " + i;

            dayButton.onclick = function () {
                alert("Naka-lock pa ito! Balikan mo sa Day " + i + " ✨");
            };
        } else {
            const isFutureDay = i > currentDay;
            dayButton.textContent = isFutureDay ? "👁️ Day " + i : "Day " + i;

            dayButton.onclick = function () {
                setFrontCardDay(i);
            };
        }

        dayList.appendChild(dayButton);
    }
}

function createConfetti() {
    const colors = ["#ff4d6d", "#ff8fab", "#ffd166", "#ffffff", "#cdb4db"];

    for (let i = 0; i < 60; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = Math.random() * 2 + 2 + "s";
        confetti.style.animationDelay = Math.random() * 0.5 + "s";
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}

updateDayNumber();
createDayList();
