$(document).ready(function() {
 
  getPlants();

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


  $("#submitPlant").on("click", function(e){
    //get form data from add a plant
    //create card with pic, name, link to modal
    e.preventDefault();

    console.log($("#commonName").val().trim());

    var newPlant = {
      plant_common_name: $("#commonName").val().trim(),
      plant_scentific_name: $("#scientificName").val().trim(),
      plant_water_text: $("#wateringNeedsText").val().trim(),
      plant_water_int: $("#wateringNeedsInt").val().trim(),
      sun_placement: $("#sunNeeds").val(),
      pet_friendly: $("#petFriendly").val()
    };
    console.log(newPlant);

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
        newButton.attr("href", "#");
        newButton.addClass("btn btn-primary");
        newButton.text("Watered Button");//depends on how many days left

        //calculate days
        // var lwd = data[i].last_watered_date; //keep this
        var ldw=moment("2018, 05, 10", "YYYY MM DD");//temp
        var differ = dwl.diff(moment(), "days");
        console.log(differ);

        if (differ < 0){
          
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