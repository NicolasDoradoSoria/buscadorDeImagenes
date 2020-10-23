import React,{useState, useEffect} from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';

function App(){

  const [busqueda, setbusqueda] = useState('')
  const [imagenes, setimagenes] = useState([])
  const [paginaactual, setpaginaactual] = useState(1)
  const [totalpaginas, settotalpaginas] = useState(5)
  useEffect(() =>{

    const consultarAPI = async ()=>{

      if(busqueda === '') return null
      
      
      const imagenesPorPagina = 30
      const key = '18750008-63ea0da2f104cec01eff5286f'
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaactual}`
      
      const respuestas = await fetch(url)
      const resultado = await respuestas.json()
      setimagenes(resultado.hits)

      const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina)
      settotalpaginas(calcularTotalPaginas)

      //MOVER LA PANTALLA HACIA ARRIBA
      const jumbotron = document.querySelector('.jumbotron')
      jumbotron.scrollIntoView({behavior: 'smooth'})
    }
    consultarAPI()
  },[busqueda, paginaactual])
  

  const paginaAnterior = () => {
    const pagina = paginaactual - 1
    if(pagina === 0) return null
   
    setpaginaactual(pagina)
  }

  const paginaSiguiente = () => {
      const pagina = paginaactual + 1

      if(pagina > totalpaginas) return

      setpaginaactual(pagina)
  }
   
    return ( <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imagenes</p>
        <Buscador setbusqueda={setbusqueda}/>
      </div>

      <div className="row justify-content-center">
        <Resultado imagenes={imagenes} 
         /> 

        {(paginaactual === 1) ? null : (<button type="button" className="bbtn btn-info mr-1" onClick={paginaAnterior}>Anterior &laquo;</button>)}
        {(paginaactual === totalpaginas) ? null : (<button type="button" className="bbtn btn-info" onClick={paginaSiguiente}>Siguiente &raquo;</button>)}
      </div>
    </div> ); 
  
}
 
export default App;

