const passwordValidator = require('password-validator');

const createPasswordSchema = () => {
  const schema = new passwordValidator()

  schema
  .is().min(8)
  .is().max(100)
  .has().uppercase()
  .has().lowercase()
  .has().digits(1)
  .has().symbols(1)
  .has().not().spaces()

  return schema
}

const validateFormData = (formData) => {
  let error = { name: '', email: '', password: '', confirmPassword: '', masterPassword: '' }
  const passwordSchema = createPasswordSchema()

  console.log(formData)
  console.log(passwordSchema.validate(formData.password))

  if (!passwordSchema.validate(formData.password)) {
    error.password = 'Password must be at least 8 character long, have 1 lowercase, 1 uppercase, 1 number and 1 symbol'
    return error
  }

  if (!passwordSchema.validate(formData.masterPassword)) {
    error.masterPassword = 'Password must be at least 8 character long, have 1 lowercase, 1 uppercase, 1 number and 1 symbol'
    return error
  }
}

export default validateFormData