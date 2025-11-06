// Change button text and color when clicked
document.querySelectorAll('.status-btn').forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('confirmed')) {
      button.textContent = 'Available';
      button.classList.remove('confirmed');
    } else {
      button.textContent = 'Available Confirmed';
      button.classList.add('confirmed');
    }
  });
});
