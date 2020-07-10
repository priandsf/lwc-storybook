import { LightningElement, api, wire } from 'lwc';

import { Time } from '../../wire/time'
/**
 * Greetings component that shows what an LWC component can provide.
 */
export default class Complex extends LightningElement {

    @api name

    @wire(Time) time;

    //@track
    get greetings() {
        return `Glad to see you, ${this.name}`
    }
}
