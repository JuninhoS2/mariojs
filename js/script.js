const papaleguas = document.querySelector('.papaleguas');

const jump = () => {

    papaleguas.classList.add('jump');
}

document.addEventListener('keydown', jump);