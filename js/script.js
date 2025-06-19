$(document).ready(function(){
    $('#inhoud').load('../html/blogArtiekelen.html .preview');

    $('#inhoud').on('click', '#cursus', function(){
        $('#aanmelding').slideToggle();
        $('#docent').slideToggle();
    });
    $('#inhoud').on('click', '#aanmelding', function(){
        $('#cursus').slideToggle();
        $('#docent').slideToggle();
    });
    $('#inhoud').on('click', '#docent', function(){
        $('#cursus').slideToggle();
        $('#aanmelding').slideToggle();
    });
});
