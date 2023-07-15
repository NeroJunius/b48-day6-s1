class testimonials {
    #image = "";
    #commentary = "";
    #author = "";

    constructor(image, commentary, author) {
        this.#image = image;
        this.#commentary = commentary;
        this.#author = author;
    };

    get image() {
        return this.#image;
    };

    get commentary() {
        return this.#commentary;
    };

    get author() {
        return this.#author;
    };

    get markUp() {
        return `
        <div class="cards">
            <img src="${this.image}">
            <p class="quote">"${this.commentary}"</p>
            <br>
            <br>
            <p class="user">- ${this.author}</p>
        </div>
        `
    };
};

const cardData_1 = new testimonials(
    "https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_017_huang_2.png",
    "Keren 😳",
    "Blaze"
);

const cardData_2 = new testimonials(
    "https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_003_kalts_boc%236.png",
    "Apa ini?",
    "Kal'tsit"
);

const cardData_3 = new testimonials(
    "https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_377_gdglow_snow%235.png",
    "Mantap",
    "Goldenglow"
);

let wholeCardData = [cardData_1, cardData_2, cardData_3];
let markUp = "";

for (let i = 0; i < wholeCardData.length; i++) {
    markUp += wholeCardData[i].markUp;
};

document.getElementById("testimonial").innerHTML = markUp;