document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  
    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    let telefono = "5403425336098";
  
    let cliente = document.querySelector("#cliente").value;
    let fecha = document.querySelector("#fecha").value;
    let hora = document.querySelector("#hora").value;
    let empleado = document.querySelector("#empleado").value;
    let servicio = document.querySelector("#servicio").value;
    let resp = document.querySelector("#respuesta");
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    let url = `https://wa.me/send?phone=${telefono}&text=
          ${cliente}%0A
          *Indica la fecha de retiro:*%0A
          ${fecha}%0A
          *Indica la hora de retiro:*%0A
          ${hora}%0A
          *Producto:*%0A
          ${empleado}%0A
          *¿Cuál es el metodo de pago?*%0A
          ${servicio}`;
  
    if (cliente === "" || fecha === "" || hora === "") {
      resp.classList.add("fail");
      resp.innerHTML = `Faltan algunos datos, ${cliente}`;
      return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;
  
    window.open(url);
  });