	
$(document).ready(function(){
	$('.cquest').hide();
    $('.question').on('click',function(){ // For the Frequently asked questions 
    
    	var thisp = $(this).attr("data-id");
        $('.cquest').hide();
    	$('#' + thisp).toggle(); 

    })

    $('.gg').on('mouseover',function(){ // For the services card to flip
      var thise = $(this).attr("data-gg-id");
        console.log(thise);
        $('.' + thise).css({
        	'opacity':'1',
        	'transition':'.5s all',
        	'backgroundColor':'white',
        	'box-shadow':'rgb(00, 00, 00) 0px 20px 30px -10px',
        	'transform':'rotateY(0deg)'
        })
    })
    $('.gg').on('mouseout',function(){ // For the services card to flip 
        var thise = $(this).attr("data-gg-id");
        console.log(thise);
        $('.' + thise).css({
        	'opacity':'0',
        	'transition':'.5s all',
        	'transform':'rotateY(-180deg)'
        })
    })

    $('#arrow-menu').on('click',function(){  //makes the arrow turn and dropdown avail
    	var arrow = $(this).toggleClass('active');
    	var menuDown = $('.nav-ul'); 
    	menuDown.toggleClass('menu-active'); 
    })
  

       $('.nav-ul li').on('click',function(){ // To remove the thing after clicking a link
       	console.log("clicked"); 
    	$('#arrow-menu').removeClass('active');
    	var menuDown = $('.nav-ul'); 
    	menuDown.removeClass('menu-active'); 
    })
       $('.showall').on('click',function(){
       	console.log("clickedshowallbutton");
       	$('.hidden-gg').toggleClass('hidden-gg')
       	$('.showall-div').css({
       		'display':'none'
       	})
       })






























	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:4
	        },
	        1300:{
	            items:5
	        }
	    }
	})

})

/*
    $('.gg').on('mouseover',function(){
      var thise = $(this).attr("data-gg-id");
        console.log(thise);
        $('.' + thise).css({
        	'visibility':'visible'
        })
    })
    $('.gg').on('mouseout',function(){
        var thise = $(this).attr("data-gg-id");
        console.log(thise);
        $('.' + thise).css({
        	'visibility':'hidden'
        })
    })

 */