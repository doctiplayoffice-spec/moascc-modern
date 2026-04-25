import React, { useEffect, useRef, useState } from 'react';
import { 
  QuiSommesNous, Partenaires, Evenements, Contact, Login, Adherer,
  PainManagement, Nutrition, Psychosocial, Fatigue, ToxiciteEmergente,
  OncoFertilite, OncoCardiologie, OncoDermatologie, Survivorship,
  OutilsDevaluation, EducationPatient, Publications
} from './pages';
import './index.css';

function InteractiveNetwork() {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    
    // Resize handler
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    const particles = [];
    for (let i = 0; i < 70; i++) {
       particles.push({
         x: Math.random() * width,
         y: Math.random() * (height + 400),
         z: Math.random() * 0.8 + 0.2, // Fake depth
         vx: (Math.random() - 0.5) * 0.4,
         vy: (Math.random() - 0.5) * 0.4,
         parallaxSpeed: Math.random() * 0.4 + 0.1
       });
    }

    let scrollY = window.scrollY;
    const handleScroll = () => { scrollY = window.scrollY; };
    window.addEventListener('scroll', handleScroll, { passive: true });

    let animationFrame;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      const H = height + 400; // Buffer zone
      
      // Calculate active particles
      const activeParticles = particles.map(p => {
        p.x += p.vx;
        p.y += p.vy;
        
        // Bounce internal coordinates
        if (p.x < 0 || p.x > width) p.vx *= -1;
        
        // Parallax offset
        let sy = p.y - scrollY * p.parallaxSpeed;
        sy = ((sy % H) + H) % H - 200; // Wrap between -200 and height + 200
        
        return { x: p.x, y: sy, z: p.z };
      });

      // Draw active particles and connections
      activeParticles.forEach((p, i) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3 * p.z, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(14, 165, 233, ${0.6 * p.z})`;
        ctx.fill();

        for (let j = i + 1; j < activeParticles.length; j++) {
           const p2 = activeParticles[j];
           const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
           
           if (dist < 180) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              // Connection strength based on distance and depth
              const opacity = 0.2 * (1 - dist / 180) * ((p.z + p2.z) / 2);
              ctx.strokeStyle = `rgba(14, 165, 233, ${opacity})`;
              ctx.lineWidth = 1;
              ctx.stroke();
           }
        }
      });
      
      animationFrame = requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);
  
  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none' }} />;
}

function AnimatedNumber({ end, suffix = '', delay = 0 }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
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

  useEffect(() => {
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

const scrollToSection = (e, id) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Update hash for sharing
    window.history.pushState(null, null, `#${id}`);
  }
};

function TopNav() {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      <div className="logo">
        <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>
          <img src="https://moascc.org/wp-content/uploads/2025/03/moascc-logotext-3.png" alt="MoASCC Logo" style={{ height: '60px', width: 'auto' }} />
        </a>
      </div>
      <nav>
        <ul>
          <li className="has-dropdown">
            <a href="#qui-sommes-nous" onClick={(e) => e.preventDefault()}>MoASCC ▾</a>
            <ul className="dropdown">
              <li><a href="#qui-sommes-nous" onClick={(e) => scrollToSection(e, 'qui-sommes-nous')}>Qui Sommes Nous</a></li>
              <li><a href="#nos-partenaires" onClick={(e) => scrollToSection(e, 'nos-partenaires')}>Nos Partenaires</a></li>
            </ul>
          </li>
          <li className="has-dropdown">
            <a href="#pain-management" onClick={(e) => e.preventDefault()}>Groupes de Travail ▾</a>
            <ul className="dropdown">
              <li><a href="#pain-management" onClick={(e) => scrollToSection(e, 'pain-management')}>Pain Management</a></li>
              <li><a href="#nutrition" onClick={(e) => scrollToSection(e, 'nutrition')}>Nutrition</a></li>
              <li><a href="#psychosocial" onClick={(e) => scrollToSection(e, 'psychosocial')}>Psychosocial</a></li>
              <li><a href="#fatigue" onClick={(e) => scrollToSection(e, 'fatigue')}>Activités Physiques Adaptées</a></li>
              <li><a href="#toxicite-emergente" onClick={(e) => scrollToSection(e, 'toxicite-emergente')}>Toxicités Émergentes</a></li>
              <li><a href="#onco-fertilite" onClick={(e) => scrollToSection(e, 'onco-fertilite')}>Onco-Fertilité</a></li>
              <li><a href="#onco-cardiologie" onClick={(e) => scrollToSection(e, 'onco-cardiologie')}>Onco-Cardiologie</a></li>
              <li><a href="#onco-dermatologie" onClick={(e) => scrollToSection(e, 'onco-dermatologie')}>Onco-Dermatologie</a></li>
              <li><a href="#survivorship-patient-advocacy" onClick={(e) => scrollToSection(e, 'survivorship-patient-advocacy')}>Survivorship Patient Advocacy</a></li>
            </ul>
          </li>
          <li className="has-dropdown">
            <a href="#outils-devaluation" onClick={(e) => e.preventDefault()}>Ressources ▾</a>
            <ul className="dropdown">
              <li><a href="#outils-devaluation" onClick={(e) => scrollToSection(e, 'outils-devaluation')}>Outils d’évaluation</a></li>
              <li><a href="#education-des-patients" onClick={(e) => scrollToSection(e, 'education-des-patients')}>Education Patient</a></li>
              <li><a href="#publications" onClick={(e) => scrollToSection(e, 'publications')}>Publications et Recommandations</a></li>
            </ul>
          </li>
          <li><a href="#evenements" onClick={(e) => scrollToSection(e, 'evenements')}>Événements</a></li>
          <li><a href="#contactez-nous" onClick={(e) => scrollToSection(e, 'contactez-nous')}>Contact</a></li>
          <li><a href="#login" onClick={(e) => scrollToSection(e, 'login')} style={{ fontWeight: 700, color: 'var(--primary)' }}>Login</a></li>
        </ul>
      </nav>
      <a href="#adherer" onClick={(e) => scrollToSection(e, 'adherer')} className="btn btn-primary">Adhérer Maintenant</a>
    </header>
  );
}

