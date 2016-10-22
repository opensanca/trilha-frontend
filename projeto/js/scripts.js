//Vanilla

(function createEventsListener() {
    var links = document.querySelectorAll(".menu a")

    for(var i=0; i < links.length;i++) {
        links[i].addEventListener("click", function(){

            removeAllLiClass();

            var href = this.getAttribute("href");
            var target = href.substring(2);

            this.className = 'selected-'+target;

            var element = document.querySelector('.'+target);
            scrollTo(document.body, element.offsetTop, 1000);

        });
    }
    
})();

function scrollTo(element, to, duration) {
    if (duration <= 0) 
        return;

    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {

        element.scrollTop = element.scrollTop + perTick;

        if (element.scrollTop === to) 
            return;
        
        scrollTo(element, to, duration - 10);
    
    }, 10);
}

function removeAllLiClass(){
    var links = document.querySelectorAll(".menu a");
    for(var i=0; i < links.length;i++) {
        links[i].className = '';
    }
}


/*//jquery
$('.menu a').click(function(){

    $(".menu a.selected").removeClass("selected");


    var target = $(this).attr('href');
    target = target.substring(2);

    $(this).addClass('selected-'+target);

    $('html,body').animate({
      scrollTop: $('.'+target).offset().top
    }, 1000);

});
*/