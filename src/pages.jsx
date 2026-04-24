import React from 'react';
import { Link } from 'react-router-dom';

/* --- TEMPLATES --- */

export function PageHero({ title, emoji, description }) {
  return (
    <section className="hero" style={{ minHeight: '50vh', paddingBottom: '3rem', paddingTop: '8rem' }}>
      <div className="bg-blob-1"></div>
      <div className="bg-blob-2"></div>
      <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{emoji}</div>
      <h1 style={{ marginBottom: '1rem' }}>{title}</h1>
      <p style={{ maxWidth: '800px' }}>{description}</p>
    </section>
  );
}

export function WorkgroupPage({ title, emoji, role, objectives, axes, actions }) {
  return (
    <>
      <PageHero title={title} emoji={emoji} description={role} />
      <section style={{ backgroundColor: 'var(--white)' }}>
        <div className="section-header">
          <h2>Notre Approche & Objectifs</h2>
          <p style={{ color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto' }}>Découvrez comment notre groupe de travail s'organise pour améliorer les soins de support.</p>
        </div>
        <div className="groups-grid">
          <div className="card" style={{ borderTop: '4px solid var(--primary)' }}>
            <h3>🎯 Objectifs Principaux</h3>
            <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-light)', marginTop: '1rem', lineHeight: '1.8' }}>
              {objectives.map((obj, i) => <li key={i} style={{ marginBottom: '0.5rem' }}>{obj}</li>)}
            </ul>
          </div>
          <div className="card" style={{ borderTop: '4px solid var(--secondary)' }}>
            <h3>🛤️ Axes d'Intervention</h3>
            <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-light)', marginTop: '1rem', lineHeight: '1.8' }}>
              {axes.map((axe, i) => <li key={i} style={{ marginBottom: '0.5rem' }}>{axe}</li>)}
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="section-header">
          <h2>Actions Possibles & Initiatives</h2>
        </div>
        <div className="groups-grid">
          {actions.map((act, idx) => (
            <div className="card" key={idx}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{act.title}</h4>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>{act.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export function ResourcePage({ title, emoji, description, resources }) {
  return (
    <>
      <PageHero title={title} emoji={emoji} description={description} />
      <section style={{ backgroundColor: 'var(--white)' }}>
        <div className="section-header">
          <h2>Ressources Disponibles</h2>
        </div>
        <div className="groups-grid">
          {resources.map((res, idx) => (
            <div className="card" key={idx} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{res.icon}</div>
              <h3>{res.name}</h3>
              <p style={{ flex: 1, color: 'var(--text-light)', marginBottom: '1.5rem' }}>{res.utility}</p>
              <button className="btn btn-secondary" style={{ alignSelf: 'flex-start' }}>Consulter</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export function FormPage({ title, emoji, description, children }) {
  return (
    <>
      <PageHero title={title} emoji={emoji} description={description} />
      <section style={{ backgroundColor: 'var(--white)', padding: '4rem 5%' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', background: 'var(--card-bg)', padding: '3rem', borderRadius: '20px', boxShadow: 'var(--shadow)', border: '1px solid var(--border)' }}>
          {children}
        </div>
      </section>
    </>
  );
}

/* --- SPECIFIC PAGES --- */

export function QuiSommesNous() {
  return (
    <>
      <PageHero 
        title="Missions et Actions" 
        emoji="🎯" 
        description="L'Association Marocaine des Soins de Support en Oncologie (MoASCC) est une organisation à but non lucratif, engagée dans l'amélioration continue de la qualité de vie des patients." 
      />
      
      <section style={{ backgroundColor: 'var(--white)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text)', lineHeight: '1.8' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            L'Association Marocaine des Soins de Support en Oncologie (MoASCC) est une organisation à but non lucratif, engagée dans l'amélioration continue de la qualité de vie des patients atteints de cancer à travers le développement, la promotion et l'intégration des soins de support dans toutes les étapes de la prise en charge oncologique.
          </p>
          
          <p style={{ marginBottom: '2rem' }}>
            Fondée par un groupe de professionnels de santé passionnés ; – oncologues médicaux, oncologues radiothérapeutes, chirurgiens, psychologues, et en collaboration avec des patients partenaires – MoASCC a pour mission de :
          </p>

          <div className="card" style={{ marginBottom: '2rem', borderLeft: '4px solid var(--secondary)' }}>
            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', color: 'var(--text-light)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li>Promouvoir les bonnes pratiques en soins de support (douleur, fatigue, nutrition, soins palliatifs, soutien psychologique, etc.)</li>
              <li>Favoriser la formation continue des professionnels de santé</li>
              <li>Encourager la recherche scientifique dans le domaine</li>
              <li>Créer des passerelles entre les disciplines pour une approche intégrée et centrée sur le patient</li>
              <li>Sensibiliser les patients, leurs proches et le grand public à l'importance des soins de support</li>
            </ul>
          </div>

          <p style={{ marginBottom: '1.5rem' }}>
            Nos activités incluent des conférences, des ateliers, des publications, ainsi que des collaborations nationales et internationales avec d'autres institutions œuvrant dans le domaine de l'oncologie.
          </p>

          <p style={{ marginBottom: '3rem', fontWeight: '500', color: 'var(--primary)', fontStyle: 'italic' }}>
            Parce que traiter le cancer ne se résume pas à soigner la tumeur, la MoASCC place le bien-être du patient au cœur de sa démarche globale de prise en charge, alliant expertise médicale, accompagnement psychologique et soutien social pour préserver la qualité de vie de chaque patient.
          </p>
        </div>
      </section>

      <section id="membres-bureau">
        <div className="section-header">
          <h2>Les Membres du Bureau</h2>
        </div>
        
        <div className="groups-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <div className="card" style={{ borderTop: '4px solid var(--primary)' }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '0.5rem' }}>Président</h3>
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary)' }}>Dr Mounir Bachouchi</p>
          </div>
          
          <div className="card" style={{ borderTop: '4px solid var(--secondary)' }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '0.5rem' }}>Vice-président</h3>
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary)' }}>Pr Hassan Errihani</p>
          </div>
          
          <div className="card" style={{ borderTop: '4px solid var(--teal)' }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '0.5rem' }}>Secrétaire Général et Adjoint</h3>
            <p style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text)' }}>Dr Ben Abid Fatma</p>
            <p style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text)' }}>Mr Farid Chbicheb</p>
          </div>
          
          <div className="card" style={{ borderTop: '4px solid var(--primary-light)' }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '0.5rem' }}>Trésorier et Adjoint</h3>
            <p style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text)' }}>Dr Latifa Mesbah</p>
            <p style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text)' }}>Pr Rhizlane Belbaraka</p>
          </div>
        </div>

        <div className="groups-grid" style={{ marginTop: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
          <div className="card">
            <h3 style={{ fontSize: '1.3rem', color: 'var(--primary)', marginBottom: '1rem', borderBottom: '2px solid var(--bg)', paddingBottom: '0.5rem' }}>Autres Membres</h3>
            <ul style={{ color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Pr Amine Souadka</li>
              <li>Dr Rhondali wadii</li>
              <li>Dr Sawsan Kharmoum</li>
              <li>Dr Ikram Nejjar</li>
              <li>Dr Siham Lkhouyali Dr Mesbah Ilyass</li>
              <li>Mme Ikram Eseghir</li>
              <li>Mme Myriam Nciri</li>
            </ul>
          </div>
          
          <div className="card">
            <h3 style={{ fontSize: '1.3rem', color: 'var(--secondary)', marginBottom: '1rem', borderBottom: '2px solid var(--bg)', paddingBottom: '0.5rem' }}>Membres d'honneur</h3>
            <ul style={{ color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Dr Florian Scotte</li>
              <li>Dr Mayam Lustberg</li>
              <li>Dr Melissa Chin</li>
              <li>Pr Jaafar Bennouna</li>
              <li>Dr Philippe Beuzeboc</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export function Partenaires() {
  return (
    <>
      <PageHero 
        title="Nos Partenaires" 
        emoji="🤝" 
        description="Nous collaborons avec des institutions, des associations nationales et internationales, ainsi que des partenaires de l'industrie pour faire avancer les soins de support." 
      />
      <section style={{ backgroundColor: 'var(--white)' }}>
        <div className="groups-grid">
          <div className="card" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1rem' }}>MASCC</h2>
            <p>Multinational Association of Supportive Care in Cancer</p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', color: 'var(--secondary)', marginBottom: '1rem' }}>AFSOS</h2>
            <p>Association Francophone pour les Soins Oncologiques de Support</p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', color: 'var(--teal)', marginBottom: '1rem' }}>Instituts Publics</h2>
            <p>Centres d'oncologie et ministères locaux</p>
          </div>
        </div>
      </section>
    </>
  );
}

export function Evenements() {
  return (
    <>
      <PageHero 
        title="Actualités & Événements" 
        emoji="📅" 
        description="Retrouvez nos congrès, webinaires, journées de formation et événements de sensibilisation." 
      />
      <section style={{ backgroundColor: 'var(--white)' }}>
        <div className="groups-grid">
          <div className="card" style={{ borderLeft: '4px solid var(--secondary)' }}>
            <div style={{ color: 'var(--secondary)', fontWeight: 'bold', marginBottom: '1rem' }}>CONGRÈS ANNUEL</div>
            <h3>3ème Congrès MoASCC</h3>
            <p>Thème : Les innovations en soins de support et intégration précoce.</p>
            <button className="btn btn-primary" style={{ marginTop: '1rem' }}>Incription Bientôt</button>
          </div>
          <div className="card" style={{ borderLeft: '4px solid var(--primary)' }}>
            <div style={{ color: 'var(--primary)', fontWeight: 'bold', marginBottom: '1rem' }}>WEBINAIRE</div>
            <h3>Masterclass Toxicités</h3>
            <p>Formation en ligne sur la gestion des effets secondaires de l'immunothérapie.</p>
            <button className="btn btn-secondary" style={{ marginTop: '1rem' }}>Voir le Replay</button>
          </div>
          <div className="card" style={{ borderLeft: '4px solid var(--teal)' }}>
            <div style={{ color: 'var(--teal)', fontWeight: 'bold', marginBottom: '1rem' }}>ACTIVITÉS PATIENTS</div>
            <h3>Randonnée Santé</h3>
            <p>Une journée dédiée au bien-être, à l'échange et à l'activité physique en plein air.</p>
            <button className="btn btn-primary" style={{ marginTop: '1rem' }}>Galerie Photos</button>
          </div>
        </div>
      </section>
    </>
  );
}

export function Contact() {
  return (
    <FormPage title="Contactez-nous" emoji="✉️" description="Vous avez une question, une suggestion ou souhaitez collaborer avec nous ? N'hésitez pas à nous envoyer un message.">
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--primary)' }}>Nom Complet</label>
          <input type="text" placeholder="Dr. Ahmed..." style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'rgba(255,255,255,0.8)' }} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--primary)' }}>Email</label>
          <input type="email" placeholder="votre-email@exemple.com" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'rgba(255,255,255,0.8)' }} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--primary)' }}>Sujet</label>
          <input type="text" placeholder="Demande de partenariat..." style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'rgba(255,255,255,0.8)' }} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--primary)' }}>Message</label>
          <textarea rows="5" placeholder="Votre message ici..." style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'rgba(255,255,255,0.8)', fontFamily: 'inherit' }}></textarea>
        </div>
        <button type="button" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Envoyer le message</button>
      </form>
    </FormPage>
  );
}

export function Login() {
  return (
    <FormPage title="Connexion Espace Membre" emoji="🔐" description="Accédez à vos ressources réservées, au dashboard de votre groupe de travail et à l'annuaire des membres professionnels.">
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--primary)' }}>Email</label>
          <input type="email" placeholder="votre-email@exemple.com" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'rgba(255,255,255,0.8)' }} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--primary)' }}>Mot de passe</label>
          <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'rgba(255,255,255,0.8)' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-light)' }}>
            <input type="checkbox" /> Se souvenir de moi
          </label>
          <a href="#" onClick={(e) => e.preventDefault()} style={{ color: 'var(--secondary)' }}>Mot de passe oublié ?</a>
        </div>
        <button type="button" className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem' }}>Se Connecter</button>
        <div style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--text-light)', fontSize: '0.9rem' }}>
          Pas encore membre ? <Link to="/adherer" style={{ color: 'var(--teal)', fontWeight: 'bold' }}>Rejoignez-nous</Link>
        </div>
      </form>
    </FormPage>
  );
}

