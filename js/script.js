const cardButtons = document.querySelectorAll('.card button');
const modalBackground = document.querySelector('.modal-background');
const modalForeground = document.querySelector('.modal-foreground');

function handleCardButtonClick(e) {
  const button = e.currentTarget;
  const card = button.closest('.card');
  const imgSrc = card.querySelector('img').src;
  const desc = card.querySelector('img').alt;
  // Populate the modal
  modalForeground.innerHTML = `
    <img src="${imgSrc.replace('200', '600')}" alt="${desc}" />
    <p>${desc}</p>
    `;
  // Show the modal
  modalBackground.classList.add('open');
}

function closeModal() {
  modalBackground.classList.remove('open');
}

cardButtons.forEach((button) => {
  button.addEventListener('click', handleCardButtonClick);
});

// If user clicks outside modal (no closest 'modal-foreground' class), return true
modalBackground.addEventListener('click', function (e) {
  const outOfModal = !e.target.closest('.modal-foreground');
  if (outOfModal) {
    closeModal();
  }
});

// Close modal viewer if user presses Escape key
window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && modalBackground.classList.contains('open')) {
    closeModal();
  }
});
