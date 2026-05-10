import "./sobre.css";

export default function Sobre() {
  return (
    <section className="sobre" id="Sobre">
      <div className="container-sobre">
        
        {/* COLUNA DA ESQUERDA: Texto + Números */}
        <div className="coluna-texto-numeros">
          <div className="sobre-esquerda">
            <h1>Democratizando o Conhecimento</h1>
            <p>
              Não somos uma instituição de ensino. Somos um <span className="cor-letras">movimento</span> que vai às escolas para promover a conscientização da juventude através da educação e da tecnologia.
            </p>
            <p>
              Nossa missão é dar o <span className="cor-letras">primeiro contato</span> com a tecnologia para quem não possui oportunidade, usando-a como ferramenta de transformação.
            </p>
            <p>
              Acreditamos que o domínio tecnológico potencializa a formação de profissionais de excelência, independentemente de sua área de atuação.{" "}
              <span className="cor-letras">O conhecimento pode te salvar.</span>
            </p>
          </div>

          {/* Agora o sobre-direita fica naturalmente abaixo do texto */}
          <div className="sobre-direita">
            <div className="numero-card">
              <h2>10</h2>
              <p>Trilhas de Aprendizado</p>
            </div>
            <div className="numero-card">
              <h2>100%</h2>
              <p>Gratuito e Acessível</p>
            </div>
            <div className="numero-card">
              <h2>24/7</h2>
              <p>Tutor IA Disponível</p>
            </div>
          </div>
        </div>

        {/* COLUNA DA DIREITA: Cards */}
        <div className="cards-sobre">
          <div className="card-sobre">
            <span className="icone">🏫</span>
            <div className="conteudo-card">
              <h3>Presença nas Escolas</h3>
              <p>Levamos workshops e palestras sobre tecnologia diretamente nas escolas</p>
            </div>
          </div>

          <div className="card-sobre">
            <span className="icone">🌍</span>
            <div className="conteudo-card">
              <h3>100% Gratuito</h3>
              <p>Nunca cobraremos por conhecimento - essa é nossa missão</p>
            </div>
          </div>

          <div className="card-sobre">
            <span className="icone">🎯</span>
            <div className="conteudo-card">
              <h3>Primeiro Contato</h3>
              <p>Oferecemos a primeira experiência com tecnologia para jovens sem acesso</p>
            </div>
          </div>

          <div className="card-sobre">
            <span className="icone">💡</span>
            <div className="conteudo-card">
              <h3>Transformação Social</h3>
              <p>Usamos a tecnologia como ferramenta de mudança e oportunidade</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
