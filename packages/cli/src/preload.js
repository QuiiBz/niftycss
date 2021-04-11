const { ipcRenderer } = require('electron');

window.addEventListener('DOMContentLoaded', () => {
    ipcRenderer.send('log', '\x1b[35mevent\x1b[0m   - DOM loaded, fetching CSS');

    setTimeout(() => {
        const styles = document.getElementById('nifty-styles');
        ipcRenderer.send('styles', styles.textContent);
    }, 1000);
});
