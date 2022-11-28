let cardsList = [
    {
        id: 1,
        title: 'Business to dos',
        description: 'This is a list of business to dos',
    },
    {
        id: 2,
        title: 'Shopping list',
        description: 'This is a list of shopping list',
    },
    {
        id: 3,
        title: 'Home to dos',
        description: 'This is a list of home to dos with a very long description that will be truncated',
    },
    {
        id: 4,
        title: 'More to dos',
        description: 'This is a list of to dos',
    },
    {
        id: 5,
        title: 'Business to dos',
        description: 'This is a list of business to dos different than the first one',
    },
    {
        id: 6,
        title: 'Shopping list',
        description: 'This is a list of shopping list different than the first one',
    },
];

// ------------------ MAIN ------------------
const createCard = (card) => {
    // create card
    return `
    <div class="card col-lg-2 col-md-3 col-xs-6" id=${card.id}>
        <div class="title">
            <span>${card.title}<span>
        </div>
        <div class="description">
            <p>${card.description}</p>
        </div>
    </div>`;
};
const getModalInputs = () => {
    // get title and description from modal
    const title = document.querySelector('.inputTitle').value;
    const description = document.querySelector('.inputDescription').value;
    return { title, description };
};

const generateCardList = (cardsList) => {
    // generate cards
    cardsList.forEach((card) => {
        mainContainer.innerHTML += createCard(card);
    });
};

const renderContent = () => {
    // render content
    mainContainer.innerHTML = `
    <div class="add-card">
            <i class='uil uil-plus'></i>
    </div>
    <div class="card-modal">
        <div class="card-modal-content">
            <div class="card-modal-inputs">
                <input type="text" class="input inputTitle" placeholder="Title">
                <textarea class="input inputDescription" placeholder="Description"></textarea>
            </div>
        <div class="card-modal-buttons">
            <div class="button close">Cancel</div>
            <div class="button add">Add</div>
        </div>
        </div>
    </div>`;

    generateCardList(cardsList);
};

const updateCard = (card) => {
    // change display of modal to flex
    const cardIndex = cardsList.findIndex((tempCard) => tempCard.id == card.getAttribute('id'));
    document.querySelector('.inputTitle').value = card.querySelector('.title').innerText;
    document.querySelector('.inputDescription').value = card.querySelector('.description').innerText;
    modal.style.display = 'flex';

    addModal.addEventListener('click', () => {
        // update card title and description on cardsList
        const { title, description } = getModalInputs();
        if (title && description) {

            cardsList[cardIndex].title = title;
            cardsList[cardIndex].description = description;
            // cleanModalInputs();
            modal.style.display = 'none';
            addModal.removeEventListener('click', () => { });
            renderContent();
            updateSelectors();
        } else {
            alert('Please fill all inputs');
        }
    });
    closeModal.addEventListener('click', () => {
        cleanModalInputs();
        modal.style.display = 'none';
        closeModal.removeEventListener('click', () => { });
    });
};


const updateSelectors = () => {
    // update selectors
    addCard = document.querySelector('.add-card');
    modal = document.querySelector('.card-modal');
    addModal = document.querySelector('.add');
    closeModal = document.querySelector('.close');
    const cards = document.querySelectorAll('.card');

    addCard.addEventListener('click', () => generateNewCard());

    cards.forEach((card) => {
        card.addEventListener('click', () => { updateCard(card) });
    });
};

const cleanModalInputs = () => {
    document.querySelector('.inputTitle').value = '';
    document.querySelector('.inputDescription').value = '';
};

const generateNewCard = () => {
    // change display of modal to flex
    modal.style.display = 'flex';
    addModal.addEventListener('click', () => {
        const { title, description } = getModalInputs();
        if (title && description) {
            const newCard = {
                id: cardsList.length + 1,
                title,
                description,
            };
            cardsList.push(newCard);
            cleanModalInputs();
            addModal.removeEventListener('click', () => { });
            renderContent();
            updateSelectors();
        } else {
            alert('Please fill all inputs');
        }
    });
    closeModal.addEventListener('click', () => {
        cleanModalInputs();
        modal.style.display = 'none';
        closeModal.removeEventListener('click', () => { });
    });
};


const mainContainer = document.querySelector('.cards');
renderContent();
let addCard = document.querySelector('.add-card');
let modal = document.querySelector('.card-modal');
let addModal = document.querySelector('.add');
let closeModal = document.querySelector('.close');
let cards = document.querySelectorAll('.card');


addCard.addEventListener('click', () => {
    generateNewCard();
});
cards.forEach((card) => {
    card.addEventListener('click', () => { updateCard(card) });
});