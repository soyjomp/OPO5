const TEST_ID = "23test.js"; 

const questions = [

 {
    "theme": "Bloc IV (Temari Específic) - Tema 23: L’acte administratiu. L’executivitat dels actes administratius. La invalidesa de l’acte administratiu: actes nuls i actes anul·lables",
    "number": 1,
    "question": "Segons la Llei 39/2015 i el temari aplicat a l'AMB, quina característica principal defineix l'acte administratiu anomenat 'presumpte'?",
    "answers": [
      { "text": "Hi ha una exteriorització clara i inequívoca de la manifestació de voluntat mitjançant un llenguatge escrit o mímic.", "correct": false },
      { "text": "Es dedueix de la conducta administrativa de forma raonable sense una manifestació externa formal.", "correct": false },
      { "text": "Davant de la inacció de l'Administració en termini, l'ordenament jurídic fixa el significat de la conducta mitjançant el silenci.", "correct": true },
      { "text": "S'emet per un òrgan manifestament incompetent per raó de la matèria o del territori.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 23: L’acte administratiu. L’executivitat dels actes administratius. La invalidesa de l’acte administratiu: actes nuls i actes anul·lables",
    "number": 2,
    "question": "Dins de la classificació dels actes administratius segons el procediment, quin tipus d'acte de tràmit és impugnable per separat de la resolució definitiva?",
    "answers": [
      { "text": "Qualsevol informe o proposta no vinculant emesa durant la fase d'instrucció.", "correct": false },
      { "text": "Només els actes de tràmit qualificats, que decideixen directament o indirectament el fons, impedeixen continuar el procediment o produeixen indefensió.", "correct": true },
      { "text": "Tots els actes de tràmit, ja que formen part del mateix expedient administratiu.", "correct": false },
      { "text": "Únicament aquells actes de tràmit que estiguin expressament qualificats com a favorables per l'interessat.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 23: L’acte administratiu. L’executivitat dels actes administratius. La invalidesa de l’acte administratiu: actes nuls i actes anul·lables",
    "number": 3,
    "question": "Quina diferència fonamental existeix entre els actes reglats i els actes discrecionals segons el marc de les potestats administratives?",
    "answers": [
      { "text": "Els actes reglats permeten a l'Administració triar lliurement el moment d'actuació, mentre que els discrecionals no.", "correct": false },
      { "text": "En els actes reglats l'ordenament preveu l'actuació en tots els aspectes sense marge d'interpretació, mentre que els discrecionals permeten opcions respectant la finalitat legal per evitar la desviació de poder.", "correct": true },
      { "text": "Els actes discrecionals no estan subjectes a cap control per part de la jurisdicció contenciosa administrativa.", "correct": false },
      { "text": "Els actes reglats requereixen sempre una motivació obligatòria per part del ple de la corporació.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 23: L’acte administratiu. L’executivitat dels actes administratius. La invalidesa de l’acte administratiu: actes nuls i actes anul·lables",
    "number": 4,
    "question": "En relació amb els actes de gravamen i els actes favorables, quina obligació formal s'exigeix generalment quant a la seva motivació?",
    "answers": [
      { "text": "Tots dos tipus d'actes requereixen una motivació exhaustiva i prèvia per part de l'òrgan competent.", "correct": false },
      { "text": "Els actes favorables necessiten motivació obligatòria, mentre que els de gravamen no la requereixen.", "correct": false },
      { "text": "Els actes de gravamen restringeixen drets i requereixen motivació expressa obligatòria, a diferència dels favorables que en general no l'han de tenir.", "correct": true },
      { "text": "Cap dels dos tipus d'actes necessita motivació si s'emeten en el marc de la potestad reglada.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 23: L’acte administratiu. L’executivitat dels actes administratius. La invalidesa de l’acte administratiu: actes nuls i actes anul·lables",
    "number": 5,
    "question": "Quin és el principi pel qual els actes administratius es presumeixen vàlids i produeixen efectes des de la data en què es dicten?",
    "answers": [
      { "text": "El principi d'autotutela declarativa i executiva.", "correct": true },
      { "text": "El principi de convalidació i conservació d'actes.", "correct": false },
      { "text": "El principi d'incomunicació de la invalidesa.", "correct": false },
      { "text": "El principi d'especialitat quantitativa i qualitativa.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 23: L’acte administratiu. L’executivitat dels actes administratius. La invalidesa de l’acte administratiu: actes nuls i actes anul·lables",
    "number": 6,
    "question": "Quins mitjans d'execució forzosa pot utilitzar l'Administració (com l'AMB) segons l'article 100 de la Llei 39/2015 en cas d'incompliment?",
    "answers": [
      { "text": "Només la interposició de recursos contenciosos i la suspensió temporal de drets.", "correct": false },
      { "text": "Constrenyiment sobre el patrimoni, multa coercitiva, execució subsidiària i compulsió sobre les persones.", "correct": true },
      { "text": "Únicament l'embargament de béns immobles i la inhabilitació de l'interessat.", "correct": false },
      { "text": "La declaració automàtica de nul·litat de ple dret i la revisió d'ofici immediata.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 23: L’acte administratiu. L’executivitat dels actes administratius. La invalidesa de l’acte administratiu: actes nuls i actes anul·lables",
    "number": 7,
    "question": "D'acord amb l'article 47.1 de la Llei 39/2015, quin dels següents supòsits constitueix una causa de nul·litat de ple dret d'un acte administratiu?",
    "answers": [
      { "text": "Qualsevol infracció menor de l'ordenament jurídic o desviació de poder genèrica.", "correct": false },
      { "text": "Els actes dictats amb omissió total i absoluta del procediment legalment establert o de les regles essencials dels òrgans col·legiats.", "correct": true },
      { "text": "Els actes que incompleixin un termini merament formal no essencial establert pel procediment.", "correct": false },
      { "text": "Qualcevol defecte de forma que no produeixi indefensió material a l'interessat.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 23: L’acte administratiu. L’executivitat dels actes administratius. La invalidesa de l’acte administratiu: actes nuls i actes anul·lables",
    "number": 8,
    "question": "Quina és la regla general de la invalidesa a l'ordenament administratiu espanyol segons l'article 48 de la Llei 39/2015?",
    "answers": [
      { "text": "La nul·litat de ple dret, ja que qualsevol infracció comporta la ineficàcia radical de l'acte.", "correct": false },
      { "text": "L'anul·labilitat, essent la nul·litat de ple dret un règim excepcional aplicable només als supòsits taxats de l'article 47.1.", "correct": true },
      { "text": "La convalidació automàtica de qualsevol acte en el termini de tres mesos.", "correct": false },
      { "text": "La conversió obligatòria de l'acte en una mera irregularitat no inalienable.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 23: L’acte administratiu. L’executivitat dels actes administratius. La invalidesa de l’acte administratiu: actes nuls i actes anul·lables",
    "number": 9,
    "question": "Pel que fa a la convalidació dels actes administratius viciats, quina afirmació és correctament aplicable?",
    "answers": [
      { "text": "Els actes nuls de ple dret poden ser convalidats per l'Administració si transcorre un any des de la seva emissió.", "correct": false },
      { "text": "L'Administració pot validar els actes anul·lables mitjançant l'esmena dels vicis de què adoleixen, mentre que els nuls són insubsanables.", "correct": true },
      { "text": "Cap acte invàlid pot ser objecte de convalidació sota cap circumstància procedimental.", "correct": false },
      { "text": "Només els actes nuls poden ser validats per l'òrgan superior jeràrquic.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 23: L’acte administratiu. L’executivitat dels actes administratius. La invalidesa de l’acte administratiu: actes nuls i actes anul·lables",
    "number": 10,
    "question": "Com s'aplica el principi de conservació dels actes administratius en cas de declarar la nul·litat d'algunes actuacions d'un procediment?",
    "answers": [
      { "text": "La nul·litat d'un acte comporta necessàriament la de tot el procediment des del seu origen.", "correct": false },
      { "text": "L'òrgan que declara la nul·litat o anul·la les actuacions ha de disposar la conservació d'aquells actes i tràmits el contingut dels quals s'hauria mantingut igual si no s'hagués comès la infracció.", "correct": true },
      { "text": "S'anul·len automàticament tots els actes successius i independents del mateix expedient.", "correct": false },
      { "text": "Només es conserven els actes que tinguin un contingut favorable per a l'administració.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 23: L’acte administratiu. L’executivitat dels actes administratius. La invalidesa de l’acte administratiu: actes nuls i actes anul·lables",
    "number": 11,
    "question": "Què estableix la tècnica de la 'conversió' d'actes administratius segons la normativa aplicable?",
    "answers": [
      { "text": "Permet transformar un acte nul o anul·lable en un reglament de caràcter general.", "correct": false },
      { "text": "Si els actes nuls o anul·lables contenen els elements constitutius d'un altre de diferent, poden produir els efectes d'aquest.", "correct": true },
      { "text": "Converteix un acte presumpte per silenci negatiu en un acte exprés favorable.", "correct": false },
      { "text": "Transforma una irregularitat no invalidant en un acte de gravamen motivat.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 23: L’acte administratiu. L’executivitat dels actes administratius. La invalidesa de l’acte administratiu: actes nuls i actes anul·lables",
    "number": 12,
    "question": "En el context de la gestió i notificació d'actes a la Seu Electrònica de l'AMB (amb.cat), quina relació té amb l'article 40 de la Llei 39/2015?",
    "answers": [
      { "text": "La notificació electrònica substitueix completament la necessitat de dictar un acte administratiu exprés.", "correct": false },
      { "text": "Perquè comenci el còmput de terminis d'impugnació de les resolucions de gerència o decrets, l'acte ha de complir amb els requisits de notificació establerts legalment.", "correct": true },
      { "text": "Només s'aplica als actes d'urbanisme publicats al Butlletí Oficial de la Província (BOPB).", "correct": false },
      { "text": "Garanteix que els actes anul·lables esdevinguin nuls de ple dret si es notifiquen fora de termini.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 23: L’acte administratiu. L’executivitat dels actes administratius. La invalidesa de l’acte administratiu: actes nuls i actes anul·lables",
    "number": 13,
    "question": "Quin efecte temporal produeix la declaració de nul·litat de ple dret d'un acte administratiu?",
    "answers": [
      { "text": "Produeix efectes únicament des de la data de la seva declaració (ex nunc).", "correct": false },
      { "text": "S'estén ex tunc, és a dir, de manera retroactiva eliminant des de l'origen qualsevol efecte produït.", "correct": true },
      { "text": "Es manté vigent durant un termini màxim de quatre anys per evitar perjudicis a tercers.", "correct": false },
      { "text": "Només s'aplica si l'interessat interposa el recurs en el termini d'un mes.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 23: L’acte administratiu. L’executivitat dels actes administratius. La invalidesa de l’acte administratiu: actes nuls i actes anul·lables",
    "number": 14,
    "question": "Quina és la consideració jurídica dels defectes de forma segons l'article 63.2 de la Llei 39/2015?",
    "answers": [
      { "text": "Determinen sempre i en tot cas la nul·litat de ple dret de l'expedient.", "correct": false },
      { "text": "Només determinen l'anul·labilitat quan l'acte manca dels requisits formals indispensables per aconseguir la seva fi o causa indefensió a l'interessat.", "correct": true },
      { "text": "S'equiparen automàticament a la desviació de poder.", "correct": false },
      { "text": "Invaliden l'acte només si s'emeten per un òrgan competent en matèria de personal.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 23: L’acte administratiu. L’executivitat dels actes administratius. La invalidesa de l’acte administratiu: actes nuls i actes anul·lables",
    "number": 15,
    "question": "Si un acte administratiu dictat per l'AMB pateix d'una petita irregularitat no invalidant per un vici de forma menyspreable, què comporta?",
    "answers": [
      { "text": "L'obligació de revisar d'ofici l'acte en qualsevol moment.", "correct": false },
      { "text": "Que l'acte es mantingui vàlid, tot i que es pugui exigir responsabilitat disciplinària o patrimonial si escau.", "correct": true },
      { "text": "La necessitat de convalidació expressa per part del Consell Metropolità.", "correct": false },
      { "text": "La suspensió automàtica de la seva executivitat.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 23: L’acte administratiu. L’executivitat dels actes administratius. La invalidesa de l’acte administratiu: actes nuls i actes anul·lables",
    "number": 16,
    "question": "Segons el règim dels actes administratius, quin valor té un acte dictat per un òrgan manifestament incompetent per raó de la matèria o del territori?",
    "answers": [
      { "text": "És un acte merament regular i vàlid si no s'impugna en termini.", "correct": false },
      { "text": "És un acte anul·lable susceptible de convalidació posterior.", "correct": false },
      { "text": "És un acte nul de ple dret d'acord amb l'article 47.1 de la Llei 39/2015.", "correct": true },
      { "text": "És un acte de tràmit no qualificat exempt de responsabilitat.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 23: L’acte administratiu. L’executivitat dels actes administratius. La invalidesa de l’acte administratiu: actes nuls i actes anul·lables",
    "number": 17,
    "question": "Quina característica presenten els actes administratius respecte a la seva exteriorització en relació amb els actes expressos?",
    "answers": [
      { "text": "Es dedueixen exclusivament de la passivitat de l'administració davant d'una sol·licitud.", "correct": false },
      { "text": "Hi ha una exteriorització clara i inequívoca de la voluntat, que pot ser oral, escrita o mímica.", "correct": true },
      { "text": "S'identifiquen sempre amb el silenci administratiu negatiu.", "correct": false },
      { "text": "Requereixen necessàriament la publicació al Butlletí Oficial de la Província per tenir validesa.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 23: L’acte administratiu. L’executivitat dels actes administratius. La invalidesa de l’acte administratiu: actes nuls i actes anul·lables",
    "number": 18,
    "question": "Quin tipus d'acte administratiu amplia el patrimoni jurídic del destinatari atorgant-li un dret o una facultat?",
    "answers": [
      { "text": "Un acte de gravamen o sancionador.", "correct": false },
      { "text": "Un acte favorable o declaratiu de drets.", "correct": true },
      { "text": "Un acte de tràmit no qualificat.", "correct": false },
      { "text": "Un acte presumpte desestimatori.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 23: L’acte administratiu. L’executivitat dels actes administratius. La invalidesa de l’acte administratiu: actes nuls i actes anul·lables",
    "number": 19,
    "question": "Quina és la repercussió de la realització d'actuacions administratives fora del termini establert segons l'article 63.3 de la Llei 39/2015?",
    "answers": [
      { "text": "Determinen sempre la nul·litat radical de totes les actuacions posteriors.", "correct": false },
      { "text": "Únicament són anul·lables quan així ho imposa la naturalesa de l'acte o termini.", "correct": true },
      { "text": "Converteixen automàticament l'expedient en un procediment de convalidació.", "correct": false },
      { "text": "Eximeixen l'Administració de qualsevol tipus de responsabilitat patrimonial.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 23: L’acte administratiu. L’executivitat dels actes administratius. La invalidesa de l’acte administratiu: actes nuls i actes anul·lables",
    "number": 20,
    "question": "En relació amb els actes ferms i la seva revisió, quina excepció important ha establert la jurisprudència sobre els actes nuls de ple dret?",
    "answers": [
      { "text": "Els actes nuls adquireixen fermesa absoluta si transcorren quatre anys des de la seva publicació.", "correct": false },
      { "text": "La impossibilitat que els actes nuls de ple dret adquireixin fermesa, encara que es deixi transcórrer el termini establert per impugnar-los.", "correct": true },
      { "text": "Només poden ser ferms si s'han notificat mitjançant el tauler d'edictes de l'AMB.", "correct": false },
      { "text": "Els actes nuls es converteixen en anul·lables un cop transcorregut el termini d'alçada.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 23: L’acte administratiu. L’executivitat dels actes administratius. La invalidesa de l’acte administratiu: actes nuls i actes anul·lables",
    "number": 21,
    "question": "Quina funció compleix el tauler electrònic i la publicació al BOPB en la pràctica de l'AMB respecte als actes urbanístics?",
    "answers": [
      { "text": "Garanteix l'eficàcia i executivitat general dels acords normatius o de planejament davant de tercers.", "correct": true },
      { "text": "Substitueix la necessitat de motivar els actes de gravamen o sancionadors.", "correct": false },
      { "text": "Impedeix la interposició de recursos de reposició per part dels interessats.", "correct": false },
      { "text": "Converteix els actes de tràmit no qualificats en actes susceptibles de recurs contenciós.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 23: L’acte administratiu. L’executivitat dels actes administratius. La invalidesa de l’acte administratiu: actes nuls i actes anul·lables",
    "number": 22,
    "question": "Segons la teoria dels actes administratius, quan ens trobem davant d'un acte tàcit?",
    "answers": [
      { "text": "Quan l'Administració emet una resolució escrita detallada després d'un procediment d'ofici.", "correct": false },
      { "text": "Quan davant d'una conducta administrativa es presumeix raonablement l'existència d'una voluntat que produeix efectes jurídics sense una manifestació externa formal.", "correct": true },
      { "text": "Quan el silenci administratiu té caràcter desestimatori per imperatiu legal.", "correct": false },
      { "text": "Quan un agent de la autoritat dóna una ordre mitjançant signes mímics.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 23: L’acte administratiu. L’executivitat dels actes administratius. La invalidesa de l’acte administratiu: actes nuls i actes anul·lables",
    "number": 23,
    "question": "Quina és la condició que exigeix la jurisprudència perquè es pugui parlar de discrecionalitat administrativa i no d'arbitrarietat?",
    "answers": [
      { "text": "Que l'Administració actue sense subjectur-se a cap mena de norma jurídica prèvia.", "correct": false },
      { "text": "Que els fins que persegueix o ha de perseguir la potestat estiguin prèviament determinats a l'ordenament jurídic.", "correct": true },
      { "text": "Que l'acte sigui sempre de naturalesa favorable i no contingui cap gravamen.", "correct": false },
      { "text": "Que l'òrgan competent delegui la seva signatura en el president de la corporació.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 23: L’acte administratiu. L’executivitat dels actes administratius. La invalidesa de l’acte administratiu: actes nuls i actes anul·lables",
    "number": 24,
    "question": "Quin tipus de vici incorre un acte administratiu quan l'Administració exercita una potestat discrecional per a una finalitat diferent de la predeterminada per la llei?",
    "answers": [
      { "text": "Incompetència manifesta per raó del territori.", "correct": false },
      { "text": "Vici de desviació de poder.", "correct": true },
      { "text": "Omissió total i absoluta del procediment legalment establert.", "correct": false },
      { "text": "Irregularitat no invalidant de caràcter formal.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 23: L’acte administratiu. L’executivitat dels actes administratius. La invalidesa de l’acte administratiu: actes nuls i actes anul·lables",
    "number": 25,
    "question": "Dins de les tècniques de conservació dels actes administratius, si un vici consisteix en la falta d'una autorització prèvia, com pot ser validat l'acte segons l'article 67 de la normativa aplicable?",
    "answers": [
      { "text": "Mitjançant la declaració de nul·litat de ple dret per part de la jurisdicció contenciosa.", "correct": false },
      { "text": "Amb l'atorgament d'aquesta autorització per l'òrgan competent.", "correct": true },
      { "text": "Mitjançant la conversió automàtica de l'acte en un procediment de convalidació extraordinària.", "correct": false },
      { "text": "A través de la retroacció de tot l'expedient fins a la fase inicial d'iniciació.", "correct": false }
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