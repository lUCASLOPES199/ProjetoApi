async function chamarProduto(){

    var Produto = document.getElementById("texto").value;
    
    var endpoint = "https://codifica-demo-api.herokuapp.com/api/v1/products/category/" + Produto

    var resposta = await fetch(endpoint);

    var arquivojson = await resposta.json();
 
    var resultado  = document.getElementById("resultado");

   resultado.innerHTML = '';

   for()
    
    }