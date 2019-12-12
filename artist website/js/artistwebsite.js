$( function() {
    $( ".disk1" ).draggable();
    
    $( ".disk2" ).draggable();
  } );



$("button").hover(function(){
	$(this).css("background-color","gold");
}, function(){
	$(this).css("background-color","white");
});


// $(".disk1").click(function(){
//                $(this).hide( "fold", {horizFirst: true }, 2000 );
//             });

// $(".disk1").click(function(){
//                $(this).show( "fold", {horizFirst: true}, 2000 );
//             });


$(".cdremote").click(function(){
	$(".cdplate").slideUp(1000);
	$(".disk1").hide(0);
	$(".disk2").hide(0);

});
$(".button2").click(function() {
    location.reload();
});








// var height = $(document).height();
// var width = $(document).width();

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// var i;
// for (i = 0; i < 30; i++) { 
// 	var yPos = getRandomInt(0, height);
// 	var xPos = getRandomInt(0, width);  
//   $('.title').append('<div style=" top: '+yPos+'px; left: '+xPos+'px;" class="circle"></div>');
// }


