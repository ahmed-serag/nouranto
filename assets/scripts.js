// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuBtn && mobileMenu) {
        const menuIcon = menuBtn.querySelector('span');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');

            if (mobileMenu.classList.contains('hidden')) {
                menuIcon.textContent = 'menu';
                // wrapper.style.overflow = 'auto'; // allow scroll
            } else {
                menuIcon.textContent = 'close';
                // wrapper.style.overflow = 'hidden'; // block scroll
            }
        });
    }
});
