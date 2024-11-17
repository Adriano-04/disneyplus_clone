document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-bs-button]')
    const questions = document.querySelectorAll('[data-faq-question')

    const heroSection = document.querySelector('.hero')
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const scroll = window.scrollY;

        if (scroll < alturaHero) {
            HiddenHeader()
        } else {
            AddHeader()
        }
    })

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function(botao) {
                const abaAlvo = botao.target.dataset.bsButton;
                const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
                escondeAbas();
                aba.classList.add('shows__list--is-active')
                removeActive();
                botao.target.classList.add('shows__tabs__button--is-active')

            })
        }

        for (let i = 0; i < questions.length; i++) {
            questions[i].addEventListener('click', AbreFechar)
        }
})

function HiddenHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden')
}

function AddHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden')
}

function AbreFechar(element) {
    const classe = 'faq__questions__item--is-open'
    const elementopai = element.target.parentNode

    elementopai.classList.toggle(classe)
}

function removeActive() {
    const buttons = document.querySelectorAll('[data-bs-button]')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }

}

function escondeAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}