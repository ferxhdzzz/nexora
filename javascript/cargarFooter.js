document.addEventListener('DOMContentLoaded', function(){
    const contenedorFooter = document.getElementById("footerContenedor");
    const footerHTML = generarFooterIndex();

    contenedorFooter.innerHTML = footerHTML;
})