function Home() {
  const workGroups = [
    { title: 'Pain Management', desc: 'Approches innovantes pour atténuer la douleur en oncologie.', icon: '💊', link: 'pain-management' },
    { title: 'Nutrition', desc: 'Accompagnement diététique personnalisé pour les patients.', icon: '🥗', link: 'nutrition' },
    { title: 'Psychosocial', desc: 'Soutien psychologique essentiel tout au long du parcours.', icon: '🧠', link: 'psychosocial' },
    { title: 'Activités Physiques Adaptées', desc: 'Combattre la fatigue avec des programmes d’exercices sur mesure.', icon: '🏃‍♀️', link: 'fatigue' },
    { title: 'Toxicités Émergentes', desc: 'Gestion des effets secondaires des nouvelles thérapies ciblées.', icon: '🔬', link: 'toxicite-emergente' },
    { title: 'Onco-Fertilité', desc: 'Préservation de la fertilité chez les jeunes patients.', icon: '👶', link: 'onco-fertilite' },
    { title: 'Onco-Cardiologie', desc: 'Prévention et traitement des complications cardiovasculaires.', icon: '❤️', link: 'onco-cardiologie' },
    { title: 'Onco-Dermatologie', desc: 'Prise en charge des toxicités cutanées liées aux traitements.', icon: '🧴', link: 'onco-dermatologie' },
    { title: 'Survivorship & Advocacy', desc: 'Amélioration de la qualité de vie après le cancer.', icon: '🎗️', link: 'survivorship-patient-advocacy' },
  ];

  return (
    <div id="home">
      <section className="hero">
        <div className="bg-blob-1"></div>
        <div className="bg-blob-2"></div>
        <h1>Quand le soin englobe l'humain dans toutes ses dimensions</h1>
        <p>Moroccan Association of Supportive Care in Cancer.<br/>Rejoignez notre association dédiée aux soins de support et de soutien en oncologie.</p>
        <div className="hero-actions">
          <a href="#qui-sommes-nous" onClick={(e) => scrollToSection(e, 'qui-sommes-nous')} className="btn btn-primary">Découvrir nos Actions</a>
          <a href="#contactez-nous" onClick={(e) => scrollToSection(e, 'contactez-nous')} className="btn btn-secondary">Nous Contacter</a>
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

      <section id="workgroups-grid">
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
              <a href={`#${group.link}`} onClick={(e) => scrollToSection(e, group.link)} className="card-link">En savoir plus <span>→</span></a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    // Initial scroll handling on direct URL visit with hash
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <InteractiveNetwork />
      <TopNav />
      <main>
        <Home />
        <div id="qui-sommes-nous"><QuiSommesNous /></div>
        <div id="nos-partenaires"><Partenaires /></div>
        <div id="pain-management"><PainManagement /></div>
        <div id="nutrition"><Nutrition /></div>
        <div id="psychosocial"><Psychosocial /></div>
        <div id="fatigue"><Fatigue /></div>
        <div id="toxicite-emergente"><ToxiciteEmergente /></div>
        <div id="onco-fertilite"><OncoFertilite /></div>
        <div id="onco-cardiologie"><OncoCardiologie /></div>
        <div id="onco-dermatologie"><OncoDermatologie /></div>
        <div id="survivorship-patient-advocacy"><Survivorship /></div>
        <div id="outils-devaluation"><OutilsDevaluation /></div>
        <div id="education-des-patients"><EducationPatient /></div>
        <div id="publications"><Publications /></div>
        <div id="evenements"><Evenements /></div>
        <div id="contactez-nous"><Contact /></div>
        <div id="login"><Login /></div>
        <div id="adherer"><Adherer /></div>
      </main>
      <footer>
        <div className="footer-content">
          <div className="footer-col">
            <h4 style={{fontFamily: 'Outfit', fontSize: '1.5rem', fontWeight: 800}}>Mo<span style={{color: 'var(--secondary)'}}>ASCC</span></h4>
            <p>Moroccan Association of Supportive Care in Cancer, promouvant l'excellence dans les soins de support.</p>
          </div>
          <div className="footer-col">
            <h4>Liens Rapides</h4>
            <a href="#qui-sommes-nous" onClick={(e) => scrollToSection(e, 'qui-sommes-nous')}>Qui Sommes Nous</a>
            <a href="#evenements" onClick={(e) => scrollToSection(e, 'evenements')}>Événements</a>
            <a href="#contactez-nous" onClick={(e) => scrollToSection(e, 'contactez-nous')}>Contact</a>
          </div>
          <div className="footer-col">
            <h4>Ressources</h4>
            <a href="#outils-devaluation" onClick={(e) => scrollToSection(e, 'outils-devaluation')}>Outils d’évaluation</a>
            <a href="#education-des-patients" onClick={(e) => scrollToSection(e, 'education-des-patients')}>Education Patient</a>
            <a href="#publications" onClick={(e) => scrollToSection(e, 'publications')}>Publications</a>
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
