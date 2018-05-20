	<div class="footer">
		<div class="footer-container">
			<div class="footer-contact">
				<div class="footer-contact-title">contact us</div>
				<ul class="footer-contact-address1">
					<li class="footer-contact-address1-item">Unit 8 Honywood Business Park</li>
					<li class="footer-contact-address1-item">Honywood Road</li>
					<li class="footer-contact-address1-item">Basildon, Essex, SS14 3HW</li>
				</ul>
				<ul class="footer-contact-address2">
					<li class="footer-contact-address2-item">Tel: 01268 272 030</li>
					<li class="footer-contact-address2-item">Fax: 01268 272 040</li>
					<li class="footer-contact-address2-item">Email: info@saigb.co.uk</li>
				</ul>
			</div>
			<div class="footer-find">
				<div class="footer-find-title">find us</div>
				<div class="footer-find-map" id="map"></div>
			</div>
			<div class="footer-message">
				<div class="footer-message-title">write us</div>
				<input type="text" class="footer-message-input" placeholder="Name">
				<input type="text" class="footer-message-input" placeholder="E-mail">
				<input type="text" class="footer-message-input message" placeholder="Message">
				<div class="footer-message-button">submit</div>
			</div>
		</div>
		<div class="footer-copyright">Copyright © 2015 SAI GB Ltd. <div class="footer-copyright-underline">Privacy Policy and Terms & Conditions</div></div>
	</div>
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAp5mlqCS-xpbLCsp1xB11GNL9fvjfV27w&callback=initMap"
	async defer>
  	</script>
	<script src='js/script.js'></script>
	<!-- <script>
		
function initMap() {
    var uluru = {lat: 46.47, lng: 30.73};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }

var intro = document.querySelector('.intro');
var sliderIntroFirst = document.querySelector('.item1');
sliderIntroFirst.addEventListener('click', function(){
    intro.classList.add('firstintro');
    intro.classList.remove('secondintro');
    intro.classList.remove('thirdintro');
    intro.classList.remove('fourthintro');
});
var sliderIntroSecond = document.querySelector('.item2');
sliderIntroSecond.addEventListener('click', function(){
    intro.classList.add('secondintro');
    intro.classList.remove('firstintro');
    intro.classList.remove('thirdintro');
    intro.classList.remove('fourthintro');
});
var sliderIntroThird = document.querySelector('.item3');
sliderIntroThird.addEventListener('click', function(){
    intro.classList.add('thirdintro');
    intro.classList.remove('secondintro');
    intro.classList.remove('firstintro');
    intro.classList.remove('fourthintro');
});
var sliderIntroFourth = document.querySelector('.item4');
sliderIntroFourth.addEventListener('click', function(){
    intro.classList.add('fourthintro');
    intro.classList.remove('secondintro');
    intro.classList.remove('thirdintro');
    intro.classList.remove('firstintro');
});

var testimonialsButtonFirst = document.querySelector('.man1small');
var testimonialsButtonSecond = document.querySelector('.womansmall');
var testimonialsButtonThird = document.querySelector('.man2small');

var itemLeft = document.querySelector('.left');
var itemCenter = document.querySelector('.center');
var itemRight = document.querySelector('.right');

testimonialsButtonFirst.addEventListener('click', function(){
    itemLeft.classList.add('center');
    itemLeft.classList.remove('right');
    itemLeft.classList.remove('left');
    itemRight.classList.remove('center');
    itemRight.classList.add('right');
    itemCenter.classList.remove('center');
    itemCenter.classList.add('left');
    
});
testimonialsButtonSecond.addEventListener('click', function(){
    itemCenter.classList.add('center');
    itemCenter.classList.remove('right');
    itemCenter.classList.remove('left');
    itemRight.classList.remove('center');
    itemLeft.classList.remove('center');
    itemRight.classList.add('right');
    itemLeft.classList.add('left');

});
testimonialsButtonThird.addEventListener('click', function(){
    itemRight.classList.add('center');
    itemRight.classList.remove('right');
    itemRight.classList.remove('left');
    itemCenter.classList.remove('center');
    itemLeft.classList.remove('center');
    itemCenter.classList.add('right');
    itemLeft.classList.add('left');
});


	</script> -->
    <?php wp_footer();?>
</body>
</html>