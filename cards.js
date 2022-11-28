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
// add all card on main-container div
const createCard = (card) => {
    return `
    <div class="card col-lg-2 col-md-3 col-xs-6">
        <div class="title">
            <span>${card.title}<span>
        </div>
        <div class="description">
            <p>${card.description}</p>
        </div>
        </div>`;
};
const getModalInputs = () => {
    const title = document.querySelector('.inputTitle').value;
    const description = document.querySelector('.inputDescription').value;
    return { title, description };
};

const generateCardList = (cardsList) => {
    cardsList.forEach((card) => {
        mainContainer.innerHTML += createCard(card);
    });
    // add event listener to each card
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        card.addEventListener('click', (e) => {
            const modal = document.querySelector('.card-modal');
            const orginalTitle = card.querySelector('.title').innerText;
            const orginalDescription = card.querySelector('.description').innerText;
            const cardIndex = cardsList.findIndex(
                (card) => card.title === orginalTitle && card.description === orginalDescription);
            document.querySelector('.inputTitle').value = orginalTitle;
            document.querySelector('.inputDescription').value = orginalDescription;
            modal.style.display = 'flex';
            addModal.addEventListener('click', () => {
                // update card title and description on cardsList
                const { title, description } = getModalInputs();
                cardsList[cardIndex].title = title;
                cardsList[cardIndex].description = description;
                renderContent();
                updateSelectors();
                modal.style.display = 'none';
            });
            closeModal.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        });
    }
    );
};

const renderContent = () => {

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
        <div class="button close">Close</div>
        <div class="button add">Add</div>
        </div>
        </div>
    </div>`;

    generateCardList(cardsList);
};

const updateSelectors = () => {
    addCard = document.querySelector('.add-card');
    modal = document.querySelector('.card-modal');
    addModal = document.querySelector('.add');
    closeModal = document.querySelector('.close');
    addCard.addEventListener('click', () => generateNewCard());
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
            renderContent();
        } else {
            alert('Please fill all inputs');
        }
        updateSelectors();
    });
    closeModal.addEventListener('click', () => {
        document.querySelector('.inputTitle').value = '';
        document.querySelector('.inputDescription').value = '';
        modal.style.display = 'none';
    });
};


const mainContainer = document.querySelector('.cards');
renderContent();
let addCard = document.querySelector('.add-card');
let modal = document.querySelector('.card-modal');
let addModal = document.querySelector('.add');
let closeModal = document.querySelector('.close');


addCard.addEventListener('click', () => {
    generateNewCard();
});