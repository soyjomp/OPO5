const TEST_ID = "13test.js"; 

const questions = [

 {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 1,
    "question": "Segons la normativa i els apunts de l'AMB, quina és la naturalesa principal d'una oficina de registre?",
    "answers": [
      { "text": "Un òrgan de decisió finalista encarregat de resoldre recursos d'alçada", "correct": false },
      { "text": "Un punt de contacte formal entre la ciutadania i l'organització, garantint la seguretat jurídica i la constància temporal", "correct": true },
      { "text": "Una unitat de comptabilització exclusiva per a la gestió de factures electròniques", "correct": false },
      { "text": "Un arxiu històric de custòdia de documents amb més de cinc anys d'antiguitat", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 2,
    "question": "Quin règim de funcionament temporal estableix el Registre Electrònic General de cada administració?",
    "answers": [
      { "text": "Funciona exclusivament en dies hàbils de dilluns a divendres de 9:00 a 14:00 hores", "correct": false },
      { "text": "Opera tots els dies de l'any durant les 24 hores de manera automatitzada", "correct": true },
      { "text": "Només admet la recepció de documents durant l'horari d'atenció al públic de les oficines presencials", "correct": false },
      { "text": "Opera únicament en horari de matí excepte festius nacionals i locals", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 3,
    "question": "Quina és la principal finalitat del Registre d'Entrada segons l'estructura registral?",
    "answers": [
      { "text": "Inscriure tots els documents oficials emesos per l'administració i adreçats a tercers o altres òrgans", "correct": false },
      { "text": "Inscriure tots els documents que presenten els ciutadans, altres administracions o entitats adreçats a l'òrgan", "correct": true },
      { "text": "Controlar de manera exclusiva la sortida de notificacions i acords de gerència", "correct": false },
      { "text": "Efectuar el pagament directe de les obligacions reconegudes a favor dels creditors", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 4,
    "question": "Què s'inscriu obligatòriament en el Registre de Sortida?",
    "answers": [
      { "text": "Les sol·licituds i escrits adreçats a l'AMB per part de la ciutadania", "correct": false },
      { "text": "Tots els documents oficials emesos per l'administració i adreçats a tercers o altres òrgans (com notificacions, resolucions o acords)", "correct": true },
      { "text": "Únicament les factures presentades pels proveïdors externs de l'entitat", "correct": false },
      { "text": "Les altes i baixes del personal funcionari adscrit als ajuntaments metropolitans", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 5,
    "question": "Quines dades mínimes ha de contenir un seient registral per assegurar la traçabilitat del document?",
    "answers": [
      { "text": "Número d'ordre, data i hora de presentació, identificació de l'interessat, òrgan destinatari, extracte del contingut i referència als adjunts", "correct": true },
      { "text": "Només el nom de l'empleat públic que ha rebut el document i el pressupost assignat", "correct": false },
      { "text": "La qualificació jurídica del procediment i la votació obtinguda al Consell Metropolità", "correct": false },
      { "text": "El codi comptable de la partida de ingressos i el número de compte bancari del sol·licitant", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 6,
    "question": "Respecte a l'emissió de rebut en la presentació de documents, quina obligació té l'Administració?",
    "answers": [
      { "text": "Emetre un avís per correu electrònic en el termini màxim de deu dies hàbils", "correct": false },
      { "text": "Expedir obligatòriament un rebut o justificant de la presentació que acrediti la data i hora d'entrada", "correct": true },
      { "text": "Lliurar el rebut només si l'interessat ho sol·licita expressament per escrit presencial", "correct": false },
      { "text": "Publicar un anunci al Butlletí Oficial de la Província (BOP) acreditant l'entrada", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 7,
    "question": "Quina funció principal desenvolupa el Sistema d'Interconnexió de Registres (SIR)?",
    "answers": [
      { "text": "Gestionar el pagament de les nòmines del personal de la Generalitat de Catalunya", "correct": false },
      { "text": "Permetre l'intercanvi electrònic immediat de seients registrals i documentació entre les diferents administracions públiques", "correct": true },
      { "text": "Fiscalitzar prèviament la legalitat de tots els contractes menors de les entitats locals", "correct": false },
      { "text": "Coordinar el transport físic de documents en paper entre els ajuntaments i la Diputació", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 8,
    "question": "Com s'entén realitzada una presentació de documents efectuada en un dia inhàbil al Registre Electrònic?",
    "answers": [
      { "text": "Es considera nul·la de ple dret i s'ha de tornar a presentar obligatòriament", "correct": false },
      { "text": "S'entendrà realitzada a la primera hora del primer dia hàbil següent", "correct": true },
      { "text": "Té validesa retroactiva des del moment exacte en què es va pitjar el botó d'enviament", "correct": false },
      { "text": "Genera una sanció administrativa per incompliment del calendari de tràmits", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 9,
    "question": "Quin element ha d'incloure obligatòriament el rebut emès pel registre electrònic segons les previsions de les dades del seient?",
    "answers": [
      { "text": "Una còpia autèntica del document presentat on figuri el número d'entrada i la data i hora exactes", "correct": true },
      { "text": "Un certificat digital signat per la Tresoreria General de l'Estat", "correct": false },
      { "text": "L'extracte dels pressupostos generals de l'AMB vigents", "correct": false },
      { "text": "La liquidació provisional de l'Impost sobre Béns Immobles (IBI)", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 10,
    "question": "Segons els apunts de l'AMB, quina és la denominació de les oficines presencials de l'ens per a l'assistència en matèria de registre?",
    "answers": [
      { "text": "ORC (Oficina de Registre Centralitzat)", "correct": false },
      { "text": "OAMR (Oficines d'Assistència en Matèria de Registre)", "correct": true },
      { "text": "SACAT (Servei d'Atenció Ciutadana i Tràmits)", "correct": false },
      { "text": "UMA (Unitat Mínima d'Atenció)", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 11,
    "question": "On opera de forma específica el Registre Electrònic de l'AMB segons la informació de la web corporativa recollida als apunts?",
    "answers": [
      { "text": "A través de la Seu Electrònica accessible des de amb.cat", "correct": true },
      { "text": "Exclusivament a la plataforma digital de la Generalitat de Catalunya (cat.net)", "correct": false },
      { "text": "Mitjançant l'aplicació mòbil de recaptació de tributs locals de la Diputació", "correct": false },
      { "text": "Només mitjançant correu postal certificat amb acusament de rebuda", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 12,
    "question": "Quin mecanisme tècnic de seguretat s'assigna als documents tramitats a través del Registre Electrònic de l'AMB?",
    "answers": [
      { "text": "Un segell de temps electrònic i un codi de verificació segura (CSV)", "correct": true },
      { "text": "Un certificat de cadastre rústic i urbà actualitzat", "correct": false },
      { "text": "Una signatura manuscrita digitalitzada de la gerència", "correct": false },
      { "text": "Un número de seient de comptabilització pressupostària del capítol 1", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 13,
    "question": "Com es coordina l'AMB pel que fa a l'assistència presencial en matèria de registre amb el territori metropolità?",
    "answers": [
      { "text": "Exclusivament a través de les delegacions del Govern de l'Estat a Catalunya", "correct": false },
      { "text": "Amb les oficines centrals a Barcelona i coordinant-se amb les oficines dels 36 ajuntaments metropolitans", "correct": true },
      { "text": "Mitjançant la xarxa d'oficines de les entitats bancàries col·laboradores", "correct": false },
      { "text": "No existeix cap tipus de coordinació amb els ajuntaments integrats", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 14,
    "question": "Quina llei estatal regula de manera principal el procediment administratiu comú de les administracions públiques on s'emmarca el règim de registres?",
    "answers": [
      { "text": "La Llei 39/2015 (LPACAP) i la Llei 40/2015 (LRJSP)", "correct": true },
      { "text": "La Llei 31/2010 de l'Àrea Metropolitana de Barcelona exclusivament", "correct": false },
      { "text": "El Reial Decret Legislatiu 2/2004 de les Hisendes Locals", "correct": false },
      { "text": "La Llei Orgànica 2/2012 d'Estabilitat Pressupostària", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 15,
    "question": "En el quadre comparatiu del tema, quin és l'àmbit de gestió assignat al Registre d'Entrada en el context de l'AMB?",
    "answers": [
      { "text": "La Seu electrònica de l'AMB i les OAMR (Oficines d'Assistència en Matèria de Registre)", "correct": true },
      { "text": "Únicament la Tresoreria General i la Intervenció delegada", "correct": false },
      { "text": "El Consell Plenari durant les sessions extraordinàries", "correct": false },
      { "text": "Els òrgans de direcció de les societats mercantils participades", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 16,
    "question": "Segons el quadre comparatiu, quin òrgan o àmbit s'encarrega de la gestió del Registre de Sortida a l'AMB?",
    "answers": [
      { "text": "Els òrgans competents de gerència, secretaria o direccions de l'AMB", "correct": true },
      { "text": "La ciutadania a través de la Seu electrònica oberta", "correct": false },
      { "text": "Els registres auxiliars de cada un dels 36 ajuntaments per delegació tàcita", "correct": false },
      { "text": "El departament de recursos humans de manera exclusiva", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 17,
    "question": "Quin tipus de seient registral s'utilitza per inscriure una resolució o acord emès cap a l'exterior per l'administració?",
    "answers": [
      { "text": "Registre d'entrada", "correct": false },
      { "text": "Registre de sortida", "correct": true },
      { "text": "Seient de bestreta de caixa fixa", "correct": false },
      { "text": "Assentament comptable de pressupost tancat", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 18,
    "question": "Quina trampa d'examen s'assenyala habitualment respecte al funcionament temporal dels registres electrònics?",
    "answers": [
      { "text": "Creure que només estan oberts durant l'horari d'oficina dels funcionaris", "correct": false },
      { "text": "Confondre la disponibilitat 24 hores tots els dies de l'any amb la consideració dels efectes de la presentació en dies inhàbils", "correct": true },
      { "text": "Pensar que el registre electrònic no emet rebut acreditatiu de manera automàtica", "correct": false },
      { "text": "Assumir que el sistema SIR només funciona els caps de setmana", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 19,
    "question": "Quina és la relació entre les oficines de registre i la seguretat jurídica dels ciutadans?",
    "answers": [
      { "text": "Garanteixen la constància temporal i fefaent de la presentació d'escrits i sol·licituds dins dels terminis legals", "correct": true },
      { "text": "Modifiquen automàticament els terminis de prescripció de les sancions urbanístiques", "correct": false },
      { "text": "Atorgen la condició de funcionari de carrera a qualsevol persona que presenti una instància", "correct": false },
      { "text": "Eximeixen del compliment de les ordenances fiscals metropolitanes", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 20,
    "question": "Quin paper juguen les entitats locals integrants de l'AMB en relació amb l'assistència en matèria de registre?",
    "answers": [
      { "text": "Col·laboren a través de la xarxa de registres públics per facilitar l'accés de la ciutadania als serveis supramunicipals", "correct": true },
      { "text": "Són totalment independents i tenen prohibit trametre documents a l'AMB", "correct": false },
      { "text": "Assumeixen les funcions de la Sindicatura de Comptes mitjançant el registre de sortida", "correct": false },
      { "text": "S'encarreguen exclusivament de la recaptació del recàrrec de l'IBI metropolità", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 21,
    "question": "Quina dada reflecteix l'extracte del contingut dins d'un seient registral?",
    "answers": [
      { "text": "Un resum o descripció breu de l'objecte del document presentat", "correct": true },
      { "text": "La transcripció literal i completa de totes les pàgines adjuntes", "correct": false },
      { "text": "El nombre d'empleats públics afectats per la sol·licitud", "correct": false },
      { "text": "La valoració econòmica estimada del cost del tràmit", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 22,
    "question": "Què evita principalment la interconnexió de registres a través del sistema SIR en l'àmbit de les administracions públiques?",
    "answers": [
      { "text": "El transport físic ineficient de documentació en paper entre diferents organismes", "correct": true },
      { "text": "L'aprovació anual dels pressupostos generals de l'entitat local", "correct": false },
      { "text": "La necessitat de disposar de signatura electrònica reconeguda", "correct": false },
      { "text": "La presentació de recursos de reposició per part de la ciutadania", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 23,
    "question": "Quin caràcter té el rebut o justificant que s'emet en presentar un document al registre electrònic?",
    "answers": [
      { "text": "És una mera recomanació informativa sense validesa jurídica", "correct": false },
      { "text": "És obligatori i acredita de manera fefaent la data i l'hora de presentació", "correct": true },
      { "text": "Només té validesa si es segella presencialment a les oficines centrals", "correct": false },
      { "text": "Serveix únicament com a justificant de pagament de taxes fiscals", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 24,
    "question": "En el context de l'AMB, quina importància té l'ús correcte del Registre General per als aspirants de l'oposition C1?",
    "answers": [
      { "text": "Garanteix el coneixement dels canals formals d'entrada i sortida de documents en la tramitació administrativa metropolitana", "correct": true },
      { "text": "És una matèria excloent que només afecta els enginyers de camins de l'ens", "correct": false },
      { "text": "Permet calcular directament el romanent de tresoreria de l'exercici anterior", "correct": false },
      { "text": "Estableix les directrius per a la modificació de les ordenances fiscals", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 25,
    "question": "Segons els estàndards d'oposicions C1, quin error s'ha d'evitar en distingir entre registre d'entrada i de sortida?",
    "answers": [
      { "text": "Pensar que el registre de sortida serveix per recollir les peticions que fan els ciutadans a l'administració", "correct": true },
      { "text": "Creure que ambdós registres operen exclusivament a través de paper físic", "correct": false },
      { "text": "Assumir que el registre electrònic tanca els dies festius locals", "correct": false },
      { "text": "Confondre el número d'ordre amb el codi postal de l'oficina receptora", "correct": false }
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