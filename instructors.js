const fs = require('fs')
const data = require('./data.json')
const { age } = require('./utils.js')
const { date, born } = require('./utils.js')

// show

exports.show = function (req, res) {

    const { id } = req.params

    const foundInstructor = data.instructors.find(function(instructor) {
        return id == instructor.id
    })

    if (!foundInstructor) return res.send ("Instructor not found!")

    const instructor = {
        ...foundInstructor,
        age: age(foundInstructor.birth),
        services: foundInstructor.services.split(","),
        created_at: born(foundInstructor.created_at),
    }

    return res.render('./instructors/show', { instructor })
}   

// create
exports.post = function (req, res) {

    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "") {
        return res.send ("Por favor, preencha todos os campos!")
        }
    }
    
    let { avatar_url, name, birth, gender, services } = req.body

    birth = Date.parse(req.body.birth)
    const created_at = Date.now()
    const id = Number(data.instructors.length + 1)

    data.instructors.push({
        id,
        avatar_url,
        name,
        gender,
        services,
        birth,
        created_at
    }) // [{...},{...}]

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
    if (err) return res.send("Write File error!")

    return res.redirect(`/instructors/${id}`)
    })

}

// edit
exports.edit = function (req, res) {

    const { id } = req.params

    const foundInstructor = data.instructors.find(function(instructor) {
        return id == instructor.id
    })

    if (!foundInstructor) return res.send ("Instructor not found!")

    const instructor = {
        ...foundInstructor,
        birth: date(foundInstructor.birth)
    }

    return res.render("instructors/edit", { instructor, foundInstructor })
}

// put
exports.put = function (req, res) {

}