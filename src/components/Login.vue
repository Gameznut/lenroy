<template>
  <main class="relative">
    <div class="flex min-h-[90vh] h-full">
      <div class="m-auto max-w-[600px] w-full">
        <div class="w-full max-h-[250px] mb-[3.5rem] flex">
          <div class="mx-auto w-[150px]">
            <img
              src="https://cuportal.covenantuniversity.edu.ng/assets/img/CU_LOGO.jpg"
              alt=""
            />
          </div>
        </div>
        <form action="" @submit.prevent>
          <div class="relative">
            <input type="text" v-model="student.matricNo" required />
            <label class="label">Matric Number</label>
          </div>
          <div class="relative my-[3.5rem]">
            <input
              type="password"
              autocomplete="false"
              v-model="student.password"
              required
            />
            <label class="label">Password</label>
          </div>
          <div class="flex mt-[3rem] gap-[1rem]">
            <button
              @click="submit"
              :disabled="
                student.matricNo != '' && student.password != '' ? false : true
              "
              type="submit"
              class="
                hover:bg-[#37db37] hover:border-transparent hover:text-black
                !text-white
              "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import { onMounted, onUpdated } from "@vue/runtime-core";
import axios from "axios";
const student = ref({
  matricNo: "",
  password: "",
});

const submit = async () => {
  if (student.value.matricNo != "" && student.value.password != "") {
    const data = await axios.post("http://127.0.0.1:5000/login", {
      data: student.value,
    });
    console.log(data);
  }
};
</script>

<style scoped>
input,
button {
  width: 100%;
  font-size: 27px;
  padding: 24px;
  color: rgb(255, 255, 255);
  /* outline: 1px solid rgb(0, 0, 0); */
}

input:focus,
input:hover {
  outline: 1px solid rgb(94, 255, 0);
}

.label {
  position: absolute;
  top: 45px;
  left: 24px;
  transition: 0.4s ease-in-out;
  transform: translateY(-50%);
  padding: 0 1rem;
  font-weight: 700;
  color: #b3b3b3;
  font-size: 27px;
}

input:valid {
  background-color: transparent;
}

input .label:hover,
input:hover + .label,
input:focus + .label,
input:valid + .label {
  top: -20px;
  left: 0;
  /* text-shadow: -1px 0px 8px rgb(94, 255, 0); */
}

button:disabled {
  color: red !important;;
}
button:disabled:hover {
  background-color: transparent !important;
  border: 1px white solid;
}
</style>