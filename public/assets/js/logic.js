$(document).ready(function () {
  getPlants();//renders plant cards on the page
//
  function getPlants() {
    $.get("/api/plants", function (data) {
      $.get("/api/lastWatered", function(waterData){

      for (var i = 0; i < data.length; i++) {
        //adding bootstrap card
        var newDiv = $("<div>");
        newDiv.addClass("card");
        // newDiv.css("width", "18rem");
        newDiv.attr("id", data[i].id);

        var newImg = $("<img>");
        newImg.addClass("card-img-top");
        newImg.attr("alt", data[i].plant_common_name);

        //use this after images in db
        // newImg.attr("src", data[i].plant_image);

        //delete this after images in db    
        newImg.attr("src", "assets/img/junkPlant.jpg");
        // newDiv.css("background-image", "url('assets/img/junkPlant.jpg')"); //works
        // newDiv.css("background-image", "url('https://www.ikea.com/au/en/images/products/asplenium-potted-plant__0540629_PE653098_S4.JPG')");


        var newDiv2 = $("<div>");
        newDiv2.addClass("card-body");

        var newTitle = $("<h3>");
        newTitle.addClass("card-title text-truncate");
        newTitle.text(data[i].plant_common_name);

        // var newLine = $("<p>");
        // newLine.addClass("card-text");

        // var newButton = $("<a>");
        var newButton = $("<button>");
        newButton.addClass("btn btn-primary btn-block");
        newButton.attr("id", data[i].id);

        var length = waterData.Plants[0].lastWatereds.length;
        var waterDates = waterData.Plants[0].lastWatereds;
          
        console.log(waterData);
        console.log(data[i]);

        //calculate days btw current date and last watered
        var now = moment().format("YYYY-DD-MM");
        // var difference;
        // var difference = lwd.diff(moment(), "days");
        // console.log(difference);

        //if there's no lwd and an int-->water it msg
        if (length === 0 && data[i].plant_water_int !== null){
          newButton.text("Water Now");
          newButton.addClass("waterNowBtn");
        }

        //if there's 1 or more lwd and an int-->calc next date based on lwd and int-->if date diff =0 water now msg, if more than 0 water in ? days msg
        else if (length > 0 && data[i].plant_water_int !== null){
          //add water_int to lwd to calc next date
          var newWaterDate = moment(waterDates[0], "YYYY MM DD").add(data[i].plant_water_int, "days").format("YYYY MM DD");
          console.log(newWaterDate);

          //if lwd = today --> watered text
          if (newWaterDate === moment().format("YYYY MM DD")){
            newButton.text("Watered");
            newButton.addClass("feelGoodMsg");//need this?
            //add data-toggle="modal" data-target="#exampleModal" to toggle modal
            newButton.attr("data-toggle", "modal");
            newButton.attr("data-target", "#happyMsgModal");
          }

          // otherwise figure out how many more days until watering with __ days left msg
          else {
            var difference = lwd.diff(moment(), "days");
            console.log(difference);
            var d = data[i].plant_water_int - difference;
            if (d = 1) {
              newButton.text(d + " Day Left");
              newButton.attr("days", d);
              newButton.addClass("changeCycleBtn");
            }
            else {
              newButton.text(d + " Days Left");
              newButton.attr("days", d);
              newButton.addClass("changeCycleBtn");
            }
          }
        }

        //if there's 1, 2, 3, lwd and no int-->calculating cycle msg
        else if (length <= 3 && data[i].plant_water_int === null){
          
        }

        //if there's 4 lwd and no int-->calc int, send int, then choose option from above
        else if (length = 4 && data[i].plant_water_int === null){

        }

        else {
          console.log("error");
        };

        
        //if there's no lwd and no water_int, start calculating it
        // if(waterData[i].last_watered_date === null && waterData[i].plant_water_int === null){
        //   newButton.text("Calculating watering cycle...");
        //   newButton.addClass("figuringCycle");
        // }
        //if there's no lwd but there's a plant_water_int, calculate watering date with int
        // else if(waterData[i].last_watered_date === null && waterData[i].plant_water_int !== null){
        //   newButton.text("Water Now");
        //   newButton.addClass("waterNowBtn");
          
        // }

        newDiv2.append(newTitle);
        // newDiv2.append(newLine);
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
      }

    })
  })

  }

});