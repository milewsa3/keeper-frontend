const getUser = () => JSON.parse(localStorage.getItem('profile'))

module.exports = {
  getUser
}