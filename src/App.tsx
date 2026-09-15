import { useEffect, useState } from 'react'
import { projects, type Project } from './data/projects'
import './App.css'

const flowStages = ['USER', 'EVENT', 'VALIDATE', 'MODEL', 'KPI', 'INSIGHT']

function App() {
  const [activeProject, setActiveProject] = useState(0)
  const [activeStage, setActiveStage] = useState(0)
  const [awardsVisible, setAwardsVisible] = useState(false)
  const project = projects[activeProject]

  useEffect(() => {
    const awardsSection = document.querySelector<HTMLElement>('[data-awards]')
    if (!awardsSection) return
    const observer = new IntersectionObserver(([entry]) => setAwardsVisible(entry.isIntersecting), { threshold: 0.2 })
    observer.observe(awardsSection)
    return () => observer.disconnect()
  }, [])

  return <main>
    <nav className="topbar" aria-label="Primary navigation"><a className="brand" href="#top">JYL / DA</a><div className="nav-links"><a href="#experience">Experience</a><a href="#awards">Awards</a><a href="#work">Projects</a><a href="#contact">Contact</a></div><span className="portfolio-label">DATA ANALYTICS PORTFOLIO · 2026</span></nav>

    <section className="hero shell" id="top"><div className="hero-copy"><p className="eyebrow">01 / HERO <span>DATA ANALYTICS PORTFOLIO · 2026</span></p><h1>JUNG<br /><em>YE LIM</em></h1><p className="hero-line">Turning flows into<br /><strong>measurable data.</strong></p><p className="hero-ko">사용자의 행동과 업무 흐름을 이해하고,<br />데이터의 기준을 정의하고, 신뢰할 수 있는<br />분석 구조로 연결합니다.</p><div className="actions"><a className="text-link" href="#experience">View experience <span>↓</span></a><a className="text-link" href="#work">View projects <span>↓</span></a><a className="text-link muted" href="https://github.com/siren8289" target="_blank" rel="noreferrer">GitHub <span>↗</span></a></div></div><div className="flow-visual" aria-label="Data flow from user to insight">{flowStages.map((item, index) => <button className={`flow-node node-${index} ${index <= activeStage ? 'is-active' : ''}`} key={item} onMouseEnter={() => setActiveStage(index)} onFocus={() => setActiveStage(index)}><i />{item}{index < 5 && <b />}</button>)}<span className="flow-note">SOURCE / TRUST / DECISION</span></div><span className="scroll-mark">SCROLL TO EXPLORE <b>↓</b></span></section>

    <section className="experience shell" id="experience"><div className="section-intro"><div><p className="eyebrow">02 / EXPERIENCE</p><h2>REAL EXPERIENCE,<br /><em>STRUCTURED AS DATA.</em></h2></div><p className="section-lede">실무에서 사용자와 업무의 흐름을<br />데이터 항목, 상태값, 검증 기준으로<br />구조화했습니다.</p></div><div className="company-line"><div><strong>LOGOS SYSTEM</strong><span>기획관리팀 · 주임연구원</span></div><time>2026.03 — 2026.06</time></div><div className="experience-flow"><ExperienceChapter number="01" title="투자자산관리시스템 재구축" tag="FFMS · RISK · BRIEF" metric="1,245+" metricLabel="MENU / FUNCTION / SCREEN ITEMS" steps={['BUSINESS DOCUMENT', 'REQUIREMENT', 'DATA FIELD', 'SCREEN', 'VALIDATION']} details={['FFMS 전체 메뉴·기능·화면 항목 약 1,245행 구조화', '기존 시스템과 업무 문서를 대조하여 데이터·요구사항 불일치 확인', '자펀드관리 / 모니터링 / 사후보고관리 기준 정리', 'RISK 조기경보 화면 Description 및 기관별 업무 흐름 산출물 관리']} /><ExperienceChapter number="02" title="법인카드 · 복리후생비 · 예산관리" tag="FINANCIAL AUTOMATION" statement="업무 요구사항을 입력값 / 상태값 / 승인조건 / 예외 흐름으로 구조화했습니다." steps={['INPUT', 'STATE', 'APPROVAL', 'EXCEPTION', 'RESULT']} details={['법인카드 이용내역 및 한도관리 흐름', '계정과목 / 업태분류 기준과 복리후생비 인별 한도 정리', '연간예산편성 PRD / IA / Sitemap 작성', 'As-Is / To-Be와 승인 User Flow 연결']} /><ExperienceChapter number="03" title="QA / FLOW VALIDATION" tag="REQUIREMENT → ROOT CAUSE" metric="1,041" metricLabel="QA/QC TEST CASES" secondaryMetric="10" secondaryLabel="IA GAP ISSUES" steps={['REQUIREMENT', 'TEST CASE', 'AUTOMATION', 'MISMATCH', 'ROOT CAUSE']} details={['운용지시서관리 기준 QA/QC 테스트케이스 1,041개 구조화', 'Playwright MCP / Claude / Browser MCP 활용 자동화 검증', 'Routing 오류와 설계·실제 화면의 기능 흐름 불일치 재검증', 'IA GAP 10개 도출']} /></div></section>

    <section className={`awards-section shell ${awardsVisible ? 'is-visible' : ''}`} id="awards" data-awards><div className="awards-heading"><p className="eyebrow">03 / AWARDS</p><h2>AWARDS &<br /><em>RECOGNITION.</em></h2><p>아이디어를 구조화하고<br />실제 결과물로 연결해 온 경험입니다.</p></div><div className="award-timeline"><div className="timeline-track" /><AwardItem title="HUSS 규제혁신 공모전" institution="성균관대학교" result="우수상" strong /><AwardItem title="지역혁신인재양성대회" institution="한국정보통신보안윤리학회" /><AwardItem title="창업 아이디어 경진대회" institution="한양여자대학교" /><AwardItem title="ESG 아이디어 경진대회" institution="한양여자대학교" /><AwardItem title="캡스톤 Vlog 경진대회" institution="한양여자대학교" /></div></section>

    <section className="work shell" id="work"><div className="work-header"><div><p className="eyebrow">04 / SELECTED WORK</p><h2>FROM BUSINESS FLOW<br /><em>TO DATA ANALYSIS.</em></h2></div><p>실무에서 익힌 구조화와 검증 방식을<br />데이터 분석 프로젝트로 확장했습니다.</p></div><div className="work-layout active-work-layout"><aside className="project-index" aria-label="Project index">{projects.map((item, index) => <button className={index === activeProject ? 'is-active' : ''} key={item.number} onClick={() => setActiveProject(index)}><span>{item.number}</span>{item.title}</button>)}</aside><div className="active-project-stage" aria-live="polite"><ProjectStage project={project} /></div></div><p className="demo-note">ALL METRICS SHOWN ARE PROJECT STRUCTURE OR REPRODUCIBLE SAMPLE EVIDENCE — NOT CLAIMS OF BUSINESS OUTCOME.</p></section>

    <section className="approach shell" id="approach"><div><p className="eyebrow">05 / ANALYTICS APPROACH</p><h2>I ANALYZE THE FLOW,<br /><em>NOT JUST THE NUMBER.</em></h2></div><div className="approach-intro"><p>좋은 분석은 SQL에서 시작하지 않습니다.<br />먼저 무엇을 측정할지, 어떤 데이터가<br />신뢰 가능한지 정의합니다.</p><span>01 — 04 / METHOD</span></div><div className="stages">{[['DEFINE', 'Business question', 'Grain / Metric'], ['STRUCTURE', 'Event / Source', 'Dimension / Fact'], ['VALIDATE', 'Data quality', 'Reconciliation'], ['ANALYZE', 'KPI / Funnel', 'Segment / Insight']].map((item, index) => <button className={`stage ${index <= activeStage ? 'is-active' : ''}`} key={item[0]} onMouseEnter={() => setActiveStage(index)}><span>0{index + 1}</span><strong>{item[0]}</strong><small>{item[1]}<br />{item[2]}</small></button>)}</div></section>

    <section className="toolbox shell" id="skills"><div><p className="eyebrow">06 / SKILLS</p><h2>A WORKING<br /><em>VOCABULARY.</em></h2></div><div className="tool-lines"><ToolLine title="ANALYSIS" text="Python · SQL · Pandas · KPI Definition · Funnel Analysis · Segmentation · Data Quality · Reconciliation" /><ToolLine title="DATABASE / DATA" text="PostgreSQL · MySQL · MariaDB · Star Schema · Dimension / Fact · Materialized View · Incremental Processing" /><ToolLine title="TECHNICAL FOUNDATION" text="Airflow · PySpark · Java · Spring · REST API · Git · GitHub" /><ToolLine title="WORKFLOW" text="Figma · Jira · Confluence · Cursor · Claude · Playwright MCP" /></div></section>

    <section className="education shell" id="education"><div><p className="eyebrow">07 / EDUCATION</p><h2>EDUCATION.</h2></div><div className="education-detail"><p><strong>Hanyang Women’s University</strong><br />Software Convergence<br /><span>2023 — 2026</span></p><p><strong>Academic Credit Bank System</strong><br />Business Administration<br /><span>2022 — 2023</span></p></div></section>

    <footer className="contact shell" id="contact"><p className="eyebrow">08 / CONTACT</p><h2>DATA IS NOT<br />JUST A NUMBER.<br /><em>IT IS THE RESULT<br />OF A FLOW.</em></h2><div className="contact-row"><div><p className="contact-name">JUNG YE LIM</p><p>Data Analyst</p></div><div className="contact-actions"><a className="text-link" href="https://github.com/siren8289" target="_blank" rel="noreferrer">View GitHub <span>↗</span></a></div></div><div className="footer-line">JUNG YE LIM — DATA ANALYTICS PORTFOLIO <span>SEOUL / KR · 2026</span></div></footer>
  </main>
}

