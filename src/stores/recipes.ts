// espiritu, tizon
const _RECIPES: Array<any> = [
  {
    "title": "Promesa de los ancianos",
    "runes": [
      {
        "name": "Ral",
        "status": false
      },
      {
        "name": "Ort",
        "status": false
      },
      {
        "name": "Tal",
        "status": false
      }
    ],
    "arm": [
      "Escudos"
    ],
    "numberHole": "(3 huecos)",
    "holes": 3,
    "version": "Disponible a partir de la versión: 1.09",
    "features": [
      "+50% defensa mejorada",
      "Resistencia al frío +43%",
      "Resistencia al fuego +48%",
      "Resistencia a los rayos +48%",
      "Resistencia al veneno +48%",
      "10% del daño repercute en el Maná"
    ]
  },
  {
    "title": "Negro",
    "runes": [
      {
        "name": "Thul",
        "status": false
      },
      {
        "name": "Io",
        "status": false
      },
      {
        "name": "Nef",
        "status": false
      }
    ],
    "arm": [
      "Mazas",
      "Martillos"
    ],
    "numberHole": "(3 huecos)",
    "holes": 3,
    "version": "Disponible a partir de la versión: 1.09",
    "features": [
      "+120% daño mejorado",
      "40% posibilidad de golpe machacador",
      "+200 puntuación de ataque",
      "Añade 3-14 daño de frío (duración del frío: 3 seg.)",
      "+10 vitalidad",
      "+19 daño de veneno durante 2 seg.",
      "15% incrementada velocidad de ataque",
      "El enemigo retrocede",
      "Daño mágico reducido en 2",
      "Nivel 4 Explosión de cadáveres (12 cargas)"
    ]
  },
  {
    "title": "Furia",
    "runes": [
      {
        "name": "Jah",
        "status": false
      },
      {
        "name": "Gul",
        "status": false
      },
      {
        "name": "Eth",
        "status": false
      }
    ],
    "arm": [
      "Armas cuerpo a cuerpo"
    ],
    "numberHole": "(3 huecos)",
    "holes": 3,
    "version": "Disponible a partir de la versión: 1.09",
    "features": [
      "+209% daño mejorado",
      "40% incrementada velocidad de ataque",
      "Evita la curación del monstruo",
      "66% posibilidad de heridas abiertas",
      "33% posibilidad golpe mortal",
      "Ignora la defensa del enemigo",
      "-20% defensa del enemigo",
      "20% bonificación puntuación de ataque",
      "6% Vida robada por impacto",
      "+5 a Frenesí (Sólo bárbaro)"
    ]
  },
  {
    "title": "Trueno sagrado",
    "runes": [
      {
        "name": "Eth",
        "status": false
      },
      {
        "name": "Ral",
        "status": false
      },
      {
        "name": "Ort",
        "status": false
      },
      {
        "name": "Tal",
        "status": false
      }
    ],
    "arm": [
      "Cetros"
    ],
    "numberHole": "(4 huecos)",
    "holes": 4,
    "version": "Disponible a partir de la versión: 1.09",
    "features": [
      "+60% daño mejorado",
      "-25% defensa del enemigo",
      "Añade 5-30 daño de fuego",
      "Añade 21-110 daño de relámpago",
      "+75 daño de veneno durante 5 seg.",
      "+10 al daño máximo",
      "Resistencia a los rayos +60%",
      "+5 a la resistencia máxima de rayos",
      "+3 a Golpe Sagrado (Sólo Paladín)",
      "Nivel 7 Rayos encadenados (60 cargas)"
    ]
  },
  {
    "title": "Honor",
    "runes": [
      {
        "name": "Amn",
        "status": false
      },
      {
        "name": "El",
        "status": false
      },
      {
        "name": "Ith",
        "status": false
      },
      {
        "name": "Tir",
        "status": false
      },
      {
        "name": "Sol",
        "status": false
      }
    ],
    "arm": [
      "Armas cuerpo a cuerpo"
    ],
    "numberHole": "(5 huecos)",
    "holes": 5,
    "version": "Disponible a partir de la versión: 1.09",
    "features": [
      "+160% Daño mejorado",
      "+9 al daño mínimo",
      "+9 al daño máximo",
      "25% golpe mortal",
      "+250 puntuación de ataque",
      "+1 a todos los niveles de habilidad",
      "7% Vida robada por impacto",
      "Repostar Vida +10",
      "+10 fuerza",
      "+1 al radio de luz",
      "+2 al Maná tras cada muerte"
    ]
  },
  {
    "title": "Gracia del rey",
    "runes": [
      {
        "name": "Amn",
        "status": false
      },
      {
        "name": "Ral",
        "status": false
      },
      {
        "name": "Thul",
        "status": false
      }
    ],
    "arm": [
      "Espadas",
      "Cetros"
    ],
    "numberHole": "(3 huecos)",
    "holes": 3,
    "version": "Disponible a partir de la versión: 1.09",
    "features": [
      "+100% daño mejorado",
      "+100% daño contra demonios",
      "+100% daño contra muertos vivientes",
      "Añade 5-30 daño de fuego",
      "Añade 3-14 daño de frío (duración del frío: 3 seg.)",
      "+150 puntuación de ataque",
      "+100 puntuación de ataque contra demonios",
      "+100 puntuación de ataque contra muertos vivientes",
      "7% Vida robada por impacto"
    ]
  },
  {
    "title": "Hoja",
    "runes": [
      {
        "name": "Tir",
        "status": false
      },
      {
        "name": "Ral",
        "status": false
      }
    ],
    "arm": [
      "Bastones"
    ],
    "numberHole": "(2 huecos)",
    "holes": 2,
    "version": "Disponible a partir de la versión: 1.09",
    "features": [
      "Añade 5-30 daño de fuego",
      "+3 a Hechizos de fuego",
      "+3 a Saeta de fuego (Sólo Hechicera)",
      "+3 a Infierno (Sólo Hechicera)",
      "+3 a Calor (Sólo Hechicera)",
      "+2 al Maná tras cada muerte",
      "Resistencia al frío +33%"
    ]
  },
  {
    "title": "Corazón de león",
    "runes": [
      {
        "name": "Hel",
        "status": false
      },
      {
        "name": "Lum",
        "status": false
      },
      {
        "name": "Fal",
        "status": false
      }
    ],
    "arm": [
      "Armadura"
    ],
    "numberHole": "(3 huecos)",
    "holes": 3,
    "version": "Disponible a partir de la versión: 1.09",
    "features": [
      "+20% daño mejorado",
      "Requerimientos -15%",
      "+25 fuerza",
      "+10 energía",
      "+20 vitalidad",
      "+15 destreza",
      "+50 Vida",
      "Todas las resistencias +30%"
    ]
  },
  {
    "title": "Popular",
    "runes": [
      {
        "name": "Ort",
        "status": false
      },
      {
        "name": "Sol",
        "status": false
      }
    ],
    "arm": [
      "Cascos"
    ],
    "numberHole": "(2 huecos)",
    "holes": 2,
    "version": "Disponible a partir de la versión: 1.09",
    "features": [
      "+1 a todos los niveles de habilidad",
      "+10 energía",
      "+2 al Maná tras cada muerte",
      "Resistenia a los rayos +30%",
      "Daño reducido en 7",
      "+2 al radio de luz"
    ]
  },
  {
    "title": "Maldad",
    "runes": [
      {
        "name": "Ith",
        "status": false
      },
      {
        "name": "El",
        "status": false
      },
      {
        "name": "Eth",
        "status": false
      }
    ],
    "arm": [
      "Armas cuerpo a cuerpo"
    ],
    "numberHole": "(3 huecos)",
    "holes": 3,
    "version": "Disponible a partir de la versión: 1.09",
    "features": [
      "+33% daño mejorado",
      "+9 al daño máximo",
      "100% posibilidad de heridas abiertas",
      "-25% defensa del enemigo",
      "-100 defensa del monstruo por impacto",
      "Evita la curación del monstruo",
      "+50 puntuación de ataque",
      "Drenar Vida -5"
    ]
  },
  {
    "title": "Memoria",
    "runes": [
      {
        "name": "Lum",
        "status": false
      },
      {
        "name": "Io",
        "status": false
      },
      {
        "name": "Sol",
        "status": false
      },
      {
        "name": "Eth",
        "status": false
      }
    ],
    "arm": [
      "Bastones"
    ],
    "numberHole": "(4 huecos)",
    "holes": 4,
    "version": "Disponible a partir de la versión: 1.09",
    "features": [
      "+3 a todos los niveles de habilidad de la hechicera",
      "33% velocidad de lanzamiento mayor",
      "Aumenta Maná máximo 20%",
      "+3 a Escudo de energía (Sólo Hechicera)",
      "+2 a Campo estático (Sólo Hechicera)",
      "+10 energía",
      "+10 vitalidad",
      "+9 al daño mínimo",
      "-25% defensa del enemigo",
      "Daño mágico reducido en 7",
      "+50% defensa mejorada"
    ]
  },
  {
    "title": "Nadir",
    "runes": [
      {
        "name": "Nef",
        "status": false
      },
      {
        "name": "Tir",
        "status": false
      }
    ],
    "arm": [
      "Cascos"
    ],
    "numberHole": "(2 huecos)",
    "holes": 2,
    "version": "Disponible a partir de la versión: 1.09",
    "features": [
      "+50% defensa mejorada",
      "+10 defensa",
      "+30 defensa contra misiles",
      "Nivel 13 Capa de las sombras (9 cargas)",
      "+2 al Maná tras cada muerte",
      "+5 fuerza",
      "-33% oro extra de los monstruos",
      "-3 al radio de luz"
    ]
  },
  {
    "title": "Resplandor",
    "runes": [
      {
        "name": "Nef",
        "status": false
      },
      {
        "name": "Sol",
        "status": false
      },
      {
        "name": "Ith",
        "status": false
      }
    ],
    "arm": [
      "Cascos"
    ],
    "numberHole": "(3 huecos)",
    "holes": 3,
    "version": "Disponible a partir de la versión: 1.09",
    "features": [
      "75% defensa mejorada",
      "+30 defensa contra misiles",
      "+10 energía",
      "+10 vitalidad",
      "15% daño repercute en el Maná",
      "Daño mágico reducido en 3",
      "+33 Maná",
      "Daño reducido en 7",
      "+5 radio de luz"
    ]
  },
  {
    "title": "Rima",
    "runes": [
      {
        "name": "Shael",
        "status": false
      },
      {
        "name": "Eth",
        "status": false
      }
    ],
    "arm": [
      "Escudos"
    ],
    "numberHole": "(2 huecos)",
    "holes": 2,
    "version": "Disponible a partir de la versión: 1.09",
    "features": [
      "20% incrementada posibilidad de bloqueo",
      "40% velocidad de bloqueo mayor",
      "Todas las resistencias +25%",
      "Regenerar Maná 15%",
      "No puede ser congelado",
      "50% oro extra de los monstruos",
      "25% posibilidad de encontrar objetos mágicos"
    ]
  },
  {
    "title": "Silencio",
    "runes": [
      {
        "name": "Dol",
        "status": false
      },
      {
        "name": "Eld",
        "status": false
      },
      {
        "name": "Hel",
        "status": false
      },
      {
        "name": "Ist",
        "status": false
      },
      {
        "name": "Tir",
        "status": false
      },
      {
        "name": "Vex",
        "status": false
      }
    ],
    "arm": [
      "Armas"
    ],
    "numberHole": "(6 huecos)",
    "holes": 6,
    "version": "Disponible a partir de la versión: 1.09",
    "features": [
      "200% daño mejorado",
      "175% daño contra muertos vivientes",
      "Requerimientos -20%",
      "20% velocidad de ataque mayor",
      "+50 puntuación de ataque contra muertos vivientes",
      "+2 a todos los niveles de habilidad",
      "Todas las resistencias +75%",
      "20% recuperación tras impacto más rápida",
      "11% Maná robado por impacto",
      "El impacto hace que el monstruo huya 25%",
      "El impacto ciega al objetivo",
      "+2 al Maná tras cada muerte",
      "30% posibilidad de encontrar objetos mágicos"
    ]
  },
  {
    "title": "Humo",
    "runes": [
      {
        "name": "Nef",
        "status": false
      },
      {
        "name": "Lum",
        "status": false
      }
    ],
    "arm": [
      "Armadura"
    ],
    "numberHole": "(2 huecos)",
    "holes": 2,
    "version": "Disponible a partir de la versión: 1.09",
    "features": [
      "+75% defensa mejorada",
      "+280 defensa contra misiles",
      "Todas las resistencias +50%",
      "20% recuperación tras impacto más rápida",
      "Nivel 6 Debilitante (18 cargas)",
      "+10 energía",
      "-1 al radio de luz"
    ]
  },
  {
    "title": "Sigilo",
    "runes": [
      {
        "name": "Tal",
        "status": false
      },
      {
        "name": "Eth",
        "status": false
      }
    ],
    "arm": [
      "Armadura"
    ],
    "numberHole": "(2 huecos)",
    "holes": 2,
    "version": "Disponible a partir de la versión: 1.09",
    "features": [
      "Daño mágico reducido en 3",
      "+6 destreza",
      "+15 resistencia máxima",
      "Resistencia al veneno +30%",
      "Regenerar Maná 15%",
      "25% Correr/andar más rápido",
      "25% velocidad de lanzamiento mayor",
      "25% recuperación tras impacto más rápida"
    ]
  },
  {
    "title": "Acero",
    "runes": [
      {
        "name": "Tir",
        "status": false
      },
      {
        "name": "El",
        "status": false
      }
    ],
    "arm": [
      "Espadas",
      "Hachas",
      "Mazas"
    ],
    "numberHole": "(2 huecos)",
    "holes": 2,
    "version": "Disponible a partir de la versión: 1.09",
    "features": [
      "20% daño mejorado",
      "+3 al daño mínimo",
      "+3 al daño máximo",
      "+50 puntuación de ataque",
      "50% posibilidad heridas abiertas",
      "25% velocidad de ataque mayor",
      "+2 al Maná tras cada muerte",
      "+1 al radio de luz"
    ]
  },
  {
    "title": "Fuerza",
    "runes": [
      {
        "name": "Amn",
        "status": false
      },
      {
        "name": "Tir",
        "status": false
      }
    ],
    "arm": [
      "Armas cuerpo a cuerpo"
    ],
    "numberHole": "(2 huecos)",
    "holes": 2,
    "version": "Disponible a partir de la versión: 1.09",
    "features": [
      "35% daño mejorado",
      "25% posibilidad golpe triturador",
      "7% Vida robada por impacto",
      "+2 al Maná tras cada muerte",
      "+20 fuerza",
      "+10 vitalidad"
    ]
  },
  {
    "title": "Veneno",
    "runes": [
      {
        "name": "Tal",
        "status": false
      },
      {
        "name": "Dol",
        "status": false
      },
      {
        "name": "Mal",
        "status": false
      }
    ],
    "arm": [
      "Armas"
    ],
    "numberHole": "(3 huecos)",
    "holes": 3,
    "version": "Disponible a partir de la versión: 1.09",
    "features": [
      "El impacto hace que el monstruo huya 25%",
      "Evita la curación del monstruo",
      "Ignora la defensa del objetivo",
      "7% Maná robado por impacto",
      "Nivel 15 Explosión venenosa (27 cargas)",
      "Nivel 13 Veneno nova (11 cargas)",
      "+273 daño de veneno durante 6 seg."
    ]
  },
  {
    "title": "Riqueza",
    "runes": [
      {
        "name": "Lem",
        "status": false
      },
      {
        "name": "Ko",
        "status": false
      },
      {
        "name": "Tir",
        "status": false
      }
    ],
    "arm": [
      "Armadura"
    ],
    "numberHole": "(3 huecos)",
    "holes": 3,
    "version": "Disponible a partir de la versión: 1.09",
    "features": [
      "300% oro extra de los monstruos",
      "100% posibilidad de encontrar objetos mágicos",
      "+2 al Maná tras cada muerte",
      "+10 destreza"
    ]
  },
  {
    "title": "Blanco",
    "runes": [
      {
        "name": "Dol",
        "status": false
      },
      {
        "name": "Io",
        "status": false
      }
    ],
    "arm": [
      "Vara"
    ],
    "numberHole": "(2 huecos)",
    "holes": 2,
    "version": "Disponible a partir de la versión: 1.09",
    "features": [
      "El impacto hace que el monstruo huya 25%",
      "+10 vitalidad",
      "+3 a las habilidades de Veneno y hueso (Sólo Nigromante)",
      "+3 a Armadura ósea (Sólo Nigromante)",
      "+2 a Lanza ósea (Sólo Nigromante)",
      "+4 a Dominio de esqueletos (Sólo Nigromante)",
      "Daño mágico reducido en 4",
      "20% velocidad de lanzamiento mayor",
      "+13 Maná"
    ]
  },
  {
    "title": "Céfiro",
    "runes": [
      {
        "name": "Ort",
        "status": false
      },
      {
        "name": "Eth",
        "status": false
      }
    ],
    "arm": [
      "Armas a distancia"
    ],
    "numberHole": "(2 huecos)",
    "holes": 2,
    "version": "Disponible a partir de la versión: 1.09",
    "features": [
      "+33% daño mejorado",
      "+66 puntuación de ataque",
      "Añade 1-50 daño de relámpago",
      "-25% defensa del enemigo",
      "+25 defensa",
      "25% Correr/andar más rápido",
      "25% velocidad de ataque mayor",
      "7% posibilidad de lanzar hechizo nivel 1 Torbellino al golpear"
    ]
  },
  {
    "title": "Melodía",
    "runes": [
      {
        "name": "Shael",
        "status": false
      },
      {
        "name": "Ko",
        "status": false
      },
      {
        "name": "Nef",
        "status": false
      }
    ],
    "arm": [
      "Armas a distancia"
    ],
    "numberHole": "(3 huecos)",
    "holes": 3,
    "version": "Disponible a partir de la versión: 1.09",
    "features": [
      "+50% daño mejorado",
      "300% daño contra muertos vivientes",
      "+3 a las habilidades de Arco y ballesta (Sólo Amazona)",
      "+3 a Azote crítico (Sólo Amazona)",
      "+3 a Esquivar (Sólo Amazona)",
      "+3 a Misiles lentos (Sólo Amazona)",
      "20% incrementada velocidad de ataque",
      "+10 destreza",
      "El monstruo retrocede"
    ]
  },
  {
    "title": "Bestia",
    "runes": [
      {
        "name": "Ber",
        "status": false
      },
      {
        "name": "Tir",
        "status": false
      },
      {
        "name": "Um",
        "status": false
      },
      {
        "name": "Mal",
        "status": false
      },
      {
        "name": "Lum",
        "status": false
      }
    ],
    "arm": [
      "Hachas",
      "Cetros",
      "Martillos"
    ],
    "numberHole": "(5 huecos)",
    "holes": 5,
    "version": "Disponible a partir de la versión: 1.10",
    "features": [
      "Nivel 9 Fanatismo cuando está equipada",
      "+40% Velocidad de ataque aumentada",
      "+240-270% Daño mejorado (varía)",
      "20% oportunidad de golpe triturador",
      "25% oportunidad de heridas abiertas.",
      "+3 To Hombre oso",
      "+3 To Licantropia",
      "Previene la curación del mounstruo",
      "+25-40 a fuerza (varía)",
      "+10 a energía",
      "+2 al Maná por muerte.",
      "Invocar a oso Grizzly Nivel 13 (5 cargas)"
    ]
  },
  {
    "title": "Zarza",
    "runes": [
      {
        "name": "Ral",
        "status": false
      },
      {
        "name": "Ohm",
        "status": false
      },
      {
        "name": "Sur",
        "status": false
      },
      {
        "name": "Eth",
        "status": false
      }
    ],
    "arm": [
      "Armaduras"
    ],
    "numberHole": "(4 huecos)",
    "holes": 4,
    "version": "Disponible a partir de la versión: 1.10",
    "features": [
      "Nivel 15-21 aura de espinas cuando está equipada (varía)",
      "+50% recuperacíon de impacto más rápida",
      "+25-50% al daño de las habilidades de veneno (varía)",
      "+300 Defensa",
      "Incrementar Maná maximo 5%",
      "regenerar Maná + 15%",
      "+5% a resistencia máxima al frío",
      "Resistencia al fuego +30%",
      "Resistencia al veneno +100%",
      "+13 de Vida por muerte",
      "Nivel 13 invocar al espiritu de púas (33 cargas)"
    ]
  },
  {
    "title": "Aliento de los muertos",
    "runes": [
      {
        "name": "Vex",
        "status": false
      },
      {
        "name": "Hel",
        "status": false
      },
      {
        "name": "El",
        "status": false
      },
      {
        "name": "Eld",
        "status": false
      },
      {
        "name": "Zod",
        "status": false
      },
      {
        "name": "Eth",
        "status": false
      }
    ],
    "arm": [
      "Armas"
    ],
    "numberHole": "(6 huecos)",
    "holes": 6,
    "version": "Disponible a partir de la versión: 1.10",
    "features": [
      "50% Posibilidad de Lanzar el Nivel 20 Veneno Nova Cuando mates un Enemigo",
      "Indestructible",
      "+60% Velocidad de Ataque aumentada",
      "+350-400% Daño Mejorado (varia)",
      "+200% Daño a Muertos Vivientes",
      "-25% Defensa del Objetivo",
      "+50 a la Puntuación de Ataque",
      "+50 a la Puntuación de Ataque Muertos Vivientes",
      "7% maná Robado Por Impacto",
      "12-15% Vida Robada por Impacto (varia)",
      "Evita la Curación del Monstruo",
      "+30 a Todos los Atributos",
      "+1 al Radio de Luz",
      "Requisitos -20%"
    ]
  },
  {
    "title": "Llamada a las armas",
    "runes": [
      {
        "name": "Amn",
        "status": false
      },
      {
        "name": "Ral",
        "status": false
      },
      {
        "name": "Mal",
        "status": false
      },
      {
        "name": "Ist",
        "status": false
      },
      {
        "name": "Ohm",
        "status": false
      }
    ],
    "arm": [
      "Armas"
    ],
    "numberHole": "(5 huecos)",
    "holes": 5,
    "version": "Disponible a partir de la versión: 1.10",
    "features": [
      "+1 A todas las habilidades",
      "+40% Velocidad de ataque aumentada",
      "+200-240% Daño mejorado (varía)",
      "Añade 5-30 daño de fuego",
      "7% Vida robada por golpe",
      "+2-6 Battle Comand (varía)",
      "+1-6 Ordenes de batalla (varía)",
      "+1-4 Grito de guerra (varía)",
      "Previene la curación del mounstruo",
      "Regenerar Vida +12",
      "30% oportunidad de encontrar objeto mágico"
    ]
  },
  {
    "title": "Caos",
    "runes": [
      {
        "name": "Fal",
        "status": false
      },
      {
        "name": "Ohm",
        "status": false
      },
      {
        "name": "Um",
        "status": false
      }
    ],
    "arm": [
      "Garras"
    ],
    "numberHole": "(3 huecos)",
    "holes": 3,
    "version": "Disponible a partir de la versión: 1.10",
    "features": [
      "9% oportunidad de lanzar el Nivel 11 orbe helada por golpe",
      "11% oporunidad de lanzar el Nivel 9 de saeta cargada por golpe",
      "+35% Velocidad de ataque aumentada",
      "+290-340% Daño mejorado (varía)",
      "Añade 216-471 Daño mágico",
      "25% oportunidad de heridas abiertas",
      "+1 Torbellino",
      "+10 de fuerza",
      "+15 de Vida despues de matar a un demonio."
    ]
  },
  {
    "title": "Cadenas de honor",
    "runes": [
      {
        "name": "Dol",
        "status": false
      },
      {
        "name": "Um",
        "status": false
      },
      {
        "name": "Ber",
        "status": false
      },
      {
        "name": "Ist",
        "status": false
      }
    ],
    "arm": [
      "Armaduras"
    ],
    "numberHole": "(4 huecos)",
    "holes": 4,
    "version": "Disponible a partir de la versión: 1.10",
    "features": [
      "+2 a todas las habilidades",
      "+200% Daño a demonios",
      "+100% Daño a muertos vivientes",
      "8% Vida robada por golpe",
      "+70% defensa mejorada",
      "+20 a fuerza",
      "Regenerar Vida +7",
      "Todas las resistencias +65",
      "Daño reducido en 8%",
      "25% oportunidad de encontrar objeto mágico"
    ]
  },
  {
    "title": "Luna creciente",
    "runes": [
      {
        "name": "Shael",
        "status": false
      },
      {
        "name": "Um",
        "status": false
      },
      {
        "name": "Tir",
        "status": false
      }
    ],
    "arm": [
      "Hachas",
      "espadas",
      "lanzas"
    ],
    "numberHole": "(3 huecos)",
    "holes": 3,
    "version": "Disponible a partir de la versión: 1.10",
    "features": [
      "10% oportunidad de lanzar el Nivel 17 de cadena de relámpagos al golpear",
      "7% oportunidad de lanzar el Nivel 13 de campo estático al golpear",
      "+20% Velocidad de ataque aumentada",
      "+180-220% Daño mejorado (varía)",
      "Ignorar Defensa del Objetivo",
      "-35% a la resistencia a los rayos del enemigo",
      "25% oportunidad de heridas abiertas",
      "+9-11 absorbe el daño mágico",
      "+2 al Maná despues de cada muerte.",
      "Nivel 18 invocar al lobo espíritu (30 Cargas)"
    ]
  },
  {
    "title": "Delirio",
    "runes": [
      {
        "name": "Lem",
        "status": false
      },
      {
        "name": "Ist",
        "status": false
      },
      {
        "name": "Io",
        "status": false
      }
    ],
    "arm": [
      "Cascos"
    ],
    "numberHole": "(3 huecos)",
    "holes": 3,
    "version": "Disponible a partir de la versión: 1.10",
    "features": [
      "1% oportunidad de lanzar el Nivel 50 de Delirio al recibir golpe",
      "6% oportunidad de lanzar el Nivel 14 de rafaga de mente al recibir golpe",
      "14% oportunidad de lanzar el Nivel 13 de Terror al recibir golpe",
      "11% oportunidad de lanzar el Nivel 18 de confusión al golpear",
      "+2 a todas las habilidades",
      "+261 Defensa",
      "+10 Vitalidad",
      "50% oro extra de los monstruos",
      "25% posibilidad de conseguir un objeto mágico",
      "Nivel 17 de atracción (60 Cargas)"
    ]
  },
  {
    "title": "Fatalidad",
    "runes": [
      {
        "name": "Hel",
        "status": false
      },
      {
        "name": "Ohm",
        "status": false
      },
      {
        "name": "Um",
        "status": false
      },
      {
        "name": "Lo",
        "status": false
      },
      {
        "name": "Cham",
        "status": false
      }
    ],
    "arm": [
      "Hachas",
      "armas de guerra",
      "martillos"
    ],
    "numberHole": "(5 huecos)",
    "holes": 5,
    "version": "Disponible a partir de la versión: 1.10",
    "features": [
      "5% oportunidad de lanzar el Nivel 18 de Volcan al golpear.",
      "Nivel 12 de ola de frío sagrado cuando está equipado",
      "+2 a todos las habilidades",
      "+45% Velocidad de ataque aumentada",
      "330-370% Daño mejorado (varía)",
      "-(40-60)% a la resistencia del enemigo al frío (varía)",
      "20% azote mortal",
      "25% Oportunidad de heridas abiertas",
      "Previene la curación del monstruo",
      "Congela al objetivo",
      "Requisitos -20%"
    ]
  },
  {
    "title": "Enigma",
    "runes": [
      {
        "name": "Jah",
        "status": false
      },
      {
        "name": "Ith",
        "status": false
      },
      {
        "name": "Ber",
        "status": false
      }
    ],
    "arm": [
      "Armaduras"
    ],
    "numberHole": "(3 huecos)",
    "holes": 3,
    "version": "Disponible a partir de la versión: 1.10",
    "features": [
      "+2 a todas las habilidades",
      "+45% Andar/correr más rápido",
      "+1 a Teletransporte",
      "+750-775 Defensa (varía)",
      "+ (0.75 Por nivel del personaje) +1-74.25 a la fuerza (Basado en el nivel del personaje)",
      "Incrementa Vida máxima 5%",
      "Daño reducido en 8%",
      "+14 Vida después de cada muerte",
      "15% del daño repercute en el Maná",
      "+ (1 Por nivel del personaje) +1-99% oportunidad de encontrar objeto mágico (Basado en el nivel del personaje)"
    ]
  },
  {
    "title": "Eternidad",
    "runes": [
      {
        "name": "Amn",
        "status": false
      },
      {
        "name": "Ber",
        "status": false
      },
      {
        "name": "Ist",
        "status": false
      },
      {
        "name": "Sol",
        "status": false
      },
      {
        "name": "Sur",
        "status": false
      }
    ],
    "arm": [
      "Armas cuerpo a cuerpo"
    ],
    "numberHole": "(5 huecos)",
    "holes": 5,
    "version": "Disponible a partir de la versión: 1.10",
    "features": [
      "Indestructible",
      "+260-320% Daño mejorado (varía)",
      "+9 al daño mínimo",
      "7% Vida robada por golpe",
      "20% oportunidad de golpe triturador",
      "el impacto ciega al objetivo",
      "Relentiza al objetivo en 33%",
      "Regenerar Maná 16%",
      "Regenerar Vida +16",
      "No puede congelarse",
      "30% oportunidad de encontrar objeto mágico",
      "Nivel 8 Resurrección (88 Cargas)"
    ]
  },
  {
    "title": "Exilio",
    "runes": [
      {
        "name": "Vex",
        "status": false
      },
      {
        "name": "Ohm",
        "status": false
      },
      {
        "name": "Ist",
        "status": false
      },
      {
        "name": "Dol",
        "status": false
      }
    ],
    "arm": [
      "Escudos de paladín"
    ],
    "numberHole": "(4 huecos)",
    "holes": 4,
    "version": "Disponible a partir de la versión: 1.10",
    "features": [
      "15% oportunidad de lanzar el Nivel 5 de grifo de Vida al golpear",
      "Nivel 13-16 Desafío cuando está equipado (varía)",
      "+2 Auras ofensivas (solo Paladin)",
      "+30% velocidad de bloqueo mayor",
      "Congela al objetivo",
      "+220-260% Defensa mejorada (varía)",
      "Regenerara Vida +7",
      "+5% Resistencia máxima al frío",
      "+5% Resistencia máxima al fuego",
      "25% oportunidad de encontrar objeto mágico",
      "Repara 1 de Durabilidad en 4 Segundos"
    ]
  },
  {
    "title": "Hambruna",
    "runes": [
      {
        "name": "Fal",
        "status": false
      },
      {
        "name": "Ohm",
        "status": false
      },
      {
        "name": "Ort",
        "status": false
      },
      {
        "name": "Jah",
        "status": false
      }
    ],
    "arm": [
      "Hachas",
      "martillos"
    ],
    "numberHole": "(4 huecos)",
    "holes": 4,
    "version": "Disponible a partir de la versión: 1.10",
    "features": [
      "+30% Velocidad de ataque aumentada",
      "+270-320% Daño mejorado (varía)",
      "Ignorar defensa del objetivo",
      "Añade 180-200 Daño mágico",
      "Añade 50-200 Daño de fuego",
      "Añade 51-250 Daño de relámpago",
      "Añade 50-200 Daño de frío",
      "12% Vida robada por golpe",
      "Previene la curación del monstruo",
      "+10 de fuerza"
    ]
  },
  {
    "title": "Melancolía",
    "runes": [
      {
        "name": "Fal",
        "status": false
      },
      {
        "name": "Um",
        "status": false
      },
      {
        "name": "Pul",
        "status": false
      }
    ],
    "arm": [
      "Armaduras"
    ],
    "numberHole": "(3 huecos)",
    "holes": 3,
    "version": "Disponible a partir de la versión: 1.10",
    "features": [
      "15% oportunidad de lanzar Nivel 3 visión borrosa al recibir golpe",
      "+10% recuperación de impacto más rápida",
      "+170-230% defensa mejorada (varía)",
      "+10 de fuerza",
      "todas las resistencias +45",
      "Mitad de duración de congelamiento.",
      "5% daño recibido repercute en el Maná",
      "-3 al radio de luz"
    ]
  },
  {
    "title": "Mano justiciera",
    "runes": [
      {
        "name": "Sur",
        "status": false
      },
      {
        "name": "Cham",
        "status": false
      },
      {
        "name": "Amn",
        "status": false
      },
      {
        "name": "Lo",
        "status": false
      }
    ],
    "arm": [
      "Armas"
    ],
    "numberHole": "(4 huecos)",
    "holes": 4,
    "version": "Disponible a partir de la versión: 1.10",
    "features": [
      "100% oportunidad de lanzar el Nivel 36 de Ventisca al subir de nivel.",
      "100% oportunidad de lanzar el Nivel 48 de Meteoro al morir.",
      "Nivel 16 fuego sagrado cuando está equipado",
      "+33% Velocidad de ataque aumentada",
      "+280-330% Daño mejorado (varía)",
      "Ignorar defensa del objetivo",
      "7% Vida robada por golpe",
      "-20% resistencia al fuego del enemigo",
      "20% azote mortal",
      "El golpe ciega al objetivo",
      "Congela al objetivo"
    ]
  },
  {
    "title": "Corazón de Roble",
    "runes": [
      {
        "name": "Ko",
        "status": false
      },
      {
        "name": "Vex",
        "status": false
      },
      {
        "name": "Pul",
        "status": false
      },
      {
        "name": "Thul",
        "status": false
      }
    ],
    "arm": [
      "Mazas",
      "bastones"
    ],
    "numberHole": "(4 huecos)",
    "holes": 4,
    "version": "Disponible a partir de la versión: 1.10",
    "features": [
      "+3 a todos las habilidades",
      "+40% Velocidad de lanzamiento mayor",
      "+75% Daño a demonios",
      "+100 puntuación de ataque contra Demonios",
      "Añade 3-14 Daño de frío",
      "7% Maná robado por golpe",
      "+10 a la destreza",
      "Regenerar Vida +20",
      "Incrementar Maná máximo 15%",
      "Todas las resistencias +30-40 (varía)",
      "Nivel 4 savia de roble (25 Cargas)",
      "Nivel 14 Cuervo (60 Cargas)",
      "+50% Daño a muertos vivientes"
    ]
  },
  {
    "title": "Asesino real",
    "runes": [
      {
        "name": "Mal",
        "status": false
      },
      {
        "name": "Um",
        "status": false
      },
      {
        "name": "Gul",
        "status": false
      },
      {
        "name": "Fal",
        "status": false
      }
    ],
    "arm": [
      "Espadas",
      "Hachas"
    ],
    "numberHole": "(4 huecos)",
    "holes": 4,
    "version": "Disponible a partir de la versión: 1.10",
    "features": [
      "+30% Velocidad de ataque aumentada",
      "+230-270% Daño mejorado (Varía)",
      "-25% Defensa del objetivo",
      "20% bonificación a la puntuación de ataque",
      "33% oportunidad de golpe triturador",
      "50% oportunidad de heridas abiertas",
      "+1 a venganza",
      "Previene la curación del monstruo",
      "+10 a fuerza",
      "40% oro extra de los monstruos"
    ]
  },
  {
    "title": "Pasión",
    "runes": [
      {
        "name": "Dol",
        "status": false
      },
      {
        "name": "Ort",
        "status": false
      },
      {
        "name": "Eld",
        "status": false
      },
      {
        "name": "Lem",
        "status": false
      }
    ],
    "arm": [
      "Armas"
    ],
    "numberHole": "(4 huecos)",
    "holes": 4,
    "version": "Disponible a partir de la versión: 1.10",
    "features": [
      "+25% Velocidad de ataque aumentada",
      "+160-210% Daño mejorado (varía)",
      "50-80% Bonificación a puntuación de ataque",
      "+75% Daño a los muertos vivientes",
      "+50 Puntuación de ataque contra muertos vivientes",
      "Añade 1-50 daño de relámpago",
      "+1 a Frenético",
      "+1 a Ahinco",
      "Impacto ciega al objetivo +10",
      "Impacto hace que el monstruo huya 25%",
      "75% Oro extra de los monstruos",
      "Nivel 3 Corazón lobezno (12 Cargas)"
    ]
  },
  {
    "title": "Santuario",
    "runes": [
      {
        "name": "Ko",
        "status": false
      },
      {
        "name": "Ko",
        "status": false
      },
      {
        "name": "Mal",
        "status": false
      }
    ],
    "arm": [
      "Escudos"
    ],
    "numberHole": "(3 huecos)",
    "holes": 3,
    "version": "Disponible a partir de la versión: 1.10",
    "features": [
      "+20% recuperación de impacto más rápida",
      "+20% Velocidad de bloqueo",
      "20% Oportunidad de bloqueo",
      "+130-160% defensa perfeccionada (varía)",
      "+250 defensa contra misiles",
      "+20 a la destreza",
      "Todas las resistencias +50-70 varía",
      "Daño mágico reducido en 7",
      "Nivel 12 Misiles lentos (60 cargas) "
    ]
  },
  {
    "title": "Roca",
    "runes": [
      {
        "name": "Shael",
        "status": false
      },
      {
        "name": "Um",
        "status": false
      },
      {
        "name": "Pul",
        "status": false
      },
      {
        "name": "Lum",
        "status": false
      }
    ],
    "arm": [
      "Armaduras"
    ],
    "numberHole": "(4 huecos)",
    "holes": 4,
    "version": "Disponible a partir de la versión: 1.10",
    "features": [
      "+60% recuperación de impacto más rápida.",
      "+250-290% Defensa mejorada (varía)",
      "+300 Defensa vs. proyectiles",
      "+16 de fuerza",
      "+16 a vitalidad",
      "+10 a energía",
      "Todas las resistencias +15",
      "Nivel 16 Roca líquida (80 Cargas)",
      "Nivel 16 Golem de arcilla (16 Cargas)"
    ]
  },
  {
    "title": "Coacción",
    "runes": [
      {
        "name": "Shael",
        "status": false
      },
      {
        "name": "Um",
        "status": false
      },
      {
        "name": "Thul",
        "status": false
      }
    ],
    "arm": [
      "Armaduras"
    ],
    "numberHole": "(3 huecos)",
    "holes": 3,
    "version": "Disponible a partir de la versión: 1.10 (Sólo disponible en los reinos de Battle.net)",
    "features": [
      "+40% Recuperación de impacto más rápida",
      "+10-20% Daño mejorado",
      "Añade 37-133 Daño de frio",
      "15% Posibilidad de golpe triturador",
      "33% Posibilidad de heridas abiertas",
      "+150-200% Defensa mejorada (varia)",
      "-20% Drenaje de resistencia mas lento",
      "Resistencia al frío +45%",
      "Resistencia al rayo +15%",
      "Resistencia al fuego +15%",
      "Resistencia al veneno +15%"
    ]
  },
  {
    "title": "Prudencia",
    "runes": [
      {
        "name": "Mal",
        "status": false
      },
      {
        "name": "Tir",
        "status": false
      }
    ],
    "arm": [
      "Armaduras"
    ],
    "numberHole": "(2 huecos)",
    "holes": 2,
    "version": "Disponible a partir de la versión: 1.10 (Sólo disponible en los reinos de Battle.net)",
    "features": [
      "+25% recuperación de impacto mas rápida",
      "+140-170% defensa perfeccionada (varia)",
      "Todas las resistencias +25-35 (varia)",
      "Daño reducido en 3",
      "Daño magico reducido en 17",
      "+2 al maná tras cada muerte",
      "+1 al radio de luz",
      "Repara 1 de durabilidad cada 4 segundos"
    ]
  },
  {
    "title": "Esplendor",
    "runes": [
      {
        "name": "Eth",
        "status": false
      },
      {
        "name": "Lum",
        "status": false
      }
    ],
    "arm": [
      "Escudos"
    ],
    "numberHole": "(2 huecos)",
    "holes": 2,
    "version": "Disponible a partir de la versión: 1.10 (Sólo disponible en los reinos de Battle.net)",
    "features": [
      "+1 a todas las habilidades",
      "+10% velocidad de lanzamiento mayor",
      "+20% velocidad de bloqueo mayor",
      "+60-100% defensa perfeccionada (varia)",
      "+10 de energía",
      "Regenerar maná 15%",
      "50% oro extra de los monstruos",
      "20% de posibilidad de conseguir un objeto mágico",
      "+3 al radio de luz"
    ]
  },
  {
    "title": "Viento",
    "runes": [
      {
        "name": "Sur",
        "status": false
      },
      {
        "name": "El",
        "status": false
      }
    ],
    "arm": [
      "Armas cuerpo a cuerpo"
    ],
    "numberHole": "(2 huecos)",
    "holes": 2,
    "version": "Disponible a partir de la versión: 1.10 (Sólo disponible en los reinos de Battle.net)",
    "features": [
      "10% posibilidad de lanzar nivel 9 Tornado al golpear",
      "+20% correr/andar más rápido",
      "+40% velocidad de ataque aumentada",
      "+15% recuperación de impacto más rápida",
      "+120-160% daño mejorado (varia)",
      "-50% defensa del objetivo",
      "+53 puntuación de ataque",
      "El impacto ciega al objetivo",
      "+1 al radio de luz",
      "Nivel 13 torbellino (127 cargas) - habilidad de Druida"
    ]
  },
  {
    "title": "Tizón",
    "runes": [
      {
        "name": "Jah",
        "status": false
      },
      {
        "name": "Lo",
        "status": false
      },
      {
        "name": "Mal",
        "status": false
      },
      {
        "name": "Gul",
        "status": false
      }
    ],
    "arm": [
      "Armas a distancia"
    ],
    "numberHole": "(4 huecos)",
    "holes": 4,
    "version": "Disponible a partir de la versión: 1.10 (Sólo personajes de jerarquía)",
    "features": [
      "35% posibilidad de lanzar el nivel 14 Aumento de daños al ser golpeado",
      "100% posibilidades de lanzar nivel 18 Lanza ósea al golpear",
      "Dispara flechas o saetas explosivas",
      "260-340% daño mejorado (varia)",
      "Ignorar defensa del objetivo",
      "20% de bonificación en la puntuación de ataque",
      "280-330% daño a los demonios (varia)",
      "20% azote mortal",
      "Evita la curación del monstruo",
      "El objetivo retrocede"
    ]
  },
  {
    "title": "Muerte",
    "runes": [
      {
        "name": "Hel",
        "status": false
      },
      {
        "name": "El",
        "status": false
      },
      {
        "name": "Vex",
        "status": false
      },
      {
        "name": "Ort",
        "status": false
      },
      {
        "name": "Gul",
        "status": false
      }
    ],
    "arm": [
      "Espadas",
      "Hachas"
    ],
    "numberHole": "(5 huecos)",
    "holes": 5,
    "version": "Disponible a partir de la versión: 1.10 (Sólo personajes de jerarquía)",
    "features": [
      "100% posibilidades de lanzar nivel 42 Cadena de relámpagos al morir",
      "25% posibilidades de lanzar nivel 18 Punta glacial al atacar",
      "Indestructible",
      "+300-385% daño mejorado",
      "+20% bonificación en el ataque",
      "+50 puntuación de ataque",
      "Añade 1-50 de daño de relámpago",
      "7% Maná robado por impacto",
      "50% posibilidades de golpe triturador",
      "+(0.5 por nivel de personaje) +0.5-50% Azote mortal (Basado en el nivel del personaje)",
      "+1 al radio de luz",
      "Nivel 22 de Golem de sangre (15 cargas)",
      "Requisitos -20%"
    ]
  },
  {
    "title": "Destrucción",
    "runes": [
      {
        "name": "Vex",
        "status": false
      },
      {
        "name": "Lo",
        "status": false
      },
      {
        "name": "Ber",
        "status": false
      },
      {
        "name": "Jah",
        "status": false
      },
      {
        "name": "Ko",
        "status": false
      }
    ],
    "arm": [
      "Armas de guerra",
      "Espadas"
    ],
    "numberHole": "(5 huecos)",
    "holes": 5,
    "version": "Disponible a partir de la versión: 1.10 (Sólo personajes de jerarquía)",
    "features": [
      "23% posibilidades de lanzar el nivel 12 Volcan al golpear",
      "5% posibilidades de lanzar el nivel 23 Roca líquida al golpear",
      "100% de lanzar nivel 45 Meteoro al morir",
      "15% posibilidades de lanzar el nivel 22 nova al atacar",
      "+350% daño mejorado",
      "Ignorar defensa del objetivo",
      "Añade 100-180 de daño de magia",
      "7% maná robado por impacto",
      "20% posibilidad de golpe triturador",
      "20% azote mortal",
      "Evita la curación del monstruo",
      "+10 de destreza"
    ]
  },
  {
    "title": "Dragón",
    "runes": [
      {
        "name": "Sur",
        "status": false
      },
      {
        "name": "Lo",
        "status": false
      },
      {
        "name": "Sol",
        "status": false
      }
    ],
    "arm": [
      "Armaduras",
      "Escudos"
    ],
    "numberHole": "(3 huecos)",
    "holes": 3,
    "version": "Disponible a partir de la versión: 1.10 (Sólo personajes de jerarquía)",
    "features": [
      "20% de posibilidades de lanzar el nivel 18 Veneno al ser golpeado",
      "12% de posibilidades de lanzar el nivel 15 Hidra al golpear",
      "Nivel 14 de aura Fuego sagrado cuando está equipado",
      "+360 defensa",
      "+230 defensa contra misiles",
      "+3-5 a todos los atributos (varia)",
      "+0.375-37.125 de fuerza (Basado en el nivel del personaje)",
      "Aumenta el maná máximo 5% (Sólo en armaduras)",
      "+50 de maná (Sólo en escudos)",
      "+5% a la resistencia máxima a los rayos",
      "Daño reducido en 7"
    ]
  },
  {
    "title": "Sueño",
    "runes": [
      {
        "name": "Io",
        "status": false
      },
      {
        "name": "Jah",
        "status": false
      },
      {
        "name": "Pul",
        "status": false
      }
    ],
    "arm": [
      "Cascos",
      "Escudos"
    ],
    "numberHole": "(3 huecos)",
    "holes": 3,
    "version": "Disponible a partir de la versión: 1.10 (Sólo personajes de jerarquía)",
    "features": [
      "10% posibilidades de lanzar nivel 15 Confusion al recibir un azote",
      "Nivel 15 Aura Golpe sagrado cuando está equipado",
      "+20-30% recuperación tras impacto más rápida (varía)",
      "+30% defensa perfeccionada",
      "+150-220 defensa (varía)",
      "+10 de vitalidad",
      "Aumenta la vida máxima 5% (sólo en cascos)",
      "+50 vida (sólo en escudos)",
      "+(0.625 por nivel de personaje) +0.625-61.875 de maná",
      "Todas las resistencias +5-20 (varía)",
      "+12-25% mas posibilidades de conseguir un objeto mágico (varía)"
    ]
  },
  {
    "title": "Filo",
    "runes": [
      {
        "name": "Tir",
        "status": false
      },
      {
        "name": "Tal",
        "status": false
      },
      {
        "name": "Amn",
        "status": false
      }
    ],
    "arm": [
      "Armas a distancia"
    ],
    "numberHole": "(3 huecos)",
    "holes": 3,
    "version": "Disponible a partir de la versión: 1.10 (Sólo personajes de jerarquía)",
    "features": [
      "Nivel 15 Aura de espinas cuando está equipado",
      "+35% velocidad de ataque incrementada",
      "+320-380% daño a demonios (varía)",
      "+280% daño a muertos vivientes",
      "+75 daño de veneno durante 5 segundos",
      "7% vida robada por impacto",
      "Evita la curación del monstruo",
      "+5-10 a todos los atributos (varía)",
      "+2 de maná tras cada muerte",
      "Reduce el precio de los vendedores en un 15%"
    ]
  },
  {
    "title": "Fe",
    "runes": [
      {
        "name": "Ohm",
        "status": false
      },
      {
        "name": "Jah",
        "status": false
      },
      {
        "name": "Lem",
        "status": false
      },
      {
        "name": "Eld",
        "status": false
      }
    ],
    "arm": [
      "Armas a distancia"
    ],
    "numberHole": "(4 huecos)",
    "holes": 4,
    "version": "Disponible a partir de la versión: 1.10 (Sólo personajes de jerarquía)",
    "features": [
      "Nivel 12-15 Aura de Fanatismo cuando está equipada (varía)",
      "+1-2 a todas las habilidades (varia)",
      "+330% daño mejorado",
      "Ignora la defensa del objetivo",
      "300% bonificación a la puntuación de ataque",
      "+75% daño a muertos vivientes",
      "+50 puntuación de ataque contra los muertos vivientes",
      "Todas las resistencias +15",
      "10% Reanimarse como retornado",
      "75% oro extra de los monstruos"
    ]
  },
  {
    "title": "Fortaleza (armas)",
    "runes": [
      {
        "name": "El",
        "status": false
      },
      {
        "name": "Sol",
        "status": false
      },
      {
        "name": "Dol",
        "status": false
      },
      {
        "name": "Lo",
        "status": false
      }
    ],
    "arm": [
      "Armas"
    ],
    "numberHole": "(4 huecos)",
    "holes": 4,
    "version": "Disponible a partir de la versión: 1.10 (Sólo personajes de jerarquía)",
    "features": [
      "20% de Posibilidades de Lanzar el Nivel 15 Armadura Gélida al recibir un Azote",
      "+25% Velocidad de Lanzamiento Mayor",
      "+300% Daño Mejorado",
      "+9 al Daño Mínimo",
      "+50 de Puntuación de Ataque",
      "+20% Azote Mortal",
      "El Impacto hace que el Monstruo Huya 25%",
      "+200% Defensa Perfeccionada",
      "+ (1-1.5)-(99-148.5) vida (Basado en el nivel del personaje)(Varia)",
      "Todas las resistencias +25-30(Varia)",
      "12% el Daño Infligido Repercute en el Maná",
      "+1 al Radio de Luz "
    ]
  },
  {
    "title": "Fortaleza (armadura)",
    "runes": [
      {
        "name": "El",
        "status": false
      },
      {
        "name": "Sol",
        "status": false
      },
      {
        "name": "Dol",
        "status": false
      },
      {
        "name": "Lo",
        "status": false
      }
    ],
    "arm": [
      "Armadura"
    ],
    "numberHole": "(4 huecos)",
    "holes": 4,
    "version": "Disponible a partir de la versión: 1.10 (Sólo personajes de jerarquía)",
    "features": [
      "20% posibilidad de lanzar nivel 15 Armadura gélida al ser golpeado",
      "+25% velocidad de lanzamiento mayor",
      "+300% daño mejorado",
      "+200% defensa mejorada",
      "+15 defensa",
      "+(1-1.5)-(99-148.5) vida (Basado en el nivel del personaje)(Varia)",
      "Repostar vida +7",
      "+5% a la resistencia máxima a los rayos",
      "Todas las resistencias +25-30 (varia)",
      "Daño reducido en 7",
      "12% daño recibido repercute en el maná",
      "+1 al radio de luz "
    ]
  },
  {
    "title": "Dolor",
    "runes": [
      {
        "name": "Eth",
        "status": false
      },
      {
        "name": "Tir",
        "status": false
      },
      {
        "name": "Lo",
        "status": false
      },
      {
        "name": "Mal",
        "status": false
      },
      {
        "name": "Ral",
        "status": false
      }
    ],
    "arm": [
      "Espadas",
      "Hachas"
    ],
    "numberHole": "(5 huecos)",
    "holes": 5,
    "version": "Disponible a partir de la versión: 1.10 (Sólo personajes de jerarquía)",
    "features": [
      "35% posibilidad de lanzar nivel 15 Veneno al golpear",
      "+30-40% velocidad de ataque incrementada",
      "Daño +340-400 (varia)",
      "Ignora la defensa del objetivo",
      "-25% defensa del objetivo",
      "+(1.875 por nivel de personaje)% daño a demonios (Basado en el nivel del personaje)",
      "Añade 5-30 daño de fuego",
      "-20-25% a la resistencia al veneno del enemigo (varia)",
      "20% azote mortal",
      "Evita la curación del monstruo",
      "+2 al maná tras cada muerte",
      "+11 vida tras cada muerte"
    ]
  },
  {
    "title": "Armonía",
    "runes": [
      {
        "name": "Tir",
        "status": false
      },
      {
        "name": "Ith",
        "status": false
      },
      {
        "name": "Sol",
        "status": false
      },
      {
        "name": "Ko",
        "status": false
      }
    ],
    "arm": [
      "Armas a distancia"
    ],
    "numberHole": "(4 huecos)",
    "holes": 4,
    "version": "Disponible a partir de la versión: 1.10 (Sólo personajes de jerarquía)",
    "features": [
      "Nivel 10 Aura Vigor cuando está equipada",
      "+200-275% daño mejorado (varía)",
      "+9 al daño mínimo",
      "+9 al daño máximo",
      "Añade 55-160 daño de relámpago",
      "Añade 55-160 daño de fuego",
      "Añade 55-160 daño de frío",
      "+2-6 a Valquíria (varía)",
      "+10 destreza",
      "Regenerar maná 20%",
      "+2 a maná tras cada muerte",
      "+2 al radio de luz",
      "Nivel 20 Resurrección (25 cargas)"
    ]
  },
  {
    "title": "Hielo",
    "runes": [
      {
        "name": "Amn",
        "status": false
      },
      {
        "name": "Shael",
        "status": false
      },
      {
        "name": "Jah",
        "status": false
      },
      {
        "name": "Lo",
        "status": false
      }
    ],
    "arm": [
      "Armas a distancia"
    ],
    "numberHole": "(4 huecos)",
    "holes": 4,
    "version": "Disponible a partir de la versión: 1.10 (Sólo personajes de jerarquía)",
    "features": [
      "100% posibilidad de lanzar nivel 40 Ventisca al subir de nivel",
      "25% posibilidad de lanzar nivel 22 Nova de escarcha al golpear",
      "Nivel 18 Aura Ola de frío sagrada cuando está equipado",
      "+20% velocidad de ataque incrementada",
      "+140-210% daño mejorado (varía)",
      "Ignora la defensa del objetivo",
      "+25-30% daño en Habilidades de frío",
      "-20% a la resistencia de frío del enemigo",
      "7% vida robada por impacto",
      "20% azote mortal",
      "3.125-309.375 oro extra de los monstruos (Basado en el nivel del personaje)"
    ]
  },
  {
    "title": "Infinito",
    "runes": [
      {
        "name": "Ber",
        "status": false
      },
      {
        "name": "Mal",
        "status": false
      },
      {
        "name": "Ber",
        "status": false
      },
      {
        "name": "Ist",
        "status": false
      }
    ],
    "arm": [
      "Armas de guerra"
    ],
    "numberHole": "(4 huecos)",
    "holes": 4,
    "version": "Disponible a partir de la versión: 1.10 (Sólo personajes de jerarquía)",
    "features": [
      "50% posibilidad de lanzar nivel 20 Cadena de relámpagos cuando matas a un enemigo",
      "Nivel 12 Aura de Convicción cuando está equipado",
      "+35% correr/andar más rápido",
      "+255-325% daño mejorado (varía)",
      "-(45-55)% a la resistencia de rayos del enemigo (varía)",
      "40% posibilidad de golpe triturador",
      "Evita la curación del monstruo",
      "0.5-49.5 vitalidad (Basado en el nivel del personaje)",
      "30% posibilidad de encontrar objetos mágicos",
      "Nivel 21 Armadura de ciclón (30 cargas)"
    ]
  },
  {
    "title": "Perspicacia",
    "runes": [
      {
        "name": "Ral",
        "status": false
      },
      {
        "name": "Tir",
        "status": false
      },
      {
        "name": "Tal",
        "status": false
      },
      {
        "name": "Sol",
        "status": false
      }
    ],
    "arm": [
      "Armas de guerra",
      "Bastones"
    ],
    "numberHole": "(4 huecos)",
    "holes": 4,
    "version": "Disponible a partir de la versión: 1.10 (Sólo personajes de jerarquía)",
    "features": [
      "Nivel 12-17 Aura Meditación cuando está equipado (varía)",
      "+35% velocidad de lanzamiento mayor",
      "+200-260% daño mejorado (varía)",
      "+9 al daño mínimo",
      "180-250% bonificación a la puntuación de ataque (varía)",
      "Añade 5-30 daño de fuego",
      "+75 daño de veneno durante 5 segundos",
      "+1-6 golpe crítico",
      "+5 a todos los atributos",
      "+2 al maná tras cada muerte",
      "23% posibilidad de conseguir objetos mágicos"
    ]
  },
  {
    "title": "Último deseo",
    "runes": [
      {
        "name": "Jah",
        "status": false
      },
      {
        "name": "Mal",
        "status": false
      },
      {
        "name": "Jah",
        "status": false
      },
      {
        "name": "Sur",
        "status": false
      },
      {
        "name": "Jah",
        "status": false
      },
      {
        "name": "Ber",
        "status": false
      }
    ],
    "arm": [
      "Espadas",
      "Mazas",
      "Hachas"
    ],
    "numberHole": "(6 huecos)",
    "holes": 6,
    "version": "Disponible a partir de la versión: 1.10 (Sólo personajes de jerarquía)",
    "features": [
      "6% posibilidad de lanzar nivel 11 Fundido al ser golpeado",
      "10% posibilidad de lanzar nivel 18 Grifo de la vida al golpear",
      "20% posibilidad de lanzar nivel 20 Saeta cargada al atacar",
      "Nivel 17 Aura Fuerza cuando está equipado",
      "+330-375% daño mejorado (varía)",
      "Ignora la defensa del enemigo",
      "60-70% posibilidad de golpe triturador (varía)",
      "Evita la curación del monstruo",
      "El impacto ciega al objetivo",
      "(0.5 por nivel)% posibilidad de conseguir un objeto mágico (Basado en el nivel del personaje)"
    ]
  },
  {
    "title": "Jurista",
    "runes": [
      {
        "name": "Amn",
        "status": false
      },
      {
        "name": "Lem",
        "status": false
      },
      {
        "name": "Ko",
        "status": false
      }
    ],
    "arm": [
      "Espadas",
      "Mazas",
      "Cetros"
    ],
    "numberHole": "(3 huecos)",
    "holes": 3,
    "version": "Disponible a partir de la versión: 1.10 (Sólo personajes de jerarquía)",
    "features": [
      "20% posibilidad de lanzar nivel 15 Decrepitación al golpear",
      "Nivel 18 Aura Santuario cuando está equipado",
      "-50% defensa del objetivo",
      "Añade 150-210 daño de fuego",
      "Añade 130-180 daño de frío",
      "7% vida robada por impacto",
      "Matar monstruos",
      "+200-250 defensa contra misiles (varía)",
      "+10 destreza",
      "75% oro extra de los monstruos"
    ]
  },
  {
    "title": "Juramento",
    "runes": [
      {
        "name": "Shael",
        "status": false
      },
      {
        "name": "Pul",
        "status": false
      },
      {
        "name": "Mal",
        "status": false
      },
      {
        "name": "Lum",
        "status": false
      }
    ],
    "arm": [
      "Espadas",
      "Hachas",
      "Mazas"
    ],
    "numberHole": "(4 huecos)",
    "holes": 4,
    "version": "Disponible a partir de la versión: 1.10 (Sólo personajes de jerarquía)",
    "features": [
      "30% posibilidad de lanzar nivel 20 Espíritu de hueso al golpear",
      "Indestructible",
      "+50% velocidad de ataque incrementada",
      "+210-340% daño mejorado (varía)",
      "+75% daño a demonios",
      "+100 puntuación de ataque contra demonios",
      "Evita la curación del monstruo",
      "+10 energía",
      "+10-15 absorción de magia (varía)",
      "Nivel 16 Corazón lobezno (20 cargas)",
      "Nivel 17 Gólem de hierro (14 cargas)"
    ]
  },
  {
    "title": "Obediencia",
    "runes": [
      {
        "name": "Hel",
        "status": false
      },
      {
        "name": "Ko",
        "status": false
      },
      {
        "name": "Thul",
        "status": false
      },
      {
        "name": "Eth",
        "status": false
      },
      {
        "name": "Fal",
        "status": false
      }
    ],
    "arm": [
      "Armas de guerra"
    ],
    "numberHole": "(5 huecos)",
    "holes": 5,
    "version": "Disponible a partir de la versión: 1.10 (Sólo personajes de jerarquía)",
    "features": [
      "30% posibilidad de lanzar nivel 21 Encantamiento cuando matas a un enemigo",
      "40% recuperación tras impacto más rápida",
      "+370% daño mejorado",
      "-25% defensa del objetivo",
      "Añade 3-14 daño de frío",
      "-25% a la resistencia de fuego del enemigo",
      "40% posibilidad de golpe triturador",
      "+200-300 defensa (varía)",
      "+10 fuerza",
      "+10 destreza",
      "Todas las resistencias +20-30 (varía)",
      "Requerimientos -20%"
    ]
  },
  {
    "title": "Fénix",
    "runes": [
      {
        "name": "Vex",
        "status": false
      },
      {
        "name": "Vex",
        "status": false
      },
      {
        "name": "Lo",
        "status": false
      },
      {
        "name": "Jah",
        "status": false
      }
    ],
    "arm": [
      "Armas",
      "Escudos"
    ],
    "numberHole": "(4 huecos)",
    "holes": 4,
    "version": "Disponible a partir de la versión: 1.10 (Sólo personajes de jerarquía)",
    "features": [
      "100% posibilidad de lanzar nivel 40 Llamarada cuando subes de nivel",
      "40% posibilidad de lanzar nivel 22 Tormenta de fuego al golpear",
      "Nivel 10 - 15 Aura Redención cuando está equipado (varía)",
      "+350-400% daño mejorado (varía)",
      "-28% a la resistencia al fuego del enemigo",
      "+350-400 defensa contra misiles (varía)",
      "+50 vida",
      "+5% a la resistencia máxima contra rayos",
      "+10% a la resistencia máxima contra fuego",
      "+15-21 absorción de fuego (varía)"
    ]
  },
  {
    "title": "Orgullo",
    "runes": [
      {
        "name": "Cham",
        "status": false
      },
      {
        "name": "Sur",
        "status": false
      },
      {
        "name": "Io",
        "status": false
      },
      {
        "name": "Lo",
        "status": false
      }
    ],
    "arm": [
      "Armas de guerra"
    ],
    "numberHole": "(4 huecos)",
    "holes": 4,
    "version": "Disponible a partir de la versión: 1.10 (Sólo personajes de jerarquía)",
    "features": [
      "25% posibilidad de lanzar nivel 17 Muro de fuego al ser golpeado",
      "Nivel 16-20 Aura Concentración cuando está equipado",
      "260-300% bonificación a la puntuación de ataque (varía)",
      "+1-99% daño a demonios (Basado en el nivel del personaje)",
      "Añade 50-280 daño de rayos",
      "20% azote mortal",
      "El impacto ciega al objetivo",
      "Congela al objetivo +3",
      "+10 vitalidad",
      "Repostar vida +8",
      "1.875-185.625% oro extra de los monstruos (Basado en el nivel del personaje)"
    ]
  },
  {
    "title": "Grieta",
    "runes": [
      {
        "name": "Hel",
        "status": false
      },
      {
        "name": "Ko",
        "status": false
      },
      {
        "name": "Lem",
        "status": false
      },
      {
        "name": "Gul",
        "status": false
      }
    ],
    "arm": [
      "Armas de guerra",
      "Cetros"
    ],
    "numberHole": "(4 huecos)",
    "holes": 4,
    "version": "Disponible a partir de la versión: 1.10 (Sólo personajes de jerarquía)",
    "features": [
      "20% posibilidad de lanzar nivel 16 Tornado al golpear",
      "16% posibilidad de lanzar nivel 21 Orbe helada al atacar",
      "20% bonificación de puntuación de ataque",
      "Añade 160-250 daño mágico",
      "Añade 60-180 daño de fuego",
      "+5-10 a todas las estadísticas (varía)",
      "38% daño repercute en el maná",
      "75% oro extra de los monstruos",
      "Nivel 15 Doncella de hierro (40 cargas)",
      "Requerimientos -20%"
    ]
  },
  {
    "title": "Espíritu (espadas)",
    "runes": [
      {
        "name": "Tal",
        "status": false
      },
      {
        "name": "Thul",
        "status": false
      },
      {
        "name": "Ort",
        "status": false
      },
      {
        "name": "Amn",
        "status": false
      }
    ],
    "arm": [
      "Espadas"
    ],
    "numberHole": "(4 huecos)",
    "holes": 4,
    "version": "Disponible a partir de la versión: 1.10 (Sólo personajes de jerarquía)",
    "features": [
      "+2 a todas las habilidades",
      "+25-35% velocidad de lanzamiento mayor (varía)",
      "+55% recuperación tras impacto más rápida",
      "Añade 1-50 daño de rayos",
      "Añade 3-14 daño de frío",
      "+75 daño de veneno durante 5 segundos",
      "7% vida robada por impacto",
      "+250 defensa contra misiles",
      "+22 vitalidad",
      "+89-112 maná (varía)",
      "+3-8 absorción de magia (varía)"
    ]
  },
  {
    "title": "Espíritu (escudos)",
    "runes": [
      {
        "name": "Tal",
        "status": false
      },
      {
        "name": "Thul",
        "status": false
      },
      {
        "name": "Ort",
        "status": false
      },
      {
        "name": "Amn",
        "status": false
      }
    ],
    "arm": [
      "Escudos"
    ],
    "numberHole": "(4 huecos)",
    "holes": 4,
    "version": "Disponible a partir de la versión: 1.10 (Sólo personajes de jerarquía)",
    "features": [
      "+2 a todas las habilidades",
      "+25-35% velocidad de lanzamiento mayor (varía)",
      "+55% recuperación tras impacto más rápida",
      "+250 defensa contra misiles",
      "+22 vitalidad",
      "+89-112 maná (varía)",
      "Resistencia al frío +35%",
      "Resistencia a los rayos +35%",
      "Resistencia al veneno +35%",
      "+3-8 absorción de magia (varía)",
      "El atacante recibe el daño de 14"
    ]
  },
  {
    "title": "Voz de la razón",
    "runes": [
      {
        "name": "Lem",
        "status": false
      },
      {
        "name": "Ko",
        "status": false
      },
      {
        "name": "El",
        "status": false
      },
      {
        "name": "Eld",
        "status": false
      }
    ],
    "arm": [
      "Espadas",
      "Mazas"
    ],
    "numberHole": "(4 huecos)",
    "holes": 4,
    "version": "Disponible a partir de la versión: 1.10 (Sólo personajes de jerarquía)",
    "features": [
      "15% posibilidad de lanzar nivel 13 Orbe helada al golpear",
      "18% posibilidad de lanza nivel 20 Ráfaga de hielo al golpear",
      "+50 puntuación de ataque",
      "+220-350% daño a demonios",
      "+280-300% daño a muertos vivientes",
      "+50 a puntuación de ataque contra muertos vivientes",
      "Añade 100-220 daño de frío",
      "-24% a la resistencia al frío del enemigo",
      "+10 destreza",
      "No puede ser congelado",
      "75% oro extra de los monstruos",
      "+1 al radio de luz"
    ]
  },
  {
    "title": "Ira",
    "runes": [
      {
        "name": "Pul",
        "status": false
      },
      {
        "name": "Lum",
        "status": false
      },
      {
        "name": "Ber",
        "status": false
      },
      {
        "name": "Mal",
        "status": false
      }
    ],
    "arm": [
      "Armas a distancia"
    ],
    "numberHole": "(4 huecos)",
    "holes": 4,
    "version": "Disponible a partir de la versión: 1.10 (Sólo personajes de jerarquía)",
    "features": [
      "30% posibilidad de lanzar nivel 1 Decrepitación al golpear",
      "5% posibilidad de lanzar nivel 10 Grifo de la vida al golpear",
      "+375% daño a demonios",
      "+100 puntuación de ataque contra demonios",
      "+250-300% daño a muertos vivientes (varía)",
      "Añade 85-120 daño mágico",
      "Añade 41-240 daño de rayos",
      "20% posibilidad de golpe triturador",
      "Evita la curación del monstruo",
      "+10 energía",
      "No puede ser congelado"
    ]
  },
  {
    "title": "Hueso",
    "runes": [
      {
        "name": "Sol",
        "status": false
      },
      {
        "name": "Um",
        "status": false
      },
      {
        "name": "Um",
        "status": false
      }
    ],
    "arm": [
      "Armadura"
    ],
    "numberHole": "(3 huecos)",
    "holes": 3,
    "version": "Disponible a partir de la versión: 1.11",
    "features": [
      "15% posibilidad de lanzar nivel 10 Armadura de hueso al ser golpeado",
      "15% posibilidad de lanzar nivel 10 Lanza ósea al golpear",
      "+2 a todos los niveles de habilidad del nigromante",
      "+100-150 maná",
      "+30% todas las resistencias",
      "Daño reducido en 7"
    ]
  },
  {
    "title": "Traición",
    "runes": [
      {
        "name": "Shael",
        "status": false
      },
      {
        "name": "Thul",
        "status": false
      },
      {
        "name": "Lem",
        "status": false
      }
    ],
    "arm": [
      "Armaduras"
    ],
    "numberHole": "(3 huecos)",
    "holes": 3,
    "version": "Disponible a partir de la versión: 1.11",
    "features": [
      "5% posibilidad de lanzar nivel 15 Fundido al ser golpeado",
      "25% posibilidad de lanzar nivel 15 Veneno al golpear",
      "+2 a todos los niveles de habilidad de la asesina",
      "+45% velocidad de ataque incrementada",
      "+20% recuperación tras impacto más rápida",
      "+30% resistencia al frío",
      "50% oro extra de los monstruos"
    ]
  },
  {
    "title": "Ilustración",
    "runes": [
      {
        "name": "Pul",
        "status": false
      },
      {
        "name": "Ral",
        "status": false
      },
      {
        "name": "Sol",
        "status": false
      }
    ],
    "arm": [
      "Armaduras"
    ],
    "numberHole": "(3 huecos)",
    "holes": 3,
    "version": "Disponible a partir de la versión: 1.11",
    "features": [
      "5% posibilidad de lanzar nivel 15 Llamarada al ser golpeado",
      "5% posibilidad de lanzar nivel 15 Bola de fuego al golpear",
      "+2 a todos los niveles de habilidad de la hechicera",
      "+1 a Calor",
      "+30% defensa mejorada",
      "+30% resistencia al fuego",
      "Daño reducido en 7"
    ]
  },
  {
    "title": "Lluvia",
    "runes": [
      {
        "name": "Ort",
        "status": false
      },
      {
        "name": "Mal",
        "status": false
      },
      {
        "name": "Ith",
        "status": false
      }
    ],
    "arm": [
      "Armaduras"
    ],
    "numberHole": "(3 huecos)",
    "holes": 3,
    "version": "Disponible a partir de la versión: 1.11",
    "features": [
      "5% posibilidad de lanzar nivel 15 Armadura de ciclón al ser golpeado",
      "5% posibilidad de lanzar nivel 15 Torbellino al golpear",
      "+2 a todos los niveles de habilidad del druida",
      "+100-150 maná",
      "+30% resistencia a los rayos",
      "Daño mágico reducido en 7",
      "Daño recibido repercute en el maná 15%"
    ]
  },
  {
    "title": "Principio",
    "runes": [
      {
        "name": "Ral",
        "status": false
      },
      {
        "name": "Gul",
        "status": false
      },
      {
        "name": "Eld",
        "status": false
      }
    ],
    "arm": [
      "Armaduras"
    ],
    "numberHole": "(3 huecos)",
    "holes": 3,
    "version": "Disponible a partir de la versión: 1.11",
    "features": [
      "100% posibilidad de lanzar nivel 5 Rayo sagrado al golpear",
      "+2 a todos los niveles de habilidad del paladín",
      "+50% daño a muertos vivientes",
      "15% drenaje de resistencia más lento",
      "+5% a la resistencia máxima de veneno",
      "+30% resistencia al fuego"
    ]
  },
  {
    "title": "Paz",
    "runes": [
      {
        "name": "Shael",
        "status": false
      },
      {
        "name": "Thul",
        "status": false
      },
      {
        "name": "Amn",
        "status": false
      }
    ],
    "arm": [
      "Armaduras"
    ],
    "numberHole": "(3 huecos)",
    "holes": 3,
    "version": "Disponible a partir de la versión: 1.11",
    "features": [
      "4% posibilidad de lanzar nivel 5 Misiles lentos al ser golpeado",
      "2% posibilidad de lanzar nivel 15 Valquiria al golpear",
      "+2 a todos los niveles de habilidad de la amazona",
      "+20% recuperación tras impacto más rápida",
      "+2 a Golpe crítico",
      "+30% resistencia al frío",
      "El atacante recibe el daño de 14"
    ]
  },
  {
    "title": "Mito",
    "runes": [
      {
        "name": "Hel",
        "status": false
      },
      {
        "name": "Amn",
        "status": false
      },
      {
        "name": "Nef",
        "status": false
      }
    ],
    "arm": [
      "Armaduras"
    ],
    "numberHole": "(3 huecos)",
    "holes": 3,
    "version": "Disponible a partir de la versión: 1.11",
    "features": [
      "3% posibilidad de lanzar nivel 1 Aullido al ser golpeado",
      "10% posibilidad de lanzar nivel 1 Burla al azotar",
      "+2 a todos los niveles de habilidad del bárbaro",
      "+30 defensa contra misiles",
      "+10 repostar vida",
      "El atacante recibe el daño de 14",
      "-15% requerimientos"
    ]
  }
];
export const RECIPES: Array<any> = [
  ..._RECIPES
];
