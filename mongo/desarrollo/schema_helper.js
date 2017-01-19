

function get_data_base(){
  conn = new Mongo();
  db = conn.getDB("Library");
  return db
}

function operations_db(){
  db_user = get_data_base()
  try {
    db.auth("user_name", "pass");
  } catch (e) {
    print "Something wrong, verify this problem" + e
  } finally {
    print "Loggin sucess"
    db.createCollection("Author", validator: {$and:[
          {nombre :  {"$type": "string"}},
          {apellido: {"$type": "string"}}
        ]
    }
    db.createCollection("User", validator: {$and:
        [
          {nombre :    {"$type": "string"}},
          {apellido:   {"$type": "string"}},
          {contraseña: {"$type": "string"}}
        ]
    }
    db.createCollection("Book", validator: {$and:
        [
          {titulo :    {"$type": "string"}},
          // {fecha:      {"$type": "IsoDate"}},
          {contraseña: {"$type": "string"}},
          {precio:     {"$type": "integer"}},
          {etiqueta :  {"$type": "string"}},
          {comentario :  {"$type": "string"}},
          {votacion :  {"$type": "string"}},
          {paginas :  {"$type": "string"}},
          {size :  {"$type": "string"}},
          {tipo :  {"$type": "string"}},
          {isbn :  {"$type": "string"}},
          {idioma :  {"$type": "string"}}
        ]
    });
      }
    }
