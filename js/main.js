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
				$('main').append("<div class='popup'><img class='green-logo' src='assets/greenDeal.svg' alt='damn' width='50' height='50'><img src='assets/home/greendeal.png' id='greendeal2' alt='green'><p>De Green Deal is een overkomst tussen de lidstaten van de Europese Unie waarin doelen behaald moeten worden die met name het klimaat verbeteren. De grootste hiervan is om Europa in 2050 klimaat neutraal te maken. \
\ Met deze plannen wordt het welzijn en de gezondheid van de burger verbeterd, nu en in de toekomst door te zorgen voor:<br><br> - schone lucht, schoon water, een gezonde bodem en biodiversiteit<br> - gerenoveerde, energie-efficiënte gebouwen<br> - gezond en betaalbaar voedsel<br> - meer openbaar vervoer<br> - schonere energie en baanbrekende, schone technologische innovaties<br> - duurzamere producten die gerepareerd, gerecycled en hergebruikt kunnen worden<br> - duurzame banen en vaardigheidstraining voor de transitie<br> - een wereldwijd concurrerende en veerkrachtige industrie</p>");
				$('.popup').append("<img class='back-button-home' src='assets/pijl-button.svg' alt='button'>")
				$('.back-button-home').click(function () {
					$(this).parent().remove();
					$('.overlay').remove();
				})
			});
			$(".item-1 img, .item-1 p").on("click", function () {
				$('body').css("overflow", "hidden");
				$('.scenario').css("display", "block")
				$('.scenario').append("<video id='keuze1' loop='true' vjs-16-9 autoplay='true' class='video-js scenario-vid' preload='auto' data-setup='{'fluid': true}'><source src='assets/videos/keuze1.mp4'></video>")

				$('.verhaal').text("Frans is onderweg naar werk en ziet dat gebouwen niet erg eco-vriendelijk zijn.  Hij denkt na over hoe hij de toekomst kan veranderen. Hij wilt de gebouwen verbeteren, maar hij twijfelt tussen twee mogelijkheden.")
				$('#keus1').text("Alle gebouwen hebben geen CO2 uitstoot voor 2050");
				$('#keus1').append("<img class='green-logo' src='assets/greenDeal.svg' alt='damn' width='50' height='50'>");

				$('#keus2').text("De 15% meest vervuilende gebouwen innoveren.");
				$('#keus2').append("<img class='green-logo' src='assets/greenDeal.svg' alt='damn' width='50' height='50'>");

				$('#keus1').on("click", function () {
					$('.video-js').remove();
					$(".antwoord").css("display", "block");
					$('.antwoord').append("<video id='uitleg1' loop='true' vjs-16-9 autoplay='true' class='video-js scenario-vid' preload='auto' data-setup='{'fluid': true}'><source src='assets/videos/1.mp4'></video>")
					$(".uitleg").text("Gebouwen gebruiken veel energie, namelijk 40% in Europa. Vanaf 2030 wil Europa dat alle nieuwe gebouwen geen uitstoot meer hebben. Gebouwen moeten minder vervuilde energie (van fossiele brandstoffen) gebruiken en juist aangedreven worden door groene energie.")
					$(".next-button").click(function() {
						$('.video-js').remove();
						$('.scenario').css("display", "none");
						$('.antwoord').css("display", "none");
						$('body').css("overflow", "auto");
					})
				})
				$('#keus2').on("click", function () {
					$('.video-js').remove();
					$(".antwoord").css("display", "block");
					$('.antwoord').append("<video id='uitleg2' loop='true' vjs-16-9 autoplay='true' class='video-js scenario-vid' preload='auto' data-setup='{'fluid': true}'><source src='assets/videos/2.mp4'></video>")
					$(".uitleg").text("Voor deze maatregel zouden er 35 miljoen gebouwen gerenoveerd  moeten worden voor 2030. Hiervoor is ook mankracht nodig. Dit betekent dat door de renovatie 150.000 nieuwe banen ontstaan. Het energie verbruik neemt met 15% af.")
					$(".next-button").click(function() {
						$('.video-js').remove();
						$('.scenario').css("display", "none");
						$('.antwoord').css("display", "none");
						$('body').css("overflow", "auto");
					})
				})
				$(".back-button").click(function () {
					$(this).parent().css("display", "none");
					$('.video-js').remove();
					$('body').css("overflow", "auto");
				})
			})
			$(".item-2 img, .item-2 p").click(function () {
				$('body').css("overflow", "hidden");
				$('.scenario').css("display", "block")
				$('.scenario').append("<video id='keuze2' loop='true' autoplay='true' vjs-16-9 class='video-js scenario-vid' preload='auto' data-setup='{'fluid': true}'><source src='assets/videos/keuze2.mp4'></video>")
				$('.verhaal').text("Frans zoekt naar een restaurant voor zijn lunch en hij ziet alleen ongezonde en dure restaurants. Ook ziet hij dat het voedsel vaak verspilt wordt. Wat kan hij het beste doen?")
				$('#keus1').text("Voedsel gezonder en betaalbaarder maken")
				$('#keus2').text("Het verspilde voedsel verminderen")
				$('#keus1').append("<img class='green-logo' src='assets/greenDeal.svg' alt='damn' width='50' height='50'>");

				$('#keus1').on("click", function () {
					$('.video-js').remove();
					$(".antwoord").css("display", "block");
					$('.antwoord').append("<video id='uitleg3' loop='true' vjs-16-9 autoplay='true' class='video-js scenario-vid' preload='auto' data-setup='{'fluid': true}'><source src='assets/videos/3.mp4'></video>")
					$(".uitleg").text("De Europese Commisie wilt gebruik maken van de 'Farm to fork' strategie. Dit betekent dat 25% van de landbouwgrond gebruikt wordt voor organische landbouw. Er worden minder pesticiden gebruikt en er wordt beter gezorgd voor dieren. Voedsel wordt hierdoor van betere kwaliteit. De Europese Comissie wilt voedsel ook betaalbaarder maken door het inzetten van voedselhulpprogramma's zodat alle bewoners van Europa toegang hebben tot betaalbaar en gezond voedsel.")
					$(".next-button").click(function() {
						$('.video-js').remove();
						$('.scenario').css("display", "none");
						$('.antwoord').css("display", "none");
						$('body').css("overflow", "auto");
					})
				})
				$('#keus2').on("click", function () {
					$('.video-js').remove();
					$(".antwoord").css("display", "block");
					$('.antwoord').append("<video id='uitleg4' loop='true' vjs-16-9 autoplay='true' class='video-js scenario-vid' preload='auto' data-setup='{'fluid': true}'><source src='assets/videos/4.mp4'></video>")
					$(".uitleg").text("Jaarlijks wordt er in Europa 88 miljoen ton aan voedsel weggegooit. Dit is 173 kilo per persoon. Hierdoor gaat er ook water, energie en landbouwgrond verloren. Het doel is om deze verspilling met 50% te verminderen. Dit wordt gedaan door het promoten van voedseldonaties en de belasting op de donaties af te schaffen.")
					$(".next-button").click(function() {
						$('.video-js').remove();
						$('.scenario').css("display", "none");
						$('.antwoord').css("display", "none");
						$('body').css("overflow", "auto");
					})
				})
				$(".back-button").click(function () {
					$(this).parent().css("display", "none");
					$('body').css("overflow", "auto");
				})
			})
			$(".item-3 img, .item-3 p").click(function () {
				$('body').css("overflow", "hidden");
				$('.scenario').css("display", "block")
				$('.scenario').append("<video id='keuze3' loop='true' autoplay='true' vjs-16-9 class='video-js scenario-vid' preload='auto' data-setup='{'fluid': true}'><source src='assets/videos/keuze3.mp4'></video>")
				$('.verhaal').text("Het valt op dat de files steeds langer worden. Wat zou de beste oplossing hiervoor zijn?")
				$('#keus1').text("OV gratis maken, mensen aanmoedigen het openbaar vervoer te gebruiken")
				$('#keus2').text("Meer wegenbelasting voor benzine auto's")
				$('#keus1').on("click", function () {
					$('.video-js').remove();
					$(".antwoord").css("display", "block");
					$('.antwoord').append("<video id='uitleg5' loop='true' muted vjs-16-9 autoplay='true' class='video-js scenario-vid' preload='auto' data-setup='{'fluid': true}'><source src='assets/videos/5.mp4'></video>")
					$(".uitleg").text("Als je het ov gratis maakt, gaan er wel meer mensen met het ov, maar een klein deel daarvan zijn reizigers die normaal met de auto zouden gaan. Gratis openbaar vervoer is een dure maatregel. En voor het milieu kan het zelfs andersom werken omdat al die extra reizigers ook extra energie kosten.")
					$(".next-button").click(function() {
						$('.video-js').remove();
						$('.scenario').css("display", "none");
						$('.antwoord').css("display", "none");
						$('body').css("overflow", "auto");
					})
				})
				$('#keus2').on("click", function () {
					$('.video-js').remove();
					$(".antwoord").css("display", "block");
					$('.antwoord').append("<video id='uitleg6' loop='true' vjs-16-9 autoplay='true' class='video-js scenario-vid' preload='auto' data-setup='{'fluid': true}'><source src='assets/videos/6.mp4'></video>")
					$(".uitleg").text("Door de wegenbelasting te verhogen voor benzine auto's zijn mensen geneigd om naar een elektrische auto over te schakelen. Volgens de Europese ICCT (International Council on Clean Transportation) stoot een elektrische auto ongeveer 6x minder CO2 uit.")
					$(".next-button").click(function() {
						$('.video-js').remove();
						$('.scenario').css("display", "none");
						$('.antwoord').css("display", "none");
						$('body').css("overflow", "auto");
					})
				})
				$(".back-button").click(function () {
					$(this).parent().css("display", "none");
					$('body').css("overflow", "auto");
				})
			})
			$(".item-4 img, .item-4 p").click(function () {
				$('body').css("overflow", "hidden");
				$('.scenario').css("display", "block")
				$('.scenario').append("<video id='keuze4' loop='true' autoplay='true' vjs-16-9 class='video-js scenario-vid' preload='auto' data-setup='{'fluid': true}'><source src='assets/videos/keuze4.mp4'></video>")
				$('.verhaal').text("Frans Timmermans streeft ernaar om voor 2050 geen uitstoot in de lucht, water en grond te hebben.")
				$('#keus1').text("Gebruik maken van de Europese Soil Strategie")
				$('#keus2').text("Wetten opstellen om afval beter te recyclen")
				$('#keus1').append("<img class='green-logo' src='assets/greenDeal.svg' alt='damn' width='50' height='50'>");
				$('#keus2').append("<img class='green-logo' src='assets/greenDeal.svg' alt='damn' width='50' height='50'>");
				$('#keus1').on("click", function () {
					$('.video-js').remove();
					$(".antwoord").css("display", "block");
					$('.antwoord').append("<video id='uitleg7' loop='true' muted vjs-16-9 autoplay='true' class='video-js scenario-vid' preload='auto' data-setup='{'fluid': true}'><source src='assets/videos/7.mp4'></video>")
					$(".uitleg").text("De gezondheid van de grond heeft een directe link met de gezondheid van de mens. Er wordt geschat dat 70% van de Europese bodem niet gezond is. Het plan van Frans Timmermans is om indicatoren te ontwikkelen  en deze op te nemen in de Grond Gezondheid Wet. Ook wil hij het verplichten om een certificaat in te voeren, zodat mensen beter voor de grond zullen zorgen. Daardoor kan per jaar 7.4 miljoen ton aan CO2 bespaard worden.")
					$(".next-button").click(function() {
						$('.video-js').remove();
						$('.scenario').css("display", "none");
						$('.antwoord').css("display", "none");
						$('body').css("overflow", "auto");
					})
				})
				$('#keus2').on("click", function () {
					$('.video-js').remove();
					$(".antwoord").css("display", "block");
					$('.antwoord').append("<video id='uitleg8' loop='true' muted vjs-16-9 autoplay='true' class='video-js scenario-vid' preload='auto' data-setup='{'fluid': true}'><source src='assets/videos/8.mp4'></video>")
					$(".uitleg").text("Jaarlijks produceert de gemiddelde Europeaan 5 ton aan afval. In heel Europa is dat 2,2 miljard ton aan afval. Het plastic in de oceaan is in 2040 drie keer zoveel. Maatregelen die genomen worden zijn producten meer recyclebaar maken aan de hand van subsidies en producenten verantwoordelijk maken voor het lozen van afval.")
					$(".next-button").click(function() {
						$('.video-js').remove();
						$('.scenario').css("display", "none");
						$('.antwoord').css("display", "none");
						$('body').css("overflow", "auto");
					})
				})
				$(".back-button").click(function () {
					$(this).parent().css("display", "none");
					$('body').css("overflow", "auto");
				})
			})
			$(".item-5 img, .item-5 p").click(function () {
				$('body').css("overflow", "hidden");
				$('.scenario').css("display", "block")
				$('.scenario').append("<video id='keuze5' loop='true' autoplay='true' vjs-16-9 class='video-js scenario-vid' preload='auto' data-setup='{'fluid': true}'><source src='assets/videos/keuze5.mp4'></video>")
				$('.verhaal').text("De energie transitie vereist dat we afstappen van kolenbrandstoffen. Hoe kan je ervoor zorgen dat er minder koolstof de lucht in gaat")
				$('#keus1').text("Investeren in low carbon technologie en de waterstof strategie toepassen")
				$('#keus2').text("Methaan emissies verminderen aan de hand van de methaan strategie")
				$('#keus1').append("<img class='green-logo' src='assets/greenDeal.svg' alt='damn' width='50' height='50'>");
				$('#keus2').append("<img class='green-logo' src='assets/greenDeal.svg' alt='damn' width='50' height='50'>");
				$('#keus1').on("click", function () {
					$('.video-js').remove();
					$(".antwoord").css("display", "block");
					$('.antwoord').append("<video id='uitleg9' loop='true' muted vjs-16-9 autoplay='true' class='video-js scenario-vid' preload='auto' data-setup='{'fluid': true}'><source src='assets/videos/9.mp4'></video>")
					$(".uitleg").text("Een alternatief op koolstof is gevonden en dat is waterstof.  De voordelen van waterstof is dat het geen CO2 uitstoot heeft. Ook is het meest voorkomende element in het universum. Dit betekent dat het niet snel op raakt. Ook is het 3x krachtiger dan fossiele brandstoffen qua energie efficiëntie.")
					$(".next-button").click(function() {
						$('.video-js').remove();
						$('.scenario').css("display", "none");
						$('.antwoord').css("display", "none");
						$('body').css("overflow", "auto");
					})
				})
				$('#keus2').on("click", function () {
					$('.video-js').remove();
					$(".antwoord").css("display", "block");
					$('.antwoord').append("<video id='uitleg10' loop='true' muted vjs-16-9 autoplay='true' class='video-js scenario-vid' preload='auto' data-setup='{'fluid': true}'><source src='assets/videos/10.mp4'></video>")
					$(".uitleg").text("Methaan draagt naast CO2 bij tot het broeikaseffect en is dus schadelijk voor de luchtkwaliteit. Minder methaan uitstoot betekent minder snelle opwarming van de aarde en een schonere lucht. Frans Timmermans wilt de methaan stoppen van ontsnappen uit vervoerbuizen en het uit de grond halen van aardgas en door boeren to controleren over hun methaan uitstoot (van onder anderen koeien).")
					$(".next-button").click(function() {
						$('.video-js').remove();
						$('.scenario').css("display", "none");
						$('.antwoord').css("display", "none");
						$('body').css("overflow", "auto");
					})
				})
				$(".back-button").click(function () {
					$(this).parent().css("display", "none");
					$('body').css("overflow", "auto");
				})
			})
		}
	})
};
