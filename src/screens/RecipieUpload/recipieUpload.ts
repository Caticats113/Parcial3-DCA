class RecipieUpload extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const tittle = this.ownerDocument.createElement('h2');
        tittle.textContent = "Upload your delicius recipie here"
        this.shadowRoot?.appendChild(tittle);

        const recipieText = this.ownerDocument.createElement("h4")
        recipieText.textContent = "What's this recipie called?"
        const rName = this.ownerDocument.createElement('input');
        rName.placeholder = "Write the name here"
        this.shadowRoot?.appendChild(recipieText);
        this.shadowRoot?.appendChild(rName);

        const photoText = this.ownerDocument.createElement("h4")
        photoText.textContent = "Add an image"
        const photo = this.ownerDocument.createElement('input');
        photo.placeholder = "Paste your image's URL here"
        this.shadowRoot?.appendChild(photoText);
        this.shadowRoot?.appendChild(photo);

        const ingredientsText = this.ownerDocument.createElement("h4")
        ingredientsText.textContent = "What ingredients are we using?"
        const ingredients = this.ownerDocument.createElement('input');
        ingredients.placeholder = "Write the ingredients"
        this.shadowRoot?.appendChild(ingredientsText);
        this.shadowRoot?.appendChild(ingredients);

        const stepsText = this.ownerDocument.createElement("h4")
        stepsText.textContent = "What are the steps?"
        const steps = this.ownerDocument.createElement('input');
        steps.placeholder = "Write down the steps"
        this.shadowRoot?.appendChild(stepsText);
        this.shadowRoot?.appendChild(steps);
    }
}

customElements.define('recipie-upload', RecipieUpload)