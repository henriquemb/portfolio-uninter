window.addEventListener('DOMContentLoaded', function(event) {
    // Carrega o arquivo de configurações
    fetch('../../config/config.json')
        .then(data => data.json())
        .then(data => {
            // Busca a tela atual do local storage
            let currPage = window.localStorage.getItem('currPage');

            // Caso não tenha uma tela definida irá definir a padrão
            if (currPage == undefined) {
                currPage = data.homepage;
            }

            // Seta a página atual
            setActiveItemMenu(currPage);
        })
});

function sendMessageToContent(data) {
    // Chama o evento "message" para que seja alterada a página selecionada
    window.parent.postMessage({ source: 'menu', data: data }, '*');
}

function setCurrentPage(element) {
    // Busca o id da página que o usuário clicou no menu
    let currentPage = element.getAttribute('id');

    // Seta a página atual
    setActiveItemMenu(currentPage);

    // Envia o evento de alteração de página
    sendMessageToContent(currentPage);
}

function setActiveItemMenu(page) {
    // Busca todos os itens do menu
    let navItems = document.querySelectorAll('.menu-item');

    // Itera os itens do menu para adicionar o atributo "active" no item selecionado e remove dos outros elementos caso possua
    navItems.forEach(function (navItem) {
        if (navItem.getAttribute('id') === page) {
            navItem.setAttribute('active', '');
        }
        else {
            navItem.removeAttribute('active');
        }
    });
}