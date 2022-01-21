document.querySelector('#submite').addEventListener('click', function(){
    let cliente = document.querySelector('#cliente').value;
    let pedido = document.querySelector('#pedido').value;
    let pago = document.querySelector('#pago').value;

    let url = "https://api.whatsapp.com/send?phone=543424067600&text=*_Ocelaris3D" + cliente + pedido + pago;

    window.open(url);
})