const TEST_ID = "31test.js"; 

const questions = [

 {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 1,
    "question": "Segons els principis clàssics de gestió del servei públic, quin principi garanteix que la prestació no pot patir interrupcions injustificades?",
    "answers": [
      { "text": "El principi d'igualtat de tracte", "correct": false },
      { "text": "El principi de continuïtat", "correct": true },
      { "text": "El principi d'adaptabilitat al progrés", "correct": false },
      { "text": "El principi d'obligatorietat", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 2,
    "question": "Dins de les modalitats de gestió dels serveis públics locals recollides a la normativa, com es classifica una societat mercantil local el capital social de la qual pertany íntegrament a l'entitat local?",
    "answers": [
      { "text": "Gestió indirecta mitjançant concessió", "correct": false },
      { "text": "Gestió indirecta a través de societat d'economia mixta", "correct": false },
      { "text": "Gestió directa (modalitat instrumental)", "correct": true },
      { "text": "Gestió mancomunada externa", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 3,
    "question": "Quin és l'element determinant que distingeix el contracte de concessió de serveis respecte al contracte de serveis tradicional en la legislació de contractes del sector públic?",
    "answers": [
      { "text": "L'assumpció del risc operatiu per part de l'empresari", "correct": true },
      { "text": "La durada màxima del contracte, que no pot superar els 4 anys", "correct": false },
      { "text": "El pagament directe pressupostari per part de l'Administració sense tarifes als usuaris", "correct": false },
      { "text": "L'obligatorietat de constituir una societat d'economia mixta", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 4,
    "question": "Segons el portal corporatiu de l'Àrea Metropolitana de Barcelona (amb.cat), quina fórmula s'utilitza habitualment en l'àmbit de la mobilitat i el transport col·lectiu (com TMB)?",
    "answers": [
      { "text": "Exclusivament la concessió administrativa a empreses privades estrangeres sense control públic", "correct": false },
      { "text": "Societats participades i encàrrecs a mitjans propis, combinats amb concessions a operadors externs", "correct": true },
      { "text": "La gestió directa exercida únicament per funcionaris de la Generalitat de Catalunya", "correct": false },
      { "text": "Un règim de monopoli privat total sense intervenció de l'AMB", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 5,
    "question": "Quina exigència prèvia és obligatòria per a qualsevol canvi en la forma de gestió d'un servei públic local o per revertir un servei externalitzats cap a la gestió directa?",
    "answers": [
      { "text": "L'aprovació per unanimitat de tots els grups polítics al Parlament de Catalunya", "correct": false },
      { "text": "L'elaboració d'una memòria econòmica i jurídica que demostri la sostenibilitat, eficiència i avantatge social", "correct": true },
      { "text": "Una consulta popular vinculant obligatòria a tots els municipis de la província", "correct": false },
      { "text": "La publicació prèvia al Boletín Oficial del Estado durant un termini de sis mesos", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 6,
    "question": "En relació amb les formes històriques de gestió indirecta, en què consisteix la anomenada 'gestió interessada'?",
    "answers": [
      { "text": "L'Administració cedeix el servei a canvi d'un cànon fix sense assumir cap resultat", "correct": false },
      { "text": "L'Administració i l'empresari gestionen el servei compartint els resultats ( guanys i pèrdues) de l'explotació", "correct": true },
      { "text": "Un acord de col·laboració gratuïta amb entitats sense ànim de lucre", "correct": false },
      { "text": "La prestació directa per personal interí de l'ens local", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 7,
    "question": "Quin tipus de gestió indirecta s'utilitza freqüentment a l'AMB per a sectors específics com el cicle integral de l'aigua o serveis mediambientals complexos que combinen capital públic i privat?",
    "answers": [
      { "text": "La societat d'economia mixta", "correct": true },
      { "text": "L'organisme autònom local de caràcter purament administratiu", "correct": false },
      { "text": "La fundació privada benèfica", "correct": false },
      { "text": "El concert directe amb particulars sense concurs públic", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 8,
    "question": "Segons la Llei reguladora de les bases del règim local (LBRL), la reserva de serveis a favor de les entitats locals permet:",
    "answers": [
      { "text": "Prohibir qualsevol activitat econòmica privada al territori municipal", "correct": true },
      { "text": "Establir activitats essencials en règim de monopolització o exclusivitat", "correct": false },
      { "text": "Delegar la potestad legislativa en les empreses concessionàries", "correct": false },
      { "text": "Modificar la Constitució Espanyola mitjançant acord plenari", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 9,
    "question": "Quina característica defineix la figura del 'mitjà propi' (in-house providing) aplicada en l'entorn metropolità?",
    "answers": [
      { "text": "És una empresa totalment aliena a l'Administració sense cap control analògic", "correct": false },
      { "text": "És una entitat sotmesa a un control anàleg al que exerceix l'Administració sobre els seus propis serveis", "correct": true },
      { "text": "Requereix necessàriament licitació europea oberta sense excepcions", "correct": false },
      { "text": "Exclou qualsevol participació de capital públic", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 10,
    "question": "En el context de la gestió indirecta de l'AMB, com s'organitzen habitualment serveis supramunicipals com el transport nocturn d'autobús (NitBus)?",
    "answers": [
      { "text": "Mitjançant concessions administratives atorgades a operadors externs sota supervisió de l'AMB", "correct": true },
      { "text": "A través de voluntariat ciutadà no retribuït", "correct": false },
      { "text": "Mitjançant gestió directa exclusiva dels ajuntaments de manera aïllada sense l'AMB", "correct": false },
      { "text": "Per imposició directa del govern central de l'Estat", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 11,
    "question": "Quin principi del servei públic obliga a modificar les condicions de prestació per adequar-les als avanços tècnics i socials?",
    "answers": [
      { "text": "El principi de neutralitat política", "correct": false },
      { "text": "El principi d'adaptabilitat", "correct": true },
      { "text": "El principi de subsidiarietat", "correct": false },
      { "text": "El principi d'intangibilitat pressupostària", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 12,
    "question": "Quina forma de gestió directa es caracteritza per tenir una organització descentralitzada amb personalitat jurídica pròpia i autonomia de gestió per a la prestació de serveis de naturalesa anàloga?",
    "answers": [
      { "text": "La gestió per la pròpia entitat local (servei centralitzat)", "correct": false },
      { "text": "L'organisme autònom local o entitat pública empresarial", "correct": true },
      { "text": "La concessió de serveis clàssica", "correct": false },
      { "text": "El contracte de subministraments generals", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 13,
    "question": "Quina trampa d'examen és habitual respecte a les societats mercantils de capital íntegrament públic en relació amb les formes de gestió?",
    "answers": [
      { "text": "Creure erròniament que pertanyen a la gestió indirecta per tenir forma mercantil", "correct": true },
      { "text": "Pensar que no estan subjectes a cap tipus de control comptable", "correct": false },
      { "text": "Considerar que no poden prestar serveis de transport", "correct": false },
      { "text": "Assumir que depenen directament de la Unió Europea", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 14,
    "question": "Quan l'Administració encomana la prestació d'un servei a una entitat privada amb la qual ja manté contractes de col·laboració assistencial o sanitària sota determinades condicions legals, ens trobem davant de:",
    "answers": [
      { "text": "Un contracte de concessió d'obres públiques", "correct": false },
      { "text": "Una fórmula de concert", "correct": true },
      { "text": "Una municipalització per expropiació", "correct": false },
      { "text": "Un organisme autònom comercial", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 15,
    "question": "Segons la doctrina i la legislació aplicable, quin és el significat del 'risc operatiu' en la concessió de serveis?",
    "answers": [
      { "text": "Que l'empresari assumeix la possibilitat de no recuperar les inversions ni cobrir els costos incorreguts durant l'explotació", "correct": true },
      { "text": "Que l'Administració garanteix un benefici mínim anual fix independentment dels usuaris", "correct": false },
      { "text": "Que el risc de fallida recau exclusivament sobre la Tresoreria General de l'Estat", "correct": false },
      { "text": "Que no existeix cap mena de fluctuació en la demanda del servei", "correct": true }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 16,
    "question": "Quin òrgan de govern de l'Àrea Metropolitana de Barcelona (AMB) és l'encarregat d'aprovar els grans instruments i acords relatius a la gestió dels serveis i pressupostos?",
    "answers": [
      { "text": "El Consell Metropolità", "correct": true },
      { "text": "El Deganat del Col·legi d'Advocats", "correct": false },
      { "text": "La Junta de compensació urbanística", "correct": false },
      { "text": "El Tribunal Econòmic-Administratiu Regional", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 17,
    "question": "Quina característica defineix el principi d'igualtat en la prestació dels serveis públics?",
    "answers": [
      { "text": "Tots els usuaris han de rebre exactament el mateix horari de servei sense excepcions geogràfiques", "correct": false },
      { "text": "Tots els ciutadans en idèntiques condicions tenen dret a accedir i utilitzar el servei públic sense discriminació", "correct": true },
      { "text": "La gratuïtat universal obligatòria per a qualsevol activitat econòmica", "correct": false },
      { "text": "La prohibició de cobrar tarifes diferenciades per motius socials", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 18,
    "question": "Quan una administració local decideix recuperar un servei que estava externalitzat per gestionar-lo directament amb personal propi, quin procés jurídic i material s'està duent a terme?",
    "answers": [
      { "text": "Una privatització d'actius", "correct": false },
      { "text": "Una remunicipalització o reversió del servei", "correct": true },
      { "text": "Una concessió de domini públic", "correct": false },
      { "text": "Una externalització instrumental", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 19,
    "question": "Quin és l'objectiu principal de la memòria justificativa que exigeix la legislació abans d'optar per una forma de gestió indirecta d'un servei públic?",
    "answers": [
      { "text": "Justificar que la gestió privada o indirecta és més eficient i avantatjosa per a l'interès públic que la directa", "correct": true },
      { "text": "establir els sous privats dels consellers delegats de l'empresa", "correct": false },
      { "text": "Eximir l'empresa concessionària de qualsevol inspecció fiscal", "correct": false },
      { "text": "Modificar unilateralment les lleis estatals de pressupostos", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 20,
    "question": "Com s'anomena l'ens públic de caràcter institucional que depèn d'una entidad local i que es rigeix pel dret privat en la seva activitat de producció de béns o prestació de serveis contra preu o tarifa?",
    "answers": [
      { "text": "Una entitat pública empresarial local", "correct": true },
      { "text": "Un organisme autònom de caràcter administratiu pur", "correct": false },
      { "text": "Una societat mercantil de capital privat al 100%", "correct": false },
      { "text": "Una mancomunitat de règim general", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 21,
    "question": "Quina és la naturalesa jurídica de la relació entre l'Administració i l'usuari d'un servei públic de caràcter obligatori o essencial?",
    "answers": [
      { "text": "Una relació de dret privat basada en la lliure concurrència de mercat", "correct": false },
      { "text": "Una relació juridicoadministrativa de prestació i supremacia regulada pel dret públic", "correct": true },
      { "text": "Un contracte de compravenda civil ordinari", "correct": false },
      { "text": "Un pacte col·laboratiu entre iguals sense subjecció a normes", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 22,
    "question": "Quin paper juguen les ordenances i reglaments metropolitans aprovats per l'AMB en relació amb els serveis públics de la seva competència?",
    "answers": [
      { "text": "Regular l'organització, el funcionament i les condicions de prestació i tarifes dels serveis", "correct": true },
      { "text": "Establir els tipus penals i sancions de caràcter presidiari", "correct": false },
      { "text": "Modificar la demarcació territorial dels municipis de tota la comunitat autònoma", "correct": false },
      { "text": "Substituir completament la normativa de la Unió Europea", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 23,
    "question": "Quin tipus de control exerceix l'Administració pública titular sobre el concessionari en un model de gestió indirecta?",
    "answers": [
      { "text": "Un control d'inspecció, direcció i potestat de modificació i sanció per assegurar la correcta prestació del servei", "correct": true },
      { "text": "Cap tipus de control, ja que l'empresa privada gaudeix d'autonomia absoluta de mercat", "correct": false },
      { "text": "Un control estrictament laboral sobre els salaris interns de l'empresa aliena", "correct": false },
      { "text": "Un control judicial previ a través dels jutjats de primera instància", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 24,
    "question": "Dins del marc de la contractació del sector públic, si un contracte implica que l'execució de l'obra o servei es remunera mitjançant el dret d'explotació o aquest dret acompanyat d'un preu, ens trobem davant de:",
    "answers": [
      { "text": "Una concessió (de serveis o d'obres)", "correct": true },
      { "text": "Un contracte menor de subministraments", "correct": false },
      { "text": "Un acord marc de compres centralitzades", "correct": false },
      { "text": "Un conveni de subvenció directa sense contraprestació", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 25,
    "question": "Quina és una de les conseqüències jurídiques cabdals quan s'atorga la titularitat d'un servei públic a l'Administració mitjançant el principi de reserva?",
    "answers": [
      { "text": "S'exclou la iniciativa privada lliure en aquella activitat excepte quan s'atorgui la corresponent gestió indirecta o autorització", "correct": true },
      { "text": "Es privatitza automàticament tot el sector públic local", "correct": false },
      { "text": "Es suprimeix la necessitat de complir el principi d'estabilització pressupostària", "correct": false },
      { "text": "S'atorga la propietat dels béns personals dels usuaris a l'ajuntament", "correct": false }
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