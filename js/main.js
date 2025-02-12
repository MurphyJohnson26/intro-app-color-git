function updateColor() {
    let red = document.getElementById('redRange').value;
    let green = document.getElementById('greenRange').value;
    let blue = document.getElementById('blueRange').value;

    // Sincronizar inputs de número con los sliders
    document.getElementById('redInput').value = red;
    document.getElementById('greenInput').value = green;
    document.getElementById('blueInput').value = blue;

    let rgbColor = `rgb(${red}, ${green}, ${blue})`;
    let hexColor = rgbToHex(red, green, blue);

    document.getElementById('colorBox').style.backgroundColor = rgbColor;
    document.getElementById('hexCode').innerText = hexColor;
    document.getElementById('colorPicker').value = hexColor;
}

// Convertir RGB a hexadecimal
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + +b).toString(16).slice(1).toUpperCase();
}

// Sincronizar sliders con inputs de número
document.getElementById('redInput').addEventListener('input', function () {
    document.getElementById('redRange').value = this.value;
    updateColor();
});
document.getElementById('greenInput').addEventListener('input', function () {
    document.getElementById('greenRange').value = this.value;
    updateColor();
});
document.getElementById('blueInput').addEventListener('input', function () {
    document.getElementById('blueRange').value = this.value;
    updateColor();
});

// Actualizar desde el color picker
function updateFromPicker() {
    let hex = document.getElementById('colorPicker').value;

    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);

    document.getElementById('redRange').value = r;
    document.getElementById('greenRange').value = g;
    document.getElementById('blueRange').value = b;

    document.getElementById('redInput').value = r;
    document.getElementById('greenInput').value = g;
    document.getElementById('blueInput').value = b;

    document.getElementById('colorBox').style.backgroundColor = hex;
    document.getElementById('hexCode').innerText = hex;
}
