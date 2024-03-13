function showBanner() {
  document.getElementById("popupContainer").style.display = "block";
}
function closeBanner() { 
  document.getElementById("popupContainer").style.display = "none";
}

function showBannerOnSpecificDays() {
  var currentDate = new Date();
  var currentDay = currentDate.getDay(); // Get the current day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
  if (currentDay >= 1  && currentDay <= 3) {
    
  } else {
    showBanner(); 
    closeBanner(); 
  }
}
showBannerOnSpecificDays();