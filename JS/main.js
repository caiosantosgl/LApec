function showSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'flex';
}

function hideSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'none';
}

function copiarNumero(elemento){
    var numeroTexto = elemento.innerText || elemento.textContent;
    navigator.clipboard.writeText(numeroTexto).then(function(){
        console.log('Número copiado com sucesso!!');
        alert('Número copiado com sucesso!!')
    }).catch(function(err){
        console.error('Erro ao copiar o número');
        alert('Falha ao copiar o Número');
    });
}

function copiarEmail(elemento){
    var emailTexto = elemento.innerText || elemento.textContent;
    navigator.clipboard.writeText(emailTexto).then(function(){
        console.log('E-mail copiado com sucesso!');
        alert('E-mail copiado com sucesso!')
    }).catch(function(err){
        console.error('Erro ao copiar o número');
        alert('Falha ao copiar o Número');
    });
}