export function Adherer() {
  return (
    <FormPage title="Adhérer à MoASCC" emoji="🤝" description="Rejoignez la communauté MoASCC pour participer à l'amélioration des soins de support au Maroc et accéder à nos événements et ressources exclusifs.">
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--primary)' }}>Nom</label>
            <input type="text" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border)' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--primary)' }}>Prénom</label>
            <input type="text" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border)' }} />
          </div>
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--primary)' }}>Profession / Spécialité</label>
          <select style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'rgba(255,255,255,0.8)', fontFamily: 'inherit' }}>
            <option>Oncologue</option>
            <option>Médecin Généraliste</option>
            <option>Infirmier(ère)</option>
            <option>Psychologue</option>
            <option>Diététicien(ne)</option>
            <option>Autre professionnel de santé</option>
            <option>Étudiant</option>
          </select>
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--primary)' }}>Email</label>
          <input type="email" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border)' }} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--primary)' }}>Téléphone</label>
          <input type="tel" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border)' }} />
        </div>
        <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', background: 'var(--bg)', padding: '1rem', borderRadius: '8px' }}>
          <strong>Note :</strong> L'adhésion est soumise à approbation par le comité exécutif. Une cotisation trisannuelle sera demandée lors de la validation.
        </div>
        <button type="button" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Soumettre ma candidature</button>
      </form>
    </FormPage>
  );
}

