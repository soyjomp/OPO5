const TEST_ID = "25test.js"; 

const questions = [

 {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 1,
    "question": "Segons la Llei 39/2015, quina consideració tenen els dissabtes a efectes del còmput de terminis en el procediment administratiu?",
    "answers": [
      { "text": "Són considerats dies hàbils a tots els efectes si les oficines de registre estan obertes", "correct": false },
      { "text": "Són considerats expressament dies inhàbils igualment que els diumenges i festius", "correct": true },
      { "text": "Són hàbils només per a la presentació de sol·licituds a través de la Seu Electrònica", "correct": false },
      { "text": "Són dies inhàbils excepte en els procediments de contractació pública metropolitana", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 2,
    "question": "Quin és el règim aplicable a la fermesa dels actes administratius que incorren en un vici de nul·litat de ple dret?",
    "answers": [
      { "text": "Adquireixen fermesa un cop transcorregut el termini de dos mesos per interposar el recurs contenciós-administratiu", "correct": false },
      { "text": "Poden esdevenir ferms si no s'impugnen dins del termini establert per a la via administrativa", "correct": false },
      { "text": "No poden adquirir mai fermesa pel transcurs del temps, podent ser declarats nuls en qualsevol moment", "correct": true },
      { "text": "Només poden perdre la seva fermesa mitjançant una sentència del Tribunal Constitucional", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 3,
    "question": "Segons l'article 14.2 de la Llei 39/2015, quins dels següents col·lectius no té l'obligació de relacionar-se electrònicament amb l'Administració?",
    "answers": [
      { "text": "Les persones jurídiques", "correct": false },
      { "text": "Els professionals col·legiats per a l'exercici de la seva activitat", "correct": false },
      { "text": "Les persones físiques en qualsevol tipus de tràmit no professional", "correct": true },
      { "text": "Els empleats públics per als tràmits derivats de la seva condició d'empleat", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 4,
    "question": "Quan un termini s'assenyala en dies, aquests s'entenen com a hàbils, i respecte al dia de la notificació o publicació:",
    "answers": [
      { "text": "Es comença a comptar el mateix dia si s'ha rebut abans de les dotze del migdia", "correct": false },
      { "text": "Es considera sempre el primer dia del còmput si és hàbil", "correct": false },
      { "text": "S'entén exclòs del còmput, començant a comptar el dia següent hàbil", "correct": true },
      { "text": "Compta a partir de l'endemà natural, independentment que sigui festiu o no", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 5,
    "question": "Quin tipus de vici comporta l'omissió total i absoluta del procediment legalment establert segons l'article 62.1 de la Llei 39/2015?",
    "answers": [
      { "text": "Anul·labilitat", "correct": false },
      { "text": "Irregularitat no invalidant", "correct": false },
      { "text": "Nul·litat de ple dret", "correct": true },
      { "text": "Ineficàcia sobrevinguda", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 6,
    "question": "Pel que fa als actes de tràmit en un procediment administratiu, quin d'ells pot ser impugnat de manera independent?",
    "answers": [
      { "text": "Qualsevol informe preceptiu emès durant la fase d'instrucció", "correct": false },
      { "text": "Els actes de tràmit qualificats que decideixen directament o indirectament el fons, produeixen indefensió o impossibiliten la continuació del procediment", "correct": true },
      { "text": "Únicament les propostes de resolució emeses pel òrgan instructor", "correct": false },
      { "text": "Cap acte de tràmit pot ser impugnat en cap circumstància de forma separada a la resolució definitiva", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 7,
    "question": "Com es computen els terminis fixats en mesos o anys segons la Llei 39/2015?",
    "answers": [
      { "text": "Es compten de data a data, i si al mes de venciment no hi ha dia equivalent, s'entén que el termini expira l'últim dia del mes", "correct": true },
      { "text": "S'agrupen sempre en dies naturals per evitar errors de calendari", "correct": false },
      { "text": "S'exclouen automàticament tots els dies festius i agost", "correct": false },
      { "text": "Comencen el primer dia natural del mes següent sense tenir en compte la data de notificació", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 8,
    "question": "Quina característica defineix principalment els actes administratius de gravamen?",
    "answers": [
      { "text": "Amplien el patrimoni jurídic del destinatari i no requereixen motivació", "correct": false },
      { "text": "Restringeixen el patrimoni jurídic o imposen obligacions, i requereixen obligatòriament motivació", "correct": true },
      { "text": "Són sempre discrecionals i exempts de control judicial", "correct": false },
      { "text": "Poden dictar-se amb efectes retroactius absoluts sense límits formals", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 9,
    "question": "Segons el règim de validació dels actes administratius, quins actes poden ser objecte de validació per part de l'Administració?",
    "answers": [
      { "text": "Únicament els actes nuls de ple dret", "correct": false },
      { "text": "Tots els actes que pateixin d'irregularitats no invalidants exclusivament", "correct": false },
      { "text": "Els actes anul·lables mitjançant l'esmena dels vicis que presenten", "correct": true },
      { "text": "Cap acte viciat pot ser validat un cop dictat", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 10,
    "question": "Pel que fa al funcionament del Registre Electrònic de l'AMB en relació amb la presentació de documents en dies inhàbils:",
    "answers": [
      { "text": "Els documents es consideren rebuts en el moment de la seva entrada, inclús a la mitjanit d'un diumenge", "correct": false },
      { "text": "La presentació en un dia inhàbil s'entén realitzada a la primera hora del primer dia hàbil següent", "correct": true },
      { "text": "S'anul·la automàticament la sol·licitud per defecte de forma", "correct": false },
      { "text": "Només és vàlida si compta amb l'autorització prèvia de la sindicatura", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 11,
    "question": "Quin efecte produeix un defecte de forma en un acte administratiu segons l'article 63 de la Llei 39/2015?",
    "answers": [
      { "text": "Determina sempre la nul·litat absoluta de tot el procediment", "correct": false },
      { "text": "Només determina l'anul·labilitat quan l'acte manca dels requisits formals indispensables per assolir el seu fi o genera indefensió", "correct": true },
      { "text": "Invalida automàticament l'acte sense possibilitat de conservació", "correct": false },
      { "text": "Es considera un error material subsanable d'ofici sense efectes sobre la validesa", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 12,
    "question": "Què estableix el principi d'incomunicació d'invalidesa en el procediment administratiu?",
    "answers": [
      { "text": "La nul·litat d'un acte comporta sempre la nul·litat de tots els actes posteriors del mateix expedient", "correct": false },
      { "text": "La invalidesa d'un acte o d'una part no implica la dels successius actes o parts que en siguin independents", "correct": true },
      { "text": "Els vicis formals s'estenen a tot el procediment si afecten la fase d'iniciació", "correct": false },
      { "text": "Cap acte pot ser conservat si s'emet fora de termini", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 13,
    "question": "Segons la Llei 39/2015, quina és la naturalesa dels actes presumptes derivats del silenci administratiu?",
    "answers": [
      { "text": "Són meres aparences sense cap efecte jurídic vinculant", "correct": false },
      { "text": "Són actes la convalidació dels quals depèn del criteri discrecional del ple", "correct": false },
      { "text": "Són autèntics actes administratius el sentit dels quals (estimatori o desestimatori) ve fixat per la norma davant l'incompliment de l'obligació de resoldre", "correct": true },
      { "text": "Equivalen sempre a actes nuls de ple dret per omissió del procediment", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 14,
    "question": "Quin requisit és imprescindible perquè es pugui parlar d'exercici d'una potestat discrecional i no d'arbitrarietat de l'Administració?",
    "answers": [
      { "text": "Que l'òrgan que l'exerceixi estigui exempt de control jurisdiccional", "correct": false },
      { "text": "Que els fins perseguits per la potestat estiguin prèviament determinats per l'ordenament jurídic", "correct": true },
      { "text": "Que s'adopti per unanimitat dels membres del Consell Metropolità", "correct": false },
      { "text": "Que no existeixi cap informe previ de la intervenció", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 15,
    "question": "Quina de les següents opcions constitueix una causa de nul·litat de ple dret d'un acte administratiu segons l'article 62.1 de la Llei 39/2015?",
    "answers": [
      { "text": "Qualsevol infracció simple del dret de defensa sense causar indefensió real", "correct": false },
      { "text": "Els actes dictats amb incompetència manifesta per raó de la matèria o del territori", "correct": true },
      { "text": "La realització d'actuacions administratives fora del termini no essencial", "correct": false },
      { "text": "L'incompliment de recomanacions no vinculants d'un òrgan consultiu", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 16,
    "question": "En relació amb els terminis expressats en hores, com s'aplica el còmput segons la Llei 39/2015?",
    "answers": [
      { "text": "S'entenen hores hàbils i es compten de hora en hora des de l'endemà de la notificació", "correct": true },
      { "text": "S'apliquen només durant l'horari d'atenció al públic de les oficines de registre", "correct": false },
      { "text": "S'entenen hores naturals computades minut a minut des del moment exacte de l'enviament telemàtic", "correct": false },
      { "text": "S'equiparen automàticament a un dia hàbil sencer", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 17,
    "question": "Què implica la tècnica de la conversió d'un acte invàlid?",
    "answers": [
      { "text": "Transformar un acte ferm en un acte discrecional mitjançant resolució de la presidència", "correct": false },
      { "text": "Que si els actes nuls o anul·lables contenen els elements constitutius d'un altre de diferent, poden produir els efectes d'aquest", "correct": true },
      { "text": "Convalidar un acte dictat per un òrgan manifestament incompetent", "correct": false },
      { "text": "Converter una sanció administrativa en una obligació de pagament no pressupostària", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 18,
    "question": "Quin dels següents drets dels ciutadans es recull expressament en l'article 13 de la Llei 39/2015?",
    "answers": [
      { "text": "L'obligació de disposar de signatura electrònica avançada per a qualsevol tràmit menor", "correct": false },
      { "text": "Comunicar-se amb les administracions públiques a través de Punts d'Accés Generals electrònics", "correct": true },
      { "text": "Exigir la gratuïtat de totes les taxes i preus públics metropolitans", "correct": false },
      { "text": "Renunciar a la llengua oficial catalana en l'àmbit territorial de Catalunya", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 19,
    "question": "Quan un acte administratiu lesiona els drets i les llibertats susceptibles d'empara constitucional (articles 14 a 29 de la CE), la seva qualificació jurídica és:",
    "answers": [
      { "text": "Merament irregular", "correct": false },
      { "text": "Anul·lable", "correct": false },
      { "text": "Nul de ple dret", "correct": true },
      { "text": "Vàlid però subjecte a indemnització obligatòria", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 20,
    "question": "Quin és l'efecte principal de la presumpció de validesa dels actes administratius reconeguda a la normativa de procediment?",
    "answers": [
      { "text": "Que els actes són immediatament executius i produeixen efectes mentre no s' declari la seva nul·litat o s'anul·lin", "correct": true },
      { "text": "Que no poden ser recorreguts mai en via administrativa", "correct": false },
      { "text": "Que exempten l'Administració de motivar cap tipus de resolució", "correct": false },
      { "text": "Que impedeixen la interposició de mesures cautelars per part dels tribunals", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 21,
    "question": "Com actua l'AMB pel que fa al calendari de dies inhàbils a efectes de còmput de terminis?",
    "answers": [
      { "text": "S'ajusta exclusivament al calendari laboral de l'Estat sense tenir en compte l'àmbit local", "correct": false },
      { "text": "Publica anualment al seu portal corporatiu el calendari oficial coordinant els festius de Barcelona i dels 36 municipis metropolitans", "correct": true },
      { "text": "Delega la determinació dels dies inhàbils en cadascun dels col·legis professionals", "correct": false },
      { "text": "Estableix que tots els dies de l'any són hàbils per a la gestió tributària", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 22,
    "question": "Quina és la conseqüència jurídica si un acte administratiu té un contingut impossible?",
    "answers": [
      { "text": "És un acte merament anul·lable subsanable en el termini d'un mes", "correct": false },
      { "text": "Incorre en nul·litat de ple dret", "correct": true },
      { "text": "Constitueix una irregularitat no invalidant", "correct": false },
      { "text": "Requereix una convalidació per part del ple de la corporació", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 23,
    "question": "En relació amb els actes de tràmit, quina afirmació és correcta pel que fa a la seva impugnació general?",
    "answers": [
      { "text": "Poden ser recorreguts de forma independent en qualsevol moment del procediment", "correct": false },
      { "text": "En general no són impugnables separadament, llevat dels qualificats que causen indefensió o impedeixen continuar", "correct": true },
      { "text": "Són sempre objecte directe de recurs contenciós-administratiu", "correct": false },
      { "text": "Requereixen obligatòriament la interposició prèvia d'un recurs d'alçada", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 24,
    "question": "Si un termini es fixa en dies naturals per expressa disposició legal o en el notificat:",
    "answers": [
      { "text": "S'han de computar incloent els diumenges i festius", "correct": true },
      { "text": "S'exclouen automàticament els dissabtes i diumenges", "correct": false },
      { "text": "Es duplica el nombre de dies per garantir el dret de defensa", "correct": false },
      { "text": "Es consideren dies hàbils només a efectes fiscals", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 25,
    "question": "Quin òrgan pot dur a terme la validació d'un acte anul·lable quan el vici consisteix en incompetència jeràrquica?",
    "answers": [
      { "text": "L'òrgan competent que sigui superior jeràrquic del que va dictar l'acte viciat", "correct": true },
      { "text": "Qualsevol unitat administrativa de la mateixa àrea funcional", "correct": false },
      { "text": "El Defensor del Poble o la sindicatura de greuges", "correct": false },
      { "text": "Només el Ple de la corporació per majoria absoluta", "correct": false }
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