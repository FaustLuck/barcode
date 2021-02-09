generate = (string) => {
    let arrayOfAdress = string.split(' '),
        options = {
            fontSize: 25,
            margin: 0,
            height: 75
        }
    for (let i = 0; i < arrayOfAdress.length; i++) {
        JsBarcode(`#${createBarcodeContainer(i)}`, arrayOfAdress[i], options)
    }
    document.body.removeChild(document.forms.inputForm)
}

createBarcodeContainer = (i) => {
    let div = document.createElement('div'),
        svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg.id = `barcode${i}`;
    div.append(svg)
    document.body.append(div);
    return svg.id
}