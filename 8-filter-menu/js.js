const cards = document.querySelector(".menu__cards");
const btns = document.querySelectorAll(".btn");

// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return ` <div class="menu__card">
            <div class="card__content">
              <div class="card__image">
                <img
                  src="${item.img}"
                  alt="${item.title}"
                  loading="lazy"
                />
              </div>
              <div class="card__content__text">
                <div class="content__head">
                  <span class="content__title">${item.title}</span>
                  <span class="price">${item.price}$</span>
                </div>
                <p class="text">${item.desc}</p>
              </div>
            </div>
          </div>`;
  });
  displayMenu = displayMenu.join("");
  cards.innerHTML = displayMenu;
}

btns.forEach((item) => {
  item.addEventListener("click", () => {
    let itemCategory = item.getAttribute("data-cat");
    let filteredItems = menu.filter((e) => e.category.includes(itemCategory));
    if (itemCategory == "all") {
      
      diplayMenuItems(menu);
    } else {
      diplayMenuItems(filteredItems);
    }
  });
});
