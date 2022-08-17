window.onload = function() {
    var reg = '/^1[3|5|6|7|8]\d{9}$/';
    var tel = document.querySelector('#tel');
    tel.onblur = function() {
        if (reg.test(this.value)) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜您输入正确'
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i>手机号码格式不正确，请重新输入'
        }
    }
}