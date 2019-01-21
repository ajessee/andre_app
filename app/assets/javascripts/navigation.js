const setUpNav = () => {

  console.log("navigation.js");
  
  const navbar = document.querySelector("#main-nav");
  let navbarOffsetTop = navbar.offsetTop;
  let navbarOffsetHeight = navbar.offsetHeight;
  let navbarShrunk = false;
  const iconNames = ['projects', 'resources', 'blog', 'github', 'twitter', 'linkedin'];
  const allIconLabels = document.querySelectorAll(".icon-label");
  const bdwdIcon = document.querySelector("#bdwdIcon");
  let mobileView = window.matchMedia('(max-width : 767px)').matches;

  const iconScale = (event, element, scale, translate) => {
    if (event) {

      let eventType = event.type;

      if (event.target.parentElement.classList.contains("navbar-fixed")) {

        let operators = {
          multiply: function(a,b) {return a * b},
          divide: function(a,b) {return a / b},
        }

        let parensRegex = /\((.*)\)/;
        let iconEl = event.target.querySelector(".icon-grow");
        let scaleAttrValue = iconEl.getAttribute("transform");
        let scaleValue = parseFloat(scaleAttrValue.match(parensRegex).pop());

        let newScaleValue;
        if (eventType === "mouseenter") {
          newScaleValue = operators.multiply(scaleValue, 1.2).toString();
        }
        else {
          newScaleValue = operators.divide(scaleValue, 1.2).toString();
        }
        if (!translate) {
          // I've taken translate out from current use case but will leave this here in case I want to reimplement in future
          iconEl.setAttribute("transform", `scale(${newScaleValue}) translate(0)`);
        }
        else {
          iconEl.setAttribute("transform", `scale(${newScaleValue})`);
        }
        
      }
      else{
        event.target.querySelector(".icon-grow").setAttribute("transform", `scale(${scale})`);
      }
    }
    else if (element) {
      element.setAttribute("transform", `scale(${scale}) translate(${translate})`);
    }
  }

  const scrollTo = (e) => {
    let strSpliceIndex = e.target.closest('div').id.search('-');
    let name = e.target.closest('div').id.slice(0, strSpliceIndex);
    document.querySelector('#' + name +'-container').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  const scaleNavbar = (scale, translate) => {
    const allIcons = document.querySelectorAll(".icon-grow");
    allIcons.forEach(function(icon){
      iconScale(null, icon, scale, translate)
  })
  }

  const toggleIconLabels = (display) => {
    allIconLabels.forEach(function(label){
      label.style.display = display;
  })
  }

  iconNames.forEach((name) => {
    let element = document.querySelector('#' + name + '-icon');
    
    if (!mobileView) {
      element.addEventListener('mouseenter', function(event){
        iconScale(event, null, "1.3")
      });
      element.addEventListener('mouseleave', function(event) {
        iconScale(event, null, "1")
      });
    }
    if (name === 'projects' || name === 'resources' || name === 'blog') {
      element.addEventListener('click', scrollTo);
    }
  });

  const onScroll = (mainPage) => {

    let marker,
        delta;

    if (mainPage) {
      marker = navbarOffsetTop;
      delta = navbarOffsetTop - navbarOffsetHeight;
    }
    else {
      marker = navbarOffsetHeight;
      delta = navbarOffsetHeight;
    }
      if (window.scrollY > marker && !navbarShrunk && !mobileView) {
        if (!mainPage) {navbar.style.display = "grid";}
        navbar.classList.add("navbar-fixed");
        scaleNavbar("0.5", "0");
        toggleIconLabels("none");
        bdwdIcon.style.display = "block";
        navbarShrunk = true;
      }
      else if (window.scrollY < delta && navbarShrunk && !mobileView) {
        if (!mainPage) {navbar.style.display = "none";}
        navbar.classList.remove("navbar-fixed");
        scaleNavbar("1", "0");
        toggleIconLabels("block");
        bdwdIcon.style.display = "none";
        navbarShrunk = false;
      }
    }

  const resizeNavBar = () => {
    navbar.style.backgroundColor = "aliceblue";
    
    scaleNavbar("0.5", "0");
    toggleIconLabels("none");
    navbar.style.display = "grid";
    document.querySelector('#all-projects-container').style.marginTop = (navbar.offsetHeight / 1.8) + "px";
    bdwdIcon.style.display = "block";
  }
  
  if (document.querySelector('#about-me-container')) {
    document.addEventListener("scroll", onScroll);
  } 
  else if (document.querySelector('#all-projects-container')){
    navbar.style.display = "none";
    document.addEventListener("scroll", function(){
      onScroll(false);
    });
  }
}

document.addEventListener("DOMContentLoaded", setUpNav);

