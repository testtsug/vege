$(function() {
    
    //チェンジメソッド始まり(個数入れて合計金額表示)
    $('.calc').change(function(){
        let $item01 = $('#item01').val();
        let $item02 = $('#item02').val();
        let $item03 = $('#item03').val();
        let $item04 = $('#item04').val();
        let $item05 = $('#item05').val();
        let $item06 = $('#item06').val();
        let $item07 = $('#item07').val();
        let $item08 = $('#item08').val();
        let $item09 = $('#item09').val();
        let $item10 = $('#item10').val();
        let $item11 = $('#item11').val();
        let $item12 = $('#item12').val();
        let $item13 = $('#item13').val();
        let $item14 = $('#item14').val();
        let $item15 = $('#item15').val();
        
        console.log($item01);
        
        $('#total').load(
        'php/order.php',
            {
                item01:$item01,
                item02:$item02,
                item03:$item03,
                item04:$item04,
                item05:$item05,
                item06:$item06,
                item07:$item07,
                item08:$item08,
                item09:$item09,
                item10:$item10,
                item11:$item11,
                item12:$item12,
                item13:$item13,
                item14:$item14,
                item15:$item15
            },
            function(data,textStatus,xmlhttprequest){}
        );
    });
    //チェンジメソッド終わり
    
    
});