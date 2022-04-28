/*
 * Author: Sugi and Jeremy
 * Created: 26th April
 * License: Public Domain
 */

//define a URL
var url="https://xkcd.com/info.0.json";
var data;


//create AJAX function

$.ajax({
  url: url,
  type: "GET",
  data: data,
  //if the request succeeds
  success: function(data) {
      console.log(data);
      $("#output").html("<br>" + data.title + "<br>" + ("<img src=" + data.img + ">") + "<br>" + data.alt);
      // $("#output").html("<img src=" + data.img + ">");

    }

     // <img src="${imageUrl}" title="${alt}"><br>

  });
