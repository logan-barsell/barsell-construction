// custom.js
$(document).ready( f => {



  
	var options = {
	  onOpen: () => console.log("Open"),
	  onClose: () => window.location(this.href) 
	 }



	var musicTT = document.querySelector('.music .tap-target')

	var instance = M.TapTarget.init(musicTT, options, true)
	  instance.open()

	var wdTT = document.querySelector('.webdesign .tap-target')

	var instance2 = M.TapTarget.init(wdTT, options, true)
	  instance2.open()


	$('.parallax').parallax()
	$('.yesdevil').hide()
	$('.littlehollow').hide()
	$('#webdesign').hide()

	$('a.back2home').click( f => {
		$('.projects').hide()
		$('.yesdevil').hide()
		$('.littlehollow').hide()
		$('#webdesign').hide()
		$('.music').show()
	 	$('.webdesign').show()
	 	$('.aboutme').show()
	 	$('html, body').animate({
	 		scrollTop: ($('.header').offset().top -113)
        },500)

        $('.music').html(`<a id="link2music" class=" link2music waves-effect waves-light btn btn-floating" ><i class="material-icons">arrow_left</i></a>
	        <div class="tap-target" data-target="link2music">
	          <div class="tap-target-content">
	            <h5>Musician</h5>
	            <p>Drummer. Guitarist. Singer. Songwriter.</p>
	          </div>
	        </div>

	        <div class="parallax-container">
	          <div class="parallax"><img src="../static/css/images/musick6.jpg"></div>
	        </div>`)

        var musicTT = document.querySelector('.music .tap-target')
		var instance = M.TapTarget.init(musicTT, options, true)
        instance.open()

        $('.webdesign').html(`
	        <a id="link2wd" class="link2wd waves-effect waves-light btn btn-floating" ><i class="material-icons">arrow_right</i></a>
	        <div class="tap-target" data-target="link2wd">
	          <div class="tap-target-content">
	            <h5>Web Designer</h5>
	            <p>Custom-Built Websites.</p>
	          </div>
	        </div>
	        <div class="parallax-container">
	          <div class="parallax"><img src="../static/css/images/webdesign1.jpg"></div>
	        </div>`)

		var wdTT = document.querySelector('.webdesign .tap-target')
	    var instance2 = M.TapTarget.init(wdTT, options, true)
        instance2.open()

        $('.parallax').parallax()

        $('.link2music').click( f => {
		 	$('.music').hide()
		 	$('.webdesign').hide()
		 	$('#webdesign').hide()
		 	$('.yesdevil').show()
		 	$('.littlehollow').show()
		 	$('html, body').animate({
		 		scrollTop: ($('.header').offset().top+470)
	        },500)

		 	$('.yesdevil').html(`
		 	  <a id="link2yesdevil" class="waves-effect waves-light btn btn-floating" ><i class="material-icons">arrow_left</i></a>
	          <div class="tap-target" data-target="link2yesdevil">
	            <div class="tap-target-content">
	              <h5>Yes Devil</h5>
	              <p>Genre: Hard Rock.</p>
	            </div>
	          </div>
	          <div class="parallax-container">
	            <div class="parallax"><img src="../static/css/images/yesdevil.jpg"></div>
	          </div>`)



	        var ydTT = document.querySelector('.yesdevil .tap-target')
		    var instance3 = M.TapTarget.init(ydTT, options, true)
			instance3.open()

			$('.yesdevil .tap-target-wrapper .tap-target-wrapper').css({'bottom': '0px', 'left': '0px'})

			$('.yesdevil a').click( f => {
		 		console.log('hello')
		 		window.open('www.yesdevil.com', '_blank')
			 })

			$('.parallax').parallax()


			$('.littlehollow').html(`
			  <a id="link2lh" class="waves-effect waves-light btn btn-floating" ><i class="material-icons">arrow_right</i></a>
	          <div class="tap-target" data-target="link2lh">
	            <div class="tap-target-content">
	              <h5>Little Hollow</h5>
	              <p>Genre: Indie Folk.</p>
	            </div>
	          </div>
	          <div class="parallax-container">
	            <div class="parallax"><img src="../static/css/images/LHtree2.jpg"></div>
	          </div>`)
		 
		    var lhTT = document.querySelector('.littlehollow .tap-target')
			var instance4 = M.TapTarget.init(lhTT, options, true)
	    	instance4.open()

	    	$('.littlehollow .tap-target-wrapper .tap-target-wrapper').css({'bottom': '0px', 'left': '0px'})

	    	$('.littlehollow a').click( f => {
		 		window.open('www.littlehollow.com', '_blank')
			 })

	 		$('.parallax').parallax()

	    })

	    $('.link2wd').click( f => {
		 	console.log('hi')
		 	$('.yesdevil').hide()
		 	$('.littlehollow').hide()
		 	$('.music').fadeOut()
		 	$('.webdesign').fadeOut()
		 	$('#webdesign').fadeIn()
		 	$('html, body').animate({
	        scrollTop: ($('.header').offset().top+410)
	        },500)
	 	})
	})

	
		// var ydTT = document.querySelector('.yesdevil .tap-target')
	 //    var instance3 = M.TapTarget.init(ydTT, options, true)


	$('.link2music').click( f => {
	 	$('.music').hide()
	 	$('.webdesign').hide()
	 	$('#webdesign').hide()
	 	$('.yesdevil').show()
	 	$('.littlehollow').show()
	 	$('html, body').animate({
	 		scrollTop: ($('.header').offset().top+470)
        },500)

	 	$('.yesdevil').html(`
	 	  <a id="link2yesdevil" class="waves-effect waves-light btn btn-floating" ><i class="material-icons">arrow_left</i></a>
          <div class="tap-target" data-target="link2yesdevil">
            <div class="tap-target-content">
              <h5>Yes Devil</h5>
              <p>Genre: Hard Rock.</p>
            </div>
          </div>
          <div class="parallax-container">
            <div class="parallax"><img src="../static/css/images/yesdevil.jpg"></div>
          </div>`)

        var ydTT = document.querySelector('.yesdevil .tap-target')
	    var instance3 = M.TapTarget.init(ydTT, options, true)
		instance3.open()
		$('.parallax').parallax()

		$('.yesdevil .tap-target-wrapper .tap-target-wrapper').css({'bottom': '0px', 'left': '0px'})

		$('.yesdevil ').click( f => {
	 		console.log('hello')
	 		window.open('www.yesdevil.com', '_blank')
		 })

		$('.littlehollow').html(`
		  <a id="link2lh" class="waves-effect waves-light btn btn-floating" ><i class="material-icons">arrow_right</i></a>
          <div class="tap-target" data-target="link2lh">
            <div class="tap-target-content">
              <h5>Little Hollow</h5>
              <p>Genre: Indie Folk.</p>
            </div>
          </div>
          <div class="parallax-container">
            <div class="parallax"><img src="../static/css/images/lhtree2.jpg"></div>
          </div>`)
	 
	    var lhTT = document.querySelector('.littlehollow .tap-target')
		var instance4 = M.TapTarget.init(lhTT, options, true)
    	instance4.open()

    	$('.littlehollow .tap-target-wrapper .tap-target-wrapper').css({'bottom': '0px', 'left': '0px'})

		$('.littlehollow a').click( f => {
	 		window.open('www.littlehollow.com', '_blank')
		})

 		$('.parallax').parallax()

	 })



	 $('.link2wd').click( f => {
	 	console.log('hi')
	 	$('.yesdevil').hide()
	 	$('.littlehollow').hide()
	 	$('.music').fadeOut()
	 	$('.webdesign').fadeOut()
	 	$('#webdesign').fadeIn()
	 	$('html, body').animate({
        scrollTop: ($('.header').offset().top+410)
        },500)
        $('.parallax').parallax()

	 })

	 $('a.scroll2bio').click( f => {
	 	$('html, body').animate({
        scrollTop: ($('.aboutme').offset().top - 27)
        },500)
	 })

	 $('.yesdevil a').click( f=> {
	 	window.open('www.yesdevil.com')
	 })



})
 