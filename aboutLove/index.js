

  const button = document.querySelector(".btn");
  const par = document.querySelector(".par");

  const quotes = ["Мы постоянно тратим себя не на то, не на тех.",
  "Весь мир может быть тебе не нужен. Если ты не нужен одному единственному человеку.",
"С каждым днем я тихонько схожу с ума от переизбытка боли и недостатка тебя.",
"Я слишком люблю его глаза, чтобы смотреть в чужие.",
"Я люблю тебя не за то, кто ты, а за то, кто я, когда я с тобой.",
"Больше всего я хочу прийти к тебе и лечь рядом. И знать, что у нас есть завтра.",
"Важно отпустить того, кто так и не полюбил тебя.",
"Человек не властен над своим сердцем, никого нельзя судить за то, что он полюбил или разлюбил.",
"Мужчина, способный на поступки, обречен быть любимым."
];

button.addEventListener("click", function() {
    let randomQuot = quotes[Math.floor(Math.random()*quotes.length)];
    par.textContent = randomQuot;
})

