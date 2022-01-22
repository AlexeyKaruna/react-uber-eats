import FoodCardImgXSnumber1 from "../main/images/Herring-on-Borodinsky-bread.png";
import FoodCardImgXSnumber2 from "../main/images/Assorted-pickles.png";
import FoodCardImgXSnumber3 from "../main/images/Pickled-mushrooms.png";
import FoodCardImgXSnumber4 from "../main/images/Homemade-bacon-with-mustard.png";
import FoodCardImgXSnumber5 from "../main/images/Salted-salmon.png";
import FoodCardImgXSnumber6 from "../main/images/Beef-tongue-with-horseradish.png";

const dataRestMainCard = [
  {
    name: "Трактир «Пушкин»",
    type: "₽₽₽ • Европейская",
    time: "40 - 50 Min",
  },
];

const dataMenuHeader = [
  {
    name: "Закуски",
  },
];

const menuTypes = [
  {
    id: 1,
    type: "Закуски",
  },
  {
    id: 2,
    type: "Салаты",
  },
  {
    id: 3,
    type: "Супы",
  },
  {
    id: 4,
    type: "Горячие блюда",
  },
  {
    id: 5,
    type: "Гарниры",
  },
];

const rest = {
  name: "Трактир «Пушкин»",
  type: "₽₽₽ • Европейская",
  time: "40 - 50 Min",
  menu: [
    {
      type: 1,
      name: "Сельдь на бородинском…",
      description: "С яйцом и огурцом",
      price: "240 ₽",
      image: FoodCardImgXSnumber1,
    },
    {
      type: 1,
      name: "Соленья вссорти",
      description: "",
      price: "320 ₽",
      image: FoodCardImgXSnumber2,
    },
    {
      type: 1,
      name: "Грибы маринованные",
      description: "",
      price: "300 ₽",
      image: FoodCardImgXSnumber3,
    },
    {
      type: 1,
      name: "Сало домашнее с горчицей",
      description: "",
      price: "320 ₽",
      image: FoodCardImgXSnumber4,
    },
    {
      type: 1,
      name: "Малосольная семга",
      description: "",
      price: "390 ₽",
      image: FoodCardImgXSnumber5,
    },
    {
      type: 1,
      name: "Язык говяжий с хреном",
      description: "",
      price: "350 ₽",
      image: FoodCardImgXSnumber6,
    },
  ],
};

export { dataRestMainCard, dataMenuHeader, menuTypes, rest };
