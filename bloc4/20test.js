const TEST_ID = "20test.js"; 

const questions = [

 {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 1,
    "question": "Segons el règim jurídic dels òrgans de govern a l'administració local i a l'AMB, com s'anomenen generalment les decisions adoptades per un òrgan unipersonal?",
    "answers": [
      { "text": "Acords plenaris i mocions de govern", "correct": false },
      { "text": "Resolucions, decrets o ordres", "correct": true },
      { "text": "Disposicions generals de caràcter reglamentari", "correct": false },
      { "text": "Dictàmens i comissions d'estudi", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 2,
    "question": "Quina és la principal diferència en la formació de la voluntat entre un òrgan col·legiat i un òrgan unipersonal?",
    "answers": [
      { "text": "L'òrgan unipersonal requereix sempre quòrum d'assistència prèvia", "correct": false },
      { "text": "L'òrgan col·legiat no necessita convocatòria prèvia per deliberar", "correct": false },
      { "text": "L'òrgan unipersonal adopta decisions mitjançant un procés directe i concentrat en una sola persona física", "correct": true },
      { "text": "L'òrgan col·legiat emet decrets executius d'agilitat immediata", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 3,
    "question": "Pel que fa a l'Àrea Metropolitana de Barcelona (AMB), quin òrgan unipersonal de màxima direcció executiva dicta decrets en matèries com la contractació pública?",
    "answers": [
      { "text": "El Consell Metropolità", "correct": false },
      { "text": "El President o Presidenta de l'AMB", "correct": true },
      { "text": "La Junta de Govern", "correct": false },
      { "text": "La Comissió Especial de Comptes", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 4,
    "question": "Quin efecte jurídic produeix la delegació de firma en el si d'un òrgan unipersonal segons la Llei 40/2015?",
    "answers": [
      { "text": "Altera la titularitat i la competència de l'òrgan que delega", "correct": false },
      { "text": "Exigeix necessàriament la publicació al Diari Oficial de la Generalitat", "correct": false },
      { "text": "No altera la competència i es fa constar expressament 'per delegació' a la signatura", "correct": true },
      { "text": "Converteix l'acte en un acord col·legiat vinculant", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 5,
    "question": "Quina característica respecte al quòrum presenten els òrgans unipersonals de govern en comparació amb els col·legiats?",
    "answers": [
      { "text": "Requereixen la meitat més un dels membres assistents", "correct": false },
      { "text": "Inexistent, ja que no requereixen assistència mínima prèvia ni votació col·lectiva", "correct": true },
      { "text": "Només necessiten quòrum si ho estableixen les bases d'execució del pressupost", "correct": false },
      { "text": "Exigeixen majoria qualificada de dos terços", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 6,
    "question": "Quin paper juguen les unitats administratives inferiors o serveis gestors abans que el titular de l'òrgan unipersonal signi una resolució?",
    "answers": [
      { "text": "Aproven definitivament el pressupost extraordinari", "correct": false },
      { "text": "Redacten la proposta de resolució i aporten els informes tècnics o jurídics preceptius", "correct": true },
      { "text": "Exerceixen en tot cas la funció d'ordenació de pagaments centralitzada", "correct": false },
      { "text": "Substitueixen el control de legalitat de la secretaria", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 7,
    "question": "Quina és la conseqüència jurídica de dictar una resolució per un òrgan unipersonal amb una incompetència manifesta per raó de la matèria o territori?",
    "answers": [
      { "text": "Merament irregular", "correct": false },
      { "text": "Anul·lable dins del termini de quatre anys", "correct": false },
      { "text": "Nul·litat de ple dret", "correct": true },
      { "text": "Vàlida si es convalida posteriorment per mitjà de delegació", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 8,
    "question": "On es publiquen periòdicament les resolucions i decrets dictats per la Presidència de l'AMB per garantir el principi de publicitat institucional?",
    "answers": [
      { "text": "Al tauler d'edictes físic exclusivament de la Generalitat", "correct": false },
      { "text": "Al Portal de Transparència i la Seu Electrònica de l'AMB", "correct": true },
      { "text": "Al Butlletí Oficial de l'Estat sense excepció", "correct": false },
      { "text": "Només al llibre d'actes del Consell Plenari", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 9,
    "question": "Quina funció compleix el vistiplau de la secretaria i intervenció prèviament a l'adopció de determinats acords per òrgans unipersonals?",
    "answers": [
      { "text": "Garantir que l'acord s'ajusta a la legalitat formal i pressupostària", "correct": true },
      { "text": "Assumir la responsabilitat política directa de la decisió executiva", "correct": false },
      { "text": "Modificar discrecionalment les retribucions del personal de l'ens", "correct": false },
      { "text": "Substituir la necessitat de motivació de l'acte de gravamen", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 10,
    "question": "Quin tipus de motivació exigeixen generalment les resolucions adoptades per òrgans unipersonals quan es tracta d'actes de gravamen?",
    "answers": [
      { "text": "Són lliures de motivació si deriven d'una potestat reglada", "correct": false },
      { "text": "Han d'estar degudament motivades indicant els recursos procedents", "correct": true },
      { "text": "Només requereixen motivació si ho sol·licita el Síndic de Greuges", "correct": false },
      { "text": "Es consideren tàcites si transcorre el termini de resolució", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 11,
    "question": "En el marc de les administracions locals i l'AMB, quina norma regula bàsicament la Llei de l'Àrea Metropolitana de Barcelona referent al seu règim jurídic de govern?",
    "answers": [
      { "text": "La Llei 31/2010, del 3 d'agost", "correct": true },
      { "text": "La Llei 7/1985, de 2 d'abril, reguladora de les bases del règim local exclusivament", "correct": false },
      { "text": "El Decret Legislatiu 2/2004 únicament per a hisendes locals", "correct": false },
      { "text": "La Llei Orgànica 2/2012 d'estabilitat pressupostària", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 12,
    "question": "Quina és la trampa d'examen més habitual en oposicions C1 pel que fa a la delegació de firma?",
    "answers": [
      { "text": "Creure que modifica la titularitat de la competència de l'òrgan unipersonal", "correct": true },
      { "text": "Pensar que requereix quòrum d'assistència obligatòria", "correct": false },
      { "text": "Confondre-la amb un acte col·legiat del Ple", "correct": false },
      { "text": "Establir que només pot recaure sobre membres electes", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 13,
    "question": "Com s'articuleia la suplència en un òrgan unipersonal en cas de vacant, absència o malaltia del seu titular?",
    "answers": [
      { "text": "Mitjançant elecció directa per sufragi universal a l'entitat", "correct": false },
      { "text": "Segons el règim establert per la normativa de règim local i les bases d'execució", "correct": true },
      { "text": "Requereix sempre la convocatòria extraordinària del Consell Metropolità", "correct": false },
      { "text": "Es converteix automàticament en un òrgan col·legiat de gestió", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 14,
    "question": "Quina relació existeix entre la celeritat i l'actuació dels òrgans unipersonals de govern?",
    "answers": [
      { "text": "Són incompatibles perquè tot acte exigeix votació plenària", "correct": false },
      { "text": "Permeten una resposta ràpida i àgil en la gestió diària i situacions d'urgència", "correct": true },
      { "text": "Només s'aplica en la tramitació de pressupostos generals consolidats", "correct": false },
      { "text": "Està limitada pel termini fixat de quinze dies d'exposició pública", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 15,
    "question": "Quin tipus d'acte administratiu emet un òrgan unipersonal quan resol una sol·licitud o un procediment concret posant fi a la tramitació ordinària?",
    "answers": [
      { "text": "Un acte de tràmit no qualificat", "correct": false },
      { "text": "Una resolució o decret definitiu", "correct": true },
      { "text": "Una disposició administrativa de caràcter general o reglament", "correct": false },
      { "text": "Un informe jurídic de fiscalització prèvia", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 16,
    "question": "En el quadre comparatiu entre òrgans unipersonals i col·legiats, quina forma d'actes adopten habitualment els òrgans col·legiats com el Ple?",
    "answers": [
      { "text": "Decrets exclusius de la presidència", "correct": false },
      { "text": "Acords plenaris, mocions i disposicions generals", "correct": true },
      { "text": "Ordres de pagament a justificar", "correct": false },
      { "text": "Resolucions de gerència individualitzades", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 17,
    "question": "Quina és la conseqüència d'ometre totalment i absolutament el procediment legalment establert en l'adopció d'una resolució per un òrgan unipersonal?",
    "answers": [
      { "text": "Nul·litat de ple dret", "correct": true },
      { "text": "Simple irregularitat no invalidant", "correct": false },
      { "text": "Anul·labilitat convalidable en qualsevol moment", "correct": false },
      { "text": "Efectes retroactius automàtics", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 18,
    "question": "Quin principi organitzatiu justifica tècnicament la delegació de competències o de firma dins de l'estructura d'un òrgan unipersonal?",
    "answers": [
      { "text": "El principi de jerarquia i desconcentració / eficiència", "correct": true },
      { "text": "El principi d'equilibri pressupostari i no afectació", "correct": false },
      { "text": "El principi d'universalitat i unitat de caixa", "correct": false },
      { "text": "El principi d'anualitat i pròrroga automàtica", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 19,
    "question": "Com s'imputen formalment les resolucions signades per un òrgan inferior mitjançant una delegació de firma?",
    "answers": [
      { "text": "S'imputen directament a l'òrgan inferior que l'ha materialment signat", "correct": false },
      { "text": "S'imputen a l'òrgan titular de la competència que va delegar la firma", "correct": true },
      { "text": "Requereixen l'aprovació prèvia del Consell Plenari per ser vàlides", "correct": false },
      { "text": "Es consideren actes dictats per silenci administratiu negatiu", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 20,
    "question": "Quina referència pràctica de l'AMB s'associa habitualment a l'exercici de les potestats d'un òrgan unipersonal de govern?",
    "answers": [
      { "text": "La votació de mocions de censura al Parlament", "correct": false },
      { "text": "Els Decrets de la Presidència de l'AMB en matèria de gestió i serveis", "correct": true },
      { "text": "L'aprovació d'ordenances fiscals generals pel conjunt de municipis de Catalunya", "correct": false },
      { "text": "La comissió de control de deute públic de l'Estat", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 21,
    "question": "Quin és el valor d'un defecte de forma en la tramitació d'una resolució unipersonal si aquesta aconsegueix el seu fi sense causar indefensió?",
    "answers": [
      { "text": "Determina la nul·litat radical de l'acte", "correct": false },
      { "text": "Constitueix una irregularitat no invalidant", "correct": true },
      { "text": "Exigeix la revocació immediata per part del Jutjat Contenciós", "correct": false },
      { "text": "Converteix l'acte en discrecional", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 22,
    "question": "Quina és la condició indispensable pel que fa a l'actuació dels òrgans unipersonals dins de l'àmbit de la seva competència?",
    "answers": [
      { "text": "Actuar sempre dins l'àmbit de les atribucions legalment conferides o delegades", "correct": true },
      { "text": "Sotmetre qualsevol resolució a referèndum popular metropolità", "correct": false },
      { "text": "Emetre vots particulars discrepants per escrit", "correct": false },
      { "text": "Reunir un col·legi d' assessors abans de cada signatura", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 23,
    "question": "En una pregunta d'examen tipus test sobre òrgans unipersonals, si s'afirma que aquests requereixen votacions per majoria simple per prendre decisions, l'afirmació és:",
    "answers": [
      { "text": "Falsa, perquè en ser unipersonals no emeten vots ni requereixen majories col·lectives", "correct": true },
      { "text": "Verdadera, sempre que es tracti de decrets de presidència", "correct": false },
      { "text": "Verdadera si ho aprova prèviament la Intervenció", "correct": false },
      { "text": "Falsa només en l'àmbit dels organismes autònoms locals", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 24,
    "question": "Quin element distingeix l'actuació executiva d'un òrgan unipersonal en relació amb els expedients de despesa?",
    "answers": [
      { "text": "La signatura de decrets d'aprovació de despeses i reconeixement d'obligacions d'acord amb les seves atribucions", "correct": true },
      { "text": "La incapacitat absoluta per ordenar pagaments a la Tresoreria", "correct": false },
      { "text": "La necessitat de convocar un ple extraordinari per cada factura menor", "correct": false },
      { "text": "L'exclusió de qualsevol control per part de la intervenció delegada", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 25,
    "question": "Segons l'estructura organitzativa de l'administració local, quina potestat ostenta el titular de l'òrgan unipersonal pel que fa a la direcció dels serveis?",
    "answers": [
      { "text": "La direcció executiva superior i la prefectura de personal i serveis de la corporació", "correct": true },
      { "text": "La competència exclusiva per modificar la plantilla pressupostària sense límit", "correct": false },
      { "text": "La titularitat de la Junta General d'Accionistes d'empreses privades alienes", "correct": false },
      { "text": "Només funcions de caràcter honorífic i protocol·lari sense resolució", "correct": false }
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