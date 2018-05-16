// var moment = require("moment");

$(document).ready(function() {
 
  getPlants();//renders plant cards on the page

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
    this.addClass("feelGoodMsg");
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

  function getPlants(){
    $.get("/api/plants", function(data){

      for (var i=0; i<data.length; i++){
        //adding bootstrap card
        var newDiv=$("<div>");
        newDiv.addClass("card");
        newDiv.css("width", "18rem");
        newDiv.attr("id", data[i].id);

        var newImg=$("<img>");
        newImg.addClass("card-img-top mx-auto");
        newImg.attr("alt", data[i].plant_common_name);
        
        //use this after images in db
        // newImg.attr("src", data[i].plant_image);
        
        //delete this after images in db    
        newImg.attr("src", "assets/img/junkPlant.jpg");
        // newDiv.css("background-image", "url('assets/img/junkPlant.jpg')"); //works
        // newDiv.css("background-image", "url('https://www.ikea.com/au/en/images/products/asplenium-potted-plant__0540629_PE653098_S4.JPG')");

        
        var newDiv2=$("<div>");
        newDiv2.addClass("card-body");
        
        var newTitle=$("<h5>");
        newTitle.addClass("card-title");
        newTitle.text(data[i].plant_common_name);

        var newLine=$("<p>");
        newLine.addClass("card-text");

        var newButton=$("<a>");
        newButton.addClass("btn btn-primary waterBtn");

        console.log(data[i].last_watered_date);

        //if there's a last watered date...
        if (data[i].last_watered_date !== null){
          //calculate days btw current date and last watered
          // var lwd = data[i].last_watered_date; //keep this
          var lwd=moment("2018, 05, 10", "YYYY MM DD");//temp
          var difference = lwd.diff(moment(), "days");
          console.log(difference);

          //if current date = lwd, text = "watered"
          if (difference=0){
            newButton.text("Watered");
            newButton.addClass("feelGoodMsg");
          }
          //if it's been the required number of days (or more than), water it
          else if (difference >= data[i].plant_water_int){
            newButton.text("Water Now");
            newButton.addClass("waterNowBtn");
          }
          //otherwise figure out how many more days until watering
          else {
            var d = data[i].plant_water_int - difference;
            if (d=1){
              newButton.text(d+" Day Left");
              newButton.addClass("changeCycleBtn");
            }
            else{
              newButton.text(d+" Days Left");
              newButton.addClass("changeCycleBtn");
            }
          }
        }
        //if there's no lwd, start calculating it
        else{
          newButton.text("Click when watered to start calculing plant cycle.");
          newButton.addClass("figuringCycle");
        }

        newDiv2.append(newTitle);
        newDiv2.append(newLine);
        newDiv2.append(newButton);
        newDiv.append(newImg);
        newDiv.append(newDiv2);

        //delete all between here ....
        newDiv.css("border-radius", "15%");
        newImg.css("height", "100px");
        newImg.css("border-top", "20px");
        newImg.css("width", "100px");
        newDiv.css("text-align", "center");
        //... and here after scss styling

        $("#myPlantsPage").prepend(newDiv);
      }

    })
  }

});