const TEST_ID = "recop6test.js"; 

const questions = [
{
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 1,
    "question": "Segons el Reial Decret Legislatiu 2/2004 (TRLRHL), quina naturalesa jurídica tenen les previsions incloses a l'estat d'ingressos del pressupost d'una entitat local com l'AMB?",
    "answers": [
      { "text": "Tenen caràcter limitatiu i vinculant per a la recaptació màxima anual", "correct": false },
      { "text": "Constitueixen una mera previsió o estimació comptable dels recursos a liquidar, mancant d'efecte limitatiu", "correct": true },
      { "text": "Tenen rang de norma reglamentària i obliguen a la seva recaptació sota pena de nul·litat", "correct": false },
      { "text": "Són crèdits autoritzats subjectes al principi d'especialitat quantitativa", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 2,
    "question": "D'acord amb la Llei 31/2010 de l'Àrea Metropolitana de Barcelona i el TRLRHL, quina de les següents afirmacions relatives als crèdits de despeses és correcta?",
    "answers": [
      { "text": "Tenen caràcter estimatiu i no limitatiu, permetent obligacions superiors si hi ha superàvit", "correct": false },
      { "text": "Tenen caràcter limitatiu i vinculant, sent nuls de ple dret els acords que excedeixin els crèdits pressupostaris", "correct": true },
      { "text": "Es poden minorar per atendre directament pagaments sense necessitat d'ingressar prèviament els drets", "correct": false },
      { "text": "S'estructuren obligatòriament amb classificació per programes tant en ingressos com en despeses", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 3,
    "question": "Quina és la seqüència exacta de les fases d'execució del pressupost de despeses establerta per la normativa aplicable a les entitats locals?",
    "answers": [
      { "text": "Disposició (D) - Autorització (A) - Reconeixement de l'obligació (O) - Ordenació del pagament (P)", "correct": false },
      { "text": "Autorització (A) - Disposició o Compromís (D) - Reconeixement de l'obligació (O) - Ordenació del pagament (P)", "correct": true },
      { "text": "Reconeixement de l'obligació (O) - Autorització (A) - Disposició (D) - Pagament material (PM)", "correct": false },
      { "text": "Autorització (A) - Ordenació del pagament (P) - Disposició (D) - Reconeixement de l'obligació (O)", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 4,
    "question": "En relació amb l'estructura econòmica del pressupost de despeses, on s'han de comptabilitzar obligatòriament els interessos derivats del deute públic o préstecs?",
    "answers": [
      { "text": "Al Capítol 1, dedicat a remuneracions de personal", "correct": false },
      { "text": "Al Capítol 3, denominat despeses financeres", "correct": true },
      { "text": "Al Capítol 8, relatiu a actius financers", "correct": false },
      { "text": "Al Capítol 9, destinat a passius financers i amortització de deute", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 5,
    "question": "Quin tipus de classificació pressupostària és obligatòria exclusivament per a l'estat de despeses i no figura en l'estat d'ingressos?",
    "answers": [
      { "text": "La classificació econòmica", "correct": false },
      { "text": "La classificació orgànica o institucional", "correct": false },
      { "text": "La classificació funcional o per programes", "correct": true },
      { "text": "La classificació territorial per districtes", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 6,
    "question": "Segons el TRLRHL, què succeeix si el dia 1 de gener l'AMB no ha aprovat el nou pressupost general per a l'exercici corrent?",
    "answers": [
      { "text": "Es paralitza l'activitat administrativa i no es poden realitzar despeses fins a l'aprovació definitiva", "correct": false },
      { "text": "Es prorroga automàticament el pressupost de l'any anterior en els seus crèdits inicials", "correct": true },
      { "text": "S'aplica directament el pressupost de la Generalitat de Catalunya de forma supletòria", "correct": false },
      { "text": "S'obre un termini extraordinari de 30 dies on només es poden executar despeses de personal", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 7,
    "question": "Quin és el límit màxim establert per a l'establiment del recàrrec metropolità sobre l'Impost sobre Béns Immobles (IBI) per part de l'AMB, d'acord amb el TRLRHL i la Llei 31/2010?",
    "answers": [
      { "text": "Un percentatge únic del 0,5% de la base imposable", "correct": false },
      { "text": "Un percentatge únic i màxim del 0,2% de la base imposable", "correct": true },
      { "text": "Un tipus de l'1% de la quota líquida municipal", "correct": false },
      { "text": "No existeix límit legal sempre que s'aprovi per majoria absoluta del Consell Metropolità", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 8,
    "question": "Com es defineix el Capítol 4 de l'estat de despeses en la classificació econòmica pressupostària local?",
    "answers": [
      { "text": "Inversions reals", "correct": false },
      { "text": "Transferències corrents", "correct": true },
      { "text": "Despeses corrents de béns i serveis", "correct": false },
      { "text": "Fons de contingència", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 9,
    "question": "Quin principi pressupostari estableix que els drets liquidats i les obligacions reconegudes s'han d'aplicar al pressupost pel seu import íntegre, prohibint minorar les obligacions amb drets pendents?",
    "answers": [
      { "text": "Principi d'especialitat qualitativa", "correct": false },
      { "text": "Principi de no afectació", "correct": false },
      { "text": "Principi de pressupost brut o universalitat en la seva vessant d'aplicació íntegra", "correct": true },
      { "text": "Principi d'equilibri pressupostari", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 10,
    "question": "Segons el calendari de tramitació pressupostària local, en quina data límit el President de l'entitat local ha de formar el Pressupost General i presentar-lo al Ple?",
    "answers": [
      { "text": "Abans de l'1 de setembre", "correct": false },
      { "text": "Abans del 15 d'octubre", "correct": true },
      { "text": "Abans del 31 d'octubre", "correct": false },
      { "text": "Abans del 31 de desembre", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 11,
    "question": "Quin significat té la fase d'Autorització (A) dins de la gestió del pressupost de despeses?",
    "answers": [
      { "text": "L'acte pel qual s'ordena materialment el pagament a la Tresoreria", "correct": false },
      { "text": "L'acte administratiu pel qual s'acorda realitzar una despesa per un import determinat o estimat, reservant crèdit", "correct": true },
      { "text": "L'acte de reconeixement de l'obligació exigible contra l'entitat", "correct": false },
      { "text": "La formalització jurídica del contracte amb el tercer", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 12,
    "question": "Quin capítol de l'estat d'ingressos correspon als impostos directes segons l'estructura pressupostària aplicable a les entitats locals?",
    "answers": [
      { "text": "Capítol 1", "correct": true },
      { "text": "Capítol 2", "correct": false },
      { "text": "Capítol 3", "correct": false },
      { "text": "Capítol 4", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 13,
    "question": "Quina és la data límit fixada normativament per a la confecció de la liquidació del pressupost de l'exercici anterior?",
    "answers": [
      { "text": "Abans del 31 de gener", "correct": false },
      { "text": "Abans de l'1 de març", "correct": true },
      { "text": "Abans del 31 de març", "correct": false },
      { "text": "Abans del 30 de juny", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 14,
    "question": "Què determina el principi d'especialitat qualitativa en matèria pressupostària?",
    "answers": [
      { "text": "Que els crèdits no poden superar una quantia màxima global", "correct": false },
      { "text": "Que les consignacions pressupostàries només poden ser destinades a la finalitat específica per a la qual van ser previstes", "correct": true },
      { "text": "Que l'exercici pressupostari ha de coincidir estrictament amb l'any natural", "correct": false },
      { "text": "Que tots els ingressos s'han de destinar indistintament a qualsevol despesa", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 15,
    "question": "Quin òrgan de l'AMB va assumir les funcions prèvies de les antigues entitats metropolitanes des de la seva constitució formal el 21 de juliol de 2011?",
    "answers": [
      { "text": "El Ple de l'Ajuntament de Barcelona", "correct": false },
      { "text": "El Consell Metropolità", "correct": true },
      { "text": "La Comissió Mixta de Valoracions", "correct": false },
      { "text": "La Junta de Govern Local de la Mancomunitat", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 16,
    "question": "A quin capítol de l'estat d'ingressos s'han d'imputar les taxes, preus públics i altres ingressos inespecífics?",
    "answers": [
      { "text": "Capítol 1", "correct": false },
      { "text": "Capítol 2", "correct": false },
      { "text": "Capítol 3", "correct": true },
      { "text": "Capítol 5", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 17,
    "question": "Quin és el termini d'exposició pública al Butlletí Oficial de la Província (BOP) del Pressupost General un cop aprovat inicialment pel Ple?",
    "answers": [
      { "text": "10 dies hàbils", "correct": false },
      { "text": "15 dies", "correct": true },
      { "text": "30 dies naturals", "correct": false },
      { "text": "20 dies", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 18,
    "question": "Què implica el principi de no afectació dels ingressos públics locals?",
    "answers": [
      { "text": "Que tots els ingressos s'han d'ingressar obligatòriament en comptes corrents no remunerats", "correct": false },
      { "text": "Que els recursos de l'entitat es destinen a satisfer el conjunt de les seves obligacions, llevat dels ingressos expressament afectats a fins determinats", "correct": true },
      { "text": "Que cap ingrés pot ser destinat a inversions reals", "correct": false },
      { "text": "Que els impostos indirectes no poden finançar despeses de personal", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 19,
    "question": " Quin capítol de despeses recull el Fons de contingència previst a la normativa d'estabilitat pressupostària?",
    "answers": [
      { "text": "Capítol 3", "correct": false },
      { "text": "Capítol 5", "correct": true },
      { "text": "Capítol 7", "correct": false },
      { "text": "Capítol 9", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 20,
    "question": "Quina funció principal compleix el pressupost com a document polític dins d'una administració pública?",
    "answers": [
      { "text": "Registrar exclusivament les operacions comptables passades", "correct": false },
      { "text": "Explicitar els objectius de govern, planificar la despesa i establir les prioritats polítiques per al proper any", "correct": true },
      { "text": "Establir les sancions disciplinàries per als funcionaris infractors", "correct": false },
      { "text": "Modificar directament les lleis orgàniques estatals", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 21,
    "question": "A quin concepte correspon el Capítol 6 de l'estat de despeses?",
    "answers": [
      { "text": "Passius financers", "correct": false },
      { "text": "Inversions reals", "correct": true },
      { "text": "Transferències de capital", "correct": false },
      { "text": "Actius financers", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 22,
    "question": "Quina és la naturalesa de la fase de Reconeixement de l'obligació (O) en la despesa pública?",
    "answers": [
      { "text": "Un simple pronòstic de despesa futura", "correct": false },
      { "text": "L'acte que contreu el crèdit exigible contra l'entitat derivat d'una prestació realitzada satisfactòriament", "correct": true },
      { "text": "L'autorització genèrica del pressupost per part del Ple", "correct": false },
      { "text": "El lliurament material dels fons al proveïdor", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 23,
    "question": "Quina norma legal bàsica aprova el Text Refós de la Llei Reguladora de les Hisendes Locals (TRLRHL)?",
    "answers": [
      { "text": "La Llei 31/2010", "correct": false },
      { "text": "El Reial Decret Legislatiu 2/2004, de 5 de març", "correct": true },
      { "text": "La Llei Orgànica 2/2012", "correct": false },
      { "text": "L'Ordre HAP/419/2014", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 24,
    "question": "Què s'entén per classificació orgànica dins de l'estat de despeses?",
    "answers": [
      { "text": "La determinació de la finalitat o objectiu de la despesa", "correct": false },
      { "text": "La identificació de qui realitza la despesa (òrgans, departaments o entitats)", "correct": true },
      { "text": "La naturalesa econòmica de la despesa segons els capítols", "correct": false },
      { "text": "El grau de vinculació jurídica establert a les bases d'execució", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 32: Pressupostos de les administracions públiques. Estructura pressupostària. Execució del Pressupost.",
    "number": 25,
    "question": "Quin principi pressupostari exigeix que cadascun dels pressupostos que integren el pressupost general s'aprovi sense dèficit inicial?",
    "answers": [
      { "text": "Principi d'unitat", "correct": false },
      { "text": "Principi d'equilibri pressupostari", "correct": true },
      { "text": "Principi d'anualitat", "correct": false },
      { "text": "Principi d'universalitat", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 33: Règim de la despesa pública local: autorització, disposició, obligació i pagament. Documents comptables. Despeses sense consignació pressupostària",
    "number": 1,
    "question": "Segons el Text Refós de la Llei Reguladora de les Hisendes Locals (TRLRHL), quin efecte jurídic principal produeix l'aprovació del pressupost de despeses de l'entitat local en comparació amb el d'ingressos?",
    "answers": [
      { "text": "Tant el pressupost d'ingressos com el de despeses tenen caràcter limitatiu i vinculant per a l'entitat local", "correct": false },
      { "text": "El pressupost d'ingressos constitueix una previsió comptable, mentre que els crèdits de despeses tenen caràcter limitatiu i màxim", "correct": true },
      { "text": "El pressupost d'ingressos limita l'exacció de tributs, mentre que el de despeses és una mera estimació orientativa", "correct": false },
      { "text": "Tots dos tipus de pressupost tenen un caràcter purament indicatiu i polític sense cap mena de vinculació jurídica directa", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 33: Règim de la despesa pública local: autorització, disposició, obligació i pagament. Documents comptables. Despeses sense consignació pressupostària",
    "number": 2,
    "question": "En el marc de les fases de gestió de la despesa pública local, quin acte o fase pressupostària origina de manera formal una relació jurídica directa amb tercers (com ara proveïdors o contractistes)?",
    "answers": [
      { "text": "L'autorització (A)", "correct": false },
      { "text": "La disposició o compromís (D)", "correct": true },
      { "text": "El reconeixement de l'obligació (O)", "correct": false },
      { "text": "L'ordenació del pagament (P)", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 33: Règim de la despesa pública local: autorització, disposició, obligació i pagament. Documents comptables. Despeses sense consignació pressupostària",
    "number": 3,
    "question": "Quina és la conseqüència jurídica establerta per l'ordenament jurídic local per a aquells actes, acords o resolucions que assumeixin obligacions o realitzin despeses sense crèdit pressupostari suficient?",
    "answers": [
      { "text": "Són considerats actes merament irregulars subsanables mitjançant una transferència de crèdit posterior", "correct": false },
      { "text": "Són actes anul·lables que poden ser convalidats per l'òrgan competent en el termini de tres mesos", "correct": true },
      { "text": "Són nuls de ple dret d'acord amb la legislació de règim local i pressupostària", "correct": true },
      { "text": "Constitueixen una irregularitat no invàlida sempre que s'emetin abans del tancament de l'exercici", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 33: Règim de la despesa pública local: autorització, disposició, obligació i pagament. Documents comptables. Despeses sense consignació pressupostària",
    "number": 4,
    "question": " Quin document comptable de gestió de despeses incorpora la factura o justificant acreditatiu que demostra que la prestació o l'execució de l'obra s'ha completat satisfactòriament?",
    "answers": [
      { "text": "El document A (Autorització)", "correct": false },
      { "text": "El document D (Disposició)", "correct": false },
      { "text": "El document O (Reconeixement de l'Obligació)", "correct": true },
      { "text": "El document P (Ordenació de Pagament)", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 33: Règim de la despesa pública local: autorització, disposició, obligació i pagament. Documents comptables. Despeses sense consignació pressupostària",
    "number": 5,
    "question": "Segons l'article 185 del Text Refós de la Llei Reguladora de les Hisendes Locals (TRLRHL), a quin òrgan correspon generalment reconèixer i liquidar les obligacions derivades de compromisos de despeses legalment adquirits?",
    "answers": [
      { "text": "Al Ple de l'entitat local en tot cas", "correct": false },
      { "text": "Al President de la corporació", "correct": true },
      { "text": "A la Intervenció General de l'entitat local", "correct": false },
      { "text": "A la Comissió Especial de Comptes", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 33: Règim de la despesa pública local: autorització, disposició, obligació i pagament. Documents comptables. Despeses sense consignació pressupostària",
    "number": 6,
    "question": "Pel que fa a les funcions d'ordenació de pagaments a les entitats locals, quin requisit addicional exigeix la normativa de règim local per poder crear una unitat d'ordenació de pagaments específica?",
    "answers": [
      { "text": "Cal que ho aprovi per unanimitat el Consell de Ministres a proposta del Ministeri d'Hisenda", "correct": false },
      { "text": "El Ple de l'entitat local, a proposta del President, pot crear una unitat d'ordenació de pagaments sota la seva autoritat", "correct": true },
      { "text": "Només es pot crear si l'entitat local supera obligatòriament els 500.000 habitants de dret", "correct": false },
      { "text": "És una competència exclusiva i improrrogable atribuïda directament al Tresorer de l'Estat", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 33: Règim de la despesa pública local: autorització, disposició, obligació i pagament. Documents comptables. Despeses sense consignació pressupostària",
    "number": 7,
    "question": "Quin és el significat i l'efecte de l'acte pressupostari conegut com a Autorització (A) en la gestió de la despesa?",
    "answers": [
      { "text": "La sortida efectiva de fons de la Tresoreria municipal per transferir-los al compte corrent del proveïdor", "correct": false },
      { "text": "L'aprovació per l'òrgan competent de realitzar una despesa per un import determinat o estimat, reservant el crèdit pressupostari", "correct": true },
      { "text": "La verificació formal de la factura electrònica a través de la plataforma e-FAC de l'AMB", "correct": false },
      { "text": "El reconeixement formal d'un deute líquid, vençut i exigible contra l'administració metropolitana", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 33: Règim de la despesa pública local: autorització, disposició, obligació i pagament. Documents comptables. Despeses sense consignació pressupostària",
    "number": 8,
    "question": "En relació amb la tramitació telemàtica de factures a l'Àrea Metropolitana de Barcelona (AMB), quin paper juguen el Punt General d'Entrada de Factures Electròniques i el Registre Comptable de Factures?",
    "answers": [
      { "text": "Són eines de caràcter voluntari que els proveïdors poden utilitzar o substituir per factures en paper segons el seu criteri", "correct": false },
      { "text": "Garanteixen la tramitació telemàtica obligatòria i la traçabilitat de les fases de reconeixement de l'obligació i pagament a l'AMB", "correct": true },
      { "text": "Serveixen exclusivament per comptabilitzar els ingressos tributaris provinents dels impostos directes de l'AMB", "correct": false },
      { "text": "Constitueixen un mecanisme excepcional d'ampliació de crèdit per a despeses sense consignació", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 33: Règim de la despesa pública local: autorització, disposició, obligació i pagament. Documents comptables. Despeses sense consignació pressupostària",
    "number": 9,
    "question": "Quin dels següents requisits és imprescindible perquè es pugui reconèixer vàlidament una obligació de pagament en la comptabilitat d'una entitat local?",
    "answers": [
      { "text": "Que la despesa estigui finançada exclusivament mitjançant ingressos tributaris afectats", "correct": false },
      { "text": "Que es doni un fet del qual neixi l'obligació, que tingui un valor mesurable i que el creditor estigui determinat", "correct": true },
      { "text": "Que s'hagi publicat prèviament al Butlletí Oficial de la Província (BOP) amb quinze dies d'antelació", "correct": false },
      { "text": "Que l'expedient hagi estat informat favorablement per la Sindicatura de Comptes de Catalunya", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 33: Règim de la despesa pública local: autorització, disposició, obligació i pagament. Documents comptables. Despeses sense consignació pressupostària",
    "number": 10,
    "question": "Quina és la funció dels documents comptables combinats com ara el document AD o l'ADO en la gestió pressupostària local?",
    "answers": [
      { "text": "Permeten acumular o tramitar de forma conjunta diverses fases de la gestió de la despesa (com autorització i disposició, o disposició i obligació)", "correct": true },
      { "text": "Són documents exclusius per a la liquidació dels pressupostos d'ingressos i variació d'actius financers", "correct": false },
      { "text": "Serveixen per declarar la nul·litat de ple dret de les despeses executades sense crèdit pressupostari", "correct": false },
      { "text": "S'utilitzen únicament per emetre ordres de pagament a justificar i bestretes de caixa fixa", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 33: Règim de la despesa pública local: autorització, disposició, obligació i pagament. Documents comptables. Despeses sense consignació pressupostària",
    "number": 11,
    "question": "Com es defineixen i es tracten comptablement aquelles obligacions derivades de despeses meritades o de béns i serveis rebuts que no han vençut a la fi de l'exercici pressupostari?",
    "answers": [
      { "text": "S'anul·len automàticament i s'exigeix la seva tramitació com a crèdits extraordinaris", "correct": false },
      { "text": "S'etiqueten com a obligacions de pagament de naturalesa no pressupostària fins a la data del seu venciment", "correct": true },
      { "text": "Constitueixen un dèficit inicial que invalida el pressupost general de l'exercici següent", "correct": false },
      { "text": "Es imputen directament al capítol 9 de passius financers de l'estat d'ingressos", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 33: Règim de la despesa pública local: autorització, disposició, obligació i pagament. Documents comptables. Despeses sense consignació pressupostària",
    "number": 12,
    "question": "Segons la normativa pressupostària local aplicable a l'AMB, quan s'ha de confeccionar formalment la liquidació del pressupost de l'exercici anterior?",
    "answers": [
      { "text": "Abans del dia 1 de gener de l'exercici corrent", "correct": false },
      { "text": "Abans del dia 1 de març de l'exercici següent", "correct": true },
      { "text": "Abans del dia 31 de març de l'exercici següent", "correct": false },
      { "text": "Abans del dia 1 de juny de l'exercici següent", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 33: Règim de la despesa pública local: autorització, disposició, obligació i pagament. Documents comptables. Despeses sense consignació pressupostària",
    "number": 13,
    "question": "Què configuren exactament les obligacions reconegudes i liquidades no satisfetes l'últim dia de l'exercici, sumades als drets pendents de cobrament i als fons líquids a 31 de desembre?",
    "answers": [
      { "text": "El resultat pressupostari de l'exercici", "correct": false },
      { "text": "El romanent de tresoreria de l'entitat local", "correct": true },
      { "text": "El fons de contingència d'execució pressupostària", "correct": false },
      { "text": "El pressupost consolidat de l'exercici futur", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 33: Règim de la despesa pública local: autorització, disposició, obligació i pagament. Documents comptables. Despeses sense consignació pressupostària",
    "number": 14,
    "question": "Quin és l'objectiu principal de la funció interventora en relació amb els actes d'execució de la despesa pública local?",
    "answers": [
      { "text": "Exercir la fiscalització prèvia per garantir la legalitat i l'existència de crèdit suficient abans de contreure obligacions", "correct": true },
      { "text": "Aprovar directament les modificacions pressupostàries per delegació del Ple de la corporació", "correct": false },
      { "text": "Realitzar la recaptació executiva dels impostos i taxes municipals i metropolitanes", "correct": false },
      { "text": "Gestionar la plataforma de factura electrònica de l'AMB i emetre els documents de pagament P", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 33: Règim de la despesa pública local: autorització, disposició, obligació i pagament. Documents comptables. Despeses sense consignació pressupostària",
    "number": 15,
    "question": "Quina <b>conseqüència</b> es deriva de l'existència d'un reparament (disconformitat) per part de la Intervenció basat en la manca o insuficiència de crèdit pressupostari?",
    "answers": [
      { "text": "L'expedient queda automàticament convalidat si el regidor delegat de l'àrea econòmica ho sol·licita per escrit", "correct": false },
      { "text": "S'eleva el reparament a l'òrgan competent perquè resolgui o suspengui el procediment segons correspongui, en ser un vici determinant de nul·litat", "correct": true },
      { "text": "Permet tramitar la despesa carregant-la directament al capítol de passius financers", "correct": false },
      { "text": "Obliga a la Tresoreria a efectuar el pagament mitjançant bestretes de caixa fixa", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 33: Règim de la despesa pública local: autorització, disposició, obligació i pagament. Documents comptables. Despeses sense consignació pressupostària",
    "number": 16,
    "question": "En el sistema de comptabilitat pública local, quina tipologia de documents justifica les operacions economicofinanceres de naturalesa auxiliar que s'originen amb independència del pressupost o requereixen una anotació provisional?",
    "answers": [
      { "text": "Documents de gestió pressupostària d'ingressos", "correct": false },
      { "text": "Documents d'operacions de tresoreria", "correct": true },
      { "text": "Documents de crèdits i previsions pressupostàries", "correct": false },
      { "text": "Documents de gestió pressupostària de despeses de tipus ADO", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 33: Règim de la despesa pública local: autorització, disposició, obligació i pagament. Documents comptables. Despeses sense consignació pressupostària",
    "number": 17,
    "question": "Segons l'article 186 del TRLRHL, a qui competeixen les funcions d'ordenació de pagaments en l'àmbit d'una entitat local com l'AMB?",
    "answers": [
      { "text": "Al President de l'entitat local", "correct": true },
      { "text": "Al Síndic de Greuges de Catalunya", "correct": false },
      { "text": "Al cap de la unitat central de tresoreria en tots els casos sense excepció", "correct": false },
      { "text": "Al Secretari general de l'entitat local", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 33: Règim de la despesa pública local: autorització, disposició, obligació i pagament. Documents comptables. Despeses sense consignació pressupostària",
    "number": 18,
    "question": "Quin mecanisme o instrument legal permet corregir o dotar de cobertura financera adequada a una despesa sobrevinguda quan no existeix crèdit inicial o aquest resulta clarament insuficient?",
    "answers": [
      { "text": "L'aprovació d'una modificació de crèdit (com ara un suplement de crèdit, crèdit extraordinari o transferència)", "correct": true },
      { "text": "L'emissió d'una ordre de pagament a justificar directament per la Junta de Govern", "correct": false },
      { "text": "La pròrroga automàtica del pressupost de l'exercici anterior amb caràcter retroactiu", "correct": false },
      { "text": "La minoració de les obligacions reconegudes a favor de tercers mitjançant una decisió unilateral del President", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 33: Règim de la despesa pública local: autorització, disposició, obligació i pagament. Documents comptables. Despeses sense consignació pressupostària",
    "number": 19,
    "question": "Quina característica defineix la fase d'Ordenació del Pagament (P) dins de l'execució del pressupost de despeses locals?",
    "answers": [
      { "text": "És l'acte pel qual l'ordenador expedeix el manament de pagament contra la Tresoreria en relació amb una obligació degudament reconeguda", "correct": true },
      { "text": "És la fase en què es formalitza el contracte amb el proveïdor extern", "correct": false },
      { "text": "Consisteix en la simple reserva comptable de crèdit realitzada pel departament d'intervenció", "correct": false },
      { "text": "Representa l'aprovació política inicial del pressupost general per part del Ple", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 33: Règim de la despesa pública local: autorització, disposició, obligació i pagament. Documents comptables. Despeses sense consignació pressupostària",
    "number": 20,
    "question": "Quin paper juguen les Bases d'Execució del Pressupost respecte al règim de la despesa i les facultats d'autorització i disposició?",
    "answers": [
      { "text": "Recullen la desconcentració o delegació de les facultats d'autoritzar i disposar despeses per a cada exercici econòmic", "correct": true },
      { "text": "Modifiquen directament els articles del Text Refós de la Llei Reguladora de les Hisendes Locals", "correct": false },
      { "text": "Substitueixen completament l'estat de despeses i la classificació econòmica dels capítols", "correct": false },
      { "text": "Són un document merament informatiu que no té cap vinculació jurídica ni pel govern ni pels serveis tècnics", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 33: Règim de la despesa pública local: autorització, disposició, obligació i pagament. Documents comptables. Despeses sense consignació pressupostària",
    "number": 21,
    "question": "Com s'estructura i es defineix el principi d'especialitat quantitativa aplicable als crèdits de despesa del pressupost local?",
    "answers": [
      { "text": "Els imports consignats als crèdits pressupostaris són màxims i no es poden contraure obligacions que els ultrapassin", "correct": true },
      { "text": "Permet gastar lliurement sense límits quantitatius sempre que es tracti de despeses de personal o financeres", "correct": false },
      { "text": "Estableix que els ingressos poden destinar-se a qualsevol finalitat independentment de la seva naturalesa", "correct": false },
      { "text": "Garanteix que el pressupost d'ingressos tingui caràcter limitatiu i imperatiu per a l'entitat", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 33: Règim de la despesa pública local: autorització, disposició, obligació i pagament. Documents comptables. Despeses sense consignació pressupostària",
    "number": 22,
    "question": "Quina relació existeix entre la fase de Disposició o Compromís (D) i el naixement d'obligacions econòmiques per a l'entitat local?",
    "answers": [
      { "text": "La disposició és un acte d'eficàcia externa que concreta la destinació del crèdit reservat i prepara el futur reconeixement de l'obligació", "correct": true },
      { "text": "La disposició equival automàticament i sense tràmit previ al pagament material efectiu de la factura", "correct": false },
      { "text": "La disposició només es pot aplicar al capítol 1 de remuneracions de personal fix", "correct": false },
      { "text": "La disposició no produeix cap efecte jurídic fins que s'emet el document P de pagament", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 33: Règim de la despesa pública local: autorització, disposició, obligació i pagament. Documents comptables. Despeses sense consignació pressupostària",
    "number": 23,
    "question": " Quin tractament reben en la liquidació del pressupost aquells crèdits no afectats que a 31 de desembre no han estat utilitzats per contreure obligacions?",
    "answers": [
      { "text": "S'anul·len i donen lloc als romanents de crèdit, extingint-se la seva vigència per a l'exercici corrent", "correct": true },
      { "text": "S'acumulen automàticament al pressupost d'ingressos de l'any següent com a ingressos financers", "correct": false },
      { "text": "Es transformen en bestretes de caixa fixa per al personal directiu de l'entitat", "correct": false },
      { "text": "S'ingressen directament al Tresor públic de l'Estat en concepte de romanent positiu", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 33: Règim de la despesa pública local: autorització, disposició, obligació i pagament. Documents comptables. Despeses sense consignació pressupostària",
    "number": 24,
    "question": "En relació amb els pagaments materials efectuats per la Tresoreria municipal, quina és la seva connexió amb l'ordenació del pagament (P)?",
    "answers": [
      { "text": "La Tresoreria executa materialment i comptabilitza els pagaments immediatament un cop rebudes les ordres de pagament dictades per l'òrgan competent", "correct": true },
      { "text": "La Tresoreria pot modificar l'import de les ordres de pagament segons la disponibilitat de caixa sense avís previ", "correct": false },
      { "text": "El pagament material es realitza sempre abans de l'emetre el document O de reconeixement d'obligació", "correct": false },
      { "text": "L'ordenació del pagament només té efectes informatius i no vincula a la Tresoreria de l'AMB", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 33: Règim de la despesa pública local: autorització, disposició, obligació i pagament. Documents comptables. Despeses sense consignació pressupostària",
    "number": 25,
    "question": "Quin és el propòsit principal de publicar els indicadors de període mitjà de pagament a proveïdors (PMP) per part de l'AMB en el marc de la seva gestió econòmica?",
    "answers": [
      { "text": "Garantir la transparència i el rigor en la tramitació comptable i el compliment de la normativa de lluita contra la morositat", "correct": true },
      { "text": "Establir un recàrrec addicional sobre l'Impost sobre Béns Immobles (IBI) per a finançar inversions reals", "correct": false },
      { "text": "Modificar les bases d'execució del pressupost general sense necessitat d'aprovació plenària", "correct": false },
      { "text": "Establir la nul·litat de ple dret de totes les factures presentades fora del termini legal", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 34: Els ingressos de l’administració. Ingressos no previstos en el pressupost inicial",
    "number": 1,
    "question": "Segons el Text Refós de la Llei Reguladora de les Hisendes Locals (TRLRHL), quin caràcter jurídic tenen les previsions incloses a l'estat d'ingressos del pressupost d'una entitat local com l'AMB?",
    "answers": [
      { "text": "Tenen caràcter limitatiu i vinculant per al límit màxim de recaptació", "correct": false },
      { "text": "Constitueixen una mera previsió o càlcul comptable sense caràcter limitatiu de la seva quantia i exacció", "correct": true },
      { "text": "Tenen el mateix rang i efecte jurídic limitatiu que els crèdits de despeses", "correct": false },
      { "text": "Actuen com a crèdits ampliables automàticament si es superen les previsions inicials", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 34: Els ingressos de l’administració. Ingressos no previstos en el pressupost inicial",
    "number": 2,
    "question": "En relació amb el principi de pressupost brut aplicable als ingressos públics locals, com s'han d'aplicar els drets liquidats al pressupost?",
    "answers": [
      { "text": "Pel seu import net, un cop deduïts les despeses de recaptació i gestió tributària", "correct": false },
      { "text": "Pel seu import íntegre, qualsevol que sigui el període de què derivin, prohibint compensar obligacions mitjançant la minoració de drets[cite: 2]", "correct": true },
      { "text": "Només pels drets efectivament cobrats dins del mateix any natural abans del 31 de desembre", "correct": false },
      { "text": "Pel romanent resultant d'aplicar el coeficient d'actualització cadastral corresponent", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 34: Els ingressos de l’administració. Ingressos no previstos en el pressupost inicial",
    "number": 3,
    "question": "Quina modificació pressuposcària s'ha de tramitar obligatòriament quan es produeixen ingressos no previstos inicialment o superiors als estimats, com ara subvencions finalistes sobrevingudes?",
    "answers": [
      { "text": "Un suplement de crèdit finançat amb romanent de tresoreria", "correct": false },
      { "text": "Una transferència de crèdit entre aplicacions del mateix capítol", "correct": false },
      { "text": "Una generació de crèdit en el pressupost de despeses[cite: 2]", "correct": true },
      { "text": "Una ampliació de crèdit per recaptació de fons d'extraordinària urgència", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 34: Els ingressos de l’administració. Ingressos no previstos en el pressupost inicial",
    "number": 4,
    "question": "Segons l'estructura econòmica del pressupost d'ingressos de les entitats locals regulada per la normativa vigent, a quin capítol s'han d'imputar els ingressos derivats del recàrrec sobre l'Impost sobre Béns Immobles (IBI) que pot establir l'AMB?",
    "answers": [
      { "text": "Capítol 1: Impostos directes[cite: 2]", "correct": true },
      { "text": "Capítol 2: Impostos indirectes[cite: 2]", "correct": false },
      { "text": "Capítol 3: Taxes, preus públics i altres ingressos", "correct": false },
      { "text": "Capítol 4: Transferències corrents rebudes d'altres administracions", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 34: Els ingressos de l’administració. Ingressos no previstos en el pressupost inicial",
    "number": 5,
    "question": "Quin és el percentatge màxim legal establert per a l'establiment del recàrrec metropolità sobre l'IBI per part de l'AMB d'acord amb el TRLRHL i la Llei 31/2010 de l'AMB?",
    "answers": [
      { "text": "Un 0,1% de la base imposable", "correct": false },
      { "text": "Un percentatge únic i màxim del 0,2% de la base imposable[cite: 2]", "correct": true },
      { "text": "Un 0,5% del valor cadastral total del municipi", "correct": false },
      { "text": "Un límit flexible fixat lliurement per acord del Consell Metropolità fins al 1%", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 34: Els ingressos de l’administració. Ingressos no previstos en el pressupost inicial",
    "number": 6,
    "question": "Quines són les fases essencials que integren el procediment d'execució comptable en la gestió del pressupost d'ingressos locals?",
    "answers": [
      { "text": "Autorització, disposició, reconeixement de l'obligació i pagament", "correct": false },
      { "text": "Reconeixement del dret (liquidació) i cobrament (recaptació)[cite: 2]", "correct": true },
      { "text": "Previsió, compromís, liquidació i ordenació de ingressos", "correct": false },
      { "text": "Aprovació, compromís, recaptació voluntària i recaptació executiva", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 34: Els ingressos de l’administració. Ingressos no previstos en el pressupost inicial",
    "number": 7,
    "question": "Com s'agrupen orgànicament i econòmicament els capítols del pressupost d'ingressos segons l'estructura pressupostària aplicable a les entitats locals?",
    "answers": [
      { "text": "En 6 capítols per a operacions corrents i 3 per a operacions de capital", "correct": false },
      { "text": "En 9 capítols dels quals els capítols 1 a 5 corresponen a operacions corrents i els capítols 6 a 9 a operacions de capital i financeres[cite: 2]", "correct": true },
      { "text": "En 8 capítols que inclouen obligatòriament la classificació funcional per programes", "correct": false },
      { "text": "En 4 capítols de caràcter estrictament tributari i 5 de caràcter patrimonial", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 34: Els ingressos de l’administració. Ingressos no previstos en el pressupost inicial",
    "number": 8,
    "question": "Segons l'ordenament jurídic pressupostari, quin capítol del pressupost d'ingressos reflecteix els recursos obtinguts per l'alienació de béns de capital que formen part del patrimoni de l'ens públic?",
    "answers": [
      { "text": "Capítol 5: Ingressos patrimonials", "correct": false },
      { "text": "Capítol 6: Alienació d'inversions reals[cite: 2]", "correct": true },
      { "text": "Capítol 7: Transferències de capital", "correct": false },
      { "text": "Capítol 8: Variació d'actius financers", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 34: Els ingressos de l’administració. Ingressos no previstos en el pressupost inicial",
    "number": 9,
    "question": "Quina és la naturalesa jurídica i comptable de l'anomenat Capítol 3 del pressupost d'ingressos (Taxes, preus públics i altres ingressos)?",
    "answers": [
      { "text": "Correspon a ingressos exigits sense contraprestació directa basats en la renda o el consum", "correct": false },
      { "text": "Inclou els ingressos derivats de la prestació de serveis públics en règim de dret públic o de l'ús privatiu del domini públic[cite: 2]", "correct": true },
      { "text": "Recull exclusivament els rendiments financers procedents de comptes bancaris i dipòsits", "correct": false },
      { "text": "Agrupa les transferències corrents rebudes d'altres administracions públiques consorciades", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 34: Els ingressos de l’administració. Ingressos no previstos en el pressupost inicial",
    "number": 10,
    "question": "En relació amb el principi d'afectació dels ingressos, quina és la regla general aplicable al pressupost de l'AMB?",
    "answers": [
      { "text": "Tots els ingressos s'han d'afectar obligatòriament a despeses d'inversió real", "correct": false },
      { "text": "Els recursos es destinen a satisfer el conjunt de les obligacions de l'entitat, excepte els ingressos que per la seva naturalesa tinguin una relació objectiva i directa amb la despesa a finançar (ingressos afectats)[cite: 2]", "correct": true },
      { "text": "Està totalment prohibida qualsevol afectació d'ingressos a fins determinats per llei", "correct": false },
      { "text": "Els impostos directes s'han d'afectar exclusivament al pagament de passius financers", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 34: Els ingressos de l’administració. Ingressos no previstos en el pressupost inicial",
    "number": 11,
    "question": "Quina de les següents afirmacions és correctament aplicable a la classificació per programes en relació amb els estats pressupostaris de l'AMB?",
    "answers": [
      { "text": "Tant el pressupost de despeses com el d'ingressos disposen obligatòriament de classificació funcional per programes", "correct": false },
      { "text": "Només el pressupost de despeses disposa d'estructura funcional per programes, mentre que el pressupost d'ingressos manca d'aquesta classificació[cite: 2]", "correct": true },
      { "text": "El pressupost d'ingressos s'estructura obligatòriament per programes i finalitats de despesa", "correct": false },
      { "text": "Cap dels dos pressupostos empra programes, utilitzant exclusivament la classificació orgànica", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 34: Els ingressos de l’administració. Ingressos no previstos en el pressupost inicial",
    "number": 12,
    "question": "Segons l'article 162 del TRLRHL, quin element comprenen els pressupostos generals de les entitats locals pel que fa a l'expressió xifrada?",
    "answers": [
      { "text": "Únicament les previsions de despeses corrents de l'ens principal i dels seus organismes autònoms", "correct": false },
      { "text": "Les obligacions màximes a reconèixer i els drets a preveure liquidar durant l'exercici, així com les previsions d'ingressos i despeses de les societats mercantils de capital íntegrament municipal[cite: 2]", "correct": true },
      { "text": "Només els ingressos efectivament recaptats i les despeses executades de l'exercici anterior", "correct": false },
      { "text": "Les estimacions de deute viu i els romanents de tresoreria no afectats per regla de despesa", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 34: Els ingressos de l’administració. Ingressos no previstos en el pressupost inicial",
    "number": 13,
    "question": "Quin paper juguen les ordenances fiscals en el sistema d'ingressos de l'AMB segons la Llei 31/2010?",
    "answers": [
      { "text": "Són actes administratius de caràcter singular que no requereixen aprovació plenària", "correct": false },
      { "text": "Són normes reglamentàries d'aprovació pel Consell Metropolità que regulen l'establiment i ordenació dels tributs propis, preus públics i tarifes[cite: 2]", "correct": true },
      { "text": "Són manuals de procediment intern exclusius de la Intervenció General", "correct": false },
      { "text": "Constitueixen annexos informatius no vinculants del pressupost general", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 34: Els ingressos de l’administració. Ingressos no previstos en el pressupost inicial",
    "number": 14,
    "question": "Quina condició temporal exigeix la normativa per a l'entrada en vigor i aplicació de les ordenances fiscals locals el dia 1 de gener?",
    "answers": [
      { "text": "Haver estat aprovades provisionalment abans del 31 de desembre", "correct": false },
      { "text": "Haver estat íntegrament publicades al Butlletí Oficial de la Província (BOP) abans del 31 de desembre de l'exercici precedent", "correct": true },
      { "text": "Ser ratificades per la Generalitat de Catalunya durant el mes de gener", "correct": false },
      { "text": "Estar exposades al públic durant un termini improrrogable de 30 dies hàbils", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 34: Els ingressos de l’administració. Ingressos no previstos en el pressupost inicial",
    "number": 15,
    "question": "Com es classifiquen els ingressos dins de l'estructura econòmica pel que fa a la distinció entre operacions corrents i de capital?",
    "answers": [
      { "text": "Els capítols 1 a 4 són de capital i els capítols 5 a 9 són corrents", "correct": false },
      { "text": "Els ingressos corrents es produeixen de manera regular (Cap. 1 a 5) i els de capital de manera irregular o discontínua derivats d'inversions i transferències de capital (Cap. 6 i 7)[cite: 2]", "correct": true },
      { "text": "Tots els ingressos tributaris tenen la consideració d'operacions de capital", "correct": false },
      { "text": "Els ingressos financers s'agrupen sempre dins del Capítol 4 de transferències", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 34: Els ingressos de l’administració. Ingressos no previstos en el pressupost inicial",
    "number": 16,
    "question": "Quina és la definició pressupostària correcta de la fase de 'Reconeixement del dret' en la gestió dels ingressos públics?",
    "answers": [
      { "text": "L'ingrés material i efectiu dels fons a la Tresoreria de l'ens públic", "correct": false },
      { "text": "L'acte pel qual es declara l'existència d'un crèdit a favor de l'entitat derivat d'un ingrés legalment establert, amb indicació del subjecte obligat i de la quantia[cite: 2]", "correct": true },
      { "text": "La formalització de l'expedient de modificació per generació de crèdit", "correct": false },
      { "text": "L'aprovació de la tarifa aplicable per una ordenança fiscal", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 34: Els ingressos de l’administració. Ingressos no previstos en el pressupost inicial",
    "number": 17,
    "question": "Quin tipus d'ingressos s'inclouen específicament en el Capítol 5 del pressupost d'ingressos denominat 'Ingressos patrimonials'?",
    "answers": [
      { "text": "Els rendiments de la propietat o patrimoni de l'Administració i interessos de comptes o dipòsits[cite: 2]", "correct": true },
      { "text": "El producte de la venda d'accions i participacions de societats mercantils", "correct": false },
      { "text": "Les taxes per la prestació de serveis públics bàsics", "correct": false },
      { "text": "Les subvencions obtingudes per finançar despeses corrents", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 34: Els ingressos de l’administració. Ingressos no previstos en el pressupost inicial",
    "number": 18,
    "question": "Quina relació guarda el principi d'equilibri pressupostari amb les previsions d'ingressos durant l'execució de l'exercici?",
    "answers": [
      { "text": "Qualsevol minoració o disminució en les previsions d'ingressos haurà de ser compensada en les despeses en el mateix acte en què s'acordi[cite: 2]", "correct": false },
      { "text": "Les caigudes d'ingressos es compensen automàticament amb deute públic a llarg termini sense acord plenari", "correct": false },
      { "text": "El pressupost d'ingressos pot presentar dèficit inicial si està autoritzat per l'Estat", "correct": false },
      { "text": "La minoració d'ingressos no afecta mai l'equilibri de les despeses de capital", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 34: Els ingressos de l’administració. Ingressos no previstos en el pressupost inicial",
    "number": 19,
    "question": "Quins capítols del pressupost d'ingressos recullen les anomenades operacions financeres (actius i passius financers)?",
    "answers": [
      { "text": "Els capítols 1 i 2", "correct": false },
      { "text": "Els capítols 6 i 7", "correct": false },
      { "text": "Els capítols 8 (Variació d'actius financers) i 9 (Variació de passius financers)[cite: 2]", "correct": true },
      { "text": "El capítol 5 exclusivament", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 34: Els ingressos de l’administració. Ingressos no previstos en el pressupost inicial",
    "number": 20,
    "question": "Com incideix la Llei 31/2010 de l'Àrea Metropolitana de Barcelona en l'exercici de la potestat financera i tributària de l'ens?",
    "answers": [
      { "text": "Atribueix a l'AMB la capacitat d'establir tributs, recàrrecs, taxes i preus públics per garantir el seu finançament i l'equilibri territorial metropolità[cite: 2]", "correct": true },
      { "text": "Subordina completament els ingressos metropolitans als pressupostos generals de la Generalitat", "correct": false },
      { "text": "Estableix que l'única font de finançament de l'AMB són les transferències estatals de capital", "correct": false },
      { "text": "Impedeix a l'AMB percebre ingressos per preus públics de transport", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 34: Els ingressos de l’administració. Ingressos no previstos en el pressupost inicial",
    "number": 21,
    "question": "Quin és l'efecte comptable i pressupostari directe de la recaptació en període voluntari o executiu d'un dret prèviament reconegut?",
    "answers": [
      { "text": "La conversió del dret pendent en fons líquids disponibles a la Tresoreria amb la cancel·lació del compte de deutors[cite: 2]", "correct": true },
      { "text": "L'aprovació automàtica d'un suplement de crèdit per despeses imprevistes", "correct": false },
      { "text": "La generació de noves obligacions de caràcter no pressupostari", "correct": false },
      { "text": "La modificació de la classificació orgànica del centre gestor recaptador", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 34: Els ingressos de l’administració. Ingressos no previstos en el pressupost inicial",
    "number": 22,
    "question": "Quina és la diferència fonamental entre els ingressos imputats al Capítol 4 (Transferències corrents) i al Capítol 7 (Transferències de capital)?",
    "answers": [
      { "text": "El Capítol 4 es destina a finançar operacions corrents de funcionament i el Capítol 7 a finançar operacions d'inversió o capital[cite: 2]", "correct": true },
      { "text": "El Capítol 4 inclou contraprestacions directes i el Capítol 7 ingressos tributaris", "correct": false },
      { "text": "El Capítol 4 prové exclusivamente de fons europeus i el Capítol 7 d'impostos municipals", "correct": false },
      { "text": "No existeix cap diferència pràctica, sent ambdós capítols intercanviables", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 34: Els ingressos de l’administració. Ingressos no previstos en el pressupost inicial",
    "number": 23,
    "question": "En relació amb els ingressos obtinguts per l'AMB procedents de Fons Europeus (com els Next Generation) per a projectes de sostenibilitat, com s'integren al pressupost si no estaven inicialment previstos?",
    "answers": [
      { "text": "Mitjançant un expedient de generació de crèdit derivat de l'ingrés efectiu o compromís ferm d'aquests fons[cite: 2]", "correct": true },
      { "text": "Mitjançant una baixa de crèdits de personal per anul·lació", "correct": false },
      { "text": "Mitjançant pròrroga automàtica del pressupost de l'exercici anterior", "correct": false },
      { "text": "Mitjançant transferència de crèdit entre diferents programes de despesa corrent", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI (Temari Específic) - Tema 34: Els ingressos de l’administració. Ingressos no previstos en el pressupost inicial",
    "number": 24,
    "question": "Quin tractament pressupostari reben els ingressos per reintegraments de préstecs concedits o bestretes al personal dins del pressupost d'ingressos?",
    "answers": [
      { "text": "S'imputen al Capítol 8 (Variació d'actius financers)[cite: 2]", "correct": true },
      { "text": "S'imputen al Capítol 3 com a altres ingressos de dret públic", "correct": false },
      { "text": "S'anoten directament al pressupost de despeses com a minoració", "correct": false },
      { "text": "Constitueixen ingressos patrimonials del Capítol 5", "correct": false }
    ]
  },
{
    "theme": "Bloc VI (Temari Específic) - Tema 34: Els ingressos de l’administració. Ingressos no previstos en el pressupost inicial",
    "number": 25,
    "question": "Quina trampa o error conceptual és habitual en els exàmens d'oposició C1 respecte a la naturalesa dels ingressos públics en comparació amb les despeses?",
    "answers": [
      { "text": "Creure erròniament que els ingressos tenen caràcter limitatiu màxim igual que els crèdits de despeses, quan en realitat són meres previsions comptables", "correct": true },
      { "text": "Pensar que els ingressos requereixen fases d'autorització i compromís prèvies al reconeixement", "correct": false },
      { "text": "Considerar que els ingressos no s'han d'imputar a l'exercici pel principi d'anualitat", "correct": false },
      { "text": "Assumir que el pressupost d'ingressos es divideix en funció de classificacions funcionals", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 35: Ingressos de naturalesa tributària: impostos, tributs i taxes. Altres ingressos de les administracions: preus públics i preus privats",
    "number": 1,
    "question": "Segons la Llei General Tributària (LGT) i el Text Refós de la Llei Reguladora de les Hisendes Locals (TRLRHL), com es defineixen principalment els tributs?",
    "answers": [
      { "text": "Com a ingressos públics que consisteixen en prestacions pecuniàries exigides per una administració pública com a conseqüència de la realització del supòsit de fet al qual la llei vincula el deure de contribuir", "correct": true },
      { "text": "Com a preus de dret privat derivats de la venda de béns i serveis en règim de lliure mercat competitiu", "correct": false },
      { "text": "Com a contraprestacions voluntàries exigides exclusivament quan el servei públic sol·licitat tingui caràcter optatiu", "correct": false },
      { "text": "Com a previsions comptables d'ingressos que no tenen caràcter obligatori ni requereixen habilitació legal prèvia", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 35: Ingressos de naturalesa tributària: impostos, tributs i taxes. Altres ingressos de les administracions: preus públics i preus privats",
    "number": 2,
    "question": "Quines són les classes de tributs establertes a l'article 26 de la Llei General Tributària (LGT)?",
    "answers": [
      { "text": "Impostos, taxes i contribucions especials", "correct": true },
      { "text": "Impostos directes, impostos indirectes i preus públics", "correct": false },
      { "text": "Taxes, preus públics i preus privats", "correct": false },
      { "text": "Tributs locals, recàrrecs metropolitans i transferències corrents", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 35: Ingressos de naturalesa tributària: impostos, tributs i taxes. Altres ingressos de les administracions: preus públics i preus privats",
    "number": 3,
    "question": "Quin és el percentatge màxim i únic establert legalment per al recàrrec metropolità de l'AMB sobre l'Impost sobre Béns Immobles (IBI)?",
    "answers": [
      { "text": "Un màxim del 0,2% sobre la base imposable (valor cadastral)", "correct": true },
      { "text": "Un tipus fix del 0,5% sobre la quota líquida de l'impost", "correct": false },
      { "text": "Fins a un 2% del valor de mercat de l'immoble urbà", "correct": false },
      { "text": "Un percentatge variable sense límit legal fixat per la Llei 31/2010", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 35: Ingressos de naturalesa tributària: impostos, tributs i taxes. Altres ingressos de les administracions: preus públics i preus privats",
    "number": 4,
    "question": "Quina disposició legal de l'Àrea Metropolitana de Barcelona regula, juntament amb el TRLRHL, el recàrrec metropolità sobre l'IBI?",
    "answers": [
      { "text": "L'article 41 de la Llei 31/2010, de l'AMB", "correct": true },
      { "text": "L'article 153.1.b de la Llei General Pressupostària", "correct": false },
      { "text": "El Decret Legislatiu 3/2002 de finances públiques de Catalunya", "correct": false },
      { "text": "L'Ordenança fiscal general de recaptació de l'ORGT", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 35: Ingressos de naturalesa tributària: impostos, tributs i taxes. Altres ingressos de les administracions: preus públics i preus privats",
    "number": 5,
    "question": "Quin és el tret distintiu fonamental del fet imposable d'una taxa respecte d'un impost?",
    "answers": [
      { "text": "La taxa porta associada una contraprestació directa consistent en la utilització privativa del domini públic o la prestació d'un servei públic que afecta particularment el subjecte passiu", "correct": true },
      { "text": "L'impost mai es pot aplicar en l'àmbit local ni metropolità", "correct": false },
      { "text": "La taxa es fixa sempre en funció de la lliure concurrència del mercat privat", "correct": false },
      { "text": "L'impost requereix sempre una sol·licitud voluntària de l'administrat", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 35: Ingressos de naturalesa tributària: impostos, tributs i taxes. Altres ingressos de les administracions: preus públics i preus privats",
    "number": 6,
    "question": "Segons la normativa local i les trampes habituals d'examen, com s'ha de configurar legalment un servei d'establiment o recepció obligatòria?",
    "answers": [
      { "text": "Necessàriament com a taxa, i mai com a preu públic", "correct": true },
      { "text": "Com a preu privat contractual regit pel dret civil", "correct": false },
      { "text": "Com un ingrés patrimonial no subjecte a ordenança fiscal", "correct": false },
      { "text": "Com una subvenció finalista de caràcter voluntari", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 35: Ingressos de naturalesa tributària: impostos, tributs i taxes. Altres ingressos de les administracions: preus públics i preus privats",
    "number": 7,
    "question": "Quina naturalesa jurídica tenen els preus públics segons el dret administratiu local?",
    "answers": [
      { "text": "Són ingressos de dret públic no tributaris", "correct": true },
      { "text": "Son tributs directes integrats en el capítol 1 del pressupost", "correct": false },
      { "text": "Són ingressos de dret privat sotmesos a les lleis mercantils", "correct": false },
      { "text": "Són contribucions especials de caràcter voluntari", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 35: Ingressos de naturalesa tributària: impostos, tributs i taxes. Altres ingressos de les administracions: preus públics i preus privats",
    "number": 8,
    "question": "En quin supòsit es pot aprovar un preu públic per a la prestació de serveis o realització d'activitats?",
    "answers": [
      { "text": "Quan prestant-se també pel sector privat, no siguin d'establiment o sol·licitud obligatòria per part dels administrats", "correct": true },
      { "text": "Quan el servei es trobi sota un règim de monopoli legal obligatori", "correct": false },
      { "text": "Quan es tracti de finançar el servei de recollida de residus domiciliaris obligatoris", "correct": false },
      { "text": "Quan s'apliqui directament sobre el valor cadastral dels habitatges", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 35: Ingressos de naturalesa tributària: impostos, tributs i taxes. Altres ingressos de les administracions: preus públics i preus privats",
    "number": 9,
    "question": "Quina diferència principal existeix quant al règim jurídic aplicable entre els preus públics i els preus privats?",
    "answers": [
      { "text": "Els preus privats es regeixen pel dret privat i contractual, mentre que els preus públics són ingressos de dret públic no tributaris", "correct": true },
      { "text": "Els preus privats s'aproven sempre per ple mitjançant ordenança fiscal obligatòria", "correct": false },
      { "text": "Els preus públics tenen la consideració legal d'impostos indirectes", "correct": false },
      { "text": "No existeix cap diferència, ja que ambdós formen part dels tributs locals", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 35: Ingressos de naturalesa tributària: impostos, tributs i taxes. Altres ingressos de les administracions: preus públics i preus privats",
    "number": 10,
    "question": "Segons el quadre comparatiu d'ingressos, quin principi regeix principalment el criteri de finançament o límit de la quantia en les taxes locals i metropolitanes?",
    "answers": [
      { "text": "El principi d'equivalència (com a màxim el cost del servei prestat o de l'activitat)", "correct": true },
      { "text": "El lliure mercat i la llei de l'oferta i la demanda", "correct": false },
      { "text": "La capacitat econòmica pura sense cap relació amb el cost del servei", "correct": false },
      { "text": "La cobertura voluntària de benefici industrial il·LIMITAT", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 35: Ingressos de naturalesa tributària: impostos, tributs i taxes. Altres ingressos de les administracions: preus públics i preus privats",
    "number": 11,
    "question": "Quina característica defineix els impostos dins del sistema fiscal local i metropolità?",
    "answers": [
      { "text": "Són tributs exigits sense contraprestació directa, el fet imposable dels quals posa de manifest la capacitat econòmica", "correct": true },
      { "text": "S'exigeixen exclusivament per l'ús privatiu del domini públic", "correct": false },
      { "text": "Requereixen una sol·licitud prèvia i expressa del ciutadà", "correct": false },
      { "text": "El seu import equival exactament al cost del servei administratiu", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 35: Ingressos de naturalesa tributària: impostos, tributs i taxes. Altres ingressos de les administracions: preus públics i preus privats",
    "number": 12,
    "question": "Com gestiona principalment l'AMB ingressos tributaris com la taxa metropolitana de tractament i disposició de residus o el cànon de sanejament?",
    "answers": [
      { "text": "Mitjançant ordenances fiscals metropolitanes i a través d'òrgans de recaptació propis o consorciats com l'ORGT", "correct": true },
      { "text": "Mitjançant contractes privats de dret civil signats amb empreses subministradores", "correct": false },
      { "text": "A través de preus privats aprovats per decret de gerència sense publicació", "correct": false },
      { "text": "Mitjançant fons de contingència pressupostària no subjectes a recaptació", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 35: Ingressos de naturalesa tributària: impostos, tributs i taxes. Altres ingressos de les administracions: preus públics i preus privats",
    "number": 13,
    "question": "Quina trampa d'examen és molt comuna respecte a la classificació pressupostària dels preus públics?",
    "answers": [
      { "text": "Incloure'ls erròniament dins dels ingressos tributaris quan en realitat són ingressos no tributaris de dret públic", "correct": true },
      { "text": "Confondre'ls amb els impostos directes del capítol 1 del pressupost d'ingressos", "correct": false },
      { "text": "Considerar que s'aproven sempre per llei orgànica estatal", "correct": false },
      { "text": "Atribuir-los un caràcter de recaptació voluntària per dret privat", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 35: Ingressos de naturalesa tributària: impostos, tributs i taxes. Altres ingressos de les administracions: preus públics i preus privats",
    "number": 14,
    "question": "Quin és l'objectiu principal del tribut metropolità (TM) establert per l'AMB segons la informació oficial del portal amb.cat?",
    "answers": [
      { "text": "Gravar la capacitat econòmica manifestada a través dels béns immobles urbans per finançar serveis supramunicipals com el transport col·lectiu de superfície", "correct": true },
      { "text": "Finançar exclusivament la construcció d'infraestructures de caràcter privat i mercantil", "correct": false },
      { "text": "Substituir completament l'Impost sobre Béns Immobles (IBI) de titularitat municipal", "correct": false },
      { "text": "Cobrir el cost dels preus privats de les activitats culturals metropolitanes", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 35: Ingressos de naturalesa tributària: impostos, tributs i taxes. Altres ingressos de les administracions: preus públics i preus privats",
    "number": 15,
    "question": "Segons el TRLRHL (art. 153.1.a), quina figura poden establir les àrees metropolitanes sobre els immobles situats en el seu territori?",
    "answers": [
      { "text": "Un recàrrec sobre l'IBI", "correct": true },
      { "text": "Una taxa obligatòria de recollida de escombraries estatals", "correct": false },
      { "text": "Un preu privat de caràcter recaptatori general", "correct": false },
      { "text": "Una contribució especial per plusvàlues urbanístiques", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 35: Ingressos de naturalesa tributària: impostos, tributs i taxes. Altres ingressos de les administracions: preus públics i preus privats",
    "number": 16,
    "question": "Quin caràcter tenen les sol·licituds o la recepció en el cas dels preus públics en contraposició a les taxes?",
    "answers": [
      { "text": "En els preus públics la sol·licitud és voluntaria i no obligatòria, mentre que en les taxes pot ser obligatòria o de sol·licitud necessària", "correct": true },
      { "text": "En els preus públics la sol·licitud és sempre per imperatiu legal indefinit", "correct": false },
      { "text": "En les taxes la sol·licitud és totalment optativa i de dret privat", "correct": false },
      { "text": "No hi ha cap diferència en el caràcter de la sol·licitud entre ambdues figures", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 35: Ingressos de naturalesa tributària: impostos, tributs i taxes. Altres ingressos de les administracions: preus públics i preus privats",
    "number": 17,
    "question": "Quina és la base imposable sobre la qual s'aplica el recàrrec metropolità de l'AMB referit a l'IBI?",
    "answers": [
      { "text": "El valor cadastral dels béns immobles urbans", "correct": true },
      { "text": "El preu de mercat de la compravenda de l'immoble", "correct": false },
      { "text": "La liquidació neta de la quota de l'impost sobre societats", "correct": false },
      { "text": "El volum de residus sòlids urbans generats anualment", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 35: Ingressos de naturalesa tributària: impostos, tributs i taxes. Altres ingressos de les administracions: preus públics i preus privats",
    "number": 18,
    "question": "Quin òrgan o instància aprova habitualment les ordenances fiscals i preus públics de l'AMB?",
    "answers": [
      { "text": "El Consell Metropolità de l'AMB", "correct": true },
      { "text": "El Parlament de Catalunya mitjançant llei de pressupostos", "correct": false },
      { "text": "La Junta de Govern Local de l'Ajuntament de Barcelona de forma unilateral", "correct": false },
      { "text": "El Departament d'Economia i Finances de la Generalitat", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 35: Ingressos de naturalesa tributària: impostos, tributs i taxes. Altres ingressos de les administracions: preus públics i preus privats",
    "number": 19,
    "question": "Dins de l'estructura del pressupost d'ingressos d'una entitat local o supramunicipal com l'AMB, on s'integren generalment els impostos directes?",
    "answers": [
      { "text": "En el Capítol 1 del pressupost d'ingressos", "correct": true },
      { "text": "En el Capítol 3 d'ingressos per preus públics", "correct": false },
      { "text": "En el Capítol 5 d'ingressos patrimonials", "correct": false },
      { "text": "En el Capítol 9 de passius financers", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 35: Ingressos de naturalesa tributària: impostos, tributs i taxes. Altres ingressos de les administracions: preus públics i preus privats",
    "number": 20,
    "question": "Quina afirmació és correcta pel que fa a la gestió conjunta del recàrrec metropolità de l'IBI segons l'article 41 de la Llei 31/2010?",
    "answers": [
      { "text": "S'ha de gestionar de manera conjunta amb la del mateix impost (l'IBI) sobre el qual recau", "correct": true },
      { "text": "Es gestiona de manera totalment independent i desvinculada del cadastre municipal", "correct": false },
      { "text": "Es recapta exclusivament a través de preus privats de contractació voluntària", "correct": false },
      { "text": "Requereix una liquidació separada realitzada directament per cada contribuent sense cens previ", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 35: Ingressos de naturalesa tributària: impostos, tributs i taxes. Altres ingressos de les administracions: preus públics i preus privats",
    "number": 21,
    "question": "Quin tipus de contraprestació representen les taxes per la utilització privativa o aprofitament especial del domini públic?",
    "answers": [
      { "text": "Una prestació tributària amb contraprestació derivada del benefici o utilització particular del domini públic", "correct": true },
      { "text": "Un preu privat de lliure mercat regit pel dret civil de contractes", "correct": false },
      { "text": "Un impost directe sense cap tipus de relació amb el domini públic", "correct": false },
      { "text": "Una subvenció corrent concedida per l'Estat", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 35: Ingressos de naturalesa tributària: impostos, tributs i taxes. Altres ingressos de les administracions: preus públics i preus privats",
    "number": 22,
    "question": "Segons l'ordenament tributari local, quina de les següents figures constitueix un impost local de recaptació obligatòria o potestativa segons correspongui?",
    "answers": [
      { "text": "L'Impost sobre Béns Immobles (IBI), l'Impost sobre Activitats Econòmiques (IAE) i l'Impost sobre Vehicles de Tracció Mecànica (IVTM)", "correct": true },
      { "text": "La taxa metropolitana de tractament de residus i el preu públic de piscines", "correct": false },
      { "text": "El preu privat per la publicitat institucional a la web de l'AMB", "correct": false },
      { "text": "La subvenció corrent rebuda de la Unió Europea", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 35: Ingressos de naturalesa tributària: impostos, tributs i taxes. Altres ingressos de les administracions: preus públics i preus privats",
    "number": 23,
    "question": "Quina és la cobertura financera o el criteri de fixació de quantia exigit legalment per als preus públics?",
    "answers": [
      { "text": "Com a mínim han de cobrir el cost del servei o de la activitat prestada", "correct": true },
      { "text": "Han d'excedir obligatòriament el límit del 0,2% del valor cadastral", "correct": false },
      { "text": "Han de calcular-se exclusivament en funció de la capacitat econòmica neta del subjecte", "correct": false },
      { "text": "No tenen cap regla de cobertura de cost i poden fixar-se lliurement per sota del cost marginal en qualsevol cas", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 35: Ingressos de naturalesa tributària: impostos, tributs i taxes. Altres ingressos de les administracions: preus públics i preus privats",
    "number": 24,
    "question": "En relació amb els ingressos de les administracions públiques, on s'inclouen normativament els ingressos obtinguts per la venda de béns o prestació de serveis sota condicions de dret privat?",
    "answers": [
      { "text": "Dins de la categoria de preus privats", "correct": true },
      { "text": "Dins del concepte estricte de taxes fiscals locals", "correct": false },
      { "text": "Com a tributs derivats de la potència fiscal de l'AMB", "correct": false },
      { "text": "Com a impostos indirectes de recaptació obligatòria", "correct": false }
    ]
  },
  {
    "theme": "Bloc VI - Tema 35: Ingressos de naturalesa tributària: impostos, tributs i taxes. Altres ingressos de les administracions: preus públics i preus privats",
    "number": 25,
    "question": "Quin article del Text Refós de la Llei Reguladora de les Hisendes Locals (TRLRHL) preveu expressament la possibilitat que les àrees metropolitanes estableixin un recàrrec sobre l'IBI?",
    "answers": [
      { "text": "L'article 153.1.a", "correct": true },
      { "text": "L'article 26.2", "correct": false },
      { "text": "L'article 62.1", "correct": false },
      { "text": "L'article 109.c", "correct": false }
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