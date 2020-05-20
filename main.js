const firstName = "Piotr";
const age = 32;
const city = "Poznań";
const JS = "JavaScript";
const HTML = "HTML";
const CSS = "CSS";
console.log("heloł ewryłan");
console.log(
  `Cześć, mam na imię ${firstName}, urodziłem się w ${city} i mam ${age} lata`
);

const about = document.querySelector(".about__name--js");
about.innerHTML = `Cześć, mam na imię ${firstName}, urodziłem się w ${city} i mam ${age} lata`;
