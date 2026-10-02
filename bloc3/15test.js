const TEST_ID = "15test.js"; 

const questions = [

 {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 1,
    "question": "Segons la Llei 39/2015 i el model d'atenció ciutadana, quin efecte jurídic principal té la presentació d'una queixa o suggeriment a través de les bústies d'atenció de l'AMB?",
    "answers": [
      { "text": "Interromp els terminis establerts per interposar recursos administratius o contenciosos", "correct": false },
      { "text": "Constitueix un tràmit previ i obligatori abans d'exercir accions legals contra l'entitat", "correct": false },
      { "text": "No té naturalesa de recurs administratiu ni paralitza els terminis de impugnació, essent només informativa", "correct": true },
      { "text": "Obre de manera automàtica un expedient sancionador contra el servei afectat", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 2,
    "question": "Pel que fa a la recepció de documents a les oficines de registre de l'Àrea Metropolitana de Barcelona (AMB), quina afirmació s'ajusta a la Llei 39/2015?",
    "answers": [
      { "text": "Només poden admetre escrits i sol·licituds que estiguin estrictament adreçats als òrgans propis de l'AMB", "correct": false },
      { "text": "Estan obligades a recepcionar i digitalitzar qualsevol sol·licitud adreçada a qualsevol administració pública", "correct": true },
      { "text": "Únicament registren documentació en suport paper si prové de municipis integrants de la conurbació", "correct": false },
      { "text": "Exigeixen la concurrència d'un representant legal acreditat per a qualsevol tipus de registre telemàtic", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 3,
    "question": "En el context de la multicanalitat a l'administració pública, quina caracterització defineix correctament el canal electrònic o telemàtic?",
    "answers": [
      { "text": "Garanteix l'atenció personalitzada presencial només durant els dies laborables de matí", "correct": false },
      { "text": "Ofereix operativitat continuada (24 hores, 365 dies) mitjançant la Seu Electrònica i identificació digital segura", "correct": true },
      { "text": "Substitueix completament i de forma excloent el registre general d'entrada en suport paper per a tots els col·lectius", "correct": false },
      { "text": "Exclou qualsevol interacció relacionada amb el pagament de taxes o tributs metropolitans", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 4,
    "question": "Quina és la naturalesa jurídica de les Cartes de Serveis en l'àmbit de la gestió de la qualitat a l'atenció ciutadana?",
    "answers": [
      { "text": "Normes reglamentàries d'obligat compliment amb rang de llei aprovades pel Ple", "correct": false },
      { "text": "Instruments de declaració d'intencions i compromisos de qualitat assumits davant la ciutadania", "correct": true },
      { "text": "Contractes programes subscrits directament amb el sector privat per a la gestió de call centers", "correct": false },
      { "text": "Resolucions singulars de caràcter sancionador per incompliment de terminis d'expedients", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 5,
    "question": "Pel que fa a les competències de l'AMB i l'atenció a la ciutadania, quin àmbit material NO correspon a la gestió directa dels serveis metropolitans de l'ens?",
    "answers": [
      { "text": "El transport públic col·lectiu i la mobilitat metropolitana", "correct": false },
      { "text": "La gestió i recaptació de l'Impost sobre la Renda de les Persones Físiques (IRPF)", "correct": true },
      { "text": "El cicle integral del medi ambient, sanejament i gestió de platges", "correct": false },
      { "text": "La planificació urbanística metropolitana i la gestió d'ajuts a l'habitatge", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 6,
    "question": "Quin paper desenvolupa el personal de les OAC respecte a la ciutadania que manca de mitjans electrònics adequats?",
    "answers": [
      { "text": "Els denega l'accés al registre obligant-los a acudir a una gestoria privada", "correct": false },
      { "text": "Els ofereix assistència en l'ús de mitjans electrònics i obtenció d'identificació digital", "correct": true },
      { "text": "Efectua la tramitació dels seus recursos per via ordinària sense suport informàtic", "correct": false },
      { "text": "Resol definitivament els expedients d'urbanisme i llicències de forma immediata", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 7,
    "question": "Segons els principis de govern obert i transparència aplicats a l'atenció ciutadana, quin objectiu persegueix la simplificació de tràmits?",
    "answers": [
      { "text": "Augmentar la burocràcia interna per garantir major control jeràrquic", "correct": false },
      { "text": "Apropar els serveis públics, reduir càrregues administratives i garantir el dret a una bona administració", "correct": true },
      { "text": "Eliminar completament qualsevol tipus de registre documental previ", "correct": false },
      { "text": "Limitar el dret d'accés a la informació pública exclusivament a les entitats col·laboradores", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 8,
    "question": "Quin element és indispensable per dur a terme tràmits telemàtics amb plenes garanties jurídiques a la Seu Electrònica de l'AMB?",
    "answers": [
      { "text": "La presència física d'un funcionari habilitat de l'ajuntament de residència", "correct": false },
      { "text": "Un sistema d'identificació digital segur acceptat (com idCAT, Cl@ve o certificat electrònic)", "correct": true },
      { "text": "L'enviament previ d'un fax amb signatura hològrafa compulsada", "correct": false },
      { "text": "La superació d'una entrevista prèvia de validació telefònica", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 9,
    "question": "Quin és el propòsit principal de la xarxa SARA en relació amb els sistemes de registre de les administracions públiques?",
    "answers": [
      { "text": "Permetre la interoperabilitat i interconnexió segura per al traspàs de registres entre administracions", "correct": true },
      { "text": "Gestionar el pressupost ordinari i la tresoreria centralitzada de les entitats locals", "correct": false },
      { "text": "establir les tarifes oficials del transport públic a l'àrea metropolitana", "correct": false },
      { "text": "Coordinar les inspeccions de tributs locals i recaptació executiva", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 10,
    "question": "Quina funció específica exerceixen les oficines d'atenció pel que fa a l'estat dels expedients en curs?",
    "answers": [
      { "text": "Informació i orientació general als interessats sobre la situació i tramitació dels procediments", "correct": true },
      { "text": "Modificació directa dels terminis d'resolució establerts per llei", "correct": false },
      { "text": "Dictar la resolució definitiva del fons de l'assumpte per delegació permanent", "correct": false },
      { "text": "Resoldre els recursos d'alçada interposats contra els òrgans superiors", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 11,
    "question": "Com s'estructura principalment l'atenció ciutadana moderna en el marc de les administracions supramunicipals com l'AMB?",
    "answers": [
      { "text": "Mitjançant un model unificat basat en la multicanalitat (presencial, telefònica i telemàtica)", "correct": true },
      { "text": "Exclusivament a través de finestres de suport en paper sense suport informàtic", "correct": false },
      { "text": "Mitjançant agents comercials externs contractats sense vinculació administrativa", "correct": false },
      { "text": "Només mitjançant bústies de suggeriments no vinculants", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 12,
    "question": "Quin tractament reben les consultes i dubtes ràpids formulats a través del canal telefònic o centres de trucades especialitzats?",
    "answers": [
      { "text": "S'assimilen a un recurs contenciós administratiu formal", "correct": false },
      { "text": "Serveixen per a l'assessorament i orientació immediata sense necessitat de desplaçament", "correct": true },
      { "text": "Generen obligatòriament la liquidació de taxes de tramitació telefònica", "correct": false },
      { "text": "Queden exclosos de qualsevol registre o control de qualitat", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 13,
    "question": "Quina premissa cal tenir en compte en relació amb la presentació de documents davant d'una OAC segons la Llei 39/2015 per evitar errors d'examen?",
    "answers": [
      { "text": "L'oficina pot rebutjar documents adreçats a comunitats autònomes diferents de la pròpia", "correct": false },
      { "text": "L'oficina està obligada a registrar i cursar documentació adreçada a qualsevol administració pública integrada al sistema de registre", "correct": true },
      { "text": "Només s'admeten documents si es presenten en horari de tarda", "correct": false },
      { "text": "La presentació perd validesa si no s'acompanya de segell físic en paper", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 14,
    "question": "Quin és l'objectiu de la implementació de sistemes de cita prèvia en el canal presencial de les OAC?",
    "answers": [
      { "text": "Limitar l'accés de la ciutadania als serveis públics essencials", "correct": false },
      { "text": "Optimitzar la gestió de cues, ordenar els fluxos de persones i garantir una atenció personalitzada eficient", "correct": true },
      { "text": "Evitar qualsevol tipus de registre documental manual", "correct": false },
      { "text": "Cobrar una taxa prèvia per la reserva del torn d'atenció", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 15,
    "question": "Quina relació existeix entre les oficines de registre i el concepte de finestreta única?",
    "answers": [
      { "text": "Representen el punt centralitzat d'interacció on la ciutadania pot relacionar-se de manera simplificada amb l'administració", "correct": true },
      { "text": "Constitueixen un òrgan judicial especialitzat en la revisió d'actes nuls", "correct": false },
      { "text": "Són entitats mercantils de capital íntegrament privat adscrites a l'AMB", "correct": false },
      { "text": "Designen un sistema de contractació menor exclusiu per a obres públiques", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 16,
    "question": "Quin tractament normatiu reben les bústies de suggeriments i queixes pel que fa a l'obligació de resposta per part de l'administració?",
    "answers": [
      { "text": "Existeix l'obligació d'emetre una contestació motivada dins dels terminis normatius establerts", "correct": true },
      { "text": "Són respostes discrecionalment només quan l'òrgan ho considera oportú sense límit temporal", "correct": false },
      { "text": "Es converteixen automàticament en recursos extraordinaris de revisió", "correct": false },
      { "text": "Requereixen necessàriament la publicació del cas al Butlletí Oficial de la Província", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 17,
    "question": "Quin impacte té la digitalització dels registres en la relació entre la ciutadania i l'AMB?",
    "answers": [
      { "text": "Elimina la necessitat de complir amb els requisits essencials dels procediments", "correct": false },
      { "text": "Facilita la presentació immediata d'escrits i la consulta de l'estat dels tràmits amb seguretat jurídica", "correct": true },
      { "text": "Restringeix l'accés a la informació pública als dies festius", "correct": false },
      { "text": "Invalida qualsevol acte administratiu realitzat de forma presencial", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 18,
    "question": "Quina és una de les finalitats principals recollides en les Cartes de Serveis d'una administració pública?",
    "answers": [
      { "text": "Establir els nivells de qualitat objectius i compromisos de rendiment exigibles en la prestació als ciutadans", "correct": true },
      { "text": "Fixar les escales retributives del personal funcionari de categoria C1", "correct": false },
      { "text": "Modificar el règim de competències delegades del Ple de la corporació", "correct": false },
      { "text": "Regular el procediment d'aprovació del pressupost general de l'ens", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 19,
    "question": "En relació amb l'assistència en l'ús de mitjans electrònics a l'OAC, quina actuació està permesa als funcionaris habilitats?",
    "answers": [
      { "text": "Signar en nom del ciutadà qualsevol document sense el seu consentiment previ", "correct": false },
      { "text": "Assistir en la identificació i signatura electrònica quan la persona interessada ho sol·liciti", "correct": true },
      { "text": "Modificar directament el contingut de les instàncies un cop registrades", "correct": false },
      { "text": "Rebutjar la tramitació si l'usuari utilitza un certificat digital vàlid", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 20,
    "question": "Quin principi regeix la distribució de canals d'atenció per assegurar que cap ciutadà quedi exclòs per motius digitals?",
    "answers": [
      { "text": "El principi d'accessibilitat universal i multicanalitat integrada", "correct": true },
      { "text": "El principi d'exclusivitat telemàtica obligatòria", "correct": false },
      { "text": "El principi de restricció presencial automàtica", "correct": false },
      { "text": "El principi de supressió del servei telefònic d'atenció", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 21,
    "question": "Quina funció compleix el registre de documents en una OAC pel que fa al còmput de terminis dels procediments?",
    "answers": [
      { "text": "Deixa constància fefaent de la data i hora de presentació de sol·licituds als efectes de computar terminis legals", "correct": true },
      { "text": "Amplia de manera automàtica qualsevol termini d'interposició de recursos en trenta dies", "correct": false },
      { "text": "Interromp de forma permanent la caducitat de tots els expedients en tramitació", "correct": false },
      { "text": "Convalida els vicis de nul·litat de ple dret dels actes administratius", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 22,
    "question": "Quin és el marc normatiu estatal bàsic de referència que regula de manera general el procediment administratiu comú i el règim de les oficines de registre?",
    "answers": [
      { "text": "La Llei 39/2015 i la Llei 40/2015", "correct": true },
      { "text": "La Llei reguladora de les hisendes locals (TRLRHL)", "correct": false },
      { "text": "La Llei de l'Àrea Metropolitana de Barcelona (Llei 31/2010)", "correct": false },
      { "text": "La Llei d'estabilitat pressupostària i sostenibilitat financera", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 23,
    "question": "Com s'integra l'atenció ciutadana de l'AMB en relació amb els 36 municipis que formen la conurbació metropolitana?",
    "answers": [
      { "text": "Mitjançant serveis coordinats per apropar la gestió de competències metropolitanes a la ciutadania", "correct": true },
      { "text": "Assumint de manera excloent totes les competències municipals de cada ajuntament", "correct": false },
      { "text": "Utilitzant exclusivament el canal postal tradicional per a qualsevol comunicació", "correct": false },
      { "text": "Delegant la totalitat del registre en entitats privades externes", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 24,
    "question": "Quina característica defineix la funció d'orientació general exercida per les OAC davant de dubtes de procediment?",
    "answers": [
      { "text": "Proporciona assistència orientativa i informativa sense que això constitueixi un assessorament jurídic vinculant", "correct": true },
      { "text": "Efectua la defensa lletrada d'ofici dels ciutadans davant dels tribunals contenciosos", "correct": false },
      { "text": "Modifica de forma unilateral les bases de les convocatòries públiques", "correct": false },
      { "text": "Emet sentències fermes d'obligatori compliment per a les parts", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 25,
    "question": "Quin objectiu principal persegueix l'avaluació de la qualitat i la gestió de queixes en el model d'atenció ciutadana de l'administració?",
    "answers": [
      { "text": "La millora contínua dels serveis públics i l'adaptació a les necessitats reals de la ciutadania", "correct": true },
      { "text": "La imposició de sancions econòmiques a tots els usuaris que emetin suggeriments", "correct": false },
      { "text": "La publicació de dades personals reservades dels reclamants al BOP", "correct": false },
      { "text": "La supressió total dels canals presencials d'atenció", "correct": false }
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