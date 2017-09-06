let open = document.querySelector('.open-slide');
let close = document.querySelector('.btn-close');

open.addEventListener('click', openSlideMenu);
close.addEventListener('click', closeSlideMenu);


function openSlideMenu(){
	document.getElementById('side-menu').style.width = '250px';
	document.querySelector('body').style.marginLeft = '250px';
}

function closeSlideMenu(){
	document.getElementById('side-menu').style.width = '0';
	document.querySelector('body').style.marginLeft = 'auto';
}