//base de datos
var places =[
  {ID:'TAP3', img:'rucabar.jpg', name: 'RucaBar', estilo: 'Tapas', 
  precio: '$$', ideal: 'Disfrutar buena Comida y Tragos'
  },
  {ID:'BAR1', img:'krossbar.jpg', name: 'KrossBar', estilo: 'Bar', 
  precio: '$$', ideal: 'Disfrutar de buenos tragos'
  },
  {ID:'TAP2', img:'balbona.jpg', name: 'Balbona', estilo: 'Tapas', 
  precio: '$$', ideal: 'Disfrutar buena Comida'
  },
  {ID:'SAND1', img:'mrjack.png', name: 'Mr. Jack', estilo: 'Sandwicheria', 
  precio: '$$', ideal: 'Salida en grupo'
  },
  {ID:'BAR4', img:'teclados.jpg', name: 'Teclados', estilo: 'Bar', 
  precio: '$$', ideal: 'Disfrutar de buenos tragos'
  },
  {ID:'TAP4', img:'txokoalves.jpg', name: 'El Txoko Alves', estilo: 'Tapas', 
  precio: '$$', ideal: 'Disfrutar buena Comida y Tragos'
  },
  {ID:'SAND2', img:'uncle.jpg', name: 'Uncle Flech', estilo: 'Sandwicheria', 
  precio: '$$$', ideal: 'Salida en grupo'
  },
  {ID:'TAP1', img:'100montaditos.jpg', name: '100 Montaditos', estilo: 'Tapas', 
  precio: '$$', ideal: 'Disfrutar buena Comida y Tragos'
  },
  {ID:'BAR2', img:'sietenegroni.png', name: 'Siete Negroni', estilo: 'Bar', 
  precio: '$$$', ideal: 'Disfrutar de buenos tragos'
  },
  {ID:'TRA4', img:'ilsiciliano.png', name: 'Il Siciliano', estilo: 'Pasta', 
  precio: '$$$', ideal: 'Disfrutar buena Comida'
  },
  {ID:'SAND3', img:'carlsjr.png', name: 'Carls Jr', estilo: 'Sandwicheria', 
  precio: '$$', ideal: 'Disfrutar buena Comida'
  },
  {ID:'TRA1', img:'zocca.png', name: 'Zocca', estilo: 'Pasta', 
  precio: '$$', ideal: 'Disfrutar buena Comida'
  },
  {ID:'BAR3', img:'santosecreto.png', name: 'Santo secreto', estilo: 'Bar', 
  precio: '$', ideal: 'Disfrutar de buenos tragos'
  },
  {ID:'TRA2', img:'omerta.jpg', name: 'Omertá', estilo: 'Pasta', 
  precio: '$$$', ideal: 'Disfrutar buena Comida'
  },
  {ID:'SAND4', img:'lagloria.jpg', name: 'La Gloria', estilo: 'Sandwicheria', 
  precio: '$$', ideal: 'Disfrutar buena Comida'
  },
  {ID:'TRA3', img:'domenica.jpg', name: 'Domenica', estilo: 'Pasta', 
  precio: '$$$', ideal: 'Disfrutar buena Comida'
  },
 
];

//función para splash
$(function(){
   setTimeout(function() { //settimeout llama a una función después de un número especificado de milisegundos.
      $('.splash').fadeOut(); //despues de transcurridos los 3 segundos se desvanecera
   }, 1000);
});

//agregar la base de datos a la pagina
for(i = 0; i< places.length ; i++){
  $('.resta').append("<span class'sect-otherest1'><a href='BAR1-KrossBar-Bar'><div class='rest'>" + 
  "<a href='#modal-restDescription' data-toggle='modal'><img class='restim' src='assets/images/"
  + places[i]['img'] + "'></a>" +
  "</div></a></>");

}


// detectar el valor que seleccionamos en el filtro
//.on = cuando sec-style chage(cambie) ejecuta la siguiente función
  $('.sec-style').on('change', function(){
    //filtrar elemetos seleccionados
    //paso 1: borrar todos los resta
    $('.resta').empty();
    //paso 2: ejecutar el ciclo for que agrega restaurants
    //pero esta vez que agregue el que conicida con el seleccionado
    //variable de restaurant seleccionado
    var restSel = $(this).val();

    for(i = 0; i< places.length ; i++){

      if (restSel == places[i]['estilo']) {

        $('.resta').append("<span class'sect-otherest1'><a href='BAR1-KrossBar-Bar'><div class='rest'>" + 
        "<a href='#modal-restDescription' data-toggle='modal'><img class='restim' src='assets/images/"
        + places[i]['img'] + "'></a>" +
        "</div></a></>");

}
}
    $(".restim").mouseover(function(){
      $(this).css('height','200px');
      $(this).css('width','300px');
      });
    $(".restim").mouseout(function(){
      $(this).css('height','150px');
      $(this).css('width','200px');
  });
  });

$('.sec-ideal').on('change', function(){
    //filtrar elemetos seleccionados
    //paso 1: borrar todos los resta
    $('.resta').empty();
    //paso 2: ejecutar el ciclo for que agrega restaurants
    //pero esta vez que agregue el que conicida con el seleccionado
    //variable de restaurant seleccionado
    var idealSel = $(this).val();

    for(i = 0; i< places.length ; i++){

      if (idealSel == places[i]['ideal']) {

        $('.resta').append("<span class'sect-otherest1'><a href='BAR1-KrossBar-Bar'><div class='rest'>" + 
        "<a href='#modal-restDescription' data-toggle='modal'><img class='restim' src='assets/images/"
        + places[i]['img'] + "'></a>" +
        "</div></a></>");

}
}
    $(".restim").mouseover(function(){
      $(this).css('height','200px');
      $(this).css('width','300px');
      });
    $(".restim").mouseout(function(){
      $(this).css('height','150px');
      $(this).css('width','200px');
  });
  });  

$('.sec-price').on('change', function(){
    //filtrar elemetos seleccionados
    //paso 1: borrar todos los resta
    $('.resta').empty();
    //paso 2: ejecutar el ciclo for que agrega restaurants
    //pero esta vez que agregue el que conicida con el seleccionado
    //variable de restaurant seleccionado
    var pricSel = $(this).val();

    for(i = 0; i< places.length ; i++){

      if (pricSel == places[i]['precio']) {

        $('.resta').append("<span class'sect-otherest1'><a href='BAR1-KrossBar-Bar'><div class='rest'>" + 
        "<a href='#modal-restDescription' data-toggle='modal'><img class='restim' src='assets/images/"
        + places[i]['img'] + "'></a>" +
        "</div></a></>");

}
}
    $(".restim").mouseover(function(){
      $(this).css('height','200px');
      $(this).css('width','300px');
      });
    $(".restim").mouseout(function(){
      $(this).css('height','150px');
      $(this).css('width','200px');
});
});
  // agrandar la imagen al pasar por encima
  $(".restim").mouseover(function(){
    $(this).css('height','200px');
    $(this).css('width','300px');
  });
  // achicar imagen al sacar el mouse de encima 
  $(".restim").mouseout(function(){
    $(this).css('height','150px');
    $(this).css('width','200px');
  });


