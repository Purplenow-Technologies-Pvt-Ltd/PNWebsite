import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BrainCircuit, Check, ChevronDown, Cloud,
  Activity, Cpu, Crosshair, FlaskConical, Globe2, HardDrive, Hexagon, Menu, Microscope, Network, Radio,
  ShieldCheck, Smartphone, Sparkles, MapPin, Stethoscope, X, Zap
} from 'lucide-react';
import './styles.css';
import './sasken-hero.css';
import './light-theme.css';
import './detail.css';
import './detail-theme.css';
import './purplenow-brand.css';
import './services-page.css';
import './platform-page.css';
import './leadership-page.css';
import './contact-locations.css';
import './msp-page.css';
import './msp-layout.css';
import './medical-page.css';
import './service-detail.css';
import './hardware-page.css';
import './embedded-page.css';
import './iot-page.css';
import './ai-page.css';
import './mobile-web-page.css';
import './cybersecurity-page.css';
import './cloud-page.css';
import './industrial-page.css';
import './consumer-page.css';
import './semiconductor-page.css';
import './manufacturing-page.css';
import './nexedge-page.css';
import './nexsense-page.css';
import './nexcloud-page.css';
import './client-showcase.css';
import './purplenow-palette.css';
import './light-purple.css';
import './soft-violet-graphite.css';
import './careers-page.css';
import './consolidated-overview.css';
import './category-page-model.css';
import './site-refresh.css';
import './products-refresh.css';

const navItems = [
  { label: 'Home', key: 'home' },
  { label: 'About us', key: 'about', children: ['Who we are', 'What we do', 'Values & ethics', 'Leadership'] },
  {
    label: 'Services',
    key: 'services',
    groups: [
      {
        label: 'Research & Development',
        items: [
          { label: 'Platform Development', page: 'platform-development' },
          { label: 'Hardware Development', page: 'hardware-design-services' },
          { label: 'Embedded Software', page: 'embedded-software' },
          { label: 'Manufacturing', page: 'manufacturing' }
        ]
      },
      {
        label: 'Semiconductors',
        items: [
          { label: 'Design Verification', page: 'design-verification' },
          { label: 'Physical Design', page: 'physical-design' },
          { label: 'Verification & Validation', page: 'verification-validation' },
          { label: 'RTL Design', page: 'rtl-design' }
        ]
      },
      {
        label: 'Other Services',
        items: [
          { label: 'Internet of Things', page: 'internet-of-things' },
          { label: 'Artificial Intelligence', page: 'artificial-intelligence' },
          { label: 'Mobile & Web', page: 'mobile-web' },
          { label: 'Cybersecurity', page: 'cybersecurity' }
        ]
      },
      {
        label: 'ERP Services',
        items: [
          { label: 'SAP', page: 'erp-sap' },
          { label: 'Dynamics 365', page: 'erp-dynamics-365' },
          { label: 'Oracle', page: 'erp-oracle' },
          { label: 'Workday', page: 'erp-workday' }
        ]
      }
    ]
  },
  { label: 'Industries', key: 'industries', children: ['Medical', 'Industrial', 'Consumer electronics', 'Semiconductor'] },
  { label: 'Products', key: 'products', children: ['Product 1', 'Product 2', 'Product 3'] },
  { label: 'MSP', key: 'msp' }
];

const services = [
  ['Platform development', 'We turn ambitious product concepts into resilient, production-ready platforms.', Cpu],
  ['Hardware design services', 'From first schematic to silicon validation, we make every electron count.', HardDrive],
  ['Embedded software', 'Intelligent firmware that makes complex systems feel simple and dependable.', Zap],
  ['Internet of Things', 'Connected products that sense more, respond faster, and earn trust at scale.', Network],
  ['Artificial intelligence', 'Practical intelligence that moves from prototype to a measurable advantage.', BrainCircuit],
  ['Mobile & web', 'Digital experiences that bring your most sophisticated products to people.', Smartphone],
  ['Cybersecurity', 'Security engineered in from the architecture up, not patched on at the end.', ShieldCheck],
  ['Cloud services', 'Flexible cloud foundations for data, delivery, and continuous improvement.', Cloud]
];

