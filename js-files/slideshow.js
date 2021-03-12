const imgs = document.querySelectorAll('.slides')

const nextImageDelay = 6000;

let currentImageCounter = 0;

imgs[currentImageCounter].style.opacity = 1

setInterval(nextImage , nextImageDelay)

function nextImage(){
  imgs[currentImageCounter].style.opacity = 0

  currentImageCounter = (currentImageCounter + 1) % imgs.length

  imgs[currentImageCounter].style.opacity = 1
}



