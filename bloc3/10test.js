const TEST_ID = "10test.js"; 

const questions = [

 {
    "theme": "Bloc II (Temari Específic) - Tema 10: Comunicacions de l'Administració amb la ciutadania: anuncis, edictes i notificacions",
    "number": 1,
    "question": "Segons la Llei 39/2015 (LPACAP), quin és el termini general que té l'Administració per practicar la notificació d'un acte administratiu a partir de la data en què aquest hagi estat dictat?",
    "answers": [
      { "text": "5 dies", "correct": false },
      { "text": "10 dies", "correct": true },
      { "text": "15 dies", "correct": false },
      { "text": "20 dies", "correct": false }
    ]
  },
  {
    "theme": "Bloc II (Temari Específic) - Tema 10: Comunicacions de l'Administració amb la ciutadania: anuncis, edictes i notificacions",
    "number": 2,
    "question": "D'acord amb el règim de notificacions electròniques, transcorreguts quants dies des de la posada a disposició de la notificació sense que s'hi hagi accedit s'entén que aquesta ha estat rebutjada?",
    "answers": [
      { "text": "10 dies hàbils", "correct": false },
      { "text": "10 dies naturals", "correct": true },
      { "text": "15 dies naturals", "correct": false },
      { "text": "5 dies hàbils", "correct": false }
    ]
  },
  {
    "theme": "Bloc II (Temari Específic) - Tema 10: Comunicacions de l'Administració amb la ciutadania: anuncis, edictes i notificacions",
    "number": 3,
    "question": "Quin efecte jurídic es produeix quan una notificació és defectuosa per haver omès algun dels requisits legals, com ara la indicació dels recursos procedents, si l'interessat no interposa cap recurs ni fa cap actuació al respecte?",
    "answers": [
      { "text": "L'acte esdevé nul de ple dret automàticament.", "correct": false },
      { "text": "La notificació no produeix cap efecte fins que l'Administració la repeteixi correctament.", "correct": true },
      { "text": "S'entén plenament eficaç des del primer dia de la seva emissió.", "correct": false },
      { "text": "Es converteix en un acte presumpte per silenci estimatori.", "correct": false }
    ]
  },
  {
    "theme": "Bloc II (Temari Específic) - Tema 10: Comunicacions de l'Administració amb la ciutadania: anuncis, edictes i notificacions",
    "number": 4,
    "question": "Quin és el concepte que defineix un edicte dins de les comunicacions de l'Administració local i de l'AMB?",
    "answers": [
      { "text": "Un text informatiu de caràcter general o convocatòria pública per a borses de treball.", "correct": false },
      { "text": "Una comunicació oficial emanada de l'autoritat administrativa que s'insereix en diaris oficials o tauler d'edictes (Seu Electrònica).", "correct": true },
      { "text": "Una resolució individualitzada tramesa directament al domicili del contribuent.", "correct": false },
      { "text": "Un acte de tràmit no qualificat exempt de publicitat.", "correct": false }
    ]
  },
  {
    "theme": "Bloc II (Temari Específic) - Tema 10: Comunicacions de l'Administració amb la ciutadania: anuncis, edictes i notificacions",
    "number": 5,
    "question": "Segons l'article 14 de la LPACAP i la normativa aplicada a l'Àrea Metropolitana de Barcelona (AMB), quins subjectes tenen l'obligació immutable de relacionar-se a través de mitjans electrònics i, per tant, rebre notificacions electròniques?",
    "answers": [
      { "text": "Només les persones físiques majors de 65 anys de forma voluntària.", "correct": false },
      { "text": "Les persones jurídiques, col·legiats professionals i empleats públics, entre d'altres.", "correct": true },
      { "text": "Únicament els ciutadans empadronats a Barcelona ciutat.", "correct": false },
      { "text": "Qualsevol ciutadà a títol particular sense excepcions.", "correct": false }
    ]
  },
  {
    "theme": "Bloc II (Temari Específic) - Tema 10: Comunicacions de l'Administració amb la ciutadania: anuncis, edictes i notificacions",
    "number": 6,
    "question": "En relació amb els anuncis publicats per l'AMB a la seva Seu Electrònica (Tauler d'Edictes i Anuncis), quin objectiu principal persegueixen?",
    "answers": [
      { "text": "Notificar individualment sancions fermes a persones determinades.", "correct": false },
      { "text": "Donar publicitat general a convocatòries d'òrgans, acords d'urbanisme, expropiacions, taxes i preus públics metropolitans.", "correct": true },
      { "text": "Substituir completament els pressupostos generals de l'ens.", "correct": false },
      { "text": "establir la pròrroga automàtica dels contractes de personal laboral.", "correct": false }
    ]
  },
  {
    "theme": "Bloc II (Temari Específic) - Tema 10: Comunicacions de l'Administració amb la ciutadania: anuncis, edictes i notificacions",
    "number": 7,
    "question": "Quin contingut mínim obligatori ha de contenir una notificació administrativa segons la LPACAP per considerar-se correctament redactada?",
    "answers": [
      { "text": "Només la signatura electrònica de l'òrgan competent.", "correct": false },
      { "text": "El text íntegre de la resolució, indicació de si és definitiva o no en via administrativa, recursos interposables, òrgan competent i terminis.", "correct": true },
      { "text": "Únicament els recursos que es poden interposar i la taxa associada.", "correct": false },
      { "text": "El resum executiu i la publicació simultània al DOGC.", "correct": false }
    ]
  },
  {
    "theme": "Bloc II (Temari Específic) - Tema 10: Comunicacions de l'Administració amb la ciutadania: anuncis, edictes i notificacions",
    "number": 8,
    "question": "Quina és la conseqüència jurídica si un interessat realitza una actuació que suposa el coneixement indubitable del contingut d'una resolució prèviament notificada de manera defectuosa?",
    "answers": [
      { "text": "La notificació s'entén practicada vàlidament des d'aquell moment.", "correct": true },
      { "text": "L'acte esdevé immediatament nul de ple dret.", "correct": false },
      { "text": "S'obre un nou termini de 30 dies naturals obligatoris.", "correct": false },
      { "text": "S'anul·la tot el procediment des del seu inici.", "correct": false }
    ]
  },
  {
    "theme": "Bloc II (Temari Específic) - Tema 10: Comunicacions de l'Administració amb la ciutadania: anuncis, edictes i notificacions",
    "number": 9,
    "question": "Quan s'entén practicada una notificació electrònica realitzada a través de sistemes com l'e-NOTUM utilitzat en l'àmbit de l'AMB?",
    "answers": [
      { "text": "Quan l'Administració clica el botó d'enviament al servidor.", "correct": false },
      { "text": "Quan es produeix l'accés efectiu al contingut de la notificació per part de l'interessat.", "correct": true },
      { "text": "Passades 24 hores des de l'emissió del correu avís.", "correct": false },
      { "text": "Quan ho publiquats al tauler d'edictes en paper.", "correct": false }
    ]
  },
  {
    "theme": "Bloc II (Temari Específic) - Tema 10: Comunicacions de l'Administració amb la ciutadania: anuncis, edictes i notificacions",
    "number": 10,
    "question": "Quin paper juga el Tauler d'Edictes i Anuncis de l'AMB en els supòsits de notificacions personals infructuoses?",
    "answers": [
      { "text": "Serveix com a mitjà subsidiari de publicació per edictes quan no s'ha pogut practicar la notificació personal al destinatari.", "correct": true },
      { "text": "Esdevé un arxiu històric no vinculant per a la ciutadania.", "correct": false },
      { "text": "Permet modificar unilateralment els estatuts de l'ens metropolità.", "correct": false },
      { "text": "Eximeix l'Administració de dictar cap tipus de resolució prèvia.", "correct": false }
    ]
  },
  {
    "theme": "Bloc II (Temari Específic) - Tema 10: Comunicacions de l'Administració amb la ciutadania: anuncis, edictes i notificacions",
    "number": 11,
    "question": "Dins de l'estructura organitzativa i de gestió de l'AMB, quin canal tecnològic s'empra habitualment per fer arribar de forma segura resolucions de gerència i presidència a empreses adjudicatàries i entitats?",
    "answers": [
      { "text": "El servei de notificacions electròniques integrat (com e-NOTUM).", "correct": true },
      { "text": "El fax institucional no xifrat.", "correct": false },
      { "text": "La publicació de missatges a xarxes socials corporatives.", "correct": false },
      { "text": "L'enviament de missatges SMS ordinaris sense certificat.", "correct": false }
    ]
  },
  {
    "theme": "Bloc II (Temari Específic) - Tema 10: Comunicacions de l'Administració amb la ciutadania: anuncis, edictes i notificacions",
    "number": 12,
    "question": "Quina diferència fonamental existeix, des del punt de vista conceptual, entre un 'edicte' i un 'anunci' administratiu?",
    "answers": [
      { "text": "L'edicte és exclusiu per a contractacions i l'anunci per a expropiacions.", "correct": false },
      { "text": "L'edicte és una comunicació oficial d'una autoritat inserida per a notificar o donar fe, mentre que l'anunci sol ser un text informatiu general o convocatòria pública.", "correct": true },
      { "text": "No existeix cap diferència jurídica segons la LPACAP.", "correct": false },
      { "text": "L'anunci requereix necessàriament signatura judicial i l'edicte no.", "correct": false }
    ]
  },
  {
    "theme": "Bloc II (Temari Específic) - Tema 10: Comunicacions de l'Administració amb la ciutadania: anuncis, edictes i notificacions",
    "number": 13,
    "question": "Si un empleat públic de l'AMB rep una notificació electrònica en el seu buzó corporatiu i transcorren els 10 dies naturals sense que hi accedeixi, quina és la repercussió processal immediata?",
    "answers": [
      { "text": "S'entén rebutjada, continuants el procediment i donant per complert el tràmit de notificació.", "correct": true },
      { "text": "Es paralitza el procediment administratiu de manera indefinit fins a un nou avís.", "correct": false },
      { "text": "Es converteix automàticament en un silenci negatiu absolut.", "correct": false },
      { "text": "S'anul·la la condició d'empleat públic de l'interessat.", "correct": false }
    ]
  },
  {
    "theme": "Bloc II (Temari Específic) - Tema 10: Comunicacions de l'Administracior amb la ciutadania: anuncis, edictes i notificacions",
    "number": 14,
    "question": "Quina és la premissa clau respecte a la publicació d'ordenances fiscals i preus públics metropolitans de l'AMB?",
    "answers": [
      { "text": "Han de ser notificades de forma individual i obligatòria a tots els habitants empadronats.", "correct": false },
      { "text": "S'han de publicar formalment a la Seu Electrònica i Tauler d'Edictes de l'AMB (amb.cat) per assolir la seva eficàcia jurídica.", "correct": true },
      { "text": "Només requereixen comunicació verbal al Consell Metropolità.", "correct": false },
      { "text": "Es publiquen exclusivament en panells publicitaris de la via pública.", "correct": false }
    ]
  },
  {
    "theme": "Bloc II (Temari Específic) - Tema 10: Comunicacions de l'Administració amb la ciutadania: anuncis, edictes i notificacions",
    "number": 15,
    "question": "En una pregunta trampa d'examen d'oposicions C1, si es confon el termini de pràctica de la notificació amb el termini de caducitat per no accedir electrònicament, quins són respectivament els dies i la seva naturalesa?",
    "answers": [
      { "text": "10 dies per practicar-la des que es dicta (sense especificar si són hàbils o naturals en la regla general de tramesa) i 10 dies naturals per entendre rebutjada la via electrònica.", "correct": true },
      { "text": "10 dies hàbils per a tot tipus de còmput electrònic.", "correct": false },
      { "text": "30 dies naturals per practicar-la i 5 dies hàbils per rebutjar-la.", "correct": false },
      { "text": "No hi ha cap termini legal establert per a l'Administració.", "correct": false }
    ]
  },
  {
    "theme": "Bloc II (Temari Específic) - Tema 10: Comunicacions de l'Administració amb la ciutadania: anuncis, edictes i notificacions",
    "number": 16,
    "question": "Quin caràcter jurídic té la pràctica d'una notificació administrativa pel que fa a l'obertura de terminis per interposar recursos?",
    "answers": [
      { "text": "Constitueix el punt de partida obligatori per iniciar el còmput de terminis de pagament o impugnació de l'acte.", "correct": true },
      { "text": "És un mer consell informatiu sense cap vinculació en els terminis processals.", "correct": false },
      { "text": "Només serveix per arxivar l'expedient sense possibilitat de recurs.", "correct": false },
      { "text": "Invalida automàticament qualsevol recurs previ interposat.", "correct": false }
    ]
  },
  {
    "theme": "Bloc II (Temari Específic) - Tema 10: Comunicacions de l'Administració amb la ciutadania: anuncis, edictes i notificacions",
    "number": 17,
    "question": "Segons la LPACAP, quin requisit formal és indispensable respecte a la constància de la recepció en una notificació practicada en paper?",
    "answers": [
      { "text": "Hi ha de constar la signatura del receptor, amb indicació de la data i l'intent o recepció efectiva.", "correct": true },
      { "text": "Només cal el segell de l'oficina de correus sense data.", "correct": false },
      { "text": "Es pot fer de manera anònima si el carter ho autoritza.", "correct": false },
      { "text": "Requereix la presència de dos testimonis municipals obligatòriament.", "correct": false }
    ]
  },
  {
    "theme": "Bloc II (Temari Específic) - Tema 10: Comunicacions de l'Administració amb la ciutadania: anuncis, edictes i notificacions",
    "number": 18,
    "question": "Quina és la finalitat principal de l'ús del portal <code>amb.cat</code> en l'apartat de comunicacions oficials?",
    "answers": [
      { "text": "Centralitzar la Secció de Tauler d'Edictes i Anuncis per garantir la transparència i publicitat legal metropolitana.", "correct": true },
      { "text": "Oferir serveis d'entreteniment i oci per als ciutadans de l'AMB.", "correct": false },
      { "text": "Gestionar exclusivament el trànsit rodat de les rondes de Barcelona.", "correct": false },
      { "text": "Substituir les eleccions municipals per votació web.", "correct": false }
    ]
  },
  {
    "theme": "Bloc II (Temari Específic) - Tema 10: Comunicacions de l'Administració amb la ciutadania: anuncis, edictes i notificacions",
    "number": 19,
    "question": "Davant d'una notificació que incompleix els requisits formals exigits però de la qual l'interessat en té coneixement ple, quina regla regeix la convalidació o efectivitat?",
    "answers": [
      { "text": "S'entén produïda l'efectivitat a partir de la data en què l'interessat realitza una actuació que demostra el coneixement.", "correct": true },
      { "text": "L'acte queda bloquejat fins a la majoria d'edat de l'expedient.", "correct": false },
      { "text": "Es considera inexistent a tots els efectes legals.", "correct": false },
      { "text": "Només pot ser corregida pel Defensor del Poble.", "correct": false }
    ]
  },
  {
    "theme": "Bloc II (Temari Específic) - Tema 10: Comunicacions de l'Administració amb la ciutadania: anuncis, edictes i notificacions",
    "number": 20,
    "question": "En quin supòsit es recorre a la publicació d'un edicte al tauler d'edictes o diari oficial en lloc de fer una notificació personal?",
    "answers": [
      { "text": "Quan els interessats són una pluralitat indeterminada de persones o quan sent individualitzada, la notificació ha estat infructuosa.", "correct": true },
      { "text": "Sempre que ho demani voluntàriament qualsevol veí de l'AMB.", "correct": false },
      { "text": "Únicament durant els mesos d'estiu per manca de personal.", "correct": false },
      { "text": "Quan es tracta d'actes favorables per al ciutadà.", "correct": false }
    ]
  },
  {
    "theme": "Bloc II (Temari Específic) - Tema 10: Comunicacions de l'Administracior amb la ciutadania: anuncis, edictes i notificacions",
    "number": 21,
    "question": "Quina característica defineix la obligatorietat de l'ús de mitjans electrònics per a les persones jurídiques segons l'article 14 de la LPACAP?",
    "answers": [
      { "text": "És un dret potestatiu del qual poden prescindir quan vulguin.", "correct": false },
      { "text": "És una obligació legal de relacionar-se electrònicament amb les administracions públiques en tot cas.", "correct": true },
      { "text": "Només s'aplica si la persona jurídica té menys de 5 treballadors.", "correct": false },
      { "text": "Depèn exclusivament de la decisió de l'alcalde del municipi.", "correct": false }
    ]
  },
  {
    "theme": "Bloc II (Temari Específic) - Tema 10: Comunicacions de l'Administració amb la ciutadania: anuncis, edictes i notificacions",
    "number": 22,
    "question": "Quin és l'efecte de no incloure en una notificació la indicació dels recursos que es poden interposar?",
    "answers": [
      { "text": "Converteix la notificació en defectuosa, afectant el còmput dels terminis d'interposició per a l'interessat.", "correct": true },
      { "text": "Fa que l'acte sigui immediatament ferm i inatacable.", "correct": false },
      { "text": "No té cap repercussió jurídica ni afecta l'interessat.", "correct": false },
      { "text": "Determina la destitució fulminant de l'interventor.", "correct": false }
    ]
  },
  {
    "theme": "Bloc II (Temari Específic) - Tema 10: Comunicacions de l'Administració amb la ciutadania: anuncis, edictes i notificacions",
    "number": 23,
    "question": "Com s'estructura la gestió telemàtica de les comunicacions oficials a l'AMB per garantir l'auditoria i la integritat de les notificacions als ciutadans?",
    "answers": [
      { "text": "Mitjançant registres electrònics i plataformes segures que emeten justifiants acreditatius de l'enviament, posada a disposició i accés.", "correct": true },
      { "text": "Mitjançant missatges de correu electrònic convencional sense signatura digital.", "correct": false },
      { "text": "Mitjançant comunicacions a través de bústies de xarxes socials obertes.", "correct": false },
      { "text": "Mitjançant publicació física exclusiva en bústies particulars.", "correct": false }
    ]
  },
  {
    "theme": "Bloc II (Temari Específic) - Tema 10: Comunicacions de l'Administració amb la ciutadania: anuncis, edictes i notificacions",
    "number": 24,
    "question": "Quina és la finalitat de l'avís previ de posada a disposició d'una notificació electrònica (per exemple, via correu electrònic o SMS)?",
    "answers": [
      { "text": "Facilitar i informar l'interessat que té una notificació pendent a la seu electrònica, tot i que la seva falta d'enviament no invalida la notificació si es posa a disposició correctament.", "correct": true },
      { "text": "Substituir completament la notificació electrònica oficial.", "correct": false },
      { "text": "Ampliar automàticament el termini de contestació en 30 dies més.", "correct": false },
      { "text": "Cobrar una taxa addicional per l'avís al ciutadà.", "correct": false }
    ]
  },
  {
    "theme": "Bloc II (Temari Específic) - Tema 10: Comunicacions de l'Administració amb la ciutadania: anuncis, edictes i notificacions",
    "number": 25,
    "question": "En el context de les oposicions C1 de l'AMB, quina d'obertura de terminis es considera correcta quan es practica una notificació en dia inhàbil per a l'administració emissora però amb recepció efectiva per l'interessat?",
    "answers": [
      { "text": "El còmput dels terminis s'inicia a partir del dia següent hàbil a la recepció efectiva o accés per part de l'interessat d'acord amb lesregles generals de còmput de la LPACAP.", "correct": true },
      { "text": "Els terminis comencen a comptar de manera retroactiva des del moment en què es va redactar l'acte.", "correct": false },
      { "text": "S'anul·la el termini per ser inhàbil el dia d'entrada.", "correct": false },
      { "text": "Es computen exclusivament en dies naturals consecutius sense excepció de festius.", "correct": false }
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