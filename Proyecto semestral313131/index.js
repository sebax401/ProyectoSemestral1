// este codigo llama al "header" y la lleva a todas las paginas llamandolo con <div id="headerContent"></div>

$(document).ready(function() {
    debugger
    $('#headerContent').html('<nav class="navbar navbar-expand-lg navbar-light bg-light"><div class="container"><a class="navbar-brand" href="#">Mundo Animals</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav ml-auto"><li class="nav-item active"><a class="nav-link" href="Principal.html">Inicio</a></li><li class="nav-item"><a class="nav-link" href="catalogo.html">Catalogo</a></li><li class="nav-item"><a class="nav-link" href="InicioSesion.html">Inicio de sesion</a></li></ul></div></div></nav>'); // Cargar el contenido del header
  });
