
function comuniquemonos(){
    let clase= document.querySelector(".comu")
    clase.setAttribute('class', 'col');
}
function reservas(){
    let clase= document.querySelector(".rese")
    clase.setAttribute('class', 'col');
}

function formularioCom() {
    let nombre= document.getElementById("nombre").value
    let correo= document.getElementById("correo").value
    let telefono= document.getElementById("telefono").value
    let motivo = document.getElementById("motivo").value
    let textarea = document.getElementById("textarea").value
        if (nombre =="") {
            alert("el campo 'nombre' es obligatorio")
        }else if (correo =="") {
            alert("el campo 'Correo' es obligatorio")
        }else if( telefono ==""){
            alert("el campo 'Telefono' es obligatorio")
        }else if( motivo == ""){
            alert("el campo 'Motivo' es obligatorio")
        }else if(textarea==""){
            alert("el campo 'Motivo' es obligatorio")
        }
        else{
            alert("Muchas gracias "+ nombre+ " hemos recibido tus " + motivo + " y enviaremos una pronta respuesta al correo " + correo)
       }
}

//recibir informacion con Jquery
$(document).ready(function () {
    
    $("#res").click(function () {
        var nombre =$("#nombreres").val()
        var asistentes= $("#asistenteres").val()
        var correo= $("#correores").val()
    
        alert(`estimada ${nombre} agradecemos por reservar con nosotros. hemos registrado ${asistentes} asitentes. Se ha enviado el codigo de confirmacion al correo ${correo} \n Gracias por preferirnos`)    
    })

})
//destacados
$(document).ready(function () {
    var titulo, descripcion, imagen;
    $("#gaseosa").click(function () {
        titulo = $("#tgaseosa").html()
        descripcion = $("#descripciongaseosa").html()
        imagen = $("#imggaseosas").attr("src")
        $("#titulodestacado").text(titulo)
        $("#descripcion").text(descripcion)
        $("#imagen").attr("src", imagen)
        $("#destacado").show()
    })
})
$(document).ready(function () {
    var titulo, descripcion, imagen;
    $("#tablas").click(function () {
        titulo = $("#ttabla").html()
        descripcion = $("#descripciontabla").html()
        imagen = $("#imgtabla").attr("src")
        $("#titulodestacado").text(titulo)
        $("#descripcion").text(descripcion)
        $("#imagen").attr("src", imagen)
        $("#destacado").show()
    })
})
$(document).ready(function () {
    var titulo, descripcion, imagen;
    $("#cerveza").click(function () {
        titulo = $("#tcerveza").html()
        descripcion = $("#decripcioncerveza").html()
        imagen = $("#imgcerveza").attr("src")
        $("#titulodestacado").text(titulo)
        $("#descripcion").text(descripcion)
        $("#imagen").attr("src", imagen)
        $("#destacado").show()
    })
})

$(".btn-close").click(function(){
    $("#destacado").hide()
})







