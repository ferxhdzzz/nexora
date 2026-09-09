function generarFooterPages() {
    return `
        <footer class="bg-dark text-white pt-5 pb-4">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 mb-4">
                        <h5>Nexora</h5>
                        <p class="text-white-50">"Construimos el futuro contigo"    .</p>
                        <p class="text-white-50">San Salvador, El Salvador.</p>

                    </div>
                    <div class="col-md-4 mb-4">
                        <h5>Enlaces</h5>
                        <ul class="list-unstyled">
                            <li><a href="../index.html" class="text-white-50 text-decoration-none">Inicio</a></li>
                            <li><a href="servicios.html" class="text-white-50 text-decoration-none">Servicios</a></li>
                            <li><a href="contactanos.html" class="text-white-50 text-decoration-none">Contáctanos</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 mb-4">
                        <h5>Síguenos</h5>
                            <a href="#" class="text-white me-3 fs-5"><i class="bi bi-facebook"></i></a>
                            <a href="#" class="text-white me-3 fs-5"><i class="bi bi-instagram"></i></a>
                            <a href="#" class="text-white me-3 fs-5"><i class="bi bi-linkedin"></i></a>
                            <a href="#" class="text-white fs-5"><i class="bi bi-twitter-x"></i></a>
                    </div>
                </div>
                <hr class="border-secondary">
                <div class="text-center">
                    <p class="mb-0 text-white-50">&copy; 2026 Nexora. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    `;
}