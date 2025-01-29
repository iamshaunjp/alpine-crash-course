document.addEventListener('alpine:init', () => {
  Alpine.data('signupForm', () => ({
    username: '',
    password: '',
    passwordConfirm: '',
    belt: '',
    bio: '',
    newsletter: true
  }))
})