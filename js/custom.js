

var initMap = f => {
    var uluru = {lat:37.8560563 , lng:-122.029141}
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 9,
      center: uluru,

    })
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
	})
}

$(document).ready( f => {

	$('#services').hide()
	$('#gallery').hide()
	$('#contact').hide()
	$('.link2home').addClass('active')
	$('.home').hide()
	$('nav i').hide()
	$('#nav-contact i').show().css({'margin-right':'20px'})
	$('.fa-home').show()


	var findSetHeight = () => {
		var slideHeight = $('#missionStatements .carousel-item.active').height()
	    $('#missionStatements.carousel').css('height', slideHeight+63+'px')
	}
	findSetHeight()

	$('.link2home').click( f => {
		$('#home').show()
		$('#services').hide()
		$('#gallery').hide()
		$('#contact').hide()
		$('.link2home').parent().addClass('active')
		$('.link2services').parent().removeClass('active')
		$('.link2gallery').parent().removeClass('active')
		$('.link2contact').parent().removeClass('active')
		$('.link2home').addClass('active')
		$('.link2services').removeClass('active')
		$('.link2gallery').removeClass('active')
		$('.link2contact').removeClass('active')
		$('.home').hide()
		$('.fa-home').show()
		$('.services').show()
		$('.fa-wrench').hide()
		$('.gallery').show()
		$('.fa-picture-o').hide()
		$('.contact').show()
		$('.fa-mobile').hide()
		$('.collapsible').collapsible('close', 0)
		findSetHeight()
	})

	$('.link2services').click( f => {
		$('#home').hide()
		$('#services').show()
		$('#gallery').hide()
		$('#contact').hide()
		$('.link2services').parent().addClass('active')
		$('.link2home').parent().removeClass('active')
		$('.link2gallery').parent().removeClass('active')
		$('.link2contact').parent().removeClass('active')
		$('.link2services').addClass('active')
		$('.link2home').removeClass('active')
		$('.link2gallery').removeClass('active')
		$('.link2contact').removeClass('active')
		$('.services').hide()
		$('.fa-wrench').show()
		$('.home').show()
		$('.fa-home').hide()
		$('.gallery').show()
		$('.fa-picture-o').hide()
		$('.contact').show()
		$('.fa-mobile').hide()
		$('.collapsible').collapsible('close', 0)
	})

	$('.link2gallery').click( f => {

		$('#home').hide()
		$('#services').hide()
		$('#gallery').show()
		$('.tabs').tabs()
		$('#contact').hide()
		$('.link2gallery').parent().addClass('active')
		$('.link2home').parent().removeClass('active')
		$('.link2services').parent().removeClass('active')
		$('.link2contact').parent().removeClass('active')
		$('.link2gallery').addClass('active')
		$('.link2home').removeClass('active')
		$('.link2services').removeClass('active')
		$('.link2contact').removeClass('active')
		$('.gallery').hide()
		$('.fa-picture-o').show()
		$('.home').show()
		$('.fa-home').hide()
		$('.services').show()
		$('.fa-wrench').hide()
		$('.contact').show()
		$('.fa-mobile').hide()
		$('.collapsible').collapsible('close', 0)
		$('#galleryCarousel').carousel('set', 0)
	})

	$('.link2contact').click( f => {
		$('#contact').show()
		$('#home').hide()
		$('#services').hide()
		$('#gallery').hide()
		$('.link2contact').parent().addClass('active')
		$('.link2home').parent().removeClass('active')
		$('.link2services').parent().removeClass('active')
		$('.link2gallery').parent().removeClass('active')
		$('.link2contact').addClass('active')
		$('.link2home').removeClass('active')
		$('.link2services').removeClass('active')
		$('.link2gallery').removeClass('active')
		$('.contact').hide()
		$('.fa-mobile').show()
		$('.home').show()
		$('.fa-home').hide()
		$('.services').show()
		$('.fa-wrench').hide()
		$('.gallery').show()
		$('.fa-picture-o').hide()
		$('.collapsible').collapsible('close', 0)
		initMap()
	})

	//declaring functions to call when screen is resizing

	var resizeFunctions = () => {
		var w = $(window).width()
		$('.brand-logo .logo2').hide()
		if (w < 1050) {
			$('#nav-1').find('li').hide()
			$('#nav-1').css('height','261px')
			$('.brand-logo .logo2').show()
			$('#nav-2').show()
		}
		if (w > 1050) {
			$('#nav-1').find('li').show()
			$('#nav-1').css('height','185px')
			$('.brand-logo .logo2').hide()
			$('#nav-2').hide()
		}


    	findSetHeight()

    	//adapts carousel height from portrait to landscape
		if (screen.height > screen.width){
    		findSetHeight()	
		}
	}

	// initial call of resize functions
	resizeFunctions()

	$(window).resize( f => {
		//calling resize functions on resize
		resizeFunctions()

	})

	

	





	$('#tocall').click( f => {
		window.location.href='tel:+925-260-4331'
	})

	$('#toemail').click( f => {
		window.location.href='mailto:johnbarsell@yahoo.com'
	})

	$('#tofb').click( f => {
		window.location.href='http://www.facebook.com'
	})

	$('#tolinkedin').click( f => {
		window.location.href = 'https://www.linkedin.com/in/john-barsell-1601891b/'
	})

	$('#home').children('.divider').css({'margin-top':'40px'})
	$('#services').children('.divider').css({'margin-top':'40px'})
	$('#gallery').children('.divider').css({'margin-top':'40px'})
	$('#contact').children('.divider').css({'margin-top':'40px'})

	//scrolls to the top of the page
	$('.back2top').click( f => {
		$("#wrapper").scrollTop(0)
	})

	$('.carousel a').click( e => {
		e.preventDefault()
	})


	var first = true
	var slideQueue = setInterval( () => {
    	//changes immediately to next slide for the first cycle, moving it from the 7th to the 1st
    	$('#missionStatements.carousel').carousel('next')
    	first = false
   		}, 100)

	$('#missionStatements').carousel({
	    fullWidth: true,
	    indicators: true,
	    duration: 100,
	    onCycleTo: () => {
	    	if(first != true) {
		    	//finds height of slide and adjusts height of carousel
		    	findSetHeight()
		    	//resets the slide queue
		    	clearInterval(slideQueue)
		    	slideQueue = setInterval( () => {
		    		//changes to next slide every 10 seconds
		    		$('#missionStatements.carousel').carousel('next')
		   			}, 10000)
		    }
		}
    })
	//sets the carousel at the last slide
	$('#missionStatements.carousel').carousel('set', 7)

    




    	
})

