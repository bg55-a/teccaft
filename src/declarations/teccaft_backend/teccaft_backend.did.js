export const idlFactory = ({ IDL }) => {
  const Productos = IDL.Record({
    'marca' : IDL.Text,
    'nombrep' : IDL.Text,
    'descripcion' : IDL.Text,
    'caducidad' : IDL.Text,
    'precio' : IDL.Text,
    'existencia' : IDL.Text,
  });
  const Usuario = IDL.Record({
    'nombre' : IDL.Text,
    'telefono' : IDL.Text,
    'apellidom' : IDL.Text,
    'apellidop' : IDL.Text,
  });
  return IDL.Service({
    'actualizarProductos' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Text],
        [IDL.Bool],
        [],
      ),
    'actualizarUsuario' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Text],
        [IDL.Bool],
        [],
      ),
    'buscarProducto' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, Productos))],
        ['query'],
      ),
    'buscarProductosid' : IDL.Func([IDL.Text], [IDL.Opt(Productos)], ['query']),
    'buscarUsuarios' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, Usuario))],
        ['query'],
      ),
    'buscarUsuariosid' : IDL.Func([IDL.Text], [IDL.Opt(Usuario)], ['query']),
    'crearProducto' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Text],
        [],
        [],
      ),
    'crearUsuario' : IDL.Func([IDL.Text, IDL.Text, IDL.Text, IDL.Text], [], []),
    'eliminarProducto' : IDL.Func([IDL.Text], [IDL.Bool], []),
    'eliminarUsuario' : IDL.Func([IDL.Text], [IDL.Bool], []),
    'identificacionProductos' : IDL.Func([IDL.Text], [IDL.Text], []),
    'listaProductos' : IDL.Func([IDL.Text], [IDL.Text], []),
    'pagoProducto' : IDL.Func([IDL.Text], [IDL.Text], []),
    'ventasProducto' : IDL.Func([IDL.Text], [IDL.Text], []),
    'verificarCuentaUsuario' : IDL.Func([IDL.Text], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
