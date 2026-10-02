const TEST_ID = "2021_c1_borsa_test1"; 

const questions = [

  {
    theme: "2026; AMB C1",
    question: "L’AMB, és l'administració pública de l'Àrea metropolitana de Barcelona, una gran conurbació urbana formada per un total de:",
    number: 1,
    answers: [
      { text: "20 municipis", correct: false },
      { text: "36 municipis", correct: true },
      { text: "15 municipis", correct: false },
      { text: "50 municipis", correct: false }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "El Consell Metropolità és:",
    number: 2,
    answers: [
      { text: "Un òrgan de l’Ajuntament de Barcelona integrat a l'AMB", correct: false },
      { text: "Un òrgan de participació i consulta de l’AMB", correct: false },
      { text: "El màxim òrgan de govern de l'AMB", correct: true },
      { text: "Un òrgan d’assistència de la Presidència de l’AMB", correct: false }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "L’Àrea Metropolitana de Barcelona, d’acord amb la Llei 31/2010, de 3 d’agost, NO té competències en:",
    number: 3,
    answers: [
      { text: "Territori i urbanisme", correct: false },
      { text: "Transport i mobilitat", correct: false },
      { text: "Ecologia", correct: false },
      { text: "Normalització Lingüística", correct: true }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "Quins dels següents municipis NO forma part de l’AMB:",
    number: 4,
    answers: [
      { text: "El Papiol", correct: false },
      { text: "Abrera", correct: true },
      { text: "Begues", correct: false },
      { text: "Viladecans", correct: false }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "Els actes que esgoten la via administrativa són:",
    number: 5,
    answers: [
      { text: "Actes que no admeten cap tipus de recurs", correct: false },
      { text: "Actes dictats amb caràcter bilateral", correct: false },
      { text: "Actes que restringeixen els drets dels seus destinataris o els imposen una obligació", correct: false },
      { text: "Actes que es poden recórrer", correct: true }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "Quina de les següents no és una fase del procediment administratiu?:",
    number: 6,
    answers: [
      { text: "Instrucció", correct: false },
      { text: "Finalització", correct: false },
      { text: "Reconversió", correct: true },
      { text: "Iniciació", correct: false }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "El procediment en el que s’adjudica el contracte al licitador justificadament elegit per l’òrgan de contractació, prèvia negociació dels termes del contracte amb un o diversos candidats, es denomina:",
    number: 7,
    answers: [
      { text: "Obert", correct: false },
      { text: "Restringit", correct: false },
      { text: "Diàleg competitiu", correct: false },
      { text: "Negociat", correct: true }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "Segons el text refós de la llei de contractes del sector públic (TRLCSP), NO és un principi rector de la contractació administrativa:",
    number: 8,
    answers: [
      { text: "Accessibilitat", correct: true },
      { text: "Igualtat", correct: false },
      { text: "Lliure competència", correct: false },
      { text: "Transparència", correct: false }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "En el pressupost, els ingressos tenen classificació:",
    number: 9,
    answers: [
      { text: "Orgànica i territorial", correct: false },
      { text: "Orgànica i econòmica", correct: true },
      { text: "Econòmica i funcional", correct: false },
      { text: "Orgànica i funcional", correct: false }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "A l’AMB, la fiscalització dels actes que reconeixen drets i obligacions de contingut econòmic correspon a:",
    number: 10,
    answers: [
      { text: "La Junta de Govern", correct: false },
      { text: "El Consell Metropolità", correct: false },
      { text: "La Intervenció General", correct: true },
      { text: "La Secretaria General", correct: false }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "Per ser considerats vàlids, els documents electrònics administratius han de:",
    number: 11,
    answers: [
      { text: "Incorporar les firmes electròniques que correspongui", correct: true },
      { text: "Sintetitzar el contingut de l’acte administratiu", correct: false },
      { text: "Ser copiats de documents conservats en format paper", correct: false },
      { text: "Ser autoritzats pel Sistema Nacional de Documentació Electrònica", correct: false }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "Els registres electrònics han de permetre:",
    number: 12,
    answers: [
      { text: "Presentar documents tots els dies laborables de l’any de 8.00h a 20.00h", correct: false },
      { text: "Presentar documents tots els dies de l’any de 8.00h a 20.00h", correct: false },
      { text: "Presentar documents tots els dies de l’any durant les 24h", correct: true },
      { text: "Presentar documents tots els dies laborables de l’any durant les 24h", correct: false }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "El dret a no ser discriminat per raó de sexe es reconeix:",
    number: 13,
    answers: [
      { text: "Només a les persones amb ciutadania espanyola", correct: false },
      { text: "Només a les dones", correct: false },
      { text: "A totes les persones", correct: true },
      { text: "Només a les persones amb residència legal a Espanya", correct: false }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "Les obligacions establertes a la Llei orgànica per a la igualtat efectiva de dones i homes, s’apliquen:",
    number: 14,
    answers: [
      { text: "Només a les persones físiques residents espanyoles", correct: false },
      { text: "Només a les persones jurídiques residents espanyoles", correct: false },
      { text: "Només a les persones físiques i jurídiques residents espanyoles", correct: false },
      { text: "A qualsevol persona física o jurídica que es trobi o actuï en territori espanyol", correct: true }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "Un acte administratiu ferm és aquell contra el qual:",
    number: 15,
    answers: [
      { text: "Es poden interposar els recursos ordinaris", correct: false },
      { text: "Ja no es poden interposar recursos ordinaris, ni administratius ni en via contenciosa administrativa", correct: true },
      { text: "Es pot interposar recurs d’alçada", correct: false },
      { text: "No es pot interposar recurs administratiu però sí contenciós administratiu", correct: false }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "Un acte administratiu que determina la impossibilitat de continuar el procediment és:",
    number: 16,
    answers: [
      { text: "Improcedent", correct: false },
      { text: "Impugnable", correct: true },
      { text: "Inconstitucional", correct: false },
      { text: "Transmissible", correct: false }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "El silenci administratiu és positiu:",
    number: 17,
    answers: [
      { text: "Sempre", correct: false },
      { text: "En la resolució dels recursos administratius", correct: false },
      { text: "Sempre que ho demani l’interessat", correct: false },
      { text: "Cap de les anteriors", correct: true }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "En els procediments iniciats a sol·licitud de la persona interessada, la notificació s’ha de practicar en format:",
    number: 18,
    answers: [
      { text: "Electrònic", correct: false },
      { text: "Paper", correct: false },
      { text: "Com assenyali la persona interessada, excepte si està obligada a notificació electrònica", correct: true },
      { text: "Com decideixi en cada moment l’Administració", correct: false }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "La llei 19/2014, del 29 de desembre, de transparència, accés a la informació pública i bon govern:",
    number: 19,
    answers: [
      { text: "És d’aplicació a l’Administració Local", correct: true },
      { text: "No és d’aplicació a l’Administració Local", correct: false },
      { text: "S’aplica a l’Administració Local si així ho decideix el seu màxim òrgan de govern", correct: false },
      { text: "S’aplica només als Ajuntaments", correct: false }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "La publicitat que comporti una conducta discriminatòria d’acord amb la Llei orgànica per a la igualtat efectiva de dones i homes, es considera una publicitat:",
    number: 20,
    answers: [
      { text: "Inadequada", correct: false },
      { text: "Il·lícita", correct: true },
      { text: "Intolerable", correct: false },
      { text: "Insostenible", correct: false }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "D’acord amb la Llei de contractes del sector públic, els acords marc, amb caràcter general, podran tenir una durada màxima no superior a:",
    number: 21,
    answers: [
      { text: "2 anys", correct: false },
      { text: "1 any", correct: false },
      { text: "4 anys", correct: true },
      { text: "6 anys", correct: false }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "Quin d’aquests municipis NO forma part de l’AMB:",
    number: 22,
    answers: [
      { text: "Sant Vicenç dels Horts", correct: false },
      { text: "Castelldefels", correct: false },
      { text: "El Prat de Llobregat", correct: false },
      { text: "Vilassar de Mar", correct: true }
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