class Product {
  constructor(id, title, price, colors) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.colors = colors; // Array of color objects
  }

  getColorImage(colorIndex) {
    return this.colors[colorIndex].img;
  }

  getColorCode(colorIndex) {
    return this.colors[colorIndex].code;
  }
}

const products = [
  new Product(1, "Air Force", 119, [
    { code: "black", img: "./img/air.png" },
    { code: "darkblue", img: "./img/air2.png" },
  ]),
  new Product(2, "Air Jordan", 149, [
    { code: "lightgray", img: "./img/jordan.png" },
    { code: "green", img: "./img/jordan2.png" },
  ]),
  new Product(3, "Blazer", 109, [
    { code: "lightgray", img: "./img/blazer.png" },
    { code: "green", img: "./img/blazer2.png" },
  ]),
  new Product(4, "Crater", 129, [
    { code: "black", img: "./img/crater.png" },
    { code: "lightgray", img: "./img/crater2.png" },
  ]),
  new Product(5, "Hippie", 99, [
    { code: "gray", img: "./img/hippie.png" },
    { code: "black", img: "./img/hippie2.png" },
  ]),
];

const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
let chosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // Change the chosen product
    chosenProduct = products[index];

    // Update product details
    currentProductTitle.textContent = chosenProduct.title;
    currentProductPrice.textContent = "$" + chosenProduct.price;
    currentProductImg.src = chosenProduct.getColorImage(0);

    // Update color options
    currentProductColors.forEach((colorElement, index) => {
      if (index < chosenProduct.colors.length) {
        colorElement.style.backgroundColor = chosenProduct.getColorCode(index);
      } else {
        colorElement.style.display = 'none'; // Hide unused color elements
      }
    });
  });
});

currentProductColors.forEach((colorElement, index) => {
  colorElement.addEventListener("click", () => {
    currentProductImg.src = chosenProduct.getColorImage(index);
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
