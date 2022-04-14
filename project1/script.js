$(document).ready(function(){

	console.log('script loaded');

	const wghtmax = 900;
	const wdthmax = 150;

	//standard sliders
	$('.axis-range').on('input', function(){

		let value = parseInt($(this).val()); //get slider input value
		// console.log(value);

		const slidertype = $(this).data('type'); //get slider axis

		// console.log("--"+slidertype, value );

		$('#bigletter').css("--"+slidertype, value);

	});

	//click buttons
	$('#default').click(function(event) {
		// console.log('default clicked');
		$("#default").css({

			"--wght": 100

		});	

	});

	$('#thincomp').click(function(event) {
		$("#default").css({

			"--wght": 400
	
		});	
	});

	$('#blackext').click(function(event) {
		$("#content").css({

			"--wght": 900

		});	
	});



	//mouseposition
	$('#intro').mousemove(function(event) {

		console.log(event.pageX, event.pageY);

		let cursorX = event.pageX / $(this).width();
		let cursorY = 1 - (event.pageY) / $(this).height();

		let settingX = Math.floor(cursorX * wdthmax);
		let settingY = Math.floor(cursorY * wghtmax);

		// console.log( settingX, settingY)

		$("#bigletter").css({
			"--wdth": settingX,
			"--wght": settingY
		});
		
		$("#bigletter2").css({
			"--wdth": settingX,
			"--wght": settingY
		});

		$("#bigletter3").css({
			"--wdth": settingX,
			"--wght": settingY
		});
		
	});
});


// Function to generate random number 
function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
}



	// $('#intro').mousemove(function(event) {

	// 	console.log(event.pageX, event.pageY);

	// 	let cursorX = event.pageX / $(this).width();
	// 	let cursorY = 1 - (event.pageY) / $(this).height();

	// 	let settingX = Math.floor(cursorX * wdthmax);
	// 	let settingY = Math.floor(cursorY * wghtmax);

	// 	// console.log( settingX, settingY)

	// 	$("#plain").css({
	// 		"--wdth": settingX,
	// 		"--wght": settingY
	// 	});
		
	// });



