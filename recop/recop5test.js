const TEST_ID = "recop5test.js"; 

const questions = [
{
    "theme": "Bloc V - Tema 27: La funció pública local i la seva organització",
    "number": 1,
    "question": "Segons el Reial Decret Legislatiu 5/2015 (TREBEP), quin és el vincle jurídic que caracteritza el personal funcionari de carrera?",
    "answers": [
      { "text": "Un contracte de treball de durada indefinida subjecte a la legislació laboral", "correct": false },
      { "text": "Una relació estatutària regulada pel dret administratiu per a l'exercici de funcions que impliquen autoritat", "correct": true },
      { "text": "Un nomenament temporal basat exclusivament en criteris de confiança política", "correct": false },
      { "text": "Una relació contractual de naturalesa privada i caràcter no permanent", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 27: La funció pública local i la seva organització",
    "number": 2,
    "question": "Quin és el sistema ordinari i general per excel·lència establert per a la provisió de llocs de treball del personal funcionari a l'administració local?",
    "answers": [
      { "text": "La lliure designació amb convocatòria pública per a tots els llocs de l'organització", "correct": false },
      { "text": "El concurs, basat en els principis d'igualtat, mèrit, capacitat i publicitat", "correct": true },
      { "text": "La assignació directa per decret de la presidència de l'ens local", "correct": false },
      { "text": "El torn lliure de mobilitat interadministrativa sense barem de mèrits", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 27: La funció pública local i la seva organització",
    "number": 3,
    "question": "Pel que fa al personal eventual, quina de les següents afirmacions s'ajusta al règim jurídic previst en el TREBEP?",
    "answers": [
      { "text": "Realitza funcions que impliquen l'exercici directe de potestats públiques i autoritat", "correct": false },
      { "text": "Ocupa places reservades de manera permanent dins de la relació de llocs de treball (RLT)", "correct": false },
      { "text": "Només realitza tasques de confiança o assessorament especial, sent el seu cessament automàtic", "correct": true },
      { "text": "S'accedeix a la seva condició mitjançant els sistemes ordinaris d'oposició i concurs-oposició", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 27: La funció pública local i la seva organització",
    "number": 4,
    "question": "Quina conseqüència jurídica comporta la comissió d'una despesa que excedeixi els crèdits autoritzats del pressupost segons la legislació d'hisendes locals?",
    "answers": [
      { "text": "La convalidació automàtica mitjançant una modificació pressupostària de crèdit extraordinari posterior", "correct": false },
      { "text": "La nul·litat de ple dret dels actes, acords i resolucions que infringeixin aquesta limitació", "correct": true },
      { "text": "La conversió de la despesa pressupostària en una obligació no pressupostària exigible a l'exercici següent", "correct": false },
      { "text": "La mera irregularitat no invalidant sempre que existeixi suficiència de tresoreria", "correct": true }
    ]
  },
  {
    "theme": "Bloc V - Tema 27: La funció pública local i la seva organització",
    "number": 5,
    "question": "En el marc de les situacions administratives regulades al TREBEP, quina és la naturalesa de la sanció disciplinària ferma de suspensió de funcions?",
    "answers": [
      { "text": "Implica la pèrdua definitiva de la condició de funcionari de carrera i la baixa en el registre", "correct": false },
      { "text": "Comporta la privació temporal de l'exercici de funcions i de les retribucions corresponents sense perdre la condició", "correct": true },
      { "text": "Situa automàticament el funcionari en una excedència voluntària per interès particular", "correct": false },
      { "text": "Transforma la relació estatutària en una relació de personal laboral temporal", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 27: La funció pública local i la seva organització",
    "number": 6,
    "question": "Quin òrgan de l'Àrea Metropolitana de Barcelona (AMB) té atribucions per aprovar inicialment el pressupost general de l'entitat?",
    "answers": [
      { "text": "La Comissió Especial de Comptes a proposta de la Intervenció General", "correct": false },
      { "text": "El Consell Metropolità a proposta del president de l'entitat", "correct": true },
      { "text": "La Junta de Govern en virtut de la delegació permanent de competències econòmiques", "correct": false },
      { "text": "El Departament d'Economia i Finances de la Generalitat de Catalunya", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 27: La funció pública local i la seva organització",
    "number": 7,
    "question": "Quina fase de l'execució del pressupost de despeses es defineix com l'acte pel qual s'acorda la realització d'una despesa a càrrec d'un crèdit pressupostari determinat sense sobrepassar-ne l'import?",
    "answers": [
      { "text": "El reconeixement de l'obligació", "correct": false },
      { "text": "L'ordenació de pagament", "correct": false },
      { "text": "L'autorització de la despesa", "correct": true },
      { "text": "La disposició o compromís de despesa", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 27: La funció pública local i la seva organització",
    "number": 8,
    "question": "Quin és el percentatge únic i màxim legal establert per a l'establiment del recàrrec metropolità sobre l'Impost sobre Béns Immobles (IBI) a l'àmbit de l'AMB?",
    "answers": [
      { "text": "Un 0,2% de la base imposable", "correct": true },
      { "text": "Un 0,5% de la quota líquida", "correct": false },
      { "text": "Un 1% del valor cadastral total", "correct": false },
      { "text": "Un 2% de la base liquidable", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 27: La funció pública local i la seva organització",
    "number": 9,
    "question": "Segons l'estructura econòmica del pressupost de despeses de les entitats locals, en quin capítol es consignen les despeses derivades de les remuneracions del personal?",
    "answers": [
      { "text": "Capítol 2", "correct": false },
      { "text": "Capítol 1", "correct": true },
      { "text": "Capítol 4", "correct": false },
      { "text": "Capítol 6", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 27: La funció pública local i la seva organització",
    "number": 10,
    "question": "Quina és la data límit legalment establerta perquè les entitats locals hagin de confeccionar la liquidació del seu pressupost de l'exercici anterior?",
    "answers": [
      { "text": "El 31 de desembre", "correct": false },
      { "text": "El 31 de gener", "correct": false },
      { "text": "L'1 de març", "correct": true },
      { "text": "El 1 de juny", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 27: La funció pública local i la seva organització",
    "number": 11,
    "question": "Quin principi pressupostari estableix que els ingressos i les despeses s'han d'aplicar al pressupost pel seu import íntegre, sense que es puguin atendre obligacions mitjançant la minoració de drets?",
    "answers": [
      { "text": "El principi d'especialitat qualitativa", "correct": false },
      { "text": "El principi de no afectació", "correct": false },
      { "text": "El principi de pressupost brut o universalitat", "correct": true },
      { "text": "El principi d'equilibri financer inicial", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 27: La funció pública local i la seva organització",
    "number": 12,
    "question": "Dins de la classificació econòmica del pressupost de despeses, on es comptabilitzen les despeses destinades a l'amortització del deute i dels préstecs contrets?",
    "answers": [
      { "text": "En el Capítol 3 (despeses financeres)", "correct": false },
      { "text": "En el Capítol 8 (actius financers)", "correct": false },
      { "text": "En el Capítol 9 (passius financers)", "correct": true },
      { "text": "En el Capítol 7 (transferències de capital)", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 27: La funció pública local i la seva organització",
    "number": 13,
    "question": "Quina de les següents opcions constitueix una causa legal de pèrdua de la condició de funcionari de carrera segons el TREBEP?",
    "answers": [
      { "text": "La imposició d'una sanció disciplinària ferma de suspensió de funcions", "correct": false },
      { "text": "La renúncia a la condició de funcionari acceptada expressament per l'administració", "correct": true },
      { "text": "La declaració en situació administrativa d'excedència voluntària per interès particular", "correct": false },
      { "text": "El nomenament temporal per a l'exercici de càrrecs de lliure designació", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 27: La funció pública local i la seva organització",
    "number": 14,
    "question": "Quin és el caràcter jurídic que l'ordenament atribueix a les previsions contingudes en l'estat d'ingressos del pressupost local?",
    "answers": [
      { "text": "Tenen caràcter limitatiu i vinculant de manera absoluta", "correct": false },
      { "text": "Tenen caràcter de meres previsions o estimacions comptables sense efecte limitatiu de la quantia", "correct": true },
      { "text": "Constitueixen crèdits obligatoris ampliables per acord de la junta de govern", "correct": false },
      { "text": "Tenen rang de norma reglamentària amb força de llei de desplegament", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 27: La funció pública local i la seva organització",
    "number": 15,
    "question": "Què es produeix automàticament si en iniciar-se l'exercici econòmic no hagués entrat en vigor el nou pressupost general de l'entitat local?",
    "answers": [
      { "text": "La paralització total de l'activitat administrativa i la suspensió de contractes fins a la seva aprovació", "correct": false },
      { "text": "La pròrroga automàtica del pressupost de l'any anterior en els seus crèdits inicials", "correct": true },
      { "text": "L'aprovació provisional directa per part de la delegació del govern de l'Estat", "correct": false },
      { "text": "La convalidació de tots els crèdits extraordinaris de l'exercici precedent com a ordinaris", "correct": true }
    ]
  },
  {
    "theme": "Bloc V - Tema 27: La funció pública local i la seva organització",
    "number": 16,
    "question": "Quin element de la classificació funcional i per programes del pressupost de despeses indica la política de despesa (segon dígit)?",
    "answers": [
      { "text": "El primer dígit de l'estructura", "correct": false },
      { "text": "El segon dígit de l'estructura per programes", "correct": true },
      { "text": "El codi d'aplicació econòmica a cinc dígits", "correct": false },
      { "text": "La classificació orgànica de l'ens gestor", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 27: La funció pública local i la seva organització",
    "number": 17,
    "question": "Quina condició temporal regeix per a l'entrada en vigor de les ordenances fiscals modificades de les entitats locals?",
    "answers": [
      { "text": "Entren en vigor de manera retroactiva des del dia 1 de gener de l'any anterior", "correct": false },
      { "text": "Han d'haver estat publicades íntegrament en el BOP abans del 31 de desembre precedent", "correct": true },
      { "text": "Són executives des del mateix moment de la seva aprovació en sessió plenària", "correct": false },
      { "text": "Requereixen una moratòria de trenta dies naturals posteriors a la seva publicació", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 27: La funció pública local i la seva organització",
    "number": 18,
    "question": "Quina fase de l'execució del pressupost de despeses representa l'operació de contreure en comptes els crèdits exigibles contra l'entitat per haver-se acreditat la prestació?",
    "answers": [
      { "text": "L'autorització", "correct": false },
      { "text": "La disposició", "correct": false },
      { "text": "El reconeixement de l'obligació", "correct": true },
      { "text": "L'ordenació de pagament", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 27: La funció pública local i la seva organització",
    "number": 19,
    "question": "Com es denominen els recursos obtinguts per l'Administració al pressupost d'ingressos derivats de la venda d'actius financers i reintegraments de préstecs?",
    "answers": [
      { "text": "Capítol 6: Alienació d'inversions reals", "correct": false },
      { "text": "Capítol 8: Variació d'actius financers", "correct": true },
      { "text": "Capítol 9: Variació de passius financers", "correct": false },
      { "text": "Capítol 3: Ingressos patrimonials", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 27: La funció pública local i la seva organització",
    "number": 20,
    "question": "Quin òrgan municipal o metropolità té atribuïdes legalment les funcions d'ordenació de pagaments, sense perjudici de la possibilitat de crear unitats específiques?",
    "answers": [
      { "text": "La Intervenció General de l'ens", "correct": false },
      { "text": "El president de l'entitat local", "correct": true },
      { "text": "El tresorer municipal per delegació perpètua", "correct": false },
      { "text": "El secretari general de la corporació", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 27: La funció pública local i la seva organització",
    "number": 21,
    "question": "Què configuren conjuntament les obligacions reconegudes i liquidades no satisfetes l'últim dia de l'exercici, els drets pendents de cobrament i els fons líquids?",
    "answers": [
      { "text": "El resultat pressupostari de l'exercici corrent", "correct": false },
      { "text": "El romanent de tresoreria de l'entitat local", "correct": true },
      { "text": "El fons de contingència d'execució pressupostària", "correct": false },
      { "text": "El conjunt de despeses no financeres de capital", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 27: La funció pública local i la seva organització",
    "number": 22,
    "question": "Segons la normativa pressupostària, quin caràcter tenen les consignacions de crèdit consignades en l'estat de despeses del pressupost?",
    "answers": [
      { "text": "Caràcter orientatiu i merament estimatiu per a la gestió departamental", "correct": false },
      { "text": "Caràcter limitatiu i vinculant, no podent-se adquirir compromisos superiors", "correct": true },
      { "text": "Caràcter variable subjecte a la recaptació efectiva dels ingressos tributaris", "correct": false },
      { "text": "Caràcter potestatiu per a les despeses corrents i limitatiu per a les d'inversió", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 27: La funció pública local i la seva organització",
    "number": 23,
    "question": "Quin tràmit s'ha de seguir obligatòriament un cop aprovat inicialment el pressupost general per part del Ple de l'AMB?",
    "answers": [
      { "text": "La seva remissió immediata al Tribunal de Comptes europeu per a fiscalització prèvia", "correct": false },
      { "text": "L'exposició al públic prèvia publicació d'un anunci al Butlletí Oficial de la Província (BOP) durant 15 dies", "correct": true },
      { "text": "L'entrada en vigor automàtica sense necessitat de cap tipus de publicació addicional", "correct": false },
      { "text": "La convalidació per referèndum entre el personal funcionari de la corporació", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 27: La funció pública local i la seva organització",
    "number": 24,
    "question": "En relació amb els ingressos de dret públic de l'AMB, on s'inclouen els recursos derivats de l'ús privatiu o aprofitament especial del domini públic?",
    "answers": [
      { "text": "En el Capítol 1 d'impostos directes", "correct": false },
      { "text": "En el Capítol 3 de taxes, venda de béns i serveis i altres ingressos", "correct": true },
      { "text": "En el Capítol 5 d'ingressos patrimonials de dret privat", "correct": false },
      { "text": "En el Capítol 4 de transferències corrents", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 27: La funció pública local i la seva organització",
    "number": 25,
    "question": "Quin principi pressupostari garanteix que cadascun dels pressupostos que s'integren en el pressupost general s'ha d'aprovar sense desequilibri negatiu inicial?",
    "answers": [
      { "text": "El principi d'especialitat quantitativa", "correct": false },
      { "text": "El principi d'anualitat pressupostària", "correct": false },
      { "text": "El principi d'equilibri pressupostari", "correct": true },
      { "text": "El principi de no afectació dels recursos", "correct": false }
    ]
  },
  {
    "theme": "Bloc V (Temari Específic) - Tema 28: La contractació administrativa en l'esfera local",
    "number": 1,
    "question": "Segons la Llei 9/2017 de Contractes del Sector Públic (LCSP), quin és el llindar màxim actual (IVA exclòs) per a considerar un contracte d'obres com a contracte menor en l'àmbit de l'AMB?",
    "answers": [
      { "text": "15.000 €", "correct": false },
      { "text": "30.000 €", "correct": false },
      { "text": "40.000 €", "correct": true },
      { "text": "50.000 €", "correct": false }
    ]
  },
  {
    "theme": "Bloc V (Temari Específic) - Tema 28: La contractació administrativa en l'esfera local",
    "number": 2,
    "question": "Quin òrgan té la consideració d'òrgan de contractació ordinari en l'àmbit de les entitats locals d'acord amb la legislació vigent?",
    "answers": [
      { "text": "El Ple de la Corporació", "correct": false },
      { "text": "L'alcalde o president", "correct": true },
      { "text": "La Intervenció General", "correct": false },
      { "text": "La Junta Consultiva de Contractació Administrativa", "correct": false }
    ]
  },
  {
    "theme": "Bloc V (Temari Específic) - Tema 28: La contractació administrativa en l'esfera local",
    "number": 3,
    "question": "Quina de les següents prerrogatives ostenta l'Administració en relació amb els contractes públics segons l'article 190 de la LCSP?",
    "answers": [
      { "text": "La interpretació unilateral del contracte i la modificació per raons d'interès públic", "correct": true },
      { "text": "Modificar el preu del contracte de manera retroactiva sense justificació", "correct": false },
      { "text": "Delegar la potestat sancionadora directament en el contractista", "correct": false },
      { "text": "Resoldre el contracte de forma arbitral sense sotmetre's a cap procediment", "correct": false }
    ]
  },
  {
    "theme": "Bloc V (Temari Específic) - Tema 28: La contractació administrativa en l'esfera local",
    "number": 4,
    "question": " Quin és el llindar màxim (IVA exclòs) establert per a la tramitació dels contractes menors de serveis i subministraments?",
    "answers": [
      { "text": "6.000 €", "correct": false },
      { "text": "15.000 €", "correct": true },
      { "text": "18.030,36 €", "correct": false },
      { "text": "40.000 €", "correct": false }
    ]
  },
  {
    "theme": "Bloc V (Temari Específic) - Tema 28: La contractació administrativa en l'esfera local",
    "number": 5,
    "question": "Com es realitza actualment la presentació d'ofertes per part dels licitadors en els procediments de contractació de l'AMB?",
    "answers": [
      { "text": "Presencialment en registre general en format paper per duplicat", "correct": false },
      { "text": "Mitjançant correu certificat urgent amb avís de recepció", "correct": true },
      { "text": "Exclusivament de manera telemàtica a través del servei de licitació electrònica de l'AMB", "correct": false },
      { "text": "A través de fax homologat amb signatura electrònica avançada", "correct": false }
    ]
  },
  {
    "theme": "Bloc V (Temari Específic) - Tema 28: La contractació administrativa en l'esfera local",
    "number": 6,
    "question": "Quin element caracteritza específicament un contracte de concessió de serveis enfront del contracte de serveis?",
    "answers": [
      { "text": "La transferència del risc operatiu al concessionari", "correct": true },
      { "text": "Que el preu el paga íntegrament l'Administració sense assumir cap risc l'empresa", "correct": false },
      { "text": "Que el termini de durada no pot excedir en cap cas els dos anys", "correct": false },
      { "text": "Que no està sotmès a la LCSP sinó a dret privat", "correct": false }
    ]
  },
  {
    "theme": "Bloc V (Temari Específic) - Tema 28: La contractació administrativa en l'esfera local",
    "number": 7,
    "question": "Quina afirmació és correctament aplicable sobre la naturalesa jurídica dels contractes menors en l'àmbit local?",
    "answers": [
      { "text": "S'adjudiquen directament a qualsevol empresari amb capacitat d'obrar i aptitud", "correct": true },
      { "text": "Requereixen necessàriament la publicitat prèvia d'un mes al Diari Oficial de la Generalitat", "correct": false },
      { "text": "Obliguen a convocar un concurs obert amb concurrència competitiva", "correct": false },
      { "text": "No necessiten cap tipus de factura ni justificació de l'inici del servei", "correct": false }
    ]
  },
  {
    "theme": "Bloc V (Temari Específic) - Tema 28: La contractació administrativa en l'esfera local",
    "number": 8,
    "question": "Quin principi rector de la contractació pública garanteix que no hi hagi discriminació ni tracte de favor cap a cap licitador?",
    "answers": [
      { "text": "El principi de discrecionalitat tècnica", "correct": false },
      { "text": "El principi d'igualtat de tracte i no-discriminació", "correct": true },
      { "text": "El principi de romanent de tresoreria afectat", "correct": false },
      { "text": "El principi d'autonomia financera local", "correct": false }
    ]
  },
  {
    "theme": "Bloc V (Temari Específic) - Tema 28: La contractació administrativa en l'esfera local",
    "number": 9,
    "question": "On es publiquen oficialment les licitacions d'obres, serveis i subministraments de l'AMB, juntament amb els PCAP i PPT?",
    "answers": [
      { "text": "Al Tauler d'Anuncis intern exclusiu de Recursos Humans", "correct": false },
      { "text": "Al Perfil del Contractista de l'AMB integrat amb les plataformes de contractació pública", "correct": true },
      { "text": "Només al Butlletí Oficial de l'Estat en edició impresa", "correct": false },
      { "text": "En un arxiu físic dipositat a la Tresoreria municipal", "correct": false }
    ]
  },
  {
    "theme": "Bloc V (Temari Específic) - Tema 28: La contractació administrativa en l'esfera local",
    "number": 10,
    "question": "Quin dret assisteix al contractista en cas de demora en el pagament per part de l'Administració un cop superats els terminis legals?",
    "answers": [
      { "text": "Dret al cobrament d'interessos de demora i a la indemnització pels costos de cobrament, i fins i tot a la suspensió del contracte", "correct": true },
      { "text": "Dret a rescindir de manera immediata la corporació local sense preavís", "correct": false },
      { "text": "Dret a apropiar-se dels béns mobles de l'entitat pública afectats", "correct": false },
      { "text": "Cap dret, ja que l'Administració gaudeix d'immunitat total en pagaments", "correct": false }
    ]
  },
  {
    "theme": "Bloc V (Temari Específic) - Tema 28: La contractació administrativa en l'esfera local",
    "number": 11,
    "question": "Què signifiquen les sigles PCAP en la documentació que regeix un contracte públic?",
    "answers": [
      { "text": "Plec de Clàusules Administratives Particulars", "correct": true },
      { "text": "Programa Comptable d'Anàlisi Pressupostària", "correct": false },
      { "text": "Pla de Contractació anual per a Pobles", "correct": false },
      { "text": "Procediment Concursal d'Adjudicació provisional", "correct": false }
    ]
  },
  {
    "theme": "Bloc V (Temari Específic) - Tema 28: La contractació administrativa en l'esfera local",
    "number": 12,
    "question": "A què es refereix el concepte de 'ius variandi' en el context de la contractació administrativa?",
    "answers": [
      { "text": "A la facultat de l'Administració de modificar unilateralment el contracte per raons d'interès públic", "correct": true },
      { "text": "Al dret del contractista de variar els preus de mercat a voluntat", "correct": false },
      { "text": "A l'obligació de canviar de proveïdor cada trimestre natural", "correct": false },
      { "text": "A la variació lliure de les condicions laborals de la plantilla del contractista", "correct": false }
    ]
  },
  {
    "theme": "Bloc V (Temari Específic) - Tema 28: La contractació administrativa en l'esfera local",
    "number": 13,
    "question": "Quin tipus de contracte té com a objecte principal la realització de treballs de construcció o enginyeria civil?",
    "answers": [
      { "text": "Contracte de subministraments", "correct": false },
      { "text": "Contracte de serveis", "correct": false },
      { "text": "Contracte d'obres", "correct": true },
      { "text": "Contracte especial de col·laboració", "correct": false }
    ]
  },
  {
    "theme": "Bloc V (Temari Específic) - Tema 28: La contractació administrativa en l'esfera local",
    "number": 14,
    "question": "Quina és una de les obligacions essencials i deures del contractista durant l'execució del contracte?",
    "answers": [
      { "text": "L'execució estricta sota la seva responsabilitat i subjecció als terminis fixats", "correct": true },
      { "text": "Modificar el projecte tècnic segons el seu criteri personal", "correct": false },
      { "text": "Subcontractar la totalitat de les prestacions sense autorització prèvia", "correct": false },
      { "text": "Eximir l'Administració de qualsevol responsabilitat davant de tercers", "correct": false }
    ]
  },
  {
    "theme": "Bloc V (Temari Específic) - Tema 28: La contractació administrativa en l'esfera local",
    "number": 15,
    "question": "Com s'anomena el document que detalla les prescripcions tècniques particulars que han de regir la realització de la prestació?",
    "answers": [
      { "text": "PPT (Plec de Prescripcions Tècniques)", "correct": true },
      { "text": "PAE (Pla d'Actuació Econòmica)", "correct": false },
      { "text": "PAC (Plec d'Acreditació de Comptes)", "correct": false },
      { "text": "PTP (Pressupost Territorial Parcial)", "correct": false }
    ]
  },
  {
    "theme": "Bloc V (Temari Específic) - Tema 28: La contractació administrativa en l'esfera local",
    "number": 16,
    "question": "Quina conseqüència jurídica comporta la superació dels crèdits pressupostaris en matèria de despeses contractuals?",
    "answers": [
      { "text": "La nul·litat de ple dret dels actes, acords i resolucions que incompleixin aquesta limitació", "correct": true },
      { "text": "La convalidació tàcita automàtica pel Departament d'Hisenda", "correct": false },
      { "text": "La conversió de la despesa en un crèdit ampliable de caràcter extraordinari", "correct": false },
      { "text": "L'aprovació d'una modificació de crèdit per transferència de tipus positiu", "correct": false }
    ]
  },
  {
    "theme": "Bloc V (Temari Específic) - Tema 28: La contractació administrativa en l'esfera local",
    "number": 17,
    "question": "Quin dels següents contractes es considera regulat per la LCSP pel que fa a l'adquisició o lloguer de productes o béns mobles?",
    "answers": [
      { "text": "Contracte de subministraments", "correct": true },
      { "text": "Contracte de concessió d'ús privatiu de domini públic", "correct": false },
      { "text": "Contracte de gestió de serveis per via de patronat", "correct": false },
      { "text": "Contracte d'assistència tècnica financera", "correct": false }
    ]
  },
  {
    "theme": "Bloc V (Temari Específic) - Tema 28: La contractació administrativa en l'esfera local",
    "number": 18,
    "question": "Quina és la consideració dels contractes relatius a prestacions de fer consistents en el desenvolupament d'una activitat o resultats diferents d'obres o subministraments?",
    "answers": [
      { "text": "Contractes de serveis", "correct": true },
      { "text": "Contractes mixtos de col·laboració públic-privada", "correct": false },
      { "text": "Contractes privats innominats", "correct": false },
      { "text": "Concessions administratives de domini", "correct": false }
    ]
  },
  {
    "theme": "Bloc V (Temari Específic) - Tema 28: La contractació administrativa en l'esfera local",
    "number": 19,
    "question": "Quina prohibició afecta directament el contractista pel que fa a la cessió dels drets i deures derivats del contracte?",
    "answers": [
      { "text": "Prohibició de cessió sense l'autorització prèvia i expressa de l'òrgan de contractació", "correct": true },
      { "text": "Prohibició absoluta de subcontractar cap part, encara que sigui menor del 10%", "correct": false },
      { "text": "Prohibició de cobrar mitjançant transferència bancària estrangera", "correct": false },
      { "text": "Prohibició d'utilitzar materials homologats per la Unió Europea", "correct": false }
    ]
  },
  {
    "theme": "Bloc V (Temari Específic) - Tema 28: La contractació administrativa en l'esfera local",
    "number": 20,
    "question": "Quin és l'objectiu principal de la publicitat i la transparència en els procediments de licitació de l'AMB?",
    "answers": [
      { "text": "Garantir la llibertat d'accés a les licitacions i la concurrència competitiva", "correct": true },
      { "text": "Recaptar tributs locals de manera coactiva abans de l'adjudicació", "correct": false },
      { "text": "Evitar que s'hi presentin empreses de fora de la comunitat autònoma", "correct": false },
      { "text": "Permetre que l'alcalde triï directament qualsevol empresa sense justificar-ho", "correct": false }
    ]
  },
  {
    "theme": "Bloc V (Temari Específic) - Tema 28: La contractació administrativa en l'esfera local",
    "number": 21,
    "question": "En relació amb els contractes menors, quina trampa o error freqüent s'ha d'evitar a l'examen?",
    "answers": [
      { "text": "Creure que requereixen un procediment obert amb publicitat i concurrència competitiva", "correct": true },
      { "text": "Pensar que mai no poden superar l'import de 1.000 euros", "correct": false },
      { "text": "Suposar que només es poden aplicar a contractes d'assistència jurídica", "correct": false },
      { "text": "Considerar que no necessiten cap tipus de consignació pressupostària prèvia", "correct": false }
    ]
  },
  {
    "theme": "Bloc V (Temari Específic) - Tema 28: La contractació administrativa en l'esfera local",
    "number": 22,
    "question": "Quina funció compleix el sistema de facturació electrònica en la gestió dels contractes de subministraments i serveis de l'AMB?",
    "answers": [
      { "text": "Donar compliment estricte a la llei d'impuls de la factura electrònica i registre comptable", "correct": true },
      { "text": "Permetre el pagament en metàl·lic directament a la caixa de l'ens metropolità", "correct": false },
      { "text": "Eximir el contractista de presentar el certificat d'estar al corrent de les obligacions tributàries", "correct": false },
      { "text": "Eliminar la necessitat de comptabilitzar les obligacions reconegudes", "correct": false }
    ]
  },
  {
    "theme": "Bloc V (Temari Específic) - Tema 28: La contractació administrativa en l'esfera local",
    "number": 23,
    "question": "Quin òrgan de les entitats locals pot tenir competències exclusives per a contractes que superin determinats llindars o percentatges del pressupost, en contrast amb l'alcalde?",
    "answers": [
      { "text": "El Ple de la Corporació", "correct": true },
      { "text": "El Jutjat de Guàrdia Contenciós", "correct": false },
      { "text": "La Junta de Personal Funcionari", "correct": false },
      { "text": "El Síndic de Greuges", "correct": false }
    ]
  },
  {
    "theme": "Bloc V (Temari Específic) - Tema 28: La contractació administrativa en l'esfera local",
    "number": 24,
    "question": "Quina és la naturalesa de les normes contingudes en la LCSP respecte a l'actuació de les entitats locals i ens públics com l'AMB?",
    "answers": [
      { "text": "Constitueixen la legislació bàsica estatal de contractes del sector públic aplicable a totes les administracions", "correct": true },
      { "text": "Són meres recomanacions de caràcter voluntari i no vinculant", "correct": false },
      { "text": "Regulen exclusivament l'activitat de les empreses privades sense vinculació pública", "correct": false },
      { "text": "Són ordenances fiscals pròpies de cada municipi integrat a l'AMB", "correct": false }
    ]
  },
  {
    "theme": "Bloc V (Temari Específic) - Tema 28: La contractació administrativa en l'esfera local",
    "number": 25,
    "question": "Quin dret econòmic específic té reconegut el contractista quan es produeixen alteracions imprevisibles que trenquen l'economia del contracte?",
    "answers": [
      { "text": "El dret a mantenir l'equilibri financer del contracte", "correct": true },
      { "text": "El dret a duplicar automàticament els beneficis industrials sense autorització", "correct": false },
      { "text": "El dret a percebre subvencions de capital a fons perdut de la Unió Europea", "correct": false },
      { "text": "El dret a eximir-se del pagament de l'impost sobre societats", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 29: Competències i serveis metropolitans. El Pla d’Actuació Metropolità vigent",
    "number": 1,
    "question": "Segons la Llei 31/2010, de l'Àrea Metropolitana de Barcelona, quina de les següents afirmacions sobre la naturalesa jurídica de l'AMB és correctament exacta?",
    "answers": [
      { "text": "És una administració pública de caràcter territorial i de cooperació local obligatòria que agrupa 36 municipis", "correct": true },
      { "text": "És una mancomunitat voluntària de municipis amb personalitat jurídica pròpia i de caràcter optatiu", "correct": false },
      { "text": "És un organisme autònom depenent directament de la Generalitat de Catalunya amb competències exclusives en urbanisme", "correct": false },
      { "text": "És una corporació de dret públic de caràcter representatiu sectorial sense potestat tributària pròpia", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 29: Competències i serveis metropolitans. El Pla d’Actuació Metropolità vigent",
    "number": 2,
    "question": "Quines tres entitats històriques prèvies va substituir l'AMB en constituir-se formalment el 21 de juliol de 2011?",
    "answers": [
      { "text": "La Mancomunitat de Municipis, l'Entitat del Medi Ambient i l'Entitat Metropolitana del Transport", "correct": true },
      { "text": "El Consorci Sanitari de Barcelona, l'Entitat del Transport i la Corporació Metropolitana de Barcelona", "correct": false },
      { "text": "La Comissió d'Urbanisme, l'Entitat de Tractament de Residus i la Mancomunitat de Transports", "correct": false },
      { "text": "El Consell Comarcal del Barcelonès, l'Entitat Metropolitana del Medi Ambient i el Consorci de l'Habitatge", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 29: Competències i serveis metropolitans. El Pla d’Actuació Metropolità vigent",
    "number": 3,
    "question": "Quin és l'òrgan polític suprem de govern de l'Àrea Metropolitana de Barcelona (AMB)?",
    "answers": [
      { "text": "El Consell Metropolità", "correct": true },
      { "text": "La Junta de Govern", "correct": false },
      { "text": "La Comissió de Govern Local", "correct": false },
      { "text": "El Ple de la Generalitat", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 29: Competències i serveis metropolitans. El Pla d’Actuació Metropolità vigent",
    "number": 4,
    "question": "Pel que fa al finançament i la potestat tributària de l'AMB, quin límit legal i percentual màxim s'estableix per al recàrrec metropolità sobre l'Impost sobre Béns Immobles (IBI)?",
    "answers": [
      { "text": "Un percentatge únic i màxim del 0,2% de la base imposable[cite: 2]", "correct": true },
      { "text": "Un recàrrec variable de fins al 0,5% segons l'acord del Consell Metropolità", "correct": false },
      { "text": "Un tipus fix del 1% sobre la quota líquida de l'impost municipal", "correct": false },
      { "text": "L'AMB no té potestat per establir recàrrecs sobre l'IBI, només sobre taxes de residus", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 29: Competències i serveis metropolitans. El Pla d’Actuació Metropolità vigent",
    "number": 5,
    "question": "Quin és l'instrument estratègic i de planificació superior de l'AMB que defineix les línies polítiques, objectius, programes i inversions prioritàries per a cada mandat corporatiu?",
    "answers": [
      { "text": "El Pla d'Actuació Metropolità (PAM)", "correct": true },
      { "text": "El Pla General Metropolità (PGM)", "correct": false },
      { "text": "El Programa d'Inversions Municipals (PIM)", "correct": false },
      { "text": "El Pla director urbanístic metropolità (PDUM)", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 29: Competències i serveis metropolitans. El Pla d’Actuació Metropolità vigent",
    "number": 6,
    "question": "Segons la normativa aplicable a l'AMB, a quin òrgan correspont l'aprovació del Pla d'Actuació Metropolità (PAM)?",
    "answers": [
      { "text": "Al Consell Metropolità a proposta de la Junta de Govern", "correct": true },
      { "text": "Exclusivament a la Presidència de l'AMB mitjançant decret", "correct": false },
      { "text": "Al Departament de Territori de la Generalitat de Catalunya", "correct": false },
      { "text": "A la Comissió d'Economia i Hisenda de l'ens metropolità", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 29: Competències i serveis metropolitans. El Pla d’Actuació Metropolità vigent",
    "number": 7,
    "question": "Quin article del Text Refós de la Llei Reguladora de les Hisendes Locals (TRLRHL) preveu expressament la possibilitat que les àrees metropolitanes estableixin un recàrrec sobre l'IBI?",
    "answers": [
      { "text": "L'article 153.1.a)[cite: 2]", "correct": true },
      { "text": "L'article 134.2", "correct": false },
      { "text": "L'article 185.3", "correct": false },
      { "text": "L'article 169.6", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 29: Competències i serveis metropolitans. El Pla d’Actuació Metropolità vigent",
    "number": 8,
    "question": "Quin és el nombre exacte de municipis que integren l'Àrea Metropolitana de Barcelona (AMB)?",
    "answers": [
      { "text": "36 municipis[cite: 2]", "correct": true },
      { "text": "32 municipis", "correct": false },
      { "text": "40 municipis", "correct": false },
      { "text": "28 municipis", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 29: Competències i serveis metropolitans. El Pla d’Actuació Metropolità vigent",
    "number": 9,
    "question": "Dins de l'àmbit de la mobilitat i el transport, quina de les següents competències correspon directament a l'AMB?",
    "answers": [
      { "text": "La gestió del transport públic col·lectiu de superfície (autobusos metropolitans, TMB, NitBus) i el taxi metropolità", "correct": true },
      { "text": "La titularitat i gestió de la xarxa de Rodalies de Catalunya i trens regionals", "correct": false },
      { "text": "L'atorgament de les llicències de transport de mercaderies per carretera a nivell estatal", "correct": false },
      { "text": "La gestió exclusiva dels peatges de les autopistes de la conurbació de Barcelona", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 29: Competències i serveis metropolitans. El Pla d’Actuació Metropolità vigent",
    "number": 10,
    "question": "En matèria de medi ambient i cicle de l'aigua, quines competències exerceix l'AMB?",
    "answers": [
      { "text": "El tractament i valorització de residus municipals, la depuració d'aigües residuals i el subministrament d'aigua en alta", "correct": true },
      { "text": "La gestió directa de les conques hidrogràfiques i embassaments de Catalunya", "correct": false },
      { "text": "L'establiment de la tarifa domèstica de l'aigua en baixa per a cada un dels abonats particulars", "correct": false },
      { "text": "La inspecció de les centrals nuclears i instal·lacions radioactives del territori metropolità", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 29: Competències i serveis metropolitans. El Pla d’Actuació Metropolità vigent",
    "number": 11,
    "question": "Quin instrument urbanístic històric de caràcter supramunicipal gestiona l'AMB en l'àmbit del territori i l'urbanisme?",
    "answers": [
      { "text": "El Pla General Metropolità (PGM)", "correct": true },
      { "text": "El Pla Territorial General de Catalunya (PTGC)", "correct": false },
      { "text": "El Pla d'Ordenació Urbanística Municipal (POUM) de Barcelona", "correct": false },
      { "text": "El Pla Director d'Infraestructures (PDI)", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 29: Competències i serveis metropolitans. El Pla d’Actuació Metropolità vigent",
    "number": 12,
    "question": "Quina llei regula específicament l'Àrea Metropolitana de Barcelona (AMB)?",
    "answers": [
      { "text": "La Llei 31/2010, del 3 de juliol", "correct": true },
      { "text": "La Llei 7/1985, reguladora de les bases del règim local", "correct": false },
      { "text": "El Decret legislatiu 2/2003, de la Llei municipal i de règim local de Catalunya", "correct": false },
      { "text": "La Llei 2/2012, d'estabilitat pressupostària", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 29: Competències i serveis metropolitans. El Pla d’Actuació Metropolità vigent",
    "number": 13,
    "question": "A través de quin portal oficial de l'AMB es pot realitzar el seguiment i la rendició de comptes de l'estat d'execució del Pla d'Actuació Metropolità (PAM)?",
    "answers": [
      { "text": "A través del portal web corporatiu amb.cat", "correct": true },
      { "text": "A través de la seu electrònica de la Generalitat de Catalunya (gencat.cat)", "correct": false },
      { "text": "A través del portal de transparència de l'Administració de l'Estat", "correct": false },
      { "text": "A través del registre telemàtic de la Diputació de Barcelona", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 29: Competències i serveis metropolitans. El Pla d’Actuació Metropolità vigent",
    "number": 14,
    "question": "Quina trampa d'examen s'ha d'evitar en distingir entre el Pla d'Actuació Metropolità (PAM) i el Pla General Metropolità (PGM)?",
    "answers": [
      { "text": "Que el PAM és el pla estratègic i de mandat global de l'ens metropolità, mentre que el PGM és l'instrument d'ordenació urbanística territorial vigent", "correct": true },
      { "text": "Que el PAM és un instrument exclusivament urbanístic i el PGM és un document pressupostari", "correct": false },
      { "text": "Que ambdós plans tenen exactament el mateix contingut jurídic i s'aproven anualment pel Ple", "correct": false },
      { "text": "Que el PGM depèn de la Generalitat i el PAM és competència exclusiva dels ajuntaments de manera independent", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 29: Competències i serveis metropolitans. El Pla d’Actuació Metropolità vigent",
    "number": 15,
    "question": "Quina població aproximada agrupa l'àmbit territorial de l'AMB?",
    "answers": [
      { "text": "Una població superior als 3,2 milions d'habitants", "correct": true },
      { "text": "Exactament 1,5 milions d'habitants", "correct": false },
      { "text": "Entorn de 7 milions d'habitants", "correct": false },
      { "text": "Menys de 800.000 habitants", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 29: Competències i serveis metropolitans. El Pla d’Actuació Metropolità vigent",
    "number": 16,
    "question": "A banda dels serveis històrics obligatoris, quines polítiques transversals desenvolupa l'AMB en l'àmbit de la cohesió social i l'economia?",
    "answers": [
      { "text": "La promoció de parc públic d'habitatge social, ajudes a la rehabilitació d'edificis i el foment de l'activitat econòmica i l'ocupació local", "correct": true },
      { "text": "La creació i gestió directa de centres d'atenció primària (CAP) i hospitals comarcals", "correct": false },
      { "text": "L'exclusiva competència en la recaptació de l'Impost sobre la Renda de les Persones Físiques (IRPF)", "correct": false },
      { "text": "La planificació i disseny dels plans d'estudi de secundària i formació professional", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 29: Competències i serveis metropolitans. El Pla d’Actuació Metropolità vigent",
    "number": 17,
    "question": "Com s'aplica legalment la base imposable del recàrrec metropolità sobre l'IBI segons l'article 41 de la Llei 31/2010?",
    "answers": [
      { "text": "Ha de recaure sobre el valor cadastral que constitueix la base imposable de dit impost de forma conjunta amb aquest", "correct": true },
      { "text": "S'aplica directament sobre els ingressos bruts anuals dels contribuents del municipi", "correct": false },
      { "text": "Es calcula prenent com a referència el consum d'aigua i residus de cada immoble", "correct": false },
      { "text": "S'imposa de manera independent i separada del rebut de l'IBI municipal en un document de cobrament diferent", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 29: Competències i serveis metropolitans. El Pla d’Actuació Metropolità vigent",
    "number": 18,
    "question": "Quin és l'objectiu principal de la potestat tributària i financera que exerceix l'AMB segons l'article 3 de la Llei 31/2010?",
    "answers": [
      { "text": "Fer efectius l'equilibri fiscal i la solidaritat entre els municipis que la integren", "correct": true },
      { "text": "Maximitzar la recaptació per destinar-la a fons de reserva no pressupostaris", "correct": false },
      { "text": "Substituir completament els pressupostos dels 36 ajuntaments membres", "correct": false },
      { "text": "Finançar de manera exclusiva les despeses protocol·làries de l'ens supramunicipal", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 29: Competències i serveis metropolitans. El Pla d’Actuació Metropolità vigent",
    "number": 19,
    "question": "Quina tipologia d'espais públics naturals i costaners gestiona l'AMB dins de les seves competències d'infraestructures i territori?",
    "answers": [
      { "text": "Els parcs metropolitans i les platges de la conurbació", "correct": true },
      { "text": "Els ports de titularitat estatal i les vies navegables interiors", "correct": false },
      { "text": "Els parcs nacionals d'alta muntanya de Catalunya", "correct": false },
      { "text": "Les reserves naturals estrictes de fauna protegida de la Generalitat", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 29: Competències i serveis metropolitans. El Pla d’Actuació Metropolità vigent",
    "number": 20,
    "question": "Quina funció compleix el directori interactiu de serveis disponible al portal web de l'AMB (amb.cat)?",
    "answers": [
      { "text": "Ofereix informació sobre transport (T-Mobilitat, busos), gestió de residus (deixalleries), ordenances fiscals i cartografia urbanística[cite: 2]", "correct": true },
      { "text": "Permet la tramitació directa de la Declaració de la Renda de tots els ciutadans", "correct": false },
      { "text": "Gestiona les borses de treball de la Funció Pública de l'Estat", "correct": false },
      { "text": "Publica les sentències fermes de la jurisdicció contenciosa administrativa", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 29: Competències i serveis metropolitans. El Pla d’Actuació Metropolità vigent",
    "number": 21,
    "question": "Quin tipus d'administració pública és considerada l'AMB en relació amb el règim local català?",
    "answers": [
      { "text": "Una administració pública de caràcter territorial i de cooperació local obligatòria", "correct": true },
      { "text": "Una entitat associativa voluntària de segon grau sense potestat normativa", "correct": false },
      { "text": "Un òrgan de desconcentració territorial de la Diputació de Barcelona", "correct": false },
      { "text": "Una societat mercantil de capital íntegrament públic local", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 29: Competències i serveis metropolitans. El Pla d’Actuació Metropolità vigent",
    "number": 22,
    "question": "Quina és la relació competencial entre els ajuntaments integrants i l'AMB pel que fa als serveis metropolitans essencials?",
    "answers": [
      { "text": "L'AMB exerceix competències pròpies en grans àrees supramunicipals per garantir l'eficàcia i eficiència en la prestació de serveis públics", "correct": true },
      { "text": "Els ajuntaments mantenen la competència exclusiva i l'AMB només té un paper consultiu no vinculant", "correct": false },
      { "text": "L'AMB assumeix la totalitat de les competències municipals, suprimint els ajuntaments", "correct": false },
      { "text": "L'AMB només pot actuar si rep una delegació expressa i temporal de la Generalitat per a cada servei", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 29: Competències i serveis metropolitans. El Pla d’Actuació Metropolità vigent",
    "number": 23,
    "question": "En relació amb la tramitació pressupostària i de planificació, quin àmbit temporal abasta habitualment un Pla d'Actuació Metropolità (PAM)?",
    "answers": [
      { "text": "Cada mandat corporatiu", "correct": true },
      { "text": "Un període improrrogable de deu anys", "correct": false },
      { "text": "Únicament un any natural coincident amb l'exercici pressupostari", "correct": false },
      { "text": "Una legislatura de cinc anys segons la normativa europea", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 29: Competències i serveis metropolitans. El Pla d’Actuació Metropolità vigent",
    "number": 24,
    "question": "Quin òrgan de l'AMB elabora la proposta o impuls inicial per a l'aprovació del Pla d'Actuació Metropolità pel Consell Metropolità?",
    "answers": [
      { "text": "La Junta de Govern", "correct": true },
      { "text": "La Sindicatura de Comptes", "correct": false },
      { "text": "La Intervenció General de l'AMB", "correct": false },
      { "text": "El Consell de Col·legis de Secretaris", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 29: Competències i serveis metropolitans. El Pla d’Actuació Metropolità vigent",
    "number": 25,
    "question": "Quin aspecte destaca en la gestió dels polígons d'activitat industrial i econòmica dins de les polítiques de l'AMB?",
    "answers": [
      { "text": "El foment de l'activitat econòmica, el suport a la innovació i el desenvolupament de programes d'ocupació local", "correct": true },
      { "text": "La recaptació directa de l'Impost de Societats de les empreses instal·lades", "correct": false },
      { "text": "La titularitat privada de la propietat de sòl industrial per part de l'ens metropolità", "correct": false },
      { "text": "L'exclusiva competència sancionadora en matèria de legislació laboral de los treballadors", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 1,
    "question": "Segons l'article 118 de la Llei 9/2017, de 8 de novembre, de Contractes del Sector Públic (LCSP), quin és el llindar màxim quantitatiu (sense IVA) per considerar un contracte d'obres com a contracte menor?",
    "answers": [
      { "text": "Inferior a 15.000 euros", "correct": false },
      { "text": "Inferior a 40.000 euros", "correct": true },
      { "text": "Igual o inferior a 50.000 euros IVA inclòs", "correct": false },
      { "text": "Inferior a 18.000 euros", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 2,
    "question": "Quin és el llindar màxim quantitatiu (sense IVA) establert per la LCSP per als contractes de serveis i subministraments perquè puguin tramitar-se com a contracte menor?",
    "answers": [
      { "text": "Inferior a 15.000 euros", "correct": true },
      { "text": "Inferior a 40.000 euros", "correct": false },
      { "text": "Inferior a 18.000 euros", "correct": false },
      { "text": "Inferior a 30.000 euros", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 3,
    "question": "Quina documentació mínima exigeix la tramitació simplificada d'un expedient de contracte menor segons la normativa de contractació pública?",
    "answers": [
      { "text": "Plecs de clàusules administratives particulars i tres ofertes de diferents proveïdors obligatòriament", "correct": false },
      { "text": "L'aprovació de la despesa i la incorporació de la factura corresponent (i el pressupost d'obra si escau)", "correct": true },
      { "text": "Un procediment obert simplificat amb publicitat al Diari Oficial de la Generalitat", "correct": false },
      { "text": "Informe jurídic previ de secretaria i fiscalització plena de legalitat per part del Tribunal de Comptes", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 4,
    "question": "Segons l'article 118.3 de la LCSP, com afecta la prohibició de fraccionament a la contractació menor?",
    "answers": [
      { "text": "Permet dividir els contractes lliurement sempre que cada fracció no superi el pressupost anual del departament", "correct": false },
      { "text": "No es pot fraccionar un contracte amb l'objecte de disminuir la seva quantia i eludir així els requisits de publicitat o el procediment d'adjudicació que correspongui", "correct": true },
      { "text": "Només està prohibit en contractes d'obres majors de 100.000 euros", "correct": false },
      { "text": "Permet fraccionar la despesa si compta amb l'autorització prèvia i expressa del Ple de la corporació", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 5,
    "question": "Quin límit addicional s'aplica pel que fa a la relació amb el mateix operador econòmic en els contractes menors de serveis i subministraments?",
    "answers": [
      { "text": "La suma de contractes adjudicats al mateix empresari no pot superar els 60.000 euros anuals", "correct": false },
      { "text": "La suma de contractes adjudicats al mateix empresari no pot superar els límits de serveis/subministraments (15.000€) en prestacions de naturalesa anàloga, excepte incidències imprevistes justificades", "correct": true },
      { "text": "Es poden adjudicar tants contractes menors com desitgi l'òrgan de contractació sense límit quantitatiu agregat", "correct": false },
      { "text": "El límit s'estableix en un màxim de tres contractes menors al mes per proveïdor", "correct": true }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 6,
    "question": "Quin és el principi general pel que fa a la forma dels contractes al sector públic d'acord amb l'article 37 de la LCSP?",
    "answers": [
      { "text": "Llibertat de forma, podent ser tant escrits com verbals segons acord de les parts", "correct": false },
      { "text": "La forma escrita obligatòria, estant radicalment prohibits els contractes verbals amb caràcter general", "correct": true },
      { "text": "La forma verbal per a quanties inferiors a 15.000 euros i escrita només per a obres majors", "correct": false },
      { "text": "L'obligatorietat de signatura electrònica avançada en escriptura pública davant notari", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 7,
    "question": "Quin efecte jurídic provoca la celebració d'un contracte de forma verbal a l'Administració Pública?",
    "answers": [
      { "text": "La mera irregularitat no invalidant subsanable en qualsevol moment", "correct": false },
      { "text": "L'anul·labilitat en el termini de quatre anys", "correct": false },
      { "text": "La nul·litat de ple dret del contracte (excepte en casos d'emergència previstos legalment)", "correct": true },
      { "text": "La convalidació automàtica en incorporar la factura al pressupost de l'exercici següent", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 8,
    "question": "Si es realitza una prestació sota un contracte verbal prohibit, quin mecanisme s'activa per gestionar el pagament de la prestació i evitar l'enriquiment injust de l'Administració?",
    "answers": [
      { "text": "Un procediment ordinari de licitació pública urgent amb concurrència diferida", "correct": false },
      { "text": "Un procediment de liquidació per restituir el valor de les coses o serveis prestats, sense perjudici de les responsabilitats disciplinàries o patrimonials als causants", "correct": true },
      { "text": "Una modificació pressupostària per transferència de crèdit entre capítols", "correct": false },
      { "text": "L'aprovació directa d'una subvenció de compensació per minimització de danys", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 9,
    "question": "Quina obligació de publicitat i transparència s'imposa legalment pel que fa als contractes menors adjudicats?",
    "answers": [
      { "text": "Publicació diària al Butlletí Oficial de l'Estat (BOE)", "correct": false },
      { "text": "Publicació al Perfil del Contractant almenys trimestralment, indicant objecte, import, durada i identitat de l'adjudicatari", "correct": true },
      { "text": "Només cal publicar-los en finalitzar l'exercici pressupostari a la memòria de gestió anual", "correct": false },
      { "text": "No requereixen cap tipus de publicitat en ser contractes menors", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 10,
    "question": "Existeix alguna excepció a l'obligació de publicar trimestralment els contractes menors al Perfil del Contractant?",
    "answers": [
      { "text": "Sí, aquells contractes menors el subministrament o serveis dels quals tinguin caràcter secret o reservat segons la legislació de seguretat", "correct": true },
      { "text": "No, cap contracte menor pot quedar exempt de publicació sota cap concepte", "correct": false },
      { "text": "Sí, tots els contractes menors inferiors a 3.000 euros", "correct": false },
      { "text": "Sí, aquells que s'hagin tramitat durant el mes d'agost per urgència estival", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 11,
    "question": "En relació amb els llindars econòmics dels contractes menors, quina afirmació és correctament aplicable respecte a l'IVA?",
    "answers": [
      { "text": "Els llindars de 40.000€ i 15.000€ inclouen obligatòriament l'impost sobre el valor afegit", "correct": false },
      { "text": "Els llindars quantitatius establerts per la LCSP s'entenen sense incloure l'IVA", "correct": true },
      { "text": "L'IVA s'aplica de forma addicional només si el contracte supera els límits fixats per la normativa europea", "correct": false },
      { "text": "Els contractes menors estan exempts de qualsevol tipus de tributació indirecta per imperatiu legal", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 12,
    "question": "Com gestiona l'Àrea Metropolitana de Barcelona (AMB) la publicitat dels seus contractes menors segons el seu portal corporatiu (amb.cat)?",
    "answers": [
      { "text": "A través del portal corporatiu amb.cat i de la seva Plataforma de Serveis de Contractació Pública (PSCP), publicant les relacions trimestrals detallades", "correct": true },
      { "text": "Mitjançant cartells físics exposats als taulers d'anuncis de cada municipi integrat", "correct": false },
      { "text": "Mitjançant l'enviament postal individualitzat a tots els ciutadans empadronats a l'àrea metropolitana", "correct": false },
      { "text": "Exclusivament a través de les xarxes socials institucionals de l'ens", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 13,
    "question": "Quina directriu interna acostumen a incloure les instruccions de contractació menor de l'AMB per assegurar l'eficiència i la bona gestió de fons públics?",
    "answers": [
      { "text": "Adjudicar directament el contracte al primer proveïdor que truqui a les oficines sense demanar pressupost previ", "correct": false },
      { "text": "Assegurar la pluralitat d'ofertes quan sigui possible, demanant pressupostos a diversos proveïdors per garantir concurrència no formal", "correct": true },
      { "text": "Delegar la selecció del proveïdor en una consultoria externa privada sense control intern", "correct": false },
      { "text": "Prioritzar sempre empreses de fora de l'àmbit metropolità per fomentar la competència global", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 14,
    "question": "Quina és la naturalesa jurídica de l'aprovació de la despesa en un contracte menor d'obres?",
    "answers": [
      { "text": "Un acte definitiu que exhaureix necessàriament la via administrativa davant el Tribunal Suprem", "correct": false },
      { "text": "Una fase de gestió pressupostària i comptable simplificada que habilita la despesa fins a 40.000€ (sense IVA)", "correct": true },
      { "text": "Un conveni col·lectiu subscrit amb la representació sindical del personal laboral", "correct": false },
      { "text": "Una disposició de caràcter general amb rang de llei autonòmica", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 15,
    "question": "Davant d'un examen tipus test de la AMB, si s'afirma que un contracte verbal per import de 200 euros és plenament vàlid per ser d'escassa quantia, com s'ha de qualificar aquesta afirmació?",
    "answers": [
      { "text": "Com a totalment certa perquè s'aplica el principi de lleialtat contractual civil", "correct": false },
      { "text": "Com a falsa, ja que la LCSP sanciona els contractes verbals amb la nul·litat de ple dret (llevat d'emergència), independentment de la quantia", "correct": true },
      { "text": "Com a certa només si compta amb l'autorització telefònica del Síndic de Greuges", "correct": false },
      { "text": "Com a certa si s'emet la factura electrònica posteriorment dins del mateix trimestre", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 16,
    "question": "Quin òrgans de l'AMB tenen la competència general per aprovar les despeses i disposar-ne dins dels límits pressupostaris establerts?",
    "answers": [
      { "text": "El President o el Ple de l'entitat, d'acord amb l'atribució de competències fixada per la normativa vigent", "correct": true },
      { "text": "Exclusivament la Intervenció General de la Generalitat de Catalunya", "correct": false },
      { "text": "El comitè d'empresa dels funcionaris de carrera de l'àrea metropolitana", "correct": false },
      { "text": "Els ciutadans mitjançant pressupostos participatius vinculants", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 17,
    "question": "Quina és la consequència de fragmentar artificialment un contracte de subministraments de 45.000 euros en tres contractes de 15.000 euros cadascun adjudicats al mateix proveïdor?",
    "answers": [
      { "text": "És una pràctica perfectament legal i recomanada per accelerar la gestió administrativa", "correct": false },
      { "text": "Incorre en una prohibició de fraccionament fraudulent (Art. 118.3 LCSP) destinada a eludir els procediments ordinaris de concurrència i publicitat", "correct": true },
      { "text": "Evoluciona automàticament cap a un contracte programa de caràcter plurianual", "correct": false },
      { "text": "Només genera una falta lleu de caràcter intern sense repercussió sobre la validesa dels actes", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 18,
    "question": "En relació amb els contractes menors, quina d'obertura de procediment de concurrència pública s'exigeix amb caràcter general?",
    "answers": [
      { "text": "Un anunci previ al Diari Oficial de la Unió Europea (DOUE)", "correct": true },
      { "text": "Un procediment obert amb un termini mínim de presentació d'ofertes de trenta dies", "correct": false },
      { "text": "Cap procediment de concurrència pública formal, en tractar-se justament d'una modalitat de contractació simplificada", "correct": false },
      { "text": "Una licitació electrònica restringida a un mínim de deu empreses homologades", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 19,
    "question": "Quin document o element esdevé indispensable per justificar i tramitar comptablement un contracte menor de subministraments un cop realitzada la despesa?",
    "answers": [
      { "text": "La factura corresponent emesa pel proveïdor d'acord amb la legislació fiscal i mercantil", "correct": true },
      { "text": "Una escriptura de constitució de societat anònima de capital públic", "correct": false },
      { "text": "Un informe d'auditoria externa emès per una empresa de l'Íbex 35", "correct": false },
      { "text": "Un certificat de suficiència lingüística de nivell C2 de català de l'adjudicatari", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 20,
    "question": "Quin paper juguen les instruccions internes de contractació de l'AMB respecte als límits quantitatius de la LCSP en els contractes menors?",
    "answers": [
      { "text": "Poden ampliar els límits legals de la llei estatal fins a duplicar-los segons convingui al govern local", "correct": false },
      { "text": "Poden establir límits inferiors o mesures de control addicionals i més rigoroses per garantir la transparència, però mai superar els topalls màxims fixats per la LCSP", "correct": true },
      { "text": "Deroguen completament la LCSP dins del territori de la conurbació barcelonina", "correct": false },
      { "text": "Són orientatives i no tenen cap mena de vinculació jurídica per als diferents serveis i gerències", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 21,
    "question": "Quina excepció recull la normativa de contractació pública respecte a la prohibició general de celebrar contractes verbals a l'Administració?",
    "answers": [
      { "text": "Els casos d'emergència o de necessitat urgent previstos legalment on s'actua de manera immediata", "correct": true },
      { "text": "Qualsevol contracte la quantia del qual no superi els 1.000 euros en festius", "correct": false },
      { "text": "Els encàrrecs a mitjans propis realitzats fora de l'horari d'oficina", "correct": false },
      { "text": "No existeix cap excepció possible sota cap circumstància", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 22,
    "question": "Quin és l'objectiu principal de la publicació trimestral dels contractes menors al Perfil del Contractant?",
    "answers": [
      { "text": "Cobrar una taxa administrativa a les empreses adjudicatàries per serveis de registre", "correct": false },
      { "text": "Garantir el control públic, fomentar la transparència i evitar la discrecionalitat excessiva o l'ús abusiu d'aquesta figura", "correct": true },
      { "text": "establir un rànquing competitiu de beneficis empresarials entre proveïdors metropolitans", "correct": false },
      { "text": "Complir un tràmit estadístic de caire optatiu sense repercussió jurídica", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 23,
    "question": "Si un departament de l'AMB encarrega verbalment la reparació urgent d'una canonada trencada que amenaça d'inundar una oficina pública, com s'ha de qualificar aquesta actuació inicial sota la LCSP?",
    "answers": [
      { "text": "Nul·la de ple dret sense cap opció de regularització posterior", "correct": false },
      { "text": "Valenta però constitutiva d'infracció penal directa per malversació", "correct": false },
      { "text": "Emparada excepcionalment sota el règim d'emergència o actuació immediata per catàstrofe o danys imminent, tot i la irregularitat de la forma verbal inicial", "correct": true },
      { "text": "Insubstancial perquè les obres menors de fontaneria no estan subjectes a la LCSP", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 24,
    "question": "Quina dada s'ha d'incloure obligatòriament en les relacions trimestrals de contractes menors publicades per l'AMB al web corporatiu?",
    "answers": [
      { "text": "L'objecte, l'import, la durada i la identitat de l'adjudicatari", "correct": true },
      { "text": "El nombre de treballadors en nòmina de l'empresa proveïdora i la seva situació fiscal detallada", "correct": false },
      { "text": "El currículum vitae dels administradors de l'empresa contractista", "correct": false },
      { "text": "La declaració de la renda personal de l'empresari individual", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 30: La figura del contracte menor. Els contractes verbals a l’administració",
    "number": 25,
    "question": "Quin risc principal pretén combatre la limitació que impedeix adjudicar successius contractes menors de naturalesa anàloga al mateix operador econòmic unçat el llindar legal?",
    "answers": [
      { "text": "L'encobriment de contractes majors o serveis continuats mitjançant l'ús fraudulent i fraccionat de múltiples contractes menors successius", "correct": true },
      { "text": "L'augment excessiu de la inflació en els preus del sector públic local", "correct": false },
      { "text": "La pèrdua d'identitat corporativa dels ens metropolitans", "correct": false },
      { "text": "L'obligació de contractar exclusivament personal funcionari interí", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 1,
    "question": "Segons els principis clàssics de gestió del servei públic, quin principi garanteix que la prestació no pot patir interrupcions injustificades?",
    "answers": [
      { "text": "El principi d'igualtat de tracte", "correct": false },
      { "text": "El principi de continuïtat", "correct": true },
      { "text": "El principi d'adaptabilitat al progrés", "correct": false },
      { "text": "El principi d'obligatorietat", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 2,
    "question": "Dins de les modalitats de gestió dels serveis públics locals recollides a la normativa, com es classifica una societat mercantil local el capital social de la qual pertany íntegrament a l'entitat local?",
    "answers": [
      { "text": "Gestió indirecta mitjançant concessió", "correct": false },
      { "text": "Gestió indirecta a través de societat d'economia mixta", "correct": false },
      { "text": "Gestió directa (modalitat instrumental)", "correct": true },
      { "text": "Gestió mancomunada externa", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 3,
    "question": "Quin és l'element determinant que distingeix el contracte de concessió de serveis respecte al contracte de serveis tradicional en la legislació de contractes del sector públic?",
    "answers": [
      { "text": "L'assumpció del risc operatiu per part de l'empresari", "correct": true },
      { "text": "La durada màxima del contracte, que no pot superar els 4 anys", "correct": false },
      { "text": "El pagament directe pressupostari per part de l'Administració sense tarifes als usuaris", "correct": false },
      { "text": "L'obligatorietat de constituir una societat d'economia mixta", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 4,
    "question": "Segons el portal corporatiu de l'Àrea Metropolitana de Barcelona (amb.cat), quina fórmula s'utilitza habitualment en l'àmbit de la mobilitat i el transport col·lectiu (com TMB)?",
    "answers": [
      { "text": "Exclusivament la concessió administrativa a empreses privades estrangeres sense control públic", "correct": false },
      { "text": "Societats participades i encàrrecs a mitjans propis, combinats amb concessions a operadors externs", "correct": true },
      { "text": "La gestió directa exercida únicament per funcionaris de la Generalitat de Catalunya", "correct": false },
      { "text": "Un règim de monopoli privat total sense intervenció de l'AMB", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 5,
    "question": "Quina exigència prèvia és obligatòria per a qualsevol canvi en la forma de gestió d'un servei públic local o per revertir un servei externalitzats cap a la gestió directa?",
    "answers": [
      { "text": "L'aprovació per unanimitat de tots els grups polítics al Parlament de Catalunya", "correct": false },
      { "text": "L'elaboració d'una memòria econòmica i jurídica que demostri la sostenibilitat, eficiència i avantatge social", "correct": true },
      { "text": "Una consulta popular vinculant obligatòria a tots els municipis de la província", "correct": false },
      { "text": "La publicació prèvia al Boletín Oficial del Estado durant un termini de sis mesos", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 6,
    "question": "En relació amb les formes històriques de gestió indirecta, en què consisteix la anomenada 'gestió interessada'?",
    "answers": [
      { "text": "L'Administració cedeix el servei a canvi d'un cànon fix sense assumir cap resultat", "correct": false },
      { "text": "L'Administració i l'empresari gestionen el servei compartint els resultats ( guanys i pèrdues) de l'explotació", "correct": true },
      { "text": "Un acord de col·laboració gratuïta amb entitats sense ànim de lucre", "correct": false },
      { "text": "La prestació directa per personal interí de l'ens local", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 7,
    "question": "Quin tipus de gestió indirecta s'utilitza freqüentment a l'AMB per a sectors específics com el cicle integral de l'aigua o serveis mediambientals complexos que combinen capital públic i privat?",
    "answers": [
      { "text": "La societat d'economia mixta", "correct": true },
      { "text": "L'organisme autònom local de caràcter purament administratiu", "correct": false },
      { "text": "La fundació privada benèfica", "correct": false },
      { "text": "El concert directe amb particulars sense concurs públic", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 8,
    "question": "Segons la Llei reguladora de les bases del règim local (LBRL), la reserva de serveis a favor de les entitats locals permet:",
    "answers": [
      { "text": "Prohibir qualsevol activitat econòmica privada al territori municipal", "correct": true },
      { "text": "Establir activitats essencials en règim de monopolització o exclusivitat", "correct": false },
      { "text": "Delegar la potestad legislativa en les empreses concessionàries", "correct": false },
      { "text": "Modificar la Constitució Espanyola mitjançant acord plenari", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 9,
    "question": "Quina característica defineix la figura del 'mitjà propi' (in-house providing) aplicada en l'entorn metropolità?",
    "answers": [
      { "text": "És una empresa totalment aliena a l'Administració sense cap control analògic", "correct": false },
      { "text": "És una entitat sotmesa a un control anàleg al que exerceix l'Administració sobre els seus propis serveis", "correct": true },
      { "text": "Requereix necessàriament licitació europea oberta sense excepcions", "correct": false },
      { "text": "Exclou qualsevol participació de capital públic", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 10,
    "question": "En el context de la gestió indirecta de l'AMB, com s'organitzen habitualment serveis supramunicipals com el transport nocturn d'autobús (NitBus)?",
    "answers": [
      { "text": "Mitjançant concessions administratives atorgades a operadors externs sota supervisió de l'AMB", "correct": true },
      { "text": "A través de voluntariat ciutadà no retribuït", "correct": false },
      { "text": "Mitjançant gestió directa exclusiva dels ajuntaments de manera aïllada sense l'AMB", "correct": false },
      { "text": "Per imposició directa del govern central de l'Estat", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 11,
    "question": "Quin principi del servei públic obliga a modificar les condicions de prestació per adequar-les als avanços tècnics i socials?",
    "answers": [
      { "text": "El principi de neutralitat política", "correct": false },
      { "text": "El principi d'adaptabilitat", "correct": true },
      { "text": "El principi de subsidiarietat", "correct": false },
      { "text": "El principi d'intangibilitat pressupostària", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 12,
    "question": "Quina forma de gestió directa es caracteritza per tenir una organització descentralitzada amb personalitat jurídica pròpia i autonomia de gestió per a la prestació de serveis de naturalesa anàloga?",
    "answers": [
      { "text": "La gestió per la pròpia entitat local (servei centralitzat)", "correct": false },
      { "text": "L'organisme autònom local o entitat pública empresarial", "correct": true },
      { "text": "La concessió de serveis clàssica", "correct": false },
      { "text": "El contracte de subministraments generals", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 13,
    "question": "Quina trampa d'examen és habitual respecte a les societats mercantils de capital íntegrament públic en relació amb les formes de gestió?",
    "answers": [
      { "text": "Creure erròniament que pertanyen a la gestió indirecta per tenir forma mercantil", "correct": true },
      { "text": "Pensar que no estan subjectes a cap tipus de control comptable", "correct": false },
      { "text": "Considerar que no poden prestar serveis de transport", "correct": false },
      { "text": "Assumir que depenen directament de la Unió Europea", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 14,
    "question": "Quan l'Administració encomana la prestació d'un servei a una entitat privada amb la qual ja manté contractes de col·laboració assistencial o sanitària sota determinades condicions legals, ens trobem davant de:",
    "answers": [
      { "text": "Un contracte de concessió d'obres públiques", "correct": false },
      { "text": "Una fórmula de concert", "correct": true },
      { "text": "Una municipalització per expropiació", "correct": false },
      { "text": "Un organisme autònom comercial", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 15,
    "question": "Segons la doctrina i la legislació aplicable, quin és el significat del 'risc operatiu' en la concessió de serveis?",
    "answers": [
      { "text": "Que l'empresari assumeix la possibilitat de no recuperar les inversions ni cobrir els costos incorreguts durant l'explotació", "correct": true },
      { "text": "Que l'Administració garanteix un benefici mínim anual fix independentment dels usuaris", "correct": false },
      { "text": "Que el risc de fallida recau exclusivament sobre la Tresoreria General de l'Estat", "correct": false },
      { "text": "Que no existeix cap mena de fluctuació en la demanda del servei", "correct": true }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 16,
    "question": "Quin òrgan de govern de l'Àrea Metropolitana de Barcelona (AMB) és l'encarregat d'aprovar els grans instruments i acords relatius a la gestió dels serveis i pressupostos?",
    "answers": [
      { "text": "El Consell Metropolità", "correct": true },
      { "text": "El Deganat del Col·legi d'Advocats", "correct": false },
      { "text": "La Junta de compensació urbanística", "correct": false },
      { "text": "El Tribunal Econòmic-Administratiu Regional", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 17,
    "question": "Quina característica defineix el principi d'igualtat en la prestació dels serveis públics?",
    "answers": [
      { "text": "Tots els usuaris han de rebre exactament el mateix horari de servei sense excepcions geogràfiques", "correct": false },
      { "text": "Tots els ciutadans en idèntiques condicions tenen dret a accedir i utilitzar el servei públic sense discriminació", "correct": true },
      { "text": "La gratuïtat universal obligatòria per a qualsevol activitat econòmica", "correct": false },
      { "text": "La prohibició de cobrar tarifes diferenciades per motius socials", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 18,
    "question": "Quan una administració local decideix recuperar un servei que estava externalitzat per gestionar-lo directament amb personal propi, quin procés jurídic i material s'està duent a terme?",
    "answers": [
      { "text": "Una privatització d'actius", "correct": false },
      { "text": "Una remunicipalització o reversió del servei", "correct": true },
      { "text": "Una concessió de domini públic", "correct": false },
      { "text": "Una externalització instrumental", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 19,
    "question": "Quin és l'objectiu principal de la memòria justificativa que exigeix la legislació abans d'optar per una forma de gestió indirecta d'un servei públic?",
    "answers": [
      { "text": "Justificar que la gestió privada o indirecta és més eficient i avantatjosa per a l'interès públic que la directa", "correct": true },
      { "text": "establir els sous privats dels consellers delegats de l'empresa", "correct": false },
      { "text": "Eximir l'empresa concessionària de qualsevol inspecció fiscal", "correct": false },
      { "text": "Modificar unilateralment les lleis estatals de pressupostos", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 20,
    "question": "Com s'anomena l'ens públic de caràcter institucional que depèn d'una entidad local i que es rigeix pel dret privat en la seva activitat de producció de béns o prestació de serveis contra preu o tarifa?",
    "answers": [
      { "text": "Una entitat pública empresarial local", "correct": true },
      { "text": "Un organisme autònom de caràcter administratiu pur", "correct": false },
      { "text": "Una societat mercantil de capital privat al 100%", "correct": false },
      { "text": "Una mancomunitat de règim general", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 21,
    "question": "Quina és la naturalesa jurídica de la relació entre l'Administració i l'usuari d'un servei públic de caràcter obligatori o essencial?",
    "answers": [
      { "text": "Una relació de dret privat basada en la lliure concurrència de mercat", "correct": false },
      { "text": "Una relació juridicoadministrativa de prestació i supremacia regulada pel dret públic", "correct": true },
      { "text": "Un contracte de compravenda civil ordinari", "correct": false },
      { "text": "Un pacte col·laboratiu entre iguals sense subjecció a normes", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 22,
    "question": "Quin paper juguen les ordenances i reglaments metropolitans aprovats per l'AMB en relació amb els serveis públics de la seva competència?",
    "answers": [
      { "text": "Regular l'organització, el funcionament i les condicions de prestació i tarifes dels serveis", "correct": true },
      { "text": "Establir els tipus penals i sancions de caràcter presidiari", "correct": false },
      { "text": "Modificar la demarcació territorial dels municipis de tota la comunitat autònoma", "correct": false },
      { "text": "Substituir completament la normativa de la Unió Europea", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 23,
    "question": "Quin tipus de control exerceix l'Administració pública titular sobre el concessionari en un model de gestió indirecta?",
    "answers": [
      { "text": "Un control d'inspecció, direcció i potestat de modificació i sanció per assegurar la correcta prestació del servei", "correct": true },
      { "text": "Cap tipus de control, ja que l'empresa privada gaudeix d'autonomia absoluta de mercat", "correct": false },
      { "text": "Un control estrictament laboral sobre els salaris interns de l'empresa aliena", "correct": false },
      { "text": "Un control judicial previ a través dels jutjats de primera instància", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 24,
    "question": "Dins del marc de la contractació del sector públic, si un contracte implica que l'execució de l'obra o servei es remunera mitjançant el dret d'explotació o aquest dret acompanyat d'un preu, ens trobem davant de:",
    "answers": [
      { "text": "Una concessió (de serveis o d'obres)", "correct": true },
      { "text": "Un contracte menor de subministraments", "correct": false },
      { "text": "Un acord marc de compres centralitzades", "correct": false },
      { "text": "Un conveni de subvenció directa sense contraprestació", "correct": false }
    ]
  },
  {
    "theme": "Bloc V - Tema 31: El servei públic. Formes de gestió del servei públic",
    "number": 25,
    "question": "Quina és una de les conseqüències jurídiques cabdals quan s'atorga la titularitat d'un servei públic a l'Administració mitjançant el principi de reserva?",
    "answers": [
      { "text": "S'exclou la iniciativa privada lliure en aquella activitat excepte quan s'atorgui la corresponent gestió indirecta o autorització", "correct": true },
      { "text": "Es privatitza automàticament tot el sector públic local", "correct": false },
      { "text": "Es suprimeix la necessitat de complir el principi d'estabilització pressupostària", "correct": false },
      { "text": "S'atorga la propietat dels béns personals dels usuaris a l'ajuntament", "correct": false }
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