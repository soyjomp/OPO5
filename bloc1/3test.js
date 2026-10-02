const TEST_ID = "3test.js"; 

const questions = [

  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 1,
    "question": "Segons l'article 1 de l'Estatut d'Autonomia de Catalunya (Llei Orgànica 6/2006), de quina manera s'exerceix l'autogovern de Catalunya?",
    "answers": [
      { "text": "Com a comunitat històrica amb facultats legislatives delegades per l'Estat", "correct": false },
      { "text": "Com a nacionalitat que s'exerceix en forma de Comunitat Autònoma", "correct": true },
      { "text": "Com a regió autònoma integrada en l'Estat federal espanyol", "correct": false },
      { "text": "Com a corporació de dret públic amb competències exclusives originàries", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 2,
    "question": "Quin valor jurídic i polític té el Preàmbul de l'Estatut d'Autonomia de Catalunya de 2006?",
    "answers": [
      { "text": "Té plena força jurídica vinculant i obligatòria per a tots els poders públics", "correct": false },
      { "text": "Té caràcter declaratiu i històric d'autogovern, mancant de força jurídica obligatòria directa", "correct": true },
      { "text": "Forma part del bloc de constitucionalitat amb rang de llei orgànica interpretativa", "correct": false },
      { "text": "Té el mateix rang normatiu que els articles continguts en el Títol Preliminar", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 3, 
    "question": "d'acord amb l'Estatut, quin paper té el català pel que fa a la seva oficialitat?",
    "answers": [
      { "text": "És l'única llengua oficial a tot el territori de Catalunya en l'àmbit de l'administració pública", "correct": false },
      { "text": "És la llengua pròpia de Catalunya i és oficial, juntament amb el castellà", "correct": true },
      { "text": "És la llengua oficial preferent, tenint el castellà un caràcter supletori i no cooficial", "correct": false },
      { "text": "És la llengua pròpia i exclusiva de les institucions de la Generalitat de Catalunya", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 4,
    "question": "Quins són els símbols nacionals de Catalunya segons l'article 8 de l'Estatut d'Autonomia?",
    "answers": [
      { "text": "La senyera, la diada de l'Onze de Setembre i l'himne d''Els Segadors'", "correct": true },
      { "text": "L'escut de Catalunya, la bandera de quatre barres i la festa de Sant Jordi", "correct": false },
      { "text": "La bandera tricolor, l'himne nacional i la diada del 23 d'abril", "correct": false },
      { "text": "La senyera bicolor, la diada de Catalunya i la dansa de la sardana", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 5,
    "question": "Segons l'Estatut d'Autonomia de Catalunya, quin òrgan institucional assumeix la suprema representació de la Generalitat i l'ordinària de l'Estat a Catalunya?",
    "answers": [
      { "text": "El Parlament de Catalunya", "correct": false },
      { "text": "El Consell Executiu o Govern", "correct": false },
      { "text": "El President de la Generalitat", "correct": true },
      { "text": "El Tribunal Superior de Justícia de Catalunya", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 6,
    "question": "Quin element NO forma part de les institucions bàsiques de la Generalitat de Catalunya recollides al Títol II de l'Estatut?",
    "answers": [
      { "text": "El Parlament de Catalunya", "correct": false },
      { "text": "El Síndic de Greuges", "correct": true },
      { "text": "El President de la Generalitat", "correct": false },
      { "text": "El Govern", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 7,
    "question": "Quina característica defineix les competències exclusives de la Generalitat segons l'article 110 de l'Estatut?",
    "answers": [
      { "text": "Inclouen la potestat legislativa, la reglamentària i la funció executiva, íntegrament per la Generalitat", "correct": true },
      { "text": "La Generalitat només pot exercir la funció executiva sobre bases prèviament legislades per l'Estat", "correct": false },
      { "text": "Comparteixen el desenvolupament legislatiu amb l'Estat mitjançant lleis de transferència", "correct": false },
      { "text": "Requereixen l'autorització prèvia del Senat per a l'aprovació de qualsevol reglament executiu", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 8,
    "question": "En relació amb les competències compartides (article 111 de l'Estatut), com s'estructura la potestat normativa?",
    "answers": [
      { "text": "L'Estat fixa la legislació completa i la Generalitat té exclusivament competències d'inspecció", "correct": false },
      { "text": "Correspon a la Generalitat la potestat legislativa i la reglamentària en el marc de les bases de l'Estat", "correct": true },
      { "text": "La Generalitat aprova les bases generals i l'Estat dictarà la legislació de desenvolupament", "correct": false },
      { "text": "Són competències titularitat exclusiva de l'administració local sota tutela de la Generalitat", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 9,
    "question": "Quina és la naturalesa de les competències executives de la Generalitat segons l'article 112 de l'Estatut?",
    "answers": [
      { "text": "La Generalitat assumeix la potestat legislativa plena i la funció executiva i reglamentària interna", "correct": false },
      { "text": "Correspon a la Generalitat la potestat reglamentària interna, la funció executiva i la inspecció", "correct": true },
      { "text": "Implica la delegació de facultats estatals sense capacitat d'autoorganització pròpia", "correct": false },
      { "text": "Suposa la gestió de tributs estatals recaptats directament al territori de Catalunya", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 10,
    "question": "Segons l'Estatut d'Autonomia i la seva connexió amb el règim local, quin paper exerceix la Generalitat sobre l'administració local?",
    "answers": [
      { "text": "Té competència exclusiva en matèria de règim local, d'acord amb la Constitució", "correct": true },
      { "text": "La creació i supressió de municipis depèn exclusivament de l'Estat central", "correct": false },
      { "text": "L'Estatut no conté cap referència a l'autonomia local ni a les entitats supramunicipals", "correct": false },
      { "text": "La potestat de fixar el règim financer local recau de manera exclusiva en els ajuntaments", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 11,
    "question": "Com neix l'Àrea Metropolitana de Barcelona (AMB) en el marc de l'ordenament autonòmic?",
    "answers": [
      { "text": "Com a unió voluntària de municipis a través d'un conveni de dret privat aprovat per decret", "correct": false },
      { "text": "En compliment directe del mandat de l'Estatut de Catalunya per gestionar serveis públics supramunicipals", "correct": true },
      { "text": "Per un reial decret llei del Govern espanyol a instància de la Diputació de Barcelona", "correct": false },
      { "text": "Com un organisme autònom dependent directament del Ministeri d'Administracions Públiques", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 12,
    "question": "Quants municipis integren inicialment i formen part de l'Àrea Metropolitana de Barcelona (AMB)?",
    "answers": [
      { "text": "25 municipis", "correct": false },
      { "text": "30 municipis", "correct": false },
      { "text": "36 municipis", "correct": true },
      { "text": "42 municipis", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 13,
    "question": "Segons el procediment general de reforma de l'Estatut (article 222), a qui correspon la iniciativa de reforma?",
    "answers": [
      { "text": "Al Parlament de Catalunya, al Govern, o a les Corts Generals", "correct": true },
      { "text": "Exclusivament al President de la Generalitat o a iniciativa popular amb 500.000 signatures", "correct": false },
      { "text": "Només al Congrés dels Diputats a proposta del conjunt de comunitats autònomes", "correct": false },
      { "text": "Al Consell de Garanties Estatutàries conjuntament amb el Tribunal Constitucional", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 14,
    "question": "Quina majoria és necessària al Parlament de Catalunya per a l'aprovació prèvia d'una proposta de reforma ordinària de l'Estatut (article 223)?",
    "answers": [
      { "text": "Majoria simple de la cambra", "correct": false },
      { "text": "Majoria absoluta de la meitat més un dels diputats", "correct": false },
      { "text": "Majoria de dos terços (2/3) dels diputats", "correct": true },
      { "text": "Majoria de tres quints (3/5) amb conformitat del Senat", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 15,
    "question": "En el procediment de reforma de l'Estatut, quin tràmit és preceptiu i obligatori després de l'aprovació al Parlament de Catalunya?",
    "answers": [
      { "text": "La ratificació immediata per referèndum consultiu dels ciutadans de Catalunya", "correct": true },
      { "text": "L'aprovació directa per reial decret llei del Consell de Ministres", "correct": false },
      { "text": "El dictament vinculant del Parlament Europeu sobre cohesió territorial", "correct": false },
      { "text": "La convalidació per part dels plens de tots els ajuntaments de més de 20.000 habitants", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 16,
    "question": "Quina de les següents afirmacions relatives a la iniciativa popular de reforma de l'Estatut és CORRECTA segons l'article 222?",
    "answers": [
      { "text": "Es pot presentar directament per qualsevol grup de ciutadans si recull 100.000 signatures", "correct": false },
      { "text": "La iniciativa popular no està contemplada ni permesa per iniciar la reforma de l'Estatut", "correct": true },
      { "text": "Requereix l'aval previ del Síndic de Greuges i un referèndum previ vinculant", "correct": false },
      { "text": "S'assimila a la iniciativa legislativa popular ordinària davant el Parlament", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 17,
    "question": "Quin és el tractament de la llengua castellana a Catalunya segons el marc de l'Estatut d'Autonomia?",
    "answers": [
      { "text": "És una llengua reconeguda només per a tràmits estatals, mancant de caràcter oficial autonòmic", "correct": false },
      { "text": "És l'altra llengua oficial a Catalunya, tenint tots els ciutadans dret a usar-la", "correct": true },
      { "text": "Té caràcter de llengua estrangera subjecta a règim de traducció simultània", "correct": false },
      { "text": "És cooficial exclusivament en l'àmbit de la hisenda i la justícia metropolitana", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 18,
    "question": "Quin òrgan estatutari de la Generalitat té encomanada la funció de velar per la સુpervisió de la comptabilitat i la gestió econòmica del sector públic de la Generalitat?",
    "answers": [
      { "text": "El Consell de Garanties Estatutàries", "correct": false },
      { "text": "La Sindicatura de Comptes", "correct": true },
      { "text": "L'Oficina Antifrau de Catalunya", "correct": false },
      { "text": "El Consell de l'Audiovisual de Catalunya (CAC)", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 19,
    "question": "Quina funció principal desenvolupa el Consell de Garanties Estatutàries segons l'Estatut?",
    "answers": [
      { "text": "Resoldre els conflictes de jurisdicció entre l'Ajuntament de Barcelona i l'AMB", "correct": false },
      { "text": "Emetre dictàmens previs no vinculants però preceptius sobre la adequació a l'Estatut de les lleis del Parlament", "correct": true },
      { "text": "Controlar la legalitat dels pressupostos municipals abans de la seva aprovació definitiva", "correct": false },
      { "text": "Spbtituir el Tribunal Constitucional en l'empara de drets fonamentals", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 20,
    "question": "Segons l'Estatut d'Autonomia, on es fonamenta principalment l'autogovern de Catalunya juntament amb la Constitució?",
    "answers": [
      { "text": "En els drets històrics del poble català, actualitzats per l'Estatut", "correct": true },
      { "text": "En el dret internacional d'autodeterminació dels pobles mediterranis", "correct": false },
      { "text": "En els pactes fundacionals de la Unió Europea i la Carta de Municipis", "correct": false },
      { "text": "En la legislació històrica municipal de l'època medieval", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 21,
    "question": "Quin nivell d'estructura recull el Títol I de l'Estatut d'Autonomia de Catalunya?",
    "answers": [
      { "text": "Les institucions de la Generalitat i el seu règim de funcionament", "correct": false },
      { "text": "Els drets, els deures i els principis rectors dels ciutadans", "correct": true },
      { "text": "El finançament de la Generalitat i la relació amb l'Estat", "correct": false },
      { "text": "Les competències de la Generalitat en matèria local i sectorial", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 22,
    "question": "Quina funció té assignada el Parlament de Catalunya dins del marc institucional de la Generalitat?",
    "answers": [
      { "text": "La potestas legislativa, l'aprovació dels pressupostos i el control de l'acció del Govern", "correct": true },
      { "text": "La direcció de la política exterior i la representació ordinària de l'Estat", "correct": false },
      { "text": "L'execució directa dels serveis públics supramunicipals a través de mancomunitats", "correct": false },
      { "text": "La fiscalització comptable prèvia de tots els contractes menors de les administracions", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 23,
    "question": "Dins de l'estructura organitzativa de la Generalitat, quin òrgan col·legiat dirigeix la política i l'administració de la Generalitat?",
    "answers": [
      { "text": "El Consell Executiu o Govern", "correct": true },
      { "text": "La Comissió Bilateral Generalitat-Estat", "correct": false },
      { "text": "La Mesa del Parlament", "correct": false },
      { "text": "La Diputació Permanent", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 24,
    "question": "Segons l'Estatut, quin és el paper de l'Administració local de Catalunya en relació amb les competències de la Generalitat?",
    "answers": [
      { "text": "Els ens locals gaudixen d'autonomia per a la gestió dels seus interessos i participen en l'elaboració de lleis que els afecten", "correct": true },
      { "text": "Els ajuntaments depenen jeràrquicament dels departaments de la Generalitat segons la matèria", "correct": false },
      { "text": "L'administració local només pot assumir competències si rep una delegació expressa estatal", "correct": false },
      { "text": "Les entitats supramunicipals com l'AMB tenen rang de comunitat autònoma autònoma", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 25,
    "question": "Quin article de l'Estatut d'Autonomia de Catalunya es refereix directament al marc de les competències sobre el govern local i la seva relació amb ens com l'AMB?",
    "answers": [
      { "text": "L'article 30 i 32", "correct": false },
      { "text": "L'article 90 i 93", "correct": true },
      { "text": "L'article 140 i 142", "correct": false },
      { "text": "L'article 200 i 202", "correct": false }
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