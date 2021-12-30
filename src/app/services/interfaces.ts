export interface ViewRecipes {
  main: Array<any>;
  suggestions: Array<any>;
}

export interface Catalogs{
  arm: Array<string>;
  holes: Array<number>;
}

export interface FilterRecipes{
  runes?: Array<string>;
  arm?: string;
  holes?: number;
}
