$(document).ready(function(){
    /*$.ajax({
    url: '../html/blogArtiekelen.html',
    success: function(data){
        $('#inhoud').append(data)
    },
    error: function(){
        alert('Er is iets fout gegaan. Probeer later opnieuw alstublieft.');
    }
    });*/
    $('#article1').load('../html/blogArtiekelen.html #cursus');
    $('#article2').load('../html/blogArtiekelen.html #aanmelding');
    $('#article3').load('../html/blogArtiekelen.html #docent');
});