/* --- SPECIFIC PAGES DATA --- */

export function PainManagement() {
  return <WorkgroupPage title="Pain Management" emoji="💊"
    role="Améliorer l'évaluation et la prise en charge de la douleur liée au cancer et à ses traitements afin de garantir une meilleure qualité de vie pour les patients."
    objectives={["Évaluation systématique de tous les types de douleurs", "Mise en place de protocoles antalgiques efficaces et sûrs", "Amélioration continue de la qualité de vie des patients"]}
    axes={["Formation médicale continue des soignants", "Élaboration de recommandations nationales adaptées", "Soutien aux centres d'oncologie pour la gestion de la douleur"]}
    actions={[
      { title: "Masterclass sur les Opioïdes", desc: "Formation avancée sur la prescription et le suivi des traitements antalgiques majeurs." },
      { title: "Ateliers Pratiques", desc: "Sessions interactives pour le personnel soignant sur l'évaluation de la douleur complexe." },
      { title: "Livrets Patients", desc: "Création de guides d'information pour aider les patients à exprimer et gérer leur douleur à domicile." }
    ]} />
}

export function Nutrition() {
  return <WorkgroupPage title="Nutrition en Oncologie" emoji="🥗"
    role="Accompagner les patients sur le plan nutritionnel pour prévenir la dénutrition, soutenir l'observance thérapeutique et optimiser l'immunité."
    objectives={["Dépistage précoce des troubles nutritionnels", "Conseils diététiques adaptés à chaque phase du traitement", "Soutien du système immunitaire par une nutrition ciblée"]}
    axes={["Ateliers culinaires adaptés aux effets secondaires", "Formation continue des diététiciens spécialisés", "Intégration d'évaluations nutritionnelles standardisées"]}
    actions={[
      { title: "Consultations Dédiées", desc: "Mise en place de parcours de soins nutritionnels personnalisés avec des experts." },
      { title: "Édition de Recettes", desc: "Création de livres de recettes pour aider à surmonter les troubles du goût et de l'appétit." },
      { title: "Séminaires Annuels", desc: "Rencontres entre spécialistes pour discuter des dernières avancées en onco-nutrition." }
    ]} />
}

