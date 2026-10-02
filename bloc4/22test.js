const TEST_ID = "22test.js"; 

const questions = [

 {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 1,
    "question": "Segons la Llei 31/2010 de l'Àrea Metropolitana de Barcelona, quin òrgan té la consideració d'òrgan col·legiat superior de govern i de representació de l'AMB?",
    "answers": [
      { "text": "La Junta de Govern", "correct": false },
      { "text": "El Consell Metropolità", "correct": true },
      { "text": "La Comissió Especial de Comptes", "correct": false },
      { "text": "El Consell de Mobilitat", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 2,
    "question": "Quina és la composició bàsica del Consell Metropolità de l'AMB?",
    "answers": [
      { "text": "Únicament els 36 alcaldes i alcaldesses dels municipis integrats", "correct": false },
      { "text": "Els 36 alcaldes i alcaldesses i els consellers metropolitans designats pels ajuntaments en proporció als resultats de les eleccions municipals", "correct": true },
      { "text": "Un nombre fix de 50 membres elegits directament per sufragi universal ponderat", "correct": false },
      { "text": "Els membres de la Junta de Govern més un representant de cadascun dels col·legis professionals de l'àmbit metropolità", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 3,
    "question": "Dins de les competències del Consell Metropolità, quina de les següents atribucions li correspon de forma exclusiva?",
    "answers": [
      { "text": "L'aprovació de les normes reguladores, ordenances fiscals i pressupostos anuals", "correct": true },
      { "text": "L'ordenació material i directa de tots els pagaments de la tresoreria", "correct": false },
      { "text": "La direcció tècnica i administrativa de la gerència de l'ens", "correct": false },
      { "text": "El nomenament directe del personal funcionari interí de l'administració metropolitana", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 4,
    "question": "Com s'elegeix el President o Presidenta de l'Àrea Metropolitana de Barcelona?",
    "answers": [
      { "text": "Per sufragi universal directe de tots els ciutadans empadronats als 36 municipis de l'AMB", "correct": false },
      { "text": "D'entre els membres que integren el Consell Metropolità", "correct": true },
      { "text": "Per designació directa del Govern de la Generalitat de Catalunya", "correct": false },
      { "text": "Per rotació anual obligatòria entre els alcaldes dels municipis de més de 100.000 habitants", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 5,
    "question": "Quina naturalesa jurídica té la Gerència de l'AMB segons l'estructura organitzativa de l'ens?",
    "answers": [
      { "text": "És un òrgan polític integrat exclusivamente per alcaldes del Consell Metropolità", "correct": false },
      { "text": "És l'òrgan professional de direcció tècnica i administrativa, ocupat per personal altament qualificat", "correct": true },
      { "text": "És un òrgan consultiu de participació ciutadana sense cap mena de competència executiva", "correct": false },
      { "text": "És una societat mercantil de capital íntegrament públic depenent de la Junta de Govern", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 6,
    "question": "Quina de les següents funcions correspon a la Junta de Govern de l'AMB?",
    "answers": [
      { "text": "Aprovar inicialment el pressupost general de l'entitat metropolitana", "correct": false },
      { "text": "Assistir permanentment al President i al Consell Metropolità en les funcions de gestió executiva i exercir competències delegades en matèria de contractació i concessions", "correct": true },
      { "text": "Resoldre de manera definitiva els recursos extraordinaris de revisió interposats contra els reglaments", "correct": false },
      { "text": "establir el recàrrec metropolità sobre l'Impost sobre Béns Immobles (IBI) de forma unilateral", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 7,
    "question": "Quin paper desenvolupen les vicepresidències de l'AMB dins de l'estructura executiva?",
    "answers": [
      { "text": "Són nomenades pel President d'entre els consellers metropolitans, substitueixen el President per ordre de nomenament i exerceixen delegacions executives rellevants (mobilitat, medi ambient, urbanisme)", "correct": true },
      { "text": "Són òrgans independents de control financer encarregats de fiscalitzar la comptabilitat general", "correct": false },
      { "text": "S'ocupen exclusivament de la secretaria de les actes del Ple sense cap àmbit de gestió sectorial", "correct": false },
      { "text": "Emergeixen només en cas de dissolució temporal del Consell Metropolità", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 8,
    "question": "Quin òrgan municipal o metropolità té atribuïda la competència per convocar i presidir tant el Consell Metropolità com la Junta de Govern?",
    "answers": [
      { "text": "El Gerent de l'AMB", "correct": false },
      { "text": "El Síndic de Greuges", "correct": false },
      { "text": "El President o Presidenta de l'AMB", "correct": true },
      { "text": "El conseller de la comissió de comptes", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 9,
    "question": "Pel que fa a la composició de la Junta de Govern de l'AMB, com es determina la presència dels seus membres?",
    "answers": [
      { "text": "Està formada pel President i un nombre de vicepresidents i consellers determinats pels estatuts amb criteris de proporcionalitat política i territorial", "correct": true },
      { "text": "Està integrada obligatòriament per tots els alcaldes dels 36 municipis sense excepció", "correct": false },
      { "text": "S'escull mitjançant sorteig públic entre el personal funcionari de carrera del grup A1", "correct": false },
      { "text": "Es designa de manera externa per un comitè d'experts independents nomenats per la Generalitat", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 10,
    "question": "Quina és una de les funcions principals del Gerent en el marc de l'administració metropolitana?",
    "answers": [
      { "text": "Dirigir els serveis administratius, coordinar la gestió ordinària i executar els acords dels òrgans de govern col·legiats sota la supervisió de la presidència", "correct": true },
      { "text": "Ostentar la màxima representació institucional de l'AMB davant d'altres administracions estatals i internacionals", "correct": false },
      { "text": "Modificar per decret les ordenances fiscals i els preus públics de transport", "correct": false },
      { "text": "Aprovar definitivament la plantilla pressupostària sense sotmetre-la al plenari", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 11,
    "question": "A banda del Consell Metropolità, la Presidència, la Junta de Govern i la Gerència, quin altre tipus d'òrgans complementaris preveu l'organització de l'AMB?",
    "answers": [
      { "text": "Comissions informatives, Comissió Especial de Comptes, Consell de Mobilitat i altres òrgans consultius o de participació", "correct": true },
      { "text": "Jutjats de pau metropolitans i tribunals de lo social d'àmbit comarcal", "correct": false },
      { "text": "Cambres legislatives autonòmiques delegades i consells de guerra sectorials", "correct": false },
      { "text": "Delegacions permanents del Senat a Barcelona", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 12,
    "question": "Quina trampa o error freqüent s'ha d'evitar en relació amb la composició del Consell Metropolità en un examen d'oposició?",
    "answers": [
      { "text": "Creure que només està format pels 36 alcaldes, quan en realitat també inclou els consellers metropolitans designats proporcionalment", "correct": true },
      { "text": "Pensar que els alcaldes hi tenen veu però no vot en les sessions plenàries", "correct": false },
      { "text": "Considerar que els municipis de menys de 5.000 habitants no hi tenen cap mena de representació", "correct": false },
      { "text": "Suposar que el Consell Metropolità només es reuneix un cop cada quatre anys", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 13,
    "question": "Quin decret o llei regula principalment la creació i el marc institucional de l'Àrea Metropolitana de Barcelona (AMB)?",
    "answers": [
      { "text": "La Llei 31/2010, de 3 d'agost, de l'Àrea Metropolitana de Barcelona", "correct": true },
      { "text": "La Llei 7/1985, de 2 d'abril, reguladora de les bases del règim local", "correct": false },
      { "text": "El Reial Decret Legislatiu 2/2004, de 5 de març", "correct": false },
      { "text": "La Llei Municipal i de règim local de Catalunya 16/1990", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 14,
    "question": "En relació amb els estàndards de transparència de l'AMB reflectits al seu portal corporatiu (amb.cat), què es publica detalladament sobre els membres de l'organització?",
    "answers": [
      { "text": "Les declaracions de béns, activitats i règim de dedicació dels membres del Consell Metropolità, Junta de Govern i equip de gerència", "correct": true },
      { "text": "L'expedient acadèmic complet des de l'educació primària de tots els treballadors laborals", "correct": false },
      { "text": "Els registres de trucades telefòniques particulars de la presidència", "correct": false },
      { "text": "Les actes secretes de deliberació dels partits polítics amb representació", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 15,
    "question": "Com s'estructuren generalment les vicepresidències executives de l'AMB segons l'organització reflectida al seu portal web oficial?",
    "answers": [
      { "text": "Per grans àrees de servei metropolità: Mobilitat, Transport i Sostenibilitat; Desenvolupament Social i Econòmic; i Planificació Estratègica i Territorial", "correct": true },
      { "text": "Per districtes postals de la ciutat de Barcelona exclusivament", "correct": false },
      { "text": "Per ordre alfabètic dels 36 municipis integrants de la conurbació", "correct": false },
      { "text": "Segons el pressupost assignat a cada partit polític al Parlament", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 16,
    "question": "Quin tipus d'òrgan és considerat la Presidència de l'AMB dins de la classificació institucional?",
    "answers": [
      { "text": "Un òrgan unipersonal superior de direcció, representació i administració", "correct": true },
      { "text": "Un òrgan col·legiat de control fiscal de caràcter estrictament tècnic", "correct": false },
      { "text": "Una unitat de suport inferior depenent directament de la gerència", "correct": false },
      { "text": "Un comitè de mediació paritària entre ajuntaments i ciutadania", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 17,
    "question": "Quina afirmació és correcta respecte a la naturalesa no política del gerent de l'AMB?",
    "answers": [
      { "text": "No és un càrrec polític electe per sufragi municipal, sinó un professional altament qualificat nomenat pels òrgans de govern", "correct": true },
      { "text": "És necessàriament un dels 36 alcaldes de la conurbació escollit per unanimitat", "correct": false },
      { "text": "Exerceix el vot de qualitat al Consell Metropolità en cas d'empat en les votacions plenàries", "correct": false },
      { "text": "Ostenta la condició de conseller metropolità nat amb caràcter vitalici", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 18,
    "question": "Quin dels següents òrgans de l'AMB té encomanada específicament l'assistència permanent al President i al Consell Metropolità en funcions executives?",
    "answers": [
      { "text": "La Junta de Govern", "correct": true },
      { "text": "La Comissió Especial de Comptes", "correct": false },
      { "text": "El Consell de Cooperació", "correct": false },
      { "text": "La Sindicatura de Greuges metropolitana", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 19,
    "question": "Quin és el nombre de municipis que integren inicialment i formen part de l'Àrea Metropolitana de Barcelona (AMB)?",
    "answers": [
      { "text": "36 municipis", "correct": true },
      { "text": "25 municipis", "correct": false },
      { "text": "42 municipis", "correct": false },
      { "text": "50 municipis", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 20,
    "question": "Quina de les següents potestats normatives pot exercir l'AMB en l'àmbit de les seves competències segons els seus estatuts i la Llei 31/2010?",
    "answers": [
      { "text": "L'aprovació de reglaments, ordenances reguladores i fiscals", "correct": true },
      { "text": "La promulgació de lleis orgàniques d'àmbit territorial català", "correct": false },
      { "text": "La creació de codis penals i processals per a la seguretat viària", "correct": false },
      { "text": "L'emissió de moneda prèvia autorització del Banc d'Espanya", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 21,
    "question": "Quin tipus d'acord s'exigeix generalment en el si del Consell Metropolità per a l'aprovació del pressupost general de l'entitat?,Gairebé sempre s'aprova per majoria simple en un acte únic que detalla els pressupostos que l'integren. L'opció correcta és:",
    "answers": [
      { "text": "Un acord únic que pot ser pres per majoria simple, detallant els pressupostos que integren el pressupost general", "correct": true },
      { "text": "Una majoria absoluta qualificada de dos terços dels membres de dret en qualsevol circumstància", "correct": false },
      { "text": "La unanimitat absoluta de tots els 36 alcaldes integrants de la conurbació", "correct": false },
      { "text": "L'aprovació prèvia obligatòria i vinculant per referèndum popular metropolità", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 22,
    "question": "En relació amb les actes i resolucions de la Presidència de l'AMB, quina forma jurídica adopten habitualment per exercir la direcció executiva?",
    "answers": [
      { "text": "Decrets de la presidència", "correct": true },
      { "text": "Reials decrets llei delegats", "correct": false },
      { "text": "Ordres ministerials estatals", "correct": false },
      { "text": "Sentències fermes contencioses", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 23,
    "question": "Quin òrgan col·legiat de l'AMB té assignades funcions de control i fiscalització de la gestió econòmico-financera i pressupostària dins de la comissió de comptes?",
    "answers": [
      { "text": "La Comissió Especial de Comptes", "correct": true },
      { "text": "El Consell Consultiu de Transport", "correct": false },
      { "text": "La Junta Consultiva de Contractació Administrativa de l'Estat", "correct": false },
      { "text": "El Comitè d'Empresa del personal laboral", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "question": "Quina és la relació competencial entre el Consell Metropolità i la Junta de Govern pel que fa a l'execució?",
    "answers": [
      { "text": "La Junta de Govern exerceix les competències delegades pel Consell Metropolità i les que li atribueixen directament les lleis", "correct": true },
      { "text": "El Consell Metropolità només pot actuar si rep una delegació prèvia de la Junta de Govern", "correct": false },
      { "text": "Ambdós òrgans tenen exactament les mateixes atribucions de caràcter indefinit sense subordinació", "correct": false },
      { "text": "La Junta de Govern pot revocar unilateralment les normes aprovades pel Consell Metropolità", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 25,
    "question": "Quin principi inspirador de la representació i composició dels consellers al Consell Metropolità garanteix el pluralisme polític derivat de les eleccions locals?",
    "answers": [
      { "text": "El principi de proporcionalitat en funció dels resultats obtinguts a les eleccions municipals de cada consistori", "correct": true },
      { "text": "El principi de representació paritària exacta independentment del nombre d'habitants del municipi", "correct": false },
      { "text": "El principi de designació discrecional per part de la Presidència sortint", "correct": false },
      { "text": "El principi de torn rotatori automàtic cada tres mesos entre regidors de l'oposició", "correct": false }
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