jQuery(document).ready(function($){

$('input[type=password').each(function(index){
	    
	    $(this).addClass('password-' + index);
	   
	    $(this).wrap(function() {
          return "<div class='password-container'></div>";
        });
        
        $('.password-container').css('position','relative');
        
        
        var  style = {    
            "position" : "absolute",
            "right" : "7px",
            "top" : "5px",
            "background-color" : "#3fa457",
            "color" : "white",
            "font-size" : "10px",
            "padding" : "5px 10px",
            "border-radius" : "5px",
            "cursor" : "pointer",
            "text-transform" : "uppercase",
            "width" : "35px",
            "text-align" : "center",
        }
        
	    $(this).after('<span data-pasword="' + index + '" class="password-view-status">View</span>'); 
	    $('.password-view-status').css(style);
	});
	
	
	$(document).on( 'click' , '.password-view-status', function(){
	    
	    var dataPassword = $(this).attr('data-password');
	    
	    $(this).toggleClass('password-view-status-active');
	    
	    if ($(this).hasClass('password-view-status-active')){
	        $(this).text('HIDE');
	        $(this).css('background-color','#333');
	        $(this).siblings('input').attr('type','text');
	    }else{
	        $(this).text('SHOW');
	        $(this).css('background-color','#3fa457');
	        $(this).siblings('input').attr('type','password');
	    }
	    
	    
    });

});
