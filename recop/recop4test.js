const TEST_ID = "recop4test.js"; 

const questions = [
{
    "theme": "Bloc IV (Temari Específic) - Tema 16: Procediment administratiu, acte administratiu i expedient administratiu",
    "number": 1,
    "question": "Segons la normativa aplicable i la doctrina sobre els actes administratius, quin és el règim jurídic aplicable als actes de tràmit quant a la seva impugnació?",
    "answers": [
      { "text": "Són sempre impugnables de forma separada tant en via administrativa com contenciosa administrativa", "correct": false },
      { "text": "No són impugnables separadament, llevat dels anomenats actes de tràmit qualificats que decideixen directament o indirectament el fons, determinen la impossibilitat de continuar el procediment o produeixen indefensió", "correct": true },
      { "text": "Només poden ser objecte de recurs extraordinari de revisió un cop dictada la resolució final", "correct": false },
      { "text": "Admeten sempre un recurs d'alçada directe davant del superior jeràrquic sense excepcions", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 16: Procediment administratiu, acte administratiu i expedient administratiu",
    "number": 2,
    "question": "D'acord amb el règim de la invalidesa dels actes administratius, quin efecte jurídic produeix un acte afectat per un vici de nul·litat de ple dret pel que fa a la seva possible fermesa?",
    "answers": [
      { "text": "Adquireix fermesa jurídica un cop transcorreguts els terminis generals de recurs si no ha estat impugnat", "correct": false },
      { "text": "Pot ser convalidat per l'òrgan superior jeràrquic si s'esmenen els defectes formals en el termini de tres mesos", "correct": false },
      { "text": "No pot adquirir fermesa jurídica en cap cas, ni tan sols si es deixa transcórrer el termini establert per a impugnar-lo[cite: 1]", "correct": true },
      { "text": "Es converteix automàticament en un acte anul·lable un cop finalitzada la via administrativa", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 16: Procediment administratiu, acte administratiu i expedient administratiu",
    "number": 3,
    "question": "Pel que fa a la motivació dels actes administratius, quin requisit regeix específicament per als actes de gravamen segons la normativa aplicable?",
    "answers": [
      { "text": "No requereixen cap tipus de motivació si deriven d'una potestat discrecional de l'Administració", "correct": false },
      { "text": "Necessiten obligatòriament ser motivats, a diferència dels actes favorables que en principi no ho han d'estar[cite: 1]", "correct": true },
      { "text": "Només s'han de motivar si ho sol·licita expressament l'interessat en el tràmit d'audiència", "correct": false },
      { "text": "Exigeixen una motivació reforçada només quan es tracta de procediments iniciats d'ofici", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 16: Procediment administratiu, acte administratiu i expedient administratiu",
    "number": 4,
    "question": "Quina de les següents opcions constitueix una causa de nul·litat de ple dret d'un acte administratiu?",
    "answers": [
      { "text": "Qualsevol infracció general de l'ordenament jurídic o desviació de poder", "correct": false },
      { "text": "La realització d'actuacions administratives fora del termini establert quan així ho exigeixi la naturalesa de l'acte", "correct": false },
      { "text": "Els actes dictats amb omissió total i absoluta del procediment legalment establert o de les regles essencials per a la formació de la voluntat dels òrgans col·legiats[cite: 1]", "correct": true },
      { "text": "Els defectes de forma que produeixin indefensió a les persones interessades", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 16: Procediment administratiu, acte administratiu i expedient administratiu",
    "number": 5,
    "question": "Respecte a la tècnica de la validació dels actes administratius, quin dels següents extrems és correcte?",
    "answers": [
      { "text": "L'Administració pot validar tant els actes nuls de ple dret com els anul·lables mitjançant l'esmena de vicis", "correct": false },
      { "text": "L'Administració pot validar exclusivament els actes anul·lables mitjançant l'esmena dels vicis que presenten[cite: 1]", "correct": true },
      { "text": "La validació d'un acte produeix sempre efectes retroactius des de la data de la seva emissió originària", "correct": false },
      { "text": "Qualsevol òrgan administratiu inferior pot validar un acte dictat per un òrgan superior incompetent", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 16: Procediment administratiu, acte administratiu i expedient administratiu",
    "number": 6,
    "question": "Com es defineix l'acte administratiu tàcit en el si del procediment?",
    "answers": [
      { "text": "Aquell en què l'ordenament jurídic fixa el sentit del silenci davant l'incompliment de l'obligació de resoldre", "correct": false },
      { "text": "Aquell on no hi ha una manifestació externa clara, però de la conducta administrativa es presumeix raonablement l'existència d'una voluntat que produeix efectes jurídics[cite: 1]", "correct": true },
      { "text": "Aquell que s'exterioritza de forma oral o mitjançant signes mímics dirigits per agents de l'autoritat", "correct": false },
      { "text": "Aquell que resol directament el fons d'un expedient iniciat d'ofici sense tràmit d'audiència", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 16: Procediment administratiu, acte administratiu i expedient administratiu",
    "number": 7,
    "question": "Quina característica distingeix els actes discrecionals respecte dels reglats?",
    "answers": [
      { "text": "En els discrecionals l'ordenament jurídic preveu l'activitat administrativa en absolutament tots els seus aspectes", "correct": false },
      { "text": "Els discrecionals permeten a l'Administració marge d'actuació, però exigeixen com a requisit imprescindible que els fins perseguits estiguin predeterminats a l'ordenament jurídic per evitar la desviació de poder[cite: 1]", "correct": true },
      { "text": "Els actes discrecionals no estan subjectes a cap tipus de control per part de la jurisdicció contenciosa administrativa", "correct": false },
      { "text": "La desviació de poder només pot donar-se en els actes reglats i mai en els discrecionals", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 16: Procediment administratiu, acte administratiu i expedient administratiu",
    "number": 8,
    "question": "Quin és l'efecte d'un defecte de forma en un acte administratiu segons la regulació general de l'anul·labilitat?",
    "answers": [
      { "text": "Determina sempre i en tot cas la nul·litat de ple dret de tot el procediment", "correct": false },
      { "text": "Només dóna lloc a l'anul·labilitat quan l'acte manca dels requisits formals indispensables per assolir el seu fi o dóna lloc a la indefensió dels interessats[cite: 1]", "correct": true },
      { "text": "Converteix l'acte en una irregularitat insubsanable subjecta a revisió extraordinària", "correct": false },
      { "text": "Invalida immediatament l'expedient electrònic sense possibilitat de conservació de tràmits", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 16: Procediment administratiu, acte administratiu i expedient administratiu",
    "number": 9,
    "question": "En relació amb la incomunicació d'invalidesa i la conservació d'actes, com s'ha de procedir quan un òrgan declara la nul·litat o anul·la actuacions d'un procediment?",
    "answers": [
      { "text": "S'ha de declarar la nul·litat absoluta de tot l'expedient des de la seva fase inicial", "correct": false },
      { "text": "Ha de disposar sempre la conservació d'aquells actes i tràmits el contingut dels quals s'hauria mantingut igual si no s'hagués comès la infracció[cite: 1]", "correct": true },
      { "text": "S'exigeix la tramitació d'un nou expedient electrònic complet des de zero obligatòriament", "except": false },
      { "text": "Només es poden conservar els actes de tràmit qualificats que posin fi a la via administrativa", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 16: Procediment administratiu, acte administratiu i expedient administratiu",
    "number": 10,
    "question": "Quina de les següents circumstàncies determina la nul·litat de ple dret d'un acte per raó de la competència de l'òrgan?",
    "answers": [
      { "text": "Que l'òrgan hagi actuat per delegació d'un òrgan superior sense la publicació prèvia al butlletí oficial", "correct": false },
      { "text": "Que l'acte hagi estat dictat per un òrgan manifestament incompetent per raó de la matèria o del territori[cite: 1]", "correct": true },
      { "text": "Que s'hagi produït una simple alteració en l'ordre de prelació en l'exercici de la substitució interorgànica", "correct": false },
      { "text": "Que l'òrgan hagi resolt fora del termini general establert per a la tramitació del procediment", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 16: Procediment administratiu, acte administratiu i expedient administratiu",
    "number": 11,
    "question": "Segons la Llei 39/2015 i el model d'administració digital aplicat a l'Àrea Metropolitana de Barcelona (AMB), quin format ha de tenir obligatòriament l'expedient administratiu?",
    "answers": [
      { "text": "Format mixt de paper i digital segons el volum de documents aportats pel sol·licitant", "correct": false },
      { "text": "Format íntegrament electrònic, estructurat mitjançant un índex electrònic que garanteixi la integritat, la cerca i la traçabilitat", "correct": true },
      { "text": "Format en suport paper custodiat a l'arxiu general de la seu central de l'AMB", "correct": false },
      { "text": "Format digitalitzat sense necessitat d'índex electrònic si es tracta de procediments d'ajuts a l'habitatge", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 16: Procediment administratiu, acte administratiu i expedient administratiu",
    "number": 12,
    "question": "Quina és la naturalesa jurídica de l'acte presumpte derivat del silenci administratiu?",
    "answers": [
      { "text": "Un acte exprés de contingut sancçonador dictat per l'òrgan competent per delegació", "correct": false },
      { "text": "Un acte derivat de la inactuació material de l'Administració on l'ordenament jurídic fixa el significat de la conducta davant l'incompliment de l'obligació de resoldre[cite: 1]", "correct": true },
      { "text": "Un acte de tràmit qualificat que posa necessàriament fi a la via administrativa", "correct": false },
      { "text": "Un acord convencional subscrit entre l'AMB i els ajuntaments consorciats", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 16: Procediment administratiu, acte administratiu i expedient administratiu",
    "number": 13,
    "question": "Quin tipus de vici comporta l'incompliment de les regles essencials per a la formació de la voluntat dels òrgans col·legiats?",
    "answers": [
      { "text": "Una simple irregularitat no invalidant de caràcter purament fiscal", "correct": false },
      { "text": "La nul·litat de ple dret de l'acte resultant[cite: 1]", "correct": true },
      { "text": "L'anul·labilitat sotmesa a un termini de caducitat de quatre anys", "correct": false },
      { "text": "La convalidació tàcita automàtica per transcurs del termini d'informació pública", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 16: Procediment administratiu, acte administratiu i expedient administratiu",
    "number": 14,
    "question": "Què estableix la regulació pel que fa a la conversió d'actes nuls o anul·lables?",
    "answers": [
      { "text": "Està totalment prohibida per qualsevol classe d'acte administratiu", "correct": false },
      { "text": "Si els actes nuls o anul·lables contenen els elements constitutius d'un altre de diferent, poden produir els efectes d'aquest[cite: 1]", "correct": true },
      { "text": "Només pot ser aplicada mitjançant una sentència ferma de la jurisdicció contenciosa administrativa", "correct": false },
      { "text": "Requereix l'aprovació prèvia per majoria qualificada del Consell Metropolità de l'AMB", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 16: Procediment administratiu, acte administratiu i expedient administratiu",
    "number": 15,
    "question": "Quin és el règim d'impugnació dels actes que posen fi a la via administrativa en l'àmbit local i metropolità?",
    "answers": [
      { "text": "Només admeten recurs d'alçada obligatori davant el conseller o superior jeràrquic", "correct": false },
      { "text": "Poden ser impugnats directament davant de la jurisdicció contenciosa administrativa o mitjançant el recurs potestatiu de reposició[cite: 1]", "correct": true },
      { "text": "Requereixen ineludiblement la interposició prèvia d'una reclamació economicoadministrativa", "correct": false },
      { "text": "Són inatacables des del mateix moment de la seva notificació a l'interessat", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 16: Procediment administratiu, acte administratiu i expedient administratiu",
    "number": 16,
    "question": "Quina és la conseqüència jurídica de dictar un acte administratiu el contingut del qual sigui impossible?",
    "answers": [
      { "text": "Constitueix una irregularitat no invalidant subsanable de ofici", "correct": false },
      { "text": "Determina la nul·litat de ple dret de l'acte[cite: 1]", "correct": true },
      { "text": "Dóna lloc exclusivament a la seva anul·labilitat en el termini d'un any", "correct": false },
      { "text": "Incompleix un requisit merament formal que no afecta la seva validesa material", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 16: Procediment administratiu, acte administratiu i expedient administratiu",
    "number": 17,
    "question": "Com opera la presumpció de validesa dels actes administratius segons el marc normatiu?",
    "answers": [
      { "text": "Els actes es presumeixen vàlids perquè compten amb la confiança del legislador en la seva conformitat a l'ordenament jurídic, sent immediatament executius[cite: 1]", "correct": true },
      { "text": "Només s'aplica als actes favorables, mentre que els de gravamen es presumeixen nuls fins a la seva comprovació", "correct": false },
      { "text": "Requereix una declaració judicial prèvia per poder desplegar qualsevol tipus d'efecte jurídic", "correct": false },
      { "text": "Caduca automàticament si transcorren trenta dies sense notificació fefaent a l'interessat", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 16: Procediment administratiu, acte administratiu i expedient administratiu",
    "number": 18,
    "question": "Quin paper juguen les Seu Electrònica i els Codis Segurs de Verificació (CSV) en la gestió dels expedients de l'AMB?",
    "answers": [
      { "text": "Serveixen exclusivament per publicar els anuncis de licitació al Butlletí Oficial de la Província", "correct": false },
      { "text": "Garanteixen la consulta de l'estat de tramitació de l'expedient per part de la ciutadania i asseguren la autenticitat i integritat dels documents", "correct": true },
      { "text": "Substitueixen completament la necessitat de redactar actes administratius resolutoris", "correct": false },
      { "text": "Constitueixen un requisit de caràcter voluntari no vinculat a la Llei 39/2015", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 16: Procediment administratiu, acte administratiu i expedient administratiu",
    "number": 19,
    "question": "Quin és el tractament jurídic aplicable als actes administratius constitutius d'infracció penal o dictats com a conseqüència seva?",
    "answers": [
      { "text": "Són merament anul·labilitat en el termini de recurs contenciós", "correct": false },
      { "text": "Són nuls de ple dret[cite: 1]", "correct": true },
      { "text": "Constitueixen una irregularitat no invalidant de caràcter penal", "correct": false },
      { "text": "Poden ser convalidats mitjançant informe favorable dels serveis jurídics", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 16: Procediment administratiu, acte administratiu i expedient administratiu",
    "number": 20,
    "question": "Quina particularitat presenten els actes dictats contra l'ordenament jurídic pels quals s'adquireixen facultats o drets quan no es tenen els requisits essencials?",
    "answers": [
      { "text": "S'qualifiquen expressament com a supòsits de nul·litat de ple dret, tant si són expressos com presumptes[cite: 1]", "correct": true },
      { "text": "Són plenament vàlids si l'Administració ha tardat més de sis mesos a adonar-se de l'error", "correct": false },
      { "text": "Generen un dret adquirit consolidat inatacable per la via de revisió d'ofici", "correct": false },
      { "text": "Només poden ser anul·lats a instància de part dins del termini de quatre anys", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 16: Procediment administratiu, acte administratiu i expedient administratiu",
    "number": 21,
    "question": "D'acord amb la classificació dels actes segons els seus efectes patrimonials, com es defineixen els actes favorables?",
    "answers": [
      { "text": "Restringeixen el patrimoni jurídic del destinatari i imposen deures o càrregues", "correct": false },
      { "text": "Amplien el patrimoni jurídic del destinatari, li atorguen o reconeixen un dret, facultat o titularitat, o el lliberen d'una limitació o gravamen[cite: 1]", "correct": true },
      { "text": "Són aquells que requereixen sempre motivació reforçada per evitar la indefensió", "correct": false },
      { "text": "Corresponen exclusivament a resolucions de naturalesa tributària o sancionadora", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 16: Procediment administratiu, acte administratiu i expedient administratiu",
    "number": 22,
    "question": "Quina és la regla general respecte a la impugnació dels actes de tràmit no qualificats en via contenciosa administrativa?",
    "answers": [
      { "text": "Són directament fiscalitzables i recorribles en qualsevol moment davant els jutjats", "correct": false },
      { "text": "Són actes susceptibles de no ser fiscalitzats en via contenciosa administrativa de manera separada[cite: 1]", "correct": true },
      { "text": "Admeten un recurs d'alçada extraordinari davant el Ple de la corporació", "correct": false },
      { "text": "S'equiparen a efectes pràctics als actes resolutoris definitius", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 16: Procediment administratiu, acte administratiu i expedient administratiu",
    "number": 23,
    "question": "En relació amb els vicis de forma, què determina que un acte sigui considerat merament irregular?",
    "answers": [
      { "text": "Que pateixi d'algun vici de forma però sense tenir prou entitat ni gravetat per anul·lar l'acte, en no generar indefensió ni incomplir la seva finalitat (irregularitat no invalidant)[cite: 1]", "correct": true },
      { "text": "Que s'hagi dictat amb omissió total i absoluta del procediment legalment establert", "correct": false },
      { "text": "Que correspongui a un acte de gravamen sense motivació prèvia", "correct": false },
      { "text": "Que l'òrgan emissor sigui manifestament incompetent per raó de la matèria", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 16: Procediment administratiu, acte administratiu i expedient administratiu",
    "number": 24,
    "question": "Com s'articula la competència per dictar actes administratius en l'àmbit de l'Àrea Metropolitana de Barcelona (AMB)?",
    "answers": [
      { "text": "S'ha de sotmetre estrictament al principi de legalitat competencial establert en els Estatuts de l'AMB i la Llei 31/2010 de l'AMB", "correct": true },
      { "text": "Depèn exclusivament dels decrets de delegació de l'Administració General de l'Estat", "correct": false },
      { "text": "Es regeix per les directrius de la normativa d'hisendes locals pròpia d'ajuts supramunicipals sense tenir en compte els estatuts", "correct": false },
      { "text": "Atorga facultats discrecionals il·limitades a la Gerència per modificar el règim de tributs", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 16: Procediment administratiu, acte administratiu i expedient administratiu",
    "number": 25,
    "question": "Quina és la premissa fonamental sobre el termini per declarar o impugnar la nul·litat de ple dret d'un acte administratiu?",
    "answers": [
      { "text": "Caduca indefectiblement al cap de quatre anys des de la seva notificació", "correct": false },
      { "text": "Es pot declarar o impugnar en qualsevol moment, ja que no prescriu mai[cite: 1]", "correct": true },
      { "text": "Només pot ser instada dins del termini de quinze dies d'exposició pública al BOP", "correct": false },
      { "text": "Prescriu un cop transcorregut el termini d'interposició del recurs d'alçada", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 1,
    "question": "Segons la normativa de procediment administratiu, quina és la naturalesa jurídica d'una queixa o suggeriment presentada per un ciutadà davant l'AMB?",
    "answers": [
      { "text": "Constitueix un recurs administratiu ordinari que suspèn els terminis d'impugnació", "correct": false },
      { "text": "És un mitjà no formal que no constitueix un recurs administratiu ni inicia cap procediment sancionador", "correct": true },
      { "text": "És un requisit de procedibilitat obligatori abans d'acudir a la jurisdicció contenciosa-administrativa", "correct": false },
      { "text": "Té idèntica naturalesa i efectes jurídics que el recurs potestatiu de reposició", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 2,
    "question": "Quin efecte produeix la presentació d'una queixa o suggeriment sobre els terminis establerts per interposar els recursos administratius o judicials legals?",
    "answers": [
      { "text": "Interromp tant els terminis de la via administrativa com de la via judicial", "correct": false },
      { "text": "Suspèn el termini d'interposició del recurs d'alçada durant un màxim de quinze dies", "correct": false },
      { "text": "No interromp ni suspèn en cap cas els terminis establerts per interposar recursos", "correct": true },
      { "text": "Només interromp el termini si es refereix a tributs metropolitans de l'IMT", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 3,
    "question": "Quina característica principal defineix la denúncia presentada per un particular davant de l'Administració pública?",
    "answers": [
      { "text": "Atorga automàticament la condició d'interessat en el procediment a qui la presenta", "correct": false },
      { "text": "Posa en coneixement d'un òrgan fets que podrien ser constitutius d'infracció, sense obligar a donar la condició d'interessat", "correct": true },
      { "text": "S'ha de formalitzar necessàriament mitjançant un recurs d'alçada o de reposició", "correct": false },
      { "text": "Només pot ser presentada per personal funcionari de l'entitat local", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 4,
    "question": "En què moment processal es poden presentar les al·legacions per part dels interessats durant la tramitació d'un procediment administratiu?",
    "answers": [
      { "text": "Únicament un cop dictada la resolució definitiva en via administrativa", "correct": false },
      { "text": "En qualsevol moment del procediment anterior al tràmit d'audiència i proposta de resolució", "correct": true },
      { "text": "Només durant el termini improrrogable de les 48 hores posteriors a la iniciació", "correct": false },
      { "text": "Exclusivament durant la fase d'execució material de l'acte administratiu", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 5,
    "question": "Quin deure té l'òrgan instructor respecte de les al·legacions i documents presentats pels interessats?",
    "answers": [
      { "text": "Té l'obligació de tenir-les en compte a l'hora de redactar la proposta de resolució definitiva", "correct": true },
      { "text": "Pot ignorar-les lliurement si el procediment s'ha iniciat d'ofici", "correct": false },
      { "text": "Està obligat a elevar-les directament al Tribunal Constitucional per a la seva validació", "correct": false },
      { "text": "Només les ha de valorar si suposen una modificació del pressupost general", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 6,
    "question": "Contra quin tipus d'actes administratius s'interposa generalment el recurs d'alçada segons la Llei 39/2015?",
    "answers": [
      { "text": "Contra actes que posen fi a la via administrativa", "correct": false },
      { "text": "Contra actes que NO posen fi a la via administrativa, davant l'òrgan superior jeràrquic", "correct": true },
      { "text": "Exclusivament contra disposicions de caràcter general i reglaments orgànics", "correct": false },
      { "text": "Contra qualsevol resolució dictada pel Ple d'una corporació local", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 7,
    "question": "Quin és el termini general d'interposició d'un recurs d'alçada si l'acte administratiu impugnat és exprés?",
    "answers": [
      { "text": "Deu dies hàbils des de la publicació al tauler d'anuncis", "correct": false },
      { "text": "Un mes des de l'endemà de la notificació de l'acte", "correct": true },
      { "text": "Dos mesos des de la data de la seva emissió interna", "correct": false },
      { "text": "Tres mesos si es tracta d'una entitat metropolitana", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 8,
    "question": "Quin és el termini general per interposar un recurs d'alçada en cas que l'acte sigui presumpte (produït per silenci administratiu)?",
    "answers": [
      { "text": "Un mes", "correct": false },
      { "text": "Dos mesos", "correct": false },
      { "text": "Tres mesos, a comptar de l'endemà d'aquell en què es produeixi el silenci", "correct": true },
      { "text": "Sis mesos improrrogables", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 9,
    "question": "Quin òrgan és el competent per resoldre un recurs d'alçada interposat contra un acte dictat per un òrgan inferior?",
    "answers": [
      { "text": "El mateix òrgan que va dictar l'acte impugnat", "correct": false },
      { "text": "L'òrgan superior jeràrquic d'aquell que va dictar l'acte", "correct": true },
      { "text": "El Jutjat Contenciós-Administratiu de guàrdia de Barcelona", "correct": false },
      { "text": "La Sindicatura de Comptes de Catalunya", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 10,
    "question": "Quina és la naturalesa del recurs potestatiu de reposició respecte dels actes que posen fi a la via administrativa?",
    "answers": [
      { "text": "És un recurs obligatori previ a l'interposició del recurs d'alçada", "correct": false },
      { "text": "És potestatiu, de manera que l'interessat pot triar entre interposar-lo o acudir directament a la via contenciosa-administrativa", "correct": true },
      { "text": "Només pot interposar-se per motius de nul·litat de ple dret i mai per anul·labilitat", "correct": false },
      { "text": "Requereix necessàriament la intervenció prèvia de la Comissió Jurídica Assessora", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 11,
    "question": "Quin termini general estableix la normativa per interposar el recurs potestatiu de reposició contra un acte exprés?",
    "answers": [
      { "text": "Un mes", "correct": true },
      { "text": "Dos mesos", "correct": false },
      { "text": "Tres mesos", "correct": false },
      { "text": "Sis mesos", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 12,
    "question": "Quina trampa o error comú s'ha d'evitar en relació amb els recursos contra actes que posen fi a la via administrativa?",
    "answers": [
      { "text": "Interposar un recurs d'alçada contra un acte que posa fi a la via administrativa", "correct": true },
      { "text": "Presentar un recurs de reposició davant el mateix òrgan que va dictar l'acte", "correct": false },
      { "text": "Acudir al jutjat contenciós-administratiu un cop transcorreguts els terminis legals", "correct": false },
      { "text": "Utilitzar el model oficial normalitzat de la Seu Electrònica de l'AMB", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 13,
    "question": "Quin caràcter excepcional té el recurs extraordinari de revisió?",
    "answers": [
      { "text": "Es pot interposar contra qualsevol acte en qualsevol moment sense límit temporal", "correct": false },
      { "text": "Es interposa contra actes ferms en via administrativa per motius taxats per la llei (com error de fet o aparició de documents essencials)", "correct": true },
      { "text": "Només es pot utilitzar per modificar reglaments d'organització i funcionament", "correct": false },
      { "text": "Substitueix obligatòriament la jurisdicció contenciosa-administrativa en l'àmbit local", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 14,
    "question": "Quin és el termini general d'interposició del recurs contenciós-administratiu contra un acte administratiu exprés?",
    "answers": [
      { "text": "Un mes", "correct": false },
      { "text": "Dos mesos a comptar de l'endemà de la notificació de l'acte", "correct": true },
      { "text": "Tres mesos", "correct": false },
      { "text": "Sis mesos", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 15,
    "question": "Quin és el termini general per interposar el recurs contenciós-administratiu si es tracta d'una desestimació per silenci administratiu?",
    "answers": [
      { "text": "Dos mesos", "correct": false },
      { "text": "Tres mesos", "correct": false },
      { "text": "Sis mesos a partir de l'endemà del dia en què es produeixi el silenci", "correct": true },
      { "text": "Un any natural", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 16,
    "question": "Quins òrgans judicials coneixen generalment, en primera o única instància, dels recursos contenciosos-administratius contra els actes de les entitats locals?",
    "answers": [
      { "text": "Els Jutjats Contenciosos-Administratius i les Sales contencioses dels TSJ", "correct": true },
      { "text": "Els Jutjats de Primera Instància i Instrucció de l'ordre civil", "correct": false },
      { "text": "El Tribunal de Comptes de l'Estat en ple", "correct": false },
      { "text": "Els tribunals arbitrals de consum de l'AMB", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 17,
    "question": "On s'ha de tramitar principalment una queixa o reclamació relativa a la prestació dels serveis metropolitans essencials de l'AMB (com transport o residus)?",
    "answers": [
      { "text": "A través del servei centralitzat i la bústia accessible a la Seu Electrònica de l'AMB", "correct": true },
      { "text": "Directament mitjançant una demanda urgent davant el Tribunal Suprem", "correct": false },
      { "text": "Mitjançant un recurs extraordinari de revisió davant el Ministeri d'Hisenda", "correct": false },
      { "text": "A través dels jutjats de pau de cadascun dels 36 municipis metropolitans", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 18,
    "question": "Quin organisme de l'AMB s'encarrega específicament de tramitar els recursos i procediments de revisió en matèria de tributs i taxes metropolitanes (com la TMTR)?",
    "answers": [
      { "text": "L'Institut Metropolità de Tributs (IMT)", "correct": true },
      { "text": "L'Autoritat del Transport Metropolità (ATM)", "correct": false },
      { "text": "Transports Metropolitans de Barcelona (TMB)", "correct": false },
      { "text": "El Consorci Metropolità de l'Habitatge", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 19,
    "question": "Segons els Estatuts de l'AMB i la Llei de creació de l'entitat, quina és la consideració dels actes emesos pel Consell Metropolità i la Presidència?",
    "answers": [
      { "text": "Exhaureixen la via administrativa", "correct": true },
      { "text": "Són actes de tràmit no qualificats que no es poden impugnar mai", "correct": false },
      { "text": "Requereixen sempre la ratificació prèvia del Parlament de Catalunya", "correct": false },
      { "text": "Tenen caràcter merament consultiu i no vinculant", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 20,
    "question": "Quin recurs resulta procedent contra una resolució dictada pel Consell Metropolità de l'AMB que exhaureix la via administrativa?",
    "answers": [
      { "text": "Recurs d'alçada davant el conseller competent de la Generalitat", "correct": false },
      { "text": "Recurs potestatiu de reposició o recurs contenciós-administratiu directament", "correct": true },
      { "text": "Reclamació prèvia obligatoria davant el Defensor del Poble", "correct": false },
      { "text": "Recurs d'alçada davant el President de la Generalitat", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 21,
    "question": "Quina d'opció descriu correctament la diferència entre un acte resolutori i un acte de tràmit?",
    "answers": [
      { "text": "L'acte resolutori decideix el fons de l'assumpte, mentre que l'acte de tràmit és instrumental i prepara la resolució", "correct": true },
      { "text": "L'acte de tràmit sempre exhaureix la via administrativa, a diferència del resolutori", "correct": false },
      { "text": "L'acte resolutori mai pot ser impugnat en cap via", "correct": false },
      { "text": "L'acte de tràmit té caràcter reglamentari general", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 22,
    "question": "Sota quina condició excepcional es poden impugnar de manera independent els actes de tràmit durant un procediment administratiu?",
    "answers": [
      { "text": "Quan es tracta d'actes de tràmit qualificats (decideixen el fons, fan impossible la continuïtat o produeixen indefensió)", "correct": true },
      { "text": "Sempre, sense cap limitació legal ni formal", "correct": false },
      { "text": "Únicament quan ho autoritza expressament el Ple de l'entitat local per unanimitat", "correct": false },
      { "text": "Quan s'han dictat fora del termini legal establert", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 23,
    "question": "Quina és la consequència jurídica general d'un acte administratiu que incorre en una causa de nul·litat de ple dret?",
    "answers": [
      { "text": "És convalidable automàticament pel transcurs del termini d'un mes", "correct": false },
      { "text": "Manca de validesa des de l'origen i no pot adquirir fermesa per simple transcurs de temps", "correct": true },
      { "text": "Produeix tots els seus efectes de manera inatacable un cop notificat", "correct": false },
      { "text": "Només pot ser anul·lat mitjançant recurs d'alçada en termini de deu dies", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 24,
    "question": "Quin tipus de vici o irregularitat suposa la realització d'actuacions administratives fora del termini establert legalment?",
    "answers": [
      { "text": "Nul·litat de ple dret en tots els casos sense excepció", "correct": false },
      { "text": "Únicament és anul·lable quan així ho imposa la naturalesa de l'acte o termini", "correct": true },
      { "text": "Determina automàticament la inexistència jurídica de l'Administració", "correct": false },
      { "text": "Converteix l'acte en un reglament de caràcter general", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 17: Disconformitat de la ciutadania amb l'activitat de les administracions públiques",
    "number": 25,
    "question": "Quin és l'efecte de la tècnica de la conservació dels actes administratius quan s'anul·len determinades actuacions d'un procediment?",
    "answers": [
      { "text": "S'anul·la tot el procediment des del seu inici obligatòriament", "correct": false },
      { "text": "Es conserven aquells actes i tràmits el contingut dels quals s'hauria mantingut igual si no s'hagués comès la infracció", "correct": true },
      { "text": "S'obliga l'interessat a pagar una taxa addicional de revisió", "correct": false },
      { "text": "Es trasllada la competència directament al Tribunal Constitucional", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 1,
    "question": "Segons la Llei 40/2015 (LRJSP), quin és el principi que obliga a les administracions públiques a ponderar, en l'actuació pròpia, la totalitat dels interessos públics implicats?",
    "answers": [
      { "text": "El principi de coordinació estricta", "correct": false },
      { "text": "El principi de lleialtat institucional", "correct": true },
      { "text": "El principi de jerarquia orgànica supramunicipal", "correct": false },
      { "text": "El principi d'autonomia financera plena", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 2,
    "question": "Quin és el termini màxim de vigència inicial previst amb caràcter general per a un conveni de col·laboració segons la Llei 40/2015?",
    "answers": [
      { "text": "Dos anys", "correct": false },
      { "text": "Tres anys", "correct": false },
      { "text": "Quatre anys", "correct": true },
      { "text": "Cinc anys", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 3,
    "question": "Es pot prorrogar un conveni subscrit d'acord amb la Llei 40/2015 un cop finalitzat el seu període de vigència inicial?",
    "answers": [
      { "text": "No, cap conveni és prorrogable sota cap concepte.", "correct": false },
      { "text": "Sí, unànimement per un període de fins a 4 anys addicionals abans de la seva finalització.", "correct": true },
      { "text": "Sí, automàticament cada any de manera indefinida.", "correct": false },
      { "text": "Només si ho autoritza directament el Govern de l'Estat per decret.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 4,
    "question": "Quina d'aquestes afirmacions sobre els efectes dels convenis de col·laboració respecte a les competències és correcta?",
    "answers": [
      { "text": "Poden alterar l'assignació de competències que estableixen les lleis orgàniques.", "correct": false },
      { "text": "No poden suposar l'alteració de la titularitat de les competències ni dels elements essencials del seu exercici.", "correct": true },
      { "text": "Permeten transferir la titularitat de la competència a un subjecte privat.", "correct": false },
      { "text": "Modifiquen automàticament els Estatuts de l'ens local.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 5,
    "question": "On s'han de registrar obligatòriament els convenis subscrits per les administracions estatals, autonòmiques o locals segons la Llei 40/2015?",
    "answers": [
      { "text": "Al Registre Mercantil Central", "correct": false },
      { "text": "Al Registre Electrònic estatal d'Òrgans i Instruments de Cooperació", "correct": true },
      { "text": "Només al llibre d'actes del Ple de l'ajuntament", "correct": false },
      { "text": "Al Registre de la Propietat de la província", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 6,
    "question": "Què es transfereix exactament quan s'aprova una delegació de competències entre administracions?",
    "answers": [
      { "text": "La titularitat i l'exercici de la competència de manera definitiva.", "correct": false },
      { "text": "Només la titularitat de la competència, retenint l'òrgan delegat l'exercici.", "correct": false },
      { "text": "L'exercici de la competència, mentre que la titularitat continua pertanyent a l'òrgan delegant.", "correct": true },
      { "text": "Cap dels elements competencials, ja que només té efectes informatius.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 7,
    "question": "Quin requisit previ és indispensable perquè una delegació de competències pugui tenir eficàcia jurídica?",
    "answers": [
      { "text": "L'acceptació prèvia per part de l'òrgan o entitat destinatària.", "correct": true },
      { "text": "L'aprovació per referèndum popular obligatori en els municipis afectats.", "correct": false },
      { "text": "La convalidació prèvia per les Corts Generals.", "correct": false },
      { "text": "El pagament d'una taxa d'inscripció autonòmica.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 8,
    "question": "Quines facultats conserva l'òrgan delegant un cop realitzada la delegació de competències?",
    "answers": [
      { "text": "Cap, perd qualsevol poder de control o direcció sobre la matèria.", "correct": false },
      { "text": "Pot atorgar instruccions, emetre directrius i revocar la delegació en qualsevol moment.", "correct": true },
      { "text": "Només pot exigir responsabilitats penals als funcionaris de l'ens delegat.", "correct": false },
      { "text": "Únicament pot auditar els comptes anuals un cop cada deu anys.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 9,
    "question": "Quina és la naturalesa principal de les encomanes de gestió segons la Llei 40/2015?",
    "answers": [
      { "text": "Una tècnica per transferir la titularitat de potestats públiques a empreses privades.", "correct": false },
      { "text": "Una tècnica organitzativa per encarregar activitats de caràcter material, tècnic o de serveis per raons d'eficàcia.", "correct": true },
      { "text": "Un tipus especial de contracte menor d'obres públiques.", "correct": false },
      { "text": "Una forma de sanció disciplinària interadministrativa.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions.Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 10,
    "question": "Poden les encomanes de gestió incloure l'encàrrec de funcions que impliquin l'exercici d'autoritat o decisió jurídica directa?",
    "answers": [
      { "text": "Sí, sempre que s'aprovi per acord plenari qualificat.", "correct": false },
      { "text": "No, en cap cas no es poden encomanar funcions d'autoritat o decisió jurídica.", "correct": true },
      { "text": "Només si ho autoritza expressament el Defensor del Poble.", "correct": false },
      { "text": "Sí, si l'òrgan encomanant és un ministeri estatal.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 11,
    "question": "Segons la trampa clàssica d'examen, si un conveni o encomana de gestió preveu la transferència de la titularitat d'una competència municipal, quina és la seva validesa jurídica?",
    "answers": [
      { "text": "És plenament vàlida si ho aproven els alcaldes respectius.", "correct": false },
      { "text": "És nul·la de ple dret, ja que ni els convenis ni les encomanes poden alterar la titularitat competencial.", "correct": true },
      { "text": "Esdevé un acte anul·lable subsanable en el termini de tres mesos.", "correct": false },
      { "text": "Necessita la ratificació del Tribunal Constitucional.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 12,
    "question": "Com es configura jurídicament l'Àrea Metropolitana de Barcelona (AMB) d'acord amb la Llei 31/2010 i els seus Estatuts?",
    "answers": [
      { "text": "Com una societat mercantil de capital mixt públic-privat.", "correct": false },
      { "text": "Com una administració pública territorial de cooperació intermunicipal que agrupa 36 municipis.", "correct": true },
      { "text": "Com una fundació privada de caràcter cultural i mediambiental.", "correct": false },
      { "text": "Com un organisme autònom depenent directament de la Diputació de Barcelona.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 13,
    "question": "Quina Llei regula de manera específica la creació i el règim jurídic de l'Àrea Metropolitana de Barcelona (AMB)?",
    "answers": [
      { "text": "La Llei 7/1985, reguladora de les bases del règim local.", "correct": false },
      { "text": "La Llei 31/2010, del 3 d'agost, de l'Àrea Metropolitana de Barcelona.", "correct": true },
      { "text": "La Llei 40/2015, de règim jurídic del sector públic.", "correct": false },
      { "text": "El Decret Legislatiu 2/2004 de les hisendes locals.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 14,
    "question": "Amb quines administracions subscriu l'AMB convenis de cooperació de manera recurrent per gestionar infraestructures i serveis (com TMB o residus)?",
    "answers": [
      { "text": "Únicament amb l'Administració General de l'Estat.", "correct": false },
      { "text": "Amb la Generalitat de Catalunya, la Diputació de Barcelona i els ajuntaments metropolitans integrats.", "correct": true },
      { "text": "Només amb les comunitats autònomes limítrofes de fora de Catalunya.", "correct": false },
      { "text": "Amb organismes internacionals de la Unió Europea exclusivament.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 15,
    "question": "Quin òrgan col·legiat de govern de l'AMB és l'encarregat d'aprovar els pressupostos i acords de gran transcendència de l'ens metropolità?",
    "answers": [
      { "text": "El Consell Metropolità", "correct": true },
      { "text": "El Consell de Ministres", "correct": false },
      { "text": "La Comissió Executiva del Parlament", "correct": false },
      { "text": "La Junta de Compensació Urbanística", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competència. Les encomanes de gestió",
    "number": 16,
    "question": "Segons la normativa d'hisendes locals i la Llei de l'AMB, quin percentatge màxim pot suposar el recàrrec metropolità sobre l'Impost sobre Béns Immobles (IBI)?",
    "answers": [
      { "text": "Un percentatge únic i màxim de l'1% de la base imposable.", "correct": false },
      { "text": "Un percentatge únic i màxim del 0,2% de la base imposable.", "correct": true },
      { "text": "Un màxim del 5% de la quota líquida.", "correct": false },
      { "text": "No pot establir cap recàrrec sobre l'IBI.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 17,
    "question": "Quin principi relatiu a la cooperació interadministrativa recollit a la Llei 40/2015 implica que una administració ha de prestar a una altra la col·legiada assistència necessària per complir les seves finalitats?",
    "answers": [
      { "text": "El deure de col·laboració", "correct": true },
      { "text": "El principi d'autarquia absoluta", "correct": false },
      { "text": "La competència deslleial cooperativa", "correct": false },
      { "text": "El principi de subsidiarietat excloent", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 18,
    "question": "Quina és una característica diferencial clara entre una delegació de competències i una encomana de gestió?",
    "answers": [
      { "text": "En la delegació es transfereix l'exercici competencial, mentre que en l'encomana s'encarreguen tasques materials o tècniques sense alterar l'exercici substancial.", "correct": true },
      { "text": "L'encomana de gestió transmet la titularitat de la competència a l'ens receptor.", "correct": false },
      { "text": "La delegació només es pot fer entre entitats privades.", "correct": false },
      { "text": "No existeix cap diferència jurídica entre ambdues figures.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 19,
    "question": "Com s'han de publicar els convenis subscrits per l'AMB que tinguin repercussió o obligacions financeres i jurídiques rellevants?",
    "answers": [
      { "text": "Al Portal de Transparència de l'AMB i al Butlletí Oficial corresponent.", "correct": true },
      { "text": "Només al tauler d'anuncis intern de la seu central en paper.", "correct": false },
      { "text": "No cal cap publicació oficial si són de caire intern.", "correct": false },
      { "text": "Exclusivament al BOE de manera obligatòria.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 20,
    "question": "Quina conseqüència jurídica comporta l'incompliment dels requisits formals o de contingut mínim exigits per la Llei 40/2015 en la tramitació d'un conveni?",
    "answers": [
      { "text": "La seva conversió automàtica en contracte menor.", "correct": true },
      { "text": "La seva nul·litat d'acord amb la normativa aplicable de sector públic.", "correct": false },
      { "text": "Cap conseqüència si el conveni és verbal.", "correct": false },
      { "text": "Una multa dinerària per al secretari de l'ens.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 21,
    "question": "En el marc de les relacions interadministratives de l'AMB, quina funció compleix el Portal de Transparència respecte als convenis?",
    "answers": [
      { "text": "Publicar de manera permanent el catàleg de convenis signats, detallant objectes, aportacions i vigències.", "correct": true },
      { "text": "Vendre les publicacions oficials de les ordenances fiscals als ciutadans.", "correct": false },
      { "text": "Gestionar directament les multes de trànsit metropolitanes.", "correct": false },
      { "text": "Cobrar les taxes d'escombraries de manera presencial.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 22,
    "question": "Quin tipus d'entitats poden signar convenis de col·laboració amb les administracions públiques segons la Llei 40/2015?",
    "answers": [
      { "text": "Únicament altres administracions públiques estatals.", "correct": false },
      { "text": "Administracions públiques, organismes públics, entitats de dret públic i també subjectes privats.", "correct": true },
      { "text": "Exclusivament persones físiques a títol individual.", "correct": false },
      { "text": "Només corporacions estrangeres de països extracomunitaris.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 23,
    "question": "Quina és la relació entre la creació de l'AMB al 2011 (Llei 31/2010) i les entitats metropolitanes anteriors?",
    "answers": [
      { "text": "Va coexistir pacíficament amb elles sense modificar-les.", "correct": false },
      { "text": "Va substituir les tres entitats anteriors (Mancomunitat, Entitat del Medi Ambient i Entitat del Transport).", "correct": true },
      { "text": "Depenia jeràrquicament de la Mancomunitat de Municipis.", "correct": false },
      { "text": "Era una filial de la Diputació de Barcelona.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 24,
    "question": "En relació amb les encomanes de gestió entre diferents administracions, quin òrgan dicta finalment els actes jurídics o resolucions que pertoquen?",
    "answers": [
      { "text": "L'òrgan o entitat que rep l'encàrrec material.", "correct": false },
      { "text": "L'òrgan encomanant (el titular de la competència i de l'actuació jurídica).", "correct": true },
      { "text": "El Departament d'Economia i Hisenda de la Generalitat.", "correct": false },
      { "text": "El Jutjat Contenciós Administratiu de guàrdia.", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 18: Relació entre administracions. Els convenis de col·laboració. La delegació de competències. Les encomanes de gestió",
    "number": 25,
    "question": "Quin principi bàsic regeix la relació tributària i financera de l'AMB respecte als 36 municipis integrants segons l'article 3 de la Llei 31/2010?",
    "answers": [
      { "text": "L'equilibri fiscal i la solidaritat entre els municipis que la integren.", "correct": true },
      { "text": "La independència fiscal absoluta de cada municipi sense solidaritat.", "correct": false },
      { "text": "La recaptació exclusiva mitjançant impostos directes estatals.", "correct": false },
      { "text": "La prohibició d'establir preus públics o tarifes.", "correct": false }
    ]
  },
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
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 1,
    "question": "Segons el règim jurídic dels òrgans de govern a l'administració local i a l'AMB, com s'anomenen generalment les decisions adoptades per un òrgan unipersonal?",
    "answers": [
      { "text": "Acords plenaris i mocions de govern", "correct": false },
      { "text": "Resolucions, decrets o ordres", "correct": true },
      { "text": "Disposicions generals de caràcter reglamentari", "correct": false },
      { "text": "Dictàmens i comissions d'estudi", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 2,
    "question": "Quina és la principal diferència en la formació de la voluntat entre un òrgan col·legiat i un òrgan unipersonal?",
    "answers": [
      { "text": "L'òrgan unipersonal requereix sempre quòrum d'assistència prèvia", "correct": false },
      { "text": "L'òrgan col·legiat no necessita convocatòria prèvia per deliberar", "correct": false },
      { "text": "L'òrgan unipersonal adopta decisions mitjançant un procés directe i concentrat en una sola persona física", "correct": true },
      { "text": "L'òrgan col·legiat emet decrets executius d'agilitat immediata", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 3,
    "question": "Pel que fa a l'Àrea Metropolitana de Barcelona (AMB), quin òrgan unipersonal de màxima direcció executiva dicta decrets en matèries com la contractació pública?",
    "answers": [
      { "text": "El Consell Metropolità", "correct": false },
      { "text": "El President o Presidenta de l'AMB", "correct": true },
      { "text": "La Junta de Govern", "correct": false },
      { "text": "La Comissió Especial de Comptes", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 4,
    "question": "Quin efecte jurídic produeix la delegació de firma en el si d'un òrgan unipersonal segons la Llei 40/2015?",
    "answers": [
      { "text": "Altera la titularitat i la competència de l'òrgan que delega", "correct": false },
      { "text": "Exigeix necessàriament la publicació al Diari Oficial de la Generalitat", "correct": false },
      { "text": "No altera la competència i es fa constar expressament 'per delegació' a la signatura", "correct": true },
      { "text": "Converteix l'acte en un acord col·legiat vinculant", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 5,
    "question": "Quina característica respecte al quòrum presenten els òrgans unipersonals de govern en comparació amb els col·legiats?",
    "answers": [
      { "text": "Requereixen la meitat més un dels membres assistents", "correct": false },
      { "text": "Inexistent, ja que no requereixen assistència mínima prèvia ni votació col·lectiva", "correct": true },
      { "text": "Només necessiten quòrum si ho estableixen les bases d'execució del pressupost", "correct": false },
      { "text": "Exigeixen majoria qualificada de dos terços", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 6,
    "question": "Quin paper juguen les unitats administratives inferiors o serveis gestors abans que el titular de l'òrgan unipersonal signi una resolució?",
    "answers": [
      { "text": "Aproven definitivament el pressupost extraordinari", "correct": false },
      { "text": "Redacten la proposta de resolució i aporten els informes tècnics o jurídics preceptius", "correct": true },
      { "text": "Exerceixen en tot cas la funció d'ordenació de pagaments centralitzada", "correct": false },
      { "text": "Substitueixen el control de legalitat de la secretaria", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 7,
    "question": "Quina és la conseqüència jurídica de dictar una resolució per un òrgan unipersonal amb una incompetència manifesta per raó de la matèria o territori?",
    "answers": [
      { "text": "Merament irregular", "correct": false },
      { "text": "Anul·lable dins del termini de quatre anys", "correct": false },
      { "text": "Nul·litat de ple dret", "correct": true },
      { "text": "Vàlida si es convalida posteriorment per mitjà de delegació", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 8,
    "question": "On es publiquen periòdicament les resolucions i decrets dictats per la Presidència de l'AMB per garantir el principi de publicitat institucional?",
    "answers": [
      { "text": "Al tauler d'edictes físic exclusivament de la Generalitat", "correct": false },
      { "text": "Al Portal de Transparència i la Seu Electrònica de l'AMB", "correct": true },
      { "text": "Al Butlletí Oficial de l'Estat sense excepció", "correct": false },
      { "text": "Només al llibre d'actes del Consell Plenari", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 9,
    "question": "Quina funció compleix el vistiplau de la secretaria i intervenció prèviament a l'adopció de determinats acords per òrgans unipersonals?",
    "answers": [
      { "text": "Garantir que l'acord s'ajusta a la legalitat formal i pressupostària", "correct": true },
      { "text": "Assumir la responsabilitat política directa de la decisió executiva", "correct": false },
      { "text": "Modificar discrecionalment les retribucions del personal de l'ens", "correct": false },
      { "text": "Substituir la necessitat de motivació de l'acte de gravamen", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 10,
    "question": "Quin tipus de motivació exigeixen generalment les resolucions adoptades per òrgans unipersonals quan es tracta d'actes de gravamen?",
    "answers": [
      { "text": "Són lliures de motivació si deriven d'una potestat reglada", "correct": false },
      { "text": "Han d'estar degudament motivades indicant els recursos procedents", "correct": true },
      { "text": "Només requereixen motivació si ho sol·licita el Síndic de Greuges", "correct": false },
      { "text": "Es consideren tàcites si transcorre el termini de resolució", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 11,
    "question": "En el marc de les administracions locals i l'AMB, quina norma regula bàsicament la Llei de l'Àrea Metropolitana de Barcelona referent al seu règim jurídic de govern?",
    "answers": [
      { "text": "La Llei 31/2010, del 3 d'agost", "correct": true },
      { "text": "La Llei 7/1985, de 2 d'abril, reguladora de les bases del règim local exclusivament", "correct": false },
      { "text": "El Decret Legislatiu 2/2004 únicament per a hisendes locals", "correct": false },
      { "text": "La Llei Orgànica 2/2012 d'estabilitat pressupostària", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 12,
    "question": "Quina és la trampa d'examen més habitual en oposicions C1 pel que fa a la delegació de firma?",
    "answers": [
      { "text": "Creure que modifica la titularitat de la competència de l'òrgan unipersonal", "correct": true },
      { "text": "Pensar que requereix quòrum d'assistència obligatòria", "correct": false },
      { "text": "Confondre-la amb un acte col·legiat del Ple", "correct": false },
      { "text": "Establir que només pot recaure sobre membres electes", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 13,
    "question": "Com s'articuleia la suplència en un òrgan unipersonal en cas de vacant, absència o malaltia del seu titular?",
    "answers": [
      { "text": "Mitjançant elecció directa per sufragi universal a l'entitat", "correct": false },
      { "text": "Segons el règim establert per la normativa de règim local i les bases d'execució", "correct": true },
      { "text": "Requereix sempre la convocatòria extraordinària del Consell Metropolità", "correct": false },
      { "text": "Es converteix automàticament en un òrgan col·legiat de gestió", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 14,
    "question": "Quina relació existeix entre la celeritat i l'actuació dels òrgans unipersonals de govern?",
    "answers": [
      { "text": "Són incompatibles perquè tot acte exigeix votació plenària", "correct": false },
      { "text": "Permeten una resposta ràpida i àgil en la gestió diària i situacions d'urgència", "correct": true },
      { "text": "Només s'aplica en la tramitació de pressupostos generals consolidats", "correct": false },
      { "text": "Està limitada pel termini fixat de quinze dies d'exposició pública", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 15,
    "question": "Quin tipus d'acte administratiu emet un òrgan unipersonal quan resol una sol·licitud o un procediment concret posant fi a la tramitació ordinària?",
    "answers": [
      { "text": "Un acte de tràmit no qualificat", "correct": false },
      { "text": "Una resolució o decret definitiu", "correct": true },
      { "text": "Una disposició administrativa de caràcter general o reglament", "correct": false },
      { "text": "Un informe jurídic de fiscalització prèvia", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 16,
    "question": "En el quadre comparatiu entre òrgans unipersonals i col·legiats, quina forma d'actes adopten habitualment els òrgans col·legiats com el Ple?",
    "answers": [
      { "text": "Decrets exclusius de la presidència", "correct": false },
      { "text": "Acords plenaris, mocions i disposicions generals", "correct": true },
      { "text": "Ordres de pagament a justificar", "correct": false },
      { "text": "Resolucions de gerència individualitzades", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 17,
    "question": "Quina és la conseqüència d'ometre totalment i absolutament el procediment legalment establert en l'adopció d'una resolució per un òrgan unipersonal?",
    "answers": [
      { "text": "Nul·litat de ple dret", "correct": true },
      { "text": "Simple irregularitat no invalidant", "correct": false },
      { "text": "Anul·labilitat convalidable en qualsevol moment", "correct": false },
      { "text": "Efectes retroactius automàtics", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 18,
    "question": "Quin principi organitzatiu justifica tècnicament la delegació de competències o de firma dins de l'estructura d'un òrgan unipersonal?",
    "answers": [
      { "text": "El principi de jerarquia i desconcentració / eficiència", "correct": true },
      { "text": "El principi d'equilibri pressupostari i no afectació", "correct": false },
      { "text": "El principi d'universalitat i unitat de caixa", "correct": false },
      { "text": "El principi d'anualitat i pròrroga automàtica", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 19,
    "question": "Com s'imputen formalment les resolucions signades per un òrgan inferior mitjançant una delegació de firma?",
    "answers": [
      { "text": "S'imputen directament a l'òrgan inferior que l'ha materialment signat", "correct": false },
      { "text": "S'imputen a l'òrgan titular de la competència que va delegar la firma", "correct": true },
      { "text": "Requereixen l'aprovació prèvia del Consell Plenari per ser vàlides", "correct": false },
      { "text": "Es consideren actes dictats per silenci administratiu negatiu", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 20,
    "question": "Quina referència pràctica de l'AMB s'associa habitualment a l'exercici de les potestats d'un òrgan unipersonal de govern?",
    "answers": [
      { "text": "La votació de mocions de censura al Parlament", "correct": false },
      { "text": "Els Decrets de la Presidència de l'AMB en matèria de gestió i serveis", "correct": true },
      { "text": "L'aprovació d'ordenances fiscals generals pel conjunt de municipis de Catalunya", "correct": false },
      { "text": "La comissió de control de deute públic de l'Estat", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 21,
    "question": "Quin és el valor d'un defecte de forma en la tramitació d'una resolució unipersonal si aquesta aconsegueix el seu fi sense causar indefensió?",
    "answers": [
      { "text": "Determina la nul·litat radical de l'acte", "correct": false },
      { "text": "Constitueix una irregularitat no invalidant", "correct": true },
      { "text": "Exigeix la revocació immediata per part del Jutjat Contenciós", "correct": false },
      { "text": "Converteix l'acte en discrecional", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 22,
    "question": "Quina és la condició indispensable pel que fa a l'actuació dels òrgans unipersonals dins de l'àmbit de la seva competència?",
    "answers": [
      { "text": "Actuar sempre dins l'àmbit de les atribucions legalment conferides o delegades", "correct": true },
      { "text": "Sotmetre qualsevol resolució a referèndum popular metropolità", "correct": false },
      { "text": "Emetre vots particulars discrepants per escrit", "correct": false },
      { "text": "Reunir un col·legi d' assessors abans de cada signatura", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 23,
    "question": "En una pregunta d'examen tipus test sobre òrgans unipersonals, si s'afirma que aquests requereixen votacions per majoria simple per prendre decisions, l'afirmació és:",
    "answers": [
      { "text": "Falsa, perquè en ser unipersonals no emeten vots ni requereixen majories col·lectives", "correct": true },
      { "text": "Verdadera, sempre que es tracti de decrets de presidència", "correct": false },
      { "text": "Verdadera si ho aprova prèviament la Intervenció", "correct": false },
      { "text": "Falsa només en l'àmbit dels organismes autònoms locals", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 24,
    "question": "Quin element distingeix l'actuació executiva d'un òrgan unipersonal en relació amb els expedients de despesa?",
    "answers": [
      { "text": "La signatura de decrets d'aprovació de despeses i reconeixement d'obligacions d'acord amb les seves atribucions", "correct": true },
      { "text": "La incapacitat absoluta per ordenar pagaments a la Tresoreria", "correct": false },
      { "text": "La necessitat de convocar un ple extraordinari per cada factura menor", "correct": false },
      { "text": "L'exclusió de qualsevol control per part de la intervenció delegada", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV - Tema 20: L’adopció d’acords per part dels òrgans de govern unipersonals",
    "number": 25,
    "question": "Segons l'estructura organitzativa de l'administració local, quina potestat ostenta el titular de l'òrgan unipersonal pel que fa a la direcció dels serveis?",
    "answers": [
      { "text": "La direcció executiva superior i la prefectura de personal i serveis de la corporació", "correct": true },
      { "text": "La competència exclusiva per modificar la plantilla pressupostària sense límit", "correct": false },
      { "text": "La titularitat de la Junta General d'Accionistes d'empreses privades alienes", "correct": false },
      { "text": "Només funcions de caràcter honorífic i protocol·lari sense resolució", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 1,
    "question": "Segons la normativa de règim local aplicable a l'AMB, quin és el règim general de majories establert per a l'adopció d'acords vàlids en els òrgans col·legiats?",
    "answers": [
      { "text": "Majoria absoluta del nombre legal de membres de l'òrgan", "correct": false },
      { "text": "Majoria simple, consistent en més vots a favor que en contra dels membres presents", "correct": true },
      { "text": "Majoria de dos terços de la totalitat dels membres de la corporació", "correct": false },
      { "text": "Unanimitat de tots els assistents amb dret a vot a la sessió plenària", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 2,
    "question": "En relació amb l'exercici del vot als òrgans col·legiats de l'AMB, quin dels següents aspectes és jurídicament correcte?",
    "answers": [
      { "text": "El vot és estrictament personal i indelegable, no admetent-se la representació entre membres", "correct": true },
      { "text": "Els membres poden delegar el seu vot per escrit en un altre conseller en cas de força major justificada", "correct": false },
      { "text": "El vot per delegació només està permès per a la Junta de Govern, però mai al Consell Metropolità", "correct": false },
      { "text": "L'abstenció s'interpreta automàticament com un vot favorable a la proposta del govern", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 3,
    "question": "Com es computa estrictament la majoria absoluta exigida per a determinats acords rellevants en l'àmbit local i metropolità?",
    "answers": [
      { "text": "Més de la meitat dels membres presents a la sessió en el moment de la votació", "correct": false },
      { "text": "Dues terceres parts dels assistents que hagin emès el seu vot de manera expressa", "correct": false },
      { "text": "Més de la meitat del nombre legal de membres que integren l'òrgan col·legiat", "correct": true },
      { "text": "La totalitat dels vots emesos descomptant les abstencions i vots nuls", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 4,
    "question": "Quin efecte jurídic produeix el vot de qualitat atribuït al President d'un òrgan col·legiat en la presa de decisions?",
    "answers": [
      { "text": "Permet aprovar directament qualsevol urgència sense incloure-la a l'ordre del dia", "correct": false },
      { "text": "Desfa l'empat que es pugui produir en les votacions, garantint el desbloqueig de l'acord", "correct": true },
      { "text": "Converteix automàticament un acord de majoria simple en un acord de majoria absoluta", "correct": false },
      { "text": "Invalidar el vot particular presentat pels membres discrepants de l'oposició", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 5,
    "question": "Quin és el caràcter general dels acords adoptats pels òrgans de govern col·legiats de l'AMB un cop finalitzada la seva votació?",
    "answers": [
      { "text": "Són executius des del moment mateix de la seva adopció, sense perjudici de la seva notificació o publicació", "correct": true },
      { "text": "No produeixen cap efecte fins que transcorri el termini de 15 dies d'exposició pública al BOP", "correct": false },
      { "text": "Requereixen necessàriament la ratificació prèvia de la Generalitat de Catalunya per ser eficaços", "correct": false },
      { "text": "Són merament recomanatius fins que s'aprovi definitivament el pressupost de l'exercici següent", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 6,
    "question": "Quina fase prèvia és indispensable per poder iniciar vàlidament la deliberació d'un assumpte en un òrgan col·legiat?",
    "answers": [
      { "text": "La publicació íntegra de la proposta al Diari Oficial de la Generalitat de Catalunya", "correct": false },
      { "text": "La convocatòria prèvia i la inclusió de l'assumpte a l'ordre del dia, amb la constitució vàlida de l'òrgan", "correct": true },
      { "text": "L'autorització expressa del Ministeri d'Hisenda i Funció Pública", "correct": false },
      { "text": "El vistiplau de la Sindicatura de Comptes de Catalunya", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 7,
    "question": "Davant la discrepància amb un acord adoptat per l'òrgan col·legiat, de quina eina disposen els membres discrepants?",
    "answers": [
      { "text": "La interposició immediata d'un recurs d'alçada davant el President del govern de l'Estat", "correct": false },
      { "text": "La formulació d'un vot particular per escrit en el termini establert perquè s'incorpori a l'acta", "correct": true },
      { "text": "El vet directe i paralitzant de l'execució de l'acord plenari", "correct": false },
      { "text": "La convocatòria unilateral d'una moció de censura exprés", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 8,
    "question": "Quin òrgan col·legiat de l'AMB (amb.cat) actua com a màxim òrgan de representació i adopció d'acords fonamentals com pressupostos i ordenances?",
    "answers": [
      { "text": "La Junta de Govern de l'AMB", "correct": false },
      { "text": "El Consell Metropolità", "correct": true },
      { "text": "La Comissió Especial de Comptes", "correct": false },
      { "text": "La Gerència de l'Àrea Metropolitana", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 9,
    "question": "Quin document recull de manera definitiva els acords adoptats per un òrgan col·legiat, incloent-hi els vots emesos i les incidències de la sessió?",
    "answers": [
      { "text": "L'avanç de liquidació pressupostària anual", "correct": false },
      { "text": "L'acta de la sessió, signada pel Secretari amb el vistiplau del President", "correct": true },
      { "text": "El certificat de conformitat de la Intervenció General", "correct": false },
      { "text": "El compte general de l'entitat metropolitana", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 10,
    "question": "Quina conseqüència jurídica comporta l'omissió total i absoluta de les regles essencials per a la formació de la voluntat dels òrgans col·legiats?",
    "answers": [
      { "text": "La mera irregularitat no invalidant de l'actuació administrativa", "correct": false },
      { "text": "La nul·litat de ple dret dels actes adoptats infringint aquestes regles essencials", "correct": true },
      { "text": "La convalidació tàcita automàtica si no s'impugna en el termini de deu dies", "correct": false },
      { "text": "La simple anul·labilitat subsanable mitjançant un informe de secretaria", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 11,
    "question": "Com es qualifiquen, des del punt de vista de la seva validesa, aquells actes dictats amb infracció de les normes de constitució o de procediment col·legiat que no arriben a la gravetat de la nul·litat?",
    "answers": [
      { "text": "Actes nuls de ple dret", "correct": false },
      { "text": "Actes anul·lables[cite: 1]", "correct": true },
      { "text": "Actes inexistents o fets concrets de tràmit", "correct": false },
      { "text": "Actes exempts de fiscalització prèvia", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 12,
    "question": "En relació amb les votacions secretes en els òrgans col·legiats de les entitats locals i l'AMB, quin requisit és obligatori perquè es puguin dur a terme?",
    "answers": [
      { "text": "Que ho sol·liciti qualsevol membre de l'oposició a l'inici de la sessió plenària", "correct": false },
      { "text": "Que estigui expressament previst i autoritzat en el reglament orgànic de la corporació", "correct": true },
      { "text": "Que s'aprovi per unanimitat de tots els assistents presents al ple", "correct": false },
      { "text": "Està totalment prohibida qualsevol votació secreta en l'àmbit de les administracions públiques", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 13,
    "question": "Quin paper desenvolupa el Portal de Transparència de l'AMB en relació amb els acords adoptats pels seus òrgans de govern col·legiats?",
    "answers": [
      { "text": "Permet a la ciutadania consultar de manera immediata extractes d'acords, ordres del dia i actes completes", "correct": true },
      { "text": "Exigeix el pagament d'una taxa pública per obtenir còpia de qualsevol acord col·legiat", "correct": false },
      { "text": "Limita la publicació exclusiva a les decisions adoptades per la Junta de Govern", "correct": false },
      { "text": "Funciona com a registre comptable de factures electròniques exclusivament", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 14,
    "question": "Segons el règim jurídic de les entitats locals, quina majoria es requereix generalment per a l'aprovació inicial de pressupostos i ordenances fiscals?",
    "answers": [
      { "text": "Majoria simple dels membres presents", "correct": false },
      { "text": "Majoria absoluta del nombre legal de membres de la corporació", "correct": true },
      { "text": "Majoria qualificada de dos terços de la totalitat dels vocals", "correct": false },
      { "text": "Aprovació directa per la Junta de Govern sense necessitat de quòrum", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 15,
    "question": "Quina és la naturalesa jurídica de la Junta de Govern de l'AMB com a òrgan col·legiat dins de l'estructura organitzativa metropolitana?",
    "answers": [
      { "text": "Òrgan merament consultiu i de fiscalització externa de comptes", "correct": false },
      { "text": "Òrgan col·legiat executiu que adopta acords periòdics en matèria de contractació, subvencions i gestió de serveis", "correct": true },
      { "text": "Òrgan legislatiu amb competència exclusiva per aprovar reglaments orgànics", "correct": false },
      { "text": "Tribunal administratiu de recursos contractuals de l'àmbit metropolità", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 16,
    "question": "En el supòsit que un membre d'un òrgan col·legiat es trobi en una situació de conflicte d'interessos o causa d'abstenció legalment establerta, com ha d'actuar en la votació?",
    "answers": [
      { "text": "Delegar obligatòriament el seu vot en el portaveu del seu grup polític", "correct": false },
      { "text": "Abstenir-se de participar en la deliberació i votació de l'assumpte afectat", "correct": true },
      { "text": "Emetre un vot de qualitat especial per compensar la seva incompatibilitat", "correct": false },
      { "text": "Votar obligatòriament en contra per garantir la neutralitat de l'òrgan", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 17,
    "question": "Quina és la funció principal de la fase de deliberació prèvia a la votació en els òrgans col·legiats?",
    "answers": [
      { "text": "Obrir el debat moderat pel President sobre els assumptes inclosos a l'ordre del dia abans de procedir a la votació", "correct": true },
      { "text": "Modificar automàticament els estatuts de l'AMB sense votació plenària", "correct": false },
      { "text": "Efectuar el pagament material de les obligacions reconegudes per la Tresoreria", "correct": false },
      { "text": "Convalidar els actes nuls de ple dret adoptats en sessions anteriors", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 18,
    "question": "Quin requisit formal és necessari perquè una convocatòria d'un òrgan col·legiat amb caràcter extraordinari i urgent sigui vàlida?",
    "answers": [
      { "text": "L'aprovació prèvia de la urgència per majoria simple de l'òrgan abans d'entrar a tractar l'assumpte de fons", "correct": true },
      { "text": "La publicació obligatòria al Butlletí Oficial de la Província amb 15 dies d'antelació", "correct": false },
      { "text": "El vistiplau vinculant de la Delegació del Govern de l'Estat", "correct": false },
      { "text": "La concurrència simultània de tots els membres legals de la corporació sense excepció", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 19,
    "question": "Com s'entén generalment la regla de la majoria simple en un òrgan col·legiat on hi ha assistència de membres que opten per l'abstenció?",
    "answers": [
      { "text": "Les abstencions es sumen sempre als vots en contra de la proposta", "correct": false },
      { "text": "S'obté quan hi ha més vots a favor que en contra per part dels membres presents a la votació", "correct": true },
      { "text": "Requereix necessàriament que el nombre de vots favorables superi el cinquanta per cent de la corporació", "correct": false },
      { "text": "Invalida automàticament la votació obligant a repetir-la en una nova sessió", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 20,
    "question": "Quin òrgan o persona encarregada té la responsabilitat legal de redactar i autoritzar l'acta on es reflecteixen els acords adoptats per l'òrgan col·legiat?",
    "answers": [
      { "text": "El Secretari de l'òrgan, amb el vistiplau del President", "correct": true },
      { "text": "L'Interventor General de l'entitat local", "correct": false },
      { "text": "El portaveu del grup polític amb major representació", "correct": false },
      { "text": "El Cap de la Unitat d'Ordenació de Pagaments", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 21,
    "question": "Quina és la repercussió de la inassistència injustificada de membres d'un òrgan col·legiat a una sessió quant al quòrum de constitució en segona convocatòria?",
    "answers": [
      { "text": "La llei preveu un quòrum reduït i específic en segona convocatòria respecte a la primera", "correct": true },
      { "text": "S'anul·la immediatament la corporació i es convoquen eleccions anticipades", "correct": false },
      { "text": "Es delega automàticament el vot dels absents en el President", "correct": false },
      { "text": "No es pot celebrar sota cap concepte cap tipus de sessió", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 22,
    "question": "Quin tipus de votació s'utilitza de forma ordinària i general en els òrgans col·legiats de l'administració local i metropolitana?",
    "answers": [
      { "text": "La votació secreta mitjançant paperetes tancades", "correct": false },
      { "text": "La votació ordinària per assentiment o a mà alçada", "correct": true },
      { "text": "La votació nominal per cridament alfabètic obligatori en tots els acords", "correct": false },
      { "text": "La votació telemàtica amb signatura electrònica avançada obligatòria", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 23,
    "question": "Davant d'un acord adoptat per un òrgan col·legiat que incideix directament en la modificació d'estatuts de l'AMB, quina exigència de majoria sol aplicar-se en atenció a la seva complexitat?",
    "answers": [
      { "text": "Majoria simple de miraments ordinaris", "correct": false },
      { "text": "Majoria qualificada o reforçada segons la legislació aplicable", "correct": true },
      { "text": "Unanimitat absoluta de tots els ciutadans empadronats", "correct": false },
      { "text": "Delegació exclusiva en la figura del Gerent", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 24,
    "question": "Quina funció compleix la fixació prèvia de l'ordre del dia en la convocatòria d'un òrgan col·legiat de govern?",
    "answers": [
      { "text": "Garantir el coneixement previ dels assumptes a tractar per part dels membres i impedir la deliberació d'assumptes no inclosos, tret de declaració d'urgència", "correct": true },
      { "text": "Establir la recaptació tributària dels ingressos de dret públic de l'AMB", "correct": false },
      { "text": "Determinar automàticament el resultat pressupostari de l'exercici anterior", "correct": false },
      { "text": "Substituir la necessitat d'aprovar l'acta de la sessió anterior", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 21: L’adopció d’acords per part dels òrgans de govern col·legiats",
    "number": 25,
    "question": "Com afecta la falta de notificació individualitzada d'un acord col·legiat al seu règim d'eficàcia jurídica enfront de l'interessat?",
    "answers": [
      { "text": "L'acord esdevé nul de ple dret de forma retroactiva", "correct": false },
      { "text": "No produeix efectes de notificació desfavorables ni comença a comptar el termini per impugnar-lo fins que es practiqui degudament", "correct": true },
      { "text": "Es convalida automàticament als trenta dies de la seva publicació al web", "correct": false },
      { "text": "Imlica la destitució immediata del Secretari de la corporació", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 1,
    "question": "Segons la Llei 31/2010 de l'Àrea Metropolitana de Barcelona, quin òrgan té la consideració d'òrgan col·legiat superior de govern i de representació de l'AMB?",
    "answers": [
      { "text": "La Junta de Govern", "correct": false },
      { "text": "El Consell Metropolità", "correct": true },
      { "text": "La Comissió Especial de Comptes", "correct": false },
      { "text": "El Consell de Mobilitat", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 2,
    "question": "Quina és la composició bàsica del Consell Metropolità de l'AMB?",
    "answers": [
      { "text": "Únicament els 36 alcaldes i alcaldesses dels municipis integrats", "correct": false },
      { "text": "Els 36 alcaldes i alcaldesses i els consellers metropolitans designats pels ajuntaments en proporció als resultats de les eleccions municipals", "correct": true },
      { "text": "Un nombre fix de 50 membres elegits directament per sufragi universal ponderat", "correct": false },
      { "text": "Els membres de la Junta de Govern més un representant de cadascun dels col·legis professionals de l'àmbit metropolità", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 3,
    "question": "Dins de les competències del Consell Metropolità, quina de les següents atribucions li correspon de forma exclusiva?",
    "answers": [
      { "text": "L'aprovació de les normes reguladores, ordenances fiscals i pressupostos anuals", "correct": true },
      { "text": "L'ordenació material i directa de tots els pagaments de la tresoreria", "correct": false },
      { "text": "La direcció tècnica i administrativa de la gerència de l'ens", "correct": false },
      { "text": "El nomenament directe del personal funcionari interí de l'administració metropolitana", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 4,
    "question": "Com s'elegeix el President o Presidenta de l'Àrea Metropolitana de Barcelona?",
    "answers": [
      { "text": "Per sufragi universal directe de tots els ciutadans empadronats als 36 municipis de l'AMB", "correct": false },
      { "text": "D'entre els membres que integren el Consell Metropolità", "correct": true },
      { "text": "Per designació directa del Govern de la Generalitat de Catalunya", "correct": false },
      { "text": "Per rotació anual obligatòria entre els alcaldes dels municipis de més de 100.000 habitants", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 5,
    "question": "Quina naturalesa jurídica té la Gerència de l'AMB segons l'estructura organitzativa de l'ens?",
    "answers": [
      { "text": "És un òrgan polític integrat exclusivamente per alcaldes del Consell Metropolità", "correct": false },
      { "text": "És l'òrgan professional de direcció tècnica i administrativa, ocupat per personal altament qualificat", "correct": true },
      { "text": "És un òrgan consultiu de participació ciutadana sense cap mena de competència executiva", "correct": false },
      { "text": "És una societat mercantil de capital íntegrament públic depenent de la Junta de Govern", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 6,
    "question": "Quina de les següents funcions correspon a la Junta de Govern de l'AMB?",
    "answers": [
      { "text": "Aprovar inicialment el pressupost general de l'entitat metropolitana", "correct": false },
      { "text": "Assistir permanentment al President i al Consell Metropolità en les funcions de gestió executiva i exercir competències delegades en matèria de contractació i concessions", "correct": true },
      { "text": "Resoldre de manera definitiva els recursos extraordinaris de revisió interposats contra els reglaments", "correct": false },
      { "text": "establir el recàrrec metropolità sobre l'Impost sobre Béns Immobles (IBI) de forma unilateral", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 7,
    "question": "Quin paper desenvolupen les vicepresidències de l'AMB dins de l'estructura executiva?",
    "answers": [
      { "text": "Són nomenades pel President d'entre els consellers metropolitans, substitueixen el President per ordre de nomenament i exerceixen delegacions executives rellevants (mobilitat, medi ambient, urbanisme)", "correct": true },
      { "text": "Són òrgans independents de control financer encarregats de fiscalitzar la comptabilitat general", "correct": false },
      { "text": "S'ocupen exclusivament de la secretaria de les actes del Ple sense cap àmbit de gestió sectorial", "correct": false },
      { "text": "Emergeixen només en cas de dissolució temporal del Consell Metropolità", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 8,
    "question": "Quin òrgan municipal o metropolità té atribuïda la competència per convocar i presidir tant el Consell Metropolità com la Junta de Govern?",
    "answers": [
      { "text": "El Gerent de l'AMB", "correct": false },
      { "text": "El Síndic de Greuges", "correct": false },
      { "text": "El President o Presidenta de l'AMB", "correct": true },
      { "text": "El conseller de la comissió de comptes", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 9,
    "question": "Pel que fa a la composició de la Junta de Govern de l'AMB, com es determina la presència dels seus membres?",
    "answers": [
      { "text": "Està formada pel President i un nombre de vicepresidents i consellers determinats pels estatuts amb criteris de proporcionalitat política i territorial", "correct": true },
      { "text": "Està integrada obligatòriament per tots els alcaldes dels 36 municipis sense excepció", "correct": false },
      { "text": "S'escull mitjançant sorteig públic entre el personal funcionari de carrera del grup A1", "correct": false },
      { "text": "Es designa de manera externa per un comitè d'experts independents nomenats per la Generalitat", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 10,
    "question": "Quina és una de les funcions principals del Gerent en el marc de l'administració metropolitana?",
    "answers": [
      { "text": "Dirigir els serveis administratius, coordinar la gestió ordinària i executar els acords dels òrgans de govern col·legiats sota la supervisió de la presidència", "correct": true },
      { "text": "Ostentar la màxima representació institucional de l'AMB davant d'altres administracions estatals i internacionals", "correct": false },
      { "text": "Modificar per decret les ordenances fiscals i els preus públics de transport", "correct": false },
      { "text": "Aprovar definitivament la plantilla pressupostària sense sotmetre-la al plenari", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 11,
    "question": "A banda del Consell Metropolità, la Presidència, la Junta de Govern i la Gerència, quin altre tipus d'òrgans complementaris preveu l'organització de l'AMB?",
    "answers": [
      { "text": "Comissions informatives, Comissió Especial de Comptes, Consell de Mobilitat i altres òrgans consultius o de participació", "correct": true },
      { "text": "Jutjats de pau metropolitans i tribunals de lo social d'àmbit comarcal", "correct": false },
      { "text": "Cambres legislatives autonòmiques delegades i consells de guerra sectorials", "correct": false },
      { "text": "Delegacions permanents del Senat a Barcelona", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 12,
    "question": "Quina trampa o error freqüent s'ha d'evitar en relació amb la composició del Consell Metropolità en un examen d'oposició?",
    "answers": [
      { "text": "Creure que només està format pels 36 alcaldes, quan en realitat també inclou els consellers metropolitans designats proporcionalment", "correct": true },
      { "text": "Pensar que els alcaldes hi tenen veu però no vot en les sessions plenàries", "correct": false },
      { "text": "Considerar que els municipis de menys de 5.000 habitants no hi tenen cap mena de representació", "correct": false },
      { "text": "Suposar que el Consell Metropolità només es reuneix un cop cada quatre anys", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 13,
    "question": "Quin decret o llei regula principalment la creació i el marc institucional de l'Àrea Metropolitana de Barcelona (AMB)?",
    "answers": [
      { "text": "La Llei 31/2010, de 3 d'agost, de l'Àrea Metropolitana de Barcelona", "correct": true },
      { "text": "La Llei 7/1985, de 2 d'abril, reguladora de les bases del règim local", "correct": false },
      { "text": "El Reial Decret Legislatiu 2/2004, de 5 de març", "correct": false },
      { "text": "La Llei Municipal i de règim local de Catalunya 16/1990", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 14,
    "question": "En relació amb els estàndards de transparència de l'AMB reflectits al seu portal corporatiu (amb.cat), què es publica detalladament sobre els membres de l'organització?",
    "answers": [
      { "text": "Les declaracions de béns, activitats i règim de dedicació dels membres del Consell Metropolità, Junta de Govern i equip de gerència", "correct": true },
      { "text": "L'expedient acadèmic complet des de l'educació primària de tots els treballadors laborals", "correct": false },
      { "text": "Els registres de trucades telefòniques particulars de la presidència", "correct": false },
      { "text": "Les actes secretes de deliberació dels partits polítics amb representació", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 15,
    "question": "Com s'estructuren generalment les vicepresidències executives de l'AMB segons l'organització reflectida al seu portal web oficial?",
    "answers": [
      { "text": "Per grans àrees de servei metropolità: Mobilitat, Transport i Sostenibilitat; Desenvolupament Social i Econòmic; i Planificació Estratègica i Territorial", "correct": true },
      { "text": "Per districtes postals de la ciutat de Barcelona exclusivament", "correct": false },
      { "text": "Per ordre alfabètic dels 36 municipis integrants de la conurbació", "correct": false },
      { "text": "Segons el pressupost assignat a cada partit polític al Parlament", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 16,
    "question": "Quin tipus d'òrgan és considerat la Presidència de l'AMB dins de la classificació institucional?",
    "answers": [
      { "text": "Un òrgan unipersonal superior de direcció, representació i administració", "correct": true },
      { "text": "Un òrgan col·legiat de control fiscal de caràcter estrictament tècnic", "correct": false },
      { "text": "Una unitat de suport inferior depenent directament de la gerència", "correct": false },
      { "text": "Un comitè de mediació paritària entre ajuntaments i ciutadania", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 17,
    "question": "Quina afirmació és correcta respecte a la naturalesa no política del gerent de l'AMB?",
    "answers": [
      { "text": "No és un càrrec polític electe per sufragi municipal, sinó un professional altament qualificat nomenat pels òrgans de govern", "correct": true },
      { "text": "És necessàriament un dels 36 alcaldes de la conurbació escollit per unanimitat", "correct": false },
      { "text": "Exerceix el vot de qualitat al Consell Metropolità en cas d'empat en les votacions plenàries", "correct": false },
      { "text": "Ostenta la condició de conseller metropolità nat amb caràcter vitalici", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 18,
    "question": "Quin dels següents òrgans de l'AMB té encomanada específicament l'assistència permanent al President i al Consell Metropolità en funcions executives?",
    "answers": [
      { "text": "La Junta de Govern", "correct": true },
      { "text": "La Comissió Especial de Comptes", "correct": false },
      { "text": "El Consell de Cooperació", "correct": false },
      { "text": "La Sindicatura de Greuges metropolitana", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 19,
    "question": "Quin és el nombre de municipis que integren inicialment i formen part de l'Àrea Metropolitana de Barcelona (AMB)?",
    "answers": [
      { "text": "36 municipis", "correct": true },
      { "text": "25 municipis", "correct": false },
      { "text": "42 municipis", "correct": false },
      { "text": "50 municipis", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 20,
    "question": "Quina de les següents potestats normatives pot exercir l'AMB en l'àmbit de les seves competències segons els seus estatuts i la Llei 31/2010?",
    "answers": [
      { "text": "L'aprovació de reglaments, ordenances reguladores i fiscals", "correct": true },
      { "text": "La promulgació de lleis orgàniques d'àmbit territorial català", "correct": false },
      { "text": "La creació de codis penals i processals per a la seguretat viària", "correct": false },
      { "text": "L'emissió de moneda prèvia autorització del Banc d'Espanya", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 21,
    "question": "Quin tipus d'acord s'exigeix generalment en el si del Consell Metropolità per a l'aprovació del pressupost general de l'entitat?,Gairebé sempre s'aprova per majoria simple en un acte únic que detalla els pressupostos que l'integren. L'opció correcta és:",
    "answers": [
      { "text": "Un acord únic que pot ser pres per majoria simple, detallant els pressupostos que integren el pressupost general", "correct": true },
      { "text": "Una majoria absoluta qualificada de dos terços dels membres de dret en qualsevol circumstància", "correct": false },
      { "text": "La unanimitat absoluta de tots els 36 alcaldes integrants de la conurbació", "correct": false },
      { "text": "L'aprovació prèvia obligatòria i vinculant per referèndum popular metropolità", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 22,
    "question": "En relació amb les actes i resolucions de la Presidència de l'AMB, quina forma jurídica adopten habitualment per exercir la direcció executiva?",
    "answers": [
      { "text": "Decrets de la presidència", "correct": true },
      { "text": "Reials decrets llei delegats", "correct": false },
      { "text": "Ordres ministerials estatals", "correct": false },
      { "text": "Sentències fermes contencioses", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 23,
    "question": "Quin òrgan col·legiat de l'AMB té assignades funcions de control i fiscalització de la gestió econòmico-financera i pressupostària dins de la comissió de comptes?",
    "answers": [
      { "text": "La Comissió Especial de Comptes", "correct": true },
      { "text": "El Consell Consultiu de Transport", "correct": false },
      { "text": "La Junta Consultiva de Contractació Administrativa de l'Estat", "correct": false },
      { "text": "El Comitè d'Empresa del personal laboral", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "question": "Quina és la relació competencial entre el Consell Metropolità i la Junta de Govern pel que fa a l'execució?",
    "answers": [
      { "text": "La Junta de Govern exerceix les competències delegades pel Consell Metropolità i les que li atribueixen directament les lleis", "correct": true },
      { "text": "El Consell Metropolità només pot actuar si rep una delegació prèvia de la Junta de Govern", "correct": false },
      { "text": "Ambdós òrgans tenen exactament les mateixes atribucions de caràcter indefinit sense subordinació", "correct": false },
      { "text": "La Junta de Govern pot revocar unilateralment les normes aprovades pel Consell Metropolità", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 22: Òrgans de govern de l’AMB",
    "number": 25,
    "question": "Quin principi inspirador de la representació i composició dels consellers al Consell Metropolità garanteix el pluralisme polític derivat de les eleccions locals?",
    "answers": [
      { "text": "El principi de proporcionalitat en funció dels resultats obtinguts a les eleccions municipals de cada consistori", "correct": true },
      { "text": "El principi de representació paritària exacta independentment del nombre d'habitants del municipi", "correct": false },
      { "text": "El principi de designació discrecional per part de la Presidència sortint", "correct": false },
      { "text": "El principi de torn rotatori automàtic cada tres mesos entre regidors de l'oposició", "correct": false }
    ]
  },
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
  {
    "theme": "Bloc IV (Temari Específic) - Tema 24: Disposicions generals i potestat reguladora de les administracions locals. Reglaments. Ordenances. Ordenances fiscals.",
    "number": 1,
    "question": "Segons la Llei reguladora de les bases del règim local (LBRL), quin és el termini mínim d'exposició pública per a la formulació de reclamacions i suggeriments en el procediment d'aprovació d'ordenances locals?",
    "answers": [
      { "text": "15 dies hàbils", "correct": false },
      { "text": "20 dies naturals", "correct": false },
      { "text": "30 dies", "correct": true },
      { "text": "2 mesos", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 24: Disposicions generals i potestat reguladora de les administracions locals. Reglaments. Ordenances. Ordenances fiscals.",
    "number": 2,
    "question": "Pel que fa als límits materials de la potestat reguladora de les administracions locals, quin dels següents extrems està completament vetat a les ordenances locals?",
    "answers": [
      { "text": "Establir preus públics per a la prestació de serveis de competència supramunicipal", "correct": false },
      { "text": "Tipificar infraccions penals i establir penes o sancions privatives de llibertat", "correct": true },
      { "text": "Regular l'organització interna dels òrgans de govern i de la seva administració", "correct": false },
      { "text": "Establir multes i recàrrecs dins dels límits fixats per les lleis estatals", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 24: Disposicions generals i potestat reguladora de les administracions locals. Reglaments. Ordenances. Ordenances fiscals.",
    "number": 3,
    "question": "Quin òrgan de l'Àrea Metropolitana de Barcelona (AMB) és el competent per a l'aprovació definitiva de les ordenances fiscals i reglaments orgànics segons el marc normatiu aplicable?",
    "answers": [
      { "text": "La Junta de Govern", "correct": false },
      { "text": "El Ple o Consell Metropolità", "correct": true },
      { "text": "La Presidència de l'AMB per decret executiu", "correct": false },
      { "text": "La Comissió Especial de Comptes", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 24: Disposicions generals i potestat reguladora de les administracions locals. Reglaments. Ordenances. Ordenances fiscals.",
    "number": 4,
    "question": "Segons el Text Refós de la Llei Reguladora de les Hisendes Locals (TRLRHL), quin és el percentatge màxim i únic pel qual les àrees metropolitanes poden establir un recàrrec sobre l'Impost sobre Béns Immobles (IBI)?",
    "answers": [
      { "text": "Un 0,1% de la base imposable", "correct": false },
      { "text": "Un 0,2% de la base imposable", "correct": true },
      { "text": "Un 0,5% de la quota líquida", "correct": false },
      { "text": "Un 1% del valor cadastral", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 24: Disposicions generals i potestat reguladora de les administracions locals. Reglaments. Ordenances. Ordenances fiscals.",
    "number": 5,
    "question": "Quina condició formal és inajornable perquè les ordenances fiscals modificades o de nova creació de les entitats locals puguin entrar en vigor i ser aplicades durant un determinat exercici econòmic?",
    "answers": [
      { "text": "Que s'hagin aprovat abans de l'1 de febrer de l'any en curs", "correct": false },
      { "text": "Que s'hagin publicat íntegrament en el Butlletí Oficial de la Província (BOPB) abans del 31 de desembre anterior", "correct": true },
      { "text": "Que s'hagin ratificat expressament per la Generalitat de Catalunya abans de la seva exposició", "correct": false },
      { "text": "Que s'hagin notificat individualment a tots els subjectes passius afectats amb un mes d'antelació", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 24: Disposicions generals i potestat reguladora de les administracions locals. Reglaments. Ordenances. Ordenances fiscals.",
    "number": 6,
    "question": "Quin contingut mínim obligatori han de contenir les ordenances fiscals que regulen els tributs propis de les entitats locals?",
    "answers": [
      { "text": "Únicament el calendari de recaptació voluntària i executiva", "correct": false },
      { "text": "El fet imponible, subjectes passius, bases, tipus de gravamen, beneficis fiscals i període impositiu", "correct": true },
      { "text": "El detall de la classificació orgànica i funcional del pressupost de despeses de l'ens", "correct": false },
      { "text": "La relació de llocs de treball (RLT) del personal encarregat de la seva inspecció", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 24: Disposicions generals i potestat reguladora de les administracions locals. Reglaments. Ordenances. Ordenances fiscals.",
    "number": 7,
    "question": "Segons l'ordenament jurídic local, quin és el caràcter jeràrquic i la relació de submissió de les disposicions de caràcter general dictades pels ens locals?",
    "answers": [
      { "text": "Tenen rang de llei orgànica i s'imposen directament sobre la legislació sectorial autonòmica", "correct": false },
      { "text": "Estan subordinades sempre a les lleis tant de l'Estat com de la Generalitat de Catalunya", "correct": true },
      { "text": "Posseeixen autonomia absoluta i no depenen de cap precepte legal superior", "correct": false },
      { "text": "S'assimilen als decrets-llei dictats pel Govern en cas d'urgència extraordinària", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 24: Disposicions generals i potestat reguladora de les administracions locals. Reglaments. Ordenances. Ordenances fiscals.",
    "number": 8,
    "question": "Quina és la funció principal dels anomenats reglaments orgànics (com ara el Reglament Orgànic de l'AMB)?",
    "answers": [
      { "text": "Regular l'estructura interna de l'ens, el funcionament dels òrgans de govern i el règim jurídic dels seus serveis", "correct": true },
      { "text": "Establir les tarifes obligatòries aplicables al transport públic col·lectiu i al tractament de residus", "correct": false },
      { "text": "Tipificar les faltes lleus de civisme i imposar sancions de caràcter pecuniari a la ciutadania", "correct": false },
      { "text": "Modificar els romanents de tresoreria i aprovar les modificacions pressupostàries de crèdit extraordinari", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 24: Disposicions generals i potestat reguladora de les administracions locals. Reglaments. Ordenances. Ordenances fiscals.",
    "number": 9,
    "question": "En relació amb la tramitació administrativa d'una ordenança local, si durant el període d'informació pública es presenten reclamacions o suggeriments, quin és el tràmit següent que ha de complir el Ple?",
    "answers": [
      { "text": "Arxivar automàticament l'expedient sense possibilitat de modificació", "correct": false },
      { "text": "Resoldre-les i aprovar definitivament el text amb les modificacions que escaiguin", "correct": true },
      { "text": "Remetre el text directament al Tribunal Constitucional per a control previ de constitucionalitat", "correct": false },
      { "text": " Sotmetre l'ordenança a un referèndum popular obligatori entre tots els residents de l'àmbit metropolità", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 24: Disposicions generals i potestat reguladora de les administracions locals. Reglaments. Ordenances. Ordenances fiscals.",
    "number": 10,
    "question": "Quin tipus d'ordenances regulen específicament els ingressos derivats de taxes, contribucions especials i preus públics de l'ens local?",
    "answers": [
      { "text": "Ordenances de circulació i mobilitat sostenible", "correct": false },
      { "text": "Ordenances fiscals", "correct": true },
      { "text": "Reglaments orgànics de personal", "correct": false },
      { "text": "Ordenances de policia i bon govern", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 24: Disposicions generals i potestat reguladora de les administracions locals. Reglaments. Ordenances. Ordenances fiscals.",
    "number": 11,
    "question": "Segons l'article 4 de la LBRL, quina prerrogativa reconeguda constitucionalment (arts. 137 i 140 CE) sustenta la potestat reguladora de les administracions locals?",
    "answers": [
      { "text": "La potestat legislativa delegada per les Corts Generals", "correct": false },
      { "text": "L'autonomia local per a la gestió dels interessos respectius", "correct": true },
      { "text": "La supremacia executiva de la administració institucional sobre la local", "correct": false },
      { "text": "La competència exclusiva en matèria de planificació econòmica general de l'Estat", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 24: Disposicions generals i potestat reguladora de les administracions locals. Reglaments. Ordenances. Ordenances fiscals.",
    "number": 12,
    "question": "Quina publicació oficial és preceptiva per a l'entrada en vigor i eficàcia de les ordenances i reglaments aprovats per l'Àrea Metropolitana de Barcelona?",
    "answers": [
      { "text": "El Butlletí Oficial de l'Estat (BOE)", "correct": false },
      { "text": "El Diari Oficial de la Generalitat de Catalunya (DOGC)", "correct": false },
      { "text": "El Butlletí Oficial de la Província de Barcelona (BOPB)", "correct": true },
      { "text": "El tauler d'anuncis intern de la Tresoreria General", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 24: Disposicions generals i potestat reguladora de les administracions locals. Reglaments. Ordenances. Ordenances fiscals.",
    "number": 13,
    "question": "Quin aspecte distingeix fonamentalment les ordenances (com a normes de conducta) dels reglaments orgànics dins de l'àmbit local?",
    "answers": [
      { "text": "Les ordenances van adreçades de manera general a la ciutadania i regulen la convivència i serveis, mentre que els reglaments organitzen l'estructura interna de l'ens", "correct": true },
      { "text": "Els reglaments necessiten una aprovació per majoria absoluta qualificada al Senat, mentre que les ordenances no", "correct": false },
      { "text": "Les ordenances només poden regular matèries pressupostàries i de despeses de personal", "correct": false },
      { "text": "Els reglaments orgànics tenen rang superior a les lleis de la Generalitat de Catalunya", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 24: Disposicions generals i potestat reguladora de les administracions locals. Reglaments. Ordenances. Ordenances fiscals.",
    "number": 14,
    "question": "Quina és la conseqüència jurídica d'una ordenança local que vulneri o contravingui de manera manifesta una llei sectorial estatal o autonòmica?",
    "answers": [
      { "text": "L'acte o disposició incorre en nul·litat de ple dret per infracció de l'ordenament jurídic i jerarquia", "correct": true },
      { "text": "Es considera un defecte merament irregular no invalidant que pot subsanar-se amb un informe de secretaria", "correct": false },
      { "text": "Esdevé automàticament un acte discrecional convalidable pel president de la corporació", "correct": false },
      { "text": "Manté la seva vigència temporal fins que transcorri un termini de quatre anys", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 24: Disposicions generals i potestat reguladora de les administracions locals. Reglaments. Ordenances. Ordenances fiscals.",
    "number": 15,
    "question": "En relació amb la Seu Electrònica de l'AMB i la transparència en la tramitació normativa, quin tràmit previ s'ofereix obligatòriament a la ciutadania abans de l'aprovació definitiva d'un reglament o ordenança metropolitana?",
    "answers": [
      { "text": "Un període de consulta pública prèvia i tauler d'anuncis per recollir aportacions", "correct": true },
      { "text": "Una subhasta pública de contractació de serveis d'assessorament jurídic", "correct": false },
      { "text": "Un examen de capacitació professional obligatori per a residents", "correct": false },
      { "text": "La liquidació anticipada del pressupost de l'exercici anterior", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 24: Disposicions generals i potestat reguladora de les administracions locals. Reglaments. Ordenances. Ordenances fiscals.",
    "number": 16,
    "question": "Quina és la naturalesa de les taxes metropolitanes i preus públics recollits a les ordenances fiscals de l'AMB destinades a la gestió del servei de tractament de residus (com la TMR)?",
    "answers": [
      { "text": "Són ingressos de dret privat obtinguts per la venda de béns patrimonials", "correct": false },
      { "text": "Són prestacions patrimonials de caràcter públic local derivades de la prestació de serveis o activitats en règim de dret públic", "correct": true },
      { "text": "Són subvencions incondicionades rebudes directament dels pressupostos generals de l'Estat", "correct": false },
      { "text": "Sòn ingressos financers derivats de l'emissió de deute públic a llarg termini", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 24: Disposicions generals i potestat reguladora de les administracions locals. Reglaments. Ordenances. Ordenances fiscals.",
    "number": 17,
    "question": "Quin òrgan elabora inicialment la proposta d'aprovació d'una ordenança o modificació fiscal dins de l'estructura de govern local abans de sotmetre-la al Ple?",
    "answers": [
      { "text": "La Comissió Informativa corresponent i la Presidència o àrea de govern encarregada", "correct": true },
      { "text": "El Jutjat de primera instància del partit judicial", "correct": false },
      { "text": "El Comitè d'Empresa del personal funcionari de la corporació", "correct": false },
      { "text": "La Sindicatura de Comptes de Catalunya de manera directa", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 24: Disposicions generals i potestat reguladora de les administracions locals. Reglaments. Ordenances. Ordenances fiscals.",
    "number": 18,
    "question": "Quina limitació temporal o de vigència general tenen les ordenances fiscals locals unça un cop han estat aprovades i publicades correctament?",
    "answers": [
      { "text": "Caduquen necessàriament el 31 de desembre de l'any de la seva aprovació", "correct": false },
      { "text": "Continuen vigents i s'entenen prorrogades automàticament per a els exercicis següents fins que es acordada la seva modificació o expressa derogació", "correct": true },
      { "text": "Necessiten una ratificació trimestral per part del Ministeri d'Hisenda", "correct": false },
      { "text": "Perden la seva validesa si no s'executen en el termini de noranta dies hàbils", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 24: Disposicions generals i potestat reguladora de les administracions locals. Reglaments. Ordenances. Ordenances fiscals.",
    "number": 19,
    "question": "Dins de la jerarquia de fonts i normes a l'Administració Local, quina relació guarden les ordenances locals respecte als decrets i resolucions dictats per la Presidència?",
    "answers": [
      { "text": "Les ordenances tenen rang superior als decrets de la presidència, ja que emanen de la potestat normativa del Ple", "correct": true },
      { "text": "Els decrets de la presidència poden modificar lliurement el contingut de les ordenances fiscals en qualsevol moment", "correct": false },
      { "text": "Tenen exactament el mateix rang normatiu i depenen exclusivament de la seva data d'aprovació", "correct": false },
      { "text": "Els decrets prevalen sempre sobre les ordenances per motius d'urgència executiva", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 24: Disposicions generals i potestat reguladora de les administracions locals. Reglaments. Ordenances. Ordenances fiscals.",
    "number": 20,
    "question": "Quina és la finalitat dels informes d'intervenció i de secretaria que s'incorporen preceptivament en l'expedient d'aprovació d'una ordenança fiscal?",
    "answers": [
      { "text": "Garantir la legalitat de la normativa aplicable i la suficiència financera o cost dels serveis", "correct": true },
      { "text": "Establir el nombre de llocs de treball de caràcter temporal necessaris per recaptar el tribut", "correct": false },
      { "text": "Fixar la composició política de la mesa de contractació de l'AMB", "correct": false },
      { "text": "Substituir el tràmit d'informació pública ciutadana per motius d'economia processal", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 24: Disposicions generals i potestat reguladora de les administracions locals. Reglaments. Ordenances. Ordenances fiscals.",
    "number": 21,
    "question": "Segons la legislació de règim local, pot una ordenança metropolitana regular l'exercici d'activitats econòmiques i comercials dels particulars?",
    "answers": [
      { "text": "No, cap ens local té competències per intervenir en activitats econòmiques privades", "correct": false },
      { "text": "Sí, sotmetent-les a llicència, autorització prèvia, comunicació prèvia o declaració responsable d'acord amb la legislació sectorial", "correct": true },
      { "text": "Només si compta amb l'autorització expressa del Consell de Ministres de l'Estat", "correct": false },
      { "text": "Únicament mitjançant la imposició de sancions penals privatives de drets", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 24: Disposicions generals i potestat reguladora de les administracions locals. Reglaments. Ordenances. Ordenances fiscals.",
    "number": 22,
    "question": "Quina característica defineix l'aprovació inicial d'una ordenança o reglament local pel Ple de la corporació?",
    "answers": [
      { "text": "És un acte definitiu que exhaureix directament la via administrativa", "correct": false },
      { "text": "És un acte de tràmit qualificat que obre el període d'informació pública i o audiència als interessats", "correct": true },
      { "text": "Suposa l'entrada en vigor automàtica de la norma des del dia següent", "correct": false },
      { "text": "Requereix una majoria de dos terços dels membres de la corporació en tots els casos", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 24: Disposicions generals i potestat reguladora de les administracions locals. Reglaments. Ordenances. Ordenances fiscals.",
    "number": 23,
    "question": "En relació amb les ordenances fiscals reguladores de taxes per la prestació de serveis públics, quin principi econòmic-financer regeix generalment la fixació de llur import?",
    "answers": [
      { "text": "El principi d'equivalència, segons el qual el import no pot excedir en conjunt el cost real del servei o activitat prestada", "correct": true },
      { "text": "El principi de lliure mercat i competència il·limitada amb empreses privades", "correct": false },
      { "text": "El principi d'assignació discrecional de beneficis extraordinaris per a la corporació", "correct": false },
      { "text": "El principi de gratuïtat universal obligatòria per a tots els serveis supramunicipals", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 24: Disposicions generals i potestat reguladora de les administracions locals. Reglaments. Ordenances. Ordenances fiscals.",
    "number": 24,
    "question": "Quina és la via jurisdiccional competent per impugnar directament una ordenança o reglament local un cop ha estat aprovada definitivament i publicada en el butlletí oficial corresponent?",
    "answers": [
      { "text": "La jurisdicció contenciosa administrativa", "correct": true },
      { "text": "La jurisdicció social o laboral", "correct": false },
      { "text": "La jurisdicció militar", "correct": false },
      { "text": "La jurisdicció penal a través de judici de faltes ràpid", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 24: Disposicions generals i potestat reguladora de les administracions locals. Reglaments. Ordenances. Ordenances fiscals.",
    "number": 25,
    "question": "Segons la doctrina i la normativa aplicable a les entitats locals, quin efecte produeix la falta de publicació íntegra del text d'una ordenança local després de la seva aprovació definitiva?",
    "answers": [
      { "text": "Impedir l'entrada en vigor i la seva aplicació obligatòria a la ciutadania", "correct": true },
      { "text": "Convertir-la en una disposició de caràcter retroactiu automàtic", "correct": false },
      { "text": "Atorgar-li rang de llei autonòmica per silenci administratiu positiu", "correct": false },
      { "text": "Eximir els subjectes passius de qualsevol tipus d'obligació tributària històrica", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 1,
    "question": "Segons la Llei 39/2015, quina consideració tenen els dissabtes a efectes del còmput de terminis en el procediment administratiu?",
    "answers": [
      { "text": "Són considerats dies hàbils a tots els efectes si les oficines de registre estan obertes", "correct": false },
      { "text": "Són considerats expressament dies inhàbils igualment que els diumenges i festius", "correct": true },
      { "text": "Són hàbils només per a la presentació de sol·licituds a través de la Seu Electrònica", "correct": false },
      { "text": "Són dies inhàbils excepte en els procediments de contractació pública metropolitana", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 2,
    "question": "Quin és el règim aplicable a la fermesa dels actes administratius que incorren en un vici de nul·litat de ple dret?",
    "answers": [
      { "text": "Adquireixen fermesa un cop transcorregut el termini de dos mesos per interposar el recurs contenciós-administratiu", "correct": false },
      { "text": "Poden esdevenir ferms si no s'impugnen dins del termini establert per a la via administrativa", "correct": false },
      { "text": "No poden adquirir mai fermesa pel transcurs del temps, podent ser declarats nuls en qualsevol moment", "correct": true },
      { "text": "Només poden perdre la seva fermesa mitjançant una sentència del Tribunal Constitucional", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 3,
    "question": "Segons l'article 14.2 de la Llei 39/2015, quins dels següents col·lectius no té l'obligació de relacionar-se electrònicament amb l'Administració?",
    "answers": [
      { "text": "Les persones jurídiques", "correct": false },
      { "text": "Els professionals col·legiats per a l'exercici de la seva activitat", "correct": false },
      { "text": "Les persones físiques en qualsevol tipus de tràmit no professional", "correct": true },
      { "text": "Els empleats públics per als tràmits derivats de la seva condició d'empleat", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 4,
    "question": "Quan un termini s'assenyala en dies, aquests s'entenen com a hàbils, i respecte al dia de la notificació o publicació:",
    "answers": [
      { "text": "Es comença a comptar el mateix dia si s'ha rebut abans de les dotze del migdia", "correct": false },
      { "text": "Es considera sempre el primer dia del còmput si és hàbil", "correct": false },
      { "text": "S'entén exclòs del còmput, començant a comptar el dia següent hàbil", "correct": true },
      { "text": "Compta a partir de l'endemà natural, independentment que sigui festiu o no", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 5,
    "question": "Quin tipus de vici comporta l'omissió total i absoluta del procediment legalment establert segons l'article 62.1 de la Llei 39/2015?",
    "answers": [
      { "text": "Anul·labilitat", "correct": false },
      { "text": "Irregularitat no invalidant", "correct": false },
      { "text": "Nul·litat de ple dret", "correct": true },
      { "text": "Ineficàcia sobrevinguda", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 6,
    "question": "Pel que fa als actes de tràmit en un procediment administratiu, quin d'ells pot ser impugnat de manera independent?",
    "answers": [
      { "text": "Qualsevol informe preceptiu emès durant la fase d'instrucció", "correct": false },
      { "text": "Els actes de tràmit qualificats que decideixen directament o indirectament el fons, produeixen indefensió o impossibiliten la continuació del procediment", "correct": true },
      { "text": "Únicament les propostes de resolució emeses pel òrgan instructor", "correct": false },
      { "text": "Cap acte de tràmit pot ser impugnat en cap circumstància de forma separada a la resolució definitiva", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 7,
    "question": "Com es computen els terminis fixats en mesos o anys segons la Llei 39/2015?",
    "answers": [
      { "text": "Es compten de data a data, i si al mes de venciment no hi ha dia equivalent, s'entén que el termini expira l'últim dia del mes", "correct": true },
      { "text": "S'agrupen sempre en dies naturals per evitar errors de calendari", "correct": false },
      { "text": "S'exclouen automàticament tots els dies festius i agost", "correct": false },
      { "text": "Comencen el primer dia natural del mes següent sense tenir en compte la data de notificació", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 8,
    "question": "Quina característica defineix principalment els actes administratius de gravamen?",
    "answers": [
      { "text": "Amplien el patrimoni jurídic del destinatari i no requereixen motivació", "correct": false },
      { "text": "Restringeixen el patrimoni jurídic o imposen obligacions, i requereixen obligatòriament motivació", "correct": true },
      { "text": "Són sempre discrecionals i exempts de control judicial", "correct": false },
      { "text": "Poden dictar-se amb efectes retroactius absoluts sense límits formals", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 9,
    "question": "Segons el règim de validació dels actes administratius, quins actes poden ser objecte de validació per part de l'Administració?",
    "answers": [
      { "text": "Únicament els actes nuls de ple dret", "correct": false },
      { "text": "Tots els actes que pateixin d'irregularitats no invalidants exclusivament", "correct": false },
      { "text": "Els actes anul·lables mitjançant l'esmena dels vicis que presenten", "correct": true },
      { "text": "Cap acte viciat pot ser validat un cop dictat", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 10,
    "question": "Pel que fa al funcionament del Registre Electrònic de l'AMB en relació amb la presentació de documents en dies inhàbils:",
    "answers": [
      { "text": "Els documents es consideren rebuts en el moment de la seva entrada, inclús a la mitjanit d'un diumenge", "correct": false },
      { "text": "La presentació en un dia inhàbil s'entén realitzada a la primera hora del primer dia hàbil següent", "correct": true },
      { "text": "S'anul·la automàticament la sol·licitud per defecte de forma", "correct": false },
      { "text": "Només és vàlida si compta amb l'autorització prèvia de la sindicatura", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 11,
    "question": "Quin efecte produeix un defecte de forma en un acte administratiu segons l'article 63 de la Llei 39/2015?",
    "answers": [
      { "text": "Determina sempre la nul·litat absoluta de tot el procediment", "correct": false },
      { "text": "Només determina l'anul·labilitat quan l'acte manca dels requisits formals indispensables per assolir el seu fi o genera indefensió", "correct": true },
      { "text": "Invalida automàticament l'acte sense possibilitat de conservació", "correct": false },
      { "text": "Es considera un error material subsanable d'ofici sense efectes sobre la validesa", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 12,
    "question": "Què estableix el principi d'incomunicació d'invalidesa en el procediment administratiu?",
    "answers": [
      { "text": "La nul·litat d'un acte comporta sempre la nul·litat de tots els actes posteriors del mateix expedient", "correct": false },
      { "text": "La invalidesa d'un acte o d'una part no implica la dels successius actes o parts que en siguin independents", "correct": true },
      { "text": "Els vicis formals s'estenen a tot el procediment si afecten la fase d'iniciació", "correct": false },
      { "text": "Cap acte pot ser conservat si s'emet fora de termini", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 13,
    "question": "Segons la Llei 39/2015, quina és la naturalesa dels actes presumptes derivats del silenci administratiu?",
    "answers": [
      { "text": "Són meres aparences sense cap efecte jurídic vinculant", "correct": false },
      { "text": "Són actes la convalidació dels quals depèn del criteri discrecional del ple", "correct": false },
      { "text": "Són autèntics actes administratius el sentit dels quals (estimatori o desestimatori) ve fixat per la norma davant l'incompliment de l'obligació de resoldre", "correct": true },
      { "text": "Equivalen sempre a actes nuls de ple dret per omissió del procediment", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 14,
    "question": "Quin requisit és imprescindible perquè es pugui parlar d'exercici d'una potestat discrecional i no d'arbitrarietat de l'Administració?",
    "answers": [
      { "text": "Que l'òrgan que l'exerceixi estigui exempt de control jurisdiccional", "correct": false },
      { "text": "Que els fins perseguits per la potestat estiguin prèviament determinats per l'ordenament jurídic", "correct": true },
      { "text": "Que s'adopti per unanimitat dels membres del Consell Metropolità", "correct": false },
      { "text": "Que no existeixi cap informe previ de la intervenció", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 15,
    "question": "Quina de les següents opcions constitueix una causa de nul·litat de ple dret d'un acte administratiu segons l'article 62.1 de la Llei 39/2015?",
    "answers": [
      { "text": "Qualsevol infracció simple del dret de defensa sense causar indefensió real", "correct": false },
      { "text": "Els actes dictats amb incompetència manifesta per raó de la matèria o del territori", "correct": true },
      { "text": "La realització d'actuacions administratives fora del termini no essencial", "correct": false },
      { "text": "L'incompliment de recomanacions no vinculants d'un òrgan consultiu", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 16,
    "question": "En relació amb els terminis expressats en hores, com s'aplica el còmput segons la Llei 39/2015?",
    "answers": [
      { "text": "S'entenen hores hàbils i es compten de hora en hora des de l'endemà de la notificació", "correct": true },
      { "text": "S'apliquen només durant l'horari d'atenció al públic de les oficines de registre", "correct": false },
      { "text": "S'entenen hores naturals computades minut a minut des del moment exacte de l'enviament telemàtic", "correct": false },
      { "text": "S'equiparen automàticament a un dia hàbil sencer", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 17,
    "question": "Què implica la tècnica de la conversió d'un acte invàlid?",
    "answers": [
      { "text": "Transformar un acte ferm en un acte discrecional mitjançant resolució de la presidència", "correct": false },
      { "text": "Que si els actes nuls o anul·lables contenen els elements constitutius d'un altre de diferent, poden produir els efectes d'aquest", "correct": true },
      { "text": "Convalidar un acte dictat per un òrgan manifestament incompetent", "correct": false },
      { "text": "Converter una sanció administrativa en una obligació de pagament no pressupostària", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 18,
    "question": "Quin dels següents drets dels ciutadans es recull expressament en l'article 13 de la Llei 39/2015?",
    "answers": [
      { "text": "L'obligació de disposar de signatura electrònica avançada per a qualsevol tràmit menor", "correct": false },
      { "text": "Comunicar-se amb les administracions públiques a través de Punts d'Accés Generals electrònics", "correct": true },
      { "text": "Exigir la gratuïtat de totes les taxes i preus públics metropolitans", "correct": false },
      { "text": "Renunciar a la llengua oficial catalana en l'àmbit territorial de Catalunya", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 19,
    "question": "Quan un acte administratiu lesiona els drets i les llibertats susceptibles d'empara constitucional (articles 14 a 29 de la CE), la seva qualificació jurídica és:",
    "answers": [
      { "text": "Merament irregular", "correct": false },
      { "text": "Anul·lable", "correct": false },
      { "text": "Nul de ple dret", "correct": true },
      { "text": "Vàlid però subjecte a indemnització obligatòria", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 20,
    "question": "Quin és l'efecte principal de la presumpció de validesa dels actes administratius reconeguda a la normativa de procediment?",
    "answers": [
      { "text": "Que els actes són immediatament executius i produeixen efectes mentre no s' declari la seva nul·litat o s'anul·lin", "correct": true },
      { "text": "Que no poden ser recorreguts mai en via administrativa", "correct": false },
      { "text": "Que exempten l'Administració de motivar cap tipus de resolució", "correct": false },
      { "text": "Que impedeixen la interposició de mesures cautelars per part dels tribunals", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 21,
    "question": "Com actua l'AMB pel que fa al calendari de dies inhàbils a efectes de còmput de terminis?",
    "answers": [
      { "text": "S'ajusta exclusivament al calendari laboral de l'Estat sense tenir en compte l'àmbit local", "correct": false },
      { "text": "Publica anualment al seu portal corporatiu el calendari oficial coordinant els festius de Barcelona i dels 36 municipis metropolitans", "correct": true },
      { "text": "Delega la determinació dels dies inhàbils en cadascun dels col·legis professionals", "correct": false },
      { "text": "Estableix que tots els dies de l'any són hàbils per a la gestió tributària", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 22,
    "question": "Quina és la conseqüència jurídica si un acte administratiu té un contingut impossible?",
    "answers": [
      { "text": "És un acte merament anul·lable subsanable en el termini d'un mes", "correct": false },
      { "text": "Incorre en nul·litat de ple dret", "correct": true },
      { "text": "Constitueix una irregularitat no invalidant", "correct": false },
      { "text": "Requereix una convalidació per part del ple de la corporació", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 23,
    "question": "En relació amb els actes de tràmit, quina afirmació és correcta pel que fa a la seva impugnació general?",
    "answers": [
      { "text": "Poden ser recorreguts de forma independent en qualsevol moment del procediment", "correct": false },
      { "text": "En general no són impugnables separadament, llevat dels qualificats que causen indefensió o impedeixen continuar", "correct": true },
      { "text": "Són sempre objecte directe de recurs contenciós-administratiu", "correct": false },
      { "text": "Requereixen obligatòriament la interposició prèvia d'un recurs d'alçada", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 24,
    "question": "Si un termini es fixa en dies naturals per expressa disposició legal o en el notificat:",
    "answers": [
      { "text": "S'han de computar incloent els diumenges i festius", "correct": true },
      { "text": "S'exclouen automàticament els dissabtes i diumenges", "correct": false },
      { "text": "Es duplica el nombre de dies per garantir el dret de defensa", "correct": false },
      { "text": "Es consideren dies hàbils només a efectes fiscals", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 25: El Procediment administratiu comú. Relació dels ciutadans amb l’Administració. Còmput i compliment de terminis",
    "number": 25,
    "question": "Quin òrgan pot dur a terme la validació d'un acte anul·lable quan el vici consisteix en incompetència jeràrquica?",
    "answers": [
      { "text": "L'òrgan competent que sigui superior jeràrquic del que va dictar l'acte viciat", "correct": true },
      { "text": "Qualsevol unitat administrativa de la mateixa àrea funcional", "correct": false },
      { "text": "El Defensor del Poble o la sindicatura de greuges", "correct": false },
      { "text": "Només el Ple de la corporació per majoria absoluta", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 26: Recursos administratius i reclamacions judicials",
    "number": 1,
    "question": "Segons la Llei 39/2015 i els principis generals dels recursos administratius, quin és el fonament de la presumpció de validesa dels actes?",
    "answers": [
      { "text": "La confiança del legislador en la seva conformitat a dret", "correct": true },
      { "text": "L'obligatorietat prèvia d'haver estat sotmesos a fiscalització judicial", "correct": false },
      { "text": "El fet que no puguin ser mai objecte de suspensió cautelar", "correct": false },
      { "text": "La seva equiparació automàtica al rang de llei ordinària", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 26: Recursos administratius i reclamacions judicials",
    "number": 2,
    "question": "Quin dels següents actes de tràmit té la consideració d'acte de tràmit qualificat i, per tant, és susceptible d'impugnació separada?",
    "answers": [
      { "text": "Un informe jurídic no vinculant emès durant la instrucció ordinària", "correct": false },
      { "text": "Un acte que determina la impossibilitat de continuar el procediment", "correct": true },
      { "text": "Una proposta de resolució formulada per l'òrgan instructor", "correct": false },
      { "text": "Una petició de complement de documentació no exempta de termini", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 26: Recursos administratius i reclamacions judicials",
    "number": 3,
    "question": "Contra una resolució dictada per la Junta de Govern de l'Àrea Metropolitana de Barcelona (AMB), quin recurs en via administrativa es pot interposar potestativament?",
    "answers": [
      { "text": "Recurs d'alçada davant el Ple del Consell Metropolità", "correct": false },
      { "text": "Recurs potestatiu de reposició davant el mateix òrgan que va dictar l'acte", "correct": true },
      { "text": "Recurs extraordinari d'alçada davant la Generalitat de Catalunya", "correct": false },
      { "text": "Cap, perquè no admet cap tipus de recurs en via administrativa", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 26: Recursos administratius i reclamacions judicials",
    "number": 4,
    "question": "Quin és el termini general d'interposició d'un recurs d'alçada si l'acte administratiu impugnat és exprés?",
    "answers": [
      { "text": "Deu dies hàbils", "correct": false },
      { "text": "Un mes", "correct": true },
      { "text": "Tres mesos", "correct": false },
      { "text": "Sis mesos", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 26: Recursos administratius i reclamacions judicials",
    "number": 5,
    "question": "Si un acte administratiu no és exprés i s'ha produït silenci administratiu, quin termini regeix per interposar el recurs d'alçada?",
    "answers": [
      { "text": "Exactament un mes des de l'endemà de la sol·licitud", "correct": false },
      { "text": "En qualsevol moment a partir de l'endemà del dia en què es produeixi els efectes del silenci", "correct": true },
      { "text": "Un termini improrrogable de tres mesos", "correct": false },
      { "text": "Només dins dels primers quinze dies hàbils", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 26: Recursos administratius i reclamacions judicials",
    "number": 6,
    "question": "Quin caràcter té el recurs potestatiu de reposició respecte de la via judicial contenciosa-administrativa?",
    "answers": [
      { "text": "És un tràmit obligatori i previ necessari", "correct": false },
      { "text": "És completament facultatiu per a l'interessat", "correct": true },
      { "text": "Només és obligatori en l'àmbit local supramunicipal", "correct": false },
      { "text": "És requisit exclusiu per als funcionaris públics", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 26: Recursos administratius i reclamacions judicials",
    "number": 7,
    "question": "Quin òrgan és el competent per resoldre un recurs d'alçada interposat contra un acte que no posa fi a la via administrativa?",
    "answers": [
      { "text": "El mateix òrgan que va dictar l'acte resolutori", "correct": false },
      { "text": "L'òrgan superior jeràrquic del que va dictar l'acte[cite: 1]", "correct": true },
      { "text": "El jutjat contenciós-administratiu de guàrdia a Barcelona", "correct": false },
      { "text": "La jurisdicció civil de l'Audiència Provincial", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 26: Recursos administratius i reclamacions judicials",
    "number": 8,
    "question": "Quina de les següents causes determina la nul·litat de ple dret d'un acte administratiu segons la normativa aplicable?",
    "answers": [
      { "text": "Qualsevol infracció no greu de l'ordenament jurídic", "correct": false },
      { "text": "La realització d'actuacions fora de termini sense transcendència formal", "correct": false },
      { "text": "Els actes dictats amb omissió total i absoluta del procediment legalment establert", "correct": true },
      { "text": "La desviació de poder ordinària en l'exercici de potestats reglades", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 26: Recursos administratius i reclamacions judicials",
    "number": 9,
    "question": "Davant de quina jurisdicció s'interposen les reclamacions judicials contra les actuacions subjectes al dret administratiu de l'AMB un cop esgotada la via administrativa?",
    "answers": [
      { "text": "Davant la jurisdicció social", "correct": false },
      { "text": "Davant la jurisdicció contenciosa-administrativa (Llei 29/1998)[cite: 1]", "correct": true },
      { "text": "Davant el Tribunal Constitucional directament per via de recursos d'empara ordinaris", "correct": false },
      { "text": "Davant els tribunals civils de primera instància", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 26: Recursos administratius i reclamacions judicials",
    "number": 10,
    "question": "Quina particularitat presenten els actes nuls de ple dret pel que fa a la seva fermesa en comparació amb els actes anul·lables?",
    "answers": [
      { "text": "Els actes nuls adquireixen fermesa en un termini de quatre anys inexorablement", "correct": false },
      { "text": "La jurisprudència ha declarat la impossibilitat que els actes nuls de ple dret adquireixin fermesa pel transcurs del temps", "correct": true },
      { "text": "Estenen la seva validesa indefinidament si no es recorren en un mes", "correct": false },
      { "text": "S'equiparen completament als actes merament irregulars en la seva revisió", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 26: Recursos administratius i reclamacions judicials",
    "number": 11,
    "question": "Quin tipus de vici suposa que un acte incompleixi un requisit formal que impedeix aconseguir el seu fi o produeixi indefensió?",
    "answers": [
      { "text": "Nul·litat absoluta de ple dret", "correct": false },
      { "text": "Anul·labilitat[cite: 1]", "correct": true },
      { "text": "Simple irregularitat no invalidant", "correct": false },
      { "text": "Inexistència jurídica de l'acte", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 26: Recursos administratius i reclamacions judicials",
    "number": 12,
    "question": "Quina tècnica de conservació permet a l'Administració esmenar els vicis d'un acte anul·lable?",
    "answers": [
      { "text": "La conversió d'actes", "correct": false },
      { "text": "La validació[cite: 1]", "correct": true },
      { "text": "La revocació retroactiva de ple dret", "correct": false },
      { "text": "La convalidació per silenci negatiu", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 26: Recursos administratius i reclamacions judicials",
    "number": 13,
    "question": "Segons el principi d'incomunicació d'invalidesa en el procediment administratiu:",
    "answers": [
      { "text": "La invalidesa d'un acte comporta automàticament la de tots els successius", "correct": false },
      { "text": "La invalidesa d'un acte o d'una part no implica la dels successius actes o parts independents[cite: 1]", "correct": true },
      { "text": "Qualsevol defecte de forma anul·la tot el conjunt del registre electrònic", "correct": false },
      { "text": "Els actes de tràmit s'anul·len sempre conjuntament amb la resolució final", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 26: Recursos administratius i reclamacions judicials",
    "number": 14,
    "question": "Quan un acte nul o anul·lable conté els elements constitutius d'un altre de diferent, quina figura jurídica es pot aplicar?",
    "answers": [
      { "text": "La conversió[cite: 1]", "correct": true },
      { "text": "La subsanació d'ofici", "correct": false },
      { "text": "La retroacció de actuacions", "correct": false },
      { "text": "L'execució subsidiària", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 26: Recursos administratius i reclamacions judicials",
    "number": 15,
    "question": "Quin és l'objectiu principal del principi d'interdicció de la indefensió en la tramitació dels recursos?",
    "answers": [
      { "text": "Garantir que cap persona afectada es quedi sense possibilitat de defensar els seus interessos legítims", "correct": true },
      { "text": "Limitar el nombre d'al·legacions escrites que pot presentar un ciutadà", "correct": false },
      { "text": "Reduir els terminis de resolució a la meitat en cas d'urgència", "correct": false },
      { "text": "Evitar la intervenció de lletrats en el procediment local", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 26: Recursos administratius i reclamacions judicials",
    "number": 16,
    "question": "En relació amb la Seu Electrònica de l'AMB, com s'han de presentar formalment els recursos administratius per via telemàtica?",
    "answers": [
      { "text": "Mitjançant un correu electrònic ordinari sense signatura", "correct": false },
      { "text": "A través del Registre Electrònic de l'AMB adjuntant la documentació amb signatura electrònica vàlida", "correct": true },
      { "text": "Trucant directament al servei d'atenció telefònica metropolitana", "correct": false },
      { "text": "Presentant una instància en paper a qualsevol oficina bancària col·laboradora", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 26: Recursos administratius i reclamacions judicials",
    "number": 17,
    "question": "Quin supòsit justifica la interposició del recurs extraordinari de revisió?",
    "answers": [
      { "text": "La simple insatisfacció amb la resolució dictada pel superior jeràrquic", "correct": false },
      { "text": "L'aparició de documents essencials per al cas que no s'hagin pogut aportar abans per força major o obra de tercers", "correct": true },
      { "text": "Qualsevol error de dret interpretatiu comès per l'òrgan instructor", "correct": false },
      { "text": "El transcurs de més de sis mesos des de l'inici del procediment", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 26: Recursos administratius i reclamacions judicials",
    "number": 18,
    "question": "Quina condició s'exigeix pel que fa a la competència perquè un acte sigui nul de ple dret per raó de la seva emissió?",
    "answers": [
      { "text": "Que sigui dictat per un òrgan manifestament incompetent per raó de la matèria o del territori[cite: 1]", "correct": true },
      { "text": "Que hi hagi una simple discrepància d'interpretació competencial entre departaments", "correct": false },
      { "text": "Que correspongui a una delegació de competències vigent i publicada", "correct": false },
      { "text": "Que l'òrgan inferior hagi actuat per avocaçó autoritzada", "correct": false }
    ]
  },
{
    "theme": "Bloc IV (Temari Específic) - Tema 26: Recursos administratius i reclamacions judicials",
    "number": 19,
    "question": "Com afecten les irregularitats no invalidants a la validesa d'un acte administratiu?",
    "answers": [
      { "text": "L'anul·len de manera automàtica als trenta dies", "correct": false },
      { "text": "Constitueixen simples defectes de forma que no arriben a ser anul·lables", "correct": true },
      { "text": "Determinen la nul·litat absoluta immediata de tot l'expedient", "correct": false },
      { "text": "Requereixen necessàriament una sentència del Tribunal Suprem per ser corregides", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 26: Recursos administratius i reclamacions judicials",
    "number": 20,
    "question": "Quina classe d'actes posen fi a la via administrativa en el si de l'organització de l'AMB?",
    "answers": [
      { "text": "Les resolucions del Consell Metropolità, de la Presidència i de la Junta de Govern[cite: 2]", "correct": true },
      { "text": "Únicament els acords adoptats pels caps de servei de caràcter tècnic", "correct": false },
      { "text": "Tots els actes de tràmit emesos per qualsevol unitat administrativa", "correct": false },
      { "text": "Exclusivament els informes no vinculants de la secretaria general", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 26: Recursos administratius i reclamacions judicials",
    "number": 21,
    "question": "Quin és l'efecte jurídic principal de la interposició d'un recurs administratiu ordinari respecte de l'executivitat de l'acte impugnat?",
    "answers": [
      { "text": "Suspèn automàticament i per imperatiu legal l'execució de l'acte en tots els casos", "correct": false },
      { "text": "No suspèn l'execució de l'acte impugnat, llevat que l'òrgan competent acordi la suspensió d'ofici o a instància de part sota determinats requisits", "correct": true },
      { "text": "Invalida de forma retroactiva totes les actuacions prèvies del procediment", "correct": false },
      { "text": "Converteix l'acte en un procediment de naturalesa purament civil", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 26: Recursos administratius i reclamacions judicials",
    "number": 22,
    "question": "Què estableix la normativa pel que fa a la realització d'actuacions administratives fora del termini establert?",
    "answers": [
      { "text": "Determinen sempre la nul·litat radical de tot el procediment", "correct": false },
      { "text": "Únicament són anul·lables quan així ho imposa la naturalesa de l'acte o termini[cite: 1]", "correct": true },
      { "text": "Són considerades actes ferms de manera automàtica", "correct": false },
      { "text": "Exclouen qualsevol tipus de responsabilitat disciplinària o patrimonial", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 26: Recursos administratius i reclamacions judicials",
    "number": 23,
    "question": "En un supòsit de validació d'un acte viciat per incompetència no manifesta, quin òrgan pot dur a terme aquesta validació?",
    "answers": [
      { "text": "L'òrgan competent, sempre que sigui superior jeràrquic del que va dictar l'acte viciat[cite: 1]", "correct": true },
      { "text": "Qualsevol ciutadà afectat pel procediment", "correct": false },
      { "text": "El jutjat contenciós-administratiu mitjançant auto interlocutori", "correct": false },
      { "text": "El mateix òrgan incompetent que va dictar l'acte originari", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 26: Recursos administratius i reclamacions judicials",
    "number": 24,
    "question": "Quin tipus d'invalidesa recau sobre aquells actes administratius el contingut dels quals resulta impossible de complir?",
    "answers": [
      { "text": "Anul·labilitat per defecte de forma", "correct": false },
      { "text": "Nul·litat de ple dret[cite: 1]", "correct": true },
      { "text": "Irregularitat no invalidant", "correct": false },
      { "text": "Ineficàcia temporal susceptible de pròrroga", "correct": false }
    ]
  },
  {
    "theme": "Bloc IV (Temari Específic) - Tema 26: Recursos administratius i reclamacions judicials",
    "number": 25,
    "question": "Quina via processal s'obre per a l'impugnació jurisdiccional d'una disposició de caràcter general (reglament) aprovada per l'AMB un cop exhaurida la via administrativa?",
    "answers": [
      { "text": "El recurs contenciós-administratiu davant els òrgans de la jurisdicció contenciosa-administrativa competents[cite: 1, 2]", "correct": true },
      { "text": "El recurs civil ordinari de revisió de contractes", "correct": false },
      { "text": "La reclamació prèvia de dret privat davant l'ajuntament de Barcelona", "correct": false },
      { "text": "El recurs extraordinari d'alçada davant el Parlament Europeu", "correct": false }
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