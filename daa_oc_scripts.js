 function renderGallery() {
        cloudinary.galleryWidget({
          container: '#cloudinary-slideshow',
          cloudName: 'virtual-inc',
          carouselLocation: 'bottom',
          mediaAssets: [{
            tag: "one-conference-2019-slideshow",
            transformation: {
              crop: 'fill',
              h: 300,
              w: 300
            }
          }],
        }).render();
      }
      
        var url = window.location.href
  var hash = url.substring(url.indexOf("#") + 1);
  document.querySelectorAll('.' + hash)[0].checked = true
  console.log(hash)
