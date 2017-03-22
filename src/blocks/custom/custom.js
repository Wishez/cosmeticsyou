var cmt = {};

//Opacity Focus Function
cmt.item_opacity = function(){
	//Opacity Focus
	$("#mycarousel li, .portfolio li").hover(function() {
		$(this).siblings().stop().fadeTo(400,0.6);
	}, function() {
		$(this).siblings().stop().fadeTo(400,1);
	});
};
	

// In and Out effect for carousel
cmt.item_hover = function(){
	$('ul#mycarousel li').hover(function(){		 
		$(this).children('.caption').animate({bottom:"0px"},{queue:false,duration:200});		 
		$(this).children('.lightbox').animate({top:"0px"},{queue:false,duration:200});
		$(this).children('.more').animate({top:"0px"},{queue:false,duration:200})	}, 
		function() {         
			$(this).children('.caption').animate({bottom:"-30px"},{queue:false,duration:200});		 
			$(this).children('.lightbox').animate({top:"-25px"},{queue:false,duration:200});	
			$(this).children('.more').animate({top:"-25px"},{queue:false,duration:200})
		});	
}

//gallery hover effect
cmt.gallery_hover = function(){
	$('.gallery-item').hover(function(){		 
		$(this).children('a').animate({'opacity':0.5}, 200);
		$(this).children('.rollover').fadeIn(200); },	 
		function() {         
			$(this).children('a').animate({'opacity':1}, 200);
			$(this).children('.rollover').fadeOut(200);
		});	
}