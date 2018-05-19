$(document).ready(function() {
 
  //addPlantBtn
  $("#addPlantBtn").on("click", function(){
    window.location.href="/addPlant"
    //if logged in, take to page
    //else take to sign-up page
  });
  //cancelAddPlantBtn
  $("#cancelAddPlantBtn").on("click", function(e){
    e.preventDefault();
    window.location.href="/myPlants"
  });

  $("#loginPage").on("click", function(e){
    e.preventDefault();
    window.location.href="/login"
  });

  $("#signUpBtn").on("click", function(e){
    e.preventDefault();
    window.location.href="/signup"
  });

  $("#submitPlant").on("click", function(e){
    //get form data from add a plant
    //OR get info from drop-down menu
    e.preventDefault();
    var waterInt = $("#wateringNeedsInt").val().trim();
    if (waterInt === ""){
      waterInt = null;
    }

    //get masterId value from dropdown menu
    var masterPlantId = $("#masterId").val();
    if (masterPlantId === ""){
      masterPlantId = null;
    };

    if (plant_common_name!=="" && plant_water_text!== "" && sun_placement !== "" && pet_friendly !== ""){

      var newPlant = {
        plant_common_name: $("#commonName").val().trim(),
        plant_water_text: $("#wateringNeedsText").val().trim(),
        sun_placement: $("#sunNeeds").val(),
        pet_friendly: $("#petFriendly").val(),
        plant_water_int: waterInt,
        plant_scientific_name: $("#scientificName").val().trim() || null
        // masterId: null
      };

      $.ajax("/api/plants", {
        type:"POST",
        data:newPlant
        }).then(
          function(){
            window.location.href = "/myPlants";
          }
        ); 
      }
      else{
        var newPlant = {
          // plant_common_name: $("#commonName").val().trim(),
          // plant_water_text: $("#wateringNeedsText").val().trim(),
          // sun_placement: $("#sunNeeds").val(),
          // pet_friendly: $("#petFriendly").val(),
          // plant_water_int: waterInt,
          // plant_scientific_name: $("#scientificName").val().trim() || null,
          masterPlantId: masterPlantId
        };
  
        $.ajax("/api/plants", {
          type:"POST",
          data:newPlant
          }).then(
            function(){
              window.location.href = "/myPlants";
            }
          ); 
      }


  })

});