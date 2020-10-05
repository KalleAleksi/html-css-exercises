// show search 
const search = document.getElementById("search-form");
const showHide = () => {
    search.classList.toggle("hide");
};

// scroll to top button

const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) {
        toTop.classList.add('active');
    } else {
        toTop.classList.remove('active');
    };
});