const modalResumeClose = document.querySelector('.modal-resume__close');
const modalResume = document.querySelector('.modal-resume');
const resumeBtn = document.querySelector('.btn');

const portfolioWork = document.querySelectorAll('.work');
const modalWorks = document.querySelectorAll('.modal');
const modalWorkClose = document.querySelectorAll('.modal__close');


//listeners for resume window
resumeBtn.addEventListener('click', () => {
    modalResume.classList.remove('modal-close');
});

//close resume modal window
modalResumeClose.addEventListener('click', () => {
    modalResume.classList.add('modal-close');
});

//close work modal window
modalWorkClose.forEach(item => {
    item.addEventListener('click', () => {
        modalWorks.forEach(item => {
            item.classList.add('modal-close');
        });
    });
});

//listeners for portfolio works
portfolioWork.forEach(item => {

    item.addEventListener('click', () => {
        let dataAttribute = item.getAttribute('data-modal');

        modalWorks.forEach(item => {
            if (dataAttribute == item.id) {
                item.classList.remove('modal-close');
            }
        });
    });
});