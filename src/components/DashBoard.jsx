import React from "react";

const DashBoard = () => {
  return (
    <div>
      <div className=" p-3 flex justify-between max-w-[1050px]">
        <h1 className="text-2xl">Total Inventory: X</h1>
        <h1 className="text-2xl ">Last Activity: Y</h1>
        <h1 className="text-2xl ">No. of Transactions: Z</h1>
      </div>

      <div className="flex">
        <div className="flex-1 px-5">
          <h1 className="text-2xl mb-3">Recent Activities</h1>
          <svg
            class="recharts-surface"
            width="500"
            height="300"
            viewBox="0 0 500 300"
          >
            <title></title>
            <desc></desc>
            <defs>
              <clipPath id="recharts1-clip">
                <rect
                  x="65"
                  y="5"
                  height="235.98958206176758"
                  width="430"
                ></rect>
              </clipPath>
            </defs>
            <g class="recharts-cartesian-grid">
              <g class="recharts-cartesian-grid-horizontal">
                <line
                  stroke-dasharray="3 3"
                  stroke="#ccc"
                  fill="none"
                  x="65"
                  y="5"
                  width="430"
                  height="235.98958206176758"
                  offset="[object Object]"
                  x1="65"
                  y1="240.98958206176758"
                  x2="495"
                  y2="240.98958206176758"
                ></line>
                <line
                  stroke-dasharray="3 3"
                  stroke="#ccc"
                  fill="none"
                  x="65"
                  y="5"
                  width="430"
                  height="235.98958206176758"
                  offset="[object Object]"
                  x1="65"
                  y1="181.99218654632568"
                  x2="495"
                  y2="181.99218654632568"
                ></line>
                <line
                  stroke-dasharray="3 3"
                  stroke="#ccc"
                  fill="none"
                  x="65"
                  y="5"
                  width="430"
                  height="235.98958206176758"
                  offset="[object Object]"
                  x1="65"
                  y1="122.99479103088379"
                  x2="495"
                  y2="122.99479103088379"
                ></line>
                <line
                  stroke-dasharray="3 3"
                  stroke="#ccc"
                  fill="none"
                  x="65"
                  y="5"
                  width="430"
                  height="235.98958206176758"
                  offset="[object Object]"
                  x1="65"
                  y1="63.997395515441895"
                  x2="495"
                  y2="63.997395515441895"
                ></line>
                <line
                  stroke-dasharray="3 3"
                  stroke="#ccc"
                  fill="none"
                  x="65"
                  y="5"
                  width="430"
                  height="235.98958206176758"
                  offset="[object Object]"
                  x1="65"
                  y1="5"
                  x2="495"
                  y2="5"
                ></line>
              </g>
              <g class="recharts-cartesian-grid-vertical">
                <line
                  stroke-dasharray="3 3"
                  stroke="#ccc"
                  fill="none"
                  x="65"
                  y="5"
                  width="430"
                  height="235.98958206176758"
                  offset="[object Object]"
                  x1="65"
                  y1="5"
                  x2="65"
                  y2="240.98958206176758"
                ></line>
                <line
                  stroke-dasharray="3 3"
                  stroke="#ccc"
                  fill="none"
                  x="65"
                  y="5"
                  width="430"
                  height="235.98958206176758"
                  offset="[object Object]"
                  x1="280"
                  y1="5"
                  x2="280"
                  y2="240.98958206176758"
                ></line>
                <line
                  stroke-dasharray="3 3"
                  stroke="#ccc"
                  fill="none"
                  x="65"
                  y="5"
                  width="430"
                  height="235.98958206176758"
                  offset="[object Object]"
                  x1="495"
                  y1="5"
                  x2="495"
                  y2="240.98958206176758"
                ></line>
              </g>
            </g>
            <g class="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis">
              <line
                orientation="bottom"
                width="430"
                height="30"
                x="65"
                y="240.98958206176758"
                class="recharts-cartesian-axis-line"
                stroke="#666"
                fill="none"
                x1="65"
                y1="240.98958206176758"
                x2="495"
                y2="240.98958206176758"
              ></line>
              <g class="recharts-cartesian-axis-ticks">
                <g class="recharts-layer recharts-cartesian-axis-tick">
                  <line
                    orientation="bottom"
                    width="430"
                    height="30"
                    x="65"
                    y="240.98958206176758"
                    class="recharts-cartesian-axis-tick-line"
                    stroke="#666"
                    fill="none"
                    x1="65"
                    y1="246.98958206176758"
                    x2="65"
                    y2="240.98958206176758"
                  ></line>
                  <text
                    orientation="bottom"
                    width="430"
                    height="30"
                    stroke="none"
                    x="65"
                    y="248.98958206176758"
                    class="recharts-text recharts-cartesian-axis-tick-value"
                    text-anchor="middle"
                    fill="#666"
                  >
                    <tspan x="65" dy="0.71em">
                      Activity 1
                    </tspan>
                  </text>
                </g>
                <g class="recharts-layer recharts-cartesian-axis-tick">
                  <line
                    orientation="bottom"
                    width="430"
                    height="30"
                    x="65"
                    y="240.98958206176758"
                    class="recharts-cartesian-axis-tick-line"
                    stroke="#666"
                    fill="none"
                    x1="280"
                    y1="246.98958206176758"
                    x2="280"
                    y2="240.98958206176758"
                  ></line>
                  <text
                    orientation="bottom"
                    width="430"
                    height="30"
                    stroke="none"
                    x="280"
                    y="248.98958206176758"
                    class="recharts-text recharts-cartesian-axis-tick-value"
                    text-anchor="middle"
                    fill="#666"
                  >
                    <tspan x="280" dy="0.71em">
                      Activity 2
                    </tspan>
                  </text>
                </g>
                <g class="recharts-layer recharts-cartesian-axis-tick">
                  <line
                    orientation="bottom"
                    width="430"
                    height="30"
                    x="65"
                    y="240.98958206176758"
                    class="recharts-cartesian-axis-tick-line"
                    stroke="#666"
                    fill="none"
                    x1="495"
                    y1="246.98958206176758"
                    x2="495"
                    y2="240.98958206176758"
                  ></line>
                  <text
                    orientation="bottom"
                    width="430"
                    height="30"
                    stroke="none"
                    x="466.5972213745117"
                    y="248.98958206176758"
                    class="recharts-text recharts-cartesian-axis-tick-value"
                    text-anchor="middle"
                    fill="#666"
                  >
                    <tspan x="466.5972213745117" dy="0.71em">
                      Activity 3
                    </tspan>
                  </text>
                </g>
              </g>
            </g>
            <g class="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis">
              <line
                orientation="left"
                width="60"
                height="235.98958206176758"
                x="5"
                y="5"
                class="recharts-cartesian-axis-line"
                stroke="#666"
                fill="none"
                x1="65"
                y1="5"
                x2="65"
                y2="240.98958206176758"
              ></line>
              <g class="recharts-cartesian-axis-ticks">
                <g class="recharts-layer recharts-cartesian-axis-tick">
                  <line
                    orientation="left"
                    width="60"
                    height="235.98958206176758"
                    x="5"
                    y="5"
                    class="recharts-cartesian-axis-tick-line"
                    stroke="#666"
                    fill="none"
                    x1="59"
                    y1="240.98958206176758"
                    x2="65"
                    y2="240.98958206176758"
                  ></line>
                  <text
                    orientation="left"
                    width="60"
                    height="235.98958206176758"
                    stroke="none"
                    x="57"
                    y="240.98958206176758"
                    class="recharts-text recharts-cartesian-axis-tick-value"
                    text-anchor="end"
                    fill="#666"
                  >
                    <tspan x="57" dy="0.355em">
                      0
                    </tspan>
                  </text>
                </g>
                <g class="recharts-layer recharts-cartesian-axis-tick">
                  <line
                    orientation="left"
                    width="60"
                    height="235.98958206176758"
                    x="5"
                    y="5"
                    class="recharts-cartesian-axis-tick-line"
                    stroke="#666"
                    fill="none"
                    x1="59"
                    y1="181.99218654632568"
                    x2="65"
                    y2="181.99218654632568"
                  ></line>
                  <text
                    orientation="left"
                    width="60"
                    height="235.98958206176758"
                    stroke="none"
                    x="57"
                    y="181.99218654632568"
                    class="recharts-text recharts-cartesian-axis-tick-value"
                    text-anchor="end"
                    fill="#666"
                  >
                    <tspan x="57" dy="0.355em">
                      5
                    </tspan>
                  </text>
                </g>
                <g class="recharts-layer recharts-cartesian-axis-tick">
                  <line
                    orientation="left"
                    width="60"
                    height="235.98958206176758"
                    x="5"
                    y="5"
                    class="recharts-cartesian-axis-tick-line"
                    stroke="#666"
                    fill="none"
                    x1="59"
                    y1="122.99479103088379"
                    x2="65"
                    y2="122.99479103088379"
                  ></line>
                  <text
                    orientation="left"
                    width="60"
                    height="235.98958206176758"
                    stroke="none"
                    x="57"
                    y="122.99479103088379"
                    class="recharts-text recharts-cartesian-axis-tick-value"
                    text-anchor="end"
                    fill="#666"
                  >
                    <tspan x="57" dy="0.355em">
                      10
                    </tspan>
                  </text>
                </g>
                <g class="recharts-layer recharts-cartesian-axis-tick">
                  <line
                    orientation="left"
                    width="60"
                    height="235.98958206176758"
                    x="5"
                    y="5"
                    class="recharts-cartesian-axis-tick-line"
                    stroke="#666"
                    fill="none"
                    x1="59"
                    y1="63.997395515441895"
                    x2="65"
                    y2="63.997395515441895"
                  ></line>
                  <text
                    orientation="left"
                    width="60"
                    height="235.98958206176758"
                    stroke="none"
                    x="57"
                    y="63.997395515441895"
                    class="recharts-text recharts-cartesian-axis-tick-value"
                    text-anchor="end"
                    fill="#666"
                  >
                    <tspan x="57" dy="0.355em">
                      15
                    </tspan>
                  </text>
                </g>
                <g class="recharts-layer recharts-cartesian-axis-tick">
                  <line
                    orientation="left"
                    width="60"
                    height="235.98958206176758"
                    x="5"
                    y="5"
                    class="recharts-cartesian-axis-tick-line"
                    stroke="#666"
                    fill="none"
                    x1="59"
                    y1="5"
                    x2="65"
                    y2="5"
                  ></line>
                  <text
                    orientation="left"
                    width="60"
                    height="235.98958206176758"
                    stroke="none"
                    x="57"
                    y="12.005208969116211"
                    class="recharts-text recharts-cartesian-axis-tick-value"
                    text-anchor="end"
                    fill="#666"
                  >
                    <tspan x="57" dy="0.355em">
                      20
                    </tspan>
                  </text>
                </g>
              </g>
            </g>
            <g class="recharts-layer recharts-line">
              <path
                stroke="#8884d8"
                stroke-width="1"
                fill="none"
                width="430"
                height="235.98958206176758"
                class="recharts-curve recharts-line-curve"
                d="M65,122.995C136.667,63.997,208.333,5,280,5C351.667,5,423.333,34.499,495,63.997"
              ></path>
              <g class="recharts-layer"></g>
              <g class="recharts-layer recharts-line-dots">
                <circle
                  r="3"
                  stroke="#8884d8"
                  stroke-width="1"
                  fill="#fff"
                  width="430"
                  height="235.98958206176758"
                  cx="65"
                  cy="122.99479103088379"
                  class="recharts-dot recharts-line-dot"
                ></circle>
                <circle
                  r="3"
                  stroke="#8884d8"
                  stroke-width="1"
                  fill="#fff"
                  width="430"
                  height="235.98958206176758"
                  cx="280"
                  cy="5"
                  class="recharts-dot recharts-line-dot"
                ></circle>
                <circle
                  r="3"
                  stroke="#8884d8"
                  stroke-width="1"
                  fill="#fff"
                  width="430"
                  height="235.98958206176758"
                  cx="495"
                  cy="63.997395515441895"
                  class="recharts-dot recharts-line-dot"
                ></circle>
              </g>
            </g>
          </svg>
        </div>

        <div className="flex-1 px-5">
          <h1 className="text-2xl mb-3">Trade Trends</h1>
          <svg
            class="recharts-surface"
            width="500"
            height="300"
            viewBox="0 0 500 300"
          >
            <title></title>
            <desc></desc>
            <defs>
              <clipPath id="recharts4-clip">
                <rect
                  x="65"
                  y="5"
                  height="235.98958206176758"
                  width="430"
                ></rect>
              </clipPath>
            </defs>
            <g class="recharts-cartesian-grid">
              <g class="recharts-cartesian-grid-horizontal">
                <line
                  stroke-dasharray="3 3"
                  stroke="#ccc"
                  fill="none"
                  x="65"
                  y="5"
                  width="430"
                  height="235.98958206176758"
                  offset="[object Object]"
                  x1="65"
                  y1="240.98958206176758"
                  x2="495"
                  y2="240.98958206176758"
                ></line>
                <line
                  stroke-dasharray="3 3"
                  stroke="#ccc"
                  fill="none"
                  x="65"
                  y="5"
                  width="430"
                  height="235.98958206176758"
                  offset="[object Object]"
                  x1="65"
                  y1="181.99218654632568"
                  x2="495"
                  y2="181.99218654632568"
                ></line>
                <line
                  stroke-dasharray="3 3"
                  stroke="#ccc"
                  fill="none"
                  x="65"
                  y="5"
                  width="430"
                  height="235.98958206176758"
                  offset="[object Object]"
                  x1="65"
                  y1="122.99479103088379"
                  x2="495"
                  y2="122.99479103088379"
                ></line>
                <line
                  stroke-dasharray="3 3"
                  stroke="#ccc"
                  fill="none"
                  x="65"
                  y="5"
                  width="430"
                  height="235.98958206176758"
                  offset="[object Object]"
                  x1="65"
                  y1="63.997395515441895"
                  x2="495"
                  y2="63.997395515441895"
                ></line>
                <line
                  stroke-dasharray="3 3"
                  stroke="#ccc"
                  fill="none"
                  x="65"
                  y="5"
                  width="430"
                  height="235.98958206176758"
                  offset="[object Object]"
                  x1="65"
                  y1="5"
                  x2="495"
                  y2="5"
                ></line>
              </g>
              <g class="recharts-cartesian-grid-vertical">
                <line
                  stroke-dasharray="3 3"
                  stroke="#ccc"
                  fill="none"
                  x="65"
                  y="5"
                  width="430"
                  height="235.98958206176758"
                  offset="[object Object]"
                  x1="136.66666666666669"
                  y1="5"
                  x2="136.66666666666669"
                  y2="240.98958206176758"
                ></line>
                <line
                  stroke-dasharray="3 3"
                  stroke="#ccc"
                  fill="none"
                  x="65"
                  y="5"
                  width="430"
                  height="235.98958206176758"
                  offset="[object Object]"
                  x1="280"
                  y1="5"
                  x2="280"
                  y2="240.98958206176758"
                ></line>
                <line
                  stroke-dasharray="3 3"
                  stroke="#ccc"
                  fill="none"
                  x="65"
                  y="5"
                  width="430"
                  height="235.98958206176758"
                  offset="[object Object]"
                  x1="423.33333333333337"
                  y1="5"
                  x2="423.33333333333337"
                  y2="240.98958206176758"
                ></line>
                <line
                  stroke-dasharray="3 3"
                  stroke="#ccc"
                  fill="none"
                  x="65"
                  y="5"
                  width="430"
                  height="235.98958206176758"
                  offset="[object Object]"
                  x1="65"
                  y1="5"
                  x2="65"
                  y2="240.98958206176758"
                ></line>
                <line
                  stroke-dasharray="3 3"
                  stroke="#ccc"
                  fill="none"
                  x="65"
                  y="5"
                  width="430"
                  height="235.98958206176758"
                  offset="[object Object]"
                  x1="495"
                  y1="5"
                  x2="495"
                  y2="240.98958206176758"
                ></line>
              </g>
            </g>
            <g class="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis">
              <line
                orientation="bottom"
                width="430"
                height="30"
                x="65"
                y="240.98958206176758"
                class="recharts-cartesian-axis-line"
                stroke="#666"
                fill="none"
                x1="65"
                y1="240.98958206176758"
                x2="495"
                y2="240.98958206176758"
              ></line>
              <g class="recharts-cartesian-axis-ticks">
                <g class="recharts-layer recharts-cartesian-axis-tick">
                  <line
                    orientation="bottom"
                    width="430"
                    height="30"
                    x="65"
                    y="240.98958206176758"
                    class="recharts-cartesian-axis-tick-line"
                    stroke="#666"
                    fill="none"
                    x1="136.66666666666669"
                    y1="246.98958206176758"
                    x2="136.66666666666669"
                    y2="240.98958206176758"
                  ></line>
                  <text
                    orientation="bottom"
                    width="430"
                    height="30"
                    stroke="none"
                    x="136.66666666666669"
                    y="248.98958206176758"
                    class="recharts-text recharts-cartesian-axis-tick-value"
                    text-anchor="middle"
                    fill="#666"
                  >
                    <tspan x="136.66666666666669" dy="0.71em">
                      Jan
                    </tspan>
                  </text>
                </g>
                <g class="recharts-layer recharts-cartesian-axis-tick">
                  <line
                    orientation="bottom"
                    width="430"
                    height="30"
                    x="65"
                    y="240.98958206176758"
                    class="recharts-cartesian-axis-tick-line"
                    stroke="#666"
                    fill="none"
                    x1="280"
                    y1="246.98958206176758"
                    x2="280"
                    y2="240.98958206176758"
                  ></line>
                  <text
                    orientation="bottom"
                    width="430"
                    height="30"
                    stroke="none"
                    x="280"
                    y="248.98958206176758"
                    class="recharts-text recharts-cartesian-axis-tick-value"
                    text-anchor="middle"
                    fill="#666"
                  >
                    <tspan x="280" dy="0.71em">
                      Feb
                    </tspan>
                  </text>
                </g>
                <g class="recharts-layer recharts-cartesian-axis-tick">
                  <line
                    orientation="bottom"
                    width="430"
                    height="30"
                    x="65"
                    y="240.98958206176758"
                    class="recharts-cartesian-axis-tick-line"
                    stroke="#666"
                    fill="none"
                    x1="423.33333333333337"
                    y1="246.98958206176758"
                    x2="423.33333333333337"
                    y2="240.98958206176758"
                  ></line>
                  <text
                    orientation="bottom"
                    width="430"
                    height="30"
                    stroke="none"
                    x="423.33333333333337"
                    y="248.98958206176758"
                    class="recharts-text recharts-cartesian-axis-tick-value"
                    text-anchor="middle"
                    fill="#666"
                  >
                    <tspan x="423.33333333333337" dy="0.71em">
                      Mar
                    </tspan>
                  </text>
                </g>
              </g>
            </g>
            <g class="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis">
              <line
                orientation="left"
                width="60"
                height="235.98958206176758"
                x="5"
                y="5"
                class="recharts-cartesian-axis-line"
                stroke="#666"
                fill="none"
                x1="65"
                y1="5"
                x2="65"
                y2="240.98958206176758"
              ></line>
              <g class="recharts-cartesian-axis-ticks">
                <g class="recharts-layer recharts-cartesian-axis-tick">
                  <line
                    orientation="left"
                    width="60"
                    height="235.98958206176758"
                    x="5"
                    y="5"
                    class="recharts-cartesian-axis-tick-line"
                    stroke="#666"
                    fill="none"
                    x1="59"
                    y1="240.98958206176758"
                    x2="65"
                    y2="240.98958206176758"
                  ></line>
                  <text
                    orientation="left"
                    width="60"
                    height="235.98958206176758"
                    stroke="none"
                    x="57"
                    y="240.98958206176758"
                    class="recharts-text recharts-cartesian-axis-tick-value"
                    text-anchor="end"
                    fill="#666"
                  >
                    <tspan x="57" dy="0.355em">
                      0
                    </tspan>
                  </text>
                </g>
                <g class="recharts-layer recharts-cartesian-axis-tick">
                  <line
                    orientation="left"
                    width="60"
                    height="235.98958206176758"
                    x="5"
                    y="5"
                    class="recharts-cartesian-axis-tick-line"
                    stroke="#666"
                    fill="none"
                    x1="59"
                    y1="181.99218654632568"
                    x2="65"
                    y2="181.99218654632568"
                  ></line>
                  <text
                    orientation="left"
                    width="60"
                    height="235.98958206176758"
                    stroke="none"
                    x="57"
                    y="181.99218654632568"
                    class="recharts-text recharts-cartesian-axis-tick-value"
                    text-anchor="end"
                    fill="#666"
                  >
                    <tspan x="57" dy="0.355em">
                      400
                    </tspan>
                  </text>
                </g>
                <g class="recharts-layer recharts-cartesian-axis-tick">
                  <line
                    orientation="left"
                    width="60"
                    height="235.98958206176758"
                    x="5"
                    y="5"
                    class="recharts-cartesian-axis-tick-line"
                    stroke="#666"
                    fill="none"
                    x1="59"
                    y1="122.99479103088379"
                    x2="65"
                    y2="122.99479103088379"
                  ></line>
                  <text
                    orientation="left"
                    width="60"
                    height="235.98958206176758"
                    stroke="none"
                    x="57"
                    y="122.99479103088379"
                    class="recharts-text recharts-cartesian-axis-tick-value"
                    text-anchor="end"
                    fill="#666"
                  >
                    <tspan x="57" dy="0.355em">
                      800
                    </tspan>
                  </text>
                </g>
                <g class="recharts-layer recharts-cartesian-axis-tick">
                  <line
                    orientation="left"
                    width="60"
                    height="235.98958206176758"
                    x="5"
                    y="5"
                    class="recharts-cartesian-axis-tick-line"
                    stroke="#666"
                    fill="none"
                    x1="59"
                    y1="63.997395515441895"
                    x2="65"
                    y2="63.997395515441895"
                  ></line>
                  <text
                    orientation="left"
                    width="60"
                    height="235.98958206176758"
                    stroke="none"
                    x="57"
                    y="63.997395515441895"
                    class="recharts-text recharts-cartesian-axis-tick-value"
                    text-anchor="end"
                    fill="#666"
                  >
                    <tspan x="57" dy="0.355em">
                      1200
                    </tspan>
                  </text>
                </g>
                <g class="recharts-layer recharts-cartesian-axis-tick">
                  <line
                    orientation="left"
                    width="60"
                    height="235.98958206176758"
                    x="5"
                    y="5"
                    class="recharts-cartesian-axis-tick-line"
                    stroke="#666"
                    fill="none"
                    x1="59"
                    y1="5"
                    x2="65"
                    y2="5"
                  ></line>
                  <text
                    orientation="left"
                    width="60"
                    height="235.98958206176758"
                    stroke="none"
                    x="57"
                    y="12.005208969116211"
                    class="recharts-text recharts-cartesian-axis-tick-value"
                    text-anchor="end"
                    fill="#666"
                  >
                    <tspan x="57" dy="0.355em">
                      1600
                    </tspan>
                  </text>
                </g>
              </g>
            </g>
            <g class="recharts-layer recharts-bar">
              <g class="recharts-layer recharts-bar-rectangles">
                <g class="recharts-layer">
                  <g class="recharts-layer recharts-bar-rectangle">
                    <path
                      x="79.33333333333334"
                      y="93.49609327316284"
                      width="114"
                      height="147.49348878860474"
                      radius="0"
                      fill="#8884d8"
                      name="Jan"
                      class="recharts-rectangle"
                      d="M 79.33333333333334,93.49609327316284 h 114 v 147.49348878860474 h -114 Z"
                    ></path>
                  </g>
                  <g class="recharts-layer recharts-bar-rectangle">
                    <path
                      x="222.66666666666669"
                      y="19.749348878860474"
                      width="114"
                      height="221.2402331829071"
                      radius="0"
                      fill="#8884d8"
                      name="Feb"
                      class="recharts-rectangle"
                      d="M 222.66666666666669,19.749348878860474 h 114 v 221.2402331829071 h -114 Z"
                    ></path>
                  </g>
                  <g class="recharts-layer recharts-bar-rectangle">
                    <path
                      x="366"
                      y="63.997395515441895"
                      width="114"
                      height="176.99218654632568"
                      radius="0"
                      fill="#8884d8"
                      name="Mar"
                      class="recharts-rectangle"
                      d="M 366,63.997395515441895 h 114 v 176.99218654632568 h -114 Z"
                    ></path>
                  </g>
                </g>
              </g>
              <g class="recharts-layer"></g>
            </g>
          </svg>
        </div>
      </div>

    
        <div>
          <h1 className="text-2xl m-2">Total Available Inventories</h1>
          <table className="border-2 border-gray-300 ml-8 text-center table-auto text-xl border-spacing-1">
            <tr className="">
              <th className="p-2 bg-gray-200">Inventory Name</th>
              <th className="p-2 bg-gray-200">No of Available Items</th>
              <th className="p-2 bg-gray-200">Total Price</th>
            </tr>

            <tr>
              <td className="p-2 ">Item 1</td>
              <td className="p-2 ">5</td>
              <td className="p-2 ">100</td>
            </tr>
            <tr>
              <td className="p-2 ">Item 2</td>
              <td className="p-2 ">10</td>
              <td className="p-2 ">200</td>
            </tr>
            <tr>
              <td className="p-2 ">Item 3</td>
              <td className="p-2 ">8</td>
              <td className="p-2 ">150</td>
            </tr>
          </table>
        </div>
      </div>
    
  );
};

export default DashBoard;
