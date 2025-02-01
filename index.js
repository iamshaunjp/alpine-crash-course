document.addEventListener('alpine:init', () => {
  Alpine.data('signupForm', () => ({
    username: '',
    password: '',
    passwordConfirm: '',
    belt: '',
    bio: '',
    newsletter: true,
    showPass: false,
    errors: {},
    beltChoices: ['black', 'white', 'red', 'orange', 'brown'],
    success: false,

    validateForm() {
      this.errors = {}

      if (this.username.length < 3) {
        this.errors.username = 'Username must be at least 3 characters.'
      }
      if (this.password.length < 6) {
        this.errors.password = 'Password must be at least 6 characters.'
      }
      if (this.password !== this.passwordConfirm) {
        this.errors.passwordConfirm = 'Passwords do not match.'
      }
      if (!this.belt) {
        this.errors.belt = 'Please select a belt color.'
      }
      if (this.bio.length < 10) {
        this.errors.bio = 'Bio must be at least 10 characters.'
      }

    },

    submitForm($event) {
      this.validateForm()

      if (Object.keys(this.errors).length === 0) {
        console.log(this.username, this.password, this.belt, this.bio, this.newsletter)

        $event.target.reset()

        this.success = true
      }
    }
  }))
})