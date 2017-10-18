let open = document.querySelector('.open-slide');
let close = document.querySelector('.btn-close');

open.addEventListener('click', openSlideMenu);
close.addEventListener('click', closeSlideMenu);


function openSlideMenu(){
	document.getElementById('side-menu').style.display = 'block';
	
}

function closeSlideMenu(){
	document.getElementById('side-menu').style.display = 'none';

}