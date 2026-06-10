(function(){
  const QUESTION_BANK = {
  "en": [
    {
      "id": 1,
      "cat": "Relationships",
      "text": "Held hands romantically?"
    },
    {
      "id": 2,
      "cat": "Relationships",
      "text": "Been on a date?"
    },
    {
      "id": 3,
      "cat": "Relationships",
      "text": "Been in a committed relationship?"
    },
    {
      "id": 4,
      "cat": "Relationships",
      "text": "Had a crush that lasted for months?"
    },
    {
      "id": 5,
      "cat": "Relationships",
      "text": "Told someone you loved them romantically?"
    },
    {
      "id": 6,
      "cat": "Relationships",
      "text": "Been rejected by someone you liked?"
    },
    {
      "id": 7,
      "cat": "Relationships",
      "text": "Rejected someone who liked you?"
    },
    {
      "id": 8,
      "cat": "Relationships",
      "text": "Gone through a breakup?"
    },
    {
      "id": 9,
      "cat": "Relationships",
      "text": "Gone on a blind date or app date?"
    },
    {
      "id": 10,
      "cat": "Relationships",
      "text": "Had a long-distance relationship?"
    },
    {
      "id": 11,
      "cat": "Physical affection",
      "text": "Kissed someone romantically?"
    },
    {
      "id": 12,
      "cat": "Physical affection",
      "text": "Made out with someone?"
    },
    {
      "id": 13,
      "cat": "Physical affection",
      "text": "Cuddled with romantic intent?"
    },
    {
      "id": 14,
      "cat": "Physical affection",
      "text": "Slept in the same bed as someone you liked?"
    },
    {
      "id": 15,
      "cat": "Physical affection",
      "text": "Had a romantic moment in public?"
    },
    {
      "id": 16,
      "cat": "Physical affection",
      "text": "Been kissed by someone unexpectedly?"
    },
    {
      "id": 17,
      "cat": "Physical affection",
      "text": "Kissed someone you had just met?"
    },
    {
      "id": 18,
      "cat": "Physical affection",
      "text": "Had a secret romantic interaction?"
    },
    {
      "id": 19,
      "cat": "Physical affection",
      "text": "Had romantic contact at a party?"
    },
    {
      "id": 20,
      "cat": "Physical affection",
      "text": "Had a romantic experience you later regretted?"
    },
    {
      "id": 21,
      "cat": "Adult experiences",
      "text": "Had consensual adult intimacy?"
    },
    {
      "id": 22,
      "cat": "Adult experiences",
      "text": "Discussed boundaries before intimacy?"
    },
    {
      "id": 23,
      "cat": "Adult experiences",
      "text": "Bought or carried protection?"
    },
    {
      "id": 24,
      "cat": "Adult experiences",
      "text": "Had a serious conversation about sexual health?"
    },
    {
      "id": 25,
      "cat": "Adult experiences",
      "text": "Had intimacy with someone you were dating?"
    },
    {
      "id": 26,
      "cat": "Adult experiences",
      "text": "Had intimacy with someone you were not dating?"
    },
    {
      "id": 27,
      "cat": "Adult experiences",
      "text": "Had a friends-with-benefits situation?"
    },
    {
      "id": 28,
      "cat": "Adult experiences",
      "text": "Had an awkward adult conversation with a parent or guardian?"
    },
    {
      "id": 29,
      "cat": "Adult experiences",
      "text": "Taken a pregnancy or STI test, or accompanied someone to one?"
    },
    {
      "id": 30,
      "cat": "Adult experiences",
      "text": "Had an adult experience you prefer not to tell most people about?"
    },
    {
      "id": 31,
      "cat": "Social life",
      "text": "Attended a house party?"
    },
    {
      "id": 32,
      "cat": "Social life",
      "text": "Stayed out all night for social reasons?"
    },
    {
      "id": 33,
      "cat": "Social life",
      "text": "Snuck out without permission?"
    },
    {
      "id": 34,
      "cat": "Social life",
      "text": "Went to a club or bar?"
    },
    {
      "id": 35,
      "cat": "Social life",
      "text": "Danced with someone you were attracted to?"
    },
    {
      "id": 36,
      "cat": "Social life",
      "text": "Hosted a party?"
    },
    {
      "id": 37,
      "cat": "Social life",
      "text": "Been the center of a party story?"
    },
    {
      "id": 38,
      "cat": "Social life",
      "text": "Traveled mainly for a party, concert, or festival?"
    },
    {
      "id": 39,
      "cat": "Social life",
      "text": "Made a major life decision because of friends?"
    },
    {
      "id": 40,
      "cat": "Social life",
      "text": "Had a friendship drama that became public?"
    },
    {
      "id": 41,
      "cat": "School and rules",
      "text": "Skipped a class without a real reason?"
    },
    {
      "id": 42,
      "cat": "School and rules",
      "text": "Copied homework or let someone copy yours?"
    },
    {
      "id": 43,
      "cat": "School and rules",
      "text": "Cheated on a quiz or exam?"
    },
    {
      "id": 44,
      "cat": "School and rules",
      "text": "Lied to get out of school or work?"
    },
    {
      "id": 45,
      "cat": "School and rules",
      "text": "Pulled an all-nighter for reasons other than studying?"
    },
    {
      "id": 46,
      "cat": "School and rules",
      "text": "Been disciplined by a teacher, professor, or supervisor?"
    },
    {
      "id": 47,
      "cat": "School and rules",
      "text": "Used a fake excuse to miss an obligation?"
    },
    {
      "id": 48,
      "cat": "School and rules",
      "text": "Been caught breaking a rule?"
    },
    {
      "id": 49,
      "cat": "School and rules",
      "text": "Been suspended, written up, or formally warned?"
    },
    {
      "id": 50,
      "cat": "School and rules",
      "text": "Ignored a serious deadline and accepted the consequence?"
    },
    {
      "id": 51,
      "cat": "Alcohol and substances",
      "text": "Consumed alcohol?"
    },
    {
      "id": 52,
      "cat": "Alcohol and substances",
      "text": "Been drunk?"
    },
    {
      "id": 53,
      "cat": "Alcohol and substances",
      "text": "Had a hangover?"
    },
    {
      "id": 54,
      "cat": "Alcohol and substances",
      "text": "Played a drinking game?"
    },
    {
      "id": 55,
      "cat": "Alcohol and substances",
      "text": "Used a fake ID or borrowed ID?"
    },
    {
      "id": 56,
      "cat": "Alcohol and substances",
      "text": "Tried nicotine or vaping?"
    },
    {
      "id": 57,
      "cat": "Alcohol and substances",
      "text": "Tried marijuana where it was legal for you?"
    },
    {
      "id": 58,
      "cat": "Alcohol and substances",
      "text": "Tried a controlled substance illegally?"
    },
    {
      "id": 59,
      "cat": "Alcohol and substances",
      "text": "Been around illegal drug use?"
    },
    {
      "id": 60,
      "cat": "Alcohol and substances",
      "text": "Regretted something done while intoxicated?"
    },
    {
      "id": 61,
      "cat": "Risk and trouble",
      "text": "Trespassed somewhere?"
    },
    {
      "id": 62,
      "cat": "Risk and trouble",
      "text": "Shoplifted or stolen something small?"
    },
    {
      "id": 63,
      "cat": "Risk and trouble",
      "text": "Been questioned by security or police?"
    },
    {
      "id": 64,
      "cat": "Risk and trouble",
      "text": "Been in a physical fight?"
    },
    {
      "id": 65,
      "cat": "Risk and trouble",
      "text": "Damaged property on purpose?"
    },
    {
      "id": 66,
      "cat": "Risk and trouble",
      "text": "Driven recklessly or accepted a reckless ride?"
    },
    {
      "id": 67,
      "cat": "Risk and trouble",
      "text": "Been ticketed or fined?"
    },
    {
      "id": 68,
      "cat": "Risk and trouble",
      "text": "Been arrested or detained?"
    },
    {
      "id": 69,
      "cat": "Risk and trouble",
      "text": "Done something risky because of peer pressure?"
    },
    {
      "id": 70,
      "cat": "Risk and trouble",
      "text": "Kept a serious secret to avoid trouble?"
    },
    {
      "id": 71,
      "cat": "Digital life",
      "text": "Sent a risky message you later regretted?"
    },
    {
      "id": 72,
      "cat": "Digital life",
      "text": "Posted something online and deleted it quickly?"
    },
    {
      "id": 73,
      "cat": "Digital life",
      "text": "Had a private conversation leaked or shared?"
    },
    {
      "id": 74,
      "cat": "Digital life",
      "text": "Used a dating app?"
    },
    {
      "id": 75,
      "cat": "Digital life",
      "text": "Met someone in person after first meeting online?"
    },
    {
      "id": 76,
      "cat": "Digital life",
      "text": "Ghosted someone or been ghosted?"
    },
    {
      "id": 77,
      "cat": "Digital life",
      "text": "Stalked an ex or crush online?"
    },
    {
      "id": 78,
      "cat": "Digital life",
      "text": "Had a secret social account?"
    },
    {
      "id": 79,
      "cat": "Digital life",
      "text": "Been blocked or blocked someone after drama?"
    },
    {
      "id": 80,
      "cat": "Digital life",
      "text": "Had a screenshot become part of an argument?"
    },
    {
      "id": 81,
      "cat": "Personal choices",
      "text": "Lied about your age?"
    },
    {
      "id": 82,
      "cat": "Personal choices",
      "text": "Lied to your family about where you were?"
    },
    {
      "id": 83,
      "cat": "Personal choices",
      "text": "Spent money secretly?"
    },
    {
      "id": 84,
      "cat": "Personal choices",
      "text": "Gambled or made a risky bet?"
    },
    {
      "id": 85,
      "cat": "Personal choices",
      "text": "Had a piercing or tattoo your family did not know about?"
    },
    {
      "id": 86,
      "cat": "Personal choices",
      "text": "Changed your appearance mainly to impress someone?"
    },
    {
      "id": 87,
      "cat": "Personal choices",
      "text": "Stayed in a situation you knew was unhealthy?"
    },
    {
      "id": 88,
      "cat": "Personal choices",
      "text": "Broken a promise and hidden it?"
    },
    {
      "id": 89,
      "cat": "Personal choices",
      "text": "Had a major secret phase or lifestyle change?"
    },
    {
      "id": 90,
      "cat": "Personal choices",
      "text": "Done something purely for the story?"
    },
    {
      "id": 91,
      "cat": "Boundary and reflection",
      "text": "Set a clear boundary with someone?"
    },
    {
      "id": 92,
      "cat": "Boundary and reflection",
      "text": "Apologized for hurting someone?"
    },
    {
      "id": 93,
      "cat": "Boundary and reflection",
      "text": "Ended a friendship or relationship for your own wellbeing?"
    },
    {
      "id": 94,
      "cat": "Boundary and reflection",
      "text": "Asked for help after making a mistake?"
    },
    {
      "id": 95,
      "cat": "Boundary and reflection",
      "text": "Learned from a consequence the hard way?"
    },
    {
      "id": 96,
      "cat": "Boundary and reflection",
      "text": "Had a serious talk about consent or respect?"
    },
    {
      "id": 97,
      "cat": "Boundary and reflection",
      "text": "Changed your behavior after realizing it was harmful?"
    },
    {
      "id": 98,
      "cat": "Boundary and reflection",
      "text": "Forgave someone after a difficult experience?"
    },
    {
      "id": 99,
      "cat": "Boundary and reflection",
      "text": "Been honest about something embarrassing?"
    },
    {
      "id": 100,
      "cat": "Boundary and reflection",
      "text": "Taken a quiz like this mostly to reflect on your life?"
    }
  ],
  "es": [
    {
      "id": 1,
      "cat": "Relaciones",
      "text": "¿Tomaste de la mano a alguien en plan romántico?"
    },
    {
      "id": 2,
      "cat": "Relaciones",
      "text": "¿Tuviste una cita?"
    },
    {
      "id": 3,
      "cat": "Relaciones",
      "text": "¿Estuviste en una relación formal?"
    },
    {
      "id": 4,
      "cat": "Relaciones",
      "text": "¿Tuviste un flechazo que duró meses?"
    },
    {
      "id": 5,
      "cat": "Relaciones",
      "text": "¿Le dijiste a alguien que lo o la amabas románticamente?"
    },
    {
      "id": 6,
      "cat": "Relaciones",
      "text": "¿Alguien que te gustaba te rechazó?"
    },
    {
      "id": 7,
      "cat": "Relaciones",
      "text": "¿Rechazaste a alguien a quien le gustabas?"
    },
    {
      "id": 8,
      "cat": "Relaciones",
      "text": "¿Pasaste por una ruptura?"
    },
    {
      "id": 9,
      "cat": "Relaciones",
      "text": "¿Tuviste una cita a ciegas o por app?"
    },
    {
      "id": 10,
      "cat": "Relaciones",
      "text": "¿Tuviste una relación a distancia?"
    },
    {
      "id": 11,
      "cat": "Afecto físico",
      "text": "¿Besaste románticamente a alguien?"
    },
    {
      "id": 12,
      "cat": "Afecto físico",
      "text": "¿Te besuqueaste con alguien?"
    },
    {
      "id": 13,
      "cat": "Afecto físico",
      "text": "¿Te acurrucaste con intención romántica?"
    },
    {
      "id": 14,
      "cat": "Afecto físico",
      "text": "¿Dormiste en la misma cama con alguien que te gustaba?"
    },
    {
      "id": 15,
      "cat": "Afecto físico",
      "text": "¿Tuviste un momento romántico en público?"
    },
    {
      "id": 16,
      "cat": "Afecto físico",
      "text": "¿Alguien te besó por sorpresa?"
    },
    {
      "id": 17,
      "cat": "Afecto físico",
      "text": "¿Besaste a alguien que acababas de conocer?"
    },
    {
      "id": 18,
      "cat": "Afecto físico",
      "text": "¿Tuviste una interacción romántica en secreto?"
    },
    {
      "id": 19,
      "cat": "Afecto físico",
      "text": "¿Tuviste contacto romántico en una fiesta?"
    },
    {
      "id": 20,
      "cat": "Afecto físico",
      "text": "¿Tuviste una experiencia romántica de la que luego te arrepentiste?"
    },
    {
      "id": 21,
      "cat": "Experiencias adultas",
      "text": "¿Tuviste intimidad adulta consensuada?"
    },
    {
      "id": 22,
      "cat": "Experiencias adultas",
      "text": "¿Hablaste sobre límites antes de la intimidad?"
    },
    {
      "id": 23,
      "cat": "Experiencias adultas",
      "text": "¿Compraste o llevaste protección?"
    },
    {
      "id": 24,
      "cat": "Experiencias adultas",
      "text": "¿Tuviste una conversación seria sobre salud sexual?"
    },
    {
      "id": 25,
      "cat": "Experiencias adultas",
      "text": "¿Tuviste intimidad con alguien con quien salías?"
    },
    {
      "id": 26,
      "cat": "Experiencias adultas",
      "text": "¿Tuviste intimidad con alguien con quien no salías?"
    },
    {
      "id": 27,
      "cat": "Experiencias adultas",
      "text": "¿Tuviste una relación de amigos con derechos?"
    },
    {
      "id": 28,
      "cat": "Experiencias adultas",
      "text": "¿Tuviste una conversación adulta incómoda con un padre, madre o tutor?"
    },
    {
      "id": 29,
      "cat": "Experiencias adultas",
      "text": "¿Te hiciste una prueba de embarazo o ETS, o acompañaste a alguien a una?"
    },
    {
      "id": 30,
      "cat": "Experiencias adultas",
      "text": "¿Tuviste una experiencia adulta que prefieres no contarle a la mayoría?"
    },
    {
      "id": 31,
      "cat": "Vida social",
      "text": "¿Fuiste a una fiesta en casa?"
    },
    {
      "id": 32,
      "cat": "Vida social",
      "text": "¿Te quedaste fuera toda la noche por motivos sociales?"
    },
    {
      "id": 33,
      "cat": "Vida social",
      "text": "¿Te escapaste sin permiso?"
    },
    {
      "id": 34,
      "cat": "Vida social",
      "text": "¿Fuiste a un club o bar?"
    },
    {
      "id": 35,
      "cat": "Vida social",
      "text": "¿Bailaste con alguien que te atraía?"
    },
    {
      "id": 36,
      "cat": "Vida social",
      "text": "¿Organizaste una fiesta?"
    },
    {
      "id": 37,
      "cat": "Vida social",
      "text": "¿Fuiste el centro de una historia de fiesta?"
    },
    {
      "id": 38,
      "cat": "Vida social",
      "text": "¿Viajaste principalmente por una fiesta, concierto o festival?"
    },
    {
      "id": 39,
      "cat": "Vida social",
      "text": "¿Tomaste una decisión importante por tus amistades?"
    },
    {
      "id": 40,
      "cat": "Vida social",
      "text": "¿Tuviste un drama de amistad que se volvió público?"
    },
    {
      "id": 41,
      "cat": "Escuela y normas",
      "text": "¿Faltaste a clase sin un motivo real?"
    },
    {
      "id": 42,
      "cat": "Escuela y normas",
      "text": "¿Copiaste la tarea o dejaste que alguien copiara la tuya?"
    },
    {
      "id": 43,
      "cat": "Escuela y normas",
      "text": "¿Hiciste trampa en una prueba o examen?"
    },
    {
      "id": 44,
      "cat": "Escuela y normas",
      "text": "¿Mentiste para librarte de la escuela o el trabajo?"
    },
    {
      "id": 45,
      "cat": "Escuela y normas",
      "text": "¿Pasaste toda la noche despierto o despierta por algo que no fuera estudiar?"
    },
    {
      "id": 46,
      "cat": "Escuela y normas",
      "text": "¿Recibiste una sanción de un profesor, docente o supervisor?"
    },
    {
      "id": 47,
      "cat": "Escuela y normas",
      "text": "¿Usaste una excusa falsa para faltar a una obligación?"
    },
    {
      "id": 48,
      "cat": "Escuela y normas",
      "text": "¿Te atraparon rompiendo una regla?"
    },
    {
      "id": 49,
      "cat": "Escuela y normas",
      "text": "¿Te suspendieron, te levantaron un reporte o te dieron una advertencia formal?"
    },
    {
      "id": 50,
      "cat": "Escuela y normas",
      "text": "¿Ignoraste una fecha límite importante y aceptaste la consecuencia?"
    },
    {
      "id": 51,
      "cat": "Alcohol y sustancias",
      "text": "¿Consumiste alcohol?"
    },
    {
      "id": 52,
      "cat": "Alcohol y sustancias",
      "text": "¿Te emborrachaste?"
    },
    {
      "id": 53,
      "cat": "Alcohol y sustancias",
      "text": "¿Tuviste resaca?"
    },
    {
      "id": 54,
      "cat": "Alcohol y sustancias",
      "text": "¿Jugaste a un juego de beber?"
    },
    {
      "id": 55,
      "cat": "Alcohol y sustancias",
      "text": "¿Usaste una identificación falsa o prestada?"
    },
    {
      "id": 56,
      "cat": "Alcohol y sustancias",
      "text": "¿Probaste nicotina o vapeo?"
    },
    {
      "id": 57,
      "cat": "Alcohol y sustancias",
      "text": "¿Probaste marihuana donde era legal para ti?"
    },
    {
      "id": 58,
      "cat": "Alcohol y sustancias",
      "text": "¿Probaste ilegalmente una sustancia controlada?"
    },
    {
      "id": 59,
      "cat": "Alcohol y sustancias",
      "text": "¿Estuviste cerca de consumo ilegal de drogas?"
    },
    {
      "id": 60,
      "cat": "Alcohol y sustancias",
      "text": "¿Te arrepentiste de algo que hiciste estando intoxicado o intoxicada?"
    },
    {
      "id": 61,
      "cat": "Riesgos y problemas",
      "text": "¿Entraste sin permiso en algún lugar?"
    },
    {
      "id": 62,
      "cat": "Riesgos y problemas",
      "text": "¿Robaste en una tienda o tomaste algo pequeño?"
    },
    {
      "id": 63,
      "cat": "Riesgos y problemas",
      "text": "¿Te interrogó seguridad o la policía?"
    },
    {
      "id": 64,
      "cat": "Riesgos y problemas",
      "text": "¿Estuviste en una pelea física?"
    },
    {
      "id": 65,
      "cat": "Riesgos y problemas",
      "text": "¿Dañaste una propiedad a propósito?"
    },
    {
      "id": 66,
      "cat": "Riesgos y problemas",
      "text": "¿Condujiste de forma temeraria o aceptaste ir con alguien que lo hacía?"
    },
    {
      "id": 67,
      "cat": "Riesgos y problemas",
      "text": "¿Recibiste una multa o sanción?"
    },
    {
      "id": 68,
      "cat": "Riesgos y problemas",
      "text": "¿Te arrestaron o detuvieron?"
    },
    {
      "id": 69,
      "cat": "Riesgos y problemas",
      "text": "¿Hiciste algo arriesgado por presión de grupo?"
    },
    {
      "id": 70,
      "cat": "Riesgos y problemas",
      "text": "¿Guardaste un secreto serio para evitar problemas?"
    },
    {
      "id": 71,
      "cat": "Vida digital",
      "text": "¿Enviaste un mensaje arriesgado del que luego te arrepentiste?"
    },
    {
      "id": 72,
      "cat": "Vida digital",
      "text": "¿Publicaste algo en línea y lo borraste enseguida?"
    },
    {
      "id": 73,
      "cat": "Vida digital",
      "text": "¿Se filtró o compartió una conversación privada tuya?"
    },
    {
      "id": 74,
      "cat": "Vida digital",
      "text": "¿Usaste una app de citas?"
    },
    {
      "id": 75,
      "cat": "Vida digital",
      "text": "¿Conociste en persona a alguien después de conocerlo primero en línea?"
    },
    {
      "id": 76,
      "cat": "Vida digital",
      "text": "¿Le hiciste ghosting a alguien o te lo hicieron?"
    },
    {
      "id": 77,
      "cat": "Vida digital",
      "text": "¿Espiaste en línea a un ex o a un flechazo?"
    },
    {
      "id": 78,
      "cat": "Vida digital",
      "text": "¿Tuviste una cuenta secreta en redes?"
    },
    {
      "id": 79,
      "cat": "Vida digital",
      "text": "¿Te bloquearon o bloqueaste a alguien después de un drama?"
    },
    {
      "id": 80,
      "cat": "Vida digital",
      "text": "¿Una captura de pantalla terminó siendo parte de una discusión?"
    },
    {
      "id": 81,
      "cat": "Decisiones personales",
      "text": "¿Mentiste sobre tu edad?"
    },
    {
      "id": 82,
      "cat": "Decisiones personales",
      "text": "¿Le mentiste a tu familia sobre dónde estabas?"
    },
    {
      "id": 83,
      "cat": "Decisiones personales",
      "text": "¿Gastaste dinero en secreto?"
    },
    {
      "id": 84,
      "cat": "Decisiones personales",
      "text": "¿Apostaste o hiciste una apuesta arriesgada?"
    },
    {
      "id": 85,
      "cat": "Decisiones personales",
      "text": "¿Te hiciste un piercing o tatuaje que tu familia no conocía?"
    },
    {
      "id": 86,
      "cat": "Decisiones personales",
      "text": "¿Cambiaste tu apariencia principalmente para impresionar a alguien?"
    },
    {
      "id": 87,
      "cat": "Decisiones personales",
      "text": "¿Seguiste en una situación que sabías que no era saludable?"
    },
    {
      "id": 88,
      "cat": "Decisiones personales",
      "text": "¿Rompiste una promesa y lo ocultaste?"
    },
    {
      "id": 89,
      "cat": "Decisiones personales",
      "text": "¿Tuviste una etapa o cambio de estilo de vida importante en secreto?"
    },
    {
      "id": 90,
      "cat": "Decisiones personales",
      "text": "¿Hiciste algo solo por la anécdota?"
    },
    {
      "id": 91,
      "cat": "Límites y reflexión",
      "text": "¿Marcaste un límite claro con alguien?"
    },
    {
      "id": 92,
      "cat": "Límites y reflexión",
      "text": "¿Pediste perdón por haber herido a alguien?"
    },
    {
      "id": 93,
      "cat": "Límites y reflexión",
      "text": "¿Terminaste una amistad o relación por tu propio bienestar?"
    },
    {
      "id": 94,
      "cat": "Límites y reflexión",
      "text": "¿Pediste ayuda después de cometer un error?"
    },
    {
      "id": 95,
      "cat": "Límites y reflexión",
      "text": "¿Aprendiste de una consecuencia por las malas?"
    },
    {
      "id": 96,
      "cat": "Límites y reflexión",
      "text": "¿Tuviste una conversación seria sobre consentimiento o respeto?"
    },
    {
      "id": 97,
      "cat": "Límites y reflexión",
      "text": "¿Cambiaste tu comportamiento al darte cuenta de que hacía daño?"
    },
    {
      "id": 98,
      "cat": "Límites y reflexión",
      "text": "¿Perdonaste a alguien tras una experiencia difícil?"
    },
    {
      "id": 99,
      "cat": "Límites y reflexión",
      "text": "¿Fuiste sincero o sincera sobre algo vergonzoso?"
    },
    {
      "id": 100,
      "cat": "Límites y reflexión",
      "text": "¿Hiciste un quiz como este principalmente para reflexionar sobre tu vida?"
    }
  ],
  "pt": [
    {
      "id": 1,
      "cat": "Relacionamentos",
      "text": "Já segurou na mão de alguém de forma romântica?"
    },
    {
      "id": 2,
      "cat": "Relacionamentos",
      "text": "Já saiu para um encontro?"
    },
    {
      "id": 3,
      "cat": "Relacionamentos",
      "text": "Já esteve em um relacionamento sério?"
    },
    {
      "id": 4,
      "cat": "Relacionamentos",
      "text": "Já teve uma paixão que durou meses?"
    },
    {
      "id": 5,
      "cat": "Relacionamentos",
      "text": "Já disse a alguém que o ou a amava de forma romântica?"
    },
    {
      "id": 6,
      "cat": "Relacionamentos",
      "text": "Já foi rejeitado ou rejeitada por alguém de quem gostava?"
    },
    {
      "id": 7,
      "cat": "Relacionamentos",
      "text": "Já rejeitou alguém que gostava de você?"
    },
    {
      "id": 8,
      "cat": "Relacionamentos",
      "text": "Já passou por um término?"
    },
    {
      "id": 9,
      "cat": "Relacionamentos",
      "text": "Já saiu para um encontro às cegas ou por aplicativo?"
    },
    {
      "id": 10,
      "cat": "Relacionamentos",
      "text": "Já teve um relacionamento à distância?"
    },
    {
      "id": 11,
      "cat": "Afeto físico",
      "text": "Já beijou alguém romanticamente?"
    },
    {
      "id": 12,
      "cat": "Afeto físico",
      "text": "Já deu uns amassos com alguém?"
    },
    {
      "id": 13,
      "cat": "Afeto físico",
      "text": "Já ficou abraçado ou abraçada com intenção romântica?"
    },
    {
      "id": 14,
      "cat": "Afeto físico",
      "text": "Já dormiu na mesma cama que alguém de quem gostava?"
    },
    {
      "id": 15,
      "cat": "Afeto físico",
      "text": "Já teve um momento romântico em público?"
    },
    {
      "id": 16,
      "cat": "Afeto físico",
      "text": "Já foi beijado ou beijada de surpresa?"
    },
    {
      "id": 17,
      "cat": "Afeto físico",
      "text": "Já beijou alguém que tinha acabado de conhecer?"
    },
    {
      "id": 18,
      "cat": "Afeto físico",
      "text": "Já teve uma interação romântica em segredo?"
    },
    {
      "id": 19,
      "cat": "Afeto físico",
      "text": "Já teve contato romântico em uma festa?"
    },
    {
      "id": 20,
      "cat": "Afeto físico",
      "text": "Já teve uma experiência romântica da qual depois se arrependeu?"
    },
    {
      "id": 21,
      "cat": "Experiências adultas",
      "text": "Já teve intimidade adulta consensual?"
    },
    {
      "id": 22,
      "cat": "Experiências adultas",
      "text": "Já conversou sobre limites antes da intimidade?"
    },
    {
      "id": 23,
      "cat": "Experiências adultas",
      "text": "Já comprou ou levou proteção?"
    },
    {
      "id": 24,
      "cat": "Experiências adultas",
      "text": "Já teve uma conversa séria sobre saúde sexual?"
    },
    {
      "id": 25,
      "cat": "Experiências adultas",
      "text": "Já teve intimidade com alguém com quem estava saindo?"
    },
    {
      "id": 26,
      "cat": "Experiências adultas",
      "text": "Já teve intimidade com alguém com quem não estava saindo?"
    },
    {
      "id": 27,
      "cat": "Experiências adultas",
      "text": "Já viveu uma situação de amigos com benefícios?"
    },
    {
      "id": 28,
      "cat": "Experiências adultas",
      "text": "Já teve uma conversa adulta constrangedora com pai, mãe ou responsável?"
    },
    {
      "id": 29,
      "cat": "Experiências adultas",
      "text": "Já fez um teste de gravidez ou IST, ou acompanhou alguém em um?"
    },
    {
      "id": 30,
      "cat": "Experiências adultas",
      "text": "Já teve uma experiência adulta que prefere não contar para a maioria das pessoas?"
    },
    {
      "id": 31,
      "cat": "Vida social",
      "text": "Já foi a uma festa em casa?"
    },
    {
      "id": 32,
      "cat": "Vida social",
      "text": "Já ficou fora a noite inteira por motivos sociais?"
    },
    {
      "id": 33,
      "cat": "Vida social",
      "text": "Já saiu escondido ou escondida sem permissão?"
    },
    {
      "id": 34,
      "cat": "Vida social",
      "text": "Já foi a um clube ou bar?"
    },
    {
      "id": 35,
      "cat": "Vida social",
      "text": "Já dançou com alguém por quem sentia atração?"
    },
    {
      "id": 36,
      "cat": "Vida social",
      "text": "Já organizou uma festa?"
    },
    {
      "id": 37,
      "cat": "Vida social",
      "text": "Já foi o centro de uma história de festa?"
    },
    {
      "id": 38,
      "cat": "Vida social",
      "text": "Já viajou principalmente para uma festa, show ou festival?"
    },
    {
      "id": 39,
      "cat": "Vida social",
      "text": "Já tomou uma grande decisão de vida por causa dos amigos?"
    },
    {
      "id": 40,
      "cat": "Vida social",
      "text": "Já teve um drama de amizade que ficou público?"
    },
    {
      "id": 41,
      "cat": "Escola e regras",
      "text": "Já matou aula sem um motivo real?"
    },
    {
      "id": 42,
      "cat": "Escola e regras",
      "text": "Já copiou tarefa ou deixou alguém copiar a sua?"
    },
    {
      "id": 43,
      "cat": "Escola e regras",
      "text": "Já colou em uma prova ou exame?"
    },
    {
      "id": 44,
      "cat": "Escola e regras",
      "text": "Já mentiu para escapar da escola ou do trabalho?"
    },
    {
      "id": 45,
      "cat": "Escola e regras",
      "text": "Já virou a noite por um motivo que não fosse estudar?"
    },
    {
      "id": 46,
      "cat": "Escola e regras",
      "text": "Já recebeu punição de um professor, docente ou supervisor?"
    },
    {
      "id": 47,
      "cat": "Escola e regras",
      "text": "Já usou uma desculpa falsa para faltar a uma obrigação?"
    },
    {
      "id": 48,
      "cat": "Escola e regras",
      "text": "Já foi pego ou pega quebrando uma regra?"
    },
    {
      "id": 49,
      "cat": "Escola e regras",
      "text": "Já foi suspenso, advertido formalmente ou recebeu uma ocorrência?"
    },
    {
      "id": 50,
      "cat": "Escola e regras",
      "text": "Já ignorou um prazo importante e aceitou a consequência?"
    },
    {
      "id": 51,
      "cat": "Álcool e substâncias",
      "text": "Já consumiu álcool?"
    },
    {
      "id": 52,
      "cat": "Álcool e substâncias",
      "text": "Já ficou bêbado ou bêbada?"
    },
    {
      "id": 53,
      "cat": "Álcool e substâncias",
      "text": "Já teve ressaca?"
    },
    {
      "id": 54,
      "cat": "Álcool e substâncias",
      "text": "Já participou de um jogo de bebida?"
    },
    {
      "id": 55,
      "cat": "Álcool e substâncias",
      "text": "Já usou documento falso ou emprestado?"
    },
    {
      "id": 56,
      "cat": "Álcool e substâncias",
      "text": "Já experimentou nicotina ou vape?"
    },
    {
      "id": 57,
      "cat": "Álcool e substâncias",
      "text": "Já experimentou maconha onde isso era legal para você?"
    },
    {
      "id": 58,
      "cat": "Álcool e substâncias",
      "text": "Já experimentou ilegalmente alguma substância controlada?"
    },
    {
      "id": 59,
      "cat": "Álcool e substâncias",
      "text": "Já esteve perto de uso ilegal de drogas?"
    },
    {
      "id": 60,
      "cat": "Álcool e substâncias",
      "text": "Já se arrependeu de algo feito enquanto estava intoxicado ou intoxicada?"
    },
    {
      "id": 61,
      "cat": "Riscos e problemas",
      "text": "Já entrou em algum lugar sem permissão?"
    },
    {
      "id": 62,
      "cat": "Riscos e problemas",
      "text": "Já furtou em loja ou pegou algo pequeno?"
    },
    {
      "id": 63,
      "cat": "Riscos e problemas",
      "text": "Já foi questionado ou questionada por segurança ou pela polícia?"
    },
    {
      "id": 64,
      "cat": "Riscos e problemas",
      "text": "Já esteve em uma briga física?"
    },
    {
      "id": 65,
      "cat": "Riscos e problemas",
      "text": "Já danificou uma propriedade de propósito?"
    },
    {
      "id": 66,
      "cat": "Riscos e problemas",
      "text": "Já dirigiu de forma imprudente ou aceitou carona com alguém imprudente?"
    },
    {
      "id": 67,
      "cat": "Riscos e problemas",
      "text": "Já levou multa ou outra penalidade?"
    },
    {
      "id": 68,
      "cat": "Riscos e problemas",
      "text": "Já foi preso ou detido?"
    },
    {
      "id": 69,
      "cat": "Riscos e problemas",
      "text": "Já fez algo arriscado por pressão do grupo?"
    },
    {
      "id": 70,
      "cat": "Riscos e problemas",
      "text": "Já guardou um segredo sério para evitar problemas?"
    },
    {
      "id": 71,
      "cat": "Vida digital",
      "text": "Já enviou uma mensagem arriscada da qual depois se arrependeu?"
    },
    {
      "id": 72,
      "cat": "Vida digital",
      "text": "Já postou algo online e apagou rapidamente?"
    },
    {
      "id": 73,
      "cat": "Vida digital",
      "text": "Já teve uma conversa privada vazada ou compartilhada?"
    },
    {
      "id": 74,
      "cat": "Vida digital",
      "text": "Já usou um aplicativo de namoro?"
    },
    {
      "id": 75,
      "cat": "Vida digital",
      "text": "Já encontrou pessoalmente alguém que conheceu primeiro online?"
    },
    {
      "id": 76,
      "cat": "Vida digital",
      "text": "Já deu ghosting em alguém ou já levou ghosting?"
    },
    {
      "id": 77,
      "cat": "Vida digital",
      "text": "Já stalkeou um ex ou um crush online?"
    },
    {
      "id": 78,
      "cat": "Vida digital",
      "text": "Já teve uma conta secreta em rede social?"
    },
    {
      "id": 79,
      "cat": "Vida digital",
      "text": "Já foi bloqueado ou bloqueou alguém depois de um drama?"
    },
    {
      "id": 80,
      "cat": "Vida digital",
      "text": "Já viu uma captura de tela virar parte de uma discussão?"
    },
    {
      "id": 81,
      "cat": "Escolhas pessoais",
      "text": "Já mentiu sobre a sua idade?"
    },
    {
      "id": 82,
      "cat": "Escolhas pessoais",
      "text": "Já mentiu para a sua família sobre onde estava?"
    },
    {
      "id": 83,
      "cat": "Escolhas pessoais",
      "text": "Já gastou dinheiro em segredo?"
    },
    {
      "id": 84,
      "cat": "Escolhas pessoais",
      "text": "Já apostou ou fez uma aposta arriscada?"
    },
    {
      "id": 85,
      "cat": "Escolhas pessoais",
      "text": "Já colocou piercing ou fez tatuagem sem a sua família saber?"
    },
    {
      "id": 86,
      "cat": "Escolhas pessoais",
      "text": "Já mudou a sua aparência principalmente para impressionar alguém?"
    },
    {
      "id": 87,
      "cat": "Escolhas pessoais",
      "text": "Já ficou em uma situação que sabia não ser saudável?"
    },
    {
      "id": 88,
      "cat": "Escolhas pessoais",
      "text": "Já quebrou uma promessa e escondeu isso?"
    },
    {
      "id": 89,
      "cat": "Escolhas pessoais",
      "text": "Já teve uma fase secreta importante ou uma grande mudança de estilo de vida?"
    },
    {
      "id": 90,
      "cat": "Escolhas pessoais",
      "text": "Já fez algo só pela história para contar?"
    },
    {
      "id": 91,
      "cat": "Limites e reflexão",
      "text": "Já estabeleceu um limite claro com alguém?"
    },
    {
      "id": 92,
      "cat": "Limites e reflexão",
      "text": "Já pediu desculpas por machucar alguém?"
    },
    {
      "id": 93,
      "cat": "Limites e reflexão",
      "text": "Já terminou uma amizade ou relacionamento pelo seu próprio bem-estar?"
    },
    {
      "id": 94,
      "cat": "Limites e reflexão",
      "text": "Já pediu ajuda depois de cometer um erro?"
    },
    {
      "id": 95,
      "cat": "Limites e reflexão",
      "text": "Já aprendeu com uma consequência da maneira mais difícil?"
    },
    {
      "id": 96,
      "cat": "Limites e reflexão",
      "text": "Já teve uma conversa séria sobre consentimento ou respeito?"
    },
    {
      "id": 97,
      "cat": "Limites e reflexão",
      "text": "Já mudou o seu comportamento ao perceber que ele fazia mal?"
    },
    {
      "id": 98,
      "cat": "Limites e reflexão",
      "text": "Já perdoou alguém após uma experiência difícil?"
    },
    {
      "id": 99,
      "cat": "Limites e reflexão",
      "text": "Já foi honesto ou honesta sobre algo constrangedor?"
    },
    {
      "id": 100,
      "cat": "Limites e reflexão",
      "text": "Já fez um teste como este principalmente para refletir sobre a sua vida?"
    }
  ],
  "id": [
    {
      "id": 1,
      "cat": "Hubungan",
      "text": "Pernah berpegangan tangan secara romantis?"
    },
    {
      "id": 2,
      "cat": "Hubungan",
      "text": "Pernah pergi berkencan?"
    },
    {
      "id": 3,
      "cat": "Hubungan",
      "text": "Pernah berada dalam hubungan serius?"
    },
    {
      "id": 4,
      "cat": "Hubungan",
      "text": "Pernah menyukai seseorang selama berbulan-bulan?"
    },
    {
      "id": 5,
      "cat": "Hubungan",
      "text": "Pernah memberi tahu seseorang bahwa Anda mencintainya secara romantis?"
    },
    {
      "id": 6,
      "cat": "Hubungan",
      "text": "Pernah ditolak oleh seseorang yang Anda sukai?"
    },
    {
      "id": 7,
      "cat": "Hubungan",
      "text": "Pernah menolak seseorang yang menyukai Anda?"
    },
    {
      "id": 8,
      "cat": "Hubungan",
      "text": "Pernah mengalami putus hubungan?"
    },
    {
      "id": 9,
      "cat": "Hubungan",
      "text": "Pernah kencan buta atau kencan lewat aplikasi?"
    },
    {
      "id": 10,
      "cat": "Hubungan",
      "text": "Pernah menjalani hubungan jarak jauh?"
    },
    {
      "id": 11,
      "cat": "Kasih sayang fisik",
      "text": "Pernah mencium seseorang secara romantis?"
    },
    {
      "id": 12,
      "cat": "Kasih sayang fisik",
      "text": "Pernah berciuman mesra dengan seseorang?"
    },
    {
      "id": 13,
      "cat": "Kasih sayang fisik",
      "text": "Pernah berpelukan dengan maksud romantis?"
    },
    {
      "id": 14,
      "cat": "Kasih sayang fisik",
      "text": "Pernah tidur di ranjang yang sama dengan seseorang yang Anda sukai?"
    },
    {
      "id": 15,
      "cat": "Kasih sayang fisik",
      "text": "Pernah punya momen romantis di tempat umum?"
    },
    {
      "id": 16,
      "cat": "Kasih sayang fisik",
      "text": "Pernah dicium seseorang tanpa diduga?"
    },
    {
      "id": 17,
      "cat": "Kasih sayang fisik",
      "text": "Pernah mencium seseorang yang baru saja Anda kenal?"
    },
    {
      "id": 18,
      "cat": "Kasih sayang fisik",
      "text": "Pernah punya interaksi romantis secara diam-diam?"
    },
    {
      "id": 19,
      "cat": "Kasih sayang fisik",
      "text": "Pernah punya kontak romantis di pesta?"
    },
    {
      "id": 20,
      "cat": "Kasih sayang fisik",
      "text": "Pernah punya pengalaman romantis yang kemudian Anda sesali?"
    },
    {
      "id": 21,
      "cat": "Pengalaman dewasa",
      "text": "Pernah mengalami keintiman dewasa yang disetujui bersama?"
    },
    {
      "id": 22,
      "cat": "Pengalaman dewasa",
      "text": "Pernah membahas batasan sebelum keintiman?"
    },
    {
      "id": 23,
      "cat": "Pengalaman dewasa",
      "text": "Pernah membeli atau membawa perlindungan?"
    },
    {
      "id": 24,
      "cat": "Pengalaman dewasa",
      "text": "Pernah melakukan percakapan serius tentang kesehatan seksual?"
    },
    {
      "id": 25,
      "cat": "Pengalaman dewasa",
      "text": "Pernah intim dengan seseorang yang sedang Anda kencani?"
    },
    {
      "id": 26,
      "cat": "Pengalaman dewasa",
      "text": "Pernah intim dengan seseorang yang tidak sedang Anda kencani?"
    },
    {
      "id": 27,
      "cat": "Pengalaman dewasa",
      "text": "Pernah menjalani hubungan teman tapi mesra?"
    },
    {
      "id": 28,
      "cat": "Pengalaman dewasa",
      "text": "Pernah mengalami percakapan dewasa yang canggung dengan orang tua atau wali?"
    },
    {
      "id": 29,
      "cat": "Pengalaman dewasa",
      "text": "Pernah menjalani tes kehamilan atau IMS, atau menemani seseorang melakukannya?"
    },
    {
      "id": 30,
      "cat": "Pengalaman dewasa",
      "text": "Pernah punya pengalaman dewasa yang tidak ingin Anda ceritakan kepada kebanyakan orang?"
    },
    {
      "id": 31,
      "cat": "Kehidupan sosial",
      "text": "Pernah datang ke pesta rumah?"
    },
    {
      "id": 32,
      "cat": "Kehidupan sosial",
      "text": "Pernah berada di luar semalaman demi urusan sosial?"
    },
    {
      "id": 33,
      "cat": "Kehidupan sosial",
      "text": "Pernah keluar diam-diam tanpa izin?"
    },
    {
      "id": 34,
      "cat": "Kehidupan sosial",
      "text": "Pernah pergi ke klub atau bar?"
    },
    {
      "id": 35,
      "cat": "Kehidupan sosial",
      "text": "Pernah menari dengan seseorang yang membuat Anda tertarik?"
    },
    {
      "id": 36,
      "cat": "Kehidupan sosial",
      "text": "Pernah menjadi tuan rumah pesta?"
    },
    {
      "id": 37,
      "cat": "Kehidupan sosial",
      "text": "Pernah menjadi pusat cerita pesta?"
    },
    {
      "id": 38,
      "cat": "Kehidupan sosial",
      "text": "Pernah bepergian terutama untuk pesta, konser, atau festival?"
    },
    {
      "id": 39,
      "cat": "Kehidupan sosial",
      "text": "Pernah membuat keputusan besar karena teman?"
    },
    {
      "id": 40,
      "cat": "Kehidupan sosial",
      "text": "Pernah mengalami drama pertemanan yang jadi konsumsi publik?"
    },
    {
      "id": 41,
      "cat": "Sekolah dan aturan",
      "text": "Pernah bolos kelas tanpa alasan yang jelas?"
    },
    {
      "id": 42,
      "cat": "Sekolah dan aturan",
      "text": "Pernah menyalin PR atau membiarkan seseorang menyalin punya Anda?"
    },
    {
      "id": 43,
      "cat": "Sekolah dan aturan",
      "text": "Pernah berbuat curang saat kuis atau ujian?"
    },
    {
      "id": 44,
      "cat": "Sekolah dan aturan",
      "text": "Pernah berbohong agar bisa lolos dari sekolah atau kerja?"
    },
    {
      "id": 45,
      "cat": "Sekolah dan aturan",
      "text": "Pernah begadang semalaman karena alasan selain belajar?"
    },
    {
      "id": 46,
      "cat": "Sekolah dan aturan",
      "text": "Pernah mendapat hukuman dari guru, dosen, atau atasan?"
    },
    {
      "id": 47,
      "cat": "Sekolah dan aturan",
      "text": "Pernah memakai alasan palsu untuk absen dari kewajiban?"
    },
    {
      "id": 48,
      "cat": "Sekolah dan aturan",
      "text": "Pernah tertangkap melanggar aturan?"
    },
    {
      "id": 49,
      "cat": "Sekolah dan aturan",
      "text": "Pernah diskors, ditegur resmi, atau diberi peringatan formal?"
    },
    {
      "id": 50,
      "cat": "Sekolah dan aturan",
      "text": "Pernah mengabaikan tenggat penting dan menerima akibatnya?"
    },
    {
      "id": 51,
      "cat": "Alkohol dan zat",
      "text": "Pernah mengonsumsi alkohol?"
    },
    {
      "id": 52,
      "cat": "Alkohol dan zat",
      "text": "Pernah mabuk?"
    },
    {
      "id": 53,
      "cat": "Alkohol dan zat",
      "text": "Pernah hangover?"
    },
    {
      "id": 54,
      "cat": "Alkohol dan zat",
      "text": "Pernah ikut permainan minum alkohol?"
    },
    {
      "id": 55,
      "cat": "Alkohol dan zat",
      "text": "Pernah memakai kartu identitas palsu atau pinjaman?"
    },
    {
      "id": 56,
      "cat": "Alkohol dan zat",
      "text": "Pernah mencoba nikotin atau vape?"
    },
    {
      "id": 57,
      "cat": "Alkohol dan zat",
      "text": "Pernah mencoba ganja di tempat yang legal untuk Anda?"
    },
    {
      "id": 58,
      "cat": "Alkohol dan zat",
      "text": "Pernah mencoba zat terlarang secara ilegal?"
    },
    {
      "id": 59,
      "cat": "Alkohol dan zat",
      "text": "Pernah berada di sekitar penggunaan narkoba ilegal?"
    },
    {
      "id": 60,
      "cat": "Alkohol dan zat",
      "text": "Pernah menyesali sesuatu yang dilakukan saat mabuk atau teler?"
    },
    {
      "id": 61,
      "cat": "Risiko dan masalah",
      "text": "Pernah masuk ke suatu tempat tanpa izin?"
    },
    {
      "id": 62,
      "cat": "Risiko dan masalah",
      "text": "Pernah mengutil atau mencuri sesuatu yang kecil?"
    },
    {
      "id": 63,
      "cat": "Risiko dan masalah",
      "text": "Pernah diperiksa atau ditanyai petugas keamanan atau polisi?"
    },
    {
      "id": 64,
      "cat": "Risiko dan masalah",
      "text": "Pernah terlibat perkelahian fisik?"
    },
    {
      "id": 65,
      "cat": "Risiko dan masalah",
      "text": "Pernah merusak properti dengan sengaja?"
    },
    {
      "id": 66,
      "cat": "Risiko dan masalah",
      "text": "Pernah berkendara sembrono atau menerima tumpangan dari pengemudi sembrono?"
    },
    {
      "id": 67,
      "cat": "Risiko dan masalah",
      "text": "Pernah ditilang atau didenda?"
    },
    {
      "id": 68,
      "cat": "Risiko dan masalah",
      "text": "Pernah ditangkap atau ditahan?"
    },
    {
      "id": 69,
      "cat": "Risiko dan masalah",
      "text": "Pernah melakukan sesuatu yang berisiko karena tekanan teman sebaya?"
    },
    {
      "id": 70,
      "cat": "Risiko dan masalah",
      "text": "Pernah menyimpan rahasia serius demi menghindari masalah?"
    },
    {
      "id": 71,
      "cat": "Kehidupan digital",
      "text": "Pernah mengirim pesan berisiko yang kemudian Anda sesali?"
    },
    {
      "id": 72,
      "cat": "Kehidupan digital",
      "text": "Pernah mengunggah sesuatu secara online lalu cepat-cepat menghapusnya?"
    },
    {
      "id": 73,
      "cat": "Kehidupan digital",
      "text": "Pernah mengalami percakapan pribadi dibocorkan atau dibagikan?"
    },
    {
      "id": 74,
      "cat": "Kehidupan digital",
      "text": "Pernah memakai aplikasi kencan?"
    },
    {
      "id": 75,
      "cat": "Kehidupan digital",
      "text": "Pernah bertemu langsung dengan seseorang setelah pertama kali berkenalan online?"
    },
    {
      "id": 76,
      "cat": "Kehidupan digital",
      "text": "Pernah meng-ghosting seseorang atau pernah di-ghosting?"
    },
    {
      "id": 77,
      "cat": "Kehidupan digital",
      "text": "Pernah menguntit mantan atau gebetan secara online?"
    },
    {
      "id": 78,
      "cat": "Kehidupan digital",
      "text": "Pernah punya akun media sosial rahasia?"
    },
    {
      "id": 79,
      "cat": "Kehidupan digital",
      "text": "Pernah diblokir atau memblokir seseorang setelah drama?"
    },
    {
      "id": 80,
      "cat": "Kehidupan digital",
      "text": "Pernah menjadikan tangkapan layar bagian dari pertengkaran?"
    },
    {
      "id": 81,
      "cat": "Pilihan pribadi",
      "text": "Pernah berbohong tentang umur Anda?"
    },
    {
      "id": 82,
      "cat": "Pilihan pribadi",
      "text": "Pernah berbohong kepada keluarga tentang keberadaan Anda?"
    },
    {
      "id": 83,
      "cat": "Pilihan pribadi",
      "text": "Pernah menghabiskan uang secara diam-diam?"
    },
    {
      "id": 84,
      "cat": "Pilihan pribadi",
      "text": "Pernah berjudi atau membuat taruhan berisiko?"
    },
    {
      "id": 85,
      "cat": "Pilihan pribadi",
      "text": "Pernah punya piercing atau tato yang tidak diketahui keluarga?"
    },
    {
      "id": 86,
      "cat": "Pilihan pribadi",
      "text": "Pernah mengubah penampilan terutama untuk mengesankan seseorang?"
    },
    {
      "id": 87,
      "cat": "Pilihan pribadi",
      "text": "Pernah bertahan dalam situasi yang Anda tahu tidak sehat?"
    },
    {
      "id": 88,
      "cat": "Pilihan pribadi",
      "text": "Pernah mengingkari janji lalu menyembunyikannya?"
    },
    {
      "id": 89,
      "cat": "Pilihan pribadi",
      "text": "Pernah punya fase rahasia besar atau perubahan gaya hidup yang besar?"
    },
    {
      "id": 90,
      "cat": "Pilihan pribadi",
      "text": "Pernah melakukan sesuatu hanya demi ceritanya?"
    },
    {
      "id": 91,
      "cat": "Batasan dan refleksi",
      "text": "Pernah menetapkan batas yang jelas kepada seseorang?"
    },
    {
      "id": 92,
      "cat": "Batasan dan refleksi",
      "text": "Pernah meminta maaf karena menyakiti seseorang?"
    },
    {
      "id": 93,
      "cat": "Batasan dan refleksi",
      "text": "Pernah mengakhiri pertemanan atau hubungan demi kesejahteraan diri sendiri?"
    },
    {
      "id": 94,
      "cat": "Batasan dan refleksi",
      "text": "Pernah meminta bantuan setelah berbuat salah?"
    },
    {
      "id": 95,
      "cat": "Batasan dan refleksi",
      "text": "Pernah belajar dari konsekuensi dengan cara yang berat?"
    },
    {
      "id": 96,
      "cat": "Batasan dan refleksi",
      "text": "Pernah melakukan pembicaraan serius tentang persetujuan atau rasa hormat?"
    },
    {
      "id": 97,
      "cat": "Batasan dan refleksi",
      "text": "Pernah mengubah perilaku setelah sadar bahwa itu merugikan?"
    },
    {
      "id": 98,
      "cat": "Batasan dan refleksi",
      "text": "Pernah memaafkan seseorang setelah pengalaman yang sulit?"
    },
    {
      "id": 99,
      "cat": "Batasan dan refleksi",
      "text": "Pernah jujur tentang sesuatu yang memalukan?"
    },
    {
      "id": 100,
      "cat": "Batasan dan refleksi",
      "text": "Pernah mengikuti kuis seperti ini terutama untuk merenungkan hidup Anda?"
    }
  ],
  "de": [
    {
      "id": 1,
      "cat": "Beziehungen",
      "text": "Hast du schon einmal romantisch Händchen gehalten?"
    },
    {
      "id": 2,
      "cat": "Beziehungen",
      "text": "Warst du schon einmal auf einem Date?"
    },
    {
      "id": 3,
      "cat": "Beziehungen",
      "text": "Warst du schon einmal in einer festen Beziehung?"
    },
    {
      "id": 4,
      "cat": "Beziehungen",
      "text": "Hattest du schon einmal einen Crush, der monatelang anhielt?"
    },
    {
      "id": 5,
      "cat": "Beziehungen",
      "text": "Hast du jemandem gesagt, dass du ihn oder sie romantisch liebst?"
    },
    {
      "id": 6,
      "cat": "Beziehungen",
      "text": "Wurdest du schon einmal von jemandem abgewiesen, den du mochtest?"
    },
    {
      "id": 7,
      "cat": "Beziehungen",
      "text": "Hast du schon einmal jemanden abgewiesen, der dich mochte?"
    },
    {
      "id": 8,
      "cat": "Beziehungen",
      "text": "Hast du schon einmal eine Trennung erlebt?"
    },
    {
      "id": 9,
      "cat": "Beziehungen",
      "text": "Warst du schon einmal auf einem Blind Date oder App-Date?"
    },
    {
      "id": 10,
      "cat": "Beziehungen",
      "text": "Hattest du schon einmal eine Fernbeziehung?"
    },
    {
      "id": 11,
      "cat": "Körperliche Nähe",
      "text": "Hast du schon einmal jemanden romantisch geküsst?"
    },
    {
      "id": 12,
      "cat": "Körperliche Nähe",
      "text": "Hast du schon einmal mit jemandem heftig herumgemacht?"
    },
    {
      "id": 13,
      "cat": "Körperliche Nähe",
      "text": "Hast du schon einmal mit romantischer Absicht gekuschelt?"
    },
    {
      "id": 14,
      "cat": "Körperliche Nähe",
      "text": "Hast du schon einmal mit jemandem, den du mochtest, in einem Bett geschlafen?"
    },
    {
      "id": 15,
      "cat": "Körperliche Nähe",
      "text": "Hattest du schon einmal einen romantischen Moment in der Öffentlichkeit?"
    },
    {
      "id": 16,
      "cat": "Körperliche Nähe",
      "text": "Wurdest du schon einmal unerwartet von jemandem geküsst?"
    },
    {
      "id": 17,
      "cat": "Körperliche Nähe",
      "text": "Hast du schon einmal jemanden geküsst, den du gerade erst kennengelernt hattest?"
    },
    {
      "id": 18,
      "cat": "Körperliche Nähe",
      "text": "Hattest du schon einmal eine heimliche romantische Begegnung?"
    },
    {
      "id": 19,
      "cat": "Körperliche Nähe",
      "text": "Hattest du schon einmal romantischen Kontakt auf einer Party?"
    },
    {
      "id": 20,
      "cat": "Körperliche Nähe",
      "text": "Hattest du schon einmal ein romantisches Erlebnis, das du später bereut hast?"
    },
    {
      "id": 21,
      "cat": "Erwachsene Erfahrungen",
      "text": "Hattest du schon einmal einvernehmliche erwachsene Intimität?"
    },
    {
      "id": 22,
      "cat": "Erwachsene Erfahrungen",
      "text": "Hast du vor Intimität schon einmal über Grenzen gesprochen?"
    },
    {
      "id": 23,
      "cat": "Erwachsene Erfahrungen",
      "text": "Hast du schon einmal Schutz gekauft oder mitgenommen?"
    },
    {
      "id": 24,
      "cat": "Erwachsene Erfahrungen",
      "text": "Hast du schon einmal ein ernstes Gespräch über sexuelle Gesundheit geführt?"
    },
    {
      "id": 25,
      "cat": "Erwachsene Erfahrungen",
      "text": "Hattest du schon einmal Intimität mit jemandem, mit dem du zusammen warst?"
    },
    {
      "id": 26,
      "cat": "Erwachsene Erfahrungen",
      "text": "Hattest du schon einmal Intimität mit jemandem, mit dem du nicht zusammen warst?"
    },
    {
      "id": 27,
      "cat": "Erwachsene Erfahrungen",
      "text": "Hattest du schon einmal eine Freundschaft-plus-Situation?"
    },
    {
      "id": 28,
      "cat": "Erwachsene Erfahrungen",
      "text": "Hattest du schon einmal ein unangenehmes Erwachsenengespräch mit einem Elternteil oder einer Betreuungsperson?"
    },
    {
      "id": 29,
      "cat": "Erwachsene Erfahrungen",
      "text": "Hast du schon einmal einen Schwangerschafts- oder STI-Test gemacht oder jemanden dabei begleitet?"
    },
    {
      "id": 30,
      "cat": "Erwachsene Erfahrungen",
      "text": "Hattest du schon einmal ein erwachsenes Erlebnis, von dem du den meisten lieber nichts erzählen würdest?"
    },
    {
      "id": 31,
      "cat": "Soziales Leben",
      "text": "Warst du schon einmal auf einer Hausparty?"
    },
    {
      "id": 32,
      "cat": "Soziales Leben",
      "text": "Bist du schon einmal aus sozialen Gründen die ganze Nacht weg geblieben?"
    },
    {
      "id": 33,
      "cat": "Soziales Leben",
      "text": "Bist du schon einmal ohne Erlaubnis heimlich rausgegangen?"
    },
    {
      "id": 34,
      "cat": "Soziales Leben",
      "text": "Warst du schon einmal in einem Club oder einer Bar?"
    },
    {
      "id": 35,
      "cat": "Soziales Leben",
      "text": "Hast du schon einmal mit jemandem getanzt, zu dem du dich hingezogen gefühlt hast?"
    },
    {
      "id": 36,
      "cat": "Soziales Leben",
      "text": "Hast du schon einmal eine Party veranstaltet?"
    },
    {
      "id": 37,
      "cat": "Soziales Leben",
      "text": "Warst du schon einmal Mittelpunkt einer Partygeschichte?"
    },
    {
      "id": 38,
      "cat": "Soziales Leben",
      "text": "Bist du schon einmal hauptsächlich wegen einer Party, eines Konzerts oder Festivals gereist?"
    },
    {
      "id": 39,
      "cat": "Soziales Leben",
      "text": "Hast du schon einmal wegen Freunden eine große Lebensentscheidung getroffen?"
    },
    {
      "id": 40,
      "cat": "Soziales Leben",
      "text": "Hattest du schon einmal einen Freundschaftsdrama, das öffentlich wurde?"
    },
    {
      "id": 41,
      "cat": "Schule und Regeln",
      "text": "Hast du schon einmal ohne echten Grund den Unterricht geschwänzt?"
    },
    {
      "id": 42,
      "cat": "Schule und Regeln",
      "text": "Hast du schon einmal Hausaufgaben abgeschrieben oder jemanden deine abschreiben lassen?"
    },
    {
      "id": 43,
      "cat": "Schule und Regeln",
      "text": "Hast du schon einmal bei einem Test oder einer Prüfung geschummelt?"
    },
    {
      "id": 44,
      "cat": "Schule und Regeln",
      "text": "Hast du schon einmal gelogen, um aus Schule oder Arbeit herauszukommen?"
    },
    {
      "id": 45,
      "cat": "Schule und Regeln",
      "text": "Hast du schon einmal aus anderen Gründen als Lernen die ganze Nacht durchgemacht?"
    },
    {
      "id": 46,
      "cat": "Schule und Regeln",
      "text": "Wurdest du schon einmal von einer Lehrkraft, einem Dozenten oder einer vorgesetzten Person bestraft?"
    },
    {
      "id": 47,
      "cat": "Schule und Regeln",
      "text": "Hast du schon einmal eine falsche Ausrede benutzt, um einer Pflicht fernzubleiben?"
    },
    {
      "id": 48,
      "cat": "Schule und Regeln",
      "text": "Wurdest du schon einmal beim Regelbruch erwischt?"
    },
    {
      "id": 49,
      "cat": "Schule und Regeln",
      "text": "Wurdest du schon einmal suspendiert, offiziell verwarnt oder schriftlich gerügt?"
    },
    {
      "id": 50,
      "cat": "Schule und Regeln",
      "text": "Hast du schon einmal eine ernste Frist ignoriert und die Konsequenz akzeptiert?"
    },
    {
      "id": 51,
      "cat": "Alkohol und Substanzen",
      "text": "Hast du schon einmal Alkohol getrunken?"
    },
    {
      "id": 52,
      "cat": "Alkohol und Substanzen",
      "text": "Warst du schon einmal betrunken?"
    },
    {
      "id": 53,
      "cat": "Alkohol und Substanzen",
      "text": "Hattest du schon einmal einen Kater?"
    },
    {
      "id": 54,
      "cat": "Alkohol und Substanzen",
      "text": "Hast du schon einmal ein Trinkspiel gespielt?"
    },
    {
      "id": 55,
      "cat": "Alkohol und Substanzen",
      "text": "Hast du schon einmal einen gefälschten oder geliehenen Ausweis benutzt?"
    },
    {
      "id": 56,
      "cat": "Alkohol und Substanzen",
      "text": "Hast du schon einmal Nikotin oder Vaping ausprobiert?"
    },
    {
      "id": 57,
      "cat": "Alkohol und Substanzen",
      "text": "Hast du schon einmal Marihuana ausprobiert, wo es für dich legal war?"
    },
    {
      "id": 58,
      "cat": "Alkohol und Substanzen",
      "text": "Hast du schon einmal illegal eine kontrollierte Substanz ausprobiert?"
    },
    {
      "id": 59,
      "cat": "Alkohol und Substanzen",
      "text": "Warst du schon einmal in der Nähe von illegalem Drogenkonsum?"
    },
    {
      "id": 60,
      "cat": "Alkohol und Substanzen",
      "text": "Hast du schon einmal etwas bereut, das du im Rausch getan hast?"
    },
    {
      "id": 61,
      "cat": "Risiken und Ärger",
      "text": "Bist du schon einmal irgendwo unerlaubt eingedrungen?"
    },
    {
      "id": 62,
      "cat": "Risiken und Ärger",
      "text": "Hast du schon einmal etwas Kleines gestohlen oder im Laden mitgehen lassen?"
    },
    {
      "id": 63,
      "cat": "Risiken und Ärger",
      "text": "Wurdest du schon einmal von Sicherheitsdienst oder Polizei befragt?"
    },
    {
      "id": 64,
      "cat": "Risiken und Ärger",
      "text": "Warst du schon einmal in eine körperliche Auseinandersetzung verwickelt?"
    },
    {
      "id": 65,
      "cat": "Risiken und Ärger",
      "text": "Hast du schon einmal absichtlich Eigentum beschädigt?"
    },
    {
      "id": 66,
      "cat": "Risiken und Ärger",
      "text": "Bist du schon einmal rücksichtslos gefahren oder bei jemandem mitgefahren, der rücksichtslos fuhr?"
    },
    {
      "id": 67,
      "cat": "Risiken und Ärger",
      "text": "Hast du schon einmal ein Bußgeld oder eine Strafe bekommen?"
    },
    {
      "id": 68,
      "cat": "Risiken und Ärger",
      "text": "Wurdest du schon einmal festgenommen oder in Gewahrsam genommen?"
    },
    {
      "id": 69,
      "cat": "Risiken und Ärger",
      "text": "Hast du schon einmal wegen Gruppendruck etwas Riskantes getan?"
    },
    {
      "id": 70,
      "cat": "Risiken und Ärger",
      "text": "Hast du schon einmal ein ernstes Geheimnis behalten, um Ärger zu vermeiden?"
    },
    {
      "id": 71,
      "cat": "Digitales Leben",
      "text": "Hast du schon einmal eine riskante Nachricht verschickt, die du später bereut hast?"
    },
    {
      "id": 72,
      "cat": "Digitales Leben",
      "text": "Hast du schon einmal etwas online gepostet und schnell wieder gelöscht?"
    },
    {
      "id": 73,
      "cat": "Digitales Leben",
      "text": "Wurde schon einmal ein privates Gespräch von dir geleakt oder geteilt?"
    },
    {
      "id": 74,
      "cat": "Digitales Leben",
      "text": "Hast du schon einmal eine Dating-App benutzt?"
    },
    {
      "id": 75,
      "cat": "Digitales Leben",
      "text": "Hast du schon einmal jemanden persönlich getroffen, den du zuerst online kennengelernt hast?"
    },
    {
      "id": 76,
      "cat": "Digitales Leben",
      "text": "Hast du schon einmal jemanden geghostet oder wurdest geghostet?"
    },
    {
      "id": 77,
      "cat": "Digitales Leben",
      "text": "Hast du schon einmal online einem Ex oder Crush hinterhergestalkt?"
    },
    {
      "id": 78,
      "cat": "Digitales Leben",
      "text": "Hattest du schon einmal einen geheimen Social-Media-Account?"
    },
    {
      "id": 79,
      "cat": "Digitales Leben",
      "text": "Wurdest du schon einmal blockiert oder hast jemanden nach einem Drama blockiert?"
    },
    {
      "id": 80,
      "cat": "Digitales Leben",
      "text": "War schon einmal ein Screenshot Teil eines Streits?"
    },
    {
      "id": 81,
      "cat": "Persönliche Entscheidungen",
      "text": "Hast du schon einmal über dein Alter gelogen?"
    },
    {
      "id": 82,
      "cat": "Persönliche Entscheidungen",
      "text": "Hast du schon einmal deiner Familie vorgelogen, wo du warst?"
    },
    {
      "id": 83,
      "cat": "Persönliche Entscheidungen",
      "text": "Hast du schon einmal heimlich Geld ausgegeben?"
    },
    {
      "id": 84,
      "cat": "Persönliche Entscheidungen",
      "text": "Hast du schon einmal gespielt oder eine riskante Wette abgeschlossen?"
    },
    {
      "id": 85,
      "cat": "Persönliche Entscheidungen",
      "text": "Hattest du schon einmal ein Piercing oder Tattoo, von dem deine Familie nichts wusste?"
    },
    {
      "id": 86,
      "cat": "Persönliche Entscheidungen",
      "text": "Hast du schon einmal dein Aussehen hauptsächlich verändert, um jemanden zu beeindrucken?"
    },
    {
      "id": 87,
      "cat": "Persönliche Entscheidungen",
      "text": "Bist du schon einmal in einer Situation geblieben, von der du wusstest, dass sie ungesund war?"
    },
    {
      "id": 88,
      "cat": "Persönliche Entscheidungen",
      "text": "Hast du schon einmal ein Versprechen gebrochen und es verheimlicht?"
    },
    {
      "id": 89,
      "cat": "Persönliche Entscheidungen",
      "text": "Hattest du schon einmal eine größere geheime Phase oder eine geheime Lebensstiländerung?"
    },
    {
      "id": 90,
      "cat": "Persönliche Entscheidungen",
      "text": "Hast du schon einmal etwas nur für die Geschichte getan?"
    },
    {
      "id": 91,
      "cat": "Grenzen und Reflexion",
      "text": "Hast du schon einmal jemandem eine klare Grenze gesetzt?"
    },
    {
      "id": 92,
      "cat": "Grenzen und Reflexion",
      "text": "Hast du dich schon einmal entschuldigt, weil du jemanden verletzt hast?"
    },
    {
      "id": 93,
      "cat": "Grenzen und Reflexion",
      "text": "Hast du schon einmal eine Freundschaft oder Beziehung zu deinem eigenen Wohl beendet?"
    },
    {
      "id": 94,
      "cat": "Grenzen und Reflexion",
      "text": "Hast du schon einmal nach einem Fehler um Hilfe gebeten?"
    },
    {
      "id": 95,
      "cat": "Grenzen und Reflexion",
      "text": "Hast du schon einmal auf die harte Tour aus einer Konsequenz gelernt?"
    },
    {
      "id": 96,
      "cat": "Grenzen und Reflexion",
      "text": "Hattest du schon einmal ein ernstes Gespräch über Zustimmung oder Respekt?"
    },
    {
      "id": 97,
      "cat": "Grenzen und Reflexion",
      "text": "Hast du schon einmal dein Verhalten geändert, nachdem dir klar wurde, dass es schädlich war?"
    },
    {
      "id": 98,
      "cat": "Grenzen und Reflexion",
      "text": "Hast du schon einmal jemandem nach einer schwierigen Erfahrung verziehen?"
    },
    {
      "id": 99,
      "cat": "Grenzen und Reflexion",
      "text": "Warst du schon einmal ehrlich über etwas Peinliches?"
    },
    {
      "id": 100,
      "cat": "Grenzen und Reflexion",
      "text": "Hast du schon einmal ein Quiz wie dieses hauptsächlich gemacht, um über dein Leben nachzudenken?"
    }
  ],
  "fr": [
    {
      "id": 1,
      "cat": "Relations",
      "text": "As-tu déjà tenu la main de quelqu'un de façon romantique ?"
    },
    {
      "id": 2,
      "cat": "Relations",
      "text": "As-tu déjà eu un rendez-vous ?"
    },
    {
      "id": 3,
      "cat": "Relations",
      "text": "As-tu déjà été dans une relation sérieuse ?"
    },
    {
      "id": 4,
      "cat": "Relations",
      "text": "As-tu déjà eu un crush qui a duré des mois ?"
    },
    {
      "id": 5,
      "cat": "Relations",
      "text": "As-tu déjà dit à quelqu'un que tu l'aimais de façon romantique ?"
    },
    {
      "id": 6,
      "cat": "Relations",
      "text": "As-tu déjà été rejeté ou rejetée par quelqu'un qui te plaisait ?"
    },
    {
      "id": 7,
      "cat": "Relations",
      "text": "As-tu déjà rejeté quelqu'un à qui tu plaisais ?"
    },
    {
      "id": 8,
      "cat": "Relations",
      "text": "As-tu déjà vécu une rupture ?"
    },
    {
      "id": 9,
      "cat": "Relations",
      "text": "As-tu déjà eu un rendez-vous arrangé ou via une appli ?"
    },
    {
      "id": 10,
      "cat": "Relations",
      "text": "As-tu déjà eu une relation à distance ?"
    },
    {
      "id": 11,
      "cat": "Affection physique",
      "text": "As-tu déjà embrassé quelqu'un de façon romantique ?"
    },
    {
      "id": 12,
      "cat": "Affection physique",
      "text": "As-tu déjà roulé une pelle à quelqu'un ?"
    },
    {
      "id": 13,
      "cat": "Affection physique",
      "text": "As-tu déjà fait un câlin avec une intention romantique ?"
    },
    {
      "id": 14,
      "cat": "Affection physique",
      "text": "As-tu déjà dormi dans le même lit que quelqu'un qui te plaisait ?"
    },
    {
      "id": 15,
      "cat": "Affection physique",
      "text": "As-tu déjà vécu un moment romantique en public ?"
    },
    {
      "id": 16,
      "cat": "Affection physique",
      "text": "As-tu déjà été embrassé ou embrassée par surprise ?"
    },
    {
      "id": 17,
      "cat": "Affection physique",
      "text": "As-tu déjà embrassé quelqu'un que tu venais de rencontrer ?"
    },
    {
      "id": 18,
      "cat": "Affection physique",
      "text": "As-tu déjà eu une interaction romantique secrète ?"
    },
    {
      "id": 19,
      "cat": "Affection physique",
      "text": "As-tu déjà eu un contact romantique pendant une fête ?"
    },
    {
      "id": 20,
      "cat": "Affection physique",
      "text": "As-tu déjà eu une expérience romantique que tu as ensuite regrettée ?"
    },
    {
      "id": 21,
      "cat": "Expériences adultes",
      "text": "As-tu déjà vécu une intimité adulte consentie ?"
    },
    {
      "id": 22,
      "cat": "Expériences adultes",
      "text": "As-tu déjà parlé des limites avant une intimité ?"
    },
    {
      "id": 23,
      "cat": "Expériences adultes",
      "text": "As-tu déjà acheté ou porté une protection ?"
    },
    {
      "id": 24,
      "cat": "Expériences adultes",
      "text": "As-tu déjà eu une conversation sérieuse sur la santé sexuelle ?"
    },
    {
      "id": 25,
      "cat": "Expériences adultes",
      "text": "As-tu déjà eu une intimité avec quelqu'un que tu fréquentais ?"
    },
    {
      "id": 26,
      "cat": "Expériences adultes",
      "text": "As-tu déjà eu une intimité avec quelqu'un que tu ne fréquentais pas ?"
    },
    {
      "id": 27,
      "cat": "Expériences adultes",
      "text": "As-tu déjà vécu une relation d'amis avec bénéfices ?"
    },
    {
      "id": 28,
      "cat": "Expériences adultes",
      "text": "As-tu déjà eu une conversation adulte gênante avec un parent ou un tuteur ?"
    },
    {
      "id": 29,
      "cat": "Expériences adultes",
      "text": "As-tu déjà fait un test de grossesse ou d'IST, ou accompagné quelqu'un pour en faire un ?"
    },
    {
      "id": 30,
      "cat": "Expériences adultes",
      "text": "As-tu déjà vécu une expérience adulte que tu préfères ne pas raconter à la plupart des gens ?"
    },
    {
      "id": 31,
      "cat": "Vie sociale",
      "text": "Es-tu déjà allé ou allée à une fête dans une maison ?"
    },
    {
      "id": 32,
      "cat": "Vie sociale",
      "text": "Es-tu déjà resté ou restée dehors toute la nuit pour des raisons sociales ?"
    },
    {
      "id": 33,
      "cat": "Vie sociale",
      "text": "Es-tu déjà sorti ou sortie en cachette sans permission ?"
    },
    {
      "id": 34,
      "cat": "Vie sociale",
      "text": "Es-tu déjà allé ou allée dans un club ou un bar ?"
    },
    {
      "id": 35,
      "cat": "Vie sociale",
      "text": "As-tu déjà dansé avec quelqu'un qui t'attirait ?"
    },
    {
      "id": 36,
      "cat": "Vie sociale",
      "text": "As-tu déjà organisé une fête ?"
    },
    {
      "id": 37,
      "cat": "Vie sociale",
      "text": "As-tu déjà été au centre d'une histoire de fête ?"
    },
    {
      "id": 38,
      "cat": "Vie sociale",
      "text": "As-tu déjà voyagé surtout pour une fête, un concert ou un festival ?"
    },
    {
      "id": 39,
      "cat": "Vie sociale",
      "text": "As-tu déjà pris une grande décision de vie à cause de tes amis ?"
    },
    {
      "id": 40,
      "cat": "Vie sociale",
      "text": "As-tu déjà vécu un drame amical devenu public ?"
    },
    {
      "id": 41,
      "cat": "École et règles",
      "text": "As-tu déjà séché un cours sans vraie raison ?"
    },
    {
      "id": 42,
      "cat": "École et règles",
      "text": "As-tu déjà copié des devoirs ou laissé quelqu'un copier les tiens ?"
    },
    {
      "id": 43,
      "cat": "École et règles",
      "text": "As-tu déjà triché à un quiz ou à un examen ?"
    },
    {
      "id": 44,
      "cat": "École et règles",
      "text": "As-tu déjà menti pour éviter l'école ou le travail ?"
    },
    {
      "id": 45,
      "cat": "École et règles",
      "text": "As-tu déjà passé une nuit blanche pour autre chose qu'étudier ?"
    },
    {
      "id": 46,
      "cat": "École et règles",
      "text": "As-tu déjà été sanctionné ou sanctionnée par un professeur, un enseignant ou un responsable ?"
    },
    {
      "id": 47,
      "cat": "École et règles",
      "text": "As-tu déjà utilisé une fausse excuse pour manquer une obligation ?"
    },
    {
      "id": 48,
      "cat": "École et règles",
      "text": "T'es-tu déjà fait prendre en train de casser une règle ?"
    },
    {
      "id": 49,
      "cat": "École et règles",
      "text": "As-tu déjà été suspendu, signalé ou officiellement averti ?"
    },
    {
      "id": 50,
      "cat": "École et règles",
      "text": "As-tu déjà ignoré une échéance importante en acceptant la conséquence ?"
    },
    {
      "id": 51,
      "cat": "Alcool et substances",
      "text": "As-tu déjà bu de l'alcool ?"
    },
    {
      "id": 52,
      "cat": "Alcool et substances",
      "text": "As-tu déjà été ivre ?"
    },
    {
      "id": 53,
      "cat": "Alcool et substances",
      "text": "As-tu déjà eu la gueule de bois ?"
    },
    {
      "id": 54,
      "cat": "Alcool et substances",
      "text": "As-tu déjà participé à un jeu d'alcool ?"
    },
    {
      "id": 55,
      "cat": "Alcool et substances",
      "text": "As-tu déjà utilisé une fausse pièce d'identité ou celle de quelqu'un d'autre ?"
    },
    {
      "id": 56,
      "cat": "Alcool et substances",
      "text": "As-tu déjà essayé la nicotine ou la vape ?"
    },
    {
      "id": 57,
      "cat": "Alcool et substances",
      "text": "As-tu déjà essayé le cannabis là où c'était légal pour toi ?"
    },
    {
      "id": 58,
      "cat": "Alcool et substances",
      "text": "As-tu déjà essayé illégalement une substance contrôlée ?"
    },
    {
      "id": 59,
      "cat": "Alcool et substances",
      "text": "As-tu déjà été entouré ou entourée d'un usage illégal de drogue ?"
    },
    {
      "id": 60,
      "cat": "Alcool et substances",
      "text": "As-tu déjà regretté quelque chose fait en état d'ivresse ?"
    },
    {
      "id": 61,
      "cat": "Risques et ennuis",
      "text": "Es-tu déjà entré ou entrée quelque part sans autorisation ?"
    },
    {
      "id": 62,
      "cat": "Risques et ennuis",
      "text": "As-tu déjà volé à l'étalage ou pris quelque chose de petit ?"
    },
    {
      "id": 63,
      "cat": "Risques et ennuis",
      "text": "As-tu déjà été interrogé ou interrogée par la sécurité ou la police ?"
    },
    {
      "id": 64,
      "cat": "Risques et ennuis",
      "text": "As-tu déjà été dans une bagarre physique ?"
    },
    {
      "id": 65,
      "cat": "Risques et ennuis",
      "text": "As-tu déjà endommagé une propriété volontairement ?"
    },
    {
      "id": 66,
      "cat": "Risques et ennuis",
      "text": "As-tu déjà conduit dangereusement ou accepté un trajet dangereux ?"
    },
    {
      "id": 67,
      "cat": "Risques et ennuis",
      "text": "As-tu déjà reçu une amende ou une contravention ?"
    },
    {
      "id": 68,
      "cat": "Risques et ennuis",
      "text": "As-tu déjà été arrêté ou retenu ?"
    },
    {
      "id": 69,
      "cat": "Risques et ennuis",
      "text": "As-tu déjà fait quelque chose de risqué à cause de la pression du groupe ?"
    },
    {
      "id": 70,
      "cat": "Risques et ennuis",
      "text": "As-tu déjà gardé un secret sérieux pour éviter des ennuis ?"
    },
    {
      "id": 71,
      "cat": "Vie numérique",
      "text": "As-tu déjà envoyé un message risqué que tu as ensuite regretté ?"
    },
    {
      "id": 72,
      "cat": "Vie numérique",
      "text": "As-tu déjà publié quelque chose en ligne puis supprimé très vite ?"
    },
    {
      "id": 73,
      "cat": "Vie numérique",
      "text": "As-tu déjà vu une conversation privée fuiter ou être partagée ?"
    },
    {
      "id": 74,
      "cat": "Vie numérique",
      "text": "As-tu déjà utilisé une appli de rencontre ?"
    },
    {
      "id": 75,
      "cat": "Vie numérique",
      "text": "As-tu déjà rencontré en vrai quelqu'un connu d'abord en ligne ?"
    },
    {
      "id": 76,
      "cat": "Vie numérique",
      "text": "As-tu déjà ghosté quelqu'un ou été ghosté ou ghostée ?"
    },
    {
      "id": 77,
      "cat": "Vie numérique",
      "text": "As-tu déjà stalké un ex ou un crush en ligne ?"
    },
    {
      "id": 78,
      "cat": "Vie numérique",
      "text": "As-tu déjà eu un compte social secret ?"
    },
    {
      "id": 79,
      "cat": "Vie numérique",
      "text": "As-tu déjà été bloqué ou bloquée, ou bloqué quelqu'un après un drame ?"
    },
    {
      "id": 80,
      "cat": "Vie numérique",
      "text": "As-tu déjà vu une capture d'écran devenir une pièce d'un conflit ?"
    },
    {
      "id": 81,
      "cat": "Choix personnels",
      "text": "As-tu déjà menti sur ton âge ?"
    },
    {
      "id": 82,
      "cat": "Choix personnels",
      "text": "As-tu déjà menti à ta famille sur l'endroit où tu étais ?"
    },
    {
      "id": 83,
      "cat": "Choix personnels",
      "text": "As-tu déjà dépensé de l'argent en secret ?"
    },
    {
      "id": 84,
      "cat": "Choix personnels",
      "text": "As-tu déjà joué de l'argent ou fait un pari risqué ?"
    },
    {
      "id": 85,
      "cat": "Choix personnels",
      "text": "As-tu déjà eu un piercing ou un tatouage que ta famille ne connaissait pas ?"
    },
    {
      "id": 86,
      "cat": "Choix personnels",
      "text": "As-tu déjà changé ton apparence surtout pour impressionner quelqu'un ?"
    },
    {
      "id": 87,
      "cat": "Choix personnels",
      "text": "Es-tu déjà resté ou restée dans une situation que tu savais malsaine ?"
    },
    {
      "id": 88,
      "cat": "Choix personnels",
      "text": "As-tu déjà rompu une promesse en le cachant ?"
    },
    {
      "id": 89,
      "cat": "Choix personnels",
      "text": "As-tu déjà eu une grande phase secrète ou un changement de mode de vie secret ?"
    },
    {
      "id": 90,
      "cat": "Choix personnels",
      "text": "As-tu déjà fait quelque chose uniquement pour l'histoire à raconter ?"
    },
    {
      "id": 91,
      "cat": "Limites et réflexion",
      "text": "As-tu déjà posé une limite claire à quelqu'un ?"
    },
    {
      "id": 92,
      "cat": "Limites et réflexion",
      "text": "As-tu déjà présenté des excuses pour avoir blessé quelqu'un ?"
    },
    {
      "id": 93,
      "cat": "Limites et réflexion",
      "text": "As-tu déjà mis fin à une amitié ou à une relation pour ton propre bien-être ?"
    },
    {
      "id": 94,
      "cat": "Limites et réflexion",
      "text": "As-tu déjà demandé de l'aide après une erreur ?"
    },
    {
      "id": 95,
      "cat": "Limites et réflexion",
      "text": "As-tu déjà appris d'une conséquence à la dure ?"
    },
    {
      "id": 96,
      "cat": "Limites et réflexion",
      "text": "As-tu déjà eu une conversation sérieuse sur le consentement ou le respect ?"
    },
    {
      "id": 97,
      "cat": "Limites et réflexion",
      "text": "As-tu déjà changé ton comportement après avoir compris qu'il faisait du mal ?"
    },
    {
      "id": 98,
      "cat": "Limites et réflexion",
      "text": "As-tu déjà pardonné à quelqu'un après une expérience difficile ?"
    },
    {
      "id": 99,
      "cat": "Limites et réflexion",
      "text": "As-tu déjà été honnête à propos de quelque chose de gênant ?"
    },
    {
      "id": 100,
      "cat": "Limites et réflexion",
      "text": "As-tu déjà fait un quiz comme celui-ci surtout pour réfléchir à ta vie ?"
    }
  ],
  "zh": [
    {
      "id": 1,
      "cat": "感情关系",
      "text": "你是否曾以恋爱方式和别人牵手？"
    },
    {
      "id": 2,
      "cat": "感情关系",
      "text": "你是否曾约会过？"
    },
    {
      "id": 3,
      "cat": "感情关系",
      "text": "你是否曾处于一段稳定关系中？"
    },
    {
      "id": 4,
      "cat": "感情关系",
      "text": "你是否曾有持续数月的暗恋？"
    },
    {
      "id": 5,
      "cat": "感情关系",
      "text": "你是否曾对别人表达过恋爱意义上的爱意？"
    },
    {
      "id": 6,
      "cat": "感情关系",
      "text": "你是否曾被自己喜欢的人拒绝？"
    },
    {
      "id": 7,
      "cat": "感情关系",
      "text": "你是否曾拒绝过喜欢你的人？"
    },
    {
      "id": 8,
      "cat": "感情关系",
      "text": "你是否曾经历过分手？"
    },
    {
      "id": 9,
      "cat": "感情关系",
      "text": "你是否曾参加过相亲或交友应用上的约会？"
    },
    {
      "id": 10,
      "cat": "感情关系",
      "text": "你是否曾有过异地恋？"
    },
    {
      "id": 11,
      "cat": "身体亲密",
      "text": "你是否曾与别人有过恋爱意义上的接吻？"
    },
    {
      "id": 12,
      "cat": "身体亲密",
      "text": "你是否曾与别人热吻过？"
    },
    {
      "id": 13,
      "cat": "身体亲密",
      "text": "你是否曾带着恋爱意味依偎过别人？"
    },
    {
      "id": 14,
      "cat": "身体亲密",
      "text": "你是否曾和自己喜欢的人睡在同一张床上？"
    },
    {
      "id": 15,
      "cat": "身体亲密",
      "text": "你是否曾在公共场合有过浪漫时刻？"
    },
    {
      "id": 16,
      "cat": "身体亲密",
      "text": "你是否曾被别人突然亲吻？"
    },
    {
      "id": 17,
      "cat": "身体亲密",
      "text": "你是否曾亲吻过刚认识的人？"
    },
    {
      "id": 18,
      "cat": "身体亲密",
      "text": "你是否曾有过秘密的浪漫互动？"
    },
    {
      "id": 19,
      "cat": "身体亲密",
      "text": "你是否曾在派对上有过浪漫接触？"
    },
    {
      "id": 20,
      "cat": "身体亲密",
      "text": "你是否曾有过后来感到后悔的浪漫经历？"
    },
    {
      "id": 21,
      "cat": "成人经历",
      "text": "你是否曾有过双方同意的成人亲密经历？"
    },
    {
      "id": 22,
      "cat": "成人经历",
      "text": "你是否曾在亲密行为前讨论过边界？"
    },
    {
      "id": 23,
      "cat": "成人经历",
      "text": "你是否曾购买或携带过防护用品？"
    },
    {
      "id": 24,
      "cat": "成人经历",
      "text": "你是否曾认真讨论过性健康？"
    },
    {
      "id": 25,
      "cat": "成人经历",
      "text": "你是否曾和正在约会的人发生亲密关系？"
    },
    {
      "id": 26,
      "cat": "成人经历",
      "text": "你是否曾和并未约会的人发生亲密关系？"
    },
    {
      "id": 27,
      "cat": "成人经历",
      "text": "你是否曾有过朋友以上恋人未满的关系？"
    },
    {
      "id": 28,
      "cat": "成人经历",
      "text": "你是否曾和父母或监护人进行过尴尬的成人话题谈话？"
    },
    {
      "id": 29,
      "cat": "成人经历",
      "text": "你是否曾做过怀孕或性传播感染检测，或陪别人去做？"
    },
    {
      "id": 30,
      "cat": "成人经历",
      "text": "你是否曾有过不愿告诉大多数人的成人经历？"
    },
    {
      "id": 31,
      "cat": "社交生活",
      "text": "你是否曾参加过家庭聚会式派对？"
    },
    {
      "id": 32,
      "cat": "社交生活",
      "text": "你是否曾因社交活动而整夜不回？"
    },
    {
      "id": 33,
      "cat": "社交生活",
      "text": "你是否曾未经允许偷偷溜出去？"
    },
    {
      "id": 34,
      "cat": "社交生活",
      "text": "你是否曾去过夜店或酒吧？"
    },
    {
      "id": 35,
      "cat": "社交生活",
      "text": "你是否曾与自己有吸引力感觉的人跳过舞？"
    },
    {
      "id": 36,
      "cat": "社交生活",
      "text": "你是否曾主办过派对？"
    },
    {
      "id": 37,
      "cat": "社交生活",
      "text": "你是否曾成为派对故事里的主角？"
    },
    {
      "id": 38,
      "cat": "社交生活",
      "text": "你是否曾主要为了派对、演唱会或音乐节而旅行？"
    },
    {
      "id": 39,
      "cat": "社交生活",
      "text": "你是否曾因为朋友而做出重大人生决定？"
    },
    {
      "id": 40,
      "cat": "社交生活",
      "text": "你是否曾有过公开化的友情风波？"
    },
    {
      "id": 41,
      "cat": "学校与规则",
      "text": "你是否曾无正当理由逃过课？"
    },
    {
      "id": 42,
      "cat": "学校与规则",
      "text": "你是否曾抄作业或让别人抄你的作业？"
    },
    {
      "id": 43,
      "cat": "学校与规则",
      "text": "你是否曾在测验或考试中作弊？"
    },
    {
      "id": 44,
      "cat": "学校与规则",
      "text": "你是否曾为了逃避上学或上班而撒谎？"
    },
    {
      "id": 45,
      "cat": "学校与规则",
      "text": "你是否曾因学习之外的原因熬过通宵？"
    },
    {
      "id": 46,
      "cat": "学校与规则",
      "text": "你是否曾被老师、教授或主管处分过？"
    },
    {
      "id": 47,
      "cat": "学校与规则",
      "text": "你是否曾用假借口逃避某项义务？"
    },
    {
      "id": 48,
      "cat": "学校与规则",
      "text": "你是否曾被抓到违反规则？"
    },
    {
      "id": 49,
      "cat": "学校与规则",
      "text": "你是否曾被停学、记过或正式警告？"
    },
    {
      "id": 50,
      "cat": "学校与规则",
      "text": "你是否曾无视重要截止日期并接受后果？"
    },
    {
      "id": 51,
      "cat": "酒精与药物",
      "text": "你是否曾喝过酒？"
    },
    {
      "id": 52,
      "cat": "酒精与药物",
      "text": "你是否曾喝醉过？"
    },
    {
      "id": 53,
      "cat": "酒精与药物",
      "text": "你是否曾宿醉过？"
    },
    {
      "id": 54,
      "cat": "酒精与药物",
      "text": "你是否曾玩过饮酒游戏？"
    },
    {
      "id": 55,
      "cat": "酒精与药物",
      "text": "你是否曾使用过假证件或借来的证件？"
    },
    {
      "id": 56,
      "cat": "酒精与药物",
      "text": "你是否曾尝试过尼古丁或电子烟？"
    },
    {
      "id": 57,
      "cat": "酒精与药物",
      "text": "你是否曾在对你合法的地方尝试过大麻？"
    },
    {
      "id": 58,
      "cat": "酒精与药物",
      "text": "你是否曾非法尝试过受管制药物？"
    },
    {
      "id": 59,
      "cat": "酒精与药物",
      "text": "你是否曾在非法用药场景中待过？"
    },
    {
      "id": 60,
      "cat": "酒精与药物",
      "text": "你是否曾后悔过自己在醉酒或药物影响下做的事？"
    },
    {
      "id": 61,
      "cat": "风险与麻烦",
      "text": "你是否曾未经允许进入某个地方？"
    },
    {
      "id": 62,
      "cat": "风险与麻烦",
      "text": "你是否曾顺手牵羊或偷过小东西？"
    },
    {
      "id": 63,
      "cat": "风险与麻烦",
      "text": "你是否曾被保安或警方盘问过？"
    },
    {
      "id": 64,
      "cat": "风险与麻烦",
      "text": "你是否曾卷入肢体冲突？"
    },
    {
      "id": 65,
      "cat": "风险与麻烦",
      "text": "你是否曾故意损坏财物？"
    },
    {
      "id": 66,
      "cat": "风险与麻烦",
      "text": "你是否曾危险驾驶，或坐过危险驾驶者的车？"
    },
    {
      "id": 67,
      "cat": "风险与麻烦",
      "text": "你是否曾收到罚单或罚款？"
    },
    {
      "id": 68,
      "cat": "风险与麻烦",
      "text": "你是否曾被逮捕或拘留？"
    },
    {
      "id": 69,
      "cat": "风险与麻烦",
      "text": "你是否曾因为同伴压力做过冒险的事？"
    },
    {
      "id": 70,
      "cat": "风险与麻烦",
      "text": "你是否曾为了避免麻烦而保守重大秘密？"
    },
    {
      "id": 71,
      "cat": "数字生活",
      "text": "你是否曾发过后来后悔的高风险消息？"
    },
    {
      "id": 72,
      "cat": "数字生活",
      "text": "你是否曾在网上发过东西又很快删掉？"
    },
    {
      "id": 73,
      "cat": "数字生活",
      "text": "你是否曾有私人对话被泄露或转发？"
    },
    {
      "id": 74,
      "cat": "数字生活",
      "text": "你是否曾使用过交友应用？"
    },
    {
      "id": 75,
      "cat": "数字生活",
      "text": "你是否曾与先在网上认识的人线下见面？"
    },
    {
      "id": 76,
      "cat": "数字生活",
      "text": "你是否曾冷处理别人，或被别人冷处理过？"
    },
    {
      "id": 77,
      "cat": "数字生活",
      "text": "你是否曾在网上偷偷关注前任或暗恋对象？"
    },
    {
      "id": 78,
      "cat": "数字生活",
      "text": "你是否曾有过秘密社交账号？"
    },
    {
      "id": 79,
      "cat": "数字生活",
      "text": "你是否曾在一场风波后拉黑别人或被别人拉黑？"
    },
    {
      "id": 80,
      "cat": "数字生活",
      "text": "你是否曾让截图成为争执的一部分？"
    },
    {
      "id": 81,
      "cat": "个人选择",
      "text": "你是否曾谎报自己的年龄？"
    },
    {
      "id": 82,
      "cat": "个人选择",
      "text": "你是否曾对家人隐瞒自己去了哪里？"
    },
    {
      "id": 83,
      "cat": "个人选择",
      "text": "你是否曾偷偷花钱？"
    },
    {
      "id": 84,
      "cat": "个人选择",
      "text": "你是否曾赌博或下过高风险赌注？"
    },
    {
      "id": 85,
      "cat": "个人选择",
      "text": "你是否曾有过家人并不知道的穿孔或纹身？"
    },
    {
      "id": 86,
      "cat": "个人选择",
      "text": "你是否曾主要为了取悦某人而改变外表？"
    },
    {
      "id": 87,
      "cat": "个人选择",
      "text": "你是否曾留在明知不健康的处境中？"
    },
    {
      "id": 88,
      "cat": "个人选择",
      "text": "你是否曾违背承诺并将其隐瞒？"
    },
    {
      "id": 89,
      "cat": "个人选择",
      "text": "你是否曾有过重大的秘密阶段或生活方式变化？"
    },
    {
      "id": 90,
      "cat": "个人选择",
      "text": "你是否曾只是为了以后有故事可讲而做某件事？"
    },
    {
      "id": 91,
      "cat": "边界与反思",
      "text": "你是否曾明确地对别人设立边界？"
    },
    {
      "id": 92,
      "cat": "边界与反思",
      "text": "你是否曾为伤害别人而道歉？"
    },
    {
      "id": 93,
      "cat": "边界与反思",
      "text": "你是否曾为了自己的福祉结束一段友谊或关系？"
    },
    {
      "id": 94,
      "cat": "边界与反思",
      "text": "你是否曾在犯错后主动求助？"
    },
    {
      "id": 95,
      "cat": "边界与反思",
      "text": "你是否曾通过沉重后果学到教训？"
    },
    {
      "id": 96,
      "cat": "边界与反思",
      "text": "你是否曾认真谈过同意或尊重的话题？"
    },
    {
      "id": 97,
      "cat": "边界与反思",
      "text": "你是否曾在意识到自己行为有害后做出改变？"
    },
    {
      "id": 98,
      "cat": "边界与反思",
      "text": "你是否曾在艰难经历后原谅别人？"
    },
    {
      "id": 99,
      "cat": "边界与反思",
      "text": "你是否曾坦诚面对令人尴尬的事？"
    },
    {
      "id": 100,
      "cat": "边界与反思",
      "text": "你是否曾主要为了反思自己的人生而做这种测试？"
    }
  ],
  "ja": [
    {
      "id": 1,
      "cat": "恋愛関係",
      "text": "恋愛の意味で誰かと手をつないだことがありますか？"
    },
    {
      "id": 2,
      "cat": "恋愛関係",
      "text": "デートをしたことがありますか？"
    },
    {
      "id": 3,
      "cat": "恋愛関係",
      "text": "真剣な交際をしたことがありますか？"
    },
    {
      "id": 4,
      "cat": "恋愛関係",
      "text": "何か月も続く片思いをしたことがありますか？"
    },
    {
      "id": 5,
      "cat": "恋愛関係",
      "text": "恋愛感情として誰かに愛していると伝えたことがありますか？"
    },
    {
      "id": 6,
      "cat": "恋愛関係",
      "text": "好きだった相手に振られたことがありますか？"
    },
    {
      "id": 7,
      "cat": "恋愛関係",
      "text": "自分を好きだった相手を振ったことがありますか？"
    },
    {
      "id": 8,
      "cat": "恋愛関係",
      "text": "別れを経験したことがありますか？"
    },
    {
      "id": 9,
      "cat": "恋愛関係",
      "text": "ブラインドデートやアプリ経由のデートをしたことがありますか？"
    },
    {
      "id": 10,
      "cat": "恋愛関係",
      "text": "遠距離恋愛をしたことがありますか？"
    },
    {
      "id": 11,
      "cat": "身体的な親密さ",
      "text": "恋愛の意味で誰かにキスしたことがありますか？"
    },
    {
      "id": 12,
      "cat": "身体的な親密さ",
      "text": "誰かと濃いキスをしたことがありますか？"
    },
    {
      "id": 13,
      "cat": "身体的な親密さ",
      "text": "恋愛感情をこめて寄り添ったことがありますか？"
    },
    {
      "id": 14,
      "cat": "身体的な親密さ",
      "text": "好きだった人と同じベッドで寝たことがありますか？"
    },
    {
      "id": 15,
      "cat": "身体的な親密さ",
      "text": "人前でロマンチックな瞬間を過ごしたことがありますか？"
    },
    {
      "id": 16,
      "cat": "身体的な親密さ",
      "text": "不意にキスされたことがありますか？"
    },
    {
      "id": 17,
      "cat": "身体的な親密さ",
      "text": "会ったばかりの人にキスしたことがありますか？"
    },
    {
      "id": 18,
      "cat": "身体的な親密さ",
      "text": "秘密の恋愛的なやり取りをしたことがありますか？"
    },
    {
      "id": 19,
      "cat": "身体的な親密さ",
      "text": "パーティーで恋愛的な接触をしたことがありますか？"
    },
    {
      "id": 20,
      "cat": "身体的な親密さ",
      "text": "あとで後悔した恋愛経験がありますか？"
    },
    {
      "id": 21,
      "cat": "大人の経験",
      "text": "合意のある大人の親密な経験がありますか？"
    },
    {
      "id": 22,
      "cat": "大人の経験",
      "text": "親密になる前に境界線について話したことがありますか？"
    },
    {
      "id": 23,
      "cat": "大人の経験",
      "text": "避妊や防護のためのものを買ったり持ち歩いたりしたことがありますか？"
    },
    {
      "id": 24,
      "cat": "大人の経験",
      "text": "性の健康について真剣に話したことがありますか？"
    },
    {
      "id": 25,
      "cat": "大人の経験",
      "text": "交際中の相手と親密な関係になったことがありますか？"
    },
    {
      "id": 26,
      "cat": "大人の経験",
      "text": "交際していない相手と親密な関係になったことがありますか？"
    },
    {
      "id": 27,
      "cat": "大人の経験",
      "text": "友達以上恋人未満の関係になったことがありますか？"
    },
    {
      "id": 28,
      "cat": "大人の経験",
      "text": "親や保護者と気まずい大人向けの話をしたことがありますか？"
    },
    {
      "id": 29,
      "cat": "大人の経験",
      "text": "妊娠検査や性感染症検査を受けたこと、または誰かに付き添ったことがありますか？"
    },
    {
      "id": 30,
      "cat": "大人の経験",
      "text": "大半の人には話したくない大人の経験がありますか？"
    },
    {
      "id": 31,
      "cat": "社交生活",
      "text": "ホームパーティーに行ったことがありますか？"
    },
    {
      "id": 32,
      "cat": "社交生活",
      "text": "社交のために一晩中外にいたことがありますか？"
    },
    {
      "id": 33,
      "cat": "社交生活",
      "text": "許可なくこっそり外出したことがありますか？"
    },
    {
      "id": 34,
      "cat": "社交生活",
      "text": "クラブやバーに行ったことがありますか？"
    },
    {
      "id": 35,
      "cat": "社交生活",
      "text": "惹かれていた相手と踊ったことがありますか？"
    },
    {
      "id": 36,
      "cat": "社交生活",
      "text": "パーティーを主催したことがありますか？"
    },
    {
      "id": 37,
      "cat": "社交生活",
      "text": "パーティーの話題の中心になったことがありますか？"
    },
    {
      "id": 38,
      "cat": "社交生活",
      "text": "主にパーティーやライブやフェスのために旅行したことがありますか？"
    },
    {
      "id": 39,
      "cat": "社交生活",
      "text": "友達が理由で大きな人生の決断をしたことがありますか？"
    },
    {
      "id": 40,
      "cat": "社交生活",
      "text": "友情のトラブルが公になったことがありますか？"
    },
    {
      "id": 41,
      "cat": "学校とルール",
      "text": "正当な理由なく授業をさぼったことがありますか？"
    },
    {
      "id": 42,
      "cat": "学校とルール",
      "text": "宿題を写したり、自分の宿題を写させたりしたことがありますか？"
    },
    {
      "id": 43,
      "cat": "学校とルール",
      "text": "小テストや試験で不正をしたことがありますか？"
    },
    {
      "id": 44,
      "cat": "学校とルール",
      "text": "学校や仕事を休むために嘘をついたことがありますか？"
    },
    {
      "id": 45,
      "cat": "学校とルール",
      "text": "勉強以外の理由で徹夜したことがありますか？"
    },
    {
      "id": 46,
      "cat": "学校とルール",
      "text": "先生、教授、上司などから処分されたことがありますか？"
    },
    {
      "id": 47,
      "cat": "学校とルール",
      "text": "義務を避けるために偽の言い訳を使ったことがありますか？"
    },
    {
      "id": 48,
      "cat": "学校とルール",
      "text": "ルール違反で見つかったことがありますか？"
    },
    {
      "id": 49,
      "cat": "学校とルール",
      "text": "停学、始末書、正式な警告を受けたことがありますか？"
    },
    {
      "id": 50,
      "cat": "学校とルール",
      "text": "重要な締め切りを無視して、その結果を受け入れたことがありますか？"
    },
    {
      "id": 51,
      "cat": "お酒と薬物",
      "text": "お酒を飲んだことがありますか？"
    },
    {
      "id": 52,
      "cat": "お酒と薬物",
      "text": "酔っぱらったことがありますか？"
    },
    {
      "id": 53,
      "cat": "お酒と薬物",
      "text": "二日酔いになったことがありますか？"
    },
    {
      "id": 54,
      "cat": "お酒と薬物",
      "text": "飲み会ゲームをしたことがありますか？"
    },
    {
      "id": 55,
      "cat": "お酒と薬物",
      "text": "偽造IDや借りたIDを使ったことがありますか？"
    },
    {
      "id": 56,
      "cat": "お酒と薬物",
      "text": "ニコチンやベイプを試したことがありますか？"
    },
    {
      "id": 57,
      "cat": "お酒と薬物",
      "text": "自分にとって合法な場所でマリファナを試したことがありますか？"
    },
    {
      "id": 58,
      "cat": "お酒と薬物",
      "text": "違法に規制薬物を試したことがありますか？"
    },
    {
      "id": 59,
      "cat": "お酒と薬物",
      "text": "違法な薬物使用の場に居合わせたことがありますか？"
    },
    {
      "id": 60,
      "cat": "お酒と薬物",
      "text": "酔っていたり薬物の影響下でやったことを後悔したことがありますか？"
    },
    {
      "id": 61,
      "cat": "リスクとトラブル",
      "text": "無断でどこかに立ち入ったことがありますか？"
    },
    {
      "id": 62,
      "cat": "リスクとトラブル",
      "text": "万引きや小さな盗みをしたことがありますか？"
    },
    {
      "id": 63,
      "cat": "リスクとトラブル",
      "text": "警備員や警察に事情を聞かれたことがありますか？"
    },
    {
      "id": 64,
      "cat": "リスクとトラブル",
      "text": "身体的なけんかをしたことがありますか？"
    },
    {
      "id": 65,
      "cat": "リスクとトラブル",
      "text": "わざと物を壊したことがありますか？"
    },
    {
      "id": 66,
      "cat": "リスクとトラブル",
      "text": "危険運転をしたこと、または危険運転の車に乗ったことがありますか？"
    },
    {
      "id": 67,
      "cat": "リスクとトラブル",
      "text": "違反切符や罰金を受けたことがありますか？"
    },
    {
      "id": 68,
      "cat": "リスクとトラブル",
      "text": "逮捕または拘束されたことがありますか？"
    },
    {
      "id": 69,
      "cat": "リスクとトラブル",
      "text": "仲間からの圧力で危険なことをしたことがありますか？"
    },
    {
      "id": 70,
      "cat": "リスクとトラブル",
      "text": "トラブルを避けるために重大な秘密を守ったことがありますか？"
    },
    {
      "id": 71,
      "cat": "デジタル生活",
      "text": "あとで後悔するような危ないメッセージを送ったことがありますか？"
    },
    {
      "id": 72,
      "cat": "デジタル生活",
      "text": "オンラインに何か投稿してすぐ削除したことがありますか？"
    },
    {
      "id": 73,
      "cat": "デジタル生活",
      "text": "個人的な会話が漏えいしたり共有されたりしたことがありますか？"
    },
    {
      "id": 74,
      "cat": "デジタル生活",
      "text": "マッチングアプリを使ったことがありますか？"
    },
    {
      "id": 75,
      "cat": "デジタル生活",
      "text": "最初にオンラインで出会った相手と実際に会ったことがありますか？"
    },
    {
      "id": 76,
      "cat": "デジタル生活",
      "text": "誰かをゴーストしたこと、またはゴーストされたことがありますか？"
    },
    {
      "id": 77,
      "cat": "デジタル生活",
      "text": "元恋人や片思いの相手をネットでこっそり追ったことがありますか？"
    },
    {
      "id": 78,
      "cat": "デジタル生活",
      "text": "秘密のSNSアカウントを持ったことがありますか？"
    },
    {
      "id": 79,
      "cat": "デジタル生活",
      "text": "トラブルのあとで誰かをブロックしたり、されたりしたことがありますか？"
    },
    {
      "id": 80,
      "cat": "デジタル生活",
      "text": "スクリーンショットが口論の材料になったことがありますか？"
    },
    {
      "id": 81,
      "cat": "個人的な選択",
      "text": "年齢をごまかしたことがありますか？"
    },
    {
      "id": 82,
      "cat": "個人的な選択",
      "text": "どこにいたかを家族に嘘をついたことがありますか？"
    },
    {
      "id": 83,
      "cat": "個人的な選択",
      "text": "内緒でお金を使ったことがありますか？"
    },
    {
      "id": 84,
      "cat": "個人的な選択",
      "text": "賭け事をしたり危ない賭けに乗ったことがありますか？"
    },
    {
      "id": 85,
      "cat": "個人的な選択",
      "text": "家族に知られていないピアスやタトゥーをしたことがありますか？"
    },
    {
      "id": 86,
      "cat": "個人的な選択",
      "text": "誰かに好かれるために主に見た目を変えたことがありますか？"
    },
    {
      "id": 87,
      "cat": "個人的な選択",
      "text": "不健全だと分かっている状況に居続けたことがありますか？"
    },
    {
      "id": 88,
      "cat": "個人的な選択",
      "text": "約束を破って隠したことがありますか？"
    },
    {
      "id": 89,
      "cat": "個人的な選択",
      "text": "大きな秘密の時期や生活の大きな変化があったことがありますか？"
    },
    {
      "id": 90,
      "cat": "個人的な選択",
      "text": "あとで話のネタにするためだけに何かをしたことがありますか？"
    },
    {
      "id": 91,
      "cat": "境界線と振り返り",
      "text": "誰かに対してはっきりした境界線を示したことがありますか？"
    },
    {
      "id": 92,
      "cat": "境界線と振り返り",
      "text": "誰かを傷つけたことを謝ったことがありますか？"
    },
    {
      "id": 93,
      "cat": "境界線と振り返り",
      "text": "自分の心身のために友情や恋愛関係を終わらせたことがありますか？"
    },
    {
      "id": 94,
      "cat": "境界線と振り返り",
      "text": "失敗したあとに助けを求めたことがありますか？"
    },
    {
      "id": 95,
      "cat": "境界線と振り返り",
      "text": "つらい結果から痛い形で学んだことがありますか？"
    },
    {
      "id": 96,
      "cat": "境界線と振り返り",
      "text": "同意や敬意について真剣に話したことがありますか？"
    },
    {
      "id": 97,
      "cat": "境界線と振り返り",
      "text": "自分の行動が有害だと気づいて変えたことがありますか？"
    },
    {
      "id": 98,
      "cat": "境界線と振り返り",
      "text": "つらい経験のあとで誰かを許したことがありますか？"
    },
    {
      "id": 99,
      "cat": "境界線と振り返り",
      "text": "恥ずかしいことについて正直に話したことがありますか？"
    },
    {
      "id": 100,
      "cat": "境界線と振り返り",
      "text": "主に自分の人生を振り返るためにこのようなクイズをしたことがありますか？"
    }
  ]
};
  const locale = (window.location.pathname.match(/^\/(es|pt|id|de|fr|zh|ja)(?:\/|$)/) || [])[1] || 'en';
  window.RPT_QUESTION_BANK = QUESTION_BANK;
  window.RPT_QUESTIONS = QUESTION_BANK[locale] || QUESTION_BANK.en;
})();
