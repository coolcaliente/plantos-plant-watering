$(document).ready(function() {
 
  // Getting references to our form and input
  var loginForm = $("form.login");
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

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

  // $("#login-button").on("click", function(e){
  //   e.preventDefault();
  //   e.stopPropagation();
  //   console.log("im working!!");
  //   var newUser = {
  //     email:    $("#email-input").val(),
  //     password: $("#password-input").val()
  //   }
  //   console.log(newUser);
  //   return newUser;
  // });
  $("#login-button").on("click", function(e){
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, log the error
    }).catch(function(err) {
      console.log(err);
    });
  }
  //button on the sign-up form
  // $("#sign-up-button").on("click", function(e){
  //   e.preventDefault();
  //   e.stopPropagation();
  //   console.log("Im working!!");
  //   var newUser = {
  //     email:    $("#email-input").val(),
  //     password: $("#password-input").val()
  //   }
  //   console.log(newUser);
  //   return newUser;
    
  //   $.ajax("/api/users", {
  //     type:"POST",
  //     data:newUser
  //   }).then(
  //     function(){
  //       window.location.href = "/myPlants";
  //     }
  //   )
  // });
  // When the signup button is clicked, we validate the email and password are not blank
  $("#sign-up-button").on("click", function(event){
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password) {
    $.post("/api/signup", {
      email: email,
      password: password
    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, handle it by throwing up a bootstrap alert
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }

  //button leading to sign-up form
  // $("#signUpBtn").on("click", function(e){
  //   e.preventDefault();
  //   window.location.href="/signup"
  // });

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