const TEST_ID = "1test.js"; 

const questions = [

  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 1,
    "question": "Segons la Constitució Espanyola de 1978, quina data de publicació al BOE va determinar la seva entrada en vigor efectiva?",
    "answers": [
      { "text": "El 31 d'octubre de 1978", "correct": false },
      { "text": "El 6 de desembre de 1978", "correct": false },
      { "text": "El 27 de desembre de 1978", "correct": false },
      { "text": "El 29 de desembre de 1978", "correct": true }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 2,
    "question": "Quin article de la Constitució Espanyola estableix que Espanya es constitueix en un Estat social i democràtic de Dret, i quins són els seus valors superiors?",
    "answers": [
      { "text": "L'article 1.1; i els valors són la llibertat, la justícia, la igualtat i el pluralisme polític", "correct": true },
      { "text": "L'article 2; i els valors són la unitat, l'autonomia, la solidaritat i la cooperació", "correct": false },
      { "text": "L'article 9.3; i els valors són la legalitat, la jerarquia normativa i la seguretat jurídica", "correct": false },
      { "text": "L'article 10.1; i els valors són la dignitat de la persona, els drets inviolables i el lliure desenvolupament", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 3,
    "question": "D'acord amb l'article 9.3 de la CE, quin principi jurídic es refereix a la prohibició de l'actuació arbitrària dels poders públics?",
    "answers": [
      { "text": "El principi de jerarquia normativa", "correct": false },
      { "text": "El principi de seguretat jurídica", "correct": false },
      { "text": "El principi d'interdicció de l'arbitrarietat", "correct": true },
      { "text": "El principi de responsabilitat patrimonial", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 4,
    "question": "Quin nivell de protecció i garantia constitucional s'aplica específicament als drets recollits a la Secció 1a del Capítol II del Títol I de la CE (articles 15 a 29)?",
    "answers": [
      { "text": "Regulació per llei ordinària i protecció davant els tribunals ordinaris sense caràcter preferent", "correct": false },
      { "text": "Reserva de llei orgànica, protecció judicial mitjançant procediment preferent i sumari, i recurs d'empara davant el Tribunal Constitucional", "correct": true },
      { "text": "Caràcter de principis rectors de la política social i econòmica sense al·legació directa", "correct": false },
      { "text": "Protecció mitjançant el Defensor del Poble exclusivament en règim d'estat d'alarma", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 5,
    "question": "Segons el règim de garanties de l'article 53 de la CE, quin article del Títol I gaudeix de protecció mitjançant el procediment basat en els principis de preferència i sumari, i recurs d'empara, tot i no pertànyer a la Secció 1a del Capítol II?",
    "answers": [
      { "text": "L'article 10, relatiu a la dignitat de la persona", "correct": false },
      { "text": "L'article 14, relatiu al principi d'igualtat davant la llei", "correct": true },
      { "text": "L'article 33, relatiu al dret a la propietat privada", "correct": false },
      { "text": "L'article 39, relatiu a la protecció de la família i la infància", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 6,
    "question": "Quin tractament reben els drets i principis reconeguts en el Capítol III del Títol I de la Constitució (Principis Rectors de la Política Social i Econòmica)?",
    "answers": [
      { "text": "Poden ser invocats directament davant qualsevol jutge o tribunal ordinari de forma immediata", "correct": false },
      { "text": "Exigeixen necessàriament regulació per llei orgànica i disposen de recurs d'empara al Tribunal Constitucional", "correct": false },
      { "text": "Informen la legislació positiva, la pràctica judicial i l'actuació dels poders públics, i només poden ser al·legats d'acord amb les lleis que els desenvolupin", "correct": true },
      { "text": "Constitueixen drets fonamentals de màxima protecció immediata", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 7,
    "question": "Quina és la regla general establerta a l'article 11.2 de la CE pel que fa a la nacionalitat espanyola d'origen?",
    "answers": [
      { "text": "Cap espanyol d'origen pot ésser privat de la seva nacionalitat", "correct": true },
      { "text": "Qualsevol espanyol pot perdre la nacionalitat si resideix a l'estranger durant més de deu anys sense comunicar-ho", "correct": false },
      { "text": "La nacionalitat d'origen pot ser revocada per sentència ferma en cas de comissió de qualsevol delicte dolós", "correct": false },
      { "text": "L'adquisició de la nacionalitat d'un altre país comporta automàticament la pèrdua de la condició d'espanyol d'origen", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 8,
    "question": "Segons l'article 55.2 de la CE, quins drets o articles poden ser suspesos de forma individualitzada, amb la intervenció judicial i el control adequat, en relació amb investigacions de bandes armades o elements terroristes?",
    "answers": [
      { "text": "Els articles 15, 16 i 18", "correct": false },
      { "text": "Els articles 17.2, 18.2 i 18.3", "correct": true },
      { "text": "Els articles 20.1.a, 21 i 28.2", "correct": false },
      { "text": "Tots els drets compresos entre el 14 i el 29", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 9,
    "question": "Quin procediment de reforma constitucional exigeix, d'acord amb l'article 168 de la CE, la votació favorable de les dos terceres parts de cadascuna de les Cambres, la dissolució immediata d'aquestes i un referèndum obligatori?",
    "answers": [
      { "text": "La reforma ordinària per a qualsevol article de l'articulat general", "correct": false },
      { "text": "La revisió total de la Constitució o la modificació del Títol Preliminar, de la Secció 1a del Capítol II del Títol I, o del Títol II", "correct": true },
      { "text": "La modificació de qualsevol aspecte relacionat amb les Comunitats Autònomes del Títol VIII", "correct": false },
      { "text": "La reforma dels articles compresos entre el 56 i el 65 relatius a la Corona", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 10,
    "question": "Segons l'article 169 de la Constitució Espanyola, quina limitació temporal s'imposa a la iniciativa de reforma constitucional?",
    "answers": [
      { "text": "No es pot iniciar cap reforma durant els períodes de vacances parlamentàries", "correct": false },
      { "text": "No es pot iniciar en temps de guerra o d'estats d'alarma, excepció o setge", "correct": true },
      { "text": "No es pot iniciar durant el primer any de legislatura de les Corts Generals", "correct": false },
      { "text": "No es pot iniciar si hi ha un recurs d'inconstitucionalitat pendent davant el Tribunal Constitucional", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 11,
    "question": "En el marc de l'organització territorial de l'Estat segons l'article 137 de la CE, com es desglossen les entitats en què s'organitza territorialment l'Estat?",
    "answers": [
      { "text": "En municipis, comarques i comunitats autònomes", "correct": false },
      { "text": "En municipis, províncies i en les comunitats autònomes que es constitueixin", "correct": true },
      { "text": "Només en comunitats autònomes i àrees metropolitanes reconegudes per llei estatal", "correct": false },
      { "text": "En províncies, illes i entitats locals supramunicipals delegades de l'Estat", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 12,
    "question": "Quin principi d'actuació de l'Administració Pública recollit a l'article 103.1 de la CE serveix de fonament directe a l'actuació de l'Àrea Metropolitana de Barcelona (AMB) en la coordinació dels 36 municipis metropolitans?",
    "answers": [
      { "text": "L'eficàcia, la jerarquia, la descentralització, la desconcentració i la coordinació", "correct": true },
      { "text": "La centralització estricta i la subordinació jeràrquica absoluta a l'Administració General de l'Estat", "correct": false },
      { "text": "L'autonomia financera il·limitada i la independència total respecte a la legislació sectorial", "correct": false },
      { "text": "La competència exclusiva de mercat i el lucre corporatiu en la gestió dels serveis", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 13,
    "question": "Segons l'article 103.3 de la Constitució en relació amb l'accés a l'ocupació pública (com en els processos selectius C1 de l'AMB), quins principis bàsics ha de garantir la llei?",
    "answers": [
      { "text": "L'antiguitat, la designació directa i la discrecionalitat de l'òrgan competent", "correct": false },
      { "text": "El mèrit i la capacitat, en condicions d'igualtat", "correct": true },
      { "text": "La militància política i la residència obligatòria al municipi de destí", "correct": false },
      { "text": "La superació d'un sorteig públic i la titulació acadèmica mínima sense proves selectives", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 14,
    "question": "Quin òrgan és descrit a l'article 54 de la CE com l'alt comissionat de les Corts Generals per a la defensa dels drets del Títol I?",
    "answers": [
      { "text": "El Tribunal de Comptes", "correct": false },
      { "text": "El Defensor del Poble", "correct": true },
      { "text": "El Consell d'Estat", "correct": false },
      { "text": "La Fiscalia General de l'Estat", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 15,
    "question": "Quina és la majoria necessària al Congrés dels Diputats per aprovar una reforma constitucional ordinària segons l'article 167 de la CE, en el supòsit que no hi hagi acord inicial amb el Senat i s'utilitzi la comissió paritària?",
    "answers": [
      { "text": "Majoria absoluta de cada Cambra", "correct": false },
      { "text": "Votació favorable de les tres quartes partes del Congrés", "correct": false },
      { "text": "Votació favorable de les dos terceres parts del Congrés, sempre que el Senat hagi aprovat el text per majoria absoluta", "correct": true },
      { "text": "Majoria simple en ambdues cambres sense necessitat de comissió", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 16,
    "question": "Segons l'article 3 de la Constitució Espanyola, quina consideració legal rep la llengua castellana?",
    "answers": [
      { "text": "És l'única llengua existent a tot el territori de l'Estat espanyol", "correct": false },
      { "text": "És la llengua oficial de l'Estat, i tots els espanyols tenen el deure de conèixer-la i el dret de usar-la", "correct": true },
      { "text": "És una llengua d'ús optatiu en les relacions amb l'administració central de l'Estat", "correct": false },
      { "text": " té caràcter cooficial a totes les Comunitats Autònomes sense excepció", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 17,
    "question": "Quin article de la Constitució regula el dret a l'autonomia de les nacionalitats i regions que integren la Nació espanyola?",
    "answers": [
      { "text": "L'article 1", "correct": false },
      { "text": "L'article 2", "correct": true },
      { "text": "L'article 9", "correct": false },
      { "text": "L'article 137", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 18,
    "question": "Quina és la forma política de l'Estat espanyol segons estableix l'article 1.3 de la Constitució de 1978?",
    "answers": [
      { "text": "Una República Federal presidencialista", "correct": false },
      { "text": "Una Monarquia parlamentària", "correct": true },
      { "text": "Un Estat unitari centralitzat", "correct": false },
      { "text": "Una Democràcia assembleària representativa", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 19,
    "question": "A partir de quina edat s'estableix la majoria d'edat per als espanyols segons l'article 12 de la Constitució Espanyola?",
    "answers": [
      { "text": "Als 16 anys", "correct": false },
      { "text": "Als 18 anys", "correct": true },
      { "text": "Als 21 anys", "correct": false },
      { "text": "Als 25 anys", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 20,
    "question": "Quin valor jurídic s'atribueix al Preàmbul de la Constitució Espanyola de 1978?",
    "answers": [
      { "text": "Té plena força jurídica vinculant idèntica a la dels articles del Títol Preliminar", "correct": false },
      { "text": "És un text merament declaratiu i polític que manca de força jurídica obligatòria directa", "correct": true },
      { "text": "Funciona com una llei orgànica interpretativa de caràcter transversal", "correct": false },
      { "text": "Té rang superior a qualsevol article de la part dogmàtica de la Constitució", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 21,
    "question": "Segons l'article 166 de la Constitució, a qui correspon la iniciativa de reforma constitucional?",
    "answers": [
      { "text": "Exclusivament al Govern de la Nació i al Congrés dels Diputats", "correct": false },
      { "text": "Als mateixos termes previstos per a la iniciativa d'uns projectes de llei a l'article 87, incloent el Govern, el Congrés, el Senat i les Assembles de les CCAA", "correct": true },
      { "text": "Només al cos electoral mitjançant iniciativa legislativa popular avalada per 500.000 signatures", "correct": false },
      { "text": "Al Tribunal Constitucional i al Consell General del Poder Judicial conjuntament", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 22,
    "question": "Quina característica defineix la naturalesa de l'Àrea Metropolitana de Barcelona (AMB) pel que fa a la seva configuració jurídica territorial?",
    "answers": [
      { "text": "Es tracta d'una empresa mercantil de capital íntegrament públic depenent de la Generalitat", "correct": false },
      { "text": "Es configura com una entitat local d'àmbit supramunicipal amb personalitat jurídica pròpia, creada sota la legislació de règim local", "correct": true },
      { "text": "És un organisme autònom de l'Estat sense competències pròpies en matèria urbanística", "correct": false },
      { "text": "Constitueix una comunitat autònoma de caràcter especial amb potestat legislativa pròpia", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 23,
    "question": "Quin article de la Constitució consagra el principi de legalitat, la jerarquia normativa, la publicitat de les normes i la irretroactivitat de les disposicions sancionadores no favorables o restrictives de drets individuals?",
    "answers": [
      { "text": "L'article 1.1", "correct": false },
      { "text": "L'article 9.3", "correct": true },
      { "text": "L'article 24.2", "correct": false },
      { "text": "L'article 53.1", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 24,
    "question": "Segons l'estructura formal de la Constitució Espanyola de 1978, quin nombre total d'articles conté el text constitucional?",
    "answers": [
      { "text": "149 articles", "correct": false },
      { "text": "169 articles", "correct": true },
      { "text": "189 articles", "correct": false },
      { "text": "210 articles", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 25,
    "question": "Quina previsió estableix l'article 55.1 de la Constitució pel que fa a la suspensió col·lectiva de determinats drets fonamentals?",
    "answers": [
      { "text": "Es pot dur a terme de manera indefinida per acord del Consell de Ministres en qualsevol circumstància", "correct": false },
      { "text": "Es pot produir quan s'acordin els estats d'excepció o de setge, afectant expressament drets com els recollits als articles 17, 18.2 i 18.3, 19, 20, entre altres", "correct": true },
      { "text": "Requereix l'aprovació prèvia del Defensor del Poble en un estat d'alarma ordinari", "correct": false },
      { "text": "Permet la suspensió total i indiscriminada de tots els articles del Títol I sense excepció", "correct": false }
    ]
  },

];


// Lògica del Test amb visualització de Pistes i Solucions
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function renderTest() {
  const form = document.getElementById("test-form");
  form.innerHTML = "";
  let currentQuestions;
  
  // ⚡ Línia temporal per evitar que arrossegui dades velles del localStorage:
  // localStorage.removeItem(`questions-${TEST_ID}`);
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
    // -------------------------------------

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

  document.getElementById("response-counter").textContent = `📄 Respostes: ${selectedCount}/${total}`;
  document.getElementById("correct-counter").textContent = `✅ Encerts: ${correctCount}`;
  document.getElementById("incorrect-counter").textContent = `❌ Errors: ${incorrectCount}`;
  
  document.getElementById("progress").style.width = `${(selectedCount / total) * 100}%`;

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

const submitBtn = document.getElementById("submit");
if (submitBtn) {
  submitBtn.addEventListener("click", evaluateTest);
}

window.addEventListener("DOMContentLoaded", renderTest);