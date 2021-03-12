   
    const navSlide = () => {
      // Creating variables for your burger and you nav
      const burger = document.querySelector('.burger');
      const nav = document.querySelector('.nav-list');
  
      // Adding the "nav-active" class onto the nav when the burger is clicked.
  burger.addEventListener('click', () => {
      nav.classList.toggle('active')
  })
  }
  navSlide()