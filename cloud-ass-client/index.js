const get = document.getElementById("getButton")
const post = document.getElementById("postButton")
const put = document.getElementById("putButton")
const del = document.getElementById("delButton")

const container = document.getElementById("home")

get.addEventListener("click", ()=>{

	$.ajax({
		url: 'http://localhost:3000/GET/persons',
		type: 'GET',
		success: function(data) {
			let whole = ``
			data.forEach((x)=>{
				whole += `<div class="singlePerson">
				<h1>id: ${x.id}</h1>
				<h1>name: ${x.name}</h1>
				<h1>age: ${x.age}</h1>
				<h1>email: ${x.email}</h1>
				<h1>gender: ${x.gender}</h1>
				</div>
				<hr>`

			})

			container.innerHTML = whole


		},
		error: function(xhr, status, error) {
			console.error('Error:', error);

		}
	});
})



function getData(){
	obj = {}
	obj.name = document.getElementById("name").value
	obj.age = document.getElementById("age").value
	obj.gender = document.getElementById("gender").value
	obj.email = document.getElementById("email").value

	return obj
}



const form = `
<label for="email" style="display: block; margin-bottom: 5px; font-weight: bold; color: #333;">Email:</label>
<input type="email" id="email" name="email" style="width: 100%; padding: 10px; border: none; border-radius: 5px; background-color: #eee; font-size: 16px; color: #333; box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);">
</div>

<div style="margin-bottom: 20px;">
<label for="name" style="display: block; margin-bottom: 5px; font-weight: bold; color: #333;">Name:</label>
<input type="text" id="name" name="name" style="width: 100%; padding: 10px; border: none; border-radius: 5px; background-color: #eee; font-size: 16px; color: #333; box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);">
</div>

<div style="margin-bottom: 20px;">
<label for="age" style="display: block; margin-bottom: 5px; font-weight: bold; color: #333;">Age:</label>
<input type="number" id="age" name="age" style="width: 100%; padding: 10px; border: none; border-radius: 5px; background-color: #eee; font-size: 16px; color: #333; box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);">
</div>

<div style="margin-bottom: 20px;">
<label for="gender" style="display: block; margin-bottom: 5px; font-weight: bold; color: #333;">Gender:</label>
<select id="gender" name="gender" style="width: 100%; padding: 10px; border: none; border-radius: 5px; background-color: #eee; font-size: 16px; color: #333; box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);">
<option value="male">Male</option>
<option value="female">Female</option>
<option value="other">Other</option>
</select>
</div>


</form>

<button id="save" style="margin-top: 20px; padding: 10px 20px; background-color: #0077ff; color: #fff; font-size: 16px; border: none; border-radius: 5px; cursor: pointer; font-family: Arial, sans-serif;">Save</button>`

post.addEventListener("click", ()=>{
	document.getElementById("home").innerHTML = `<form style="width: 100%; margin: 0 auto; padding: 20px; background-color: #f7f7f7; border-radius: 5px; font-family: Arial, sans-serif;">
<div style="margin-bottom: 20px;">` + form
	document.getElementById("save").addEventListener("click", ()=>{
		let newObj = getData()
		console.log(newObj)
		$.ajax({
			url: 'http://localhost:3000/POST/persons',
			type: 'POST',
			contentType: "application/json",
			data: JSON.stringify(newObj),
			success: function(data) {
				get.click();

			}
		});
	})

})




put.addEventListener("click", ()=>{
	const newForm = `<form style="width: 100%; margin: 0 auto; padding: 20px; background-color: #f7f7f7; border-radius: 5px; font-family: Arial, sans-serif;">
<div style="margin-bottom: 20px;">`+`
	<label for="id" style="display: block; margin-bottom: 5px; font-weight: bold; color: #333;">ID:</label>
	<input type="text" id="idid" name="id" style="width: 100%; padding: 10px; border: none; border-radius: 5px; background-color: #eee; font-size: 16px; color: #333; box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);">`+form;
	document.getElementById("home").innerHTML = newForm
	document.getElementById("save").addEventListener("click", ()=>{
		let newObj = getData()

		const id = document.getElementById("idid").value
		newObj.id = id
		$.ajax({
			url: `http://localhost:3000/PUT/persons/${id}`,
			type: 'PUT',
			contentType: "application/json",
			data: JSON.stringify(newObj),
			success: function(data) {
				get.click();


			}
		});
	})

})


del.addEventListener("click", ()=>{
	const newForm = `<form style="width: 100%; margin: 0 auto; padding: 20px; background-color: #f7f7f7; border-radius: 5px; font-family: Arial, sans-serif;">
<div style="margin-bottom: 20px;">`+`
	<label for="id" style="display: block; margin-bottom: 5px; font-weight: bold; color: #333;">ID:</label>
	<input type="text" id="idid" name="id" style="width: 100%; padding: 10px; border: none; border-radius: 5px; background-color: #eee; font-size: 16px; color: #333; box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);">`+`</form>

<button type="button" id="save" style="margin-top: 20px; padding: 10px 20px; background-color: #0077ff; color: #fff; font-size: 16px; border: none; border-radius: 5px; cursor: pointer; font-family: Arial, sans-serif;">Save</button>`;
	document.getElementById("home").innerHTML = newForm
	document.getElementById("save").addEventListener("click", ()=>{
		

		const id = document.getElementById("idid").value

		$.ajax({
			url: `http://localhost:3000/DELETE/persons/${id}`,
			type: 'DELETE',
			
			data: id,
			success: function(data) {
				//get.click();
				get.click();


			}
		});
	})

})
