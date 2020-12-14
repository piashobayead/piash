var mixer = mixitup('.work-grid');

$(function(){
    $('.next-section a').on('click',function(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        },2000);
        return false
    });
});
function openMenu () {
    document.getElementById('navbar').style.width="100%";
}
function closeMenu(){
    document.getElementById('navbar').style.width="0%"; 
}
new WOW().init();