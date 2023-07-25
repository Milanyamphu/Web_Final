function displaytext() {
      var txt = document.getElementById("text").value;
      alert(txt);
  }
  function displaycomments() {
    var comments = document.getElementById("comments").value;
    alert("Comments: " + comments);
  }
      // Function to display the selected sex in an alert
      function displaySex() {
          var selectedSex = document.querySelector('input[name="sex"]:checked');
          if (selectedSex) {
              alert("Your selected sex is: " + selectedSex.value);
          } else {
              alert("Please select a sex.");
          }
      }

     function change(newImageSrc) {
              var imageElement = document.getElementById("mainImage");
              imageElement.src = newImageSrc;
          }

      function changeImage(newImage) {
          var imageElement = document.getElementsByTagName("img")[0];
          imageElement.src = newImage;
      }