$(document).ready(function(){
    $('#inhoud').load('../html/blogArtiekelen.html .preview');

    $('#inhoud').on('click', '#cursus', function(){
        $('#aanmelding').slidetoggle();
        $('#docent').slidetoggle();
    });
    $('#inhoud').on('click', '#aanmelding', function(){
        $('#cursus').slidetoggle();
        $('#docent').slidetoggle();
    });
    $('#inhoud').on('click', '#docent', function(){
        $('#cursus').slidetoggle();
        $('#aanmelding').slidetoggle();
    });
});
