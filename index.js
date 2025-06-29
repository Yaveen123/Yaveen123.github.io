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


    document.querySelectorAll('.accordion__header').forEach(function(header) {
        const body = header.nextElementSibling;

        body.style.display = 'none';
        header.dataset.state = 'closed';
        
        header.addEventListener('click', function() {
            if (body && body.classList.contains('accordion__body')) {
                if (header.dataset.state === 'open') {
                    body.style.display = 'none';
                    header.dataset.state = 'closed';
                    header.querySelector('.accordion__header__arrow').style.transform = 'rotate(0deg)'
                } else {
                    body.style.display = '';
                    header.dataset.state = 'open';
                    header.querySelector('.accordion__header__arrow').style.transform = 'rotate(180deg)'
                }
                console.log(header.dataset.state);
            }
        });
    });
});


