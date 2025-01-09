// Contact Form Submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('پیام شما ارسال شد!');
});

// Login Form Submission
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'admin' && password === '1234') {
    alert('ورود موفقیت‌آمیز!');
  } else {
    alert('نام کاربری یا رمز عبور اشتباه است.');
  }
});
