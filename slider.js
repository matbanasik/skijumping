function isMobile() {
return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (!isMobile()) {

let pagination = $("#pagination");

pagination.on("click", function(){
  $(this).find(".slide").toggleClass("active");
})


let slides = $(".single-slide");

let next = $(".go-next");
let prev = $(".go-prev");

let paginationIndex = 0;
let slideIndex = 0;
showSlides();


function showSlides() {
    let i;
	let pagination = $(".slide");
    let slides = $(".single-slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
		pagination[i].className = pagination[i].className.replace(" active", "");
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
	pagination[slideIndex-1].className += " active";
	
	
    setTimeout(showSlides, 7000);
	
}
}
	isMobile();


	










