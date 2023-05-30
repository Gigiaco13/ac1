import NavBar from "../componentes/NavBar";
import Imagem from "../componentes/Image";
import Cards from "../componentes/cards";
import Rodape from "../componentes/footer";

function Home () {
    return (
        <div>
          <NavBar></NavBar>
         <Imagem></Imagem>
         <Cards></Cards>
         <Rodape></Rodape>
         </div>
      );
    }

    export default Home