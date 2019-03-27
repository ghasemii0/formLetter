$(document).ready(function()  {
  $("#name").submit(function(event)  {
    var nameToAddress = $("input#name1").val();

    $(".nameAddress").text(nameToAddress);
    $(letter).show();
    event.preventDefault();
  });
});
