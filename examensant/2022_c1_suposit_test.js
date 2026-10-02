const TEST_ID = "2022_c1_suposit_test"; 

const questions = [
  // --- SUPÒSIT 1 ---
  {
    theme: "SUPÒSIT 1 - Gestió Administrativa",
    number: 1,
    type: "order",
    question: "Cal ordenar un expedient administratiu en què consten una sèrie de documents. Endreça’ls indicant en la següent taula el número d’ordre de principi a final, essent 1 el primer i 4 l’últim.:",
    items: [
      { text: "Diligència d’incoació d’expedient", correctOrder: 1 },
      { text: "Informe tècnic", correctOrder: 2 },
      { text: "Decret de resolució", correctOrder: 3 },
      { text: "Diligència de tancament d’expedient", correctOrder: 4 }
    ]
  },
  {
    theme: "SUPÒSIT 1 - Gestió Administrativa",

    number: 2,

    type: "text",

    question: "S’ha de preparar un decret per imposar una sanció. D’acord amb la Llei 31/2010, del 3 d'agost, de l’Àrea Metropolitana de Barcelona, quin és l’òrgan metropolità competent per imposar sancions en exercici de les competències de l'Àrea Metropolitana de Barcelona i en aplicació de les lleis i de les ordenances o els reglaments metropolitans?",

    correctAnswer: "la presidència de l’AMB",

    keywords: [
        "presidència",
        "presidencia",
        "president de l'AMB",
        "presidenta de l'AMB",
        "11.3.p"
    ],

    hint: "💡 Pista: La competència correspon a un òrgan unipersonal de l’AMB.",

    hint2: "💡 Pista: Consulta l’article 11 de la Llei 31/2010, que regula les atribucions de la Presidència.",

    hint3: "💡 Pista: La resposta apareix concretament a l’article 11.3, lletra p.",

    solution: "📖 Resposta: Article 11.3.p de la Llei 31/2010: la Presidència de l’AMB."
},
  {
    theme: "SUPÒSIT 1 - Gestió Administrativa",
    number: 3,
    type: "single",
    question: "Un cop acordada la sanció, cal notificar el decret a la persona interessada. Quins recursos indicaràs en el peu de recurs? Encercla la lletra correcta.",
    answers: [
      { text: "A) Reposició i contenciós administratiu", correct: true },
      { text: "B) Alçada i reposició", correct: false },
      { text: "C) Revisió extraordinària i contenciós administratiu", correct: false }
    ]
  },
  {
    theme: "SUPÒSIT 1 - Gestió Administrativa",
    number: 4,
    type: "single",
    question: "D’altra banda, una persona ha presentat una sol·licitud però no explica amb tota claredat quins són els fets, raons i la petició concreta que fa. D’acord amb la Llei de Procediment Administratiu Comú (LPAC), quin termini li donaries per esmenar aquesta sol·licitud? Encercla la lletra correcta.",
    answers: [
      { text: "A) 10 dies hàbils", correct: true },
      { text: "B) 10 dies naturals", correct: false }
    ]
  },
  {
    theme: "SUPÒSIT 1 - Gestió Administrativa",
    number: 5,
    type: "single",
    question: "L’AMB promou en les seves polítiques públiques la igualtat de tracte entre dones i homes. Com definiries què és la igualtat de tracte d’acord amb la Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres? Encercla la lletra correcta:",
    answers: [
      { text: "A) El principi d’igualtat de tracte entre dones i homes suposa l’absència de qualsevol discriminació, directa o indirecta, per raó de sexe, i, especialment, les derivades de la maternitat, l’assumpció d’obligacions familiars i l’estat civil.", correct: true },
      { text: "B) El principi d’igualtat de tracte entre dones i homes suposa l’absència de qualsevol discriminació, directa o indirecta, per motiu d’orientació sexual.", correct: false }
    ]
  },
  {
    theme: "SUPÒSIT 1 - Gestió Administrativa",
    number: 6,
    type: "single",
    question: "En la seva relació amb l’AMB, les persones interessades tenen el dret de protecció de les seves dades personals, cosa que l’AMB els ha de comunicar degudament. Quin d’aquests dos exemples és correcte d’acord amb la legislació sobre protecció de dades personals? La part subratllada és la que canvia. Encercla la lletra que consideris correcta.",
    answers: [
      { text: "A) En compliment de la legislació vigent en matèria de protecció de dades, us informem que les vostres dades seran recollides a un tractament responsabilitat de l'Àrea Metropolitana de Barcelona (AMB) per a gestionar la vostra sol·licitud. Les dades no seran cedides a tercers excepte que ho requereixi la gestió de la vostra sol·licitud. Un cop finalitzat el servei seran conservades per obligació legal com a part del registre d'expedients de l'AMB. Podreu accedir a les dades, rectificar-les i suprimir-les, i exercir la resta dels vostres drets, adjuntant una còpia del vostre DNI, adreçant-vos a Serveis Jurídics, Exercici de Drets, Àrea Metropolitana de Barcelona, c/ 62, núm. 16-18 edifici A - Zona Franca 08040 Barcelona o bé a través de la instància electrònica genèrica que trobareu a l'apartat tràmits de la seu electrònica de l'AMB.", correct: true },
      { text: "B) En compliment de la legislació vigent en matèria de protecció de dades, us informem que les vostres dades seran recollides a un tractament responsabilitat de l'Àrea Metropolitana de Barcelona (AMB) per a gestionar la vostra sol·licitud. Les dades no seran cedides a tercers excepte que ho requereixi la gestió de la vostra sol·licitud. Un cop finalitzat el servei seran conservades per obligació legal com a part del registre d'expedients de l'AMB. Podreu accedir a les dades però no podreu rectificar-les ni suprimir- les fins que l’expedient administratiu estigui resolt.", correct: false }
    ]
  },

  // --- SUPÒSIT 2 ---
  {
    theme: "SUPÒSIT 2 - Gestió Econòmica Administrativa",
    number: 7,
    type: "text",
    question: "Cal aprovar l’expedient de pressupost anual. D’acord amb la Llei 31/2010, del 3 d'agost, de l’Àrea Metropolitana de Barcelona, quin és l’òrgan metropolità competent per aprovar el pressupost de cada exercici?",

    correctAnswer: "el Consell metropolità",

    keywords: [
        "consell metropolità",
        "consell metropolita",
        "consell",
        "8.1.j",
        "article 8",
        "art. 8"
    ],

    hint: "💡 Pista: La competència correspon a l’òrgan col·legiat de govern de l’AMB, no a la Presidència.",

    hint2: "💡 Pista: Consulta l’article 8 de la Llei 31/2010, que regula les atribucions del Consell metropolità.",

    hint3: "💡 Pista: La resposta apareix concretament a l’article 8.1, lletra j.",

    solution: "📖 Resposta: Article 8.1.j de la Llei 31/2010: el Consell metropolità."
},
  {
    theme: "SUPÒSIT 2 - Gestió Econòmica Administrativa",
    number: 8,
    type: "single",
    question: "Un cop aprovat inicialment el pressupost, en quin diari oficial s’ha de publicar? (Art. 169 LHL)",
    answers: [
      { text: "A) BOP", correct: true },
      { text: "B) DOGC", correct: false },
      { text: "C) BOE", correct: false }
    ]
  },
  {
    theme: "SUPÒSIT 2 - Gestió Econòmica Administrativa",
    number: 9,
    type: "single",
    question: "Una persona interessada et pregunta quin és el termini d’exposició pública del pressupost inicialment aprovat. Quin termini li indicaràs? Encercla la lletra correcta. (Art. 169 LHL i art. 30.2 LPAC)",
    answers: [
      { text: "A) 15 dies hàbils", correct: true },
      { text: "B) 15 dies naturals", correct: false }
    ]
  },
  {
    theme: "SUPÒSIT 2 - Gestió Econòmica Administrativa",
    number: 10,
    type: "order",
    question: "Cal ordenar els documents comptables d’un expedient de despesa. Endreça’ls indicant en la següent taula el número d’ordre de principi a final, essent 1 el primer i 4 l’últim. (del 1 al 4) (Real Decreto 500/1990):",
    items: [
      { text: "Autorització de la despesa", correctOrder: 1 },
      { text: "Disposició o compromís de la despesa", correctOrder: 2 },
      { text: "Reconeixement i liquidació de l’obligació", correctOrder: 3 },
      { text: "Ordenació del pagament", correctOrder: 4 }
    ]
  },
  {
    theme: "SUPÒSIT 2 - Gestió Econòmica Administrativa",
    number: 11,
    type: "single",
    question: "L’AMB promou en les seves polítiques públiques la igualtat de tracte entre dones i homes. Com definiries què és la igualtat de tracte d’acord amb la Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres? Encercla la lletra correcta: (Art. 3 LOI)",
    answers: [
      { text: "A) El principi d’igualtat de tracte entre dones i homes suposa l’absència de qualsevol discriminació, directa o indirecta, per raó de sexe, i, especialment, les derivades de la maternitat, l’assumpció d’obligacions familiars i l’estat civil.", correct: true },
      { text: "B) El principi d’igualtat de tracte entre dones i homes suposa l’absència de qualsevol discriminació, directa o indirecta, per motiu d’orientació sexual.", correct: false }
    ]
  },
  {
    theme: "SUPÒSIT 2 - Gestió Econòmica Administrativa",
    number: 12,
    type: "single",
    question: "En la seva relació amb l’AMB, les persones interessades tenen el dret de protecció de les seves dades personals, cosa que l’AMB els ha de comunicar degudament. Quin d’aquests dos exemples és correcte d’acord amb la legislació sobre protecció de dades personals? La part subratllada és la que canvia. Encercla la lletra que consideris correcta (Art. 13 RGPD)",
    answers: [
      { text: "A) En compliment de la legislació vigent en matèria de protecció de dades, us informem que les vostres dades seran recollides a un tractament responsabilitat de l'Àrea Metropolitana de Barcelona (AMB) per a gestionar la vostra sol·licitud. Les dades no seran cedides a tercers excepte que ho requereixi la gestió de la vostra sol·licitud. Un cop finalitzat el servei seran conservades per obligació legal com a part del registre d'expedients de l'AMB. Podreu accedir a les dades, rectificar-les i suprimir-les, i exercir la resta dels vostres drets, adjuntant una còpia del vostre DNI, adreçant-vos a Serveis Jurídics, Exercici de Drets, Àrea Metropolitana de Barcelona, c/ 62, núm. 16-18 edifici A - Zona Franca 08040 Barcelona o bé a través de la instància electrònica genèrica que trobareu a l'apartat tràmits de la seu electrònica de l'AMB.", correct: true },
      { text: "B) En compliment de la legislació vigent en matèria de protecció de dades, us informem que les vostres dades seran recollides a un tractament responsabilitat de l'Àrea Metropolitana de Barcelona (AMB) per a gestionar la vostra sol·licitud. Les dades no seran cedides a tercers excepte que ho requereixi la gestió de la vostra sol·licitud. Un cop finalitzat el servei seran conservades per obligació legal com a part del registre d'expedients de l'AMB. Podreu accedir a les dades però no podreu rectificar-les ni suprimir-les fins que l’expedient administratiu estigui resolt.", correct: false }
    ]
  }
];

