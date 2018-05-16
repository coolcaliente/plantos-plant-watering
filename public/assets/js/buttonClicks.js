// var moment = require("moment");

$(document).ready(function() {
 
  $("#scheduleBtn").on("click", function(){
    window.location.href="../../../views/pages/schedule.handlebars";
  });

  //addPlantBtn
  $("#addPlantBtn").on("click", function(){
    console.log("here");
    window.location.href="/addPlant"
    //if logged in, take to page
    //else take to sign-up page
  })

  //if user clicks "watered" button, a happy message pops up
  $(document).on("click", ".feelGoodMsg", function () {
  });
  
  $(document).on("click", ".waterBtn", function (e) {
    console.log(this, this.id);
    var button=this.id;
    $("a").removeClass("figuringCycle");
    $(this).addClass("feelGoodMsg");
    // button.attr("id", "feelGoodMsg");
    // button.text("Watered");
  });

  //if user clicks "water now" button, it changes to "watered"
  $(document).on("click", ".waterNowBtn", function () {
    // var button=??;
    // console.log(this.id);
    // button.removeAtt("id", "feelGoodMsg")
    // button.attr("id", "feelGoodMsg");
    // button.text("Watered");
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

    console.log($("#commonName").val().trim());

    var newPlant = {
      plant_common_name: $("#commonName").val().trim(),
      plant_water_text: $("#wateringNeedsText").val().trim(),
      sun_placement: $("#sunNeeds").val(),
      pet_friendly: $("#petFriendly").val()
    };

    //add to newPlant object if these optional values are included on the form
    if ($("#wateringNeedsInt").val().trim() !== ""){
      newPlant={
        plant_water_int: $("#wateringNeedsInt").val().trim(),
      }
    }
    if ($("#scientificName").val().trim() !== ""){
      newPlant={
        plant_scentific_name: $("#scientificName").val().trim(),
      }
    }

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