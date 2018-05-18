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

    //update Plant.last_watered_date to today using ajax call
  });

  //clicking "figuring cycle" button starts calculating and sends msg with directions
  $(document).on("click", ".figuringCycle", function () {
    console.log(this.id);
    $.get("/api/lastWatered/"+this.id, function(data){
      console.log(data);
      var date = moment();
      var newWaterDate; //for lastwatered table
      var newLastWatered; // for plant table

      //if there's no lwd1, record lwd1
      if (data.lwd1 === null){
        newWaterDate = {lwd1:date};
        postdata();
      }
      //if lwd1 is filled, check lwd2 and record
      else if (data.lwd2 === null){
        newWaterDate = {lwd2:date};
        postdata();
      }
      //if lwd2 is filled, check lwd3 and record
      else if (data.lwd3 === null){
        newWaterDate = {lwd3:date};
        postdata();
      }
      //if lwd3 is filled, check lwd4 and record
      else if (data.lwd4 === null){
        newWaterDate = {lwd4:date};
        postdata();
      }
      //if lwd4 is filled, calculate average, change btn
      else {
        var add = parseInt(data.lwd1) + parseInt(data.lwd2) + parseInt(data.lwd3) + parseInt(data.lwd4);
        newLastWatered = add / 4;
        //congrats modal??
      }

      //post (for first time) lwd1, 2, 3, or 4 to lastwatered table
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

      //update last_watered_date in plant table
      $.ajax("/api/plants",{
        type:"PUT",
        data:newLastWatered
      })
    });
  });

  //clicking "x days left" gives option to restart the water cycle or change the cycle (if they've miscalculated how much water is needed
  $(document).on("click", "changeCycleBtn", function () {
    //modal "You have x days left. Option1: Do you want to water it now and restart the cycle? Option2: Delete this plant Option3: Do you want to recalculate the water cycle? Or cancel?" 
    
  });

});