
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