const industries = [
  ['Medical', 'Building confidence into every critical interaction.', 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=85'],
  ['Industrial', 'Making the physical world more responsive.', 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=85'],
  ['Consumer electronics', 'Designing technology people love to use.', 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=900&q=85'],
  ['Semiconductor', 'Advancing the systems behind tomorrow.', 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85']
];

const products = [
  ['01', 'NexEdge One', 'Edge AI compute module', 'A compact, high-performance platform for intelligent devices at the edge.', 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85'],
  ['02', 'NexSense', 'Precision sensor system', 'A modular sensing architecture built for the most demanding environments.', 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85'],
  ['03', 'NexCloud', 'Connected operations suite', 'Bring your hardware, data, and teams together in one clear view.', 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85']
];

const clients = [
  { name: 'Samsung', svg: '<svg viewBox="0 0 220 56" xmlns="http://www.w3.org/2000/svg" aria-label="Samsung"><rect width="220" height="56" fill="transparent"/><text x="0" y="36" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="700" fill="#1428A0" letter-spacing="-1">SAMSUNG</text></svg>' },
  { name: 'Edforce', svg: '<svg viewBox="0 0 220 56" xmlns="http://www.w3.org/2000/svg" aria-label="Edforce"><rect width="220" height="56" fill="transparent"/><text x="0" y="36" font-family="Arial, Helvetica, sans-serif" font-size="27" font-weight="800" fill="#1F2A44">EDFORCE</text><rect x="160" y="16" width="40" height="14" rx="7" fill="#31B6D3"/></svg>' },
  { name: 'Deloitte', svg: '<svg viewBox="0 0 220 56" xmlns="http://www.w3.org/2000/svg" aria-label="Deloitte"><rect width="220" height="56" fill="transparent"/><text x="0" y="36" font-family="Arial, Helvetica, sans-serif" font-size="25" font-weight="700" fill="#0E2A5A">Deloitte</text><circle cx="193" cy="18" r="7" fill="#86B6FF"/><circle cx="207" cy="18" r="7" fill="#4D7FEA"/></svg>' },
  { name: 'Solon SiSOC', svg: '<svg viewBox="0 0 260 56" xmlns="http://www.w3.org/2000/svg" aria-label="Solon SiSOC"><rect width="260" height="56" fill="transparent"/><text x="0" y="35" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="800" fill="#1B1F24">SOLON</text><text x="113" y="35" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="700" fill="#6E7A87">SiSOC</text><rect x="220" y="15" width="24" height="24" rx="6" fill="#C69B49"/></svg>' }
];

const detailPages = {
  'who-we-are': ['Who we are', 'The engineers behind meaningful progress.', 'A multidisciplinary team turning difficult technical questions into dependable products.', ['Deep technical craft', 'Global collaboration', 'Long-term partnerships']],
  'what-we-do': ['What we do', 'Engineering solutions for modern enterprises.', 'Purplenow brings product design, embedded engineering, automation, and software delivery together to help organizations move from need to market.', ['Understand the need', 'Engineer the solution', 'Support the outcome']],
  'values-ethics': ['Values & ethics', 'How we choose to show up.', 'Integrity, openness, and respect guide every decision we make with our people, clients, and communities.', ['Do the right thing', 'Speak with clarity', 'Leave things better']],
  leadership: ['Leadership', 'Experience with a forward view.', 'Our leadership team gives curious people the room and support to solve important problems well.', ['Technical excellence', 'Human-centred decisions', 'Responsible growth']],
  'service-platform-development': ['Platform development', 'A stronger foundation for your next leap.', 'We architect and build scalable platforms that help products move from a promising prototype to reliable everyday performance.', ['Systems architecture', 'Product engineering', 'Validation and scale']],
  'service-hardware-design-services': ['Hardware design services', 'From schematic to production.', 'Our hardware teams design efficient, manufacturable systems with the discipline needed for demanding environments.', ['Circuit and board design', 'Prototyping and validation', 'Design for manufacture']],
  'service-embedded-software': ['Embedded software', 'Intelligence that lives close to the metal.', 'We create stable, efficient firmware for products where timing, power, and reliability matter.', ['Firmware architecture', 'Real-time systems', 'Testing and maintenance']],
  'service-internet-of-things': ['Internet of Things', 'A clearer view of the physical world.', 'Connect devices, data, and people with IoT systems designed for useful insight and secure growth.', ['Connected device strategy', 'Data pipelines', 'Fleet operations']],
  'service-artificial-intelligence': ['Artificial intelligence', 'From data to better decisions.', 'We apply practical AI where it can improve an experience, automate a task, or reveal an opportunity.', ['Machine learning models', 'Computer vision', 'Edge intelligence']],
  'service-mobile-web': ['Mobile & web', 'Digital experiences with substance.', 'We design and deliver fast, accessible interfaces that make powerful technology easy to use.', ['Experience design', 'Mobile applications', 'Web platforms']],
  'service-cybersecurity': ['Cybersecurity', 'Confidence built into every layer.', 'Protect systems, products, and users with security practices that begin at architecture and continue in operation.', ['Threat modelling', 'Secure development', 'Product assurance']],
  'service-cloud-services': ['Cloud services', 'Infrastructure that keeps learning.', 'Modern cloud foundations make it easier to release, observe, and improve the products your business depends on.', ['Cloud architecture', 'DevOps enablement', 'Managed reliability']],
  'industry-medical': ['Medical devices', 'Technology that earns trust.', 'Purplenow helps medical technology teams develop connected devices, biosensors, embedded systems, and dependable experiences for clinicians and patients.', ['Device development', 'Biosensors and diagnostics', 'Quality engineering']],
  'industry-industrial': ['Industrial', 'Smarter systems for the real world.', 'Bring visibility and intelligence to operations with engineering built for uptime, safety, and scale.', ['Automation systems', 'Operational data', 'Predictive maintenance']],
  'industry-consumer-electronics': ['Consumer electronics', 'Products people reach for.', 'We blend technical performance with considered experiences that make complex products feel natural.', ['Product experience', 'Power-conscious design', 'Launch readiness']],
  'industry-semiconductor': ['Semiconductor', 'The technology beneath tomorrow.', 'Partner with specialists who understand the full journey from silicon and board to intelligent, connected product.', ['Silicon enablement', 'Reference platforms', 'Systems integration']],
  'design-verification': ['Design Verification', 'Confidence in every cycle.', 'Find functional issues early with systematic verification plans, reusable testbenches, assertions, and coverage-driven closure for complex digital designs.', ['Verification planning and testbench development', 'Assertions, formal methods, and regressions', 'Coverage analysis and sign-off readiness']],
  'physical-design': ['Physical Design', 'From RTL to optimized<br /><em>silicon design.</em>', 'Turn synthesized logic into a physically optimized design through floorplanning, power planning, placement, clock-tree synthesis, routing, and timing closure.', ['Floorplanning and power delivery', 'Placement, clock-tree synthesis, and routing', 'Timing, power, and physical sign-off']],
  'verification-validation': ['Verification & Validation', 'Prove the design. Validate the system.', 'Connect silicon-level verification with system validation to confirm functionality, performance, interfaces, and reliability against product requirements.', ['Requirements traceability and test strategy', 'Simulation, emulation, and system validation', 'Defect analysis and release evidence']],
  'rtl-design': ['RTL Design', 'Architect digital logic for what comes next.', 'Develop synthesizable RTL for efficient, maintainable digital systems, from microarchitecture and interfaces through lint, synthesis checks, and integration.', ['Microarchitecture and RTL development', 'Lint, CDC, and synthesis readiness', 'Integration, debug, and design handoff']],
  'erp-sap': ['SAP Services', 'Make your SAP landscape work harder.', 'Plan, implement, integrate, and evolve SAP solutions that align business processes, data, and teams across your organization.', ['SAP implementation and modernization', 'S/4HANA migration and integration', 'Application management and optimization']],
  'erp-dynamics-365': ['Microsoft Dynamics 365', 'Connect customer and business operations.', 'Implement and extend Dynamics 365 to streamline finance, customer engagement, supply chain, and day-to-day operations.', ['Dynamics 365 implementation', 'Power Platform and system integration', 'Process improvement and support']],
  'erp-oracle': ['Oracle Services', 'Build a stronger foundation for enterprise operations.', 'Modernize Oracle applications and platforms with implementation, integration, migration, and ongoing optimization shaped around business needs.', ['Oracle Cloud ERP implementation', 'Application and data migration', 'Integration, reporting, and managed support']],
  'erp-workday': ['Workday Services', 'Bring people and finance processes together.', 'Configure and optimize Workday solutions to support connected HR, finance, planning, and employee experiences.', ['Workday HCM and Financials', 'Deployment and integration', 'Reporting, optimization, and support']],
  'product-1': ['NexEdge One', 'Compute intelligence at the edge.', 'A compact AI compute module for responsive devices, built to make advanced inference practical outside the data centre.', ['Low-latency inference', 'Modular integration', 'Production-ready support']],
  'product-2': ['NexSense', 'Precision you can build on.', 'A flexible sensor platform for teams that need accurate signals, dependable connectivity, and room to evolve.', ['Multi-sensor input', 'Rugged operation', 'Actionable telemetry']],
  'product-3': ['NexCloud', 'One view of connected operations.', 'Bring devices, data, and teams together with a clear operational layer designed for continuous improvement.', ['Live fleet insight', 'Secure data services', 'Workflow automation']]
};

function App() {
  const resolvePage = (route) => route === 'service-cloud-services' ? 'msp' : route;
  const initialPage = resolvePage(document.body.dataset.page || window.location.pathname.replace(/^\//, '').replace(/\.html$/, '') || 'home');
  const [page, setPage] = useState(initialPage);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  useEffect(() => {
    const onPopState = () => setPage(resolvePage(document.body.dataset.page || window.location.pathname.replace(/^\//, '').replace(/\.html$/, '') || 'home'));
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    if (page === 'msp' && /\/(?:service-)?cloud-services\.html$/.test(window.location.pathname)) {
      window.history.replaceState(null, '', '/msp.html');
    }
    const pageTitle = detailPages[page]?.[0] || ({ home: 'Engineering solutions', about: 'About Us', services: 'Services', industries: 'Industries', products: 'Solutions', msp: 'Managed Services', contact: 'Contact Us' }[page] || 'Technology solutions');
    document.title = `${pageTitle} | Purplenow`;
    const footerSummary = document.querySelector('.footer-top p');
    if (footerSummary) footerSummary.innerHTML = 'Engineering, embedded, automation<br />and software solutions.';
    const footerYear = document.querySelector('.footer-bottom span');
    if (footerYear) footerYear.textContent = '© 2026 Purplenow Technologies';
  }, [page]);

  const go = (next) => {
    const destination = ['cloud-services', 'service-cloud-services'].includes(next) ? 'msp' : next;
    window.location.href = destination === 'home' ? '/' : `/${destination}.html`;
  };
  const isCategoryPage = ['about', 'services', 'industries', 'products', 'manufacturing', 'medical', 'industrial', 'consumer-electronics', 'semiconductor', 'mobile-web', 'cybersecurity', 'cloud-services', 'artificial-intelligence', 'internet-of-things', 'embedded-software', 'hardware-design-services', 'platform-development'].includes(page)
    || Boolean(detailPages[page])
    || page.startsWith('service-')
    || page.startsWith('industry-')
    || page.startsWith('erp-')
    || page.startsWith('product-');
  const isServicesPage = page === 'services'
    || page === 'manufacturing'
    || page.startsWith('service-')
    || ['mobile-web', 'cybersecurity', 'cloud-services', 'artificial-intelligence', 'internet-of-things', 'embedded-software', 'hardware-design-services', 'platform-development', 'design-verification', 'physical-design', 'verification-validation', 'rtl-design'].includes(page)
    || page.startsWith('erp-');
  const isProductPage = page === 'products' || page.startsWith('product-');

  return <div className="app">
    <Header page={page} go={go} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} openMenu={openMenu} setOpenMenu={setOpenMenu} />
    <main className={isCategoryPage ? `category-page${isServicesPage ? ' category-page-services' : ''}${isProductPage ? ' category-page-products' : ''}` : ''}>
      {page === 'home' && <Home go={go} />}
      {page === 'service-platform-development' && <PlatformDevelopment go={go} />}
      {page === 'service-hardware-design-services' && <HardwareDesign go={go} />}
      {page === 'service-embedded-software' && <EmbeddedSoftware go={go} />}
      {page === 'service-internet-of-things' && <InternetOfThings go={go} />}
      {page === 'service-artificial-intelligence' && <ArtificialIntelligence go={go} />}
      {page === 'service-mobile-web' && <MobileWeb go={go} />}
      {page === 'service-cybersecurity' && <Cybersecurity go={go} />}
      {page === 'manufacturing' && <Manufacturing go={go} />}
      {serviceDetailContent[page] && <ServiceDetailPage pageKey={page} go={go} />}
      {page === 'leadership' && <Leadership go={go} />}
      {page === 'industry-medical' && <MedicalIndustry go={go} />}
      {page === 'industry-industrial' && <IndustrialIndustry go={go} />}
      {page === 'industry-consumer-electronics' && <ConsumerElectronics go={go} />}
      {page === 'industry-semiconductor' && <SemiconductorIndustry go={go} />}
      {page === 'product-1' && <NexEdgeOne go={go} />}
      {page === 'product-2' && <NexSense go={go} />}
      {page === 'product-3' && <NexCloud go={go} />}
      {detailPages[page] && !serviceDetailContent[page] && page !== 'service-platform-development' && page !== 'leadership' && page !== 'product-1' && page !== 'product-2' && page !== 'product-3' && <DetailPage pageKey={page} page={detailPages[page]} go={go} />}
      {page === 'about' && <About go={go} />}
      {page === 'services' && <Services go={go} />}
      {page === 'industries' && <Industries go={go} />}
      {page === 'products' && <Products go={go} />}
      {page === 'msp' && <MergedMsp go={go} />}
      {page === 'careers' && <Careers go={go} />}
      {page === 'contact' && <Contact />}
    </main>
    <Footer go={go} />
  </div>;
}

function Header({ page, go, mobileOpen, setMobileOpen, openMenu, setOpenMenu }) {
  return <header className="site-header">
    <a className="brand" href="/" aria-label="Purplenow home" onClick={(event) => { event.preventDefault(); go('home'); }}><img className="brand-image" src="/purplenow-logo.jpeg" alt="Purplenow" /></a>
    <nav className={`main-nav ${mobileOpen ? 'is-open' : ''}`}>
      {navItems.map(item => <div className={`nav-group${openMenu === item.key ? ' is-open' : ''}`} key={item.key}>
        <button
          className={`nav-link ${page === item.key ? 'active' : ''}`}
          aria-expanded={(item.children || item.groups) ? (mobileOpen && openMenu === item.key) : undefined}
          onClick={() => {
            if ((item.children || item.groups) && mobileOpen) {
              setOpenMenu(openMenu === item.key ? null : item.key);
              return;
            }
            go(item.key);
          }}
        >{item.label}{(item.children || item.groups) && <ChevronDown size={14} />}</button>
        {(item.children || item.groups) && <div className={`dropdown${item.groups ? ' dropdown-services' : ''}`}>
          {item.groups
            ? <>
              <button className="dropdown-overview" onClick={() => go(item.key)}>Services overview<ArrowRight size={13} /></button>
              {item.groups.map(group => <div className="dropdown-group" key={group.label}>
                <strong>{group.label}</strong>
                {group.items.map(child => <button key={child.page} onClick={() => go(child.page)}>{child.label}<ArrowRight size={13} /></button>)}
              </div>)}
            </>
            : <>
              <button className="dropdown-overview" onClick={() => go(item.key)}>{item.label} overview<ArrowRight size={13} /></button>
              {item.children.map(child => <button key={child} onClick={() => go(child.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-'))}>{child}<ArrowRight size={13} /></button>)}
            </>}
        </div>}
      </div>)}
      <button className="nav-link" onClick={() => go('careers')}>Careers</button>
      <button className="nav-link contact-link" onClick={() => go('contact')}>Contact us <ArrowUpRight /></button>
    </nav>
    <button className="menu-toggle" aria-label="Toggle menu" aria-expanded={mobileOpen} onClick={() => { setMobileOpen(!mobileOpen); if (mobileOpen) setOpenMenu(null); }}>{mobileOpen ? <X /> : <Menu />}</button>
  </header>;
}

function Eyebrow({ children }) { return <div className="eyebrow"><span />{children}</div>; }
function Button({ children, onClick, light = false }) { return <button className={`button ${light ? 'button-light' : ''}`} onClick={onClick}>{children}<ArrowDownRight size={17} /></button>; }
const detailVisuals = {
  'who-we-are': ['The Purplenow difference', 'Practical engineering, thoughtfully delivered.', '360°', 'Support from idea to impact', 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85'],
  'what-we-do': ['Our method', 'From the first useful question to the last meaningful release.', '01', 'Integrated delivery model', 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85'],
  'values-ethics': ['A promise we keep', 'Trust is not a statement. It is the way the work gets done.', '100%', 'Accountability in every engagement', 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85'],
  leadership: ['How we lead', 'Clear direction, open doors, and room for better ideas.', '800+', 'People empowered to invent', 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85'],
  'service-platform-development': ['Platform lens', 'Architecture that keeps its promises when the load gets real.', '3x', 'Faster path from prototype to platform', 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85'],
  'service-hardware-design-services': ['Hardware lens', 'Every board is a balance of performance, power, and possibility.', '0.1mm', 'Precision where it counts', 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85'],
  'service-embedded-software': ['Firmware lens', 'The best embedded software disappears into the experience.', '24/7', 'Reliability engineered in', 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=1200&q=85'],
  'service-internet-of-things': ['Connected lens', 'Turn a collection of devices into one living system.', '360°', 'Visibility from device to decision', 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=85'],
  'service-artificial-intelligence': ['Intelligence lens', 'Useful AI starts with a useful question.', '10x', 'More signal from your data', 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=85'],
  'service-mobile-web': ['Experience lens', 'Make sophisticated systems feel clear at first touch.', 'A11y', 'Designed for more people', 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=85'],
  'service-cybersecurity': ['Security lens', 'Protection that is present before a threat arrives.', 'Zero', 'Shortcuts taken with trust', 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=85'],
  'service-cloud-services': ['Cloud lens', 'Infrastructure that gives your team more room to move.', '99.9%', 'Designed for dependable availability', 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85'],
  'industry-medical': ['Medical technology', 'When the stakes are human, precision has a purpose.', 'ISO', 'Quality-minded engineering', 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1600&q=80'],
  'industry-industrial': ['Industrial technology', 'Make operations safer, clearer, and ready for change.', '24/7', 'Built for working environments', 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1600&q=80'],
  'industry-consumer-electronics': ['Consumer technology', 'Performance is only half the product. The feeling matters too.', '01', 'Experience-led product thinking', 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=80'],
  'industry-semiconductor': ['Semiconductor technology', 'The smallest components can carry the biggest ambition.', 'nm', 'Thinking at the system level', 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80'],
  'design-verification': ['Design verification', 'Coverage that builds confidence.', 'RTL', 'Verified against intent', 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85'],
  'physical-design': ['Physical design', 'Silicon shaped for performance.', 'PPA', 'Power, performance, and area', 'https://images.unsplash.com/photo-1638734254958-4a11c989e9bb?auto=format&fit=crop&w=1200&q=85'],
  'verification-validation': ['Verification & validation', 'Evidence from block to system.', 'V&V', 'Requirements proven in practice', 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=85'],
  'rtl-design': ['RTL design', 'Logic with a clear path to silicon.', 'RTL', 'Designed for synthesis and scale', 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85'],
  'erp-sap': ['SAP solutions', 'Connected enterprise processes, built to evolve.', 'SAP', 'From implementation to optimization', 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85'],
  'erp-dynamics-365': ['Dynamics 365', 'Customer and operations, on the same page.', '365', 'Connected business applications', 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=85'],
  'erp-oracle': ['Oracle platforms', 'Enterprise systems, ready for what is next.', 'ERP', 'Modernize and integrate', 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85'],
  'erp-workday': ['Workday services', 'A clearer view of people and performance.', 'HCM', 'Connected people operations', 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85'],
  'product-1': ['Product story', 'Intelligence, close to where the action happens.', 'AI', 'Compute without the round trip', 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85'],
  'product-2': ['Product story', 'A clearer signal for a more responsive world.', 'µ', 'Precision sensing platform', 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85'],
  'product-3': ['Product story', 'The operational picture, brought into focus.', '∞', 'Connected improvement', 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85']
};

const serviceDetailContent = {
  'service-hardware-design-services': ['Hardware design services', 'Bring physical products from first schematic to a manufacturable design.', ['System architecture and component selection', 'PCB design, prototyping, and bring-up', 'Design verification and production handoff'], ['Electrical architecture', 'Prototype and validate', 'Prepare for scale']],
  'service-embedded-software': ['Embedded software', 'Create dependable firmware for products where timing, power, and reliability matter.', ['Bootloaders, drivers, and device middleware', 'Real-time control and low-power optimization', 'Testing, diagnostics, and lifecycle support'], ['Understand the device', 'Build the firmware', 'Validate in the field']],
  'service-internet-of-things': ['Internet of Things', 'Connect devices, data, and decisions into one useful operating picture.', ['IoT strategy and connected-device architecture', 'Secure telemetry and cloud data pipelines', 'Fleet monitoring and operational dashboards'], ['Connect the edge', 'Make data useful', 'Operate at scale']],
  'service-artificial-intelligence': ['Artificial intelligence', 'Turn data into practical intelligence your teams can act on.', ['Machine learning and computer vision solutions', 'Model deployment for cloud and edge environments', 'Responsible evaluation and performance monitoring'], ['Find the signal', 'Train the model', 'Put insight to work']],
  'service-mobile-web': ['Mobile & web', 'Design digital experiences that make complex products easy to use.', ['User research, journeys, and interface design', 'Responsive web and mobile application development', 'Accessibility, testing, analytics, and iteration'], ['Understand the user', 'Design the experience', 'Launch and learn']],
  'service-cybersecurity': ['Cybersecurity', 'Build protection into products, platforms, and operations from the beginning.', ['Security assessments and threat modelling', 'Secure development and identity controls', 'Vulnerability management and assurance'], ['Assess the exposure', 'Strengthen the system', 'Stay ready']],
  'service-cloud-services': ['Cloud services', 'Build cloud foundations that are secure, observable, and ready to evolve.', ['Cloud architecture and landing zones', 'DevOps, automation, and cost visibility', 'Monitoring, backup, resilience, and optimization'], ['Shape the foundation', 'Migrate with care', 'Improve continuously']]
};

function DetailPage({ pageKey, page, go }) {
  const visual = detailVisuals[pageKey];
  const isWhoWeAre = pageKey === 'who-we-are';
  const isWhatWeDo = pageKey === 'what-we-do';
  const category = pageKey.startsWith('service-') || pageKey.startsWith('erp-')
    ? 'services'
    : pageKey.startsWith('industry-')
      ? 'industries'
      : pageKey.startsWith('product-')
        ? 'products'
        : 'about';
  const whoWeAreDescriptions = [
    'Experienced engineers who connect product, software, hardware, and systems thinking to solve the whole problem.',
    'Clear communication and coordinated teams that keep decisions, dependencies, and progress visible.',
    'A partner who stays engaged from early direction through delivery, operation, and what comes next.'
  ];
  const whatWeDoDescriptions = [
    'We align on the people, constraints, and outcomes that matter before choosing a technical direction.',
    'Our specialists connect product, hardware, software, cloud, and automation into a solution built to work.',
    'We help launch, hand over, and continuously improve the result as real-world needs evolve.'
  ];

  return <>
    <PageHero eyebrow={page[0]} title={page[1]} text={page[2]} image={visual[4]} />
    <section className={`detail-content detail-${category}`}>
      <div><Eyebrow>Inside this practice</Eyebrow><h2>Built around<br /><em>your outcome.</em></h2></div>
      <div className="detail-copy">
        <p>{page[2]} We bring the right specialists together early, make trade-offs visible, and stay close through delivery so the result works beyond the demo.</p>
        <Button onClick={() => go('contact')}>Talk to our team</Button>
      </div>
    </section>
    <section className={`detail-highlight detail-${category}-highlight`}>
      <div><Eyebrow>{visual[0]}</Eyebrow><h2>{visual[1]}</h2></div>
      <div className="highlight-stat"><strong>{visual[2]}</strong><span>{visual[3]}</span></div>
    </section>
    <section className={`detail-points${isWhoWeAre ? ' detail-points-who-we-are' : ''}${isWhatWeDo ? ' detail-points-what-we-do' : ''}`}>
      {isWhoWeAre
        ? <div className="who-we-are-points-heading">
          <Eyebrow>What you get</Eyebrow>
          <h2>A team that sees<br /><em>the whole picture.</em></h2>
          <p>Bring the right expertise together, keep progress clear, and build a relationship that lasts beyond launch.</p>
        </div>
        : isWhatWeDo
          ? <div className="what-we-do-points-heading">
            <Eyebrow>What you get</Eyebrow>
            <h2>From first question<br /><em>to lasting impact.</em></h2>
            <p>A connected delivery journey keeps strategy, engineering, and ongoing support focused on the outcome.</p>
          </div>
        : <Eyebrow>What you get</Eyebrow>}
      <div className="detail-points-grid">
        {page[3].map((point, index) => <article key={point}>
          <span>0{index + 1}</span>
          <h3>{point}</h3>
          <p>{isWhoWeAre
            ? whoWeAreDescriptions[index]
            : isWhatWeDo
              ? whatWeDoDescriptions[index]
              : 'Clear thinking, practical execution, and an accountable partner at every step.'}</p>
          {isWhatWeDo && <ArrowUpRight aria-hidden="true" />}
        </article>)}
      </div>
    </section>
    <Cta go={go} />
  </>;
}

function ServiceDetailPage({ pageKey, go }) { const content = serviceDetailContent[pageKey]; const visual = detailVisuals[pageKey]; return <><PageHero eyebrow={`Purplenow / ${content[0]}`} title={`${content[0]} for<br /><em>real-world results.</em>`} text={detailPages[pageKey][2]} image={visual[4]} /><section className="service-detail-intro"><div><Eyebrow>Service focus</Eyebrow><h2>{content[1]}</h2></div><p>{detailPages[pageKey][2]} Purplenow brings strategy, engineering, and delivery together so your team gets a solution that can be operated, measured, and improved.</p><Button onClick={() => go('contact')}>Discuss your requirements</Button></section><section className="service-deliverables"><div className="section-top"><Eyebrow>What we deliver</Eyebrow><span>{content[0]} / Purplenow</span></div><div className="deliverable-grid">{content[2].map((item, index) => <article key={item}><span>0{index + 1}</span><h3>{item}</h3><p>Practical engineering shaped around your users, systems, constraints, and business goals.</p></article>)}</div></section><section className="service-approach"><div><Eyebrow>Our approach</Eyebrow><h2>Clear steps.<br /><em>Useful progress.</em></h2></div><div className="approach-list">{content[3].map((step, index) => <article key={step}><strong>0{index + 1}</strong><div><h3>{step}</h3><p>{['Align the problem, success measures, and the right technical path.', 'Build with visible decisions, focused collaboration, and quality from the start.', 'Handover with the documentation, insight, and support needed for what comes next.'][index]}</p></div></article>)}</div></section><section className="service-outcome"><Eyebrow>Why Purplenow</Eyebrow><h2>Engineering depth<br /><em>without the handoff maze.</em></h2><p>We work across product, platform, embedded, cloud, and application teams to keep decisions connected from the first workshop through ongoing improvement.</p><Button light onClick={() => go('contact')}>Start a conversation</Button></section></>; }

function PlatformDevelopment({ go }) { const pillars = [['01', 'Platform modernization', 'Transform legacy platforms into modern, secure, and high-performance digital ecosystems while protecting the business value already inside them.'], ['02', 'Product engineering', 'Take products from concept and design through development, testing, deployment, and continuous improvement with one connected team.'], ['03', 'Application development', 'Build custom web and mobile applications tailored to business requirements, user needs, and measurable growth.']]; return <><PageHero eyebrow="Purplenow / Platform development" title="Modern platforms for<br /><em>modern enterprise.</em>" text="We help organizations modernize legacy systems, engineer new products, and deliver secure digital applications that are ready for what comes next." image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85" /><section className="platform-statement"><div><Eyebrow>The opportunity</Eyebrow><h2>Keep what works.<br /><em>Change what holds you back.</em></h2></div><p>Platform development is not a rewrite for its own sake. We assess your current estate, preserve what creates value, remove unnecessary friction, and shape an architecture that can respond to the next business question.</p><Button onClick={() => go('contact')}>Plan your platform</Button></section><section className="platform-pillars"><div className="section-top"><Eyebrow>What we deliver</Eyebrow><span>Modernize / engineer / deploy</span></div><div className="platform-pillar-grid">{pillars.map(([number, title, text]) => <article key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p><ArrowUpRight /></article>)}</div></section><section className="platform-journey"><div><Eyebrow>A practical path</Eyebrow><h2>Progress you<br /><em>can measure.</em></h2></div><div className="journey-list"><article><strong>01 / Discover</strong><p>Map your platforms, users, dependencies, constraints, and the outcomes that matter most.</p></article><article><strong>02 / Design</strong><p>Shape a target architecture, migration plan, and delivery roadmap that earns confidence early.</p></article><article><strong>03 / Deliver</strong><p>Build, test, release, and enable your team to operate and continuously improve the platform.</p></article></div></section><Cta go={go} /></>; }

function HardwareDesign({ go }) { const disciplines = [['01', 'System architecture', 'Translate product requirements into power, compute, connectivity, sensing, and thermal decisions that work together.', Cpu], ['02', 'Schematic and PCB design', 'Create robust schematics and board layouts with signal integrity, power integrity, EMC, and serviceability in mind.', HardDrive], ['03', 'Prototype and bring-up', 'Move from first board to working hardware with structured lab bring-up, debug, measurements, and iteration.', Activity], ['04', 'Design for manufacture', 'Prepare a production-ready design with component strategy, test access, documentation, and supplier collaboration.', ShieldCheck]]; return <><PageHero eyebrow="Purplenow / Hardware design services" title="Physical products,<br /><em>designed to perform.</em>" text="From system architecture and schematic capture to prototype bring-up and production handoff, Purplenow helps teams build hardware they can trust." image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85" /><section className="hardware-intro"><div><Eyebrow>Hardware design</Eyebrow><h2>Every board is a<br /><em>business decision.</em></h2></div><p>Performance, power, cost, availability, reliability, and time to market are connected. Our engineers make those trade-offs visible early and design the electronics around the product you need to ship.</p><Button onClick={() => go('contact')}>Start a hardware conversation</Button></section><section className="hardware-disciplines"><div className="section-top"><Eyebrow>What we do</Eyebrow><span>Architecture / electronics / validation / scale</span></div><div className="hardware-discipline-grid">{disciplines.map(([number, title, text, Icon]) => <article key={title}><span>{number}</span><Icon size={28} /><h3>{title}</h3><p>{text}</p><ArrowUpRight /></article>)}</div></section><section className="hardware-stack"><div className="stack-visual"><div className="stack-chip"><Cpu size={38} /></div><span className="stack-label label-power">POWER</span><span className="stack-label label-data">DATA</span><span className="stack-label label-sense">SENSE</span><span className="stack-label label-connect">CONNECT</span></div><div><Eyebrow>Designing the whole system</Eyebrow><h2>Hardware is where<br /><em>the product begins.</em></h2><p>We look beyond the PCB. Mechanical constraints, firmware dependencies, manufacturing realities, and the user experience all shape the right design.</p><div className="hardware-tags"><span>IoT devices</span><span>Embedded systems</span><span>Industrial equipment</span><span>Connected products</span></div></div></section><section className="hardware-lifecycle"><div><Eyebrow>Development lifecycle</Eyebrow><h2>A disciplined path<br />from idea to <em>assembly.</em></h2></div><div className="hardware-lifecycle-list"><article><strong>01 / Define</strong><p>Requirements, use cases, constraints, architecture, and component strategy.</p></article><article><strong>02 / Design</strong><p>Schematics, layout, simulation, design reviews, and prototype preparation.</p></article><article><strong>03 / Prove</strong><p>Bring-up, functional testing, environmental checks, and design iteration.</p></article><article><strong>04 / Release</strong><p>Manufacturing files, test strategy, documentation, and production support.</p></article></div></section><section className="hardware-outcome"><Eyebrow>Why Purplenow</Eyebrow><h2>Fewer surprises<br /><em>after the prototype.</em></h2><p>Our cross-functional teams connect hardware, embedded software, cloud, and product engineering early, helping you reach a reliable, manufacturable design with confidence.</p><Button light onClick={() => go('contact')}>Talk to our engineers</Button></section></>; }

function EmbeddedSoftware({ go }) { const layers = [['01', 'MCU firmware', 'Efficient bare-metal and RTOS firmware for microcontrollers handling sensing, control, timing, and low-power operation.', Cpu], ['02', 'MPU and Linux systems', 'Production-grade board support packages, boot flows, drivers, and embedded Linux for application processors.', HardDrive], ['03', 'Connectivity and edge', 'Reliable interfaces for Ethernet, Wi-Fi, Bluetooth, cellular, CAN, USB, and secure device-to-cloud communication.', Network], ['04', 'Diagnostics and security', 'Observability, secure boot, OTA updates, identity, fault handling, and lifecycle protection built into the device.', ShieldCheck]]; return <><PageHero eyebrow="Purplenow / Embedded software" title="Software that brings<br /><em>hardware to life.</em>" text="Purplenow builds embedded software for products that need to respond precisely, consume power wisely, and keep working in the real world." image="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=1200&q=85" /><section className="embedded-intro"><div><Eyebrow>Embedded engineering</Eyebrow><h2>Close to the metal.<br /><em>Connected to the outcome.</em></h2></div><p>Good embedded software is a bridge between silicon and experience. We work across MCU and MPU platforms to create firmware that is testable, maintainable, secure, and ready for production.</p><Button onClick={() => go('contact')}>Discuss your device</Button></section><section className="embedded-layers"><div className="section-top"><Eyebrow>Our embedded capability</Eyebrow><span>MCU / MPU / RTOS / Linux</span></div><div className="embedded-layer-grid">{layers.map(([number, title, text, Icon]) => <article key={title}><span>{number}</span><Icon size={28} /><h3>{title}</h3><p>{text}</p><ArrowUpRight /></article>)}</div></section><section className="embedded-architecture"><div className="architecture-visual"><div className="architecture-node node-app">APPLICATION</div><div className="architecture-node node-os">RTOS / LINUX</div><div className="architecture-node node-bsp">BSP / DRIVERS</div><div className="architecture-node node-hw">MCU / MPU</div></div><div><Eyebrow>Layered by design</Eyebrow><h2>Every layer has<br /><em>a job to do.</em></h2><p>We align application behavior, operating system choices, board support, drivers, and hardware constraints so the complete device behaves as one reliable system.</p><div className="embedded-tags"><span>FreeRTOS</span><span>Embedded Linux</span><span>Zephyr</span><span>Yocto</span><span>Secure OTA</span></div></div></section><section className="embedded-services"><div><Eyebrow>Detailed services</Eyebrow><h2>From first boot<br />to <em>field support.</em></h2></div><div className="embedded-service-list"><article><strong>Board support and bring-up</strong><p>Bootloaders, BSPs, peripheral drivers, hardware abstraction, and first-board validation.</p></article><article><strong>Real-time control</strong><p>Deterministic tasks, interrupt handling, scheduling, sensor fusion, and control loops for responsive products.</p></article><article><strong>Power and performance</strong><p>Profiling, memory discipline, boot-time improvement, thermal awareness, and battery-conscious design.</p></article><article><strong>Lifecycle engineering</strong><p>Testing, diagnostics, secure updates, release management, documentation, and long-term maintenance.</p></article></div></section><section className="embedded-outcome"><Eyebrow>Why Purplenow</Eyebrow><h2>Firmware that earns<br /><em>its place in the product.</em></h2><p>Our embedded engineers collaborate with hardware, cloud, AI, and application teams so the software is not an isolated layer. It is the dependable center of the product experience.</p><Button light onClick={() => go('contact')}>Talk to our engineers</Button></section></>; }

function InternetOfThings({ go }) { const capabilities = [['01', 'IoT strategy and architecture', 'Define the device, connectivity, data, and operating model that turns an IoT idea into a useful business system.', Network], ['02', 'Connected device engineering', 'Bring together sensors, gateways, firmware, identity, and secure communication for dependable edge experiences.', Cpu], ['03', 'Data and cloud integration', 'Stream telemetry into cloud services, APIs, storage, analytics, and applications that teams can act on.', Cloud], ['04', 'Fleet operations', 'Monitor device health, manage configurations, release OTA updates, and support connected products at scale.', Globe2]]; return <><PageHero eyebrow="Purplenow / Internet of Things" title="Connect the physical world<br /><em>to better decisions.</em>" text="Purplenow designs IoT systems that connect devices, data, and people from the edge to the enterprise." image="https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1600&q=80" /><section className="iot-intro"><div><Eyebrow>IoT engineering</Eyebrow><h2>A connected product<br /><em>is a living system.</em></h2></div><p>Successful IoT goes beyond putting a sensor online. It needs a clear purpose, reliable connectivity, secure data flows, and an operating model that stays useful long after launch.</p><Button onClick={() => go('contact')}>Plan your IoT system</Button></section><section className="iot-capabilities"><div className="section-top"><Eyebrow>Our connected capability</Eyebrow><span>Edge / network / cloud / operations</span></div><div className="iot-capability-grid">{capabilities.map(([number, title, text, Icon]) => <article key={title}><span>{number}</span><Icon size={28} /><h3>{title}</h3><p>{text}</p><ArrowUpRight /></article>)}</div></section><section className="iot-flow"><div className="iot-flow-visual"><div className="iot-flow-node flow-device">DEVICE</div><div className="iot-flow-node flow-gateway">GATEWAY</div><div className="iot-flow-node flow-cloud">CLOUD</div><div className="iot-flow-node flow-action">ACTION</div><div className="iot-flow-line" /></div><div><Eyebrow>Designed end to end</Eyebrow><h2>From signal<br />to <em>action.</em></h2><p>We connect the complete journey: a device observes something, a secure network carries it, cloud services make sense of it, and an application helps someone act.</p><div className="iot-tags"><span>Smart assets</span><span>Industrial IoT</span><span>Remote monitoring</span><span>Predictive insight</span></div></div></section><section className="iot-services"><div><Eyebrow>Detailed services</Eyebrow><h2>Useful at the<br /><em>edge and beyond.</em></h2></div><div className="iot-service-list"><article><strong>Device and gateway development</strong><p>Sensor integration, edge processing, gateway software, provisioning, and device lifecycle design.</p></article><article><strong>Connectivity engineering</strong><p>Wi-Fi, Bluetooth, cellular, Ethernet, LoRaWAN, MQTT, and resilient network behavior.</p></article><article><strong>IoT data platforms</strong><p>Ingestion, APIs, device twins, time-series data, rules, analytics, and application integration.</p></article><article><strong>Security and observability</strong><p>Identity, secure onboarding, encrypted communication, access control, monitoring, and incident response.</p></article></div></section><section className="iot-outcome"><Eyebrow>Why Purplenow</Eyebrow><h2>Connected for a reason.<br /><em>Built for what follows.</em></h2><p>Our product, embedded, cloud, AI, and application teams work as one so your IoT solution creates measurable value instead of another disconnected stream of data.</p><Button light onClick={() => go('contact')}>Talk to our IoT team</Button></section></>; }

function ArtificialIntelligence({ go }) { const capabilities = [['01', 'AI strategy and use cases', 'Find the opportunities where intelligent automation, prediction, or decision support can create measurable value.', BrainCircuit], ['02', 'Machine learning', 'Build models for forecasting, classification, recommendation, anomaly detection, and intelligent optimization.', Activity], ['03', 'Computer vision', 'Turn images and video into useful signals for inspection, safety, quality, and operational awareness.', Microscope], ['04', 'Generative and conversational AI', 'Design grounded assistants and knowledge experiences that help people find, create, and act with confidence.', Sparkles]]; return <><PageHero eyebrow="Purplenow / Artificial intelligence" title="Make intelligence<br /><em>practical.</em>" text="Purplenow helps modern enterprises move AI from an interesting experiment to a useful capability inside the products and operations that matter." image="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80" /><section className="ai-intro"><div><Eyebrow>Artificial intelligence</Eyebrow><h2>Start with the<br /><em>right question.</em></h2></div><p>Good AI is not about adding a model everywhere. It is about understanding the decision, data, user, and operating context well enough to build something people can trust and use.</p><Button onClick={() => go('contact')}>Explore an AI use case</Button></section><section className="ai-capabilities"><div className="section-top"><Eyebrow>What we do</Eyebrow><span>Strategy / models / experiences / operations</span></div><div className="ai-capability-grid">{capabilities.map(([number, title, text, Icon]) => <article key={title}><span>{number}</span><Icon size={28} /><h3>{title}</h3><p>{text}</p><ArrowUpRight /></article>)}</div></section><section className="ai-spectrum"><div className="ai-spectrum-visual"><div className="ai-core"><BrainCircuit size={42} /></div><div className="ai-orbit orbit-a" /><div className="ai-orbit orbit-b" /><span className="ai-label label-data">DATA</span><span className="ai-label label-model">MODEL</span><span className="ai-label label-impact">IMPACT</span></div><div><Eyebrow>Intelligence across the stack</Eyebrow><h2>From raw data<br />to <em>real action.</em></h2><p>We connect data foundations, model development, user experience, and operational feedback so intelligence improves over time instead of becoming a one-off demo.</p><div className="ai-tags"><span>Predictive analytics</span><span>Computer vision</span><span>Generative AI</span><span>Edge inference</span></div></div></section><section className="ai-services"><div><Eyebrow>Detailed services</Eyebrow><h2>Built for the<br /><em>whole lifecycle.</em></h2></div><div className="ai-service-list"><article><strong>Data readiness</strong><p>Data discovery, quality assessment, labelling strategy, pipelines, feature engineering, and governance foundations.</p></article><article><strong>Model engineering</strong><p>Experimentation, training, evaluation, optimization, deployment, and performance measurement across cloud and edge.</p></article><article><strong>AI product experiences</strong><p>Human-centred interfaces, copilots, recommendations, alerts, and workflows that make model output useful.</p></article><article><strong>MLOps and governance</strong><p>Versioning, observability, drift monitoring, access controls, responsible use, and continuous improvement.</p></article></div></section><section className="ai-journey"><div><Eyebrow>A practical path</Eyebrow><h2>Useful from<br /><em>day one.</em></h2></div><div className="ai-journey-list"><article><strong>01 / Frame</strong><p>Define the user, decision, success measure, and constraints.</p></article><article><strong>02 / Prove</strong><p>Test data quality and model value with a focused proof of concept.</p></article><article><strong>03 / Productize</strong><p>Build the experience, deployment path, monitoring, and ownership model.</p></article><article><strong>04 / Improve</strong><p>Measure outcomes, learn from feedback, and evolve the system responsibly.</p></article></div></section><section className="ai-outcome"><Eyebrow>Why Purplenow</Eyebrow><h2>AI with a job<br /><em>to do.</em></h2><p>Our AI, software, embedded, cloud, and product teams work together to make intelligence understandable, deployable, and valuable in the real environment where it will be used.</p><Button light onClick={() => go('contact')}>Talk to our AI team</Button></section></>; }

function MobileWeb({ go }) { const capabilities = [['01', 'Web platforms', 'Responsive, accessible web applications that perform across devices, browsers, and real-world network conditions.', Globe2], ['02', 'Mobile applications', 'Native and cross-platform experiences for iOS and Android, from first interaction through release and support.', Smartphone], ['03', 'Frontend and backend', 'Composable interfaces, APIs, services, integrations, data flows, and cloud foundations built as one product.', Network], ['04', 'Quality and security', 'Automated testing, accessibility, observability, identity, privacy, and performance built into delivery.', ShieldCheck]]; return <><PageHero eyebrow="Purplenow / Mobile & web" title="Digital products people<br /><em>know how to use.</em>" text="Purplenow designs and develops mobile and web experiences that are clear, fast, accessible, and connected to the systems behind them." image="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=85" /><section className="mobile-intro"><div><Eyebrow>Mobile and web development</Eyebrow><h2>Make complex<br /><em>feel natural.</em></h2></div><p>Great digital products are more than a polished interface. They make the next action obvious, respond quickly, protect user trust, and work consistently wherever the interaction happens.</p><Button onClick={() => go('contact')}>Plan your digital product</Button></section><section className="mobile-capabilities"><div className="section-top"><Eyebrow>What we build</Eyebrow><span>Experience / application / platform / quality</span></div><div className="mobile-capability-grid">{capabilities.map(([number, title, text, Icon]) => <article key={title}><span>{number}</span><Icon size={28} /><h3>{title}</h3><p>{text}</p><ArrowUpRight /></article>)}</div></section><section className="mobile-stack"><div className="mobile-stack-visual"><div className="mobile-device"><div className="device-screen"><span /><span /><span /><span /></div></div><div className="stack-circle circle-one" /><div className="stack-circle circle-two" /></div><div><Eyebrow>Designed across the stack</Eyebrow><h2>Every screen is<br /><em>part of a system.</em></h2><p>We connect research, design, frontend, backend, APIs, data, cloud, analytics, and support so your digital product stays coherent from first tap to long-term operation.</p><div className="mobile-tags"><span>React</span><span>React Native</span><span>TypeScript</span><span>Node.js</span><span>REST and GraphQL</span><span>Cloud-native</span></div></div></section><section className="mobile-services"><div><Eyebrow>Detailed services</Eyebrow><h2>Built for the<br /><em>full experience.</em></h2></div><div className="mobile-service-list"><article><strong>Product and UX design</strong><p>Research, user journeys, information architecture, interaction design, visual systems, and rapid validation.</p></article><article><strong>Application engineering</strong><p>Modern frontend and backend development for customer portals, enterprise tools, commerce, and connected products.</p></article><article><strong>Mobile delivery</strong><p>iOS, Android, and cross-platform applications with device-aware experiences, release management, and analytics.</p></article><article><strong>Performance and accessibility</strong><p>Core Web Vitals, responsive behavior, keyboard access, screen-reader support, automated tests, and continuous improvement.</p></article></div></section><section className="mobile-journey"><div><Eyebrow>Our delivery path</Eyebrow><h2>From first flow<br />to <em>lasting product.</em></h2></div><div className="mobile-journey-list"><article><strong>01 / Discover</strong><p>Understand users, business goals, constraints, and the moments that matter.</p></article><article><strong>02 / Shape</strong><p>Prototype the experience and define the technical foundation before scale adds weight.</p></article><article><strong>03 / Build</strong><p>Deliver in focused increments with quality, feedback, and visibility built in.</p></article><article><strong>04 / Evolve</strong><p>Use analytics, support insight, and product learning to improve what comes next.</p></article></div></section><section className="mobile-outcome"><Eyebrow>Why Purplenow</Eyebrow><h2>Technology that<br /><em>meets people well.</em></h2><p>Our product, application, embedded, cloud, and AI teams help digital experiences connect to the real systems and real people they serve.</p><Button light onClick={() => go('contact')}>Talk to our product team</Button></section></>; }

function Cybersecurity({ go }) { const capabilities = [['01', 'Security assessment', 'Understand the exposure across applications, cloud, networks, devices, identities, and operational processes.', ShieldCheck], ['02', 'Threat modelling', 'Identify realistic attack paths early and make security decisions part of architecture and product design.', Crosshair], ['03', 'Network and cloud security', 'Protect environments with segmentation, firewall strategy, secure access, monitoring, and resilient configuration.', Network], ['04', 'Secure product engineering', 'Build safer software with secure coding, dependency controls, secrets management, testing, and release gates.', HardDrive]]; return <><PageHero eyebrow="Purplenow / Cybersecurity" title="Build trust into<br /><em>every layer.</em>" text="Purplenow helps organizations understand risk, protect critical systems, and make security a practical part of how products are built and operated." image="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=85" /><section className="security-intro"><div><Eyebrow>Cybersecurity services</Eyebrow><h2>Protection should be<br /><em>part of the design.</em></h2></div><p>Security is strongest when it is considered before deployment, measured during operation, and improved as threats change. Our engineers connect product, cloud, network, identity, and operational security.</p><Button onClick={() => go('contact')}>Assess your security posture</Button></section><section className="security-capabilities"><div className="section-top"><Eyebrow>What we secure</Eyebrow><span>Product / platform / network / people</span></div><div className="security-capability-grid">{capabilities.map(([number, title, text, Icon]) => <article key={title}><span>{number}</span><Icon size={28} /><h3>{title}</h3><p>{text}</p><ArrowUpRight /></article>)}</div></section><section className="security-operations"><div className="security-shield"><ShieldCheck size={68} /><span>READY</span></div><div><Eyebrow>Security operations</Eyebrow><h2>Know what is happening<br /><em>before it becomes a problem.</em></h2><p>Establish practical visibility across your environment with logging, alerting, vulnerability tracking, incident playbooks, and a clear path from signal to response.</p><div className="security-tags"><span>Identity and access</span><span>Endpoint protection</span><span>Vulnerability management</span><span>Incident readiness</span></div></div></section><section className="security-services"><div><Eyebrow>Detailed services</Eyebrow><h2>Security for the<br /><em>full lifecycle.</em></h2></div><div className="security-service-list"><article><strong>Application and API security</strong><p>Threat-aware design reviews, authentication, authorization, input controls, API protection, and security testing.</p></article><article><strong>Cloud and infrastructure security</strong><p>Secure landing zones, configuration review, network controls, encryption, backup resilience, and access policies.</p></article><article><strong>Security testing and assurance</strong><p>Vulnerability assessment, penetration testing coordination, remediation guidance, and evidence for assurance activities.</p></article><article><strong>Managed security support</strong><p>Ongoing monitoring, patch coordination, incident triage, reporting, and continuous improvement for operational confidence.</p></article></div></section><section className="security-journey"><div><Eyebrow>A practical path</Eyebrow><h2>Reduce risk<br /><em>with intent.</em></h2></div><div className="security-journey-list"><article><strong>01 / See</strong><p>Map assets, identities, vulnerabilities, dependencies, and likely attack paths.</p></article><article><strong>02 / Prioritize</strong><p>Focus effort on the risks most likely to affect people, operations, and trust.</p></article><article><strong>03 / Strengthen</strong><p>Implement controls, improve engineering habits, and make response repeatable.</p></article><article><strong>04 / Improve</strong><p>Measure, learn, test, and adapt as the environment and threat landscape evolve.</p></article></div></section><section className="security-outcome"><Eyebrow>Why Purplenow</Eyebrow><h2>Security that helps<br /><em>the business move.</em></h2><p>Our product, embedded, cloud, networking, and managed-service teams make protection practical without turning delivery into friction.</p><Button light onClick={() => go('contact')}>Talk to our security team</Button></section></>; }

function CloudServices({ go }) { const capabilities = [['01', 'Cloud architecture', 'Design secure landing zones and operating foundations across Azure, AWS, and Google Cloud.', Cloud], ['02', 'Networking solutions', 'Connect sites, users, data centres, and cloud environments with resilient routing, segmentation, and secure access.', Network], ['03', 'Migration and modernization', 'Move workloads from on-premises, VMware, or another cloud with the right balance of lift-and-shift and redesign.', HardDrive], ['04', 'Data engineering', 'Build reliable pipelines, storage, governance, and analytics foundations that make enterprise data useful.', Activity]]; return <><PageHero eyebrow="Purplenow / Cloud services" title="Cloud foundations for<br /><em>what comes next.</em>" text="Purplenow helps enterprises design, migrate, secure, and operate cloud environments across infrastructure, networking, data, and productivity." image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80" /><section className="cloud-intro"><div><Eyebrow>Cloud services</Eyebrow><h2>Move with clarity.<br /><em>Operate with confidence.</em></h2></div><p>Cloud is not one destination. It is a foundation for better applications, resilient operations, useful data, and teams that can respond faster. We help you choose the right path and make it work.</p><Button onClick={() => go('contact')}>Plan your cloud journey</Button></section><section className="cloud-capabilities"><div className="section-top"><Eyebrow>Our cloud capability</Eyebrow><span>Architecture / network / migration / data</span></div><div className="cloud-capability-grid">{capabilities.map(([number, title, text, Icon]) => <article key={title}><span>{number}</span><Icon size={28} /><h3>{title}</h3><p>{text}</p><ArrowUpRight /></article>)}</div></section><section className="cloud-providers"><div className="provider-orbit"><span className="provider-core">CLOUD<br />OPERATIONS</span><span className="provider azure">AZURE</span><span className="provider aws">AWS</span><span className="provider gcp">GCP</span></div><div><Eyebrow>Multi-cloud by design</Eyebrow><h2>One operating view<br /><em>across your stack.</em></h2><p>Use the cloud services that fit each workload while keeping identity, security, cost, networking, monitoring, and support understandable across the whole environment.</p><div className="provider-tags"><span>Microsoft 365</span><span>Hybrid cloud</span><span>Backup and DR</span><span>FinOps visibility</span></div></div></section><section className="cloud-services-detail"><div><Eyebrow>Detailed services</Eyebrow><h2>From first landing zone<br />to <em>daily operations.</em></h2></div><div className="cloud-service-list"><article><strong>Lift and shift</strong><p>Move suitable workloads quickly with discovery, dependency mapping, right-sizing, cutover planning, and post-migration stabilization.</p></article><article><strong>Cloud modernization</strong><p>Refactor or re-platform applications where containers, managed services, automation, and elastic scale create a better result.</p></article><article><strong>Microsoft 365 and productivity</strong><p>Support Microsoft 365 adoption, identity, collaboration, security, administration, and user enablement.</p></article><article><strong>Data engineering</strong><p>Design ingestion, transformation, lakehouse, warehouse, governance, reporting, and analytics workflows that teams can trust.</p></article><article><strong>Network and security</strong><p>Plan hybrid connectivity, segmentation, firewall policy, secure remote access, resilience, and operational visibility.</p></article></div></section><section className="cloud-migrations"><div><Eyebrow>Migration paths</Eyebrow><h2>Choose the route<br /><em>that fits.</em></h2></div><div className="migration-route-grid"><article><span>01</span><h3>On-premises to cloud</h3><p>Assess applications, map dependencies, select landing zones, migrate in waves, and validate the new operating model.</p></article><article><span>02</span><h3>Cloud to cloud</h3><p>Re-architect or relocate workloads between Azure, AWS, and GCP with controlled data movement and cutover.</p></article><article><span>03</span><h3>VMware to cloud</h3><p>Modernize virtualized estates through right-sizing, workload classification, and a practical hybrid transition plan.</p></article></div></section><section className="cloud-outcome"><Eyebrow>Why Purplenow</Eyebrow><h2>Cloud that improves<br /><em>the way work moves.</em></h2><p>Our certified cloud, networking, security, data, and support engineers stay with your environment beyond migration, helping it remain secure, observable, and ready to evolve.</p><Button light onClick={() => go('contact')}>Talk to our cloud team</Button></section></>; }

function Manufacturing({ go }) { const capabilities = [['01', 'Design for manufacture', 'Turn a proven design into a repeatable product with practical choices around materials, tolerances, assembly, and cost.', HardDrive], ['02', 'Prototype and pilot build', 'Use prototypes and pilot runs to expose production risks, validate the process, and learn before volume.', Cpu], ['03', 'Test and quality engineering', 'Create test fixtures, acceptance criteria, traceability, inspection plans, and evidence for consistent output.', ShieldCheck], ['04', 'Production transfer', 'Move knowledge from engineering to manufacturing with documentation, supplier alignment, training, and controlled release.', Activity]]; return <><PageHero eyebrow="Purplenow / Manufacturing" title="Ready to make it<br /><em>real at scale.</em>" text="Purplenow helps product teams move from engineering design to repeatable manufacturing with fewer surprises and clearer decisions." image="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=85" /><section className="manufacturing-intro"><div><Eyebrow>Manufacturing engineering</Eyebrow><h2>Design for the<br /><em>line, not just the lab.</em></h2></div><p>A product is not finished when the prototype works. We connect design intent, assembly, test, suppliers, quality, firmware, and support so the product can be built consistently and improved over time.</p><Button onClick={() => go('contact')}>Plan your production path</Button></section><section className="manufacturing-capabilities"><div className="section-top"><Eyebrow>What we deliver</Eyebrow><span>DFM / DFA / test / transfer</span></div><div className="manufacturing-capability-grid">{capabilities.map(([number, title, text, Icon]) => <article key={title}><span>{number}</span><Icon size={28} /><h3>{title}</h3><p>{text}</p><ArrowUpRight /></article>)}</div></section><section className="manufacturing-line"><div className="line-visual"><div className="line-track"><span /><span /><span /><span /></div><div className="line-box box-one">DESIGN</div><div className="line-box box-two">TEST</div><div className="line-box box-three">BUILD</div></div><div><Eyebrow>Engineering to production</Eyebrow><h2>Make quality<br /><em>repeatable.</em></h2><p>We help teams identify the process controls, measurements, and documentation needed to make each build predictable, from first article through sustained production.</p><div className="manufacturing-tags"><span>DFM</span><span>DFA</span><span>First article</span><span>Production test</span><span>Traceability</span></div></div></section><section className="manufacturing-services"><div><Eyebrow>Detailed services</Eyebrow><h2>Every handoff<br /><em>made visible.</em></h2></div><div className="manufacturing-service-list"><article><strong>Design for manufacturing and assembly</strong><p>Review components, tolerances, materials, fasteners, assembly sequence, serviceability, and cost drivers before release.</p></article><article><strong>Production test strategy</strong><p>Define functional tests, fixtures, calibration, firmware loading, inspection points, yield signals, and failure handling.</p></article><article><strong>Supplier and process readiness</strong><p>Support supplier conversations, approved alternatives, BOM readiness, documentation, work instructions, and pilot planning.</p></article><article><strong>Quality and traceability</strong><p>Build acceptance criteria, inspection records, defect feedback loops, change control, and product genealogy where it matters.</p></article><article><strong>Sustaining engineering</strong><p>Improve yield, manage component changes, investigate field issues, and keep the product healthy through its production life.</p></article></div></section><section className="manufacturing-journey"><div><Eyebrow>Production lifecycle</Eyebrow><h2>From first article<br />to <em>steady state.</em></h2></div><div className="manufacturing-journey-list"><article><strong>01 / Prepare</strong><p>Align design, process, test, suppliers, quality, and documentation for the build ahead.</p></article><article><strong>02 / Pilot</strong><p>Run a controlled build, measure the process, and resolve the risks that only production reveals.</p></article><article><strong>03 / Release</strong><p>Transfer a complete, understood, and supported product into repeatable manufacturing.</p></article><article><strong>04 / Improve</strong><p>Use yield, test, service, and field data to make the product and process better.</p></article></div></section><section className="manufacturing-outcome"><Eyebrow>Why Purplenow</Eyebrow><h2>Build confidence<br /><em>before volume.</em></h2><p>Our hardware, embedded, platform, industrial, and quality engineers work together to help products cross the gap between “it works” and “it can be made well.”</p><Button light onClick={() => go('contact')}>Talk to our manufacturing team</Button></section></>; }

function Leadership({ go }) { const team = [['Executive direction', 'Aligning technology investment with the outcomes modern enterprises need.', 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85'], ['Engineering leadership', 'Creating the technical standards, habits, and space for great work to happen.', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85'], ['Delivery leadership', 'Connecting teams, customers, and decisions so momentum never becomes noise.', 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85'], ['People leadership', 'Growing a culture where curiosity is supported and accountability is shared.', 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=85']]; return <><PageHero eyebrow="Leadership at Purplenow" title="A team that leads<br /><em>from the front.</em>" text="Purplenow is guided by people who understand that good leadership is equal parts clarity, curiosity, and care." image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85" /><section className="leadership-intro"><div><Eyebrow>Our leadership principle</Eyebrow><h2>Make the hard<br />things <em>clear.</em></h2></div><p>Our leaders stay close to the work and the people doing it. They set direction, make room for expertise, and keep every engagement connected to a real customer or business outcome.</p></section><section className="team-section"><div className="section-top"><Eyebrow>Meet the team behind the work</Eyebrow><span>Direction / craft / delivery / culture</span></div><div className="team-grid">{team.map(([role, text, image]) => <article key={role}><div className="team-photo" style={{ backgroundImage: `url(${image})` }} /><div className="team-info"><span>Purplenow LEADERSHIP</span><h3>{role}</h3><p>{text}</p><button onClick={() => go('contact')}>Connect with our team <ArrowUpRight size={15} /></button></div></article>)}</div></section><section className="leadership-quote"><p>“The best work happens when expertise is trusted, the goal is shared, and everyone can see how their contribution matters.”</p><span>Purplenow leadership team</span></section><Cta go={go} /></>; }

function MedicalIndustry({ go }) { const capabilities = [['Medical device development', 'From early concept and system architecture to prototypes, verification, and production support.', Stethoscope], ['Biosensors and diagnostics', 'Develop sensing experiences that translate biological signals into reliable, actionable information.', Microscope], ['Embedded and connected care', 'Build low-power firmware, secure connectivity, and clinician-friendly workflows around the device.', Activity], ['Quality and validation', 'Create traceable engineering processes with testing, documentation, and risk-aware delivery.', FlaskConical]]; return <><PageHero eyebrow="Purplenow for medical technology" title="Engineering care into<br /><em>every device.</em>" text="We help medical technology teams turn important ideas into dependable devices, biosensors, and connected care experiences." image="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1600&q=80" /><section className="medical-intro"><div><Eyebrow>Medical industry</Eyebrow><h2>When the stakes are human,<br /><em>precision has a purpose.</em></h2></div><p>Medical products need more than technical performance. They need thoughtful interfaces, dependable sensing, careful validation, and an engineering partner who understands that every detail can influence a real experience.</p><Button onClick={() => go('contact')}>Discuss your device</Button></section><section className="medical-capabilities"><div className="section-top"><Eyebrow>What we develop</Eyebrow><span>Device / data / experience / trust</span></div><div className="medical-capability-grid">{capabilities.map(([title, text, Icon], index) => <article key={title}><span>0{index + 1}</span><Icon size={28} /><h3>{title}</h3><p>{text}</p><ArrowUpRight /></article>)}</div></section><section className="medical-systems"><div className="medical-systems-visual"><div className="pulse-line"><span /><span /><span /><span /><span /></div><div className="medical-ring"><Activity size={42} /></div></div><div><Eyebrow>Designed as a system</Eyebrow><h2>From signal<br />to <em>confidence.</em></h2><p>Our teams connect the physical device, sensing layer, embedded intelligence, software, and operational workflow. That systems view helps teams reduce handoffs and make better decisions earlier.</p><div className="medical-tags"><span>Wearable devices</span><span>Patient monitoring</span><span>Diagnostic platforms</span><span>Connected equipment</span></div></div></section><section className="medical-journey"><div><Eyebrow>Development pathway</Eyebrow><h2>A careful path<br />to <em>care.</em></h2></div><div className="medical-journey-list"><article><strong>01 / Understand</strong><p>Clarify the clinical need, users, environment, and risk profile.</p></article><article><strong>02 / Engineer</strong><p>Prototype the device, biosensor, firmware, and experience as one connected product.</p></article><article><strong>03 / Validate</strong><p>Test performance, usability, security, and reliability with evidence at every stage.</p></article><article><strong>04 / Enable</strong><p>Prepare documentation, production handoff, support, and the next product iteration.</p></article></div></section><Cta go={go} /></>; }

function IndustrialIndustry({ go }) { const capabilities = [['01', 'PLC and control systems', 'Engineer programmable logic control for sequencing, motion, safety interlocks, machine control, and plant-floor automation.', Cpu], ['02', 'SCADA and HMI', 'Connect supervisory control, alarms, trends, dashboards, and operator workflows into a clearer view of operations.', Activity], ['03', 'Industrial connectivity', 'Integrate Modbus RTU/TCP, OPC UA, CAN, Ethernet/IP, MQTT, and gateway patterns across equipment and enterprise systems.', Network], ['04', 'Firmware and RTOS', 'Develop deterministic embedded software for controllers, sensors, gateways, and edge devices in demanding environments.', Zap]]; return <><PageHero eyebrow="Purplenow for industrial technology" title="Make operations<br /><em>think in real time.</em>" text="Purplenow helps industrial teams connect automation, control, firmware, and operational data to improve visibility, uptime, and response." image="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1600&q=80" /><section className="industrial-intro"><div><Eyebrow>Industrial automation</Eyebrow><h2>Control the process.<br /><em>See the bigger picture.</em></h2></div><p>Modern industrial systems need reliable control at the machine and useful insight at the enterprise level. We connect those layers without losing sight of safety, uptime, maintainability, or the operators who depend on them.</p><Button onClick={() => go('contact')}>Discuss your automation</Button></section><section className="industrial-capabilities"><div className="section-top"><Eyebrow>What we engineer</Eyebrow><span>Control / supervise / connect / optimize</span></div><div className="industrial-capability-grid">{capabilities.map(([number, title, text, Icon]) => <article key={title}><span>{number}</span><Icon size={28} /><h3>{title}</h3><p>{text}</p><ArrowUpRight /></article>)}</div></section><section className="industrial-control"><div className="control-visual"><div className="control-grid" /><div className="control-panel"><span>RUN</span><span>PLC</span><span>SCADA</span><span>EDGE</span></div><div className="control-pulse" /></div><div><Eyebrow>From machine to management</Eyebrow><h2>One connected<br /><em>operating picture.</em></h2><p>We help plant-floor signals travel safely from sensors and PLCs through gateways, SCADA, and data platforms so teams can understand what is happening and decide what to do next.</p><div className="industrial-tags"><span>Factory automation</span><span>Process control</span><span>Remote monitoring</span><span>Edge analytics</span></div></div></section><section className="industrial-services"><div><Eyebrow>Detailed services</Eyebrow><h2>Engineering for<br /><em>working environments.</em></h2></div><div className="industrial-service-list"><article><strong>PLC programming and integration</strong><p>Logic design, sequencing, motion, I/O mapping, commissioning, interlocks, and integration with existing control equipment.</p></article><article><strong>SCADA and HMI development</strong><p>Supervisory screens, alarms, trends, historian integration, role-based views, reporting, and operator-focused workflows.</p></article><article><strong>Modbus and protocol integration</strong><p>Modbus RTU and TCP, OPC UA, CAN, MQTT, Ethernet/IP, serial devices, gateways, data mapping, and protocol diagnostics.</p></article><article><strong>Firmware and RTOS engineering</strong><p>MCU firmware, real-time tasks, drivers, diagnostics, bootloaders, low-power behavior, and deterministic edge control.</p></article><article><strong>Industrial data and optimization</strong><p>Telemetry pipelines, OEE signals, condition monitoring, anomaly detection, dashboards, and predictive maintenance foundations.</p></article></div></section><section className="industrial-journey"><div><Eyebrow>Automation lifecycle</Eyebrow><h2>Build for uptime<br /><em>from day one.</em></h2></div><div className="industrial-journey-list"><article><strong>01 / Assess</strong><p>Understand machines, controls, networks, operators, constraints, and improvement goals.</p></article><article><strong>02 / Integrate</strong><p>Connect PLCs, SCADA, sensors, gateways, protocols, firmware, and applications.</p></article><article><strong>03 / Commission</strong><p>Test sequences, alarms, edge cases, communications, safety behavior, and operator workflows.</p></article><article><strong>04 / Improve</strong><p>Use operational data to reduce downtime, improve throughput, and plan the next improvement.</p></article></div></section><section className="industrial-outcome"><Eyebrow>Why Purplenow</Eyebrow><h2>Automation that works<br /><em>where work happens.</em></h2><p>Our hardware, embedded, cloud, IoT, AI, and software teams help industrial systems become more visible, more responsive, and easier to evolve.</p><Button light onClick={() => go('contact')}>Talk to our industrial team</Button></section></>; }

function ConsumerElectronics({ go }) { const capabilities = [['01', 'Device product engineering', 'Shape consumer devices from concept and architecture through electronics, embedded software, prototypes, and production readiness.', Smartphone], ['02', 'Connected experiences', 'Pair hardware with mobile apps, cloud services, onboarding, accounts, notifications, and useful everyday workflows.', Network], ['03', 'Sensors and intelligence', 'Use sensing, edge processing, and practical AI to make products more aware, responsive, and personal.', BrainCircuit], ['04', 'Power and performance', 'Balance responsiveness, thermal behavior, battery life, reliability, materials, and cost for real-world use.', Zap]]; return <><PageHero eyebrow="Purplenow for consumer electronics" title="Build devices people<br /><em>choose every day.</em>" text="Purplenow helps consumer electronics teams create connected products that feel simple to use and dependable to own." image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=80" /><section className="consumer-intro"><div><Eyebrow>Consumer electronics</Eyebrow><h2>Technology people<br /><em>love to live with.</em></h2></div><p>Great consumer devices combine thoughtful industrial design with disciplined engineering. We connect the hardware, firmware, app, cloud, and support experience so the product keeps its promise beyond the unboxing moment.</p><Button onClick={() => go('contact')}>Discuss your product</Button></section><section className="consumer-capabilities"><div className="section-top"><Eyebrow>What we develop</Eyebrow><span>Device / experience / intelligence / scale</span></div><div className="consumer-capability-grid">{capabilities.map(([number, title, text, Icon]) => <article key={title}><span>{number}</span><Icon size={28} /><h3>{title}</h3><p>{text}</p><ArrowUpRight /></article>)}</div></section><section className="consumer-experience"><div className="consumer-device-visual"><div className="consumer-device"><div className="device-glow" /><div className="device-button" /><div className="device-speaker" /></div><span className="device-label label-comfort">COMFORT</span><span className="device-label label-signal">SIGNAL</span><span className="device-label label-delight">DELIGHT</span></div><div><Eyebrow>Designed as one experience</Eyebrow><h2>From first touch<br /><em>to daily habit.</em></h2><p>We help teams connect industrial design intent with product behavior, setup, updates, service, and feedback. The result is a device that earns a place in the customer’s routine.</p><div className="consumer-tags"><span>Smart home</span><span>Wearables</span><span>Personal devices</span><span>Connected appliances</span></div></div></section><section className="consumer-services"><div><Eyebrow>Detailed services</Eyebrow><h2>Every detail<br /><em>counts twice.</em></h2></div><div className="consumer-service-list"><article><strong>Product and system architecture</strong><p>Translate use cases into hardware, firmware, connectivity, application, and cloud decisions that work as one product.</p></article><article><strong>Embedded and device software</strong><p>Drivers, RTOS, power management, device states, diagnostics, secure updates, and reliable behavior across the lifecycle.</p></article><article><strong>Mobile and cloud companion</strong><p>Onboarding, device control, user accounts, notifications, APIs, telemetry, analytics, and support experiences.</p></article><article><strong>Prototype and production readiness</strong><p>Bring-up, usability feedback, performance testing, reliability, manufacturing handoff, launch support, and field learning.</p></article></div></section><section className="consumer-journey"><div><Eyebrow>Product journey</Eyebrow><h2>Build for the<br /><em>whole ownership.</em></h2></div><div className="consumer-journey-list"><article><strong>01 / Imagine</strong><p>Understand the user, context, behavior, value, and experience the device should create.</p></article><article><strong>02 / Prototype</strong><p>Test the physical interaction, technical assumptions, and connected flow early.</p></article><article><strong>03 / Refine</strong><p>Balance performance, power, cost, usability, reliability, and production realities.</p></article><article><strong>04 / Learn</strong><p>Use analytics, support insight, and updates to make the product better over time.</p></article></div></section><section className="consumer-outcome"><Eyebrow>Why Purplenow</Eyebrow><h2>Consumer technology<br /><em>with staying power.</em></h2><p>Our product, hardware, embedded, mobile, cloud, IoT, and AI teams help create devices that are enjoyable on day one and dependable for the long term.</p><Button light onClick={() => go('contact')}>Talk to our product team</Button></section></>; }

function SemiconductorIndustry({ go }) { const capabilities = [['01', 'VLSI and physical design', 'Translate RTL and IP into implementation-ready silicon through floorplanning, placement, clocking, routing, and sign-off.', Cpu], ['02', 'SoC and ASIC engineering', 'Develop application-specific silicon with architecture, IP integration, subsystem planning, and design-for-test awareness.', HardDrive], ['03', 'Analog and mixed-signal layout', 'Create matched, compact, noise-aware layouts for analog blocks, interfaces, power, sensing, and mixed-signal systems.', Activity], ['04', 'Verification and sign-off', 'Build confidence with functional verification, physical checks, timing, power, DRC, LVS, extraction, and tape-out readiness.', ShieldCheck]]; return <><PageHero eyebrow="Purplenow for semiconductor" title="Design the silicon<br /><em>behind the signal.</em>" text="Purplenow supports semiconductor teams across VLSI, physical design, SoC, ASIC, analog layout, verification, and production readiness." image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80" /><section className="semiconductor-intro"><div><Eyebrow>Semiconductor engineering</Eyebrow><h2>Small geometry.<br /><em>Big responsibility.</em></h2></div><p>Silicon design is a connected chain of decisions. We help teams manage the relationships between architecture, RTL, IP, physical implementation, analog performance, power, timing, verification, and manufacturing intent.</p><Button onClick={() => go('contact')}>Discuss your silicon program</Button></section><section className="semiconductor-capabilities"><div className="section-top"><Eyebrow>What we deliver</Eyebrow><span>VLSI / SoC / ASIC / analog / sign-off</span></div><div className="semiconductor-capability-grid">{capabilities.map(([number, title, text, Icon]) => <article key={title}><span>{number}</span><Icon size={28} /><h3>{title}</h3><p>{text}</p><ArrowUpRight /></article>)}</div></section><section className="silicon-flow"><div className="silicon-visual"><div className="silicon-die"><span>SoC</span><i /><i /><i /><i /></div><div className="silicon-trace trace-one" /><div className="silicon-trace trace-two" /><span className="silicon-label label-rtl">RTL</span><span className="silicon-label label-layout">LAYOUT</span><span className="silicon-label label-signoff">SIGN-OFF</span></div><div><Eyebrow>Designed as a flow</Eyebrow><h2>From logic<br />to <em>layout.</em></h2><p>Our teams keep digital implementation, analog layout, physical verification, timing, power, and manufacturing requirements connected as the design moves toward tape-out.</p><div className="silicon-tags"><span>RTL to GDSII</span><span>Physical verification</span><span>Low power</span><span>DFT awareness</span></div></div></section><section className="semiconductor-services"><div><Eyebrow>Detailed services</Eyebrow><h2>Precision at<br /><em>every stage.</em></h2></div><div className="semiconductor-service-list"><article><strong>RTL and IP integration support</strong><p>Subsystem planning, interface review, reusable IP integration, constraints, documentation, and design handoff.</p></article><article><strong>Physical design implementation</strong><p>Floorplanning, power planning, placement, CTS, routing, congestion analysis, timing closure, and physical optimization.</p></article><article><strong>Analog and mixed-signal layout</strong><p>Matching, symmetry, shielding, guard rings, parasitic awareness, device placement, extraction, and layout review.</p></article><article><strong>Timing, power, and physical sign-off</strong><p>STA support, IR-drop awareness, electromigration checks, DRC, LVS, antenna, density, and sign-off preparation.</p></article><article><strong>ASIC and SoC readiness</strong><p>Design reviews, verification coordination, DFT collaboration, ECO support, release documentation, and tape-out planning.</p></article></div></section><section className="semiconductor-journey"><div><Eyebrow>Silicon development path</Eyebrow><h2>Make every handoff<br /><em>count.</em></h2></div><div className="semiconductor-journey-list"><article><strong>01 / Architect</strong><p>Align the product, system, silicon, IP, power, performance, and implementation goals.</p></article><article><strong>02 / Implement</strong><p>Move through RTL, integration, floorplan, placement, routing, analog layout, and optimization.</p></article><article><strong>03 / Verify</strong><p>Close functional, physical, timing, power, and manufacturability questions with evidence.</p></article><article><strong>04 / Release</strong><p>Prepare the design, documentation, sign-off evidence, and team for tape-out and beyond.</p></article></div></section><section className="semiconductor-outcome"><Eyebrow>Why Purplenow</Eyebrow><h2>Silicon expertise<br /><em>with system context.</em></h2><p>Our semiconductor, hardware, embedded, software, and product teams understand how a chip becomes part of a real product and help keep that path visible from design to deployment.</p><Button light onClick={() => go('contact')}>Talk to our silicon team</Button></section></>; }

function NexEdgeOne({ go }) { const capabilities = [['01', 'STM32F407VET6 core', 'A powerful STM32F4 microcontroller foundation for real-time sensing, control, communications, and edge applications.', Cpu], ['02', 'Nexus IoT Platform', 'A modular device platform that brings hardware, firmware, connectivity, telemetry, and cloud integration into one product foundation.', Network], ['03', 'Firmware and drivers', 'Production-focused firmware, peripheral drivers, device services, diagnostics, boot flow, and update-ready lifecycle design.', Zap], ['04', 'Linux and MQTT gateway', 'Linux boot integration and MQTT messaging support for dependable device-to-cloud communication and remote operations.', Cloud]]; return <><PageHero eyebrow="Purplenow product / NexEdge One" title="A connected core<br /><em>for intelligent devices.</em>" text="NexEdge One is a Nexus IoT Platform built around the STM32F407VET6, combining hardware, firmware, Linux boot capability, and MQTT support for connected product development." image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85" /><section className="nexedge-intro"><div><Eyebrow>Nexus IoT Platform</Eyebrow><h2>Build the device.<br /><em>Connect the outcome.</em></h2></div><p>NexEdge One gives engineering teams a reusable starting point for connected products. It helps shorten the path from board bring-up to useful telemetry with a clear architecture across MCU control, Linux services, MQTT messaging, and cloud integration.</p><Button onClick={() => go('contact')}>Discuss NexEdge One</Button></section><section className="nexedge-capabilities"><div className="section-top"><Eyebrow>Platform capability</Eyebrow><span>Hardware / firmware / Linux / MQTT</span></div><div className="nexedge-capability-grid">{capabilities.map(([number, title, text, Icon]) => <article key={title}><span>{number}</span><Icon size={28} /><h3>{title}</h3><p>{text}</p><ArrowUpRight /></article>)}</div></section><section className="nexedge-architecture"><div className="nexedge-board"><div className="board-chip">STM32<br /><small>F407VET6</small></div><span className="board-label board-sensor">SENSORS</span><span className="board-label board-mqtt">MQTT</span><span className="board-label board-linux">LINUX BOOT</span><span className="board-label board-power">POWER</span><div className="board-trace trace-a" /><div className="board-trace trace-b" /></div><div><Eyebrow>Designed for extension</Eyebrow><h2>One platform.<br /><em>Many products.</em></h2><p>Start with a dependable reference design and extend it for industrial monitoring, smart assets, gateways, automation, medical equipment, or consumer devices.</p><div className="nexedge-tags"><span>STM32F4</span><span>RTOS-ready</span><span>Embedded Linux</span><span>MQTT</span><span>OTA-ready</span><span>Cloud APIs</span></div></div></section><section className="nexedge-services"><div><Eyebrow>Detailed product design</Eyebrow><h2>Everything around<br /><em>the core.</em></h2></div><div className="nexedge-service-list"><article><strong>Hardware foundation</strong><p>STM32F407VET6-based processing, power, clock, memory, debug, expansion, sensor, and communication interfaces.</p></article><article><strong>Firmware and MCU services</strong><p>Startup code, HAL integration, peripheral drivers, timers, ADC, PWM, GPIO, communications, RTOS tasks, and diagnostics.</p></article><article><strong>Linux boot and gateway layer</strong><p>Boot sequence, board support integration, service startup, device management, gateway behavior, and local edge processing.</p></article><article><strong>MQTT and cloud connectivity</strong><p>Topic design, telemetry, commands, retained state, quality of service, reconnect behavior, authentication, and cloud API integration.</p></article><article><strong>Product enablement</strong><p>Reference applications, test utilities, documentation, bring-up support, OTA planning, and a path from evaluation to production.</p></article></div></section><section className="nexedge-flow"><div><Eyebrow>Device-to-cloud flow</Eyebrow><h2>Signal in.<br /><em>Insight out.</em></h2></div><div className="nexedge-flow-list"><article><strong>01 / Sense</strong><p>Read sensors, inputs, and device state through the STM32F407VET6 platform.</p></article><article><strong>02 / Process</strong><p>Apply firmware logic, RTOS tasks, local rules, and edge behavior close to the device.</p></article><article><strong>03 / Publish</strong><p>Send secure telemetry and receive commands through MQTT and connected services.</p></article><article><strong>04 / Operate</strong><p>Monitor, update, diagnose, and improve the product over its operating life.</p></article></div></section><section className="nexedge-outcome"><Eyebrow>Why NexEdge One</Eyebrow><h2>A faster start for<br /><em>connected product teams.</em></h2><p>Use a structured hardware and software foundation so your engineering effort goes into the product experience, not rebuilding the same device plumbing from scratch.</p><Button light onClick={() => go('contact')}>Request a product discussion</Button></section></>; }

function NexSense({ go }) { const capabilities = [['01', 'Network visibility', 'Collect and normalize telemetry across routers, switches, firewalls, links, sites, cloud, and critical services.', Network], ['02', 'Operational intelligence', 'Turn network signals into service health, anomaly detection, actionable alerts, and a clearer operating picture.', BrainCircuit], ['03', 'Project and deployment insight', 'Track rollout progress, device readiness, dependencies, changes, incidents, and performance across network projects.', Activity], ['04', 'Secure, scalable operations', 'Give NOC, infrastructure, and leadership teams the right views, controls, and evidence for dependable decisions.', ShieldCheck]]; return <><PageHero eyebrow="Purplenow product / NexSense" title="Operational intelligence<br /><em>for connected work.</em>" text="NexSense gives network teams a single operational view across infrastructure, projects, sites, and services so issues are easier to see and decisions are easier to make." image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85" /><section className="nexsense-intro"><div><Eyebrow>Operational intelligence</Eyebrow><h2>See the network.<br /><em>Understand the work.</em></h2></div><p>NexSense combines network telemetry, project context, service health, and operational workflows. It helps teams move beyond isolated monitoring screens and understand how a change, outage, dependency, or rollout affects the wider environment.</p><Button onClick={() => go('contact')}>Discuss your network project</Button></section><section className="nexsense-capabilities"><div className="section-top"><Eyebrow>Platform capability</Eyebrow><span>Observe / understand / act / improve</span></div><div className="nexsense-capability-grid">{capabilities.map(([number, title, text, Icon]) => <article key={title}><span>{number}</span><Icon size={28} /><h3>{title}</h3><p>{text}</p><ArrowUpRight /></article>)}</div></section><section className="nexsense-map"><div className="network-map-visual"><div className="network-grid" /><span className="network-node node-a" /><span className="network-node node-b" /><span className="network-node node-c" /><span className="network-node node-d" /><span className="network-node node-e" /><span className="network-link link-a" /><span className="network-link link-b" /><span className="network-link link-c" /><span className="network-link link-d" /><div className="network-core"><Network size={38} /></div></div><div><Eyebrow>One view for every project</Eyebrow><h2>From topology<br />to <em>trajectory.</em></h2><p>Understand what is connected, what is changing, and what needs attention across branch networks, data centres, cloud connectivity, SD-WAN, security infrastructure, and rollout projects.</p><div className="nexsense-tags"><span>Topology discovery</span><span>Link health</span><span>Site readiness</span><span>Change impact</span></div></div></section><section className="nexsense-services"><div><Eyebrow>Detailed capabilities</Eyebrow><h2>Intelligence for<br /><em>network operations.</em></h2></div><div className="nexsense-service-list"><article><strong>Network monitoring and telemetry</strong><p>Collect availability, latency, packet loss, interface health, device state, capacity, and service signals from distributed environments.</p></article><article><strong>NOC and incident workflows</strong><p>Correlate alerts, prioritize incidents, assign ownership, track response, capture resolution, and build a useful operational history.</p></article><article><strong>SD-WAN and hybrid visibility</strong><p>See sites, paths, policies, cloud connectivity, failover behavior, and user-impact signals across modern network estates.</p></article><article><strong>Project rollout intelligence</strong><p>Track migrations, site installations, circuit delivery, hardware readiness, dependencies, change windows, and acceptance evidence.</p></article><article><strong>Capacity and performance planning</strong><p>Use historical trends and service context to plan bandwidth, hardware, resilience, expansion, and improvement investments.</p></article></div></section><section className="nexsense-data"><div><Eyebrow>Signals that explain more</Eyebrow><h2>Less noise.<br /><em>More context.</em></h2></div><div className="data-signal-list"><article><strong>Observe</strong><p>Bring infrastructure, application, cloud, security, and project signals into a shared operational model.</p></article><article><strong>Correlate</strong><p>Connect topology, ownership, change history, dependencies, and business service impact around each event.</p></article><article><strong>Act</strong><p>Route the right work to the right team with clear priority, evidence, and measurable response.</p></article></div></section><section className="nexsense-outcome"><Eyebrow>Why NexSense</Eyebrow><h2>Network intelligence<br /><em>that moves projects forward.</em></h2><p>Give operations, infrastructure, PMO, and leadership teams one dependable view of network health and delivery progress, from first design through steady-state support.</p><Button light onClick={() => go('contact')}>Request a product discussion</Button></section></>; }

function NexCloud({ go }) { const capabilities = [['01', 'Smart metering', 'Capture accurate water, gas, and energy consumption with meter interfaces, pulse inputs, sensors, and configurable reading schedules.', Activity], ['02', 'Connected field devices', 'Connect distributed meters through NB-IoT, LTE-M, LoRaWAN, cellular, Wi-Fi, or gateway-based deployments.', Network], ['03', 'Utility data platform', 'Transform readings into reliable time-series data for billing, reporting, forecasting, dashboards, and operational decisions.', Cloud], ['04', 'Exceptions and intelligence', 'Detect leaks, tampering, unusual usage, missing data, outages, and consumption patterns that need attention.', BrainCircuit]]; return <><PageHero eyebrow="Purplenow product / NexCloud" title="A smarter view of<br /><em>every unit consumed.</em>" text="NexCloud is a connected metering platform for smart water, gas, and energy projects, bringing field devices, telemetry, data, and utility operations together." image="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85" /><section className="nexcloud-intro"><div><Eyebrow>Smart utility platform</Eyebrow><h2>Measure clearly.<br /><em>Act earlier.</em></h2></div><p>NexCloud helps utility and infrastructure teams move from periodic readings to useful operational intelligence. It creates a dependable chain from meter and sensor to secure message, data service, dashboard, and action.</p><Button onClick={() => go('contact')}>Discuss your metering project</Button></section><section className="nexcloud-capabilities"><div className="section-top"><Eyebrow>Platform capability</Eyebrow><span>Water / gas / energy / operations</span></div><div className="nexcloud-capability-grid">{capabilities.map(([number, title, text, Icon]) => <article key={title}><span>{number}</span><Icon size={28} /><h3>{title}</h3><p>{text}</p><ArrowUpRight /></article>)}</div></section><section className="nexcloud-flow"><div className="meter-flow-visual"><div className="meter-device"><span className="meter-face">kWh</span><span className="meter-reading">01842.6</span><i /></div><div className="meter-path path-one" /><div className="meter-path path-two" /><div className="meter-path path-three" /><span className="meter-label label-meter">METER</span><span className="meter-label label-message">MQTT / RADIO</span><span className="meter-label label-insight">INSIGHT</span></div><div><Eyebrow>From reading to response</Eyebrow><h2>Every signal<br /><em>has a story.</em></h2><p>A meter reading becomes valuable when it is timely, trusted, and connected to context. NexCloud helps teams see usage, compare sites, spot exceptions, and respond before a small issue becomes a costly one.</p><div className="nexcloud-tags"><span>Remote readings</span><span>Usage analytics</span><span>Leak detection</span><span>Tamper alerts</span></div></div></section><section className="nexcloud-services"><div><Eyebrow>Detailed product design</Eyebrow><h2>Built for the<br /><em>utility lifecycle.</em></h2></div><div className="nexcloud-service-list"><article><strong>Meter and sensor integration</strong><p>Interface with water, gas, and energy meters using pulse, serial, Modbus, optical, current, voltage, and environmental inputs.</p></article><article><strong>Edge device and firmware</strong><p>Manage sampling, local storage, battery behavior, timestamps, device health, remote configuration, and secure update paths.</p></article><article><strong>MQTT and telemetry</strong><p>Publish readings, state, alarms, acknowledgements, and commands with reconnect handling, authentication, and message quality controls.</p></article><article><strong>Utility data engineering</strong><p>Build ingestion, validation, normalization, aggregation, time-series storage, APIs, dashboards, and billing-ready data workflows.</p></article><article><strong>Operations and customer insight</strong><p>Monitor sites, investigate abnormal consumption, support field teams, notify users, and create reports for operational and commercial teams.</p></article></div></section><section className="nexcloud-utilities"><div><Eyebrow>Designed for multiple utilities</Eyebrow><h2>One platform.<br /><em>Three critical flows.</em></h2></div><div className="utility-grid"><article><span>01</span><h3>Smart water</h3><p>Consumption patterns, leak signals, pressure context, remote reads, and network loss visibility.</p></article><article><span>02</span><h3>Smart gas</h3><p>Usage telemetry, valve and safety states, tamper awareness, battery health, and remote operations.</p></article><article><span>03</span><h3>Smart energy</h3><p>Load profiles, demand trends, power quality signals, consumption analytics, and efficiency opportunities.</p></article></div></section><section className="nexcloud-journey"><div><Eyebrow>Project lifecycle</Eyebrow><h2>From pilot<br />to <em>utility scale.</em></h2></div><div className="nexcloud-journey-list"><article><strong>01 / Connect</strong><p>Choose the meter, device, network, gateway, and deployment pattern for the environment.</p></article><article><strong>02 / Validate</strong><p>Check readings, timestamps, connectivity, battery behavior, data quality, and exception handling.</p></article><article><strong>03 / Operate</strong><p>Monitor the estate, manage devices, investigate alerts, and support field and customer teams.</p></article><article><strong>04 / Improve</strong><p>Use usage data and operational feedback to expand coverage and make better decisions.</p></article></div></section><section className="nexcloud-outcome"><Eyebrow>Why NexCloud</Eyebrow><h2>Make consumption<br /><em>visible and useful.</em></h2><p>Connect metering hardware, embedded software, networks, cloud, data engineering, and operational workflows in one platform designed for the realities of distributed utility projects.</p><Button light onClick={() => go('contact')}>Request a product discussion</Button></section></>; }

function Careers({ go }) { const jobs = [['Platform Development Engineer', 'Platform Engineering', 'Design modern digital platforms, APIs, and cloud foundations for enterprise products.', 'Hyderabad / Bengaluru'], ['Hardware Design Engineer', 'Hardware Engineering', 'Develop schematics, PCB layouts, prototypes, and production-ready connected electronics.', 'Pune / Bengaluru'], ['Embedded Firmware Engineer', 'Embedded Systems', 'Build MCU, RTOS, device-driver, connectivity, and diagnostics software for real products.', 'Bengaluru'], ['IoT Solutions Engineer', 'Internet of Things', 'Connect devices, gateways, MQTT telemetry, cloud services, and operational dashboards.', 'Hyderabad / Remote'], ['AI / Machine Learning Engineer', 'Artificial Intelligence', 'Develop practical models, computer vision workflows, MLOps, and AI product experiences.', 'Bengaluru / Remote'], ['Cloud and DevOps Engineer', 'Cloud Services', 'Engineer Azure, AWS, and GCP environments with automation, observability, security, and resilience.', 'Dover / Remote'], ['Cybersecurity Engineer', 'Security', 'Assess risk, strengthen applications and networks, and build practical security operations.', 'Pune / Remote'], ['Industrial Automation Engineer', 'Industrial Technology', 'Work with PLC, SCADA, Modbus, HMI, gateways, and real-time factory systems.', 'Pune / Hyderabad']]; return <><PageHero className="career-hero" eyebrow="Careers at Purplenow" title="Build technology<br /><em>that matters.</em>" text="Join engineers, designers, and problem-solvers creating products, platforms, and systems for the real world." image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=3840&q=90" /><section className="careers-intro"><div><Eyebrow>Why Purplenow</Eyebrow><h2>Bring your craft.<br /><em>Grow your range.</em></h2></div><p>We work across hardware, embedded, cloud, AI, industrial automation, cybersecurity, and product engineering. That means you can go deep in your discipline while seeing how your work becomes part of something larger.</p><Button onClick={() => go('contact')}>Send your profile</Button></section><section className="jobs-section"><div className="section-top"><Eyebrow>Open roles</Eyebrow><span>08 opportunities / multiple locations</span></div><div className="jobs-list">{jobs.map(([title, department, text, location], index) => <article key={title}><span>0{index + 1}</span><div><small>{department}</small><h3>{title}</h3><p>{text}</p></div><div className="job-meta"><b>{location}</b><button onClick={() => go('contact')}>Apply <ArrowUpRight size={15} /></button></div></article>)}</div></section><section className="career-values"><div><Eyebrow>How we work</Eyebrow><h2>Curious minds.<br /><em>Shared ownership.</em></h2></div><div className="career-value-grid"><span>Learn across disciplines</span><span>Make decisions visible</span><span>Respect the details</span><span>Keep the user close</span></div></section><Cta go={go} /></>; }

function Home({ go }) {
  return <>
    <section className="hero hero-sasken">
      <div className="hero-sasken-media" aria-hidden="true">
        <div className="hero-sasken-slide slide-one" />
        <div className="hero-sasken-slide slide-two" />
        <div className="hero-sasken-slide slide-three" />
        <div className="hero-sasken-glow" />
      </div>
      <div className="hero-sasken-copy">
        <Eyebrow>Engineering what matters, now</Eyebrow>
        <h1>Where innovation<br /><i>meets purpose.</i></h1>
        <p>We help enterprises design, build, and operate the products, platforms, and systems that shape what comes next.</p>
        <div className="hero-sasken-actions">
          <Button onClick={() => go('services')}>Explore our services</Button>
          <button className="button button-light" onClick={() => go ? go('contact') : window.location.assign('/contact.html')}>Talk to our team</button>
        </div>
        <div className="hero-sasken-meta">
          <span>Product engineering</span>
          <span>Embedded &amp; IoT</span>
          <span>AI &amp; cloud</span>
        </div>
      </div>
      <div className="hero-sasken-panel info-panel">
        <strong>Our focus</strong>
        <p>Connected products, resilient infrastructure, and intelligent operations for modern enterprises.</p>
        <div className="mini-stat"><span>Trusted</span><strong>800+</strong></div>
      </div>
    </section>
    <section className="intro-band">
      <div className="intro-mark"><Crosshair size={35} /></div>
      <div className="intro-copy">
        <Eyebrow>Our point of view</Eyebrow>
        <h2>Technology should move<br /><em>people forward.</em></h2>
      </div>
      <p>We combine product thinking with engineering depth to make complex technology useful, dependable, and ready for modern enterprise operations.</p>
    </section>
    <section className="stats-section">
      <div className="section-top"><Eyebrow>Our impact</Eyebrow><span>From concept to operating reality <ArrowDownRight size={16} /></span></div>
      <div className="stats-grid"><div><strong>20<span>+</span></strong><p>years of<br />experience</p></div><div><strong>14</strong><p>countries<br />connected</p></div><div><strong>800<span>+</span></strong><p>engineers &<br />inventors</p></div><div><strong>96<span>%</span></strong><p>repeat<br />partnerships</p></div></div>
    </section>
    <section className="feature-section">
      <div className="feature-image" />
      <div className="feature-copy">
        <Eyebrow>Built for the edge</Eyebrow>
        <h2>The hard stuff<br /><em>is our thing.</em></h2>
        <p>From semiconductor and hardware to embedded software, platform modernization, cloud, and AI, we solve the technical constraints that matter most to your business.</p>
        <div className="feature-rail"><div><strong>Platform</strong><span>Modernize and scale</span></div><div><strong>Hardware</strong><span>Precision engineering</span></div><div><strong>Cloud</strong><span>Secure operations</span></div><div><strong>AI</strong><span>Practical intelligence</span></div></div>
        <Button light onClick={() => go('services')}>Explore our services</Button>
      </div>
    </section>
    <section className="home-services">
      <div className="home-services-intro"><Eyebrow>Capabilities</Eyebrow><h2>One partner.<br /><em>Every layer.</em></h2></div>
      <div className="service-list">{services.slice(0, 4).map(([title, text, Icon], i) => <button onClick={() => go('services')} key={title}><span>0{i + 1}</span><Icon size={23} /><div><strong>{title}</strong><p>{text}</p></div><ArrowUpRight /></button>)}</div>
    </section>
    <ClientShowcase />
    <ConsolidatedOverview go={go} />
    <Cta go={go} />
  </>;
}

function ClientShowcase() { return <section className="client-showcase"><div className="client-heading"><Eyebrow>Trusted to build what matters</Eyebrow><h2>Partners for the<br /><em>next chapter.</em></h2><p>We work with teams building products, platforms, and systems that need to perform in the real world.</p></div><div className="client-marquee" aria-label="Purplenow client list"><div className="client-track">{[...clients, ...clients].map((client, index) => <span key={`${client.name}-${index}`}><div className="client-logo" dangerouslySetInnerHTML={{ __html: client.svg }} title={client.name} aria-label={client.name} /></span>)}</div></div></section>; }

function ConsolidatedOverview({ go }) { const links = [['Services', 'Platform development, hardware, embedded, IoT, AI, mobile, security, cloud, and manufacturing.', 'services'], ['Industries', 'Medical devices, industrial automation, consumer electronics, and semiconductor engineering.', 'industries'], ['Products', 'NexEdge One, NexSense, and NexCloud for connected products and operations.', 'products'], ['Managed services', 'Azure, AWS, GCP, networking, migrations, certified engineers, and 24x7 support.', 'msp']]; return <section className="consolidated-overview"><div className="consolidated-heading"><Eyebrow>Explore Purplenow</Eyebrow><h2>Everything you need<br /><em>in one place.</em></h2><p>From first idea to long-term operation, find the capability, solution, or conversation that moves your work forward.</p></div><div className="consolidated-grid">{links.map(([title, text, path], index) => <button className="info-panel" key={title} onClick={() => go(path)}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight /></button>)}</div></section>; }

const serviceHeroImages = {
  overview: 'https://images.unsplash.com/photo-1553877522-43269d4ea984',
  'platform development': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
  'hardware design services': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
  'embedded software': 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',
  'internet of things': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
  'artificial intelligence': 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
  'mobile & web': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c',
  cybersecurity: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
  'cloud services': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
  manufacturing: 'https://images.unsplash.com/photo-1567789884554-0b844b597180'
};

function PageHero({ eyebrow, title, text, image, className = '' }) {
  const heroContext = `${eyebrow} ${title.replace(/<[^>]*>/g, ' ')}`.toLowerCase();
  const serviceName = Object.keys(serviceHeroImages).find(key => key !== 'overview' && heroContext.includes(key));
  const selectedImage = /purplenow services/i.test(eyebrow)
    ? serviceHeroImages.overview
    : serviceName
      ? serviceHeroImages[serviceName]
      : image || 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31';
  const heroImage = new URL(selectedImage);
  heroImage.searchParams.set('auto', 'format');
  heroImage.searchParams.set('fit', 'crop');
  heroImage.searchParams.set('w', '3840');
  heroImage.searchParams.set('q', '90');

  const isCareerHero = className.split(/\s+/).includes('career-hero');
  return <section className={`msp-hero category-hero category-msp-hero ${className}`.trim()}>
    <div className="msp-hero-copy">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 dangerouslySetInnerHTML={{ __html: title }} />
      <p>{text}</p>
      <div className="msp-hero-actions">
        <Button onClick={() => (isCareerHero ? document.querySelector('.jobs-section') : document.querySelector('main section:not(.category-msp-hero)'))?.scrollIntoView({ behavior: 'smooth' })}>
          {isCareerHero ? 'Explore open roles' : 'Explore capabilities'}
        </Button>
        <button className="button button-light" onClick={() => window.location.assign('/contact.html')}>Talk to our team</button>
      </div>
    </div>
    <div className="msp-hero-visual">
      <div className="msp-hero-image" style={{ backgroundImage: `linear-gradient(135deg, rgba(11, 17, 24, 0.22), rgba(11, 17, 24, 0.08)), url(${heroImage.toString()})` }} />
      <div className="msp-focus-panel">
        {isCareerHero
          ? <>
            <strong>Our people</strong>
            <p>Curious engineers and problem-solvers building technology that matters.</p>
            <div className="msp-panel-meta"><span>Opportunities</span><strong>08</strong></div>
          </>
          : <>
            <strong>Our focus</strong>
            <p>Connected products, resilient infrastructure, and intelligent operations for modern enterprises.</p>
            <div className="msp-panel-meta"><span>Trusted</span><strong>800+</strong></div>
          </>}
      </div>
      <div className="msp-hero-ticker" aria-label={isCareerHero ? 'Careers at Purplenow' : 'Purplenow capabilities'}>
        <div className="msp-hero-track" aria-hidden="true">
          {isCareerHero
            ? <><span>Engineering</span><span>Embedded &amp; IoT</span><span>AI &amp; cloud</span><span>Open roles</span><span>Engineering</span><span>Embedded &amp; IoT</span><span>AI &amp; cloud</span><span>Open roles</span></>
            : <><span>Product engineering</span><span>Cloud</span><span>Connected systems</span><span>AI</span><span>Product engineering</span><span>Cloud</span><span>Connected systems</span><span>AI</span></>}
        </div>
      </div>
    </div>
  </section>;
}
function About({ go }) { return <><PageHero eyebrow="About Purplenow" title="Engineering ideas into<br /><em>real impact.</em>" text="Purplenow Technologies delivers innovative engineering, embedded, automation, and software solutions for modern enterprises." image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85" /><section className="about-content"><div><Eyebrow>Who we are</Eyebrow><h2>Practical thinkers.<br /><em>Dependable makers.</em></h2></div><div className="body-copy"><p>Purplenow is a technology partner for organizations solving meaningful problems. We bring product design, engineering, automation, and software expertise together to create solutions that work in the real world.</p><p>From platform modernization and product engineering to connected systems and intelligent applications, our teams stay close to the outcome: better performance, better experiences, and lasting value.</p><Button onClick={() => go('contact')}>Start a conversation</Button></div></section><Values /></>; }
function Values() { return <section className="values"><Eyebrow>Values & ethics</Eyebrow><h2>Good work starts<br />with <em>good intent.</em></h2><div className="values-grid">{[['01','Stay curious','We ask better questions before we reach for easy answers.'],['02','Make it matter','Every decision should create value for people, business, or the planet.'],['03','Own the outcome','We take responsibility for the work and the impact it has.']].map(v => <div key={v[0]}><span>{v[0]}</span><h3>{v[1]}</h3><p>{v[2]}</p></div>)}</div></section>; }
function Services({ go }) { const featured = [['Platform modernization', 'Transform legacy platforms into modern, secure, high-performance digital ecosystems.', 'service-platform-development', Cpu], ['Product engineering', 'Move from concept and design through development, testing, and deployment with one accountable partner.', 'service-hardware-design-services', HardDrive], ['Application development', 'Create tailored web and mobile experiences that meet the way your business actually works.', 'service-mobile-web', Smartphone]]; return <><PageHero eyebrow="Purplenow services" title="Engineering that turns<br /><em>complexity into progress.</em>" text="We combine product design, embedded engineering, automation, and software delivery to help modern enterprises solve harder problems." image="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85" /><section className="services-intro"><Eyebrow>How we help</Eyebrow><h2>From a difficult brief<br />to a <em>working advantage.</em></h2><p>Purplenow provides the depth and flexibility to meet a team wherever it is: modernizing a platform, building a new product, or making everyday operations more intelligent.</p></section><section className="featured-services"><div className="section-top"><Eyebrow>Featured capabilities</Eyebrow><span>Designed around outcomes</span></div><div className="featured-service-grid">{featured.map(([title, text, path, Icon], i) => <article key={title}><span className="service-number">0{i + 1}</span><Icon size={28} /><h3>{title}</h3><p>{text}</p><button onClick={() => go(path)}>Explore service <ArrowUpRight size={16} /></button></article>)}</div></section><section className="services-all"><div className="section-top"><Eyebrow>Full service capability</Eyebrow><span>08 disciplines / 01 partner</span></div><div className="services-grid">{services.map(([title, text, Icon], i) => <button key={title} onClick={() => go(title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-').replace('internet-of-things', 'service-internet-of-things').replace('platform-development', 'service-platform-development').replace('hardware-design-services', 'service-hardware-design-services').replace('embedded-software', 'service-embedded-software').replace('artificial-intelligence', 'service-artificial-intelligence').replace('mobile-web', 'service-mobile-web').replace('cybersecurity', 'service-cybersecurity').replace('cloud-services', 'service-cloud-services'))}><span className="service-number">0{i + 1}</span><Icon size={29} /><h3>{title}</h3><p>{text}</p><ArrowUpRight /></button>)}</div></section><section className="delivery-steps"><Eyebrow>Our delivery model</Eyebrow><div><article><strong>01</strong><h3>Understand</h3><p>We clarify the outcome, constraints, and users before recommending a path.</p></article><article><strong>02</strong><h3>Engineer</h3><p>Specialists work together across design, software, embedded, and automation.</p></article><article><strong>03</strong><h3>Enable</h3><p>We leave your team with a solution they can operate, evolve, and trust.</p></article></div></section><Cta go={go} /></>; }
function Industries({ go }) { return <><PageHero eyebrow="Where we work" title="Technology with a<br /><em>human pulse.</em>" text="Our work lives where precision meets purpose, across the industries shaping everyday life." image="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85" /><section className="industry-grid">{industries.map(([title, text, image]) => <button key={title} onClick={() => go('contact')}><div style={{ backgroundImage: `url(${image})` }} /><div><Eyebrow>{title}</Eyebrow><h2>{text}</h2><ArrowUpRight /></div></button>)}</section></>; }
function Products({ go }) { return <><PageHero eyebrow="Our products" title="Tools for the<br /><em>next normal.</em>" text="Purpose-built platforms that turn complex technology into a clear advantage." /><section className="product-list">{products.map(([number, title, sub, text, image], index) => <article key={title}><div className="product-info"><span>{number}</span><Eyebrow>{sub}</Eyebrow><h2>{title}</h2><p>{text}</p><Button onClick={() => go(`product-${index + 1}`)}>Explore product</Button></div><div className="product-image" style={{ backgroundImage: `url(${image})` }} /></article>)}</section></>; }
function Msp({ go }) { const cloudCards = [['Microsoft Azure', 'Cloud subscriptions, architecture, migration, governance, and ongoing support for Microsoft environments.'], ['Amazon Web Services', 'Flexible AWS foundations with cost visibility, secure operations, and certified engineering support.'], ['Google Cloud Platform', 'Data, application, and infrastructure services built for modern workloads on GCP.']]; const migrations = [['On-prem to cloud', 'Move workloads, data, and dependencies with a phased plan that protects business continuity.'], ['Cloud to cloud', 'Re-platform or consolidate between providers with clear architecture and controlled cutover.'], ['VMware to cloud', 'Modernize virtualized estates and choose the right landing zone for performance and cost.']]; const heroImage = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=80'; return <><header className="msp-hero"><div className="msp-hero-copy"><Eyebrow>Purplenow managed services</Eyebrow><h1>Cloud operations that<br /><em>keep moving.</em></h1><p>From cloud resale and one-time implementation to 24x7 support, Purplenow gives your teams a dependable partner for the systems they run every day.</p><div className="msp-hero-actions"><button className="button" onClick={() => go('services')}>Explore our services <ArrowDownRight size={17} /></button><button className="button button-light" onClick={() => go('contact')}>Talk to our team</button></div></div><div className="msp-hero-visual"><div className="msp-hero-image" style={{ backgroundImage: `linear-gradient(135deg, rgba(11, 17, 24, 0.22), rgba(11, 17, 24, 0.08)), url(${heroImage})` }} /><div className="msp-focus-panel"><strong>Our focus</strong><p>Cloud infrastructure, resilient networks, secure operations, and dependable support for modern enterprises.</p><div className="msp-panel-meta"><span>Trusted</span><strong>800+</strong></div></div><div className="msp-hero-ticker" aria-label="Managed services scrolling text"><div className="msp-hero-track"><span>Cloud</span><span>Networking</span><span>Security</span><span>Monitoring</span><span>Migration</span><span>Support</span><span>Cloud</span><span>Networking</span><span>Security</span><span>Monitoring</span><span>Migration</span><span>Support</span></div></div></div></header><section className="msp-intro"><div><Eyebrow>Managed service provider</Eyebrow><h2>More than uptime.<br /><em>More confidence.</em></h2></div><p>Our certified engineers help you design, implement, secure, and operate the right environment across cloud, networking, and security. Whether you need a one-time project or a long-term operating partner, we meet you where you are.</p><div className="msp-badges"><span><Check /> Certified engineers</span><span><Check /> 24x7 support</span><span><Check /> Ticket-based service desk</span></div></section><section className="cloud-services"><div className="section-top"><Eyebrow>Cloud solutions</Eyebrow><span>Resell / implement / support</span></div><div className="cloud-grid">{cloudCards.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p><button onClick={() => go('contact')}>Discuss your environment <ArrowUpRight size={15} /></button></article>)}</div></section><section className="msp-operations"><div><Eyebrow>How we engage</Eyebrow><h2>Right-sized support<br /><em>for real operations.</em></h2></div><div className="operations-list"><article><strong>01 / One-time implementation</strong><p>Assessment, design, landing zone setup, migration, configuration, documentation, and handover.</p></article><article><strong>02 / Support services</strong><p>Monitoring, incident response, patching, backup checks, performance tuning, and service reviews.</p></article><article><strong>03 / Ticketing systems</strong><p>A structured service desk keeps requests visible, prioritized, assigned, and measurable from open to resolved.</p></article></div></section><section className="migration-section"><div className="section-top"><Eyebrow>Migration paths</Eyebrow><span>Plan carefully / move confidently</span></div><div className="migration-grid">{migrations.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section><section className="partner-section"><Eyebrow>Partner ecosystem</Eyebrow><h2>Specialists where<br /><em>your stack needs them.</em></h2><div className="partner-list"><span>Microsoft Solutions Partner</span><span>AWS Partner</span><span>Google Cloud Partner</span><span>Sophos Partner</span><span>Fortinet Partner</span><span>Nutanix Partner</span></div></section><Cta go={go} /></>; }
function Contact() {
  const [selectedLocationIndex, setSelectedLocationIndex] = useState(0);
  const locations = [
    {
      region: 'India / Bengaluru',
      name: 'Purplenow Technologies',
      address: 'Bengaluru, Karnataka',
      country: 'India',
      phone: '+91 80 0000 0000',
      coordinates: [12.9716, 77.5946],
      image: '/locations/bengaluru.jpg',
      imageAlt: 'Bengaluru city skyline'
    },
    {
      region: 'India / Hyderabad',
      name: 'Purplenow Technologies',
      address: 'Hyderabad, Telangana',
      country: 'India',
      phone: '+91 40 0000 0000',
      coordinates: [17.385, 78.4867],
      image: '/locations/hyderabad.jpg',
      imageAlt: 'Charminar monument in Hyderabad'
    },
    {
      region: 'India / Pune',
      name: 'Purplenow Technologies',
      address: 'Pune, Maharashtra',
      country: 'India',
      phone: '+91 20 0000 0000',
      coordinates: [18.5204, 73.8567],
      image: '/locations/pune.jpg',
      imageAlt: 'Pune city skyline'
    },
    {
      region: 'United States / Dover',
      name: '8 The Green, Suite 15186 B',
      address: 'Dover, DE 19901',
      country: 'USA',
      phone: '+1 (408) 688-2061',
      coordinates: [39.1582, -75.5244],
      image: '/locations/dover.jpg',
      imageAlt: 'Historic downtown Dover, Delaware'
    },
    {
      region: 'South Africa / Johannesburg',
      name: 'Purplenow Technologies',
      address: 'Johannesburg, Gauteng',
      country: 'South Africa',
      phone: '+27 10 000 0000',
      coordinates: [-26.2041, 28.0473],
      image: '/locations/johannesburg.jpg',
      imageAlt: 'Johannesburg skyline at sunset'
    }
  ];
  const selectedLocation = locations[selectedLocationIndex];

  const heroImage = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=80';

  return <>
    <header className="msp-hero contact-msp-hero">
      <div className="msp-hero-copy">
        <Eyebrow>Let's make something matter</Eyebrow>
        <h1>Let’s make<br /><em>something matter.</em></h1>
        <p>Have a hard problem? Tell us what you’re working toward, and we’ll help you find a way forward.</p>
        <div className="msp-hero-actions">
          <a className="button" href="#contact-inquiry-form">Start a conversation <ArrowDownRight size={17} /></a>
          <a className="button button-light" href="mailto:info@purplenow.io">Email our team <ArrowUpRight size={15} /></a>
        </div>
      </div>
      <div className="msp-hero-visual">
        <div className="msp-hero-image" style={{ backgroundImage: `linear-gradient(135deg, rgba(11, 17, 24, 0.22), rgba(11, 17, 24, 0.08)), url(${heroImage})` }} />
        <div className="msp-focus-panel">
          <strong>Built around your challenge</strong>
          <p>Engineering, embedded, and automation teams ready to help you make progress.</p>
          <div className="msp-panel-meta"><span>Working across</span><strong>3 continents</strong></div>
        </div>
        <div className="msp-hero-ticker" aria-label="Purplenow capabilities">
          <div className="msp-hero-track">
            <span>Engineering</span><span>Embedded</span><span>Automation</span><span>Cloud</span>
            <span>Engineering</span><span>Embedded</span><span>Automation</span><span>Cloud</span>
          </div>
        </div>
      </div>
    </header>
    <section className="contact-form-section">
      <form className="contact-form-card" id="contact-inquiry-form" aria-labelledby="contact-form-title" onSubmit={(e) => e.preventDefault()}>
        <div className="contact-form-heading">
          <span className="contact-form-step">YOUR NEXT STEP</span>
          <h2 className="contact-form-title" id="contact-form-title">Start a conversation</h2>
          <p>Share a little about what you need. Our team will be glad to hear from you.</p>
        </div>
        <label>Name<input placeholder="Your name" /></label>
        <label>Work email<input type="email" placeholder="you@company.com" /></label>
        <label>What can we help with?<textarea placeholder="A little context goes a long way..." rows="4" /></label>
        <button className="button" type="submit">Send inquiry <ArrowDownRight size={17} /></button>
      </form>
    </section>
    <section className="locations-section location-finder-section">
      <div className="section-top">
        <div>
          <Eyebrow>Find us around the world</Eyebrow>
          <h2>Closer than <em>you think.</em></h2>
        </div>
        <span>05 locations / 03 regions</span>
      </div>
      <div className="location-finder">
        <div className="globe-stage">
          <div className="globe-halo" aria-hidden="true" />
          <div className="globe-sphere">
            <svg className="globe-map" viewBox="0 0 360 180" preserveAspectRatio="none" aria-hidden="true">
              <path className="globe-continent" d="M18 34 26 27 39 24 48 18 62 19 70 26 83 27 89 34 82 41 76 43 72 52 65 57 62 66 54 70 51 78 43 76 39 68 33 63 31 54 24 49 21 41Z" />
              <path className="globe-continent" d="M73 78 82 82 87 91 85 102 91 109 88 120 82 129 79 141 73 151 68 143 68 131 63 123 65 111 60 102 64 92Z" />
              <path className="globe-continent" d="M101 33 108 27 117 29 121 36 116 41 108 40Z" />
              <path className="globe-continent" d="M126 35 136 30 148 32 153 37 164 35 176 38 185 34 196 38 208 35 222 38 233 36 246 41 257 43 267 49 280 49 287 54 300 54 312 61 324 65 330 73 324 78 313 76 304 82 293 81 286 76 275 78 268 73 258 76 249 73 242 78 231 75 225 69 214 72 206 67 196 70 189 76 181 73 176 65 168 61 160 64 153 58 145 57 141 49 135 46Z" />
              <path className="globe-continent" d="M169 76 178 72 188 75 194 82 203 84 208 93 205 101 211 108 207 119 203 130 197 141 190 149 184 142 180 132 174 126 170 116 164 110 163 100 158 92 161 83Z" />
              <path className="globe-continent" d="M277 119 286 115 298 118 306 125 304 133 296 137 287 132 280 127Z" />
              <path className="globe-continent" d="M321 88 326 85 330 89 328 95 323 94Z" />
              <path className="globe-continent" d="M342 109 346 111 345 117 341 115Z" />
            </svg>
            <span className="globe-meridian globe-meridian-one" />
            <span className="globe-meridian globe-meridian-two" />
            <span className="globe-latitude globe-latitude-one" />
            <span className="globe-latitude globe-latitude-two" />
            {locations.map((location, index) => {
              const [latitude, longitude] = location.coordinates;
              return <button
                key={location.region}
                type="button"
                className={`globe-marker globe-marker-${index}${selectedLocationIndex === index ? ' is-active' : ''}`}
                style={{ left: `${((longitude + 180) / 360) * 100}%`, top: `${((90 - latitude) / 180) * 100}%` }}
                aria-label={`Show address for ${location.region}`}
                aria-pressed={selectedLocationIndex === index}
                onClick={() => setSelectedLocationIndex(index)}
              ><span /></button>;
            })}
          </div>
          <div className="globe-orbit globe-orbit-one" aria-hidden="true" />
          <div className="globe-orbit globe-orbit-two" aria-hidden="true" />
          <span className="globe-caption">PURPLENOW / GLOBAL PRESENCE</span>
        </div>
        <div className="location-detail">
          <label className="location-select-label" htmlFor="office-location">Choose a location</label>
          <select
            id="office-location"
            className="location-select"
            value={selectedLocationIndex}
            onChange={(event) => setSelectedLocationIndex(Number(event.target.value))}
          >
            {locations.map((location, index) => <option key={location.region} value={index}>{location.region}</option>)}
          </select>
          <article className="selected-location-card" aria-live="polite" key={selectedLocation.region}>
            <div className="selected-location-image">
              <img src={selectedLocation.image} alt={selectedLocation.imageAlt} />
              <span>Representative city view</span>
            </div>
            <div className="selected-location-copy">
              <span className="selected-location-region">{selectedLocation.region}</span>
              <h3>{selectedLocation.name}</h3>
              <p><MapPin size={16} aria-hidden="true" />{selectedLocation.address}<br /><span>{selectedLocation.country}</span></p>
              <a href={`tel:${selectedLocation.phone.replace(/[^+\d]/g, '')}`}><span>{selectedLocation.phone}</span><ArrowUpRight size={15} /></a>
            </div>
          </article>
          <p className="location-note">Select a city from the list or tap a marker on the globe to view its contact details.</p>
        </div>
      </div>
    </section>
  </>;
}
function Cta({ go }) { return <section className="cta"><div><Eyebrow>Ready when you are</Eyebrow><h2>Let’s build<br /><em>what matters.</em></h2></div><Button light onClick={() => go('contact')}>Talk to our team</Button></section>; }
function Footer({ go }) { return <footer className="site-footer"><div className="footer-shell"><div className="footer-top"><div className="footer-brand-block"><a className="brand" href="/" aria-label="Purplenow home" onClick={(event) => { event.preventDefault(); go('home'); }}><img className="brand-image" src="/purplenow-logo.jpeg" alt="Purplenow" /></a><p>Engineering, embedded, automation and software solutions designed for real-world performance.</p></div><div className="footer-links"><div><strong>Explore</strong><button onClick={() => go('about')}>About us</button><button onClick={() => go('services')}>Services</button><button onClick={() => go('industries')}>Industries</button></div><div><strong>Company</strong><button onClick={() => go('contact')}>Contact us</button><button onClick={() => go('msp')}>Managed services</button><button onClick={() => go('products')}>Products</button></div><div><strong>Connect</strong><button>LinkedIn</button><button>Careers</button><button>Privacy / Terms</button></div></div></div><div className="footer-bottom"><span>© 2026 Purplenow Technologies</span><span>Bengaluru · Austin · Munich</span><span>info@purplenow.io</span></div></div></footer>; }

function MergedMsp({ go }) {
  const providers = [
    ['Microsoft Azure', 'Cloud subscriptions, architecture, migration, governance, and ongoing support for Microsoft environments.'],
    ['Amazon Web Services', 'Flexible AWS foundations with cost visibility, secure operations, and certified engineering support.'],
    ['Google Cloud Platform', 'Data, application, and infrastructure services built for modern workloads on GCP.']
  ];
  const capabilities = [
    ['01', 'Cloud architecture', 'Design secure landing zones and operating foundations across Azure, AWS, and Google Cloud.', Cloud],
    ['02', 'Networking solutions', 'Connect sites, users, data centres, and cloud environments with resilient routing, segmentation, and secure access.', Network],
    ['03', 'Migration and modernization', 'Move workloads from on-premises, VMware, or another cloud with the right balance of lift-and-shift and redesign.', HardDrive],
    ['04', 'Data engineering', 'Build reliable pipelines, storage, governance, and analytics foundations that make enterprise data useful.', Activity]
  ];
  const migrations = [
    ['On-premises to cloud', 'Assess applications, map dependencies, select landing zones, migrate in waves, and validate the new operating model.'],
    ['Cloud to cloud', 'Re-architect or relocate workloads between Azure, AWS, and GCP with controlled data movement and cutover.'],
    ['VMware to cloud', 'Modernize virtualized estates through right-sizing, workload classification, and a practical hybrid transition plan.']
  ];
  const heroImage = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=3840&q=90';

  return <>
    <header className="msp-hero">
      <div className="msp-hero-copy">
        <Eyebrow>Purplenow managed services</Eyebrow>
        <h1>Cloud operations that<br /><em>keep moving.</em></h1>
        <p>From cloud strategy and migration to 24x7 operations, Purplenow brings cloud, networking, security, and managed support together with one dependable partner.</p>
        <div className="msp-hero-actions">
          <Button onClick={() => document.querySelector('.cloud-capabilities')?.scrollIntoView({ behavior: 'smooth' })}>Explore cloud capabilities</Button>
          <button className="button button-light" onClick={() => go('contact')}>Talk to our team <ArrowDownRight size={17} /></button>
        </div>
      </div>
      <div className="msp-hero-visual">
        <div className="msp-hero-image" style={{ backgroundImage: `linear-gradient(135deg, rgba(11, 17, 24, 0.22), rgba(11, 17, 24, 0.08)), url(${heroImage})` }} />
        <div className="msp-focus-panel">
          <strong>Our focus</strong>
          <p>Cloud infrastructure, resilient networks, secure operations, and dependable support for modern enterprises.</p>
          <div className="msp-panel-meta"><span>Trusted</span><strong>800+</strong></div>
        </div>
        <div className="msp-hero-ticker" aria-label="Managed cloud services">
          <div className="msp-hero-track" aria-hidden="true">
            {['Cloud', 'Networking', 'Security', 'Monitoring', 'Migration', 'Support', 'Cloud', 'Networking', 'Security', 'Monitoring', 'Migration', 'Support'].map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}
          </div>
        </div>
      </div>
    </header>
    <section className="msp-intro">
      <div><Eyebrow>Managed service provider</Eyebrow><h2>More than uptime.<br /><em>More confidence.</em></h2></div>
      <p>Our certified engineers help you design, implement, secure, and operate the right environment across cloud, networking, and security. Whether you need a one-time project or a long-term operating partner, we meet you where you are.</p>
      <div className="msp-badges"><span><Check /> Certified engineers</span><span><Check /> 24x7 support</span><span><Check /> Ticket-based service desk</span></div>
    </section>
    <section className="cloud-services">
      <div className="section-top"><Eyebrow>Cloud platforms</Eyebrow><span>Resell / implement / support</span></div>
      <div className="cloud-grid">{providers.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><button onClick={() => go('contact')}>Discuss your environment <ArrowUpRight size={15} /></button></article>)}</div>
    </section>
    <section className="cloud-capabilities">
      <div className="section-top"><Eyebrow>Connected cloud capability</Eyebrow><span>Architecture / network / migration / data</span></div>
      <div className="cloud-capability-grid">{capabilities.map(([number, title, text, Icon]) => <article key={title}><span>{number}</span><Icon size={28} /><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>
    <section className="cloud-providers">
      <div className="provider-orbit"><span className="provider-core">CLOUD<br />OPERATIONS</span><span className="provider azure">AZURE</span><span className="provider aws">AWS</span><span className="provider gcp">GCP</span></div>
      <div><Eyebrow>Multi-cloud by design</Eyebrow><h2>One operating view<br /><em>across your stack.</em></h2><p>Use the cloud services that fit each workload while keeping identity, security, cost, networking, monitoring, and support understandable across the whole environment.</p><div className="provider-tags"><span>Microsoft 365</span><span>Hybrid cloud</span><span>Backup and DR</span><span>FinOps visibility</span></div></div>
    </section>
    <section className="cloud-services-detail">
      <div><Eyebrow>Cloud and managed services</Eyebrow><h2>From first landing zone<br />to <em>daily operations.</em></h2></div>
      <div className="cloud-service-list">
        <article><strong>Cloud foundations</strong><p>Plan secure landing zones, identity, governance, network topology, monitoring, backup, and disaster recovery for hybrid and multi-cloud environments.</p></article>
        <article><strong>Lift and shift</strong><p>Move suitable workloads with discovery, dependency mapping, right-sizing, cutover planning, and post-migration stabilization.</p></article>
        <article><strong>Cloud modernization</strong><p>Refactor or re-platform applications where containers, managed services, automation, and elastic scale create a better result.</p></article>
        <article><strong>Microsoft 365 and productivity</strong><p>Support Microsoft 365 adoption, identity, collaboration, security, administration, and user enablement.</p></article>
        <article><strong>Data engineering</strong><p>Design ingestion, transformation, lakehouse, warehouse, governance, reporting, and analytics workflows that teams can trust.</p></article>
        <article><strong>Network and security</strong><p>Plan hybrid connectivity, segmentation, firewall policy, secure remote access, resilience, and operational visibility.</p></article>
      </div>
    </section>
    <section className="migration-section">
      <div className="section-top"><Eyebrow>Migration paths</Eyebrow><span>Plan carefully / move confidently</span></div>
      <div className="migration-grid">{migrations.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>
    <section className="msp-operations">
      <div><Eyebrow>How we engage</Eyebrow><h2>Right-sized support<br /><em>for real operations.</em></h2></div>
      <div className="operations-list">
        <article><strong>01 / One-time implementation</strong><p>Assessment, design, landing zone setup, migration, configuration, documentation, and handover.</p></article>
        <article><strong>02 / Support services</strong><p>Monitoring, incident response, patching, backup checks, performance tuning, and service reviews.</p></article>
        <article><strong>03 / Ticketing systems</strong><p>A structured service desk keeps requests visible, prioritized, assigned, and measurable from open to resolved.</p></article>
      </div>
    </section>
    <section className="partner-section"><Eyebrow>Partner ecosystem</Eyebrow><h2>Specialists where<br /><em>your stack needs them.</em></h2><div className="partner-list"><span>Microsoft Solutions Partner</span><span>AWS Partner</span><span>Google Cloud Partner</span><span>Sophos Partner</span><span>Fortinet Partner</span><span>Nutanix Partner</span></div></section>
    <section className="cloud-outcome"><Eyebrow>Why Purplenow</Eyebrow><h2>Cloud that improves<br /><em>the way work moves.</em></h2><p>Our certified cloud, networking, security, data, and support engineers stay with your environment beyond migration, helping it remain secure, observable, and ready to evolve.</p><Button light onClick={() => go('contact')}>Talk to our cloud team</Button></section>
    <Cta go={go} />
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
