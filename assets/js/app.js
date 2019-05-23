
$(function() {   
    $('#search-btn').on('click', function() {
        //入力欄を取得
        let input = $('#search-word').val();
        //ajaxで通信を開始して住所をgetしにいく
        $.ajax({
            url: 'http://zipcloud.ibsnet.co.jp/api/search',
            type: 'GET',    // GET送信 or POST送信
            dataType: 'jsonp',
            data:{
                zipcode: input,
            }
        }).done( (data) => {
            console.log(data);

            $('#prefecture').text(data.results[0].address1);
            $('#city').text(data.results[0].address2);
            $('#address').text(data.results[0].address3);

        }).fail( (error) => {
            console.log(error);
            
        })
    })
})