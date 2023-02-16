expandBar = () => {
    const cont = document.querySelector('.container');
    cont.classList.toggle('expand');
    const searchField = document.querySelector('.search-field');
    searchField.classList.toggle('appear');
}