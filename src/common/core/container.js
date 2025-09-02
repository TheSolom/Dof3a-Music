class Container {
    #services;

    constructor() {
        if (!Container.instance) {
            Container.instance = this;
            this.#services = new Map();
        }
        return Container.instance;
    }

    register (name, instance) {
        if (!this.#services.has(name)) {
            this.#services.set(name, instance);
        }
    }

    resolve (name) {
        return this.#services.get(name);
    }
}

const container = new Container();
Object.freeze(container);

export default container;
