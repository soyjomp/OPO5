const TEST_ID = "17test.js"; 

const questions = [

 {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 1,
    "question": "Segons la normativa de procediment administratiu, quina és la naturalesa jurídica d'una queixa o suggeriment presentada per un ciutadà davant l'AMB?",
    "answers": [
      { "text": "Constitueix un recurs administratiu ordinari que suspèn els terminis d'impugnació", "correct": false },
      { "text": "És un mitjà no formal que no constitueix un recurs administratiu ni inicia cap procediment sancionador", "correct": true },
      { "text": "És un requisit de procedibilitat obligatori abans d'acudir a la jurisdicció contenciosa-administrativa", "correct": false },
      { "text": "Té idèntica naturalesa i efectes jurídics que el recurs potestatiu de reposició", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 2,
    "question": "Quin efecte produeix la presentació d'una queixa o suggeriment sobre els terminis establerts per interposar els recursos administratius o judicials legals?",
    "answers": [
      { "text": "Interromp tant els terminis de la via administrativa com de la via judicial", "correct": false },
      { "text": "Suspèn el termini d'interposició del recurs d'alçada durant un màxim de quinze dies", "correct": false },
      { "text": "No interromp ni suspèn en cap cas els terminis establerts per interposar recursos", "correct": true },
      { "text": "Només interromp el termini si es refereix a tributs metropolitans de l'IMT", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 3,
    "question": "Quina característica principal defineix la denúncia presentada per un particular davant de l'Administració pública?",
    "answers": [
      { "text": "Atorga automàticament la condició d'interessat en el procediment a qui la presenta", "correct": false },
      { "text": "Posa en coneixement d'un òrgan fets que podrien ser constitutius d'infracció, sense obligar a donar la condició d'interessat", "correct": true },
      { "text": "S'ha de formalitzar necessàriament mitjançant un recurs d'alçada o de reposició", "correct": false },
      { "text": "Només pot ser presentada per personal funcionari de l'entitat local", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 4,
    "question": "En què moment processal es poden presentar les al·legacions per part dels interessats durant la tramitació d'un procediment administratiu?",
    "answers": [
      { "text": "Únicament un cop dictada la resolució definitiva en via administrativa", "correct": false },
      { "text": "En qualsevol moment del procediment anterior al tràmit d'audiència i proposta de resolució", "correct": true },
      { "text": "Només durant el termini improrrogable de les 48 hores posteriors a la iniciació", "correct": false },
      { "text": "Exclusivament durant la fase d'execució material de l'acte administratiu", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 5,
    "question": "Quin deure té l'òrgan instructor respecte de les al·legacions i documents presentats pels interessats?",
    "answers": [
      { "text": "Té l'obligació de tenir-les en compte a l'hora de redactar la proposta de resolució definitiva", "correct": true },
      { "text": "Pot ignorar-les lliurement si el procediment s'ha iniciat d'ofici", "correct": false },
      { "text": "Està obligat a elevar-les directament al Tribunal Constitucional per a la seva validació", "correct": false },
      { "text": "Només les ha de valorar si suposen una modificació del pressupost general", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 6,
    "question": "Contra quin tipus d'actes administratius s'interposa generalment el recurs d'alçada segons la Llei 39/2015?",
    "answers": [
      { "text": "Contra actes que posen fi a la via administrativa", "correct": false },
      { "text": "Contra actes que NO posen fi a la via administrativa, davant l'òrgan superior jeràrquic", "correct": true },
      { "text": "Exclusivament contra disposicions de caràcter general i reglaments orgànics", "correct": false },
      { "text": "Contra qualsevol resolució dictada pel Ple d'una corporació local", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 7,
    "question": "Quin és el termini general d'interposició d'un recurs d'alçada si l'acte administratiu impugnat és exprés?",
    "answers": [
      { "text": "Deu dies hàbils des de la publicació al tauler d'anuncis", "correct": false },
      { "text": "Un mes des de l'endemà de la notificació de l'acte", "correct": true },
      { "text": "Dos mesos des de la data de la seva emissió interna", "correct": false },
      { "text": "Tres mesos si es tracta d'una entitat metropolitana", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 8,
    "question": "Quin és el termini general per interposar un recurs d'alçada en cas que l'acte sigui presumpte (produït per silenci administratiu)?",
    "answers": [
      { "text": "Un mes", "correct": false },
      { "text": "Dos mesos", "correct": false },
      { "text": "Tres mesos, a comptar de l'endemà d'aquell en què es produeixi el silenci", "correct": true },
      { "text": "Sis mesos improrrogables", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 9,
    "question": "Quin òrgan és el competent per resoldre un recurs d'alçada interposat contra un acte dictat per un òrgan inferior?",
    "answers": [
      { "text": "El mateix òrgan que va dictar l'acte impugnat", "correct": false },
      { "text": "L'òrgan superior jeràrquic d'aquell que va dictar l'acte", "correct": true },
      { "text": "El Jutjat Contenciós-Administratiu de guàrdia de Barcelona", "correct": false },
      { "text": "La Sindicatura de Comptes de Catalunya", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 10,
    "question": "Quina és la naturalesa del recurs potestatiu de reposició respecte dels actes que posen fi a la via administrativa?",
    "answers": [
      { "text": "És un recurs obligatori previ a l'interposició del recurs d'alçada", "correct": false },
      { "text": "És potestatiu, de manera que l'interessat pot triar entre interposar-lo o acudir directament a la via contenciosa-administrativa", "correct": true },
      { "text": "Només pot interposar-se per motius de nul·litat de ple dret i mai per anul·labilitat", "correct": false },
      { "text": "Requereix necessàriament la intervenció prèvia de la Comissió Jurídica Assessora", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 11,
    "question": "Quin termini general estableix la normativa per interposar el recurs potestatiu de reposició contra un acte exprés?",
    "answers": [
      { "text": "Un mes", "correct": true },
      { "text": "Dos mesos", "correct": false },
      { "text": "Tres mesos", "correct": false },
      { "text": "Sis mesos", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 12,
    "question": "Quina trampa o error comú s'ha d'evitar en relació amb els recursos contra actes que posen fi a la via administrativa?",
    "answers": [
      { "text": "Interposar un recurs d'alçada contra un acte que posa fi a la via administrativa", "correct": true },
      { "text": "Presentar un recurs de reposició davant el mateix òrgan que va dictar l'acte", "correct": false },
      { "text": "Acudir al jutjat contenciós-administratiu un cop transcorreguts els terminis legals", "correct": false },
      { "text": "Utilitzar el model oficial normalitzat de la Seu Electrònica de l'AMB", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 13,
    "question": "Quin caràcter excepcional té el recurs extraordinari de revisió?",
    "answers": [
      { "text": "Es pot interposar contra qualsevol acte en qualsevol moment sense límit temporal", "correct": false },
      { "text": "Es interposa contra actes ferms en via administrativa per motius taxats per la llei (com error de fet o aparició de documents essencials)", "correct": true },
      { "text": "Només es pot utilitzar per modificar reglaments d'organització i funcionament", "correct": false },
      { "text": "Substitueix obligatòriament la jurisdicció contenciosa-administrativa en l'àmbit local", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 14,
    "question": "Quin és el termini general d'interposició del recurs contenciós-administratiu contra un acte administratiu exprés?",
    "answers": [
      { "text": "Un mes", "correct": false },
      { "text": "Dos mesos a comptar de l'endemà de la notificació de l'acte", "correct": true },
      { "text": "Tres mesos", "correct": false },
      { "text": "Sis mesos", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 15,
    "question": "Quin és el termini general per interposar el recurs contenciós-administratiu si es tracta d'una desestimació per silenci administratiu?",
    "answers": [
      { "text": "Dos mesos", "correct": false },
      { "text": "Tres mesos", "correct": false },
      { "text": "Sis mesos a partir de l'endemà del dia en què es produeixi el silenci", "correct": true },
      { "text": "Un any natural", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 16,
    "question": "Quins òrgans judicials coneixen generalment, en primera o única instància, dels recursos contenciosos-administratius contra els actes de les entitats locals?",
    "answers": [
      { "text": "Els Jutjats Contenciosos-Administratius i les Sales contencioses dels TSJ", "correct": true },
      { "text": "Els Jutjats de Primera Instància i Instrucció de l'ordre civil", "correct": false },
      { "text": "El Tribunal de Comptes de l'Estat en ple", "correct": false },
      { "text": "Els tribunals arbitrals de consum de l'AMB", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 17,
    "question": "On s'ha de tramitar principalment una queixa o reclamació relativa a la prestació dels serveis metropolitans essencials de l'AMB (com transport o residus)?",
    "answers": [
      { "text": "A través del servei centralitzat i la bústia accessible a la Seu Electrònica de l'AMB", "correct": true },
      { "text": "Directament mitjançant una demanda urgent davant el Tribunal Suprem", "correct": false },
      { "text": "Mitjançant un recurs extraordinari de revisió davant el Ministeri d'Hisenda", "correct": false },
      { "text": "A través dels jutjats de pau de cadascun dels 36 municipis metropolitans", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 18,
    "question": "Quin organisme de l'AMB s'encarrega específicament de tramitar els recursos i procediments de revisió en matèria de tributs i taxes metropolitanes (com la TMTR)?",
    "answers": [
      { "text": "L'Institut Metropolità de Tributs (IMT)", "correct": true },
      { "text": "L'Autoritat del Transport Metropolità (ATM)", "correct": false },
      { "text": "Transports Metropolitans de Barcelona (TMB)", "correct": false },
      { "text": "El Consorci Metropolità de l'Habitatge", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 19,
    "question": "Segons els Estatuts de l'AMB i la Llei de creació de l'entitat, quina és la consideració dels actes emesos pel Consell Metropolità i la Presidència?",
    "answers": [
      { "text": "Exhaureixen la via administrativa", "correct": true },
      { "text": "Són actes de tràmit no qualificats que no es poden impugnar mai", "correct": false },
      { "text": "Requereixen sempre la ratificació prèvia del Parlament de Catalunya", "correct": false },
      { "text": "Tenen caràcter merament consultiu i no vinculant", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 20,
    "question": "Quin recurs resulta procedent contra una resolució dictada pel Consell Metropolità de l'AMB que exhaureix la via administrativa?",
    "answers": [
      { "text": "Recurs d'alçada davant el conseller competent de la Generalitat", "correct": false },
      { "text": "Recurs potestatiu de reposició o recurs contenciós-administratiu directament", "correct": true },
      { "text": "Reclamació prèvia obligatoria davant el Defensor del Poble", "correct": false },
      { "text": "Recurs d'alçada davant el President de la Generalitat", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 21,
    "question": "Quina d'opció descriu correctament la diferència entre un acte resolutori i un acte de tràmit?",
    "answers": [
      { "text": "L'acte resolutori decideix el fons de l'assumpte, mentre que l'acte de tràmit és instrumental i prepara la resolució", "correct": true },
      { "text": "L'acte de tràmit sempre exhaureix la via administrativa, a diferència del resolutori", "correct": false },
      { "text": "L'acte resolutori mai pot ser impugnat en cap via", "correct": false },
      { "text": "L'acte de tràmit té caràcter reglamentari general", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 22,
    "question": "Sota quina condició excepcional es poden impugnar de manera independent els actes de tràmit durant un procediment administratiu?",
    "answers": [
      { "text": "Quan es tracta d'actes de tràmit qualificats (decideixen el fons, fan impossible la continuïtat o produeixen indefensió)", "correct": true },
      { "text": "Sempre, sense cap limitació legal ni formal", "correct": false },
      { "text": "Únicament quan ho autoritza expressament el Ple de l'entitat local per unanimitat", "correct": false },
      { "text": "Quan s'han dictat fora del termini legal establert", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 23,
    "question": "Quina és la consequència jurídica general d'un acte administratiu que incorre en una causa de nul·litat de ple dret?",
    "answers": [
      { "text": "És convalidable automàticament pel transcurs del termini d'un mes", "correct": false },
      { "text": "Manca de validesa des de l'origen i no pot adquirir fermesa per simple transcurs de temps", "correct": true },
      { "text": "Produeix tots els seus efectes de manera inatacable un cop notificat", "correct": false },
      { "text": "Només pot ser anul·lat mitjançant recurs d'alçada en termini de deu dies", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 24,
    "question": "Quin tipus de vici o irregularitat suposa la realització d'actuacions administratives fora del termini establert legalment?",
    "answers": [
      { "text": "Nul·litat de ple dret en tots els casos sense excepció", "correct": false },
      { "text": "Únicament és anul·lable quan així ho imposa la naturalesa de l'acte o termini", "correct": true },
      { "text": "Determina automàticament la inexistència jurídica de l'Administració", "correct": false },
      { "text": "Converteix l'acte en un reglament de caràcter general", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 25,
    "question": "Quin és l'efecte de la tècnica de la conservació dels actes administratius quan s'anul·len determinades actuacions d'un procediment?",
    "answers": [
      { "text": "S'anul·la tot el procediment des del seu inici obligatòriament", "correct": false },
      { "text": "Es conserven aquells actes i tràmits el contingut dels quals s'hauria mantingut igual si no s'hagués comès la infracció", "correct": true },
      { "text": "S'obliga l'interessat a pagar una taxa addicional de revisió", "correct": false },
      { "text": "Es trasllada la competència directament al Tribunal Constitucional", "correct": false }
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