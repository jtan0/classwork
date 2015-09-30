$(document).ready(function() {


	$('div').hide();

	$('#link1').click(function(){
		//$("#info1").slideDown(function(){
			$('#info1').slideToggle("slow");
		});


	$('#link2').click(function(){
		$('#info2').show();
	});

	$('#link2').click(function(){
		$('#info2').slideToggle(2000);
	});

	$('#link3').click(function(){
		$('#info3').show();
	});

	$('#link3').click(function(){
		$('#info3').slideToggle(2000);
	});

});