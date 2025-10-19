import React, { useEffect, useState } from 'react'

export default function Sobre() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { setLoaded(true) }, [])

  return (
    <div className={`sobre-page ${loaded ? 'loaded' : ''}`}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
        <h1 className="text-center fw-bold mb-4">Resumo profissional</h1>

        <h2 className="fs-5 fw-semibold mb-3">Formação Acadêmica</h2>
        <div className="mb-3">
          <p className="mb-1"><strong>FIAP</strong> — Engenharia de Software (2025–2028)</p>
          <p className="mb-0"><strong>Unisul</strong> — Jornalismo (2020–2023)</p>
        </div>

        <h2 className="fs-5 fw-semibold mt-4 mb-3">Experiência Profissional</h2>
        <ul className="mb-3">

          <li>
            <strong>
              <a href="https://www.instagram.com/teucoolusa/" target="_blank" rel="noreferrer">
                Teu Cool USA
              </a>
            </strong> — Gerente de CRM e Customer Experience. (Mai/2025 – Atual) <br />
            <small className="text-muted">Lake Park, Flórida (EUA)</small>
            <p className="mt-2">
              Atuação estratégica na operação de <strong>Personal Shopping e Redirecionamento dos EUA para o Brasil</strong>, com foco em <strong>Customer Experience, CRM e crescimento de receita</strong>.
              Responsável pela <strong>jornada completa do cliente</strong> — desde o primeiro contato e consultoria de compra até o pós-venda e acompanhamento logístico internacional.
            </p>
            <ul>
              <li>🧭 Gestão e automação de fluxos de CRM e atendimento personalizado;</li>
              <li>💬 Comunicação consultiva, transformando o processo de importação em uma experiência simples e confiável;</li>
              <li>📈 Implementação de estratégias de fidelização e follow-up contínuo, aumentando a taxa de recompra;</li>
              <li>🚀 Crescimento de faturamento de <strong>US$15 mil para mais de US$30 mil/mês</strong> em menos de 3 meses.</li>
            </ul>
          </li>

          <li>
            <strong>
              <a href="https://palmtree48.com.br/" target="_blank" rel="noreferrer">
                Palmtree 48
              </a>
            </strong> — Redator SEO e atendimento ao cliente. (Mar/2023 – Jul/2025)
          </li>

          <li>
            <strong>
              <a href="https://sneakersul.com.br/" target="_blank" rel="noreferrer">
                Sneaker Sul
              </a>
            </strong> — Redator SEO e atendimento ao cliente. (Mar/2023 – Jul/2024)
          </li>

          <li>
            <strong>
              <a href="https://www.sulinfoco.com.br/" target="_blank" rel="noreferrer">
                Portal Sul In Foco
              </a>
            </strong> — Jornalista freelancer. (Out/2020 – Jun/2023)
          </li>

          <li>
            <strong>
              <a href="https://noticom.com.br/" target="_blank" rel="noreferrer">
                Noticom
              </a>
            </strong> — Jornalista freelancer. (Mar/2020 – Dez/2023)
          </li>

          <li>
            <strong>
              <a href="https://tubanews.com.br/" target="_blank" rel="noreferrer">
                TubaNews
              </a>
            </strong> — Jornalista freelancer. (Dez/2022 – Mar/2023)
          </li>
        </ul>

        <h2 className="fs-5 fw-semibold mt-4 mb-3">Cursos Complementares</h2>
        <ul className="mb-3">
          <li>Blockchain, Matemática, Learn to Program — FIAP (2025)</li>
          <li>Git, GitHub, JavaScript — Alura (2025)</li>
          <li>Gestão Financeira e Business Management — FIAP (2025)</li>
        </ul>

        <h2 className="fs-5 fw-semibold mt-4 mb-3">Habilidades</h2>
        <ul className="mb-3">
          <li>CRM, Customer Experience, Estratégia Comercial e Automação de Relacionamento</li>
          <li>SEO, Git, HTML, CSS, JavaScript, React, Python e AWS</li>
          <li>Redação, comunicação, foco em conversão de vendas, análise de dados e adaptabilidade</li>
        </ul>

        <h2 className="fs-5 fw-semibold mt-4 mb-3">Idiomas</h2>
        <p>
          Inglês avançado (C1) —{' '}
          <a href="https://cert.efset.org/6L4rHZ" target="_blank" rel="noreferrer">
            Certificado EF SET
          </a>
        </p>

        <div className="d-flex justify-content-center gap-3 mt-5 flex-wrap">
          <a href="/curriculo.pdf" className="btn btn-custom btn-curriculo" download>
            <i className="bi bi-download"></i> Baixar Currículo em PDF
          </a>
        </div>
      </div>
    </div>
  )
}