function shuffleArray(arr) {

  for (let i = arr.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[j]] = [arr[j], arr[i]];

  }

  return arr;

}


// ======================================================
// CREAR IDENTIFICADOR ÚNICO PARA CADA PREGUNTA
// ======================================================

function getQuestionId(q, originalIndex) {

  return `question-${TEST_ID}-${q.number || originalIndex}`;

}



// ======================================================
// RENDERIZAR TEST
// ======================================================

function renderTest() {

  const form = document.getElementById("test-form");

  if (!form) return;

  form.innerHTML = "";


  // ====================================================
  // CARGAR PREGUNTAS Y MEZCLARLAS SIEMPRE
  // ====================================================

  let currentQuestions = questions.map((q, originalIndex) => {

    const question = {
      ...q,
      _originalIndex: originalIndex,
      _questionId: getQuestionId(q, originalIndex)
    };


    // Mezclar respuestas de tipo SINGLE

    if (q.type === "single") {

      question.answers =
        shuffleArray([...q.answers]);

    }


    // Mezclar elementos de tipo ORDER

    else if (q.type === "order") {

      question.items =
        shuffleArray([...q.items]);

    }


    return question;

  });


  // ====================================================
  // MEZCLAR EL ORDEN DE LAS PREGUNTAS
  // ====================================================

  currentQuestions =
    shuffleArray(currentQuestions);


  // ====================================================
  // GUARDAR EL ORDEN ACTUAL
  // ====================================================

  localStorage.setItem(
    `questions-${TEST_ID}`,
    JSON.stringify(currentQuestions)
  );


  // ====================================================
  // RECUPERAR PROGRESO
  // ====================================================

  const savedProgress =
    JSON.parse(
      localStorage.getItem(
        `progress-${TEST_ID}`
      )
    ) || {
      respuestas: {}
    };


  const totalQuestions =
    currentQuestions.length;


  // ====================================================
  // CREAR CADA PREGUNTA
  // ====================================================

  currentQuestions.forEach((q, index) => {

    const questionWrapper =
      document.createElement("div");


    questionWrapper.className =
      "question";


    questionWrapper.id =
      `q-container-${index}`;


    // ==================================================
    // NUMERACIÓN
    // ==================================================

    const questionNumber =
      document.createElement("div");


    questionNumber.style.fontSize =
      "0.8rem";


    questionNumber.style.fontWeight =
      "800";


    questionNumber.style.color =
      "var(--accent)";


    questionNumber.style.marginBottom =
      "8px";


    questionNumber.style.textTransform =
      "uppercase";


    questionNumber.textContent =
      `PREGUNTA ${index + 1} DE ${totalQuestions}`;


    questionWrapper.appendChild(
      questionNumber
    );


    // ==================================================
    // TEMA
    // ==================================================

    if (q.theme) {

      const themeTag =
        document.createElement("div");


      themeTag.style.fontSize =
        "0.75rem";


      themeTag.style.fontWeight =
        "800";


      themeTag.style.color =
        "var(--accent)";


      themeTag.style.marginBottom =
        "10px";


      themeTag.style.textTransform =
        "uppercase";


      themeTag.textContent =
        q.theme;


      questionWrapper.appendChild(
        themeTag
      );

    }


    // ==================================================
    // PREGUNTA
    // ==================================================

    const title =
      document.createElement("h3");


    title.textContent =
      q.question;


    questionWrapper.appendChild(
      title
    );


    // ==================================================
    // SINGLE
    // ==================================================

    if (q.type === "single") {

      const answersWrapper =
        document.createElement("div");


      answersWrapper.className =
        "answers";


      q.answers.forEach((a) => {

        const label =
          document.createElement("label");


        label.className =
          "answer";


        const input =
          document.createElement("input");


        input.type =
          "radio";


        input.name =
          `q${index}`;


        input.value =
          a.text;


        input.dataset.correct =
          a.correct;


        // Recuperar respuesta guardada

        const savedAnswer =
          savedProgress.respuestas[
            q._questionId
          ];


        if (
          savedAnswer &&
          savedAnswer === a.text
        ) {

          input.checked = true;

        }


        label.appendChild(
          input
        );


        label.appendChild(
          document.createTextNode(
            a.text
          )
        );


        answersWrapper.appendChild(
          label
        );

      });


      questionWrapper.appendChild(
        answersWrapper
      );

    }


    // ==================================================
    // TEXT
    // ==================================================

    else if (q.type === "text") {

      const input =
        document.createElement("input");


      input.type =
        "text";


      input.name =
        `q${index}`;


      input.className =
        "answer-text-input";


      input.placeholder =
        "Escriu la teva resposta aquí...";


      input.style.width =
        "100%";


      input.style.padding =
        "14px 18px";


      input.style.borderRadius =
        "8px";


      input.style.border =
        "1px solid var(--border-color)";


      input.style.fontFamily =
        "'Outfit', sans-serif";


      input.style.boxSizing =
        "border-box";


      // Recuperar respuesta guardada

      const savedAnswer =
        savedProgress.respuestas[
          q._questionId
        ];


      if (savedAnswer) {

        input.value =
          savedAnswer;

      }


      questionWrapper.appendChild(
        input
      );


      // ==================================================
      // CAJA DE PISTAS
      // ==================================================

      const hintBox =
        document.createElement("div");


      hintBox.className =
        "hint-box";


      hintBox.style.display =
        "none";


      hintBox.style.marginTop =
        "12px";


      hintBox.style.padding =
        "12px 15px";


      hintBox.style.borderRadius =
        "8px";


      hintBox.style.fontSize =
        "0.9rem";


      hintBox.style.lineHeight =
        "1.5";


      questionWrapper.appendChild(
        hintBox
      );

    }


    // ==================================================
    // ORDER
    // ==================================================

    else if (q.type === "order") {

      const orderList =
        document.createElement("div");


      orderList.className =
        "order-list";


      q.items.forEach(
        (item, itemIdx) => {

          const row =
            document.createElement("div");


          row.style.display =
            "flex";


          row.style.alignItems =
            "center";


          row.style.gap =
            "10px";


          row.style.marginBottom =
            "10px";


          row.style.background =
            "#ffffff";


          row.style.padding =
            "10px 14px";


          row.style.borderRadius =
            "8px";


          row.style.border =
            "1px solid var(--border-color)";


          const numInput =
            document.createElement("input");


          numInput.type =
            "number";


          numInput.min =
            "1";


          numInput.max =
            q.items.length;


          numInput.name =
            `q${index}_item${itemIdx}`;


          numInput.dataset.itemText =
            item.text;


          numInput.dataset.correctOrder =
            item.correctOrder;


          numInput.style.width =
            "60px";


          numInput.style.padding =
            "8px";


          numInput.style.borderRadius =
            "6px";


          numInput.style.border =
            "1px solid var(--border-color)";


          numInput.style.textAlign =
            "center";


          numInput.style.fontWeight =
            "bold";


          // Clave estable para cada elemento

          const itemKey =
            `${q._questionId}_item_${item.text}`;


          numInput.dataset.itemKey =
            itemKey;


          const savedValue =
            savedProgress.respuestas[
              itemKey
            ];


          if (savedValue !== undefined) {

            numInput.value =
              savedValue;

          }


          const textSpan =
            document.createElement("span");


          textSpan.textContent =
            item.text;


          textSpan.style.fontWeight =
            "500";


          row.appendChild(
            numInput
          );


          row.appendChild(
            textSpan
          );


          orderList.appendChild(
            row
          );

        }
      );


      questionWrapper.appendChild(
        orderList
      );

    }


    form.appendChild(
      questionWrapper
    );

  });


  updateResponseCounter();

}



