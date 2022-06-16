$(function() {

    let url = "https://api.nasa.gov/planetary/apod?api_key=NhimD9skbjdhA1Vaqf68FUj1HzIyuHAMAhy5yEtE";
    var pedido = new XMLHttpRequest();
    pedido.open("GET", url);
    pedido.send();

    pedido.onload = function() {
        if(this.status == 200) {
            const objDados = JSON.parse(this.responseText);
            mostraFigura(objDados);
        } else {
            console("Requisição mal-sucedida!")
        }
    }

    function mostraFigura(objDados) {
        let urlImagem = objDados.url;
        let dataImagem = objDados.date;
        let descricao = objDados.explanation;

        $(".img-nasa").html(
            `<img src="${urlImagem}">
     
            <p>${dataImagem}</p>
            <p>${descricao}</p>
            `
        )
    }

    $("button").click(function() {
        let novaData = $("#dataPedido").val();
        let novaUrl = `https://api.nasa.gov/planetary/apod?api_key=NhimD9skbjdhA1Vaqf68FUj1HzIyuHAMAhy5yEtE&date=${novaData}`
        pedido.open("GET", novaUrl);
        pedido.send();
    }); 

})