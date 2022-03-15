import Button from "../Button";
import "./styles.css";

function Banner() { 
    return (
      <main id="banner">
          <h1> Escutar muda tudo <br>
          </br></h1>
          <p>
              Milhôes de músicas e podcasts para explorar. E nem precisa de cartão de crédito.
          </p>
          <Button texto="Baixe o spotify free" variante ="sucesso"/>
      </main>  

    );  

}


export default Banner;