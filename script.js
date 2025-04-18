document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('LoginForm');
    const signupForm = document.getElementById('signupForm');
    const showSignUp = document.getElementById('showSignUp');
    const showLogin = document.getElementById('showlogin');

    showSignUp.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
    });

    showLogin.addEventListener('click', (e) => {
        e.preventDefault();
        signupForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    });
});
