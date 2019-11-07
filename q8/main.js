var input = document.getElementById('input');
var color = document.getElementById('color');
var btn = document.getElementById('add-btn');
var ul = document.querySelector('ul');


btn.onclick = function() {
	if(['red','blue','yellow'].includes(color.value.toLowerCase())){
		console.log(ul)
		var li = document.createElement('li');

		li.innerText = input.value;
		li.classList.add(color.value)

		ul.appendChild(li);
	}
	console.log('done')
}