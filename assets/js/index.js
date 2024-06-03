let productPrice = 400000;
let priceSpan = document.querySelector('.precio-inicial');
priceSpan.innerHTML = productPrice;

let quantity = 0;
let currentQuantity = document.querySelector('.cantidad');
currentQuantity.innerHTML = quantity;

let totalPriceDisplay = document.querySelector('.valor-total');
totalPriceDisplay.innerHTML = quantity * productPrice;

const MSG = 'La cantidad no puede ser menor a 0.';

let increaseBtn = document.querySelector('#addItem');
let decreaseBtn = document.querySelector('#deleteItem');

increaseBtn.addEventListener('click', () => {
  addItem();
});

decreaseBtn.addEventListener('click', () => {
  deleteItem();
});

function addItem() {
  quantity = quantity + 1;
  currentQuantity.innerHTML = quantity;
  updateDisplay();
}

decreaseBtn.addEventListener('click', function () {
  if (quantity > 0) {
    quantity--;
    currentQuantity.innerHTML = quantity;
    updateDisplay();
  } else {
    alert(MSG);
  }
});

function updateDisplay() {
  totalPriceDisplay.innerHTML = (quantity * productPrice).toLocaleString('es-ES');
}
