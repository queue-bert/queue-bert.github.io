function increase() {
    var dims = document.getElementById('box').offsetHeight;
    dims += 20;
    document.getElementById('box').style.width = dims + 'px';
    document.getElementById('box').style.height = dims + 'px';
}

function decrease() {
    var dims = document.getElementById('box').offsetHeight;
    dims -= 20;
    document.getElementById('box').style.width = dims + 'px';
    document.getElementById('box').style.height = dims + 'px';
}

function windowLoaded() {
    console.log('loaded');
    document.getElementById('button_increase').addEventListener('click', increase)
    document.getElementById('button_decrease').addEventListener('click', decrease)
}

window.onload = windowLoaded