var express = require('express');
var router = express.Router();
var array=[];
var array2=[];
count=0;

	
	

/* GET contacts */
router.get('/:id', function(req, res, next) {
	res.json(array[req.params.id]);
	
});

router.post('/', function(req, res, next) {
	count++;
	array.push(req.body);
     res.json(count-1);
});

router.get('/:msg', function(req, res, next) {
	res.json(array2[req.params.msg]);
	
})


router.post('/:msg', function(req, res, next) {
	array2.push(req.body);
	res.status(200);
	console.log(req.body);
	res.send();
	
});


router.put('/:id', function(req, res, next) {
  array[req.params.id].firstName=req.body.firstName;
  return res.json(array[req.params.id]);

});


module.exports = router;


