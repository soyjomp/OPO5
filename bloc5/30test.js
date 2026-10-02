const TEST_ID = "30test.js"; 

const questions = [

 {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 1,
    "question": "Segons l'article 118 de la Llei 9/2017, de 8 de novembre, de Contractes del Sector Públic (LCSP), quin és el llindar màxim quantitatiu (sense IVA) per considerar un contracte d'obres com a contracte menor?",
    "answers": [
      { "text": "Inferior a 15.000 euros", "correct": false },
      { "text": "Inferior a 40.000 euros", "correct": true },
      { "text": "Igual o inferior a 50.000 euros IVA inclòs", "correct": false },
      { "text": "Inferior a 18.000 euros", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 2,
    "question": "Quin és el llindar màxim quantitatiu (sense IVA) establert per la LCSP per als contractes de serveis i subministraments perquè puguin tramitar-se com a contracte menor?",
    "answers": [
      { "text": "Inferior a 15.000 euros", "correct": true },
      { "text": "Inferior a 40.000 euros", "correct": false },
      { "text": "Inferior a 18.000 euros", "correct": false },
      { "text": "Inferior a 30.000 euros", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 3,
    "question": "Quina documentació mínima exigeix la tramitació simplificada d'un expedient de contracte menor segons la normativa de contractació pública?",
    "answers": [
      { "text": "Plecs de clàusules administratives particulars i tres ofertes de diferents proveïdors obligatòriament", "correct": false },
      { "text": "L'aprovació de la despesa i la incorporació de la factura corresponent (i el pressupost d'obra si escau)", "correct": true },
      { "text": "Un procediment obert simplificat amb publicitat al Diari Oficial de la Generalitat", "correct": false },
      { "text": "Informe jurídic previ de secretaria i fiscalització plena de legalitat per part del Tribunal de Comptes", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 4,
    "question": "Segons l'article 118.3 de la LCSP, com afecta la prohibició de fraccionament a la contractació menor?",
    "answers": [
      { "text": "Permet dividir els contractes lliurement sempre que cada fracció no superi el pressupost anual del departament", "correct": false },
      { "text": "No es pot fraccionar un contracte amb l'objecte de disminuir la seva quantia i eludir així els requisits de publicitat o el procediment d'adjudicació que correspongui", "correct": true },
      { "text": "Només està prohibit en contractes d'obres majors de 100.000 euros", "correct": false },
      { "text": "Permet fraccionar la despesa si compta amb l'autorització prèvia i expressa del Ple de la corporació", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 5,
    "question": "Quin límit addicional s'aplica pel que fa a la relació amb el mateix operador econòmic en els contractes menors de serveis i subministraments?",
    "answers": [
      { "text": "La suma de contractes adjudicats al mateix empresari no pot superar els 60.000 euros anuals", "correct": false },
      { "text": "La suma de contractes adjudicats al mateix empresari no pot superar els límits de serveis/subministraments (15.000€) en prestacions de naturalesa anàloga, excepte incidències imprevistes justificades", "correct": true },
      { "text": "Es poden adjudicar tants contractes menors com desitgi l'òrgan de contractació sense límit quantitatiu agregat", "correct": false },
      { "text": "El límit s'estableix en un màxim de tres contractes menors al mes per proveïdor", "correct": true }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 6,
    "question": "Quin és el principi general pel que fa a la forma dels contractes al sector públic d'acord amb l'article 37 de la LCSP?",
    "answers": [
      { "text": "Llibertat de forma, podent ser tant escrits com verbals segons acord de les parts", "correct": false },
      { "text": "La forma escrita obligatòria, estant radicalment prohibits els contractes verbals amb caràcter general", "correct": true },
      { "text": "La forma verbal per a quanties inferiors a 15.000 euros i escrita només per a obres majors", "correct": false },
      { "text": "L'obligatorietat de signatura electrònica avançada en escriptura pública davant notari", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 7,
    "question": "Quin efecte jurídic provoca la celebració d'un contracte de forma verbal a l'Administració Pública?",
    "answers": [
      { "text": "La mera irregularitat no invalidant subsanable en qualsevol moment", "correct": false },
      { "text": "L'anul·labilitat en el termini de quatre anys", "correct": false },
      { "text": "La nul·litat de ple dret del contracte (excepte en casos d'emergència previstos legalment)", "correct": true },
      { "text": "La convalidació automàtica en incorporar la factura al pressupost de l'exercici següent", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 8,
    "question": "Si es realitza una prestació sota un contracte verbal prohibit, quin mecanisme s'activa per gestionar el pagament de la prestació i evitar l'enriquiment injust de l'Administració?",
    "answers": [
      { "text": "Un procediment ordinari de licitació pública urgent amb concurrència diferida", "correct": false },
      { "text": "Un procediment de liquidació per restituir el valor de les coses o serveis prestats, sense perjudici de les responsabilitats disciplinàries o patrimonials als causants", "correct": true },
      { "text": "Una modificació pressupostària per transferència de crèdit entre capítols", "correct": false },
      { "text": "L'aprovació directa d'una subvenció de compensació per minimització de danys", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 9,
    "question": "Quina obligació de publicitat i transparència s'imposa legalment pel que fa als contractes menors adjudicats?",
    "answers": [
      { "text": "Publicació diària al Butlletí Oficial de l'Estat (BOE)", "correct": false },
      { "text": "Publicació al Perfil del Contractant almenys trimestralment, indicant objecte, import, durada i identitat de l'adjudicatari", "correct": true },
      { "text": "Només cal publicar-los en finalitzar l'exercici pressupostari a la memòria de gestió anual", "correct": false },
      { "text": "No requereixen cap tipus de publicitat en ser contractes menors", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 10,
    "question": "Existeix alguna excepció a l'obligació de publicar trimestralment els contractes menors al Perfil del Contractant?",
    "answers": [
      { "text": "Sí, aquells contractes menors el subministrament o serveis dels quals tinguin caràcter secret o reservat segons la legislació de seguretat", "correct": true },
      { "text": "No, cap contracte menor pot quedar exempt de publicació sota cap concepte", "correct": false },
      { "text": "Sí, tots els contractes menors inferiors a 3.000 euros", "correct": false },
      { "text": "Sí, aquells que s'hagin tramitat durant el mes d'agost per urgència estival", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 11,
    "question": "En relació amb els llindars econòmics dels contractes menors, quina afirmació és correctament aplicable respecte a l'IVA?",
    "answers": [
      { "text": "Els llindars de 40.000€ i 15.000€ inclouen obligatòriament l'impost sobre el valor afegit", "correct": false },
      { "text": "Els llindars quantitatius establerts per la LCSP s'entenen sense incloure l'IVA", "correct": true },
      { "text": "L'IVA s'aplica de forma addicional només si el contracte supera els límits fixats per la normativa europea", "correct": false },
      { "text": "Els contractes menors estan exempts de qualsevol tipus de tributació indirecta per imperatiu legal", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 12,
    "question": "Com gestiona l'Àrea Metropolitana de Barcelona (AMB) la publicitat dels seus contractes menors segons el seu portal corporatiu (amb.cat)?",
    "answers": [
      { "text": "A través del portal corporatiu amb.cat i de la seva Plataforma de Serveis de Contractació Pública (PSCP), publicant les relacions trimestrals detallades", "correct": true },
      { "text": "Mitjançant cartells físics exposats als taulers d'anuncis de cada municipi integrat", "correct": false },
      { "text": "Mitjançant l'enviament postal individualitzat a tots els ciutadans empadronats a l'àrea metropolitana", "correct": false },
      { "text": "Exclusivament a través de les xarxes socials institucionals de l'ens", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 13,
    "question": "Quina directriu interna acostumen a incloure les instruccions de contractació menor de l'AMB per assegurar l'eficiència i la bona gestió de fons públics?",
    "answers": [
      { "text": "Adjudicar directament el contracte al primer proveïdor que truqui a les oficines sense demanar pressupost previ", "correct": false },
      { "text": "Assegurar la pluralitat d'ofertes quan sigui possible, demanant pressupostos a diversos proveïdors per garantir concurrència no formal", "correct": true },
      { "text": "Delegar la selecció del proveïdor en una consultoria externa privada sense control intern", "correct": false },
      { "text": "Prioritzar sempre empreses de fora de l'àmbit metropolità per fomentar la competència global", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 14,
    "question": "Quina és la naturalesa jurídica de l'aprovació de la despesa en un contracte menor d'obres?",
    "answers": [
      { "text": "Un acte definitiu que exhaureix necessàriament la via administrativa davant el Tribunal Suprem", "correct": false },
      { "text": "Una fase de gestió pressupostària i comptable simplificada que habilita la despesa fins a 40.000€ (sense IVA)", "correct": true },
      { "text": "Un conveni col·lectiu subscrit amb la representació sindical del personal laboral", "correct": false },
      { "text": "Una disposició de caràcter general amb rang de llei autonòmica", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 15,
    "question": "Davant d'un examen tipus test de la AMB, si s'afirma que un contracte verbal per import de 200 euros és plenament vàlid per ser d'escassa quantia, com s'ha de qualificar aquesta afirmació?",
    "answers": [
      { "text": "Com a totalment certa perquè s'aplica el principi de lleialtat contractual civil", "correct": false },
      { "text": "Com a falsa, ja que la LCSP sanciona els contractes verbals amb la nul·litat de ple dret (llevat d'emergència), independentment de la quantia", "correct": true },
      { "text": "Com a certa només si compta amb l'autorització telefònica del Síndic de Greuges", "correct": false },
      { "text": "Com a certa si s'emet la factura electrònica posteriorment dins del mateix trimestre", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 16,
    "question": "Quin òrgans de l'AMB tenen la competència general per aprovar les despeses i disposar-ne dins dels límits pressupostaris establerts?",
    "answers": [
      { "text": "El President o el Ple de l'entitat, d'acord amb l'atribució de competències fixada per la normativa vigent", "correct": true },
      { "text": "Exclusivament la Intervenció General de la Generalitat de Catalunya", "correct": false },
      { "text": "El comitè d'empresa dels funcionaris de carrera de l'àrea metropolitana", "correct": false },
      { "text": "Els ciutadans mitjançant pressupostos participatius vinculants", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 17,
    "question": "Quina és la consequència de fragmentar artificialment un contracte de subministraments de 45.000 euros en tres contractes de 15.000 euros cadascun adjudicats al mateix proveïdor?",
    "answers": [
      { "text": "És una pràctica perfectament legal i recomanada per accelerar la gestió administrativa", "correct": false },
      { "text": "Incorre en una prohibició de fraccionament fraudulent (Art. 118.3 LCSP) destinada a eludir els procediments ordinaris de concurrència i publicitat", "correct": true },
      { "text": "Evoluciona automàticament cap a un contracte programa de caràcter plurianual", "correct": false },
      { "text": "Només genera una falta lleu de caràcter intern sense repercussió sobre la validesa dels actes", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 18,
    "question": "En relació amb els contractes menors, quina d'obertura de procediment de concurrència pública s'exigeix amb caràcter general?",
    "answers": [
      { "text": "Un anunci previ al Diari Oficial de la Unió Europea (DOUE)", "correct": true },
      { "text": "Un procediment obert amb un termini mínim de presentació d'ofertes de trenta dies", "correct": false },
      { "text": "Cap procediment de concurrència pública formal, en tractar-se justament d'una modalitat de contractació simplificada", "correct": false },
      { "text": "Una licitació electrònica restringida a un mínim de deu empreses homologades", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 19,
    "question": "Quin document o element esdevé indispensable per justificar i tramitar comptablement un contracte menor de subministraments un cop realitzada la despesa?",
    "answers": [
      { "text": "La factura corresponent emesa pel proveïdor d'acord amb la legislació fiscal i mercantil", "correct": true },
      { "text": "Una escriptura de constitució de societat anònima de capital públic", "correct": false },
      { "text": "Un informe d'auditoria externa emès per una empresa de l'Íbex 35", "correct": false },
      { "text": "Un certificat de suficiència lingüística de nivell C2 de català de l'adjudicatari", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 20,
    "question": "Quin paper juguen les instruccions internes de contractació de l'AMB respecte als límits quantitatius de la LCSP en els contractes menors?",
    "answers": [
      { "text": "Poden ampliar els límits legals de la llei estatal fins a duplicar-los segons convingui al govern local", "correct": false },
      { "text": "Poden establir límits inferiors o mesures de control addicionals i més rigoroses per garantir la transparència, però mai superar els topalls màxims fixats per la LCSP", "correct": true },
      { "text": "Deroguen completament la LCSP dins del territori de la conurbació barcelonina", "correct": false },
      { "text": "Són orientatives i no tenen cap mena de vinculació jurídica per als diferents serveis i gerències", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 21,
    "question": "Quina excepció recull la normativa de contractació pública respecte a la prohibició general de celebrar contractes verbals a l'Administració?",
    "answers": [
      { "text": "Els casos d'emergència o de necessitat urgent previstos legalment on s'actua de manera immediata", "correct": true },
      { "text": "Qualsevol contracte la quantia del qual no superi els 1.000 euros en festius", "correct": false },
      { "text": "Els encàrrecs a mitjans propis realitzats fora de l'horari d'oficina", "correct": false },
      { "text": "No existeix cap excepció possible sota cap circumstància", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 22,
    "question": "Quin és l'objectiu principal de la publicació trimestral dels contractes menors al Perfil del Contractant?",
    "answers": [
      { "text": "Cobrar una taxa administrativa a les empreses adjudicatàries per serveis de registre", "correct": false },
      { "text": "Garantir el control públic, fomentar la transparència i evitar la discrecionalitat excessiva o l'ús abusiu d'aquesta figura", "correct": true },
      { "text": "establir un rànquing competitiu de beneficis empresarials entre proveïdors metropolitans", "correct": false },
      { "text": "Complir un tràmit estadístic de caire optatiu sense repercussió jurídica", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 23,
    "question": "Si un departament de l'AMB encarrega verbalment la reparació urgent d'una canonada trencada que amenaça d'inundar una oficina pública, com s'ha de qualificar aquesta actuació inicial sota la LCSP?",
    "answers": [
      { "text": "Nul·la de ple dret sense cap opció de regularització posterior", "correct": false },
      { "text": "Valenta però constitutiva d'infracció penal directa per malversació", "correct": false },
      { "text": "Emparada excepcionalment sota el règim d'emergència o actuació immediata per catàstrofe o danys imminent, tot i la irregularitat de la forma verbal inicial", "correct": true },
      { "text": "Insubstancial perquè les obres menors de fontaneria no estan subjectes a la LCSP", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 24,
    "question": "Quina dada s'ha d'incloure obligatòriament en les relacions trimestrals de contractes menors publicades per l'AMB al web corporatiu?",
    "answers": [
      { "text": "L'objecte, l'import, la durada i la identitat de l'adjudicatari", "correct": true },
      { "text": "El nombre de treballadors en nòmina de l'empresa proveïdora i la seva situació fiscal detallada", "correct": false },
      { "text": "El currículum vitae dels administradors de l'empresa contractista", "correct": false },
      { "text": "La declaració de la renda personal de l'empresari individual", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 25,
    "question": "Quin risc principal pretén combatre la limitació que impedeix adjudicar successius contractes menors de naturalesa anàloga al mateix operador econòmic unçat el llindar legal?",
    "answers": [
      { "text": "L'encobriment de contractes majors o serveis continuats mitjançant l'ús fraudulent i fraccionat de múltiples contractes menors successius", "correct": true },
      { "text": "L'augment excessiu de la inflació en els preus del sector públic local", "correct": false },
      { "text": "La pèrdua d'identitat corporativa dels ens metropolitans", "correct": false },
      { "text": "L'obligació de contractar exclusivament personal funcionari interí", "correct": false }
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