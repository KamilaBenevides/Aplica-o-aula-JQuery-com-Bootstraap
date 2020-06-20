function consultaCep(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/"+ cep +"/json/";
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#uf").html(response.uf);
            $("#localidade").html(response.localidade);
            $("#titulo_cep").html("CEP "+ response.cep);
            $(".cep").show();
            $(".barra-progresso").hide();
        }
    })
}

$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
});