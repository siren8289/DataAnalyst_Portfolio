export type Project = {
  number: string
  title: string
  subtitle: string
  description: string
  flow: string[]
  metrics: string[]
  questions: string[]
  tools: string[]
  kind: 'ledger' | 'funnel' | 'districts' | 'streets' | 'compare' | 'query'
  githubUrl: string
}

export const projects: Project[] = [
  { number: '01', title: 'AlloHub', subtitle: 'Investment Ledger Analytics', description: '투자·출자·배분 원장 데이터를 분석 Mart로 변환하고, 자금 정합성과 투자 집행 현황을 검증한 금융 데이터 분석 프로젝트.', flow: ['PostgreSQL OLTP', 'Data Quality', 'Analytics Mart', 'KPI / Reconciliation', 'Insight'], metrics: ['10 Data Quality Rules', '6 Analytics Marts', 'Capital Deployment Rate', 'Allocation Reconciliation'], questions: ['전체 출자금 중 실제 투자 집행률은?', '투자금과 출자자별 배분 합계는 일치하는가?'], tools: ['PostgreSQL', 'Star Schema', 'Quality Gate'], kind: 'ledger', githubUrl: 'https://github.com/siren8289Porfolio/AlloHub_portfolio/blob/da/README.md' },
  { number: '02', title: 'Briefly', subtitle: 'Product & Investment Context Analytics', description: '관심상품 → 모의가입 → Brief → 위험 알림으로 이어지는 사용자 행동을 Event와 Funnel로 구조화한 Product Analytics 프로젝트.', flow: ['EXPLORE', 'INTEREST', 'MOCK JOIN', 'BRIEF'], metrics: ['6 User Events', '9 KPI Definitions', '6 Dimensions', '4 Facts'], questions: ['관심상품 등록은 모의가입으로 이어지는가?', 'Brief는 실제로 소비되는가?'], tools: ['Event Validation', 'KPI Versioning', 'SHA-256 Masking'], kind: 'funnel', githubUrl: 'https://github.com/siren8289Porfolio/Briefly_portfolio/tree/main/da' },
  { number: '03', title: 'Pivot Seoul', subtitle: 'Housing Affordability Analytics', description: '서울 주거비 시뮬레이션 결과를 자치구·생애주기·시간 기준으로 분석하고, RIR과 Red Zone을 통해 주거 부담 패턴을 비교한 프로젝트.', flow: ['SIMULATION', 'DISTRICT', 'LIFE STAGE', 'RIR MART', 'RISK STATE'], metrics: ['25 Seoul Districts', '3 Life Stages', 'Fact Simulation Run', 'Watermark Update'], questions: ['소득 대비 주거비 부담은 어느 구간에서 달라지는가?', '생애주기별 부담 패턴은 어떻게 비교되는가?'], tools: ['Airflow', 'Data Quality Checks', 'RIR = Housing Cost / Income'], kind: 'districts', githubUrl: 'https://github.com/siren8289Porfolio/pivotSeoul_portfolio/tree/da/da' },
  { number: '04', title: '다시골목', subtitle: 'Local Story & Commercial Area Analytics', description: '지도 탐색, 스토리 조회, 좋아요, 공유, 큐레이션, 관리자 승인 흐름을 이벤트로 구조화하고 지역 상권 Context와 연결한 분석 프로젝트.', flow: ['MAP VIEW', 'DETAIL', 'ENGAGEMENT', 'CURATION', 'REVIEW', 'AREA CONTEXT'], metrics: ['Map → Detail Conversion', 'Participation Rate', 'Approval Rate', 'Area Context Coverage'], questions: ['어떤 지역 탐색이 상세 조회로 이어지는가?', '서비스 이벤트와 상권 Context를 어떻게 함께 읽는가?'], tools: ['Service Event Data', 'Public Area Context', 'Curation CTR'], kind: 'streets', githubUrl: 'https://github.com/siren8289Porfolio/dasigolmog/tree/siren8289-da/da' },
  { number: '05', title: 'LegacyPOC', subtitle: 'Migration Performance & Reconciliation Analytics', description: 'Legacy Servlet/JDBC와 Spring Boot/FastAPI 구조를 동일 Dataset·동일 Contract 기준으로 비교하고, Correctness → Performance → Reconciliation 순서로 검증한 프로젝트.', flow: ['SAME INPUT', 'SAME DATASET', 'SAME CONTRACT', 'COMPARE'], metrics: ['Parity Pass Rate', 'Mismatch Count', 'Query p50 / p95', 'Snapshot Reconciliation'], questions: ['이관 전후 결과는 같은가?', '성능 개선이 정확성의 대가가 아닌가?'], tools: ['EXPLAIN ANALYZE', 'Rows Read', 'Buffer Hit / Read'], kind: 'compare', githubUrl: 'https://github.com/siren8289Porfolio/legacyPoc_Portfolio/blob/siren8289-da-portfolio/da/README.md' },
  { number: '06', title: 'MIDO', subtitle: 'Data Performance & DB Efficiency Analysis', description: '쿼리와 데이터 접근 구조를 분석하고, 재현 가능한 문서로 성능과 DB 효율의 근거를 남긴 technical case study.', flow: ['QUERY', 'PLAN', 'LATENCY', 'EVIDENCE'], metrics: ['DA-01 Data Performance', 'DA-02 DB Efficiency', 'DA-03 Efficiency Summary', 'DA-05 Case Study'], questions: ['데이터 접근 구조가 지연 시간에 어떤 영향을 주는가?'], tools: ['Query Plan', 'Latency', 'Reproducible Docs'], kind: 'query', githubUrl: 'https://github.com/siren8289Porfolio/MIDO_Project/tree/da/da' },
]