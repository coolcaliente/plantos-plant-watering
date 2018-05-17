// var moment = require("moment");

$(document).ready(function() {
 
  $("#scheduleBtn").on("click", function(){
    window.location.href="../../../views/pages/schedule.handlebars";
  });

  //addPlantBtn
  $("#addPlantBtn").on("click", function(e){
    console.log("here");
    e.preventDefault();
    window.location.href="/addPlant"
    //if logged in, take to page
    //else take to sign-up page
  });

  //if user clicks "watered" button, a happy message pops up
  // Button trigger for modal on myPlants page
  $(document).on("click", "#happyMsgModal", function () {}); //working

  //data-toggle="modal" data-target="#exampleModal">

  //this is junk, delete later
  // $(document).on("click", ".waterBtn", function (e) {
  //   $(this).removeClass("figuringCycle");
  //   $(this).addClass("feelGoodMsg");//working
  //   $(this).attr("data-target", "#happyMsgModal");
  //   $(this).attr("data-toggle", "modal");
  // });

  //if user clicks "water now" button, it changes to "watered"
  $(document).on("click", ".waterNowBtn", function () {
    $(this).removeClass("waterNowBtn");
    $(this).addClass("feelGoodMsg");//need this?
    $(this).attr("data-toggle", "modal");
    $(this).attr("data-target", "#happyMsgModal");
    $(this).text("Watered");

    //update lwd to today using ajax call
  });

  //if user clicks "figuring cycle" button, it starts calculating and sends msg with directions
  $(document).on("click", ".figuringCycle", function () {
  });

  //if user clicks "x days left" it gives the option to restart the water cycle or change the cycle (if they've miscalculated how much water is needed
  $(document).on("click", "changeCycleBtn", function () {
  });

  $("#submitPlant").on("click", function(e){
    //get form data from add a plant
    //create card with pic, name, link to modal
    e.preventDefault();
    var waterInt = $("#wateringNeedsInt").val().trim();
    if (waterInt === ""){
      waterInt = null;
    }

    var newPlant = {
      plant_common_name: $("#commonName").val().trim(),
      plant_water_text: $("#wateringNeedsText").val().trim(),
      sun_placement: $("#sunNeeds").val(),
      pet_friendly: $("#petFriendly").val(),
      plant_water_int: waterInt,
      plant_scientific_name: $("#scientificName").val().trim() || null
    };

    $.ajax("/api/plants", {
      type:"POST",
      data:newPlant
    }).then(
      function(){
        window.location.href = "/myPlants";
      }
    )
  })

});