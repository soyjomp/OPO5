const TEST_ID = "12test.js"; 

const questions = [

 {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 1,
    "question": "Segons la Llei 40/2015 (LRJSP) i la legislació de règim jurídic, quin principi regeix principalment el deure de ponderar la totalitat dels interessos públics implicats en l'exercici de competències pròpies?",
    "answers": [
      { "text": "El principi de jerarquia normativa i preferència sectorial", "correct": false },
      { "text": "El principi de lleialtat institucional", "correct": true },
      { "text": "El principi de suficiència financera exclusiva", "correct": false },
      { "text": "El principi de descentralització funcional obligatòria", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 2,
    "question": "Pel que fa a la forma de les comunicacions interadministratives, quina és la regla general aplicable entre els òrgans de les administracions públiques?",
    "answers": [
      { "text": "S'han de dirigir necessàriament per mitjans electrònics, garantint la interoperabilitat", "correct": true },
      { "text": "S'han de realitzar preferentment mitjançant missatgeria postal certificada per deixar constància física", "correct": false },
      { "text": "Poden utilitzar qualsevol canal si hi ha acord verbal previ entre els funcionaris responsables", "correct": false },
      { "text": "Requereixen sempre l'ús de suport paper amb segell humit original de sortida", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 3,
    "question": "Quina és la naturalesa jurídica de les Conferències Sectorials com a òrgans de relació interadministrativa?",
    "answers": [
      { "text": "Són òrgans unipersonals de control financer directe adscrits al Ministeri d'Hisenda", "correct": false },
      { "text": "Són òrgans col·legiats de cooperació de composició multilateral amb presència de l'Estat, CCAA i ens locals", "correct": true },
      { "text": "Són tribunals administratius especials per resoldre conflictes de personal funcionari", "correct": false },
      { "text": "Són empreses públiques de capital mixt encarregades de la contractació centralitzada", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 4,
    "question": "Quin és l'objectiu principal del Sistema d'Interconnexió de Registres (SIR) en l'àmbit de les comunicacions interadministratives?",
    "answers": [
      { "text": "Permetre l'intercanvi segellat de seients registrals entre diferents administracions de l'Estat, CCAA i ens locals", "correct": true },
      { "text": "Gestionar el cobrament de multes de trànsit municipals a nivell internacional", "correct": false },
      { "text": "Supervisar la comptabilitat pressupostària de les societats mercantils participades", "correct": false },
      { "text": "Substituir completament la Sindicatura de Comptes en la fiscalització prèvia", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 5,
    "question": "Segons l'Esquema Nacional d'Interoperabilitat (ENI) i la Llei 39/2015, respecte a l'aportació de documents pels ciutadans:",
    "answers": [
      { "text": "Les administracions poden exigir qualsevol document original en paper si té més de cinc anys d'antiguitat", "correct": false },
      { "text": "Les administracions no poden exigir als ciutadans dades o documents que ja estiguin en poder de qualsevol altra administració", "correct": true },
      { "text": "El ciutadà està obligat a aportar còpia compulsada de tots els certificats de padró i identitat", "correct": false },
      { "text": "Només s'aplica a la comunicació entre ministeris estatals, excloent els ens locals", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 6,
    "question": "Com s'instrumenta habitualment la cooperació pràctica entre l'Àrea Metropolitana de Barcelona (AMB) i els 36 ajuntaments metropolitans?",
    "answers": [
      { "text": "Mitjançant decrets unilaterals del Govern de l'Estat sense participació local", "correct": false },
      { "text": "A través de convenis de cooperació i acords interadministratius per a la gestió de serveis i obres", "correct": true },
      { "text": "Únicament a través de recursos contenciosos administratius davant el Tribunal Superior", "correct": false },
      { "text": "Mitjançant contractes privats de dret mercantil sotmesos a la jurisdicció civil", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 7,
    "question": "Quin paper juguen les plataformes d'intermediació de dades (com SCSP en l'àmbit català) en les comunicacions interadministratives?",
    "answers": [
      { "text": "Permeten consultar electrònicament dades d'identitat, residència o tributs sense que el ciutadà hagi d'aportar paper", "correct": true },
      { "text": "Arxiuen físicament els expedients d'urbanisme en magatzems de la Generalitat", "correct": false },
      { "text": "S'utilitzen exclusivament per pagar les nòmines del personal eventual de l'AMB", "correct": false },
      { "text": "Serveixen com a registre de la propietat privada de caràcter mercantil", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 8,
    "question": "En relació amb el deure d'auxili i assistència mútua entre administracions públiques:",
    "answers": [
      { "text": "Un òrgan pot sol·licitar a un altre d'una administració diferent la pràctica d'actuacions que exigeixin coneixements tècnics o mitjans dels quals no disposi", "correct": true },
      { "text": "L'assistència tècnica és sempre a títol onerós mitjançant factura comercial obligatòria", "correct": false },
      { "text": "Només es pot sol·licitar autorització prèvia del Consell de Ministres", "correct": false },
      { "text": "Està prohibit prestar assistència entre administracions de diferent nivell territorial", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 9,
    "question": "Quina és la naturalesa jurídica de l'AMB com a ens supramunicipal segons la Llei 31/2010?",
    "answers": [
      { "text": "Una societat anònima de capital íntegrament públic metropolità", "correct": false },
      { "text": "Una administració pública de naturalesa territorial integrada per 36 municipis", "correct": true },
      { "text": "Una fundació privada de col·laboració ciutadana", "correct": false },
      { "text": "Un organisme autònom dependent directament de les diputacions provincials", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 10,
    "question": "Quin principi pressupostari i organitzatiu garanteix que les aplicacions i sistemes de comunicació electrònica de l'AMB puguin connectar-se amb la Generalitat i l'Estat?",
    "answers": [
      { "text": "El principi d'interoperabilitat", "correct": true },
      { "text": "El principi de discrecionalitat tècnica absoluta", "correct": false },
      { "text": "El principi de no afectació d'ingressos", "correct": false },
      { "text": "El principi de competència mercantil lliure", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 11,
    "question": "Pel que fa als convenis de col·laboració subscrits per l'AMB amb altres administracions:",
    "answers": [
      { "text": "Poden modificar unilateralment les lleis orgàniques estatals", "correct": false },
      { "text": "Serveixen per coordinar actuacions conjuntes en matèria de planejament urbanístic, transport o medi ambient", "correct": true },
      { "text": "Exclueixen completament el control de la Sindicatura de Comptes", "correct": false },
      { "text": "Només poden tenir una vigència màxima improrrogable d'un mes", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 12,
    "question": "Quina trampa d'examen és habitual respecte a la comunicació d'actes entre òrgans administratius diferents?",
    "answers": [
      { "text": "Creure que es pot utilitzar el correu postal ordinari com a mitjà principal i obligatori", "correct": false },
      { "text": "Pensar que les comunicacions electròniques no són obligatòries entre diferents administracions", "correct": true },
      { "text": "Suposar que els ajuntaments no poden comunicar-se mai amb la Generalitat de Catalunya", "correct": false },
      { "text": "Considerar que els registres electrònics no tenen validesa jurídica", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 13,
    "question": "Quin organisme o òrgan col·legiat aprova inicialment el pressupost de l'AMB com a eina de gestió i relació econòmica?",
    "answers": [
      { "text": "El Consell Metropolità", "correct": true },
      { "text": "El Parlament de Catalunya en ple", "correct": false },
      { "text": "La junta de personal funcionari", "correct": false },
      { "text": "El Tribunal Superior de Justícia", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 14,
    "question": "Quin és l'impacte de la integració de la Seu Electrònica de l'AMB amb les xarxes d'intercanvi de registres?",
    "answers": [
      { "text": "Facilitar la tramitació conjunta d'expedients i la remissió telemàtica de sol·licituds entre administracions", "correct": true },
      { "text": "Limitar el dret d'accés dels ciutadans als arxius municipals", "correct": false },
      { "text": "Evitar qualsevol control jurídic per part dels lletrats consistorials", "correct": false },
      { "text": "Suprimir la necessitat de publicar actes al Butlletí Oficial", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 15,
    "question": "Segons la normativa de procediment administratiu comú, quina és la conseqüència d'ometre absolutament el procediment legalment establert en un acte?",
    "answers": [
      { "text": "Es considera un acte merament irregular no invalidant", "correct": false },
      { "text": "És una causa de nul·litat de ple dret", "correct": true },
      { "text": "L'acte esdevé simplement anul·lable i pot ser convalidat en qualsevol termini", "correct": false },
      { "text": "No produeix cap efecte sobre la validesa de la resolució", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 16,
    "question": "En el marc de la cooperació interadministrativa, quin principi obliga a les administracions a ponderar els interessos públics generals i sectorials?",
    "answers": [
      { "text": "El principi de lleialtat institucional", "correct": true },
      { "text": "El principi de concurrència competitiva", "correct": false },
      { "text": "El principi de caixa única", "correct": false },
      { "text": "El principi de submissió al dret privat", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 17,
    "question": "Quina funció principal tenen els consorcis en l'estructura de gestió i relació de l'AMB?",
    "answers": [
      { "text": "Permetre la cooperació i el cofinançament de serveis públics de caràcter metropolità entre diverses administracions", "correct": true },
      { "text": "Substituir les funcions de la Intervenció General de l'Estat", "correct": false },
      { "text": "Emetre moneda de curs legal a l'àmbit local", "correct": false },
      { "text": "Gestionar exclusivament la fiscalitat privada de les empreses concessionàries", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 18,
    "question": "Quin paper juga el Registre Electrònic d'Apoderaments (REA) en les comunicacions administratives?",
    "answers": [
      { "text": "Permet inscriure i consultar les representacions conferides a tercers per relacionar-se electrònicament amb l'Administració", "correct": true },
      { "text": "Registra les sancions de trànsit imposades per la policia local", "correct": false },
      { "text": "Controla el pagament de tributs directes com l'IBI metropolità", "correct": false },
      { "text": "Emmagatzema els contractes laborals del personal de la Generalitat", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 19,
    "question": "Quina és la finalitat de les comissions mixtes de cooperació entre l'Administració de la Generalitat i l'AMB?",
    "answers": [
      { "text": "Coordinar l'exercici de competències concurrents i resoldre discrepàncies en matèria de serveis supramunicipals", "correct": true },
      { "text": "Aprovar els pressupostos generals dels partits polítics amb representació local", "correct": false },
      { "text": "Dirimir litigis laborals entre funcionaris de carrera i personal laboral", "correct": false },
      { "text": "Gestionar el transport de mercaderies per carretera a nivell estatal", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 20,
    "question": "Segons els principis de relació interadministrativa, davant una sol·licitud d'informes o dades entre administracions diferents:",
    "answers": [
      { "text": "S'ha de respondre en els terminis legalment establerts sota el principi d'assistència activa i col·laboració", "correct": true },
      { "text": "L'administració requerida pot ignorar la petició si no rep una contraprestació econòmica prèvia", "correct": false },
      { "text": "Només es pot tramitar a través de la via judicial contenciosa", "correct": false },
      { "text": "Està prohibit sol·licitar dades d'una altra administració sense autorització judicial", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 21,
    "question": "Quin tractament reben els defectes de forma en les comunicacions i actes administratius interadmistratius si no generen indefensió?",
    "answers": [
      { "text": "S'entenen com a irregularitats no invalidants que no afecten la validesa de l'actuació", "correct": true },
      { "text": "Comporten necessàriament la nul·litat de ple dret de tot l'expedient", "correct": false },
      { "text": "Exigeixen la repetició íntegra de tots els tràmits des de l'inici", "correct": false },
      { "text": "Donen lloc a la destitució immediata del funcionari responsable", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 22,
    "question": "En relació amb la utilització de mitjans electrònics, quin requisit tècnic és indispensable per assegurar la validesa de la comunicació entre administracions?",
    "answers": [
      { "text": "La compatibilitat i interoperabilitat dels sistemes i aplicacions emprats", "correct": true },
      { "text": "L'ús exclusiu de sistemes de missatgeria instantània comercial", "correct": false },
      { "text": "La signatura manuscrita escanejada en format d'imatge simple", "correct": false },
      { "text": "La publicació simultània en xarxes socials corporatives", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 23,
    "question": "Quin paper exerceix la Llei 26/2010 de règim jurídic i de procediment de les administracions públiques de Catalunya en l'àmbit metropolità?",
    "answers": [
      { "text": "Complementa i desenvolupa el marc de relacions, col·laboració i procediment aplicable als ens locals catalans", "correct": true },
      { "text": "Regula exclusivament el sistema tributari de l'Administració General de l'Estat", "correct": false },
      { "text": "Estableix el codi penal aplicable als funcionaris públics", "correct": false },
      { "text": "Deroga completament la Llei 40/2015 en tot el territori espanyol", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 24,
    "question": "Quina és la consequència jurídica si un òrgan administratiu incompleix el deure de col·laboració activa amb una altra administració pública?",
    "answers": [
      { "text": "Pot incórrer en responsabilitat institucional i en les exigències derivades de la violació de la lleialtat", "correct": true },
      { "text": "L'òrgan incomplidor passa a dependre automàticament de l'altra administració", "correct": false },
      { "text": "Es produeix la condonació de tots els deutes pressupostaris de l'ens", "correct": false },
      { "text": "L'acte dictat passa a ser un reglament executiu de caràcter general", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 25,
    "question": "Com s'integra l'AMB en els sistemes generals de comunicació de dades amb l'Administració de l'Estat?",
    "answers": [
      { "text": "Mitjançant passarel·les i nodes d'interoperabilitat homologats que connecten els registres i la seu electrònica", "correct": true },
      { "text": "Mitjançant l'enviament presencial de disquets informàtics mensuals", "correct": false },
      { "text": "A través de convenis de duanes estatals exclusius", "correct": false },
      { "text": "Utilitzant exclusivament el sistema de notificació postal de la xarxa d'oficines de correus", "correct": false }
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