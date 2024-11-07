import { Header } from '../../components/Header'
import { ItemList } from '../../components/ItemList';
import background from '../../assets/background.png'
import './styles.css'

function App() {

  return (
      <div>
        <Header />
        <div className='conteudo'>
          <img src={background} alt="Logo do GitHub" className='background' />
          <div className="info">
            <div>
              <input name='usuario' placeholder='Digite o nome do usuario' />
              <button>Buscar</button>
            </div>
            <div className='perfil'>
              <img src="https://avatars.githubusercontent.com/u/100943409?v=4" 
              alt="Imagem de perfil" 
              className='perfil-imagem'/>
              <div>
                <h3>Patrick Marques</h3>
                <span>@PkMs7</span>
                <p>Descrição</p>
              </div>
            </div>
            <hr />
            <div>
              <h4 className="repositorio">Repositórios</h4>
              <ItemList title={"Teste1"} description={"Teste de descrição"} />
              <ItemList title={"Teste1"} description={"Teste de descrição"} />
              <ItemList title={"Teste1"} description={"Teste de descrição"} />
            </div>
          </div>
        </div>
      </div>
  );
}

export default App