let todaMiLista = []

function addRow() {

    let newId = "precio" + todaMiLista.length
    todaMiLista.push(newId)

    let row = `<div class="mb-2">
    <input type="text">
    <input oninput="actualizar()" id="`+ newId + `" type="number" step="any">
    <button onclick="removeRow('`+ newId + `')" class="bg-red-500">Eliminar</button>
</div>`

    document.getElementById("miLista").innerHTML += row
}

function actualizar() {
    let suma = 0
    todaMiLista.forEach(item => {
        let valor = document.getElementById(item).value

        if (valor != "") {
            suma += parseInt(valor)
        }
    })

    document.getElementById("precio").innerHTML = suma
}

function removeRow(bidElement) {
    console.log(bidElement)
    document.getElementById(bidElement).parentElement.remove()

    // remove
    var index = todaMiLista.indexOf(bidElement);
    if (index > -1) {
        todaMiLista.splice(index, 1);
    }

    actualizar()
    console.log(bidElement)
}