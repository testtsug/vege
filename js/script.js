// JavaScript Document


//ローディングアニメーション
$(function () {
    var loading = $('.block2');

    $(window).on('load', function () {
        $('.block2').fadeOut();
    })

    setTimeout(function () {
        $('.block2').fadeOut();
    }, 1500);
});

//$(function () {
//	var loader = $('.loader-wrap');
//
//	$(window).on('load', function () {
//		$('.loader-wrap').fadeOut();
//	});
//
//	setTimeout(function () {
//		$('.loader-wrap').fadeOut();
//	}, 1000);
//});

//ページ遷移時アニメーション
//$(window).on('load', function () {
//	$('body').removeClass('is-slide');
//});
//
//$(function () {
//
//	$('a:not([href^="#"]):not([target])').on('click', function (e) {
//		e.preventDefault();
//		url = $(this).attr('href');
//
//		if (url !== '') {
//			$('body').addClass('is-slide-in');
//
//			setTimeout(function () {
//				window.location = url;
//			}, 700);
//		}
//		return false;
//	});
//
//});

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

//TOPページ内
//ふわっと出す
$(function () {
    $(window).scroll(function () {
        $('.aboutus_img').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200) {
                $(this).addClass('scrollin');
            }
        });
    });
});

$(function () {
    $(window).scroll(function () {
        $('.aboutus_img2').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200) {
                $(this).addClass('scrollin');
            }
        });
    });
});

//ふわっと出す全体
$(function () {
    $(window).scroll(function () {
        $('.fadein2').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200) {
                $(this).addClass('scrollin2');
            }
        });
    });
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






//お買い物ページ合計金額表

$(function () {

    $('input[type="number"]').change(function () {

        // 合計金額の計算
        $kingaku = 0; // 合計金額
        $kosuu = 0; // 合計個数
        $null = true; // 入力有無

        // ボタンの分だけループで一括処理
        // ボタンの親要素を対象にして金額の合計を計算する
        $('input[type="number"]').each(function (index, elm) {

            // 計算対象
            $dl = $(this).parent().parent();

            // 商品名
            $dt = $dl.find('dt').text();
            // 金額
            $label = $dl.find('label').text();
            // 金額に余計な文字が合ったら消す。今回は”円”
            $label = $label.replace('円', '');

            // 個数
            // 数字型に変換しておく
            $kazu = Number($(this).val());

            // 合計金額に加算、合計個数に加算
            $kingaku += ($label * $kazu);
            $kosuu += $kazu;

            //box2 class_change
            //変更後の文字列
            $res = $dt + "/" + $(this).val() + "個：" + ($label * $(this).val()) + "円";
            // 対象指定
            $target = $('#box2 p:nth-of-type(' + (index + 1) + ')')
            $target.text($res);
            if ($(this).val() == 0) {
                $target.removeClass('open');
            } else {
                $target.addClass('open');
                $null = false;
                if (($label * $kazu) >= 0) {
                    $target.css('color', 'Black');
                } else {
                    $target.css('color', 'Red');
                }
            }

            // カートの上のバッジ
            $bi = $('.badge i');
            $bi.attr('data-badge', $kosuu);
        });

        // カートの上のやつを消すやつ
        $b = $('.badge');
        if (!$kosuu) {
            $b.removeClass('open');
        } else {
            $b.addClass('open');
        }


        // テキストをセット
        $('#total').text("合計：" + $kingaku + "円");

        // 合計金額がマイナスなら赤字
        if ($kingaku >= 0) {
            $('#total').css('color', 'Black');
        } else {
            $('#total').css('color', 'Red');
        }

        // box2 class_change
        if ($null) {
            $('#box2 p:last-of-type').removeClass('open');
        } else {
            $('#box2 p:last-of-type').addClass('open');
            $res = "合計/" + $kosuu + "個：" + $kingaku + "円";
            $('#box2 p:last-of-type').text($res);
        }
        // #box2に.openがないなら#box2がどっかいく
        if ($('#box2 .open').length) {
            $('#box2').addClass('open');
        } else {
            $('#box2').removeClass('open');
        }


    });









    //リセットボタン
    $('.reset').click(function () {
        console.log('.reset');
        // 合計金額の計算
        $kingaku = 0; // 合計金額
        $kosuu = 0; // 合計個数
        $null = true; // 入力有無

        // ボタンの分だけループで一括処理
        // ボタンの親要素を対象にして金額の合計を計算する
        $('input[type="number"]').each(function (index, elm) {

            // 計算対象
            $dl = $(this).parent().parent();

            // 商品名
            $dt = $dl.find('dt').text();
            // 金額
            $label = $dl.find('label').text();
            // 金額に余計な文字が合ったら消す。今回は”円”
            $label = $label.replace('円', '');

            // 個数
            // 数字型に変換しておく
            $(this).val(0);
            $kazu = Number($(this).val());

            // 合計金額に加算、合計個数に加算
            $kingaku += ($label * $kazu);
            $kosuu += $kazu;

            //box2 class_change
            //変更後の文字列
            $res = $dt + "/" + $(this).val() + "個：" + ($label * $(this).val()) + "円";
            // 対象指定
            $target = $('#box2 p:nth-of-type(' + (index + 1) + ')')
            $target.text($res);
            if ($(this).val() == 0) {
                $target.removeClass('open');
            } else {
                $target.addClass('open');
                $null = false;
                if (($label * $kazu) >= 0) {
                    $target.css('color', 'Black');
                } else {
                    $target.css('color', 'Red');
                }
            }

            // カートの上のバッジ
            $bi = $('.badge i');
            $bi.attr('data-badge', $kosuu);
        });

        // カートの上のやつを消すやつ
        $b = $('.badge');
        if (!$kosuu) {
            $b.removeClass('open');
        } else {
            $b.addClass('open');
        }


        // テキストをセット
        $('#total').text("合計：" + $kingaku + "円");

        // 合計金額がマイナスなら赤字
        if ($kingaku >= 0) {
            $('#total').css('color', 'Black');
        } else {
            $('#total').css('color', 'Red');
        }

        // box2 class_change
        if ($null) {
            $('#box2 p:last-of-type').removeClass('open');
        } else {
            $('#box2 p:last-of-type').addClass('open');
            $res = "合計/" + $kosuu + "個：" + $kingaku + "円";
            $('#box2 p:last-of-type').text($res);
        }
        // #box2に.openがないなら#box2がどっかいく
        if ($('#box2 .open').length) {
            $('#box2').addClass('open');
        } else {
            $('#box2').removeClass('open');
        }

    });







});


$(function () {
    $('input[type="number"]').change(function () {
        let controls = $('input[type="number"]'); //$(this)だと1つしか持ってこれない
        let controlobj = {};
        let purchaseNumber = 0; //カートアイコンに表示するバッジの数字

        for (let i = 0; i < controls.length; i++) {
            controlobj[controls[i].name] = $('input[name="' + controls[i].name + '"]').val();
            purchaseNumber += parseInt($('input[name="' + controls[i].name + '"]').val());
        }
        $('#view').load(
            'php/cart.php',
            controlobj,
            function (data, textStatus, XMLHttpRequest) {}
        );

        $('a.badge').attr('data-badge', purchaseNumber); //カートボタンのバッジの購入数を書き換える
        $('input.badge').attr('value', purchaseNumber);
    });
    $('input[type="reset"]').click(function () {
        $('#view').empty();
    });




});
