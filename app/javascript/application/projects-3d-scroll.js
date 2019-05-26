const setUp3D = () => {

  console.log("Loading 3D Projects Scene");

  if (window.frameElement) {
    // the iFrame has loaded
    const threeD = {
      moveCamera: function() {
        document.documentElement.style.setProperty("--cameraZ", window.pageYOffset);
      },
      setSceneHeight: function () {
        const self = this;
        const numberOfItems = 4; // Or number of items you have in `.scene3D`
        const itemZ = parseFloat(
          getComputedStyle(this.projectsIFrame.contentDocument.documentElement).getPropertyValue("--itemZ")
        );
        const scenePerspective = parseFloat(
          getComputedStyle(this.projectsIFrame.contentDocument.documentElement).getPropertyValue(
            "--scenePerspective"
          )
        );
        const cameraSpeed = parseFloat(
          getComputedStyle(this.projectsIFrame.contentDocument.documentElement).getPropertyValue("--cameraSpeed")
        );
      
        const height =
          window.innerHeight +
          scenePerspective * cameraSpeed +
          itemZ * cameraSpeed * numberOfItems;
      
        // Update --viewportHeight value
        this.projectsIFrame.contentDocument.documentElement.style.setProperty("--viewportHeight", height);
      },

      perspectiveOrigin: {
        x: parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--scenePerspectiveOriginX"
          )
        ),
        y: parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--scenePerspectiveOriginY"
          )
        ),
        maxGap: 10
      },
      
      moveCameraAngle: function (event) {
        const xGap =
          (((event.clientX - window.innerWidth / 2) * 100) /
            (window.innerWidth / 2)) *
          -1;
        const yGap =
          (((event.clientY - window.innerHeight / 2) * 100) /
            (window.innerHeight / 2)) *
          -1;
        const newPerspectiveOriginX =
        this.perspectiveOrigin.x + (xGap * this.perspectiveOrigin.maxGap) / 100;
        const newPerspectiveOriginY =
        this.perspectiveOrigin.y + (yGap * this.perspectiveOrigin.maxGap) / 100;
      
        document.documentElement.style.setProperty(
          "--scenePerspectiveOriginX",
          newPerspectiveOriginX
        );
        document.documentElement.style.setProperty(
          "--scenePerspectiveOriginY",
          newPerspectiveOriginY
        );
      },
  
      setUpIFrame: function () {
        const contentDocument = this.projectsIFrame.contentDocument;
        if (contentDocument.querySelector('#nav-button-container')) {
          contentDocument.querySelector('#nav-button-container').remove();
        }
        if (contentDocument.querySelector('#debug-button-container')) {
          contentDocument.querySelector('#debug-button-container').remove();
        }
        if (contentDocument.querySelector('#modal')) {
          contentDocument.querySelector('#modal').remove();
        }
        if (contentDocument.querySelector('#nav-slide-in-menu')) {
          contentDocument.querySelector('#nav-slide-in-menu').remove();
        }
        if (contentDocument.querySelector('.debug-panel')) {
          contentDocument.querySelector('.debug-panel').remove();
        }
        contentDocument.querySelector('#all-projects-link').addEventListener('click', function (e) {
          e.preventDefault();
          window.location.replace('/projects');
        });
        const allCardLinksArray = contentDocument.querySelectorAll('.project-card-link');
        allCardLinksArray.forEach(function(linkEl) {
          let replaceHref = linkEl.getAttribute('data-replace-href');
          if (replaceHref === "true") {
            let newHref = linkEl.getAttribute('href');
            linkEl.addEventListener('click', function(e) {
              e.preventDefault();
              linkEl.setAttribute('target', "")
              window.location.replace(newHref);
            })
          }
        })
      },
  
      init: function () {
        this.projectsContainer = top.document.querySelector('#projects-container') ? top.document.querySelector('#projects-container') : null;
        this.projectsIFrame = window.frameElement;
        if (this.projectsContainer && this.projectsIFrame) {
          this.setUpIFrame();
          window.addEventListener("scroll", this.moveCamera);
          window.addEventListener("mousemove", this.moveCameraAngle.bind(this));
          this.setSceneHeight();
        }
      }
    }
  
    threeD.init();

  }



}

document.addEventListener("DOMContentLoaded", setUp3D);

