// Get DOM elements
const container = document.querySelector('ul');
const buttonAdd = document.querySelector('button');

getDogImage();

async function getDogImage() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const image = await response.json();
        container.innerHTML += `<li><img src="${image.message}" alt=""></li>`
    } catch (error) {
        console.error(error);
    }
}

buttonAdd.addEventListener('click', getDogImage);