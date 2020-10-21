const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

function handleCardButtonClick(e) {
  const button = e.currentTarget;
  const card = button.closest('.card');
  const imgSrc = card.querySelector('img').src;
  const desc = card.querySelector('img').alt;
  // Populate the modal
  modalInner.innerHTML = `
    <img src="${imgSrc.replace('200', '600')}" alt="${desc}" />
    <p>${desc}</p>
    `;
  // Show the modal
  modalOuter.classList.add('open');
}

cardButtons.forEach((button) => {
  button.addEventListener('click', handleCardButtonClick);
});
