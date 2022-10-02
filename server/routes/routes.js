const Router = require('express')
const router = new Router()
const controller = require('../controllers/controller')

router.post('/', controller.createRow)
router.get('/', controller.getRows)

module.exports = router