export function Psychosocial() {
  return <WorkgroupPage title="Soutien Psychosocial" emoji="🧠"
    role="Offrir un environnement de soutien mental, émotionnel et social pour aider le patient et sa famille à faire face à la maladie avec résilience."
    objectives={["Réduction de l'anxiété et de la détresse émotionnelle", "Accompagnement continu des aidants familiaux", "Orientation pro-active face aux difficultés sociales"]}
    axes={["Soutien par l'écoute active et les groupes de parole", "Facilitation des consultations psycho-oncologiques", "Formations à la communication pour le personnel soignant"]}
    actions={[
      { title: "Groupes d'Échange", desc: "Moments de partage sécurisés encadrés par des professionnels." },
      { title: "Hotline de Soutien", desc: "Mise en route de solutions d'écoute téléphonique ou de télémédecine pour un soutien rapide." },
      { title: "Ressources Aidants", desc: "Outils et réunions spécifiquement conçus pour soutenir le cercle familial." }
    ]} />
}

export function Fatigue() {
  return <WorkgroupPage title="Activités Physiques Adaptées" emoji="🏃‍♀️"
    role="Combattre la fatigue induite par le cancer et maintenir les capacités physiques par l'introduction d'exercices physiques encadrés et sécurisés."
    objectives={["Amélioration de la tolérance globale aux traitements", "Restauration du bien-être physique et psychique", "Prévention de la sarcopénie et diminution de la fatigue"]}
    axes={["Prescriptions d'Activités Physiques Adaptées (APA)", "Partenariats avec des kinésithérapeutes et coachs spécialisés", "Sensibilisation aux bienfaits du mouvement"]}
    actions={[
      { title: "Séances de Yoga et Marche", desc: "Programmes d'activités douces adaptées au rythme de chacun." },
      { title: "Guides Pratiques à Domicile", desc: "Vidéos et livrets pour encourager une activité modérée et régulière chez soi." },
      { title: "Randonnées Santé MoASCC", desc: "Événements rassembleurs en plein air pour concilier activité physique et lien social." }
    ]} />
}

