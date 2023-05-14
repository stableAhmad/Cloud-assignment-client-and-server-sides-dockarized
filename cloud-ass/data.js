const persons = [

	{ 	
	id:1,
	name:"Ahmad",
	age:22,
	gender:"male",
	email:"ahmadmohamed2178@gmail.com"
	},
	{
	id:2,
	name:"Mohamad",
	age:22,
	gender:"male",
	email:"second@gmail.com"
	}
]

function get() {
return persons
}

function add(newPerson) {
persons.push(newPerson)
}

function set(val, id){
for(let i = 0; i < persons.length; i++){
	if(persons[i].id == id){
		persons[i].name = val.name
		persons[i].age = val.age
		persons[i].email = val.email
		persons[i].gender = val.gender
		break
	}
}
}

function del(id) {
persons.splice(id-1,1)
for (let i = 0; i < persons.length ; i++) {
    persons[i].id = i+1
}
}
getData = ()=> {return get() }
addData = (val) => { add(val) }
setData = (val, id) => {set(val, id) }
delData = (val) => {del(val) }

module.exports = {getData, addData, setData, delData}
