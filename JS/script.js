document.addEventListener('DOMContentLoaded', (event) => {
    function getNumberOfColumns(element) {
        const style = window.getComputedStyle(element);
        const gridTemplateColumns = style.getPropertyValue('grid-template-columns');
        return gridTemplateColumns.split(' ').length;
    }

    const cardsContainer = document.querySelector('.cards');
    if (cardsContainer) {
        const numberOfColumns = getNumberOfColumns(cardsContainer);
        console.log(numberOfColumns);

        const menu = document.querySelector('.menu');

        if (numberOfColumns <= 2) {
            menu.classList.add('horizontal');
            menu.classList.remove('vertical');
        } else {
            menu.classList.add('vertical');
            menu.classList.remove('horizontal');
        }
    } else {
        console.error('Element with class .cards not found');
    }
});