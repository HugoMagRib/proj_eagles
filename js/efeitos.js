$(document).ready(function(){

		       		$("#logotipo").on("mouseover",function(){

			       			$("#banner h1").addClass("efeito");

			       	}).on("mouseout", function(){

			       		$("#banner h1").removeClass("efeito");
		       		
		       		});


		       		$(".thumbnails").owlCarousel({

		       			autoPlay: 3000,
		       			items :4,
		       		
		       		});


		       	});