// Function to initialize the map
function initialize() {
    var opt = {
      zoom: 13,
      center: new google.maps.LatLng(26.806544704330967, 87.28459782814595),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var mm = document.getElementById("mymap");
    map = new google.maps.Map(mm, opt);
    
     // Create markers
  var marker1= new google.maps.Marker({
      position: new google.maps.LatLng(26.821477710231143, 87.28868960063325),
      map: map,
      title: "Central Campus of Technology"
    });
  
    var marker2 = new google.maps.Marker({
      position: new google.maps.LatLng(26.827576767342215, 87.28145483595479),
      map: map,
      title: "Dharan Stadium"
    });
  
    var marker3= new google.maps.Marker({
      position: new google.maps.LatLng(26.813111169415933, 87.2683707439484),
      map: map,
      title: "B.P. Koirala Institute of Health Sciences"
    });
  
  
    // Add click event listeners to each marker
  google.maps.event.addListener(marker1, 'click', function() {
    var info1 = new google.maps.InfoWindow({
      content: "It is the fore runner of food technology education in Nepal. The campus offers theoretical and practical education in the field of science and technology. To date, the campus has produced more than 500 highly qualified food technology graduates. Annually, nearly 25 percent of them go abroad for further studies."
    });
    info1.open(map, marker1);
  });
  google.maps.event.addListener(marker2, 'click', function() {
    var info2 = new google.maps.InfoWindow({
      content: "Dharan Stadium, also known as the ANFA Technical Center, is a multi-purpose stadium located in Dharan, Nepal. It is primarily used for football (soccer) matches and serves as a training center for the All Nepal Football Association (ANFA).The stadium has a seating capacity of approximately 5,000 spectators."
    });
    info2.open(map, marker2);
  });
  google.maps.event.addListener(marker3, 'click', function() {
    var info3 = new google.maps.InfoWindow({
      content: "The B.P. Koirala Institute of Health Sciences (BPKIHS) is a renowned medical institution located in Dharan, Nepal. It is named after the late Prime Minister of Nepal, Bisheshwar Prasad Koirala, who played a significant role in establishing the institute."
    });
    info3.open(map, marker3);
  });
  
  }
  // Call the initialize function when the window is loaded
  google.maps.event.addDomListener(window, 'load', initialize);
  