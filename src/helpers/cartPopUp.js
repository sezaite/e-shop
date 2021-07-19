function cartPopUp() {
    const cartMenu = document.querySelector('.cart-menu');
    cartMenu.classList.remove('hidden');
    let timer = null;

    function startTimer() {
        timer = setTimeout(() => {
            cartMenu.classList.add('hidden');
        }, 3000);
    }
    function stopTimer() {
        clearTimeout(timer);
        return;
    }

    startTimer();

    cartMenu.addEventListener('mouseenter', () => {
        stopTimer();
        return;
    });
    cartMenu.addEventListener('mouseleave', () => {
        startTimer();
        return;
    })
}

export default cartPopUp
