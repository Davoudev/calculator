import React, { Component } from "react";

class Buttons extends Component {
  render() {
    return (
      <div class="buttons">
        <div class="line">
          <div class="btn" id="clear" onClick="">
            C
          </div>
          <div class="btn" onClick="">
            +
          </div>
          <div class="btn" onClick="">
            ←
          </div>
        </div>
        <div class="line">
          <div class="btn" onClick="">
            7
          </div>
          <div class="btn" onClick="">
            8
          </div>
          <div class="btn" onClick="">
            9
          </div>
          <div class="btn" onClick="">
            /
          </div>
        </div>
        <div class="line">
          <div class="btn" onClick="data(this.textContent)">
            4
          </div>
          <div class="btn" onClick="">
            5
          </div>
          <div class="btn" onClick="">
            6
          </div>
          <div class="btn" onClick="">
            *
          </div>
        </div>
        <div class="line">
          <div class="btn" onClick="">
            1
          </div>
          <div class="btn" onClick="">
            2
          </div>
          <div class="btn" onClick="">
            3
          </div>
          <div class="btn" onClick="">
            -
          </div>
        </div>
        <div class="line">
          <div class="btn" onClick="">
            +/-
          </div>
          <div class="btn" onClick="">
            0
          </div>
          <div class="btn" onClick="">
            .
          </div>
          <div class="btn" id="equal">
            =
          </div>
        </div>
      </div>
    );
  }
}
export default Buttons;
