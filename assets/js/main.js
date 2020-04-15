$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

$(".prod__image").click(function () { 
    var srcimage = $(this).attr("src");
    $(".prod__produit").attr("src", srcimage );
    $(".prod__produit").fadeIn();
});