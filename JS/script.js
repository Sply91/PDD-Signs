document.addEventListener('DOMContentLoaded', function() {
    var popupTriggers = document.querySelectorAll('.popup-trigger');
    var popup = document.querySelector('.popup');
  
    for (var i = 0; i < popupTriggers.length; i++) {
      popupTriggers[i].addEventListener('click', function() {
        popup.style.display = 'flex';
        centerPopup();
      });
    }
  
    popup.addEventListener('click', function(event) {
      if (event.target === popup) {
        popup.style.display = 'none';
      }
    });
  
    function centerPopup() {
      var windowHeight = window.innerHeight;
      var popupHeight = popup.offsetHeight;
      var topOffset = (windowHeight - popupHeight) / 2;
      popup.style.top = topOffset + 'px';
    }
  });

window.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('myPopup');
    var screenHeight = window.innerHeight;
    var popupHeight = screenHeight - 32;
    popup.style.height = popupHeight + 'px';
});