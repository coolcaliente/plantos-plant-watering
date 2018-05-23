$(document).ready(function () {

  getPlants();//renders plant cards on the page

  function getPlants() {
    $.get("/api/usersplants/", function (plantData) {

      var data = plantData.Plants;
      console.log(data);//gives plants and ids

      for (var i = 0; i < data.length; i++) {
        var index=i;
        var plantId = data[index].id;

        renderCards(data, index, plantId);

      //   $.ajax({
      //     type:"GET",
      //     url: "/api/lastWatered/"+plantId,
      //     async: true,
      //     dataType: "json"
      //   }).then(function (waterData){
          
      //     //adding bootstrap card
      //     var newDiv = $("<div>");
      //     newDiv.addClass("card");
      //     // newDiv.css("width", "18rem");
      //     newDiv.attr("id", data[index].id);
      //     console.log(data[index].id);

      //     var newImg = $("<img>");
      //     newImg.addClass("card-img-top");
      //     newImg.attr("alt", data[index].plant_common_name);

      //     //use this after images in db
      //     // newImg.attr("src", data[index].plant_image);

      //     //delete this after images in db    
      //     newImg.attr("src", "assets/img/junkPlant.jpg");
      //     // newDiv.css("background-image", "url('assets/img/junkPlant.jpg')"); //works
      //     // newDiv.css("background-image", "url('https://www.ikea.com/au/en/images/products/asplenium-potted-plant__0540629_PE653098_S4.JPG')");

      //     var newDiv2 = $("<div>");
      //     newDiv2.addClass("card-body");

      //     var newTitle = $("<h3>");
      //     newTitle.addClass("card-title text-truncate");
      //     newTitle.text(data[index].plant_common_name);

      //     var newButton = $("<button>");
      //     newButton.addClass("btn btn-primary btn-block");
      //     newButton.attr("id", data[index].id);

      //     // var plantId = data[index].id;

      //     //calculate days btw current date and last watered
      //     var now = moment().format("YYYY-DD-MM");

      //     console.log("length: "+waterData.length);
      //     // console.log(waterData[0].createdAt);
      //     console.log("int: "+data[index].plant_water_int);
      //     var lwd = waterData[0].createdAt;
      //     var int = data[index].plant_water_int;

      //     //if there's no lwd and an int-->water it msg
      //     if (waterData.length === 0 && int !== null){
      //       newButton.text("Water Now");
      //       newButton.addClass("waterNowBtn");
      //     }

      //     //if there's more than 1 lwd and an int-->calc next date based on lwd and int
      //     //if date diff =0 water now msg, if too much time elapsed water now msg, or if more than 0 water in ? days msg
      //     else if (waterData.length > 0 && int !== null){
      //       //add water_int to lwd to calc next date
      //       // console.log(waterData[0].createdAt);
      //       console.log("lwd: "+ lwd);
      //       var newWaterDate = moment(lwd, "YYYY MM DD").add(int, "days").format("YYYY MM DD");
      //       console.log("new water date: "+newWaterDate);

      //       var difference = moment().diff(lwd, "days");
      //       console.log(difference);
      //       if (difference > 2){
      //         console.log("yes");
      //       } 
      //       else(console.log("no"))

      //       //if lwd = today --> watered text
      //       if (newWaterDate === moment().format("YYYY MM DD")){
      //         newButton.text("Watered");
      //         newButton.addClass("feelGoodMsg");//need this?
      //         //add data-toggle="modal" data-target="#exampleModal" to toggle modal
      //         newButton.attr("data-toggle", "modal");
      //         newButton.attr("data-target", "#happyMsgModal");
      //       }

      //       //if lwd + int is less than today --> water now text
      //       else if (difference > int){
      //         newButton.text("Water Now");
      //         newButton.addClass("waterNowBtn");
      //       }

      //       // if there's one day left --> 1 day left msg
      //       else if (difference = 1) {
      //         newButton.text(d + " Day Left");
      //         newButton.attr("days", d);
      //         newButton.addClass("changeCycleBtn");
      //       }

      //       // otherwise figure out how many more days until watering --> __ days left msg
      //       else {
      //         newButton.text(d + " Days Left");
      //         newButton.attr("days", d);
      //         newButton.addClass("changeCycleBtn");
      //       }
      //     }

      //     //if there's 1, 2, 3, lwd and no int-->calculating cycle msg
      //     else if (waterData.length <= 3 && int === null){
      //       newButton.text("Calculating watering cycle...");
      //       newButton.addClass("figuringCycle");            
      //     }

      //     //if there's 4 lwd and no int-->calc int, send int, then choose option from above
      //     else if (waterData.length = 4 && int === null){
      //       var difference = 0;

      //       //find the difference btw lwd4 and 3, 3 and 2, 2 and 1
      //       //add the differences up
      //       for (var i=0; i<4; i++){
      //         console.log(waterData[i]);
      //         difference += moment(waterData[i], "YYYY MM DD").diff(waterData[i+1], "days");
      //         console.log(difference);
      //       }
      //       //divide by 3
      //       console.log(difference/3);

      //       //send water_int to plants table
      //       $.put("/api/usersplants/", function (data) {

      //       });
      //     }

      //     else {
      //       console.log("error");
      //     };

      //   newDiv2.append(newTitle);
      //   newDiv2.append(newButton);
      //   newDiv.append(newImg);
      //   newDiv.append(newDiv2);

      //   //delete all between here ....
      //   newDiv.css("border-radius", "15%");
      //   newImg.css("height", "100px");
      //   newImg.css("border-top", "20px");
      //   newImg.css("width", "100px");
      //   newDiv.css("text-align", "center");
      //   newButton.css("color", "white");
      //   //... and here after scss styling

      //   $("#myPlantsPage").prepend(newDiv);
      // })//end ajax call
      }//end for loop
    })//end first api call
  }//end func getPlants()

function renderCards(data, index, plantId){
  $.ajax({
    type:"GET",
    url: "/api/lastWatered/"+plantId,
    async: true,
    dataType: "json"
  }).then(function (waterData){
    
    //adding bootstrap card
    var newDiv = $("<div>");
    newDiv.addClass("card");
    // newDiv.css("width", "18rem");
    newDiv.attr("id", data[index].id);
    console.log(data[index].id);

    var newImg = $("<img>");
    newImg.addClass("card-img-top");
    newImg.attr("alt", data[index].plant_common_name);

    //use this after images in db
    // newImg.attr("src", data[index].plant_image);

    //delete this after images in db    
    newImg.attr("src", "assets/img/junkPlant.jpg");
    // newDiv.css("background-image", "url('assets/img/junkPlant.jpg')"); //works
    // newDiv.css("background-image", "url('https://www.ikea.com/au/en/images/products/asplenium-potted-plant__0540629_PE653098_S4.JPG')");

    var newDiv2 = $("<div>");
    newDiv2.addClass("card-body");

    var newTitle = $("<h3>");
    newTitle.addClass("card-title text-truncate");
    newTitle.text(data[index].plant_common_name);

    var newButton = $("<button>");
    newButton.addClass("btn btn-primary btn-block");
    newButton.attr("id", data[index].id);

    // var plantId = data[index].id;

    //calculate days btw current date and last watered
    var now = moment().format("YYYY-DD-MM");

    console.log("length: "+waterData.length);
    // console.log(waterData[0].createdAt);
    console.log("int: "+data[index].plant_water_int);
    var lwd = waterData[0].createdAt;
    var int = data[index].plant_water_int;

    //if there's no lwd and an int-->water it msg
    if (waterData.length === 0 && int !== null){
      newButton.text("Water Now");
      newButton.addClass("waterNowBtn");
    }

    //if there's more than 1 lwd and an int-->calc next date based on lwd and int
    //if date diff =0 water now msg, if too much time elapsed water now msg, or if more than 0 water in ? days msg
    else if (waterData.length > 0 && int !== null){
      //add water_int to lwd to calc next date
      // console.log(waterData[0].createdAt);
      console.log("lwd: "+ lwd);
      var newWaterDate = moment(lwd, "YYYY MM DD").add(int, "days").format("YYYY MM DD");
      console.log("new water date: "+newWaterDate);

      var difference = moment().diff(lwd, "days");
      console.log(difference);
      if (difference > 2){
        console.log("yes");
      } 
      else(console.log("no"))

      //if lwd = today --> watered text
      if (newWaterDate === moment().format("YYYY MM DD")){
        newButton.text("Watered");
        newButton.addClass("feelGoodMsg");//need this?
        //add data-toggle="modal" data-target="#exampleModal" to toggle modal
        newButton.attr("data-toggle", "modal");
        newButton.attr("data-target", "#happyMsgModal");
      }

      //if lwd + int is less than today --> water now text
      else if (difference > int){
        newButton.text("Water Now");
        newButton.addClass("waterNowBtn");
      }

      // if there's one day left --> 1 day left msg
      else if (difference = 1) {
        newButton.text(d + " Day Left");
        newButton.attr("days", d);
        newButton.addClass("changeCycleBtn");
      }

      // otherwise figure out how many more days until watering --> __ days left msg
      else {
        newButton.text(d + " Days Left");
        newButton.attr("days", d);
        newButton.addClass("changeCycleBtn");
      }
    }

    //if there's 1, 2, 3, lwd and no int-->calculating cycle msg
    else if (waterData.length <= 3 && int === null){
      newButton.text("Calculating watering cycle...");
      newButton.addClass("figuringCycle");            
    }

    //if there's 4 lwd and no int-->calc int, send int, then choose option from above
    else if (waterData.length = 4 && int === null){
      var difference = 0;

      //find the difference btw lwd4 and 3, 3 and 2, 2 and 1
      //add the differences up
      for (var i=0; i<4; i++){
        console.log(waterData[i]);
        difference += moment(waterData[i], "YYYY MM DD").diff(waterData[i+1], "days");
        console.log(difference);
      }
      //divide by 3
      console.log(difference/3);

      //send water_int to plants table
      $.put("/api/usersplants/", function (data) {

      });
    }

    else {
      console.log("error");
    };

  newDiv2.append(newTitle);
  newDiv2.append(newButton);
  newDiv.append(newImg);
  newDiv.append(newDiv2);

  //delete all between here ....
  newDiv.css("border-radius", "15%");
  newImg.css("height", "100px");
  newImg.css("border-top", "20px");
  newImg.css("width", "100px");
  newDiv.css("text-align", "center");
  newButton.css("color", "white");
  //... and here after scss styling

  $("#myPlantsPage").prepend(newDiv);
})//end ajax call
}

});