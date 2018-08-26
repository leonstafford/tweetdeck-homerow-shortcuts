$(document).on("keydown", function(event) {
  switch(event.which) {
    case 74: // up 
      $(document).trigger('uiKeyUp');
    break;

    case 75: // down 
      $(document).trigger('uiKeyDown');
    break;

    case 72: // left
      $(document).trigger('uiKeyLeft');
    break;

    case 76: // right
      $(document).trigger('uiKeyRight');
    break;
  }
});

