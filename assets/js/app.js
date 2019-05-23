
$(function() {

    $('#search-btn').on('click', function() {

        //入力欄を取得
        let inputTask = $('#search-word').val();

        //ajaxで通信を開始して住所をgetしにいく
        $.ajax({
         url: 'http://zipcloud.ibsnet.co.jp/api/search',
         type: 'GET',
         datatype: 'jsonp',
         data:{
            zipcode: inputTask,
         }

        }).done( (data) => {
            console.log(data);

            // $('#prefecture').text('');
            // $('#city').text('');
            // $('#address').text('');

            // $('#prefecture').text(data.results.address1);
            // $('#city').text(data.results.address2);
            // $('#address').text(data.results.address3);

        }).fail( (error) => {
        
        })
    
    })

})
