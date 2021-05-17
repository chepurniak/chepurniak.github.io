const pricesJSON = {
    "kapustinskij": {
        "stella": {
            "small": 130,
            "big": 270
        },
        "stand": 85,
        "plate": 170,
        "borders": 85
    },
    "labradorite": {
        "stella": {
            "small": 120,
            "big": 240
        },
        "stand": 80,
        "plate": 160,
        "borders": 70
    },
    "tokovsky": {
        "stella": {
            "small": 170,
            "big": 320
        },
        "stand": 110,
        "plate": 220,
        "borders": 110
    },
    "gabbro": {
        "stella": {
            "small": 110,
            "big": 225
        },
        "stand": 60,
        "plate": 170,
        "borders": 65
    },
    "pokostovsky": {
        "stella": {
            "small": 120,
            "big": 240
        },
        "stand": 80,
        "plate": 150,
        "borders": 70
    },
    "leznikovsky": {
        "stella": {
            "small": 120,
            "big": 240
        },
        "stand": 80,
        "plate": 160,
        "borders": 70
    },
    "maslavsky": {
        "stella": {
            "small": 120,
            "big": 240
        },
        "stand": 80,
        "plate": 160,
        "borders": 70
    },
    "mezhirichensky": {
        "stella": {
            "small": 120,
            "big": 240
        },
        "stand": 80,
        "plate": 160,
        "borders": 70
    }
}



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
    const navMenu = document.querySelector('nav');

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

    //about to calculator
    const toCalc = document.querySelector('.about__link-to-calc');
    toCalc.addEventListener('click', e => {
        window.scrollTo({
            top: document.querySelector('.calculator').offsetTop - 40,
            behavior: 'smooth'
        });
    })

    // modal windows for granite info
    const granits = document.querySelectorAll('.granite__img'),
        modals = document.querySelectorAll('.modal'),
        modalCloseBtn = document.querySelectorAll('.modal__close');

    function closeModals() {
        modals.forEach(item => {
            item.classList.remove('modal_open');
            document.body.style.overflow = '';
        });
    }

    // x
    modalCloseBtn.forEach(btn => {
        btn.addEventListener('click', closeModals);
    });

    modals.forEach(modal => {
        // close on empty area
        modal.addEventListener('click', e => {
            if (e.target.classList.contains('modal__body')) {
                closeModals();
            }
        });
        //esc
        document.addEventListener('keydown', e => {
            if (e.code === 'Escape' && modal.classList.contains('modal_open')) {
                closeModals();
            }
        });
    });



    function openModal() {
        document.body.style.overflow = 'hidden';
    }

    granits.forEach((item, i) => {
        item.addEventListener('click', e => {
            modals[i].classList.add('modal_open');
            document.body.style.overflow = 'hidden';
        });
    });



    //calculator

    //addition
    const additional = document.querySelectorAll('.calculator__choice-additional-title'),
        content = document.querySelectorAll('.calculator__choice-additional-content'),
        arrowImg = document.querySelectorAll('.arrow-img');

    additional.forEach((element, i) => {
        element.addEventListener('click', e => {
            toggleAddition(i);
            closeAnotherAdditions(i);
        });
    });

    function toggleAddition(i) {
        content[i].classList.toggle('dnone');
        arrowImg[i].classList.toggle('rotate');
    }

    function closeAnotherAdditions(i) {
        content.forEach((unactive, j) => {
            if (i !== j && !content[j].classList.contains('dnone')) {
                toggleAddition(j);
            }
        });
    };

    //obj
    let granite = 'kapustinskij',
        stellaSize = 'big',
        plate = 'plate';

    //stella
    const stellaBtns = document.querySelectorAll('.calculator__choice-button[data-stella]');

    stellaBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            stellaBtns.forEach(unactive => {
                unactive.classList.remove('calculator__choice-button_active');
            });
            btn.classList.add('calculator__choice-button_active');
            stellaSize = btn.dataset.stella;
            updatePrice();
        });
    });

    const stellaBtnsAddition = document.querySelectorAll('.calculator__choice-button[data-stellaAddition]');

    stellaBtnsAddition.forEach(btn => {
        btn.addEventListener('click', e => {
            stellaBtnsAddition.forEach(unactive => {
                unactive.classList.remove('calculator__choice-button_active');
            });
            btn.classList.add('calculator__choice-button_active');
        });
    });
    //plate
    const plateBtns = document.querySelectorAll('.calculator__choice-button[data-plate]');

    plateBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            plateBtns.forEach(unactive => {
                unactive.classList.remove('calculator__choice-button_active');
            });
            btn.classList.add('calculator__choice-button_active');
            plate = btn.dataset.plate;
            updatePrice();
        });
    });

    //granite
    const granitesTitles = ['Покостовский', 'Лезниковский', 'Маславский', 'Межириченский', 'Токовский', 'Капустянский', 'Лабрадорит', 'Габбро']

    const granites = document.querySelectorAll('.calculator__choice-granite-img'),
        activeGranite = document.querySelector('.calculator__choice-granite-active-img'),
        activeGraniteTitle = document.querySelector('.calculator__choice-granite-active-title');

    granites.forEach((element, i) => {
        element.addEventListener('click', e => {
            granites.forEach(unactive => {
                unactive.classList.remove('calculator__choice-granite-img_active');
            })
            element.classList.add('calculator__choice-granite-img_active');
            activeGranite.src = element.firstElementChild.src;
            activeGraniteTitle.innerHTML = granitesTitles[i];

            granite = element.dataset.granite;
            console.log(granite);
            updatePrice();
        });
    });


    //price


    const price = document.querySelector('.price');
    const prices = pricesJSON;

    function updatePrice() {
        stellaPrice = prices[granite].stella[stellaSize];
        standPrice = prices[granite].stand;
        platePrice = prices[granite].plate;
        bordersPrice = prices[granite].borders;

        if (plate === 'flower') {
            platePrice = 0;
        }
        if (plate === 'plate-flower') {
            platePrice *= 0.5;
        }

        price.innerHTML = 500 + 1.2 * (stellaPrice + standPrice + platePrice + bordersPrice);
    }


    updatePrice();

});