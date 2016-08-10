$(document).ready(function(){
	$(".bir").on('click', function(){
		$(this).addClass('red')
		$(".iki").removeClass('red')
		$(".uc").removeClass('red')
		$(".dort").removeClass('red')
		$(".bes").removeClass('red')
		$(".alti").removeClass('red')
		$(".line1").animate({
			width: '100'
		},250)
		$('#yazilar').animate({
			marginLeft: '-20px'
		})
	})
	$(".iki").on('click', function(){
		$(".bir").removeClass('red')
		$(this).addClass('red')
		$(".uc").removeClass('red')
		$(".dort").removeClass('red')
		$(".bes").removeClass('red')
		$(".alti").removeClass('red')
		$(".line1").animate({
			width: '300'
		},250)
		$('#yazilar').animate({
			marginLeft: '-475px'
		})
	})
	$(".uc").on('click', function(){
		$(".bir").removeClass('red')
		$(".iki").removeClass('red')
		$(this).addClass('red')
		$(".dort").removeClass('red')
		$(".bes").removeClass('red')
		$(".alti").removeClass('red')
		$(".line1").animate({
			width: '500'
		},250)
		$('#yazilar').animate({
			marginLeft: '-935px'
		})
	})
	$(".dort").on('click', function(){
		$(".bir").removeClass('red')
		$(".iki").removeClass('red')
		$(".uc").removeClass('red')
		$(this).addClass('red')
		$(".bes").removeClass('red')
		$(".alti").removeClass('red')
		$(".line1").animate({
			width: '700'
		},250)
		$('#yazilar').animate({
			marginLeft: '-1395px'
		})
	})
	$(".bes").on('click', function(){
		$(".bir").removeClass('red')
		$(".iki").removeClass('red')
		$(".uc").removeClass('red')
		$(".dort").removeClass('red')
		$(this).addClass('red')
		$(".alti").removeClass('red')
		$(".line1").animate({
			width: '900'
		},250)
		$('#yazilar').animate({
			marginLeft: '-1850px'
		})
	})
	$(".alti").on('click', function(){
		$(".bir").removeClass('red')
		$(".iki").removeClass('red')
		$(".uc").removeClass('red')
		$(".dort").removeClass('red')
		$(".bes").removeClass('red')
		$(this).addClass('red')
		$(".line1").animate({
			width: '1100'
		},250)
		$('#yazilar').animate({
			marginLeft: '-2310px'
		})
	})
})