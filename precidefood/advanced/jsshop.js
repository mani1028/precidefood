const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartItems = document.getElementById("cart-items");
const totalDisplay = document.getElementById("total");
let total = 0;

addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        const itemName = button.previousElementSibling.previousElementSibling.innerText;
        const itemPrice = parseFloat(button.getAttribute("data-price"));
        total += itemPrice;
        totalDisplay.innerText = total.toFixed(2);
        const cartItem = document.createElement("li");
        cartItem.innerText = `${itemName} - $${itemPrice.toFixed(2)}`;
        cartItems.appendChild(cartItem);
    });
});
