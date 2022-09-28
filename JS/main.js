let iconList = document.querySelector(".iconList");
let showHide = document.getElementById("showHide");

$(document).ready(function () {
  $("#showHide").click(function () {
    $(".iconList").animate({
      width: "toggle",
    });
  });
  $("#iconInfo").click(function () {
    $(".iconList").animate({
      width: "toggle",
    });
  });
});
