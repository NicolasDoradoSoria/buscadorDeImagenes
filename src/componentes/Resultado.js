import React, { Fragment } from 'react';
import Imagen from './Imagen';

const Resultado = ({imagenes}) => {

    const mostarImagenes = () =>{
    
       if(imagenes.length === 0) return null

        return(
            <Fragment>
                <div className="col-12 p-5 row">
                    {imagenes.map(imagen => (
                        <Imagen 
                            imagen={imagen}
                            key={imagen.id}
                        />
                    ))}
                </div>
            </Fragment>
        )
    }

        return ( <Fragment>
            {mostarImagenes()}
        </Fragment> ); 
} 
 
export default Resultado;