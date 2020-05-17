import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import "@polymer/iron-icons/image-icons";
import "@polymer/iron-resizable-behavior/iron-resizable-behavior";
import "@polymer/paper-styles/color";

/**
 * `paper-carousel`
 * A carousel element for Polymer 3 applications
 *
 * @customElement
 * @polymer
 * @extends HTMLElement
 * @demo demo/index.html
 */
class PaperCarousel extends PolymerElement {
  static get template() {
    return html`
      <style>
      :host {
          display: block;
          position: relative;
          overflow: hidden;
          --dot-background-color: #ffffff;
          --dot-active-extra-item: hidden;
      }

      :host .paper-carousel_container {
          text-align: center;
          position: relative;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-flex-flow: row nowrap;
              -ms-flex-flow: row nowrap;
                  flex-flow: row nowrap;
          -webkit-justify-content: space-around;
              -ms-flex-pack: distribute;
                  justify-content: space-around;
          -webkit-align-items: flex-start;
              -ms-flex-align: start;
                  align-items: flex-start;
          -webkit-align-content: flex-start;
              -ms-flex-line-pack: start;
                  align-content: flex-start;
          width: 100%;
          z-index: 1;
          transition: -webkit-transform var(--transition-speed, 500ms) ease-in-out;
          transition: transform var(--transition-speed, 500ms) ease-in-out;
          transition: transform var(--transition-speed, 500ms) ease-in-out, -webkit-transform var(--transition-speed, 500ms) ease-in-out;
          -ms-touch-action: pan-y;
              touch-action: pan-y;
          will-change: transform;
      }

      :host .paper-carousel_controls {
          position: absolute;
          width: auto;
          top: 50%;
          right: 10px;
          left: 10px;
          -webkit-transform: translateY(-50%);
                  transform: translateY(-50%);
          text-align: center;
          z-index: 1;
          pointer-events: none;
      }

      :host [class*=paper-carousel_controls_arrow] {
          color: var(--dot-background-color);
          pointer-events: auto;
      }

      :host [class*=paper-carousel_controls_arrow].paper-carousel_controls_arrow--disabled {
          pointer-events: none;
          cursor: default;
      }

      :host [class*=paper-carousel_controls_arrow] iron-icon {
          opacity: var(--light-secondary-opacity);
          -webkit-filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.4));
          filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.4));
          -webkit-backface-visibility: hidden;
                  backface-visibility: hidden;
          -webkit-transform: scale(1);
                  transform: scale(1);
          transition: opacity 200ms ease-out, -webkit-filter 200ms ease-out, -webkit-transform 200ms ease-out;
          transition: opacity 200ms ease-out, filter 200ms ease-out, transform 200ms ease-out;
          transition: opacity 200ms ease-out, filter 200ms ease-out, transform 200ms ease-out, -webkit-filter 200ms ease-out, -webkit-transform 200ms ease-out;
      }

      :host [class*=paper-carousel_controls_arrow] iron-icon:hover {
          opacity: var(--light-primary-opacity);
          -webkit-transform: scale(1.15);
                  transform: scale(1.15);
          -webkit-filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.4));
          filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.4));
      }

      :host .paper-carousel_controls_arrow-next {
          float: right;
      }

      :host .paper-carousel_controls_arrow-prev {
          float: left;
      }

      :host .paper-carousel_dots_wrapper {
          position: relative;
          display: inline-block;
          margin: 0;
          padding: 0;
          z-index: 2;
      }

      :host ::slotted(.paper-carousel_dots) {
          position: absolute;
          width: 100%;
          text-align: center;
          z-index: 1;
          bottom: 10px;
          pointer-events: none;
      }

      :host .paper-carousel_dot-line {
          visibility: var(--dot-active-extra-item);
          position: absolute;
          top: 0;
          padding: 6px;
          z-index: 2;
          pointer-events: none;
          transition: -webkit-transform 200ms ease-in-out;
          transition: transform 200ms ease-in-out;
          transition: transform 200ms ease-in-out, -webkit-transform 200ms ease-in-out;
      }

      :host .paper-carousel_dot-line ::before {
          content: '';
          display: block;
          width: 10px;
          height: 10px;
          background-color: var(--color-red);
          border-radius: 10px;
      }

      :host .paper-carousel_dot {
          display: inline-block;
          pointer-events: auto;
          opacity: var(--light-secondary-opacity);
          -webkit-filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.4));
          filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.4));
          -webkit-transform-origin: center;
                  transform-origin: center;
          -webkit-transform: scale(1);
                  transform: scale(1);
          transition: opacity 0.6s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-filter 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
          transition: transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.6s cubic-bezier(0.25, 0.8, 0.25, 1), filter 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
          transition: transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.6s cubic-bezier(0.25, 0.8, 0.25, 1), filter 0.6s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-filter 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
          -webkit-backface-visibility: hidden;
                  backface-visibility: hidden;
      }

      :host .paper-carousel_dot .active {
          opacity: var(--light-primary-opacity);
          -webkit-filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.4));
          filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.4));
          -webkit-transform: scale(1.15);
                  transform: scale(1.15);
      }

      :host .paper-carousel_dot a {
          position: relative;
          display: block;
          padding: 6px;
          color: var(--dot-background-color);
          font-size: 0.8125em;
          line-height: 2em;
          font-weight: 400;
          text-decoration: none;
      }

      :host .paper-carousel_dot a::before {
          content: '';
          display: block;
          width: 8px;
          height: 8px;
          background-color: var(--dot-background-color);
          border-radius: 8px;
      }

      :host ::slotted([class*=paper-carousel-demo]) {
          position: relative;
          height: 400px;
      }

      :host ::slotted([class*=paper-carousel-demo]::before) {
          position: absolute;
          content: attr(data-text);
          color: var(--dot-background-color);
          font-size: 3rem;
          font-weight: bold;
          top: 50%;
          left: 50%;
          -webkit-transform: translate(-50%, -50%);
                  transform: translate(-50%, -50%);
      }

      :host ::slotted(.paper-carousel-demo-indigo) {
          background-color: var(--paper-indigo-500);
      }

      :host ::slotted(.paper-carousel-demo-pink) {
          background-color: var(--paper-pink-500);
      }

      :host ::slotted(.paper-carousel-demo-teal) {
          background-color: var(--paper-teal-500);
      }

      :host ::slotted(.paper-carousel-demo-amber) {
          background-color: var(--paper-amber-500);
      }

      :host ::slotted(.paper-carousel-demo-green) {
          background-color: var(--paper-green-500);
      }

      :host ::slotted(.paper-carousel-demo-blue) {
          background-color: var(--paper-blue-500);
      }

      </style>
      <div class="paper-carousel_container">
          <slot></slot>
      </div>
  `;
  }

