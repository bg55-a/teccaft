import Text "mo:base/Text";
import Array "mo:base/Array";
import Nat "mo:base/Nat";
import D "mo:base/Debug";
import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";
//import Identity "ic:canister/identity";
import Int "mo:base/Int";
//import Time "mo:base/Time";
import Principal "mo:base/Principal";

//Backend del canister

actor teccaft {

  type Usuario = {
    nombre: Text;
    apellidop: Text;
    apellidom : Text;
    telefono : Text;
    //identidad: Principal; // Identidad de Internet Identity
  };
  type Indice = Nat;
  var indice: Indice = 0;
  let usuarios= HashMap.HashMap<Text, Usuario>(0, Text.equal, Text.hash);


  //var usuario : [Usuario] = [];

  private func generateIUser() : Nat {
    indice += 1;
    return indice;
  };
  /*
  public query ({caller}) func Magaly() : async Principal {
    return caller;
  };*/

  public func crearUsuario(nombre:Text, apellidop:Text, apellidom:Text, telefono:Text) : async () {
    let postuser = {nombre = nombre; apellidop = apellidop; apellidom = apellidom; telefono = telefono};

    let clave = Nat.toText(generateIUser());
    usuarios.put(clave, postuser);
    //identidad: Principal; // Identidad de Internet Identity
    D.print("Nuevo Usuario Creado: " # nombre);
    return ();
  };

  public query func buscarUsuarios () : async [(Text, Usuario)]{
    let userIter : Iter.Iter<(Text, Usuario)> = usuarios.entries();
    let userArray : [(Text, Usuario)] = Iter.toArray(userIter);
    return userArray;

  };

  public query func buscarUsuariosid (id: Text) : async ?Usuario {
    let user: ?Usuario = usuarios.get(id);
    return user;
  };

  
public func actualizarUsuario (id:Text, nombre:Text, apellidop:Text, apellidom:Text, telefono:Text) : async Bool {
    let user: ?Usuario= usuarios.get(id);

    switch (user) {
      case (null) {
        return false;
      };
      case (?currentuser) {
        let user: Usuario = {nombre = nombre; apellidop = apellidop; apellidom = apellidom; telefono = telefono};
        usuarios.put(id,user);
        D.print("Ha sido actualizado el usuario con id: " # id);
        return true;
      };
    };

  };

  

  public func verificarCuentaUsuario(id:Text) : async Text {
    let user: ?Usuario = usuarios.get(id);
    if (user != null) {
      return "Cuenta de usuario verificada correctamente";
    } else {
      return "Cuenta de usuario no verificada";
    }
  };

  public func eliminarUsuario (id: Text) : async Bool {
		let user : ?Usuario = usuarios.get(id);
		switch (user) {
			case (null) {
				return false;
			};
			case (_) {
				ignore usuarios.remove(id);
				D.print("Ha sido eliminado el usuario con id: " # id);
				return true;
			};
		};
	};


  type Productos = {
    nombrep: Text;
    descripcion: Text;
    existencia: Text;
    caducidad: Text;
    marca: Text;
    precio: Text;
  };


  private func generateIProducto() : Nat {
    indice += 1;
    return indice;
  };

  //var Productos : [Productos] = [];
  let productos = HashMap.HashMap<Text, Productos>(0, Text.equal, Text.hash);

  public func crearProducto(nombrep:Text, descripcion:Text, existencia:Text, caducidad:Text, marca:Text, precio:Text) : async () {
    let postproductos = {
      nombrep = nombrep;
      descripcion = descripcion;
      existencia = existencia;
      caducidad = caducidad;
      marca = marca;
      precio = precio;
    };

    let clave = Nat.toText(generateIProducto());
    productos.put(clave, postproductos);
    //identidad: Principal; // Identidad de Internet Identity
    D.print("Nuevo Productos Creado: " # nombrep);
    return ();
  };

  public func actualizarProductos(nombrep: Text, descripcion : Text, existencia : Text, caducidad : Text, marca : Text, precio : Text, id : Text) : async Bool {
    let product : ?Productos = productos.get(id);

    switch (product) {
      case (null) {
        return false;
      };
      case (?currentproduct) {
        let product : Productos = {
          nombrep = nombrep;
          descripcion = descripcion;
          existencia = existencia;
          caducidad = caducidad;
          marca = marca;
          precio = precio;
        };
        productos.put(id, product);
        //Debug.print("Updated post with ID: " # id);
        return true;
      };
    };

  };

  public func identificacionProductos(id : Text) : async Text {
    let product : ?Productos = productos.get(id);
    if (product != null) {
      return "Producto identificado correctamente";
    } else {
      return "Producto no identificado";
    };
  };

  //ventas y buscar Producto
  public func ventasProducto(id:Text):async Text {
    let product: ?Productos = productos.get(id);
    if (product != null) {
      return "Se realizo la venta correctamente";
    } else {
      return "Venta no realizada";
    }
  };

  public query func buscarProducto () : async [(Text, Productos)]{
    let eventIter : Iter.Iter<(Text, Productos)> = productos.entries();
    let eventArray : [(Text, Productos)] = Iter.toArray(eventIter);
    return eventArray;

  };

  public query func buscarProductosid (id: Text) : async ?Productos {
    let product: ?Productos = productos.get(id);
    return product;
  };

  public func eliminarProducto (id: Text) : async Bool {
		let product : ?Productos = productos.get(id);
		switch (product) {
			case (null) {
				return false;
			};
			case (_) {
				ignore productos.remove(id);
				D.print("Ha sido eliminado el Producto con id: " # id);
				return true;
			};
		};
	};

  public func listaProductos(id:Text):async Text {
    let product: ?Productos = productos.get(id);
    if (product != null) {
      return "Producto en lista";
    } else {
      return "Producto no existente en lista";
    }

  };

  
public func pagoProducto(id:Text):async Text {
    let product: ?Productos = productos.get(id);
    if (product != null) {
      return "Pago realizado correctamente";
    } else {
      return "Pago no realizado por indice invalido";
    }
  };

};