export function ToxiciteEmergente() {
  return <WorkgroupPage title="Toxicités Émergentes" emoji="🔬"
    role="Anticiper, repérer précocement et gérer efficacement les effets secondaires complexes liés aux nouvelles thérapies ciblées et aux immunothérapies."
    objectives={["Sécurisation maximale du parcours de soins du patient", "Amélioration de l'éducation thérapeutique sur les signaux d'alerte", "Maintien d'une veille scientifique médicale pointue"]}
    axes={["Création de réseaux de cliniciens experts", "Mise en place de systèmes d'alertes de sécurité rapides", "Réunions de Concertation Pluridisciplinaire (RCP) Toxicités"]}
    actions={[
      { title: "Webinaires de Formation", desc: "Sessions régulières pour former les oncologues à la reconnaissance de toxicités atypiques." },
      { title: "Mémos Pratiques", desc: "Fiches récapitulatives sur la prise en charge en première ligne selon la MASCC." },
      { title: "Outils de Suivi Numérique", desc: "Projet de déploiement d'outils d'e-santé pour faciliter le report de symptômes par les patients." }
    ]} />
}

export function OncoFertilite() {
  return <WorkgroupPage title="Onco-Fertilité" emoji="👶"
    role="Informer, orienter et proposer des solutions concrètes de préservation de la fertilité pour les patients en âge de procréer avant d'entamer des traitements potentiellement gonadotoxiques."
    objectives={["Garantir l'accès universel à la cryoconservation", "Intégrer les consultations de fertilité précocement dans le parcours", "Assurer un suivi post-traitement de qualité"]}
    axes={["Collaboration rapprochée avec les centres de PMA", "Information proactive et bienveillante du public", "Plaidoyer au niveau national et institutionnel"]}
    actions={[
      { title: "Protocoles d'Urgence", desc: "Mise en place de circuits courts de préservation avant l'initiation de la chimiothérapie." },
      { title: "Réseau National", desc: "Création d'un annuaire des centres spécialisés en onco-fertilité à la disposition des médecins et des patients." },
      { title: "Brochures d'Information", desc: "Édition de documents clairs expliquant les risques, les options et les procédures." }
    ]} />
}

export function OncoCardiologie() {
  return <WorkgroupPage title="Onco-Cardiologie" emoji="❤️"
    role="Prévenir, surveiller et traiter les éventuelles complications cardiovasculaires induites par les traitements anti-cancéreux."
    objectives={["Réalisation d'une évaluation cardiovasculaire initiale systématique", "Mise en place d'une surveillance optimisée au long cours", "Prévention de la réversibilité de la fonction cardiaque"]}
    axes={["Facilitation de consultations conjointes Oncologue/Cardiologue", "Développement de registres nationaux", "Enseignement et formation médicale croisée"]}
    actions={[
      { title: "Algorithmes Décisionnels", desc: "Mise à disposition de grilles simplifiées pour l'adaptation des doses en fonction du risque cardiaque." },
      { title: "Séminaires Conjoints", desc: "Rencontres inter-spécialités pour débattre autour de cas cliniques complexes." },
      { title: "Recommandations Locales", desc: "Publication de fiches pratiques basées sur les données scientifiques internationales (ESMO, MASCC)." }
    ]} />
}

