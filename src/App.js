import './App.scss';
import logo1 from '../src/assets/images/roxo.svg'
import logo2 from '../src/assets/images/carro 2.png'
import { useState } from 'react';

function App() {

  const [ valortotal, setVltotal] = useState(0);
  const [ parcela, setParcela] = useState(0);
  const [ juro, setJuro] = useState(0);
  const [ valor_parcelas, setParcelas] = useState(0);
  const [ total, setTotal] = useState(0);


  function Calcular_juros (){
    let valor_juros = valortotal * ( juro / 100 )

    setParcelas((valortotal / parcela ) + valor_juros )

    setTotal((valor_parcelas * parcela))
  }

  return (
    <div className="App">
      <header className='cabecalho'>

          <img src= {logo1} />
          <p> Portifolio.me </p>

      </header>

      <section className='titulo'>
        <h1> Simulador de Compra de Vei­culo </h1>
      </section>

        <div className='principal'>
          <div className='img-carro'>

            <img src= {logo2} />

            
          </div>

          <div className='calculos'>
            <div className='total'>
              <label> Valor Total</label>
              <input type='number' className='vl' value={valortotal} onChange={ e => setVltotal(Number( e.target.value))} />
            </div>
            <div className='parcela-juros'>
              <div className='parcela' >
              <label > Parcelas </label>
              <input type='number' value={parcela} onChange={ e => setParcela(Number( e.target.value))} />
              </div>

              <div className='juros'>
                <label> Juros Mensal (%)</label>
                <input type='number' value={juro} onChange={ e => setJuro( Number(e.target.value))} />
              </div>
            </div>

            <button onClick={Calcular_juros}> Calcular </button>
            <div className='resultado'>
              <div> Parcela:  {valor_parcelas} </div>
              <div> Valor Total:  {total}  </div>
            </div>

          </div>


        </div>
    </div>
  );
}

export default App;