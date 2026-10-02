const TEST_ID = "recop1test.js"; 

const questions = [
{
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 1,
    "question": "Segons la Constitució Espanyola de 1978, quina data de publicació al BOE va determinar la seva entrada en vigor efectiva?",
    "answers": [
      { "text": "El 31 d'octubre de 1978", "correct": false },
      { "text": "El 6 de desembre de 1978", "correct": false },
      { "text": "El 27 de desembre de 1978", "correct": false },
      { "text": "El 29 de desembre de 1978", "correct": true }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 2,
    "question": "Quin article de la Constitució Espanyola estableix que Espanya es constitueix en un Estat social i democràtic de Dret, i quins són els seus valors superiors?",
    "answers": [
      { "text": "L'article 1.1; i els valors són la llibertat, la justícia, la igualtat i el pluralisme polític", "correct": true },
      { "text": "L'article 2; i els valors són la unitat, l'autonomia, la solidaritat i la cooperació", "correct": false },
      { "text": "L'article 9.3; i els valors són la legalitat, la jerarquia normativa i la seguretat jurídica", "correct": false },
      { "text": "L'article 10.1; i els valors són la dignitat de la persona, els drets inviolables i el lliure desenvolupament", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 3,
    "question": "D'acord amb l'article 9.3 de la CE, quin principi jurídic es refereix a la prohibició de l'actuació arbitrària dels poders públics?",
    "answers": [
      { "text": "El principi de jerarquia normativa", "correct": false },
      { "text": "El principi de seguretat jurídica", "correct": false },
      { "text": "El principi d'interdicció de l'arbitrarietat", "correct": true },
      { "text": "El principi de responsabilitat patrimonial", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 4,
    "question": "Quin nivell de protecció i garantia constitucional s'aplica específicament als drets recollits a la Secció 1a del Capítol II del Títol I de la CE (articles 15 a 29)?",
    "answers": [
      { "text": "Regulació per llei ordinària i protecció davant els tribunals ordinaris sense caràcter preferent", "correct": false },
      { "text": "Reserva de llei orgànica, protecció judicial mitjançant procediment preferent i sumari, i recurs d'empara davant el Tribunal Constitucional", "correct": true },
      { "text": "Caràcter de principis rectors de la política social i econòmica sense al·legació directa", "correct": false },
      { "text": "Protecció mitjançant el Defensor del Poble exclusivament en règim d'estat d'alarma", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 5,
    "question": "Segons el règim de garanties de l'article 53 de la CE, quin article del Títol I gaudeix de protecció mitjançant el procediment basat en els principis de preferència i sumari, i recurs d'empara, tot i no pertànyer a la Secció 1a del Capítol II?",
    "answers": [
      { "text": "L'article 10, relatiu a la dignitat de la persona", "correct": false },
      { "text": "L'article 14, relatiu al principi d'igualtat davant la llei", "correct": true },
      { "text": "L'article 33, relatiu al dret a la propietat privada", "correct": false },
      { "text": "L'article 39, relatiu a la protecció de la família i la infància", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 6,
    "question": "Quin tractament reben els drets i principis reconeguts en el Capítol III del Títol I de la Constitució (Principis Rectors de la Política Social i Econòmica)?",
    "answers": [
      { "text": "Poden ser invocats directament davant qualsevol jutge o tribunal ordinari de forma immediata", "correct": false },
      { "text": "Exigeixen necessàriament regulació per llei orgànica i disposen de recurs d'empara al Tribunal Constitucional", "correct": false },
      { "text": "Informen la legislació positiva, la pràctica judicial i l'actuació dels poders públics, i només poden ser al·legats d'acord amb les lleis que els desenvolupin", "correct": true },
      { "text": "Constitueixen drets fonamentals de màxima protecció immediata", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 7,
    "question": "Quina és la regla general establerta a l'article 11.2 de la CE pel que fa a la nacionalitat espanyola d'origen?",
    "answers": [
      { "text": "Cap espanyol d'origen pot ésser privat de la seva nacionalitat", "correct": true },
      { "text": "Qualsevol espanyol pot perdre la nacionalitat si resideix a l'estranger durant més de deu anys sense comunicar-ho", "correct": false },
      { "text": "La nacionalitat d'origen pot ser revocada per sentència ferma en cas de comissió de qualsevol delicte dolós", "correct": false },
      { "text": "L'adquisició de la nacionalitat d'un altre país comporta automàticament la pèrdua de la condició d'espanyol d'origen", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 8,
    "question": "Segons l'article 55.2 de la CE, quins drets o articles poden ser suspesos de forma individualitzada, amb la intervenció judicial i el control adequat, en relació amb investigacions de bandes armades o elements terroristes?",
    "answers": [
      { "text": "Els articles 15, 16 i 18", "correct": false },
      { "text": "Els articles 17.2, 18.2 i 18.3", "correct": true },
      { "text": "Els articles 20.1.a, 21 i 28.2", "correct": false },
      { "text": "Tots els drets compresos entre el 14 i el 29", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 9,
    "question": "Quin procediment de reforma constitucional exigeix, d'acord amb l'article 168 de la CE, la votació favorable de les dos terceres parts de cadascuna de les Cambres, la dissolució immediata d'aquestes i un referèndum obligatori?",
    "answers": [
      { "text": "La reforma ordinària per a qualsevol article de l'articulat general", "correct": false },
      { "text": "La revisió total de la Constitució o la modificació del Títol Preliminar, de la Secció 1a del Capítol II del Títol I, o del Títol II", "correct": true },
      { "text": "La modificació de qualsevol aspecte relacionat amb les Comunitats Autònomes del Títol VIII", "correct": false },
      { "text": "La reforma dels articles compresos entre el 56 i el 65 relatius a la Corona", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 10,
    "question": "Segons l'article 169 de la Constitució Espanyola, quina limitació temporal s'imposa a la iniciativa de reforma constitucional?",
    "answers": [
      { "text": "No es pot iniciar cap reforma durant els períodes de vacances parlamentàries", "correct": false },
      { "text": "No es pot iniciar en temps de guerra o d'estats d'alarma, excepció o setge", "correct": true },
      { "text": "No es pot iniciar durant el primer any de legislatura de les Corts Generals", "correct": false },
      { "text": "No es pot iniciar si hi ha un recurs d'inconstitucionalitat pendent davant el Tribunal Constitucional", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 11,
    "question": "En el marc de l'organització territorial de l'Estat segons l'article 137 de la CE, com es desglossen les entitats en què s'organitza territorialment l'Estat?",
    "answers": [
      { "text": "En municipis, comarques i comunitats autònomes", "correct": false },
      { "text": "En municipis, províncies i en les comunitats autònomes que es constitueixin", "correct": true },
      { "text": "Només en comunitats autònomes i àrees metropolitanes reconegudes per llei estatal", "correct": false },
      { "text": "En províncies, illes i entitats locals supramunicipals delegades de l'Estat", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 12,
    "question": "Quin principi d'actuació de l'Administració Pública recollit a l'article 103.1 de la CE serveix de fonament directe a l'actuació de l'Àrea Metropolitana de Barcelona (AMB) en la coordinació dels 36 municipis metropolitans?",
    "answers": [
      { "text": "L'eficàcia, la jerarquia, la descentralització, la desconcentració i la coordinació", "correct": true },
      { "text": "La centralització estricta i la subordinació jeràrquica absoluta a l'Administració General de l'Estat", "correct": false },
      { "text": "L'autonomia financera il·limitada i la independència total respecte a la legislació sectorial", "correct": false },
      { "text": "La competència exclusiva de mercat i el lucre corporatiu en la gestió dels serveis", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 13,
    "question": "Segons l'article 103.3 de la Constitució en relació amb l'accés a l'ocupació pública (com en els processos selectius C1 de l'AMB), quins principis bàsics ha de garantir la llei?",
    "answers": [
      { "text": "L'antiguitat, la designació directa i la discrecionalitat de l'òrgan competent", "correct": false },
      { "text": "El mèrit i la capacitat, en condicions d'igualtat", "correct": true },
      { "text": "La militància política i la residència obligatòria al municipi de destí", "correct": false },
      { "text": "La superació d'un sorteig públic i la titulació acadèmica mínima sense proves selectives", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 14,
    "question": "Quin òrgan és descrit a l'article 54 de la CE com l'alt comissionat de les Corts Generals per a la defensa dels drets del Títol I?",
    "answers": [
      { "text": "El Tribunal de Comptes", "correct": false },
      { "text": "El Defensor del Poble", "correct": true },
      { "text": "El Consell d'Estat", "correct": false },
      { "text": "La Fiscalia General de l'Estat", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 15,
    "question": "Quina és la majoria necessària al Congrés dels Diputats per aprovar una reforma constitucional ordinària segons l'article 167 de la CE, en el supòsit que no hi hagi acord inicial amb el Senat i s'utilitzi la comissió paritària?",
    "answers": [
      { "text": "Majoria absoluta de cada Cambra", "correct": false },
      { "text": "Votació favorable de les tres quartes partes del Congrés", "correct": false },
      { "text": "Votació favorable de les dos terceres parts del Congrés, sempre que el Senat hagi aprovat el text per majoria absoluta", "correct": true },
      { "text": "Majoria simple en ambdues cambres sense necessitat de comissió", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 16,
    "question": "Segons l'article 3 de la Constitució Espanyola, quina consideració legal rep la llengua castellana?",
    "answers": [
      { "text": "És l'única llengua existent a tot el territori de l'Estat espanyol", "correct": false },
      { "text": "És la llengua oficial de l'Estat, i tots els espanyols tenen el deure de conèixer-la i el dret de usar-la", "correct": true },
      { "text": "És una llengua d'ús optatiu en les relacions amb l'administració central de l'Estat", "correct": false },
      { "text": " té caràcter cooficial a totes les Comunitats Autònomes sense excepció", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 17,
    "question": "Quin article de la Constitució regula el dret a l'autonomia de les nacionalitats i regions que integren la Nació espanyola?",
    "answers": [
      { "text": "L'article 1", "correct": false },
      { "text": "L'article 2", "correct": true },
      { "text": "L'article 9", "correct": false },
      { "text": "L'article 137", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 18,
    "question": "Quina és la forma política de l'Estat espanyol segons estableix l'article 1.3 de la Constitució de 1978?",
    "answers": [
      { "text": "Una República Federal presidencialista", "correct": false },
      { "text": "Una Monarquia parlamentària", "correct": true },
      { "text": "Un Estat unitari centralitzat", "correct": false },
      { "text": "Una Democràcia assembleària representativa", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 19,
    "question": "A partir de quina edat s'estableix la majoria d'edat per als espanyols segons l'article 12 de la Constitució Espanyola?",
    "answers": [
      { "text": "Als 16 anys", "correct": false },
      { "text": "Als 18 anys", "correct": true },
      { "text": "Als 21 anys", "correct": false },
      { "text": "Als 25 anys", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 20,
    "question": "Quin valor jurídic s'atribueix al Preàmbul de la Constitució Espanyola de 1978?",
    "answers": [
      { "text": "Té plena força jurídica vinculant idèntica a la dels articles del Títol Preliminar", "correct": false },
      { "text": "És un text merament declaratiu i polític que manca de força jurídica obligatòria directa", "correct": true },
      { "text": "Funciona com una llei orgànica interpretativa de caràcter transversal", "correct": false },
      { "text": "Té rang superior a qualsevol article de la part dogmàtica de la Constitució", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 21,
    "question": "Segons l'article 166 de la Constitució, a qui correspon la iniciativa de reforma constitucional?",
    "answers": [
      { "text": "Exclusivament al Govern de la Nació i al Congrés dels Diputats", "correct": false },
      { "text": "Als mateixos termes previstos per a la iniciativa d'uns projectes de llei a l'article 87, incloent el Govern, el Congrés, el Senat i les Assembles de les CCAA", "correct": true },
      { "text": "Només al cos electoral mitjançant iniciativa legislativa popular avalada per 500.000 signatures", "correct": false },
      { "text": "Al Tribunal Constitucional i al Consell General del Poder Judicial conjuntament", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 22,
    "question": "Quina característica defineix la naturalesa de l'Àrea Metropolitana de Barcelona (AMB) pel que fa a la seva configuració jurídica territorial?",
    "answers": [
      { "text": "Es tracta d'una empresa mercantil de capital íntegrament públic depenent de la Generalitat", "correct": false },
      { "text": "Es configura com una entitat local d'àmbit supramunicipal amb personalitat jurídica pròpia, creada sota la legislació de règim local", "correct": true },
      { "text": "És un organisme autònom de l'Estat sense competències pròpies en matèria urbanística", "correct": false },
      { "text": "Constitueix una comunitat autònoma de caràcter especial amb potestat legislativa pròpia", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 23,
    "question": "Quin article de la Constitució consagra el principi de legalitat, la jerarquia normativa, la publicitat de les normes i la irretroactivitat de les disposicions sancionadores no favorables o restrictives de drets individuals?",
    "answers": [
      { "text": "L'article 1.1", "correct": false },
      { "text": "L'article 9.3", "correct": true },
      { "text": "L'article 24.2", "correct": false },
      { "text": "L'article 53.1", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 24,
    "question": "Segons l'estructura formal de la Constitució Espanyola de 1978, quin nombre total d'articles conté el text constitucional?",
    "answers": [
      { "text": "149 articles", "correct": false },
      { "text": "169 articles", "correct": true },
      { "text": "189 articles", "correct": false },
      { "text": "210 articles", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 1: La Constitució Espanyola de 1978",
    "number": 25,
    "question": "Quina previsió estableix l'article 55.1 de la Constitució pel que fa a la suspensió col·lectiva de determinats drets fonamentals?",
    "answers": [
      { "text": "Es pot dur a terme de manera indefinida per acord del Consell de Ministres en qualsevol circumstància", "correct": false },
      { "text": "Es pot produir quan s'acordin els estats d'excepció o de setge, afectant expressament drets com els recollits als articles 17, 18.2 i 18.3, 19, 20, entre altres", "correct": true },
      { "text": "Requereix l'aprovació prèvia del Defensor del Poble en un estat d'alarma ordinari", "correct": false },
      { "text": "Permet la suspensió total i indiscriminada de tots els articles del Títol I sense excepció", "correct": false }
    ]
  },
   {
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 1,
    "question": "Segons l'article 56.3 de la Constitució Espanyola de 1978, quina és la naturalesa jurídica de la persona del Rei?",
    "answers": [
        { "text": "És inviolable i està subjecta a responsabilitat política davant del Congrés dels Diputats", "correct": false },
        { "text": "És inviolable i no està subjecta a responsabilitat, i els seus actes necessiten sempre el reforendament per ser vàlids", "correct": true },
        { "text": "És inviolable però els seus actes personals no necessiten cap tipus de reforendament", "correct": false },
        { "text": "Està subjecta a responsabilitat civil i penal en l'exercici de les seves funcions constitucionals", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 2,
    "question": "Quin és el criteri de successió a la Corona establert a l'article 57 de la Constitució Espanyola?",
    "answers": [
        { "text": "La primogenitura i la representació, amb preferència absoluta de l'home sobre la dona en el mateix grau", "correct": true },
        { "text": "La designació directa del Rei entre els membres de la Família Reial amb l'aprovació de les Corts Generals", "correct": false },
        { "text": "La igualtat absoluta entre homes i dones segons l'ordre rigurós d'arribada a la majoria d'edat", "correct": false },
        { "text": "L'elecció per sufragi universal de la línia successòria a proposta del Govern", "correct": true }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 3,
    "question": "D'acord amb l'article 68 de la Constitució, quin nombre de diputats compon actualment el Congrés dels Diputats?",
    "answers": [
        { "text": "Un nombre fix de 300 diputats", "correct": false },
        { "text": "Un nombre variable establert per llei orgànica, fixat actualment en 350 diputats", "correct": true },
        { "text": "Exactament 400 diputats distribuïts per circumscripcions provincials", "correct": false },
        { "text": "Un mínim de 200 i un màxim de 350 diputats segons la població de cada província", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 4,
    "question": "Quina és la circumscripció electoral general per a l'elecció dels membres del Congrés dels Diputats segons la CE?",
    "answers": [
        { "text": "El municipi", "correct": false },
        { "text": "La Comunitat Autònoma", "correct": false },
        { "text": "La província", "correct": true },
        { "text": "L'illa en el cas de les províncies insulars i la comarca a la península", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 5,
    "question": "Segons l'article 69 de la Constituci, com s'estructura bàsicament el Senat com a cambra de representació territorial?",
    "answers": [
        { "text": "Amb dos senadors per cada província peninsular", "correct": false },
        { "text": "Amb quatre senadors per cada província peninsular, a més dels designats per les Comunitats Autònomes", "correct": true },
        { "text": "Amb un nombre igual de senadors per a totes les comunitats autònomes sense tenir en compte la població", "correct": false },
        { "text": "Amb designació exclusiva per part dels ajuntaments de cada província", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 6,
    "question": "Quin requisit de signatures és necessari per exercir la iniciativa legislativa popular prevista a l'article 87.3 de la CE?",    "answers": [
        { "text": "Un mínim de 50.000 signatures comprovades", "correct": false },
        { "text": "Un mínim de 500.000 signatures acreditades", "correct": true },
        { "text": "Un milió de signatures recollides en almenys deu províncies", "correct": false },
        { "text": "El 5 del cens electoral general de l'Estat", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 7,
    "question": "Segons l'article 97 de la Constitució, quines funcions correspon al Govern de la Nació?",
    "answers": [
        { "text": "Exerceix exclusivament la potestat legislativa i la direcció de la política fiscal de les comunitats autònomes", "correct": false },
        { "text": "Dirigeix la política interior i exterior, l'Administració civil i militar i la defensa de l'Estat, exercint la funció executiva i la potestat reglamentària", "correct": true },
        { "text": "Coordina les funcions de tots els tribunals de justícia i designa directament els magistrats del Tribunal Constitucional", "correct": false },
        { "text": "Assumeix la direcció suprema de les Corts Generals en moments d'emergència nacional", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 8,
    "question": "Quins principis bàsics consagra l'article 103.1 de la CE respecte a l'actuació de l'Administració Pública?",
    "answers": [
        { "text": "Eficàcia, jerarquia, descentralització, desconcentració i coordinació", "correct": true },
        { "text": "Submissió estricta al dret privat, centralització i igualtat d'oportunitats", "correct": false },
        { "text": "Autonomia financera, independència orgànica i neutralitat política absoluta", "correct": false },
        { "text": "Celeritat, transparència, participació directa i obligatorietat de resultats", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 9,
    "question": "Segons l'article 117 de la Constitució, quin principi bàsic regeix l'organització i funcionament dels tribunals de justícia?",    "answers": [
        { "text": "El principi de descentralització jurisdiccional per comunitats autònomes", "correct": false },
        { "text": "El principi d'unitat jurisdiccional com a base de l'organització i funcionament dels tribunals", "correct": true },
        { "text": "El principi de jerarquia militar aplicable a tots els magistrats i jutges", "correct": false },
        { "text": "El principi d'electivitat popular dels jutges de primera instància", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 10,
    "question": "Quin és l'òrgan de govern del Poder Judicial segons l'article 122 de la Constitució Espanyola?",
    "answers": [
        { "text": "El Ministeri de Justícia", "correct": false },
        { "text": "El Tribunal Suprem", "correct": false },
        { "text": "El Consell General del Poder Judicial (CGPJ)", "correct": true },
        { "text": "La Fiscalia General de l'Estat", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 11,
    "question": "Quines entitats territorials componen l'organització territorial de l'Estat segons l'article 137 de la CE?",
    "answers": [
        { "text": "Només les Comunitats Autònomes i les províncies", "correct": false },
        { "text": "Municipis, províncies i les Comunitats Autònomes que es constitueixin", "correct": true },
        { "text": "Només l'Administració General de l'Estat i els ens locals supramunicipals", "correct": false },
        { "text": "Comarques, vegueries i àrees metropolitanes exclusivament", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 12,
    "question": "Com es defineix bàsicament el Municipi d'acord amb l'article 140 de la CE i la legislació de règim local?",
    "answers": [
        { "text": "Una entitat supramunicipal depenent de la Diputació Provincial", "correct": false },
        { "text": "L'entitat bàsica de l'organització territorial de l'Estat, amb personalitat jurídica pròpia", "correct": true },
        { "text": "Un òrgan de gestió desconcentrat de la Comunitat Autònoma", "correct": false },
        { "text": "Una associació voluntaria de ciutadans amb fins exclusivament culturals", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 13,
    "question": "Com s'integra i es configura institucionalment l'Àrea Metropolitana de Barcelona (AMB) en relació amb el marc constitucional?",
    "answers": [
        { "text": "Com un ministeri especial dependent directament de l'Administració General de l'Estat", "correct": false },
        { "text": "Com un ens local supramunicipal de caràcter territorial basat en la previsió de l'agrupació de municipis i l'autonomia local garantida constitucionalment", "correct": true },
        { "text": "Com una província de règim especial exempta de la tutela de la Generalitat", "correct": false },
        { "text": "Com una societat mercantil de capital íntegrament públic sense potestat administrativa", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 14,
    "question": "Quina és la composició quantitativa del Tribunal Constitucional establerta a l'article 159 de la CE?",
    "answers": [
        { "text": "10 membres nomenats per un període de 6 anys", "correct": false },
        { "text": "12 membres nomenats pel Rei per un període de 9 anys, renovables per terços", "correct": true },
        { "text": "15 magistrats triats directament per les assemblees de les comunitats autònomes", "correct": false },
        { "text": "8 membres elegits pel Consell General del Poder Judicial", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 15,
    "question": "D'entre les opcions següents, quins òrgans o subjectes estan legitimats per interposar el recurs d'inconstitucionalitat segons la CE?",
    "answers": [
        { "text": "Qualsevol ciutadà major d'edat que acrediti un interès legítim", "correct": false },
        { "text": "El President del Govern, el Defensor del Poble, 50 Diputats, 50 Senadors i els òrgans executius i legislatius de les CCAA", "correct": true },
        { "text": "Exclusivament el Tribunal Suprem i el Fiscal General de l'Estat", "correct": false },
        { "text": "Qualsevol jutge o tribunal de manera autònoma sense necessitat de plantejar qüestió prèvia", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 16,
    "question": "Quin objectiu té el recurs d'empara davant del Tribunal Constitucional?",
    "answers": [
        { "text": "Controlar la constitucionalitat de les lleis orgàniques aprovades per les Corts Generals", "correct": false },
        { "text": "Protegir els drets i llibertats reconeguts en els articles 14 a 29, més l'article 30.2 de la CE, enfront de violacions originades per poders públics", "correct": true },
        { "text": "Resoldre els conflictes de competència entre l'Estat i les comunitats autònomes", "correct": false },
        { "text": "Impugnar els reglaments de les administracions locals que infringeixin el principi d'autonomia", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 17,
    "question": "Quin valor tenen les sentències del Tribunal Constitucional segons l'article 164 de la CE?",
    "answers": [
        { "text": "Tenen valor de cosa jutjada a partir de l'endemà de la seva publicació i vinculen a tots els poders públics", "correct": true },
        { "text": "Són merament recomanatòries per als tribunals ordinaris de justícia", "correct": false },
        { "text": "Necessiten una ratificació posterior del Ple del Congrés dels Diputats per ser obligatòries", "correct": false },
        { "text": "Només produeixen efectes retroactius per a les sentències fermes dictades en matèria penal", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 18,
    "question": "Segons l'article 152 de la CE, quina és la norma institucional bàsica de cada Comunitat Autònoma?",
    "answers": [
        { "text": "El reglament d'organització interior aprovat per la seva assemblea legislativa", "correct": false },
        { "text": "L'Estatut d'Autonomia", "correct": true },
        { "text": "La llei de finances autonòmiques", "correct": false },
        { "text": "El Reial Decret de transferència de serveis estatals", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 19,
    "question": "Quin paper exerceix el Rei respecte a les lleis aprovades per les Corts Generals segons l'article 62.a) de la CE?",
    "answers": [
        { "text": "Les elabora directament mitjançant decrets-llei de necessitat", "correct": false },
        { "text": "Les sanciona i promulga", "correct": true },
        { "text": "Les pot vetar de manera indefinida si considera que vulneren els principis constitucionals", "correct": false },
        { "text": "Les sotmet obligatòriament a referèndum consultiu abans de la seva publicació", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 20,
    "question": "Com es distribueixen els 12 membres del Tribunal Constitucional entre les diferents institucions proposants?",
    "answers": [
        { "text": "3 a proposta del Congrés, 3 del Senat, 3 del Govern i 3 del CGPJ", "correct": false },
        { "text": "4 a proposta del Congrés, 4 del Senat, 2 del Govern i 2 del CGPJ", "correct": true },
        { "text": "6 a proposta de les Corts Generals en sessió conjunta i 6 a proposta del Govern", "correct": false },
        { "text": "Tots ells nomenats directament per majoria absoluta del Senat a una terna del CGPJ", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 21,
    "question": "Quina funció correspon al Senat dins del sistema bicameral de les Corts Generals establert a la Constitució?",
    "answers": [
        { "text": "És la cambra legislativa primària encarregada exclusiva dels pressupostos de l'Estat", "correct": false },
        { "text": "És la cambra alta de representació territorial que participa en el procediment legislatiu i de control", "correct": true },
        { "text": "És l'òrgan de control directe dels ministres del Govern sense competències legislatives", "correct": false },
        { "text": "És un organisme consultiu sense capacitat d'esmena o veto en cap tipus de llei", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 22,
    "question": "Quin principi econòmic i territorial recull la Constitució per corregir desequilibris entre les diferents parts del territori espanyol?",    "answers": [
        { "text": "El Fons de Compensació Interterritorial previst a l'article 158.2", "correct": true },
        { "text": "La centralització total de la recaptació fiscal a la Tresoreria General de l'Estat", "correct": false },
        { "text": "La prohibició absoluta que les comunitats autònomes emetin deute públic", "correct": false },
        { "text": "La igualtat de tarifes en tots els serveis locals municipals per imperatiu legal", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 23,
    "question": "Segons la regulació constitucional del Poder Judicial, quin requisit és indispensable per pertanyer a aquesta carrera?",
    "answers": [
        { "text": "Esser nomenat directament pels partits polítics amb representació parlamentària", "correct": false },
        { "text": "Ser jutges o magistrats independents, inamovibles, responsables i sotmesos únicament a l'imperi de la llei", "correct": true },
        { "text": "Estar adscrits orgànicament al Ministeri de l'Interior a efectes disciplinaris", "correct": false },
        { "text": "Tenir la condició de funcionari de l'Administració General de l'Estat del grup A1", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 24,
    "question": "Quina condició requereix l'exercici de la potestat reglamentària per part del Govern d'acord amb el marc constitucional i del Títol IV?",
    "answers": [
        { "text": "Ha de subordinar-se sempre a les lleis i exercir-se sota el control dels tribunals ordinaris", "correct": true },
        { "text": "Pot contradir una llei ordinària si hi ha urgència degudament motivada pel Consell de Ministres", "correct": false },
        { "text": "Només pot regular matèries reservades a la llei orgànica prèvia delegació de les Corts", "correct": false },
        { "text": "Requereix l'aprovació prèvia del Consell General del Poder Judicial", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 2: La Constitució Espanyola de 1978: organització de l’Estat",
    "number": 25,
    "question": "Quin article de la Constitució Espanyola estableix el principi d'autonomia per a la gestió dels seus interessos als municipis, províncies i comunitats autònomes?",
    "answers": [
        { "text": "L'article 2", "correct": false },
        { "text": "L'article 103", "correct": false },
        { "text": "L'article 137", "correct": true },
        { "text": "L'article 150", "correct": false }
    ]
},
{
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 1,
    "question": "Segons l'article 1 de l'Estatut d'Autonomia de Catalunya (Llei Orgànica 6/2006), de quina manera s'exerceix l'autogovern de Catalunya?",
    "answers": [
      { "text": "Com a comunitat històrica amb facultats legislatives delegades per l'Estat", "correct": false },
      { "text": "Com a nacionalitat que s'exerceix en forma de Comunitat Autònoma", "correct": true },
      { "text": "Com a regió autònoma integrada en l'Estat federal espanyol", "correct": false },
      { "text": "Com a corporació de dret públic amb competències exclusives originàries", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 2,
    "question": "Quin valor jurídic i polític té el Preàmbul de l'Estatut d'Autonomia de Catalunya de 2006?",
    "answers": [
      { "text": "Té plena força jurídica vinculant i obligatòria per a tots els poders públics", "correct": false },
      { "text": "Té caràcter declaratiu i històric d'autogovern, mancant de força jurídica obligatòria directa", "correct": true },
      { "text": "Forma part del bloc de constitucionalitat amb rang de llei orgànica interpretativa", "correct": false },
      { "text": "Té el mateix rang normatiu que els articles continguts en el Títol Preliminar", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 3, 
    "question": "d'acord amb l'Estatut, quin paper té el català pel que fa a la seva oficialitat?",
    "answers": [
      { "text": "És l'única llengua oficial a tot el territori de Catalunya en l'àmbit de l'administració pública", "correct": false },
      { "text": "És la llengua pròpia de Catalunya i és oficial, juntament amb el castellà", "correct": true },
      { "text": "És la llengua oficial preferent, tenint el castellà un caràcter supletori i no cooficial", "correct": false },
      { "text": "És la llengua pròpia i exclusiva de les institucions de la Generalitat de Catalunya", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 4,
    "question": "Quins són els símbols nacionals de Catalunya segons l'article 8 de l'Estatut d'Autonomia?",
    "answers": [
      { "text": "La senyera, la diada de l'Onze de Setembre i l'himne d''Els Segadors'", "correct": true },
      { "text": "L'escut de Catalunya, la bandera de quatre barres i la festa de Sant Jordi", "correct": false },
      { "text": "La bandera tricolor, l'himne nacional i la diada del 23 d'abril", "correct": false },
      { "text": "La senyera bicolor, la diada de Catalunya i la dansa de la sardana", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 5,
    "question": "Segons l'Estatut d'Autonomia de Catalunya, quin òrgan institucional assumeix la suprema representació de la Generalitat i l'ordinària de l'Estat a Catalunya?",
    "answers": [
      { "text": "El Parlament de Catalunya", "correct": false },
      { "text": "El Consell Executiu o Govern", "correct": false },
      { "text": "El President de la Generalitat", "correct": true },
      { "text": "El Tribunal Superior de Justícia de Catalunya", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 6,
    "question": "Quin element NO forma part de les institucions bàsiques de la Generalitat de Catalunya recollides al Títol II de l'Estatut?",
    "answers": [
      { "text": "El Parlament de Catalunya", "correct": false },
      { "text": "El Síndic de Greuges", "correct": true },
      { "text": "El President de la Generalitat", "correct": false },
      { "text": "El Govern", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 7,
    "question": "Quina característica defineix les competències exclusives de la Generalitat segons l'article 110 de l'Estatut?",
    "answers": [
      { "text": "Inclouen la potestat legislativa, la reglamentària i la funció executiva, íntegrament per la Generalitat", "correct": true },
      { "text": "La Generalitat només pot exercir la funció executiva sobre bases prèviament legislades per l'Estat", "correct": false },
      { "text": "Comparteixen el desenvolupament legislatiu amb l'Estat mitjançant lleis de transferència", "correct": false },
      { "text": "Requereixen l'autorització prèvia del Senat per a l'aprovació de qualsevol reglament executiu", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 8,
    "question": "En relació amb les competències compartides (article 111 de l'Estatut), com s'estructura la potestat normativa?",
    "answers": [
      { "text": "L'Estat fixa la legislació completa i la Generalitat té exclusivament competències d'inspecció", "correct": false },
      { "text": "Correspon a la Generalitat la potestat legislativa i la reglamentària en el marc de les bases de l'Estat", "correct": true },
      { "text": "La Generalitat aprova les bases generals i l'Estat dictarà la legislació de desenvolupament", "correct": false },
      { "text": "Són competències titularitat exclusiva de l'administració local sota tutela de la Generalitat", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 9,
    "question": "Quina és la naturalesa de les competències executives de la Generalitat segons l'article 112 de l'Estatut?",
    "answers": [
      { "text": "La Generalitat assumeix la potestat legislativa plena i la funció executiva i reglamentària interna", "correct": false },
      { "text": "Correspon a la Generalitat la potestat reglamentària interna, la funció executiva i la inspecció", "correct": true },
      { "text": "Implica la delegació de facultats estatals sense capacitat d'autoorganització pròpia", "correct": false },
      { "text": "Suposa la gestió de tributs estatals recaptats directament al territori de Catalunya", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 10,
    "question": "Segons l'Estatut d'Autonomia i la seva connexió amb el règim local, quin paper exerceix la Generalitat sobre l'administració local?",
    "answers": [
      { "text": "Té competència exclusiva en matèria de règim local, d'acord amb la Constitució", "correct": true },
      { "text": "La creació i supressió de municipis depèn exclusivament de l'Estat central", "correct": false },
      { "text": "L'Estatut no conté cap referència a l'autonomia local ni a les entitats supramunicipals", "correct": false },
      { "text": "La potestat de fixar el règim financer local recau de manera exclusiva en els ajuntaments", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 11,
    "question": "Com neix l'Àrea Metropolitana de Barcelona (AMB) en el marc de l'ordenament autonòmic?",
    "answers": [
      { "text": "Com a unió voluntària de municipis a través d'un conveni de dret privat aprovat per decret", "correct": false },
      { "text": "En compliment directe del mandat de l'Estatut de Catalunya per gestionar serveis públics supramunicipals", "correct": true },
      { "text": "Per un reial decret llei del Govern espanyol a instància de la Diputació de Barcelona", "correct": false },
      { "text": "Com un organisme autònom dependent directament del Ministeri d'Administracions Públiques", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 12,
    "question": "Quants municipis integren inicialment i formen part de l'Àrea Metropolitana de Barcelona (AMB)?",
    "answers": [
      { "text": "25 municipis", "correct": false },
      { "text": "30 municipis", "correct": false },
      { "text": "36 municipis", "correct": true },
      { "text": "42 municipis", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 13,
    "question": "Segons el procediment general de reforma de l'Estatut (article 222), a qui correspon la iniciativa de reforma?",
    "answers": [
      { "text": "Al Parlament de Catalunya, al Govern, o a les Corts Generals", "correct": true },
      { "text": "Exclusivament al President de la Generalitat o a iniciativa popular amb 500.000 signatures", "correct": false },
      { "text": "Només al Congrés dels Diputats a proposta del conjunt de comunitats autònomes", "correct": false },
      { "text": "Al Consell de Garanties Estatutàries conjuntament amb el Tribunal Constitucional", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 14,
    "question": "Quina majoria és necessària al Parlament de Catalunya per a l'aprovació prèvia d'una proposta de reforma ordinària de l'Estatut (article 223)?",
    "answers": [
      { "text": "Majoria simple de la cambra", "correct": false },
      { "text": "Majoria absoluta de la meitat més un dels diputats", "correct": false },
      { "text": "Majoria de dos terços (2/3) dels diputats", "correct": true },
      { "text": "Majoria de tres quints (3/5) amb conformitat del Senat", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 15,
    "question": "En el procediment de reforma de l'Estatut, quin tràmit és preceptiu i obligatori després de l'aprovació al Parlament de Catalunya?",
    "answers": [
      { "text": "La ratificació immediata per referèndum consultiu dels ciutadans de Catalunya", "correct": true },
      { "text": "L'aprovació directa per reial decret llei del Consell de Ministres", "correct": false },
      { "text": "El dictament vinculant del Parlament Europeu sobre cohesió territorial", "correct": false },
      { "text": "La convalidació per part dels plens de tots els ajuntaments de més de 20.000 habitants", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 16,
    "question": "Quina de les següents afirmacions relatives a la iniciativa popular de reforma de l'Estatut és CORRECTA segons l'article 222?",
    "answers": [
      { "text": "Es pot presentar directament per qualsevol grup de ciutadans si recull 100.000 signatures", "correct": false },
      { "text": "La iniciativa popular no està contemplada ni permesa per iniciar la reforma de l'Estatut", "correct": true },
      { "text": "Requereix l'aval previ del Síndic de Greuges i un referèndum previ vinculant", "correct": false },
      { "text": "S'assimila a la iniciativa legislativa popular ordinària davant el Parlament", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 17,
    "question": "Quin és el tractament de la llengua castellana a Catalunya segons el marc de l'Estatut d'Autonomia?",
    "answers": [
      { "text": "És una llengua reconeguda només per a tràmits estatals, mancant de caràcter oficial autonòmic", "correct": false },
      { "text": "És l'altra llengua oficial a Catalunya, tenint tots els ciutadans dret a usar-la", "correct": true },
      { "text": "Té caràcter de llengua estrangera subjecta a règim de traducció simultània", "correct": false },
      { "text": "És cooficial exclusivament en l'àmbit de la hisenda i la justícia metropolitana", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 18,
    "question": "Quin òrgan estatutari de la Generalitat té encomanada la funció de velar per la સુpervisió de la comptabilitat i la gestió econòmica del sector públic de la Generalitat?",
    "answers": [
      { "text": "El Consell de Garanties Estatutàries", "correct": false },
      { "text": "La Sindicatura de Comptes", "correct": true },
      { "text": "L'Oficina Antifrau de Catalunya", "correct": false },
      { "text": "El Consell de l'Audiovisual de Catalunya (CAC)", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 19,
    "question": "Quina funció principal desenvolupa el Consell de Garanties Estatutàries segons l'Estatut?",
    "answers": [
      { "text": "Resoldre els conflictes de jurisdicció entre l'Ajuntament de Barcelona i l'AMB", "correct": false },
      { "text": "Emetre dictàmens previs no vinculants però preceptius sobre la adequació a l'Estatut de les lleis del Parlament", "correct": true },
      { "text": "Controlar la legalitat dels pressupostos municipals abans de la seva aprovació definitiva", "correct": false },
      { "text": "Spbtituir el Tribunal Constitucional en l'empara de drets fonamentals", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 20,
    "question": "Segons l'Estatut d'Autonomia, on es fonamenta principalment l'autogovern de Catalunya juntament amb la Constitució?",
    "answers": [
      { "text": "En els drets històrics del poble català, actualitzats per l'Estatut", "correct": true },
      { "text": "En el dret internacional d'autodeterminació dels pobles mediterranis", "correct": false },
      { "text": "En els pactes fundacionals de la Unió Europea i la Carta de Municipis", "correct": false },
      { "text": "En la legislació històrica municipal de l'època medieval", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 21,
    "question": "Quin nivell d'estructura recull el Títol I de l'Estatut d'Autonomia de Catalunya?",
    "answers": [
      { "text": "Les institucions de la Generalitat i el seu règim de funcionament", "correct": false },
      { "text": "Els drets, els deures i els principis rectors dels ciutadans", "correct": true },
      { "text": "El finançament de la Generalitat i la relació amb l'Estat", "correct": false },
      { "text": "Les competències de la Generalitat en matèria local i sectorial", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 22,
    "question": "Quina funció té assignada el Parlament de Catalunya dins del marc institucional de la Generalitat?",
    "answers": [
      { "text": "La potestas legislativa, l'aprovació dels pressupostos i el control de l'acció del Govern", "correct": true },
      { "text": "La direcció de la política exterior i la representació ordinària de l'Estat", "correct": false },
      { "text": "L'execució directa dels serveis públics supramunicipals a través de mancomunitats", "correct": false },
      { "text": "La fiscalització comptable prèvia de tots els contractes menors de les administracions", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 23,
    "question": "Dins de l'estructura organitzativa de la Generalitat, quin òrgan col·legiat dirigeix la política i l'administració de la Generalitat?",
    "answers": [
      { "text": "El Consell Executiu o Govern", "correct": true },
      { "text": "La Comissió Bilateral Generalitat-Estat", "correct": false },
      { "text": "La Mesa del Parlament", "correct": false },
      { "text": "La Diputació Permanent", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 24,
    "question": "Segons l'Estatut, quin és el paper de l'Administració local de Catalunya en relació amb les competències de la Generalitat?",
    "answers": [
      { "text": "Els ens locals gaudixen d'autonomia per a la gestió dels seus interessos i participen en l'elaboració de lleis que els afecten", "correct": true },
      { "text": "Els ajuntaments depenen jeràrquicament dels departaments de la Generalitat segons la matèria", "correct": false },
      { "text": "L'administració local només pot assumir competències si rep una delegació expressa estatal", "correct": false },
      { "text": "Les entitats supramunicipals com l'AMB tenen rang de comunitat autònoma autònoma", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 3: L’Estatut d’autonomia de Catalunya: estructura, contingut essencial i principis generals",
    "number": 25,
    "question": "Quin article de l'Estatut d'Autonomia de Catalunya es refereix directament al marc de les competències sobre el govern local i la seva relació amb ens com l'AMB?",
    "answers": [
      { "text": "L'article 30 i 32", "correct": false },
      { "text": "L'article 90 i 93", "correct": true },
      { "text": "L'article 140 i 142", "correct": false },
      { "text": "L'article 200 i 202", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 4: L’Àrea metropolitana de Barcelona: règim jurídic, òrgans de govern i competències",
    "number": 1,
    "question": "Segons la Llei 31/2010, de l'Àrea Metropolitana de Barcelona, quina és la naturalesa jurídica de l'AMB?",
    "answers": [
      { "text": "Una mancomunitat de municipis de caràcter voluntari sotmesa al règim general local", "correct": false },
      { "text": "Una entitat local d'àmbit supramunicipal, amb personalitat jurídica pròpia i plena capacitat d'obrar", "correct": true },
      { "text": "Un organisme autònom dependent de la Generalitat de Catalunya amb competències delegades", "correct": false },
      { "text": "Una corporació de dret públic de caràcter sectorial i adscripció voluntària per als ajuntaments", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 4: L’Àrea metropolitana de Barcelona: règim jurídic, òrgans de govern i competències",
    "number": 2,
    "question": "Quants municipis integren actualment l'Àrea Metropolitana de Barcelona (AMB) d'acord amb el seu marc legal?",
    "answers": [
      { "text": "30 municipis de la primera corona de Barcelona", "correct": false },
      { "text": "33 municipis pertanyents a la província de Barcelona", "correct": false },
      { "text": "36 municipis de la conurbació de Barcelona", "correct": true },
      { "text": "42 municipis de l'àmbit de la regió metropolitana", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 4: L’Àrea metropolitana de Barcelona: règim jurídic, òrgans de govern i competències",
    "number": 3,
    "question": "Quin va ser l'origen estructural de l'AMB a partir de la seva constitució l'any 2011?",
    "answers": [
      { "text": "La fusió de la Diputació de Barcelona i els consells comarcals del Barcelonès i el Baix Llobregat", "correct": false },
      { "text": "La substitució i agrupació de les tres antigues entitats metropolitanes: la Mancomunitat de Municipis, l'Entitat del Transport i l'Entitat del Medi Ambient", "correct": true },
      { "text": "La transformació directa del Consorci Metropolità de l'Habitatge en un ens local de caràcter únic", "correct": false },
      { "text": "La segregació de l'Àrea de Serveis Territorials de l'Ajuntament de Barcelona", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 4: L’Àrea metropolitana de Barcelona: règim jurídic, òrgans de govern i competències",
    "number": 4,
    "question": "Quin és el màxim òrgan de representació i decisió de l'Àrea Metropolitana de Barcelona?",
    "answers": [
      { "text": "El Consell d'Alcaldes", "correct": false },
      { "text": "La Junta de Govern", "correct": false },
      { "text": "El Consell Metropolità", "correct": true },
      { "text": "La Comissió Executiva de Coordinació", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 4: L’Àrea metropolitana de Barcelona: règim jurídic, òrgans de govern i competències",
    "number": 5,
    "question": "Com està compost el Consell Metropolità de l'AMB segons la seva normativa de règim jurídic?",
    "answers": [
      { "text": "Únicament pels 36 alcaldes dels municipis integrants", "correct": false },
      { "text": "Per 90 consellers, integrant tots els alcaldes i regidors designats pels ajuntaments", "correct": true },
      { "text": "Per representants de la Generalitat i de l'Estat a parts iguals", "correct": false },
      { "text": "Per un nombre fix de 50 membres escollits directament per sufragi universal", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 4: L’Àrea metropolitana de Barcelona: règim jurídic, òrgans de govern i competències",
    "number": 6,
    "question": "Com s'elegeix el president o presidenta de l'Àrea Metropolitana de Barcelona?",
    "answers": [
      { "text": "Per votació directa de la ciutadania de tots els municipis de la conurbació", "correct": false },
      { "text": "Mitjançant nomenament directe del conseller competent en matèria de govern local de la Generalitat", "correct": false },
      { "text": "Pel Consell Metropolità d'entre els alcaldes dels municipis que la integren", "correct": true },
      { "text": "Per rotació anual entre els regidors de l'ajuntament més poblat", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 4: L’Àrea metropolitana de Barcelona: règim jurídic, òrgans de govern i competències",
    "number": 7,
    "question": "Quina funció principal té el Consell d'Alcaldes dins de l'estructura de l'AMB?",
    "answers": [
      { "text": "Aprovar definitivament els pressupostos anuals i les ordenances fiscals metropolitanes", "correct": false },
      { "text": "Exercir les funcions d'assessorament, consulta i formulació de propostes metropolitanes", "correct": true },
      { "text": "Resoldre els recursos d'alçada interposats contra els actes de la Junta de Govern", "correct": false },
      { "text": "Fiscalitzar la comptabilitat a través d'una auditoria externa obligatòria", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 4: L’Àrea metropolitana de Barcelona: règim jurídic, òrgans de govern i competències",
    "number": 8,
    "question": "Respecte a la Junta de Govern de l'AMB, quin límit legal existeix quant al nombre de membres que la componen?",
    "answers": [
      { "text": "No pot superar la meitat del nombre legal de membres del Consell Metropolità", "correct": false },
      { "text": "No pot superar un terç del nombre legal de membres del Consell Metropolità", "correct": true },
      { "text": "Està formada estrictament per 10 membres i el president", "correct": false },
      { "text": "Ha d'incloure obligatòriament a tots els portaveus dels grups polítics", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 4: L’Àrea metropolitana de Barcelona: règim jurídic, òrgans de govern i competències",
    "number": 9,
    "question": "Quin òrgan de l'AMB té caràcter de control preceptiu abans de l'aprovació del compte general?",
    "answers": [
      { "text": "La Comissió Especial de Comptes", "correct": true },
      { "text": "El Consell de Garanties Estatutàries", "correct": false },
      { "text": "La Sindicatura de Greuges metropolitana", "correct": false },
      { "text": "La Comissió de Coordinació Fiscal", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 4: L’Àrea metropolitana de Barcelona: règim jurídic, òrgans de govern i competències",
    "number": 10,
    "question": "En relació amb les competències sobre l'aigua de l'AMB, quina afirmació és correctament exigible en un examen C1?",
    "answers": [
      { "text": "Té competència exclusiva sobre l'abastament en alta i la captació des dels embassaments", "correct": false },
      { "text": "Té competència sobre el subministrament d'aigua en baixa i el sanejament de les aigües residuals", "correct": true },
      { "text": "Exerceix únicament el control de qualitat de l'aigua de boca a nivell de tota la comunitat autònoma", "correct": false },
      { "text": "No té cap tipus de competència en matèria hidràulica, sent competència estatal", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 4: L’Àrea metropolitana de Barcelona: règim jurídic, òrgans de govern i competències",
    "number": 11,
    "question": "Quina és la gran trampa de test pel que a la competència en matèria de residus de l'AMB?",
    "answers": [
      { "text": "L'AMB s'encarrega de la recollida domiciliària porta a porta i dels contenidors de carrer a tots els municipis", "correct": false },
      { "text": "L'AMB té competència sobre el tractament dels residus urbans, però no sobre la recollida domiciliària que és municipal", "correct": true },
      { "text": "L'AMB només gestiona els residus industrials perillosos de la província", "correct": false },
      { "text": "L'AMB no té cap competència en residus, sent competència exclusiva dels consells comarcals", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 4: L’Àrea metropolitana de Barcelona: règim jurídic, òrgans de govern i competències",
    "number": 12,
    "question": "Quin organisme o administració assumeix l'abastament d'aigua 'en alta' (captació i potabilització prèvia) a Catalunya?",
    "answers": [
      { "text": "L'Àrea Metropolitana de Barcelona (AMB)", "correct": false },
      { "text": "La Generalitat de Catalunya a través de l'ACA / ATL", "correct": true },
      { "text": "Els ajuntaments de manera individualitzada per a cada terme municipal", "correct": false },
      { "text": "Les comunitats de regants de conca", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 4: L’Àrea metropolitana de Barcelona: règim jurídic, òrgans de govern i competències",
    "number": 13,
    "question": "Quin instrument de planejament urbanístic té atribuït l'AMB en l'àmbit del seu territori?",
    "answers": [
      { "text": "El Pla General Metropolità (PGM) i el Pla Director Urbanístic Metropolità (PDUM)", "correct": true },
      { "text": "El Pla Territorial General de Catalunya (PTGC)", "correct": false },
      { "text": "Les normes subsidiàries d'àmbit provincial de Barcelona", "correct": false },
      { "text": "El Pla Director d'Infraestructures Viàries de l'Estat", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 4: L’Àrea metropolitana de Barcelona: règim jurídic, òrgans de govern i competències",
    "number": 14,
    "question": "En matèria de mobilitat i transport, qu acompanya l'actuació de l'AMB en l'àmbit metropolità?",
    "answers": [
      { "text": "La gestió del transport públic col·lectiu de superfície (bus metropolità) i la regulació del taxi", "correct": true },
      { "text": "La gestió integral de tota la xarxa ferroviària de rodalies de Catalunya", "correct": false },
      { "text": "L'explotació de les autopistes de peatge de la xarxa estatal", "correct": false },
      { "text": "La inspecció de transport aeri al Prat", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 4: L’Àrea metropolitana de Barcelona: règim jurídic, òrgans de govern i competències",
    "number": 15,
    "question": "Quina extensió territorial aproximada comprèn l'Àrea Metropolitana de Barcelona (AMB)?",
    "answers": [
      { "text": "326 km²", "correct": false },
      { "text": "636 km²", "correct": true },
      { "text": "1.250 km²", "correct": false },
      { "text": "3.100 km²", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 4: L’Àrea metropolitana de Barcelona: règim jurídic, òrgans de govern i competències",
    "number": 16,
    "question": "Quin és el volum de població aproximat al qual dóna servei i coordina l'AMB segons la seva informació corporativa?",
    "answers": [
      { "text": "Més de 1,5 milions de persones", "correct": false },
      { "text": "Més de 3,2 milions de persones", "correct": true },
      { "text": "Exactament 5 milions de persones", "correct": false },
      { "text": "Menys de 800.000 persones", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 4: L’Àrea metropolitana de Barcelona: règim jurídic, òrgans de govern i competències",
    "number": 17,
    "question": "Quina funció desenvolupa l'AMB en relació amb les platges metropolitanes?",
    "answers": [
      { "text": "La gestió i el manteniment, incloent la neteja de sorra, passeres i equipaments litorals", "correct": true },
      { "text": "L'atorgament de concessions de construcció de ports esportius de caràcter estatal", "correct": false },
      { "text": "La regulació del trànsit marítim i salvament de naufragis", "correct": false },
      { "text": "La fixació de taxes portuàries de mercaderies", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 4: L’Àrea metropolitana de Barcelona: règim jurídic, òrgans de govern i competències",
    "number": 18,
    "question": "Quin principi NO forma part dels principis rectors de l'actuació de l'AMB establerts a la seva normativa?",
    "answers": [
      { "text": "Eficàcia i eficiència", "correct": false },
      { "text": "Coordinació i descentralització", "correct": false },
      { "text": "Subsidiarietat respecte als municipis que la integren", "correct": false },
      { "text": "Centralització absoluta de les competències locals pròpies de cada ajuntament", "correct": true }
    ]
  },
  {
    "theme": "Bloc I - Tema 4: L’Àrea metropolitana de Barcelona: règim jurídic, òrgans de govern i competències",
    "number": 19,
    "question": "Quin paper juguen les vicepresidències dins de l'estructura executiva de l'AMB?",
    "answers": [
      { "text": "Són nomenades pel president, substitueixen el president en cas de vacant o absència, i dirigeixen àrees funcionals delegades", "correct": true },
      { "text": "Són escollides directament pel Ple entre els representants sindicals de l'administració", "correct": false },
      { "text": "Assumeixen les funcions de control financer independent de la Intervenció", "correct": false },
      { "text": "Són òrgans consultius no executius integrats per experts externs", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 4: L’Àrea metropolitana de Barcelona: règim jurídic, òrgans de govern i competències",
    "number": 20,
    "question": "Quina és la principal finalitat de la coordinació de serveis que duu a terme l'AMB entre els 36 ajuntaments?",
    "answers": [
      { "text": "Evitar duplicitats administratives i assegurar estàndards uniformes en serveis supramunicipals", "correct": true },
      { "text": "Absorbir les competències tributàries estatals de recaptació d'impostos especials", "correct": false },
      { "text": "Suprimir els òrgans de govern de les entitats locals menors", "correct": false },
      { "text": "Centralitzar la policia local sota un únic comandament metropolità", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 4: L’Àrea metropolitana de Barcelona: règim jurídic, òrgans de govern i competències",
    "number": 21,
    "question": "En relació amb les polítiques d'habitatge, quin àmbit d'actuació destaca de manera directa a l'AMB?",
    "answers": [
      { "text": "Polítiques de rehabilitació i promoció pública a través dels organismes vinculats", "correct": true },
      { "text": "L'expropiació massiva de sòl privat per a la creació de parcs naturals protegits", "correct": false },
      { "text": "L'atorgament de visats per a estrangers que inverteixin en el sector immobiliari", "correct": false },
      { "text": "La fixació estatal del preu mínim del lloguer a tot el territori català", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 4: L’Àrea metropolitana de Barcelona: règim jurídic, òrgans de govern i competències",
    "number": 22,
    "question": "Quin és l'òrgan col·legiat que assisteix directament a la presidència de l'AMB i exerceix competències delegades?",
    "answers": [
      { "text": "La Junta de Govern", "correct": true },
      { "text": "La Comissió de Règim Interior", "correct": false },
      { "text": "El Consell Consultiu de Mobilitat", "correct": false },
      { "text": "La Junta General de Portaveus", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 4: L’Àrea metropolitana de Barcelona: règim jurídic, òrgans de govern i competències",
    "number": 23,
    "question": "Quina norma legal bàsica regula de manera específica la creació i el règim de l'Àrea Metropolitana de Barcelona?",
    "answers": [
      { "text": "La Llei 31/2010, del 3 d'agost", "correct": true },
      { "text": "La Llei 7/1985, de 2 d'abril, reguladora de les bases del règim local", "correct": false },
      { "text": "El Text Refós de la Llei Municipal i de Règim Local de Catalunya", "correct": false },
      { "text": "La Llei d'urbanisme de Catalunya", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 4: L’Àrea metropolitana de Barcelona: règim jurídic, òrgans de govern i competències",
    "number": 24,
    "question": "Quin aspecte caracteritza la gestió dels ecoparcs i plantes de triatge dins de les competències de l'AMB?",
    "answers": [
      { "text": "Formen part de la competència de tractament de residus urbans de l'ens metropolità", "correct": true },
      { "text": "Són competència exclusiva dels ajuntaments de manera aïllada sense intervenció metropolitana", "correct": false },
      { "text": "Pertanyen a la gestió directa de les conselleries de medi ambient de l'Estat", "correct": false },
      { "text": "Són instal·lacions privades exemptes de control públic", "correct": false }
    ]
  },
  {
    "theme": "Bloc I - Tema 4: L’Àrea metropolitana de Barcelona: règim jurídic, òrgans de govern i competències",
    "number": 25,
    "question": "Quin dels següents eixos NO s'inclou directament dins dels quatre grans àmbits d'actuació competencial de l'AMB?",
    "answers": [
      { "text": "Territori i Urbanisme", "correct": false },
      { "text": "Mobilitat i Transport", "correct": false },
      { "text": "Defensa i Seguretat Nacional", "correct": true },
      { "text": "Desenvolupament Econòmic i Habitatge", "correct": false }
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