export function OncoDermatologie() {
  return <WorkgroupPage title="Onco-Dermatologie" emoji="🧴"
    role="Prendre en charge les diverses altérations et toxicités cutanées, unguéales ou capillaires affectant la qualité de vie du patient."
    objectives={["Prévention et traitement précoce des toxicités cutanées", "Amélioration des soins de support dermatologiques", "Maintien de l'estime de soi à travers la socio-esthétique"]}
    axes={["Développement de la socio-esthétique dans les services d'oncologie", "Mise à disposition de prescriptions dermatologiques claires", "Formation du personnel infirmier"]}
    actions={[
      { title: "Ateliers de Socio-Esthétique", desc: "Séances bien-être offrant soins de peau, de foulards et de maquillage réparateur." },
      { title: "Guide des Soins Locaux", desc: "Ressource pour le patient permettant de choisir les produits adaptés." },
      { title: "Consultations Spécialisées", desc: "Coordination avec des dermatologues pour le suivi des toxicités cutanées sévères." }
    ]} />
}

export function Survivorship() {
  return <WorkgroupPage title="Survivorship & Advocacy" emoji="🎗️"
    role="Accompagner activement l'après-cancer et soutenir le mouvement global visant à porter la voix des patients dans les instances décisionnelles."
    objectives={["Faciliter la réinsertion socio-professionnelle", "Standardiser le suivi à long terme post-traitement", "Défense acharnée des droits des patients et des survivants"]}
    axes={["Campagnes de Plaidoyer (Advocacy) ciblées", "Partenariats innovants avec les employeurs", "Développement de parcours coordonnés post-thérapeutiques"]}
    actions={[
      { title: "Sensibilisation Entreprise", desc: "Création d'une charte pour encourager le maintien et le retour à l'emploi après la maladie." },
      { title: "Réunions Patients Experts", desc: "Impliquer les survivants dans les décisions et les réunions de la MoASCC." },
      { title: "Annuaire des Droits", desc: "Mise à disposition de ressources légales et d'assistance administrative." }
    ]} />
}

export function OutilsDevaluation() {
  return <ResourcePage title="Outils d'Évaluation" emoji="📋" description="Retrouvez ici l'ensemble des scores, échelles et questionnaires validés pour assurer un suivi standardisé et rigoureux en soins de support." 
    resources={[
      { name: "Scores d'Évaluation de la Douleur", icon: "📏", utility: "Échelle visuelle analogique (EVA) et questionnaires d'évaluation des neuropathies (DN4)." },
      { name: "Outils de Dépistage de la Dénutrition", icon: "⚖️", utility: "Formulaires validés tels que le NRS-2002 ou le MUST pour un bilan précoce." },
      { name: "Questionnaires de Qualité de Vie", icon: "📄", utility: "Échelles EORTC ou équivalents pour le suivi de la fatigue, de l'anxiété et de l'état global du patient." }
    ]} />
}

export function EducationPatient() {
  return <ResourcePage title="Éducation des Patients" emoji="📚" description="Une bibliothèque de ressources créées pour les patients et leurs familles, afin de mieux comprendre et d'agir face à la maladie."
    resources={[
      { name: "Brochures Informatées MoASCC", icon: "📑", utility: "Des livrets facilement consultables pour aider à combattre la fatigue, se nourrir, ou gérer les douleurs." },
      { name: "Vidéos Explicatives", icon: "🎬", utility: "Courtes vidéos éducatives sur la préparation aux traitements et le retour à domicile." },
      { name: "Kits de Confort", icon: "🎁", utility: "Informations sur le contenu des kits de support pour accompagner les premières chimiothérapies." }
    ]} />
}

export function Publications() {
  return <ResourcePage title="Publications & Recommandations" emoji="📖" description="Consultez les recommandations de pratiques cliniques édictées ou relayées par MoASCC, l'AFSOS et la MASCC."
    resources={[
      { name: "Guidelines Nationales MoASCC", icon: "📘", utility: "Fiches de recommandations actualisées et traduites sur les différents domaines des soins de support." },
      { name: "Articles Scientifiques et Résumés", icon: "🔬", utility: "Les récentes avancées en soins de support décortiquées pour les professionnels." },
      { name: "Revue de la MASCC", icon: "🌍", utility: "Accès ou liens vers la bibliographie recommandée de la Multinational Association of Supportive Care in Cancer." }
    ]} />
}
