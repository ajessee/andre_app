const setUpNav = () => {

  console.log("Loading Navigation Module");

  const nav = {
    mobileView: window.matchMedia('(max-width : 767px)').matches,

    onScroll: function (mainPage) {
      let offsetHeight,
          bounding,
          boundingTop;

      // This determines at what scrollY coordinate the nav will show / shrink. Conditional on main page or nah.
      if (mainPage) {
        offsetHeight = this.aboutMeContainer.offsetHeight;
        bounding = this.aboutMeContainer.getBoundingClientRect();
        boundingTop = bounding.top;
      } else {

      }

      if (offsetHeight + boundingTop < 0) {
        this.navButtonContainer.style.display = "block";
      } else  {
        this.navButtonContainer.style.display = "none";
      }
    },

    slideInMenuToggle: function () {
      if (this.slideInMenu.classList.contains('menu-closed')) {
        this.slideInMenu.classList.remove('menu-closed');
        this.slideInMenu.style.boxShadow ='-7px 0px 22px 0px rgba(0,0,0,0.75)';
      } else {
        this.slideInMenu.classList.add('menu-closed');
        this.slideInMenu.style.boxShadow = 'none';
      }
    },

    init: function (notNew) {
      let self = this;
      this.navButtonContainer = document.querySelector('#nav-button-container');
      this.slideInMenu = document.querySelector('#nav-slide-in-menu');
      this.aboutMeContainer = document.querySelector('#about-me-container') ? document.querySelector('#about-me-container') : null;
      
      this.httpErrorContainer = document.querySelector(".http-error-container") ? document.querySelector(".http-error-container") : null;
     
      if (this.aboutMeContainer) {
        document.addEventListener("scroll", function (e) {
          self.onScroll(true);
        });
        this.navButtonContainer.addEventListener("click", function (e) {
          self.slideInMenuToggle();
        });
      
      } else if (this.httpErrorContainer) {
        return;
      } else {
       
      }

    }
  };
  nav.init();

  window.utils.navigation = nav;
}

document.addEventListener("DOMContentLoaded", setUpNav);