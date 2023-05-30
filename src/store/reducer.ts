import { appState } from ".";
import { Actions, AppState, SomeActions } from "../types/store";

export const reducer = (actions: Actions, state: AppState): AppState => {
    const { action, payload } = actions;
    
    switch (action) {
        case SomeActions.SAVE_RECIPIE:
            state.recipies = [...state.recipies, payload]
            return state 

        case SomeActions.GET_RECIPIES: 

    }
}