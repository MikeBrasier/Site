

//CHECKS WHAT PAGE THE USER IS ON AND CHANGES NAVIGATION ACCORDINGLY
window.onload = function(){
  if(document.URL.indexOf("education.html") >= 0){
  document.querySelector(".education").style.backgroundColor = "#9e67f7";
    }else if(document.URL.indexOf("interests.html") >= 0){
      document.querySelector(".interests").style.backgroundColor = "#9e67f7"; //DUE TO THIS FUNCTION USING TEXT PRESENT IN THE URL
      }else{document.querySelector(".contact").style.backgroundColor = "#9e67f7"; //IF LAUNCHED INTO LIVE ENVIRONMENT I WILL HAVE TO CHANGE THIS
  }
}
document.querySelector(".main-name").addEventListener("mouseleave", defaultText); //change h1 text back
  function defaultText(){
    document.querySelector(".main-name").innerHTML = "Bradley Archer";
  }


//CUSTOMISED GOOGLE MAPS API
//function initMap() {
 // const location = {lat: 52.6235, lng: -1.1409};
//const map = new google.maps.Map(document.querySelector('.map'), {
//zoom: 13,
//center: location
//});
// const contentString = "Current Residence: Filbert Village";
//const infowindow = new google.maps.InfoWindow({
//          content: contentString
//     });
//      marker.addListener('click', function() {
//      infowindow.open(map, marker);
//   });}



