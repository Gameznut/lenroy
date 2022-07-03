<template>
  <div id="app">
    <video autoplay></video>
    <button @click="$emit('takePicture')" class="text-white">snap</button>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data: function () {
    return {
      stream: null,
    };
  },
  methods: {
    init: async function () {
      if (
        "mediaDevices" in navigator &&
        "getUserMedia" in navigator.mediaDevices
      ) {
        let constraints = {
          video: {
            width: { min: 1280 },
            height: { min: 720 },
          },
        };
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        const video = document.querySelector("video");
        video.srcObject = stream;
        video.play();
      }
    },
    getDevices: async function () {
      const devices = await navigator.mediaDevices.enumerateDevices();
    },
  },
  beforeMount: function () {
    this.init();
  },
};
</script>

<style scoped>
video {
  width: 70%;
  background: rgba(0, 0, 0, 0.2);
  display: block;
  margin: auto;
}

button {
  padding: 20px 25px;
  background-color: #24b30000;
  border-radius: 11px;
  border: white 1px solid;
  color: white;
  transition: all 0.4s ease-in-out;
  display: block;
  margin: 30px auto;
}
</style>