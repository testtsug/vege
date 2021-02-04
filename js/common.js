// JavaScript Document

//ローディングアニメーション
$(function () {
	var loading = $('.block2');

	$(window).on('load', function () {
		$('.block2').fadeOut();
	})

	setTimeout(function () {
		$('.block2').fadeOut();
	}, 2000);
});

//ページ遷移時アニメーション
$(window).on('load', function () {
	$('body').removeClass('is-slide');
});

$(function () {

	$('a:not([href^="#"]):not([target])').on('click', function (e) {
		e.preventDefault();
		url = $(this).attr('href');

		if (url !== '') {
			$('body').addClass('is-slide-in');

			setTimeout(function () {
				window.location = url;
			}, 700);
		}
		return false;
	});

});

//トップへ戻る
$(function () {
	let toTop = $('.pagetop');
	toTop.hide();

	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			toTop.fadeIn();
		} else {
			toTop.fadeOut();
		}
	});

	$('.pagetop').click(function (event) {
		event.preventDefault();

		$('body,html').animate({
			scrollTop: 0
		}, 500);
	});
});

$(window).on('load', function () {
	$('body').removeClass('is-slide');
});

//ハンバーガーメニュー
$(function () {
	var $nav = $('#navArea');
	var $btn = $('.toggle_btn');
	var $mask = $('#mask');
	var open2 = 'open2';

	// menu open close
	$btn.on('click', function () {
		if (!$nav.hasClass(open2)) {
			$nav.addClass(open2);
		} else {
			$nav.removeClass(open2);
		}
	});

	// mask close
	$mask.on('click', function () {
		$nav.removeClass(open2);
	});
});