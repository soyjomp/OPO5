const TEST_ID = "38test.js"; 

const questions = [

 {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 1,
    "question": "Segons el marc normatiu vigent en matèria de protecció de dades a l'administració pública, quin és el paper del consentiment de l'interessat en l'àmbit de l'AMB?",
    "answers": [
      { "text": "És la base jurídica principal i necessària per a qualsevol tractament de dades personals realitzat per l'ens", "correct": false },
      { "text": "Queda relegat a supòsits molt específics, ja que el tractament es basa generalment en el compliment d'una obligació legal o interès públic", "correct": true },
      { "text": "No pot ser utilitzat en cap cas per les administracions públiques locals per prohibició expressa del RGPD", "correct": false },
      { "text": "Requereix sempre una autorització prèvia i expressa de l'Autoritat Catalana de Protecció de Dades", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 2,
    "question": "Quin és el termini màxim general establert perquè el responsable del tractament respongui a una sol·licitud d'exercici de drets per part d'una persona interessada?",
    "answers": [
      { "text": "Deu dies hàbils, d'acord amb el règim jurídic de procediment administratiu comú", "correct": false },
      { "text": "Un mes a comptar des de la recepció de la petició, prorrogable dos mesos més si la complexitat ho requereix", "correct": true },
      { "text": "Tres mesos naturals improrrogables en tots els supòsits", "correct": false },
      { "text": " quinze dies naturals des de la seva entrada al registre electrònic", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 3,
    "question": "Segons l'article 37 del RGPD i la LOPDGDD, quina condició s'aplica respecte a la figura del Delegat de Protecció de Dades (DPD) a l'Administració Pública i a l'AMB?",
    "answers": [
      { "text": "La seva designació és totalment voluntària i depèn de la disponibilitat pressupostària de cada ens local", "correct": false },
      { "text": "És obligatòria en totes les autoritats i organismes públics, inclosos els ens locals com l'AMB", "correct": true },
      { "text": "Només és obligatòria per a aquells municipis de més de 50.000 habitants", "correct": false },
      { "text": "Funciona exclusivament com a òrgan consultiu extern vinculat a la Generalitat de Catalunya", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 4,
    "question": "Quina de les següents opcions descriu correctament el Registre d'Activitats de Tractament (RAT) en el context de l'AMB segons el seu portal de transparència?",
    "answers": [
      { "text": "Un fitxer secret de caràcter intern només accessible per a la inspecció de treball i seguretat social", "correct": false },
      { "text": "Un registre públic on s'especifiquen detalladament les finalitats, categories de dades, conservació i procediments dels serveis metropolitans", "correct": true },
      { "text": "Un arxiu temporal de dades econòmiques que s'elimina automàticament en finalitzar cada exercici pressupostari", "correct": false },
      { "text": "Un registre exclusiu per a la gestió de recursos humans i personal propi de l'entitat", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 5,
    "question": "Quina base jurídica principal recollida a l'article 6.1 del RGPD justifica habitualment el tractament de dades per part de l'Administració Pública en l'exercici de les seves funcions?",
    "answers": [
      { "text": "El consentiment inequívoc i tàcit de l'interessat", "correct": false },
      { "text": "El compliment d'una obligació legal aplicable al responsable o una missió realitzada en interès públic", "correct": true },
      { "text": "L'interès legítim comercial de l'ens públic en la gestió de serveis", "correct": false },
      { "text": "L'execució d'un contracte privat de prestació de serveis subscrit amb la ciutadania", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 6,
    "question": "Quin requisit formal és indispensable per exercir telemàticament els drets de protecció de dades a través de la Seu Electrònica de l'AMB?",
    "answers": [
      { "text": "L'ús d'un certificat digital degudament reconegut per a la identificació de la persona interessada", "correct": true },
      { "text": "L'enviament d'un correu electrònic ordinari sense signatura electrònica", "correct": false },
      { "text": "La presència física obligaria a les oficines centrals amb cita prèvia", "correct": false },
      { "text": "L'aportació d'una fotocòpia compulsada del DNI per via postal ordinària exclusivament", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 7,
    "question": "Quina de les següents opcions NO constitueix un principi clau del tractament de dades personals segons l'article 5 del RGPD?",
    "answers": [
      { "text": "Minimització de dades i exactitud", "correct": false },
      { "text": "Llicitud, lleialtat i transparència", "correct": false },
      { "text": "Integritat i confidencialitat", "correct": false },
      { "text": "Benefici econòmic directe i maximització del rendiment de la dada", "correct": true }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 8,
    "question": "Quin és un dels errors o trampes més habituals en l'àmbit d'examen respecte al consentiment en l'Administració Pública?",
    "answers": [
      { "text": "Creure que l'administració necessita sempre el consentiment exprés de la persona per tractar qualsevol dada derivada de les seves competències legals", "correct": true },
      { "text": "Pensar que el consentiment es pot revocar en qualsevol moment sense efectes retroactius", "correct": false },
      { "text": "Suposar que el DPD pot autoritzar l'ús de dades sense base legal prèvia", "correct": false },
      { "text": "Considerar que el silenci positiu equival a un consentiment exprés en matèria tributària", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 9,
    "question": "Quina de les següents funcions correspon de manera específica al Delegat de Protecció de Dades (DPD)?",
    "answers": [
      { "text": "Imposar sancions econòmiques directes als ciutadans que incompleixin la normativa", "correct": false },
      { "text": "Informar i assessorar el responsable o l'encarregat del tractament sobre les seves obligacions legals", "correct": true },
      { "text": "Gestionar directament la recaptació dels tributs metropolitans i el recàrrec de l'IBI", "correct": false },
      { "text": "Substituir l'autoritat de control en la resolució de conflictes laborals interns", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 10,
    "question": "Quin reglament europeu constitueix el pilar fonamental del marc jurídic actual de la protecció de dades aplicable a l'estat espanyol?",
    "answers": [
      { "text": "El Reglament (UE) 2016/679 (Reglament General de Protecció de Dades - RGPD)", "correct": true },
      { "text": "La Directiva europea de comerç electrònic i serveis de la societat de la informació", "correct": false },
      { "text": "El Reial Decret Legislatiu sobre procediment administratiu comú de les administracions públiques", "correct": false },
      { "text": "La Llei Orgànica de Garantia Integral de la Llibertat Digital", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 11,
    "question": "Quina llei orgànica espanyola complementa i adapta el RGPD en matèria de garantia dels drets digitals?",
    "answers": [
      { "text": "La Llei Orgànica 3/2018, de 5 de desembre (LOPDGDD)", "correct": true },
      { "text": "La Llei Orgànica 7/2021 de protecció de dades tractades per a finalitats de prevenció", "correct": false },
      { "text": "La Llei 31/2010 de l'Àrea Metropolitana de Barcelona", "correct": false },
      { "text": "El Text Refós de la Llei Reguladora de les Hisendes Locals", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 12,
    "question": "Dins del catàleg de drets de les persones interessades, com es coneix popularment el dret a la supressió de les dades personals?",
    "answers": [
      { "text": "Dret a l'oblit", "correct": true },
      { "text": "Dret de portabilitat universal", "correct": false },
      { "text": "Dret d'oposició automàtica", "correct": false },
      { "text": "Dret de limitació cautelar", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 13,
    "question": "Quina és la funció del punt de contacte oficial que representa el DPD respecte a l'autoritat de control?",
    "answers": [
      { "text": "Actuar com a enllaç de comunicació i cooperació davant l'AEPD o l'autoritat autonòmica competent", "correct": true },
      { "text": "Coordinar els serveis de recaptació executiva de l'AMB amb l'agència tributària estatal", "correct": false },
      { "text": "Supervisar directament els pressupostos anuals de l'entitat local", "correct": false },
      { "text": "Tramitar els recursos d'alçada interposats contra resolucions del ple metropolità", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 14,
    "question": "En relació amb el principi de limitació del termini de conservació, quin objectiu persegueix la normativa de protecció de dades?",
    "answers": [
      { "text": "Que les dades es mantinguin només durant el temps necessari per als fins del tractament", "correct": true },
      { "text": "Garantir la conservació indefinida de qualsevol document administratiu per raons històriques", "correct": false },
      { "text": "Permetre la destrucció immediata de registres comptables el mateix dia de la seva emissió", "correct": false },
      { "text": "Obligar a la ciutadania a renovar el seu consentiment cada sis mesos", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 15,
    "question": "Quina característica defineix el principi de minimització de dades en el tractament administratiu?",
    "answers": [
      { "text": "Les dades han de ser adequades, pertinents i limitades al que sigui necessari en relació amb les finalitats", "correct": true },
      { "text": "S'ha de recollir el màxim volum possible d'informació de la persona per si en un futur resulta útil", "correct": false },
      { "text": "Les dades s'han de mantenir anònimes en qualsevol fase del procediment administratiu", "correct": false },
      { "text": "Es limita l'accés a les dades exclusivament als alts càrrecs de l'administració", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 16,
    "question": "Quin dret reconegut al RGPD permet a l'interessat rebre les seves dades personals en un format estructurat, d'ús comú i lectura mecànica?",
    "answers": [
      { "text": "El dret a la portabilitat", "correct": true },
      { "text": "El dret de rectificació", "correct": false },
      { "text": "El dret d'oposició", "correct": false },
      { "text": "El dret a la limitació del tractament", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 17,
    "question": "Quina implicació té el principi d'integritat i confidencialitat en la gestió de dades públiques?",
    "answers": [
      { "text": "Garantir una seguretat adequada contra el tractament no autoritzat, la pèrdua o la destrucció accidental", "correct": true },
      { "text": "Publicar de manera obligatòria totes les dades personals al tauler d'anuncis municipal", "correct": false },
      { "text": "Permetre la cessió lliure de dades entre diferents empreses privades col·laboradores", "correct": false },
      { "text": "Establir que la informació no pot ser digitalitzada sota cap concepte", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 18,
    "question": "Davant de quina situació pot un ciutadà exercir el dret d'oposició segons la normativa de protecció de dades?",
    "answers": [
      { "text": "Per motius relacionats amb la seva situació particular, quan el tractament es basi en l'interès públic", "correct": true },
      { "text": "Únicament quan hagi donat prèviament el seu consentiment exprés i per escrit", "correct": false },
      { "text": "Quan vulgui evitar el pagament de tributs o taxes legalment establertes", "correct": false },
      { "text": "En qualsevol moment, sense necessitat de justificar cap mena de motiu personal", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 19,
    "question": "Quina és la naturalesa de les dades de contacte del Delegat de Protecció de Dades en el marc de l'AMB?",
    "answers": [
      { "text": "Han de ser publicades públicament i comunicades a l'autoritat de control competent", "correct": true },
      { "text": "Sienen caràcter reservat i només es faciliten sota previ pagament d'una taxa", "correct": false },
      { "text": "Són d'ús exclusiu per al President de la corporació metropolitana", "correct": false },
      { "text": "No poden ser divulgades sota cap circumstància per motius de seguridad", "correct": true }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 20,
    "question": "Com afecta el principi de licitud al tractament de dades dins de l'Administració Pública local?",
    "answers": [
      { "text": "Exigeix que tot tractament estigui amparat per la llei o per algun dels requisits de l'article 6 del RGPD", "correct": true },
      { "text": "Permet a l'ajuntament o a l'AMB recaptar dades sense cap limitació normativa prèvia", "correct": false },
      { "text": "Estableix que només es poden tractar dades si hi ha un benefici econòmic directe per a l'ens", "correct": false },
      { "text": "Garanteix que l'administració no pot emmagatzemar informació en servidors digitals", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 21,
    "question": "Quin tipus de decisions queden generalment prohibides o sotmeses a estrictes garanties segons l'article 22 del RGPD?",
    "answers": [
      { "text": "Les decisions individualitzades automatitzades, inclosa l'elaboració de perfils", "correct": true },
      { "text": "Les resolucions adoptades col·ledivament pel Ple del Consell Metropolità", "correct": false },
      { "text": "Els actes de tràmit no qualificats dins d'un procediment de subvencions", "correct": false },
      { "text": "La tramitació electrònica de llicències d'obres menors", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 22,
    "question": "Quina és la finalitat principal d'incloure apartats específics sobre la política de privacitat a la web oficial de l'AMB (amb.cat)?",
    "answers": [
      { "text": "Complir amb els principis de transparència i informació deguda a la ciutadania sobre el tractament de dades", "correct": true },
      { "text": "Promocionar serveis comercials privats de les empreses adjudicatàries de la zona metropolitana", "correct": false },
      { "text": "Establir un canal de venda online de productes i merchandising institucional", "correct": false },
      { "text": "Restringir l'accés a la informació pública exclusivament a residents empadronats", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 23,
    "question": "En cas que una petició d'exercici de drets sigui especialment complexa, quant es pot prorrogar com a màxim el termini inicial de resposta?",
    "answers": [
      { "text": "Dos mesos més", "correct": true },
      { "text": "Sis mesos addicionals", "correct": false },
      { "text": "Un any natural complet", "correct": false },
      { "text": "No es preveu cap prorroga en cap circumstància", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 24,
    "question": "Quina és una de les obligacions essencials del responsable del tractament quan es produeix una violació de la seguretat de les dades personals?",
    "answers": [
      { "text": "Notificar-ho a l'autoritat de competència competent sense dilació indeguda, llevat que sigui improbable que comporti un risc", "correct": true },
      { "text": "Ocultar la incidència per evitar la responsabilitat patrimonial de l'administració", "correct": false },
      { "text": "Publicar immediatament la llista de afectats a la premsa local", "correct": false },
      { "text": "Esperar al tancament de l'exercici pressupostari per informar en la memòria anual", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 25,
    "question": "Quin paper juguen les autoritats de control (com l'AEPD o l'autoritat autonòmica) respecte al compliment de la normativa a l'Administració Pública?",
    "answers": [
      { "text": "Vetllar pel compliment de la normativa i exercir poders d'investigació i correctius, inclosa la potestat sancionadora", "correct": true },
      { "text": "Redactar els pressupostos anuals de l'AMB en matèria de seguretat informàtica", "correct": false },
      { "text": "Resoldre directament els recursos d'alçada dels funcionaris públics", "correct": false },
      { "text": "Eixir com a òrgan de contractació centralitzada de programari lliure", "correct": false }
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