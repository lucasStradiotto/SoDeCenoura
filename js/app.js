$(document).ready(function () {



    //carrega a utilização de modais
    $('.modal-trigger').leanModal();

    $('.collection-item').click(function () {
        let control = $(this).find('.badge');
        if (control.length == 0){
            $(this).prepend('<span class="badge">1</span>');
        }else {
            let valAtual = parseInt(control.text());
            control.text(valAtual+1);
        }
        
    });

    $('.acao-limpar').click(function(){
        $('.badge').remove();
    });

    $('.collection-item').on('click','.badge',function(){
        $(this).remove();
        return false;
    });

    $('#confirmar').click(function(){
        $('#resumo').html('');
        $('.badge').parent().each(function(){
            let produto = this.lastChild.textContent;
            let quant = this.firstChild.textContent;
            $('#resumo').append(produto+": "+quant+" <br>");
        });
        $('#btn-pedir').click(function(){
            alert('Pedido Enviado!');
            $('.badge').remove();
        });
    });

});