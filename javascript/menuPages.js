function generarMenuPages(){
    const menuPages = `<header class="header1">
    <a href="#" class="Logo1">Nexora</a>
    <input type="checkbox" id="check1">
    <label for="check1" class="icons1">
      <i class='bx bx-menu' id="menu-icon1"></i>
      <i class='bx bx-x' id="close-icon1"></i>
    </label>
    <nav class="navbar1">
        <a href="../index.html" style="--i:0;">Inicio</a>
    <a href="nosotros.html"style="--i:1;">Sobre de Nosotros</a>
    <a href="servicios.html" style="--i:2;">Servicios</a>
    <a href="faq.html" style="--i:3;">FAQ</a>
    <a href="blog.html" style="--i:4;">Blog</a>
  <a href="contactanos.html" style="--i:5;">Contáctanos</a>
    </nav>
</header>`;

return menuPages;
}