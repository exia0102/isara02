$(function () {
  //トップへ戻る
  $('#scroll-up').click(function () {
    $('html, body').animate({
      'scrollTop': 0
    }, 500)

  });

  //formへスクロール
  $('.form-scroll').click(function () {
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    position = position - 80;
    $('html, body').animate({
      'scrollTop': position
    }, 500)
  });

  //scroll-upの表示/非表示
  var top = $('.top-wrapper').offset().top;

  if (top >= 0) {
    $('#scroll-up').addClass('block');
  } else {
    $('#scroll-up').removeClass('block');
  }

  //lessonのスライド
  $('.lesson-slide').click(function () {

    var $text = $(this).next('.lesson-text');
    var $p = $(this).find('a');
    var $max768 = $('.brsp').css('display');

    if ($max768 == 'block') {

      if ($p.hasClass('up-tag')) {
        $p.toggleClass('up-tag');
        $text.slideUp();
      } else {
        $p.toggleClass('up-tag');
        $text.slideDown();
      }

    }

  });

  //questionのスライド
  $('.question').click(function () {

    var $ans = $(this).next('.answer');
    var $a = $(this).find('a');

    if ($a.hasClass('up-tag')) {
      $ans.slideUp();
      $a.toggleClass('up-tag');
    } else {
      $ans.slideDown();
      $a.toggleClass('up-tag');
    }

  });
});