function ExperienceChapter({ number, title, tag, statement, metric, metricLabel, secondaryMetric, secondaryLabel, steps, details }: { number: string; title: string; tag: string; statement?: string; metric?: string; metricLabel?: string; secondaryMetric?: string; secondaryLabel?: string; steps: string[]; details: string[] }) {
  return <article className="experience-chapter"><div className="chapter-copy"><div className="chapter-title"><span>{number}</span><div><h3>{title}</h3><p>{tag}</p></div></div>{statement ? <p className="chapter-statement">{statement}</p> : <ul>{details.map((detail) => <li key={detail}>{detail}</li>)}</ul>}</div><div className="chapter-evidence">{metric && <div className="experience-metric"><strong>{metric}</strong><span>{metricLabel}</span></div>}{secondaryMetric && <div className="experience-metric"><strong>{secondaryMetric}</strong><span>{secondaryLabel}</span></div>}<div className="chapter-flow">{steps.map((step, index) => <span key={step}>{step}{index < steps.length - 1 && <b>→</b>}</span>)}</div>{statement && <ul>{details.map((detail) => <li key={detail}>{detail}</li>)}</ul>}</div></article>
}

function AwardItem({ title, institution, result, strong = false }: { title: string; institution: string; result?: string; strong?: boolean }) {
  return <article className={`award-item ${strong ? 'award-strong' : ''}`}><i /><div><h3>{title}</h3><p>{institution}</p></div>{result && <strong>{result}</strong>}</article>
}

