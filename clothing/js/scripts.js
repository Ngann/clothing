$(document).ready(function() {
  $("form#clothes").submit(function(event) {
    event.preventDefault();

    var nameInput = $("#name").val();
    var addressline1Input = $("#addressline1").val();
    var addressline2Input = $("#addressline2").val();
    var cityInput = $("#city").val();
    var stateInput = $("#state").val();
    var zipcodeInput = $("#zipcode").val();
    var animalInput = $("#animal").val();
    $(".name").text(nameInput);
    $(".addressline1").text(addressline1Input);
    $(".addressline2").text(addressline2Input);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zipcode").text(zipcodeInput);
    $(".animal").text(animalInput);
    $("div.homepage").fadeOut();
    $("div.receipt").fadeIn();
    if (animalInput === "Tshirt"){
      $("img#tshirt").show();
    } else if (animalInput === "Jean") {
      $("img#jean").show();
    } else if (animalInput === "Dress") {
      $("img#dress").show();
    } 
  });
});
