


const button = document.querySelector(".btn");
const par = document.querySelector(".par");

const quotes = ["Убедись в том, что по-настоящему живешь ты больше, чем планируешь, размышляешь или мечтаешь.",
"Не путай одну разбитую мечту с разрушенной жизнью и будущим.",
"Людей нужно не придумывать, а хорошо узнавать, чтобы избежать разочарований.",
"Ты пожалеешь не о том, что сделал. Ты пожалеешь о том, что не сделал в жизни.",
"Хватит думать о том, что точно знаешь свое будущее. Будь готов ко всему.",
"Выбирай делать то, что приносит радость, а не делай что-то, чтобы избежать боли.",
"Мир несправедлив и безжалостен, но это не значит, что нужно сдаваться в своих мечтах.",
"Полюби неизвестное, необычное и новое, а не бойся всего этого.",
"Слабые ждут событий, а сильные их вызывают."
];

button.addEventListener("click", function() {
  let randomQuot = quotes[Math.floor(Math.random()*quotes.length)];
  par.textContent = randomQuot;
});

gsap.to(".main",{
  text:"Мудрые советы на все случаи жизни",
  duration:3,
  ease:"power1.in",
});