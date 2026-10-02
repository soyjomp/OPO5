const TEST_ID = "18test.js"; 

const questions = [

 {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 1,
    "question": "Segons la Llei 40/2015 (LRJSP), quin és el principi que obliga a les administracions públiques a ponderar, en l'actuació pròpia, la totalitat dels interessos públics implicats?",
    "answers": [
      { "text": "El principi de coordinació estricta", "correct": false },
      { "text": "El principi de lleialtat institucional", "correct": true },
      { "text": "El principi de jerarquia orgànica supramunicipal", "correct": false },
      { "text": "El principi d'autonomia financera plena", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 2,
    "question": "Quin és el termini màxim de vigència inicial previst amb caràcter general per a un conveni de col·laboració segons la Llei 40/2015?",
    "answers": [
      { "text": "Dos anys", "correct": false },
      { "text": "Tres anys", "correct": false },
      { "text": "Quatre anys", "correct": true },
      { "text": "Cinc anys", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 3,
    "question": "Es pot prorrogar un conveni subscrit d'acord amb la Llei 40/2015 un cop finalitzat el seu període de vigència inicial?",
    "answers": [
      { "text": "No, cap conveni és prorrogable sota cap concepte.", "correct": false },
      { "text": "Sí, unànimement per un període de fins a 4 anys addicionals abans de la seva finalització.", "correct": true },
      { "text": "Sí, automàticament cada any de manera indefinida.", "correct": false },
      { "text": "Només si ho autoritza directament el Govern de l'Estat per decret.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 4,
    "question": "Quina d'aquestes afirmacions sobre els efectes dels convenis de col·laboració respecte a les competències és correcta?",
    "answers": [
      { "text": "Poden alterar l'assignació de competències que estableixen les lleis orgàniques.", "correct": false },
      { "text": "No poden suposar l'alteració de la titularitat de les competències ni dels elements essencials del seu exercici.", "correct": true },
      { "text": "Permeten transferir la titularitat de la competència a un subjecte privat.", "correct": false },
      { "text": "Modifiquen automàticament els Estatuts de l'ens local.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 5,
    "question": "On s'han de registrar obligatòriament els convenis subscrits per les administracions estatals, autonòmiques o locals segons la Llei 40/2015?",
    "answers": [
      { "text": "Al Registre Mercantil Central", "correct": false },
      { "text": "Al Registre Electrònic estatal d'Òrgans i Instruments de Cooperació", "correct": true },
      { "text": "Només al llibre d'actes del Ple de l'ajuntament", "correct": false },
      { "text": "Al Registre de la Propietat de la província", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 6,
    "question": "Què es transfereix exactament quan s'aprova una delegació de competències entre administracions?",
    "answers": [
      { "text": "La titularitat i l'exercici de la competència de manera definitiva.", "correct": false },
      { "text": "Només la titularitat de la competència, retenint l'òrgan delegat l'exercici.", "correct": false },
      { "text": "L'exercici de la competència, mentre que la titularitat continua pertanyent a l'òrgan delegant.", "correct": true },
      { "text": "Cap dels elements competencials, ja que només té efectes informatius.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 7,
    "question": "Quin requisit previ és indispensable perquè una delegació de competències pugui tenir eficàcia jurídica?",
    "answers": [
      { "text": "L'acceptació prèvia per part de l'òrgan o entitat destinatària.", "correct": true },
      { "text": "L'aprovació per referèndum popular obligatori en els municipis afectats.", "correct": false },
      { "text": "La convalidació prèvia per les Corts Generals.", "correct": false },
      { "text": "El pagament d'una taxa d'inscripció autonòmica.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 8,
    "question": "Quines facultats conserva l'òrgan delegant un cop realitzada la delegació de competències?",
    "answers": [
      { "text": "Cap, perd qualsevol poder de control o direcció sobre la matèria.", "correct": false },
      { "text": "Pot atorgar instruccions, emetre directrius i revocar la delegació en qualsevol moment.", "correct": true },
      { "text": "Només pot exigir responsabilitats penals als funcionaris de l'ens delegat.", "correct": false },
      { "text": "Únicament pot auditar els comptes anuals un cop cada deu anys.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 9,
    "question": "Quina és la naturalesa principal de les encomanes de gestió segons la Llei 40/2015?",
    "answers": [
      { "text": "Una tècnica per transferir la titularitat de potestats públiques a empreses privades.", "correct": false },
      { "text": "Una tècnica organitzativa per encarregar activitats de caràcter material, tècnic o de serveis per raons d'eficàcia.", "correct": true },
      { "text": "Un tipus especial de contracte menor d'obres públiques.", "correct": false },
      { "text": "Una forma de sanció disciplinària interadministrativa.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions.Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 10,
    "question": "Poden les encomanes de gestió incloure l'encàrrec de funcions que impliquin l'exercici d'autoritat o decisió jurídica directa?",
    "answers": [
      { "text": "Sí, sempre que s'aprovi per acord plenari qualificat.", "correct": false },
      { "text": "No, en cap cas no es poden encomanar funcions d'autoritat o decisió jurídica.", "correct": true },
      { "text": "Només si ho autoritza expressament el Defensor del Poble.", "correct": false },
      { "text": "Sí, si l'òrgan encomanant és un ministeri estatal.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 11,
    "question": "Segons la trampa clàssica d'examen, si un conveni o encomana de gestió preveu la transferència de la titularitat d'una competència municipal, quina és la seva validesa jurídica?",
    "answers": [
      { "text": "És plenament vàlida si ho aproven els alcaldes respectius.", "correct": false },
      { "text": "És nul·la de ple dret, ja que ni els convenis ni les encomanes poden alterar la titularitat competencial.", "correct": true },
      { "text": "Esdevé un acte anul·lable subsanable en el termini de tres mesos.", "correct": false },
      { "text": "Necessita la ratificació del Tribunal Constitucional.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 12,
    "question": "Com es configura jurídicament l'Àrea Metropolitana de Barcelona (AMB) d'acord amb la Llei 31/2010 i els seus Estatuts?",
    "answers": [
      { "text": "Com una societat mercantil de capital mixt públic-privat.", "correct": false },
      { "text": "Com una administració pública territorial de cooperació intermunicipal que agrupa 36 municipis.", "correct": true },
      { "text": "Com una fundació privada de caràcter cultural i mediambiental.", "correct": false },
      { "text": "Com un organisme autònom depenent directament de la Diputació de Barcelona.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 13,
    "question": "Quina Llei regula de manera específica la creació i el règim jurídic de l'Àrea Metropolitana de Barcelona (AMB)?",
    "answers": [
      { "text": "La Llei 7/1985, reguladora de les bases del règim local.", "correct": false },
      { "text": "La Llei 31/2010, del 3 d'agost, de l'Àrea Metropolitana de Barcelona.", "correct": true },
      { "text": "La Llei 40/2015, de règim jurídic del sector públic.", "correct": false },
      { "text": "El Decret Legislatiu 2/2004 de les hisendes locals.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 14,
    "question": "Amb quines administracions subscriu l'AMB convenis de cooperació de manera recurrent per gestionar infraestructures i serveis (com TMB o residus)?",
    "answers": [
      { "text": "Únicament amb l'Administració General de l'Estat.", "correct": false },
      { "text": "Amb la Generalitat de Catalunya, la Diputació de Barcelona i els ajuntaments metropolitans integrats.", "correct": true },
      { "text": "Només amb les comunitats autònomes limítrofes de fora de Catalunya.", "correct": false },
      { "text": "Amb organismes internacionals de la Unió Europea exclusivament.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 15,
    "question": "Quin òrgan col·legiat de govern de l'AMB és l'encarregat d'aprovar els pressupostos i acords de gran transcendència de l'ens metropolità?",
    "answers": [
      { "text": "El Consell Metropolità", "correct": true },
      { "text": "El Consell de Ministres", "correct": false },
      { "text": "La Comissió Executiva del Parlament", "correct": false },
      { "text": "La Junta de Compensació Urbanística", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competència. Les encomanes de gestió",
    "number": 16,
    "question": "Segons la normativa d'hisendes locals i la Llei de l'AMB, quin percentatge màxim pot suposar el recàrrec metropolità sobre l'Impost sobre Béns Immobles (IBI)?",
    "answers": [
      { "text": "Un percentatge únic i màxim de l'1% de la base imposable.", "correct": false },
      { "text": "Un percentatge únic i màxim del 0,2% de la base imposable.", "correct": true },
      { "text": "Un màxim del 5% de la quota líquida.", "correct": false },
      { "text": "No pot establir cap recàrrec sobre l'IBI.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 17,
    "question": "Quin principi relatiu a la cooperació interadministrativa recollit a la Llei 40/2015 implica que una administració ha de prestar a una altra la col·legiada assistència necessària per complir les seves finalitats?",
    "answers": [
      { "text": "El deure de col·laboració", "correct": true },
      { "text": "El principi d'autarquia absoluta", "correct": false },
      { "text": "La competència deslleial cooperativa", "correct": false },
      { "text": "El principi de subsidiarietat excloent", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 18,
    "question": "Quina és una característica diferencial clara entre una delegació de competències i una encomana de gestió?",
    "answers": [
      { "text": "En la delegació es transfereix l'exercici competencial, mentre que en l'encomana s'encarreguen tasques materials o tècniques sense alterar l'exercici substancial.", "correct": true },
      { "text": "L'encomana de gestió transmet la titularitat de la competència a l'ens receptor.", "correct": false },
      { "text": "La delegació només es pot fer entre entitats privades.", "correct": false },
      { "text": "No existeix cap diferència jurídica entre ambdues figures.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 19,
    "question": "Com s'han de publicar els convenis subscrits per l'AMB que tinguin repercussió o obligacions financeres i jurídiques rellevants?",
    "answers": [
      { "text": "Al Portal de Transparència de l'AMB i al Butlletí Oficial corresponent.", "correct": true },
      { "text": "Només al tauler d'anuncis intern de la seu central en paper.", "correct": false },
      { "text": "No cal cap publicació oficial si són de caire intern.", "correct": false },
      { "text": "Exclusivament al BOE de manera obligatòria.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 20,
    "question": "Quina conseqüència jurídica comporta l'incompliment dels requisits formals o de contingut mínim exigits per la Llei 40/2015 en la tramitació d'un conveni?",
    "answers": [
      { "text": "La seva conversió automàtica en contracte menor.", "correct": true },
      { "text": "La seva nul·litat d'acord amb la normativa aplicable de sector públic.", "correct": false },
      { "text": "Cap conseqüència si el conveni és verbal.", "correct": false },
      { "text": "Una multa dinerària per al secretari de l'ens.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 21,
    "question": "En el marc de les relacions interadministratives de l'AMB, quina funció compleix el Portal de Transparència respecte als convenis?",
    "answers": [
      { "text": "Publicar de manera permanent el catàleg de convenis signats, detallant objectes, aportacions i vigències.", "correct": true },
      { "text": "Vendre les publicacions oficials de les ordenances fiscals als ciutadans.", "correct": false },
      { "text": "Gestionar directament les multes de trànsit metropolitanes.", "correct": false },
      { "text": "Cobrar les taxes d'escombraries de manera presencial.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 22,
    "question": "Quin tipus d'entitats poden signar convenis de col·laboració amb les administracions públiques segons la Llei 40/2015?",
    "answers": [
      { "text": "Únicament altres administracions públiques estatals.", "correct": false },
      { "text": "Administracions públiques, organismes públics, entitats de dret públic i també subjectes privats.", "correct": true },
      { "text": "Exclusivament persones físiques a títol individual.", "correct": false },
      { "text": "Només corporacions estrangeres de països extracomunitaris.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 23,
    "question": "Quina és la relació entre la creació de l'AMB al 2011 (Llei 31/2010) i les entitats metropolitanes anteriors?",
    "answers": [
      { "text": "Va coexistir pacíficament amb elles sense modificar-les.", "correct": false },
      { "text": "Va substituir les tres entitats anteriors (Mancomunitat, Entitat del Medi Ambient i Entitat del Transport).", "correct": true },
      { "text": "Depenia jeràrquicament de la Mancomunitat de Municipis.", "correct": false },
      { "text": "Era una filial de la Diputació de Barcelona.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 24,
    "question": "En relació amb les encomanes de gestió entre diferents administracions, quin òrgan dicta finalment els actes jurídics o resolucions que pertoquen?",
    "answers": [
      { "text": "L'òrgan o entitat que rep l'encàrrec material.", "correct": false },
      { "text": "L'òrgan encomanant (el titular de la competència i de l'actuació jurídica).", "correct": true },
      { "text": "El Departament d'Economia i Hisenda de la Generalitat.", "correct": false },
      { "text": "El Jutjat Contenciós Administratiu de guàrdia.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 25,
    "question": "Quin principi bàsic regeix la relació tributària i financera de l'AMB respecte als 36 municipis integrants segons l'article 3 de la Llei 31/2010?",
    "answers": [
      { "text": "L'equilibri fiscal i la solidaritat entre els municipis que la integren.", "correct": true },
      { "text": "La independència fiscal absoluta de cada municipi sense solidaritat.", "correct": false },
      { "text": "La recaptació exclusiva mitjançant impostos directes estatals.", "correct": false },
      { "text": "La prohibició d'establir preus públics o tarifes.", "correct": false }
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