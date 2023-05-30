import "./components/export"
import { appState } from "./store";
import { Screens } from "./types/store";


class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot) this.shadowRoot.innerHTML = ""

        appState.screen

        switch(appState.screen) {
            case Screens.RECIPIE_UPLOAD:
                if(this.shadowRoot) {
                    const uploadRecipie = this.ownerDocument.createElement("recipie-upload")
                }
        }
    }
}

customElements.define('app-container', AppContainer)