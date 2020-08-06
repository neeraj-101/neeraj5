
function togglez() {
    var x = document.getElementById("yearly_price_l");
    if (x.innerHTML === "$199.99") {
        x.innerHTML = "$19.99";
    } else {
        x.innerHTML = "$199.99"
    }
}

function togglez1() {
    var x = document.getElementById("yearly_price_c");
    if (x.innerHTML === "$249.99") {
        x.innerHTML = "$24.99";
    } else {
        x.innerHTML = "$249.99"
    }
}

function togglez2() {
    var x = document.getElementById("yearly_price_r");
    if (x.innerHTML === "$399.99") {
        x.innerHTML = "$39.99";
    } else {
        x.innerHTML = "$399.99"
    }
}