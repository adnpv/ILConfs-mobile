
$(document).ready(function(){
//$(document).on("pageinit", function(e){
      var back_class =  $('#back').attr('class-num');

      if (back_class == '0') {
        eventos_principal();
      }


      // $(".goin").click(function(event)
      //   {
      //     event.preventDefault();
      //     preguntas();
      //     return false;
      //   });
      $("#goin").on( "click",function(event)
      //$("#goin").click(function(event)
        {
          //alert('he');
          //event.preventDefault();
          preguntas();
          return false;
        });


      $("#back").on( "click",function(event)
        {
          //event.preventDefault();
          consultas_back();
          return false;
        });

});

function consultas_back(){
  var back_class =  $('#back').attr('class-num');
  alert(back_class)
  switch(back_class)
  {
  case '1':
    eventos_principal();
    break;
  case '72':
    preguntas();
    break;
  default:
    //code to be executed if n is different from case 1 and 2
  }
}


function eventos_principal(){
  var url="http://pietreal.herokuapp.com/json/jsonev/?callback=?"
  var old_url ="http://adnp.pythonanywhere.com/json/jsonev/?callback=?"

  $.getJSON(url, function(json) {
      $("#templates").load("templates/template-event.html",function(){
          $.each(json, function(key,val) {
            var template = $('#template3').html();
            var html = Mustache.to_html(template, val);
            $('#template33').append(html);
          });
          a=$('#containerr').html();
          
          $('.section').html(a);
      });
      

    });
}







function preguntas(){
    var give = $('#style-include1').html();
    $.ajax({
        data:
            {
            "que": 2,
            //"callback":"result2",
            },
        //datatype: 'json',
        type: 'GET',
        url:"http://pietreal.herokuapp.com/interactiv/jsonquest", 
          //"http://shielded-peak-5807.herokuapp.com/interactiv/jsonquest",//'http://localhost:8000/interactiv/jsonquest',
        success: function(result)
            {
                
            if(result){

            var b = '<div>hello</div>';
            var $a = $("#templates22");
              $("#templates22").load("templates/t-preg-resolv.html",function(){
                  $.each(result, function(key,val) {
                      //alert(key);
                      if(key ==0){
                          //alert('hello');
                          var template = $('#template32').html();
                              //var template = "<h1>{{name}}</h1> ";
                          var titulo = Mustache.to_html(template, val); //other
                          //alert(template);
                          $('#template32').html(titulo);
                      }else{
                          var template = $('#inplaces').html();
                          var html = Mustache.to_html(template, val); //other
                          $('#lege').append(html);  
                      }
                      
                  });

                  b = $('#template32').html();
                  $('.quests').html(b);

                });
            $('#back').attr("class-num", "72");
              
            //$('.quests').page();
            $('#style-include').html(give);
            }
            
            
        }
    });

 
}

