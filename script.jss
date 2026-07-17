const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");
const searchMessage = document.querySelector("#searchMessage");
const cards = document.querySelectorAll(".roadmap-card");

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const searchWord = searchInput.value.toLowerCase().trim();
    let results = 0;

    cards.forEach(function (card) {
        const cardText = card.textContent.toLowerCase();
        const searchTerms = card.dataset.search;
        const isMatch = cardText.includes(searchWord) || searchTerms.includes(searchWord);

        if (searchWord === "" || isMatch) {
            card.classList.remove("hidden");
            results++;
        } else {
            card.classList.add("hidden");
        }
    });

    if (searchWord === "") {
        searchMessage.textContent = "Bitte gib ein Thema ein.";
    } else if (results === 0) {
        searchMessage.textContent = "Kein passendes Thema gefunden.";
    } else {
        searchMessage.textContent = results + " passende Themen gefunden.";
        document.querySelector("#roadmap").scrollIntoView({ behavior: "smooth" });
    }
});