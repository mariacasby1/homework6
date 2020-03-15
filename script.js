$(document).ready(function(){


 
  
      var queryURL ="api.openweathermap.org/data/2.5/weather?q=London&appid=874aa8a44acab72d2adcdef8e379c566"
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          console.log(response);
         
         // $('#weather').text(response);
          //$('p').html(ingreds)
         // $('img').attr('src', photo);    
         
      });




})
  