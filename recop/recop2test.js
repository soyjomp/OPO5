const TEST_ID = "recop2test.js"; 

const questions = [
{
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 1,
    "question": "Segons la Llei 39/2015 i el contingut aplicable a l'AMB, quin caràcter i efecte té generalment el silenci administratiu en les sol·licituds a instància de part?",
    "answers": [
      { "text": "Desestimatori per regla general, excepte en matèria tributària pura", "correct": false },
      { "text": "Estimatori per regla general, excepte en els supòsits expressament previstos com a desestimatoris per una norma amb rang de llei o de Dret de la Unió Europea", "correct": true },
      { "text": "Sempre té caràcter estimatori sense cap tipus d'excepció legal", "correct": false },
      { "text": "Manca de qualsevol efecte jurídic fins que l'òrgan competent dicti una resolució expressa fora de termini", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 2,
    "question": "D'acord amb el règim d'invalideses dels actes administratius, quina de les següents causes determina la nul·litat de ple dret d'un acte[cite: 1]?",
    "answers": [
      { "text": "Qualsevol infracció notòria de l'ordenament jurídic que provoqui una simple indefensió material esmenable", "correct": false },
      { "text": "La realització d'actuacions administratives fora del termini establert quan la naturalesa de l'acte ho exigeixi", "correct": false },
      { "text": "La vulneració dels drets i llibertats susceptibles d'empara constitucional recollits als articles 14 a 29 de la Constitució Espanyola[cite: 1]", "correct": true },
      { "text": "L'incompliment d'un requisit formal no essencial que no impedeixi aconseguir la finalitat de l'acte", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 3,
    "question": "Quin és el termini màxim general establert per a la notificació de la resolució expressa en els procediments administratius, a falta de norma específica[cite: 2]?",
    "answers": [
      { "text": "1 mes", "correct": false },
      { "text": "3 mesos", "correct": true },
      { "text": "6 mesos", "correct": false },
      { "text": "15 dies", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 4,
    "question": "Pel que fa a les tècniques de conservació dels actes administratius, quin òrgan pot dur a terme la validació d'un acte anul·lable el vici del qual consisteixi en una incompetència no manifesta[cite: 1]?",
    "answers": [
      { "text": "L'òrgan competent, sempre que sigui superior jeràrquic del que va dictar l'acte viciat[cite: 1]", "correct": true },
      { "text": "Un jutge de la jurisdicció contenciosa administrativa mitjançant sentència ferma", "correct": false },
      { "text": "Únicament el Ple de la corporació metropolitana en sessió extraordinària", "correct": false },
      { "text": "L'interventor de la corporació a través d'un informe de fiscalització prèvia", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 5,
    "question": "Quina naturalesa jurídica tenen els crèdits autoritzats en l'estat de despeses del pressupost d'una entitat local com l'AMB[cite: 2]?",
    "answers": [
      { "text": "Tenen caràcter merament estimatiu i orientatiu per a la gestió financera", "correct": false },
      { "text": "Tenen caràcter limitatiu i vinculant, de manera que es consideren nuls de ple dret els compromisos de despesa que els excedeixin[cite: 2]", "correct": true },
      { "text": "Són flexibles i es poden ampliar automàticament sense necessitat de cap modificació pressupostària", "correct": false },
      { "text": "Tenen la consideració de previsions comptables no subjectes a cap tipus de límit quantitatiu", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 6,
    "question": "Segons l'estructura econòmica del pressupost de despeses de les entitats locals, a quin capítol s'imputen les despeses derivades de l'amortització del deute i préstecs contrets[cite: 2]?",
    "answers": [
      { "text": "Capítol 3: Despeses financeres[cite: 2]", "correct": false },
      { "text": "Capítol 8: Actius financers[cite: 2]", "correct": false },
      { "text": "Capítol 9: Passius financers[cite: 2]", "correct": true },
      { "text": "Capítol 4: Transferències corrents[cite: 2]", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 7,
    "question": "Quin és el percentatge màxim i únic que l'AMB pot establir com a recàrrec metropolità sobre l'Impost sobre Béns Immobles (IBI) d'acord amb la Llei 31/2010 i el TRLRHL[cite: 2]?",
    "answers": [
      { "text": "Un 0,1% de la base imposable", "correct": false },
      { "text": "Un 0,2% de la base imposable (valor cadastral)[cite: 2]", "correct": true },
      { "text": "Un 0,5% de la quota líquida de l'impost", "correct": false },
      { "text": "Un 1% del valor de mercat dels immobles", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 8,
    "question": "Quina de les següents afirmacions relatives a la pròrroga pressupostària automàtica de les corporacions locals és correcta[cite: 2]?",
    "answers": [
      { "text": "Es prorroga el pressupost íntegrament incloent tots els crèdits inicials i extraordinaris de l'exercici anterior", "correct": false },
      { "text": "Es prorroguen automàticament els crèdits inicials de l'exercici anterior si el nou pressupost no s'aprova abans de l'1 de gener[cite: 2]", "correct": true },
      { "text": "Requereix una aprovació expressa i unànime del Ple de la corporació abans del 31 de març", "correct": false },
      { "text": "Implica la paralització absoluta de qualsevol tipus de despesa corrent fins a l'aprovació definitiva", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 9,
    "question": "En el procés d'execució del pressupost de despeses, quin és l'acte pel qual s'acorda la realització d'una despesa a càrrec d'un crèdit pressupostari determinat, reservant-ne la totalitat o una part[cite: 2]?",
    "answers": [
      { "text": "La disposició o compromís de la despesa[cite: 2]", "correct": false },
      { "text": "L'autorització de la despesa[cite: 2]", "correct": true },
      { "text": "El reconeixement de l'obligació[cite: 2]", "correct": false },
      { "text": "L'ordenació del pagament material[cite: 2]", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 10,
    "question": "Quin és el termini límit legalment establert perquè les entitats locals hagin de confeccionar la liquidació del seu pressupost respecte a l'exercici anterior[cite: 2]?",
    "answers": [
      { "text": "Abans de l'1 de febrer", "correct": false },
      { "text": "Abans del dia 1 de març de l'exercici següent[cite: 2]", "correct": true },
      { "text": "Abans del 31 de març", "correct": false },
      { "text": "Abans del 15 de maig", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 11,
    "question": "Segons la classificació econòmica del pressupost d'ingressos, on s'han de comptabilitzar els recursos obtinguts per la venda d'actius financers i reintegraments de préstecs[cite: 2]?",
    "answers": [
      { "text": "Capítol 6: Alienació d'inversions reals[cite: 2]", "correct": false },
      { "text": "Capítol 8: Variació d'actius financers[cite: 2]", "correct": true },
      { "text": "Capítol 9: Variació de passius financers[cite: 2]", "correct": false },
      { "text": "Capítol 5: Ingressos patrimonials[cite: 2]", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 12,
    "question": "Quin tipus d'acte administratiu es produeix quan l'Administració incompleix l'obligació de resoldre i l'ordenament jurídic atribueix a aquesta conducta un significat estimador o desestimador pel simple transcurs del termini[cite: 1]?",
    "answers": [
      { "text": "Acte tàcit[cite: 1]", "correct": false },
      { "text": "Acte presumpte[cite: 1]", "correct": true },
      { "text": "Acte exprés[cite: 1]", "correct": false },
      { "text": "Acte de tràmit qualificat[cite: 1]", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 13,
    "question": "Quin és el termini general d'esmena de sol·licituds i de compliment de tràmits per part dels interessats en el procediment administratiu comú (Llei 39/2015)?",
    "answers": [
      { "text": "5 dies", "correct": false },
      { "text": "10 dies", "correct": true },
      { "text": "15 dies", "correct": false },
      { "text": "1 mes", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 14,
    "question": "Quina característica defineix la classificació funcional i per programes del pressupost de despeses de l'AMB[cite: 2]?",
    "answers": [
      { "text": "S'estructura obligatòriament en 9 capítols homogèneus basats en la naturalesa de la despesa", "correct": false },
      { "text": "Està formada per 3 dígits que indiquen successivament l'àrea de despesa, la política de despesa i el programa concret[cite: 2]", "correct": true },
      { "text": "Identifica de manera exclusiva l'òrgan o unitat responsable que gasta o ingressa", "correct": false },
      { "text": "S'aplica tant a l'estat d'ingressos com a l'estat de despeses de la corporació amb caràcter simètric", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 15,
    "question": "D'acord amb la Llei 31/2010 de creació de l'AMB, quina data precisa es va constituir efectivament com a administració pública substituint les tres antigues entitats metropolitanes[cite: 2]?",
    "answers": [
      { "text": "1 de gener de 2011", "correct": false },
      { "text": "21 de juliol de 2011[cite: 2]", "correct": true },
      { "text": "31 d'agost de 2010", "correct": false },
      { "text": "1 de setembre de 2011", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 16,
    "question": "Quina és la data límit legal que té el President de l'entitat local per formar el Pressupost General i sotmetre'l a l'aprovació del Ple[cite: 2]?",
    "answers": [
      { "text": "Abans del 15 de setembre[cite: 2]", "correct": false },
      { "text": "Abans del 15 d'octubre[cite: 2]", "correct": true },
      { "text": "Abans del 31 d'octubre", "correct": false },
      { "text": "Abans del 31 de desembre[cite: 2]", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 17,
    "question": "Quina condició temporal s'exigeix respecte a la publicació de les ordenances fiscals locals perquè puguin entrar en vigor i ser aplicades en un determinat exercici pressupostari[cite: 2]?",
    "answers": [
      { "text": "Han d'estar publicades íntegrament en el BOP abans del 31 de desembre de l'exercici precedent[cite: 2]", "correct": true },
      { "text": "Poden publicar-se durant el primer trimestre de l'exercici corrent amb efectes retroactius", "correct": false },
      { "text": "Només requereixen la comunicació telemàtica a l'Administració de l'Estat abans del 15 de gener", "correct": false },
      { "text": "Es consideren automàticament vigents des de la seva aprovació inicial pel Ple sense necessitat de publicació", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 18,
    "question": "Quin òrgan de l'entitat local ostenta les funcions d'ordenació de pagaments per regla general segons la normativa de les hisendes locals[cite: 2]?",
    "answers": [
      { "text": "L'interventor de la corporació", "correct": false },
      { "text": "El tresorer municipal", "correct": false },
      { "text": "El president o alcalde de l'entitat local[cite: 2]", "correct": true },
      { "text": "El Ple de la corporació per majoria absoluta", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 19,
    "question": "Com es defineix el romanent de tresoreria d'una entitat local en la liquidació del pressupost[cite: 2]?",
    "answers": [
      { "text": "La diferència pura entre els ingressos totals liquidats i les despeses totals pagades durant l'any", "correct": false },
      { "text": "La suma dels fons líquids a 31 de desembre més els drets pendents de cobrament, menys les obligacions pendents de pagament, ajustat tot plegat pels ingressos afectats i coeficients de dificultat de cobrament[cite: 2]", "correct": true },
      { "text": "El conjunt de crèdits no gastats que s'anul·len definitivament en tancar l'exercici", "correct": false },
      { "text": "El volum de deute viu acumulat a llarg termini pendent d'amortització", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 20,
    "question": "Quin principi pressupostari estableix que els recursos de l'entitat es destinen a satisfer el conjunt de les seves obligacions de manera general, excepte en els casos d'ingressos específics afectats a finalitats determinades[cite: 2]?",
    "answers": [
      { "text": "Principi d'universalitat[cite: 2]", "correct": false },
      { "text": "Principi de no afectació[cite: 2]", "correct": true },
      { "text": "Principi d'especialitat qualitativa[cite: 2]", "correct": false },
      { "text": "Principi d'equilibri pressupostari[cite: 2]", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 21,
    "question": "Quina és la consideració jurídica dels actes administratius de tràmit respecte a la seva impugnació autònoma en via administrativa o contenciosa[cite: 1]?",
    "answers": [
      { "text": "Són sempre directament impugnables en qualsevol moment del procediment", "correct": false },
      { "text": "No són impugnables separadament de la resolució definitiva, llevat dels actes de tràmit qualificats que decideixen directament o indirectament el fons o produeixen indefensió[cite: 1]", "correct": true },
      { "text": "Adquiriran fermesa automàtica si no es recorren en el termini de 10 dies", "correct": false },
      { "text": "Només poden ser objecte de revisió d'ofici per motius de nul·litat radical", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 22,
    "question": "Quina fase de l'execució del pressupost de despeses es correspon amb l'operació de contreure en comptes els crèdits exigibles en contra de l'AMB per haver-se acreditat la prestació corresponent[cite: 2]?",
    "answers": [
      { "text": "Autorització[cite: 2]", "correct": false },
      { "text": "Disposició o compromís[cite: 2]", "correct": false },
      { "text": "Reconeixement de l'obligació[cite: 2]", "correct": true },
      { "text": "Ordenació de pagament[cite: 2]", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 23,
    "question": "Segons la classificació econòmica de les despeses, on s'han d'imputar les retribucions del personal i les cotitzacions socials a càrrec de l'empleador[cite: 2]?",
    "answers": [
      { "text": "Capítol 2: Despeses corrents de béns i serveis[cite: 2]", "correct": false },
      { "text": "Capítol 1: Remuneracions de personal[cite: 2]", "correct": true },
      { "text": "Capítol 4: Transferències corrents[cite: 2]", "correct": false },
      { "text": "Capítol 6: Inversions reals[cite: 2]", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 24,
    "question": "Quina particularitat presenta el principi d'especialitat qualitativa dels crèdits pressupostaris de despesa[cite: 2]?",
    "answers": [
      { "text": "Determina que els imports consignats constitueixen quanties màximes que no es poden superar", "correct": false },
      { "text": "Estableix que les consignacions pressupostàries només poden ser destinades a la finalitat específica per a la qual van ser previstes en el pressupost[cite: 2]", "correct": true },
      { "text": "Garanteix la possibilitat de transferir lliurement fons entre qualsevol capítol de despesa i d'ingrés", "correct": false },
      { "text": "Autoritza l'ús de crèdits per a despeses no previstes en cas d'urgència excepcional sense modificació", "correct": false }
    ]
  },
  {
    "theme": "Bloc II - Tema 5: Procediment Administratiu, Classes d'Actes i Gestió Pressupostària a l'AMB",
    "number": 25,
    "question": "Quin és el termini legal d'exposició al públic del Pressupost General un cop ha estat aprovat inicialment pel Ple de la corporació local[cite: 2]?",
    "answers": [
      { "text": "10 dies hàbils", "correct": false },
      { "text": "15 dies[cite: 2]", "correct": true },
      { "text": "30 dies naturals", "correct": false },
      { "text": "1 mes comptat des de l'endemà de la publicació al BOP", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 6: Els tributs locals: concepte i classes (RDLeg 2/2004 - TRLRHL)",
    "number": 1,
    "question": "Segons el Reial Decret Legislatiu 2/2004 (TRLRHL), quin efecte jurídic produeix el pressupost respecte als ingressos públics locals?",
    "answers": [
      { "text": "Constitueix un límit màxim quantitatiu d'exacció obligatòria", "correct": false },
      { "text": "Té caràcter de simple previsió o càlcul comptable sense efecte jurídic limitatiu de la seva quantia", "correct": true },
      { "text": "Habilita l'administració per exigir ingressos per damunt de la previsió inicial si hi ha dèficit", "correct": false },
      { "text": "Té idèntica força vinculant i limitadora que l'estat de despeses", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 6: Els tributs locals: concepte i classes (RDLeg 2/2004 - TRLRHL)",
    "number": 2,
    "question": "D'acord amb l'article 2 del TRLRHL, quina de les següents opcions recull correctament les classes de tributs locals?",
    "answers": [
      { "text": "Impostos directes, impostos indirectes i taxes", "correct": false },
      { "text": "Taxes, contribucions especials i impostos", "correct": true },
      { "text": "Preus públics, taxes i ingressos patrimonials", "correct": false },
      { "text": "Impostos obligatoris, impostos voluntaris i recàrrecs", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 6: Els tributs locals: concepte i classes (RDLeg 2/2004 - TRLRHL)",
    "number": 3,
    "question": "Quins són els impostos de caràcter obligatori que *tots* els municipis han d'establir d'acord amb el TRLRHL?",
    "answers": [
      { "text": "L'IBI, l'ICIO i l'IIVTNU", "correct": false },
      { "text": "L'IBI, l'IAE i l'IVTM", "correct": true },
      { "text": "L'IAE, l'IVTM i la Plusvàlua municipal", "correct": false },
      { "text": "Tots els impostos regulats al TRLRHL són obligatoris per a municipis de gran població", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 6: Els tributs locals: concepte i classes (RDLeg 2/2004 - TRLRHL)",
    "number": 4,
    "question": "En relació amb els impostos municipals de caràcter voluntari o potestatiu, quin dels següents pertany a aquesta categoria?",
    "answers": [
      { "text": "L'Impost sobre Vehicles de Tracció Mecànica (IVTM)", "correct": false },
      { "text": "L'Impost sobre Béns Immobles (IBI)", "correct": false },
      { "text": "L'Impost sobre Construccions, Instal·lacions i Obres (ICIO)", "correct": true },
      { "text": "L'Impost sobre Activitats Econòmiques (IAE)", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 6: Els tributs locals: concepte i classes (RDLeg 2/2004 - TRLRHL)",
    "number": 5,
    "question": "Segons l'article 153.1.a) del TRLRHL i la Llei 31/2010 de l'AMB, quin percentatge màxim pot suposar el recàrrec metropolità sobre l'IBI?",
    "answers": [
      { "text": "Un 0,1% de la base imposable", "correct": false },
      { "text": "Un 0,2% de la base imposable", "correct": true },
      { "text": "Un 0,5% de la quota líquida", "correct": false },
      { "text": "Un 1% del valor cadastral total", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 6: Els tributs locals: concepte i classes (RDLeg 2/2004 - TRLRHL)",
    "number": 6,
    "question": "Quin requisit formal és indispensable pel que fa a l'entrada en vigor de les ordenances fiscals reguladores dels tributs locals?",
    "answers": [
      { "text": "Aprovació per majoria simple del Ple i comunicació interna a Intervenció", "correct": false },
      { "text": "Publicació íntegra del seu text al Butlletí Oficial de la Província (BOP) abans del 31 de desembre de l'exercici anterior", "correct": true },
      { "text": "Aprovació per la Comissió de Govern abans del 15 d'octubre", "correct": false },
      { "text": "Ratificació per la Generalitat de Catalunya i publicació al DOGC", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 6: Els tributs locals: concepte i classes (RDLeg 2/2004 - TRLRHL)",
    "number": 7,
    "question": "Quina diferència conceptual principal existeix entre una taxa i un preu públic local?",
    "answers": [
      { "text": "Les taxes no tenen naturalesa tributària, mentre que els preus públics sí", "correct": false },
      { "text": "Les taxes s'exigeixen per serveis de sol·licitud o recepció obligatòria, mentre que els preus públics ho són per serveis de sol·licitud voluntària", "correct": true },
      { "text": "Els preus públics s'aproven per decret de presidència i les taxes per llei orgànica", "correct": false },
      { "text": "No hi ha cap diferència jurídica; s'utilitzen com a sinònims al TRLRHL", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 6: Els tributs locals: concepte i classes (RDLeg 2/2004 - TRLRHL)",
    "number": 8,
    "question": "Pel que fa al principi d'especialitat pressupostària en la seva vessant quantitativa, quina conseqüència comporta contraure despeses que excedeixin els crèdits autoritzats?",
    "answers": [
      { "text": "La mera irregularitat no invalidant esmenable mitjançant generació de crèdit", "correct": false },
      { "text": "L'anul·labilitat de l'acte en el termini de quatre anys", "correct": true },
      { "text": "La nul·litat de ple dret dels acords, resolucions i actes administratius que infringeixin aquesta norma", "correct": true },
      { "text": "La suspensió temporal de les funcions del interventor de l'ens", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 6: Els tributs locals: concepte i classes (RDLeg 2/2004 - TRLRHL)",
    "number": 9,
    "question": "Quin és el termini legal establert perquè el President de l'entitat local formi el Pressupost General i el remeti al Ple per a la seva aprovació?",
    "answers": [
      { "text": "Abans del 15 de setembre", "correct": false },
      { "text": "Abans del 15 d'octubre", "correct": true },
      { "text": "Abans de l'1 de desembre", "correct": false },
      { "text": "Abans del 31 de desembre", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 6: Els tributs locals: concepte i classes (RDLeg 2/2004 - TRLRHL)",
    "number": 10,
    "question": "Què succeeix si en iniciar-se l'exercici econòmic (1 de gener) no ha entrat en vigor el nou pressupost general de l'entitat local?",
    "answers": [
      { "text": "Es produeix un buit legal i es paralitza tota activitat de despesa fins a la seva aprovació", "correct": false },
      { "text": "S'aplica automàticament una pròrroga del pressupost de l'any anterior en els seus crèdits inicials", "correct": true },
      { "text": "L'Alcalde pot aprovar per decret un pressupost extraordinari prorrogat", "correct": false },
      { "text": "S'autoritza automàticament un increment del 2% sobre els crèdits anteriors", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 6: Els tributs locals: concepte i classes (RDLeg 2/2004 - TRLRHL)",
    "number": 11,
    "question": "Segons l'estructura econòmica del pressupost de despeses, a quin capítol s'imputen les despeses derivades de les retribucions del personal i les cotitzacions socials?",
    "answers": [
      { "text": "Capítol 2", "correct": false },
      { "text": "Capítol 1", "correct": true },
      { "text": "Capítol 4", "correct": false },
      { "text": "Capítol 6", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 6: Els tributs locals: concepte i classes (RDLeg 2/2004 - TRLRHL)",
    "number": 12,
    "question": "Dins de la classificació econòmica del pressupost de despeses, on es comptabilitzen les operacions destinades a l'amortització del deute i préstecs contrets?",
    "answers": [
      { "text": "Capítol 3 (Despeses financeres)", "correct": false },
      { "text": "Capítol 8 (Actius financers)", "correct": false },
      { "text": "Capítol 9 (Passius financers)", "correct": true },
      { "text": "Capítol 7 (Transferències de capital)", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 6: Els tributs locals: concepte i classes (RDLeg 2/2004 - TRLRHL)",
    "number": 13,
    "question": "Quin òrgans de l'Àrea Metropolitana de Barcelona (AMB) és l'encarregat d'aprovar inicialment el pressupost general de l'ens?",
    "answers": [
      { "text": "La Comissió Especial de Comptes", "correct": false },
      { "text": "El Consell Metropolità (Plenari)", "correct": true },
      { "text": "La Junta de Govern", "correct": false },
      { "text": "La Intervenció General", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 6: Els tributs locals: concepte i classes (RDLeg 2/2004 - TRLRHL)",
    "number": 14,
    "question": "Quines són les quatre fases ordinàries d'execució del pressupost de despeses en l'àmbit local?",
    "answers": [
      { "text": "Previsió, recaptació, liquidació i ingressos", "correct": false },
      { "text": "Autorització (A), Disposició (D), Reconeixement de l'obligació (O) i Ordenació de pagament (P)", "correct": true },
      { "text": "Aprovació, compromís, comptabilització i pagament material", "correct": false },
      { "text": "Inici, tramitació, resolució i execució", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 6: Els tributs locals: concepte i classes (RDLeg 2/2004 - TRLRHL)",
    "number": 15,
    "question": "Com es defineix la fase de 'Disposició' (D) d'una despesa pública?",
    "answers": [
      { "text": "L'acte pel qual s'acorda la realització d'una despesa a càrrec d'un crèdit pressupostari determinat", "correct": false },
      { "text": "L'acte pel qual s'acorda o concerta la realització concreta d'obres, serveis o subministraments, formalitzant la reserva de crèdit per un import exacte", "correct": true },
      { "text": "L'operació de contreure en comptes els crèdits exigibles contra l'entitat", "correct": false },
      { "text": "L'expedició del manament de pagament contra la Tresoreria", "correct": true }
    ]
  },
  {
    "theme": "Bloc III - Tema 6: Els tributs locals: concepte i classes (RDLeg 2/2004 - TRLRHL)",
    "number": 16,
    "question": "Quin document o estudi econòmic previ resulta obligatori per a l'establiment o modificació de taxes i preus públics destinats a finançar serveis com el tractament de residus?",
    "answers": [
      { "text": "Un estudi econòmico-financer que justificiti de manera objectiva i directa el cost del servei", "correct": true },
      { "text": "Una auditoria externa independent aprovada per la Sindicatura de Comptes", "correct": false },
      { "text": "Un informe vinculant del Departament d'Economia de la Generalitat", "correct": false },
      { "text": "Una memòria d'impacte de gènere i pressupostària", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 6: Els tributs locals: concepte i classes (RDLeg 2/2004 - TRLRHL)",
    "number": 17,
    "question": "Què configura el denominat 'romanent de tresoreria' d'una entitat local al tancament de l'exercici pressupostari el 31 de desembre?",
    "answers": [
      { "text": "Únicament els fons líquids disponibles a la tresoreria municipal", "correct": false },
      { "text": "Les obligacions reconegudes i liquidades no satisfetes, els drets pendents de cobrament i els fons líquids a 31 de desembre", "correct": true },
      { "text": "La diferència neta entre ingressos corrents i despeses de capital", "correct": false },
      { "text": "El total de crèdits no gastats susceptibles d'incorporació automàtica", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 6: Els tributs locals: concepte i classes (RDLeg 2/2004 - TRLRHL)",
    "number": 18,
    "question": "Quin és el termini límit legalment establert perquè les entitats locals confeccionin la liquidació del seu pressupost de l'exercici anterior?",
    "answers": [
      { "text": "Abans del 31 de gener", "correct": false },
      { "text": "Abans del dia 1 de març", "correct": true },
      { "text": "Abans del 31 de març", "correct": false },
      { "text": "Abans del 15 de maig", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 6: Els tributs locals: concepte i classes (RDLeg 2/2004 - TRLRHL)",
    "number": 19,
    "question": "A quin capítol del pressupost d'ingressos de l'AMB s'anoten els recursos rebuts sense contrapartida directa destinats a finançar operacions corrents (per exemple, transferències de la Generalitat o Estat)?",
    "answers": [
      { "text": "Capítol 3", "correct": false },
      { "text": "Capítol 4", "correct": true },
      { "text": "Capítol 5", "correct": false },
      { "text": "Capítol 7", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 6: Els tributs locals: concepte i classes (RDLeg 2/2004 - TRLRHL)",
    "number": 20,
    "question": "Segons l'article 186 del TRLRHL, a qui correspon generalment la funció d'ordenació de pagaments en l'àmbit d'una entitat local?",
    "answers": [
      { "text": "Al Tresorer municipal", "correct": false },
      { "text": "Al President (o Alcalde) de l'entitat local", "correct": true },
      { "text": "A la Intervenció General", "correct": false },
      { "text": "Al Ple de la corporació per majoria absoluta", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 6: Els tributs locals: concepte i classes (RDLeg 2/2004 - TRLRHL)",
    "number": 21,
    "question": "Quina característica defineix els ingressos classificats al Capítol 1 del pressupost d'ingressos (Impostos directes)?",
    "answers": [
      { "text": "S'exigeixen per la circulació de béns o consum de renda", "correct": false },
      { "text": "S'exigeixen sense contraprestació i el seu fet imposable posa de manifest la capacitat contributiva per la possessió de patrimoni o obtenció de renda", "correct": true },
      { "text": "Deriven de l'ús privatiu del domini públic", "correct": false },
      { "text": "Tenen caràcter finalista i afectat a inversions de capital", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 6: Els tributs locals: concepte i classes (RDLeg 2/2004 - TRLRHL)",
    "number": 22,
    "question": "Quin principi pressupostari estableix que els recursos de l'entitat local es destinen a satisfer el conjunt de les seves obligacions, prohibint-se l'afectació a finançar despeses concretes llevat d'excepcions legals?",
    "answers": [
      { "text": "Principi d'unitat pressupostària", "correct": false },
      { "text": "Principi de no afectació", "correct": true },
      { "text": "Principi d'anualitat", "correct": false },
      { "text": "Principi d'universalitat", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 6: Els tributs locals: concepte i classes (RDLeg 2/2004 - TRLRHL)",
    "number": 23,
    "question": "Durant la tramitació del Pressupost General, un cop aprovat inicialment pel Ple, durant quin període s'exposa al públic previ anunci al BOP per a la presentació de reclamacions?",
    "answers": [
      { "text": "Durant 10 dies hàbils", "correct": false },
      { "text": "Durant 15 dies", "correct": true },
      { "text": "Durant 30 dies naturals", "correct": false },
      { "text": "Durant un mes complet", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 6: Els tributs locals: concepte i classes (RDLeg 2/2004 - TRLRHL)",
    "number": 24,
    "question": "Quina classificació del pressupost de despeses respon a la pregunta de 'per a quina finalitat de despesa es gasta' o 'quins programes s'executen'?",
    "answers": [
      { "text": "La classificació orgànica", "correct": false },
      { "text": "La classificació econòmica", "correct": false },
      { "text": "La classificació funcional i per programes", "correct": true },
      { "text": "La classificació institucional", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 6: Els tributs locals: concepte i classes (RDLeg 2/2004 - TRLRHL)",
    "number": 25,
    "question": "En relació amb els ingressos no financers del pressupost local, quina de les següents agrupacions és correcta?",
    "answers": [
      { "text": "Engloben exclusivament els impostos directes i indirectes", "correct": false },
      { "text": "Engloben els ingressos corrents i els ingressos de capital", "correct": true },
      { "text": "Engloben els actius i passius financers", "correct": false },
      { "text": "Engloben totes les previsions derivades de la variació de deute públic", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 1,
    "question": "Segons el Reglament General de Protecció de Dades (RGPD), quin termini màxim té el responsable del tractament per notificar una violació de seguretat de les dades a l'autoritat de control competent?",
    "answers": [
      { "text": "En el termini màxim de 24 hores des que en tingui constància", "correct": false },
      { "text": "Sense dilació indeguda i, si és possible, en un termini màxim de 72 hores", "correct": true },
      { "text": "En el termini improrrogable de 15 dies hàbils", "correct": false },
      { "text": "Durant el mes natural següent a la producció de la bretxa", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 2,
    "question": "Quina és l'autoritat de control competent a Catalunya per supervisar el compliment de la normativa de protecció de dades per part de l'Àrea Metropolitana de Barcelona (AMB)?",
    "answers": [
      { "text": "L'Agència Espanyola de Protecció de Dades (AEPD)", "correct": false },
      { "text": "L'Autoritat Catalana de Protecció de Dades (APDCAT)", "correct": true },
      { "text": "El Consell de Garanties Estatutàries", "correct": false },
      { "text": "La Sindicatura de Comptes de Catalunya", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 3,
    "question": "Quin dels següents principis del tractament establerts a l'article 5 del RGPD obliga a recollir les dades personals amb fins determinats, explícits i legítims?",
    "answers": [
      { "text": "Principi de minimització de dades", "correct": false },
      { "text": "Principi de limitació de la finalitat", "correct": true },
      { "text": "Principi d'exactitud i integritat", "correct": false },
      { "text": "Principi de responsabilitat proactiva", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 4,
    "question": "Segons la LOPDGDD 3/2018, la designació del Delegat de Protecció de Dades (DPD) en les entitats que integren l'administració pública, com l'AMB, té un caràcter:",
    "answers": [
      { "text": "Voluntari i recomanat a criteri del Ple", "correct": false },
      { "text": "Obligatori per a totes les administracions públiques", "correct": true },
      { "text": "Opcional només per als ens locals de menys de 5.000 habitants", "correct": false },
      { "text": "Subordinat a l'aprovació prèvia de l'AEPD", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 5,
    "question": "Quin instrument o inventari han de mantenir obligatòriament publicat i actualitzat les administracions públiques sobre les operacions de tractament de dades que realitzen?",
    "answers": [
      { "text": "El Registre d'Activitats de Tractament (RAT)", "correct": true },
      { "text": "El Pla General de Comptabilitat Pública", "correct": false },
      { "text": "El Catàleg Oficial de Llocs de Treball (RPT)", "correct": false },
      { "text": "L'Esquema Nacional de Seguretat de Fitxers", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 6,
    "question": "En relació amb la base jurídica del tractament de dades a l'Administració Pública, quin error o trampa d'examen cal evitar respecte al consentiment?",
    "answers": [
      { "text": "El consentiment exprés i escrit de l'interessat és obligatori en el 100% dels tràmits públics", "correct": false },
      { "text": "No sempre cal el consentiment exprés de l'interessat, ja que molts tractaments es basen en el compliment d'una obligació legal o en l'exercici de poders públics", "correct": true },
      { "text": "El consentiment tàcit mai té validesa jurídica en cap àmbit de la Funció Pública", "correct": false },
      { "text": "L'Administració no pot tractar dades personals sota cap concepte sense un contracte mercantil previ", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 7,
    "question": "Quin dret dels interessats reconeguts pel RGPD permet a un ciutadà obtenir una còpia de les seves dades personals objecte de tractament?",
    "answers": [
      { "text": "Dret d'oposició", "correct": false },
      { "text": "Dret d'accés (Art. 15)", "correct": true },
      { "text": "Dret a la portabilitat universal", "correct": false },
      { "text": "Dret de limitació cautelar", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 8,
    "question": "Segons el principi de minimització de dades recollit a l'article 5.1.c) del RGPD, les dades personals tractades han de ser:",
    "answers": [
      { "text": "Exhaustives, massives i emmagatzemades de manera indefinida per a consultes futures", "correct": false },
      { "text": "Adequades, pertinents i limitades al que és necessari en relació amb els fins per als quals són tractades", "correct": true },
      { "text": "Anonimitzades automàticament en un termini improrrogable de 24 hores", "correct": false },
      { "text": "Accessible públicament a través del portal de transparència sense cap mena de filtre", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 9,
    "question": "Quin concepte jurídic fa referència a l'ens públic o privat que determina les finalitats i els mitjans del tractament de dades personals?",
    "answers": [
      { "text": "L'encarregat del tractament", "correct": false },
      { "text": "El responsable del tractament", "correct": true },
      { "text": "El delegat de protecció de dades", "correct": false },
      { "text": "L'autoritat de control independent", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 10,
    "question": "Com es coneix popularment el conjunt de drets que inclou l'Accés, Rectificació, Supressió, Limitació, Oposició i Portabilitat en l'àmbit de la gestió telemàtica de l'AMB?",
    "answers": [
      { "text": "Drets ARSULOP", "correct": true },
      { "text": "Drets de concurrència i adaptació", "correct": false },
      { "text": "Garanties d'audiència prèvia", "correct": false },
      { "text": "Mecanismes de tutela administrativa ordinària", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 11,
    "question": "Quin és l'objectiu principal d'aplicar la protecció de dades des del disseny i per defecte en els sistemes d'informació d'una administració local?",
    "answers": [
      { "text": "Reduir el cost econòmic dels equips informàtics a la meitat", "correct": false },
      { "text": "Garantir que les mesures tècniques i organitzatives adequades s'apliquin des del moment mateix del disseny del tractament", "correct": true },
      { "text": "Evitar la necessitat de comptar amb un arxiu electrònic únic", "correct": false },
      { "text": "Permetre la venda de bases de dades municipals a tercers col·laboradors", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 12,
    "question": "En relació amb les funcions del Delegat de Protecció de Dades (DPD), assenyala quina de les següents afirmacions és correcta segons el marc normatiu:",
    "answers": [
      { "text": "Està subordinat jeràrquicament al departament de recursos humans de l'ens", "correct": false },
      { "text": "Informa i assessora el responsable o l'encarregat del tractament sobre les seves obligacions legals", "correct": true },
      { "text": "Té la potestat exclusiva d'imposar multes i sancions econòmiques als ciutadans", "correct": false },
      { "text": "Només pot actuar a petició expressa i prèvia dels jutjats contenciosos administratius", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 13,
    "question": "Quin dret de la persona interessada també és conegut habitualment com a 'dret a l'oblit' en el context del RGPD i la LOPDGDD?",
    "answers": [
      { "text": "El dret de rectificació", "correct": false },
      { "text": "El dret de supressió", "correct": true },
      { "text": "El dret de portabilitat", "correct": false },
      { "text": "El dret d'oposició automatitzada", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 14,
    "question": "Segons l'estructura de la normativa de protecció de dades aplicada als ens locals, a quin àmbit s'estén la competència inspectora i sancionadora de l'APDCAT?",
    "answers": [
      { "text": "Només a les empreses privades mercantils amb ànim de lucre establertes a Barcelona", "correct": false },
      { "text": "A les administracions públiques catalanes, inclosa l'AMB i els ajuntaments de la seva demarcació", "correct": true },
      { "text": "Exclusivament als ministeris depenents de l'Administració General de l'Estat", "correct": false },
      { "text": "A qualsevol organisme de la Unió Europea de manera directa", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 15,
    "question": "Quina condició s'exigeix generalment per exercir els drets ARSULOP per via telemàtica a la seu electrònica de l'AMB?",
    "answers": [
      { "text": "L'ús d'un certificat digital reconegut o mitjà d'identificació electrònica vàlid", "correct": true },
      { "text": "L'enviament d'una carta ordinària segellada per una oficina de correus privada", "correct": false },
      { "text": "La presència física obligatòria de dos testimonis majors d'edat", "correct": false },
      { "text": "El pagament previ d'una taxa administrativa d'accés a arxius", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 16,
    "question": "Quin principi regeix l'exactitud de les dades segons l'article 5 del RGPD?",
    "answers": [
      { "text": "Les dades han de ser exactes i, si cal, actualitzades; adoptant-se les mesures raonables per suprimir o rectificar sense dilació les que siguin inexactes", "correct": true },
      { "text": "Les dades no poden ser modificades sota cap circumstància un cop introduïdes al sistema informàtic", "correct": false },
      { "text": "L'exactitud de les dades depèn exclusivament de la bona fe del ciutadà sense comprovació tècnica", "correct": false },
      { "text": "Qualsevol dada no validada en 48 hores perd la seva validesa jurídica de manera automàtica", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 17,
    "question": "Com es defineix l'encarregat del tractament en el marc de la normativa europea de protecció de dades?",
    "answers": [
      { "text": "La persona física o jurídica, autoritat pública, servei o altre organisme que tracta dades personals per compte del responsable del tractament", "correct": true },
      { "text": "El ciutadà titular de les dades que atorga el consentiment exprés", "correct": false },
      { "text": "El jutge de guàrdia encarregat de resoldre conflictes de privacitat", "correct": false },
      { "text": "L'empleat públic que arxiva físicament els expedients d'urbanisme", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 18,
    "question": "Quin principi garanteix que les dades personals siguin tractades de tal manera que s'asseguri una seguretat adequada, inclosa la protecció contra el tractament no autoritzat o il·lícit?",
    "answers": [
      { "text": "Integritat i confidencialitat", "correct": true },
      { "text": "Llibertat de circulació de dades", "correct": false },
      { "text": "Publicitat activa i transparència", "correct": false },
      { "text": "Centralització i inalterabilitat", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 19,
    "question": "En relació amb els canals d'exercici de drets, on s'han de publicar obligatòriament les dades de contacte del Delegat de Protecció de Dades d'un ens com l'AMB?",
    "answers": [
      { "text": "S'han de comunicar a l'autoritat de control i fer-les públiques a disposició de la ciutadania", "correct": true },
      { "text": "Només en un document intern d'ús exclusiu per a la direcció general", "correct": false },
      { "text": "En un llibre de circulació interna no accessible per via electrònica", "correct": false },
      { "text": "Es mantenen sota secret professional i no es poden divulgar sota cap concepte", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 20,
    "question": "Quin efecte comporta el principi de limitació del termini de conservació de les dades personals?",
    "answers": [
      { "text": "Les dades s'han de mantenir en una forma que permeti la identificació dels interessats durant no més temps del necessari per als fins del tractament", "correct": true },
      { "text": "Totes les dades públiques s'han de destruir rigorosament en un termini fix de 30 dies", "correct": false },
      { "text": "L'Administració pot conservar indefinidament qualsevol dada sense justificació prèvia", "correct": false },
      { "text": "El termini de conservació el decideix lliurement cada funcionari gestor de l'expedient", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 21,
    "question": "Quin és el marc normatiu europeu de referència directa que regula la protecció de les persones físiques pel que fa al tractament de dades personals des de maig de 2018?",
    "answers": [
      { "text": "El Reglament (UE) 2016/679 (RGPD)", "correct": true },
      { "text": "La Directiva europea 95/46/CE", "correct": false },
      { "text": "El Reial Decret Legislatiu 2/2004", "correct": false },
      { "text": "La Llei Orgànica 15/1999 de Protecció de Dades", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 22,
    "question": "Quina característica defineix l'exercici dels drets dels interessats davant de l'AMB segons la normativa vigent?",
    "answers": [
      { "text": "Són de caràcter gratuït per a l'interessat", "correct": true },
      { "text": "Comporten una taxa fixa de tramitació administrativa per cada sol·licitud", "correct": false },
      { "text": "Requereixen necessàriament la contractació d'un advocat col·legiat", "correct": false },
      { "text": "Només es poden exercir de manera presencial a les oficines centrals", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 23,
    "question": "Quin organisme o entitat pública supramunicipal de Catalunya agrupa 36 municipis i integra les directrius de seguretat de la informació i protecció de dades en la seva gestió?",
    "answers": [
      { "text": "L'Àrea Metropolitana de Barcelona (AMB)", "correct": true },
      { "text": "El Consorci Sanitari de Barcelona", "correct": false },
      { "text": "L'Autoritat Catalana de Transport Ferroviari", "correct": false },
      { "text": "La Diputació General de Serveis Ambientals", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 24,
    "question": "Quina és la repercussió del principi de responsabilitat proactiva (accountability) exigit pel RGPD als responsables del tractament?",
    "answers": [
      { "text": "El responsable ha de ser capaç de demostrar el compliment dels principis relatius al tractament", "correct": true },
      { "text": "Eximeix l'administració pública de respondre davant de reclamacions ciutadanes", "correct": false },
      { "text": "Permet delegar tota responsabilitat jurídica directament en l'empresa subministradora de programari", "correct": false },
      { "text": "Autoritza l'inici d'activitats de tractament sense necessitat d'inscripció prèvia al RAT", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 7: La protecció de dades de caràcter personal (RGPD 2016/679 i LOPDGDD 3/2018)",
    "number": 25,
    "question": "En el supòsit que un ciutadà s'oposi al tractament de les seves dades basat en l'interès públic, què estableix la normativa general de protecció?",
    "answers": [
      { "text": "El responsable haurà de deixar de tractar les dades, tret que acrediti motius legítims imperiosos que prevalguin sobre els interessos de l'interessat", "correct": true },
      { "text": "El tractament continua automàticament sense dret de rèplica per part del ciutadà", "correct": false },
      { "text": "S'anul·la immediatament qualsevol expedient administratiu en curs de manera irreversible", "correct": false },
      { "text": "El cas es remet directament a la jurisdicció penal ordinària sense tràmit previ", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 8: La Llei 17/2015 d'igualtat efectiva de dones i homes: Funcions dels ens locals",
    "number": 1,
    "question": "Segons la Llei 17/2015, del 21 de juliol, d'igualtat efectiva de dones i homes, quin objectiu principal persegueix l'anomenada transversalitat o mainstreaming de gènere en l'actuació pública?",
    "answers": [
      { "text": "Limitar les polítiques d'igualtat exclusivament a les regidories o departaments específics de dona", "correct": false },
      { "text": "Integrar la perspectiva de gènere en totes les polítiques i actuacions públiques de manera itinerant", "correct": true },
      { "text": "Establir un règim de quotes obligatòries només en els processos de contractació pública d'obres", "correct": false },
      { "text": "Substituir els plans d'igualtat interns de les administracions per subvencions finalistes", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 8: La Llei 17/2015 d'igualtat efectiva de dones i homes: Funcions dels ens locals",
    "number": 2,
    "question": "D'acord amb el marc de la Llei 17/2015 i les directrius de l'Observatori de la Igualtat de Gènere, quina exigència pressupostària s'aplica a les disposicions generals i pressupostos dels ens locals?",
    "answers": [
      { "text": "La realització prèvia d'una avaluació d'impacte de gènere per assegurar una distribució de recursos sense biaixos", "correct": true },
      { "text": "La prohibició absoluta d'atorgar subvencions a entitats privades que no tinguin un pla de 50 empleats", "correct": false },
      { "text": "La transferència directa del 50% del pressupost municipal a la Generalitat de Catalunya", "correct": false },
      { "text": "L'obligació de destinar un terç del pressupost corrent exclusivament a despeses financeres de caràcter social", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 8: La Llei 17/2015 d'igualtat efectiva de dones i homes: Funcions dels ens locals",
    "number": 3,
    "question": "En relació amb les mesures d'acció positiva previstes a la Llei 17/2015, quin caràcter jurídic tenen respecte al principi d'igualtat?",
    "answers": [
      { "text": "Constitueixen una forma de discriminació indirecta prohibida per l'ordenament jurídic autonòmic", "correct": false },
      { "text": "Són mesures específiques a favor de les dones per corregir situacions de desigualtat de fet, considerades legals i necessàries", "correct": true },
      { "text": "Només poden aplicar-se de manera indefinida en el sector privat, quedant vetades a les administracions públiques", "correct": false },
      { "text": "Requereixen prèviament una sentència del Tribunal Constitucional per a la seva implantació municipal", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 8: La Llei 17/2015 d'igualtat efectiva de dones i homes: Funcions dels ens locals",
    "number": 4,
    "question": "Quin paper assumeixen els ens locals a Catalunya, inclosa l'Àrea Metropolitana de Barcelona (AMB), pel que fa a l'execució de polítiques d'igualtat segons la Llei 17/2015?",
    "answers": [
      { "text": "Un paper merament consultiu sense competències d'execució de recursos de proximitat", "correct": false },
      { "text": "Un paper inactiu, ja que les polítiques de gènere són competència exclusiva de l'Administració General de l'Estat", "correct": false },
      { "text": "Un paper actiu en l'impuls de plans d'igualtat locals i la gestió de serveis d'atenció integral com els SIAD", "correct": true },
      { "text": "Una competència delegada de la Unió Europea exempta del control pressupostari de la Generalitat", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 8: La Llei 17/2015 d'igualtat efectiva de dones i homes: Funcions dels ens locals",
    "number": 5,
    "question": "Quina és la funció principal dels anomenats Serveis d'Informació i Atenció a les Dones (SIAD) en l'àmbit local?",
    "answers": [
      { "text": "Gestionar la recaptació dels impostos directes i taxes municipals de caràcter social", "correct": false },
      { "text": "Oferir recursos de proximitat per a l'atenció, informació i assessorament a les dones", "correct": true },
      { "text": "Inspeccionar les condicions laborals de les grans superfícies comercials metropolitanes", "correct": false },
      { "text": "Tramitar en exclusiva les sancions per infraccions de trànsit dins l'espai públic metropolità", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 8: La Llei 17/2015 d'igualtat efectiva de dones i homes: Funcions dels ens locals",
    "number": 6,
    "question": "Pel que fa a l'organització interna de les administracions públiques catalanes, quina obligació estableix la Llei 17/2015 respecte al seu personal?",
    "answers": [
      { "text": "L'aprovació i aplicació de plans d'igualtat interns per evitar biaixos en selecció, promoció i condicions laborals", "correct": true },
      { "text": "La celebració de referèndums anuals vinculants per fixar les retribucions de la plantilla", "correct": false },
      { "text": "La supressió dels comitès d'empresa per centralitzar la gestió en la figura del Síndic de Greuges", "correct": false },
      { "text": "L'obligatorietat de subcontractar el 100% de la gestió de personal a empreses de capital privat", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 8: La Llei 17/2015 d'igualtat efectiva de dones i homes: Funcions dels ens locals",
    "number": 7,
    "question": "Com a ens supramunicipal, de quina manera intervé principalment l'Àrea Metropolitana de Barcelona (AMB) en matèria d'igualtat de gènere?",
    "answers": [
      { "text": "Assumint de manera exclusiva totes les competències sancionadores en violència masclista a Catalunya", "correct": false },
      { "text": "Coordinant i donant suport als 36 municipis metropolitans en l'execució de programes, mobilitat i espai públic segur", "correct": true },
      { "text": "Emetent deute públic específic per finançar exclusivament associacions privades de dones", "correct": false },
      { "text": "Substituint les competències urbanístiques dels ajuntaments per criteris de caire mercantil", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 8: La Llei 17/2015 d'igualtat efectiva de dones i homes: Funcions dels ens locals",
    "number": 8,
    "question": "Quina importància tenen les clàusules socials en la contractació pública de l'AMB segons el desenvolupament de les polítiques d'igualtat?",
    "answers": [
      { "text": "Són merament recomanables i no tenen cap mena de vinculació jurídica per als licitadors", "correct": false },
      { "text": "S'inclouen com a requisit o criteri d'adjudicació per promoure la igualtat efectiva", "correct": true },
      { "text": "S'apliquen exclusivament en els contractes menors de subministraments informàtics", "correct": false },
      { "text": "Serveixen per exonerar les empreses adjudicatàries del compliment de la normativa fiscal", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 8: La Llei 17/2015 d'igualtat efectiva de dones i homes: Funcions dels ens locals",
    "number": 9,
    "question": "Quina trampa d'examen sol aparèixer sovint en les preguntes tipus test sobre la gestió de les polítiques d'igualtat a l'administració local?",
    "answers": [
      { "text": "Afirmar que les polítiques d'igualtat s'han de gestionar de manera aïllada i exclusiva des d'un únic departament", "correct": true },
      { "text": "Sostindre que els ajuntaments tenen la potestat d'aprovar lleis orgàniques pròpies en matèria de gènere", "correct": false },
      { "text": "Indicar que la Llei 17/2015 només s'aplica a les diputacions provincials i no a l'AMB", "correct": false },
      { "text": "Establir que els plans d'igualtat interns són totalment voluntaris per als funcionaris de carrera", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 8: La Llei 17/2015 d'igualtat efectiva de dones i homes: Funcions dels ens locals",
    "number": 10,
    "question": "Segons la Llei 17/2015, com es defineix jurídicament el principi d'igualtat de tracte?",
    "answers": [
      { "text": "Com l'obligació de percebre retribucions idèntiques independentment de la categoria professional", "correct": false },
      { "text": "Com l'absència de tota discriminació directa o indirecta per raó de sexe", "correct": true },
      { "text": "Com la reserva obligaria de places a la funció pública exclusivament per torn lliure", "correct": false },
      { "text": "Com la supressió de qualsevol tipus de complement de productivitat a l'administració", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 8: La Llei 17/2015 d'igualtat efectiva de dones i homes: Funcions dels ens locals",
    "number": 11,
    "question": "Quina és la finalitat de la creació de comitès o unitats d'igualtat en l'estructura organitzativa de les administracions públiques?",
    "answers": [
      { "text": "Resoldre els recursos d'alçada interposats contra les resolucions del Ple en matèria pressupostària", "correct": false },
      { "text": "Impulsar i vetllar per l'aplicació efectiva de les polítiques i plans d'igualtat dins l'organisme", "correct": true },
      { "text": "Controlar de forma prèvia la legalitat de les ordenances fiscals abans de la seva publicació al BOP", "correct": false },
      { "text": "Gestionar directament la tresoreria centralitzada de les entitats metropolitanes", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 8: La Llei 17/2015 d'igualtat efectiva de dones i homes: Funcions dels ens locals",
    "number": 12,
    "question": "Quin àmbit d'actuació de l'AMB integra de manera directa la perspectiva de gènere pel que fa a l'urbanisme i als serveis metropolitans?",
    "answers": [
      { "text": "El disseny de la mobilitat i l'espai públic segur per a la ciutadania", "correct": true },
      { "text": "La determinació exclusiva del tipus d'interès legal del diner", "correct": false },
      { "text": "L'aprovació dels pressupostos generals de l'Estat espanyol", "correct": false },
      { "text": "La fiscalització de la Sindicatura de Comptes sobre els ajuntaments de més de 500.000 habitants", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 8: La Llei 17/2015 d'igualtat efectiva de dones i homes: Funcions dels ens locals",
    "number": 13,
    "question": "Quin requisit formal s'exigeix a les administracions en relació amb les disposicions de caràcter general i la perspectiva de gènere?",
    "answers": [
      { "text": "La convalidació urgent per part del Parlament europeu en un termini de 15 dies", "correct": false },
      { "text": "L'avaluació prèvia d'impacte de gènere per evitar biaixos en la normativa i els pressupostos", "correct": true },
      { "text": "La publicació en format electrònic exclusiu a la seu de l'Administració General de l'Estat", "correct": false },
      { "text": "L'aprovació per majoria absoluta de tots els sindicats representats a la mesa sectorial", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 8: La Llei 17/2015 d'igualtat efectiva de dones i homes: Funcions dels ens locals",
    "number": 14,
    "question": "Segons l'estructura de la Llei 17/2015, com es qualifica l'actuació orientada a corregir les situacions de desigualtat de fet mitjançant tractes avantatjosos temporals?",
    "answers": [
      { "text": "Discriminació directa injustificada", "correct": false },
      { "text": "Acció positiva", "correct": true },
      { "text": "Vici de nul·litat de ple dret", "correct": false },
      { "text": "Desviació de poder pressupostari", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 8: La Llei 17/2015 d'igualtat efectiva de dones i homes: Funcions dels ens locals",
    "number": 15,
    "question": "Quin organisme o observatori proporciona les directrius tècniques rellevants sobre la implantació i avaluació d'aquesta llei a Catalunya?",
    "answers": [
      { "text": "L'Observatori de la Igualtat de Gènere de la Generalitat de Catalunya", "correct": true },
      { "text": "El Banc Central Europeu de Desenvolupament Regional", "correct": false },
      { "text": "La Tresoreria General de la Seguretat Social", "correct": false },
      { "text": "El Tribunal de Comptes de l'Estat", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 8: La Llei 17/2015 d'igualtat efectiva de dones i homes: Funcions dels ens locals",
    "number": 16,
    "question": "Quina de les següents afirmacions és correcta respecte a l'obligatorietat dels plans d'igualtat interns en l'administració pública?",
    "answers": [
      { "text": "Són voluntaris i depenen de la disponibilitat pressupostària anual de cada ens local", "correct": false },
      { "text": "Són d'obligatori compliment per a les administracions públiques pel que fa al seu personal", "correct": true },
      { "text": "Només s'exigeixen a les entitats privades amb més de 250 treballadors", "correct": false },
      { "text": "Requereixen una autorització prèvia del Ministeri d'Hisenda per a la seva efectivitat", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 8: La Llei 17/2015 d'igualtat efectiva de dones i homes: Funcions dels ens locals",
    "number": 17,
    "question": "En el marc de les competències supramunicipals, quin paper desenvolupa l'AMB en relació amb els Serveis d'Informació i Atenció a les Dones (SIAD)?",
    "answers": [
      { "text": "La integració i coordinació d'aquesta xarxa de recursos de proximitat a l'àmbit metropolità", "correct": true },
      { "text": "La supressió dels SIAD municipals per centralitzar-los en una única oficina central", "correct": false },
      { "text": "La fiscalització comptable exclusiva a través de la Intervenció delegada de l'Estat", "correct": false },
      { "text": "La prohibició de finançar-los amb fons propis de la corporació", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 8: La Llei 17/2015 d'igualtat efectiva de dones i homes: Funcions dels ens locals",
    "number": 18,
    "question": "Quina característica defineix la transversalitat o mainstreaming de gènere en la gestió pública local?",
    "answers": [
      { "text": "La sectorialització estricta de les mesures de benestar social", "correct": false },
      { "text": "La seva presència i integració de manera itinerant en totes les polítiques i actuacions de l'ens", "correct": true },
      { "text": "L'exclusió de la perspectiva de gènere en els contractes de serveis i obres públiques", "correct": false },
      { "text": "La seva aplicació únicament en l'aprovació del pressupost de despeses financeres", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 8: La Llei 17/2015 d'igualtat efectiva de dones i homes: Funcions dels ens locals",
    "number": 19,
    "question": "Quin efecte tenen les clàusules socials relatives a la igualtat de gènere en la contractació de l'AMB?",
    "answers": [
      { "text": "S'introdueixen com a requisits o criteris d'adjudicació en les licitacions públiques", "correct": true },
      { "text": "Invaliden automàticament qualsevol plec de clàusules administratives particulars", "correct": false },
      { "text": "Són d'aplicació exclusiva per a contractes menors inferiors a 3.000 euros", "correct": false },
      { "text": "Substitueixen la necessitat de presentar la garantia definitiva", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 8: La Llei 17/2015 d'igualtat efectiva de dones i homes: Funcions dels ens locals",
    "number": 20,
    "question": "Quina és una de les trampes habituals en els exàmens de la C1 de l'AMB respecte a la naturalesa de les accions positives?",
    "answers": [
      { "text": "Considerar-les errònieament com a actes discriminatoris prohibits per la llei", "correct": true },
      { "text": "Definir-les com a obligacions tributàries de caràcter estrictament municipal", "correct": false },
      { "text": "Atribuir-ne la competència exclusiva a la Unió Duanera", "correct": false },
      { "text": "Confondre-les amb els ingressos de dret privat derivats del patrimoni", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 8: La Llei 17/2015 d'igualtat efectiva de dones i homes: Funcions dels ens locals",
    "number": 21,
    "question": "Segons la Llei 17/2015, a qui correspongui l'elaboració de disposicions de caràcter general, quin tipus d'anàlisi prèvia ha d'incorporar?",
    "answers": [
      { "text": "Una avaluació d'impacte de gènere per garantir l'absència de biaixos", "correct": true },
      { "text": "Un estudi de viabilitat borsària de les entitats col·laboradores", "correct": false },
      { "text": "Una auditoria externa realitzada per una empresa privada de capital estranger", "correct": false },
      { "text": "Un informe vinculant del Ministeri d'Administracions Públiques de l'Estat", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 8: La Llei 17/2015 d'igualtat efectiva de dones i homes: Funcions dels ens locals",
    "number": 22,
    "question": "Quin òrgan o ens local té encomanat donar suport i coordinar els 36 municipis metropolitans en l'execució d'aquestes polítiques transversals?",
    "answers": [
      { "text": "L'Àrea Metropolitana de Barcelona (AMB)", "correct": true },
      { "text": "El Consell General de la Vall d'Aran", "correct": false },
      { "text": "La Cambra de Comerç de Barcelona de manera exclusiva", "correct": false },
      { "text": "El Departament d'Economia i Hisenda de l'Estat", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 8: La Llei 17/2015 d'igualtat efectiva de dones i homes: Funcions dels ens locals",
    "number": 23,
    "question": "Com influeix la perspectiva de gènere en la gestió dels pressupostos locals (anomenats pressupostos violeta)?",
    "answers": [
      { "text": "Assegurant que la distribució de recursos públics reflecteixi les necessitats reals de la ciutadania sense biaixos", "correct": true },
      { "text": "Incrementant automàticament un 20% el capítol 1 de remuneracions de personal de la corporació", "correct": false },
      { "text": "Eliminat la partida destinada a inversions reals per destinar-la a passius financers", "correct": false },
      { "text": "Evitant la intervenció prèvia de la Intervenció en els expedients de despesa corrent", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 8: La Llei 17/2015 d'igualtat efectiva de dones i homes: Funcions dels ens locals",
    "number": 24,
    "question": "Quin tipus de discriminació prohibeix expressament el principi d'igualtat de tracte recollit a la normativa d'igualtat?",
    "answers": [
      { "text": "Tota discriminació, tant directa com indirecta, per raó de sexe", "correct": true },
      { "text": "Només aquella discriminació que es produeixi de manera manifesta i escrita en un contracte laboral", "correct": false },
      { "text": "Exclusivament la discriminació salarial en el sector de la construcció", "correct": false },
      { "text": "Les accions positives orientades a afavorir col·lectius desafavorits", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 8: La Llei 17/2015 d'igualtat efectiva de dones i homes: Funcions dels ens locals",
    "number": 25,
    "question": "Segons el marc competencial de la Llei 17/2015, quina de les següents afirmacions descriu correctament les funcions dels ens locals en la prevenció de la violència masclista?",
    "answers": [
      { "text": "La coordinació i actuació en xarxa amb la Generalitat per a la prevenció, detecció i erradicació", "correct": true },
      { "text": "La imposició de penes privatives de llibertat des dels jutjats municipals de pau", "correct": false },
      { "text": "La gestió exclusiva dels centres penitenciaris de règim tancat a l'àrea metropolitana", "correct": false },
      { "text": "L'exclusió total de qualsevol actuació municipal en matèria de seguretat i assistència", "correct": false }
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