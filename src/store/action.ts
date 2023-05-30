import { Recipie } from "../types/store"
import { Actions, SomeActions } from "../types/store"
import { firebase } from "../utils/firebase"

export const saveRecipie = async (recipie: Recipie): Promise<Actions | null> => {
    const resp = await firebase.saveRecipie(recipie)
    if (resp) {
        return {
            action: SomeActions.SAVE_RECIPIE,
            payload: recipie
        }
    }
    return null
}
