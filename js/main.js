$('document').ready(function(){
	$('.circle2').on('click', function(){
		var x = $('.line').css('marginLeft')
		var y = -440;
		if (parseFloat(x) > parseFloat(y)){
			$('.line').animate({
				marginLeft: '-=400'
			})
		}else{
			$('.line').animate({
				marginLeft: '-20'
			})
		}
		console.log(x)

	})
	$('.circle1').on('click', function(){
		var x = $('.line').css('marginLeft')
		var z = -419;
		if (parseFloat(x) < parseFloat(z)){
			$('.line').animate({
				marginLeft: '+=400'
			})
		}else{
			$('.line').animate({
				marginLeft: '-820'
			})
		}
		console.log(x)
	})
})