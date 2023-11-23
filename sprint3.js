// Zadania ze Zmiennych

// a) Zadeklaruj zmienną typu number i przypisz do niej dowolną liczbę całkowitą.
let number = 15;
// b) Utwórz zmienną typu string przechowującą twoje imię.
let firstName = "Ivo";
// c) Zainicjalizuj zmienną bez wartości, a następnie przypisz do niej dowolny tekst.
let userName;
userName = "ivo2004";
// d) Stwórz zmienną const i przypisz do niej obiekt z dwoma kluczami: name (string) i age (number).
const myObject = { name: "Julia", age: 19 };
// e) Zadeklaruj dwie zmienne: jedną używając let, drugą const i przypisz do nich wartości logiczne.
let isAdult = false;
const isBoy = true;
// f) Stwórz zmienną, która będzie przechowywać sumę dwóch liczb.
let sum = 1 + 2;
// g) Utwórz zmienną przechowującą twoje pełne imię i nazwisko jako jedną wartość typu string.
let lastName = "Delev";
let fullName = firstName + " " + lastName;
// h) Zainicjalizuj zmienną z liczbą zmiennoprzecinkową.
let coma = 3.14;
// i) Zadeklaruj zmienną i przypisz do niej wynik działania matematycznego (np. dodawanie).
let horsePower;
horsePower = 350 + 30;
// j) Stwórz zmienną przechowującą twoje miasto jako ciąg znaków.
let city = "Warsaw";

// Zadania z Prostych i Złożonych Typów Danych
// a) Utwórz tablicę zawierającą trzy różne typy danych.
let myArray = ["userName", fullName, 18];
// b) Stwórz obiekt car z właściwościami make, model i year.
const car = {
  make: "BMW",
  model: "M4",
  year: "2023",
};
// c) Zadeklaruj tablicę z trzema różnymi wartościami liczbowymi.
let myMarks = [3, 5, 4];
// d) Utwórz obiekt reprezentujący osobę, zawierający klucze name, age i isStudent (boolean).
let studentStatus = true;
let freshStudent = {
  name: "Don Juan",
  age: "19",
  isStudent: studentStatus,
};
// e) Zadeklaruj zmienną przechowującą pusty obiekt, a następnie dodaj do niego klucz color z wartością typu string.
let house = {};
house = {
  color: "white",
};
// f) Stwórz tablicę obiektów, gdzie każdy obiekt reprezentuje zwierzę z kluczami name (string) i age (number).
let dinoArray = [
  {
    name: "Mammoth",
    age: 120,
  },
  {
    name: "T-Rex",
    age: 80,
  },
  {
    name: "Parazaur",
    age: 50,
  },
];
// g) Utwórz zmienną przechowującą tablicę z różnymi wartościami boolean.
let x = 4;
let y = "4";
const logicArray = [3 < 4, x === y, x > 4 ? true : false];
// h) Stwórz obiekt student z kluczami name (string), grades (tablica liczb) i isActive (boolean).
let studentsGrades = [3, 2, 4, 6];
const student = {
  name: "Ricky",
  grades: studentsGrades,
  isActive:
    studentsGrades[4] !== undefined ? "Jest aktywny" : "Nie jest aktywny",
};
// i) Zadeklaruj tablicę zawierającą różne typy danych, w tym co najmniej jeden obiekt.
let clothesArray = [
  "Jacket",
  {
    warmJackets: 10,
    coldJackets: 3,
  },
  "Pants",
  {
    shortPants: 4,
    longPants: 10,
  },
];
// j) Utwórz obiekt reprezentujący książkę z kluczami title, author i yearPublished.
let book = {
  title: "Harry Potter",
  author: "J. K. Rowling",
  yearPublished: 1997,
};

// Zadania z Warunków i Operatorów Trójargumentowych
// a) Napisz warunek if, który sprawdzi, czy zmienna typu number jest większa od 10.
let checkNumber = 38;
if (checkNumber > 10) {
  console.log("Liczba jest większa od 10.");
} else {
  console.log("Liczba nie jest większa od 10.");
}
// b) Stwórz warunek if, który sprawdzi, czy zmienna tekstowa jest równa "Hello".
let checkString = "Hello";
if (checkString === "Hello") {
  console.log(true);
} else {
  console.log(false);
}
// c) Użyj operatora ternarnego do przypisania do zmiennej wartości w zależności od innego warunku logicznego.
const planetOrder = 3;
let planetLenght = (planetOrder.length = 3
  ? "To planeta ziemia!"
  : "To pewnie inna planeta!");
// d) Napisz warunek, który sprawdzi, czy zmienna age jest większa lub równa 18.
let oldAge = 18;
console.log(oldAge >= 18 ? "Jesteś już dorosły!" : "Jesteś jeszcze młody!");
// e) Stwórz warunek if-else, który sprawdzi, czy tablica jest pusta.
let emptyArray = [];
if (emptyArray[0] == undefined) {
  console.log("Tablica jest pusta!");
} else {
  console.log("Coś się kryje w pustej tablicy!");
}
// f) Użyj operatora ternarnego do sprawdzenia, czy zmienna isMember jest prawdziwa, i na tej podstawie przypisz rabat.
let product = 500;
let isMember = true;
const discount = (isMember = true ? product * 0.95 : product);
console.log(discount);
// g) Napisz warunek if, który sprawdzi, czy długość ciągu znaków w zmiennej jest większa niż 5.
let myPassword = "javascript2014";
if (myPassword.length > 5) {
  console.log("Twoje hasło jest wystarczająco długie.");
} else {
  console.log("Twoje hasło jest za krótkie.");
}
// h) Stwórz warunek if-else, który sprawdzi, czy liczba jest parzysta lub nieparzysta.
let z = 5;
if (z % 2 == 0) {
  console.log("Twoja liczba jest parzysta.");
} else console.log("Twoja liczba jest nieparzysta.");
// i) Użyj operatora ternarnego do wyboru między dwoma różnymi wartościami tekstowymi w zależności od warunku.
const consoleCompany = "Sony";
let isPlayable = consoleCompany === "Sony" ? "Playstation" : "XBOX";
// j)Napisz warunek if, który sprawdzi, czy obiekt ma określony klucz.
let ak47 = {
  type: "rifle",
  caliber: "7.62x39",
  origin: "Russia",
};
if (ak47["type"] !== undefined) {
  console.log("Broń posiada swój określony typ.");
} else console.log("Dodaj typ broni.");
