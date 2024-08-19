const alterarStatus = (index) => {

    const getSelectedGame = document.querySelector(`#game-${index}`);
    const button = getSelectedGame.querySelector('a');
    const cover = getSelectedGame.querySelector('div');

    let buttonStyle = button.getAttribute('class');


    if (buttonStyle === 'dashboard__item__button') {

        button.setAttribute('class', 'dashboard__item__button dashboard__item__button--return');

        cover.setAttribute('class', 'dashboard__item__img dashboard__item__img--rented');

        button.innerHTML = 'Devolver';

    } else {

        button.setAttribute('class', 'dashboard__item__button');

        cover.setAttribute('class', 'dashboard__item__img');

        button.innerHTML = 'Alugar';

    }


    return console.log(buttonStyle)

}

//console.log(alterarStatus(1));
