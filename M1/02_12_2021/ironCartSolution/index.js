// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const priceValue = parseFloat(price.innerText);
  const quantityValue = quantity.valueAsNumber;

  const subTotalValue = priceValue * quantityValue;

  const subTotal = product.querySelector('.subtotal span');

  subTotal.innerText = subTotalValue;

  return subTotalValue;
}

function calculateAll() {
  const products = document.getElementsByClassName('product');

  let total = 0;

  for (const product of products) {
    total += updateSubtotal(product);
  }

  document.querySelector('#total-value span').innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target  = event.target;

  const row = target.parentNode.parentNode;

  // const parent = row.parentNode;
  // parent.removeChild(row);

  row.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const createRow = document.querySelector('.create-product');

  const nameInput = createRow.querySelector('input');
  const priceInput = createRow.querySelector("input[type='number']");

  const newProductName = nameInput.value;
  const newProductPrice = priceInput.valueAsNumber;

  if (!newProductName || !newProductPrice) {
    window.alert('Precisa preencher os campos de nome e preço');
    return;
  }

  const newRow = document.createElement('tr');
  newRow.className = 'product';
  newRow.innerHTML = `
    <td class="name">
      <span>${newProductName}</span>
    </td>
    <td class="price">$<span>${newProductPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
    `;

  newRow.querySelector('.btn-remove').onclick = removeProduct;

  const body = document.querySelector('#cart tbody');

  body.appendChild(newRow);

  nameInput.value = '';
  priceInput.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn-remove');
  [...removeBtns].forEach((button) => {
    button.addEventListener('click', removeProduct);
  });

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
