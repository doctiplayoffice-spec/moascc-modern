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

export function ModernPage({ title, emoji, desc, paragraphs, responsable }) {
  return (
    <>
      <PageHero title={title} emoji={emoji} description={desc} />
      <section style={{ backgroundColor: 'var(--white)', padding: '4rem 5%' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text)', lineHeight: '1.8' }}>
          {paragraphs && paragraphs.map((p, i) => (
            <p key={i} style={{ marginBottom: '1.5rem' }}>{p}</p>
          ))}
          {responsable && (
            <div className="card" style={{ marginTop: '2rem', borderLeft: '4px solid var(--primary)', display: 'inline-block' }}>
              <p style={{ margin: 0, fontWeight: 'bold', color: 'var(--primary)' }}>Responsable :</p>
              <p style={{ margin: 0, fontSize: '1.2rem' }}>{responsable}</p>
            </div>
          )}
          {(!paragraphs || paragraphs.length === 0) && !responsable && (
            <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-light)', fontStyle: 'italic' }}>
              <p>Contenu en cours de préparation par MoASCC...</p>
            </div>
          )}
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
  return <ModernPage 
    title="Pain Management" emoji="💊"
    desc="La douleur est l’un des symptômes les plus redoutés et les plus fréquemment rencontrés chez les patients atteints de cancer."
    paragraphs={[
      "La douleur est l’un des symptômes les plus redoutés et les plus fréquemment rencontrés chez les patients atteints de cancer, affectant profondément leur qualité de vie à toutes les phases de la maladie. Elle peut résulter directement de la tumeur, des traitements anticancéreux ou de complications associées. En oncologie, une prise en charge efficace de la douleur repose sur une évaluation rigoureuse, multidimensionnelle et régulière, ainsi que sur des approches thérapeutiques intégrées alliant traitements médicamenteux et stratégies non pharmacologiques.",
      "L’objectif n’est pas seulement de soulager, mais de permettre au patient de maintenir son autonomie, de préserver sa dignité et de renforcer son confort au quotidien. L’intégration des soins de support, en collaboration étroite avec les équipes d’oncologie, est donc essentielle pour garantir une prise en charge globale, personnalisée et évolutive de la douleur cancéreuse.",
      "Outre les traitements médicamenteux, des thérapies non pharmacologiques sont également bénéfiques dans la gestion de la douleur. Des techniques telles que la physiothérapie, la relaxation, ou l’acupuncture peuvent offrir un soulagement complémentaire. Au sein de l’Association marocaine de soutien contre le cancer, nous encourageons les patients à explorer ces options pour une approche holistique de la gestion de la douleur."
    ]}
    responsable="DR ASMAI YASSER"
  />
}

export function Nutrition() {
  return <ModernPage 
    title="Nutrition en Oncologie" emoji="🥗"
    desc="La nutrition doit être prise en compte pendant le traitement d’un cancer, car elle a un impact sur le patient, la maladie et la guérison."
    paragraphs={[
      "Prise en charge nutritionnelle des malades atteints de cancer.",
      "La nutrition doit être prise en compte pendant le traitement d’un cancer, car elle a un impact sur le patient, la maladie et la guérison. Elle joue un rôle clé dans toutes les phases du traitement oncologique.",
      "Les objectifs de ce groupe sont :",
      "• Favoriser les échanges scientifiques au sein du groupe.",
      "• Diffuser les connaissances validées en nutrition et cancer",
      "• Participer à la formation des professionnels dans le domaine « nutrition et cancer »"
    ]}
    responsable="DR NEJJAR IKRAM ; DR TIKOUR IKRAM"
  />
}

export function Psychosocial() {
  return <ModernPage 
    title="Soutien Psychosocial" emoji="🧠"
    desc="La maladie cancéreuse bouleverse profondément la vie des patients, bien au-delà de ses manifestations physiques."
    paragraphs={[
      "La maladie cancéreuse bouleverse profondément la vie des patients, bien au-delà de ses manifestations physiques. Le retentissement psychologique, émotionnel et social du cancer est majeur et nécessite une attention tout aussi rigoureuse que la prise en charge médicale. Anxiété, dépression, isolement, perte de repères, altération de l’image corporelle, perturbation des relations familiales et professionnelles sont autant de défis auxquels les patients peuvent être confrontés tout au long de leur parcours.",
      "Ce groupe de travail a pour ambition de réfléchir collectivement aux meilleures stratégies d’accompagnement psychosocial, en s’appuyant sur des approches pluridisciplinaires intégrant psychologie, assistance sociale, soins de support, mais aussi témoignages de patients et partenariats associatifs. L’objectif est de proposer des outils concrets, adaptés aux réalités du terrain, pour améliorer la qualité de vie et le vécu global des personnes touchées par le cancer."
    ]}
    responsable="DR RHONDALI WALID"
  />
}

export function Fatigue() {
  return <ModernPage 
    title="Activités Physiques Adaptées" emoji="🏃‍♀️"
    desc="Maintenir une activité physique permet une amélioration symptomatique de la fatigue, de la qualité de vie et de l'état psychologique."
    paragraphs={[
      "Pour les patients atteints de cancer, maintenir une activité physique permet une amélioration symptomatique de la fatigue, une amélioration de la qualité de vie et de l’état psychologique et émotionnel.",
      "L’objectif de ce groupe de travail est de mener une réflexion sur la façon d’implémenter un programme APA dans le parcours de soins du patient en oncologie."
    ]}
    responsable="DR MESBAH LATIFA ; DR KHARMOUN SAWSANE"
  />
}

export function ToxiciteEmergente() {
  return <ModernPage 
    title="Toxicités Émergentes" emoji="🔬"
    desc="Face aux nouveaux traitements, patients et oncologues doivent gérer de nouvelles toxicités, bien différentes des chimiothérapies classiques."
    paragraphs={[
      "Les nouveaux médicaments anticancéreux sont souvent associés à de meilleurs résultats oncologiques. Mais avec ces nouveaux médicaments, les patients, les soignants et les oncologues médicaux doivent faire face à de nouvelles toxicités, bien différentes des effets secondaires de la chimiothérapie conventionnelle.",
      "L’objectif de ce groupe est de partager les connaissances actuelles sur ces nouvelles toxicités et de mener des études chez le patient marocain."
    ]}
    responsable="DR BENABID FATMA"
  />
}

export function OncoFertilite() {
  return <ModernPage 
    title="Onco-Fertilité" emoji="👶"
    desc="Certains traitements anticancéreux peuvent entraîner une baisse de la fertilité voire une stérilité."
    paragraphs={[
      "Certains traitements des cancers peuvent entraîner une baisse de la fertilité voire une stérilité. Il est donc important d’envisager une prise en charge spécifique de préservation de la fertilité pour les patients atteints de cancer.",
      "Objectifs du groupe :",
      "• Informer et sensibiliser les professionnels de santé sur la notion de préservation de la fertilité avant un traitement gonadotoxique.",
      "• Informer les patients sur leurs droits, sur les indications et les techniques de préservation de la fertilité.",
      "• Elaborer des recommandations nationales à ce sujet.",
      "• Participer à l’élaboration d’un contexte réglementaire."
    ]}
    responsable="DR SIHAM LKHOUALI ; DR BAHAE BENAMAR"
  />
}

export function OncoCardiologie() {
  return <ModernPage 
    title="Onco-Cardiologie" emoji="❤️"
    desc="Prévenir, surveiller et prendre en charge les toxicités cardiaques liées aux traitements oncologiques."
    paragraphs={[
      "Cancer et maladies cardiovasculaires coexistent souvent et les traitements anticancéreux peuvent être à l’origine d’une toxicité cardiaque ou vasculaire.",
      "Objectif de ce groupe : améliorer le diagnostic et la prise en charge des complications ou des toxicités cardio-vasculaires des traitements et Fournir aux médecins des protocoles de surveillance et de prise en charge cardiovasculaires des patients traités pour un cancer établis par des cardiologues et oncologues ayant une expertise en cardio-oncologie à partir de recommandations internationales."
    ]}
    responsable="DR HANANE BELGHITI"
  />
}

export function OncoDermatologie() {
  return <ModernPage 
    title="Onco-Dermatologie" emoji="🧴"
    desc="Prendre en charge les effets indésirables cutanés des traitements anticancéreux pour améliorer la qualité de vie."
    paragraphs={[
      "Les réactions cutanées sont fréquentes chez les personnes atteintes de cancer. Elles peuvent réduire la qualité de vie et nécessiter des modifications du traitement antinéoplasique. Ces effets indésirables sont souvent sous-déclarés ou négligés.",
      "Ce groupe d’étude interdisciplinaire vise à favoriser la communication et la collaboration entre les oncologues, les dermatologues, les infirmières et les autres professionnels de soutien afin de développer des stratégies visant à améliorer l’évaluation rapide des toxicités dermatologiques."
    ]}
    responsable="DR TBATOU FADWA ; DR AFIF MOHAMED"
  />
}

export function Survivorship() {
  return <ModernPage 
    title="Survivorship & Advocacy" emoji="🎗️"
    desc="Soutenir ceux qui ont vaincu le cancer et défendre leurs droits face aux nouveaux enjeux de l'après-maladie."
    paragraphs={[
      "Avec les avancées majeures en oncologie, le nombre de patients vivant plusieurs années après un diagnostic de cancer ne cesse d’augmenter. Cette nouvelle réalité soulève des enjeux spécifiques en termes de suivi médical, de qualité de vie, de gestion des effets tardifs des traitements, de réinsertion sociale et professionnelle, ainsi que de soutien psychologique.",
      "Le terme ‘survivorship patient advocacy’ désigne l’engagement à soutenir ceux qui ont vaincu le cancer. À travers des efforts de plaidoyer, la MoASCC s’efforce d’améliorer la qualité de vie des survivants."
    ]}
    responsable="DR BEN ABID FATMA"
  />
}

export function OutilsDevaluation() {
  return <ModernPage 
    title="Outils d'Évaluation" emoji="📋" 
    desc="Outils et scores d'aide à la décision."
    paragraphs={[]}
  />
}

export function EducationPatient() {
  return <ModernPage 
    title="Éducation des Patients" emoji="📚" 
    desc="Ressources dédiées à l'éducation thérapeutique."
    paragraphs={[]}
  />
}

export function Publications() {
  return <ModernPage 
    title="Publications & Recommandations" emoji="📖" 
    desc="Documents et recommandations scientifiques."
    paragraphs={[]}
  />
}
