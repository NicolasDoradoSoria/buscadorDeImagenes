import React, {useState} from "react";
import Error from "./Error";

const Buscador = ({setbusqueda}) => {

  const [termino, settermino] = useState('')
  const [error, seterror] = useState(false)
   
  const handleSubmit = (e) => {
    e.preventDefault();

    if(termino.trim() === ''){
      seterror (true)
      return
    }
    seterror(false)
    setbusqueda(termino)
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="busca tu imagen, ejemplo futbol"
            onChange={e =>settermino(e.target.value)}
          />
        </div>
        <div className="form-grouo col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            value="...buscar"
          />
        </div>
      </div>

      {error ?  <Error mensaje= "agrege un termino a la busqueda"/>  : null}
    </form>
  );
};

export default Buscador;
