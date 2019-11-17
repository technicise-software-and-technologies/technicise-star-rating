import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

/**
 * `technicise-star-rating`
 * &lt;technicise-star-rating&gt; provides a tiny and flexible star rating component that uses SVG to render rating, so no images required.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class TechniciseStarRating extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        .rating {
          text-align: center;
          width: 100%;
        }
        .rating input[name="star"] {
          display: none;
          width: 0;
          opacity: 0;
          margin-left: -2px;
        }
        .rating input[name="star"]:focus ~ label svg {
          fill: #4A4A4A;
        }
        .rating input[name="star"]:checked ~ label svg {
          fill: #4A4A4A;
        }
        .rating span {
          display: inline-block;
          position: relative;
          float: right;
        }
        .rating span label {
          float: right;
          cursor: pointer;
        }
        .rating span label svg {
          fill: #CCC;
          color: transparent;
          transition: color 0.2s ease-in-out;
          width: 20px;
          height: 20px;
        }
        .rating span label:hover svg {
          fill: #4A4A4A;
        }
        .rating span label:hover ~ label svg {
          fill: #4A4A4A;
        }
        .rating span label:hover ~ label.half svg {
          fill: #4A4A4A;
        }
        .rating span label.half {
          overflow: hidden;
          position: absolute;
          width: 10px;
        }
        .rating span label.half svg {
          fill: none;
        }
        .rating span label.half:hover svg {
          fill: #4A4A4A;
        }
        .rating span:hover ~ span label svg {
          fill: #4A4A4A;
        }
      </style>
      <svg style="position: absolute; width: 0; height: 0; overflow: hidden" version="1.1" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <symbol id="star" viewBox="0 0 28 28" preserveAspectRatio="xMaxYMax meet">
          <title>Star Rating</title>
          <path class="star"
            d="M13.996,22.501 L22.649,27.997 L20.352,17.637 L27.996,10.667 L17.930,9.768 L13.996,-0.003 L10.063,9.768 L-0.003,10.667 L7.641,17.637 L5.345,27.997 L13.996,22.501 Z" />
        </symbol>
      </svg>
      <div class="rating" hidden$={{full}}>
        <fieldset class="rating-fieldset">
          <span>
            <input type="checkbox" id="halfstar10" class="rating-checkbox" value="10" name="star" disabled="[[disabled]]"/>
            <label class="full" for="halfstar10" title="Awesome - 5 stars">
              <svg role="img" aria-label="rating">
                <use xlink:href="#star"></use>
              </svg>
            </label>
            <input type="checkbox" id="halfstar9" class="rating-checkbox" value="9" name="star" disabled="[[disabled]]"/>
            <label class="half" for="star9" title="Pretty good - 4.5 stars">
              <svg role="img" aria-label="rating">
                <use xlink:href="#star"></use>
              </svg>
            </label>
          </span>
          <span>
            <input type="checkbox" id="halfstar8" class="rating-checkbox" value="8" name="star" disabled="[[disabled]]"/>
            <label class="full" for="halfstar8" title="Pretty good - 4 stars">
              <svg role="img" aria-label="rating">
                <use xlink:href="#star"></use>
              </svg>
            </label>
            <input type="checkbox" id="halfstar7" class="rating-checkbox" value="7" name="star" disabled="[[disabled]]"/>
            <label class="half" for="halfstar7" title="Meh - 3.5 stars"> <svg role="img" aria-label="rating">
                <use xlink:href="#star"></use>
              </svg>
            </label></span>
          <span>
            <input type="checkbox" id="halfstar6" class="rating-checkbox" value="6" name="star" disabled="[[disabled]]"/>
            <label class="full" for="halfstar6" title="Meh - 3 stars">
              <svg role="img" aria-label="rating">
                <use xlink:href="#star"></use>
              </svg>
            </label>
            <input type="checkbox" id="halfstar5" class="rating-checkbox" value="5" name="star" disabled="[[disabled]]"/>
            <label class="half" for="halfstar5" title="Kinda bad - 2.5 stars"> <svg role="img" aria-label="rating">
                <use xlink:href="#star"></use>
              </svg>
            </label>
          </span>
          <span>
            <input type="checkbox" id="halfstar4" class="rating-checkbox" value="4" name="star" disabled="[[disabled]]"/>
            <label class="full" for="halfstar4" title="Kinda bad - 2 stars">
              <svg role="img" aria-label="rating">
                <use xlink:href="#star"></use>
              </svg>
            </label>
            <input type="checkbox" id="halfstar3" class="rating-checkbox" value="3" name="star" disabled="[[disabled]]"/>
            <label class="half" for="halfstar3" title="Meh - 1.5 stars"> <svg role="img" aria-label="rating">
                <use xlink:href="#star"></use>
              </svg>
            </label></span>
          <span>
            <input type="checkbox" id="halfstar2" class="rating-checkbox" value="2" name="star" disabled="[[disabled]]"/>
            <label class="full" for="halfstar2" title="Sucks big time - 1 star">
              <svg role="img" aria-label="rating">
                <use xlink:href="#star"></use>
              </svg>
            </label>
            <input type="checkbox" id="halfstar1" class="rating-checkbox" value="1" name="star" disabled="[[disabled]]"/>
            <label class="half" for="halfstar1" title="Sucks big time - 0.5 stars">
              <svg role="img" aria-label="rating">
                <use xlink:href="#star"></use>
              </svg>
            </label>
          </span>
        </fieldset>
      </div>
      <div class="rating" hidden$={{!full}}>
        <fieldset class="rating-fieldset">
          <span>
            <input type="checkbox" id="fullstar10" class="rating-checkbox" value="10" name="star" disabled="[[disabled]]"/>
            <label class="full" for="fullstar10" title="Awesome - 5 stars">
              <svg role="img" aria-label="rating">
                <use xlink:href="#star"></use>
              </svg>
            </label>
          </span>
          <span>
            <input type="checkbox" id="fullstar8" class="rating-checkbox" value="8" name="star" disabled="[[disabled]]"/>
            <label class="full" for="fullstar8" title="Pretty good - 4 stars">
              <svg role="img" aria-label="rating">
                <use xlink:href="#star"></use>
              </svg>
            </label>
          </span>
          <span>
            <input type="checkbox" id="fullstar6" class="rating-checkbox" value="6" name="star" disabled="[[disabled]]"/>
            <label class="full" for="fullstar6" title="Meh - 3 stars">
              <svg role="img" aria-label="rating">
                <use xlink:href="#star"></use>
              </svg>
            </label>
          </span>
          <span>
            <input type="checkbox" id="fullstar4" class="rating-checkbox" value="4" name="star" disabled="[[disabled]]"/>
            <label class="full" for="fullstar4" title="Kinda bad - 2 stars">
              <svg role="img" aria-label="rating">
                <use xlink:href="#star"></use>
              </svg>
            </label>
          </span>
          <span>
            <input type="checkbox" id="fullstar2" class="rating-checkbox" value="2" name="star" disabled="[[disabled]]"/>
            <label class="full" for="fullstar2" title="Sucks big time - 1 star">
              <svg role="img" aria-label="rating">
                <use xlink:href="#star"></use>
              </svg>
            </label>
          </span>
        </fieldset>
      </div>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'technicise-star-rating',
      },
      value: {
        type: Number
      },
      full: {
        type: Boolean,
        value: false
      },
      disabled: {
        type: Boolean,
        value: false
      }
    };
  }
  ready() {
    super.ready();
    if (this.full) {
      this.value *= 2;
    } else {
      this.full = false;
    }
    var rating = this.shadowRoot.querySelectorAll('.rating input[name="star"]');
    let self = this;
    self._setRating(10, this.value, self.full);
    rating.forEach(function (ratingStar) {
      ratingStar.addEventListener('click', function () {
        self.value = ratingStar.value / 2;
        self._setRating(10, ratingStar.value, self.full);
      });
    });
  }
  _setRating(totalRating, currentRating, full) {
    if (full) {
      for (let downStep = 2; downStep <= currentRating; downStep += 2) {
        let id = "fullstar" + downStep;
        this.shadowRoot.querySelector('#' + id).checked = true;
      }
      let startVal = Number(currentRating) + 2;
      for (let upStep = startVal; upStep <= totalRating; upStep += 2) {
        let id = "fullstar" + upStep;
        this.shadowRoot.querySelector('#' + id).checked = false;
      }
    } else {
      for (let downStep = 1; downStep <= currentRating; downStep++) {
        let id = "halfstar" + downStep;
        this.shadowRoot.querySelector('#' + id).checked = true;
      }
      let startVal = Number(currentRating) + 1;
      for (let upStep = startVal; upStep <= totalRating; upStep++) {
        let id = "halfstar" + upStep;
        this.shadowRoot.querySelector('#' + id).checked = false;
      }
    }

  }
}

window.customElements.define('technicise-star-rating', TechniciseStarRating);
