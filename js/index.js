window.addEventListener('load', function() {
    let currPage = window.localStorage.getItem('currPage');

    if (currPage == undefined) {
        window.localStorage.setItem('currPage', 'portfolio')
        currPage = 'portfolio';
    }

    let content = window.document.getElementById('content');
    content.setAttribute('src', `./pages/${currPage}/index.html`);
});

window.addEventListener('message', function(event) {
    if (event.data.source === 'menu') {
        let content = window.document.getElementById('content');
        
        
        window.localStorage.setItem('currPage', event.data.data)
        content.setAttribute('src', `./pages/${event.data.data}/index.html`);
    }
}, false);