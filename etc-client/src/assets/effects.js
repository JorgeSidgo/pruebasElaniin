$(function() {

    setTimeout(function() {
        $(".frame").css('transform', 'translateY(0)');
    }, 50);

    setTimeout(function() {
        $(".frame").css('filter', 'opacity(100%)');
        $("body").css('overflow', 'show');
        
    }, 50);


    setTimeout(function() {
        $("#dashboard-grid").find('.row').css('transform', 'translateY(0)');
    }, 50);

    setTimeout(function() {
        $("#dashboard-grid").find('.row').css('filter', 'opacity(100%)');
        $("body").css('overflow', 'show');
        
    }, 50);

});
