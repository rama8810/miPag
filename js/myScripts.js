/*Menu myScript Hover Effect*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY + 150;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav a[href*=' + id + ']').classList.add('active');
            });
        };
    })
}

/*easypiechart myScript to initialize*/
$(function() {
    $('.chart').easyPieChart({
        size:125,
        barColor: '#2d6d92',
        scaleColor: false,
        lineWidth: 15,
        trackColor: 'Silver'
    });
});
