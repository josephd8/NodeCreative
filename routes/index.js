var express = require('express');
var router = express.Router();
var request = require('request');

var log = [
//{operation:"simplify",expression:"2+2",result:"4"}
];

/* GET home page. */
router.get('/', function(req, res) {
  res.render('/public/index.html', { root: 'public' });
});

router.get('/log',function(req,res) {

  console.log("In log");
  res.send(log);

});

router.post('/log',function(req,res){  

	console.log("Math results post");
//	console.log(req);
	console.log(req.body);
	log.push(req.body);
	res.end('{"success" : "Updated Successfully", "status" : 200}');
	console.log(log);
});


module.exports = router;
