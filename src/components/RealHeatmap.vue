<script>
import { DateTime } from "luxon";
import { state } from "../state";
import { reactive } from "vue";
import TryPage from './TryPage.vue'
// import Popper from 'vue-popperjs'
import "vue-popperjs/dist/vue-popper.css";

const currDate = DateTime.now().toFormat("yyyy-MM-dd");
const loading = reactive({
  loading: true,
});
const coords = reactive({
  x: 0,
  y: 0,
  showtooltip: false,
  gain: null,
  date: null,
});

export default {
  components: {
    // Popper
    TryPage
  },
  data() {
    return {
      coords,
      loading,
      state,
      currDate,
      Green1: "rgb(51, 204, 51)",
      Green2: "rgb(104, 217, 104)",
      Green3: "rgb(122, 222, 122)",
      Green4: "rgb(157, 231, 157)",
      Red1: "rgb(255, 0, 0)",
      Red2: "rgb(255, 67, 67)",
      Red3: "rgb(255, 89, 89)",
      Red4: "rgb(255, 133, 133)",
      Grey: "#e1e1e1",
    };
  },

  methods: {
    increment() {
      console.log("click");
      state.changeFOLoading();
      state.clickOnFO();
      setTimeout(() => {
        state.changeFOLoading();
      }, 1000);
    },
    async showTooltip(el) {
      console.log(el.target.attributes.date.value);
      coords.date = DateTime.fromJSDate(
        new Date(el.target.attributes.date.value)
      ).toFormat("yyyy-MM-dd");
      coords.gain = el.target.dataset?.gain ?? null;
      if (
        parseInt(el.target.attributes.x?.value) + 225 >
        parseInt(el.fromElement.attributes.width?.value)
      ) {
        coords.x = el.target.attributes.x.value - 175;
        coords.y = el.target.attributes.y.value - 30;
      } else {
        coords.x = el.target.attributes.x.value - 30;
        coords.y = el.target.attributes.y.value - 30;
      }
      coords.showtooltip = true;
      console.log(el);
    },
    hideTooltip() {
      coords.showtooltip = false;
      coords.x = 0;
      coords.y = 0;
      coords.gain = null;
      coords.date = null;
    },
  },
};
</script>

<template>
  <div id="calendar_container" style="background-color: rgb(255, 255, 255)">
    <img id="logo_img" src="/static/images/zerodha-logo.svg" />
    <!-- <Popper
    trigger="hover"
    :options="{
      placement: 'top',
      modifiers: { offset: { offset: '0,0px' } }
    }"> -->
    <div
      v-if="coords.showtooltip"
      class="day-cell-tooltip"
      :style="{ left: `${coords.x}px`, top: `${coords.y}px` }"
    >
      <span v-if="coords.gain">
        <strong>Gross realised P&amp;L</strong>
        on {{ coords.date }}:
        <strong>{{ coords.gain }}</strong>
      </span>
      <span v-if="coords.gain === null"> No data on {{ coords.date }} </span>
    </div>

    <!-- <button slot="reference">
      Reference Element
    </button>
  </Popper> -->
    <div id="calendar_year" style="position: relative; display: block">
        <try-page></try-page>
      <svg
        width="990"
        class="calendar-heatmap"
        id="calendar_heatmap"
        height="13"
        :style="{position:'absolute',top:132,left:0,background:'transparent'}"
      >
        <g>
          <rect
            class="calendar-heatmap-legend"
            width="13"
            height="13"
            x="855"
            y="0"
            :fill="Green4"
          ></rect>
          <rect
            class="calendar-heatmap-legend"
            width="13"
            height="13"
            x="870"
            y="0"
            :fill="Green3"
          ></rect>
          <rect
            class="calendar-heatmap-legend"
            width="13"
            height="13"
            x="885"
            y="0"
            :fill="Green2"
          ></rect>
          <rect
            class="calendar-heatmap-legend"
            width="13"
            height="13"
            x="900"
            y="0"
            :fill="Green1"
          ></rect>
          <text
            class="calendar-heatmap-legend-text calendar-heatmap-legend-text-less"
            x="800"
            y="11"
          >
            Min. profit
          </text>
          <text
            class="calendar-heatmap-legend-text calendar-heatmap-legend-text-more"
            x="917"
            y="11"
          >
            Max. profit
          </text>
        </g>
        <g>
          <rect
            class="calendar-heatmap-legend"
            width="13"
            height="13"
            x="655"
            y="0"
            :fill="Red4"
          ></rect>
          <rect
            class="calendar-heatmap-legend"
            width="13"
            height="13"
            x="670"
            y="0"
            :fill="Red3"
          ></rect>
          <rect
            class="calendar-heatmap-legend"
            width="13"
            height="13"
            x="685"
            y="0"
            :fill="Red2"
          ></rect>
          <rect
            class="calendar-heatmap-legend"
            width="13"
            height="13"
            x="700"
            y="0"
            :fill="Red1"
          ></rect>
          <text
            class="calendar-heatmap-legend-text calendar-heatmap-legend-text-less"
            x="600"
            y="11"
          >
            Min. loss
          </text>
          <text
            class="calendar-heatmap-legend-text calendar-heatmap-legend-text-more"
            x="717"
            y="11"
          >
            Max. loss
          </text>
        </g>
      </svg>
    </div>

    <!---->
    <!---->
  </div>
</template>

<style></style>