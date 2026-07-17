document.addEventListener("DOMContentLoaded", function () {

    // -----------------------------------
    // 1. Greeting based on the time
    // -----------------------------------

    const mainHeading = document.querySelector("h1");
    const currentHour = new Date().getHours();

    let greeting;

    if (currentHour < 12) {
        greeting = "Good morning!";
    } else if (currentHour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    const greetingText = document.createElement("p");
    greetingText.textContent = greeting + " Welcome to our Coding Skills page.";
    greetingText.style.textAlign = "center";
    greetingText.style.fontWeight = "bold";

    mainHeading.insertAdjacentElement("afterend", greetingText);


    // -----------------------------------
    // 2. Make the coding topic cards clickable
    // -----------------------------------

    const topicCards = document.querySelectorAll(".card");

    topicCards.forEach(function (card) {

        card.style.cursor = "pointer";

        card.addEventListener("click", function () {

            const topicHeading = card.querySelector("h3");
            const topicText = card.querySelector("p");

            if (topicHeading && topicText) {

                alert(
                    topicHeading.textContent +
                    "\n\n" +
                    topicText.textContent.trim()
                );

            }

        });

    });


    // -----------------------------------
    // 3. Show and hide project images
    // -----------------------------------

    const projectImages = document.querySelectorAll(".exercise img");

    projectImages.forEach(function (image) {

        const button = document.createElement("button");

        button.textContent = "Hide Project Image";
        button.type = "button";

        button.style.display = "block";
        button.style.margin = "15px auto";
        button.style.cursor = "pointer";

        image.insertAdjacentElement("afterend", button);

        button.addEventListener("click", function () {

            if (image.style.display === "none") {

                image.style.display = "block";
                button.textContent = "Hide Project Image";

            } else {

                image.style.display = "none";
                button.textContent = "Show Project Image";

            }

        });

    });


    // -----------------------------------
    // 4. Highlight current navigation link
    // -----------------------------------

    const navigationLinks = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname.split("/").pop();

    navigationLinks.forEach(function (link) {

        if (link.getAttribute("href") === currentPage) {

            link.style.fontWeight = "bold";
            link.style.textDecoration = "underline";

        }

    });


    // -----------------------------------
    // 5. Back to Top button
    // -----------------------------------

    const topButton = document.createElement("button");

    topButton.textContent = "Back to Top";
    topButton.type = "button";

    topButton.style.position = "fixed";
    topButton.style.bottom = "20px";
    topButton.style.right = "20px";
    topButton.style.display = "none";
    topButton.style.cursor = "pointer";

    document.body.appendChild(topButton);

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {

            topButton.style.display = "block";

        } else {

            topButton.style.display = "none";

        }

    });

    topButton.addEventListener("click", function () {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

});