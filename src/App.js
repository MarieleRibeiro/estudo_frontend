import React from 'react';
import Header from './components/Header'

/* Sempre que for criado um componente no react coloca sempre com letra maiuscula

=> Componente dentro do react é simplismente uma função que retorna HTML

<> </> => conceito de fragment = quando quero criar um container pra envolver 1 ou mais components sem reproduzir efeito na DOM( arvore de elementos )
*/

function App() {
  return (
    <>
      <Header />
      <Header />
    </>
  )
}

export default App;