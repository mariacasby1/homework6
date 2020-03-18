
    $(document).ready(function () {
     var lastCity =localStorage.getItem("storedCity")  
      console.log(lastCity)
      var myli = $('<li>').text(lastCity);
    
$(myli).addClass("list-group-item");
$('ul').prepend(myli);
      var d = new Date();
      var today = d.toDateString();
      var city;
      var lastCity
      var queryURLcurrent;
      $('button').on('click', function () {
        event.preventDefault();
        city = $('#city').val();
        console.log(city);
        queryURLcurrent = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=45ef307ac4f3d3a4e4a5f9cc5b952514`
        $.ajax({
          url: queryURLcurrent,
          method: "GET"
        }).then(function (response1) {
          console.log(response1);
          $('#des').text(response1.weather[0].description);
         
          var temp = response1.main.temp;
          var mytemp = `Temperature: ${temp} F`;
          $('#temp').text(mytemp);
          var wind = response1.wind.speed;
          var mywind = `Wind Speed: ${wind}mph`;
          $('#wind').text(mywind);
          var hum = response1.main.humidity;
          var myhum = `Humidity: ${hum}%`;
          $('#hum').text(myhum);
          $('#cityname').text(city);
          $('#date').text(today);
          //$('#icon').text(response1.weather[0].icon);
          var myicon = response1.weather[0].icon;    
          console.log(myicon)      
          var iconsrc = `http://openweathermap.org/img/wn/${myicon}@2x.png`
          $('#icon').attr('src', iconsrc);
          console.log(iconsrc)
         myli = $('<li>').text(city);
    
          $(myli).addClass("list-group-item");
          $('ul').prepend(myli);
         localStorage.setItem('storedCity', city)
       
        });
        var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=45ef307ac4f3d3a4e4a5f9cc5b952514`
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function (response) {
          console.log(response);
          $('#des1').text(response.list[7].weather[0].description);
          var myicon1 = response.list[7].weather[0].icon;    
          console.log(myicon1)      
          var iconsrc1 = `http://openweathermap.org/img/wn/${myicon1}@2x.png`
          $('#icon1').attr('src', iconsrc1);
          console.log(iconsrc1)
          var temp = response.list[7].main.temp;
          var mytemp = `Temperature: ${temp} F`;
          $('#temp1').text(mytemp);
          var wind = response.list[7].wind.speed;
          var mywind = `Wind Speed: ${wind}mph`;
          $('#wind1').text(mywind);
         var hum = response.list[7].main.humidity;
          var myhum = `Humidity: ${hum}%`;
          $('#hum1').text(myhum);
          var e = new Date();
          e.setDate(e.getDate() + 1);
          var date1 = e.toDateString();
          $('#date1').text(date1);
          console.log(date1);
//day 2
          $('#des2').text(response.list[15].weather[0].description);
          var myicon2 = response.list[15].weather[0].icon;          
          var iconsrc2 = `http://openweathermap.org/img/wn/${myicon2}@2x.png`
          $('#icon2').attr('src', iconsrc2);
          console.log(iconsrc2)
          var temp2 = response.list[15].main.temp;
          var mytemp2 = `Temperature: ${temp2} F`;
          $('#temp2').text(mytemp2);
          var wind2 = response.list[15].wind.speed;
          var mywind2 = `Wind Speed: ${wind2}mph`;
          $('#wind2').text(mywind2);
         var hum2 = response.list[15].main.humidity;
          var myhum2 = `Humidity: ${hum2}%`;
          $('#hum2').text(myhum2);
          var f = new Date();
          f.setDate(f.getDate() + 2);
          var date2 = f.toDateString();
          $('#date2').text(date2);
     

          //day 3
          $('#des3').text(response.list[23].weather[0].description);
          var myicon3 = response.list[23].weather[0].icon;      
          var iconsrc3 = `http://openweathermap.org/img/wn/${myicon3}@2x.png`
          $('#icon3').attr('src', iconsrc3);
          console.log(iconsrc3)
          var temp3 = response.list[23].main.temp;
          var mytemp3 = `Temperature: ${temp3} F`;
          $('#temp3').text(mytemp3);
          var wind3 = response.list[23].wind.speed;
          var mywind3 = `Wind Speed: ${wind3}mph`;
          $('#wind3').text(mywind3);
         var hum3 = response.list[23].main.humidity;
          var myhum3 = `Humidity: ${hum3}%`;
          $('#hum3').text(myhum3);
          var g = new Date();
          g.setDate(g.getDate() + 3);
          var date3 = g.toDateString();
          $('#date3').text(date3);
          console.log(date3);


                    //day 4
          $('#des4').text(response.list[31].weather[0].description);
          var myicon4 = response.list[31].weather[0].icon;      
          var iconsrc4 = `http://openweathermap.org/img/wn/${myicon4}@2x.png`
          $('#icon4').attr('src', iconsrc4);
          console.log(iconsrc4)
          var temp4 = response.list[31].main.temp;
          var mytemp4 = `Temperature: ${temp4} F`;
          $('#temp4').text(mytemp4);
          var wind4 = response.list[31].wind.speed;
          var mywind4 = `Wind Speed: ${wind4}mph`;
          $('#wind4').text(mywind4);
         var hum4 = response.list[31].main.humidity;
          var myhum4 = `Humidity: ${hum4}%`;
          $('#hum4').text(myhum4);
          var h = new Date();
          h.setDate(h.getDate() + 4);
          var date4 = h.toDateString();
          $('#date4').text(date4);
          console.log(date4);

            //day 5
            $('#des5').text(response.list[39].weather[0].description);
            var myicon5 = response.list[39].weather[0].icon;      
            var iconsrc5 = `http://openweathermap.org/img/wn/${myicon5}@2x.png`
            $('#icon5').attr('src', iconsrc5);
            console.log(iconsrc5)
            var temp5 = response.list[39].main.temp;
            var mytemp5 = `Temperature: ${temp5} F`;
            $('#temp5').text(mytemp5);
            var wind5 = response.list[39].wind.speed;
            var mywind5 = `Wind Speed: ${wind5}mph`;
            $('#wind5').text(mywind5);
           var hum5 = response.list[39].main.humidity;
            var myhum5 = `Humidity: ${hum5}%`;
            $('#hum5').text(myhum5);
            var j = new Date();
            j.setDate(j.getDate() + 5);
            var date5 = j.toDateString();
            $('#date5').text(date5);
            console.log(date5);

        });

      });
     


    });
  