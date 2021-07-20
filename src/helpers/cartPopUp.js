function cartPopUp() {
    const cartMenu = document.querySelector('.cart-menu');
    cartMenu.classList.remove('hidden');
    window.addEventListener('click', (e) => {
        console.log(e.target);
        const all = cartMenu.querySelectorAll("*");
        if (e.target.classList.contains("add-to-cart") || e.target.classList.contains("x-icon")) return;
        for (let one of all) {
            if (one === e.target) return;
        }
        cartMenu.classList.add('hidden');
        return;
    })

}

export default cartPopUp
