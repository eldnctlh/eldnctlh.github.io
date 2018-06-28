const formName = document.querySelector('.request_form_name');
const formEmail = document.querySelector('.request_form_email');
const formMessage = document.querySelector('.request_form_message');
const formButton = document.querySelector('.request_form_button');

formButton.addEventListener('click', function(){
    var formData = {
        name: formName.value,
        email: formEmail.value,
        message: formMessage.value
    };
    console.log(formData);
});
const moveToDownload = document.querySelector('.head_main_left_buttons_button1');
const moveToVideo = document.querySelector('.head_main_left_buttons_button2');

moveToVideo.addEventListener('click', () => {
    var videoLocation = document.querySelector('.video1').getBoundingClientRect().top;
    window.scrollTo(0, videoLocation - 75);
});
moveToDownload.addEventListener('click', () => {
    var downloadLocation = document.querySelector('.download1').getBoundingClientRect().top;
    window.scrollTo(0, downloadLocation - 150);
});
