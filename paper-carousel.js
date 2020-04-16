import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `paper-carousel`
 * The paper-carousel element updated for Polymer 3
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class PaperCarousel extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'paper-carousel',
      },
    };
  }
}

window.customElements.define('paper-carousel', PaperCarousel);
