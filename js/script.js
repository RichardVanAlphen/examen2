$(document).ready(function(){
    $.ajax({
    url: '../html/blogArtiekelen.html',
    context: '#Cursus',
    success: function(data){
        $('#inhoud').append(data)
    },
    error: function(){
        alert('Er is iets fout gegaan. Probeer later opnieuw alstublieft.');
    }
    });
});
