import md5 from "md5";
import jwt from "jsonwebtoken";
import { JWT } from "../config/config";
import axios from "axios";
import * as xmlJs from "xml-js";
import {
  consultaMpUsuarioData,
  consultaMpComercioData,
  altaTarjetaUsuarioData,
  altaClienteData,
  loginData,
  compraData
} from "./../constants/xmlData";

export async function getApsUsersLogin(req, res) {
  try {
    const encPwd = md5(req.body.password);
    const { xml, soapAction } = loginData(req.body, encPwd);

    axios
      .post("http://18.223.33.17:89/Operaciones.svc", xml, {
        headers: {
          "Content-Type": "text/xml;charset=UTF-8",
          SOAPAction: soapAction
        }
      })
      .then(response => {
        var result = xmlJs.xml2js(response.data, { compact: true })[
          "s:Envelope"
        ]["s:Body"]["LoginResponse"]["LoginResult"]["_text"];
        const obj = JSON.parse(result);

        if (obj.IdUsuario !== 0) {
          const token = jwt.sign(
            {
              id: obj.IdUsuario,
              userName: obj.NombreUsuario
            },
            JWT.SECRET
          );

          res.json({
            data: { userId: obj.IdUsuario, token: token }
          });
        } else {
          res.status(401).json({
            data: { errors: { form: "Invalid Credentials" } }
          });
        }
      });
  } catch (e) {
    console.log(e);
  }
}

export async function consultaMpUsuario(req, res) {
  try {
    const { xml, soapAction } = consultaMpUsuarioData(req.query.idUsuario);
    await axios
      .post("http://18.223.33.17:89/Operaciones.svc", xml, {
        headers: {
          "Content-Type": "text/xml;charset=UTF-8",
          SOAPAction: soapAction
        }
      })
      .then(response => {
        var result = xmlJs.xml2js(response.data, { compact: true }); // or convert.xml2json(xml, options)

        res
          .status(200)
          .json(
            JSON.parse(
              result["s:Envelope"]["s:Body"]["ConsultaMPUsuarioResponse"][
                "ConsultaMPUsuarioResult"
              ]["_text"]
            )
          );
      })
      .catch(error => {
        res.json("Something went wrong");
      });
  } catch (e) {
    console.log(e);
  }
}

export async function consultaMpComercio(req, res) {
  try {
    const { xml, soapAction } = consultaMpComercioData(req.query.idComercio);

    await axios
      .post("http://18.223.33.17:89/Operaciones.svc", xml, {
        headers: {
          "Content-Type": "text/xml;charset=UTF-8",
          SOAPAction: soapAction
        }
      })
      .then(response => {
        var result = xmlJs.xml2js(response.data, { compact: true }); // or convert.xml2json(xml, options)
        res
          .status(200)
          .json(
            JSON.parse(
              result["s:Envelope"]["s:Body"]["ConsultaMPComercioResponse"][
                "ConsultaMPComercioResult"
              ]["_text"]
            )
          );
      })
      .catch(error => {
        res.json("Something went wrong");
      });
  } catch (e) {
    console.log(e);
  }
}

export async function altaTarjetaUsuario(req, res) {
  try {
    const { xml, soapAction } = altaTarjetaUsuarioData(req.body);

    axios
      .post("http://18.223.33.17:89/Operaciones.svc", xml, {
        headers: {
          "Content-Type": "text/xml;charset=UTF-8",
          SOAPAction: soapAction
        }
      })
      .then(response => {
        var result = xmlJs.xml2js(response.data, { compact: true }); // or convert.xml2json(xml, options)

        res.json(
          JSON.parse(
            result["s:Envelope"]["s:Body"]["AltaTarjetaClienteResponse"][
              "AltaTarjetaClienteResult"
            ]["_text"]
          )
        );
      });
  } catch (e) {
    console.log(e);
  }
}

export async function altaCliente(req, res) {
  try {
    const encPwd = md5(req.body.password);
    const { xml, soapAction } = altaClienteData(req.body, encPwd);

    axios
      .post("http://18.223.33.17:89/Operaciones.svc", xml, {
        headers: {
          "Content-Type": "text/xml;charset=UTF-8",
          SOAPAction: soapAction
        }
      })
      .then(response => {
        res.status(200).json({ estado: "Registrado!" });
      });
  } catch (e) {
    console.log(e);
  }
}

export async function altaCompra(req, res) {
  try {
    const { xml, soapAction } = compraData(req.body);

    axios
      .post("http://18.223.33.17:89/Operaciones.svc", xml, {
        headers: {
          "Content-Type": "text/xml;charset=UTF-8",
          SOAPAction: soapAction
        }
      })
      .then(response => {
        var result = xmlJs.xml2js(response.data, { compact: true }); // or convert.xml2json(xml, options)

        res.json(
          JSON.parse(
            result["s:Envelope"]["s:Body"]["CompraResponse"]["CompraResult"][
              "_text"
            ]
          )
        );
      });
  } catch (e) {
    console.log(e);
  }
}
