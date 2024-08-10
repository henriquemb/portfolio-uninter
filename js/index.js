window.addEventListener('load', function() {
    // Carrega o arquivo de configurações
    fetch('../config/config.json')
        .then(data => data.json())
        .then(data => {
            // Busca a tela atual do local storage
            // Aqui foi utilizado localstorage devido ao recarregamento do site, para que não perca o estado atual.
            let currPage = window.localStorage.getItem('currPage');

            // Caso não tenha uma tela definida irá definir a padrão
            if (currPage == undefined) {
                currPage = data.homepage;
                window.localStorage.setItem('currPage', currPage)
            }

            // Carrega a tela atual
            let content = window.document.getElementById('content');
            content.setAttribute('src', `./pages/${currPage}/index.html`);
        })
});

window.addEventListener('message', function(event) {
    // Identifica a fonte do evento, caso seja "menu" irá carregar a tela solicitada
    if (event.data.source === 'menu') {
        let content = window.document.getElementById('content');
        
        // Salva a tela no localstorage
        window.localStorage.setItem('currPage', event.data.data)
        content.setAttribute('src', `./pages/${event.data.data}/index.html`);
    }
}, false);