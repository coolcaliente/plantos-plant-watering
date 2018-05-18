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

  //if user clicks "watered" button, a happy message pops up; the btn trigger for this is on myPlants page
  $(document).on("click", "#happyMsgModal", function () {}); //working

  //if user clicks "water now" button, it changes to "watered"
  $(document).on("click", ".waterNowBtn", function () {
    $(this).removeClass("waterNowBtn");
    
    $(this).addClass("feelGoodMsg");//need this?
    $(this).attr("data-toggle", "modal");
    $(this).attr("data-target", "#happyMsgModal");

    $(this).text("Watered");
    //need to remove these classes later
    //data-toggle="modal" data-target="#exampleModal">    

    //update lwd to today using ajax call
  });

  //if user clicks "figuring cycle" button, it starts calculating and sends msg with directions
  //id is the plant id, not user id
  $(document).on("click", ".figuringCycle", function () {
    $.get("/api/lastWatered/:id", function(data){
      console.log(data.lasw_watered_date);
      var date = moment();
      var newWaterDate;

      //if there's no lwd1, record lwd1
      if (data.lwd1 === null){
        newWaterDate = {lwd1=date};
        postdata();
      }
      //if lwd1 is filled, check lwd2 and record
      else if (data.lwd2 === null){
        newWaterDate = {lwd2=date};
        postdata();
      }
      //if lwd2 is filled, check lwd3 and record
      else if (data.lwd3 === null){
        newWaterDate = {lwd3=date};
        postdata();
      }
      //if lwd3 is filled, check lwd4 and record
      else if (data.lwd4 === null){
        newWaterDate = {lwd4=date};
        postdata();
      }
      //if lwd4 is filled, calculate average, change btn
      else {
        var add = parseInt(data.lwd1) + parseInt(data.lwd2) + parseInt(data.lwd3) + parseInt(data.lwd4);
        var newLastWatered = add / 4;
        //congrats modal??
      }

      function postdata(){
        $.ajax("/api/lastWatered",{
          type:"POST",
          data:newWaterDate
        }).then(
          function(){
            //pop up modal??
          }
        );        
      };

      //need update call to put last_watered_date into plants table
      $.ajax("/api/plants",{
        type:"PUT",
        data:newLastWatered
      })
    });
  });

  //if user clicks "x days left" it gives the option to restart the water cycle or change the cycle (if they've miscalculated how much water is needed
  $(document).on("click", "changeCycleBtn", function () {
    //modal "You have x days left. Option1: Do you want to water it now and restart the cycle? Option2: Delete this plant Option3: Do you want to recalculate the water cycle? Or cancel?" 
  
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