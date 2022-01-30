

var video = document.getElementById("animatie");
video.onended = function () {
	$('body').css("overflow", "auto")
	$.ajax({
		url: "home.html",
		success: function (data) {
			$("main").html(data)
			$("#wiefrans").on("click", function () {
				$('body').append("<div class='overlay'></div>");
				$('main').append("<div class='popup'><img src='assets/home/Hoofdfrans.png' id='frans-foto' alt='frans'><p>Frans Timmermans is een Nederlandse politicus, en lid van de PvDA. Overigens is hij uitvoerend vicevoorzitter van de Europese commisie. Hij geeft leiding aan de activiteiten van de commisie met betrekking tot de Europese Green Deal. <br> <br> De European Green Deal is een overeenkomst tussen de lidstaten van de Europese Unie waarin doelen behaald moeten worden, zodat de klimaat verandering beperkt wordt.Deze moeten ervoor zorgen dat er netto 55 % minder broeikasgassen worden uitgestoten in 2030 in vergelijking tot 1990.</p ></div > ");
				$('.popup').append("<img class='back-button-home' src='assets/pijl-button.svg' alt='button'>")
				$('.back-button-home').click(function () {
					$(this).parent().remove();
					$('.overlay').remove();
				})
			});
			$("#greendeal").on("click", function () {
				$('body').append("<div class='overlay'></div>");
				$('main').append("<div class='popup'><img src='assets/home/greendeal.png' id='greendeal2' alt='green'><p>De Green Deal is een overkomst tussen de lidstaten van de Europese Unie waarin doelen behaald moeten worden die met name het klimaat verbeteren. De grootste hiervan is om Europa in 2050 klimaat neutraal te maken. \
\ Met deze plannen wordt het welzijn en de gezondheid van de burger verbeterd, nu en in de toekomst door te zorgen voor:<br><br> - schone lucht, schoon water, een gezonde bodem en biodiversiteit<br> - gerenoveerde, energie-efficiënte gebouwen<br> - gezond en betaalbaar voedsel<br> - meer openbaar vervoer<br> - schonere energie en baanbrekende, schone technologische innovaties<br> - duurzamere producten die gerepareerd, gerecycled en hergebruikt kunnen worden<br> - duurzame banen en vaardigheidstraining voor de transitie<br> - een wereldwijd concurrerende en veerkrachtige industrie</p>");
				$('.popup').append("<img class='back-button-home' src='assets/pijl-button.svg' alt='button'>")
				$('.back-button-home').click(function () {
					$(this).parent().remove();
					$('.overlay').remove();
				})
			});

		}
	})
};
