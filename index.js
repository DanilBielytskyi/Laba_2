const res_field = document.querySelector('.form-control')
const btn_num = document.querySelectorAll('.add_number')
const btn_reset = document.querySelector('.btn-reset')
const btn_calc = document.querySelector('.calculate')

btn_num.forEach(function (element) {
    element.addEventListener('click', function() {
        res_field.value += this.innerHTML;
    })
})

btn_reset.addEventListener('click', function() {
    res_field.value = '';
})

btn_calc.addEventListener('click', function() {
    res_field.value = eval(res_field.value).toFixed(2);
})