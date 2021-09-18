//*********Display navigation Menub on mobile************//
const showNav = () =>{
	const bars = document.querySelector(".burger");
	const links = document.querySelector(".navlinks");

	bars.addEventListener("click", () =>{
		//alert("burger triggred");
		links.classList.toggle("navlinks-open");
	})
}

showNav();
//******toggle Dark Mode and Light mode*****************//
const mode = () =>{
	const chageMode = document.querySelector(".light");
	const btn = document.getElementById("change");


	btn.addEventListener("click", () => {
		//alert("hello")
		chageMode.classList.toggle("dark");

	})
}

mode();


/***********Log in Form validation*********************
not necessary at this stage
*************************************************/
const validate = () =>{
	const form = document.getElementById("myform");
	const id = document.getElementById("userID");
	const pw = document.getElementById("password");
	const button = document.getElementById("btt");
	const validator = document.querySelector(".input");

	form.addEventListener("submit", ()=>{
		console.log("hello");
	})

	button.addEventListener("click", ()=>{
		//console.log("hi")

		checkInputs();
	})


//check inputs
	const idValue = id.value.trim();
	const pwValue = pw.value.trim();


	function checkInputs(e){
		e.preventDefault();
		if(idValue === ""){
			//console.log("id can not be empty");
			validator.classList.toggle("input-invalid");

		}else{
			//console.log("success")
			validator.classList.toggle("input-valid");
		}

		if(pwValue === ""){
			validator.classList.toggle("input-invalid")
		}else{
			validator.classList.toggle("input-valid");
		}
	}
	}

validate();