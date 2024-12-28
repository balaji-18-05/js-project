let totalPrice = 0;
let mc=0,lc=0,ac=0;

const productPrices = {
    product1: 15000,
    product2: 49999,
    product3: 1999
};

const addButton1 = document.getElementById('addProduct1');
const addButton2 = document.getElementById('addProduct2');
const addButton3 = document.getElementById('addProduct3');
const price1 = document.getElementById('mc');
const price2 = document.getElementById('lc');
const price3 = document.getElementById('ac');
const priceDisplay = document.getElementById('totalPrice');

addButton1.addEventListener('click', function () {
    totalPrice += productPrices.product1;
    mc++;
    price1.textContent = ` Mobiles : ${mc}`;
    priceDisplay.textContent = `Total: $${totalPrice}`;
});

addButton2.addEventListener('click', function () {
    totalPrice += productPrices.product2;
    lc++;
    price2.textContent = ` laptops : ${lc}`;
    priceDisplay.textContent = `Total: $${totalPrice}`;
});

addButton3.addEventListener('click', function () {
    totalPrice += productPrices.product3;
    ac++;
    price3.textContent = ` Accessories : ${ac}`;
    priceDisplay.textContent = `Total: $${totalPrice}`;
});
