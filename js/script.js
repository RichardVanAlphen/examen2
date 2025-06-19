$(document).ready(function(){
    // Laden artiekelen
    $('#inhoud').load('../html/blogArtiekelen.html .preview');
    
    $('#inhoud .fullversion').hide();
    // Animaties
    // Artiekel openen/sluiten
    $('#inhoud').on('click', '#cursus', function(){
        $('#cursusFullVersion').slideToggle();
        $('#aanmelding').slideToggle();
        $('#docent').slideToggle();
    });
    $('#inhoud').on('click', '#aanmelding', function(){
        $('#aanmeldingFullVersion').slideToggle();
        $('#cursus').slideToggle();
        $('#docent').slideToggle();
    });
    $('#inhoud').on('click', '#docent', function(){
        $('#docentFullVersion').slideToggle();
        $('#cursus').slideToggle();
        $('#aanmelding').slideToggle();
    });
});
