// script.js
document.getElementById('createFile').addEventListener('click', createAndSaveFile);

function createAndSaveFile() {
    const content = 'Este é o conteúdo do arquivo que você criou!'; // Conteúdo do arquivo
    const fileName = 'meu-arquivo.txt'; // Nome do arquivo

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(blob, fileName);
    } else {
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}
