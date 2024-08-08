window.addEventListener('load', function(event) {
    let currentPage = window.localStorage.getItem('currPage');
    setActiveItemMenu(currentPage);
});

function sendMessageToContent(data) {
    window.parent.postMessage({ source: 'menu', data: data }, '*');
}

function setCurrentPage(element) {
    let currentPage = element.getAttribute('id');

    setActiveItemMenu(currentPage);
    sendMessageToContent(currentPage);
}

function setActiveItemMenu(page) {
    let navItems = document.querySelectorAll('.menu-item');
    navItems.forEach(function (navItem) {
        if (navItem.getAttribute('id') === page) {
            navItem.setAttribute('active', '');
        }
        else {
            navItem.removeAttribute('active');
        }
    });
}