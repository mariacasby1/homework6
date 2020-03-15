$(document).ready(function(){


    var ingred;
  
    $('button').on('click', function() {
    ingred = this.id;
      console.log(ingred);
      var queryURL = `https://api.edamam.com/search?q=${ingred}&app_id=fd3c9f61&app_key=a9692cfbd33278c8428f017749dff618`
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          console.log(response);
         var recipeName = response.hits[0].recipe.label;
         var ingreds = response.hits[0].recipe.ingredientLines;
         var photo = response.hits[0].recipe.image;
         console.log(ingreds)
          $('#recipeName').text(recipeName);
          $('p').html(ingreds)
          $('img').attr('src', photo);    
         
      })
    })
}) 