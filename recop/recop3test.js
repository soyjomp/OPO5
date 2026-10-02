const TEST_ID = "recop3test.js"; 

const questions = [
{
    "theme": "Bloc III - Tema 9: Tipologia de documents administratius i trets característics",
    "number": 1,
    "question": "Segons la normativa aplicable i la doctrina sobre els actes administratius, quin dels següents elements o circumstàncies no es correspon amb una causa de nul·litat de ple dret d'un acte administratiu?",
    "answers": [
      { "text": "Els actes dictats amb omissió total i absoluta del procediment legalment establert o de les regles essencials per a la formació de la voluntat dels òrgans col·legiats", "correct": false },
      { "text": "La realització d'actuacions administratives fora del termini establert quan així ho imposa la naturalesa de l'acte o termini", "correct": true },
      { "text": "Els actes que lesionen els drets i les llibertats susceptibles d'empara constitucional recollits als articles 14 a 29 de la Constitució Espanyola", "correct": false },
      { "text": "Els actes dictats per un òrgan manifestament incompetent per raó de la matèria o del territori", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 9: Tipologia de documents administratius i trets característics",
    "number": 2,
    "question": "Pel que fa a la distinció entre actes definitius i actes de tràmit en el procediment administratiu, quina afirmació és jurídicament correcta?",
    "answers": [
      { "text": "Tots els actes de tràmit són directament impugnables tant en via administrativa com contenciosa administrativa", "correct": false },
      { "text": "Els actes de tràmit no són mai impugnables sota cap circumstància fins que es dicta la resolució final", "correct": false },
      { "text": "Els actes de tràmit qualificats són aquells que decideixen directament o indirectament el fons, determinen la impossibilitat de continuar el procediment o produeixen indefensió, essent per tant impugnables", "correct": true },
      { "text": "Els actes definitius només poden ser objecte de recurs extraordinari de revisió, excloent el recurs d'alçada", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 9: Tipologia de documents administratius i trets característics",
    "number": 3,
    "question": "En relació amb el règim d'invalidesa dels actes administratius, quina és una diferència fonamental entre un acte nul de ple dret i un acte anul·lable?",
    "answers": [
      { "text": "L'acte nul de ple dret pot adquirir fermesa pel simple transcurs dels terminis d'impugnació si no es recorre, al contrari de l'anul·lable", "correct": false },
      { "text": "L'acte anul·lable pot ser convalidat per l'Administració mitjançant l'esmena dels vicis de què pateix, mentre que la nul·litat de ple dret no és convalidable i no pot adquirir fermesa", "correct": true },
      { "text": "Els actes anul·lables no produeixen cap mena d'efecte jurídic des del moment mateix de la seva emissió", "correct": false },
      { "text": "La nul·litat de ple dret només pot ser declarada pels tribunals de l'ordre jurisdiccional civil", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 9: Tipologia de documents administratius i trets característics",
    "number": 4,
    "question": "Pel que fa a la classificació i règim dels actes administratius segons la seva exteriorització, quin d'ells es correspon amb l'anomenat acte presumpte?",
    "answers": [
      { "text": "Aquell en què l'Administració no dicta resolució expressa, i l'ordenament jurídic fixa el sentit de la conducta administrativa pel simple transcurs del termini establert (silenci administratiu)", "correct": true },
      { "text": "Aquell en què es fa una exteriorització clara i inequívoca mitjançant llenguatge oral o escrit", "correct": false },
      { "text": "Aquell on no hi ha manifestació externa però es dedueix una voluntat a partir de la conducta material de l'Administració en ingressar una quantitat", "correct": false },
      { "text": "Aquell que dicten els òrgans col·legiats de l'AMB i queda recollit directament a les actes oficials", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 9: Tipologia de documents administratius i trets característics",
    "number": 5,
    "question": "D'acord amb la Llei 31/2010 de l'Àrea Metropolitana de Barcelona (AMB) i el règim dels seus òrgans de govern, quin òrgan és el competent per adoptar els acords metropolitans de caràcter normatiu o pressupostari?",
    "answers": [
      { "text": "La Junta de Govern", "correct": false },
      { "text": "El Ple de l'AMB, format pels consellers metropolitans representants dels 36 municipis", "correct": true },
      { "text": "La Gerència de l'AMB mitjançant resolució executiva", "correct": false },
      { "text": "La Comissió Especial de Comptes", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 9: Tipologia de documents administratius i trets característics",
    "number": 6,
    "question": "Quin tipus de document administratiu té com a funció principal expedir un document públic per part de qui té atribuïda la fe pública per donar fe d'actes, acords, dades o resolucions que consten en registres o expedients?",
    "answers": [
      { "text": "Un informe de caràcter tècnic", "correct": false },
      { "text": "Una diligència de constància", "correct": false },
      { "text": "Un certificat expedit pel secretari o fedatari de la corporació", "correct": true },
      { "text": "Una proposta de resolució de tràmit", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 9: Tipologia de documents administratius i trets característics",
    "number": 7,
    "question": "Pel que fa a l'emetre informes en la tramitació dels procediments administratius, quin és el seu caràcter general tret que una norma disposi expressament el contrari?",
    "answers": [
      { "text": "Són sempre obligatoris i vinculants per a l'òrgan resolutor", "correct": false },
      { "text": "Són de caràcter facultatiu i no vinculants", "correct": true },
      { "text": "Tenen rang normatiu equivalent a un reglament executiu", "correct": false },
      { "text": "Constitueixen per si mateixos actes definitius que posen fi a la via administrativa", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 9: Tipologia de documents administratius i trets característics",
    "number": 8,
    "question": "Quina característica defineix pròpiament els anomenats actes administratius reglats enfront dels discrecionals?",
    "answers": [
      { "text": "L'ordenament jurídic no preveu l'activitat de l'Administració en tots els seus aspectes, deixant marge d'apreciació", "correct": false },
      { "text": "L'ordenament jurídic preveu l'activitat de l'Administració en tots els seus aspectes, de manera que només pot resoldre d'una forma determinada segons els fets", "correct": true },
      { "text": "Sempre requereixen una motivació complexa per justificar l'oportunitat de la decisió adoptada", "correct": false },
      { "text": "Estan exempts de qualsevol tipus de control per part de la jurisdicció contenciosa administrativa", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 9: Tipologia de documents administratius i trets característics",
    "number": 9,
    "question": "Quin requisit resulta imprescindible, segons la doctrina i la jurisprudència, perquè l'exercici d'una potestat discrecional per part de l'Administració no incorri en arbitrarietat o desviació de poder?",
    "answers": [
      { "text": "Que la decisió sigui adoptada per unanimitat de tots els membres de l'òrgan col·legiat", "correct": false },
      { "text": "Que els fins perseguits per la potestat estiguin prèviament determinats per l'ordenament jurídic", "correct": true },
      { "text": "Que l'acte es limiti a reproduir fidelment un altre de ferm anterior", "correct": false },
      { "text": "Que compti prèviament amb un informe preceptiu i vinculant del Ministeri d'Hisenda", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 9: Tipologia de documents administratius i trets característics",
    "number": 10,
    "question": "Quin és l'efecte jurídic de la tècnica de la conversió dels actes administratius nuls o anul·lables segons la regulació aplicable?",
    "answers": [
      { "text": "Permet que els actes nuls o anul·lables que continguin els elements constitutius d'un altre de diferent puguin produir els efectes d'aquest", "correct": true },
      { "text": "Invalida automàticament tots els actes posteriors que guardin relació amb el procediment", "correct": false },
      { "text": "Obliga a retrotraure totes les actuacions fins al moment de la iniciació de la sol·licitud", "correct": false },
      { "text": "Convalida de manera retroactiva qualsevol vici d'incompetència manifesta per raó de la matèria", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 9: Tipologia de documents administratius i trets característics",
    "number": 11,
    "question": "Quina és la definició jurídica més adequada d'un document administratiu segons la teoria general del procediment?",
    "answers": [
      { "text": "Qualsevol contracte de dret privat subscrit per una entitat local amb una empresa proveïdora", "correct": false },
      { "text": "El suport material en què es plasma la declaració de voluntat, de coneixement, de juí o de desig de l'Administració Pública en l'exercici de les seves funcions", "correct": true },
      { "text": "Un full de càlcul intern d'ús exclusiu i privat per al personal laboral d'una empresa subcontractada", "correct": false },
      { "text": "L'edicte publicat de forma obligatòria a la premsa diària d'àmbit estatal", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 9: Tipologia de documents administratius i trets característics",
    "number": 12,
    "question": "Pel que fa a l'estructura general d'un document administratiu escrit, quines parts fonamentals es distingeixen habitualment?",
    "answers": [
      { "text": "Introducció, clàusules penals i annex fiscal", "correct": false },
      { "text": "Capçalera (dades de l'ens), cos (antecedents i fonaments/conclusió) i peu (lloc, data, signatura i peu de recursos)", "correct": true },
      { "text": "Títol executiu, secció comptable i segell de caixa", "correct": false },
      { "text": "Preàmbul polític, articulat pressupostari i disposició derogatòria", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 9: Tipologia de documents administratius i trets característics",
    "number": 13,
    "question": "Quina és la diferència orgànica fonamental entre una resolució i un acord dins de l'activitat decisòria de l'Administració Pública?",
    "answers": [
      { "text": "La resolució és dictada per un òrgan unipersonal (com el President o Gerent), mentre que l'acord és adoptat per òrgans col·legiats (com el Ple o la Junta de Govern)", "correct": true },
      { "text": "L'acord només pot referir-se a matèries de personal, mentre que la resolució és exclusivament pressupostària", "correct": false },
      { "text": "La resolució manca de motivació jurídica obligatòria, a diferència de l'acord col·legiat", "correct": false },
      { "text": "No existeix cap diferència jurídica ni formal entre ambdós conceptes en el dret administratiu local", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 9: Tipologia de documents administratius i trets característics",
    "number": 14,
    "question": "Què estableix el principi de conservació dels actes administratius respecte a la declaració de nul·litat o anul·lació d'actuacions en un procediment?",
    "answers": [
      { "text": "L'òrgan que declara la nul·litat o anul·la les actuacions ha de disposar la conservació d'aquells actes i tràmits el contingut dels qual s'hauria mantingut igual si no s'hagués comès la infracció", "correct": true },
      { "text": "Implica necessàriament la destrucció i nul·litat de tot l'expedient administratiu des de la seva primera sol·licitud", "correct": false },
      { "text": "Prohibeix absolutament qualsevol tipus de rectificació d'errors materials en els documents", "correct": false },
      { "text": "Determina que cap acte anterior pot ser tingut en compte en un nou procediment", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 9: Tipologia de documents administratius i trets característics",
    "number": 15,
    "question": "Segons el règim de la invalidació, quin efecte temporal produeix l'acte de validació d'un acte anul·lable efectuat per l'Administració?",
    "answers": [
      { "text": "Produeix efectes exclusivament des de la data de la seva validació, tret que concorrin supòsits que justifiquin l'eficàcia retroactiva legalment permesa", "correct": true },
      { "text": "Té sempre efectes retroactius absoluts fins al dia de la fundació de l'ens públic", "correct": false },
      { "text": "No produeix cap efecte jurídic fins que no transcorren quatre anys des de la seva publicació", "correct": false },
      { "text": "Converteix automàticament l'acte en una disposició de caràcter general", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 9: Tipologia de documents administratius i trets característics",
    "number": 16,
    "question": "Quina qualificació rep aquella irregularitat que consisteix en un defecte de forma que no impedeix que l'acte aconsegueixi la seva finalitat ni provoca indefensió als interessats?",
    "answers": [
      { "text": "Nul·litat de ple dret de caràcter absolut", "correct": false },
      { "text": "Anul·labilitat per desviació de poder", "correct": false },
      { "text": "Irregularitat no invalidant (acte merament irregular)", "correct": true },
      { "text": "Incompetència manifesta per raó de la matèria", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 9: Tipologia de documents administratius i trets característics",
    "number": 17,
    "question": "Quin és el valor o la funció de les diligències dins de la gestió documental d'un expedient administratiu?",
    "answers": [
      { "text": "Anotacions o justificacions formals que s'estenen en l'expedient per deixar constància d'un tràmit, recepció d'un document o notificació", "correct": true },
      { "text": "Resolicions definitives que exhaureixen la via administrativa i resolen el fons d'un recurs", "correct": false },
      { "text": "Informes jurídics preceptius emesos per la secretaria general sobre matèria urbanística", "correct": false },
      {"text": "Actes de gravamen que imposen una sanció disciplinària a un funcionari públic", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 9: Tipologia de documents administratius i trets característics",
    "number": 18,
    "question": "En relació amb la publicitat i transparència institucional de l'AMB a través del seu portal web oficial (amb.cat), quina obligació documental destaca especialment?",
    "answers": [
      { "text": "La publicació sistemàtica de resolucions, acords d'òrgans col·legiats i comptes anuals per garantir l'accés públic a la informació institucional", "correct": true },
      { "text": "La publicació exclusiva de les actes internes de les reunions de coordinació de departament sense validesa jurídica", "correct": false },
      { "text": "La prohibició de difondre cap mena d'acord adoptat per la Junta de Govern", "correct": false },
      { "text": "La tramitació de les sol·licituds ciutadanes exclusivament en format paper per registre presencial obligatori", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 9: Tipologia de documents administratius i trets característics",
    "number": 19,
    "question": "Quin tipus de vici o causa determina la nul·litat de ple dret d'un acte administratiu en relació amb el contingut del mateix?",
    "answers": [
      { "text": "Els actes que tenen un contingut impossible", "correct": true },
      {"text": "Els actes el contingut dels quals resulti simplement desinformatiu o poc clar", "correct": false },
      { "text": "Els actes el contingut dels quals pugui ser convalidat posteriorment per un òrgan inferior", "correct": false },
      { "text": "Els actes dictats dins del termini legal establert per la normativa sectorial", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 9: Tipologia de documents administratius i trets característics",
    "number": 20,
    "question": "Quina és la consequència jurídica sobre la producció d'efectes dels actes administratius afectats per una causa de nul·litat de ple dret?",
    "answers": [
      { "text": "No produeixen efectes legals vàlids, i tot i ser immediatament executius per la presumpció de validesa, cal que una resolució declari la nul·litat per eliminar-los", "correct": true },
      { "text": "Són plenament vàlids i inatacables des del mateix moment de la seva notificació", "correct": false },
      { "text": "Es consideren actes merament irregulars convalidables de forma automàtica al cap de quinze dies", "correct": false },
      { "text": "Adquireixen fermesa jurídica inqüestionable si no es recorren en el termini d'un mes", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 9: Tipologia de documents administratius i trets característics",
    "number": 21,
    "question": "Segons la doctrina científica i la pràctica d'oposicions, quin error o trampa és habitual respecte a qui pot emetre un certificat administratiu vàlid?",
    "answers": [
      { "text": "Creure que qualsevol informe tècnic d'un servei municipal pot suplir o fer fe pública d'un certificat d'acords o dades registrals reservades al secretari o fedatari", "correct": true },
      { "text": "Pensar que els certificats només poden ser signats pel conseller delegat de la Generalitat", "correct": false },
      {"text": "Assumir que els certificats no requereixen cap mena de signatura electrònica reconeguda", "correct": false },
      { "text": "Considerar que un certificat perd la seva validesa si s'emet a través de la seu electrònica", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 9: Tipologia de documents administratius i trets característics",
    "number": 22,
    "question": "Pel que fa a la incomunicació d'invalidesa en els actes i expedients administratius, quina regla general s'aplica?",
    "answers": [
      { "text": "La invalidesa d'un acte o d'una part no implica la dels successius actes o la de les altres parts que en siguin independents", "correct": true },
      { "text": "La declaració d'anul·labilitat d'un tràmit intermedi invalida necessàriament tot l'expedient fins al final", "correct": false },
      { "text": "Qualsevol error en la capçalera d'un document arrossega la nul·litat de totes les resolucions de l'ens", "correct": false },
      { "text": "Els actes independents queden automàticament anul·lats si es modifica la composició de l'òrgan col·legiat", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 9: Tipologia de documents administratius i trets característics",
    "number": 23,
    "question": "Quina circumstància d'incompetència genera específicament la nul·litat de ple dret d'un acte administratiu segons la normativa aplicable?",
    "answers": [
      { "text": "La incompetència manifesta per raó de la matèria o del territori", "correct": true },
      { "text": "La simple incompetència jeràrquica subsanable mitjançant una delegació tacita", "correct": false },
      { "text": "L'exercici d'una competència pròpia fora del territori de la comunitat autònoma per mera urgència", "correct": false },
      { "text": "La signatura d'un document per delegació expressa publicada al diari oficial", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 9: Tipologia de documents administratius i trets característics",
    "number": 24,
    "question": "Quin paper juguen les Bases d'Execució del Pressupost i la Seu Electrònica en relació amb la documentació administrativa a l'AMB?",
    "answers": [
      { "text": "Regulen l'adaptació de la gestió pressupostària i permeten tramitar i publicar resolucions, edictes i convocatòries de subvencions amb garanties d'autenticitat", "correct": true },
      { "text": "Són documents d'caràcter exclusivament privat que no tenen cap repercussió en la gestió dels expedients", "correct": false },
      { "text": "Serveixen únicament per fixar les retribucions del personal laboral sense relació amb els actes administratius", "correct": false },
      { "text": "Impeixen la publicació de cap acord adoptat per la corporació metropolitana en línia", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 9: Tipologia de documents administratius i trets característics",
    "number": 25,
    "question": "Davant d'un acte administratiu que incorre en una infracció de l'ordenament jurídic que no arriba a la gravetat de la nul·litat de ple dret, quin concepte jurídic s'aplica?",
    "answers": [
      { "text": "L'anul·labilitat, que permet l'anul·lació de l'acte dins de determinats terminis i possibilita la seva convalidació", "correct": true },
      { "text": "La inexistència jurídica automàtica sense necessitat de cap tipus de declaració prèvia", "correct": false },
      { "text": "La conversió necessària en una disposició de caràcter general de rang superior", "correct": false },
      { "text": "La inaplicació permanent per part de qualsevol ciutadà sense interposar recursos", "correct": false }
    ]
  },
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
   {
    "theme": "Bloc III - Tema 11: Comunicacions de la ciutadania amb l'Administració: La instància i altres mecanismes",
    "number": 1,
    "question": "Segons l'article 66 de la Llei 39/2015 (LPACAP), quin dels següents elements no constitueix un requisit essencial que hagi de contenir necessàriament la sol·licitud o instància genèrica?",
    "answers": [
      { "text": "El nom i cognoms de l'interessat, així com la identificació del mitjà electrònic o l'adreça a efectes de notificació.", "correct": false },
      { "text": "Els fets, les raons i la petició en què es concrete, amb tota claredat, la sol·licitud.", "correct": false },
      { "text": "L'acreditació de disposar d'un compte corrent obert a una entitat bancària col·laboradora per a la devolució de taxes.", "correct": true },
      { "text": "El lloc, la data i la signatura de l'sol·licitant o l'acreditació de l'autenticitat de la seva voluntat per qualsevol mitjà.", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 11: Comunicacions de la ciutadania amb l'Administració: La instància i altres mecanismes",
    "number": 2,
    "question": "D'acord amb la Llei 39/2015, si una sol·licitud d'iniciació no reuneix els requisits exigits, quin és el termini general que l'Administració ha de concedir a l'interessat per esmenar la falta o aportar els documents requerits?",
    "answers": [
      { "text": "Un termini de 5 dies hàbils, ampliable d'ofici en 5 dies més.", "correct": false },
      { "text": "Un termini de 10 dies, amb indicació que, si no ho fa, se li tindrà per desistir de la seva petició.", "correct": true },
      { "text": "Un termini improrrogable de 15 dies naturals.", "correct": false },
      { "text": "Un mes comptador des de l'endemà de la notificació del requeriment.", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 11: Comunicacions de la ciutadania amb l'Administració: La instància i altres mecanismes",
    "number": 3,
    "question": "Quina és la naturalesa jurídica de la declaració responsable i la comunicació prèvia d'acord amb l'article 69 de la Llei 39/2015?",
    "answers": [
      { "text": "Són actes resolutoris de tràmit qualificat que exhaureixen la via administrativa de manera automàtica.", "correct": false },
      { "text": "Són documents a través dels quals l'interessat manifesta sota la seva responsabilitat complir els requisits establerts, habilitant l'exercici de l'activitat des de la seva presentació quan correspongui.", "correct": true },
      { "text": "Constitueixen un tipus especial de recurs administratiu substitutiu de l'alçada per a activitats classificades.", "correct": false },
      { "text": "Són autoritzacions prèvies de caràcter discrecional atorgades pel ple de la corporació local.", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 11: Comunicacions de la ciutadania amb l'Administració: La instància i altres mecanismes",
    "number": 4,
    "question": "Respecte a la presentació de documents en les oficines d'assistència en matèria de registres, quin efecte té l'ús de mitjans electrònics per a les persones físiques segons la normativa vigent?",
    "answers": [
      { "text": "És obligatori en tot moment igual que per a les persones jurídiques.", "correct": false },
      { "text": "És totalment voluntari, podent triar en tot moment si comuniquen amb l'Administració per mitjans electrònics o en paper.", "correct": true },
      { "text": "Només està permès per a la interposició de recursos especials de contractació.", "correct": false },
      { "text": "Requereix una autorització prèvia de l'òrgan competent en matèria de govern digital de l'AMB.", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 11: Comunicacions de la ciutadania amb l'Administració: La instància i altres mecanismes",
    "number": 5,
    "question": "Quina consideració o efecte jurídic tenen les queixes i suggeriments formulats per la ciutadania davant l'Administració Pública?",
    "answers": [
      { "text": "Constitueixen un recurs administratiu ordinari que interromp el termini per acudir a la jurisdicció contenciosa.", "correct": false },
      { "text": "Són canals orientats a avaluar i millorar la qualitat dels serveis públics que no tenen en cap cas la naturalesa jurídica d'un recurs ni suspenen terminis.", "correct": true },
      { "text": "Obliguen l'Administració a dictar una resolució expressa impugnable sota sanció de nul·litat de ple dret.", "correct": false },
      { "text": "Tenen caràcter vinculant per a la modificació immediata de les ordenances fiscals metropolitanes.", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 11: Comunicacions de la ciutadania amb l'Administració: La instància i altres mecanismes",
    "number": 6,
    "question": "Com es pot acreditar vàlidament la representació davant les administracions públiques segons la Llei 39/2015?",
    "answers": [
      { "text": "Únicament mitjançant escriptura pública atorgada davant de notari.", "correct": false },
      { "text": "Mitjançant qualsevol mitjà acreditable que deixi constància fidel, inclòs l'apoderament apud acta efectuat per compareixença presencial o electrònica, o inscripció en el registre electrònic d'apoderaments.", "correct": true },
      { "text": "Només mitjançant signatura electrònica avançada basada en certificat reconegut de persona física.", "correct": false },
      { "text": "Mitjançant una comunicació verbal davant del registre general en el moment de la presentació.", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 11: Comunicacions de la ciutadania amb l'Administració: La instància i altres mecanismes",
    "number": 7,
    "question": "Pel que fa al funcionament del registre electrònic en l'àmbit de la tramitació administrativa, quina garantia temporal s'emet de forma automàtica amb la recepció de documents?",
    "answers": [
      { "text": "Un certificat de conformitat pressupostària firmat per la Intervenció.", "correct": false },
      { "text": "Un rebut amb el segell de temps i el número d'entrada o sortida que acredita la integritat i validesa temporal de la presentació.", "correct": true },
      { "text": "Una provisió de fons provisional subjecta a liquidació posterior.", "correct": false },
      { "text": "Una validació de suficiència de poders de representació automàtica.", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 11: Comunicacions de la ciutadania amb l'Administració: La instància i altres mecanismes",
    "number": 8,
    "question": "Segons el portal oficial de l'Àrea Metropolitana de Barcelona (amb.cat), quina característica principal presenta la instància genèrica de la Seu Electrònica de l'AMB?",
    "answers": [
      { "text": "Només pot ser utilitzada de manera presencial a les oficines centrals del carrer 62 de la Zona Franca.", "correct": false },
      { "text": "Permet a la ciutadania presentar sol·licituds les 24 hores del dia en àmbits com transport, mobilitat, habitatge o tributs, mitjançant identificació digital reconeguda.", "correct": true },
      { "text": "Està reservada exclusivament per a la interposició de recursos d'alçada contra acords del Consell Metropolità.", "correct": false },
      { "text": "Requereix el pagament previ d'una taxa de tramitació general per registre telemàtic.", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 11: Comunicacions de la ciutadania amb l'Administració: La instància i altres mecanismes",
    "number": 9,
    "question": "Quin és el règim d'obligatorietat de l'ús de mitjans electrònics per a les persones jurídiques en les seves relacions amb l'Administració d'acord amb la normativa de procediment administratiu comú?",
    "answers": [
      { "text": "És totalment voluntari i depèn de la decisió de l'òrgan gestor.", "correct": false },
      { "text": "És obligatori en tot cas per a la realització de qualsevol tràmit d'un procediment administratiu.", "correct": true },
      { "text": "Només s'aplica si el capital social supera els 60.000 euros.", "correct": false },
      { "text": "Està exempt per a les entitats sense ànim de lucre i associacions de veïns.", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 11: Comunicacions de la ciutadania amb l'Administració: La instància i altres mecanismes",
    "number": 10,
    "question": "Quina afirmació és correcta pel que fa a la subsanació de defectes en la presentació d'una sol·licitud i les conseqüències de la inacció de l'interessat?",
    "answers": [
      { "text": "Si transcorre el termini de 10 dies sense esmenar, se li tindrà per desistit de la seva petició, prèvia resolució dictada en els termes legals.", "correct": true },
      { "text": "L'expedient es caduca automàticament als 3 mesos sense necessitat de cap resolució expressa.", "correct": false },
      { "text": "Es considera que l'acte adquireix fermesa administrativa i no es pot tornar a presentar una nova instància.", "correct": false },
      { "text": "L'Administració està obligada a esmenar d'ofici els errors materials del ciutadà sense requeriment previ.", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 11: Comunicacions de la ciutadania amb l'Administració: La instància i altres mecanismes",
    "number": 11,
    "question": "Segons el marc normatiu aplicable a l'AMB i a les administracions públiques, quin efecte produeix la presentació d'una queixa o suggeriment sobre els terminis de tramitació d'altres procediments?",
    "answers": [
      { "text": "Interromp tots els terminis de caducitat i prescripció en curs.", "correct": false },
      { "text": "No té cap efecte suspensiu ni constitueix un recurs administratiu.", "correct": true },
      { "text": " приоrítza la resolució del procediment principal per ordre de entrada de la queixa.", "correct": false },
      { "text": "Determina la nul·litat de ple dret de les actuacions anteriors realitzades pel servei afectat.", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 11: Comunicacions de la ciutadania amb l'Administració: La instància i altres mecanismes",
    "number": 12,
    "question": "Quin dels següents mitjans no es troba previst generalment com a lloc vàlid de presentació de documents i sol·licituds adreçades a l'Administració segons l'article 16 de la Llei 39/2015?",
    "answers": [
      { "text": "El registre electrònic de l'administració a la qual s'adreçquin.", "correct": false },
      { "text": "Les oficines de Correus, en la forma que reglamentàriament s'estableixi.", "correct": false },
      { "text": "Les bústies de xarxes socials institucionals habilitades per a tràmits d'urgència.", "correct": true },
      { "text": "Les representacions diplomàtiques o oficines consulars d'Espanya a l'estranger.", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 11: Comunicacions de la ciutadania amb l'Administració: La instància i altres mecanismes",
    "number": 13,
    "question": "En relació amb els canals d'atenció ciutadana de l'AMB, quina finalitat tenen les bústies de suggeriments i reclamacions metropolitanes respecte als 36 municipis integrants?",
    "answers": [
      { "text": "Tramitar expedients sancionadors en matèria de trànsit i circulació viària.", "correct": false },
      { "text": "Recollir incidències sobre serveis públics metropolitans com autobusos TMB, platges, parcs o cicle de l'aigua per garantir l'eficiència i qualitat del servei.", "correct": true },
      { "text": "Aprovar provisionalment les modificacions de les ordenances fiscals i taxes metropolitanes.", "correct": false },
      { "text": "Resoldre amb caràcter vinculant els conflictes de competència entre ajuntaments i l'AMB.", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 11: Comunicacions de la ciutadania amb l'Administració: La instància i altres mecanismes",
    "number": 14,
    "question": "Quin element distingeix bàsicament una declaració responsable d'una sol·licitud o instància genèrica ordinària?",
    "answers": [
      { "text": "La declaració responsable no requereix cap tipus de comprovació posterior per part de l'Administració.", "correct": false },
      { "text": "La declaració responsable és un document on el ciutadà manifesta complir els requisits exigits per exercir un dret o activitat, habilitant l'actuació des de la seva presentació, mentre la instància inicia un procediment d'aprovació o resolució.", "correct": true },
      { "text": "La instància genèrica només pot ser presentada per persones jurídiques a través de representant legal.", "correct": false },
      { "text": "La declaració responsable substitueix necessàriament qualsevol llicència d'obra major municipal.", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 11: Comunicacions de la ciutadania amb l'Administració: La instància i altres mecanismes",
    "number": 15,
    "question": "Quina de les següents afirmacions relatives a l'apoderament apud acta és correcta en el marc de la representació administrativa?",
    "answers": [
      { "text": "Només es pot constituir mitjançant escriptura pública davant notari col·legiat a Catalunya.", "correct": false },
      { "text": "Es pot efectuar tant per compareixença presencial en les oficines d'assistència en matèria de registres com de forma electrònica mitjançant accés al registre electrònic d'apoderaments.", "correct": true },
      { "text": "Té una vigència màxima improrrogable de sis mesos des de la seva data d'atorgament.", "correct": false },
      { "text": "Exigeix el pagament d'una taxa de inscripció en el registre mercantil de l'ente local.", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 11: Comunicacions de la ciutadania amb l'Administració: La instància i altres mecanismes",
    "number": 16,
    "question": "Segons la regulació de la LPACAP, quin caràcter tenen els registres electrònics generals de cada Administració respecte a la recepció i remissió de documents?",
    "answers": [
      { "text": "Funcionen de manera autònoma i tancada, impedint el trasllat de documents entre diferents administracions públiques.", "correct": false },
      { "text": "Permeten la presentació de qualsevol document adreçat a qualsevol òrgan de la mateixa administració o d'altres administracions públiques connectades a través del sistema d'interconnexió de registres.", "correct": true },
      { "text": "Només admeten documents firmats amb certificat digital de tipus corporatiu o de representant de persona jurídica.", "correct": false },
      { "text": "Estan subjectes a horari d'atenció al públic de 9:00 a 14:00 hores en dies laborables.", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 11: Comunicacions de la ciutadania amb l'Administració: La instància i altres mecanismes",
    "number": 17,
    "question": "Quina és la conseqüència jurídica principal quan un ciutadà presenta una comunicació prèvia per iniciar una activitat sotmesa a aquest règim?",
    "answers": [
      { "text": "S'obre un període d'informació pública obligatòria de trenta dies naturals al Butlletí Oficial de la Província.", "correct": false },
      { "text": "Permet l'inici de l'actuació o activitat sota el control i comprovació posterior de l'Administració.", "correct": true },
      { "text": "L'Administració queda vinculada per un silenci positiu que atorga drets permanents inrevocables.", "correct": false },
      { "text": "S'eximeix el titular del pagament de qualsevol tribut o taxa local derivada de la instal·lació.", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 11: Comunicacions de la ciutadania amb l'Administració: La instància i altres mecanismes",
    "number": 18,
    "question": "Dins de la tramitació telemàtica a l'AMB, quin tipus de sistema d'identificació i signatura electrònica s'accepta generalment per a la presentació de sol·licituds a través de la Seu Electrònica?",
    "answers": [
      { "text": "Únicament la signatura manuscrita escanejada i adjuntada en format PDF.", "correct": false },
      { "text": "Sistemes de signatura i identificació digital reconeguts com idCAT, Cl@ve o certificat digital vàlid.", "correct": true },
      { "text": "Un codi PIN enviat per missatgeria instantània no validada de caràcter temporal.", "correct": false },
      { "text": "Una autorització verbal gravada mitjançant un fitxer d'àudio al registre general.", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 11: Comunicacions de la ciutadania amb l'Administració: La instància i altres mecanismes",
    "number": 19,
    "question": "Quina exigència formal estableix la normativa pel que fa a la identificació dels òrgans administratius en les sol·licituds adreçades a les administracions públiques?",
    "answers": [
      { "text": "S'ha d'indicar necessàriament l'òrgan, centre o unitat administrativa a la qual s'adreça la petició.", "correct": true },
      { "text": "És indiferent l'òrgan destinatari, ja que el registre central redistribueix d'ofici sense limitació temporal.", "correct": false },
      { "text": "Només cal consignar el nom del President de la corporació local corresponent.", "correct": false },
      { "text": "S'ha de dirigir exclusivament al departament de secretaria general de la Generalitat de Catalunya.", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 11: Comunicacions de la ciutadania amb l'Administració: La instància i altres mecanismes",
    "number": 20,
    "question": "Quin és l'objectiu principal de la regulació de les oficines d'assistència en matèria de registres segons la Llei 39/2015?",
    "answers": [
      { "text": "Centralitzar totes les decisions de contractació pública de les entitats locals de més de 500.000 habitants.", "correct": false },
      { "text": "Assessorar i facilitar als ciutadans la presentació de documents i sol·licituds adreçades a qualsevol administració pública, garantint l'assistència en l'ús de mitjans electrònics a qui ho necessiti.", "correct": true },
      { "text": "Controlar la legalitat pressupostària prèvia de les despeses menors de les corporacions locals.", "correct": false },
      { "text": "Emetre resolucions definitives en els procediments d'inspecció tributària metropolitana.", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 11: Comunicacions de la ciutadania amb l'Administració: La instància i altres mecanismes",
    "number": 21,
    "question": "En relació amb els drets de les persones en les seves relacions amb l'Administració, quin dret té un ciutadà respecte a la presentació de documents originals?",
    "answers": [
      { "text": "Està obligat a aportar sempre els documents originals de qualsevol títol habilitant.", "correct": false },
      { "text": "No està obligat a aportar documents originals, llevat que una normativa especial ho exigeixi, tenint dret a aportar còpies anades de documents juntament amb la sol·licitud.", "correct": true },
      { "text": "Ha de comparèixer presencialment per compulsar els documents en un termini màxim de 48 hores.", "correct": false },
      { "text": "Només pot presentar còpies digitalitzades a través de suports físics tipus memòria USB.", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 11: Comunicacions de la ciutadania amb l'Administració: La instància i altres mecanismes",
    "number": 22,
    "question": "Quina de les següents afirmacions sobre l'obligació de resoldre de l'Administració davant d'una instància presentada per un ciutadà és correcta?",
    "answers": [
      { "text": "L'Administració només està obligada a dictar resolució expressa si la sol·licitud és estimada favorablement.", "correct": false },
      { "text": "L'Administració està obligada a dictar resolució expressa i a notificar-la en tots els procediments, qualsevol que sigui la seva forma d'iniciació.", "correct": true },
      { "text": "El deure de resoldre decau automàticament si opera el silenci administratiu negatiu.", "correct": false },
      { "text": "Només existeix obligació de resolució expressa en els procediments d'iniciació d'ofici.", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 11: Comunicacions de la ciutadania amb l'Administració: La instància i altres mecanismes",
    "number": 23,
    "question": "Com s'articula la relació entre els registres electrònics i la constància de la data i hora oficial en la presentació de documents?",
    "answers": [
      { "text": "Val la data i hora del dispositiu informàtic des del qual el ciutadà realitza l'enviament.", "correct": false },
      { "text": "El registre electrònic utilitzarà una hora oficial sincronitzada i emetrà un rebut amb data i hora exacta de la recepció que serà la que tingui efectes jurídics.", "correct": true },
      { "text": "La data vàlida és la del moment en què el funcionari de registre d'entrada accepta el document manualment.", "correct": false },
      { "text": "S'aplica sempre el criteri de la data de sortida de l'oficina de correus si s'envia per carta certificada.", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 11: Comunicacions de la ciutadania amb l'Administració: La instància i altres mecanismes",
    "number": 24,
    "question": "Quina és la repercussió de la inobservança del requisit de signatura en una sol·licitud presentada per un particular davant l'Administració?",
    "answers": [
      { "text": "Determina la nul·litat de ple dret insansonable de l'escrit sense possibilitat de subsanació.", "correct": false },
      { "text": "Constitueix un defecte susceptible de requeriment d'esmena en el termini legalment establert per procedir a la seva signatura.", "correct": true },
      { "text": "S'entén automàticament com un desistiment tàcit sense dret a cap notificació prèvia.", "correct": false },
      { "text": "Es converteix directament en una declaració responsable de caràcter provisional.", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 11: Comunicacions de la ciutadania amb l'Administració: La instància i altres mecanismes",
    "number": 25,
    "question": "En el context dels serveis públics que gestiona l'AMB als 36 municipis, quin paper tenen els canals de comunicació ciutadana pel que fa a la participació i control de qualitat?",
    "answers": [
      { "text": "Permeten la fiscalització prèvia dels comptes anuals per part dels usuaris del transport.", "correct": false },
      { "text": "Faciliten la recollida d'incidències, suggeriments i queixes sobre serveis com transport o medi ambient, orientant l'acció administrativa cap a l'eficiència i la millora contínua.", "correct": true },
      { "text": "Substitueixen els òrgans de govern col·legiats en l'aprovació definitiva del pressupost metropolità.", "correct": false },
      { "text": "Atorguen potestat reglamentària directa a les associacions de veïns per modificar tarifes d'autobusos.", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 1,
    "question": "Segons la Llei 40/2015 (LRJSP) i la legislació de règim jurídic, quin principi regeix principalment el deure de ponderar la totalitat dels interessos públics implicats en l'exercici de competències pròpies?",
    "answers": [
      { "text": "El principi de jerarquia normativa i preferència sectorial", "correct": false },
      { "text": "El principi de lleialtat institucional", "correct": true },
      { "text": "El principi de suficiència financera exclusiva", "correct": false },
      { "text": "El principi de descentralització funcional obligatòria", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 2,
    "question": "Pel que fa a la forma de les comunicacions interadministratives, quina és la regla general aplicable entre els òrgans de les administracions públiques?",
    "answers": [
      { "text": "S'han de dirigir necessàriament per mitjans electrònics, garantint la interoperabilitat", "correct": true },
      { "text": "S'han de realitzar preferentment mitjançant missatgeria postal certificada per deixar constància física", "correct": false },
      { "text": "Poden utilitzar qualsevol canal si hi ha acord verbal previ entre els funcionaris responsables", "correct": false },
      { "text": "Requereixen sempre l'ús de suport paper amb segell humit original de sortida", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 3,
    "question": "Quina és la naturalesa jurídica de les Conferències Sectorials com a òrgans de relació interadministrativa?",
    "answers": [
      { "text": "Són òrgans unipersonals de control financer directe adscrits al Ministeri d'Hisenda", "correct": false },
      { "text": "Són òrgans col·legiats de cooperació de composició multilateral amb presència de l'Estat, CCAA i ens locals", "correct": true },
      { "text": "Són tribunals administratius especials per resoldre conflictes de personal funcionari", "correct": false },
      { "text": "Són empreses públiques de capital mixt encarregades de la contractació centralitzada", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 4,
    "question": "Quin és l'objectiu principal del Sistema d'Interconnexió de Registres (SIR) en l'àmbit de les comunicacions interadministratives?",
    "answers": [
      { "text": "Permetre l'intercanvi segellat de seients registrals entre diferents administracions de l'Estat, CCAA i ens locals", "correct": true },
      { "text": "Gestionar el cobrament de multes de trànsit municipals a nivell internacional", "correct": false },
      { "text": "Supervisar la comptabilitat pressupostària de les societats mercantils participades", "correct": false },
      { "text": "Substituir completament la Sindicatura de Comptes en la fiscalització prèvia", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 5,
    "question": "Segons l'Esquema Nacional d'Interoperabilitat (ENI) i la Llei 39/2015, respecte a l'aportació de documents pels ciutadans:",
    "answers": [
      { "text": "Les administracions poden exigir qualsevol document original en paper si té més de cinc anys d'antiguitat", "correct": false },
      { "text": "Les administracions no poden exigir als ciutadans dades o documents que ja estiguin en poder de qualsevol altra administració", "correct": true },
      { "text": "El ciutadà està obligat a aportar còpia compulsada de tots els certificats de padró i identitat", "correct": false },
      { "text": "Només s'aplica a la comunicació entre ministeris estatals, excloent els ens locals", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 6,
    "question": "Com s'instrumenta habitualment la cooperació pràctica entre l'Àrea Metropolitana de Barcelona (AMB) i els 36 ajuntaments metropolitans?",
    "answers": [
      { "text": "Mitjançant decrets unilaterals del Govern de l'Estat sense participació local", "correct": false },
      { "text": "A través de convenis de cooperació i acords interadministratius per a la gestió de serveis i obres", "correct": true },
      { "text": "Únicament a través de recursos contenciosos administratius davant el Tribunal Superior", "correct": false },
      { "text": "Mitjançant contractes privats de dret mercantil sotmesos a la jurisdicció civil", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 7,
    "question": "Quin paper juguen les plataformes d'intermediació de dades (com SCSP en l'àmbit català) en les comunicacions interadministratives?",
    "answers": [
      { "text": "Permeten consultar electrònicament dades d'identitat, residència o tributs sense que el ciutadà hagi d'aportar paper", "correct": true },
      { "text": "Arxiuen físicament els expedients d'urbanisme en magatzems de la Generalitat", "correct": false },
      { "text": "S'utilitzen exclusivament per pagar les nòmines del personal eventual de l'AMB", "correct": false },
      { "text": "Serveixen com a registre de la propietat privada de caràcter mercantil", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 8,
    "question": "En relació amb el deure d'auxili i assistència mútua entre administracions públiques:",
    "answers": [
      { "text": "Un òrgan pot sol·licitar a un altre d'una administració diferent la pràctica d'actuacions que exigeixin coneixements tècnics o mitjans dels quals no disposi", "correct": true },
      { "text": "L'assistència tècnica és sempre a títol onerós mitjançant factura comercial obligatòria", "correct": false },
      { "text": "Només es pot sol·licitar autorització prèvia del Consell de Ministres", "correct": false },
      { "text": "Està prohibit prestar assistència entre administracions de diferent nivell territorial", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 9,
    "question": "Quina és la naturalesa jurídica de l'AMB com a ens supramunicipal segons la Llei 31/2010?",
    "answers": [
      { "text": "Una societat anònima de capital íntegrament públic metropolità", "correct": false },
      { "text": "Una administració pública de naturalesa territorial integrada per 36 municipis", "correct": true },
      { "text": "Una fundació privada de col·laboració ciutadana", "correct": false },
      { "text": "Un organisme autònom dependent directament de les diputacions provincials", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 10,
    "question": "Quin principi pressupostari i organitzatiu garanteix que les aplicacions i sistemes de comunicació electrònica de l'AMB puguin connectar-se amb la Generalitat i l'Estat?",
    "answers": [
      { "text": "El principi d'interoperabilitat", "correct": true },
      { "text": "El principi de discrecionalitat tècnica absoluta", "correct": false },
      { "text": "El principi de no afectació d'ingressos", "correct": false },
      { "text": "El principi de competència mercantil lliure", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 11,
    "question": "Pel que fa als convenis de col·laboració subscrits per l'AMB amb altres administracions:",
    "answers": [
      { "text": "Poden modificar unilateralment les lleis orgàniques estatals", "correct": false },
      { "text": "Serveixen per coordinar actuacions conjuntes en matèria de planejament urbanístic, transport o medi ambient", "correct": true },
      { "text": "Exclueixen completament el control de la Sindicatura de Comptes", "correct": false },
      { "text": "Només poden tenir una vigència màxima improrrogable d'un mes", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 12,
    "question": "Quina trampa d'examen és habitual respecte a la comunicació d'actes entre òrgans administratius diferents?",
    "answers": [
      { "text": "Creure que es pot utilitzar el correu postal ordinari com a mitjà principal i obligatori", "correct": false },
      { "text": "Pensar que les comunicacions electròniques no són obligatòries entre diferents administracions", "correct": true },
      { "text": "Suposar que els ajuntaments no poden comunicar-se mai amb la Generalitat de Catalunya", "correct": false },
      { "text": "Considerar que els registres electrònics no tenen validesa jurídica", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 13,
    "question": "Quin organisme o òrgan col·legiat aprova inicialment el pressupost de l'AMB com a eina de gestió i relació econòmica?",
    "answers": [
      { "text": "El Consell Metropolità", "correct": true },
      { "text": "El Parlament de Catalunya en ple", "correct": false },
      { "text": "La junta de personal funcionari", "correct": false },
      { "text": "El Tribunal Superior de Justícia", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 14,
    "question": "Quin és l'impacte de la integració de la Seu Electrònica de l'AMB amb les xarxes d'intercanvi de registres?",
    "answers": [
      { "text": "Facilitar la tramitació conjunta d'expedients i la remissió telemàtica de sol·licituds entre administracions", "correct": true },
      { "text": "Limitar el dret d'accés dels ciutadans als arxius municipals", "correct": false },
      { "text": "Evitar qualsevol control jurídic per part dels lletrats consistorials", "correct": false },
      { "text": "Suprimir la necessitat de publicar actes al Butlletí Oficial", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 15,
    "question": "Segons la normativa de procediment administratiu comú, quina és la conseqüència d'ometre absolutament el procediment legalment establert en un acte?",
    "answers": [
      { "text": "Es considera un acte merament irregular no invalidant", "correct": false },
      { "text": "És una causa de nul·litat de ple dret", "correct": true },
      { "text": "L'acte esdevé simplement anul·lable i pot ser convalidat en qualsevol termini", "correct": false },
      { "text": "No produeix cap efecte sobre la validesa de la resolució", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 16,
    "question": "En el marc de la cooperació interadministrativa, quin principi obliga a les administracions a ponderar els interessos públics generals i sectorials?",
    "answers": [
      { "text": "El principi de lleialtat institucional", "correct": true },
      { "text": "El principi de concurrència competitiva", "correct": false },
      { "text": "El principi de caixa única", "correct": false },
      { "text": "El principi de submissió al dret privat", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 17,
    "question": "Quina funció principal tenen els consorcis en l'estructura de gestió i relació de l'AMB?",
    "answers": [
      { "text": "Permetre la cooperació i el cofinançament de serveis públics de caràcter metropolità entre diverses administracions", "correct": true },
      { "text": "Substituir les funcions de la Intervenció General de l'Estat", "correct": false },
      { "text": "Emetre moneda de curs legal a l'àmbit local", "correct": false },
      { "text": "Gestionar exclusivament la fiscalitat privada de les empreses concessionàries", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 18,
    "question": "Quin paper juga el Registre Electrònic d'Apoderaments (REA) en les comunicacions administratives?",
    "answers": [
      { "text": "Permet inscriure i consultar les representacions conferides a tercers per relacionar-se electrònicament amb l'Administració", "correct": true },
      { "text": "Registra les sancions de trànsit imposades per la policia local", "correct": false },
      { "text": "Controla el pagament de tributs directes com l'IBI metropolità", "correct": false },
      { "text": "Emmagatzema els contractes laborals del personal de la Generalitat", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 19,
    "question": "Quina és la finalitat de les comissions mixtes de cooperació entre l'Administració de la Generalitat i l'AMB?",
    "answers": [
      { "text": "Coordinar l'exercici de competències concurrents i resoldre discrepàncies en matèria de serveis supramunicipals", "correct": true },
      { "text": "Aprovar els pressupostos generals dels partits polítics amb representació local", "correct": false },
      { "text": "Dirimir litigis laborals entre funcionaris de carrera i personal laboral", "correct": false },
      { "text": "Gestionar el transport de mercaderies per carretera a nivell estatal", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 20,
    "question": "Segons els principis de relació interadministrativa, davant una sol·licitud d'informes o dades entre administracions diferents:",
    "answers": [
      { "text": "S'ha de respondre en els terminis legalment establerts sota el principi d'assistència activa i col·laboració", "correct": true },
      { "text": "L'administració requerida pot ignorar la petició si no rep una contraprestació econòmica prèvia", "correct": false },
      { "text": "Només es pot tramitar a través de la via judicial contenciosa", "correct": false },
      { "text": "Està prohibit sol·licitar dades d'una altra administració sense autorització judicial", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 21,
    "question": "Quin tractament reben els defectes de forma en les comunicacions i actes administratius interadmistratius si no generen indefensió?",
    "answers": [
      { "text": "S'entenen com a irregularitats no invalidants que no afecten la validesa de l'actuació", "correct": true },
      { "text": "Comporten necessàriament la nul·litat de ple dret de tot l'expedient", "correct": false },
      { "text": "Exigeixen la repetició íntegra de tots els tràmits des de l'inici", "correct": false },
      { "text": "Donen lloc a la destitució immediata del funcionari responsable", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 22,
    "question": "En relació amb la utilització de mitjans electrònics, quin requisit tècnic és indispensable per assegurar la validesa de la comunicació entre administracions?",
    "answers": [
      { "text": "La compatibilitat i interoperabilitat dels sistemes i aplicacions emprats", "correct": true },
      { "text": "L'ús exclusiu de sistemes de missatgeria instantània comercial", "correct": false },
      { "text": "La signatura manuscrita escanejada en format d'imatge simple", "correct": false },
      { "text": "La publicació simultània en xarxes socials corporatives", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 23,
    "question": "Quin paper exerceix la Llei 26/2010 de règim jurídic i de procediment de les administracions públiques de Catalunya en l'àmbit metropolità?",
    "answers": [
      { "text": "Complementa i desenvolupa el marc de relacions, col·laboració i procediment aplicable als ens locals catalans", "correct": true },
      { "text": "Regula exclusivament el sistema tributari de l'Administració General de l'Estat", "correct": false },
      { "text": "Estableix el codi penal aplicable als funcionaris públics", "correct": false },
      { "text": "Deroga completament la Llei 40/2015 en tot el territori espanyol", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 24,
    "question": "Quina és la consequència jurídica si un òrgan administratiu incompleix el deure de col·laboració activa amb una altra administració pública?",
    "answers": [
      { "text": "Pot incórrer en responsabilitat institucional i en les exigències derivades de la violació de la lleialtat", "correct": true },
      { "text": "L'òrgan incomplidor passa a dependre automàticament de l'altra administració", "correct": false },
      { "text": "Es produeix la condonació de tots els deutes pressupostaris de l'ens", "correct": false },
      { "text": "L'acte dictat passa a ser un reglament executiu de caràcter general", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 12: Comunicacions entre Administracions Públiques",
    "number": 25,
    "question": "Com s'integra l'AMB en els sistemes generals de comunicació de dades amb l'Administració de l'Estat?",
    "answers": [
      { "text": "Mitjançant passarel·les i nodes d'interoperabilitat homologats que connecten els registres i la seu electrònica", "correct": true },
      { "text": "Mitjançant l'enviament presencial de disquets informàtics mensuals", "correct": false },
      { "text": "A través de convenis de duanes estatals exclusius", "correct": false },
      { "text": "Utilitzant exclusivament el sistema de notificació postal de la xarxa d'oficines de correus", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 1,
    "question": "Segons la normativa i els apunts de l'AMB, quina és la naturalesa principal d'una oficina de registre?",
    "answers": [
      { "text": "Un òrgan de decisió finalista encarregat de resoldre recursos d'alçada", "correct": false },
      { "text": "Un punt de contacte formal entre la ciutadania i l'organització, garantint la seguretat jurídica i la constància temporal", "correct": true },
      { "text": "Una unitat de comptabilització exclusiva per a la gestió de factures electròniques", "correct": false },
      { "text": "Un arxiu històric de custòdia de documents amb més de cinc anys d'antiguitat", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 2,
    "question": "Quin règim de funcionament temporal estableix el Registre Electrònic General de cada administració?",
    "answers": [
      { "text": "Funciona exclusivament en dies hàbils de dilluns a divendres de 9:00 a 14:00 hores", "correct": false },
      { "text": "Opera tots els dies de l'any durant les 24 hores de manera automatitzada", "correct": true },
      { "text": "Només admet la recepció de documents durant l'horari d'atenció al públic de les oficines presencials", "correct": false },
      { "text": "Opera únicament en horari de matí excepte festius nacionals i locals", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 3,
    "question": "Quina és la principal finalitat del Registre d'Entrada segons l'estructura registral?",
    "answers": [
      { "text": "Inscriure tots els documents oficials emesos per l'administració i adreçats a tercers o altres òrgans", "correct": false },
      { "text": "Inscriure tots els documents que presenten els ciutadans, altres administracions o entitats adreçats a l'òrgan", "correct": true },
      { "text": "Controlar de manera exclusiva la sortida de notificacions i acords de gerència", "correct": false },
      { "text": "Efectuar el pagament directe de les obligacions reconegudes a favor dels creditors", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 4,
    "question": "Què s'inscriu obligatòriament en el Registre de Sortida?",
    "answers": [
      { "text": "Les sol·licituds i escrits adreçats a l'AMB per part de la ciutadania", "correct": false },
      { "text": "Tots els documents oficials emesos per l'administració i adreçats a tercers o altres òrgans (com notificacions, resolucions o acords)", "correct": true },
      { "text": "Únicament les factures presentades pels proveïdors externs de l'entitat", "correct": false },
      { "text": "Les altes i baixes del personal funcionari adscrit als ajuntaments metropolitans", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 5,
    "question": "Quines dades mínimes ha de contenir un seient registral per assegurar la traçabilitat del document?",
    "answers": [
      { "text": "Número d'ordre, data i hora de presentació, identificació de l'interessat, òrgan destinatari, extracte del contingut i referència als adjunts", "correct": true },
      { "text": "Només el nom de l'empleat públic que ha rebut el document i el pressupost assignat", "correct": false },
      { "text": "La qualificació jurídica del procediment i la votació obtinguda al Consell Metropolità", "correct": false },
      { "text": "El codi comptable de la partida de ingressos i el número de compte bancari del sol·licitant", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 6,
    "question": "Respecte a l'emissió de rebut en la presentació de documents, quina obligació té l'Administració?",
    "answers": [
      { "text": "Emetre un avís per correu electrònic en el termini màxim de deu dies hàbils", "correct": false },
      { "text": "Expedir obligatòriament un rebut o justificant de la presentació que acrediti la data i hora d'entrada", "correct": true },
      { "text": "Lliurar el rebut només si l'interessat ho sol·licita expressament per escrit presencial", "correct": false },
      { "text": "Publicar un anunci al Butlletí Oficial de la Província (BOP) acreditant l'entrada", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 7,
    "question": "Quina funció principal desenvolupa el Sistema d'Interconnexió de Registres (SIR)?",
    "answers": [
      { "text": "Gestionar el pagament de les nòmines del personal de la Generalitat de Catalunya", "correct": false },
      { "text": "Permetre l'intercanvi electrònic immediat de seients registrals i documentació entre les diferents administracions públiques", "correct": true },
      { "text": "Fiscalitzar prèviament la legalitat de tots els contractes menors de les entitats locals", "correct": false },
      { "text": "Coordinar el transport físic de documents en paper entre els ajuntaments i la Diputació", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 8,
    "question": "Com s'entén realitzada una presentació de documents efectuada en un dia inhàbil al Registre Electrònic?",
    "answers": [
      { "text": "Es considera nul·la de ple dret i s'ha de tornar a presentar obligatòriament", "correct": false },
      { "text": "S'entendrà realitzada a la primera hora del primer dia hàbil següent", "correct": true },
      { "text": "Té validesa retroactiva des del moment exacte en què es va pitjar el botó d'enviament", "correct": false },
      { "text": "Genera una sanció administrativa per incompliment del calendari de tràmits", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 9,
    "question": "Quin element ha d'incloure obligatòriament el rebut emès pel registre electrònic segons les previsions de les dades del seient?",
    "answers": [
      { "text": "Una còpia autèntica del document presentat on figuri el número d'entrada i la data i hora exactes", "correct": true },
      { "text": "Un certificat digital signat per la Tresoreria General de l'Estat", "correct": false },
      { "text": "L'extracte dels pressupostos generals de l'AMB vigents", "correct": false },
      { "text": "La liquidació provisional de l'Impost sobre Béns Immobles (IBI)", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 10,
    "question": "Segons els apunts de l'AMB, quina és la denominació de les oficines presencials de l'ens per a l'assistència en matèria de registre?",
    "answers": [
      { "text": "ORC (Oficina de Registre Centralitzat)", "correct": false },
      { "text": "OAMR (Oficines d'Assistència en Matèria de Registre)", "correct": true },
      { "text": "SACAT (Servei d'Atenció Ciutadana i Tràmits)", "correct": false },
      { "text": "UMA (Unitat Mínima d'Atenció)", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 11,
    "question": "On opera de forma específica el Registre Electrònic de l'AMB segons la informació de la web corporativa recollida als apunts?",
    "answers": [
      { "text": "A través de la Seu Electrònica accessible des de amb.cat", "correct": true },
      { "text": "Exclusivament a la plataforma digital de la Generalitat de Catalunya (cat.net)", "correct": false },
      { "text": "Mitjançant l'aplicació mòbil de recaptació de tributs locals de la Diputació", "correct": false },
      { "text": "Només mitjançant correu postal certificat amb acusament de rebuda", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 12,
    "question": "Quin mecanisme tècnic de seguretat s'assigna als documents tramitats a través del Registre Electrònic de l'AMB?",
    "answers": [
      { "text": "Un segell de temps electrònic i un codi de verificació segura (CSV)", "correct": true },
      { "text": "Un certificat de cadastre rústic i urbà actualitzat", "correct": false },
      { "text": "Una signatura manuscrita digitalitzada de la gerència", "correct": false },
      { "text": "Un número de seient de comptabilització pressupostària del capítol 1", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 13,
    "question": "Com es coordina l'AMB pel que fa a l'assistència presencial en matèria de registre amb el territori metropolità?",
    "answers": [
      { "text": "Exclusivament a través de les delegacions del Govern de l'Estat a Catalunya", "correct": false },
      { "text": "Amb les oficines centrals a Barcelona i coordinant-se amb les oficines dels 36 ajuntaments metropolitans", "correct": true },
      { "text": "Mitjançant la xarxa d'oficines de les entitats bancàries col·laboradores", "correct": false },
      { "text": "No existeix cap tipus de coordinació amb els ajuntaments integrats", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 14,
    "question": "Quina llei estatal regula de manera principal el procediment administratiu comú de les administracions públiques on s'emmarca el règim de registres?",
    "answers": [
      { "text": "La Llei 39/2015 (LPACAP) i la Llei 40/2015 (LRJSP)", "correct": true },
      { "text": "La Llei 31/2010 de l'Àrea Metropolitana de Barcelona exclusivament", "correct": false },
      { "text": "El Reial Decret Legislatiu 2/2004 de les Hisendes Locals", "correct": false },
      { "text": "La Llei Orgànica 2/2012 d'Estabilitat Pressupostària", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 15,
    "question": "En el quadre comparatiu del tema, quin és l'àmbit de gestió assignat al Registre d'Entrada en el context de l'AMB?",
    "answers": [
      { "text": "La Seu electrònica de l'AMB i les OAMR (Oficines d'Assistència en Matèria de Registre)", "correct": true },
      { "text": "Únicament la Tresoreria General i la Intervenció delegada", "correct": false },
      { "text": "El Consell Plenari durant les sessions extraordinàries", "correct": false },
      { "text": "Els òrgans de direcció de les societats mercantils participades", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 16,
    "question": "Segons el quadre comparatiu, quin òrgan o àmbit s'encarrega de la gestió del Registre de Sortida a l'AMB?",
    "answers": [
      { "text": "Els òrgans competents de gerència, secretaria o direccions de l'AMB", "correct": true },
      { "text": "La ciutadania a través de la Seu electrònica oberta", "correct": false },
      { "text": "Els registres auxiliars de cada un dels 36 ajuntaments per delegació tàcita", "correct": false },
      { "text": "El departament de recursos humans de manera exclusiva", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 17,
    "question": "Quin tipus de seient registral s'utilitza per inscriure una resolució o acord emès cap a l'exterior per l'administració?",
    "answers": [
      { "text": "Registre d'entrada", "correct": false },
      { "text": "Registre de sortida", "correct": true },
      { "text": "Seient de bestreta de caixa fixa", "correct": false },
      { "text": "Assentament comptable de pressupost tancat", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 18,
    "question": "Quina trampa d'examen s'assenyala habitualment respecte al funcionament temporal dels registres electrònics?",
    "answers": [
      { "text": "Creure que només estan oberts durant l'horari d'oficina dels funcionaris", "correct": false },
      { "text": "Confondre la disponibilitat 24 hores tots els dies de l'any amb la consideració dels efectes de la presentació en dies inhàbils", "correct": true },
      { "text": "Pensar que el registre electrònic no emet rebut acreditatiu de manera automàtica", "correct": false },
      { "text": "Assumir que el sistema SIR només funciona els caps de setmana", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 19,
    "question": "Quina és la relació entre les oficines de registre i la seguretat jurídica dels ciutadans?",
    "answers": [
      { "text": "Garanteixen la constància temporal i fefaent de la presentació d'escrits i sol·licituds dins dels terminis legals", "correct": true },
      { "text": "Modifiquen automàticament els terminis de prescripció de les sancions urbanístiques", "correct": false },
      { "text": "Atorgen la condició de funcionari de carrera a qualsevol persona que presenti una instància", "correct": false },
      { "text": "Eximeixen del compliment de les ordenances fiscals metropolitanes", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 20,
    "question": "Quin paper juguen les entitats locals integrants de l'AMB en relació amb l'assistència en matèria de registre?",
    "answers": [
      { "text": "Col·laboren a través de la xarxa de registres públics per facilitar l'accés de la ciutadania als serveis supramunicipals", "correct": true },
      { "text": "Són totalment independents i tenen prohibit trametre documents a l'AMB", "correct": false },
      { "text": "Assumeixen les funcions de la Sindicatura de Comptes mitjançant el registre de sortida", "correct": false },
      { "text": "S'encarreguen exclusivament de la recaptació del recàrrec de l'IBI metropolità", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 21,
    "question": "Quina dada reflecteix l'extracte del contingut dins d'un seient registral?",
    "answers": [
      { "text": "Un resum o descripció breu de l'objecte del document presentat", "correct": true },
      { "text": "La transcripció literal i completa de totes les pàgines adjuntes", "correct": false },
      { "text": "El nombre d'empleats públics afectats per la sol·licitud", "correct": false },
      { "text": "La valoració econòmica estimada del cost del tràmit", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 22,
    "question": "Què evita principalment la interconnexió de registres a través del sistema SIR en l'àmbit de les administracions públiques?",
    "answers": [
      { "text": "El transport físic ineficient de documentació en paper entre diferents organismes", "correct": true },
      { "text": "L'aprovació anual dels pressupostos generals de l'entitat local", "correct": false },
      { "text": "La necessitat de disposar de signatura electrònica reconeguda", "correct": false },
      { "text": "La presentació de recursos de reposició per part de la ciutadania", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 23,
    "question": "Quin caràcter té el rebut o justificant que s'emet en presentar un document al registre electrònic?",
    "answers": [
      { "text": "És una mera recomanació informativa sense validesa jurídica", "correct": false },
      { "text": "És obligatori i acredita de manera fefaent la data i l'hora de presentació", "correct": true },
      { "text": "Només té validesa si es segella presencialment a les oficines centrals", "correct": false },
      { "text": "Serveix únicament com a justificant de pagament de taxes fiscals", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 24,
    "question": "En el context de l'AMB, quina importància té l'ús correcte del Registre General per als aspirants de l'oposition C1?",
    "answers": [
      { "text": "Garanteix el coneixement dels canals formals d'entrada i sortida de documents en la tramitació administrativa metropolitana", "correct": true },
      { "text": "És una matèria excloent que només afecta els enginyers de camins de l'ens", "correct": false },
      { "text": "Permet calcular directament el romanent de tresoreria de l'exercici anterior", "correct": false },
      { "text": "Estableix les directrius per a la modificació de les ordenances fiscals", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 13: El Registre General. Registre d'entrada i Registre de sortida de documents",
    "number": 25,
    "question": "Segons els estàndards d'oposicions C1, quin error s'ha d'evitar en distingir entre registre d'entrada i de sortida?",
    "answers": [
      { "text": "Pensar que el registre de sortida serveix per recollir les peticions que fan els ciutadans a l'administració", "correct": true },
      { "text": "Creure que ambdós registres operen exclusivament a través de paper físic", "correct": false },
      { "text": "Assumir que el registre electrònic tanca els dies festius locals", "correct": false },
      { "text": "Confondre el número d'ordre amb el codi postal de l'oficina receptora", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 1,
    "question": "Segons el cicle vital dels documents, quin arxiu s'encarrega de custodiar aquells documents la vigència administrativa dels quals ha finalitzat, però continuen sent requerits per a consultes o possibles recursos?",
    "answers": [
      { "text": "Arxiu d'Oficina o de Gestió", "correct": false },
      { "text": "Arxiu Intermedi", "correct": true },
      { "text": "Arxiu Històric", "correct": false },
      { "text": "Arxiu Central Definitiu", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 2,
    "question": "Quin òrgan a Catalunya té competència en matèria d'avaluació i tria documental per dictaminar sobre la destrucció o conservació de documents públics?",
    "answers": [
      { "text": "La Comissió Nacional d'Accés, Avaluació i Tria Documental", "correct": true },
      { "text": "El Consell Metropolità de l'AMB", "correct": false },
      { "text": "La Sindicatura de Comptes de Catalunya", "correct": false },
      { "text": "L'Oficina Antifrau de Catalunya", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 3,
    "question": "Quina conseqüència jurídica té la destrucció d'un document públic realitzada per un departament de l'AMB sense comptar amb el dictamen previ favorable de l'òrgan competent en avaluació documental?",
    "answers": [
      { "text": "L'acte de destrucció és merament irregular i només comporta una sanció disciplinària lleu", "correct": false },
      { "text": "L'actuació és plenament vàlida si el document supera els 5 anys d'antiguitat", "correct": false },
      { "text": "Constitueix una eliminació arbitrària i prohibida, ja que cap document públic pot ser destruït sense el procediment i dictamen reglamentaris", "correct": true },
      { "text": "Només genera responsabilitat patrimonial si ho demana la persona interessada en un termini de 15 dies", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 4,
    "question": "Segons l'Esquema Nacional d'Interoperabilitat (ENI) i la normativa de règim jurídic, com s'han d'emmagatzemar obligatòriament els documents electrònics en l'arxiu electrònic de l'AMB?",
    "answers": [
      { "text": "En formats privatius i tancats que garanteixin la propietat intel·lectual del fabricant del programari", "correct": false },
      { "text": "Amb metadades obligatòries d'associació i en formats estàndard oberts per evitar l'obsolescència tecnològica", "correct": true },
      { "text": "Exclusivament en suport paper digitalitzat mitjançant còpies simples sense signatura electrònica", "correct": false },
      { "text": "En fitxers de text pla comprimit sense metadades per estalviar espai d'emmagatzematge al servidor", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 5,
    "question": "Quin és l'ordre correcte i inalterable del cicle vital dels documents administratius en el sistema d'arxius?",
    "answers": [
      { "text": "Arxiu Intermedi ➔ Arxiu d'Oficina ➔ Arxiu Històric", "correct": false },
      { "text": "Arxiu Històric ➔ Arxiu Intermedi ➔ Arxiu de Gestió", "correct": false },
      { "text": "Arxiu de Gestió (o oficina) ➔ Arxiu Intermedi ➔ Arxiu Històric", "correct": true },
      { "text": "Arxiu de Gestió ➔ Arxiu Definitiu de Directament Eliminació", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 6,
    "question": "Quina finalitat principal té l'Arxiu Històric dins del sistema de gestió documental d'una administració pública com l'AMB?",
    "answers": [
      { "text": "La tramitació diària d'expedients de subvencions i llicències urbanístiques en curs", "correct": false },
      { "text": "La custòdia temporal d'expedients tancats pendents de terminis de recurs", "correct": false },
      { "text": "La conservació permanent dels documents per al seu valor cultural, informatiu o de recerca històrica de la conurbació", "correct": true },
      { "text": "L'eliminació immediata de documents caducats un cop transcorreguts quatre anys", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 7,
    "question": "Quin paper juga el Portal de Transparència de l'AMB (amb.cat) en relació amb els fons documentals de l'ens metropolità?",
    "answers": [
      { "text": "S'alimenta directament dels fons documentals organitzats per facilitar l'accés ciutadà a acords de Junta de Govern i Consell Metropolità", "correct": true },
      { "text": "Funciona com un arxiu intermedi de seguretat exclusiu per a la memòria de càlcul de pressupostos", "correct": false },
      { "text": "Permet la destrucció telemàtica de documents d'oficina sense passar per la Comissió de Tria", "correct": false },
      { "text": "Només publica dades estadístiques anònimes exemptes de qualsevol suport documental arxivat", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 8,
    "question": "Quina és la funció dels tabulats i calendaris de conservació en la gestió arxivística?",
    "answers": [
      { "text": "Establir el calendari laboral de personal adscrit al servei d'arxiu central", "correct": false },
      { "text": "Definir quant de temps s'ha de guardar cada sèrie documental i si s'ha d'eliminar o conservar permanentment", "correct": true },
      { "text": "Regular els horaris d'obertura al públic de l'Arxiu General de l'AMB", "correct": false },
      { "text": "Fixar els terminis de prescripció de les sancions tributàries metropolitanes", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 9,
    "question": "Quina característica defineix l'Arxiu d'Oficina o de Gestió en una unitat administrativa?",
    "answers": [
      { "text": "Conté documents en tramitació o d'ús freqüent per les unitats administratives productores", "correct": true },
      { "text": "Emagatzema exclusivament documents declarats nuls de ple dret per sentència judicial", "correct": false },
      { "text": "És gestionat directament per l'Arxiu Històric de Catalunya sense intervenir les àrees productores", "correct": false },
      { "text": "Es troba centralitzat en un únic edifici extern per a tota la província de Barcelona", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 10,
    "question": "Quin marc normatiu de seguretat s'aplica per assolir els nivells de protecció necessaris per evitar accessos no autoritzats o pèrdues de dades en els arxius electrònics?",
    "answers": [
      { "text": "L'Esquema Nacional de Seguretat (ENS)", "correct": true },
      { "text": "El Codi Civil espanyol en matèria de contractes privats", "correct": false },
      { "text": "La Llei reguladora de les bases del règim local exclusivament per a béns mobles", "correct": false },
      { "text": "El Pla General de Comptabilitat Pública de l'Estat", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 11,
    "question": "Què garanteix principalment l'arxiu electrònic únic de cada administració segons la Llei 39/2015 i l'ENI?",
    "answers": [
      { "text": "La integritat, autenticitat, confidencialitat i conservació dels expedients electrònics", "correct": true },
      { "text": "La publicació automàtica de tots els expedients al Diari Oficial de la Generalitat", "correct": false },
      { "text": "La gratuïtat de la tramitació per a totes les empreses contractistes", "correct": false },
      { "text": "L'eliminació de la necessitat de signatura electrònica reconeguda en els tràmits", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 12,
    "question": "En relació amb la conservació a llarg termini dels documents electrònics, quins elements són indispensables per verificar la seva validesa temporal?",
    "answers": [
      { "text": "Les signatures i els segells de temps vàlids", "correct": true },
      { "text": "Els segells de goma tradicionals estampats sobre paper couché", "correct": false },
      { "text": "Les còpies compulsades manualment per un conserge de l'oficina", "correct": false },
      { "text": "L'aprovació expressa per decret del president de la Generalitat", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 13,
    "question": "Pot un departament de l'AMB decidir lliurement destruir documents antics de la seva oficina pel simple fet que ja no tenen utilitat pràctica diària?",
    "answers": [
      { "text": "Sí, si el cap del servei signa una autorització interna d'eliminació ràpida", "correct": false },
      { "text": "No, qualsevol eliminació requereix un procediment reglamentari i un dictamen favorable de l'òrgan competent en valoració", "correct": true },
      { "text": "Sí, sempre que hagin transcorregut més de dos anys des de la seva creació", "correct": false },
      { "text": "No, llevat que s'hagin digitalitzat prèviament en format PDF de baixa resolució", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 14,
    "question": "Quina és la definició bàsica de l'arxiu administratiu segons la teoria arxivística i la pràctica de les administracions públiques?",
    "answers": [
      { "text": "El conjunt de magatzems privats de material d'oficina no utilitzat", "correct": false },
      { "text": "El conjunt organitzat de documents produïts o rebuts per les administracions públiques en l'exercici de les seves funcions", "correct": true },
      { "text": "El registre general d'entrada i sortida de factures d'una empresa subcontractada", "correct": false },
      { "text": "La base de dades informàtica de recursos humans d'una corporació local", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 15,
    "question": "Com s'integra la gestió documental en l'estructura de l'Àrea Metropolitana de Barcelona (AMB)?",
    "answers": [
      { "text": "A través d'un servei d'arxiu i gestió documental encarregat de custodiar i preservar el patrimoni generat en competències com urbanisme, transport i medi ambient", "correct": true },
      { "text": "Delegant totes les funcions d'arxiu en els ajuntaments de cadascun dels 36 municipis de manera aïllada", "correct": false },
      { "text": "Utilitzant exclusivament arxius privats externalitzats sense cap control públic", "correct": false },
      { "text": "Mitjançant l'eliminació automàtica de tot expedient un cop finalitzada l'obra pública", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 16,
    "question": "Quina trampa o error conceptual és habitual trobar en preguntes tipus test sobre les fases del cicle vital dels arxius?",
    "answers": [
      { "text": "Creure que es pot saltar directament de l'arxiu d'oficina a l'arxiu històric sense passar per l'intermedi si el document manté valors administratius secundaris", "correct": true },
      { "text": "Pensar que l'arxiu de gestió és l'última fase abans de la destrucció total", "correct": false },
      { "text": "Considerar que l'arxiu intermedi depèn directament del Ministeri de Defensa", "correct": false },
      { "text": "Afirmar que els arxius de gestió no guarden mai documents electrònics", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 17,
    "question": "Quin tipus de documents trobem habitualment custodiats a l'Arxiu Intermedi de l'AMB?",
    "answers": [
      { "text": "Expedients tancats la via administrativa dels quals ha finalitzat, però que continuen pendents de terminis de recurs o possibles accions legals", "correct": true },
      { "text": "Mapes medievals i pergamins fundacionals de la conurbació barcelonina", "correct": false },
      { "text": "Esborranys de correus electrònics personals dels treballadors de l'ens", "correct": false },
      { "text": "Factures pendents de pagament de l'exercici corrent", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 18,
    "question": "Quina relació existeix entre la gestió arxivística i el dret d'accés de la ciutadania als arxius i registres públics?",
    "answers": [
      { "text": "La gestió s'ha de compaginar amb el dret d'accés sota el marc de la transparència i la protecció de dades personals", "correct": true },
      { "text": "El dret d'accés anul·la completament qualsevol obligació de conservar documents a l'arxiu de gestió", "correct": false },
      { "text": "Els arxius públics tenen caràcter secret i no poden ser consultats sota cap concepte per la ciutadania", "correct": false },
      { "text": "L'accés ciutadà només està permès per a documents amb més de cent anys d'antiguitat", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 19,
    "question": "Quina importància tenen les metadades en el model d'arxiu electrònic de l'administració pública?",
    "answers": [
      { "text": "Són dades obligatòries d'associació que descriuen i contextualitzen el document electrònic garantint la seva recuperació i integritat", "correct": true },
      { "text": "Representen el cost econòmic de digitalització per cada full escanejat", "correct": false },
      { "text": "Són claus secretes de xifratge militar d'ús exclusiu per al Ministeri de l'Interior", "correct": false },
      { "text": "Designen el nom de l'empresa encarregada de subministrar el paper de les impressores", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 20,
    "question": "Com s'estructura l'atenció als fons documentals històrics referents a l'evolució urbanística dels 36 municipis de l'AMB?",
    "answers": [
      { "text": "A través del fons històric i supramunicipal de l'arxiu corresponent", "correct": true },
      { "text": "Mitjançant la destrucció anual de plans generals per evitar cúmul d'arxius", "correct": false },
      { "text": "Derivant tota la documentació urbanística al Registre de la Propietat privat", "correct": false },
      { "text": "Guardant els plànols exclusivament en format físic a les cotxeres dels autobusos metropolitans", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 21,
    "question": "Quin principi regeix la prohibició de destruir documents sense control en l'àmbit de les administracions públiques catalanes?",
    "answers": [
      { "text": "El principi de legalitat i submissió al dictamen de la comissió d'avaluació documental", "correct": true },
      { "text": "El principi d'autonomia financera municipal de lliure disposició", "correct": false },
      { "text": "El principi de celeritat i economia processal en la gestió d'espais", "correct": false },
      { "text": "El principi de discrecionalitat tècnica absoluta del cap de departament", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 22,
    "question": "Quina és la finalitat de l'ús de gestors d'expedients en el model d'administració electrònica de l'AMB pel que respecta als arxius?",
    "answers": [
      { "text": "Integrar l'arxiu electrònic garantint el compliment de les normes d'interoperabilitat (ENI) i conservació digital", "correct": true },
      { "text": "Imprimir automàticament una còpia en paper de cada correu electrònic rebut", "correct": false },
      { "text": "Limitar l'accés als expedients exclusivament als càrrecs polítics electes", "correct": false },
      { "text": "Substituir les bases de dades comptables per fulls de càlcul no signats", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 23,
    "question": "Quina característica presenten els documents d'un arxiu d'oficina respecte a la seva freqüència d'ús?",
    "answers": [
      { "text": "Són d'ús freqüent per les unitats administratives perquè es troben en fase de tramitació", "correct": true },
      { "text": "Són consultats exclusivament per historiadors i investigadors externs un cop cada dècada", "correct": false },
      { "text": "Romanen bloquejats sense cap tipus de modificació ni consulta durant un mínim de trenta anys", "correct": false },
      { "text": "Són sotmesos a un procés de destrucció preventiva immediata", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 24,
    "question": "Què estableix la normativa pel que fa a la conservació de sèries documentals declarades de conservació permanent?",
    "answers": [
      { "text": "No poden ser eliminades sota cap circumstància donat el seu valor històric, cultural o jurídic essencial", "correct": true },
      { "text": "Poden ser eliminades passats deu anys si l'arxiu pateix problemes d'espai físic", "correct": false },
      { "text": "Han de ser subhastades públicament entre col·leccionistes particulars", "correct": false },
      { "text": "Es poden destruir si es digitalitzen en un format d'imatge no compressible", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 14: Organització dels documents administratius. Arxivament, conservació, eliminació i gestió de documents electrònics",
    "number": 25,
    "question": "Quin risc tecnològic principal pretén combatre l'ús de formats estàndard oberts en l'arxiu electrònic de l'AMB?",
    "answers": [
      { "text": "L'obsolescència tecnològica que impediria la lectura futura dels fitxers", "correct": true },
      { "text": "El contagi de virus informàtics a través de xarxes socials obertes", "correct": false },
      { "text": "L'excés de velocitat en la descàrrega de documents per part de la ciutadania", "correct": false },
      { "text": "L'augment del consum elèctric dels servidors municipals", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 1,
    "question": "Segons la Llei 39/2015 i el model d'atenció ciutadana, quin efecte jurídic principal té la presentació d'una queixa o suggeriment a través de les bústies d'atenció de l'AMB?",
    "answers": [
      { "text": "Interromp els terminis establerts per interposar recursos administratius o contenciosos", "correct": false },
      { "text": "Constitueix un tràmit previ i obligatori abans d'exercir accions legals contra l'entitat", "correct": false },
      { "text": "No té naturalesa de recurs administratiu ni paralitza els terminis de impugnació, essent només informativa", "correct": true },
      { "text": "Obre de manera automàtica un expedient sancionador contra el servei afectat", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 2,
    "question": "Pel que fa a la recepció de documents a les oficines de registre de l'Àrea Metropolitana de Barcelona (AMB), quina afirmació s'ajusta a la Llei 39/2015?",
    "answers": [
      { "text": "Només poden admetre escrits i sol·licituds que estiguin estrictament adreçats als òrgans propis de l'AMB", "correct": false },
      { "text": "Estan obligades a recepcionar i digitalitzar qualsevol sol·licitud adreçada a qualsevol administració pública", "correct": true },
      { "text": "Únicament registren documentació en suport paper si prové de municipis integrants de la conurbació", "correct": false },
      { "text": "Exigeixen la concurrència d'un representant legal acreditat per a qualsevol tipus de registre telemàtic", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 3,
    "question": "En el context de la multicanalitat a l'administració pública, quina caracterització defineix correctament el canal electrònic o telemàtic?",
    "answers": [
      { "text": "Garanteix l'atenció personalitzada presencial només durant els dies laborables de matí", "correct": false },
      { "text": "Ofereix operativitat continuada (24 hores, 365 dies) mitjançant la Seu Electrònica i identificació digital segura", "correct": true },
      { "text": "Substitueix completament i de forma excloent el registre general d'entrada en suport paper per a tots els col·lectius", "correct": false },
      { "text": "Exclou qualsevol interacció relacionada amb el pagament de taxes o tributs metropolitans", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 4,
    "question": "Quina és la naturalesa jurídica de les Cartes de Serveis en l'àmbit de la gestió de la qualitat a l'atenció ciutadana?",
    "answers": [
      { "text": "Normes reglamentàries d'obligat compliment amb rang de llei aprovades pel Ple", "correct": false },
      { "text": "Instruments de declaració d'intencions i compromisos de qualitat assumits davant la ciutadania", "correct": true },
      { "text": "Contractes programes subscrits directament amb el sector privat per a la gestió de call centers", "correct": false },
      { "text": "Resolucions singulars de caràcter sancionador per incompliment de terminis d'expedients", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 5,
    "question": "Pel que fa a les competències de l'AMB i l'atenció a la ciutadania, quin àmbit material NO correspon a la gestió directa dels serveis metropolitans de l'ens?",
    "answers": [
      { "text": "El transport públic col·lectiu i la mobilitat metropolitana", "correct": false },
      { "text": "La gestió i recaptació de l'Impost sobre la Renda de les Persones Físiques (IRPF)", "correct": true },
      { "text": "El cicle integral del medi ambient, sanejament i gestió de platges", "correct": false },
      { "text": "La planificació urbanística metropolitana i la gestió d'ajuts a l'habitatge", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 6,
    "question": "Quin paper desenvolupa el personal de les OAC respecte a la ciutadania que manca de mitjans electrònics adequats?",
    "answers": [
      { "text": "Els denega l'accés al registre obligant-los a acudir a una gestoria privada", "correct": false },
      { "text": "Els ofereix assistència en l'ús de mitjans electrònics i obtenció d'identificació digital", "correct": true },
      { "text": "Efectua la tramitació dels seus recursos per via ordinària sense suport informàtic", "correct": false },
      { "text": "Resol definitivament els expedients d'urbanisme i llicències de forma immediata", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 7,
    "question": "Segons els principis de govern obert i transparència aplicats a l'atenció ciutadana, quin objectiu persegueix la simplificació de tràmits?",
    "answers": [
      { "text": "Augmentar la burocràcia interna per garantir major control jeràrquic", "correct": false },
      { "text": "Apropar els serveis públics, reduir càrregues administratives i garantir el dret a una bona administració", "correct": true },
      { "text": "Eliminar completament qualsevol tipus de registre documental previ", "correct": false },
      { "text": "Limitar el dret d'accés a la informació pública exclusivament a les entitats col·laboradores", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 8,
    "question": "Quin element és indispensable per dur a terme tràmits telemàtics amb plenes garanties jurídiques a la Seu Electrònica de l'AMB?",
    "answers": [
      { "text": "La presència física d'un funcionari habilitat de l'ajuntament de residència", "correct": false },
      { "text": "Un sistema d'identificació digital segur acceptat (com idCAT, Cl@ve o certificat electrònic)", "correct": true },
      { "text": "L'enviament previ d'un fax amb signatura hològrafa compulsada", "correct": false },
      { "text": "La superació d'una entrevista prèvia de validació telefònica", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 9,
    "question": "Quin és el propòsit principal de la xarxa SARA en relació amb els sistemes de registre de les administracions públiques?",
    "answers": [
      { "text": "Permetre la interoperabilitat i interconnexió segura per al traspàs de registres entre administracions", "correct": true },
      { "text": "Gestionar el pressupost ordinari i la tresoreria centralitzada de les entitats locals", "correct": false },
      { "text": "establir les tarifes oficials del transport públic a l'àrea metropolitana", "correct": false },
      { "text": "Coordinar les inspeccions de tributs locals i recaptació executiva", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 10,
    "question": "Quina funció específica exerceixen les oficines d'atenció pel que fa a l'estat dels expedients en curs?",
    "answers": [
      { "text": "Informació i orientació general als interessats sobre la situació i tramitació dels procediments", "correct": true },
      { "text": "Modificació directa dels terminis d'resolució establerts per llei", "correct": false },
      { "text": "Dictar la resolució definitiva del fons de l'assumpte per delegació permanent", "correct": false },
      { "text": "Resoldre els recursos d'alçada interposats contra els òrgans superiors", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 11,
    "question": "Com s'estructura principalment l'atenció ciutadana moderna en el marc de les administracions supramunicipals com l'AMB?",
    "answers": [
      { "text": "Mitjançant un model unificat basat en la multicanalitat (presencial, telefònica i telemàtica)", "correct": true },
      { "text": "Exclusivament a través de finestres de suport en paper sense suport informàtic", "correct": false },
      { "text": "Mitjançant agents comercials externs contractats sense vinculació administrativa", "correct": false },
      { "text": "Només mitjançant bústies de suggeriments no vinculants", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 12,
    "question": "Quin tractament reben les consultes i dubtes ràpids formulats a través del canal telefònic o centres de trucades especialitzats?",
    "answers": [
      { "text": "S'assimilen a un recurs contenciós administratiu formal", "correct": false },
      { "text": "Serveixen per a l'assessorament i orientació immediata sense necessitat de desplaçament", "correct": true },
      { "text": "Generen obligatòriament la liquidació de taxes de tramitació telefònica", "correct": false },
      { "text": "Queden exclosos de qualsevol registre o control de qualitat", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 13,
    "question": "Quina premissa cal tenir en compte en relació amb la presentació de documents davant d'una OAC segons la Llei 39/2015 per evitar errors d'examen?",
    "answers": [
      { "text": "L'oficina pot rebutjar documents adreçats a comunitats autònomes diferents de la pròpia", "correct": false },
      { "text": "L'oficina està obligada a registrar i cursar documentació adreçada a qualsevol administració pública integrada al sistema de registre", "correct": true },
      { "text": "Només s'admeten documents si es presenten en horari de tarda", "correct": false },
      { "text": "La presentació perd validesa si no s'acompanya de segell físic en paper", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 14,
    "question": "Quin és l'objectiu de la implementació de sistemes de cita prèvia en el canal presencial de les OAC?",
    "answers": [
      { "text": "Limitar l'accés de la ciutadania als serveis públics essencials", "correct": false },
      { "text": "Optimitzar la gestió de cues, ordenar els fluxos de persones i garantir una atenció personalitzada eficient", "correct": true },
      { "text": "Evitar qualsevol tipus de registre documental manual", "correct": false },
      { "text": "Cobrar una taxa prèvia per la reserva del torn d'atenció", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 15,
    "question": "Quina relació existeix entre les oficines de registre i el concepte de finestreta única?",
    "answers": [
      { "text": "Representen el punt centralitzat d'interacció on la ciutadania pot relacionar-se de manera simplificada amb l'administració", "correct": true },
      { "text": "Constitueixen un òrgan judicial especialitzat en la revisió d'actes nuls", "correct": false },
      { "text": "Són entitats mercantils de capital íntegrament privat adscrites a l'AMB", "correct": false },
      { "text": "Designen un sistema de contractació menor exclusiu per a obres públiques", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 16,
    "question": "Quin tractament normatiu reben les bústies de suggeriments i queixes pel que fa a l'obligació de resposta per part de l'administració?",
    "answers": [
      { "text": "Existeix l'obligació d'emetre una contestació motivada dins dels terminis normatius establerts", "correct": true },
      { "text": "Són respostes discrecionalment només quan l'òrgan ho considera oportú sense límit temporal", "correct": false },
      { "text": "Es converteixen automàticament en recursos extraordinaris de revisió", "correct": false },
      { "text": "Requereixen necessàriament la publicació del cas al Butlletí Oficial de la Província", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 17,
    "question": "Quin impacte té la digitalització dels registres en la relació entre la ciutadania i l'AMB?",
    "answers": [
      { "text": "Elimina la necessitat de complir amb els requisits essencials dels procediments", "correct": false },
      { "text": "Facilita la presentació immediata d'escrits i la consulta de l'estat dels tràmits amb seguretat jurídica", "correct": true },
      { "text": "Restringeix l'accés a la informació pública als dies festius", "correct": false },
      { "text": "Invalida qualsevol acte administratiu realitzat de forma presencial", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 18,
    "question": "Quina és una de les finalitats principals recollides en les Cartes de Serveis d'una administració pública?",
    "answers": [
      { "text": "Establir els nivells de qualitat objectius i compromisos de rendiment exigibles en la prestació als ciutadans", "correct": true },
      { "text": "Fixar les escales retributives del personal funcionari de categoria C1", "correct": false },
      { "text": "Modificar el règim de competències delegades del Ple de la corporació", "correct": false },
      { "text": "Regular el procediment d'aprovació del pressupost general de l'ens", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 19,
    "question": "En relació amb l'assistència en l'ús de mitjans electrònics a l'OAC, quina actuació està permesa als funcionaris habilitats?",
    "answers": [
      { "text": "Signar en nom del ciutadà qualsevol document sense el seu consentiment previ", "correct": false },
      { "text": "Assistir en la identificació i signatura electrònica quan la persona interessada ho sol·liciti", "correct": true },
      { "text": "Modificar directament el contingut de les instàncies un cop registrades", "correct": false },
      { "text": "Rebutjar la tramitació si l'usuari utilitza un certificat digital vàlid", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 20,
    "question": "Quin principi regeix la distribució de canals d'atenció per assegurar que cap ciutadà quedi exclòs per motius digitals?",
    "answers": [
      { "text": "El principi d'accessibilitat universal i multicanalitat integrada", "correct": true },
      { "text": "El principi d'exclusivitat telemàtica obligatòria", "correct": false },
      { "text": "El principi de restricció presencial automàtica", "correct": false },
      { "text": "El principi de supressió del servei telefònic d'atenció", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 21,
    "question": "Quina funció compleix el registre de documents en una OAC pel que fa al còmput de terminis dels procediments?",
    "answers": [
      { "text": "Deixa constància fefaent de la data i hora de presentació de sol·licituds als efectes de computar terminis legals", "correct": true },
      { "text": "Amplia de manera automàtica qualsevol termini d'interposició de recursos en trenta dies", "correct": false },
      { "text": "Interromp de forma permanent la caducitat de tots els expedients en tramitació", "correct": false },
      { "text": "Convalida els vicis de nul·litat de ple dret dels actes administratius", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 22,
    "question": "Quin és el marc normatiu estatal bàsic de referència que regula de manera general el procediment administratiu comú i el règim de les oficines de registre?",
    "answers": [
      { "text": "La Llei 39/2015 i la Llei 40/2015", "correct": true },
      { "text": "La Llei reguladora de les hisendes locals (TRLRHL)", "correct": false },
      { "text": "La Llei de l'Àrea Metropolitana de Barcelona (Llei 31/2010)", "correct": false },
      { "text": "La Llei d'estabilitat pressupostària i sostenibilitat financera", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 23,
    "question": "Com s'integra l'atenció ciutadana de l'AMB en relació amb els 36 municipis que formen la conurbació metropolitana?",
    "answers": [
      { "text": "Mitjançant serveis coordinats per apropar la gestió de competències metropolitanes a la ciutadania", "correct": true },
      { "text": "Assumint de manera excloent totes les competències municipals de cada ajuntament", "correct": false },
      { "text": "Utilitzant exclusivament el canal postal tradicional per a qualsevol comunicació", "correct": false },
      { "text": "Delegant la totalitat del registre en entitats privades externes", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 24,
    "question": "Quina característica defineix la funció d'orientació general exercida per les OAC davant de dubtes de procediment?",
    "answers": [
      { "text": "Proporciona assistència orientativa i informativa sense que això constitueixi un assessorament jurídic vinculant", "correct": true },
      { "text": "Efectua la defensa lletrada d'ofici dels ciutadans davant dels tribunals contenciosos", "correct": false },
      { "text": "Modifica de forma unilateral les bases de les convocatòries públiques", "correct": false },
      { "text": "Emet sentències fermes d'obligatori compliment per a les parts", "correct": false }
    ]
  },
  {
    "theme": "Bloc III - Tema 15: L’Oficina d’Atenció al Ciutadà (OAC). Concepte, funcions, canals i relació amb l'administració pública",
    "number": 25,
    "question": "Quin objectiu principal persegueix l'avaluació de la qualitat i la gestió de queixes en el model d'atenció ciutadana de l'administració?",
    "answers": [
      { "text": "La millora contínua dels serveis públics i l'adaptació a les necessitats reals de la ciutadania", "correct": true },
      { "text": "La imposició de sancions econòmiques a tots els usuaris que emetin suggeriments", "correct": false },
      { "text": "La publicació de dades personals reservades dels reclamants al BOP", "correct": false },
      { "text": "La supressió total dels canals presencials d'atenció", "correct": false }
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