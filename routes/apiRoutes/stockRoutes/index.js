const router = require('express').Router();
const { getStocks } = require('../../../controllers/stockController');

router.route('/')
  .get(getStocks);

module.exports = router;
