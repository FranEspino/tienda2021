import axios from 'axios';
const baseURL = 'http://codidrive.com/vespro/logica'
const codiDriveApi = axios.create({baseURL});

/*
//LOGIN
http://codidrive.com/vespro/logica/acceder.php?login=2222&pass=fran123

//REGISTRAR PERSONA
http://codidrive.com/vespro/logica/registro_persona.php?&apellidos=lastnametest189&nombres=nametest189&nro_documento=1212&email=franh@gmail.com&telefono=747474

//OBTENER ID PERSONA 
http://codidrive.com/vespro/logica/obtener_id_persona.php?&apellidos=lastnametest189&nombres=nametest189&nro_documento=2222&email=franh@gmail.com&telefono=747474

//REGISTRAR PASAJERO
http://codidrive.com/vespro/logica/registro_pasajero.php?&idpersona=1452&fregistro=2020-01-01 10:10:10&tipo_pasajero=CN

//REGISTRAR USUARIO
http://codidrive.com/vespro/logica/registrar_usuario.php?&login=2222&password=fran123&idperfil=3&idpersona=1450&estado=N

//OBTENER ID PASAJERO
http://codidrive.com/vespro/logica/obtener_id_pasajero.php?idpersona=1452

http://codidrive.com/vespro/logica/obtener_id_pasajero.php?idpersona=1371

S= solicitud
A= conductor acepta la solicitud
B = A bordo
F= Finaliza el servicio	
C= Cancelado pero por el usuario

//INSERTAR PEDIDO
http://codidrive.com/vespro/logica/insertar_pedido.php?fhsolicitud=2020-01-01 10:10:10&estado=S&tarifa=6&descuento=0&pagofinal=6&idpasajero=1037&latitud_recojo=-6.781481&longitud_recojo=-79.848137&referencia_recojo=Chepén- Perú - Prueba&latitud_destino=-6.780882&longitud_destino=-79.850140&direccion_origen=-6.778762&direccion_destino=-79.850569&codigo=&tipo_servicio=E

//CONSULKTAR PEDIDO
http://codidrive.com/vespro/logica/consultar_id_pedido.php?idpasajero=1037


//INSERTAR CODIGO DE SOLICITUD
http://codidrive.com/vespro/logica/insertar_codigo.php?codigo=true&idsolicitud=2636&descuento=0&pagofinal=6

//NOTIFICAR A CHOIFER
http://codidrive.com/vespro/logica/consultar_id_pedido.php?idpasajero="1060"

*/
export default codiDriveApi;