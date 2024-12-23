import { categoryList } from "../json/data.js";
import { electronicsItems } from "../json/data.js";
import { othersItems } from "../json/data.js";
import { collections } from "../json/data.js";

document.querySelector(".menu-btn").addEventListener("click", function () {
  this.classList.toggle("active");
});

categoryList.map((item) => {
  const category = document.getElementById("category-List");

  const categoryItem = document.createElement("div");
  // categoryItem.className.add('category-item')

  categoryItem.innerHTML = `
      <img src="${item.img}" alt="${item.name}" />
      <p >${item.listName}</p>`;

  category.appendChild(categoryItem);
});

electronicsItems.map((item) => {
  const electronicsItems = document.getElementById("electronics-items");
  // console.log(electronicsItems)

  const divElement = document.createElement("div");
  divElement.classList.add("ele-items");

  divElement.innerHTML = `
        <div class = 'ele-item-image'>
            <img src="${item.img}" width="150" height="180" alt="${item.name}" />
        </div>
        <div>${item.name}</div>
        <div>From &#8377; ${item.price}</div>
    `;

  electronicsItems.appendChild(divElement);
});

othersItems.map((item) => {
  const beautyitems = document.getElementsByClassName("beautyitems")[0];
  const newElement = document.createElement("div");
  newElement.classList.add("ele-items");

  newElement.innerHTML = `<div>
                               <img src="${item.img}" width='150' height="180" alt="${item.name}" />
                            </div>
                            <div>${item.name}</div>
                            <div>${item.price}</div>`;

  beautyitems.appendChild(newElement);
});

function handleButtonClick(direction) {
  const electronicsItems = document.getElementById("electronics-items");
  const nextButton = document.querySelector(".next");
  const prevButton = document.querySelector(".prev");

  if (direction === "next") {
    electronicsItems.style.transform = "translateX(-50%)";

    nextButton.style.display = "none";
    prevButton.style.display = "block";
  } else if (direction === "prev") {
    electronicsItems.style.transform = "translateX(0%)";

    prevButton.style.display = "none";
    nextButton.style.display = "block";
  }
}

document.querySelector(".next").addEventListener("click", () => {
  handleButtonClick("next");
});

document.querySelector(".prev").addEventListener("click", () => {
  // console.log('Prev button clicked');
  handleButtonClick("prev");
});

const containers = document.getElementById("container");
// console.log(containers)
collections.map((collection) => {
  container.innerHTML += `
            <div class="maindiv">
                <h2 class="topheading">${collection.title}</h2>
                <div class="grid">
                    ${collection.items
                      .map(
                        (item) => `
                        <div class="item">
                            <div class="content">
                                <img src="${item.imgSrc}" alt="${item.heading}">
                                <div class="heading">
                                    <h4>${item.heading}</h4>
                                    <h3 class="green-color">${item.offer}</h3>
                                </div>
                            </div>
                        </div>
                    `
                      )
                      .join("")}
                </div>
            </div>
        `;
});
