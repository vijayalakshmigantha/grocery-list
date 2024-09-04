let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];
let bgContainerEl = document.getElementById("groceryListContainer");
bgContainerEl.classList.add("bg-container");
let headingEl = document.createElement("h1");
headingEl.textContent = "Grocey List";
headingEl.classList.add("heading");
bgContainerEl.appendChild(headingEl);
let unorderedListContainer = document.createElement("ul");
unorderedListContainer.classList.add("itemsContainer");
bgContainerEl.appendChild(unorderedListContainer);
let listContainerEl = document.createElement("li");
unorderedListContainer.appendChild(listContainerEl);
for (let items of groceryList) {
    let listContainerEl = document.createElement("li");
    listContainerEl.textContent = items;
    unorderedListContainer.appendChild(listContainerEl);

}