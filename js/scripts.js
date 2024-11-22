
// Show/Hide Menu
const menuButton = document.getElementById('menu-button');
const menuDropdown = document.getElementById('menu-dropdown');
const menuItems = document.querySelectorAll('.menu-dropdown .mdc-list-item');

// Change AppBar color based on front-page visibility
function changeColorAppbar() {
    const frontPage = document.getElementById('front-page');
    const appBar = document.getElementById('app-bar');
    const frontPageRect = frontPage.getBoundingClientRect();

    if (frontPageRect.bottom <= 0) {
        appBar.classList.remove('app-bar--black');
        appBar.classList.add('app-bar--white');
    } else {
        appBar.classList.remove('app-bar--white');
        appBar.classList.add('app-bar--black');
    }
}

function closeMenu() {
    menuDropdown.style.display = 'none';
}

// Initialize Material Design Components
mdc.autoInit();

window.addEventListener('scroll', function () {
    changeColorAppbar();

    closeMenu();
});

// Show/Hide Menu
menuButton.addEventListener('click', function () {
    if (menuDropdown.style.display === 'none' || menuDropdown.style.display === '') {
        menuDropdown.style.display = 'block';
    } else {
        menuDropdown.style.display = 'none';
    }
});

// Close the menu when user click an item menu
menuItems.forEach(function (item) {
    item.addEventListener('click', function () {
        menuDropdown.style.display = 'none';
    });
});

// Close the menu when user click out of menu
document.addEventListener('click', function (event) {
    if (!menuDropdown.contains(event.target) && !menuButton.contains(event.target)) {
        closeMenu();
    }
});

// Functionality of tabs
const tabBar = document.querySelectorAll('.mdc-tab-bar');
tabBar.forEach(function (tabBarInstance) {
    const tabs = tabBarInstance.querySelectorAll('.mdc-tab');
    const panels = tabBarInstance.parentElement.querySelectorAll('.tab-panel');

    tabs.forEach(function (tab, index) {
        tab.addEventListener('click', function () {
            tabs.forEach(function (t) {
                t.setAttribute('aria-selected', 'false');
                t.classList.remove('mdc-tab--active');
            });

            tab.setAttribute('aria-selected', 'true');
            tab.classList.add('mdc-tab--active');

            panels.forEach(function (panel) {
                panel.classList.remove('active');
            });

            panels[index].classList.add('active');
        });
    });
});

changeColorAppbar();