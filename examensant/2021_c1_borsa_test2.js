const TEST_ID = "2021_c1_borsa_test2"; 

const questions = [

 {
    theme: "2026; AMB C1",
    question: "L’Àrea Metropolitana de Barcelona, d’acord amb la Llei 31/2010, de 3 d’agost, no té competència en:",
    number: 1,
    answers: [
      { text: "Urbanisme.", correct: false },
      { text: "Sanitat", correct: true },
      { text: "Medi ambient.", correct: false },
      { text: "Mobilitat.", correct: false }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "La Junta de Govern de l’Àrea Metropolitana de Barcelona:",
    number: 2,
    answers: [
      { text: "Assisteix al President de l’Àrea Metropolitana de Barcelona", correct: true },
      { text: "Està integrada per tots els alcaldes de cada municipi de l’àmbit metropolità i tots els regidors elegits pels municipis.", correct: false },
      { text: "Examina i estudia els comptes de l’AMB.", correct: false },
      { text: "Dirigeix el govern i l’administració metropolitans.", correct: false }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "Quin d’aquests municipis NO forma part de l’AMB:",
    number: 3,
    answers: [
      { text: "Sant Vicenç dels Horts", correct: false },
      { text: "Castelldefels", correct: false },
      { text: "El Prat de Llobregat", correct: false },
      { text: "Vilassar de Mar", correct: true }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "Segons la Llei General Pressupostària (LGP), després del compliment dels tràmits establerts, l’acte mitjançant el quan s’acorda la realització de la despesa prèviament aprovada, per un import determinat o determinable rep el nom de:",
    number: 4,
    answers: [
      { text: "Ordenació del pagament", correct: false },
      { text: "Compromís de la despesa", correct: true },
      { text: "Aprovació de la despesa", correct: false },
      { text: "Reconeixement de l’obligació", correct: false }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "Les entitats locals elaboraran i aprovaran anualment un pressupost en què s’hi integrarà:",
    number: 5,
    answers: [
      { text: "El pressupost de la mateixa entitat.", correct: false },
      { text: "Els pressupostos dels organismes autònoms que en depenguin.", correct: false },
      { text: "Els estats de previsió de despeses i ingressos de les societats mercantils el capital social de les quals pertanyi íntegrament a l’entitat local.", correct: false },
      { text: "Són certes l’a), la b) i la c).", correct: true }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "L’aprovació definitiva del pressupost general per part del Ple de la corporació s’haurà de realitzar:",
    number: 6,
    answers: [
      { text: "Abans del 31 de novembre de l’any anterior al de l’exercici a què s’hagi d’aplicar.", correct: false },
      { text: "Abans del 31 de desembre de l’any posterior al de l’exercici a què s’hagi d’aplicar.", correct: false },
      { text: "Abans del 31 de novembre de l’any posterior al de l’exercici a què s’hagi d’aplicar.", correct: false },
      { text: "Abans del 31 de desembre de l’any anterior al de l’exercici a què s’hagi d’aplicar.", correct: true }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "D’acord amb allò previst en la Llei 9/2017, de 8 de novembre, de Contractes del Sector Públic, els contractes menors d’obres es caracteritzen per:",
    number: 7,
    answers: [
      { text: "Tenir un preu de licitació inferior a 15.000 euros i una durada de més d’un any amb possibilitat de pròrroga.", correct: false },
      { text: "Tenir un valor estimat inferior a 40.000 euros i una durada d’un any prorrogable per un altre.", correct: false },
      { text: "Tenir un valor estimat inferior a 40.000 euros i una durada no superior a l’any sense possibilitat de pròrroga.", correct: true },
      { text: "Tenir un valor estimat inferior a 15.000 euros i una durada d’un any prorrogable por un altre.", correct: false }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "D’acord amb la Llei 9/2017 de Contractes del Sector Públic, els contractes menors de serveis es caracteritzen per:",
    number: 23,
    answers: [
      { text: "Tenir un valor estimat inferior a 40.000 euros i una durada màxima de dos anys.", correct: false },
      { text: "Tenir un valor estimat inferior a 15.000 euros i una durada no superior a l’any sense possibilitat de pròrroga.", correct: true },
      { text: "Tenir un valor estimat inferior a 15.000 euros i una durada prorrogable fins a quatre anys.", correct: false },
      { text: "Tenir un valor estimat inferior a 40.000 euros i una durada d’un any prorrogable.", correct: false }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "Resten exclosos del règim aplicable de la Llei 9/2017, de 8 de novembre, de Contractes del Sector Públic",
    number: 8,
    answers: [
      { text: "Els contractes d’obres, subministraments i serveis que es celebrin en l’àmbit de la seguretat o de la defensa", correct: false },
      { text: "Els acords que celebri l’Estat amb d’altres Estats o amb d’altres subjectes de dret internacional", correct: false },
      { text: "Els contractes d’investigació i desenvolupament.", correct: false },
      { text: "Totes les respostes anteriors són correctes.", correct: true }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "L’Administració, en relació a la resolució d’un tràmit administratiu",
    number: 9,
    answers: [
      { text: "Està obligada a dictar una resolució expressa, però no a notificar-la.", correct: false },
      { text: "No està obligada ni a dictar una resolució expressa ni a notificar-la.", correct: false },
      { text: "Està obligada a dictar una resolució expressa i notificar-la en tots els procediments sigui quina sigui la seva forma d’iniciació.", correct: true },
      { text: "Cap de les respostes anteriors és correcta.", correct: false }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "Els documents presentats de manera presencial davant les Administracions Públiques:",
    number: 10,
    answers: [
      { text: "Han de ser digitalitzats.", correct: true },
      { text: "Han de ser impresos i guardats en format paper.", correct: false },
      { text: "Han de ser rebutjats a partir de l’entrada en vigor de la Llei.", correct: false },
      { text: "Han de ser acceptats en alguns casos.", correct: false }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "Posa fi al procediment administratiu:",
    number: 11,
    answers: [
      { text: "La renúncia al dret en què es fonamenta la sol·licitud.", correct: false },
      { text: "La impossibilitat material de continuar-lo per causes sobrevingudes; la resolució ha de ser motivada en tot cas.", correct: false },
      { text: "El desistiment.", correct: false },
      { text: "Totes les respostes anteriors són correctes.", correct: true }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "Les persones interessades quan podran adduir al·legacions?",
    number: 12,
    answers: [
      { text: "En qualsevol moment del procediment posterior al tràmit d’audiència.", correct: false },
      { text: "En qualsevol moment del procediment anterior al tràmit d’audiència.", correct: true },
      { text: "En qualsevol moment posterior al desistiment.", correct: false },
      { text: "En qualsevol moment posterior a la renúncia.", correct: false }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "Quin és el termini fixat per la Llei 39/2015, d’1 d’octubre, de procediment administratiu comú de les administracions públiques per a cursar una notificació per part de l’Administració?",
    number: 13,
    answers: [
      { text: "S’ha de cursar dins del termini de cinc dies a partir de la data en què s’hagi dictat l’acte.", correct: false },
      { text: "S’ha de cursar dins del termini de deu dies a partir de la data en què s’hagi dictat l’acte.", correct: true },
      { text: "S’ha de cursar dins del termini de quinze dies a partir de la data en què s’hagi dictat l’acte.", correct: false },
      { text: "S’ha de cursar dins del termini de vint dies a partir de la data en què s’hagi dictat l’acte.", correct: false }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "Segons la Llei 39/2015, d’1 d’octubre, de procediment administratiu comú de les administracions públiques, per regla general, com s’entenen els dies a efectes de còmput de terminis?",
    number: 14,
    answers: [
      { text: "Com a hàbils.", correct: false },
      { text: "Com a naturals.", correct: false },
      { text: "Com a hàbils i s’exclouen els dissabtes, els diumenges i els declarats festius.", correct: true },
      { text: "Com a naturals, i s’hi inclouen els dissabtes.", correct: false }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "Els documents públics són:",
    number: 15,
    answers: [
      { text: "Inalienables, inembargables i imprescriptibles.", correct: true },
      { text: "Alienables i embargables, però imprescriptibles.", correct: false },
      { text: "Inalienables, inembargables i prescriptibles.", correct: false },
      { text: "Cap de les respostes anteriors és correcta.", correct: false }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "Les disposicions que vulnerin la Constitució, les lleis o altres disposicions administratives de rang superior són",
    number: 16,
    answers: [
      { text: "Anul·lables", correct: false },
      { text: "Nul·les", correct: true },
      { text: "Seran nul·les o anul·lables segons la naturalesa de l’acte ho determini.", correct: false },
      { text: "Cap de les respostes anteriors és correcta.", correct: false }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "La Llei orgànica 3/2007, de 22 de març, per a la igualtat efectiva de dones i homes disposa que qualsevol comportament realitzat en funció del sexe d’una persona amb el propòsit o l’efecte d’atemptar contra la seva dignitat i de crear un entorn intimidatori, degradant o ofensiu és:",
    number: 17,
    answers: [
      { text: "Discriminació directa.", correct: false },
      { text: "Discriminació indirecta.", correct: false },
      { text: "Assetjament sexual.", correct: false },
      { text: "Assetjament per raó de sexe.", correct: true }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "Als efectes de la Llei 19/2014, del 29 de desembre, de transparència, accés a la informació pública i bon govern, s’entén com a l’acció proactiva de l’Administració de donar a conèixer la informació relativa als seus àmbits d’actuació i les seves obligacions, amb caràcter permanent i actualitzat:",
    number: 18,
    answers: [
      { text: "Transparència.", correct: true },
      { text: "Informació pública.", correct: false },
      { text: "Dret d’accés a la informació pública.", correct: false },
      { text: "Bon govern.", correct: false }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "Els drets de les persones interessades en matèria de protecció de dades personals són:",
    number: 19,
    answers: [
      { text: "El dret d’accés, el dret a la limitació del tractament, el dret a la portabilitat i el dret d’oposició.", correct: false },
      { text: "El dret de rectificació, el dret de supressió, el dret a la limitació del tractament, el dret a la portabilitat i el dret d’oposició.", correct: false },
      { text: "El dret d’accés, el dret de rectificació, el dret de supressió, el dret a la limitació del tractament, el dret a la portabilitat i el dret d’oposició.", correct: true },
      { text: "El dret d’accés, el dret de rectificació, el dret de supressió, el dret a la portabilitat i el dret d’oposició.", correct: false }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "El deure de confidencialitat en relació a la protecció de dades personals subjecta a:",
    number: 20,
    answers: [
      { text: "Els responsables i encarregats del tractament de dades així com totes les persones que intervinguin en qualsevol fase d’aquest.", correct: true },
      { text: "Els responsables i encarregats del tractament de dades, únicament.", correct: false },
      { text: "Els responsables del tractament de dades, únicament.", correct: false },
      { text: "Cap de les respostes anteriors és correcta.", correct: false }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "L’Institut Metropolità de Promoció de Sòl i Gestió Patrimonial (IMPSOL) és:",
    number: 21,
    answers: [
      { text: "Un organisme autònom", correct: false },
      { text: "Una entitat pública empresarial local", correct: true },
      { text: "Una societat mercantil pública", correct: false },
      { text: "Un consorci", correct: false }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "L’Institut Metropolità del Taxi (IMET) és:",
    number: 22,
    answers: [
      { text: "Un organisme autònom", correct: true },
      { text: "Una entitat pública empresarial local", correct: false },
      { text: "Una societat mercantil pública", correct: false },
      { text: "Un consorci", correct: false }
    ]
  },

];


// Lògica del Test (Funcions iguals a les teves però adaptades)
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
    inputCorrecto.parentElement.classList.add("correct");

    if (inputMarcado) {
      if (inputMarcado.dataset.correct === "true") correctCount++;
      else inputMarcado.parentElement.classList.add("incorrect");
    }
  });

  const fallos = total - correctCount;
  const nota = ((correctCount / total) * 10).toFixed(2);
  const aprobado = fallos <= 5;

  const scoreDiv = document.getElementById("score");
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

document.getElementById("submit").addEventListener("click", evaluateTest);
window.addEventListener("DOMContentLoaded", renderTest);