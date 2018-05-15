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


  $("#submitPlant").on("click", function(){
    //get form data from add a plant
    //create card with pic, name, link to modal
    var newPlant = {
      common_name: $("#commonName").val().trim(),
      sci_name: $("#scientificName").val().trim(),
      water_needs_text: $("#wateringNeedsText").val().trim(),
      
    };
  })

});