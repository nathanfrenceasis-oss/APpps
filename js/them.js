/* =========================================
   GLOBAL THEME SYSTEM
========================================= */


/* =========================================
   THEME BUTTON
========================================= */

const themeButton =
    document.getElementById("theme-toggle");


/* =========================================
   CREATE STARS
========================================= */

function createStars() {

    const oldStars =
        document.querySelector(
            ".star-container"
        );

    if (oldStars) {
        oldStars.remove();
    }


    const starContainer =
        document.createElement("div");

    starContainer.className =
        "star-container";


    /* Create 45 stars */

    for (let i = 0; i < 45; i++) {

        const star =
            document.createElement("span");

        star.className =
            "star";


        /* Random position */

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";


        /* Random size */

        const size =
            Math.random() * 3 + 1;

        star.style.width =
            size + "px";

        star.style.height =
            size + "px";


        /* Random animation */

        star.style.animationDelay =
            Math.random() * 4 + "s";

        star.style.animationDuration =
            Math.random() * 3 + 2 + "s";


        starContainer.appendChild(
            star
        );
    }


    document.body.appendChild(
        starContainer
    );
}


/* =========================================
   CREATE SAKURA
========================================= */

function createSakura() {

    /*
        Don't create Sakura
        on the Games page.
    */

    if (
        document.body.classList.contains(
            "games-page"
        )
    ) {
        return;
    }


    const oldSakura =
        document.querySelector(
            ".sakura-container"
        );

    if (oldSakura) {
        oldSakura.remove();
    }


    const sakuraContainer =
        document.createElement("div");

    sakuraContainer.className =
        "sakura-container";


    /* Create 12 petals */

    for (let i = 0; i < 12; i++) {

        const petal =
            document.createElement("span");

        petal.className =
            "sakura";


        /* Random horizontal position */

        petal.style.left =
            Math.random() * 100 + "%";


        /* Random size */

        const size =
            Math.random() * 8 + 7;

        petal.style.width =
            size + "px";

        petal.style.height =
            size * 0.65 + "px";


        /* Random falling speed */

        petal.style.animationDuration =
            Math.random() * 5 + 7 + "s";


        /* Random starting delay */

        petal.style.animationDelay =
            Math.random() * 8 + "s";


        sakuraContainer.appendChild(
            petal
        );
    }


    document.body.appendChild(
        sakuraContainer
    );
}


/* =========================================
   CREATE LIGHT ATMOSPHERE
========================================= */

function createLightAtmosphere() {

    /*
        Don't create atmosphere
        on Games page.
    */

    if (
        document.body.classList.contains(
            "games-page"
        )
    ) {
        return;
    }


    /* Remove old atmosphere */

    const oldAtmosphere =
        document.querySelector(
            ".light-atmosphere"
        );

    if (oldAtmosphere) {
        oldAtmosphere.remove();
    }


    /* Create atmosphere */

    const atmosphere =
        document.createElement("div");

    atmosphere.className =
        "light-atmosphere";


    atmosphere.innerHTML = `
        <span class="light-glow"></span>
        <span class="light-glow"></span>
    `;


    document.body.appendChild(
        atmosphere
    );


    /* Create clouds */

    const oldClouds =
        document.querySelector(
            ".light-clouds"
        );

    if (oldClouds) {
        oldClouds.remove();
    }


    const clouds =
        document.createElement("div");

    clouds.className =
        "light-clouds";


    document.body.appendChild(
        clouds
    );
}


/* =========================================
   REMOVE ATMOSPHERE
========================================= */

function removeAtmosphere() {

    const stars =
        document.querySelector(
            ".star-container"
        );

    const sakura =
        document.querySelector(
            ".sakura-container"
        );

    const atmosphere =
        document.querySelector(
            ".light-atmosphere"
        );

    const clouds =
        document.querySelector(
            ".light-clouds"
        );


    if (stars) {
        stars.remove();
    }

    if (sakura) {
        sakura.remove();
    }

    if (atmosphere) {
        atmosphere.remove();
    }

    if (clouds) {
        clouds.remove();
    }
}


/* =========================================
   APPLY THEME
========================================= */

function applyTheme() {

    const darkMode =
        localStorage.getItem(
            "darkMode"
        ) === "true";


    /* Add/remove dark-mode */

    document.body.classList.toggle(
        "dark-mode",
        darkMode
    );


    /* Change button icon */

    if (themeButton) {

        themeButton.textContent =
            darkMode
                ? "☀️"
                : "🌙";
    }


    /* Remove old decorations */

    removeAtmosphere();


    

   if (darkMode) {
    createStars();
} else {
    createSakura();
    createLightAtmosphere();
    createButterflies();
}
}




if (themeButton) {

    themeButton.addEventListener(
        "click",
        function () {

            const isDark =
                document.body.classList.contains(
                    "dark-mode"
                );


            /*
                Save the opposite
                theme to localStorage.
            */

            localStorage.setItem(
                "darkMode",
                !isDark
            );


            /* Apply new theme */

            applyTheme();
        }
    );
}



applyTheme();

function createButterflies() {
    if (document.body.classList.contains("games-page")) {
        return;
    }

    const oldButterflies =
        document.querySelector(".butterfly-container");

    if (oldButterflies) {
        oldButterflies.remove();
    }

    const container =
        document.createElement("div");

    container.className =
        "butterfly-container";

    for (let i = 0; i < 3; i++) {
        const butterfly =
            document.createElement("span");

        butterfly.className =
            "butterfly";

        butterfly.textContent = "🦋";

        container.appendChild(butterfly);
    }

    document.body.appendChild(container);
}