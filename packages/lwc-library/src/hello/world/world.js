import { LightningElement, buildCustomElementConstructor } from 'lwc';

/**
 * The simpliest, possible Hello World component.
 */
export default class World extends LightningElement {
}

customElements.define("hello-world2", buildCustomElementConstructor(World));
