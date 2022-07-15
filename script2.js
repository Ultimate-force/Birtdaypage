document.addEventListener('mousemove',(e)=>{
	let body = document.querySelector('body');
	let span = document.createElement('span');
	let x = e.offsetX;
	let y = e.offsetY;
	span.style.top = y + "px";
	span.style.left = x + "px";
	let size = Math.random() * 100;
	span.style.height = 20 + size + "px";
	span.style.width = 20 + size + "px";
	body.appendChild(span);

	setTimeout(()=>{
		span.remove();
	},2000)
})