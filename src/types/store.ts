export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  recipies: Recipie[];
  screen: Screens
};

export enum Screens {
  "RECIPIE_UPLOAD" = "RECIPIE_UPLOAD",
  "SEE_RECIPIES" = "SEE_RECIPIES"
}

export type Recipie =  {
  photo: string,
  name: string,
  ingredients: string,
  steps: string
}

export enum SomeActions {
  "SAVE_RECIPIE" = "SAVE_RECIPIE",
  "GET_RECIPIES" = "GET_RECIPIES"
}

export interface SaveRecipieAction {
  action: SomeActions.SAVE_RECIPIE;
  payload: Recipie;
}

export interface GetRecipieAction {
  action: SomeActions.GET_RECIPIES;
  payload: Recipie[];
//  payload: Pick<AppState, "recipies">;
}
export type Actions = SaveRecipieAction | GetRecipieAction;
