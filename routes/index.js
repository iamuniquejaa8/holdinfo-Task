var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET home page. */
router.get('/', async function(req, res, next) {
  
  let data = []
  
  await axios.get('https://api.wazirx.com/api/v2/tickers').then(response => {
    for (let item in response.data){
      data.push(response.data[item])
      console.log(item)
    }
  })

  res.render('index', { data });
});

module.exports = router;
