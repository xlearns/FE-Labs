<script setup lang="ts">
import { MotionPathPlugin, gsap, Linear } from "gsap/all";
import { onMounted } from "vue";
gsap.registerPlugin(MotionPathPlugin);

const path = $ref(
  "M35.142,3.399 L61.504,16.580 L61.504,114.196 L2.696,149.406 L192.302,247.758 L106.118,304.538"
);
const path2 = $ref(
  "M381.220,6.042 C371.368,10.520 230.144,102.366 230.144,102.366 L59.000,4.000 L1.000,39.000"
);

const path3 = $ref("M553.569,32.188 L159.786,284.247 L4.646,194.838 ");

function finish(cur) {
  console.log(cur, "动画完成");
}
const duration = 2;

function animte(name?) {
  let s = "";
  let repeat = -1;
  if (name == 0) {
    s = "#two";
    repeat = 1;
  } else if (name == 1) {
    s = "#rocket-path";
    repeat = -1;
  } else {
    s = "#three";
    repeat = 1;
  }
  const methods = repeat < 0 ? "to" : "from";
  gsap[methods]("#rocket", {
    duration: duration,
    repeat: repeat,
    ease: Linear.easeNone,
    direction: 180,
    motionPath: {
      path: s,
      align: s,
      autoRotate: false,
      alignOrigin: [0.5, 0.5]
    },
    onComplete: () => {
      finish(s);
    }
  });
}
let i = $ref(0);
function fn() {
  i = ++i % 3;
  animte(i);
}
onMounted(() => {
  // init();
});
</script>

