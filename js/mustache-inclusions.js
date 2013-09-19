$(document).ready(function(){
 
$.getJSON('http://localhost:8000/json/jsonev/?callback=?', function(json) {
  //dato= jquery.parseJSON(data);
    $.each(json, function(key,val) {
      // var fullHtml;

      $("#templates").load("templates/template-event.html",function(){
          // $('#template3').each(function() {
          //     fullHtml += $(this).html();
          // });
          var template = $('#template3').html();
          //var template = "<h1>{{name}}</h1> ";
          var html = Mustache.to_html(template, val);
          $('.eventus').append(html);
      });
    });

  });

        // var view = {
        //   titulo: "Titulillo",
        //   name : "Joe",
        //   occupation : "Web Developer",
        //   intereses: "Hackear pages"
        // };
 
        // $("#templates").load("templates/template.html",function(){
        //   var template = document.getElementById('template1').innerHTML;
        //     var template2 = document.getElementById('template2').innerHTML;
        //     var template3 = document.getElementById('template3').innerHTML;
        //   var output = Mustache.render(template, view);
        //   $("#person").html(output);
        // });


});