import { LightningElement, api, wire, buildCustomElementConstructor } from 'lwc';

import { Time } from '../../wire/time'

/**
 * Greetings component that shows what an LWC component can provide.
 */
export default class Greetings extends LightningElement {

    @api name

    @wire(Time) time;

    get greetings() {
        return `Glad to see you, ${this.name}`
    }
}

customElements.define("hello-greetings", buildCustomElementConstructor(Greetings));
