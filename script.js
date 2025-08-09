function enviarWhats(event){
         event.preventDefault()

         const nome = document.getElementById('nome').value;
         const mensagem = document.getElementById('mensagem').value;
         const telofone = '551499885524'

         const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
         const msgFormatada = encodeURIComponent(texto);

         const url = `https://wa.me/${telofone}?text=${mensagem}`

         window.open(url, '_blank')
}