// selecionar DOM: li de cada jogo
const monopoly = document.querySelector('#game-1');
const ticketToRide = document.querySelector('#game-2');
const takenodo = document.querySelector('#game-3');

// selecionar DOM: capa de cada jogo
const monopolyCover = document.querySelector('#game-1 > div');
const ticketToRideCover = document.querySelector('#game-2 > div');
const takenodoCover = document.querySelector('#game-3 > div');


// selecionar DOM: botão de cada jogo
const btnMonopoly = document.querySelector('#game-1 > a');
const btnTicketToRide = document.querySelector('#game-2 > a');
const btnTakenodo = document.querySelector('#game-3 > a');

// função: página default
const setDefaultPage = () => {

    const buttons = [btnMonopoly, btnTicketToRide, btnTakenodo];
    const covers = [monopolyCover, ticketToRideCover, takenodoCover];

    buttons.forEach(button => {
        button.innerText = "Alugar";
        button.setAttribute('class', 'dashboard__item__button');
    });

    covers.forEach(cover => {
        cover.setAttribute('class', 'dashboard__item__img');
    })

};

// função: mudar boão para devolver
const changeButtonToReturn = (idButtonInnerInput) => {

    switch (idButtonInnerInput) {

        case 1:
            btnMonopoly.setAttribute('class', 'dashboard__item__button--return');
            btnMonopoly.innerText = 'Devolver';
            break;

        case 2:
            btnTicketToRide.setAttribute('class', 'dashboard__item__button--return');
            btnTicketToRide.innerText = 'Devolver';
            break;

        case 3:
            btnTakenodo.setAttribute('class', 'dashboard__item__button--return');
            btnTakenodo.innerText = 'Devolver';
            break;

        default:
            return console.log('não reconheceu a o botão');

    };

};

// função: mudar boão para alugar
const changeButtonToRent = (idButtonInnerInput) => {

    switch (idButtonInnerInput) {

        case 1:
            btnMonopoly.setAttribute('class', 'dashboard__item__button');
            btnMonopoly.innerText = 'Alugar';
            break;

        case 2:
            btnTicketToRide.setAttribute('class', 'dashboard__item__button');
            btnTicketToRide.innerText = 'Alugar';
            break;

        default:
            btnTakenodo.setAttribute('class', 'dashboard__item__button');
            btnTakenodo.innerText = 'Alugar';
            break;
    };

};

const getStatus = (idButtonInnerInput) => {

    switch (idButtonInnerInput) {

        case 1:
            return btnMonopoly.getAttribute('class');


        case 2:
            return btnTicketToRide.getAttribute('class');



        default:
            returnbtnTakenodo.getAttribute('class');

    };

};

setDefaultPage()

// função: trocar status
const alterarStatus = (idButtonInput) => {

    const idButton = parseInt(idButtonInput);
    console.log(idButton);

    const status = getStatus(idButton);
    console.log(status);


    status === 'dashboard__item__button' ? changeButtonToReturn(idButton) : changeButtonToRent(idButton);

}







console.log(monopoly);
