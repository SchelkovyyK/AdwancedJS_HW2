const books = [
  {
    author: "Люсі Фолі",
    name: "Список запрошених",
    price: 70,
  },
  {
    author: "Сюзанна Кларк",
    name: "Джонатан Стрейндж і м-р Норрелл",
  },
  {
    name: "Дизайн. Книга для недизайнерів.",
    price: 70,
  },
  {
    author: "Алан Мур",
    name: "Неономікон",
    price: 70,
  },
  {
    author: "Террі Пратчетт",
    name: "Рухомі картинки",
    price: 40,
  },
  {
    author: "Анґус Гайленд",
    name: "Коти в мистецтві",
  },
];

let booksFiltered = books.filter(
  (changer) => changer.author && changer.name && changer.price !== undefined
);
for (let i = 0; i < books.length; i++) {
  
  if (books[i].author === undefined) {
    console.log(books[i], "no author" );
  } else if (books[i].name === undefined) {
    console.log(books[i], "no name");
  } else if (books[i].price === undefined) {
    console.log(books[i], "no price");
  } else {
    continue;
  }
}
let ul = document.createElement("ul");
let div = document.querySelector("#root");

booksFiltered.forEach((element) => {
  let liOne = document.createElement("li");
  let liTwo = document.createElement("li");
  let liThree = document.createElement("li");
  liOne.innerHTML = element.name;
  liTwo.innerHTML = element.author;
  liThree.innerHTML = element.price;
  ul.appendChild(liOne);
  ul.appendChild(liTwo);
  ul.appendChild(liThree);
});
div.appendChild(ul);

