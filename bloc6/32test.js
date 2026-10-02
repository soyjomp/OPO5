const TEST_ID = "32test.js"; 

const questions = [

 {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 1,
    "question": "Segons el Reial Decret Legislatiu 2/2004 (TRLRHL), quina naturalesa jurídica tenen les previsions incloses a l'estat d'ingressos del pressupost d'una entitat local com l'AMB?",
    "answers": [
      { "text": "Tenen caràcter limitatiu i vinculant per a la recaptació màxima anual", "correct": false },
      { "text": "Constitueixen una mera previsió o estimació comptable dels recursos a liquidar, mancant d'efecte limitatiu", "correct": true },
      { "text": "Tenen rang de norma reglamentària i obliguen a la seva recaptació sota pena de nul·litat", "correct": false },
      { "text": "Són crèdits autoritzats subjectes al principi d'especialitat quantitativa", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 2,
    "question": "D'acord amb la Llei 31/2010 de l'Àrea Metropolitana de Barcelona i el TRLRHL, quina de les següents afirmacions relatives als crèdits de despeses és correcta?",
    "answers": [
      { "text": "Tenen caràcter estimatiu i no limitatiu, permetent obligacions superiors si hi ha superàvit", "correct": false },
      { "text": "Tenen caràcter limitatiu i vinculant, sent nuls de ple dret els acords que excedeixin els crèdits pressupostaris", "correct": true },
      { "text": "Es poden minorar per atendre directament pagaments sense necessitat d'ingressar prèviament els drets", "correct": false },
      { "text": "S'estructuren obligatòriament amb classificació per programes tant en ingressos com en despeses", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 3,
    "question": "Quina és la seqüència exacta de les fases d'execució del pressupost de despeses establerta per la normativa aplicable a les entitats locals?",
    "answers": [
      { "text": "Disposició (D) - Autorització (A) - Reconeixement de l'obligació (O) - Ordenació del pagament (P)", "correct": false },
      { "text": "Autorització (A) - Disposició o Compromís (D) - Reconeixement de l'obligació (O) - Ordenació del pagament (P)", "correct": true },
      { "text": "Reconeixement de l'obligació (O) - Autorització (A) - Disposició (D) - Pagament material (PM)", "correct": false },
      { "text": "Autorització (A) - Ordenació del pagament (P) - Disposició (D) - Reconeixement de l'obligació (O)", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 4,
    "question": "En relació amb l'estructura econòmica del pressupost de despeses, on s'han de comptabilitzar obligatòriament els interessos derivats del deute públic o préstecs?",
    "answers": [
      { "text": "Al Capítol 1, dedicat a remuneracions de personal", "correct": false },
      { "text": "Al Capítol 3, denominat despeses financeres", "correct": true },
      { "text": "Al Capítol 8, relatiu a actius financers", "correct": false },
      { "text": "Al Capítol 9, destinat a passius financers i amortització de deute", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 5,
    "question": "Quin tipus de classificació pressupostària és obligatòria exclusivament per a l'estat de despeses i no figura en l'estat d'ingressos?",
    "answers": [
      { "text": "La classificació econòmica", "correct": false },
      { "text": "La classificació orgànica o institucional", "correct": false },
      { "text": "La classificació funcional o per programes", "correct": true },
      { "text": "La classificació territorial per districtes", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 6,
    "question": "Segons el TRLRHL, què succeeix si el dia 1 de gener l'AMB no ha aprovat el nou pressupost general per a l'exercici corrent?",
    "answers": [
      { "text": "Es paralitza l'activitat administrativa i no es poden realitzar despeses fins a l'aprovació definitiva", "correct": false },
      { "text": "Es prorroga automàticament el pressupost de l'any anterior en els seus crèdits inicials", "correct": true },
      { "text": "S'aplica directament el pressupost de la Generalitat de Catalunya de forma supletòria", "correct": false },
      { "text": "S'obre un termini extraordinari de 30 dies on només es poden executar despeses de personal", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 7,
    "question": "Quin és el límit màxim establert per a l'establiment del recàrrec metropolità sobre l'Impost sobre Béns Immobles (IBI) per part de l'AMB, d'acord amb el TRLRHL i la Llei 31/2010?",
    "answers": [
      { "text": "Un percentatge únic del 0,5% de la base imposable", "correct": false },
      { "text": "Un percentatge únic i màxim del 0,2% de la base imposable", "correct": true },
      { "text": "Un tipus de l'1% de la quota líquida municipal", "correct": false },
      { "text": "No existeix límit legal sempre que s'aprovi per majoria absoluta del Consell Metropolità", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 8,
    "question": "Com es defineix el Capítol 4 de l'estat de despeses en la classificació econòmica pressupostària local?",
    "answers": [
      { "text": "Inversions reals", "correct": false },
      { "text": "Transferències corrents", "correct": true },
      { "text": "Despeses corrents de béns i serveis", "correct": false },
      { "text": "Fons de contingència", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 9,
    "question": "Quin principi pressupostari estableix que els drets liquidats i les obligacions reconegudes s'han d'aplicar al pressupost pel seu import íntegre, prohibint minorar les obligacions amb drets pendents?",
    "answers": [
      { "text": "Principi d'especialitat qualitativa", "correct": false },
      { "text": "Principi de no afectació", "correct": false },
      { "text": "Principi de pressupost brut o universalitat en la seva vessant d'aplicació íntegra", "correct": true },
      { "text": "Principi d'equilibri pressupostari", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 10,
    "question": "Segons el calendari de tramitació pressupostària local, en quina data límit el President de l'entitat local ha de formar el Pressupost General i presentar-lo al Ple?",
    "answers": [
      { "text": "Abans de l'1 de setembre", "correct": false },
      { "text": "Abans del 15 d'octubre", "correct": true },
      { "text": "Abans del 31 d'octubre", "correct": false },
      { "text": "Abans del 31 de desembre", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 11,
    "question": "Quin significat té la fase d'Autorització (A) dins de la gestió del pressupost de despeses?",
    "answers": [
      { "text": "L'acte pel qual s'ordena materialment el pagament a la Tresoreria", "correct": false },
      { "text": "L'acte administratiu pel qual s'acorda realitzar una despesa per un import determinat o estimat, reservant crèdit", "correct": true },
      { "text": "L'acte de reconeixement de l'obligació exigible contra l'entitat", "correct": false },
      { "text": "La formalització jurídica del contracte amb el tercer", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 12,
    "question": "Quin capítol de l'estat d'ingressos correspon als impostos directes segons l'estructura pressupostària aplicable a les entitats locals?",
    "answers": [
      { "text": "Capítol 1", "correct": true },
      { "text": "Capítol 2", "correct": false },
      { "text": "Capítol 3", "correct": false },
      { "text": "Capítol 4", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 13,
    "question": "Quina és la data límit fixada normativament per a la confecció de la liquidació del pressupost de l'exercici anterior?",
    "answers": [
      { "text": "Abans del 31 de gener", "correct": false },
      { "text": "Abans de l'1 de març", "correct": true },
      { "text": "Abans del 31 de març", "correct": false },
      { "text": "Abans del 30 de juny", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 14,
    "question": "Què determina el principi d'especialitat qualitativa en matèria pressupostària?",
    "answers": [
      { "text": "Que els crèdits no poden superar una quantia màxima global", "correct": false },
      { "text": "Que les consignacions pressupostàries només poden ser destinades a la finalitat específica per a la qual van ser previstes", "correct": true },
      { "text": "Que l'exercici pressupostari ha de coincidir estrictament amb l'any natural", "correct": false },
      { "text": "Que tots els ingressos s'han de destinar indistintament a qualsevol despesa", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 15,
    "question": "Quin òrgan de l'AMB va assumir les funcions prèvies de les antigues entitats metropolitanes des de la seva constitució formal el 21 de juliol de 2011?",
    "answers": [
      { "text": "El Ple de l'Ajuntament de Barcelona", "correct": false },
      { "text": "El Consell Metropolità", "correct": true },
      { "text": "La Comissió Mixta de Valoracions", "correct": false },
      { "text": "La Junta de Govern Local de la Mancomunitat", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 16,
    "question": "A quin capítol de l'estat d'ingressos s'han d'imputar les taxes, preus públics i altres ingressos inespecífics?",
    "answers": [
      { "text": "Capítol 1", "correct": false },
      { "text": "Capítol 2", "correct": false },
      { "text": "Capítol 3", "correct": true },
      { "text": "Capítol 5", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 17,
    "question": "Quin és el termini d'exposició pública al Butlletí Oficial de la Província (BOP) del Pressupost General un cop aprovat inicialment pel Ple?",
    "answers": [
      { "text": "10 dies hàbils", "correct": false },
      { "text": "15 dies", "correct": true },
      { "text": "30 dies naturals", "correct": false },
      { "text": "20 dies", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 18,
    "question": "Què implica el principi de no afectació dels ingressos públics locals?",
    "answers": [
      { "text": "Que tots els ingressos s'han d'ingressar obligatòriament en comptes corrents no remunerats", "correct": false },
      { "text": "Que els recursos de l'entitat es destinen a satisfer el conjunt de les seves obligacions, llevat dels ingressos expressament afectats a fins determinats", "correct": true },
      { "text": "Que cap ingrés pot ser destinat a inversions reals", "correct": false },
      { "text": "Que els impostos indirectes no poden finançar despeses de personal", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 19,
    "question": " Quin capítol de despeses recull el Fons de contingència previst a la normativa d'estabilitat pressupostària?",
    "answers": [
      { "text": "Capítol 3", "correct": false },
      { "text": "Capítol 5", "correct": true },
      { "text": "Capítol 7", "correct": false },
      { "text": "Capítol 9", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 20,
    "question": "Quina funció principal compleix el pressupost com a document polític dins d'una administració pública?",
    "answers": [
      { "text": "Registrar exclusivament les operacions comptables passades", "correct": false },
      { "text": "Explicitar els objectius de govern, planificar la despesa i establir les prioritats polítiques per al proper any", "correct": true },
      { "text": "Establir les sancions disciplinàries per als funcionaris infractors", "correct": false },
      { "text": "Modificar directament les lleis orgàniques estatals", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 21,
    "question": "A quin concepte correspon el Capítol 6 de l'estat de despeses?",
    "answers": [
      { "text": "Passius financers", "correct": false },
      { "text": "Inversions reals", "correct": true },
      { "text": "Transferències de capital", "correct": false },
      { "text": "Actius financers", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 22,
    "question": "Quina és la naturalesa de la fase de Reconeixement de l'obligació (O) en la despesa pública?",
    "answers": [
      { "text": "Un simple pronòstic de despesa futura", "correct": false },
      { "text": "L'acte que contreu el crèdit exigible contra l'entitat derivat d'una prestació realitzada satisfactòriament", "correct": true },
      { "text": "L'autorització genèrica del pressupost per part del Ple", "correct": false },
      { "text": "El lliurament material dels fons al proveïdor", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 23,
    "question": "Quina norma legal bàsica aprova el Text Refós de la Llei Reguladora de les Hisendes Locals (TRLRHL)?",
    "answers": [
      { "text": "La Llei 31/2010", "correct": false },
      { "text": "El Reial Decret Legislatiu 2/2004, de 5 de març", "correct": true },
      { "text": "La Llei Orgànica 2/2012", "correct": false },
      { "text": "L'Ordre HAP/419/2014", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 24,
    "question": "Què s'entén per classificació orgànica dins de l'estat de despeses?",
    "answers": [
      { "text": "La determinació de la finalitat o objectiu de la despesa", "correct": false },
      { "text": "La identificació de qui realitza la despesa (òrgans, departaments o entitats)", "correct": true },
      { "text": "La naturalesa econòmica de la despesa segons els capítols", "correct": false },
      { "text": "El grau de vinculació jurídica establert a les bases d'execució", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 25,
    "question": "Quin principi pressupostari exigeix que cadascun dels pressupostos que integren el pressupost general s'aprovi sense dèficit inicial?",
    "answers": [
      { "text": "Principi d'unitat", "correct": false },
      { "text": "Principi d'equilibri pressupostari", "correct": true },
      { "text": "Principi d'anualitat", "correct": false },
      { "text": "Principi d'universalitat", "correct": false }
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