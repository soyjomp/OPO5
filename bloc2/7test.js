const TEST_ID = "7test.js"; 

const questions = [

 {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 1,
    "question": "Segons el Reglament General de Protecció de Dades (RGPD), quin termini màxim té el responsable del tractament per notificar una violació de seguretat de les dades a l'autoritat de control competent?",
    "answers": [
      { "text": "En el termini màxim de 24 hores des que en tingui constància", "correct": false },
      { "text": "Sense dilació indeguda i, si és possible, en un termini màxim de 72 hores", "correct": true },
      { "text": "En el termini improrrogable de 15 dies hàbils", "correct": false },
      { "text": "Durant el mes natural següent a la producció de la bretxa", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 2,
    "question": "Quina és l'autoritat de control competent a Catalunya per supervisar el compliment de la normativa de protecció de dades per part de l'Àrea Metropolitana de Barcelona (AMB)?",
    "answers": [
      { "text": "L'Agència Espanyola de Protecció de Dades (AEPD)", "correct": false },
      { "text": "L'Autoritat Catalana de Protecció de Dades (APDCAT)", "correct": true },
      { "text": "El Consell de Garanties Estatutàries", "correct": false },
      { "text": "La Sindicatura de Comptes de Catalunya", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 3,
    "question": "Quin dels següents principis del tractament establerts a l'article 5 del RGPD obliga a recollir les dades personals amb fins determinats, explícits i legítims?",
    "answers": [
      { "text": "Principi de minimització de dades", "correct": false },
      { "text": "Principi de limitació de la finalitat", "correct": true },
      { "text": "Principi d'exactitud i integritat", "correct": false },
      { "text": "Principi de responsabilitat proactiva", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 4,
    "question": "Segons la LOPDGDD 3/2018, la designació del Delegat de Protecció de Dades (DPD) en les entitats que integren l'administració pública, com l'AMB, té un caràcter:",
    "answers": [
      { "text": "Voluntari i recomanat a criteri del Ple", "correct": false },
      { "text": "Obligatori per a totes les administracions públiques", "correct": true },
      { "text": "Opcional només per als ens locals de menys de 5.000 habitants", "correct": false },
      { "text": "Subordinat a l'aprovació prèvia de l'AEPD", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 5,
    "question": "Quin instrument o inventari han de mantenir obligatòriament publicat i actualitzat les administracions públiques sobre les operacions de tractament de dades que realitzen?",
    "answers": [
      { "text": "El Registre d'Activitats de Tractament (RAT)", "correct": true },
      { "text": "El Pla General de Comptabilitat Pública", "correct": false },
      { "text": "El Catàleg Oficial de Llocs de Treball (RPT)", "correct": false },
      { "text": "L'Esquema Nacional de Seguretat de Fitxers", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 6,
    "question": "En relació amb la base jurídica del tractament de dades a l'Administració Pública, quin error o trampa d'examen cal evitar respecte al consentiment?",
    "answers": [
      { "text": "El consentiment exprés i escrit de l'interessat és obligatori en el 100% dels tràmits públics", "correct": false },
      { "text": "No sempre cal el consentiment exprés de l'interessat, ja que molts tractaments es basen en el compliment d'una obligació legal o en l'exercici de poders públics", "correct": true },
      { "text": "El consentiment tàcit mai té validesa jurídica en cap àmbit de la Funció Pública", "correct": false },
      { "text": "L'Administració no pot tractar dades personals sota cap concepte sense un contracte mercantil previ", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 7,
    "question": "Quin dret dels interessats reconeguts pel RGPD permet a un ciutadà obtenir una còpia de les seves dades personals objecte de tractament?",
    "answers": [
      { "text": "Dret d'oposició", "correct": false },
      { "text": "Dret d'accés (Art. 15)", "correct": true },
      { "text": "Dret a la portabilitat universal", "correct": false },
      { "text": "Dret de limitació cautelar", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 8,
    "question": "Segons el principi de minimització de dades recollit a l'article 5.1.c) del RGPD, les dades personals tractades han de ser:",
    "answers": [
      { "text": "Exhaustives, massives i emmagatzemades de manera indefinida per a consultes futures", "correct": false },
      { "text": "Adequades, pertinents i limitades al que és necessari en relació amb els fins per als quals són tractades", "correct": true },
      { "text": "Anonimitzades automàticament en un termini improrrogable de 24 hores", "correct": false },
      { "text": "Accessible públicament a través del portal de transparència sense cap mena de filtre", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 9,
    "question": "Quin concepte jurídic fa referència a l'ens públic o privat que determina les finalitats i els mitjans del tractament de dades personals?",
    "answers": [
      { "text": "L'encarregat del tractament", "correct": false },
      { "text": "El responsable del tractament", "correct": true },
      { "text": "El delegat de protecció de dades", "correct": false },
      { "text": "L'autoritat de control independent", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 10,
    "question": "Com es coneix popularment el conjunt de drets que inclou l'Accés, Rectificació, Supressió, Limitació, Oposició i Portabilitat en l'àmbit de la gestió telemàtica de l'AMB?",
    "answers": [
      { "text": "Drets ARSULOP", "correct": true },
      { "text": "Drets de concurrència i adaptació", "correct": false },
      { "text": "Garanties d'audiència prèvia", "correct": false },
      { "text": "Mecanismes de tutela administrativa ordinària", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 11,
    "question": "Quin és l'objectiu principal d'aplicar la protecció de dades des del disseny i per defecte en els sistemes d'informació d'una administració local?",
    "answers": [
      { "text": "Reduir el cost econòmic dels equips informàtics a la meitat", "correct": false },
      { "text": "Garantir que les mesures tècniques i organitzatives adequades s'apliquin des del moment mateix del disseny del tractament", "correct": true },
      { "text": "Evitar la necessitat de comptar amb un arxiu electrònic únic", "correct": false },
      { "text": "Permetre la venda de bases de dades municipals a tercers col·laboradors", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 12,
    "question": "En relació amb les funcions del Delegat de Protecció de Dades (DPD), assenyala quina de les següents afirmacions és correcta segons el marc normatiu:",
    "answers": [
      { "text": "Està subordinat jeràrquicament al departament de recursos humans de l'ens", "correct": false },
      { "text": "Informa i assessora el responsable o l'encarregat del tractament sobre les seves obligacions legals", "correct": true },
      { "text": "Té la potestat exclusiva d'imposar multes i sancions econòmiques als ciutadans", "correct": false },
      { "text": "Només pot actuar a petició expressa i prèvia dels jutjats contenciosos administratius", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 13,
    "question": "Quin dret de la persona interessada també és conegut habitualment com a 'dret a l'oblit' en el context del RGPD i la LOPDGDD?",
    "answers": [
      { "text": "El dret de rectificació", "correct": false },
      { "text": "El dret de supressió", "correct": true },
      { "text": "El dret de portabilitat", "correct": false },
      { "text": "El dret d'oposició automatitzada", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 14,
    "question": "Segons l'estructura de la normativa de protecció de dades aplicada als ens locals, a quin àmbit s'estén la competència inspectora i sancionadora de l'APDCAT?",
    "answers": [
      { "text": "Només a les empreses privades mercantils amb ànim de lucre establertes a Barcelona", "correct": false },
      { "text": "A les administracions públiques catalanes, inclosa l'AMB i els ajuntaments de la seva demarcació", "correct": true },
      { "text": "Exclusivament als ministeris depenents de l'Administració General de l'Estat", "correct": false },
      { "text": "A qualsevol organisme de la Unió Europea de manera directa", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 15,
    "question": "Quina condició s'exigeix generalment per exercir els drets ARSULOP per via telemàtica a la seu electrònica de l'AMB?",
    "answers": [
      { "text": "L'ús d'un certificat digital reconegut o mitjà d'identificació electrònica vàlid", "correct": true },
      { "text": "L'enviament d'una carta ordinària segellada per una oficina de correus privada", "correct": false },
      { "text": "La presència física obligatòria de dos testimonis majors d'edat", "correct": false },
      { "text": "El pagament previ d'una taxa administrativa d'accés a arxius", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 16,
    "question": "Quin principi regeix l'exactitud de les dades segons l'article 5 del RGPD?",
    "answers": [
      { "text": "Les dades han de ser exactes i, si cal, actualitzades; adoptant-se les mesures raonables per suprimir o rectificar sense dilació les que siguin inexactes", "correct": true },
      { "text": "Les dades no poden ser modificades sota cap circumstància un cop introduïdes al sistema informàtic", "correct": false },
      { "text": "L'exactitud de les dades depèn exclusivament de la bona fe del ciutadà sense comprovació tècnica", "correct": false },
      { "text": "Qualsevol dada no validada en 48 hores perd la seva validesa jurídica de manera automàtica", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 17,
    "question": "Com es defineix l'encarregat del tractament en el marc de la normativa europea de protecció de dades?",
    "answers": [
      { "text": "La persona física o jurídica, autoritat pública, servei o altre organisme que tracta dades personals per compte del responsable del tractament", "correct": true },
      { "text": "El ciutadà titular de les dades que atorga el consentiment exprés", "correct": false },
      { "text": "El jutge de guàrdia encarregat de resoldre conflictes de privacitat", "correct": false },
      { "text": "L'empleat públic que arxiva físicament els expedients d'urbanisme", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 18,
    "question": "Quin principi garanteix que les dades personals siguin tractades de tal manera que s'asseguri una seguretat adequada, inclosa la protecció contra el tractament no autoritzat o il·lícit?",
    "answers": [
      { "text": "Integritat i confidencialitat", "correct": true },
      { "text": "Llibertat de circulació de dades", "correct": false },
      { "text": "Publicitat activa i transparència", "correct": false },
      { "text": "Centralització i inalterabilitat", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 19,
    "question": "En relació amb els canals d'exercici de drets, on s'han de publicar obligatòriament les dades de contacte del Delegat de Protecció de Dades d'un ens com l'AMB?",
    "answers": [
      { "text": "S'han de comunicar a l'autoritat de control i fer-les públiques a disposició de la ciutadania", "correct": true },
      { "text": "Només en un document intern d'ús exclusiu per a la direcció general", "correct": false },
      { "text": "En un llibre de circulació interna no accessible per via electrònica", "correct": false },
      { "text": "Es mantenen sota secret professional i no es poden divulgar sota cap concepte", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 20,
    "question": "Quin efecte comporta el principi de limitació del termini de conservació de les dades personals?",
    "answers": [
      { "text": "Les dades s'han de mantenir en una forma que permeti la identificació dels interessats durant no més temps del necessari per als fins del tractament", "correct": true },
      { "text": "Totes les dades públiques s'han de destruir rigorosament en un termini fix de 30 dies", "correct": false },
      { "text": "L'Administració pot conservar indefinidament qualsevol dada sense justificació prèvia", "correct": false },
      { "text": "El termini de conservació el decideix lliurement cada funcionari gestor de l'expedient", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 21,
    "question": "Quin és el marc normatiu europeu de referència directa que regula la protecció de les persones físiques pel que fa al tractament de dades personals des de maig de 2018?",
    "answers": [
      { "text": "El Reglament (UE) 2016/679 (RGPD)", "correct": true },
      { "text": "La Directiva europea 95/46/CE", "correct": false },
      { "text": "El Reial Decret Legislatiu 2/2004", "correct": false },
      { "text": "La Llei Orgànica 15/1999 de Protecció de Dades", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 22,
    "question": "Quina característica defineix l'exercici dels drets dels interessats davant de l'AMB segons la normativa vigent?",
    "answers": [
      { "text": "Són de caràcter gratuït per a l'interessat", "correct": true },
      { "text": "Comporten una taxa fixa de tramitació administrativa per cada sol·licitud", "correct": false },
      { "text": "Requereixen necessàriament la contractació d'un advocat col·legiat", "correct": false },
      { "text": "Només es poden exercir de manera presencial a les oficines centrals", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 23,
    "question": "Quin organisme o entitat pública supramunicipal de Catalunya agrupa 36 municipis i integra les directrius de seguretat de la informació i protecció de dades en la seva gestió?",
    "answers": [
      { "text": "L'Àrea Metropolitana de Barcelona (AMB)", "correct": true },
      { "text": "El Consorci Sanitari de Barcelona", "correct": false },
      { "text": "L'Autoritat Catalana de Transport Ferroviari", "correct": false },
      { "text": "La Diputació General de Serveis Ambientals", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 24,
    "question": "Quina és la repercussió del principi de responsabilitat proactiva (accountability) exigit pel RGPD als responsables del tractament?",
    "answers": [
      { "text": "El responsable ha de ser capaç de demostrar el compliment dels principis relatius al tractament", "correct": true },
      { "text": "Eximeix l'administració pública de respondre davant de reclamacions ciutadanes", "correct": false },
      { "text": "Permet delegar tota responsabilitat jurídica directament en l'empresa subministradora de programari", "correct": false },
      { "text": "Autoritza l'inici d'activitats de tractament sense necessitat d'inscripció prèvia al RAT", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 25,
    "question": "En el supòsit que un ciutadà s'oposi al tractament de les seves dades basat en l'interès públic, què estableix la normativa general de protecció?",
    "answers": [
      { "text": "El responsable haurà de deixar de tractar les dades, tret que acrediti motius legítims imperiosos que prevalguin sobre els interessos de l'interessat", "correct": true },
      { "text": "El tractament continua automàticament sense dret de rèplica per part del ciutadà", "correct": false },
      { "text": "S'anul·la immediatament qualsevol expedient administratiu en curs de manera irreversible", "correct": false },
      { "text": "El cas es remet directament a la jurisdicció penal ordinària sense tràmit previ", "correct": false }
    ]
  },

];


// --- LÒGICA DE FUNCIONAMENT ---
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function renderTest() {
  const form = document.getElementById("test-form");
  if (!form) return;
  form.innerHTML = "";
  
  let currentQuestions;
  const savedOrder = localStorage.getItem(`questions-${TEST_ID}`);
  
  if (savedOrder) {
    currentQuestions = JSON.parse(savedOrder);
  } else {
    currentQuestions = questions.map(q => ({
      ...q,
      answers: shuffleArray([...q.answers])
    }));
    currentQuestions = shuffleArray(currentQuestions);
    localStorage.setItem(`questions-${TEST_ID}`, JSON.stringify(currentQuestions));
  }

  const savedProgress = JSON.parse(localStorage.getItem(`progress-${TEST_ID}`)) || { respuestas: {} };

  currentQuestions.forEach((q, index) => {
    const questionWrapper = document.createElement("div");
    questionWrapper.className = "question";
    questionWrapper.id = `q-container-${index}`;

    const title = document.createElement("h3");
    title.textContent = `${index + 1}. ${q.question}`;
    questionWrapper.appendChild(title);

    const answersWrapper = document.createElement("div");
    answersWrapper.className = "answers";

    q.answers.forEach((a) => {
      const label = document.createElement("label");
      label.className = "answer";
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q${index}`;
      input.value = a.text;
      input.dataset.correct = a.correct;
      
      if (savedProgress.respuestas[`q${index}`] === a.text) {
        input.checked = true;
      }

      label.appendChild(input);
      label.appendChild(document.createTextNode(a.text));
      answersWrapper.appendChild(label);
    });

    questionWrapper.appendChild(answersWrapper);

    // --- CONTENIDOR DE PISTES I SOLUCIÓ ---
    const helpBox = document.createElement("div");
    helpBox.className = "help-box";
    helpBox.style.marginTop = "12px";

    const hints = [q.hint, q.hint2, q.hint3].filter(Boolean);
    let currentHintIdx = 0;

    if (hints.length > 0) {
      const hintBtn = document.createElement("button");
      hintBtn.type = "button";
      hintBtn.textContent = "💡 Mostrar Pista";
      hintBtn.className = "hint-btn";
      hintBtn.style.marginRight = "10px";
      hintBtn.style.padding = "5px 10px";
      hintBtn.style.cursor = "pointer";
      
      const hintDisplay = document.createElement("div");
      hintDisplay.className = "hint-display";
      hintDisplay.style.marginTop = "6px";
      hintDisplay.style.fontStyle = "italic";
      hintDisplay.style.color = "#4b5563";

      hintBtn.addEventListener("click", () => {
        if (currentHintIdx < hints.length) {
          const p = document.createElement("p");
          p.style.margin = "4px 0";
          p.textContent = hints[currentHintIdx];
          hintDisplay.appendChild(p);
          currentHintIdx++;
          
          if (currentHintIdx >= hints.length) {
            hintBtn.textContent = "💡 Pistes esgotades";
            hintBtn.disabled = true;
            hintBtn.style.opacity = "0.6";
            hintBtn.style.cursor = "not-allowed";
          } else {
            hintBtn.textContent = `💡 Mostrar següent pista (${currentHintIdx}/${hints.length})`;
          }
        }
      });

      helpBox.appendChild(hintBtn);
      helpBox.appendChild(hintDisplay);
    }

    if (q.solution) {
      const solBtn = document.createElement("button");
      solBtn.type = "button";
      solBtn.textContent = "📖 Veure Explicació / Resposta";
      solBtn.className = "sol-btn";
      solBtn.style.marginTop = "8px";
      solBtn.style.padding = "5px 10px";
      solBtn.style.cursor = "pointer";

      const solDisplay = document.createElement("div");
      solDisplay.className = "sol-display";
      solDisplay.style.display = "none";
      solDisplay.style.marginTop = "6px";
      solDisplay.style.fontWeight = "500";
      solDisplay.style.color = "#1e40af";
      solDisplay.innerHTML = `<p style="margin: 4px 0;">${q.solution}</p>`;

      solBtn.addEventListener("click", () => {
        if (solDisplay.style.display === "none") {
          solDisplay.style.display = "block";
          solBtn.textContent = "📖 Ocultar Explicació";
        } else {
          solDisplay.style.display = "none";
          solBtn.textContent = "📖 Veure Explicació / Resposta";
        }
      });

      helpBox.appendChild(document.createElement("br"));
      helpBox.appendChild(solBtn);
      helpBox.appendChild(solDisplay);
    }

    questionWrapper.appendChild(helpBox);
    form.appendChild(questionWrapper);

    if (savedProgress.respuestas[`q${index}`]) {
        autoCheckAnswer(questionWrapper);
    }
  });

  updateResponseCounter();
}

function autoCheckAnswer(questionEl) {
  const labels = questionEl.querySelectorAll("label");
  labels.forEach(label => {
    const input = label.querySelector("input");
    if (input.checked) {
      label.classList.add(input.dataset.correct === "true" ? "correct" : "incorrect");
    } else {
      label.classList.remove("correct", "incorrect");
    }
  });
}

function updateResponseCounter() {
  const currentQuestions = JSON.parse(localStorage.getItem(`questions-${TEST_ID}`));
  if (!currentQuestions) return;
  const total = currentQuestions.length;
  
  const selectedInputs = document.querySelectorAll("input[type=radio]:checked");
  const selectedCount = selectedInputs.length;

  let correctCount = 0;
  let incorrectCount = 0;

  selectedInputs.forEach(input => {
    if (input.dataset.correct === "true") {
      correctCount++;
    } else {
      incorrectCount++;
    }
  });

  const rc = document.getElementById("response-counter");
  const cc = document.getElementById("correct-counter");
  const ic = document.getElementById("incorrect-counter");
  const prog = document.getElementById("progress");

  if (rc) rc.textContent = `📄 Respostes: ${selectedCount}/${total}`;
  if (cc) cc.textContent = `✅ Encerts: ${correctCount}`;
  if (ic) ic.textContent = `❌ Errors: ${incorrectCount}`;
  if (prog) prog.style.width = `${(selectedCount / total) * 100}%`;

  const respuestas = {};
  selectedInputs.forEach(input => { respuestas[input.name] = input.value; });
  localStorage.setItem(`progress-${TEST_ID}`, JSON.stringify({ total: total, respuestas: respuestas }));
}

function evaluateTest() {
  const questionsDOM = document.querySelectorAll(".question");
  let correctCount = 0;
  let total = questionsDOM.length;

  questionsDOM.forEach((questionEl) => {
    const inputCorrecto = questionEl.querySelector('input[data-correct="true"]');
    const inputMarcado = questionEl.querySelector('input:checked');
    questionEl.querySelectorAll("label").forEach(l => l.classList.remove("correct", "incorrect"));
    if (inputCorrecto) inputCorrecto.parentElement.classList.add("correct");

    if (inputMarcado) {
      if (inputMarcado.dataset.correct === "true") correctCount++;
      else inputMarcado.parentElement.classList.add("incorrect");
    }
  });

  const fallos = total - correctCount;
  const nota = ((correctCount / total) * 10).toFixed(2);
  const aprobado = fallos <= 5;

  const scoreDiv = document.getElementById("score");
  if (scoreDiv) {
    scoreDiv.style.display = "block";
    if (aprobado) {
      scoreDiv.innerHTML = `<h2>✅ MISSIÓ COMPLERTA</h2> Nota: ${nota}/10 <br> Errors: ${fallos}`;
      scoreDiv.style.background = "#dcfce7";
      scoreDiv.style.color = "#166534";
    } else {
      scoreDiv.innerHTML = `<h2>❌ GAME OVER</h2> Nota: ${nota}/10 <br> Errors: ${fallos} <br> (Màxim permès: 5)`;
      scoreDiv.style.background = "#fee2e2";
      scoreDiv.style.color = "#991b1b";
    }
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function reiniciarTest() {
    if (confirm("Vols reiniciar la missió? L'ordre de les preguntes canviarà.")) {
        localStorage.removeItem(`questions-${TEST_ID}`);
        localStorage.removeItem(`progress-${TEST_ID}`);
        location.reload();
    }
}

document.addEventListener("change", (e) => {
  if (e.target.matches("input[type=radio]")) {
    updateResponseCounter();
    autoCheckAnswer(e.target.closest(".question"));
  }
});

// Esdeveniments d'inici
document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submit");
  if (submitBtn) {
    submitBtn.addEventListener("click", evaluateTest);
  }
  renderTest();
});