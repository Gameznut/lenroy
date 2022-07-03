<template>
  <div class="m-auto block w-[400px] mt-[2rem] bg-red-5">
    <table style="width: 100%">
      <tr>
        <th>Courses</th>
        <th>Sign</th>
      </tr>
      <tr>
        <td>EIE323</td>
        <td><button @click="sign" :disabled="!isComplete">sign</button></td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
import axios from "axios";
// disable the button
const isComplete = ref(false);
const sign = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
};
function showPosition(position) {
  "Latitude: " +
    position.coords.latitude +
    "Longitude: " +
    position.coords.longitude;
  if (position.coords.latitude < 7 && position.coords.longitude < 4) {
    alert("You are not in class");
  }
  console.log(
    "Latitude: " +
      position.coords.latitude +
      "Longitude: " +
      position.coords.longitude
  );
}

axios.get("http://127.0.0.1:5000/activateButton").then((data) => {
  isComplete.value = data.data
});

</script>

<style scoped>
td,
th {
  width: 100%;
}

th {
  padding: 1rem;
  font-size: 20px;
}

button {
  width: 100%;
  padding: 1rem 4rem;
  border: none;
  border-radius: 0;
}

button:disabled {
  color: red;
}

button:disabled:hover {
  color: red;
  background-color: transparent;
  cursor: no-drop;
}

button:hover {
  background-color: white;
  color: black;
}

table,
th,
td {
  border: 1px solid black;
  text-align: center;
}
</style>