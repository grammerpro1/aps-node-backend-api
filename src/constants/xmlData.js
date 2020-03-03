export const consultaMpUsuarioData = idCliente => {
  return {
    xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:apiw="http://schemas.datacontract.org/2004/07/APIWcf">
  <soapenv:Header/>
  <soapenv:Body>
     <tem:ConsultaMPUsuario>
        <!--Optional:-->
        <tem:xConsulta>
           <!--Optional:-->
           <apiw:IdCliente>${idCliente}</apiw:IdCliente>
        </tem:xConsulta>
     </tem:ConsultaMPUsuario>
  </soapenv:Body>
</soapenv:Envelope>`,
    soapAction: `http://tempuri.org/IOperaciones/ConsultaMPUsuario`
  };
};

export const consultaMpComercioData = idComercio => {
  return {
    xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:apiw="http://schemas.datacontract.org/2004/07/APIWcf">
    <soapenv:Header/>
    <soapenv:Body>
       <tem:ConsultaMPComercio>
          <!--Optional:-->
          <tem:xConsulta>
             <!--Optional:-->
             <apiw:IdComercio>${idComercio}</apiw:IdComercio>
          </tem:xConsulta>
       </tem:ConsultaMPComercio>
    </soapenv:Body>
 </soapenv:Envelope>`,
    soapAction: `http://tempuri.org/IOperaciones/ConsultaMPComercio`
  };
};

export const altaTarjetaUsuarioData = tarjeta => {
  const {
    expiracion,
    fechaCreacion,
    idCliente,
    idTarjeta,
    numeroTarjeta,
    proveedor
  } = tarjeta;
  return {
    xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:apiw="http://schemas.datacontract.org/2004/07/APIWcf">
    <soapenv:Header/>
    <soapenv:Body>
       <tem:AltaTarjetaCliente>
          <!--Optional:-->
          <tem:xTarjetaCliente>
             <!--Optional:-->
             <apiw:Activa>1</apiw:Activa>
             <!--Optional:-->
             <apiw:EstadoExpirada>0</apiw:EstadoExpirada>
             <!--Optional:-->
             <apiw:Expiracion>${expiracion}T00:00:00</apiw:Expiracion>
             <!--Optional:-->
             <apiw:FechaCreacion>${fechaCreacion}T00:00:00</apiw:FechaCreacion>
             <!--Optional:-->
             <apiw:IdCliente>${idCliente}</apiw:IdCliente>
             <!--Optional:-->
             <apiw:IdTarjeta>${idTarjeta}</apiw:IdTarjeta>
             <!--Optional:-->
             <apiw:NumeroTarjeta>${numeroTarjeta}</apiw:NumeroTarjeta>
             <!--Optional:-->
             <apiw:Proveedor>${proveedor}</apiw:Proveedor>
          </tem:xTarjetaCliente>
       </tem:AltaTarjetaCliente>
    </soapenv:Body>
 </soapenv:Envelope>`,
    soapAction: `http://tempuri.org/IOperaciones/AltaTarjetaCliente`
  };
};

export const altaClienteData = (cliente, encPwd) => {
  const { email, nombreUsuario, primerApellido, primerNombre } = cliente;
  return {
    xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:apiw="http://schemas.datacontract.org/2004/07/APIWcf">
    <soapenv:Header/>
    <soapenv:Body>
       <tem:AltaUsuario>
          <!--Optional:-->
          <tem:xUsuario>
             <!--Optional:-->
             <apiw:Email>${email}</apiw:Email>
             <!--Optional:-->
             <apiw:IdComercio>0</apiw:IdComercio>
             <!--Optional:-->
             <apiw:NombreUsuario>${nombreUsuario}</apiw:NombreUsuario>
             <!--Optional:-->
             <apiw:Password>${encPwd}</apiw:Password>
             <!--Optional:-->
             <apiw:PrimerApellido>${primerApellido}</apiw:PrimerApellido>
             <!--Optional:-->
             <apiw:PrimerNombre>${primerNombre}</apiw:PrimerNombre>
          </tem:xUsuario>
       </tem:AltaUsuario>
    </soapenv:Body>
 </soapenv:Envelope>`,
    soapAction: `http://tempuri.org/IOperaciones/AltaUsuario`
  };
};

export const loginData = (cliente, encPwd) => {
  const { nombreUsuario } = cliente;
  return {
    xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:apiw="http://schemas.datacontract.org/2004/07/APIWcf">
    <soapenv:Header/>
    <soapenv:Body>
       <tem:Login>
          <!--Optional:-->
          <tem:xLogin>
             <!--Optional:-->
             <apiw:NombreUsuario>${nombreUsuario}</apiw:NombreUsuario>
             <!--Optional:-->
             <apiw:Password>${encPwd}</apiw:Password>
          </tem:xLogin>
       </tem:Login>
    </soapenv:Body>
 </soapenv:Envelope>`,
    soapAction: `http://tempuri.org/IOperaciones/Login`
  };
};

export const compraData = transaction => {
  const {
    cuotas,
    cvc,
    idCliente,
    idComercio,
    idMoneda,
    idSello,
    sello,
    monto,
    pan,
    vto
  } = transaction;
  return {
    xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:apiw="http://schemas.datacontract.org/2004/07/APIWcf">
    <soapenv:Header/>
    <soapenv:Body>
       <tem:Compra>
          <!--Optional:-->
          <tem:xCompra>
             <!--Optional:-->
             <apiw:Cuotas>${cuotas}</apiw:Cuotas>
             <!--Optional:-->
             <apiw:Cvc>${cvc}</apiw:Cvc>
             <!--Optional:-->
             <apiw:IdCliente>${idCliente}</apiw:IdCliente>
             <!--Optional:-->
             <apiw:IdComercio>${idComercio}</apiw:IdComercio>
             <!--Optional:-->
             <apiw:IdMoneda>${idMoneda}</apiw:IdMoneda>
             <!--Optional:-->
             <apiw:IdSello>${idSello}</apiw:IdSello>
             <!--Optional:-->
             <apiw:Monto>${monto}</apiw:Monto>
             <!--Optional:-->
             <apiw:Pan>${pan}</apiw:Pan>
             <!--Optional:-->
             <apiw:Sello>${sello}</apiw:Sello>
             <!--Optional:-->
             <apiw:Vto>${vto}</apiw:Vto>
          </tem:xCompra>
       </tem:Compra>
    </soapenv:Body>
 </soapenv:Envelope>`,
    soapAction: `http://tempuri.org/IOperaciones/Compra`
  };
};