  static get properties() {
    return {
      items: {
        type: Number,
        value: 1
      },
      responsive: {
        type: String,
        value: null
      },
      controls: {
        type: Boolean,
        value: false
      },
      dots: {
        type: Boolean,
        value: false
      },
      dotText: {
        type: Boolean,
        value: false
      },
      prevIcon: {
        type: String,
        value: 'image:navigate-before'
      },
      nextIcon: {
        type: String,
        value: 'image:navigate-next'
      },
      loop: {
        type: Boolean,
        value: false
      },
      autoplay: {
        type: Boolean,
        value: false
      },
      autoplaytime: {
        type: Number,
        value: 6000
      },
      transitionspeed: {
        type: Number,
        value: 500
      }
    }
  }

  ready() {
    super.ready();
    const element = this;
    element.itemsToAppend = [];
    element.itemsToPrepend = [];
    // functions
    element._createOnMoveEvent();
  }

  connectedCallback() {
    super.connectedCallback();
    const element = this;
    window.addEventListener('resize', element._onResize.bind(element));
    element._onLoad();
  }

  disconnectedCallback() {
    const element = this;
    super.disconnectedCallback();
    // We must remove listeners to prevent memory leaks.
    window.removeEventListener('resize', element._onResize.bind(element));
  }

  getItems() {
    const element = this;
    const moduleRect = element.getBoundingClientRect();
    if (element.getAttribute('responsive') !== null) {
      const breakpoints = element.getAttribute('responsive').replace(/\s/g, '').split(',');
      let breakpointKey = 0;
      while (breakpointKey < breakpoints.length) {
        // set loop vars
        const breakpoint = breakpoints[breakpointKey].split(':');
        let nextBreakpoint;
        if (breakpoints[breakpointKey + 1]) {
          nextBreakpoint = breakpoints[breakpointKey + 1].split(':');
        } else {
          nextBreakpoint = {
            0: 0
          };
        }
        // set rwd items
        if (moduleRect.width <= breakpoint[0] && moduleRect.width > nextBreakpoint[0]) {
          return breakpoint[1];
        }
        breakpointKey++;
      }
    }
    // set item number
    if (element.getAttribute('items') !== null) {
      return element.getAttribute('items');
    } else {
      return 1;
    }
  }