function ProjectStage({ project }: { project: Project }) {
  return <article className="project-stage"><div className="project-meta"><span>{project.number} / 06</span><span>ACTIVE CASE STUDY</span></div><div className="project-stage-main"><div><h3>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p><p className="project-description">{project.description}</p><a className="project-link" href={project.githubUrl} target="_blank" rel="noreferrer">Open repository <span>↗</span></a></div><ProjectVisual project={project} /></div><div className="project-stage-data"><div><span className="label">FLOW</span><div className="mini-flow">{project.flow.map((step, index) => <span key={step}>{step}{index < project.flow.length - 1 && <b>→</b>}</span>)}</div></div><div><span className="label">EVIDENCE / METRICS</span><ul>{project.metrics.slice(0, 4).map((metric) => <li key={metric}>{metric}</li>)}</ul></div><div><span className="label">TOOLS</span><ul className="muted-list">{project.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul></div></div><div className="questions"><span className="label">QUESTIONS THIS STRUCTURE CAN ANSWER</span>{project.questions.slice(0, 2).map((question) => <p key={question}>{question}</p>)}</div></article>
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.kind === 'districts') return <div className="visual districts"><div className="district-grid">{Array.from({ length: 25 }, (_, index) => <i className={index % 7 === 0 ? 'danger' : index % 3 === 0 ? 'warning' : ''} key={index} />)}</div><span>DEMO / REPRODUCIBLE SAMPLE<br /><b>RIR DISTRICT MATRIX</b></span></div>
  if (project.kind === 'compare') return <div className="visual compare"><div className="compare-labels"><span>LEGACY</span><b>VS</b><span>REFACTOR</span></div><div className="compare-flow">CORRECTNESS <i>→</i> PERFORMANCE <i>→</i> RECONCILIATION</div></div>
  return <div className={`visual ${project.kind}`}><div className="visual-grid" />{project.flow.map((step, index) => <div className="visual-node" key={step} style={{ left: `${10 + index * (78 / Math.max(project.flow.length - 1, 1))}%`, top: `${35 + (index % 2) * 30}%` }}><i /><span>{step}</span></div>)}</div>
}

function ToolLine({ title, text }: { title: string; text: string }) { return <div className="tool-line"><span>{title}</span><p>{text}</p></div> }

export default App