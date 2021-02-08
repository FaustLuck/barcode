showFile = async (input) => {
    await new Response(input.files[0]).json().then(json => {
        for (let i = 0; i < json.length; i++) {
            let div = document.createElement('div');
            let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
            svg.id = `barcode${i}`;
            div.append(svg)
            document.body.append(div);
            JsBarcode(`#${svg.id}`, json[i], {
                fontSize: 25,
                margin: 0,
                height: 75
            });
        }
    }, e => {
        console.log('Не JSON файл!!!')
    })
    document.body.removeChild(input)
}


