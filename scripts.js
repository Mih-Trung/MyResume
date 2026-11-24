const researchProjects = [
  {
    title: 'AI Agents in Finance: A Systematic Literature Review of Architectures, Applications, and Future Directions',
    status: 'Unpublished / in progress', role: 'Member',
    summary: 'A PRISMA-based review of 993 records from 2020–2025, retaining 68 peer-reviewed studies to map AI-agent applications in investment analysis, algorithmic trading, risk management, and related emerging use cases. The work also examines explainability, bias, privacy, ethics, and governance.',
    contribution: 'Identified research gaps, supported literature review and manual/Python-assisted screening, and contributed to the research framing around the AI-agent transition in finance.',
    keywords: ['AI agents', 'finance', 'systematic review', 'PRISMA']
  },
  {
    title: 'From Theory to Practice: A Systematic Bibliometric Review of Dynamic Pricing Research (1990–2025)',
    status: 'Unpublished / in progress', role: 'Member',
    summary: 'A bibliometric mapping of 28,654 peer-reviewed journal articles examining the evolution of dynamic-pricing research, from optimization to system-level work linking pricing, inventory, logistics, customer behavior, and market strategy.',
    contribution: 'Performed bibliometric metadata analysis and literature structuring; helped synthesize co-citation and bibliographic-coupling results and interpret thematic shifts.',
    keywords: ['dynamic pricing', 'bibliometrics', 'literature review']
  },
  {
    title: 'Regime-Stable Factor Discovery via Symbolic Regression: Mining Robust Equity Formulas from S&P 500',
    status: 'Research manuscript in progress', role: 'Member',
    summary: 'Explores whether symbolic regression can discover interpretable equity factors robust across macro regimes. Candidate formulas from rank-normalized OHLCV signals are screened for stability across three Gaussian Hidden Markov Model market states and evaluated in a walk-forward setting.',
    contribution: 'Supported data analysis and experimental evaluation, assisted model testing and discovery-pipeline design, and contributed to regime-stability logic and workflow refinement.',
    keywords: ['symbolic regression', 'equity factors', 'HMM', 'walk-forward evaluation']
  },
  {
    title: 'ESG Policy Announcements and State-Dependent Financial Responses in Vietnam’s Large-Cap Liquid Equity Market',
    status: 'Unpublished / in progress', role: 'Single author',
    summary: 'Studies short-window market responses to 38 ESG-policy announcements using a VN30-linked stock universe from 2017–2026. The event-study design combines abnormal-return and benchmark-adjusted-volatility analysis with market-regime classification.',
    contribution: 'Sole author responsible for research design and execution, the event-study and regime-based analysis setup, and interpretation in the Vietnam-market context.',
    keywords: ['ESG policy', 'event study', 'Vietnam market', 'market regimes']
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('publications-container');
  researchProjects.forEach((project, index) => container.appendChild(createResearchItem(project, index + 1)));
});

function createResearchItem(project, number) {
  const item = document.createElement('article');
  item.className = 'publication-item research-item';
  item.innerHTML = `
    <div class="research-number">${String(number).padStart(2, '0')}</div>
    <div class="pub-content">
      <h3 class="pub-title">${project.title}</h3>
      <p class="pub-meta"><strong>${project.role}</strong> · ${project.status}</p>
      <p>${project.summary}</p>
      <p class="contribution"><strong>Contribution:</strong> ${project.contribution}</p>
      <p class="tags">${project.keywords.join(' · ')}</p>
    </div>`;
  return item;
}
