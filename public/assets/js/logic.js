// var moment = require("moment");

$(document).ready(function() {
 
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
        //if there's no lwd, but there's a plant_water_int
        else if(data[i].last_watered_date !== null && data[i].plant_water_int !== null){
          
        }
        //if there's no lwd and no plant_water_int, start calculating it
        else{
          newButton.text("Calculing watering cycle...");
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