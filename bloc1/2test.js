const TEST_ID = "2test.js"; 

const questions = [

  {
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 1,
    "question": "Segons l'article 56.3 de la Constitució Espanyola de 1978, quina és la naturalesa jurídica de la persona del Rei?",
    "answers": [
        { "text": "És inviolable i està subjecta a responsabilitat política davant del Congrés dels Diputats", "correct": false },
        { "text": "És inviolable i no està subjecta a responsabilitat, i els seus actes necessiten sempre el reforendament per ser vàlids", "correct": true },
        { "text": "És inviolable però els seus actes personals no necessiten cap tipus de reforendament", "correct": false },
        { "text": "Està subjecta a responsabilitat civil i penal en l'exercici de les seves funcions constitucionals", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 2,
    "question": "Quin és el criteri de successió a la Corona establert a l'article 57 de la Constitució Espanyola?",
    "answers": [
        { "text": "La primogenitura i la representació, amb preferència absoluta de l'home sobre la dona en el mateix grau", "correct": true },
        { "text": "La designació directa del Rei entre els membres de la Família Reial amb l'aprovació de les Corts Generals", "correct": false },
        { "text": "La igualtat absoluta entre homes i dones segons l'ordre rigurós d'arribada a la majoria d'edat", "correct": false },
        { "text": "L'elecció per sufragi universal de la línia successòria a proposta del Govern", "correct": true }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 3,
    "question": "D'acord amb l'article 68 de la Constitució, quin nombre de diputats compon actualment el Congrés dels Diputats?",
    "answers": [
        { "text": "Un nombre fix de 300 diputats", "correct": false },
        { "text": "Un nombre variable establert per llei orgànica, fixat actualment en 350 diputats", "correct": true },
        { "text": "Exactament 400 diputats distribuïts per circumscripcions provincials", "correct": false },
        { "text": "Un mínim de 200 i un màxim de 350 diputats segons la població de cada província", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 4,
    "question": "Quina és la circumscripció electoral general per a l'elecció dels membres del Congrés dels Diputats segons la CE?",
    "answers": [
        { "text": "El municipi", "correct": false },
        { "text": "La Comunitat Autònoma", "correct": false },
        { "text": "La província", "correct": true },
        { "text": "L'illa en el cas de les províncies insulars i la comarca a la península", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 5,
    "question": "Segons l'article 69 de la Constituci, com s'estructura bàsicament el Senat com a cambra de representació territorial?",
    "answers": [
        { "text": "Amb dos senadors per cada província peninsular", "correct": false },
        { "text": "Amb quatre senadors per cada província peninsular, a més dels designats per les Comunitats Autònomes", "correct": true },
        { "text": "Amb un nombre igual de senadors per a totes les comunitats autònomes sense tenir en compte la població", "correct": false },
        { "text": "Amb designació exclusiva per part dels ajuntaments de cada província", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 6,
    "question": "Quin requisit de signatures és necessari per exercir la iniciativa legislativa popular prevista a l'article 87.3 de la CE?",    "answers": [
        { "text": "Un mínim de 50.000 signatures comprovades", "correct": false },
        { "text": "Un mínim de 500.000 signatures acreditades", "correct": true },
        { "text": "Un milió de signatures recollides en almenys deu províncies", "correct": false },
        { "text": "El 5 del cens electoral general de l'Estat", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 7,
    "question": "Segons l'article 97 de la Constitució, quines funcions correspon al Govern de la Nació?",
    "answers": [
        { "text": "Exerceix exclusivament la potestat legislativa i la direcció de la política fiscal de les comunitats autònomes", "correct": false },
        { "text": "Dirigeix la política interior i exterior, l'Administració civil i militar i la defensa de l'Estat, exercint la funció executiva i la potestat reglamentària", "correct": true },
        { "text": "Coordina les funcions de tots els tribunals de justícia i designa directament els magistrats del Tribunal Constitucional", "correct": false },
        { "text": "Assumeix la direcció suprema de les Corts Generals en moments d'emergència nacional", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 8,
    "question": "Quins principis bàsics consagra l'article 103.1 de la CE respecte a l'actuació de l'Administració Pública?",
    "answers": [
        { "text": "Eficàcia, jerarquia, descentralització, desconcentració i coordinació", "correct": true },
        { "text": "Submissió estricta al dret privat, centralització i igualtat d'oportunitats", "correct": false },
        { "text": "Autonomia financera, independència orgànica i neutralitat política absoluta", "correct": false },
        { "text": "Celeritat, transparència, participació directa i obligatorietat de resultats", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 9,
    "question": "Segons l'article 117 de la Constitució, quin principi bàsic regeix l'organització i funcionament dels tribunals de justícia?",    "answers": [
        { "text": "El principi de descentralització jurisdiccional per comunitats autònomes", "correct": false },
        { "text": "El principi d'unitat jurisdiccional com a base de l'organització i funcionament dels tribunals", "correct": true },
        { "text": "El principi de jerarquia militar aplicable a tots els magistrats i jutges", "correct": false },
        { "text": "El principi d'electivitat popular dels jutges de primera instància", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 10,
    "question": "Quin és l'òrgan de govern del Poder Judicial segons l'article 122 de la Constitució Espanyola?",
    "answers": [
        { "text": "El Ministeri de Justícia", "correct": false },
        { "text": "El Tribunal Suprem", "correct": false },
        { "text": "El Consell General del Poder Judicial (CGPJ)", "correct": true },
        { "text": "La Fiscalia General de l'Estat", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 11,
    "question": "Quines entitats territorials componen l'organització territorial de l'Estat segons l'article 137 de la CE?",
    "answers": [
        { "text": "Només les Comunitats Autònomes i les províncies", "correct": false },
        { "text": "Municipis, províncies i les Comunitats Autònomes que es constitueixin", "correct": true },
        { "text": "Només l'Administració General de l'Estat i els ens locals supramunicipals", "correct": false },
        { "text": "Comarques, vegueries i àrees metropolitanes exclusivament", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 12,
    "question": "Com es defineix bàsicament el Municipi d'acord amb l'article 140 de la CE i la legislació de règim local?",
    "answers": [
        { "text": "Una entitat supramunicipal depenent de la Diputació Provincial", "correct": false },
        { "text": "L'entitat bàsica de l'organització territorial de l'Estat, amb personalitat jurídica pròpia", "correct": true },
        { "text": "Un òrgan de gestió desconcentrat de la Comunitat Autònoma", "correct": false },
        { "text": "Una associació voluntaria de ciutadans amb fins exclusivament culturals", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 13,
    "question": "Com s'integra i es configura institucionalment l'Àrea Metropolitana de Barcelona (AMB) en relació amb el marc constitucional?",
    "answers": [
        { "text": "Com un ministeri especial dependent directament de l'Administració General de l'Estat", "correct": false },
        { "text": "Com un ens local supramunicipal de caràcter territorial basat en la previsió de l'agrupació de municipis i l'autonomia local garantida constitucionalment", "correct": true },
        { "text": "Com una província de règim especial exempta de la tutela de la Generalitat", "correct": false },
        { "text": "Com una societat mercantil de capital íntegrament públic sense potestat administrativa", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 14,
    "question": "Quina és la composició quantitativa del Tribunal Constitucional establerta a l'article 159 de la CE?",
    "answers": [
        { "text": "10 membres nomenats per un període de 6 anys", "correct": false },
        { "text": "12 membres nomenats pel Rei per un període de 9 anys, renovables per terços", "correct": true },
        { "text": "15 magistrats triats directament per les assemblees de les comunitats autònomes", "correct": false },
        { "text": "8 membres elegits pel Consell General del Poder Judicial", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 15,
    "question": "D'entre les opcions següents, quins òrgans o subjectes estan legitimats per interposar el recurs d'inconstitucionalitat segons la CE?",
    "answers": [
        { "text": "Qualsevol ciutadà major d'edat que acrediti un interès legítim", "correct": false },
        { "text": "El President del Govern, el Defensor del Poble, 50 Diputats, 50 Senadors i els òrgans executius i legislatius de les CCAA", "correct": true },
        { "text": "Exclusivament el Tribunal Suprem i el Fiscal General de l'Estat", "correct": false },
        { "text": "Qualsevol jutge o tribunal de manera autònoma sense necessitat de plantejar qüestió prèvia", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 16,
    "question": "Quin objectiu té el recurs d'empara davant del Tribunal Constitucional?",
    "answers": [
        { "text": "Controlar la constitucionalitat de les lleis orgàniques aprovades per les Corts Generals", "correct": false },
        { "text": "Protegir els drets i llibertats reconeguts en els articles 14 a 29, més l'article 30.2 de la CE, enfront de violacions originades per poders públics", "correct": true },
        { "text": "Resoldre els conflictes de competència entre l'Estat i les comunitats autònomes", "correct": false },
        { "text": "Impugnar els reglaments de les administracions locals que infringeixin el principi d'autonomia", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 17,
    "question": "Quin valor tenen les sentències del Tribunal Constitucional segons l'article 164 de la CE?",
    "answers": [
        { "text": "Tenen valor de cosa jutjada a partir de l'endemà de la seva publicació i vinculen a tots els poders públics", "correct": true },
        { "text": "Són merament recomanatòries per als tribunals ordinaris de justícia", "correct": false },
        { "text": "Necessiten una ratificació posterior del Ple del Congrés dels Diputats per ser obligatòries", "correct": false },
        { "text": "Només produeixen efectes retroactius per a les sentències fermes dictades en matèria penal", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 18,
    "question": "Segons l'article 152 de la CE, quina és la norma institucional bàsica de cada Comunitat Autònoma?",
    "answers": [
        { "text": "El reglament d'organització interior aprovat per la seva assemblea legislativa", "correct": false },
        { "text": "L'Estatut d'Autonomia", "correct": true },
        { "text": "La llei de finances autonòmiques", "correct": false },
        { "text": "El Reial Decret de transferència de serveis estatals", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 19,
    "question": "Quin paper exerceix el Rei respecte a les lleis aprovades per les Corts Generals segons l'article 62.a) de la CE?",
    "answers": [
        { "text": "Les elabora directament mitjançant decrets-llei de necessitat", "correct": false },
        { "text": "Les sanciona i promulga", "correct": true },
        { "text": "Les pot vetar de manera indefinida si considera que vulneren els principis constitucionals", "correct": false },
        { "text": "Les sotmet obligatòriament a referèndum consultiu abans de la seva publicació", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 20,
    "question": "Com es distribueixen els 12 membres del Tribunal Constitucional entre les diferents institucions proposants?",
    "answers": [
        { "text": "3 a proposta del Congrés, 3 del Senat, 3 del Govern i 3 del CGPJ", "correct": false },
        { "text": "4 a proposta del Congrés, 4 del Senat, 2 del Govern i 2 del CGPJ", "correct": true },
        { "text": "6 a proposta de les Corts Generals en sessió conjunta i 6 a proposta del Govern", "correct": false },
        { "text": "Tots ells nomenats directament per majoria absoluta del Senat a una terna del CGPJ", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 21,
    "question": "Quina funció correspon al Senat dins del sistema bicameral de les Corts Generals establert a la Constitució?",
    "answers": [
        { "text": "És la cambra legislativa primària encarregada exclusiva dels pressupostos de l'Estat", "correct": false },
        { "text": "És la cambra alta de representació territorial que participa en el procediment legislatiu i de control", "correct": true },
        { "text": "És l'òrgan de control directe dels ministres del Govern sense competències legislatives", "correct": false },
        { "text": "És un organisme consultiu sense capacitat d'esmena o veto en cap tipus de llei", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 22,
    "question": "Quin principi econòmic i territorial recull la Constitució per corregir desequilibris entre les diferents parts del territori espanyol?",    "answers": [
        { "text": "El Fons de Compensació Interterritorial previst a l'article 158.2", "correct": true },
        { "text": "La centralització total de la recaptació fiscal a la Tresoreria General de l'Estat", "correct": false },
        { "text": "La prohibició absoluta que les comunitats autònomes emetin deute públic", "correct": false },
        { "text": "La igualtat de tarifes en tots els serveis locals municipals per imperatiu legal", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 23,
    "question": "Segons la regulació constitucional del Poder Judicial, quin requisit és indispensable per pertanyer a aquesta carrera?",
    "answers": [
        { "text": "Esser nomenat directament pels partits polítics amb representació parlamentària", "correct": false },
        { "text": "Ser jutges o magistrats independents, inamovibles, responsables i sotmesos únicament a l'imperi de la llei", "correct": true },
        { "text": "Estar adscrits orgànicament al Ministeri de l'Interior a efectes disciplinaris", "correct": false },
        { "text": "Tenir la condició de funcionari de l'Administració General de l'Estat del grup A1", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 24,
    "question": "Quina condició requereix l'exercici de la potestat reglamentària per part del Govern d'acord amb el marc constitucional i del Títol IV?",
    "answers": [
        { "text": "Ha de subordinar-se sempre a les lleis i exercir-se sota el control dels tribunals ordinaris", "correct": true },
        { "text": "Pot contradir una llei ordinària si hi ha urgència degudament motivada pel Consell de Ministres", "correct": false },
        { "text": "Només pot regular matèries reservades a la llei orgànica prèvia delegació de les Corts", "correct": false },
        { "text": "Requereix l'aprovació prèvia del Consell General del Poder Judicial", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 25,
    "question": "Quin article de la Constitució Espanyola estableix el principi d'autonomia per a la gestió dels seus interessos als municipis, províncies i comunitats autònomes?",
    "answers": [
        { "text": "L'article 2", "correct": false },
        { "text": "L'article 103", "correct": false },
        { "text": "L'article 137", "correct": true },
        { "text": "L'article 150", "correct": false }
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