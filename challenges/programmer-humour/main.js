display();

async function display() {
    try {
        const response = await fetch('https://xkcd.now.sh/?comic=latest');
        const img = await response.json();
        document.querySelector('h1').innerText = img.title;
        document.querySelector('img').src = img.img
    } catch (error) {
        console.error(error);
    }
}
