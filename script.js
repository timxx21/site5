function calculation() {

    let form = document.forms.calculator;
    let price1 = form.elements.price1;
    let quantity1 = form.elements.quantity1;
    let price2 = form.elements.price2;
    let quantity2 = form.elements.quantity2;
    let price3 = form.elements.price3;
    let quantity3 = form.elements.quantity3;
    let price4 = form.elements.price4;
    let quantity4 = form.elements.quantity4;
    let result = document.getElementById("result");
    let res = price1.value * quantity1.value + price2.value * quantity2.value;
    res += price3.value * quantity3.value + price4.value * quantity4.value;
    if (res.isNaN) {
        result.innerHTML = "Что-то не так";
    } else {
        result.innerHTML = "Всего товаров на сумму: " + res;
    }
}
window.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("my-button");
    button.addEventListener("click", calculation);
});