<template>
  <ElButton @click="fn">{{ !(++i % 2) ? "开始" : "next" }}</ElButton>
  <div class="one">
    <svg viewBox="0 0 500 400" width="500" height="500">
      <g
        id="page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <path
          id="rocket-path"
          :d="path"
          stroke="#3c849e"
          stroke-dasharray="5,5"
        ></path>
        <path
          stroke="#76f0f7"
          :d="path"
          stroke-linecap="square"
          stroke-dasharray="50, 500"
          fill="none"
          stroke-width="5px"
        >
          <animate
            ref="dom"
            attributeName="stroke-dashoffset"
            from="0"
            to="-538"
            begin="0s"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
      </g>
      <!-- 三角 -->
      <path
        fill-rule="evenodd"
        stroke="rgb(93, 249, 255)"
        stroke-width="1px"
        stroke-dasharray="2, 4"
        stroke-linecap="round"
        stroke-linejoin="miter"
        opacity="0.702"
        fill="rgb(93, 249, 255)"
        d="M63.532,180.838 L63.532,170.698 L75.699,187.935 L52.379,184.893 L63.532,180.838 Z"
      ></path>
    </svg>
    <svg
      class="absolute top-[0px] left-[100px]"
      id="rocket"
      x="0"
      y="0"
      viewBox="0 0 72 72"
      version="1.1"
      width="72"
      height="72"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="color">
        <path
          fill="#FCEA2B"
          d="M16.12,48.114 c-3.1584,3.1634-4.6518,7.5601-3.97,11.688c4.128,0.6763,8.5223-0.8196,11.683-3.977c3.1584-3.1634,4.6518-7.5601,3.97-11.688 C23.675,43.4607,19.2807,44.9566,16.12,48.114z"
        />
        <path
          fill="#61B2E4"
          d="M31.973,45.839 c-0.1919,0.966-0.6657,1.8536-1.3616,2.5507c-0.3389,0.3373-0.7246,0.6241-1.1452,0.8516 c2.1626,2.9716,3.7579,6.2847,4.6952,9.7506c0.7092-0.6216,1.3906-1.2786,2.0417-1.9685c1.9136-2.0343,3.5491-4.3376,4.8516-6.8326 c1.2507-2.4201,2.1751-4.9922,2.7442-7.6354c-3.7285,1.9544-7.7719,3.0771-11.826,3.2837L31.973,45.839z"
        />
        <path
          fill="#92D3F5"
          d="M14.923,35.749 c-0.69,0.65-1.3472,1.3303-1.9691,2.0383c3.4682,0.9313,6.7846,2.521,9.7604,4.6784c0.2264-0.414,0.5104-0.7939,0.8435-1.1281 c0.6949-0.6935,1.5791-1.1665,2.5417-1.3598c0.2106-4.0507,1.3364-8.0899,3.293-11.814c0.0019-0.0037,0.0037-0.0074,0.0056-0.0112 c-2.645,0.5687-5.2188,1.4928-7.6405,2.7434C19.2616,32.199,16.9577,33.8349,14.923,35.749L14.923,35.749z"
        />
        <path
          fill="#EA5A47"
          d="M34.821,20.747 c-5.2314,5.2507-8.3665,12.1635-8.7228,19.233c1.6376-0.3318,3.3326,0.1781,4.515,1.3584c1.186,1.1868,1.6956,2.8903,1.356,4.5332 c7.0754-0.3609,13.9919-3.5024,19.242-8.7398c6.7117-6.7229,9.8843-16.067,8.4337-24.839 c-1.7318-0.2827-3.5044-0.3879-5.2915-0.3141c-7.1741,0.2926-14.2097,3.4508-19.532,8.7677L34.821,20.747z M45.07,20.2179 c1.8412-1.8413,4.8269-1.8418,6.6687-0.0012c0.0004,0.0004,0.0008,0.0008,0.0012,0.0012c1.8418,1.8407,1.8424,4.8255,0.0012,6.6667 c-0.0004,0.0004-0.0008,0.0008-0.0012,0.0012c-1.8419,1.8404-4.8274,1.8398-6.6685-0.0014 C43.2297,25.0438,43.229,22.0592,45.07,20.2179z"
        />
        <path
          fill="#F1B31C"
          d="M26.538,52.037 c-0.8756,0.9831-1.8894,1.8467-3.0072,2.5617c-3.4907,2.2228-7.7244,2.8345-11.441,1.653c-0.1495,1.1964-0.1293,2.3916,0.06,3.5496 c4.128,0.6763,8.5223-0.8195,11.683-3.9769c1.1048-1.1131,2.0209-2.3956,2.7055-3.7874L26.538,52.037z"
        />
        <path
          fill="#D22F27"
          d="M26.204,38.687 c-0.033,0.4281-0.0559,0.8558-0.0684,1.283c1.6271-0.316,3.305,0.1967,4.4773,1.3682c1.186,1.1868,1.6956,2.8903,1.356,4.5332 c7.075-0.3618,13.9907-3.5038,19.24-8.7412c1.4932-1.5067,2.8266-3.1619,3.9746-4.9339c-1.3472,1.2267-2.8051,2.3344-4.353,3.3074 c-7.5574,4.7109-16.6938,5.8918-24.627,3.1832L26.204,38.687z"
        />
        <polygon points="36.1664,-14.4511 36.1664,-14.4511 36.1664,-14.4511" />
        <path
          fill="#61B2E4"
          d="M24.039,48.551 c0.8703-0.4372,1.7206-0.9178,2.5501-1.438c2.4433-1.5323,4.6776-3.4046,6.6294-5.5552l0.0028-0.0028 c1.8803-2.0911,3.4745-4.4187,4.7329-6.9122c0.061-0.1204,0.0967-0.252,0.1047-0.3867 C34.6604,33.5028,23.2129,44.5071,24.039,48.551L24.039,48.551z"
        />
      </g>
      <g id="hair" />
      <g id="skin" />
      <g id="skin-shadow" />
      <g id="line">
        <path
          d="M48.405,29.49c-3.2761,0-5.941-2.6641-5.941-5.9392s2.6649-5.9392,5.941-5.9392c3.2761,0,5.941,2.6641,5.941,5.9392 S51.6811,29.49,48.405,29.49z M48.405,19.5913c-2.1839,0-3.9607,1.7757-3.9607,3.9595c0,2.1837,1.7768,3.9595,3.9607,3.9595 c2.1838,0,3.9607-1.7758,3.9607-3.9595C52.3657,21.367,50.5888,19.5913,48.405,19.5913z"
        />
        <path
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="1.949"
          d="M20.653,45.063c-1.678,0.7083-3.2222,1.7475-4.5331,3.0508c-3.1581,3.1631-4.6517,7.5594-3.9703,11.687 c4.128,0.6762,8.5221-0.8196,11.683-3.9769c1.3043-1.3104,2.3446-2.8541,3.0537-4.5318"
        />
        <path
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="1.949"
          d="M14.923,35.749c-0.69,0.65-1.3472,1.3303-1.9691,2.0383c3.4682,0.9313,6.7846,2.521,9.7604,4.6784 c0.2264-0.414,0.5104-0.7939,0.8435-1.1281c0.6949-0.6935,1.5791-1.1665,2.5417-1.3598c0.2106-4.0507,1.3364-8.0899,3.293-11.814 c0.0019-0.0037,0.0037-0.0074,0.0056-0.0112c-2.645,0.5687-5.2188,1.4928-7.6405,2.7434 C19.2616,32.199,16.9577,33.8349,14.923,35.749L14.923,35.749z"
        />
        <path
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="1.949"
          d="M31.973,45.839c-0.1919,0.966-0.6657,1.8536-1.3616,2.5507c-0.3389,0.3373-0.7246,0.6241-1.1452,0.8516 c2.1626,2.9716,3.7579,6.2847,4.6952,9.7506c0.7092-0.6216,1.3906-1.2786,2.0417-1.9685c1.9136-2.0343,3.5491-4.3376,4.8516-6.8326 c1.2507-2.4201,2.1751-4.9922,2.7442-7.6354c-3.7285,1.9544-7.7719,3.0771-11.826,3.2837L31.973,45.839z"
        />
        <path
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="1.949"
          d="M31.83,43.345c0.2696,0.8863,0.2506,1.6919,0.1371,2.5245c7.0759-0.3611,13.993-3.5031,19.243-8.7412 c6.7106-6.7215,9.8836-16.063,8.4351-24.834c-8.7712-1.4365-18.108,1.742-24.823,8.4508 c-5.2322,5.2509-8.3679,12.164-8.7242,19.234c0.9413-0.1907,1.8984-0.0942,2.7693,0.2387"
        />
        <path
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="1.949"
          d="M37.072,34.196l-0.0002,0c-2.4156,1.2183-4.6724,2.7626-6.6996,4.5844c-2.0849,1.8911-3.9,4.0556-5.3844,6.4211 c-0.5039,0.8031-0.9684,1.6273-1.3917,2.4694"
        />
      </g>
    </svg>

    <svg viewBox="0 0 500 400" width="500" height="500">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path
          id="two"
          stroke-dasharray="2, 6"
          stroke="rgb(93, 249, 255)"
          stroke-width="2px"
          stroke-linecap="round"
          stroke-linejoin="miter"
          fill="none"
          :d="path2"
        />
        <path
          stroke="#76f0f7"
          :d="path2"
          stroke-linecap="square"
          stroke-dasharray="50, 500"
          fill="none"
          stroke-width="5px"
        >
          <animate
            ref="dom"
            attributeName="stroke-dashoffset"
            from="0"
            to="-538"
            begin="0s"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>

        <path
          fill-rule="evenodd"
          fill="rgb(53, 248, 255)"
          d="M48.559,9.068 L39.085,23.280 L38.295,16.174 L30.400,13.016 L48.559,9.068 Z"
        />
        <path
          fill-rule="evenodd"
          fill="rgb(53, 248, 255)"
          d="M322.920,40.501 L313.126,55.192 L312.310,47.847 L304.149,44.582 L322.920,40.501 Z"
        />
      </g>
    </svg>

    <svg
      viewBox="0 0 500 400"
      width="500"
      height="400"
      class="absolute right-0 top-0"
    >
      <path
        fill-rule="evenodd"
        stroke="rgb(120, 250, 255)"
        stroke-width="2px"
        stroke-dasharray="16, 40"
        stroke-linecap="round"
        stroke-linejoin="miter"
        fill-opacity="0"
        fill="rgb(255, 255, 255)"
        :d="path3"
        id="three"
      />

      <path
        fill-rule="evenodd"
        fill="rgb(53, 248, 255)"
        d="M213.559,249.068 L204.085,263.280 L203.295,256.174 L195.400,253.016 L213.559,249.068 Z"
      />
      <path
        fill-rule="evenodd"
        fill="rgb(53, 248, 255)"
        d="M357.559,156.068 L348.085,170.280 L347.295,163.174 L339.400,160.016 L357.559,156.068 Z"
      />
      <path
        fill-rule="evenodd"
        fill="rgb(53, 248, 255)"
        d="M518.559,54.068 L509.085,68.280 L508.295,61.174 L500.400,58.016 L518.559,54.068 Z"
      />
      <path
        fill-rule="evenodd"
        stroke="rgb(93, 249, 255)"
        stroke-width="1px"
        stroke-dasharray="2, 4"
        stroke-linecap="round"
        stroke-linejoin="miter"
        fill="rgb(93, 249, 255)"
        d="M23.038,204.849 L23.038,197.658 L31.667,209.882 L15.128,207.725 L23.038,204.849 Z"
      />
      <path
        fill-rule="evenodd"
        stroke="rgb(93, 249, 255)"
        stroke-width="1px"
        stroke-dasharray="2, 4"
        stroke-linecap="round"
        stroke-linejoin="miter"
        fill="rgb(93, 249, 255)"
        d="M54.206,222.404 L54.206,215.970 L61.927,226.908 L47.128,224.978 L54.206,222.404 Z"
      />
      <path
        fill-rule="evenodd"
        stroke="rgb(93, 249, 255)"
        stroke-width="1px"
        stroke-dasharray="2, 4"
        stroke-linecap="round"
        stroke-linejoin="miter"
        fill="rgb(93, 249, 255)"
        d="M137.206,270.404 L137.206,263.970 L144.927,274.908 L130.128,272.978 L137.206,270.404 Z"
      />
      <path
        fill-rule="evenodd"
        stroke="rgb(120, 250, 255)"
        stroke-width="2px"
        stroke-dasharray="16, 40"
        stroke-linecap="round"
        stroke-linejoin="miter"
        fill="none"
        d="M552.046,5.707 L552.276,31.571 "
      />
    </svg>
  </div>
</template>
