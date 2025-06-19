$(document).ready(function(){
    $('#inhoud').load('../html/blogArtiekelen.html .preview');

    $('#article1').on('click', function(){
        console.log('click1');
    });
    $('#article2').on('click', function(){
        console.log('click2');
    });
    $('#article3').on('click', function(){
        console.log('click3');
    });
});
