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
      console.log("here"+data[0].id);

      for (var i=0; i<data.length; i++){
        var newDiv=$("<div>");
        newDiv.text(data[i].plant_common_name);
        newDiv.attr("id", data[i].id);

        //use this after images in db
        // var imageUrl=data[i].plant_image;
        // newDiv.css('background-image', '/url(' + imageUrl + ')');

        //delete this after images in db
        newDiv.css('background-image', 'url(" https://www.ikea.com/au/en/catalog/products/80349713/")');
        newDiv.css("background-image", "url('https://www.homedepot.com/p/Costa-Farms-ZZ-Plant-in-6-in-Grower-Pot-6ZZ/202204595')");

        //delete all between here ....
        newDiv.css("border", "1px solid black");
        newDiv.css("border-radius", "50%");
        newDiv.css("height", "150px");
        newDiv.css("width", "150px");
        newDiv.css("text-align", "center");
        //... and here after scss styling

        var newButton=$("<button>");
        newButton.text("hi");//depends on how many days left
        newButton.attr("wateredIt");
        newButton.append(newDiv);

        $("#myPlantsPage").prepend(newDiv);
      }


      // var rowsToAdd = [];
      // for (var i = 0; i < data.length; i++) {
      //   rowsToAdd.push(createAuthorRow(data[i]));
      // }
      // authorSelect.empty();
      // console.log(rowsToAdd);
      // console.log(authorSelect);
      // authorSelect.append(rowsToAdd);
      // authorSelect.val(authorId);

    })
  }

});