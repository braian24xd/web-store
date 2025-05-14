const sidebarToggle = document.getElementById("sidebar-toggle");
const sidebar = document.getElementById("sidebar");
const sidebarClose = document.getElementById("sidebar-close");

const cartToggle = document.getElementById("cart-toggle");
const cart = document.getElementById("cart");

const cartItems = document.getElementById("cart-items");
const addCartBtn = document.querySelectorAll(".add-cart");

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.add("open");
});

sidebarClose.addEventListener("click", () => {
    sidebar.classList.remove("open");
});

cartToggle.addEventListener("click", () => {
    cart.classList.toggle("open");
    cartToggle.classList.toggle("active");
});

const badgeCount = () => {
    const badge = document.getElementById("badge");
    const totalItems = cartItems.querySelectorAll(".cart__item").length;
    badge.innerHTML = totalItems; 
}

badgeCount();

addCartBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        const product = btn.closest(".product__single");
        const imgProduct = product.querySelector("img").src;
        const nameProduct = product.querySelector("h3").textContent;
        const priceProduct = product.querySelector("strong").textContent;

        const cartItem = document.createElement("article");
        cartItem.classList.add("cart__item");
        cartItems.appendChild(cartItem);

        cartItem.innerHTML = `
            <img class="cart__item--img" src="${imgProduct}">
            <strong class="cart__item--name">${nameProduct}</strong>
            <p class="cart__item--price">${priceProduct}</p>
            <button class="img-btn">
                <img src="./img/icons/delete.png" alt="">
            </button>
        `;

        badgeCount();

        cartItem.querySelector(".img-btn").addEventListener("click", () => {
            cartItem.remove();
            badgeCount();
        });
    })
});