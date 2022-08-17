$(function() {
    // 初始化右侧滚动条
    // 这个方法定义在scroll.js中
    // resetui()
    // 为发送按钮绑定鼠标点击事件
    $('#btnSend').on('click', function() {
        var text = $('#ipt').val().trim()
        if (text.length <= 0) {
            return $('#ipt').val('')
        }
        // 如果用户输入了聊天内容，则将聊天内容追加到页面上显示
        $('#talk_list').append('<li class="right_word"><img src="img/person02.png"/><span>' + text + '</span></li>')
        $('#ipt').val('')
    })

})