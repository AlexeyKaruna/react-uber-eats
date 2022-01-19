import FoodCardImgXSnumber1 from "../main/images/imgfoodcardXS#1.png";
import FoodCardImgXSnumber2 from "../main/images/imgfoodcardXS#2.png";
import FoodCardImgXSnumber3 from "../main/images/imgfoodcardXS#3.png";
import FoodCardImgXSnumber4 from "../main/images/imgfoodcardXS#4.png";
import FoodCardImgXSnumber5 from "../main/images/imgfoodcardXS#5.png";
import FoodCardImgXSnumber6 from "../main/images/imgfoodcardXS#6.png";

const dataRestMainCard = [
  {
    name: "Трактир «Пушкин»",
    type: "₽₽₽ • Европейская",
    time: "40 - 50 Min",
  },
];

const dataMenuList = [
  {
    name1: "Закуски",
    name2: "Салаты",
    name3: "Супы",
    name4: "Горячие блюда",
    name5: "Гарниры",
    name6: "Десерты",
  },
];

const dataMenuHeader = [
  {
    name: "Закуски",
  },
];

const dataFoodCardWithComposition = [
  {
    image: FoodCardImgXSnumber1,
    foodname: "Сельдь на бородинском…",
    foodcomposition: "С яйцом и огурцом",
    price: "240 ₽",
  },
];

const dataFoodCardDefault = [
  { image: FoodCardImgXSnumber2, foodname: "Соленья вссорти", price: "320 ₽" },
  {
    image: FoodCardImgXSnumber3,
    foodname: "Грибы маринованные",
    price: "300 ₽",
  },
  {
    image: FoodCardImgXSnumber4,
    foodname: "Сало домашнее с горчицей",
    price: "320 ₽",
  },
  {
    image: FoodCardImgXSnumber5,
    foodname: "Малосольная семга",
    price: "390 ₽",
  },
  {
    image: FoodCardImgXSnumber6,
    foodname: "Язык говяжий с хреном",
    price: "350 ₽",
  },
];

export {
  dataRestMainCard,
  dataMenuList,
  dataMenuHeader,
  dataFoodCardWithComposition,
  dataFoodCardDefault,
};
