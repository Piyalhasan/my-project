// Avatar upload & preview (stored in localStorage)
const avatarBtn = document.getElementById('avatarBtn');
const avatarInput = document.getElementById('avatarInput');
const avatarImg = document.getElementById('avatarImg');
const avatarPlaceholder = document.getElementById('avatarPlaceholder');

// Load saved avatar if exists
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('presidency_avatar');
  if (saved) {
    avatarImg.src = saved;
    avatarImg.style.display = 'block';
    avatarPlaceholder.style.display = 'none';
  }
});

avatarBtn.addEventListener('click', () => avatarInput.click());

avatarInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(ev){
    const dataUrl = ev.target.result;
    avatarImg.src = dataUrl;
    avatarImg.style.display = 'block';
    avatarPlaceholder.style.display = 'none';
    try {
      localStorage.setItem('presidency_avatar', dataUrl);
    } catch(err) {
      console.warn('Could not save avatar:', err);
    }
  };
  reader.readAsDataURL(file);
});

// Handle card clicks (redirect to other pages)
const cards = document.querySelectorAll('.dash-card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    const key = card.getAttribute('data-key');
    switch(key) {
      case 'room-availability':
        window.location.href = 'a_room.html';
        break;
      
     case 'student-Management':
        window.location.href = 'a_student.html';
        break;
      case 'create-staff':
        window.location.href = 'staff.html';
        break;
      case 'hostel-fee':
        window.location.href = 'payment.html';
        break;
      case 'change-request':
        window.location.href = 'change.html';
        break;

       
        case 'all-issues':
        window.location.href = 'issue.html';
        break;
      default:
        alert('Page not configured yet.');
    }
  });
});
