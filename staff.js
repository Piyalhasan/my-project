document.getElementById('createStaffForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const data = {
    username: document.getElementById('username').value,
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    jobRole: document.getElementById('jobRole').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
    phoneNumber: document.getElementById('phoneNumber').value
  };

  alert(`Staff Created Successfully!\n\n${JSON.stringify(data, null, 2)}`);
});
