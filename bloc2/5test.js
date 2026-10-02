const TEST_ID = "5test.js"; 

const questions = [

 {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 1,
    "question": "Segons la Llei 39/2015 i el contingut aplicable a l'AMB, quin caràcter i efecte té generalment el silenci administratiu en les sol·licituds a instància de part?",
    "answers": [
      { "text": "Desestimatori per regla general, excepte en matèria tributària pura", "correct": false },
      { "text": "Estimatori per regla general, excepte en els supòsits expressament previstos com a desestimatoris per una norma amb rang de llei o de Dret de la Unió Europea", "correct": true },
      { "text": "Sempre té caràcter estimatori sense cap tipus d'excepció legal", "correct": false },
      { "text": "Manca de qualsevol efecte jurídic fins que l'òrgan competent dicti una resolució expressa fora de termini", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 2,
    "question": "D'acord amb el règim d'invalideses dels actes administratius, quina de les següents causes determina la nul·litat de ple dret d'un acte[cite: 1]?",
    "answers": [
      { "text": "Qualsevol infracció notòria de l'ordenament jurídic que provoqui una simple indefensió material esmenable", "correct": false },
      { "text": "La realització d'actuacions administratives fora del termini establert quan la naturalesa de l'acte ho exigeixi", "correct": false },
      { "text": "La vulneració dels drets i llibertats susceptibles d'empara constitucional recollits als articles 14 a 29 de la Constitució Espanyola[cite: 1]", "correct": true },
      { "text": "L'incompliment d'un requisit formal no essencial que no impedeixi aconseguir la finalitat de l'acte", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 3,
    "question": "Quin és el termini màxim general establert per a la notificació de la resolució expressa en els procediments administratius, a falta de norma específica[cite: 2]?",
    "answers": [
      { "text": "1 mes", "correct": false },
      { "text": "3 mesos", "correct": true },
      { "text": "6 mesos", "correct": false },
      { "text": "15 dies", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 4,
    "question": "Pel que fa a les tècniques de conservació dels actes administratius, quin òrgan pot dur a terme la validació d'un acte anul·lable el vici del qual consisteixi en una incompetència no manifesta[cite: 1]?",
    "answers": [
      { "text": "L'òrgan competent, sempre que sigui superior jeràrquic del que va dictar l'acte viciat[cite: 1]", "correct": true },
      { "text": "Un jutge de la jurisdicció contenciosa administrativa mitjançant sentència ferma", "correct": false },
      { "text": "Únicament el Ple de la corporació metropolitana en sessió extraordinària", "correct": false },
      { "text": "L'interventor de la corporació a través d'un informe de fiscalització prèvia", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 5,
    "question": "Quina naturalesa jurídica tenen els crèdits autoritzats en l'estat de despeses del pressupost d'una entitat local com l'AMB[cite: 2]?",
    "answers": [
      { "text": "Tenen caràcter merament estimatiu i orientatiu per a la gestió financera", "correct": false },
      { "text": "Tenen caràcter limitatiu i vinculant, de manera que es consideren nuls de ple dret els compromisos de despesa que els excedeixin[cite: 2]", "correct": true },
      { "text": "Són flexibles i es poden ampliar automàticament sense necessitat de cap modificació pressupostària", "correct": false },
      { "text": "Tenen la consideració de previsions comptables no subjectes a cap tipus de límit quantitatiu", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 6,
    "question": "Segons l'estructura econòmica del pressupost de despeses de les entitats locals, a quin capítol s'imputen les despeses derivades de l'amortització del deute i préstecs contrets[cite: 2]?",
    "answers": [
      { "text": "Capítol 3: Despeses financeres[cite: 2]", "correct": false },
      { "text": "Capítol 8: Actius financers[cite: 2]", "correct": false },
      { "text": "Capítol 9: Passius financers[cite: 2]", "correct": true },
      { "text": "Capítol 4: Transferències corrents[cite: 2]", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 7,
    "question": "Quin és el percentatge màxim i únic que l'AMB pot establir com a recàrrec metropolità sobre l'Impost sobre Béns Immobles (IBI) d'acord amb la Llei 31/2010 i el TRLRHL[cite: 2]?",
    "answers": [
      { "text": "Un 0,1% de la base imposable", "correct": false },
      { "text": "Un 0,2% de la base imposable (valor cadastral)[cite: 2]", "correct": true },
      { "text": "Un 0,5% de la quota líquida de l'impost", "correct": false },
      { "text": "Un 1% del valor de mercat dels immobles", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 8,
    "question": "Quina de les següents afirmacions relatives a la pròrroga pressupostària automàtica de les corporacions locals és correcta[cite: 2]?",
    "answers": [
      { "text": "Es prorroga el pressupost íntegrament incloent tots els crèdits inicials i extraordinaris de l'exercici anterior", "correct": false },
      { "text": "Es prorroguen automàticament els crèdits inicials de l'exercici anterior si el nou pressupost no s'aprova abans de l'1 de gener[cite: 2]", "correct": true },
      { "text": "Requereix una aprovació expressa i unànime del Ple de la corporació abans del 31 de març", "correct": false },
      { "text": "Implica la paralització absoluta de qualsevol tipus de despesa corrent fins a l'aprovació definitiva", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 9,
    "question": "En el procés d'execució del pressupost de despeses, quin és l'acte pel qual s'acorda la realització d'una despesa a càrrec d'un crèdit pressupostari determinat, reservant-ne la totalitat o una part[cite: 2]?",
    "answers": [
      { "text": "La disposició o compromís de la despesa[cite: 2]", "correct": false },
      { "text": "L'autorització de la despesa[cite: 2]", "correct": true },
      { "text": "El reconeixement de l'obligació[cite: 2]", "correct": false },
      { "text": "L'ordenació del pagament material[cite: 2]", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 10,
    "question": "Quin és el termini límit legalment establert perquè les entitats locals hagin de confeccionar la liquidació del seu pressupost respecte a l'exercici anterior[cite: 2]?",
    "answers": [
      { "text": "Abans de l'1 de febrer", "correct": false },
      { "text": "Abans del dia 1 de març de l'exercici següent[cite: 2]", "correct": true },
      { "text": "Abans del 31 de març", "correct": false },
      { "text": "Abans del 15 de maig", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 11,
    "question": "Segons la classificació econòmica del pressupost d'ingressos, on s'han de comptabilitzar els recursos obtinguts per la venda d'actius financers i reintegraments de préstecs[cite: 2]?",
    "answers": [
      { "text": "Capítol 6: Alienació d'inversions reals[cite: 2]", "correct": false },
      { "text": "Capítol 8: Variació d'actius financers[cite: 2]", "correct": true },
      { "text": "Capítol 9: Variació de passius financers[cite: 2]", "correct": false },
      { "text": "Capítol 5: Ingressos patrimonials[cite: 2]", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 12,
    "question": "Quin tipus d'acte administratiu es produeix quan l'Administració incompleix l'obligació de resoldre i l'ordenament jurídic atribueix a aquesta conducta un significat estimador o desestimador pel simple transcurs del termini[cite: 1]?",
    "answers": [
      { "text": "Acte tàcit[cite: 1]", "correct": false },
      { "text": "Acte presumpte[cite: 1]", "correct": true },
      { "text": "Acte exprés[cite: 1]", "correct": false },
      { "text": "Acte de tràmit qualificat[cite: 1]", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 13,
    "question": "Quin és el termini general d'esmena de sol·licituds i de compliment de tràmits per part dels interessats en el procediment administratiu comú (Llei 39/2015)?",
    "answers": [
      { "text": "5 dies", "correct": false },
      { "text": "10 dies", "correct": true },
      { "text": "15 dies", "correct": false },
      { "text": "1 mes", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 14,
    "question": "Quina característica defineix la classificació funcional i per programes del pressupost de despeses de l'AMB[cite: 2]?",
    "answers": [
      { "text": "S'estructura obligatòriament en 9 capítols homogèneus basats en la naturalesa de la despesa", "correct": false },
      { "text": "Està formada per 3 dígits que indiquen successivament l'àrea de despesa, la política de despesa i el programa concret[cite: 2]", "correct": true },
      { "text": "Identifica de manera exclusiva l'òrgan o unitat responsable que gasta o ingressa", "correct": false },
      { "text": "S'aplica tant a l'estat d'ingressos com a l'estat de despeses de la corporació amb caràcter simètric", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 15,
    "question": "D'acord amb la Llei 31/2010 de creació de l'AMB, quina data precisa es va constituir efectivament com a administració pública substituint les tres antigues entitats metropolitanes[cite: 2]?",
    "answers": [
      { "text": "1 de gener de 2011", "correct": false },
      { "text": "21 de juliol de 2011[cite: 2]", "correct": true },
      { "text": "31 d'agost de 2010", "correct": false },
      { "text": "1 de setembre de 2011", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 16,
    "question": "Quina és la data límit legal que té el President de l'entitat local per formar el Pressupost General i sotmetre'l a l'aprovació del Ple[cite: 2]?",
    "answers": [
      { "text": "Abans del 15 de setembre[cite: 2]", "correct": false },
      { "text": "Abans del 15 d'octubre[cite: 2]", "correct": true },
      { "text": "Abans del 31 d'octubre", "correct": false },
      { "text": "Abans del 31 de desembre[cite: 2]", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 17,
    "question": "Quina condició temporal s'exigeix respecte a la publicació de les ordenances fiscals locals perquè puguin entrar en vigor i ser aplicades en un determinat exercici pressupostari[cite: 2]?",
    "answers": [
      { "text": "Han d'estar publicades íntegrament en el BOP abans del 31 de desembre de l'exercici precedent[cite: 2]", "correct": true },
      { "text": "Poden publicar-se durant el primer trimestre de l'exercici corrent amb efectes retroactius", "correct": false },
      { "text": "Només requereixen la comunicació telemàtica a l'Administració de l'Estat abans del 15 de gener", "correct": false },
      { "text": "Es consideren automàticament vigents des de la seva aprovació inicial pel Ple sense necessitat de publicació", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 18,
    "question": "Quin òrgan de l'entitat local ostenta les funcions d'ordenació de pagaments per regla general segons la normativa de les hisendes locals[cite: 2]?",
    "answers": [
      { "text": "L'interventor de la corporació", "correct": false },
      { "text": "El tresorer municipal", "correct": false },
      { "text": "El president o alcalde de l'entitat local[cite: 2]", "correct": true },
      { "text": "El Ple de la corporació per majoria absoluta", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 19,
    "question": "Com es defineix el romanent de tresoreria d'una entitat local en la liquidació del pressupost[cite: 2]?",
    "answers": [
      { "text": "La diferència pura entre els ingressos totals liquidats i les despeses totals pagades durant l'any", "correct": false },
      { "text": "La suma dels fons líquids a 31 de desembre més els drets pendents de cobrament, menys les obligacions pendents de pagament, ajustat tot plegat pels ingressos afectats i coeficients de dificultat de cobrament[cite: 2]", "correct": true },
      { "text": "El conjunt de crèdits no gastats que s'anul·len definitivament en tancar l'exercici", "correct": false },
      { "text": "El volum de deute viu acumulat a llarg termini pendent d'amortització", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 20,
    "question": "Quin principi pressupostari estableix que els recursos de l'entitat es destinen a satisfer el conjunt de les seves obligacions de manera general, excepte en els casos d'ingressos específics afectats a finalitats determinades[cite: 2]?",
    "answers": [
      { "text": "Principi d'universalitat[cite: 2]", "correct": false },
      { "text": "Principi de no afectació[cite: 2]", "correct": true },
      { "text": "Principi d'especialitat qualitativa[cite: 2]", "correct": false },
      { "text": "Principi d'equilibri pressupostari[cite: 2]", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 21,
    "question": "Quina és la consideració jurídica dels actes administratius de tràmit respecte a la seva impugnació autònoma en via administrativa o contenciosa[cite: 1]?",
    "answers": [
      { "text": "Són sempre directament impugnables en qualsevol moment del procediment", "correct": false },
      { "text": "No són impugnables separadament de la resolució definitiva, llevat dels actes de tràmit qualificats que decideixen directament o indirectament el fons o produeixen indefensió[cite: 1]", "correct": true },
      { "text": "Adquiriran fermesa automàtica si no es recorren en el termini de 10 dies", "correct": false },
      { "text": "Només poden ser objecte de revisió d'ofici per motius de nul·litat radical", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 22,
    "question": "Quina fase de l'execució del pressupost de despeses es correspon amb l'operació de contreure en comptes els crèdits exigibles en contra de l'AMB per haver-se acreditat la prestació corresponent[cite: 2]?",
    "answers": [
      { "text": "Autorització[cite: 2]", "correct": false },
      { "text": "Disposició o compromís[cite: 2]", "correct": false },
      { "text": "Reconeixement de l'obligació[cite: 2]", "correct": true },
      { "text": "Ordenació de pagament[cite: 2]", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 23,
    "question": "Segons la classificació econòmica de les despeses, on s'han d'imputar les retribucions del personal i les cotitzacions socials a càrrec de l'empleador[cite: 2]?",
    "answers": [
      { "text": "Capítol 2: Despeses corrents de béns i serveis[cite: 2]", "correct": false },
      { "text": "Capítol 1: Remuneracions de personal[cite: 2]", "correct": true },
      { "text": "Capítol 4: Transferències corrents[cite: 2]", "correct": false },
      { "text": "Capítol 6: Inversions reals[cite: 2]", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 24,
    "question": "Quina particularitat presenta el principi d'especialitat qualitativa dels crèdits pressupostaris de despesa[cite: 2]?",
    "answers": [
      { "text": "Determina que els imports consignats constitueixen quanties màximes que no es poden superar", "correct": false },
      { "text": "Estableix que les consignacions pressupostàries només poden ser destinades a la finalitat específica per a la qual van ser previstes en el pressupost[cite: 2]", "correct": true },
      { "text": "Garanteix la possibilitat de transferir lliurement fons entre qualsevol capítol de despesa i d'ingrés", "correct": false },
      { "text": "Autoritza l'ús de crèdits per a despeses no previstes en cas d'urgència excepcional sense modificació", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 25,
    "question": "Quin és el termini legal d'exposició al públic del Pressupost General un cop ha estat aprovat inicialment pel Ple de la corporació local[cite: 2]?",
    "answers": [
      { "text": "10 dies hàbils", "correct": false },
      { "text": "15 dies[cite: 2]", "correct": true },
      { "text": "30 dies naturals", "correct": false },
      { "text": "1 mes comptat des de l'endemà de la publicació al BOP", "correct": false }
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