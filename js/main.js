const tabQuestion = document.querySelectorAll('.faq-question');


tabQuestion.forEach(el => {
    el.addEventListener('click', function(event) {
        const check = el.nextElementSibling.classList.contains('faq-answer__active');
        
        if (!check) {
            el.nextElementSibling.classList.add('faq-answer__active');
            el.lastElementChild.innerHTML = '-';
            el.style.backgroundColor = '#dddddd';
        } else {
            el.nextElementSibling.classList.remove('faq-answer__active');
            el.lastElementChild.innerHTML = '+';
            el.style.backgroundColor = null;
        }
    });
})