document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-bs-button]')

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
})

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