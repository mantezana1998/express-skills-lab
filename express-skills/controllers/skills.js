const Skill = require('../models/skill');

module.exports = {
    index: index, 
    show: show, 
    new: newSkill,
    create: create
};


function create(req, res) {
    console.log(req.body , " will be contents of the body");
    Skill.create(req.body);
    console.log('created ^');
    res.redirect('/skills');
    console.log('successful redirect')
}

function newSkill (req, res){
    res.render('skills/new')
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        mostRecentSkills: req.time
    });
}

function show(req, res) {
    console.log('hitting show function');
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    })
}

