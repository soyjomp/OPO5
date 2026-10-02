const TEST_ID = "14test.js"; 

const questions = [

 {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 1,
    "question": "Segons el cicle vital dels documents, quin arxiu s'encarrega de custodiar aquells documents la vigència administrativa dels quals ha finalitzat, però continuen sent requerits per a consultes o possibles recursos?",
    "answers": [
      { "text": "Arxiu d'Oficina o de Gestió", "correct": false },
      { "text": "Arxiu Intermedi", "correct": true },
      { "text": "Arxiu Històric", "correct": false },
      { "text": "Arxiu Central Definitiu", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 2,
    "question": "Quin òrgan a Catalunya té competència en matèria d'avaluació i tria documental per dictaminar sobre la destrucció o conservació de documents públics?",
    "answers": [
      { "text": "La Comissió Nacional d'Accés, Avaluació i Tria Documental", "correct": true },
      { "text": "El Consell Metropolità de l'AMB", "correct": false },
      { "text": "La Sindicatura de Comptes de Catalunya", "correct": false },
      { "text": "L'Oficina Antifrau de Catalunya", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 3,
    "question": "Quina conseqüència jurídica té la destrucció d'un document públic realitzada per un departament de l'AMB sense comptar amb el dictamen previ favorable de l'òrgan competent en avaluació documental?",
    "answers": [
      { "text": "L'acte de destrucció és merament irregular i només comporta una sanció disciplinària lleu", "correct": false },
      { "text": "L'actuació és plenament vàlida si el document supera els 5 anys d'antiguitat", "correct": false },
      { "text": "Constitueix una eliminació arbitrària i prohibida, ja que cap document públic pot ser destruït sense el procediment i dictamen reglamentaris", "correct": true },
      { "text": "Només genera responsabilitat patrimonial si ho demana la persona interessada en un termini de 15 dies", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 4,
    "question": "Segons l'Esquema Nacional d'Interoperabilitat (ENI) i la normativa de règim jurídic, com s'han d'emmagatzemar obligatòriament els documents electrònics en l'arxiu electrònic de l'AMB?",
    "answers": [
      { "text": "En formats privatius i tancats que garanteixin la propietat intel·lectual del fabricant del programari", "correct": false },
      { "text": "Amb metadades obligatòries d'associació i en formats estàndard oberts per evitar l'obsolescència tecnològica", "correct": true },
      { "text": "Exclusivament en suport paper digitalitzat mitjançant còpies simples sense signatura electrònica", "correct": false },
      { "text": "En fitxers de text pla comprimit sense metadades per estalviar espai d'emmagatzematge al servidor", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 5,
    "question": "Quin és l'ordre correcte i inalterable del cicle vital dels documents administratius en el sistema d'arxius?",
    "answers": [
      { "text": "Arxiu Intermedi ➔ Arxiu d'Oficina ➔ Arxiu Històric", "correct": false },
      { "text": "Arxiu Històric ➔ Arxiu Intermedi ➔ Arxiu de Gestió", "correct": false },
      { "text": "Arxiu de Gestió (o oficina) ➔ Arxiu Intermedi ➔ Arxiu Històric", "correct": true },
      { "text": "Arxiu de Gestió ➔ Arxiu Definitiu de Directament Eliminació", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 6,
    "question": "Quina finalitat principal té l'Arxiu Històric dins del sistema de gestió documental d'una administració pública com l'AMB?",
    "answers": [
      { "text": "La tramitació diària d'expedients de subvencions i llicències urbanístiques en curs", "correct": false },
      { "text": "La custòdia temporal d'expedients tancats pendents de terminis de recurs", "correct": false },
      { "text": "La conservació permanent dels documents per al seu valor cultural, informatiu o de recerca històrica de la conurbació", "correct": true },
      { "text": "L'eliminació immediata de documents caducats un cop transcorreguts quatre anys", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 7,
    "question": "Quin paper juga el Portal de Transparència de l'AMB (amb.cat) en relació amb els fons documentals de l'ens metropolità?",
    "answers": [
      { "text": "S'alimenta directament dels fons documentals organitzats per facilitar l'accés ciutadà a acords de Junta de Govern i Consell Metropolità", "correct": true },
      { "text": "Funciona com un arxiu intermedi de seguretat exclusiu per a la memòria de càlcul de pressupostos", "correct": false },
      { "text": "Permet la destrucció telemàtica de documents d'oficina sense passar per la Comissió de Tria", "correct": false },
      { "text": "Només publica dades estadístiques anònimes exemptes de qualsevol suport documental arxivat", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 8,
    "question": "Quina és la funció dels tabulats i calendaris de conservació en la gestió arxivística?",
    "answers": [
      { "text": "Establir el calendari laboral de personal adscrit al servei d'arxiu central", "correct": false },
      { "text": "Definir quant de temps s'ha de guardar cada sèrie documental i si s'ha d'eliminar o conservar permanentment", "correct": true },
      { "text": "Regular els horaris d'obertura al públic de l'Arxiu General de l'AMB", "correct": false },
      { "text": "Fixar els terminis de prescripció de les sancions tributàries metropolitanes", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 9,
    "question": "Quina característica defineix l'Arxiu d'Oficina o de Gestió en una unitat administrativa?",
    "answers": [
      { "text": "Conté documents en tramitació o d'ús freqüent per les unitats administratives productores", "correct": true },
      { "text": "Emagatzema exclusivament documents declarats nuls de ple dret per sentència judicial", "correct": false },
      { "text": "És gestionat directament per l'Arxiu Històric de Catalunya sense intervenir les àrees productores", "correct": false },
      { "text": "Es troba centralitzat en un únic edifici extern per a tota la província de Barcelona", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 10,
    "question": "Quin marc normatiu de seguretat s'aplica per assolir els nivells de protecció necessaris per evitar accessos no autoritzats o pèrdues de dades en els arxius electrònics?",
    "answers": [
      { "text": "L'Esquema Nacional de Seguretat (ENS)", "correct": true },
      { "text": "El Codi Civil espanyol en matèria de contractes privats", "correct": false },
      { "text": "La Llei reguladora de les bases del règim local exclusivament per a béns mobles", "correct": false },
      { "text": "El Pla General de Comptabilitat Pública de l'Estat", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 11,
    "question": "Què garanteix principalment l'arxiu electrònic únic de cada administració segons la Llei 39/2015 i l'ENI?",
    "answers": [
      { "text": "La integritat, autenticitat, confidencialitat i conservació dels expedients electrònics", "correct": true },
      { "text": "La publicació automàtica de tots els expedients al Diari Oficial de la Generalitat", "correct": false },
      { "text": "La gratuïtat de la tramitació per a totes les empreses contractistes", "correct": false },
      { "text": "L'eliminació de la necessitat de signatura electrònica reconeguda en els tràmits", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 12,
    "question": "En relació amb la conservació a llarg termini dels documents electrònics, quins elements són indispensables per verificar la seva validesa temporal?",
    "answers": [
      { "text": "Les signatures i els segells de temps vàlids", "correct": true },
      { "text": "Els segells de goma tradicionals estampats sobre paper couché", "correct": false },
      { "text": "Les còpies compulsades manualment per un conserge de l'oficina", "correct": false },
      { "text": "L'aprovació expressa per decret del president de la Generalitat", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 13,
    "question": "Pot un departament de l'AMB decidir lliurement destruir documents antics de la seva oficina pel simple fet que ja no tenen utilitat pràctica diària?",
    "answers": [
      { "text": "Sí, si el cap del servei signa una autorització interna d'eliminació ràpida", "correct": false },
      { "text": "No, qualsevol eliminació requereix un procediment reglamentari i un dictamen favorable de l'òrgan competent en valoració", "correct": true },
      { "text": "Sí, sempre que hagin transcorregut més de dos anys des de la seva creació", "correct": false },
      { "text": "No, llevat que s'hagin digitalitzat prèviament en format PDF de baixa resolució", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 14,
    "question": "Quina és la definició bàsica de l'arxiu administratiu segons la teoria arxivística i la pràctica de les administracions públiques?",
    "answers": [
      { "text": "El conjunt de magatzems privats de material d'oficina no utilitzat", "correct": false },
      { "text": "El conjunt organitzat de documents produïts o rebuts per les administracions públiques en l'exercici de les seves funcions", "correct": true },
      { "text": "El registre general d'entrada i sortida de factures d'una empresa subcontractada", "correct": false },
      { "text": "La base de dades informàtica de recursos humans d'una corporació local", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 15,
    "question": "Com s'integra la gestió documental en l'estructura de l'Àrea Metropolitana de Barcelona (AMB)?",
    "answers": [
      { "text": "A través d'un servei d'arxiu i gestió documental encarregat de custodiar i preservar el patrimoni generat en competències com urbanisme, transport i medi ambient", "correct": true },
      { "text": "Delegant totes les funcions d'arxiu en els ajuntaments de cadascun dels 36 municipis de manera aïllada", "correct": false },
      { "text": "Utilitzant exclusivament arxius privats externalitzats sense cap control públic", "correct": false },
      { "text": "Mitjançant l'eliminació automàtica de tot expedient un cop finalitzada l'obra pública", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 16,
    "question": "Quina trampa o error conceptual és habitual trobar en preguntes tipus test sobre les fases del cicle vital dels arxius?",
    "answers": [
      { "text": "Creure que es pot saltar directament de l'arxiu d'oficina a l'arxiu històric sense passar per l'intermedi si el document manté valors administratius secundaris", "correct": true },
      { "text": "Pensar que l'arxiu de gestió és l'última fase abans de la destrucció total", "correct": false },
      { "text": "Considerar que l'arxiu intermedi depèn directament del Ministeri de Defensa", "correct": false },
      { "text": "Afirmar que els arxius de gestió no guarden mai documents electrònics", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 17,
    "question": "Quin tipus de documents trobem habitualment custodiats a l'Arxiu Intermedi de l'AMB?",
    "answers": [
      { "text": "Expedients tancats la via administrativa dels quals ha finalitzat, però que continuen pendents de terminis de recurs o possibles accions legals", "correct": true },
      { "text": "Mapes medievals i pergamins fundacionals de la conurbació barcelonina", "correct": false },
      { "text": "Esborranys de correus electrònics personals dels treballadors de l'ens", "correct": false },
      { "text": "Factures pendents de pagament de l'exercici corrent", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 18,
    "question": "Quina relació existeix entre la gestió arxivística i el dret d'accés de la ciutadania als arxius i registres públics?",
    "answers": [
      { "text": "La gestió s'ha de compaginar amb el dret d'accés sota el marc de la transparència i la protecció de dades personals", "correct": true },
      { "text": "El dret d'accés anul·la completament qualsevol obligació de conservar documents a l'arxiu de gestió", "correct": false },
      { "text": "Els arxius públics tenen caràcter secret i no poden ser consultats sota cap concepte per la ciutadania", "correct": false },
      { "text": "L'accés ciutadà només està permès per a documents amb més de cent anys d'antiguitat", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 19,
    "question": "Quina importància tenen les metadades en el model d'arxiu electrònic de l'administració pública?",
    "answers": [
      { "text": "Són dades obligatòries d'associació que descriuen i contextualitzen el document electrònic garantint la seva recuperació i integritat", "correct": true },
      { "text": "Representen el cost econòmic de digitalització per cada full escanejat", "correct": false },
      { "text": "Són claus secretes de xifratge militar d'ús exclusiu per al Ministeri de l'Interior", "correct": false },
      { "text": "Designen el nom de l'empresa encarregada de subministrar el paper de les impressores", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 20,
    "question": "Com s'estructura l'atenció als fons documentals històrics referents a l'evolució urbanística dels 36 municipis de l'AMB?",
    "answers": [
      { "text": "A través del fons històric i supramunicipal de l'arxiu corresponent", "correct": true },
      { "text": "Mitjançant la destrucció anual de plans generals per evitar cúmul d'arxius", "correct": false },
      { "text": "Derivant tota la documentació urbanística al Registre de la Propietat privat", "correct": false },
      { "text": "Guardant els plànols exclusivament en format físic a les cotxeres dels autobusos metropolitans", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 21,
    "question": "Quin principi regeix la prohibició de destruir documents sense control en l'àmbit de les administracions públiques catalanes?",
    "answers": [
      { "text": "El principi de legalitat i submissió al dictamen de la comissió d'avaluació documental", "correct": true },
      { "text": "El principi d'autonomia financera municipal de lliure disposició", "correct": false },
      { "text": "El principi de celeritat i economia processal en la gestió d'espais", "correct": false },
      { "text": "El principi de discrecionalitat tècnica absoluta del cap de departament", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 22,
    "question": "Quina és la finalitat de l'ús de gestors d'expedients en el model d'administració electrònica de l'AMB pel que respecta als arxius?",
    "answers": [
      { "text": "Integrar l'arxiu electrònic garantint el compliment de les normes d'interoperabilitat (ENI) i conservació digital", "correct": true },
      { "text": "Imprimir automàticament una còpia en paper de cada correu electrònic rebut", "correct": false },
      { "text": "Limitar l'accés als expedients exclusivament als càrrecs polítics electes", "correct": false },
      { "text": "Substituir les bases de dades comptables per fulls de càlcul no signats", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 23,
    "question": "Quina característica presenten els documents d'un arxiu d'oficina respecte a la seva freqüència d'ús?",
    "answers": [
      { "text": "Són d'ús freqüent per les unitats administratives perquè es troben en fase de tramitació", "correct": true },
      { "text": "Són consultats exclusivament per historiadors i investigadors externs un cop cada dècada", "correct": false },
      { "text": "Romanen bloquejats sense cap tipus de modificació ni consulta durant un mínim de trenta anys", "correct": false },
      { "text": "Són sotmesos a un procés de destrucció preventiva immediata", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 24,
    "question": "Què estableix la normativa pel que fa a la conservació de sèries documentals declarades de conservació permanent?",
    "answers": [
      { "text": "No poden ser eliminades sota cap circumstància donat el seu valor històric, cultural o jurídic essencial", "correct": true },
      { "text": "Poden ser eliminades passats deu anys si l'arxiu pateix problemes d'espai físic", "correct": false },
      { "text": "Han de ser subhastades públicament entre col·leccionistes particulars", "correct": false },
      { "text": "Es poden destruir si es digitalitzen en un format d'imatge no compressible", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 25,
    "question": "Quin risc tecnològic principal pretén combatre l'ús de formats estàndard oberts en l'arxiu electrònic de l'AMB?",
    "answers": [
      { "text": "L'obsolescència tecnològica que impediria la lectura futura dels fitxers", "correct": true },
      { "text": "El contagi de virus informàtics a través de xarxes socials obertes", "correct": false },
      { "text": "L'excés de velocitat en la descàrrega de documents per part de la ciutadania", "correct": false },
      { "text": "L'augment del consum elèctric dels servidors municipals", "correct": false }
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