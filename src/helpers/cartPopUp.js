function cartPopUp() {
    const cartMenu = document.querySelector('.cart-menu');
    cartMenu.classList.remove('hidden');
    window.addEventListener('click', (e) => {
        const all = cartMenu.querySelectorAll("*");
        if (e.target.classList.contains("add-to-cart")) return;
        for (let one of all) {
            if (one === e.target) return;
        }
        cartMenu.classList.add('hidden');
        return;
    })

}

export default cartPopUp
