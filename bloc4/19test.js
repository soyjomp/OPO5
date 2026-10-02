const TEST_ID = "19test.js"; 

const questions = [

 {
    "theme": "Bloc IV (Temari Específic) - Tema 19: Funcionament dels òrgans de govern de les administracions. Òrgans unipersonals i òrgans col·legiats",
    "number": 1,
    "question": "Segons el règim jurídic bàsic dels òrgans col·legiats recollit a la Llei 40/2015 (LRJSP), quin és el quòrum mínim de constitució vàlida d'un òrgan col·legiat en segona convocatòria?",
    "answers": [
      { "text": "El President, el Secretari i la meitat almenys dels seus membres", "correct": false },
      { "text": "El President, el Secretari i almenys tres dels seus membres", "correct": true },
      { "text": "Un terç dels membres, incloent necessàriament el President i el Secretari", "correct": false },
      { "text": "La presència de la totalitat dels membres en qualsevol cas de segona convocatòria", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 19: Funcionament dels òrgans de govern de les administracions. Òrgans unipersonals i òrgans col·legiats",
    "number": 2,
    "question": "Quin tipus de valor o vot atorga l'ordenament jurídic al President d'un òrgan col·legiat en cas d'empat en les votacions?",
    "answers": [
      { "text": "Un vot doble ordinari que computa com a dos vots en tots els escrutinis inicials", "correct": false },
      { "text": "Un vot de qualitat o diriment que serveix exclusivament per desempatar", "correct": true },
      { "text": "Una facultat de veto directe sobre l'acord adoptat per la resta de membres", "correct": false },
      { "text": "Cap vot addicional, ja que en cas d'empat l'acord es considera rebutjat automàticament", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 19: Funcionament dels òrgans de govern de les administracions. Òrgans unipersonals i òrgans col·legiats",
    "number": 3,
    "question": "Sota quina condició específica es poden prendre acords sobre assumptes no inclosos prèviament a l'ordre del dia d'una sessió d'un òrgan col·legiat?",
    "answers": [
      { "text": "No es poden prendre acords sota cap concepte si no consten a l'ordre del dia inicial", "correct": false },
      { "text": "Es requereix la prèvia declaració d'urgència mitjançant vot favorable de la majoria dels membres presents", "correct": true },
      { "text": "Només si ho autoritza expressament i de forma prèvia el Departament de Governació", "correct": false },
      { "text": "Basta amb la decisió unilateral del President al començament de la reunió", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 19: Funcionament dels òrgans de govern de les administracions. Òrgans unipersonals i òrgans col·legiats",
    "number": 4,
    "question": "En relació amb els òrgans de govern de l'Àrea Metropolitana de Barcelona (AMB) segons la Llei 31/2010, quin òrgan col·legiat ostenta el màxim govern i representació?",
    "answers": [
      { "text": "La Junta de Govern de l'AMB", "correct": false },
      { "text": "El Consell Metropolità", "correct": true },
      { "text": "La Comissió Especial de Comptes", "correct": false },
      { "text": "La Sindicatura de Greuges Metropolitana", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 19: Funcionament dels òrgans de govern de les administracions. Òrgans unipersonals i òrgans col·legiats",
    "number": 5,
    "question": "Quina característica defineix principalment els anomenats òrgans unipersonals de govern en l'àmbit de l'administració pública?",
    "answers": [
      { "text": "Estan integrats exclusivament per tres o més persones que deliberen de forma col·lectiva", "correct": false },
      { "text": "Estan integrats per una sola persona física que exerceix funcions de direcció, representació o gestió executiva", "correct": true },
      { "text": "Només poden dictar actes de tràmit no qualificats sense cap mena d'efecte executiu directe", "correct": false },
      { "text": "Requereixen una convocatòria prèvia amb un mínim de dos dies hàbils per adoptar resolucions", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 19: Funcionament dels òrgans de govern de les administracions. Òrgans unipersonals i òrgans col·legiats",
    "number": 6,
    "question": "Segons la regulació general dels òrgans col·legiats, quin element és obligatori que figuri sempre entre els components necessaris de qualsevol òrgan d'aquesta naturalesa?",
    "answers": [
      { "text": "Un Tresorer i un Interventor delegat", "correct": false },
      { "text": "Un President/a i un Secretari/a", "correct": true },
      { "text": "Un mínim de deu vocals representatius dels sectors socials", "correct": false },
      { "text": "Un portaveu de cada grup polític municipal representat", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 19: Funcionament dels òrgans de govern de les administracions. Òrgans unipersonals i òrgans col·legiats",
    "number": 7,
    "question": "Quin document públic reflecteix fidelment el desenvolupament de les sessions d'un òrgan col·legiat, incloent l'assistència, l'ordre del dia, les deliberacions principals i els acords adoptats?",
    "answers": [
      { "text": "El pressupost general consolidat de l'entitat", "correct": false },
      { "text": "L'acta de la sessió signada pel Secretari amb el vistiplau del President", "correct": true },
      { "text": "La memòria econòmica i financera de la Intervenció", "correct": false },
      { "text": "El certificat de conformitat de les ordenances fiscals", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 19: Funcionament dels òrgans de govern de les administracions. Òrgans unipersonals i òrgans col·legiats",
    "number": 8,
    "question": "Pel que fa al dret i al deure de vot dels membres d'un òrgan col·legiat, quin principi regeix amb caràcter general?",
    "answers": [
      { "text": "Els membres poden abstenir-se lliurement en qualsevol votació sense justificació prèvia", "correct": false },
      { "text": "El vot és nominal i no es poden abstenir els membres tret de l'existència d'un conflicte d'interessos legal", "correct": true },
      { "text": "Totes les votacions s'han de realitzar mitjançant una urna tancada i de forma estrictament secreta", "correct": false },
      { "text": "Els vots particulars contraris a l'acord no s'han de reflectir mai a l'acta", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 19: Funcionament dels òrgans de govern de les administracions. Òrgans unipersonals i òrgans col·legiats",
    "number": 9,
    "question": "En relació amb la Junta de Govern de l'Àrea Metropolitana de Barcelona (AMB), quina naturalesa orgànica té principalment?",
    "answers": [
      { "text": "És un òrgan unipersonal de gestió exclusiva del personal laboral", "correct": false },
      { "text": "És un òrgan executiu col·legiat de l'administració metropolitana", "correct": true },
      { "text": "És un organisme autònom comercial de caràcter privat", "correct": false },
      { "text": "És un òrgan consultiu no vinculant dependent de la Generalitat de Catalunya", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 19: Funcionament dels òrgans de govern de les administracions. Òrgans unipersonals i òrgans col·legiats",
    "number": 10,
    "question": "Quin és el termini mínim general d'antelació establert a l'Administració General de l'Estat per convocar les sessions ordinàries d'un òrgan col·legiat, llevat que normativa específica prevegi una altra cosa?",
    "answers": [
      { "text": "Un mínim de 2 dies hàbils", "correct": true },
      { "text": "Exactament 24 hores naturals", "correct": false },
      { "text": "Un mínim de 15 dies naturals", "correct": false },
      { "text": "Un mes abans de la celebració del ple", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 19: Funcionament dels òrgans de govern de les administracions. Òrgans unipersonals i òrgans col·legiats",
    "number": 11,
    "question": "Quin òrgan unipersonal ostenta la representació màxima i la direcció de l'administració de l'Àrea Metropolitana de Barcelona (AMB)?",
    "answers": [
      { "text": "El Síndic de Greuges de Catalunya", "correct": false },
      { "text": "El President/a de l'AMB", "correct": true },
      { "text": "El Secretari General de l'ajuntament de Barcelona", "correct": false },
      { "text": "El director de la Sindicatura de Comptes", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 19: Funcionament dels òrgans de govern de les administracions. Òrgans unipersonals i òrgans col·legiats",
    "number": 12,
    "question": "Com s'adopten generalment els acords en els òrgans col·legiats de les administracions públiques segons el règim jurídic aplicable?",
    "answers": [
      { "text": "Per unanimitat absoluta de tots els membres inscrits al cens de l'ens", "correct": false },
      { "text": "Per majoria de vots dels membres presents", "correct": true },
      { "text": "Necessàriament per les tres quartes parts dels vots de la corporació", "correct": false },
      { "text": "Per decisió directa i exclusiva del Secretari de l'òrgan", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 19: Funcionament dels òrgans de govern de les administracions. Òrgans unipersonals i òrgans col·legiats",
    "number": 13,
    "question": "Quina condició requereix el quòrum de constitució d'un òrgan col·legiat en primera convocatòria respecte als seus membres?",
    "answers": [
      { "text": "La presència del President, el Secretari i almenys la meitat (50%) dels seus membres", "correct": true },
      { "text": "La presència de tots i cadascun dels membres titulars sense cap excepció", "correct": false },
      { "text": "Un mínim fix de tres membres qualssevol sense necessitat del President", "correct": false },
      { "text": "La presència única del President i de l'Interventor de l'ens", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 19: Funcionament dels òrgans de govern de les administracions. Òrgans unipersonals i òrgans col·legiats",
    "number": 14,
    "question": "Quin principi relatiu a la publicitat institucional garanteix el Portal de Transparència de l'AMB respecte als òrgans col·legiats?",
    "answers": [
      { "text": "La publicació sistemàtica de les convocatòries, ordres del dia, actes i acords adoptats", "correct": true },
      { "text": "La reserva exclusiva de les deliberacions a un cercle tancat de funcionaris de la corporació", "correct": false },
      { "text": "La prohibició de difondre cap mena d'acord adoptat per la Junta de Govern", "correct": false },
      { "text": "La publicació únicament a petició judicial individualitzada", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 19: Funcionament dels òrgans de govern de les administracions. Òrgans unipersonals i òrgans col·legiats",
    "number": 15,
    "question": "Entre els exemples següents, quin constitueix un clar exponent d'òrgan unipersonal en l'administració local o supramunicipal?",
    "answers": [
      { "text": "El Ple d'un ajuntament", "correct": false },
      { "text": "El Consell Metropolità", "correct": true },
      { "text": "La Junta de Govern Local", "correct": false },
      { "text": "La Comissió Informativa d'Urbanisme", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 19: Funcionament dels òrgans de govern de les administracions. Òrgans unipersonals i òrgans col·legiats",
    "number": 16,
    "question": "Quin és el format habitual en què s'exterioritzen formalment les decisions preses per un òrgan unipersonal com ara un Alcalde o un President d'administració?",
    "answers": [
      { "text": "Decrets, resolucions o ordres segons el rang competencial", "correct": true },
      { "text": "Actes de sessió plenària amb votació nominal", "correct": false },
      { "text": "Acords col·lectius de comissió informativa", "correct": false },
      { "text": "Dictàmens consultius de la comissió de comptes", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 19: Funcionament dels òrgans de govern de les administracions. Òrgans unipersonals i òrgans col·legiats",
    "number": 17,
    "question": "Quina funció té assignada el Secretari dins de l'estructura d'un òrgan col·legiat pel que fa a l'aprovació i signatura de l'acta?",
    "answers": [
      { "text": "Redactar i signar l'acta amb el vistiplau del President", "correct": true },
      { "text": "Emetre un vot de qualitat diriment en cas d'empat numèric", "correct": false },
      { "text": "Modificar unilateralment el contingut dels acords plenaris sense supervisió", "correct": false },
      { "text": "Vetar l'ordre del dia proposat per la presidència", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 19: Funcionament dels òrgans de govern de les administracions. Òrgans unipersonals i òrgans col·legiats",
    "number": 18,
    "question": "Com s'integra la composició del Consell Metropolità de l'AMB quant a la representació dels municipis?",
    "answers": [
      { "text": "Únicament pels alcaldes dels 36 municipis sense cap conseller addicional", "correct": false },
      { "text": " pels alcaldes dels 36 municipis i consellers metropolitans designats de forma proporcional", "correct": true },
      { "text": "Per designació directa de la Generalitat de Catalunya sense participació local", "correct": false },
      { "text": "Per un nombre fix de cinc representants escollits per sorteig públic", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 19: Funcionament dels òrgans de govern de les administracions. Òrgans unipersonals i òrgans col·legiats",
    "number": 19,
    "question": "Quina afirmació és correcta respecte a la possibilitat que un òrgan col·legiat declari executius els seus acords abans de l'aprovació formal de l'acta?",
    "answers": [
      { "text": "Està totalment prohibit sota pena de nul·litat de ple dret en tots els casos", "correct": false },
      { "text": "Es pot fer si ho preveu expressament el mateix òrgan en els seus acords", "correct": true },
      { "text": "Només es permet si ho autoritza prèviament el Consell de Garanties Estatutàries", "correct": false },
      { "text": "Requereix necessàriament la convalidació posterior del jutge contenciós", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 19: Funcionament dels òrgans de govern de les administracions. Òrgans unipersonals i òrgans col·legiats",
    "number": 20,
    "question": "Quin requisit mínim de nombre de persones exigeix la normativa de règim jurídic del sector públic per considerar que ens trobem davant d'un òrgan col·legiat?",
    "answers": [
      { "text": "Una sola persona física amb caràcter executiu", "correct": false },
      { "text": "Tres o més persones", "correct": true },
      { "text": "Exactament deu membres titulars", "correct": false },
      { "text": "Un mínim de vint vocals representatius", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 19: Funcionament dels òrgans de govern de les administracions. Òrgans unipersonals i òrgans col·legiats",
    "number": 21,
    "question": "Quina és la naturalesa de la responsabilitat d'un òrgan unipersonal pel que fa a la gestió del seu àmbit d'actuació?",
    "answers": [
      { "text": "És una responsabilitat directa de la gestió encomanada", "correct": true },
      { "text": "Està exempt de qualsevol tipus de control jurídic o comptable", "correct": false },
      { "text": "Es dilueix col·lectivament entre tots els ciutadans del municipi", "correct": false },
      { "text": "Depèn exclusivament del vot favorable de l'oposició", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 19: Funcionament dels òrgans de govern de les administracions. Òrgans unipersonals i òrgans col·legiats",
    "number": 22,
    "question": "Quin document d'avís s'ha d'acompanyar obligatòriament a la convocatòria d'un òrgan col·legiat perquè els membres coneguin prèviament els assumptes que s'hi tractaran?",
    "answers": [
      { "text": "L'ordre del dia", "correct": true },
      { "text": "El balanç de tresoreria tancat a trenta de juny", "correct": false },
      { "text": "La liquidació definitiva del pressupost de l'exercici anterior", "correct": false },
      { "text": "El registre de factures pendents de pagament", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 19: Funcionament dels òrgans de govern de les administracions. Òrgans unipersonals i òrgans col·legiats",
    "number": 23,
    "question": "Quina trampa o error freqüent s'ha d'evitar en relació amb el vot de qualitat del President d'un òrgan col·legiat en cas d'empat?",
    "answers": [
      { "text": "Creure que el President disposa de dos vots ordinaris o d'un vot que compta doble des de l'inici", "correct": true },
      { "text": "Pensar que el vot de qualitat serveix per aprovar pressupostos sense quòrum", "correct": false },
      { "text": "Assumir que el vot del President no té cap mena de validesa jurídica", "correct": false },
      { "text": "Considerar que el vot diriment s'aplica només en les sessions extraordinàries", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 19: Funcionament dels òrgans de govern de les administracions. Òrgans unipersonals i òrgans col·legiats",
    "number": 24,
    "question": "En el marc de l'organització supramunicipal de l'AMB, quina funció principal compleixen els òrgans de govern col·legiats i unipersonals coordinadament?",
    "answers": [
      { "text": "Garantir l'exercici eficaç de les competències metropolitanes i la prestació dels serveis públics supramunicipals", "correct": true },
      { "text": "Substituir completament les funcions de tots els ajuntaments de Catalunya", "correct": false },
      { "text": "Gestionar exclusivament la recaptació d'impostos estatals de caràcter privat", "correct": false },
      { "text": "Limitar l'autonomia local de cada municipi integrant sense cap mena de consens", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 19: Funcionament dels òrgans de govern de les administracions. Òrgans unipersonals i òrgans col·legiats",
    "number": 25,
    "question": "Quan s'aprova l'acta d'una sessió anterior d'un òrgan col·legiat segons la pràctica administrativa habitual?",
    "answers": [
      { "text": "En la mateixa sessió o en la sessió següent", "correct": true },
      { "text": "Un cop transcorreguts exactament cinc anys des de la celebració", "correct": false },
      { "text": "Únicament al final de l'exercici pressupostari abans del dia u de gener", "correct": false },
      { "text": "Abans de realitzar qualsevol tipus de convocatòria extraordinària d'urgència", "correct": false }
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