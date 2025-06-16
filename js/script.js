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
    $('#inhoud').load('../html/blogArtiekelen.html #cursus');
    $('#inhoud').load('../html/blogArtiekelen.html #aanmelding');
    $('#inhoud').load('../html/blogArtiekelen.html #docent');
});
