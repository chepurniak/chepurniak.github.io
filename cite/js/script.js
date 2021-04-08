window.addEventListener('DOMContentLoaded', () => {

    //nav
    const menuLinks = document.querySelectorAll('.navbar__link[data-goto]');

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.navbar__menu').offsetHeight;

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            });
            e.preventDefault();
        }
    }

    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener('click', (onMenuLinkClick));
        });
    }

    //learn more 
    const learnMore = document.querySelector('.home__btn[data-goto]');
    learnMore.addEventListener('click', onMenuLinkClick);


    //hide line in nav and blur menu bg
    const navImg = document.querySelector('.navbar__img');
    const navMenu = document.querySelector('.navbar__menu');

    window.addEventListener('scroll', (e) => {
        if (window.pageYOffset >= 60) {
            navImg.classList.add('hidden');
            navMenu.classList.add('blur');
        }
        else {
            navImg.classList.remove('hidden');
            navMenu.classList.remove('blur');
        }
    });

    //make menu link active
    const homeLink = document.querySelector('.navbar__link_home'),
        aboutLink = document.querySelector('.navbar__link_about'),
        graniteLink = document.querySelector('.navbar__link_granite'),
        calculatorLink = document.querySelector('.navbar__link_calculator'),
        contactsLink = document.querySelector('.navbar__link_contacts');

    const homeSectionY = document.querySelector('.home').offsetTop - 50,
        aboutSectionY = document.querySelector('.about').offsetTop - 150,
        graniteSectionY = document.querySelector('.granite').offsetTop,
        calculatorSectionY = document.querySelector('.calculator').offsetTop,
        contactsSectionY = document.querySelector('.contacts').offsetTop;

    homeLink.classList.add('navbar__active-link');
    window.addEventListener('scroll', (e) => {
        if (homeSectionY <= window.pageYOffset && window.pageYOffset < aboutSectionY) {
            homeLink.classList.add('navbar__active-link');
        }
        else {
            homeLink.classList.remove('navbar__active-link');
        }
        if (aboutSectionY <= window.pageYOffset && window.pageYOffset < graniteSectionY) {
            aboutLink.classList.add('navbar__active-link');
        }
        else {
            aboutLink.classList.remove('navbar__active-link');
        }
        if (graniteSectionY <= window.pageYOffset && window.pageYOffset < calculatorSectionY) {
            graniteLink.classList.add('navbar__active-link');
        }
        else {
            graniteLink.classList.remove('navbar__active-link');
        }
        if (calculatorSectionY <= window.pageYOffset && window.pageYOffset < contactsSectionY) {
            calculatorLink.classList.add('navbar__active-link');
        }
        else {
            calculatorLink.classList.remove('navbar__active-link');
        }
        if (contactsSectionY <= window.pageYOffset) {

            contactsLink.classList.add('navbar__active-link');
        }
        else {
            contactsLink.classList.remove('navbar__active-link');
        }
    });
});