// Function to make image large //
  function largeImage(imageSrc) {
    largedImage = document.getElementById('largedImage');
    largedImage.src = imageSrc;
    largedImage.style.width = '320px';
    largedImage.style.height = 'auto';
    largedImage.style.border = '2px solid blue';
    largedImage.style.boxShadow = '0 0 10px rgba(0, 0, 255, 0.5)';
  }

// Set a default image to display on page load //
  document.addEventListener('DOMContentLoaded', function () {
    const defaultImageSrc = 'img/black.jpg'; // Replace this with the path to your default image
    largeImage(defaultImageSrc);
  });