import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, Link, Outlet, useLocation } from 'react-router-dom';
import './index.css';

function AnimatedNumber({ end, suffix = '', delay = 0 }) {
  const [count, setCount] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!isVisible) return;
    let startTimestamp = null;
    const duration = 2000;
    let animationFrameId, timeoutId;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * end));
      if (progress < 1) animationFrameId = window.requestAnimationFrame(step);
    };
    timeoutId = setTimeout(() => {
      animationFrameId = window.requestAnimationFrame(step);
    }, delay);
    return () => {
      clearTimeout(timeoutId);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, end, delay]);

  return <h3 ref={ref}>{count}{suffix}</h3>;
}

function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <header>
        <div className="logo">
          <Link to="/">
            <img src="https://moascc.org/wp-content/uploads/2025/03/moascc-logotext-3.png" alt="MoASCC Logo" style={{ height: '60px', width: 'auto' }} />
          </Link>
        </div>
        <nav>
          <ul>
            <li className="has-dropdown">
              <Link to="#">MoASCC ▾</Link>
              <ul className="dropdown">
                <li><Link to="/missions-et-actions">Qui Sommes Nous</Link></li>
                <li><Link to="/nos-partenaires">Nos Partenaires</Link></li>
              </ul>
            </li>
            <li className="has-dropdown">
              <Link to="#">Groupes de Travail ▾</Link>
              <ul className="dropdown">
                <li><Link to="/pain-management">Pain Management</Link></li>
                <li><Link to="/nutrition">Nutrition</Link></li>
                <li><Link to="/psychosocial">Psychosocial</Link></li>
                <li><Link to="/fatigue">Activités Physiques Adaptées</Link></li>
                <li><Link to="/toxicite-emergente">Toxicités Émergentes</Link></li>
                <li><Link to="/onco-fertilite">Onco-Fertilité</Link></li>
                <li><Link to="/onco-cardiologie">Onco-Cardiologie</Link></li>
                <li><Link to="/onco-dermatologie">Onco-Dermatologie</Link></li>
                <li><Link to="/survivorship-patient-advocacy">Survivorship Patient Advocacy</Link></li>
              </ul>
            </li>
            <li className="has-dropdown">
              <Link to="#">Ressources ▾</Link>
              <ul className="dropdown">
                <li><Link to="/outils-devaluation">Outils d’évaluation</Link></li>
                <li><Link to="/education-des-patients">Education Patient</Link></li>
                <li><Link to="/publications">Publications et Recommandations</Link></li>
              </ul>
            </li>
            <li><Link to="/evenements">Événements</Link></li>
            <li><Link to="/contactez-nous">Contact</Link></li>
            <li><Link to="/login" style={{ fontWeight: 700, color: 'var(--primary)' }}>Login</Link></li>
          </ul>
        </nav>
        <button className="btn btn-primary">Adhérer Maintenant</button>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-col">
            <h4 style={{fontFamily: 'Outfit', fontSize: '1.5rem', fontWeight: 800}}>Mo<span style={{color: 'var(--secondary)'}}>ASCC</span></h4>
            <p>Moroccan Association of Supportive Care in Cancer, promouvant l'excellence dans les soins de support.</p>
          </div>
          <div className="footer-col">
            <h4>Liens Rapides</h4>
            <Link to="/missions-et-actions">Qui Sommes Nous</Link>
            <Link to="/missions-et-actions">Missions et Actions</Link>
            <Link to="/evenements">Événements</Link>
            <Link to="/contactez-nous">Contact</Link>
          </div>
          <div className="footer-col">
            <h4>Ressources</h4>
            <Link to="/outils-devaluation">Outils d’évaluation</Link>
            <Link to="/education-des-patients">Education Patient</Link>
            <Link to="/publications">Publications</Link>
          </div>
          <div className="footer-col">
            <h4>Contactez-nous</h4>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <a href="#" style={{ background: 'rgba(255,255,255,0.1)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>in</a>
              <a href="#" style={{ background: 'rgba(255,255,255,0.1)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>f</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} MoASCC. Tous droits réservés.
        </div>
      </footer>
    </>
  );
}

function Home() {
  const workGroups = [
    { title: 'Pain Management', desc: 'Approches innovantes pour atténuer la douleur en oncologie.', icon: '💊', link: '/pain-management' },
    { title: 'Nutrition', desc: 'Accompagnement diététique personnalisé pour les patients.', icon: '🥗', link: '/nutrition' },
    { title: 'Psychosocial', desc: 'Soutien psychologique essentiel tout au long du parcours.', icon: '🧠', link: '/psychosocial' },
    { title: 'Activités Physiques Adaptées', desc: 'Combattre la fatigue avec des programmes d’exercices sur mesure.', icon: '🏃‍♀️', link: '/fatigue' },
    { title: 'Toxicités Émergentes', desc: 'Gestion des effets secondaires des nouvelles thérapies ciblées.', icon: '🔬', link: '/toxicite-emergente' },
    { title: 'Onco-Fertilité', desc: 'Préservation de la fertilité chez les jeunes patients.', icon: '👶', link: '/onco-fertilite' },
    { title: 'Onco-Cardiologie', desc: 'Prévention et traitement des complications cardiovasculaires.', icon: '❤️', link: '/onco-cardiologie' },
    { title: 'Onco-Dermatologie', desc: 'Prise en charge des toxicités cutanées liées aux traitements.', icon: '🧴', link: '/onco-dermatologie' },
    { title: 'Survivorship & Advocacy', desc: 'Amélioration de la qualité de vie après le cancer.', icon: '🎗️', link: '/survivorship-patient-advocacy' },
  ];

  return (
    <>
      <section className="hero">
        <div className="bg-blob-1"></div>
        <div className="bg-blob-2"></div>
        <h1>Quand le soin englobe l'humain dans toutes ses dimensions</h1>
        <p>Moroccan Association of Supportive Care in Cancer.<br/>Rejoignez notre association dédiée aux soins de support et de soutien en oncologie.</p>
        <div className="hero-actions">
          <Link to="/missions-et-actions"><button className="btn btn-primary">Découvrir nos Actions</button></Link>
          <Link to="/contactez-nous"><button className="btn btn-secondary">Nous Contacter</button></Link>
        </div>
      </section>

      <section className="stats">
        <div className="stat-item">
          <AnimatedNumber end={9} suffix="+" delay={0} />
          <p>Groupes de Travail</p>
        </div>
        <div className="stat-item">
          <AnimatedNumber end={500} suffix="+" delay={300} />
          <p>Membres Actifs</p>
        </div>
        <div className="stat-item">
          <AnimatedNumber end={20} suffix="+" delay={600} />
          <p>Événements Annuels</p>
        </div>
        <div className="stat-item">
          <AnimatedNumber end={1} suffix="" delay={900} />
          <p>Vision Commune</p>
        </div>
      </section>

      <section id="workgroups">
        <div className="section-header">
          <h2>Nos Groupes de Travail</h2>
          <p style={{ color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto' }}>
            Une approche multidisciplinaire couvrant tous les aspects des soins de support en oncologie.
          </p>
        </div>
        <div className="groups-grid">
          {workGroups.map((group, idx) => (
            <div className="card" key={idx}>
              <div className="card-icon">{group.icon}</div>
              <h3>{group.title}</h3>
              <p>{group.desc}</p>
              <Link to={group.link} className="card-link">En savoir plus <span>→</span></Link>
            </div>
          ))}
        </div>
      </section>

      <section id="events" style={{ backgroundColor: 'var(--white)' }}>
        <div className="section-header">
          <h2>Actualités & Événements</h2>
        </div>
        <div className="groups-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
          <div className="card" style={{ borderLeft: '4px solid var(--secondary)' }}>
            <div style={{ color: 'var(--secondary)', fontWeight: 'bold', marginBottom: '1rem' }}>À VENIR • 11/01/2026</div>
            <h3>RANDONNÉE A BENSLIMANE 🥾</h3>
            <p>Rejoignez-nous pour une journée dédiée au bien-être, à léchange et à l'activité physique en plein air.</p>
            <Link to="/evenements" className="card-link">Plus d'infos : +212 664 373330</Link>
          </div>
          <div className="card" style={{ borderLeft: '4px solid var(--primary)' }}>
            <div style={{ color: 'var(--primary)', fontWeight: 'bold', marginBottom: '1rem' }}>ACTUALITÉ</div>
            <h3>Affiliation Internationale</h3>
            <p>MoASCC est désormais officiellement affiliée à la Multinational Association of Supportive Care in Cancer (MASCC).</p>
          </div>
        </div>
      </section>
    </>
  );
}

function GenericPage({ title, emoji }) {
  return (
    <section className="hero" style={{ minHeight: '60vh', paddingBottom: '2rem' }}>
      <div className="bg-blob-1"></div>
      <div className="bg-blob-2"></div>
      <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{emoji}</div>
      <h1 style={{ marginBottom: '1rem' }}>{title}</h1>
      <p style={{ maxWidth: '800px' }}>
        Cette page est actuellement en construction. Bientôt, vous y trouverez tout le contenu détaillé concernant <strong>"{title}"</strong>, modifiable directement par l'équipe MoASCC.
      </p>
      <Link to="/"><button className="btn btn-secondary">Retour à l'accueil</button></Link>
    </section>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="missions-et-actions" element={<GenericPage title="Missions et Actions" emoji="🎯" />} />
          <Route path="nos-partenaires" element={<GenericPage title="Nos Partenaires" emoji="🤝" />} />
          <Route path="pain-management" element={<GenericPage title="Pain Management" emoji="💊" />} />
          <Route path="nutrition" element={<GenericPage title="Nutrition en Oncologie" emoji="🥗" />} />
          <Route path="psychosocial" element={<GenericPage title="Soutien Psychosocial" emoji="🧠" />} />
          <Route path="fatigue" element={<GenericPage title="Activités Physiques Adaptées" emoji="🏃‍♀️" />} />
          <Route path="toxicite-emergente" element={<GenericPage title="Toxicités Émergentes" emoji="🔬" />} />
          <Route path="onco-fertilite" element={<GenericPage title="Onco-Fertilité" emoji="👶" />} />
          <Route path="onco-cardiologie" element={<GenericPage title="Onco-Cardiologie" emoji="❤️" />} />
          <Route path="onco-dermatologie" element={<GenericPage title="Onco-Dermatologie" emoji="🧴" />} />
          <Route path="survivorship-patient-advocacy" element={<GenericPage title="Survivorship & Patient Advocacy" emoji="🎗️" />} />
          <Route path="outils-devaluation" element={<GenericPage title="Outils d'Évaluation" emoji="📋" />} />
          <Route path="education-des-patients" element={<GenericPage title="Éducation des Patients" emoji="📚" />} />
          <Route path="publications" element={<GenericPage title="Publications et Recommandations" emoji="📖" />} />
          <Route path="evenements" element={<GenericPage title="Actualités et Événements" emoji="📅" />} />
          <Route path="contactez-nous" element={<GenericPage title="Contactez-nous" emoji="✉️" />} />
          <Route path="login" element={<GenericPage title="Connexion Espace Membre" emoji="🔐" />} />
          <Route path="*" element={<GenericPage title="Page Introuvable" emoji="🤔" />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
