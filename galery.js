const modal = document.querySelector('.modal-gallery');

//Otwieranie galerii
function openModal () {
	modal.style.display = "block";
	
	const slides = document.querySelectorAll('.modal-slides');
	slides[0].style.display = "block";
};

const openGalery = document.querySelector('.single-galery');
openGalery.addEventListener('click', openModal);




//Zamykanie galerii
function closeModal () {
	modal.style.display = "none";
};

const closeBtn = document.querySelector('.close-gallery');
closeBtn.addEventListener('click', closeModal);


//Zmiana slajdów
let imageIndex = 1; 


const nextSlide = document.querySelector('.next');
nextSlide.addEventListener('click', nextSlides);

const prevSlide = document.querySelector('.prev');
prevSlide.addEventListener('click', prevSlides);




//Następny slajd
function nextSlides() {
	const slides = document.querySelectorAll('.modal-slides');
	const thumbnails = document.querySelectorAll('.thumbnail');
	
	let i;
	
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
		thumbnails[i].className = thumbnails[i].className.replace(" active", "");
    }
	
    imageIndex++;
	
    if (imageIndex > slides.length) {imageIndex = 1} 
	
	
    slides[imageIndex-1].style.display = "block"; 
	thumbnails[imageIndex-1].className += " active"; 
}



//Poprzedni slajd
function prevSlides() {
	const slides = document.querySelectorAll('.modal-slides');
	const thumbnails = document.querySelectorAll('.thumbnail');
	
	let i;
	
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
		thumbnails[i].className = thumbnails[i].className.replace(" active", "");
    }
	
    imageIndex--;
	
    
	if (imageIndex < 1) {imageIndex = slides.length -1}
	
    slides[imageIndex-1].style.display = "block"; 
	thumbnails[imageIndex-1].className += " active";
	 
}

