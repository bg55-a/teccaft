import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Productos {
  'marca' : string,
  'nombrep' : string,
  'descripcion' : string,
  'caducidad' : string,
  'precio' : string,
  'existencia' : string,
}
export interface Usuario {
  'nombre' : string,
  'telefono' : string,
  'apellidom' : string,
  'apellidop' : string,
}
export interface _SERVICE {
  'actualizarProductos' : ActorMethod<
    [string, string, string, string, string, string, string],
    boolean
  >,
  'actualizarUsuario' : ActorMethod<
    [string, string, string, string, string],
    boolean
  >,
  'buscarProducto' : ActorMethod<[], Array<[string, Productos]>>,
  'buscarProductosid' : ActorMethod<[string], [] | [Productos]>,
  'buscarUsuarios' : ActorMethod<[], Array<[string, Usuario]>>,
  'buscarUsuariosid' : ActorMethod<[string], [] | [Usuario]>,
  'crearProducto' : ActorMethod<
    [string, string, string, string, string, string],
    undefined
  >,
  'crearUsuario' : ActorMethod<[string, string, string, string], undefined>,
  'eliminarProducto' : ActorMethod<[string], boolean>,
  'eliminarUsuario' : ActorMethod<[string], boolean>,
  'identificacionProductos' : ActorMethod<[string], string>,
  'listaProductos' : ActorMethod<[string], string>,
  'pagoProducto' : ActorMethod<[string], string>,
  'ventasProducto' : ActorMethod<[string], string>,
  'verificarCuentaUsuario' : ActorMethod<[string], string>,
}
