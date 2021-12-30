const _RUNES = [
  {
    "id": "1",
    "name": "Hel",
    "level": "-",
    "arm": "Requisitos -20%",
    "safeguard": "Requisitos -15%"
  },
  {
    "id": "2",
    "name": "Eld",
    "level": "11",
    "arm": "+75% Daño a los Muertos Vivientes, +50 Puntuacion de Ataque Muertos Vivientes",
    "safeguard": "15% Drenaje de Resistencia mas lento, 7% Posibilidad de Bloqueo Mayor (escudo)"
  },
  {
    "id": "3",
    "name": "El",
    "level": "11",
    "arm": "+50 Puntuacion de Ataque, +1 al Radio de Luz",
    "safeguard": "+50 Puntuacion de Ataque, +1 al Radio de Luz"
  },
  {
    "id": "4",
    "name": "Tir",
    "level": "13",
    "arm": "+2 mana Tras Cada Muerte",
    "safeguard": "+2 mana Tras Cada Muerte"
  },
  {
    "id": "5",
    "name": "Nef",
    "level": "13",
    "arm": "El Objetivo Retrocede",
    "safeguard": "+30 Defensa Contra Misiles"
  },
  {
    "id": "6",
    "name": "Eth",
    "level": "15",
    "arm": "-25% Defensa del Objetivo",
    "safeguard": "Regenerar mana 15%"
  },
  {
    "id": "7",
    "name": "Ith",
    "level": "15",
    "arm": "+9 al Daño Maximo",
    "safeguard": "15% del Daño Infligido Repercute en el mana"
  },
  {
    "id": "8",
    "name": "Tal",
    "level": "17",
    "arm": "+75 Daño de Veneno Durante 5 Segundos",
    "safeguard": "Resistencia al Veneno 30%, Resistencia al Veneno 35% (Escudo)"
  },
  {
    "id": "9",
    "name": "Ral",
    "level": "19",
    "arm": "Añade 5-30 De Daño de Fuego",
    "safeguard": "Resistencia al Fuego 30%, Resistencia al Fuego 35% (Escudo)"
  },
  {
    "id": "10",
    "name": "Ort",
    "level": "21",
    "arm": "Añade 1-50 Daño de Relampago",
    "safeguard": "Resistencia a los Rayos 30%, Resistencia a los Rayos 35% (Escudo)"
  },
  {
    "id": "11",
    "name": "Thul",
    "level": "23",
    "arm": "Añade 3-14 de Daño de Frio (Duracion 3 Segundos)",
    "safeguard": "Resistencia al Frío 30%, Resistencia al Frío 35% (Escudo)"
  },
  {
    "id": "12",
    "name": "Amn",
    "level": "25",
    "arm": "7% Vida Robada por Impacto",
    "safeguard": "El Atacante Recibe el Daño de 14"
  },
  {
    "id": "13",
    "name": "Sol",
    "level": "27",
    "arm": "+9 al Daño Minimo",
    "safeguard": "Daño Reducido en 7"
  },
  {
    "id": "14",
    "name": "Shael",
    "level": "29",
    "arm": "20% Velocidad de Ataque aumentada",
    "safeguard": "20% Recuperación de Impacto Más Rápida, 20% Velocidad de Bloqueo Mayor (Escudo)"
  },
  {
    "id": "15",
    "name": "Dol",
    "level": "31",
    "arm": "El Impacto Hace que el Monstruo Huya 25%",
    "safeguard": "Repostar Vida +7"
  },
  {
    "id": "16",
    "name": "Io",
    "level": "35",
    "arm": "+10 Vitalidad",
    "safeguard": "+10 Vitalidad"
  },
  {
    "id": "17",
    "name": "Lum",
    "level": "37",
    "arm": "+10 Energia",
    "safeguard": "+10 Energia"
  },
  {
    "id": "18",
    "name": "Ko",
    "level": "39",
    "arm": "+10 Destreza",
    "safeguard": "+10 Destreza"
  },
  {
    "id": "19",
    "name": "Fal",
    "level": "41",
    "arm": "+10 Fuerza",
    "safeguard": "+10 Fuerza"
  },
  {
    "id": "20",
    "name": "Lem",
    "level": "43",
    "arm": "75% Oro Extra de los Monstruos",
    "safeguard": "50% Oro Extra de los Monstruos"
  },
  {
    "id": "21",
    "name": "Pul",
    "level": "45",
    "arm": "+75 Daño a los Demonios, +100 Puntuación de Ataque contra Demonios",
    "safeguard": "30% Defensa Perfeccionada"
  },
  {
    "id": "22",
    "name": "Um",
    "level": "47",
    "arm": "25% Posibilidad de Heridas Abiertas",
    "safeguard": "Todas las Resistencias +15, Todas las Resistencias +22 (Escudo)"
  },
  {
    "id": "23",
    "name": "Mal",
    "level": "49",
    "arm": "Evita la Curacion del Monstruo",
    "safeguard": "Daño de Magia Reducido en 7"
  },
  {
    "id": "24",
    "name": "Ist",
    "level": "51",
    "arm": "30% Mas Posibilidades de Conseguir un Objeto Magico",
    "safeguard": "25% Mas Posibilidades de Conseguir un Objeto Magico"
  },
  {
    "id": "25",
    "name": "Gul",
    "level": "53",
    "arm": "20% Bonificacion en el Ataque",
    "safeguard": "5% a la Resistencia Maxima al Veneno"
  },
  {
    "id": "26",
    "name": "Vex",
    "level": "55",
    "arm": "7% mana Robado por Impacto",
    "safeguard": "5% a la Resistencia Maxima al Fuego"
  },
  {
    "id": "27",
    "name": "Ohm",
    "level": "57",
    "arm": "+50% Daño Perfeccionado",
    "safeguard": "5% a la Resistencia Maxima al Frio"
  },
  {
    "id": "28",
    "name": "Lo",
    "level": "59",
    "arm": "20% Posibilidad de Azote Mortal",
    "safeguard": "5% a la Resistencia Maxima a los Rayos"
  },
  {
    "id": "29",
    "name": "Sur",
    "level": "61",
    "arm": "El Impacto Ciega al Objetivo",
    "safeguard": "Aumenta el mana Maximo 5%, +50 mana (Escudo)"
  },
  {
    "id": "30",
    "name": "Ber",
    "level": "63",
    "arm": "20% Golpe Triturador",
    "safeguard": "Daño Reducido en 8%"
  },
  {
    "id": "31",
    "name": "Jah",
    "level": "65",
    "arm": "Ignorar Defensa del Objetivo",
    "safeguard": "Aumenta la Vida Máxima 5%, +50 Vida (Escudo)"
  },
  {
    "id": "32",
    "name": "Cham",
    "level": "67",
    "arm": "Congela al Objetivo",
    "safeguard": "No Puede Congelarse"
  },
  {
    "id": "33",
    "name": "Zod",
    "level": "69",
    "arm": "Indestructible",
    "safeguard": "Indestructible"
  }
]
export const RUNES = [
  ..._RUNES
];
