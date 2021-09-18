//navigation menu
const nav = () =>{
	const bars = document.querySelector(".burger");
	const links = document.querySelector(".navlinks");


	bars.addEventListener("click", ()=>{
		links.classList.toggle("navlinks-open")
	}) 
}

nav();

//Dark Mode

const mode = () =>{
	const dark = document.querySelector(".light");
	const change = document.getElementById("mode");

	change.addEventListener("click", (e)=>{
		e.preventDefault()
		dark.classList.toggle("dark")
	})
}
mode();

//form validatoion

 const validate = () =>{
 	const form = document.getElementById("myform");
 	const boxes = document.querySelector(".input");
 	const firstName = document.getElementById("firstName");
 	const otherName = document.getElementById("OtherName");
 	const number = document.getElementById("number");
 	const email = document.getElementById("email");
 	const gender = document.getElementById("gender");
 	const birthday = document.getElementById("DOB");
 	const password = document.getElementById("password");
 	const password2 = document.getElementById("password2");

 	form.addEventListener("submit", ()=>{
 		//console.log("hello")
 		checkInputs();
 	});

 	function checkInputs(e){
 	 		//check inputs from fields
	 	const firstNameValue = firstName.value.trim();
	 	const otherNameValue = otherName.value.trim();
	 	const numberValue = number.value.trim();
	 	const emailValue = email.value.trim();
	 	const genderValue = gender.value.trim();
	 	const birthdayValue = birthday.value.trim();
	 	const passwordValue = password.value.trim()
	 	const password2Value = password2.value.trim();


	 	if(firstNameValue === ""){
	 		//show error message
	 		console.log("fist name can not be blank!");

	 	
	 	}else{
	 		//show success message
	 		e.preventDefault();
	 	}

	 }
 }

 validate();