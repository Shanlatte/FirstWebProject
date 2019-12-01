var titulo = "";
'use strict';
$(window).load(function() {
    $('.loader').delay(500).fadeOut('slow');
});
$(document).ready(function() {


    'use strict';

    // Metodo encontrado para que se muestre el titulo
    let searchParams = new URLSearchParams(window.location.search)
    titulo = searchParams.get('congreso')
    let fecha = searchParams.get('fecha')
    let image= searchParams.get('image')
    if(titulo != null){
    document.getElementById("titulo").innerHTML =titulo;
    }
    if(fecha != null){
        document.getElementById("fecha").innerHTML =fecha;
    }
    if(image != null){
      if(image==1){
      $("#imagen_read").attr("src","assets/img/bioquimica.jpeg");
      }
      if(image==2){
      $("#imagen_read").attr("src","assets/img/economiadigital.jpg");
      } 
      if(image==3){
       $("#imagen_read").attr("src","assets/img/autoestima.jpg");
      }
    }

    $( "#target" ).click(function() {
        window.location.href = "inscripcion.html"+ "?congreso=VI Congreso sobre Anatomia Fisica&fecha=6-9 Diciembre 2019";
      });
    
    $( "#target1" ).click(function() {
        window.location.href = "inscripcion.html"+ "?congreso=XXXVVII Congreso de la Bioquimica&fecha=12 Enero 2020";
      });
    
    $( "#target2" ).click(function() {
        window.location.href = "inscripcion.html"+ "?congreso=XII Congreso Economia Digital&fecha=26 Enero 2020";
      });
     
    $( "#target3" ).click(function() {
        window.location.href = "inscripcion.html"+ "?congreso=Seminario de Autoestima en el trabajo&fecha=03 Febrero 2020";
      });

      $( "#read1" ).click(function() {
        window.location.href = "read.html"+ "?congreso=XXXVVII Congreso de la Bioquimica&fecha=12 Enero 2020&image=1";
      });
    
    $( "#read2" ).click(function() {
        window.location.href = "read.html"+ "?congreso=XII Congreso Economia Digital&fecha=26 Enero 2020&image=2";
      });
     
    $( "#read3" ).click(function() {
        window.location.href = "read.html"+ "?congreso=Seminario de Autoestima en el trabajo&fecha=03 Febrero 2020&image=3";
      });
     
    //-------------------- FUncion que simula un contador------------------------------------------
   
     var countDownDate = new Date("Dec 6, 2023 15:37:25").getTime();

     var x = setInterval(function() {
     
       var now = new Date().getTime();
       var distance = countDownDate - now; 
       var weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
       var days = Math.floor(distance % (1000 * 60 * 60 * 24 * 7 )/ (1000 * 60 * 60 * 24));
       var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
       var seconds = Math.floor((distance % (1000 * 60)) / 1000);
       // Mostrar resultados
       document.getElementById("semanas").innerHTML =weeks;
       document.getElementById("dias").innerHTML =days;
       document.getElementById("horas").innerHTML =hours;
       document.getElementById("minutos").innerHTML =minutes;
       document.getElementById("segundos").innerHTML =seconds;
    }, 1000);
    
});

function myFunction() {
    alert("Ha enviado solicitud para: "+titulo);
    window.location.href = "index.html";

  }

function Home() {
    window.location.href = "index.html";

  }
