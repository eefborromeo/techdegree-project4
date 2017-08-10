// Lightbox Options
lightbox.option({
  alwaysShowNavOnTouchDevices: true,
  showImageNumberLabel: false,
});



$("input[name='userInput']").keyup(function () {
  var search = $(this).val().toLowerCase();

  $(".main-content div").each(function(i) {
    var caption = $(this).children().attr("data-title");
    var lowerCaption = $(caption).text().toLowerCase();

    if (lowerCaption.indexOf(search) > -1) {
      $(this).show();
    } else {
      $(this).hide();
    }
  })
});
