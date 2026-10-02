const TEST_ID = "21test.js"; 

const questions = [

 {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 1,
    "question": "Segons la normativa de règim local aplicable a l'AMB, quin és el règim general de majories establert per a l'adopció d'acords vàlids en els òrgans col·legiats?",
    "answers": [
      { "text": "Majoria absoluta del nombre legal de membres de l'òrgan", "correct": false },
      { "text": "Majoria simple, consistent en més vots a favor que en contra dels membres presents", "correct": true },
      { "text": "Majoria de dos terços de la totalitat dels membres de la corporació", "correct": false },
      { "text": "Unanimitat de tots els assistents amb dret a vot a la sessió plenària", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 2,
    "question": "En relació amb l'exercici del vot als òrgans col·legiats de l'AMB, quin dels següents aspectes és jurídicament correcte?",
    "answers": [
      { "text": "El vot és estrictament personal i indelegable, no admetent-se la representació entre membres", "correct": true },
      { "text": "Els membres poden delegar el seu vot per escrit en un altre conseller en cas de força major justificada", "correct": false },
      { "text": "El vot per delegació només està permès per a la Junta de Govern, però mai al Consell Metropolità", "correct": false },
      { "text": "L'abstenció s'interpreta automàticament com un vot favorable a la proposta del govern", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 3,
    "question": "Com es computa estrictament la majoria absoluta exigida per a determinats acords rellevants en l'àmbit local i metropolità?",
    "answers": [
      { "text": "Més de la meitat dels membres presents a la sessió en el moment de la votació", "correct": false },
      { "text": "Dues terceres parts dels assistents que hagin emès el seu vot de manera expressa", "correct": false },
      { "text": "Més de la meitat del nombre legal de membres que integren l'òrgan col·legiat", "correct": true },
      { "text": "La totalitat dels vots emesos descomptant les abstencions i vots nuls", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 4,
    "question": "Quin efecte jurídic produeix el vot de qualitat atribuït al President d'un òrgan col·legiat en la presa de decisions?",
    "answers": [
      { "text": "Permet aprovar directament qualsevol urgència sense incloure-la a l'ordre del dia", "correct": false },
      { "text": "Desfa l'empat que es pugui produir en les votacions, garantint el desbloqueig de l'acord", "correct": true },
      { "text": "Converteix automàticament un acord de majoria simple en un acord de majoria absoluta", "correct": false },
      { "text": "Invalidar el vot particular presentat pels membres discrepants de l'oposició", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 5,
    "question": "Quin és el caràcter general dels acords adoptats pels òrgans de govern col·legiats de l'AMB un cop finalitzada la seva votació?",
    "answers": [
      { "text": "Són executius des del moment mateix de la seva adopció, sense perjudici de la seva notificació o publicació", "correct": true },
      { "text": "No produeixen cap efecte fins que transcorri el termini de 15 dies d'exposició pública al BOP", "correct": false },
      { "text": "Requereixen necessàriament la ratificació prèvia de la Generalitat de Catalunya per ser eficaços", "correct": false },
      { "text": "Són merament recomanatius fins que s'aprovi definitivament el pressupost de l'exercici següent", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 6,
    "question": "Quina fase prèvia és indispensable per poder iniciar vàlidament la deliberació d'un assumpte en un òrgan col·legiat?",
    "answers": [
      { "text": "La publicació íntegra de la proposta al Diari Oficial de la Generalitat de Catalunya", "correct": false },
      { "text": "La convocatòria prèvia i la inclusió de l'assumpte a l'ordre del dia, amb la constitució vàlida de l'òrgan", "correct": true },
      { "text": "L'autorització expressa del Ministeri d'Hisenda i Funció Pública", "correct": false },
      { "text": "El vistiplau de la Sindicatura de Comptes de Catalunya", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 7,
    "question": "Davant la discrepància amb un acord adoptat per l'òrgan col·legiat, de quina eina disposen els membres discrepants?",
    "answers": [
      { "text": "La interposició immediata d'un recurs d'alçada davant el President del govern de l'Estat", "correct": false },
      { "text": "La formulació d'un vot particular per escrit en el termini establert perquè s'incorpori a l'acta", "correct": true },
      { "text": "El vet directe i paralitzant de l'execució de l'acord plenari", "correct": false },
      { "text": "La convocatòria unilateral d'una moció de censura exprés", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 8,
    "question": "Quin òrgan col·legiat de l'AMB (amb.cat) actua com a màxim òrgan de representació i adopció d'acords fonamentals com pressupostos i ordenances?",
    "answers": [
      { "text": "La Junta de Govern de l'AMB", "correct": false },
      { "text": "El Consell Metropolità", "correct": true },
      { "text": "La Comissió Especial de Comptes", "correct": false },
      { "text": "La Gerència de l'Àrea Metropolitana", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 9,
    "question": "Quin document recull de manera definitiva els acords adoptats per un òrgan col·legiat, incloent-hi els vots emesos i les incidències de la sessió?",
    "answers": [
      { "text": "L'avanç de liquidació pressupostària anual", "correct": false },
      { "text": "L'acta de la sessió, signada pel Secretari amb el vistiplau del President", "correct": true },
      { "text": "El certificat de conformitat de la Intervenció General", "correct": false },
      { "text": "El compte general de l'entitat metropolitana", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 10,
    "question": "Quina conseqüència jurídica comporta l'omissió total i absoluta de les regles essencials per a la formació de la voluntat dels òrgans col·legiats?",
    "answers": [
      { "text": "La mera irregularitat no invalidant de l'actuació administrativa", "correct": false },
      { "text": "La nul·litat de ple dret dels actes adoptats infringint aquestes regles essencials", "correct": true },
      { "text": "La convalidació tàcita automàtica si no s'impugna en el termini de deu dies", "correct": false },
      { "text": "La simple anul·labilitat subsanable mitjançant un informe de secretaria", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 11,
    "question": "Com es qualifiquen, des del punt de vista de la seva validesa, aquells actes dictats amb infracció de les normes de constitució o de procediment col·legiat que no arriben a la gravetat de la nul·litat?",
    "answers": [
      { "text": "Actes nuls de ple dret", "correct": false },
      { "text": "Actes anul·lables[cite: 1]", "correct": true },
      { "text": "Actes inexistents o fets concrets de tràmit", "correct": false },
      { "text": "Actes exempts de fiscalització prèvia", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 12,
    "question": "En relació amb les votacions secretes en els òrgans col·legiats de les entitats locals i l'AMB, quin requisit és obligatori perquè es puguin dur a terme?",
    "answers": [
      { "text": "Que ho sol·liciti qualsevol membre de l'oposició a l'inici de la sessió plenària", "correct": false },
      { "text": "Que estigui expressament previst i autoritzat en el reglament orgànic de la corporació", "correct": true },
      { "text": "Que s'aprovi per unanimitat de tots els assistents presents al ple", "correct": false },
      { "text": "Està totalment prohibida qualsevol votació secreta en l'àmbit de les administracions públiques", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 13,
    "question": "Quin paper desenvolupa el Portal de Transparència de l'AMB en relació amb els acords adoptats pels seus òrgans de govern col·legiats?",
    "answers": [
      { "text": "Permet a la ciutadania consultar de manera immediata extractes d'acords, ordres del dia i actes completes", "correct": true },
      { "text": "Exigeix el pagament d'una taxa pública per obtenir còpia de qualsevol acord col·legiat", "correct": false },
      { "text": "Limita la publicació exclusiva a les decisions adoptades per la Junta de Govern", "correct": false },
      { "text": "Funciona com a registre comptable de factures electròniques exclusivament", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 14,
    "question": "Segons el règim jurídic de les entitats locals, quina majoria es requereix generalment per a l'aprovació inicial de pressupostos i ordenances fiscals?",
    "answers": [
      { "text": "Majoria simple dels membres presents", "correct": false },
      { "text": "Majoria absoluta del nombre legal de membres de la corporació", "correct": true },
      { "text": "Majoria qualificada de dos terços de la totalitat dels vocals", "correct": false },
      { "text": "Aprovació directa per la Junta de Govern sense necessitat de quòrum", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 15,
    "question": "Quina és la naturalesa jurídica de la Junta de Govern de l'AMB com a òrgan col·legiat dins de l'estructura organitzativa metropolitana?",
    "answers": [
      { "text": "Òrgan merament consultiu i de fiscalització externa de comptes", "correct": false },
      { "text": "Òrgan col·legiat executiu que adopta acords periòdics en matèria de contractació, subvencions i gestió de serveis", "correct": true },
      { "text": "Òrgan legislatiu amb competència exclusiva per aprovar reglaments orgànics", "correct": false },
      { "text": "Tribunal administratiu de recursos contractuals de l'àmbit metropolità", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 16,
    "question": "En el supòsit que un membre d'un òrgan col·legiat es trobi en una situació de conflicte d'interessos o causa d'abstenció legalment establerta, com ha d'actuar en la votació?",
    "answers": [
      { "text": "Delegar obligatòriament el seu vot en el portaveu del seu grup polític", "correct": false },
      { "text": "Abstenir-se de participar en la deliberació i votació de l'assumpte afectat", "correct": true },
      { "text": "Emetre un vot de qualitat especial per compensar la seva incompatibilitat", "correct": false },
      { "text": "Votar obligatòriament en contra per garantir la neutralitat de l'òrgan", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 17,
    "question": "Quina és la funció principal de la fase de deliberació prèvia a la votació en els òrgans col·legiats?",
    "answers": [
      { "text": "Obrir el debat moderat pel President sobre els assumptes inclosos a l'ordre del dia abans de procedir a la votació", "correct": true },
      { "text": "Modificar automàticament els estatuts de l'AMB sense votació plenària", "correct": false },
      { "text": "Efectuar el pagament material de les obligacions reconegudes per la Tresoreria", "correct": false },
      { "text": "Convalidar els actes nuls de ple dret adoptats en sessions anteriors", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 18,
    "question": "Quin requisit formal és necessari perquè una convocatòria d'un òrgan col·legiat amb caràcter extraordinari i urgent sigui vàlida?",
    "answers": [
      { "text": "L'aprovació prèvia de la urgència per majoria simple de l'òrgan abans d'entrar a tractar l'assumpte de fons", "correct": true },
      { "text": "La publicació obligatòria al Butlletí Oficial de la Província amb 15 dies d'antelació", "correct": false },
      { "text": "El vistiplau vinculant de la Delegació del Govern de l'Estat", "correct": false },
      { "text": "La concurrència simultània de tots els membres legals de la corporació sense excepció", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 19,
    "question": "Com s'entén generalment la regla de la majoria simple en un òrgan col·legiat on hi ha assistència de membres que opten per l'abstenció?",
    "answers": [
      { "text": "Les abstencions es sumen sempre als vots en contra de la proposta", "correct": false },
      { "text": "S'obté quan hi ha més vots a favor que en contra per part dels membres presents a la votació", "correct": true },
      { "text": "Requereix necessàriament que el nombre de vots favorables superi el cinquanta per cent de la corporació", "correct": false },
      { "text": "Invalida automàticament la votació obligant a repetir-la en una nova sessió", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 20,
    "question": "Quin òrgan o persona encarregada té la responsabilitat legal de redactar i autoritzar l'acta on es reflecteixen els acords adoptats per l'òrgan col·legiat?",
    "answers": [
      { "text": "El Secretari de l'òrgan, amb el vistiplau del President", "correct": true },
      { "text": "L'Interventor General de l'entitat local", "correct": false },
      { "text": "El portaveu del grup polític amb major representació", "correct": false },
      { "text": "El Cap de la Unitat d'Ordenació de Pagaments", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 21,
    "question": "Quina és la repercussió de la inassistència injustificada de membres d'un òrgan col·legiat a una sessió quant al quòrum de constitució en segona convocatòria?",
    "answers": [
      { "text": "La llei preveu un quòrum reduït i específic en segona convocatòria respecte a la primera", "correct": true },
      { "text": "S'anul·la immediatament la corporació i es convoquen eleccions anticipades", "correct": false },
      { "text": "Es delega automàticament el vot dels absents en el President", "correct": false },
      { "text": "No es pot celebrar sota cap concepte cap tipus de sessió", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 22,
    "question": "Quin tipus de votació s'utilitza de forma ordinària i general en els òrgans col·legiats de l'administració local i metropolitana?",
    "answers": [
      { "text": "La votació secreta mitjançant paperetes tancades", "correct": false },
      { "text": "La votació ordinària per assentiment o a mà alçada", "correct": true },
      { "text": "La votació nominal per cridament alfabètic obligatori en tots els acords", "correct": false },
      { "text": "La votació telemàtica amb signatura electrònica avançada obligatòria", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 23,
    "question": "Davant d'un acord adoptat per un òrgan col·legiat que incideix directament en la modificació d'estatuts de l'AMB, quina exigència de majoria sol aplicar-se en atenció a la seva complexitat?",
    "answers": [
      { "text": "Majoria simple de miraments ordinaris", "correct": false },
      { "text": "Majoria qualificada o reforçada segons la legislació aplicable", "correct": true },
      { "text": "Unanimitat absoluta de tots els ciutadans empadronats", "correct": false },
      { "text": "Delegació exclusiva en la figura del Gerent", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 24,
    "question": "Quina funció compleix la fixació prèvia de l'ordre del dia en la convocatòria d'un òrgan col·legiat de govern?",
    "answers": [
      { "text": "Garantir el coneixement previ dels assumptes a tractar per part dels membres i impedir la deliberació d'assumptes no inclosos, tret de declaració d'urgència", "correct": true },
      { "text": "Establir la recaptació tributària dels ingressos de dret públic de l'AMB", "correct": false },
      { "text": "Determinar automàticament el resultat pressupostari de l'exercici anterior", "correct": false },
      { "text": "Substituir la necessitat d'aprovar l'acta de la sessió anterior", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 25,
    "question": "Com afecta la falta de notificació individualitzada d'un acord col·legiat al seu règim d'eficàcia jurídica enfront de l'interessat?",
    "answers": [
      { "text": "L'acord esdevé nul de ple dret de forma retroactiva", "correct": false },
      { "text": "No produeix efectes de notificació desfavorables ni comença a comptar el termini per impugnar-lo fins que es practiqui degudament", "correct": true },
      { "text": "Es convalida automàticament als trenta dies de la seva publicació al web", "correct": false },
      { "text": "Imlica la destitució immediata del Secretari de la corporació", "correct": false }
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