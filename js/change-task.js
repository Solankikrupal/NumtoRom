$('.top-Rom-to-Num').hide();
$('a.change').on('click', function() {
  $('.top-Num-to-Rom ,.top-Rom-to-Num').toggle();
});



$('a.ntor').hover(function() {
    $('img.btn-ntor-convert').attr('src', 'images/next(1).png');
  },
  function() {
    $('img.btn-ntor-convert').attr('src', 'images/next.png');
  });

$('a.rton').hover(function() {
    $('img.btn-rton-convert').attr('src', 'images/next(1).png');
  },
  function() {
    $('img.btn-rton-convert').attr('src', 'images/next.png');
  });

$('a.change').hover(function() {
    $('img.btn-change').attr('src', 'images/exchange(1).png');
  },
  function() {
    $('img.btn-change').attr('src', 'images/exchange.png');
  });






















/*Code by Krupal SOlanki*/
