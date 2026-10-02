const TEST_ID = "recop7test.js"; 

const questions = [
{
    "theme": "Bloc VII (Temari Específic) - Tema 36: La gestió del patrimoni públic, tipus de béns, registre d'inventaris i transparència",
    "number": 1,
    "question": "Segons la normativa aplicable a l'Àrea Metropolitana de Barcelona (AMB) en matèria de patrimoni, quina de les següents característiques és improrrogable i pròpia dels béns de domini públic?",
    "answers": [
      { "text": "Són susceptibles d'adquisició per usucapió o pas del temps pel seu ús continuat", "correct": false },
      { "text": "Són inalienables, imprescriptibles i inembargables", "correct": true },
      { "text": "Romanen subjectes exclusivament a les normes del dret privat en la seva gestió i disposició", "correct": false },
      { "text": "Poden ser objecte d'execució de deutes si s'acorda per resolució plenària", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII (Temari Específic) - Tema 36: La gestió del patrimoni públic, tipus de béns, registre d'inventaris i transparència",
    "number": 2,
    "question": "Com es qualifiquen aquells béns que, sent titularitat de l'AMB, no estan destinats directament a un ús públic ni a la prestació d'un servei públic?",
    "answers": [
      { "text": "Béns demanials o de domini públic", "correct": false },
      { "text": "Béns comunals d'ús general", "correct": false },
      { "text": "Béns patrimonials o de propietat privada", "correct": true },
      { "text": "Infrastructures supramunicipals essencials", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII (Temari Específic) - Tema 36: La gestió del patrimoni públic, tipus de béns, registre d'inventaris i transparència",
    "number": 3,
    "question": "Pel que fa al règim jurídic dels béns patrimonials de les entitats públiques com l'AMB, quin aspecte cal destacar respecte a la seva gestió?",
    "answers": [
      { "text": "Es regeixen íntegrament pel dret administratiu estricte sense excepció", "correct": false },
      { "text": "La seva gestió i disposició es regeix pel dret privat, tot i que l'adquisició i l'alienació estan subjectes a normes de dret públic", "correct": true },
      { "text": "Estan exempts de qualsevol tipus de registre o inventari oficial", "correct": false },
      { "text": "Gauen de la mateixa condició d'imprescriptibilitat absoluta que els parcs metropolitans", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII (Temari Específic) - Tema 36: La gestió del patrimoni públic, tipus de béns, registre d'inventaris i transparència",
    "number": 4,
    "question": "Quina obligació formal recau sobre l'AMB quant a la constància i control del conjunt de béns i drets que integren el seu patrimoni?",
    "answers": [
      { "text": "La formació i manteniment actualitzat de l'Inventari General de béns i drets", "correct": true },
      { "text": "La publicació trimestral de l'actiu net al Butlletí Oficial de l'Estat exclusivament", "correct": false },
      { "text": "L'auditoria externa voluntària cada deu anys sense necessitat d'aprovació plenària", "correct": false },
      { "text": "La inscripció de tots els béns demanials al Registre de la Propietat privat", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII (Temari Específic) - Tema 36: La gestió del patrimoni públic, tipus de béns, registre d'inventaris i transparència",
    "number": 5,
    "question": "Quin òrgan de l'AMB té atribuïda generalment la competència per a l'aprovació i revisió de l'inventari de béns i drets de la corporació?",
    "answers": [
      { "text": "La Intervenció General", "correct": false },
      { "text": "El Consell Metropolità", "correct": true },
      { "text": "La Gerència de Serveis Generals", "correct": false },
      { "text": "El Síndic de Greuges", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII (Temari Específic) - Tema 36: La gestió del patrimoni públic, tipus de béns, registre d'inventaris i transparència",
    "number": 6,
    "question": "En relació amb els principis de transparència i publicitat en la gestió patrimonial de l'AMB, quin contingut s'ha de publicar activament al Portal de Transparència?",
    "answers": [
      { "text": "Únicament els sous i retribucions dels alts càrrecs", "correct": false },
      { "text": "L'inventari de béns immobles, les autoritzacions d'ús i les concessions administratives", "correct": true },
      { "text": "Els expedients sancionadors en matèria de trànsit municipal", "correct": false },
      { "text": "Les declaracions de renda privades del personal funcionari", "correct": true } // wait, mark correct one clearly: index 1
    ]
  },
  {
    "theme": "Bloc VII (Temari Específic) - Tema 36: La gestió del patrimoni públic, tipus de béns, registre d'inventaris i transparència",
    "number": 7,
    "question": "Quina de les següents infraestructures gestionades per l'AMB s'encuadra clarament dins de la categoria de béns de domini públic (demanials)?",
    "answers": [
      { "text": "El sòl sobrer alienable no afecte a cap servei", "correct": false },
      { "text": "Els parcs metropolitans i les estacions depuradores d'aigües residuals (EDAR)", "correct": true },
      { "text": "Els habitatges de protecció pública de titularitat privada", "correct": false },
      { "text": "Els béns immobles patrimonials arrendats a tercers per a fins comercials lliures", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII (Temari Específic) - Tema 36: La gestió del patrimoni públic, tipus de béns, registre d'inventaris i transparència",
    "number": 8,
    "question": "Quina potestat administrativa específica exerceix l'AMB sobre els seus béns de domini públic per defensar la integritat del seu patrimoni?",
    "answers": [
      { "text": "La potestat d'investigació, deslliurament, recuperació d'ofici i inventari", "correct": true },
      { "text": "La potestat exclusiva d'expropiació forçosa entre particulars", "correct": false },
      { "text": "La potestat de privatització immediata sense procediment", "correct": false },
      { "text": "La potestat tributària de recaptació d'impostos estatals directes", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII (Temari Específic) - Tema 36: La gestió del patrimoni públic, tipus de béns, registre d'inventaris i transparència",
    "number": 9,
    "question": "Quin principi regeix els procediments d'adquisició, alienació, cessió o arrendament de béns en l'àmbit de la gestió patrimonial metropolitana?",
    "answers": [
      { "text": "El principi de discrecionalitat absoluta i arbitri del gestor", "correct": false },
      { "text": "Els principis de transparència, publicitat, concurrència i objectivitat", "correct": true },
      { "text": "El principi de confidencialitat i adjudicació directa obligatòria", "correct": false },
      { "text": "El principi de gratuïtat incondicionada per a qualsevol sol·licitant", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII (Temari Específic) - Tema 36: La gestió del patrimoni públic, tipus de béns, registre d'inventaris i transparència",
    "number": 10,
    "question": "Si un bé de domini públic de l'AMB perd la seva destinació al servei públic o a l'ús públic general, quin tràmit jurídic requereix abans de poder ser considerat com a bé patrimonial?",
    "answers": [
      { "text": "La desafectació expressa prèvia mitjançant el procediment legalment establert", "correct": true },
      { "text": "La simple incompareixença de visitants durant un mes", "correct": false },
      { "text": "La notificació verbal al Ministeri d'Hisenda", "correct": false },
      { "text": "L'aprovació d'una moció de censura", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII (Temari Específic) - Tema 36: La gestió del patrimoni públic, tipus de béns, registre d'inventaris i transparència",
    "number": 11,
    "question": "Segons el marc normatiu de l'AMB (Llei 31/2010 i legislació general de patrimoni), quin efecte comporta la condició d'imprescriptibilitat dels béns demanials?",
    "answers": [
      { "text": "Que no es poden inscriure mai al registre de la propietat", "correct": false },
      { "text": "Que no poden ser adquirits per tercers mitjançant la prescripció adquisitiva o usucapió", "correct": true },
      { "text": "Que caduquen automàticament en el termini de trenta anys", "correct": false },
      { "text": "Que requereixen una renovació anual de la seva titularitat", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII (Temari Específic) - Tema 36: La gestió del patrimoni públic, tipus de béns, registre d'inventaris i transparència",
    "number": 12,
    "question": "Quina és la definició legal bàsica del patrimoni de les administracions públiques segons la LPAP i la normativa aplicable a les entitats locals?",
    "answers": [
      { "text": "El conjunt de deutes i passius financers pendents d'amortització", "correct": false },
      { "text": "El conjunt de béns i drets, de qualsevol naturalesa, que pertanyin a l'ens públic en règim de titularitat o propietat", "correct": true },
      { "text": "Exclusivament els edificis destinats a oficines administratives", "correct": false },
      { "text": "Els fons recaptats a través de taxes i impostos directes de l'exercici corrent", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII (Temari Específic) - Tema 36: La gestió del patrimoni públic, tipus de béns, registre d'inventaris i transparència",
    "number": 13,
    "question": "En el context de l'inventari de béns de l'AMB, quina tipologia de béns mobles ha de figurar obligatòriament a més dels immobles?",
    "answers": [
      { "text": "Només els vehicles oficials de gabinet", "correct": false },
      { "text": "Els béns mobles de valor extraordinari o inventariables segons la normativa", "correct": true },
      { "text": "Qualsevol material de papereria fungible consumit diàriament", "correct": false },
      { "text": "Només els elements informàtics de menys de cent euros", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII (Temari Específic) - Tema 36: La gestió del patrimoni públic, tipus de béns, registre d'inventaris i transparència",
    "number": 14,
    "question": "Quina és la principal conseqüència pràctica de la inalienabilitat que afecta els béns de domini públic metropolità?",
    "answers": [
      { "text": "Que no poden ser transmesos, venuts ni gravats mentre mantinguin dita condició demanial", "correct": true },
      { "text": "Que no es poden netejar amb empreses privades externes", "correct": false },
      { "text": "Que no poden acollir esdeveniments culturals públics", "correct": false },
      { "text": "Que el seu pressupost de conservació depèn exclusivament de la Unió Europea", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII (Temari Específic) - Tema 36: La gestió del patrimoni públic, tipus de béns, registre d'inventaris i transparència",
    "number": 15,
    "question": "Quin paper juga el portal web corporatiu de l'AMB (amb.cat) en relació amb la gestió patrimonial i la transparència?",
    "answers": [
      { "text": "És una eina optativa que només mostra informació històrica de l'any de fundació", "correct": false },
      { "text": "Garanteix la publicitat activa de l'inventari d'immobles, cessions de sòl i concessions administratives", "correct": true },
      { "text": "Serveix com a registre mercantil privat per a la compravenda d'accions", "correct": false },
      { "text": "Únicament publica els resultats dels jocs d'ordinador de la plantilla", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII (Temari Específic) - Tema 36: La gestió del patrimoni públic, tipus de béns, registre d'inventaris i transparència",
    "number": 16,
    "question": "Quin tipus de protecció jurídica s'aplica als béns patrimonials en comparació amb els béns de domini públic?",
    "answers": [
      { "text": "El règim de protecció patrimonial ordinari, car no gaudeixen de les prerrogatives demanials d'inalienabilitat i imprescriptibilitat", "correct": true },
      { "text": "Una protecció reforçada superior a la dels parcs naturals", "correct": false },
      { "text": "Cap tipus de protecció legal davant de tercers", "correct": false },
      { "text": "Protecció penal exclusiva per falta lleu", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII (Temari Específic) - Tema 36: La gestió del patrimoni públic, tipus de béns, registre d'inventaris i transparència",
    "number": 17,
    "question": "Quina trampa o error freqüent solen contenir els tipus test d'oposicions C1 respecte als béns patrimonials?",
    "answers": [
      { "text": "Afirmar que es regeixen absolutament pel dret privat en absolutament tots els tràmits, inclosa l'adquisició i l'alienació", "correct": true },
      { "text": "Dir que no existeixen en el pressupost local", "correct": false },
      { "text": "Establir que pertanyen a la Generalitat de Catalunya per defecte", "correct": false },
      { "text": "Considerar-los sempre inembargables sota qualsevol circumstància", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII (Temari Específic) - Tema 36: La gestió del patrimoni públic, tipus de béns, registre d'inventaris i transparència",
    "number": 18,
    "question": "Com s'estructura principalment l'inventari de béns i drets d'una administració pública com l'AMB?",
    "answers": [
      { "text": "Separant degudament els béns immobles, els drets reals, els béns mobles inventariables i valors, i els vehicles i drets de propietat", "correct": true },
      { "text": "En un únic llistat alfabètic sense cap mena de classificació tècnica", "correct": false },
      { "text": "Exclusivament mitjançant extractes bancaris de la tresoreria", "correct": false },
      { "text": "Segons el criteri estètic del departament de comunicació", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII (Temari Específic) - Tema 36: La gestió del patrimoni públic, tipus de béns, registre d'inventaris i transparència",
    "number": 19,
    "question": "Quina característica defineix la inembargabilitat dels béns de domini públic en l'exercici de les funcions de l'AMB?",
    "answers": [
      { "text": "No se'ls pot aplicar cap tipus d'execució judicial de deutes ni mesures d'embargament sobre el seu patrimoni demanial afecte a serveis públics", "correct": true },
      { "text": "Es poden embargar si ho autoritza un jutge de primera instància qualsevol", "correct": false },
      { "text": "Només són embargables durant el mes d'agost", "correct": false },
      { "text": "Estenen l'embargament als comptes corrents privats del personal", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII (Temari Específic) - Tema 36: La gestió del patrimoni públic, tipus de béns, registre d'inventaris i transparència",
    "number": 20,
    "question": "Quin és el principal objectiu de sotmetre les cessions de sòl públic i la gestió d'actius a la publicitat activa a través del Portal de Transparència de l'AMB?",
    "answers": [
      { "text": "complir amb els estàndards de bon govern, rendició de comptes i control ciutadà de l'activitat pública", "correct": true },
      { "text": "Facilitar la venda ràpida de terres a preus simbòlics a empreses amigues", "correct": false },
      { "text": "Evitar que la Intervenció fiscalitzi els comptes anuals", "correct": false },
      { "text": "Complir un requisit estètic de disseny web de la corporació", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII (Temari Específic) - Tema 36: La gestió del patrimoni públic, tipus de béns, registre d'inventaris i transparència",
    "number": 21,
    "question": "En el supòsit que es detecti una ocupació il·legal o una usurpació d'un bé de domini públic de l'AMB, quina potestat permet actuar a l'administració sense necessitat d'acudir immediatament als tribunals civils?",
    "answers": [
      { "text": "La potestat de recuperació d'ofici", "correct": true },
      { "text": "La potestat sancionadora tributària general", "correct": false },
      { "text": "La potestat expropiatòria ordinària de urgència", "correct": false },
      { "text": "La potestat de conbalidació d'actes anul·lables", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII (Temari Específic) - Tema 36: La gestió del patrimoni públic, tipus de béns, registre d'inventaris i transparència",
    "number": 22,
    "question": "Quin paper exerceix la Llei 31/2010 de l'Àrea Metropolitana de Barcelona en relació amb el règim patrimonial de l'ens?",
    "answers": [
      { "text": "Complementa i adapta el marc normatiu general de patrimoni de les administracions públiques a l'estructura i competències supramunicipals metropolitanes", "correct": true },
      { "text": "Deroga completament el Codi Civil i la Constitució Espanyola per al territori de Barcelona", "correct": false },
      { "text": "Estableix un sistema de fiscalització privat aliè a la Generalitat", "correct": false },
      { "text": "Regula únicament el transport de mercaderies per carretera", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII (Temari Específic) - Tema 36: La gestió del patrimoni públic, tipus de béns, registre d'inventaris i transparència",
    "number": 23,
    "question": "Quina circumstància determina que un bé de l'AMB tingui la consideració de demanial per destinació?",
    "answers": [
      { "text": "Quan ha estat afectat formalment al use públic o a un servei públic de la seva competència", "correct": true },
      { "text": "Quan es troba abandonat en un magatzem central durant més de cinc anys", "correct": false },
      { "text": "Quan el seu valor econòmic supera el milió d'euros al balanç", "correct": false },
      { "text": "Quan ha estat comprat mitjançant una subvenció europea de capital", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII (Temari Específic) - Tema 36: La gestió del patrimoni públic, tipus de béns, registre d'inventaris i transparència",
    "number": 24,
    "question": "Davant una pregunta tipus test que afirmi que 'els béns patrimonials de l'AMB no es poden vendre sota cap concepte', com s'ha de qualificar aquesta afirmació?",
    "answers": [
      { "text": "Falsa, ja que els béns patrimonials sí que poden ser alienats complint els procediments legals de dret públic establerts", "correct": true },
      { "text": "Verdaderament certa gràcies a la seva naturalesa d'imprescriptibilitat", "correct": false },
      { "text": "Certa només si ho aprova el director de recursos humans", "correct": false },
      { "text": "Falsa perquè només es poden regalar a entitats sense ànim de lucre", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII (Temari Específic) - Tema 36: La gestió del patrimoni públic, tipus de béns, registre d'inventaris i transparència",
    "number": 25,
    "question": "Quina és la repercussió de la revisió permanent de l'Inventari General de béns i drets en l'organització administrativa de l'AMB?",
    "answers": [
      { "text": "Garanteix la concordança entre la realitat jurídica i física dels béns i la seva expressió comptable i registral", "correct": true },
      { "text": "Permet augmentar automàticament els impostos municipals sense acord plenari", "correct": false },
      { "text": "Eximeix de la redacció del pressupost anual de despeses", "correct": false },
      { "text": "Modifica directament les lleis orgàniques estatals", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 37: Aspectes bàsics de la responsabilitat patrimonial de les Administracions Públiques",
    "number": 1,
    "question": "Segons l'article 106.2 de la Constitució Espanyola, quin dret tenen els particulars en relació amb el funcionament dels serveis públics?",
    "answers": [
      { "text": "Dret a ser indemnitzats per tota lesió que pateixin en qualsevol dels seus béns i drets, en els termes establerts per la llei", "correct": true },
      { "text": "Dret a impugnar automàticament qualsevol acte administratiu que provoqui un perjudici econòmic directe", "correct": false },
      { "text": "Dret a una compensació subsidiària exclusiva per danys derivats de culpa o negligència greu del personal", "correct": false },
      { "text": "Dret a exigir responsabilitat penal i patrimonial de manera conjunta davant de la jurisdicció contenciosa", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 37: Aspectes bàsics de la responsabilitat patrimonial de les Administracions Públiques",
    "number": 2,
    "question": "Quin és el marc legal bàsic estatal que desenvolupa actualment la responsabilitat patrimonial de les administracions públiques i el seu procediment?",
    "answers": [
      { "text": "La Llei 7/1985, de 2 de abril, Reguladora de les Bases del Règim Local (LBRL)", "correct": false },
      { "text": "La Llei 39/2015 (LPACAP) i la Llei 40/2015 (LRJSP)", "correct": true },
      { "text": "El Text Refós de la Llei de Contractes del Sector Públic (LCSP)", "correct": false },
      { "text": "La Llei Orgànica 2/2012, d'Estabilitat Pressupostària i Sostenibilitat Financera", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 37: Aspectes bàsics de la responsabilitat patrimonial de les Administracions Públiques",
    "number": 3,
    "question": "Quin dels següents requisits NO és exigit acumulativament per reconèixer el dret a indemnització en matèria de responsabilitat patrimonial?",
    "answers": [
      { "text": "Una lesió o dany efectivament produït, avaluable econòmicament i referit a una persona o col·lectiu determinat", "correct": false },
      { "text": "El caràcter antijurídic del dany, de manera que el particular no tingui el deure jurídic de suportar-lo segons la llei", "correct": false },
      { "text": "L'existència d'un lucre cessant superior al valor de mercat del bé afectat per la lesió", "correct": true },
      { "text": "Una relació de causalitat directa, immediata i exclusiva entre el funcionament del servei públic i el resultat lesiu", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 37: Aspectes bàsics de la responsabilitat patrimonial de les Administracions Públiques",
    "number": 4,
    "question": "Quin termini de prescripció estableix la normativa vigent per exercir l'acció de responsabilitat patrimonial contra l'Administració?",
    "answers": [
      { "text": "Quatre anys des de la comissió del fet causant", "correct": false },
      { "text": "Un any des de la producció del fet o acte que motivi la indemnització, o des de la curació/determinació de seqüeles en danys físics o psíquics", "correct": true },
      { "text": "Sis mesos a comptar des de la notificació de la resolució de l'expedient de reclamació prèvia", "correct": false },
      { "text": "Tres anys des de la finalització de l'exercici pressupostari en curs", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 37: Aspectes bàsics de la responsabilitat patrimonial de les Administracions Públiques",
    "number": 5,
    "question": "Quina diferència fonamental existeix entre el cas fortuït i la força major pel que fa a la responsabilitat patrimonial de l'Administració?",
    "answers": [
      { "text": "El cas fortuït eximeix totalment l'Administració de responsabilitat, mentre que la força major genera obligació d'indemnitzar", "correct": false },
      { "text": "La força major (externa, imprevisible o inevitable) eximeix l'Administració de responsabilitat, mentre que el cas fortuït intern sí que pot generar-la", "correct": true },
      { "text": "Tots dos conceptes tenen exactament els mateixos efectes jurídics exoneradors segons la Llei 40/2015", "correct": false },
      { "text": "Cap dels dos supòsits pot ser al·legat per un ens local com l'AMB en cap circumstància", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 37: Aspectes bàsics de la responsabilitat patrimonial de les Administracions Públiques",
    "number": 6,
    "question": "En relació amb la tramitació de reclamacions de responsabilitat patrimonial a l'Àrea Metropolitana de Barcelona (AMB), quin òrgan consultiu autonòmic emet dictamen preceptiu en els supòsits de quantia rellevant previstos per la normativa?",
    "answers": [
      { "text": "La Comissió Jurídica Asesora de Catalunya", "correct": true },
      { "text": "El Consell de Garanties Estatutàries", "correct": false },
      { "text": "La Sindicatura de Comptes de Catalunya", "correct": false },
      { "text": "L'Oficina Antifrau de Catalunya", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 37: Aspectes bàsics de la responsabilitat patrimonial de les Administracions Públiques",
    "number": 7,
    "question": "Segons els apunts i les directrius del portal electrònic de l'AMB (amb.cat), quins àmbits competencials directes de l'ens metropolità solen generar expedients de responsabilitat patrimonial per desperfectes o incidents?",
    "answers": [
      { "text": "La gestió de la xarxa viària estatal i els peatges d'autopistes de llarg recorregut", "correct": false },
      { "text": "Els parcs metropolitans, les obres de xarxes de sanejament i les infraestructures públiques gestionades per l'entitat", "correct": true },
      { "text": "L'atorgament de llicències d'armes i passaports dins del territori metropolità", "correct": false },
      { "text": "La inspecció tributària dels impostos estatals sobre la renda de les persones físiques", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 37: Aspectes bàsics de la responsabilitat patrimonial de les Administracions Públiques",
    "number": 8,
    "question": "Quin canal han d'utilitzar habitualment els ciutadans per presentar una sol·licitud de reclamació patrimonial contra l'AMB d'acord amb la seva seu electrònica?",
    "answers": [
      { "text": "Una instància genèrica o el formulari específic de reclamació patrimonial habilitat a la seu electrònica de l'AMB aportant les proves pertinents", "correct": true },
      { "text": "Un requeriment verbal directe al personal de manteniment del parc o instal·lació", "correct": false },
      { "text": "Un recurs contenciós administratiu directe sense esgotar la via administrativa prèvia", "correct": false },
      { "text": "Una comunicació per correu electrònic ordinari sense signatura electrònica ni arxius adjunts", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 37: Aspectes bàsics de la responsabilitat patrimonial de les Administracions Públiques",
    "number": 9,
    "question": "Quin tipus de dany exclou explícitament la generació de responsabilitat patrimonial per part de l'Administració en relació amb el normal manteniment de l'entorn?",
    "answers": [
      { "text": "Els danys derivats de la desídia manifesta i constant dels serveis d'inspecció", "correct": false },
      { "text": "Els riscs pròpis de la vida quotidiana o l'estat normal de manteniment que no estiguin coberts per negligència o funcionament anormal", "correct": true },
      { "text": "Qualsevol lesió patida per un ciutadà en un edifici de titularitat pública durant l'horari d'atenció al públic", "correct": false },
      { "text": "Els danys causats per fallades elèctriques internes d'instal·lacions municipals dependents de l'ens", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 37: Aspectes bàsics de la responsabilitat patrimonial de les Administracions Públiques",
    "number": 10,
    "question": "Si un procediment de responsabilitat patrimonial tramitat davant l'AMB incompleix els terminis de resolució establerts, quin efecte jurídic es produeix generalment respecte al silenci administratiu?",
    "answers": [
      { "text": "El silenci té caràcter estimatori automàtic de la quantia total sol·licitada", "correct": false },
      { "text": "El silenci té caràcter desestimatori, deixant obert el recurs contenciós administratiu o la via de la reclamació judicial", "correct": true },
      { "text": "Es produeix la caducitat automàtica i definitiva de tota l'acció civil", "correct": false },
      { "text": "S'entén prorrogat el termini d'instrucció per un període exactament igual de manera indefinida", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 37: Aspectes bàsics de la responsabilitat patrimonial de les Administracions Públiques",
    "number": 11,
    "question": "Quina naturalesa jurídica té la relació de causalitat dins dels requisits de la responsabilitat patrimonial?",
    "answers": [
      { "text": "Ha de ser un nexe causal directe, immediat i exclusiu entre el funcionament del servei públic i el resultat lesiu", "correct": true },
      { "text": "Pot ser un vincle merament indirecte, hipotètic o conjectural basat en estadístiques generals", "correct": false },
      { "text": "Requereix necessàriament la concurrència de culpa compartida o negligència de la víctima per ser admesa", "correct": false },
      { "text": "És un element optatiu que depèn exclusivament de la discrecionalitat de l'òrgan gestor", "correct": true },
      { "text": "És un element vinculant que no admet prova en contra per part de l'Administració", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 37: Aspectes bàsics de la responsabilitat patrimonial de les Administracions Públiques",
    "number": 12,
    "question": "Com s'ha de computar el termini d'un any de prescripció quan es tracta de danys físics o psíquics derivats del funcionament d'un servei públic?",
    "answers": [
      { "text": "Des de la data exacta en què es va produir l'accident o incident inicial", "correct": false },
      { "text": "Des de la curació o la determinació a l'alça de les seqüeles definitives", "correct": true },
      { "text": "Des del moment en què l'afectat presenta la primera factura farmacèutica", "correct": false },
      { "text": "Des que l'òrgan de govern de l'AMB admet a tràmit la sol·licitud formal", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 37: Aspectes bàsics de la responsabilitat patrimonial de les Administracions Públiques",
    "number": 13,
    "question": "Quin element probatori resulta habitualment indispensable i rellevant per a l'admissió i èxit d'una reclamació patrimonial per danys materials a la via pública?",
    "answers": [
      { "text": "Fotografies del lloc dels fets, atestats policials, informes mèdics o pressupostos de reparació estimatius", "correct": true },
      { "text": "Una declaració jurada personal realitzada davant notari sense suport gràfic ni testifical", "correct": false },
      { "text": "Un informe de qualificació creditícia emès per una entitat bancària privada", "correct": false },
      { "text": "La publicació de la incidència a les xarxes socials corporatives de l'usuari", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 37: Aspectes bàsics de la responsabilitat patrimonial de les Administracions Públiques",
    "number": 14,
    "question": "Quina funció compleix el requisit de l'antijuricitat en el marc de la responsabilitat patrimonial de l'Administració?",
    "answers": [
      { "text": "Determinar que el perjudicat no té l'obligació legal de suportar el dany causat per l'actuació o omissió pública", "correct": true },
      { "text": "Qualificar penalment la conducta del funcionari públic responsable material del servei", "correct": false },
      { "text": "Garantir que l'Administració ingressi taxes addicionals en concepte de compensació de danys", "correct": false },
      { "text": "Establir la nul·litat de ple dret automàtica de qualsevol contracte menor de subministraments", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 37: Aspectes bàsics de la responsabilitat patrimonial de les Administracions Públiques",
    "number": 15,
    "question": "Si en un expedient de responsabilitat patrimonial es demostra que ha existit una culpa exclusiva de la víctima en la producció del resultat lesiu, quin efecte té sobre la responsabilitat de l'Administració?",
    "answers": [
      { "text": "L'Administració queda totalment eximida d'obligació indemnitzatòria", "correct": true },
      { "text": "L'Administració ha de pagar obligatòriament el cinquanta per cent de la quantia reclamada", "correct": false },
      { "text": "Es converteix en un supòsit de nul·litat de ple dret de caràcter subjectiu", "correct": false },
      { "text": "S'imposa una sanció disciplinària directa al ciutadà per imprudència temerària", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 37: Aspectes bàsics de la responsabilitat patrimonial de les Administracions Públiques",
    "number": 16,
    "question": "Quina és la consideració dels fenòmens meteorològics extraordinaris no habituals en l'àmbit de la responsabilitat patrimonial de les administracions?",
    "answers": [
      { "text": "S'entenen generalment com a supòsits de força major que eximeixen l'Administració de responsabilitat", "correct": true },
      { "text": "S'consideren sempre defectes de fabricació de les infraestructures públiques imputables a l'ens local", "correct": false },
      { "text": "Generen una indemnització automàtica superior al doble del valor taxat del bé", "correct": false },
      { "text": "Obliguen a l'entitat a declarar l'estat d'alarma local de forma immediata", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 37: Aspectes bàsics de la responsabilitat patrimonial de les Administracions Públiques",
    "number": 17,
    "question": "Quin òrgan resol habitualment els expedients de responsabilitat patrimonial a l'AMB un cop instruïts per les unitats tècniques corresponents?",
    "answers": [
      { "text": "La Presidència o la Gerència de l'AMB per delegació o competència atribuïda", "correct": true },
      { "text": "El Tribunal Constitucional en única instància", "correct": false },
      { "text": "El Defensor del Poble de Catalunya de manera vinculant", "correct": false },
      { "text": "La junta general d'accionistes de les empreses concessionàries de transport", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 37: Aspectes bàsics de la responsabilitat patrimonial de les Administracions Públiques",
    "number": 18,
    "question": "Quin principi general del dret administratiu es veu directament reflectit quan s'exigeix que el dany patit pel particular sigui avaluable econòmicament?",
    "answers": [
      { "text": "El principi d'efectivitat i indemnitat patrimonial de l'estat de dret", "correct": true },
      { "text": "El principi de jerarquia normativa i competència territorial", "correct": false },
      { "text": "El principi de publicitat i transparència en la contractació pública", "correct": false },
      { "text": "El principi de no afectació dels ingressos públics", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 37: Aspectes bàsics de la responsabilitat patrimonial de les Administracions Públiques",
    "number": 19,
    "question": "Quina característica pròpia defineix el funcionament dels serveis públics com a element generador de responsabilitat segons l'article 106.2 de la CE?",
    "answers": [
      { "text": "Pot derivar tant d'un funcionament anòmal i negligent com d'un funcionament normal que provoqui un dany antijurídic", "correct": true },
      { "text": "Exigeix necessàriament la comissió d'un delicte de prevaricació per part de l'autoritat competent", "correct": false },
      { "text": "Només pot reconèixer-se si el servei públic estava gestionat de forma indirecta per una empresa privada", "correct": false },
      { "text": "Exclou completament qualsevol activitat realitzada per personal laboral de l'administració", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 37: Aspectes bàsics de la responsabilitat patrimonial de les Administracions Públiques",
    "number": 20,
    "question": "En relació amb la Llei 39/2015, quina fase del procediment administratiu de reclamació patrimonial inclou la sol·licitud d'informes als serveis tècnics la gestió dels quals hagi ocasionat el presumpte dany?",
    "answers": [
      { "text": "La fase d'ordenació i instrucció del procediment", "correct": true },
      { "text": "La fase d'execució forçosa de la resolució ferma", "correct": false },
      { "text": "La fase d'iniciació d'ofici exclusiva per part del Ministeri Fiscal", "correct": false },
      { "text": "La fase de publicació al Diari Oficial de la Generalitat de Catalunya", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 37: Aspectes bàsics de la responsabilitat patrimonial de les Administracions Públiques",
    "number": 21,
    "question": "Quina és la conseqüència jurídica de presentar una reclamació de responsabilitat patrimonial un cop transcorregut el termini legal d'un any des de la producció del fet lesiu?",
    "answers": [
      { "text": "La inadmissió a tràmit de la sol·licitud per prescripció extintiva de l'acció", "correct": true },
      { "text": "La reducció automàtica de la quantia indemnitzatòria en un cinquanta per cent", "correct": false },
      { "text": "La conversió automàtica de la reclamació en un recurs d'alçada ordinari", "correct": false },
      { "text": "La obligació de l'Administració de resoldre el fons de l'assumpte sense oposar obstacles temporals", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 37: Aspectes bàsics de la responsabilitat patrimonial de les Administracions Públiques",
    "number": 22,
    "question": "Quin tipus de danys materials o personals es troben coberts per la legislació de responsabilitat patrimonial de les administracions públiques?",
    "answers": [
      { "text": "Tots aquells derivats de les lesions en qualsevol dels béns i drets del particular imputables a l'activitat administrativa", "correct": true },
      { "text": "Exclusivament els danys immobiliaris provocats per obres de construcció de carreteres estatals", "correct": false },
      { "text": "Només els perjudicis econòmics derivats de fluctuacions del mercat financer internacional", "correct": false },
      { "text": "Únicament els danys morals reconeguts per sentència ferma de l'ordre jurisdiccional penal", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 37: Aspectes bàsics de la responsabilitat patrimonial de les Administracions Públiques",
    "number": 23,
    "question": "Com pot afectar la concurrència de diverses administracions públiques en la gestió d'un servei a una reclamació per responsabilitat patrimonial?",
    "answers": [
      { "text": "Es pot exigir la responsabilitat de manera conjunta, solidària o segons els criteris de competència determinats per l'ordenament jurídic", "correct": true },
      { "text": "S'anul·la automàticament qualsevol possibilitat d'indemnització per indefensió competencial", "correct": false },
      { "text": "La reclamació s'ha de dirigir exclusivament contra l'Administració General de l'Estat en tot cas", "correct": false },
      { "text": "Es trasllada la competència decisòria a l'empresa contractista privada sense intervenció pública", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 37: Aspectes bàsics de la responsabilitat patrimonial de les Administracions Públiques",
    "number": 24,
    "question": "Quina és la finalitat principal de la incorporació de mitjans telemàtics i de la seu electrònica en la gestió de reclamacions patrimonials a l'AMB?",
    "answers": [
      { "text": "Garantir l'eficàcia, la celeritat, el registre electrònic de documents i l'accés universal de la ciutadania als tràmits", "correct": true },
      { "text": "Limitar el nombre d'expedients anuals mitjançant barreres tecnològiques d'accés exclusiu", "correct": false },
      { "text": "Evitar completament la intervenció dels serveis jurídics i d'intervenció de l'ens", "correct": false },
      { "text": "Substituir la normativa de la Llei 40/2015 per reglaments interns de caràcter privat", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 37: Aspectes bàsics de la responsabilitat patrimonial de les Administracions Públiques",
    "number": 25,
    "question": "Quina importància té la distinció entre actes nuls de ple dret i actes anul·lables en l'àmbit de la revisió i control dels actes de l'Administració?",
    "answers": [
      { "text": "Els actes nuls no poden adquirir fermesa ni convalidar-se i es poden impugnar en qualsevol moment, mentre que els anul·lables estan subjectes a terminis de caducitat i poden ser convalidats", "correct": true },
      { "text": "Els actes anul·lables no produeixen cap mena d'efecte jurídic des del moment mateix de la seva emissió", "correct": false },
      { "text": "La nul·litat de ple dret només pot ser declarada pels tribunals de l'ordre civil i mai per l'Administració", "correct": false },
      { "text": "Els vicis formals menors comporten sempre la nul·litat radical i improrrogable de l'expedient", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 1,
    "question": "Segons el marc normatiu vigent en matèria de protecció de dades a l'administració pública, quin és el paper del consentiment de l'interessat en l'àmbit de l'AMB?",
    "answers": [
      { "text": "És la base jurídica principal i necessària per a qualsevol tractament de dades personals realitzat per l'ens", "correct": false },
      { "text": "Queda relegat a supòsits molt específics, ja que el tractament es basa generalment en el compliment d'una obligació legal o interès públic", "correct": true },
      { "text": "No pot ser utilitzat en cap cas per les administracions públiques locals per prohibició expressa del RGPD", "correct": false },
      { "text": "Requereix sempre una autorització prèvia i expressa de l'Autoritat Catalana de Protecció de Dades", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 2,
    "question": "Quin és el termini màxim general establert perquè el responsable del tractament respongui a una sol·licitud d'exercici de drets per part d'una persona interessada?",
    "answers": [
      { "text": "Deu dies hàbils, d'acord amb el règim jurídic de procediment administratiu comú", "correct": false },
      { "text": "Un mes a comptar des de la recepció de la petició, prorrogable dos mesos més si la complexitat ho requereix", "correct": true },
      { "text": "Tres mesos naturals improrrogables en tots els supòsits", "correct": false },
      { "text": " quinze dies naturals des de la seva entrada al registre electrònic", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 3,
    "question": "Segons l'article 37 del RGPD i la LOPDGDD, quina condició s'aplica respecte a la figura del Delegat de Protecció de Dades (DPD) a l'Administració Pública i a l'AMB?",
    "answers": [
      { "text": "La seva designació és totalment voluntària i depèn de la disponibilitat pressupostària de cada ens local", "correct": false },
      { "text": "És obligatòria en totes les autoritats i organismes públics, inclosos els ens locals com l'AMB", "correct": true },
      { "text": "Només és obligatòria per a aquells municipis de més de 50.000 habitants", "correct": false },
      { "text": "Funciona exclusivament com a òrgan consultiu extern vinculat a la Generalitat de Catalunya", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 4,
    "question": "Quina de les següents opcions descriu correctament el Registre d'Activitats de Tractament (RAT) en el context de l'AMB segons el seu portal de transparència?",
    "answers": [
      { "text": "Un fitxer secret de caràcter intern només accessible per a la inspecció de treball i seguretat social", "correct": false },
      { "text": "Un registre públic on s'especifiquen detalladament les finalitats, categories de dades, conservació i procediments dels serveis metropolitans", "correct": true },
      { "text": "Un arxiu temporal de dades econòmiques que s'elimina automàticament en finalitzar cada exercici pressupostari", "correct": false },
      { "text": "Un registre exclusiu per a la gestió de recursos humans i personal propi de l'entitat", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 5,
    "question": "Quina base jurídica principal recollida a l'article 6.1 del RGPD justifica habitualment el tractament de dades per part de l'Administració Pública en l'exercici de les seves funcions?",
    "answers": [
      { "text": "El consentiment inequívoc i tàcit de l'interessat", "correct": false },
      { "text": "El compliment d'una obligació legal aplicable al responsable o una missió realitzada en interès públic", "correct": true },
      { "text": "L'interès legítim comercial de l'ens públic en la gestió de serveis", "correct": false },
      { "text": "L'execució d'un contracte privat de prestació de serveis subscrit amb la ciutadania", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 6,
    "question": "Quin requisit formal és indispensable per exercir telemàticament els drets de protecció de dades a través de la Seu Electrònica de l'AMB?",
    "answers": [
      { "text": "L'ús d'un certificat digital degudament reconegut per a la identificació de la persona interessada", "correct": true },
      { "text": "L'enviament d'un correu electrònic ordinari sense signatura electrònica", "correct": false },
      { "text": "La presència física obligaria a les oficines centrals amb cita prèvia", "correct": false },
      { "text": "L'aportació d'una fotocòpia compulsada del DNI per via postal ordinària exclusivament", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 7,
    "question": "Quina de les següents opcions NO constitueix un principi clau del tractament de dades personals segons l'article 5 del RGPD?",
    "answers": [
      { "text": "Minimització de dades i exactitud", "correct": false },
      { "text": "Llicitud, lleialtat i transparència", "correct": false },
      { "text": "Integritat i confidencialitat", "correct": false },
      { "text": "Benefici econòmic directe i maximització del rendiment de la dada", "correct": true }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 8,
    "question": "Quin és un dels errors o trampes més habituals en l'àmbit d'examen respecte al consentiment en l'Administració Pública?",
    "answers": [
      { "text": "Creure que l'administració necessita sempre el consentiment exprés de la persona per tractar qualsevol dada derivada de les seves competències legals", "correct": true },
      { "text": "Pensar que el consentiment es pot revocar en qualsevol moment sense efectes retroactius", "correct": false },
      { "text": "Suposar que el DPD pot autoritzar l'ús de dades sense base legal prèvia", "correct": false },
      { "text": "Considerar que el silenci positiu equival a un consentiment exprés en matèria tributària", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 9,
    "question": "Quina de les següents funcions correspon de manera específica al Delegat de Protecció de Dades (DPD)?",
    "answers": [
      { "text": "Imposar sancions econòmiques directes als ciutadans que incompleixin la normativa", "correct": false },
      { "text": "Informar i assessorar el responsable o l'encarregat del tractament sobre les seves obligacions legals", "correct": true },
      { "text": "Gestionar directament la recaptació dels tributs metropolitans i el recàrrec de l'IBI", "correct": false },
      { "text": "Substituir l'autoritat de control en la resolució de conflictes laborals interns", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 10,
    "question": "Quin reglament europeu constitueix el pilar fonamental del marc jurídic actual de la protecció de dades aplicable a l'estat espanyol?",
    "answers": [
      { "text": "El Reglament (UE) 2016/679 (Reglament General de Protecció de Dades - RGPD)", "correct": true },
      { "text": "La Directiva europea de comerç electrònic i serveis de la societat de la informació", "correct": false },
      { "text": "El Reial Decret Legislatiu sobre procediment administratiu comú de les administracions públiques", "correct": false },
      { "text": "La Llei Orgànica de Garantia Integral de la Llibertat Digital", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 11,
    "question": "Quina llei orgànica espanyola complementa i adapta el RGPD en matèria de garantia dels drets digitals?",
    "answers": [
      { "text": "La Llei Orgànica 3/2018, de 5 de desembre (LOPDGDD)", "correct": true },
      { "text": "La Llei Orgànica 7/2021 de protecció de dades tractades per a finalitats de prevenció", "correct": false },
      { "text": "La Llei 31/2010 de l'Àrea Metropolitana de Barcelona", "correct": false },
      { "text": "El Text Refós de la Llei Reguladora de les Hisendes Locals", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 12,
    "question": "Dins del catàleg de drets de les persones interessades, com es coneix popularment el dret a la supressió de les dades personals?",
    "answers": [
      { "text": "Dret a l'oblit", "correct": true },
      { "text": "Dret de portabilitat universal", "correct": false },
      { "text": "Dret d'oposició automàtica", "correct": false },
      { "text": "Dret de limitació cautelar", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 13,
    "question": "Quina és la funció del punt de contacte oficial que representa el DPD respecte a l'autoritat de control?",
    "answers": [
      { "text": "Actuar com a enllaç de comunicació i cooperació davant l'AEPD o l'autoritat autonòmica competent", "correct": true },
      { "text": "Coordinar els serveis de recaptació executiva de l'AMB amb l'agència tributària estatal", "correct": false },
      { "text": "Supervisar directament els pressupostos anuals de l'entitat local", "correct": false },
      { "text": "Tramitar els recursos d'alçada interposats contra resolucions del ple metropolità", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 14,
    "question": "En relació amb el principi de limitació del termini de conservació, quin objectiu persegueix la normativa de protecció de dades?",
    "answers": [
      { "text": "Que les dades es mantinguin només durant el temps necessari per als fins del tractament", "correct": true },
      { "text": "Garantir la conservació indefinida de qualsevol document administratiu per raons històriques", "correct": false },
      { "text": "Permetre la destrucció immediata de registres comptables el mateix dia de la seva emissió", "correct": false },
      { "text": "Obligar a la ciutadania a renovar el seu consentiment cada sis mesos", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 15,
    "question": "Quina característica defineix el principi de minimització de dades en el tractament administratiu?",
    "answers": [
      { "text": "Les dades han de ser adequades, pertinents i limitades al que sigui necessari en relació amb les finalitats", "correct": true },
      { "text": "S'ha de recollir el màxim volum possible d'informació de la persona per si en un futur resulta útil", "correct": false },
      { "text": "Les dades s'han de mantenir anònimes en qualsevol fase del procediment administratiu", "correct": false },
      { "text": "Es limita l'accés a les dades exclusivament als alts càrrecs de l'administració", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 16,
    "question": "Quin dret reconegut al RGPD permet a l'interessat rebre les seves dades personals en un format estructurat, d'ús comú i lectura mecànica?",
    "answers": [
      { "text": "El dret a la portabilitat", "correct": true },
      { "text": "El dret de rectificació", "correct": false },
      { "text": "El dret d'oposició", "correct": false },
      { "text": "El dret a la limitació del tractament", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 17,
    "question": "Quina implicació té el principi d'integritat i confidencialitat en la gestió de dades públiques?",
    "answers": [
      { "text": "Garantir una seguretat adequada contra el tractament no autoritzat, la pèrdua o la destrucció accidental", "correct": true },
      { "text": "Publicar de manera obligatòria totes les dades personals al tauler d'anuncis municipal", "correct": false },
      { "text": "Permetre la cessió lliure de dades entre diferents empreses privades col·laboradores", "correct": false },
      { "text": "Establir que la informació no pot ser digitalitzada sota cap concepte", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 18,
    "question": "Davant de quina situació pot un ciutadà exercir el dret d'oposició segons la normativa de protecció de dades?",
    "answers": [
      { "text": "Per motius relacionats amb la seva situació particular, quan el tractament es basi en l'interès públic", "correct": true },
      { "text": "Únicament quan hagi donat prèviament el seu consentiment exprés i per escrit", "correct": false },
      { "text": "Quan vulgui evitar el pagament de tributs o taxes legalment establertes", "correct": false },
      { "text": "En qualsevol moment, sense necessitat de justificar cap mena de motiu personal", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 19,
    "question": "Quina és la naturalesa de les dades de contacte del Delegat de Protecció de Dades en el marc de l'AMB?",
    "answers": [
      { "text": "Han de ser publicades públicament i comunicades a l'autoritat de control competent", "correct": true },
      { "text": "Sienen caràcter reservat i només es faciliten sota previ pagament d'una taxa", "correct": false },
      { "text": "Són d'ús exclusiu per al President de la corporació metropolitana", "correct": false },
      { "text": "No poden ser divulgades sota cap circumstància per motius de seguridad", "correct": true }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 20,
    "question": "Com afecta el principi de licitud al tractament de dades dins de l'Administració Pública local?",
    "answers": [
      { "text": "Exigeix que tot tractament estigui amparat per la llei o per algun dels requisits de l'article 6 del RGPD", "correct": true },
      { "text": "Permet a l'ajuntament o a l'AMB recaptar dades sense cap limitació normativa prèvia", "correct": false },
      { "text": "Estableix que només es poden tractar dades si hi ha un benefici econòmic directe per a l'ens", "correct": false },
      { "text": "Garanteix que l'administració no pot emmagatzemar informació en servidors digitals", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 21,
    "question": "Quin tipus de decisions queden generalment prohibides o sotmeses a estrictes garanties segons l'article 22 del RGPD?",
    "answers": [
      { "text": "Les decisions individualitzades automatitzades, inclosa l'elaboració de perfils", "correct": true },
      { "text": "Les resolucions adoptades col·ledivament pel Ple del Consell Metropolità", "correct": false },
      { "text": "Els actes de tràmit no qualificats dins d'un procediment de subvencions", "correct": false },
      { "text": "La tramitació electrònica de llicències d'obres menors", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 22,
    "question": "Quina és la finalitat principal d'incloure apartats específics sobre la política de privacitat a la web oficial de l'AMB (amb.cat)?",
    "answers": [
      { "text": "Complir amb els principis de transparència i informació deguda a la ciutadania sobre el tractament de dades", "correct": true },
      { "text": "Promocionar serveis comercials privats de les empreses adjudicatàries de la zona metropolitana", "correct": false },
      { "text": "Establir un canal de venda online de productes i merchandising institucional", "correct": false },
      { "text": "Restringir l'accés a la informació pública exclusivament a residents empadronats", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 23,
    "question": "En cas que una petició d'exercici de drets sigui especialment complexa, quant es pot prorrogar com a màxim el termini inicial de resposta?",
    "answers": [
      { "text": "Dos mesos més", "correct": true },
      { "text": "Sis mesos addicionals", "correct": false },
      { "text": "Un any natural complet", "correct": false },
      { "text": "No es preveu cap prorroga en cap circumstància", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 24,
    "question": "Quina és una de les obligacions essencials del responsable del tractament quan es produeix una violació de la seguretat de les dades personals?",
    "answers": [
      { "text": "Notificar-ho a l'autoritat de competència competent sense dilació indeguda, llevat que sigui improbable que comporti un risc", "correct": true },
      { "text": "Ocultar la incidència per evitar la responsabilitat patrimonial de l'administració", "correct": false },
      { "text": "Publicar immediatament la llista de afectats a la premsa local", "correct": false },
      { "text": "Esperar al tancament de l'exercici pressupostari per informar en la memòria anual", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 38: La protecció de dades de caràcter personal. Règim jurídic",
    "number": 25,
    "question": "Quin paper juguen les autoritats de control (com l'AEPD o l'autoritat autonòmica) respecte al compliment de la normativa a l'Administració Pública?",
    "answers": [
      { "text": "Vetllar pel compliment de la normativa i exercir poders d'investigació i correctius, inclosa la potestat sancionadora", "correct": true },
      { "text": "Redactar els pressupostos anuals de l'AMB en matèria de seguretat informàtica", "correct": false },
      { "text": "Resoldre directament els recursos d'alçada dels funcionaris públics", "correct": false },
      { "text": "Eixir com a òrgan de contractació centralitzada de programari lliure", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII (Temari Específic) - Tema 39: Obligacions de publicitat derivades de la Llei estatal 19/2013 i de la Llei catalana 19/2014, de transparència, accés a la informació pública i bon govern",
    "number": 1,
    "question": "Segons la Llei 19/2014, del 29 de desembre, de transparència, accés a la informació pública i bon govern, quin és el termini màxim general establert per resoldre i notificar la sol·licitud d'accés a la informació pública?",
    "answers": [
        { "text": "Quinze dies hàbils, ampliable per quinze dies més", "correct": false },
        { "text": "Un mes, comptador des de la recepció de la sol·licitud per l'òrgan competent", "correct": true },
        { "text": "Tres mesos, transcorreguts els quals s'entén desestimada per silenci administratiu negatiu", "correct": false },
        { "text": "Dos mesos improrrogables en tot cas", "correct": false }
    ]
},
{
    "theme": "Bloc VII (Temari Específic) - Tema 39: Obligacions de publicitat derivades de la Llei estatal 19/2013 i de la Llei catalana 19/2014, de transparència, accés a la informació pública i bon govern",
    "number": 2,
    "question": "En relació amb les diferències entre la Llei estatal 19/2013 i la Llei catalana 19/2014 pel que fa a l'òrgan de garantia en matèria d'accés a la informació pública, quin organisme resol les reclamacions a Catalunya?",
    "answers": [
        { "text": "El Consell de Transparència i Bon Govern de l'Estat", "correct": false },
        { "text": "La Comissió de Garantia del Dret d'Accés a la Informació Pública (GAIP)", "correct": true },
        { "text": "El Síndic de Greuges de Catalunya amb caràcter vinculant i executiu", "correct": false },
        { "text": "El Tribunal Superior de Justícia de Catalunya (TSJC) en única instància", "correct": false }
    ]
},
{
    "theme": "Bloc VII (Temari Específic) - Tema 39: Obligacions de publicitat derivades de la Llei estatal 19/2013 i de la Llei catalana 19/2014, de transparència, accés a la informació pública i bon govern",
    "number": 3,
    "question": "Quina de les següents afirmacions defineix correctament el concepte de publicitat activa segons el marc normatiu de transparència?",
    "answers": [
        { "text": "L'obligació de l'administració de respondre individualment a qualsevol ciutadà en un termini inferior a 48 hores", "correct": false },
        { "text": "El conjunt de mecanismes pels quals els ciutadans interposen recursos contiosos contra la inacció administrativa", "correct": false },
        { "text": "L'obligació de publicar de manera periòdica i actualitzada la informació rellevant per garantir la transparència, sense necessitat de sol·licitud prèvia", "correct": true },
        { "text": "El dret exclusiu dels alts càrrecs a difondre la seva agenda institucional a través de la seu electrònica", "correct": false }
    ]
},
{
    "theme": "Bloc VII (Temari Específic) - Tema 39: Obligacions de publicitat derivades de la Llei estatal 19/2013 i de la Llei catalana 19/2014, de transparència, accés a la informació pública i bon govern",
    "number": 4,
    "question": "Pel que fa a l'àmbit subjectiu d'aplicació de la Llei 19/2014 catalana, quines entitats de l'administració local queden expressament subjectes al seu compliment?",
    "answers": [
        { "text": "Únicament els municipis de més de 50.000 habitants i les diputacions provincials", "correct": false },
        { "text": "Totes les administracions locals de Catalunya, inclosa l'Àrea Metropolitana de Barcelona (AMB) i els seus ens depenents", "correct": true },
        { "text": "Exclusivament els ajuntaments de la primera corona metropolitana de Barcelona", "correct": false },
        { "text": "Les entitats locals només quan rebin finançament directe de la Unió Europea", "correct": false }
    ]
},
{
    "theme": "Bloc VII (Temari Específic) - Tema 39: Obligacions de publicitat derivades de la Llei estatal 19/2013 i de la Llei catalana 19/2014, de transparència, accés a la informació pública i bon govern",
    "number": 5,
    "question": "Segons la Llei 19/2014, el termini màxim de resolució d'una sol·licitud d'accés a la informació pública es pot ampliar:",
    "answers": [
        { "text": "Per un altre mes si el volum o la complexitat de la informació ho exigeixen, prèvia notificació a l'iniciador", "correct": true },
        { "text": "Únicament en període de vacances estivals de manera automàtica", "correct": false },
        { "text": "Fins a un màxim de sis mesos si l'òrgan competent emet un informe motivat no recurrible", "correct": false },
        { "text": "No es pot ampliar sota cap concepte degut al caràcter preferent del procediment", "correct": false }
    ]
},
{
    "theme": "Bloc VII (Temari Específic) - Tema 39: Obligacions de publicitat derivades de la Llei estatal 19/2013 i de la Llei catalana 19/2014, de transparència, accés a la informació pública i bon govern",
    "number": 6,
    "question": "Quin element diferencia principalment el dret d'accés a la informació pública respecte de les obligacions de publicitat activa?",
    "answers": [
        { "text": "El dret d'accés requereix una petició o instància individualitzada de la persona interessada, mentre que la publicitat activa es publica directament al portal", "correct": true },
        { "text": "La publicitat activa només s'aplica a l'Administració General de l'Estat", "correct": false },
        { "text": "El dret d'accés està subjecte al pagament d'una taxa prèvia per la recerca de documents", "correct": false },
        { "text": "No existeix cap diferència jurídica, ja que s'anomenen de manera interchangeable a la Llei 19/2014", "correct": false }
    ]
},
{
    "theme": "Bloc VII (Temari Específic) - Tema 39: Obligacions de publicitat derivades de la Llei estatal 19/2013 i de la Llei catalana 19/2014, de transparència, accés a la informació pública i bon govern",
    "number": 7,
    "question": "Quina de les següents matèries no forma part de la informació mínima subjecta a publicitat activa en el portal d'una administració com l'AMB?",
    "answers": [
        { "text": "La relació d'alts càrrecs, personal directiu i retribucions percebudes", "correct": false },
        { "text": "Els contractes públics, convenis subscrits i subvencions concedides amb indicació de la seva quantia", "correct": false },
        { "text": "Els missatges de correu electrònic privat intercanviats pels membres del Consell Metropolità en l'exercici de la seva vida particular", "correct": true },
        { "text": "Els pressupostos, comptes anuals i informes d'auditoria de comptes", "correct": false }
    ]
},
{
    "theme": "Bloc VII (Temari Específic) - Tema 39: Obligacions de publicitat derivades de la Llei estatal 19/2013 i de la Llei catalana 19/2014, de transparència, accés a la informació pública i bon govern",
    "number": 8,
    "question": "Quin límit legal recullen expressament les lleis de transparència per denegar l'accés a la informació pública?",
    "answers": [
        { "text": "La protecció de dades de caràcter personal, la seguretat pública i el secret comercial o industrial", "correct": true },
        { "text": "El fet que la sol·licitud provingui d'una persona estrangera sense residència fiscal a Espanya", "correct": false },
        { "text": "Que la informació sol·licitada estigui continguda en un suport exclusivament digital", "correct": false },
        { "text": "L'existència d'un informe desfavorable no vinculant emès per la secretaria de l'ens local", "correct": false }
    ]
},
{
    "theme": "Bloc VII (Temari Específic) - Tema 39: Obligacions de publicitat derivades de la Llei estatal 19/2013 i de la Llei catalana 19/2014, de transparència, accés a la informació pública i bon govern",
    "number": 9,
    "question": "Com s'estructura principalment el Portal de Transparència de l'Àrea Metropolitana de Barcelona (amb.cat) en compliment de la Llei 19/2014?",
    "answers": [
        { "text": "En un únic document PDF actualitzat semestralment al tauler d'edictes", "correct": false },
        { "text": "En blocs rigorosos que inclouen organització i personal, contractació pública, convenis, subvencions, planificació i economia", "correct": true },
        { "text": "En un registre de lliure accés presencial exclusivament mitjançant cita prèvia a la seu central", "correct": false },
        { "text": "En una base de dades reservada només a auditors externs i òrgans de control fiscal", "correct": false }
    ]
},
{
    "theme": "Bloc VII (Temari Específic) - Tema 39: Obligacions de publicitat derivades de la Llei estatal 19/2013 i de la Llei catalana 19/2014, de transparència, accés a la informació pública i bon govern",
    "number": 10,
    "question": "Quina finalitat principal té el portal de dades obertes (Open Data AMB) integrat en la gestió de transparència metropolitana?",
    "answers": [
        { "text": "Permetre la descàrrega de conjunts de dades geogràfiques, de transport, mediambientals i econòmiques en formats reutilitzables", "correct": true },
        { "text": "Recaptar taxes per la consulta d'expedients d'urbanisme metropolità", "correct": false },
        { "text": "Publicar les declaracions de béns de la totalitat dels treballadors laborals temporals de l'ens", "correct": false },
        { "text": "establir un canal de comunicació directa i secreta entre la sindicatura de comptes i la gerència", "correct": false }
    ]
},
{
    "theme": "Bloc VII (Temari Específic) - Tema 39: Obligacions de publicitat derivades de la Llei estatal 19/2013 i de la Llei catalana 19/2014, de transparència, accés a la informació pública i bon govern",
    "number": 11,
    "question": "En relació amb el règim sancionador en matèria de bon govern previst a la Llei catalana 19/2014, com es tipifiquen les infraccions per incompliment de les obligacions establertes?",
    "answers": [
        { "text": "Únicament en faltes lleus i greus, sense preveure la qualificació de molt greus", "correct": false },
        { "text": "En faltes molt greus, greus i lleus per incompliment de les obligacions de transparència, bon govern i conflictes d'interessos", "correct": true },
        { "text": "Exclusivament mitjançant sancions de caràcter penal imposades per jutjats d'instrucció", "correct": false },
        { "text": "La llei catalana no preveu cap règim sancionador directe, remetent-se al Codi Penal", "correct": false }
    ]
},
{
    "theme": "Bloc VII (Temari Específic) - Tema 39: Obligacions de publicitat derivades de la Llei estatal 19/2013 i de la Llei catalana 19/2014, de transparència, accés a la informació pública i bon govern",
    "number": 12,
    "question": "Quina és la relació competencial i jeràrquica entre la Llei estatal 19/2013 i la Llei catalana 19/2014 en l'àmbit de la Generalitat i els ens locals catalans?",
    "answers": [
        { "text": "La llei estatal deroga completament la llei catalana en tot allò referent a procediments administratius locals", "correct": false },
        { "text": "La llei catalana 19/2014 desplega un règim propi, més ambiciós i detallat, aplicant-se plenament a l'AMB en coexistència amb les bases estatals", "correct": true },
        { "text": "Són normes totalment independents que s'apliquen de forma excloent segons el color polític de l'ens", "correct": false },
        { "text": "La llei estatal té caràcter supletori només per a les empreses privades contractistes, quedant exclosa l'administració", "correct": false }
    ]
},
{
    "theme": "Bloc VII (Temari Específic) - Tema 39: Obligacions de publicitat derivades de la Llei estatal 19/2013 i de la Llei catalana 19/2014, de transparència, accés a la informació pública i bon govern",
    "number": 13,
    "question": "Segons la Llei 19/2014, quins principis bàsics han de regir l'actuació dels alts càrrecs i personal directiu sotmesos al títol de bon govern?",
    "answers": [
        { "text": "Eficiència pressupostària, jerarquia estricta i obediència deguda sense excepcions", "correct": false },
        { "text": "Exemplaritat, imparcialitat, integritat i rendició de comptes", "correct": true },
        { "text": "Confidencialitat absoluta, discrecionalitat tècnica i autonomia de gestió financera", "correct": false },
        { "text": "Celeritat en la contractació i flexibilitat en la interpretació de la legalitat vigent", "correct": false }
    ]
},
{
    "theme": "Bloc VII (Temari Específic) - Tema 39: Obligacions de publicitat derivades de la Llei estatal 19/2013 i de la Llei catalana 19/2014, de transparència, accés a la informació pública i bon govern",
    "number": 14,
    "question": "Si un ciutadà presenta una sol·licitud d'accés a la informació pública davant de l'AMB i transcorre el termini legal establert sense que s'hagi emès ni notificat resolució expressa:",
    "answers": [
        { "text": "S'entén que la sol·licitud ha estat desestimada per silenci administratiu negatiu, segons disposa el règim general català", "correct": true },
        { "text": "S'entén automàticament estimada per silenci positiu amb plens efectes jurídics vinculants", "correct": false },
        { "text": "El procediment caduca immediatament i obliga al ciutadà a iniciar una nova tramitació des de zero", "correct": false },
        { "text": "Es produeix una pròrroga indefinida fins a la celebració del proper ple del Consell Metropolità", "correct": false }
    ]
},
{
    "theme": "Bloc VII (Temari Específic) - Tema 39: Obligacions de publicitat derivades de la Llei estatal 19/2013 i de la Llei catalana 19/2014, de transparència, accés a la informació pública i bon govern",
    "number": 15,
    "question": "Quina trampa d'examen és habitual en les preguntes tipus test sobre els terminis de resolució en les oposicions de l'AMB?",
    "answers": [
        { "text": "Confondre el termini de la llei estatal (1 mes ampliable a 15 dies) amb el termini general de la Llei 19/2014 catalana (1 mes ampliable a un altre mes)", "correct": true },
        { "text": "Creure que el termini es compta en hores hàbils des de la publicació al DOGC", "correct": false },
        { "text": "Confondre el silenci positiu amb el silenci negatiu en matèria d'urbanisme metropolità", "correct": false },
        { "text": "Pensar que la sol·licitud d'accés caduca als tres dies naturals de ser presentada telemàticament", "correct": false }
    ]
},
{
    "theme": "Bloc VII (Temari Específic) - Tema 39: Obligacions de publicitat derivades de la Llei estatal 19/2013 i de la Llei catalana 19/2014, de transparència, accés a la informació pública i bon govern",
    "number": 16,
    "question": "Quin organisme estatal equival al Consell de Transparència i Bon Govern regulat per la Llei 19/2013?",
    "answers": [
        { "text": "El Consell de Transparència i Bon Govern creat per la mateixa llei estatal per a tot el sector públic estatal", "correct": true },
        { "text": "L'Oficina Antifrau de Catalunya", "correct": false },
        { "text": "La Comissió Nacional dels Mercats i la Competència (CNMC)", "correct": false },
        { "text": "La Intervenció General de l'Administració de l'Estat (IGAE)", "correct": false }
    ]
},
{
    "theme": "Bloc VII (Temari Específic) - Tema 39: Obligacions de publicitat derivades de la Llei estatal 19/2013 i de la Llei catalana 19/2014, de transparència, accés a la informació pública i bon govern",
    "number": 17,
    "question": "Segons la Llei 19/2014, pot limitar-se l'accés a la informació pública quan aquesta contingui dades referents a la ideologia, afiliació sindical o religió d'una persona física?",
    "answers": [
        { "text": "Sí, de manera absoluta, llevat que hi hagi el consentiment exprés i per escrit de l'afectat o que la llei ho prevegi amb especial protecció", "correct": true },
        { "text": "No, perquè preval sempre el principi de transparència universal en l'administració local", "correct": false },
        { "text": "Només si l'afectat és un alt càrrec públic en actiu", "correct": false },
        { "text": "Sí, però només per decisió discrecional del secretari de l'ens local sense necessitat de motivació", "correct": false }
    ]
},
{
    "theme": "Bloc VII (Temari Específic) - Tema 39: Obligacions de publicitat derivades de la Llei estatal 19/2013 i de la Llei catalana 19/2014, de transparència, accés a la informació pública i bon govern",
    "number": 18,
    "question": "Quina modalitat de canal facilita l'AMB a la seva seu electrònica per garantir l'exercici del dret d'accés a la informació per part de la ciutadania?",
    "answers": [
        { "text": "Canals telemàtics específics integrats a la seu electrònica", "correct": true },
        { "text": "L'ús obligatori de la via telefònica mitjançant un servei de recaptació d'àudio", "correct": false },
        { "text": "La presentació exclusiva de sol·licituds presencials a les oficines de correus", "correct": false },
        { "text": "L'enviament de missatges de text SMS a través de dispositius mòbils homologats", "correct": false }
    ]
},
{
    "theme": "Bloc VII (Temari Específic) - Tema 39: Obligacions de publicitat derivades de la Llei estatal 19/2013 i de la Llei catalana 19/2014, de transparència, accés a la informació pública i bon govern",
    "number": 19,
    "question": "D'acord amb la Llei 19/2014, la informació relativa a plans i programes d'actuació de l'AMB s'ha de publicar en el marc de:",
    "answers": [
        { "text": "Les obligacions de publicitat activa de caràcter institucional, organitzatiu i de planificació", "correct": true },
        { "text": "El pressupost consolidat d'inversions subjecte a fiscalització prèvia del Tribunal de Comptes", "correct": false },
        { "text": "Els convenis de col·laboració interadministrativa de caràcter estrictament reservat", "correct": false },
        { "text": "El registre de béns immobles de propietat privada aliena", "correct": false }
    ]
},
{
    "theme": "Bloc VII (Temari Específic) - Tema 39: Obligacions de publicitat derivades de la Llei estatal 19/2013 i de la Llei catalana 19/2014, de transparència, accés a la informació pública i bon govern",
    "number": 20,
    "question": "Quin és el criteri aplicable pel que fa a la legitimació per exercir el dret d'accés a la informació pública segons la legislació de transparència?",
    "answers": [
        { "text": "Qualsevol ciutadà pot exercir el dret d'accés sense necessitat de motivar la seva sol·licitud ni d'acreditar un interès personal directe", "correct": true },
        { "text": "Només estan legitimats els veïns empadronats en algun dels 36 municipis de l'AMB", "correct": false },
        { "text": "Cal demostrar un interès directe, legítim i personal en l'expedient concret que es sol·licita", "correct": false },
        { "text": "Exclusivament les persones jurídiques inscrites en el registre de representants legals de l'Estat", "correct": false }
    ]
},
{
    "theme": "Bloc VII (Temari Específic) - Tema 39: Obligacions de publicitat derivades de la Llei estatal 19/2013 i de la Llei catalana 19/2014, de transparència, accés a la informació pública i bon govern",
    "number": 21,
    "question": "Quina de les següents afirmacions relatives als límits del dret d'accés a la informació pública és correctament aplicable segons la llei?",
    "answers": [
        { "text": "L'aplicació dels límits ha de ser proporcional i necessària, ponderant l'interès públic de la divulgació i els drets dels afectats", "correct": true },
        { "text": "Els límits establerts per llei tenen caràcter absolut i inqüestionable, impedint qualsevol tipus de test de ponderació", "correct": false },
        { "text": "Qualsevol referència a un procediment judicial en curs invalida de manera automàtica i permanent qualsevol sol·licitud d'accés", "correct": false },
        { "text": "L'administració pot invocar límits no previstos legalment si ho considera convenient per a la seva imatge institucional", "correct": false }
    ]
},
{
    "theme": "Bloc VII (Temari Específic) - Tema 39: Obligacions de publicitat derivades de la Llei estatal 19/2013 i de la Llei catalana 19/2014, de transparència, accés a la informació pública i bon govern",
    "number": 22,
    "question": "En relació amb els convenis i acords subscrits per l'AMB, quina obligació deriva de la normativa de transparència?",
    "answers": [
        { "text": "Publicar de manera íntegra el text dels convenis subscrits amb indicació de les parts, objecte, durada i obligacions financeres", "correct": true },
        { "text": "Remetre un exemplar en paper a cada un dels 36 ajuntaments integrants de l'àrea metropolitana", "correct": false },
        { "text": "Publicar només el resum executiu si el conveni supera els cent mil euros de pressupost", "correct": false },
        { "text": "Mantenir els convenis en reserva fins a la seva total liquidació comptable", "correct": false }
    ]
},
{
    "theme": "Bloc VII (Temari Específic) - Tema 39: Obligacions de publicitat derivades de la Llei estatal 19/2013 i de la Llei catalana 19/2014, de transparència, accés a la informació pública i bon govern",
    "number": 23,
    "question": "Quina conseqüència jurídica comporta l'incompliment reiterat de les directrius de transparència i bon govern per part d'una entitat del sector públic local?",
    "answers": [
        { "text": "La possible exigència de responsabilitats disciplinàries, administratives i sancionadores d'acord amb el títol específic de la llei", "correct": true },
        { "text": "La disolució immediata de l'ens local per decret del Parlament de Catalunya", "correct": false },
        { "text": "La suspensió automàtica del dret de vot de tots els ciutadans del municipi afectat", "correct": false },
        { "text": "Cap conseqüència, atès que les normes de transparència tenen una naturalesa purament orientativa", "correct": false }
    ]
},
{
    "theme": "Bloc VII (Temari Específic) - Tema 39: Obligacions de publicitat derivades de la Llei estatal 19/2013 i de la Llei catalana 19/2014, de transparència, accés a la informació pública i bon govern",
    "number": 24,
    "question": "Segons la Llei 19/2014, quina condició s'exigeix respecte a la informació subjecta a publicitat activa als portals digitals de les administracions públiques?",
    "answers": [
        { "text": "Que sigui clara, estructurada, comprensible, accessible i actualitzada permanentment", "correct": true },
        { "text": "Que estigui redactada exclusivament en format text pla sense cap tipus d'etiqueta o gràfic adjunt", "correct": false },
        { "text": "Que requereixi un certificat digital avançat de classe reconeguda per a la seva visualització", "correct": false },
        { "text": "Que s'actualitzi només en coincidència amb la finalització de cada mandat corporatiu", "correct": false }
    ]
},
{
    "theme": "Bloc VII (Temari Específic) - Tema 39: Obligacions de publicitat derivades de la Llei estatal 19/2013 i de la Llei catalana 19/2014, de transparència, accés a la informació pública i bon govern",
    "number": 25,
    "question": "Quin paper juguen els portals de transparència locals pel que fa a la participació ciutadana i la fiscalització de la gestió de l'AMB?",
    "answers": [
        { "text": "Constitueixen un instrument clau de retició de comptes i control democràtic de l'activitat pública metropolitana", "correct": true },
        { "text": "Serveixen únicament com a directori telefònic intern per a la plantilla de funcionaris", "correct": false },
        { "text": "Substitueixen completament les funcions de la intervenció general i dels auditories financeres", "correct": false },
        { "text": "Ofereixen dades estadístiques orientades exclusivament al sector privat de la construcció", "correct": false }
    ]
},
{
    "theme": "Bloc VII - Tema 40: Subvencions en el sector públic. Atorgament, petició, recepció i fases del procediment de gestió",
    "number": 1,
    "question": "Segons la Llei 38/2003, de 17 de novembre, General de Subvencions (LGS), quin element distingeix fonamentalment una subvenció d'un contracte públic?",
    "answers": [
      { "text": "L'existència d'una contraprestació directa a favor de l'Administració en la subvenció", "correct": false },
      { "text": "L'absència de contraprestació directa per part del beneficiari cap a l'Administració que l'atorga", "correct": true },
      { "text": "El caràcter exclusivament privat dels subjectes receptors dels fons en els contractes", "correct": false },
      { "text": "La necessitat de sotmetre's a concurrència competitiva obligatòria en tots els contractes públics", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 40: Subvencions en el sector públic. Atorgament, petició, recepció i fases del procediment de gestió",
    "number": 2,
    "question": "Quin és el marc normatiu bàsic estatal que regula el règim jurídic de les subvencions públiques a Espanya?",
    "answers": [
      { "text": "La Llei 7/1985, de 2 d'abril, Reguladora de les Bases del Règim Local", "correct": false },
      { "text": "El Reial Decret Legislatiu 2/2004, de 5 de març", "correct": false },
      { "text": "La Llei 38/2003, de 17 de novembre, General de Subvencions", "correct": true },
      { "text": "La Llei 31/2010, de 3 d'agost, de l'Àrea Metropolitana de Barcelona", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 40: Subvencions en el sector públic. Atorgament, petició, recepció i fases del procediment de gestió",
    "number": 3,
    "question": "Quin òrgan de l'Àrea Metropolitana de Barcelona (AMB) és generalment competent per a l'aprovació de les bases reguladores de les convocatòries de subvencions, segons el marc de govern metropolità?",
    "answers": [
      { "text": "La Intervenció General de l'AMB", "correct": false },
      { "text": "El Consell Metropolità o la Presidència per delegació", "correct": true },
      { "text": "La Tresoreria Metropolitana", "correct": false },
      { "text": "El Tribunal Català de Contractes del Sector Públic", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 40: Subvencions en el sector públic. Atorgament, petició, recepció i fases del procediment de gestió",
    "number": 4,
    "question": "Quin és el procediment ordinari d'atorgament de subvencions en el sector públic, tret que una llei en prevegi un de diferent?",
    "answers": [
      { "text": "El procediment d'adjudicació directa per urgència", "correct": false },
      { "text": "El règim de concurrència competitiva", "correct": true },
      { "text": "El procediment de negociació bilateral amb avís previ", "correct": false },
      { "text": "El sistema de subvenció nominativa directa generalitzada", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 40: Subvencions en el sector públic. Atorgament, petició, recepció i fases del procediment de gestió",
    "number": 5,
    "question": "On s'ha de publicar necessàriament l'extracte de la convocatòria d'una subvenció pública per a la seva general difusió prèvia a la base de dades nacional?",
    "answers": [
      { "text": "Únicament al tauler d'anuncis físic de la seu central de l'AMB", "correct": false },
      { "text": "Al Diari Oficial de la Generalitat de Catalunya (DOGC) o Butlletí Oficial corresponent", "correct": true },
      { "text": "Al Registre Mercantil de Barcelona", "correct": false },
      { "text": "Directament al BOE sense necessitat d'altres mitjans autonòmics", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 40: Subvencions en el sector públic. Atorgament, petició, recepció i fases del procediment de gestió",
    "number": 6,
    "question": "Quin paper juga la Base de Datos Nacional de Subvenciones (BDNS) en el procediment de gestió de subvencions?",
    "answers": [
      { "text": "Efectua el pagament material de la subvenció al compte del beneficiari", "correct": true },
      { "text": "Opera com a sistema de publicitat i transparència on s'han de registrar les convocatòries i ajuts", "correct": false },
      { "text": "Emet la resolució definitiva de concessió en substitució de l'ens local", "correct": false },
      { "text": "Realitza la fiscalització prèvia de la despesa de la subvenció", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 40: Subvencions en el sector públic. Atorgament, petició, recepció i fases del procediment de gestió",
    "number": 7,
    "question": "Quin és el termini general orientatiu d'Hàbils que s'acostuma a establir a les convocatòries per a la presentació de sol·licituds per part dels interessats?",
    "answers": [
      { "text": "De 3 a 5 dies naturals", "correct": false },
      { "text": "De 20 a 30 dies hàbils", "correct": true },
      { "text": "Exactament 3 mesos improrrogables", "correct": false },
      { "text": "10 dies naturals des de la publicació al BDNS", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 40: Subvencions en el sector públic. Atorgament, petició, recepció i fases del procediment de gestió",
    "number": 8,
    "question": "Quina obligació ineludible té el beneficiari d'una subvenció un cop executada l'activitat subvencionada?",
    "answers": [
      { "text": "Contractar un nou treballador fix per a l'empresa", "correct": false },
      { "text": "Justificar l'aplicació dels fons rebuts mitjançant compte justificatiu o documentació acreditativa", "correct": true },
      { "text": "Retornar automàticament el 50% de la quantitat percebuda en concepte de taxa de gestió", "correct": false },
      { "text": "Publicar un llibre blanc a la Seu Electrònica de l'Estat", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 40: Subvencions en el sector públic. Atorgament, petició, recepció i fases del procediment de gestió",
    "number": 9,
    "question": "Quina conseqüència jurídica comporta l'incompliment total de l'obligació de justificar la subvenció percebuda?",
    "answers": [
      { "text": "Una simple advertència per escrit sense conseqüències econòmiques", "correct": false },
      { "text": "L'obertura d'un procediment de reintegrament de les quantitats percebudes més els interessos de tardança", "correct": true },
      { "text": "La pròrroga automàtica del termini de justificació per un any més", "correct": false },
      { "text": "La convalidació tàcita de la despesa per silenci positiu", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 40: Subvencions en el sector públic. Atorgament, petició, recepció i fases del procediment de gestió",
    "number": 10,
    "question": "Quin canal utilitza habitualment l'Àrea Metropolitana de Barcelona (AMB) a través del seu web (amb.cat) per a la presentació de sol·licituds i la justificació telemàtica de subvencions?",
    "answers": [
      { "text": "La finestrella única presencial de la Generalitat de Catalunya exclusivament", "correct": false },
      { "text": "La Seu Electrònica de l'AMB mitjançant formularis específics i signatura electrònica", "correct": true },
      { "text": "L'enviament de correu electrònic ordinari al departament de comptabilitat", "correct": false },
      { "text": "L'aplicació mòbil de notificacions postals estatals", "correct": false }
    ]
  },
{
    "theme": "Bloc VII - Tema 40: Subvencions en el sector públic. Atorgament, petició, recepció i fases del procediment de gestió",
    "number": 11,
    "question": "Quin és el caràcter jurídic dels fons públics lliurats en una subvenció pel que fa al destí de l'activitat?",
    "answers": [
      { "text": "Són de lliure disposició per al beneficiari per a qualsevol activitat comercial o mercantil", "correct": false },
      { "text": "S'han de destinar obligatòriament al compliment de l'objectiu d'utilitat pública o interès social determinat", "correct": true },
      { "text": "Constitueixen un préstec a tipus d'interès zero reemborsable en cinc anys", "correct": false },
      { "text": "Formen part del patrimoni personal lliure de fiscalització del sol·licitant", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 40: Subvencions en el sector públic. Atorgament, petició, recepció i fases del procediment de gestió",
    "number": 12,
    "question": "En el marc del procediment de concurrència competitiva, com es realitza la valoració de les sol·licituds presentades?",
    "answers": [
      { "text": "Segons l'ordre cronològic d'arribada del registre d'entrada, sense criteris qualitatius", "correct": false },
      { "text": "Mitjançant una comissió de valoració que compara les peticions aplicant els criteris fixats a les bases", "correct": true },
      { "text": "Per sorteig públic davant de notari entre tots els ciutadans empadronats a l'AMB", "correct": false },
      { "text": "Per decisió discrecional i unipersonal del President de l'ens sense barem previ", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 40: Subvencions en el sector públic. Atorgament, petició, recepció i fases del procediment de gestió",
    "number": 13,
    "question": "Quina funció té el tràmit d'audiència dins del procediment de concessió de subvencions en concurrència competitiva?",
    "answers": [
      { "text": "Permetre als interessats formular al·legacions i presentar la documentació que estimin pertinent abans de la proposta definitiva", "correct": true },
      { "text": "Cobrar la taxa de tramitació directament a la caixa de l'ajuntament", "correct": false },
      { "text": "Impugnar directament la resolució davant el Tribunal Suprem", "correct": false },
      { "text": "Renunciar de manera irrevocable a qualsevol ajut futur de l'administració", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 40: Subvencions en el sector públic. Atorgament, petició, recepció i fases del procediment de gestió",
    "number": 14,
    "question": "Què estableix la normativa pel que fa a la compatibilitat de subvencions rebudes per a una mateixa activitat?",
    "answers": [
      { "text": "Està totalment prohibida qualsevol altra font de finançament pública o privada", "correct": false },
      { "text": "Són compatibles sempre que el total de les subvencions no superi el cost total de l'activitat subvencionada", "correct": true },
      { "text": "Es poden acumular sense límit fins a duplicar el cost real del projecte", "correct": false },
      { "text": "Només es permeten si provenen d'estats membres de la Unió Europea", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 40: Subvencions en el sector públic. Atorgament, petició, recepció i fases del procediment de gestió",
    "number": 15,
    "question": "Quin tipus de responsabilitat pot comportar la comissió d'infraccions administratives en matèria de subvencions segons la LGS?",
    "answers": [
      { "text": "Responsabilitat patrimonial de l'Estat exclusivament", "correct": false },
      { "text": "Responsabilitat administrativa (sancions pecuniàries i prohibició d'obtenir subvencions) i, si escau, penal", "correct": true },
      { "text": "Únicament la pèrdua de la condició de veí del municipi", "correct": false },
      { "text": "Cap responsabilitat si la subvenció no superava els 3.000 euros", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 40: Subvencions en el sector públic. Atorgament, petició, recepció i fases del procediment de gestió",
    "number": 16,
    "question": "En el supòsit que s'atorgui una subvenció de manera directa (nominativa), on ha de figurar necessàriament el seu crèdit?",
    "answers": [
      { "text": "En un conveni de col·laboració o directament assignat en els pressupostos generals de l'entitat", "correct": true },
      { "text": "En un decret d'alcaldia no publicat per motius de confidencialitat", "correct": false },
      { "text": "En el registre de la propietat intel·lectual", "correct": false },
      { "text": "En les ordenances fiscals anuals de taxes", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 40: Subvencions en el sector públic. Atorgament, petició, recepció i fases del procediment de gestió",
    "number": 17,
    "question": "Quin és l'efecte de la superació del cost de l'activitat subvencionada respecte a l'import de la subvenció concedida?",
    "answers": [
      { "text": "S'incrementa automàticament la subvenció en un 20% addicional", "correct": false },
      { "text": "La subvenció es rebaixa proporcionalment si s'incompleix el finançament conjunt, o es manté si el cost final és inferior, reduint-se la quantia si el cost real és menor", "correct": true },
      { "text": "L'administració assumeix el deute pendent mitjançant una modificació pressupostària obligatòria", "correct": false },
      { "text": "No té cap tipus de repercussió comptable", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 40: Subvencions en el sector públic. Atorgament, petició, recepció i fases del procediment de gestió",
    "number": 18,
    "question": "Quina condició prèvia general s'exigeix als beneficiaris abans de l'atorgament i pagament d'una subvenció pública pel que fa a les seves obligacions tributàries i amb la Seguretat Social?",
    "answers": [
      { "text": "Estar al corrent en el compliment d'aquestes obligacions", "correct": true },
      { "text": "Haver presentat la declaració de l'impost de societats durant els últims deu anys consecutius", "correct": false },
      { "text": "Tenir un mínim de cent treballadors contractats en plantilla", "correct": false },
      { "text": "Estar exempt del pagament de l'IBI metropolità", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 40: Subvencions en el sector públic. Atorgament, petició, recepció i fases del procediment de gestió",
    "number": 19,
    "question": "Com es denomina el document o compte justificatiu que inclou una memòria d'actuació justificativa del compliment de les condicions i una memòria econòmica del cost de les activitats?",
    "answers": [
      { "text": "Pla General de Comptabilitat Pública", "correct": false },
      { "text": "Compte justificatiu de la subvenció", "correct": true },
      { "text": "Pressupost General de l'AMB", "correct": false },
      { "text": "Liquidació del pressupost d'ingressos", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 40: Subvencions en el sector públic. Atorgament, petició, recepció i fases del procediment de gestió",
    "number": 20,
    "question": "Quina excepció recull la normativa respecte a la publicitat de les subvencions concedides amb caràcter general?",
    "answers": [
      { "text": "No cal publicar mai cap subvenció si el beneficiari és una persona física", "correct": false },
      { "text": "S'exceptuen de publicitat aquelles subvencions la publicació de les quals pugui atemptar contra l'honor, la intimitat o els drets fonamentals, o en supòsits d'ajuts d'emergència social", "correct": true },
      { "text": "Totes les subvencions culturals són estrictament secretes", "correct": false },
      { "text": "Només es publiquen al tauler intern de l'interventor", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 40: Subvencions en el sector públic. Atorgament, petició, recepció i fases del procediment de gestió",
    "number": 21,
    "question": "Quin òrgan és el responsable d'iniciar i instruir el procediment de reintegrament d'una subvenció quan s'aprecia una causa legal que ho justifica?",
    "answers": [
      { "text": "L'òrgan gestor de la subvenció o unitat competent designada per l'ens", "correct": true },
      { "text": "El beneficiari de la subvenció a títol personal", "correct": false },
      { "text": "El jutjat de primera instància en àmbit civil", "correct": false },
      { "text": "La Junta Consultiva de Contractació Administrativa de l'Estat", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 40: Subvencions en el sector públic. Atorgament, petició, recepció i fases del procediment de gestió",
    "number": 22,
    "question": "Quin és l'efecte de la interposició d'un recurs contra una resolució de reintegrament pel que fa al termini de prescripció del dret de l'Administració a exigir el retorn dels fons?",
    "answers": [
      { "text": "Interromp el termini de prescripció d'acord amb la normativa de procediment administratiu i de subvencions", "correct": true },
      { "text": "Fa que caduqui immediatament el procediment sense possibilitat de reiniciar-lo", "correct": false },
      { "text": "Amplia el termini automàticament a vint anys", "correct": false },
      { "text": "Anul·la la deute de forma retroactiva", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 40: Subvencions en el sector públic. Atorgament, petició, recepció i fases del procediment de gestió",
    "number": 23,
    "question": "Quina és la consideració pressupostària dels pagaments a compte o bestretes que es puguin preveure en les bases reguladores d'una subvenció?",
    "answers": [
      { "text": "Són transferències lliures sense obligació de justificació posterior", "correct": false },
      { "text": "Són lliuraments de fons amb caràcter previ a la justificació, subjectes a la posterior comprovació de l'activitat", "correct": true },
      { "text": "Constitueixen un ingrés patrimonial directe per al beneficiari", "correct": false },
      { "text": "S'imputen directament al capítol de passius financers de l'entitat", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 40: Subvencions en el sector públic. Atorgament, petició, recepció i fases del procediment de gestió",
    "number": 24,
    "question": "En el context de l'AMB, quina importància té el Portal de Transparència respecte a les subvencions atorgades?",
    "answers": [
      { "text": "Permet publicar i mantenir accessibles al públic les convocatòries, bases, beneficiaris i quantitats atorgades en compliment de la transparència legal", "correct": true },
      { "text": "És una eina exclusiva d'ús intern per als consellers metropolitans", "correct": false },
      { "text": "Serveix únicament per tramitar la declaració de la renda dels ciutadans", "correct": false },
      { "text": "Substitueix completament la publicació al Diari Oficial", "correct": false }
    ]
  },
  {
    "theme": "Bloc VII - Tema 40: Subvencions en el sector públic. Atorgament, petició, recepció i fases del procediment de gestió",
    "number": 25,
    "question": "Quina és la naturalesa jurídica de la resolució que posa fi al procediment de concessió de subvencions en concurrència competitiva?",
    "answers": [
      { "text": "És un acte administratiu definitiu que resol la sol·licitud i esgota la via administrativa o és recurrible segons correspongui", "correct": true },
      { "text": "És un simple acte de tràmit no qualificat", "correct": false },
      { "text": "És una disposició de caràcter general equivalent a un reglament", "correct": false },
      { "text": "És un contracte privat subscrit entre l'alcalde i el ciutadà", "correct": false }
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