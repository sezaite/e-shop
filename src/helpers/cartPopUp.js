function cartPopUp() {
    const cartMenu = document.querySelector('.cart-menu');
    const all = cartMenu.querySelectorAll("*");
    cartMenu.classList.remove('hidden');
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains("add-to-cart")) return;
        for (let one of all) {
            if (one === e.target) return;
        }
        cartMenu.classList.add('hidden');
        return;
    })

}

export default cartPopUp
