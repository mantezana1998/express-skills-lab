const skills = [
    {id: 42069, skill: 'HTML'},
    {id: 199807, skill: 'CSS'},
    {id: 139608, skill: 'Node.js'}
    ];
    
    module.exports = {
        getAll,
        getOne,
        create,
        deleteOne
    }; 

    function deleteOne(id){
        const idx = skills.findIndex(skill => skill.id === parseInt(id));
        skills.splice(idx, 1);
    }
    
    function create(skill) {
        // console.log(req.body, "<--- will be the contents of the form");
        console.log(skill);
        skill.id=Date.now()%1000000;
        skills.push(skill);
        console.log(skills)
    }

    function getAll() {
        return skills;
    }

    function getOne(id) {
        return skills.find(s => s.id === parseInt(id));
    }
