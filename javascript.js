var color1 = document.querySelector('#input1');
var color2 = document.querySelector('#input2');
var code = document.querySelector('h3');
var button = document.querySelector('button');


function setGradient(){

	document.body.style.background = "linear-gradient(to right, "
									+ color1.value + ", " + color2.value + ")";

	code.textContent = document.body.style.background + ";" ;
}


function generateRandom(){

	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	return ("#"+ randomColor);
}


setGradient();

button.addEventListener('click', function(){

        color1.value = generateRandom();
        color2.value = generateRandom();
        setGradient();
})

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
