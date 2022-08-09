import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

// on load
// fetch all dogs

async function loadData() {
    const allDogs = await getDogs();

    for (let dog of allDogs) {
        const dogEl = renderDogCard(dog);
        dogListContainer.append(dogEl);
    }
}

loadData();

// render and append all dog cards to the container