// ======================================================
// NORMALIZAR TEXTO
// ======================================================

function normalizeText(text) {

  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[.,;:()¿?¡!"']/g, "")
    .trim();

}



// ======================================================
// COMPROBAR RESPUESTA DE TEXTO
// ======================================================

function checkTextAnswer(
  userAnswer,
  qData
) {

  const answer =
    normalizeText(userAnswer);


  if (!answer) return false;


  const correctAnswer =
    normalizeText(
      qData.correctAnswer
    );


  if (
    answer.includes(correctAnswer) ||
    correctAnswer.includes(answer)
  ) {

    return true;

  }


  if (qData.keywords) {

    const keywords =
      qData.keywords.map(
        keyword =>
          normalizeText(keyword)
      );


    if (
      keywords.some(
        keyword =>
          answer.includes(keyword)
      )
    ) {

      return true;

    }

  }


  return false;

}



// ======================================================
// COMPROBAR Y MOSTRAR PISTAS
// ======================================================

function autoCheckQuestion(
  questionEl,
  qData,
  index
) {

  if (!questionEl) return;


  // ====================================================
  // SINGLE
  // ====================================================

  if (qData.type === "single") {

    const labels =
      questionEl.querySelectorAll(
        "label"
      );


    labels.forEach(label => {

      const input =
        label.querySelector(
          "input"
        );


      if (input.checked) {

        label.classList.add(
          input.dataset.correct === "true"
            ? "correct"
            : "incorrect"
        );

      } else {

        label.classList.remove(
          "correct",
          "incorrect"
        );

      }

    });

  }


  // ====================================================
  // TEXT
  // ====================================================

  else if (qData.type === "text") {

    const txtInput =
      questionEl.querySelector(
        `input[name="q${index}"]`
      );


    const hintBox =
      questionEl.querySelector(
        ".hint-box"
      );


    if (!txtInput) return;


    const userAnswer =
      txtInput.value.trim();


    // Sin respuesta

    if (userAnswer === "") {

      txtInput.style.borderColor =
        "var(--border-color)";


      txtInput.style.background =
        "#ffffff";


      if (hintBox) {

        hintBox.style.display =
          "none";

      }


      return;

    }


    const isCorrect =
      checkTextAnswer(
        userAnswer,
        qData
      );


    // ==================================================
    // CORRECTA
    // ==================================================

    if (isCorrect) {

      txtInput.style.borderColor =
        "#22c55e";


      txtInput.style.background =
        "#dcfce7";


      if (hintBox) {

        hintBox.style.display =
          "block";


        hintBox.style.background =
          "#dcfce7";


        hintBox.style.color =
          "#166534";


        hintBox.innerHTML =
          "✅ <strong>Correcte!</strong>";

      }


      return;

    }


    // ==================================================
    // INCORRECTA
    // ==================================================

    txtInput.style.borderColor =
      "var(--accent)";


    txtInput.style.background =
      "#fee2e2";


    // Contar intentos

    let attempts =
      parseInt(
        txtInput.dataset.attempts ||
        "0"
      );


    const currentValue =
      txtInput.value.trim();


    if (
      txtInput.dataset.lastAttemptValue !==
      currentValue
    ) {

      attempts++;


      txtInput.dataset.attempts =
        attempts;


      txtInput.dataset.lastAttemptValue =
        currentValue;

    }


    // ==================================================
    // PISTAS
    // ==================================================

    if (hintBox) {

      hintBox.style.display =
        "block";


      hintBox.style.background =
        "#fff7ed";


      hintBox.style.color =
        "#9a3412";


      // PRIMER ERROR

      if (attempts === 1) {

        hintBox.innerHTML = `
          ❌ <strong>Incorrecte.</strong><br>
          ${qData.hint || "💡 Revisa la normativa relacionada amb aquesta pregunta."}
        `;

      }


      // SEGUNDO ERROR

      else if (attempts === 2) {

        hintBox.innerHTML = `
          ❌ <strong>Encara no.</strong><br>
          ${qData.hint2 || qData.hint || "💡 Revisa l'article corresponent."}
        `;

      }


      // TERCER ERROR

      else {

        hintBox.innerHTML = `
          ❌ <strong>Encara no.</strong><br>
          ${qData.hint3 || qData.hint2 || qData.hint || ""}
          <br><br>

          <button
            type="button"
            class="show-solution-btn"
            style="
              padding: 8px 12px;
              border: none;
              border-radius: 6px;
              cursor: pointer;
              font-weight: 600;
            "
          >
            📖 Veure la resposta
          </button>
        `;


        const solutionBtn =
          hintBox.querySelector(
            ".show-solution-btn"
          );


        if (solutionBtn) {

          solutionBtn.onclick =
            function () {

              hintBox.innerHTML = `
                📖 <strong>Resposta:</strong><br>
                ${qData.solution ||
                  qData.correctAnswer}
              `;


              hintBox.style.background =
                "#eff6ff";


              hintBox.style.color =
                "#1e40af";

            };

        }

      }

    }

  }


  // ====================================================
  // ORDER
  // ====================================================

  else if (qData.type === "order") {

    qData.items.forEach(
      (_, itemIdx) => {

        const numInput =
          questionEl.querySelector(
            `input[name="q${index}_item${itemIdx}"]`
          );


        if (
          numInput &&
          numInput.value !== ""
        ) {

          const val =
            parseInt(
              numInput.value
            );


          if (
            val ===
            parseInt(
              numInput.dataset.correctOrder
            )
          ) {

            numInput.style.borderColor =
              "#22c55e";


            numInput.style.background =
              "#dcfce7";

          } else {

            numInput.style.borderColor =
              "var(--accent)";


            numInput.style.background =
              "#fee2e2";

          }

        } else if (numInput) {

          numInput.style.borderColor =
            "var(--border-color)";


          numInput.style.background =
            "#ffffff";

        }

      }
    );

  }

}



// ======================================================
// CONTADOR
// ======================================================

function updateResponseCounter() {

  const currentQuestions =
    JSON.parse(
      localStorage.getItem(
        `questions-${TEST_ID}`
      )
    );


  if (!currentQuestions) return;


  const total =
    currentQuestions.length;


  let answeredCount = 0;

  let correctCount = 0;

  let incorrectCount = 0;


  const respuestas = {};


  currentQuestions.forEach(
    (q, index) => {

      const questionEl =
        document.getElementById(
          `q-container-${index}`
        );


      if (!questionEl) return;


      // ==================================================
      // SINGLE
      // ==================================================

      if (q.type === "single") {

        const checked =
          questionEl.querySelector(
            `input[name="q${index}"]:checked`
          );


        if (checked) {

          answeredCount++;


          respuestas[
            q._questionId
          ] =
            checked.value;


          if (
            checked.dataset.correct ===
            "true"
          ) {

            correctCount++;

          } else {

            incorrectCount++;

          }

        }

      }


      // ==================================================
      // TEXT
      // ==================================================

      else if (q.type === "text") {

        const txtInput =
          questionEl.querySelector(
            `input[name="q${index}"]`
          );


        if (
          txtInput &&
          txtInput.value.trim() !== ""
        ) {

          answeredCount++;


          respuestas[
            q._questionId
          ] =
            txtInput.value;


          if (
            checkTextAnswer(
              txtInput.value,
              q
            )
          ) {

            correctCount++;

          } else {

            incorrectCount++;

          }

        }

      }


      // ==================================================
      // ORDER
      // ==================================================

      else if (q.type === "order") {

        let allFilled = true;

        let allCorrect = true;


        q.items.forEach(
          (_, itemIdx) => {

            const numInput =
              questionEl.querySelector(
                `input[name="q${index}_item${itemIdx}"]`
              );


            if (
              numInput &&
              numInput.value !== ""
            ) {

              const itemKey =
                numInput.dataset.itemKey;


              respuestas[itemKey] =
                numInput.value;


              if (
                parseInt(
                  numInput.value
                ) !==
                parseInt(
                  numInput.dataset.correctOrder
                )
              ) {

                allCorrect = false;

              }

            } else {

              allFilled = false;

              allCorrect = false;

            }

          }
        );


        if (allFilled) {

          answeredCount++;


          if (allCorrect) {

            correctCount++;

          } else {

            incorrectCount++;

          }

        }

      }

    }
  );


  // ====================================================
  // ACTUALIZAR CONTADORES
  // ====================================================

  const respCounter =
    document.getElementById(
      "response-counter"
    );


  const corrCounter =
    document.getElementById(
      "correct-counter"
    );


  const incorrCounter =
    document.getElementById(
      "incorrect-counter"
    );


  const progressBar =
    document.getElementById(
      "progress"
    );


  if (respCounter) {

    respCounter.textContent =
      `📄 Respostes: ${answeredCount}/${total}`;

  }


  if (corrCounter) {

    corrCounter.textContent =
      `✅ Encerts: ${correctCount}`;

  }


  if (incorrCounter) {

    incorrCounter.textContent =
      `❌ Errors: ${incorrectCount}`;

  }


  if (progressBar) {

    progressBar.style.width =
      `${(answeredCount / total) * 100}%`;

  }


  localStorage.setItem(
    `progress-${TEST_ID}`,
    JSON.stringify({
      total: total,
      respuestas: respuestas
    })
  );

}



// ======================================================
// EVALUAR TEST
// ======================================================

function evaluateTest() {

  const currentQuestions =
    JSON.parse(
      localStorage.getItem(
        `questions-${TEST_ID}`
      )
    );


  if (!currentQuestions) return;


  const questionsDOM =
    document.querySelectorAll(
      ".question"
    );


  let correctCount = 0;


  const total =
    currentQuestions.length;


  currentQuestions.forEach(
    (q, index) => {

      const questionEl =
        questionsDOM[index];


      autoCheckQuestion(
        questionEl,
        q,
        index
      );


      // ==================================================
      // SINGLE
      // ==================================================

      if (q.type === "single") {

        const inputCorrecto =
          questionEl.querySelector(
            'input[data-correct="true"]'
          );


        const inputMarcado =
          questionEl.querySelector(
            "input:checked"
          );


        if (inputCorrecto) {

          inputCorrecto.parentElement
            .classList.add(
              "correct"
            );

        }


        if (
          inputMarcado &&
          inputMarcado.dataset.correct ===
          "true"
        ) {

          correctCount++;

        }

      }


      // ==================================================
      // TEXT
      // ==================================================

      else if (q.type === "text") {

        const txtInput =
          questionEl.querySelector(
            `input[name="q${index}"]`
          );


        if (
          txtInput &&
          txtInput.value.trim() !== "" &&
          checkTextAnswer(
            txtInput.value,
            q
          )
        ) {

          correctCount++;

        }

      }


      // ==================================================
      // ORDER
      // ==================================================

      else if (q.type === "order") {

        let allCorrect =
          true;


        q.items.forEach(
          (_, itemIdx) => {

            const numInput =
              questionEl.querySelector(
                `input[name="q${index}_item${itemIdx}"]`
              );


            if (
              !numInput ||
              parseInt(
                numInput.value
              ) !==
              parseInt(
                numInput.dataset.correctOrder
              )
            ) {

              allCorrect =
                false;

            }

          }
        );


        if (allCorrect) {

          correctCount++;

        }

      }

    }
  );


  // ====================================================
  // RESULTADO
  // ====================================================

  const fallos =
    total - correctCount;


  const nota =
    (
      (correctCount / total) *
      10
    ).toFixed(2);


  const aprobado =
    fallos <= 2;


  const scoreDiv =
    document.getElementById(
      "score"
    );


  if (scoreDiv) {

    scoreDiv.style.display =
      "block";


    if (aprobado) {

      scoreDiv.innerHTML =
        `<h2>✅ MISSIÓ COMPLERTA</h2>
        Puntuació: ${nota}/10
        <br>
        Encerts: ${correctCount}/${total}`;


      scoreDiv.style.background =
        "#dcfce7";


      scoreDiv.style.color =
        "#166534";

    } else {

      scoreDiv.innerHTML =
        `<h2>❌ GAME OVER</h2>
        Puntuació: ${nota}/10
        <br>
        Encerts: ${correctCount}/${total}`;


      scoreDiv.style.background =
        "#fee2e2";


      scoreDiv.style.color =
        "#991b1b";

    }

  }


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}



// ======================================================
// REINICIAR TEST
// ======================================================

function reiniciarTest() {

  if (
    confirm(
      "Vols reiniciar la missió? L'ordre de les preguntes i ítems canviarà."
    )
  ) {

    localStorage.removeItem(
      `questions-${TEST_ID}`
    );


    localStorage.removeItem(
      `progress-${TEST_ID}`
    );


    location.reload();

  }

}



// ======================================================
// EVENTO INPUT
// ======================================================

document.addEventListener(
  "input",
  (e) => {

    if (
      e.target.matches(
        "input[type=radio], input[type=text], input[type=number]"
      )
    ) {

      const questionEl =
        e.target.closest(
          ".question"
        );


      const questionsDOM =
        Array.from(
          document.querySelectorAll(
            ".question"
          )
        );


      const index =
        questionsDOM.indexOf(
          questionEl
        );


      const currentQuestions =
        JSON.parse(
          localStorage.getItem(
            `questions-${TEST_ID}`
          )
        );


      if (
        index !== -1 &&
        currentQuestions &&
        currentQuestions[index]
      ) {

        autoCheckQuestion(
          questionEl,
          currentQuestions[index],
          index
        );


        updateResponseCounter();

      }

    }

  }
);



// ======================================================
// BOTÓN EVALUAR
// ======================================================

const submitBtn =
  document.getElementById(
    "submit"
  );


if (submitBtn) {

  submitBtn.addEventListener(
    "click",
    evaluateTest
  );

}



// ======================================================
// CARGAR
// ======================================================

window.addEventListener(
  "DOMContentLoaded",
  renderTest
);