  _dotText() {
    const element = this;
    const value = element.getAttribute('dotText');
    //set item number
    if (value !== null) {
      if (value === 'false') {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  }

  _isLoop() {
    const element = this;
    const value = element.getAttribute('loop');
    //set item number
    if (value !== null) {
      if (value === 'true') {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  _transitionSpeed() {
    const element = this;
    const value = element.getAttribute('transitionspeed');
    //set speed value
    if (value !== null && value !== void 0) {
      element.customStyle['--transition-speed'] = value + 'ms';
      return element.updateStyles();
    }
  }

  _isAutoplay() {
    const element = this;
    const value = element.getAttribute('autoplay');
    //set item number
    if (value !== null) {
      if (value === 'true') {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  getTotalItems() {
    const element = this;
    const shadowDom = element.shadowRoot;
    const slot = shadowDom.querySelector('slot');
    const items = slot.assignedElements();
    let totalItems = 0;
    if (element._isLoop()) {
      for (let i = 0; i < items.length; i++) {
        const child = items[i];
        if (child.localName !== 'template' && !child.classList.contains('cloned')) {
          totalItems++;
        }
      }
    } else {
      for (let i = 0; i < items.length; i++) {
        const child = items[i];
        if (child.localName !== 'template') {
          totalItems++;
        }
      }
    }
    return totalItems;
  }

  _getRealTotalItems() {
    const element = this;
    const shadowDom = element.shadowRoot;
    const slot = shadowDom.querySelector('slot');
    const items = slot.assignedElements();
    let totalItems = 0;
    //set item number
    for (let i = 0; i < items.length; i++) {
      const child = items[i];
      if (child.localName !== 'template') {
        totalItems++;
      }
    }
    return totalItems;
  }

  getPages() {
    const element = this;
    let item = 1;
    let page = [];
    const pages = [];
    while (item <= element.getTotalItems()) {
      page.push(item - 1);
      if (item % element.getItems() === 0) {
        pages.push(page);
        page = [];
      }
      if (item === element.getTotalItems()) {
        pages.push(page);
      }
      item++;
    }
    return pages;
  }

  getTotalPages() {
    const element = this;
    return Math.ceil(element.getTotalItems() / element.getItems());
  }

  getContainerPosition() {
    const element = this;
    const shadowDom = element.shadowRoot;
    const elementContainer = shadowDom.querySelector('.paper-carousel_container');
    const transform = elementContainer.style.transform;
    let translateXValue = 0;
    if (transform !== '') {
      const translateX = transform.match(/translateX\((.*)/)[0];
      translateXValue = translateX.match(/\((.*)\)/)[0];
      translateXValue = translateXValue.substr(1, translateXValue.length - 2);
      translateXValue = parseFloat(translateXValue);
    }
    return translateXValue;
  }

  getCurrentItem() {
    const element = this;
    const itemPortion = Math.round((100 / element.getTotalItems()) * 1000) / 1000;
    const itemPortion2 = Math.round((100 / element._getRealTotalItems()) * 1000) / 1000;
    let item = 0;
    if (element._isLoop) {
      while (item <= element._getRealTotalItems()) {
        if (Math.round((itemPortion2 * item) * 1000) / 1000 === -element.getContainerPosition()) {
          element.currentItem = item - element.itemsToPrepend.length;
          return item - element.itemsToPrepend.length;
        }
        item++;
      }
    } else {
      while (item <= element.getTotalItems()) {
        if (Math.round((itemPortion * item) * 1000) / 1000 === -element.getContainerPosition()) {
          element.currentItem = item;
          return item;
        }
        item++;
      }
    }
  }

  goToItem(key) {
    const element = this;
    const shadowDom = element.shadowRoot;
    const elementContainer = shadowDom.querySelector('.paper-carousel_container');
    let itemPortion;
    let movement;
    if (element._isLoop()) {
      itemPortion = Math.round((100 / element._getRealTotalItems()) * 1000) / 1000;
      movement = Math.round(((key + element.itemsToPrepend.length) * -itemPortion) * 1000) / 1000;
    } else {
      itemPortion = Math.round((100 / element.getTotalItems()) * 1000) / 1000;
      movement = Math.round((key * -itemPortion) * 1000) / 1000;
    }
    // Apply movement
    if (element._isLoop()) {
      elementContainer.style.transform = 'translateX(' + movement + '%)';
    } else {
      if (key < element.getTotalItems() && key >= 0) {
        if (element.getItems() < element.getTotalItems()) {
          elementContainer.style.transform = 'translateX(' + movement + '%)';
        }
      }
    }
    // set active dot
    element._setActiveDot(element.getCurrentPage());
    element._setDisabledControls();
    // fire onMove callback
    return element._fireOnMoveEvent();
  }

  goToNextItem() {
    const element = this;
    const shadowDom = element.shadowRoot;
    const elementContainer = shadowDom.querySelector('.paper-carousel_container');
    const itemPortion = Math.round((100 / element.getTotalItems()) * 1000) / 1000;
    const containerPosition = element.getContainerPosition();
    const totalItems = element.getTotalItems();
    const items = element.getItems();
    const currentItem = element.getCurrentItem();
    // Apply movement if container is not to the final position
    if (element._isLoop()) {
      element.goToItem(element.getCurrentItem() + 1);
      if (element.getCurrentItem() === element.getTotalItems()) {
        elementContainer.style.transition = 'none';
        element.goToItem(-1);
        elementContainer.style.transition = '';
        return element.goToItem(0);
      }
    } else {
      if (containerPosition > -(totalItems - items - 1) * itemPortion - 5) {
        return element.goToItem(currentItem + 1);
      }
    }
  }

  goToPrevItem() {
    const element = this;
    const shadowDom = element.shadowRoot;
    const elementContainer = shadowDom.querySelector('.paper-carousel_container');
    // Apply movement if container is not to the starting position
    if (element._isLoop) {
      element.goToItem(element.getCurrentItem() - 1);
      if (element.getCurrentItem() === -1) {
        elementContainer.style.transition = 'none';
        element.goToItem(element.getTotalItems());
        elementContainer.style.transition = '';
        return element.goToItem(element.getTotalItems() - 1);
      }
    } else {
      if (element.getContainerPosition() < 0) {
        return element.goToItem(element.getCurrentItem() - 1);
      }
    }
  }

  getCurrentPage() {
    const element = this;
    let pageKey = 0;
    while (pageKey < element.getPages().length) {
      const page = element.getPages()[pageKey];
      const lastItem = parseFloat(element.getCurrentItem()) + parseFloat(element.getItems());
      if (lastItem >= element.getTotalItems()) {
        if (!element._isLoop()) {
          element.goToPage(element.getTotalPages() - 1);
        }
        return element.getTotalPages() - 1;
      }
      if (page.indexOf(element.getCurrentItem()) !== -1) {
        return pageKey;
      }
      pageKey++;
    }
  }

  goToPage(key) {
    const element = this;
    const shadowDom = element.shadowRoot;
    const elementContainer = shadowDom.querySelector('.paper-carousel_container');
    const itemPortion = Math.round((100 / element.getTotalItems()) * 1000) / 1000;
    const itemPortion2 = Math.round((100 / element._getRealTotalItems()) * 1000) / 1000;
    const pagePortionFix = (element.getItems() - element.getPages()[key].length) * itemPortion;
    const pagePortionFix2 = (element.getItems() - element.getPages()[key].length) * itemPortion2;
    const pagePortion = -itemPortion * element.getItems();
    const pagePortion2 = -itemPortion2 * element.getItems();
    let movement;
    if (element._isLoop()) {
      movement = (Math.round(((key * pagePortion2) + pagePortionFix2) * 1000) / 1000) + pagePortion2;
    } else {
      movement = Math.round(((key * pagePortion) + pagePortionFix) * 1000) / 1000;
    }
    // Apply movement
    if (element._isLoop()) {
      elementContainer.style.transform = 'translateX(' + movement + '%)';
    } else {
      if (key < element.getTotalPages() && key >= 0) {
        if (element.getItems() < element.getTotalItems()) {
          elementContainer.style.transform = 'translateX(' + movement + '%)';
        }
      }
    }
    // set active dot
    element._setActiveDot(key);
    element._setDisabledControls();
    // fire onMove callback
    return element._fireOnMoveEvent();
  }

  goToNextPage() {
    const element = this;
    const itemPortion = Math.round((100 / element.getTotalItems()) * 1000) / 1000;
    // Apply movement if container is not to the final position
    if (element.getContainerPosition() > -(element.getTotalItems() - element.getItems() - 1) * itemPortion - 5) {
      return element.goToPage(element.getCurrentPage() + 1);
    }
  }

  goToPrevPage() {
    const element = this;
    // Apply movement if container is not to the starting position
    if (element.getContainerPosition() < -5) {
      return element.goToPage(element.getCurrentPage() - 1);
    }
  }

  _createOnMoveEvent() {
    const element = this;
    element.onMove = void 0;
    // create event
    if (document.createEvent) {
      element.onMove = document.createEvent("HTMLEvents");
      element.onMove.initEvent("onmove", true, true);
    } else {
      element.onMove = document.createEventObject();
      element.onMove.eventType = "onmove";
    }
    return element.onMove.eventName = "onmove";
  }

  _fireOnMoveEvent() {
    const element = this;
    if (document.createEvent) {
      return element.dispatchEvent(element.onMove);
    } else {
      return element.fireEvent("on" + element.onMove.eventType, element.onMove);
    }
  }

  _setContainerSize() {
    const element = this;
    const shadowDom = element.shadowRoot;
    const slot = shadowDom.querySelector('slot');
    const items = slot.assignedElements();
    const elementContainer = shadowDom.querySelector('.paper-carousel_container');
    const moduleRect = element.getBoundingClientRect();
    let containerWidth;
    let childWidth;
    if (element._isLoop()) {
      containerWidth = moduleRect.width * element._getRealTotalItems() / element.getItems();
    } else {
      containerWidth = moduleRect.width * element.getTotalItems() / element.getItems();
    }
    if (element._isLoop) {
      childWidth = Math.round(100 / element._getRealTotalItems() * 10000) / 10000;
    } else {
      childWidth = Math.round(100 / element.getTotalItems() * 10000) / 10000;
    }
    // set children width
    for (let i = 0; i < items.length; i++) {
      const child = items[i];
      if (child.localName !== 'template') {
        child.style.width = childWidth + '%';
      }
    }
    // set container width
    return elementContainer.style.minWidth = containerWidth + 'px';
  }

  _setActiveDot(key) {
    const element = this;
    const shadowDom = element.shadowRoot;
    const activeDots = shadowDom.querySelectorAll('.paper-carousel_dot');
    const activeDotLine = shadowDom.querySelector('.paper-carousel_dot-line');
    let dotKey = 0;
    // add class to active dot
    while (dotKey < activeDots.length) {
      if (dotKey === parseInt(key)) {
        activeDots[key].classList.add('active');
      } else {
        activeDots[dotKey].classList.remove('active');
      }
      dotKey++;
    }
    // move active extra dot
    if (activeDotLine) {
      if (element.getItems() < element.getTotalItems()) {
        return activeDotLine.style.transform = 'translateX(' + key + '00%)';
      }
    }
  }

  _printControls(force) {
    const element = this;
    const shadowDom = element.shadowRoot;
    const paperCarouselElement = this;

    // Dont add the controls if not activated
    if (element.getAttribute('controls') === 'false') {
      return;
    }

    // Dont print the controls if the number of pages has not changed
    if (force !== true) {
      if (element.tpages === element.getItems()) {
        return;
      }
    }

    // remove container if already exist
    if (shadowDom.querySelector('.paper-carousel_controls')) {
      shadowDom.querySelector('.paper-carousel_controls').remove();
    }

    // container creation
    const controlsContainer = document.createElement('div');
    controlsContainer.classList.add('paper-carousel_controls');
    const controlsWrapper = document.createElement('div');
    controlsWrapper.classList.add('paper-carousel_controls_wrapper');

    // Anchors creation
    const nextLink = document.createElement('a');
    const nextLinkIcon = document.createElement('iron-icon');
    if (element.getAttribute('nextIcon') !== null) {
      nextLinkIcon.setAttribute('icon', element.getAttribute('nextIcon'));
    } else {
      nextLinkIcon.setAttribute('icon', 'image:navigate-next');
    }
    const prevLink = document.createElement('a');
    const prevLinkIcon = document.createElement('iron-icon');
    if (element.getAttribute('prevIcon') !== null) {
      prevLinkIcon.setAttribute('icon', element.getAttribute('prevIcon'));
    } else {
      prevLinkIcon.setAttribute('icon', 'image:navigate-before');
    }
    nextLink.setAttribute('href', '');
    nextLink.classList.add('paper-carousel_controls_arrow-next');
    prevLink.setAttribute('href', '');
    prevLink.classList.add('paper-carousel_controls_arrow-prev');

    // Click anchors event
    nextLink.addEventListener('click', event => {
      event.preventDefault();
      paperCarouselElement._disableAutoPlay();
      element.goToNextItem(event);
    });
    prevLink.addEventListener('click', event => {
      event.preventDefault();
      paperCarouselElement._disableAutoPlay();
      element.goToPrevItem(event);
    });

    // parse container
    nextLink.appendChild(nextLinkIcon);
    prevLink.appendChild(prevLinkIcon);
    controlsContainer.appendChild(controlsWrapper);
    controlsWrapper.appendChild(prevLink);
    controlsWrapper.appendChild(nextLink);
    // print
    if (element.getTotalPages() > 1) {
      shadowDom.appendChild(controlsContainer);
    }
    // set disabled control
    return element._setDisabledControls();
  }

  _setDisabledControls() {
    const element = this;
    const shadowDom = element.shadowRoot;
    const itemPortion = Math.round((100 / element.getTotalItems()) * 1000) / 1000;
    const controlLeft = shadowDom.querySelector('.paper-carousel_controls_arrow-prev');
    const controlRight = shadowDom.querySelector('.paper-carousel_controls_arrow-next');
    if (!element._isLoop()) {
      if (controlRight !== null && controlLeft !== null) {
        // add class to disable left control
        if (element.getContainerPosition() > -0.5) {
          controlLeft.classList.add('paper-carousel_controls_arrow--disabled');
        } else {
          controlLeft.classList.remove('paper-carousel_controls_arrow--disabled');
        }
        // add class to disable right control
        if (element.getContainerPosition() < -(element.getTotalItems() - element.getItems() - 1) * itemPortion) {
          return controlRight.classList.add('paper-carousel_controls_arrow--disabled');
        } else {
          return controlRight.classList.remove('paper-carousel_controls_arrow--disabled');
        }
      }
    }
  }

  _printDots(force) {
    const element = this;
    const shadowDom = element.shadowRoot;
    let loopIncrement = 1;
    // only print dots if has been activated
    if (element.getAttribute('dots') === 'false') {
      return;
    }
    // container creation
    const dotsContainer = document.createElement('div');
    dotsContainer.classList.add('paper-carousel_dots');
    const dotsWrapper = document.createElement('ul');
    dotsWrapper.classList.add('paper-carousel_dots_wrapper');
    // parse container
    dotsContainer.appendChild(dotsWrapper);
    // only print dots if totalPages change
    if (force !== true) {
      if (element.tpages !== element.getItems()) {
        element.tpages = element.getItems();
      } else {
        return;
      }
    }
    // remove container if already exist
    if (shadowDom.querySelector('.paper-carousel_dots')) {
      shadowDom.querySelector('.paper-carousel_dots').remove();
    }
    // add dots into container
    while (loopIncrement <= element.getTotalPages()) {
      // dot item creation
      const dotItem = document.createElement('li');
      dotItem.classList.add('paper-carousel_dot');
      // dot anchor creation
      const dotItemLink = document.createElement('a');
      dotItemLink.setAttribute('href', '');
      dotItemLink.setAttribute('data-rel', loopIncrement - 1);
      // dot click event
      element.clickDotsEvent = function (e) {
        const activeItem = e.target.getAttribute('data-rel');
        return element.goToPage(activeItem);
      };
      dotItemLink.addEventListener('click', function (e) {
        e.preventDefault();
        return element._disableAutoPlay();
      });
      dotItemLink.addEventListener('tap', event => element.clickDotsEvent(event));
      // set dot text
      if (element._dotText() === true) {
        dotItemLink.textContent = loopIncrement;
      }
      // current item line creation
      const dotCurrentLine = document.createElement('li');
      dotCurrentLine.classList.add('paper-carousel_dot-line');
      // parse dot
      dotItem.appendChild(dotItemLink);
      dotsWrapper.appendChild(dotItem);
      // parse current line
      if (loopIncrement === element.getTotalPages()) {
        dotsWrapper.appendChild(dotCurrentLine);
      }
      loopIncrement++;
    }
    // print
    if (element.getTotalPages() > 1) {
      shadowDom.appendChild(dotsContainer);
    }
    // set active dot
    return element._setActiveDot(element.getCurrentPage());
  }

  _getDragState(e) {
    const element = this;
    const shadowDom = element.shadowRoot;
    const elementContainer = shadowDom.querySelector('.paper-carousel_container');
    const elementContainerRect = elementContainer.getBoundingClientRect();
    const movement = Math.round(((e.detail.dx * 100) / elementContainerRect.width) * 1000) / 1000;
    const itemPortion = Math.round((100 / element.getTotalItems()) * 1000) / 1000;
    const itemPortion2 = Math.round((100 / element._getRealTotalItems()) * 1000) / 1000;
    const maxLimit = Math.round((itemPortion * (element.getTotalItems() - element.getItems())) * 1000) / 1000;
    const maxLimit2 = Math.round((itemPortion2 * (element._getRealTotalItems() - element.getItems())) * 1000) / 1000;
    let endTime = 0;
    const touchValue = e.detail.dx;
    switch (e.detail.state) {
      case 'start':
        // set vars
        element.startTime = new Date().getTime();
        element.dragPosition = element.getContainerPosition();
        window.touching = true;
        // Remove transition duration
        elementContainer.style.transitionDuration = '0s';
        return window.addEventListener('scroll', function () {
          clearInterval(window.scrollingInterval);
          // Set on if scroll move
          window.scrolling = true;
          window.touchScroll = true;
          // Set off if scrolling is end
          return window.scrollingInterval = setTimeout((function () {
            window.scrolling = false;
            if (window.touching === false) {
              return window.touchScroll = false;
            }
          }), 50);
        });
      case 'track':
        // set vars
        let realMovement = Math.round((element.dragPosition + movement) * 1000) / 1000;
        realMovement = Math.min(realMovement, 0);
        if (element._isLoop()) {
          realMovement = Math.max(realMovement, -maxLimit2);
        } else {
          realMovement = Math.max(realMovement, -maxLimit);
        }
        if ((window.scrolling === false || window.scrolling === void 0) && (window.touchScroll === false || window.touchScroll === void 0)) {
          if (touchValue > 2 || touchValue < -2) {
            // apply touch movement
            if (element.getItems() < element.getTotalItems() && window.movingCarousel === true) {
              elementContainer.style.transform = 'translateX(' + realMovement + '%) translateY(0) translateZ(0)';
            }
            // Setting on if touch move
            window.movingCarousel = true;
          }
        }
        // block the page scroll while move the carousel
        return window.addEventListener('touchmove', function (e) {
          if (window.movingCarousel === true) {
            return e.preventDefault();
          }
        });
      case 'end':
        // set vars
        endTime = new Date().getTime();
        const swipeVelocity = endTime - element.startTime;
        let limitSwipeVelocity = Math.max(Math.min(swipeVelocity, 500), 100);
        if (element._isLoop()) {
          itemLoop = -1;
        } else {
          itemLoop = 0;
        }
        // limit transition duration
        if (element.getContainerPosition() > -5) {
          limitSwipeVelocity = 500;
        }
        if (element._isLoop()) {
          if (element.getContainerPosition() < -(element._getRealTotalItems() - element.getItems()) * itemPortion + 5) {
            limitSwipeVelocity = 500;
          }
        } else {
          if (element.getContainerPosition() < -(element.getTotalItems() - element.getItems()) * itemPortion + 5) {
            limitSwipeVelocity = 500;
          }
        }
        if (touchValue < 30 && touchValue > -30) {
          limitSwipeVelocity = 500;
        }
        // apply dynamic transition duration
        elementContainer.style.transitionDuration = limitSwipeVelocity + 'ms';
        // Reset transition duration
        element.resetTransition = function () {
          if (element._isLoop()) {
            if (element.getCurrentItem() === element.getTotalItems()) {
              elementContainer.style.transition = 'none';
              element.goToItem(0);
              elementContainer.style.transition = '';
            }
            if (element.getCurrentItem() === -1) {
              elementContainer.style.transition = 'none';
              element.goToItem(element.getTotalItems() - 1);
              elementContainer.style.transition = '';
            }
          }
          return elementContainer.style.transitionDuration = '';
        };
        elementContainer.addEventListener('transitionend', event => element.resetTransition(event));
        if ((window.scrolling === false || window.scrolling === void 0) && (window.touchScroll === false || window.touchScroll === void 0)) {
          if (touchValue > 2 || touchValue < -2) {
            // adjust current item
            let startLimit;
            let endLimit;
            let endRangeLimit;
            let startRangeLimit
            if (element._isLoop()) {
              while (itemLoop < element._getRealTotalItems()) {
                startLimit = -Math.round((itemPortion2 * (itemLoop + element.itemsToPrepend.length)) * 1000) / 1000;
                endLimit = -Math.round((itemPortion2 * (itemLoop + element.itemsToPrepend.length + 1)) * 1000) / 1000;
                rangeLimit = Math.round((startLimit - endLimit) * 1000) / 1000;
                endRangeLimit = endLimit + rangeLimit / 2;
                startRangeLimit = startLimit - rangeLimit / 2;
                if (movement < 0 && swipeVelocity < 150) {
                  if (element.getContainerPosition() < startLimit && element.getContainerPosition() >= endLimit) {
                    element.goToItem(itemLoop + 1);
                  }
                }
                if (movement > 0 && swipeVelocity < 150) {
                  if (element.getContainerPosition() < startLimit && element.getContainerPosition() >= endLimit) {
                    element.goToItem(itemLoop);
                  }
                }
                if (element.getContainerPosition() < startLimit && element.getContainerPosition() >= endRangeLimit) {
                  element.goToItem(itemLoop);
                }
                if (element.getContainerPosition() < startRangeLimit && element.getContainerPosition() >= endLimit) {
                  element.goToItem(itemLoop + 1);
                }
                itemLoop++;
              }
            } else {
              while (itemLoop < element.getTotalItems()) {
                startLimit = -Math.round((itemPortion * itemLoop) * 1000) / 1000;
                endLimit = -Math.round((itemPortion * (itemLoop + 1)) * 1000) / 1000;
                rangeLimit = Math.round((startLimit - endLimit) * 1000) / 1000;
                endRangeLimit = endLimit + rangeLimit / 2;
                startRangeLimit = startLimit - rangeLimit / 2;
                if (movement < 0 && swipeVelocity < 150) {
                  if (element.getContainerPosition() < startLimit && element.getContainerPosition() >= endLimit) {
                    element.goToItem(itemLoop + 1);
                  }
                }
                if (movement > 0 && swipeVelocity < 150) {
                  if (element.getContainerPosition() < startLimit && element.getContainerPosition() >= endLimit) {
                    element.goToItem(itemLoop);
                  }
                }
                if (element.getContainerPosition() < startLimit && element.getContainerPosition() >= endRangeLimit) {
                  element.goToItem(itemLoop);
                }
                if (element.getContainerPosition() < startRangeLimit && element.getContainerPosition() >= endLimit) {
                  element.goToItem(itemLoop + 1);
                }
                itemLoop++;
              }
            }
          }
        }
        // Setting off if touch end
        window.movingCarousel = false;
        window.touchScroll = false;
        return window.touching = false;
    }
  }

  _loop() {
    const element = this;
    const shadowDom = element.shadowRoot;
    const elementContainer = shadowDom.querySelector('.paper-carousel_container');
    if (element._isLoop()) {
      element.itemsToAppend = [];
      element.itemsToPrepend = [];
      const clonedItems = shadowDom.querySelectorAll('.paper-carousel_container .cloned');
      const cloneItems = function () {
        const childrenReverse = [];
        // set items to cloning
        [].forEach.call(elementContainer.children, function (val, key) {
          if (key < element.getItems()) {
            let clonedItem = val.cloneNode(true);
            clonedItem.classList.add('cloned');
            element.itemsToAppend.push(clonedItem);
          }
          if (key >= (element.getTotalItems() - element.getItems()) && key <= element.getTotalItems()) {
            return childrenReverse.push(val);
          }
        });
        return [].forEach.call(childrenReverse, function (val, key) {
          if (key < element.getItems()) {
            let clonedItem = val.cloneNode(true);
            clonedItem.classList.add('cloned');
            return element.itemsToPrepend.push(clonedItem);
          }
        });
      };
      // reset cloned items
      if (clonedItems.length > 0) {
        [].forEach.call(clonedItems, function (val, key) {
          val.remove();
          if (key === clonedItems.length - 1) {
            return cloneItems();
          }
        });
      } else {
        cloneItems();
      }
      // append cloned items
      [].forEach.call(element.itemsToAppend, function (val, key) {
        return elementContainer.appendChild(val);
      });
      // prepend cloned items
      return [].forEach.call(element.itemsToPrepend.reverse(), function (val, key) {
        return elementContainer.insertBefore(val.cloneNode(true), elementContainer.children[0]);
      });
    }
  }

  _autoPlay() {
    const element = this;
    let autoPlayIntervalTime;
    if (element.getAttribute('autoplaytime') !== null && element.getAttribute('autoplaytime') !== void 0) {
      autoPlayIntervalTime = element.getAttribute('autoplaytime');
    } else {
      autoPlayIntervalTime = 6000;
    }
    // set auto play interval
    if (element._isAutoplay()) {
      return element.autoPlayInterval = setInterval((function () {
        // if is loop, go to next item infinitely
        if (element._isLoop()) {
          return element.goToNextItem();
        } else {
          // if not is loop, go to next item until last slide and go to first item again
          if ((element.getCurrentItem() + 1) < element.getTotalItems()) {
            return element.goToNextItem();
          } else {
            return element.goToItem(0);
          }
        }
      }), autoPlayIntervalTime);
    }
  }

  _disableAutoPlay() {
    const element = this;
    // clear autoplay interval
    if (element._isAutoplay()) {
      clearInterval(element.autoPlayInterval);
      return element._isAutoplay = function () {
        return false;
      };
    }
  }

  _onDrag() {
    const element = this;
    const shadowDom = element.shadowRoot;
    const elementContainer = shadowDom.querySelector('.paper-carousel_container');
    // add drag event
    elementContainer.addEventListener('track', event => element._getDragState(event));
    return elementContainer.style.touchAction = '';
  }

  _setInitialPosition() {
    const element = this;
    const shadowDom = element.shadowRoot;
    const elementContainer = shadowDom.querySelector('.paper-carousel_container');
    // set carousel initial position
    elementContainer.style.transition = 'none';
    element.goToItem(0);
    elementContainer.style.transition = '';
    return element.initialize = true;
  }

  refresh() {
    const element = this;
    element._setContainerSize();
    element._printControls(true);
    element._printDots(true);
    return element._onResize();
  }

  _onLoad() {
    const element = this;
    element._onDrag();
    element._onResize();
    element._setInitialPosition();
    element._transitionSpeed();
    return element._autoPlay();
  }

  _onResize() {
    const element = this;
    element._loop();
    element._setContainerSize();
    element._printControls();
    element._printDots();
    if (element.initialize === true) {
      return element.goToItem(element.currentItem);
    }
  }
}

window.customElements.define('paper-carousel', PaperCarousel);
