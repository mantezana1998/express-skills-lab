var express = require('express');
var router = express.Router();

const Skill = require('../models/skill')
/* GET home page. */
router.get('/', function(req, res) {
  console.log('these are all my skills')
  res.render('skills/index', {
    skills: Skill.getAll()
   });
});

module.exports = router;
