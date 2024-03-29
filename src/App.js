import { useState } from "react";
import { useSelector } from "react-redux";
import "./App.scss";

function App() {
  const [current, setCurrent] = useState('home');
  const equipe = useSelector((state) => state.equipe.list);


  function Content() {
    if (current === "home") {
      return(
        <div style={{overflow: "hidden"}} className="middle">
            <div id="indexImages">
                <div className="indexImageBox" style={{backgroundImage: "url('img/sketch1.png')"}}></div>
                <div className="indexImageBox" style={{backgroundImage: "url('img/sketch2.png')"}}></div>
                <div className="indexImageBox" style={{backgroundImage: "url('img/sketch3.png')"}}></div>
            </div>
        </div>
      )
    } else if (current === "areas"){
      return(
        <div id="areasContent" className="middle">
            <h1>Áreas de atuação</h1>
            <div id="areasRow">
                <div className="areasColumn">
                    <div className="areasImageBox" style={{backgroundImage: "url('img/blank.png')"}}></div>
                    <ul>
                        <li>Seguro e Capitalização</li><hr/>
                        <li>Transporte</li><hr/>
                        <li>Responsabilidade Civil</li><hr/>
                        <li>Acidente de Trânsito</li><hr/>
                        <li>Energia</li>
                    </ul>
                </div>
                <div className="areasColumn">
                    <div id="areasImageBoxMobile" className="areasImageBox" style={{backgroundImage: "url('img/blank.png')"}}></div>
                    <ul>
                        <li>Consumidor</li><hr/>
                        <li>Bancário</li><hr/>
                        <li>Cobrança</li><hr/>
                        <li>Trabalhista</li><hr/>
                        <li>Imobiliário</li>
                    </ul>
                    <div id="areasImageBoxDesktop" className="areasImageBox" style={{backgroundImage: "url('img/blank.png')"}}></div>
                </div>
                <div className="areasColumn">
                    <div className="areasImageBox" style={{backgroundImage: "url('img/blank.png')"}}></div>
                    <ul>
                        <li>Empresarial</li><hr/>
                        <li>Contratual</li><hr/>
                        <li>Ambiental</li><hr/>
                        <li>Família</li><hr/>
                        <li>Órfãos e sucessões</li>
                    </ul>
                </div>
            </div>            
        </div>
      )
    } else if (current === "escritorio") {
        return(
          <div className="middle">
            <h1 style={{margin: "20px"}}>O Escritório</h1>
            <div id="textBox">
                <img id="floatImage" src="img/img3.jpg"/>            
                <p className="paragraph">Dantas Silva Advogados iniciou suas atividades em 1989 com os sócios Nilton Pereira da Silva e Jorge Antonio Dantas Silva, oriundos do mercado segurador. </p> <p className="paragraph">Em 1996 foi formalmente constituída a sociedade, que hoje está estabelecida à Rua da Quitanda, nº 60 – 12º andar, no Centro do Rio de Janeiro. </p> <p className="paragraph">Atuamos em todo o país por meio de nossas modernas instalações e de nossos profissionais altamente qualificados. Todos com vínculo empregatício, trabalhando com equipamentos de informática modernos e sistema próprio do escritório. </p> <p className="paragraph">Estamos prontos para atender nossos clientes do meio empresarial e pessoas físicas, seja pela modalidade presencial ou virtual. </p> <p className="paragraph">Prezamos pela ética, pela transparência e profissionalismo, com objetividade, simplicidade, rapidez e um custo equilibrado. </p> <p className="paragraph">Nossa proposta é de negociação e resolução de conflitos pela via suasória, inclusive quando em litígio judicial. </p> <p className="paragraph">Ao logo de mais de três décadas, vimos trazendo soluções diferenciadas, com projetos e propostas inovadoras, obedecendo aos interesses de nossos clientes e visando o melhor resultado para solução de seus problemas. </p> <p className="paragraph">Nosso ambiente é acolhedor e traz aos profissionais que atuam uma tranquilidade e segurança para o bom desenvolvimento de suas atividades, assim como para o recebimento de nossos clientes. </p> <p className="paragraph">Esta é nossa forma de trabalhar e nossa proposta, as quais se inserem em nossos ideais e em na razão de existir. </p>
                <p className="sign" style={{width: "100%", textAlign: "end", marginTop: "10px"}}>Jorge Antonio Dantas Silva</p>
            </div>
          </div>
        )
    } else if (current === "equipe") {
      return (
        <div id="equipeContent" className="middle">
          {equipe.map((categoria) => {
            return(
              <div className="categoriaEquipe" key={categoria.title}>
                <h1 className="title">{categoria.title}</h1>
                {categoria.members.map(member => {
                  return(
                    <div className="membroEquipe">
                      <img className="equipeImage" src={member.picture}/>
                      <div className="membroInfo">
                        <h2 className="name">{member.name}</h2>
                        <h3 className="job">{member.job}</h3>
                        <p className="contact">{member.contact}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            )            
          })}
        </div>
      )
    }
  }

  return (
    <div className="App">
        <div style={{backgroundColor: "blue", height: "fit-content"}}>
            <div id="altDecoBox" className="decoBox"></div>
            <div className="navegation">
                <img id="logo" src="img\logo.png" onClick={() => setCurrent('home')}/>
                <img id="menuLink" href="menu.html" className="navLink" src="img\menu.svg"/>
                <div id="horizontalNav">
                    <a className="navLink" onClick={() => setCurrent('escritorio')}>Escritório</a>
                    <div className="divider">⏐</div>
                    <a className="navLink" onClick={() => setCurrent('equipe')}>Equipe</a>
                    <div className="divider">⏐</div>
                    <a className="navLink"  onClick={() => setCurrent('areas')}>Atuação</a>
                    <div className="divider">⏐</div>
                    <a className="navLink" onClick={() => setCurrent('noticias')}>Notícias</a>
                    <div className="divider">⏐</div>
                    <a className="navLink" style={{marginRight: "5px"}}>Acesso Remoto</a>
                </div>
            </div>
        </div>
        <Content/>
        <div id="foot">
            <div id="address">
                <div className="addressItem">Rua da Quitanda, 60, 12º andar</div>
                <div className="addressItem">Rio de Janeiro/RJ, Brasil - CEP 20011-030</div>
            </div>
            <p style={{textAlign: "center"}}>+55 (21) 3078-3363 - advogados@dantassilva.com.br </p>
        </div>
        <div id="copyright"><b>Copyright</b> © Dantas Silva Advogados Associados. Todos os direitos reservados.</div>
    </div>
  );
}

export default App;
