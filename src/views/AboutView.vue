<template>
  <main>
    <Camera @takePicture="takePicture" />
    <Gallary />
    <p id="text" class="!text-white"></p>
    <img class="w-full h-full" id="photo" alt="" />
  </main>
</template>
<script setup >
import { ref } from "@vue/reactivity";
import Gallary from "../components/Gallary.vue";
import Camera from "../components/Camera.vue";

const datas = ref("")
function takePicture() {
  let ratio = window.innerHeight < window.innerWidth ? 16 / 9 : 9 / 16;
  const picture = document.querySelector("canvas");
  picture.width = window.innerWidth > 1280 ? window.innerWidth : 1280;
  picture.height = innerWidth / ratio;
  const ctx = picture.getContext("2d");
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(
    document.querySelector("video"),
    0,
    0,
    picture.width,
    picture.height
  );
  var data = picture.toDataURL("image/png");
  var text = document.getElementById("text")
  text.innerHTML = data
  var photo = document.getElementById("photo");
  photo.setAttribute("src", data);
}
console.log(datas.value);
</script>