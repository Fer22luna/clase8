const { Router } = require('express')


const router = Router()

router.get('/', (req, res) => {
  const { user } = req.session
  res.render('profile.handlebars', { user })
})

router.get('/login', (req, res) => {
  res.render('login.handlebars')
})

router.get('/signup', (req, res) => {
  res.render('signup.handlebars')
})





module.exports = router