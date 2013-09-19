$(document).ready(function(){


$('#resolv').click(function(){
	//alert($('input[name=radio-choice]:checked').val());
	var quest=$('fieldset').attr('id');
	if ($('input[name=radio-choice]').is(':checked')){
  			var rad_val = $('input:radio[name=radio-choice]:checked').val();
  			$.ajax({
	            type: "POST",
	            url: "http://localhost:8000/interactiv/resolv",
	            data: { 'send_resul': rad_val,
	        			'quest':quest},
	            success: function(){
	                alert('thanks');
	 
	            }
  	}else{
  		var radio_value=0;
  	}
});

});