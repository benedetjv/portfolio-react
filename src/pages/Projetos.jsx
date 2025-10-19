import React, { useState } from 'react'

function Gallery({ images }) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const openAt = (i) => { setIndex(i); setOpen(true) }
  const prev = () => setIndex((index - 1 + images.length) % images.length)
  const next = () => setIndex((index + 1) % images.length)

  return (
    <div>
      <img
        src={images[0]}
        alt="principal"
        className="img-fluid rounded imagem-principal"
        onClick={() => openAt(0)}
      />
      <div className="d-flex flex-wrap gap-2 mt-2">
        {images.slice(1).map((src, i) => (
          <img
            key={i}
            src={src}
            className="miniatura"
            alt={`mini-${i}`}
            onClick={() => openAt(i + 1)}
          />
        ))}
      </div>

      {open && (
        <div
          className="modal fade show"
          style={{ display: 'block', background: 'rgba(0,0,0,0.6)' }}
          onClick={() => setOpen(false)}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content bg-light">
              <div className="modal-body text-center">
                <img src={images[index]} className="img-fluid rounded" alt="expandida" />
                <div className="mt-3 d-flex justify-content-between">
                  <button className="btn btn-outline-dark" onClick={prev}>
                    <i className="bi bi-chevron-left"></i>
                  </button>
                  <button className="btn btn-outline-dark" onClick={next}>
                    <i className="bi bi-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Projetos() {
  const furiaImgs = [
    '/img/foto-home-furia-experience.jpeg',
    '/img/foto-batepapo-ia-furia-experience.jpeg',
    '/img/foto-ranking-furia-experience.jpeg',
    '/img/foto-line-up-furia-experience.jpeg',
    '/img/foto-noticias-hltv-furia-experience.jpeg',
    '/img/foto-partidas-furia-experience.jpeg',
  ]

  const feiraImgs = [
    '/img/feira-homepage.jpg',
    '/img/aba-de-produtos.jpg',
    '/img/fale-conosco.jpg',
    '/img/feira-continuacao-homepage.jpg',
    '/img/footer.jpg',
    '/img/sobre-nos.jpg',
    '/img/sobre-nos-2.jpg',
    '/img/tela-de-cadastro.jpg',
  ]

  const getSafeImgs = [
    '/img/getsafe-home.jpg',
    '/img/getsafe-mapa.jpg',
    '/img/getsafe-feed.jpg',
  ]

  return (
    <div className="projetos-page fade-in">
      <h2 className="text-center fw-bold mb-5">Meus projetos</h2>

      {/* FURIA Experience */}
      <div className="row g-5 align-items-start projeto mb-5">
        <div className="col-md-6">
          <Gallery images={furiaImgs} />
        </div>
        <div className="col-md-6">
          <h4 className="fw-bold">FURIA Experience</h4>
          <small className="text-muted">2025</small>
          <p className="mt-2">
            Um chatbot conversacional criado como desafio para uma vaga na FURIA.
            Desenvolvido com Python e Streamlit, com funcionalidades que aproximam o torcedor da organização:
          </p>
          <ul>
            <li>💬 Chat com IA treinada via fine-tuning OpenAI</li>
            <li>📊 Consulta ao Ranking HLTV</li>
            <li>🎯 Line-up do time</li>
            <li>📰 Notícias do HLTV</li>
            <li>📅 Agenda de jogos</li>
          </ul>
          <a
            href="https://github.com/benedetjv/furia-experience"
            target="_blank"
            className="btn btn-dark mt-3"
            rel="noreferrer"
          >
            <i className="bi bi-github"></i> Ver no GitHub
          </a>
        </div>
      </div>

      {/* Feira */}
      <div className="row g-5 align-items-start projeto mb-5">
        <div className="col-md-6">
          <Gallery images={feiraImgs} />
        </div>
        <div className="col-md-6">
          <h4 className="fw-bold">Feira - Plataforma de compra e venda de insumos agrícolas descentralizada</h4>
          <small className="text-muted">2025</small>
          <p className="mt-2">
            Criado como uma ideia para um projeto prático da FIAP, a Feira vem para renovar a vida do agricultor brasileiro,
            sendo um marketplace de compra e venda descentralizada utilizando blockchain para garantir a segurança e rastreabilidade.
          </p>
          <p>
            Na Feira, o produtor é o protagonista. O consumidor se cadastra com facilidade e acessa os produtos com navegação intuitiva
            e diversos filtros.
          </p>
          <p className="fw-bold mb-1">Tecnologias utilizadas:</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
          </ul>
          <a
            href="https://www.youtube.com/watch?v=9q98OHu-eO8"
            className="btn btn-danger btn-sm me-2"
            target="_blank"
            rel="noreferrer"
          >
            🎥 Pitch da Sprint
          </a>
          <a
            href="https://www.youtube.com/watch?v=AZmNPcJnd1g"
            className="btn btn-danger btn-sm"
            target="_blank"
            rel="noreferrer"
          >
            🎥 Navegação do Site
          </a>
        </div>
      </div>

      {/* GetSafe */}
      <div className="row g-5 align-items-start projeto mb-5">
        <div className="col-md-6">
          <Gallery images={getSafeImgs} />
        </div>

        <div className="col-md-6">
          <h4 className="fw-bold">GetSafe - Plataforma comunitária para desastres naturais</h4>
          <small className="text-muted">2025</small>

          <p className="mt-2">
            Desenvolvido no final do primeiro semestre do curso de Engenharia de Software,
            o projeto GetSafe é uma plataforma para conectar vítimas, voluntários e serviços
            em situações de desastres naturais.
          </p>

          <ul>
            <li>📍 Cadastro de abrigos temporários</li>
            <li>🗺️ Mapeamento em tempo real de áreas afetadas</li>
            <li>🔗 Comunicação direta entre vítimas e voluntários</li>
            <li>📦 Centralização de doações e apoio logístico</li>
          </ul>

          <p className="fw-bold mb-1">Tecnologias utilizadas:</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
          </ul>

          <p className="fst-italic">
            Mais que um projeto acadêmico, uma solução social com propósito.
            O GetSafe foi o <strong>projeto vencedor do FIAP Challenge Global Solution</strong>.
            Confira o{' '}
            <a
              href="https://www.linkedin.com/posts/benedetjoao_certificado-ganhador-da-global-solution-activity-7348480987250442240-fsuV?utm_source=share&utm_medium=member_desktop&rcm=ACoAADJCpY8B3LZDg1lOQRFjmJLocBtOzKZUvrg"
              target="_blank"
              rel="noreferrer"
            >
              certificado da premiação
            </a>.
          </p>

          <a
            href="https://youtu.be/YSXdZc_2mZU"
            className="btn btn-danger btn-sm mt-2"
            target="_blank"
            rel="noreferrer"
          >
            🎥 Vídeo de Apresentação do Projeto
          </a>
        </div>
      </div>
    </div>
  )
}
