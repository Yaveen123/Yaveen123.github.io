document.addEventListener('DOMContentLoaded', function () {
    //olliej (2009) JavaScript window resize event, https://stackoverflow.com/questions/641857/javascript-window-resize-event
    function handleResize() {
        if (window.innerWidth > 700) {
            let elementToShow = document.querySelector('.hero__box');
            if (elementToShow) {
                elementToShow.style.display = '';
            }

            let elementToHide = document.querySelector('.hero__box--mobile');
            if (elementToHide) {
                elementToHide.style.display = 'none';
            }
        } else {
            let elementToShow = document.querySelector('.hero__box--mobile');
            if (elementToShow) {
                elementToShow.style.display = '';
            }

            let elementToHide = document.querySelector('.hero__box');
            if (elementToHide) {
                elementToHide.style.display = 'none';
            }
        }

        // console.log("resize", window.innerWidth)
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once on load to set initial state
});