const TEST_ID = "2019_c1_amb_test"; 

const questions = [

  {
    "theme": "2026; AMB C1",
    "question": "Segons el Tractat de la Unió Europea, el Consell:",
    "number": 1,
    "answers": [
      { "text": "Està format per representants dels ciutadans de la Unió", "correct": false },
      { "text": "Està format pels caps d'Estat", "correct": false },
      { "text": "Està format pels caps de govern dels estats membres", "correct": false },
      { "text": "Està format per un representant de cada estat membre, de rang ministerial", "correct": true }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "El Tribunal Constitucional es compon de:",
    "number": 2,
    "answers": [
      { "text": "12 membres, nomenats pel Rei", "correct": true },
      { "text": "12 membres, proposats pel Govern", "correct": false },
      { "text": "Nou membres nomenats pel Rei", "correct": false },
      { "text": "Nou membres, proposats pel Rei", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "D'acord amb la Constitució espanyola, el Govern de l'Estat cessa:",
    "number": 3,
    "answers": [
      { "text": "En el cas de presentar-se una qüestió de confiança", "correct": false },
      { "text": "Abans de la convocatòria d'eleccions generals", "correct": false },
      { "text": "En el cas de presentar-se una moció de censura", "correct": false },
      { "text": "Després de la celebració d'eleccions generals", "correct": true }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "Quina d'aquestes afirmacions NO és correcta?",
    "number": 4,
    "answers": [
      { "text": "Les Corts Generals executen els pressupostos de l'Estat", "correct": true },
      { "text": "Les Corts Generals exerceixen la potestat legislativa de l'Estat", "correct": false },
      { "text": "Les Corts Generals estan formades pel Congrés dels Diputats i el Senat", "correct": false },
      { "text": "Les Corts Generals controlen l'acció del Govern", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "D'acord amb l'Estatut d'Autonomia de Catalunya, Catalunya estructura la seva organització territorial bàsica en:",
    "number": 5,
    "answers": [
      { "text": "Comarques i províncies", "correct": false },
      { "text": "Províncies, municipis i entitats municipals descentralitzades", "correct": false },
      { "text": "Municipis i comarques", "correct": false },
      { "text": "Municipis i vegueries", "correct": true }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "D'acord amb l'Estatut d'Autonomia de Catalunya, gaudeixen de la condició política de catalans o ciutadans de Catalunya:",
    "number": 6,
    "answers": [
      { "text": "Totes les persones que treballin a Catalunya", "correct": false },
      { "text": "Tots els espanyols que tinguin veïnatge civil a Catalunya", "correct": false },
      { "text": "Tots els europeus que tinguin veïnatge administratiu a Catalunya", "correct": false },
      { "text": "Tots els espanyols que tinguin veïnatge administratiu a Catalunya", "correct": true }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "D'acord amb l'Estatut d'Autonomia de Catalunya, el Parlament:",
    "number": 7,
    "answers": [
      { "text": "És inviolable", "correct": true },
      { "text": "És dependent de les Corts Generals", "correct": false },
      { "text": "És un òrgan de govern plural", "correct": false },
      { "text": "És indissoluble", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "Per poder adoptar acords vàlidament, el Parlament s'ha de trobar reunit amb la presència de:",
    "number": 8,
    "answers": [
      { "text": "La majoria simple dels seus diputats", "correct": false },
      { "text": "La majoria absoluta dels seus diputats", "correct": true },
      { "text": "La totalitat dels seus diputats", "correct": false },
      { "text": "El nombre de diputats que determini el president del Parlament", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "D'acord amb la Llei 7/1985, de 2 d'abril, Reguladora de les Bases de Règim Local, les mancomunitats de municipis, són:",
    "number": 9,
    "answers": [
      { "text": "Ens locals de creació obligatòria", "correct": false },
      { "text": "Ens locals creats per associació voluntària de municipis", "correct": true },
      { "text": "Ens locals d'àmbit territorial inferior al municipi", "correct": false },
      { "text": "Ens locals creats per les diputacions provincials", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "D'acord amb el Decret legislatiu 2/2003, de 28 d'abril, pel qual s'aprova el Text refós de la Llei municipal i de règim local de Catalunya, és possible l'alteració dels termes municipals per:",
    "number": 10,
    "answers": [
      { "text": "Segregar part del territori d'un municipi per agregar-lo a un altre municipi limítrof", "correct": true },
      { "text": "Agregar totalment un municipi a un altre municipi no limítrof", "correct": false },
      { "text": "Crear termes municipals discontinus", "correct": false },
      { "text": "Harmonitzar l'entorn geogràfic", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "D'acord amb la Llei 7/1985, de 2 d'abril, Reguladora de les Bases de Règim Local, l'alcalde és competent per a:",
    "number": 11,
    "answers": [
      { "text": "Aprovar el Reglament orgànic municipal", "correct": false },
      { "text": "Aprovar els expedients de municipalització dels serveis", "correct": false },
      { "text": "Dirigir el govern i l'administració municipals", "correct": true },
      { "text": "Aprovar la plantilla de personal", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "D'acord amb la Llei 31/2010, de 3 d'agost, l'Àrea Metropolitana de Barcelona és:",
    "number": 12,
    "answers": [
      { "text": "Un ens local inframunicipal de caràcter territorial", "correct": false },
      { "text": "Una associació de municipis de caràcter voluntari", "correct": false },
      { "text": "Un ens local supramunicipal de caràcter territorial", "correct": true },
      { "text": "Un ens local de caràcter provincial", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "L'àmbit territorial de l'Àrea Metropolitana de Barcelona només es pot modificar mitjançant:",
    "number": 13,
    "answers": [
      { "text": "Llei del Parlament de Catalunya", "correct": true },
      { "text": "Decret del Govern de la Generalitat", "correct": false },
      { "text": "Llei de les Corts Generals", "correct": false },
      { "text": "Decret de l'/la alcalde/essa de Barcelona", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "Quin dels següents municipis NO forma part de l'Àrea Metropolitana de Barcelona?",
    "number": 14,
    "answers": [
      { "text": "Sant Joan Despí", "correct": false },
      { "text": "Viladecans", "correct": false },
      { "text": "Ripollet", "correct": false },
      { "text": "Sabadell", "correct": true }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "Formen part del Consell Metropolità:",
    "number": 15,
    "answers": [
      { "text": "Alcaldes i regidors dels municipis metropolitans", "correct": true },
      { "text": "Només els alcaldes dels municipis metropolitans", "correct": false },
      { "text": "Alcaldes, regidors i associacions de veïns dels municipis metropolitans", "correct": false },
      { "text": "El personal assessor dels alcaldes metropolitans", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "La Llei 31/2010, de 3 d'agost, de l'Àrea Metropolitana de Barcelona, atribueix la competència de dirigir el personal de l'AMB:",
    "number": 16,
    "answers": [
      { "text": "El Consell Metropolità", "correct": false },
      { "text": "La Junta de Govern", "correct": false },
      { "text": "La Comissió Executiva", "correct": false },
      { "text": "El/la President/a", "correct": true }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "D'acord amb la Llei 31/2010, de 3 d'agost, l'Àrea Metropolitana de Barcelona NO té competència en matèria de:",
    "number": 17,
    "answers": [
      { "text": "Cultura", "correct": true },
      { "text": "Residus", "correct": false },
      { "text": "Urbanisme", "correct": false },
      { "text": "Desenvolupament econòmic i social", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "La representació del municipi de Barcelona en el Consell Metropolità:",
    "number": 18,
    "answers": [
      { "text": "Es determina proporcionalment en funció del nombre de regidors que componen el govern de l'Ajuntament de Barcelona.", "correct": false },
      { "text": "És sempre de 25 membres", "correct": true },
      { "text": "Es decideix pel Consell d'Alcaldes de l'AMB després de les eleccions", "correct": false },
      { "text": "Es determina proporcionalment en funció del nombre d'habitants del municipi de Barcelona", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "El/la president/a de l'Àrea Metropolitana de Barcelona és nomenat/da:",
    "number": 19,
    "answers": [
      { "text": "Pel Consell d'Alcaldes de l'AMB", "correct": false },
      { "text": "Pel Consell Metropolità", "correct": true },
      { "text": "Per l'/la alcalde/essa de l'Ajuntament de Barcelona", "correct": false },
      { "text": "Per la Generalitat de Catalunya", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "Quin d'aquests principis d'actuació administrativa NO està recollit en l'article 103 de la Constitució espanyola?",
    "number": 20,
    "answers": [
      { "text": "La desconcentració", "correct": false },
      { "text": "La descentralització", "correct": false },
      { "text": "L'eficiència", "correct": true },
      { "text": "La coordinació", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "La Constitució espanyola garanteix a l'article 9.3:",
    "number": 21,
    "answers": [
      { "text": "La retroactivitat de les decisions sancionadores no favorables o restrictives de drets individuals", "correct": false },
      { "text": "La irretroactivitat de les disposicions sancionadores no favorables o restrictives de drets individuals", "correct": true },
      { "text": "La retroactivitat de les disposicions favorables no restrictives de drets individuals", "correct": false },
      { "text": "La irretroactivitat de les disposicions favorables no restrictives dels drets individuals", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "Els serveis públics gestionats de forma indirecta són de titularitat:",
    "number": 22,
    "answers": [
      { "text": "Pública o privada, indistintament", "correct": false },
      { "text": "Mixta", "correct": false },
      { "text": "Pública", "correct": true },
      { "text": "Privada", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "D'acord amb la Llei 19/2014, de 29 de desembre, de transparència, accés a la informació pública i bon govern, quin dels següents límits NO és d'aplicació en matèria de publicitat activa i dret d'accés a la informació pública?",
    "number": 23,
    "answers": [
      { "text": "La seguretat privada", "correct": true },
      { "text": "El secret professional i els drets de propietat intel·lectual i industrial", "correct": false },
      { "text": "La investigació o la sanció de les infraccions penals, administratives o disciplinàries", "correct": false },
      { "text": "Els drets dels menors d'edat", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "El delegat o la delegada de protecció de dades NO té la funció de:",
    "number": 24,
    "answers": [
      { "text": "Informar i assessorar el responsable de la protecció de dades sobre les obligacions que imposa la normativa de protecció de dades", "correct": false },
      { "text": "Cooperar amb l'autoritat de control", "correct": false },
      { "text": "Sagnar, gestionar i multar directament l'incompliment de la normativa de protecció de dades", "correct": true },
      { "text": "Supervisar el compliment de la normativa de protecció de dades i de les polítiques del responsable", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "L'Institut Metropolità de Promoció de Sòl i Gestió Patrimonial (IMPSOL) és:",
    "number": 25,
    "answers": [
      { "text": "Un consorci", "correct": false },
      { "text": "Una societat pública", "correct": false },
      { "text": "Una entitat pública empresarial", "correct": true },
      { "text": "Un organisme autònom", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "L'Institut Metropolità del Taxi (IMET) és:",
    "number": 26,
    "answers": [
      { "text": "Un consorci", "correct": false },
      { "text": "Una societat pública", "correct": false },
      { "text": "Una entitat pública empresarial", "correct": false },
      { "text": "Un organisme autònom", "correct": true }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "D'acord amb el que estableix la Llei general pressupostària:",
    "number": 27,
    "answers": [
      { "text": "L'exercici pressupostari coincidirà amb la legislatura", "correct": false },
      { "text": "L'exercici pressupostari coincidirà amb l'any natural", "correct": true },
      { "text": "L'exercici pressupostari coincidirà amb l'any des de la data de la seva aprovació", "correct": false },
      { "text": "L'exercici pressupostari comença l'1 de setembre", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "La fase del procediment de la gestió de les despeses mitjançant la qual es declara l'existència d'un crèdit exigible contra la hisenda pública és:",
    "number": 28,
    "answers": [
      { "text": "L'aprovació de la despesa", "correct": false },
      { "text": "El compromís de despesa", "correct": false },
      { "text": "El reconeixement de l'obligació", "correct": true },
      { "text": "El pagament material", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "El Capítol 3 de la classificació econòmica dels ingressos del pressupost de les entitats locals i els seus organismes autònoms correspon a:",
    "number": 29,
    "answers": [
      { "text": "Transferències corrents", "correct": false },
      { "text": "Impostos directes", "correct": false },
      { "text": "Taxes, preus públics i altres ingressos", "correct": true },
      { "text": "Impostos indirectes", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "És un ingrés tributari:",
    "number": 30,
    "answers": [
      { "text": "Multa", "correct": false },
      { "text": "Transferència corrent", "correct": false },
      { "text": "Taxa", "correct": true },
      { "text": "Subvenció", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "Si a l'inici de l'exercici econòmic no hagués entrat en vigor el pressupost corresponent, es considera:",
    "number": 31,
    "answers": [
      { "text": "Automàticament prorrogat el de l'any anterior pels seus crèdits definitius, com a mínim", "correct": false },
      { "text": "Automàticament prorrogat el de l'any anterior fins al límit global dels seus crèdits inicials, com a màxim", "correct": true },
      { "text": "Automàticament prorrogat el de l'any anterior per l'import dels crèdits no disposats", "correct": false },
      { "text": "Automàticament paralitzada l'execució del pressupost fins a la seva aprovació", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "D'acord amb el que s'estableix a la Base 14.4 del pressupost de l'AMB aprovat per a l'exercici 2019, el reconeixement extrajudicial de crèdits correspon a:",
    "number": 32,
    "answers": [
      { "text": "La Gerència de l'AMB", "correct": false },
      { "text": "La Presidència de l'AMB", "correct": false },
      { "text": "El Consell Metropolità", "correct": true },
      { "text": "La Junta de Govern", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "En les bases d'execució del pressupost d'una administració pública local:",
    "number": 33,
    "answers": [
      { "text": "És obligatori establir la vinculació dels crèdits per a despeses en els nivells de desenvolupament funcional i econòmic que l'entitat local consideri necessaris per a la seva gestió", "correct": false },
      { "text": "Es pot establir la vinculació dels crèdits per a despeses en els nivells de desenvolupament funcional i econòmic que l'entitat local consideri necessaris per a la seva gestió", "correct": true },
      { "text": "No es pot establir la vinculació dels crèdits per a despeses en els nivells de desenvolupament funcional i econòmic que l'entitat local consideri necessaris per la seva gestió", "correct": false },
      { "text": "És obligatori establir la totalitat dels ingressos i despeses de l'entitat local", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "D'acord amb el que s'estableix a l'article 184.1 de la Llei reguladora de les hisendes locals, les fases del procediment de gestió de les despeses són:",
    "number": 34,
    "answers": [
      { "text": "Autorització de despesa, reconeixement de dret, disposició i ordenació del pagament", "correct": false },
      { "text": "Autorització de despesa, disposició o compromís de despesa, reconeixement o liquidació de l'obligació i ordenació del pagament", "correct": true },
      { "text": "Compromís d'ingrés, reconeixement de dret i ingrés", "correct": false },
      { "text": "Autorització de despesa i ordenació efectiva del pagament", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "D'acord amb el que estableix l'article 209 de la Llei reguladora de les hisendes locals, el compte general de les entitats locals:",
    "number": 35,
    "answers": [
      { "text": "Està integrat pel de la pròpia entitat i el de les societats mercantils en què participa", "correct": false },
      { "text": "Està integrat pel de la pròpia entitat i el dels seus organismes autònoms", "correct": false },
      { "text": "Està integrat pel de la pròpia entitat, el dels seus organismes autònoms i el de les societats mercantils de capital íntegrament propietat de l'entitat local", "correct": true },
      { "text": "Està integrat pel de la pròpia entitat i el dels consorcis i societats mercantils en què participa", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "Quan la notificació per mitjans electrònics sigui de caràcter obligatori i no s'ha accedit al seu contingut després d'haver transcorregut deu dies naturals des de la posada a disposició de la notificació:",
    "number": 36,
    "answers": [
      { "text": "S'ha de publicar el corresponent anunci al Diari Oficial de la Generalitat de Catalunya", "correct": false },
      { "text": "S'ha de practicar un segon intent de notificació electrònica a través de l'adreça habilitada única", "correct": false },
      { "text": "La notificació s'entén rebutjada", "correct": true },
      { "text": "S'ha de practicar un segon intent de notificació, aquesta vegada en paper", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "La notificació practicada per mitjans electrònics s'ha de fer a través:",
    "number": 37,
    "answers": [
      { "text": "De l'adreça del correu electrònic de l'interessat que aquest hagi comunicat", "correct": false },
      { "text": "De l'adreça electrònica habilitada única", "correct": true },
      { "text": "De serveis de missatges curts (SMS) per a telèfons mòbils", "correct": false },
      { "text": "De serveis de missatgeria instantània (WhatsApp) per a telèfons mòbils", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "Si l'interessat o el seu representant rebutgen la notificació d'una actuació administrativa:",
    "number": 38,
    "answers": [
      { "text": "Es tindrà per efectuat el tràmit de la notificació", "correct": true },
      { "text": "L'acte administratiu no produirà els seus efectes", "correct": false },
      { "text": "L'acte administratiu produirà els seus efectes, però s'haurà d'intentar de nou la notificació", "correct": false },
      { "text": "Es tindrà per efectuat el tràmit de la notificació però l'acte administratiu no produirà els seus efectes", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "Els actes que posen fi a la via administrativa:",
    "number": 39,
    "answers": [
      { "text": "Poden ser recurribles mitjançant un recurs d'alçada", "correct": false },
      { "text": "Poden ser impugnats directament davant la jurisdicció contenciosa administrativa", "correct": true },
      { "text": "Poden ser impugnats davant un superior jeràrquic", "correct": false },
      { "text": "Poden ser recurribles mitjançant el recurs administratiu especial", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "Els recursos administratius es poden interposar:",
    "number": 40,
    "answers": [
      { "text": "Només contra resolucions administratives", "correct": false },
      { "text": "Contra resolucions i, en certs casos, contra actes de tràmit", "correct": true },
      { "text": "Contra qualsevol resolució i els actes de tràmit", "correct": false },
      { "text": "Només contra actes de tràmit", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "Són nuls de ple dret els actes de les administracions públiques:",
    "number": 42,
    "answers": [
      { "text": "Dictats per un òrgan manifestament incompetent per raó de la matèria o del territori", "correct": true },
      { "text": "Que incorrin en la desviació de poder", "correct": false },
      { "text": "Que es realitzin fora del temps establert", "correct": false },
      { "text": "Que no tinguin els requisits formals indispensables per assolir el seu fi o donin lloc a la indefensió dels interessats", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "És causa d'anul·labilitat d'un acte administratiu:",
    "number": 43,
    "answers": [
      { "text": "Que tingui un contingut impossible", "correct": false },
      { "text": "Que s'hagi dictat prescindint totalment i absolutament del procediment legalment establert", "correct": false },
      { "text": "Quan es produeixi un defecte de forma que doni lloc a la indefensió dels interessats", "correct": true },
      { "text": "Quan sigui constitutiu d'una infracció penal", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "El silenci administratiu pot tenir un sentit:",
    "number": 44,
    "answers": [
      { "text": "Positiu", "correct": false },
      { "text": "Negatiu", "correct": false },
      { "text": "Presumpte", "correct": false },
      { "text": "Positiu o negatiu", "correct": true }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "Si una sol·licitud d'iniciació d'un procediment no reuneix els requisits exigits per la legislació específica aplicable:",
    "number": 45,
    "answers": [
      { "text": "L'administració dictarà resolució desestimant la sol·licitud", "correct": false },
      { "text": "Es donarà per desistida la sol·licitud, prèvia resolució que haurà d'ésser notificada", "correct": false },
      { "text": "Es requerirà a l'interessat perquè, en un termini de deu dies, repari la falta o adjunti els documents preceptius, amb indicació que, si no ho fa, es considera que desisteix de la seva petició", "correct": true },
      { "text": "Es requerirà a l'interessat perquè, en un termini de deu dies, repari la falta o adjunti els documents preceptius, amb indicació que, si no ho fa, es considerarà desestimada la seva petició", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "Les fases del procediment administratiu són:",
    "number": 46,
    "answers": [
      { "text": "Iniciació, ordenació i finalització", "correct": false },
      { "text": "Iniciació, instrucció i finalització", "correct": false },
      { "text": "Iniciació, ordenació, instrucció i finalització", "correct": true },
      { "text": "Iniciació, ordenació, instrucció, audiència i finalització", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "D'acord amb l'article 84.1 de la Llei 39/2015, d'1 d'octubre, de procediment administratiu comú de les administracions públiques, posen fi al procediment:",
    "number": 47,
    "answers": [
      { "text": "La resolució, el desistiment, la renúncia al dret en què es fonamenta la sol·licitud i la declaració de caducitat", "correct": true },
      { "text": "El desistiment, la caducitat, l'aplanament i la renúncia al dret en què es fonamenta la sol·licitud", "correct": false },
      { "text": "La resolució, el desistiment, l'aplanament i la renúncia al dret en què es fonamenta la sol·licitud", "correct": false },
      { "text": "La resolució, el desistiment, la caducitat i la prescripció", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "Quin termini preveu l'article 83.2 de la Llei 39/2015, d'1 d'octubre, de procediment administratiu comú de les administracions públiques, en relació al tràmit d'informació pública?",
    "number": 48,
    "answers": [
      { "text": "Un termini no inferior a 20 dies", "correct": true },
      { "text": "Un termini no inferior a 30 dies", "correct": false },
      { "text": "Un termini no inferior a 10 dies", "correct": false },
      { "text": "Un termini no inferior a 15 dies", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "Són contractes d'obres:",
    "number": 49,
    "answers": [
      { "text": "Els que tenen per objecte la fabricació de béns elaborats segons les característiques fixades per l'entitat contractant", "correct": false },
      { "text": "Els que tenen per objecte l'execució d'una obra, aïllada o conjuntament amb la redacció del projecte", "correct": true },
      { "text": "Els que tenen per objecte prestacions pròpies de dos o més contractes", "correct": false },
      { "text": "Els que tenen per contraprestació el dret d'explotació de les obres", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "El pressupost base de licitació en un contracte administratiu és:",
    "number": 50,
    "answers": [
      { "text": "El cost del contracte expressat en euros", "correct": false },
      { "text": "El valor estimat del contracte", "correct": false },
      { "text": "El límit màxim de la despesa que en virtut del contracte pot comprometre l'òrgan de contractació, inclòs l'impost sobre el valor afegit", "correct": true },
      { "text": "L'import total de l'oferta presentada per l'adjudicatari, incloent l'impost sobre el valor afegit", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "La Llei 9/2017, de 8 de novembre, de Contractes del Sector Públic estableix respecte a la tramitació d'emergència:",
    "number": 51,
    "answers": [
      { "text": "Està prohibida en qualsevol cas", "correct": false },
      { "text": "Només es permet quan el contracte té caràcter d'emergència", "correct": true },
      { "text": "És obligatòria amb caràcter general", "correct": false },
      { "text": "S'utilitza en els contractes de subministrament de petit import", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "Són contractes menors:",
    "number": 52,
    "answers": [
      { "text": "Els de valor estimat inferior a 50.000€", "correct": false },
      { "text": "Els de subministrament de valor estimat inferior a 18.000 €", "correct": false },
      { "text": "Els d'obres de valor estimat superior a 40.000€", "correct": false },
      { "text": "Els de serveis de valor estimat inferior a 15.000€", "correct": true }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "D'acord amb la Llei 9/2017, de 8 de novembre, de Contractes del Sector Públic, es consideren contractes d'obres menors:",
    "number": 52,
    "answers": [
      { "text": "Els de valor estimat inferior a 40.000 €", "correct": true },
      { "text": "Els de valor estimat inferior a 15.000 €", "correct": false },
      { "text": "Els de valor estimat inferior a 50.000 €", "correct": false },
      { "text": "Els de valor estimat inferior a 30.000 €", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "L'objecte dels contractes del sector públic:",
    "number": 53,
    "answers": [
      { "text": "Es pot fraccionar amb la finalitat de disminuir la seva quantia", "correct": false },
      { "text": "Ha de ser determinat", "correct": true },
      { "text": "Precisa d'autorització administrativa", "correct": false },
      { "text": "Té com a nota característica la regulació d'interessos", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "D'acord amb l'article 114 de la Llei 39/2015, d'1 d'octubre, de procediment administratiu comú de les administracions públiques, posen fi a la via administrativa:",
    "number": 54,
    "answers": [
      { "text": "Les resolucions dels recursos extraordinaris de revisió", "correct": false },
      { "text": "Les resolucions dels recursos d'alçada", "correct": true },
      { "text": "Les resolucions dels recursos contenciosos administratius", "correct": false },
      { "text": "Les resolucions dels òrgans administratius que tenen superior jeràrquic", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "D'acord amb l'article 40.2 de la Llei 39/2015, d'1 d'octubre, de procediment administratiu comú de les administracions públiques, el termini per cursar una notificació és:",
    "number": 55,
    "answers": [
      { "text": "Dintre dels cinc dies a partir de la data en què l'acte s'hagi dictat", "correct": false },
      { "text": "Dintre dels deu dies a partir de la data en què l'acte s'hagi dictat", "correct": true },
      { "text": "Dintre dels quinze dies a partir de la data en què l'acte s'hagi dictat", "correct": false },
      { "text": "Dintre dels vint dies a partir de la data en què l'acte s'hagi dictat", "correct": false }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "D'acord amb l'article 124 de la Llei 39/2015, d'1 d'octubre, de procediment administratiu comú de les administracions públiques, el termini per interposar el recurs de reposició és:",
    "number": 56,
    "answers": [
      { "text": "De tres mesos si l'acte és exprés i d'un mes si l'acte és presumpte", "correct": false },
      { "text": "De dos mesos si l'acte és exprés i d'un mes si l'acte és presumpte", "correct": false },
      { "text": "De tres mesos si l'acte és exprés i en qualsevol moment a partir del dia següent a aquell en què, d'acord amb la seva normativa específica, es produeixi l'acte presumpte", "correct": false },
      { "text": "D'un mes si l'acte és exprés i en qualsevol moment a partir del dia següent a aquell en què, d'acord amb la seva normativa específica, es produeixi l'acte presumpte", "correct": true }
    ]
  },
  {
    "theme": "2026; AMB C1",
    "question": "Es poden concedir subvencions a:",
    "number": 57,
    "answers": [
      { "text": "Només a administracions públiques", "correct": false },
      { "text": "Només a persones físiques", "correct": false },
      { "text": "Només a persones jurídiques", "correct": false },
      { "text": "A persones físiques i a persones jurídiques", "correct": true }
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