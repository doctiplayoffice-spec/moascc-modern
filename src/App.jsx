import React from 'react';
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
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!isVisible) return;
    
    let startTimestamp = null;
    const duration = 2000;
    let animationFrameId;
    let timeoutId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(ease * end));
      
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
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

function App() {
  const workGroups = [
    { title: 'Pain Management', desc: 'Approches innovantes pour atténuer la douleur en oncologie.', icon: '💊' },
    { title: 'Nutrition', desc: 'Accompagnement diététique personnalisé pour les patients.', icon: '🥗' },
    { title: 'Psychosocial', desc: 'Soutien psychologique essentiel tout au long du parcours.', icon: '🧠' },
    { title: 'Activités Physiques Adaptées', desc: 'Combattre la fatigue avec des programmes d’exercices sur mesure.', icon: '🏃‍♀️' },
    { title: 'Toxicités Émergentes', desc: 'Gestion des effets secondaires des nouvelles thérapies ciblées.', icon: '🔬' },
    { title: 'Onco-Fertilité', desc: 'Préservation de la fertilité chez les jeunes patients.', icon: '👶' },
    { title: 'Onco-Cardiologie', desc: 'Prévention et traitement des complications cardiovasculaires.', icon: '❤️' },
    { title: 'Onco-Dermatologie', desc: 'Prise en charge des toxicités cutanées liées aux traitements.', icon: '🧴' },
    { title: 'Survivorship & Advocacy', desc: 'Amélioration de la qualité de vie après le cancer.', icon: '🎗️' },
  ];

  return (
    <>
      <header>
        <div className="logo">
          <img src="https://moascc.org/wp-content/uploads/2025/03/moascc-logotext-3.png" alt="MoASCC Logo" style={{ height: '60px', width: 'auto' }} />
        </div>
        <nav>
          <ul>
            <li className="has-dropdown">
              <a href="#about">MoASCC ▾</a>
              <ul className="dropdown">
                <li><a href="#about">Qui Sommes Nous</a></li>
                <li><a href="#partners">Nos Partenaires</a></li>
              </ul>
            </li>
            <li className="has-dropdown">
              <a href="#workgroups">Groupes de Travail ▾</a>
              <ul className="dropdown">
                <li><a href="#wg-pain">Pain Management</a></li>
                <li><a href="#wg-nutrition">Nutrition</a></li>
                <li><a href="#wg-psycho">Psychosocial</a></li>
                <li><a href="#wg-apa">Activités Physiques Adaptées</a></li>
                <li><a href="#wg-tox">Toxicités Émergentes</a></li>
                <li><a href="#wg-ferti">Onco-Fertilité</a></li>
                <li><a href="#wg-cardio">Onco-Cardiologie</a></li>
                <li><a href="#wg-derma">Onco-Dermatologie</a></li>
                <li><a href="#wg-survivor">Survivorship Patient Advocacy</a></li>
              </ul>
            </li>
            <li className="has-dropdown">
              <a href="#resources">Ressources ▾</a>
              <ul className="dropdown">
                <li><a href="#eval-tools">Outils d’évaluation</a></li>
                <li><a href="#patient-edu">Education Patient</a></li>
                <li><a href="#pubs">Publications et Recommandations</a></li>
              </ul>
            </li>
            <li><a href="#events">Événements</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#login" style={{ fontWeight: 700, color: 'var(--primary)' }}>Login</a></li>
          </ul>
        </nav>
        <button className="btn btn-primary">Adhérer Maintenant</button>
      </header>

      <main>
        <section className="hero">
          <div className="bg-blob-1"></div>
          <div className="bg-blob-2"></div>
          
          <h1>Quand le soin englobe l'humain dans toutes ses dimensions</h1>
          <p>Moroccan Association of Supportive Care in Cancer.<br/>Rejoignez notre association dédiée aux soins de support et de soutien en oncologie.</p>
          
          <div className="hero-actions">
            <button className="btn btn-primary">Découvrir nos Actions</button>
            <button className="btn btn-secondary">Nous Contacter</button>
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
                <a href="#" className="card-link">En savoir plus <span>→</span></a>
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
              <a href="#" className="card-link">Plus d'infos : +212 664 373330</a>
            </div>
            
            <div className="card" style={{ borderLeft: '4px solid var(--primary)' }}>
              <div style={{ color: 'var(--primary)', fontWeight: 'bold', marginBottom: '1rem' }}>ACTUALITÉ</div>
              <h3>Affiliation Internationale</h3>
              <p>MoASCC est désormais officiellement affiliée à la Multinational Association of Supportive Care in Cancer (MASCC).</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-col">
            <h4 style={{fontFamily: 'Outfit', fontSize: '1.5rem', fontWeight: 800}}>Mo<span style={{color: 'var(--secondary)'}}>ASCC</span></h4>
            <p>Moroccan Association of Supportive Care in Cancer, promouvant l'excellence dans les soins de support.</p>
          </div>
          <div className="footer-col">
            <h4>Liens Rapides</h4>
            <a href="#about">Qui Sommes Nous</a>
            <a href="#workgroups">Missions et Actions</a>
            <a href="#events">Événements</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-col">
            <h4>Ressources</h4>
            <a href="#">Outils d’évaluation</a>
            <a href="#">Education Patient</a>
            <a href="#">Publications</a>
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

export default App;
