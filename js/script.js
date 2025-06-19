$(document).ready(function(){
    $('#inhoud').load('../html/blogArtiekelen.html .preview');

    $('#cursus').on('click', function(){
        console.log('click1');
    });
    $('#aanmelding').on('click', function(){
        console.log('click2');
    });
    $('#docent').on('click', function(){
        console.log('click3');
    });
});
