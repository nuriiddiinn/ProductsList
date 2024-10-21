const typeSelect = document.getElementById('type-select');
const productNameInput = document.getElementById('product-name');
const productCountInput = document.getElementById('product-count');
const addProductButton = document.querySelector('.add-product');
const clearListButton = document.querySelector('.clear-list');
const productsList = document.querySelector('.products-list');

function addProduct() {
  const productType = typeSelect.value;
  const productName = productNameInput.value.trim();
  const productCount = productCountInput.value;

  if (!productType || !productName || productCount <= 0) {
    alert('Пожалуйста, заполните все поля правильно!');
    return;
  }

  const productItem = document.createElement('div');
  productItem.className = 'product-item';
  productItem.textContent = `${productType}: ${productName} (Количество: ${productCount})`;

  productsList.insertAdjacentElement('beforeend', productItem);

  typeSelect.selectedIndex = 0;
  productNameInput.value = null;
  productCountInput.value = null;
}

function clearProductList() {
  while (productsList.firstChild) {
    productsList.removeChild(productsList.firstChild);
  }
}

addProductButton.addEventListener('click', addProduct);
clearListButton.addEventListener('click', clearProductList);
