const TEST_ID = "2026_c1_gene_test"; 

const questions = [

  {
    theme: "2026; AMB C1",
    question: "D’acord amb el text únic de la Llei de la funció pública de l’Administració de la Generalitat de Catalunya, el sistema normal de provisió dels llocs de treball reservats a funcionaris és:",
    number: 1,
    answers: [
      { text: "La comissió de serveis", correct: false },
      { text: "El concurs", correct: true },
      { text: "La lliure designació", correct: false },
      { text: "La redistribució d’efectius", correct: false }
    ]
  },

  {
    theme: "2026; AMB C1",
    question: "D’acord amb l’article 17 de la Llei 19/2014, del 29 de desembre, de transparència, accés a la informació pública i bon govern, en quines condicions s’han de reutilitzar les dades obertes?",
    number: 2,
    answers: [
      { text: "Garantint que el contingut no s’alteri, que el sentit de les dades no es desnaturalitzi, citar la font i indicar la data d’actualització.", correct: true },
      { text: "Garantint que el contingut no es modifiqui, malgrat que pugui desnaturalitzar-se el sentit de la informació en funció de l’ús previst per les dades.", correct: false },
      { text: "Modificant lleugerament el contingut per facilitar-ne la comprensió i citar la font.", correct: false },
      { text: "Publicant les dades sense modificacions, però sense necessitat d’indicar la font.", correct: false }
    ]
  },

  {
    theme: "2026; AMB C1",
    question: "D’acord amb el text refós de la Llei de l’Estatut bàsic de l’empleat públic, els empleats públics, en l'ús de dispositius digitals, tenen dret a:",
    number: 3,
    answers: [
      { text: "La desconnexió digital dins de la jornada laboral habitual una vegada finalitzi l’horari de permanència obligatòria.", correct: false },
      { text: "La intimitat enfront de l’ús de dispositius de videovigilància i geolocalització.", correct: true },
      { text: "Fer servir els mitjans tecnològics que es posin a la seva disponibilitat per a activitats professionals privades.", correct: false },
      { text: "Fer servir les aplicacions d’intel·ligència artificial mitjançant el seu compte personal fins que se’ls en faciliti un de corporatiu.", correct: false }
    ]
  },
{
    theme: "2026; AMB C1",
    question: "D’acord amb la Llei 10/2001, de 13 de juliol, d'arxius i documents, s’entén per sistema de gestió documental:",
    number: 4,
    answers: [
      { text: "El conjunt de mètodes de codificació temàtica i temporal dels documents que garanteix la memòria institucional i facilita la traçabilitat.", correct: false },
      { text: "L’organisme o la institució des d’on es fan específicament funcions d’organització, de tutela, de gestió, de descripció, de conservació i de difusió de documents i fons documentals.", correct: false },
      { text: "El conjunt d’operacions i de tècniques basades en l’anàlisi de la producció, la tramitació i el valor dels documents, que tenen com a finalitat controlar d'una manera eficient i sistemàtica la creació, la recepció, el manteniment, l’ús, la conservació i l’eliminació o la transferència dels documents.", correct: true },
      { text: "El conjunt no orgànic de documents que es reuneixen i s’ordenen en funció de criteris subjectius o de conservació.", correct: false }
    ]
  },

  {
    theme: "2026; AMB C1",
    question: "D’acord amb els principis de les dades obertes de la Generalitat de Catalunya, aquestes:",
    number: 5,
    answers: [
      { text: "Són tancades per defecte, però s’ha de promoure activament la seva obertura per tal d’impulsar la transparència.", correct: false },
      { text: "Han de ser obertes per defecte i la seva no publicació s’ha de justificar.", correct: true },
      { text: "Han de ser obertes per defecte i en cap cas està justificada la seva no publicació.", correct: false },
      { text: "Són tancades per defecte per tal de garantir la seguretat de l’administració, si bé la seva obertura es permet en certs casos previstos per la normativa vigent.", correct: false }
    ]
  },

  {
    theme: "2026; AMB C1",
    question: "En relació amb el dret d’accés a la informació pública:",
    number: 6,
    answers: [
      { text: "Només poden exercir-lo les persones que acreditin un interès legítim directe.", correct: false },
      { text: "L’Administració pot exigir la justificació prèvia dels motius de la sol·licitud.", correct: false },
      { text: "Aquest queda restringit a la documentació integrada en procediments administratius en curs.", correct: false },
      { text: "Pot exercir-se sense necessitat de motivar la petició, sens perjudici dels límits legalment establerts.", correct: true }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "El règim general de còmput dels terminis en el procediment administratiu estableix que, quan un termini es fixa per dies i no s’indica la seva naturalesa:",
    number: 7,
    answers: [
      { text: "Es calcula de data a data.", correct: false },
      { text: "Inclou dissabtes però exclou festius.", correct: false },
      { text: "S’entén referit a dies hàbils.", correct: true },
      { text: "S’entén referit a dies naturals.", correct: false }
    ]
  },

  {
    theme: "2026; AMB C1",
    question: "Les administracions públiques tenen l’obligació d’assistir les persones interessades en l’ús dels mitjans electrònics?",
    number: 8,
    answers: [
      { text: "Sí, quan siguin empleats públics.", correct: false },
      { text: "Només quan exerceixin una activitat professional.", correct: false },
      { text: "No, en cap cas és una obligació de les administracions públiques.", correct: false },
      { text: "Sí, a totes aquelles que no tenen l’obligació d’utilitzar-los.", correct: true }
    ]
  },

  {
    theme: "2026; AMB C1",
    question: "Els textos dels documents administratius de la Generalitat s’han d’escriure:",
    number: 9,
    answers: [
      { text: "Alineats per l'esquerra, sense justificar i sense partir paraules a final de línia.", correct: true },
      { text: "Amb justificació del text i amb les paraules partides a final de línia.", correct: false },
      { text: "Alineats pel centre i amb justificació del text.", correct: false },
      { text: "Amb justificació del text.", correct: false }
    ]
  },

  {
    theme: "2026; AMB C1",
    question: "Si una proposta de reforma constitucional afecta els drets fonamentals inclosos al capítol II, secció 1a del títol I, quin dels procediments d'aprovació següents s’ha de seguir?",
    number: 10,
    answers: [
      { text: "Aprovació per majoria de tres cinquenes parts de cada una de les cambres i referèndum si ho sol·licita una desena part dels membres d’alguna cambra.", correct: false },
      { text: "Aprovació per majoria de dos terços de cada una de les cambres, dissolució immediata de les Corts Generals, nova aprovació per majoria de dos terços de les noves cambres i referèndum obligatori.", correct: true },
      { text: "Aprovació per majoria absoluta de cada una de les cambres i referèndum obligatori.", correct: false },
      { text: "Aprovació per majoria de tres cinquenes parts de cada una de les cambres, dissolució de les Corts i referèndum obligatori.", correct: false }
    ]
  },
   {
    theme: "2026; AMB C1",
    question: "D’acord amb el text refós de la Llei de l’Estatut bàsic de l’empleat públic, quina és la durada del permís del progenitor diferent de la mare biològica per naixement d’un fill o filla?",
    number: 11,
    answers: [
      { text: "10 setmanes", correct: false },
      { text: "12 setmanes", correct: false },
      { text: "8 setmanes", correct: false },
      { text: "19 setmanes", correct: true }
    ]
  },

  {
    theme: "2026; AMB C1",
    question: "D’acord amb la Llei 17/2015, del 21 de juliol, d'igualtat efectiva de dones i homes, la coeducació és:",
    number: 12,
    answers: [
      { text: "El principi rector de les polítiques públiques educatives que garanteix la presència equilibrada de dones i homes en els òrgans de direcció dels centres educatius.", correct: false },
      { text: "L’acció educadora que potencia la igualtat real d’oportunitats i valora indistintament l’experiència, les aptituds i l’aportació social i cultural de dones i homes.", correct: true },
      { text: "El model educatiu basat en l’escolarització conjunta d’alumnes de diferents gèneres en un mateix centre educatiu.", correct: false },
      { text: "El model educatiu que promou la corresponsabilitat de dones i homes en les tasques domèstiques i de cura mitjançant programes específics de sensibilització adreçats a les famílies.", correct: false }
    ]
  },

  {
    theme: "2026; AMB C1",
    question: "D’acord amb l’article 22 de la Llei 26/2010, del 3 d’agost, de règim jurídic i de procediment de les administracions públiques de Catalunya, quina de les opcions següents constitueix un dret dels ciutadans a una bona administració?",
    number: 13,
    answers: [
      { text: "El dret a decidir directament el contingut final de les resolucions administratives, amb indicació del règim de recursos que escaigui.", correct: false },
      { text: "El dret a conèixer en qualsevol moment l'estat de tramitació de qualsevol procediment, sempre que sigui proporcional a la finalitat perseguida.", correct: false },
      { text: "El dret a no aportar dades o documents que ja estiguin en poder de les administracions públiques o dels quals aquestes puguin disposar.", correct: true },
      { text: "El dret a presentar al·legacions únicament en la fase final del procediment administratiu, i que se’ls notifiqui la resposta dins del termini legalment establert.", correct: false }
    ]
  },

  {
    theme: "2026; AMB C1",
    question: "Quin és el sistema d’informació comú del registre d’entrada i sortida de documents de l’Administració de la Generalitat de Catalunya?",
    number: 14,
    answers: [
      { text: "EACAT", correct: false },
      { text: "S@rcat", correct: true },
      { text: "e-NOTUM", correct: false },
      { text: "e-Valisa", correct: false }
    ]
  },

  {
    theme: "2026; AMB C1",
    question: "Quina de les opcions següents descriu el concepte de mineria de dades?",
    number: 15,
    answers: [
      { text: "És l’ús de consultes SQL per recuperar registres d’una base de dades.", correct: false },
      { text: "És la representació gràfica de dades per millorar la comprensió visual.", correct: false },
      { text: "És el procés de recopilació i arxivament de documents administratius sense anàlisi de contingut.", correct: false },
      { text: "És l’anàlisi sistemàtica de grans volums de dades per identificar patrons, tendències i relacions no evidents, amb possibles aplicacions predictives.", correct: true }
    ]
  },

  {
    theme: "2026; AMB C1",
    question: "Quin dels següents és un òrgan superior de l’Administració de la Generalitat?",
    number: 16,
    answers: [
      { text: "El síndic o la síndica de greuges.", correct: false },
      { text: "El secretari o la secretària general de cada departament.", correct: false },
      { text: "El conseller o la consellera de cada departament.", correct: true },
      { text: "El president o la presidenta del Parlament.", correct: false }
    ]
  },

  {
    theme: "2026; AMB C1",
    question: "D’acord amb la Llei 40/2015, d’1 d’octubre, de règim jurídic del sector públic, quin principi han de respectar les administracions públiques en la seva actuació?",
    number: 17,
    answers: [
      { text: "L’autoregulació sense límits legals.", correct: false },
      { text: "El servei efectiu als ciutadans.", correct: true },
      { text: "La discrecionalitat plena en l’assignació de recursos.", correct: false },
      { text: "La jerarquia política sobre el poder legislatiu.", correct: false }
    ]
  },
{
    theme: "2026; AMB C1",
    question: "D’acord amb la Llei 40/2015, d’1 d’octubre, de règim jurídic del sector públic, quina de les opcions següents forma part del sector públic institucional sense tenir la condició d’Administració pública?",
    number: 18,
    answers: [
      { text: "Un organisme autònom", correct: false },
      { text: "Una comunitat autònoma", correct: false },
      { text: "Una universitat pública", correct: true },
      { text: "Una entitat local", correct: false }
    ]
  },

  {
    theme: "2026; AMB C1",
    question: "Quina de les opcions següents consisteix en l’encomanda d’activitats de caràcter material o tècnic, sense alteració de la titularitat ni de l’exercici de la competència?",
    number: 19,
    answers: [
      { text: "Avocació", correct: false },
      { text: "Encàrrec de gestió", correct: true },
      { text: "Delegació de competències", correct: false },
      { text: "Delegació de signatura", correct: false }
    ]
  },

  {
    theme: "2026; AMB C1",
    question: "Han de ser motivats, entre d’altres, els actes administratius que:",
    number: 20,
    answers: [
      { text: "No afectin drets ni interessos.", correct: false },
      { text: "Es limitin a reproduir el contingut d’una norma.", correct: false },
      { text: "Es dictin en exercici de potestats discrecionals.", correct: true },
      { text: "Es dictin en exercici de potestats arbitràries.", correct: false }
    ]
  },

  {
    theme: "2026; AMB C1",
    question: "Com s’inicien els procediments administratius de naturalesa sancionadora?",
    number: 21,
    answers: [
      { text: "Sempre d'ofici per acord de l'òrgan competent.", correct: true },
      { text: "Indistintament, d’ofici o a sol·licitud de la persona interessada.", correct: false },
      { text: "Sempre amb denúncia prèvia de la persona interessada.", correct: false },
      { text: "Sempre a sol·licitud de la persona interessada.", correct: false }
    ]
  },

  {
    theme: "2026; AMB C1",
    question: "El codi segur de verificació, utilitzat com a sistema de signatura de documents per a l’actuació administrativa automatitzada:",
    number: 22,
    answers: [
      { text: "És únic per cada document i el vincula amb la persona signatària, de manera que qualsevol modificació del document es podrà consultar amb el mateix codi segur de verificació.", correct: false },
      { text: "Permet que la persona que disposa del codi verifiqui el document sense limitacions.", correct: false },
      { text: "Es pot comprovar a la Seu electrònica de l’Administració de la Generalitat durant el temps que estableixi la resolució que l’autoritza.", correct: true },
      { text: "És un codi format per 48 dígits alfanumèrics.", correct: false }
    ]
  },

  {
    theme: "2026; AMB C1",
    question: "Quina és l’eina de què es dota el sector públic de Catalunya per fer efectiu el dret dels ciutadans a no aportar dades ni documents que ja es troben en poder de les administracions públiques?",
    number: 23,
    answers: [
      { text: "El Tauler electrònic de la Generalitat de Catalunya.", correct: false },
      { text: "La plataforma Gencat Serveis i Tràmits.", correct: false },
      { text: "L'extranet de les administracions públiques catalanes.", correct: false },
      { text: "El Catàleg de dades i documents interoperables a Catalunya.", correct: true }
    ]
  },

  {
    theme: "2026; AMB C1",
    question: "D’acord amb la Llei orgànica 3/2018, de 5 de desembre, de protecció de dades personals i garantia dels drets digitals, a partir de quina edat pot prestar el consentiment un menor d’edat perquè es tractin les seves dades personals?",
    number: 24,
    answers: [
      { text: "13 anys", correct: false },
      { text: "14 anys", correct: true },
      { text: "15 anys", correct: false },
      { text: "16 anys", correct: false }
    ]
  },
  {
    theme: "2026; AMB C1",
    question: "D’acord amb el Protocol de gestió de documents electrònics i arxiu de la Generalitat de Catalunya, aprovat per l’Ordre CLT/172/2014, de 14 de maig, el principi de transformació fa referència a:",
    number: 25,
    answers: [
      { text: "La promoció de la substitució dels documents en suport paper per documents electrònics, evitant així la doble gestió de suports.", correct: true },
      { text: "L’optimització de la resolució gràfica dels documents electrònics per facilitar-ne la llegibilitat i perdurabilitat.", correct: false },
      { text: "L’assoliment dels objectius perseguits amb el mínim de recursos possible en la gestió dels documents electrònics.", correct: false },
      { text: "L’aplicació de canvis constants per adaptar-los a noves normatives.", correct: false }
    ]
  },

  {
    theme: "2026; AMB C1",
    question: "És un criteri general de redacció dels oficis:",
    number: 26,
    answers: [
      { text: "L’ús de frases o oracions no conclusives.", correct: false },
      { text: "L'ús de formes verbals en primera persona del present d'indicatiu.", correct: true },
      { text: "Utilitzar formes verbals amb un subjecte impersonal.", correct: false },
      { text: "La utilització generalitzada d’abreviatures.", correct: false }
    ]
  },

  {
    theme: "2026; AMB C1",
    question: "D’acord amb el Text refós de la Llei de finances públiques de Catalunya, quina de les classificacions següents ha d’incloure necessàriament l’estat de despeses del pressupost de la Generalitat de Catalunya?",
    number: 27,
    answers: [
      { text: "Per programes", correct: true },
      { text: "Per objectius", correct: false },
      { text: "Per fases", correct: false },
      { text: "Per agrupacions", correct: false }
    ]
  },

  {
    theme: "2026; AMB C1",
    question: "D’acord amb la Llei 9/2017, de 8 de novembre, de contractes del sector públic, amb caràcter general, els contractes privats celebrats per una administració pública es regeixen:",
    number: 28,
    answers: [
      { text: "Per la Llei 9/2017, de contractes del sector públic, en totes les seves fases.", correct: false },
      { text: "Pel dret privat pel que fa als seus efectes, modificació i extinció.", correct: true },
      { text: "Pel dret privat pel que fa a la seva preparació i adjudicació.", correct: false },
      { text: "Pel dret privat en totes les seves fases.", correct: false }
    ]
  },

  {
    theme: "2026; AMB C1",
    question: "D’acord amb el Text únic de la Llei de la funció pública de l’Administració de la Generalitat de Catalunya, l’oferta d’ocupació pública:",
    number: 29,
    answers: [
      { text: "Ha d’executar-se dins el termini improrrogable de 3 anys.", correct: true },
      { text: "No pot incloure places addicionals a les inicialment previstes.", correct: false },
      { text: "Només pot aprovar-se cada 2 exercicis pressupostaris.", correct: false },
      { text: "Pot executar-se sense termini si està prevista pressupostàriament.", correct: false }
    ]
  },

  {
    theme: "2026; AMB C1",
    question: "D’acord amb el text refós de la Llei de l’Estatut bàsic de l’empleat públic, quina de les situacions següents comporta la reserva del lloc de treball i el còmput de l’antiguitat?",
    number: 30,
    answers: [
      { text: "Suspensió provisional de funcions", correct: false },
      { text: "Serveis especials", correct: true },
      { text: "Excedència voluntària per interès particular", correct: false },
      { text: "Expectativa de destinació", correct: false }
    ]
  },

  {
    theme: "2026; AMB C1",
    question: "L’article 55.1 de la Constitució Espanyola estableix que la suspensió de determinats drets fonamentals només pot acordar-se en cas de declaració de:",
    number: 31,
    answers: [
      { text: "Situació d’emergència declarada pel Govern.", correct: false },
      { text: "Estat d’alarma.", correct: false },
      { text: "Estat d’excepció o de setge.", correct: true },
      { text: "Qualsevol dels estats previstos a l’article 116.", correct: false }
    ]
  },

  {
    theme: "2026; AMB C1",
    question: "D’acord amb l’Estatut d’autonomia de Catalunya, el Govern és l’òrgan superior col·legiat que dirigeix l’acció política i l’Administració de la Generalitat, i es compon del:",
    number: 32,
    answers: [
      { text: "President o presidenta de la Generalitat, el conseller o o consellera primer, si escau, i els consellers.", correct: true },
      { text: "President o presidenta de la Generalitat, el vicepresident o vicepresidenta, si escau, i els consellers.", correct: false },
      { text: "President o presidenta de la Generalitat, el veguer en cap, si escau, i els consellers de vegueria.", correct: false },
      { text: "President o presidenta de la Generalitat, el conseller o consellera en cap, si escau, i els consellers.", correct: false }
    ]
  },
{
    theme: "2026; AMB C1",
    question: "L’autoritat o el funcionari públic que influeixi en una altra autoritat o en un altre funcionari públic, prevalent-se de l’exercici de les facultats del seu càrrec, amb la finalitat d’aconseguir una resolució que li pugui generar, directament o indirectament, un benefici econòmic per a si mateix o per a un tercer, és responsable d’un delicte de:",
    number: 33,
    answers: [
      { text: "Violació de secrets", correct: false },
      { text: "Suborn", correct: false },
      { text: "Tràfic d’influències", correct: true },
      { text: "Administració deslleial", correct: false }
    ]
  },

  {
    theme: "2026; AMB C1",
    question: "Quan pot ser útil fer servir el núvol?",
    number: 34,
    answers: [
      { text: "Quan sigui necessària la creació de carpetes d’accés obert al públic per compartir fitxers que continguin informació confidencial.", correct: false },
      { text: "Quan sigui necessària una solució definitiva a l'arxivament dins del sistema d'informació corresponent o a la unitat de xarxa.", correct: false },
      { text: "Quan es vulgui compartir fitxers sense cap control d’accés ni seguiment de la seva utilització.", correct: false },
      { text: "Quan sigui necessari l'accés o la tramesa de fitxers pesants en els casos que les eines i plataformes habituals no tinguin prou capacitat perquè són massa grans.", correct: true }
    ]
  },

  {
    theme: "2026; AMB C1",
    question: "Quina de les opcions següents constitueix una funció del delegat o delegada de protecció de dades?",
    number: 35,
    answers: [
      { text: "Aplicar les mesures tècniques i organitzatives apropiades per garantir i poder demostrar el compliment de la normativa en matèria de protecció de dades de caràcter personal.", correct: false },
      { text: "Assessorar el responsable o l’encarregat del tractament i els empleats que s’ocupin del tractament de les seves obligacions en matèria de protecció de dades de caràcter personal.", correct: true },
      { text: "Bloquejar les dades de caràcter personal quan sigui procedent rectificar-les o suprimir-les.", correct: false },
      { text: "Dirigir la política de seguretat en matèria de protecció de dades de caràcter personal del seu àmbit de competència.", correct: false }
    ]
  },

  {
    theme: "2026; AMB C1",
    question: "Quin dels subjectes següents no està obligat a relacionar-se per mitjans electrònics amb l’Administració de la Generalitat?",
    number: 36,
    answers: [
      { text: "Les persones que participen en convocatòries de processos selectius per a l’accés a les categories laborals de l’Administració de la Generalitat.", correct: false },
      { text: "Els empleats de la Generalitat per als tràmits i actuacions que efectuïn amb l’Administració de la Generalitat per raó de la seva condició d’empleat públic.", correct: false },
      { text: "Les entitats sense personalitat jurídica.", correct: false },
      { text: "Els representants dels interessats que no estiguin obligats a relacionar-se electrònicament amb l’Administració.", correct: true }
    ]
  },

  {
    theme: "2026; AMB C1",
    question: "D’acord amb el Reial decret legislatiu 5/2015, de 30 d’octubre, pel qual s’aprova el text refós de la Llei de l’Estatut bàsic de l’empleat públic, els empleats públics es classifiquen en:",
    number: 37,
    answers: [
      { text: "Funcionaris de carrera, funcionaris interins, personal laboral i personal eventual.", correct: true },
      { text: "Funcionaris de carrera, personal laboral fix i personal directiu professional.", correct: false },
      { text: "Funcionaris interins, personal eventual i personal assessor.", correct: false },
      { text: "Personal laboral fix, personal eventual i càrrecs electes.", correct: false }
    ]
  },

  {
    theme: "2026; AMB C1",
    question: "D’acord amb el text refós de la Llei de l’Estatut bàsic de l’empleat públic, quin dels drets següents s’exerceix de manera col·lectiva?",
    number: 38,
    answers: [
      { text: "La llibertat d’expressió", correct: false },
      { text: "La llibertat sindical", correct: true },
      { text: "La formació contínua", correct: false },
      { text: "Les vacances", correct: false }
    ]
  },
  {
    theme: "SUPÒSIT 3 - Gestió Administrativa",
    number: 39,
    type: "single",
    question: "Un ciutadà interposa recurs d’empara davant el Tribunal Constitucional al·legant vulneració del dret a la protecció de la salut reconegut al capítol III del títol I de la Constitució. En aquest supòsit, considereu que es pot admetre el recurs?",
    answers: [
      { text: "El recurs és admissible perquè tots els drets del títol I poden ser objecte d’empara.", correct: false },
      { text: "El recurs només és admissible si hi ha desenvolupament per llei orgànica.", correct: false },
      { text: "El recurs no és admissible perquè els principis rectors no gaudeixen de recurs d’empara.", correct: true },
      { text: "El recurs és admissible si el Govern ho autoritza.", correct: false }
    ]
  },

  {
    theme: "SUPÒSIT 3 - Gestió Administrativa",
    number: 40,
    type: "single",
    question: "Han encarregat al Rafael Puig la redacció d’una carta de serveis per al departament on treballa. El Rafael elabora un document que inclou la relació de serveis prestats, els estàndards mínims de qualitat, les condicions d’accés i el règim econòmic aplicable. No obstant això, no hi incorpora cap referència a les mesures de reparació o correcció en cas d’incompliment ni als mecanismes per presentar queixes i suggeriments. D’acord amb la Llei 19/2014, del 29 de desembre, de transparència, accés a la informació pública i bon govern, ha actuat bé?",
    answers: [
      { text: "La carta de serveis és correcta, ja que només és obligatori incloure-hi els serveis prestats i els estàndards de qualitat.", correct: false },
      { text: "La carta de serveis és incompleta, perquè ha d’incloure, entre d’altres continguts mínims, les mesures de reparació i la manera de presentar queixes i suggeriments.", correct: true },
      { text: "La carta de serveis és vàlida si els mecanismes de queixa estan regulats en una norma independent.", correct: false },
      { text: "La carta de serveis pot ometre les mesures de reparació si els estàndards de qualitat estan correctament definits.", correct: false }
    ]
  },

  {
    theme: "SUPÒSIT 3 - Gestió Administrativa",
    number: 41,
    type: "single",
    question: "Sou una persona funcionària del cos administratiu de l’Administració de la Generalitat de Catalunya i el vostre superior jeràrquic us encarrega fer un llistat de tots els consorcis adscrits al Departament de Cultura. Quina eina de caràcter públic us permetrà obtenir aquesta informació?",
    answers: [
      { text: "El Registre d’òrgans de representació del personal al servei de l’Administració de la Generalitat de Catalunya.", correct: false },
      { text: "El Registre electrònic de representació.", correct: false },
      { text: "El Registre de grups d'interès de Catalunya.", correct: false },
      { text: "El Registre del sector públic de la Generalitat de Catalunya.", correct: true }
    ]
  },

  {
    theme: "SUPÒSIT 3 - Gestió Administrativa",
    number: 42,
    type: "single",
    question: "En el marc de la tramitació ordinària d’uns expedients, el director general del Departament d’Esports formalitza una delegació de competències a favor del subdirector d’assessorament jurídic perquè resolgui determinats procediments. En un d’aquests expedients, la resolució que signa el subdirector es notifica a l’interessat, però al text de la resolució no es fa constar enlloc que s’actua per delegació ni es fa referència a l’acord de delegació. En aquest context, les resolucions dictades per delegació:",
    answers: [
      { text: "Es consideren dictades per l’òrgan delegat.", correct: false },
      { text: "Han d’indicar expressament aquesta circumstància.", correct: true },
      { text: "Només són vàlides si la delegació es notifica individualment.", correct: false },
      { text: "Comporten la transmissió definitiva de la titularitat.", correct: false }
    ]
  },

  {
    theme: "SUPÒSIT 3 - Gestió Administrativa",
    number: 43,
    type: "single",
    question: "Sou una persona funcionària del cos administratiu de l’Administració de la Generalitat de Catalunya i l’òrgan competent us comunica la vostra designació per dur a terme les actuacions prèvies a l’inici d’un procediment disciplinari per la presumpta comissió d’una falta per part d’un altre funcionari del cos administratiu. Aquesta designació és possible?",
    answers: [
      { text: "Sí, en cas que no hi hagi òrgans que tinguin atribuïdes funcions d'investigació, indagació i inspecció en la matèria.", correct: true },
      { text: "No, aquesta funció només la poden exercir les persones titulars d’òrgans actius.", correct: false },
      { text: "Només en els casos d'urgència inajornable.", correct: false },
      { text: "Sí, prèvia adopció de les mesures provisionals que ho permetin per part de l’òrgan competent.", correct: false }
    ]
  },

  {
    theme: "SUPÒSIT 3 - Gestió Administrativa",
    number: 44,
    type: "single",
    question: "Sou una persona funcionària del cos administratiu de l’Administració de la Generalitat de Catalunya i el vostre cap us encarrega separar els elements que han de formar part d’un expedient administratiu que cal trametre a un jutjat. Quin dels elements següents s’ha d’incloure en l’expedient?",
    answers: [
      { text: "a) Un resum dels fets elaborat pel funcionari instructor del procediment administratiu.", correct: false },
      { text: "b) La notificació de la resolució d’incoació.", correct: true },
      { text: "c) La informació continguda en bases de dades informàtiques.", correct: false },
      { text: "d) La comunicació interna per sol·licitar un document en poder d’un altre òrgan administratiu.", correct: false }
    ]
  },
  {

  theme: "SUPÒSIT 3 - Gestió Administrativa",
  question: "Sou una persona funcionària del cos administratiu de l’Administració de la Generalitat de Catalunya i us encarreguen emplenar un formulari per sol·licitar una modificació de crèdit. Per emplenar aquest formulari heu d’afegir el codi que defineix la classificació econòmica de les despeses. Quina agrupació defineix la primera posició numèrica d’aquest codi?",
  number: 45,
  answers: [
    { text: "El concepte", correct: false },
    { text: "L’article", correct: false },
    { text: "El capítol", correct: true },
    { text: "L’aplicació", correct: false }
  ]

},

{

  theme: "SUPÒSIT 3 - Gestió Administrativa",
  question: "Després d’una situació conflictiva en el servei d’atenció al públic on treballa el funcionari Andreu Galbete, els seus responsables li encarreguen que tramiti una licitació pública per contractar un servei de seguretat per al seu edifici. A través de quin mitjà electrònic podrà donar publicitat a la convocatòria d’aquesta licitació?",
  number: 46,
  answers: [
    { text: "Del Registre d'empreses licitadores i classificades de Catalunya (RELIC)", correct: false },
    { text: "Del Portal de dades obertes de la Generalitat de Catalunya", correct: false },
    { text: "De la Plataforma de serveis de contractació pública (PSCP)", correct: true },
    { text: "Del portal Licita.cat", correct: false }
  ]

},

{

  theme: "SUPÒSIT 3 - Gestió Administrativa",
  question: "El Marc Fonollosa és funcionari de carrera de la Generalitat i, en un procediment penal, se’l condemna mitjançant sentència ferma a una pena d’inhabilitació especial per a càrrec públic vinculada al lloc que ocupa actualment. Un cop la sentència és ferma i es comunica a l’Administració als efectes de personal, quina és la conseqüència jurídica respecte a la seva relació de funcionari?",
  number: 47,
  answers: [
    { text: "La suspensió temporal de funcions fins a complir la condemna.", correct: false },
    { text: "La pèrdua de la condició de funcionari.", correct: true },
    { text: "El trasllat obligatori a un altre cos o escala.", correct: false },
    { text: "La declaració automàtica d’excedència forçosa voluntària.", correct: false }
  ]

},

{

  theme: "SUPÒSIT 3 - Gestió Administrativa",
  question: "El Martí Costa és funcionari de carrera del cos administratiu (grup C, subgrup C1) destinat a un servei territorial de la Generalitat de Catalunya amb jornada completa. Presenta una sol·licitud de compatibilitat per poder exercir, fora de l’horari laboral, una activitat privada com a gestor comptable per a una empresa del sector alimentari. Tot i haver-la demanat, comença a prestar l’activitat abans de rebre una resolució expressa de l’Administració. D’acord amb la normativa aplicable:",
  number: 48,
  answers: [
    { text: "Pot iniciar l’activitat si no coincideix amb el seu horari de treball.", correct: false },
    { text: "L’activitat només requereix comunicació prèvia.", correct: false },
    { text: "L’exercici de l’activitat exigeix autorització prèvia de compatibilitat.", correct: true },
    { text: "L’activitat és compatible automàticament si no afecta les seves funcions.", correct: false }
  ]

},

{

  theme: "SUPÒSIT 3 - Gestió Administrativa",
  question: "El senyor Miquel Font és un ciutadà que vol exercir el seu dret a rebre les dades personals que ha facilitat a un responsable del tractament en un format estructurat, d’ús comú i de lectura mecànica i a transmetre’l a un altre responsable del tractament sense que el primer s’hi pugui oposar. De quin dret es tracta?",
  number: 49,
  answers: [
    { text: "Dret d’oposició", correct: false },
    { text: "Dret d’accés", correct: false },
    { text: "Dret de rectificació", correct: false },
    { text: "Dret a la portabilitat", correct: true }
  ]

},

{

  theme: "SUPÒSIT 3 - Gestió Administrativa",
  question: "A causa d’una errada informàtica, les dades personals de tots els aspirants de la convocatòria amb número de registre 870 queden exposades públicament. Quan en té constància, el responsable del tractament sap el termini en què ha de notificar aquesta circumstància, però no sap on ha d’adreçar aquesta notificació. On ha d’adreçar-la?",
  number: 50,
  answers: [
    { text: "A l’Autoritat Catalana de Protecció de Dades.", correct: true },
    { text: "Al delegat de protecció de dades.", correct: false },
    { text: "Al Centre de Telecomunicacions i Tecnologies de la Informació de la Generalitat de Catalunya (CTTI).", correct: false },
    { text: "A l’encarregat del tractament.", correct: false }
  ]

},
{

  theme: "SUPÒSIT 3 - Gestió Administrativa",
  question: "La senyora Laura Riera presenta, per registre electrònic, una sol·licitud d’accés a la informació pública per obtenir una còpia d’un informe elaborat pel departament de Cultura de la Generalitat de Catalunya que ja consta com a finalitzat. Al cap d’uns dies rep una resolució de denegació que no exposa cap motiu. D’acord amb la normativa aplicable en matèria de transparència, és correcta l’actuació administrativa?",
  number: 51,
  answers: [
    { text: "L’Administració pot denegar l’accés si el document és d’ús intern.", correct: false },
    { text: "La denegació ha d’estar motivada especialment si es basa en algun límit legalment previst.", correct: true },
    { text: "Només les persones interessades en un procediment poden accedir a informació pública.", correct: false },
    { text: "Cal acreditar interès legítim directe per exercir el dret d’accés.", correct: false }
  ]

},

{

  theme: "SUPÒSIT 3 - Gestió Administrativa",
  question: "La senyora Núria Roig rep notificació d’inici d’un procediment sancionador tramitat pel Departament d’Empresa i Treball de la Generalitat de Catalunya. Durant la fase d’instrucció, sol·licita accedir a la totalitat de l’expedient administratiu, incloent-hi els informes tècnics incorporats al procediment, amb la finalitat de formular al·legacions. L’òrgan instructor li respon que només podrà consultar la resolució final un cop el procediment hagi conclòs. D’acord amb la normativa aplicable, quin dret d’accés li correspon com a persona interessada?",
  number: 52,
  answers: [
    { text: "L’accés a l’expedient només és possible un cop finalitzi el procediment.", correct: false },
    { text: "L’accés queda a criteri discrecional de l’òrgan instructor.", correct: false },
    { text: "Té dret a accedir i obtenir còpia dels documents continguts en el procediment durant la seva tramitació.", correct: true },
    { text: "Només poden facilitar-li els documents que no tinguin caràcter intern.", correct: false }
  ]

},

{

  theme: "SUPÒSIT 3 - Gestió Administrativa",
  question: "El senyor Arnau Castelló es dirigeix a una oficina d’atenció ciutadana per obtenir informació sobre els requisits per accedir a una ajuda pública. L’Administració li respon que aquesta informació només es facilitarà a les persones que presentin formalment una sol·licitud. D’acord amb la normativa aplicable, aquesta resposta:",
  number: 53,
  answers: [
    { text: "És conforme a dret, perquè la informació només es facilita dins un procediment administratiu.", correct: false },
    { text: "No s’ajusta al règim jurídic aplicable, ja que la ciutadania té dret a rebre informació sobre serveis i prestacions públiques.", correct: true },
    { text: "Només seria incorrecta si es tractés d’un procediment sancionador.", correct: false },
    { text: "És correcta si la informació no consta publicada en cap mitjà oficial.", correct: false }
  ]

},

{

  theme: "SUPÒSIT 3 - Gestió Administrativa",
  question: "El senyor Pau Ribes presenta una sol·licitud de subvenció davant el Departament d’Empresa i Treball de la Generalitat de Catalunya. Un cop revisada la sol·licitud, l’òrgan instructor prepara la proposta de resolució sense afegir cap informe, dada o document nou a l’expedient: només valora la informació i la documentació que el mateix senyor Ribes ja havia aportat amb la seva sol·licitud. En aquest supòsit, què s’ha de fer respecte al tràmit d’audiència?",
  number: 54,
  answers: [
    { text: "El tràmit d’audiència s’ha de concedir després de formular la proposta de resolució.", correct: false },
    { text: "Es pot prescindir del tràmit d’audiència.", correct: true },
    { text: "El tràmit d’audiència és necessari en tot cas.", correct: false },
    { text: "El tràmit d’audiència pot substituir-se per un tràmit d’informació pública.", correct: false }
  ]

},

{

  theme: "SUPÒSIT 3 - Gestió Administrativa",
  question: "La senyora Laia Rafart presenta una sol·licitud davant un òrgan administratiu i, al cap de diverses setmanes, demana informació sobre l’estat de la seva tramitació. L’Administració li respon que no pot facilitar-li aquesta informació fins que es dicti resolució definitiva. D’acord amb la normativa aplicable, aquesta resposta:",
  number: 55,
  answers: [
    { text: "És ajustada a dret, ja que l’expedient no és accessible fins que finalitza el procediment.", correct: false },
    { text: "No és ajustada a dret, perquè la persona interessada té dret a conèixer en qualsevol moment l’estat de la tramitació.", correct: true },
    { text: "És ajustada a dret si encara no ha transcorregut el termini màxim per resoldre.", correct: false },
    { text: "Només seria incorrecta si es tractés d’un procediment sancionador.", correct: false }
  ]

},
{

  theme: "SUPÒSIT 3 - Gestió Administrativa",
  question: "El senyor Xavier Bassaganya s’assabenta de la convocatòria de 31 processos de selecció corresponents a diversos cossos i escales de personal funcionari de la Generalitat i pretén inscriure-s’hi l’últim dia de termini. En el moment de fer la inscripció s’adona que la connexió a internet del seu domicili no funciona i no pot tramitar-la. Té alguna alternativa no electrònica per inscriure’s correctament al procés selectiu?",
  number: 56,
  answers: [
    { text: "Sí, pot sol·licitar un justificant de l’abast temporal de la interrupció del funcionament, que tindrà efectes en el còmput del termini en paper.", correct: false },
    { text: "Sí, pot tramitar-la per telèfon trucant a l’Escola d’Administració Pública de Catalunya, atès que és l’òrgan convocant del procés.", correct: false },
    { text: "Sí, pot dirigir-se a una oficina d’atenció ciutadana amb funcions d’assistència en matèria de registre, on un funcionari habilitat podrà tramitar la inscripció en nom seu en paper.", correct: false },
    { text: "No, en Xavier forma part d’un col·lectiu obligat a relacionar-se per mitjans electrònics amb l’Administració de la Generalitat.", correct: true }
  ]

},

{

  theme: "SUPÒSIT 3 - Gestió Administrativa",
  question: "La senyora Maria Coll accedeix a la Seu electrònica de l’Administració de la Generalitat de Catalunya i es troba que el seu funcionament s’ha interromput. Us pregunta què pot fer. Què li responeu?",
  number: 57,
  answers: [
    { text: "No és possible que s’interrompi el funcionament de la Seu electrònica.", correct: false },
    { text: "Pot sol·licitar un justificant de l’abast temporal de la interrupció del funcionament.", correct: true },
    { text: "En els tràmits en què sigui obligat relacionar-se amb l’Administració de manera electrònica, no té més opcions que esperar la represa del funcionament de la Seu electrònica.", correct: false },
    { text: "El funcionament de la Seu electrònica es pot interrompre per motius de caràcter tècnic, operatiu o relatius al seu manteniment, i pel temps màxim possible.", correct: false }
  ]

},

{

  theme: "SUPÒSIT 3 - Gestió Administrativa",
  question: "Sou una persona funcionària del cos administratiu de l’Administració de la Generalitat i us encarreguen la digitalització segura de documents. Quina eina heu d’utilitzar?",
  number: 58,
  answers: [
    { text: "El portasignatures digital", correct: false },
    { text: "L’e-Valisa", correct: false },
    { text: "L'e-Còpia", correct: true },
    { text: "L’e-NOTUM", correct: false }
  ]

},

{

  theme: "SUPÒSIT 3 - Gestió Administrativa",
  question: "El senyor Joan Vila va aportar un document a l’Administració de la Generalitat en un procediment anterior en el qual era interessat. En el procediment actual s’oposa que es consulti aquest document. En quin supòsit l’Administració pot consultar el document esmentat, tot i l’oposició de la persona interessada?",
  number: 59,
  answers: [
    { text: "Quan la documentació es requereix en l’exercici de potestats sancionadores.", correct: true },
    { text: "Quan la documentació es requereix per atorgar una subvenció.", correct: false },
    { text: "Quan el document es troba en poder de l’Administració actuant.", correct: false },
    { text: "Quan el document aportat ha estat elaborat per una altra Administració.", correct: false }
  ]

},

{

  theme: "SUPÒSIT 3 - Gestió Administrativa",
  question: "Sou una persona funcionària del cos administratiu de l’Administració de la Generalitat de Catalunya i una persona física que no està obligada a relacionar-s’hi a través de mitjans electrònics us consulta si pot sol·licitar canviar al canal digital en un procediment administratiu que ha estat iniciat d’ofici i es troba en la fase d’instrucció. Què li responeu?",
  number: 60,
  answers: [
    { text: "Que no pot sol·licitar canviar al canal digital, atès que el procediment s’ha iniciat d’ofici.", correct: false },
    { text: "Que no pot sol·licitar canviar al canal digital una vegada el procediment s’ha iniciat.", correct: false },
    { text: "Que pot sol·licitar canviar al canal digital una vegada finalitzi la fase d’instrucció i que ja no podrà tornar a modificar aquesta elecció en el mateix procediment.", correct: false },
    { text: "Que pot sol·licitar canviar al canal digital en qualsevol moment.", correct: true }
  ]

},

{

  theme: "SUPÒSIT 3 - Gestió Administrativa",
  question: "Durant la seva jornada, la funcionària Clara Domingo ha de processar un expedient amb documents en suport paper i electrònic. Com a responsable de la gestió documental, què ha de prioritzar en la seva tasca?",
  number: 61,
  answers: [
    { text: "L’accés intern àgil a la documentació, encara que no s’hagin completat tots els requisits formals de registre i descripció.", correct: false },
    { text: "La impressió de la documentació en suport electrònic, per tal de constituir un expedient complet en format paper.", correct: false },
    { text: "L’autenticitat, la fiabilitat, la integritat i la disponibilitat futura dels documents al llarg de tot el seu cicle de vida.", correct: true },
    { text: "La reutilització de la informació administrativa, fins i tot si això implica adaptar o modificar els documents originals.", correct: false }
  ]

},
{

  theme: "SUPÒSIT 3 - Gestió Administrativa",
  question: "La funcionària Eugènia Sans ha de convertir documents en suport paper en documents electrònics mitjançant digitalització segura. Quin criteri ha de seguir pel que fa a la realització i gestió de còpies?",
  number: 62,
  answers: [
    { text: "La còpia autèntica dels documents ha de ser generada per qui custodia l'original i ha de tenir les mateixes garanties d’autenticitat, integritat i disponibilitat que l’original.", correct: true },
    { text: "Un cop digitalitzat el document en paper, aquest s’ha de destruir immediatament sense cap altra formalitat, ja que la còpia electrònica en substitueix sempre l’original.", correct: false },
    { text: "La digitalització segura permet prescindir de l’acarament amb l’original, sempre que el procés es realitzi mitjançant una eina corporativa autoritzada.", correct: false },
    { text: "La digitalització dels documents en paper és suficient a efectes administratius, encara que no es garanteixi la integritat del contingut ni es deixi constància del procediment utilitzat.", correct: false }
  ]

},

{

  theme: "SUPÒSIT 3 - Gestió Administrativa",
  question: "Han encarregat a Gemma Blanch, funcionària del cos administratiu de la Generalitat de Catalunya, la realització d’una còpia electrònica d’un document que certifiqui la coincidència amb l’original en format paper que ha aportat un ciutadà. Què es considera que ha emès la Gemma?",
  number: 63,
  answers: [
    { text: "Un certificat digital", correct: false },
    { text: "Un segell electrònic", correct: false },
    { text: "Una compulsa electrònica", correct: true },
    { text: "Una signatura electrònica", correct: false }
  ]

},

{

  theme: "SUPÒSIT 3 - Gestió Administrativa",
  question: "Heu de redactar un document administratiu amb instruccions per als membres de la vostra unitat fent un ús no sexista de la llengua segons les indicacions que us han donat. D’acord amb això, a qui cal adreçar-se?",
  number: 64,
  answers: [
    { text: "A la Intervenció Delegada", correct: true },
    { text: "A l’interventor delegat", correct: false },
    { text: "Als interventors delegats", correct: false },
    { text: "A les persones encarregades de la funció interventora", correct: false }
  ]

},

{

  theme: "SUPÒSIT 3 - Gestió Administrativa",
  question: "Sou una persona funcionària del cos administratiu i heu de redactar un ofici. En general, d’acord amb el Programa d'identificació visual (PIV) de la Generalitat de Catalunya, quin cos de lletra heu d’utilitzar?",
  number: 65,
  answers: [
    { text: "12", correct: false },
    { text: "11", correct: true },
    { text: "14", correct: false },
    { text: "9", correct: false }
  ]

},

{

  theme: "SUPÒSIT 3 - Gestió Administrativa",
  question: "La Marta Grau és funcionària del cos administratiu i ha rebut una notificació en la qual se li comunica que s’ha incoat un procediment disciplinari contra ella per una presumpta falta d’abandonament del servei. Quin tipus de falta constitueix aquest comportament?",
  number: 66,
  answers: [
    { text: "Greu", correct: false },
    { text: "Molt lleu", correct: false },
    { text: "Molt greu", correct: true },
    { text: "Lleu", correct: false }
  ]

},

{

  theme: "SUPÒSIT 3 - Gestió Administrativa",
  question: "La Maria Ribó és interina del cos administratiu i ha rebut una notificació en la qual se li comunica que s’ha incoat un procediment disciplinari en què se li imputa la comissió d’una falta que pot comportar la revocació del seu nomenament. Quina de les faltes següents permet imposar la sanció de revocació del nomenament d’una persona interina?",
  number: 67,
  answers: [
    { text: "L’assetjament laboral.", correct: true },
    { text: "Les faltes repetides de puntualitat dins un mateix mes sense causa justificada.", correct: false },
    { text: "La reincidència en faltes lleus.", correct: false },
    { text: "La pertorbació del servei.", correct: false }
  ]

},
{

  theme: "SUPÒSIT 3 - Gestió Administrativa",
  question: "La senyora Anna Pérez va ser nomenada funcionària del cos administratiu de la Generalitat en data 1 de juny de 2024 i ha prestat servei en aquest cos de forma ininterrompuda des de llavors. En quina de les dates següents reuneix el requisit d’antiguitat per participar, per al torn de promoció interna, en un procés selectiu per accedir al cos de gestió?",
  number: 68,
  answers: [
    { text: "30 de maig de 2026", correct: false },
    { text: "1 de juny de 2026", correct: true },
    { text: "1 de juny de 2025", correct: false },
    { text: "31 de maig de 2025", correct: false }
  ]

},

{

  theme: "SUPÒSIT 3 - Gestió Administrativa",
  question: "La funcionària Núria Conca es troba subjecta al deure d’intervenció previst pel Protocol que desplega el deure d’intervenció de les persones que treballen a les administracions públiques de Catalunya per a fer efectiu l’abordatge de l’homofòbia, la bifòbia i la transfòbia a Catalunya. Durant la seva jornada laboral, sospita que ha presenciat una situació de discriminació o violència després de veure que un company de feina s’ha dirigit reiteradament a una persona usuària trans amb un nom diferent del que constava al seu certificat de nom sentit i ha fet comentaris despectius sobre la seva expressió de gènere davant d’altres persones presents. D’acord amb el protocol anteriorment esmentat, què ha de fer la senyora Conca?",
  number: 69,
  answers: [
    { text: "No intervenir, ja que la persona afectada no ha presentat queixa formal.", correct: false },
    { text: "Intervenir i adoptar mesures que garanteixin el respecte, independentment del consentiment de la víctima, comunicant els fets pel canal intern establert.", correct: true },
    { text: "Informar dels fets al seu superior jeràrquic perquè determini si cal activar els mecanismes previstos.", correct: false },
    { text: "Limitar-se a recomanar a la persona usuària que presenti una denúncia a un organisme extern.", correct: false }
  ]

},

{

  theme: "SUPÒSIT 3 - Gestió Administrativa",
  question: "La funcionària Júlia Ortega ha de decidir com gestionar la informació sobre un possible cas de discriminació per transfòbia que ha presenciat. D’acord amb el Protocol que desplega el deure d’intervenció de les persones que treballen a les administracions públiques de Catalunya per a fer efectiu l’abordatge de l’homofòbia, la bifòbia i la transfòbia a Catalunya, prioritàriament, la Júlia:",
  number: 70,
  answers: [
    { text: "Ha d’adoptar mesures cautelars immediates respecte del company implicat, per garantir la protecció de la persona afectada.", correct: false },
    { text: "Ha de protegir les dades personals de la persona afectada i evitar qualsevol actuació que pugui comportar revictimització.", correct: true },
    { text: "Ha d’informar-ne immediatament als seus companys i companyes per coordinar una resposta col·lectiva i garantir la transparència administrativa.", correct: false },
    { text: "Ha de valorar la gravetat dels fets i, només si els considera greus, registrar-los i comunicar-los pels canals previstos.", correct: false }
  ]

},

{

  theme: "SUPÒSIT 3 - Gestió Administrativa",
  question: "La funcionària Elisenda Duran participa en l’elaboració de les bases d’una convocatòria de subvencions adreçades a projectes juvenils. En analitzar convocatòries anteriors, detecta una participació molt baixa de joves amb diversitat funcional i de determinats barris amb indicadors socioeconòmics desfavorables. Per aquest motiu, proposa incloure a les bases un criteri de valoració addicional per als projectes impulsats per entitats que treballin majoritàriament amb aquests col·lectius. Alguns membres de l’equip consideren que aquest criteri podria vulnerar el principi d’igualtat en establir un tracte diferenciat entre sol·licitants. D’acord amb la Llei 19/2020, del 30 de desembre, d’igualtat de tracte i no-discriminació, la mesura proposada per l’Elisenda:",
  number: 71,
  answers: [
    { text: "Constitueix una vulneració del principi d’igualtat, ja que qualsevol diferenciació en l’accés a subvencions públiques és discriminatòria.", correct: false },
    { text: "Pot constituir una acció positiva si té per finalitat prevenir, eliminar o compensar una situació de discriminació col·lectiva o social i s’aplica mentre aquesta situació persisteixi.", correct: true },
    { text: "Només seria admissible si tots els sol·licitants accepten expressament el tracte diferenciat en el moment de presentar la sol·licitud.", correct: false },
    { text: "És contrària al principi de neutralitat administrativa, atès que l’Administració no pot tenir en compte factors socials o col·lectius en l’atorgament de subvencions.", correct: false }
  ]

},
{

  theme: "SUPÒSIT 3 - Gestió Administrativa",
  question: "Pot ser responsable d’algun delicte el senyor Manel Queralt si influeix en la seva cunyada Marta Llopis, que és la funcionària encarregada d’elaborar les llistes de persones beneficiàries de prestacions socials, per tal que l’inclogui en la llista de perceptors d’ajuts econòmics?",
  number: 72,
  answers: [
    { text: "Sí, d’un delicte de suborn", correct: false },
    { text: "Sí, d’un delicte de tràfic d’influències", correct: true },
    { text: "No, només en pot ser responsable la Marta", correct: false },
    { text: "Sí, d’un delicte d’estafa", correct: false }
  ]

},

{

  theme: "SUPÒSIT 3 - Gestió Administrativa",
  question: "El funcionari Ramon Badal és el responsable de l’arxiu d’un departament de la Generalitat. Quin delicte comet presumptament el Ramon si, sabent-ho, destrueix documents la custòdia dels quals li ha estat encarregada per raó del seu càrrec?",
  number: 73,
  answers: [
    { text: "Infidelitat en la custòdia de documents", correct: true },
    { text: "Violació de secrets", correct: false },
    { text: "Negligència en la custòdia de documents", correct: false },
    { text: "Malversació", correct: false }
  ]

},

{

  theme: "SUPÒSIT 3 - Gestió Administrativa",
  question: "El funcionari Miquel Rovira ha de compartir arxius amb personal extern que col·labora en un projecte del Departament. Què ha de fer el Miquel abans de compartir documents amb persones externes?",
  number: 74,
  answers: [
    { text: "No cal cap comprovació si el personal extern és adjudicatari d’un contracte.", correct: false },
    { text: "Facilitar el seu correu personal no corporatiu per tal d’agilitar les futures comunicacions.", correct: false },
    { text: "Publicar-los en una carpeta pública del núvol per garantir-ne la transparència.", correct: false },
    { text: "Verificar que el canal de compartició sigui autoritzat i que les dades compartides compleixin la normativa de protecció de dades.", correct: true }
  ]

},

{

  theme: "SUPÒSIT 3 - Gestió Administrativa",
  question: "El funcionari Antoni Casellas utilitza OneDrive per emmagatzemar i treballar amb documents d'un projecte, i reflexiona sobre les seves característiques per tal d’assegurar la seguretat i l’accessibilitat de la informació. Quin dels següents és un avantatge principal de l’ús del OneDrive?",
  number: 75,
  answers: [
    { text: "Permet centralitzar l’emmagatzematge en dispositius locals amb sincronització automàtica sense necessitat de configuració de permisos.", correct: false },
    { text: "Permet l’accés remot als documents i la compartició amb control de permisos, tot mantenint la seguretat, la traçabilitat i el registre d’activitats.", correct: true },
    { text: "Substitueix els sistemes corporatius d’arxiu electrònic, ja que permet gestionar directament expedients administratius complets.", correct: false },
    { text: "Permet que qualsevol persona externa pugui accedir als documents sense restriccions.", correct: false }
  ]

},

{

  theme: "SUPÒSIT 3 - Gestió Administrativa",
  question: "Després de tramitar un contracte d’obres, el senyor Oriol Grau vol ampliar informació sobre altres licitacions. Al fer diverses cerques descobreix que pot descarregar-se una base de dades amb els contractes públics adjudicats per la Generalitat de Catalunya a través del portal de dades obertes. A més, comprova que pot treballar amb aquesta base de dades per elaborar indicadors estadístics i generar gràfics. Per quina de les raons següents pot el senyor Oriol Grau explotar aquesta base de dades?",
  number: 76,
  answers: [
    { text: "La base de dades està en un format d’imatge d’alta definició.", correct: false },
    { text: "La base de dades té com a objecte una matèria definida com a especialment estratègica per la normativa vigent.", correct: false },
    { text: "La base de dades està protegida amb llicència tancada però es pot visualitzar.", correct: false },
    { text: "La base de dades està en format reutilitzable.", correct: true }
  ]

},

{

  theme: "SUPÒSIT 3 - Gestió Administrativa",
  question: "La funcionària Olga Pons descarrega una base de dades sobre contractes públics de la Generalitat de Catalunya i utilitza un programa informàtic per analitzar la informació, identificar patrons de comportament i detectar tendències en les adjudicacions. Quina opció de les següents descriu millor aquesta activitat?",
  number: 77,
  answers: [
    { text: "Indexació documental", correct: false },
    { text: "Mineria de dades", correct: true },
    { text: "Publicitat activa", correct: false },
    { text: "Estratificació de dades", correct: false }
  ]

},
{
  theme: "SUPÒSIT 3 - Gestió Administrativa",
  question: "La funcionària Remei Ramos està valorant de connectar directament la base de dades de subvencions del portal de dades obertes a una eina de visualització i anàlisis de dades, sense necessitat de descarregar prèviament aquesta base de dades. A quina fase del cicle de vida de les dades es correspon aquesta actuació?",
  number: 78,
  answers: [
    { text: "Generació de dades", correct: false },
    { text: "Captura de dades", correct: true },
    { text: "Anàlisi de dades", correct: false },
    { text: "Validació de dades", correct: false }
  ]
},
{
  theme: "SUPÒSIT 3 - Gestió Administrativa",
  question: "A causa d’una errada informàtica, les dades personals de tots els aspirants de la convocatòria amb número de registre 870 queden exposades públicament. Quan en té constància, el responsable del tractament sap que ha de notificar aquesta circumstància. De quin termini disposa per fer-ho?",
  number: 79,
  answers: [
    { text: "24 hores", correct: false },
    { text: "1 mes", correct: false },
    { text: "72 hores", correct: true },
    { text: "3 mesos", correct: false }
  ]
},
{
  theme: "SUPÒSIT 3 - Gestió Administrativa",
  question: "Arran d’una actuació d’inspecció, el Departament d’Agricultura, Ramaderia, Pesca i Alimentació inicia d’ofici un procediment sancionador contra el senyor Jordi Valls per una presumpta infracció administrativa. El procediment segueix la tramitació ordinària, però es deixa passar el termini màxim legal per dictar i notificar la resolució sense que s’hagi notificat cap resolució expressa. Consta, a més, que la demora no és imputable al senyor Valls. En aquest supòsit:",
  number: 80,
  answers: [
    { text: "S’entén estimada la pretensió per silenci administratiu.", correct: false },
    { text: "S’entén desestimada la pretensió per silenci administratiu.", correct: false },
    { text: "Es produeix la caducitat del procediment.", correct: true },
    { text: "Les actuacions practicades queden automàticament anul·lades.", correct: false }
  ]
},
{
  theme: "SUPÒSIT 3 - Gestió Administrativa",
  question: "La senyora Araceli Salazar utilitza el OneDrive per emmagatzemar i treballar amb documents d'un projecte, i reflexiona sobre les seves característiques. Quina de les següents no és una característica de l’ús del OneDrive?",
  number: 81,
  answers: [
    { text: "Emmagatzema la informació en unitats locals de xarxa.", correct: true },
    { text: "Permet el treball síncron de diferents usuaris.", correct: false },
    { text: "Facilita compartir fitxers molt pesants.", correct: false },
    { text: "Permet accedir als fitxers des de qualsevol dispositiu amb connexió a internet.", correct: false }
  ]
},
{
  theme: "SUPÒSIT 3 - Gestió Administrativa",
  question: "La Marta Grau, funcionària del cos administratiu, participa en el sistema 360° d'avaluació de competències i d'avaluació de l'assoliment d'objectius de la Generalitat de Catalunya. D’acord amb el procediment establert, l’acompliment de quins objectius s’avaluen?",
  number: 82,
  answers: [
    { text: "Els individuals i els col·lectius", correct: true },
    { text: "Només els individuals", correct: false },
    { text: "Només els col·lectius", correct: false },
    { text: "Els inclosos en l’avaluació de les competències professionals", correct: false }
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