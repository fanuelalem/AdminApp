const { Stock } = require('../models');

module.exports = {
  getStocks: async (req, res) => {
    try {
      const myStocks = await Stock.find();
      if (!myStocks) {
        return res.status(200).json({ error: 'No Stocks found' });
      }
      return res.json(myStocks);
    } catch (error) {
      return res.status(403).json({ error });
    }
  },
};

