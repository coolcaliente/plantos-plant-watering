$(document).ready(function() {

  //clicking "watered" button gives happy message modal; the btn trigger for this is on myPlants page
  $(document).on("click", "#happyMsgModal", function () {}); 

  //clicking "water now" button changes it to "watered"
  $(document).on("click", ".waterNowBtn", function () {
    $(this).removeClass("waterNowBtn");
    $(this).addClass("feelGoodMsg");//need this?
    $(this).attr("data-toggle", "modal");
    $(this).attr("data-target", "#happyMsgModal");
    $(this).text("Watered");
    //need to remove these classes later
    //data-toggle="modal" data-target="#exampleModal"> 

    var newLastWatered=moment().format("YYYY-MM-DD");
    var id = this.id;
    var newPut={
      id:id,
      last_watered_date:newLastWatered
    };
    updatePlantLwd(newPut);
  });

  function updatePlantLwd(newPut){
    //update lastWatered.last_watered_date to today using ajax call
    $.ajax("/api/lastWatered/"+newPut.id,{
      type:"PUT",
      data:newPut
    })
  };

  //clicking "figuring cycle" button starts calculating and sends msg with directions
  $(document).on("click", ".figuringCycle", function () {
    $.get("/api/lastWatered/"+this.id, function(data){
      console.log(data);
      var date = moment();
      var newWaterDate; //for lastwatered table
      var newWaterInt; // for plant table

      //if there's no lwd1, record lwd1
      if (data.lwd1 === null){
        newWaterDate = {lwd1:date};
        // var c=1;
        postdata(1);
      }
      //if lwd1 is filled, check lwd2 and record
      else if (data.lwd2 === null){
        newWaterDate = {lwd2:date};
        postdata(2);
      }
      //if lwd2 is filled, check lwd3 and record
      else if (data.lwd3 === null){
        newWaterDate = {lwd3:date};
        postdata(3);
      }
      //if lwd3 is filled, check lwd4 and record
      else if (data.lwd4 === null){
        newWaterDate = {lwd4:date};
        postdata(4);
      }
      //if lwd4 is filled, calculate average, change btn
      else {
        var add = parseInt(data.lwd1) + parseInt(data.lwd2) + parseInt(data.lwd3) + parseInt(data.lwd4);
        newWaterInt = Math.round(add / 4);
        var newPut={
          id:this.id,
          plant_water_int:newWaterInt
        };
        updateWaterInt(newPut);

        //congrats modal on myPlants page
        $("#congrats-msg-modal").text("Congrats! You've watered your plant four times. We've calculated this plant needs to be watered every " + newLastWatered + " days.");
        $("#congratsMsgModal").modal();

        //put lwd1, 2, 3, 4 to null in lastwatered table
        //need api call to do this!!!!!!!!!!


        //update last_watered_date in plant table
        function updateWaterInt(newPut){
          $.ajax("/api/plants"+newPut.id,{
            type:"PUT",
            data:newPut
          })
        };

      }

      //post (for first time) lwd1, 2, 3, or 4 to lastwatered table
      function postdata(c){
        $.ajax("/api/lastWatered/Update",{
          type:"POST",
          data:newWaterDate
        }).then(
          function(){
            console.log("here");
            console.log(c);
            $("#congratsMsgModal").modal();
          }
        );        
      };

    });
  });

  //this doesn't work
  //clicking "x days left" gives option to restart the water cycle, recalcuate the days, or delete the plant
  $(document).on("click", "changeCycleBtn", function () {
    console.log(this);

    $("#congrats-msg-modal").text("You have " + this.days + " left.<br>Want some options?<br>");

    var newBtn = $("<button>");
    newBtn.text("Do you want to water it now and restart the cycle?");
    newBtn.attr("id", this.id);
    newBtn.addClass("restartBtn btn btn-outline-dark px-6 mt-3");

    var newBtn2 = $("<button>");
    newBtn2.text("Delete this plant from your My Plants page?");
    newBtn2.attr("id", this.id);
    newBtn2.addClass("deleteBtn btn btn-outline-dark px-6 mt-3");

    var newBtn3 = $("<button>");
    newBtn3.text("Do you want to recalculate the amount of days between waterings?");
    newBtn3.attr("id", this.id);
    newBtn3.addClass("recalculateBtn btn btn-outline-dark px-6 mt-3");

    $("#change-msg-modal").append(newBtn, newBtn2, newBtn3);

    $("#changeMsgModal").modal();
  });

  $(document).on("click", "#restartBtn", function () {
    console.log(this);
    $().removeClass(".restartBtn");
    $().addClass(".waterNowBtn");
    //send ajax call to change last watered date
    //change text to water now
  });

  //delete the plant from the user's app
  $(document).on("click", ".deleteBtn", function () {
    $.ajax("")
  });

  //recalculate the days between waterings
  $(document).on("click", ".recalculateBtn", function () {
    $().removeClass(".recalculateBtn");
    $().addClass(".figuringCycle");
  });

});//end doc.ready