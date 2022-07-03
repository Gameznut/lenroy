<template>
  <div class="relative">
    <!-- <div>
      <div
        v-if="openCamera"
        id="contain"
        class="absolute h-screen w-screen z-[100] bg-[#b6a0a09c] -top-[1.4rem]"
      >
        <div class="z-[200] sticky">
          <Camera />
          <Gallary/>
        </div>
      </div>
    </div> -->
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
            <input type="text" v-model="student.matricNo" name="matric no" required />
            <label class="label">Matric Number</label>
          </div>
          <div class="relative my-[3.5rem]">
            <input type="password" v-model="student.password" name="password" required />
            <label class="label">Password</label>
          </div>
          <div class="relative">
            <input type="text" v-model="student.programme" name="programme" required />
            <label class="label">Programme</label>
          </div>
          <div class="flex mt-[3rem] gap-[1rem]">
            <button
              @click="submit"
               :disabled="
                student.matricNo != '' && student.password != '' && student.programme != '' ? false : true
              "
              type="submit"
              class="
                hover:bg-[#37db37] hover:border-transparent hover:text-black
                !text-white
              "
            >
              Submit
            </button>
            <button
              type="button"
              class="
                hover:bg-[#6363d8] hover:border-transparent hover:text-black
                !text-white
              "
              @click="openCamera = !openCamera"
            >
              Camera
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import axios from "axios"
let openCamera = ref<boolean>(false);

const student = ref({
  matricNo: "",
  password: "",
  programme:""
});

const submit = async () => {
  if (student.value.matricNo != "" && student.value.password != "" && student.value.programme != "") {
    const data = await axios.post("http://127.0.0.1:5000/signup", {
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
  outline: 1px solid rgb(0, 0, 0);
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
  cursor:no-drop;
}
button:disabled:hover {
  background-color: transparent !important;
  border: 1px white solid;
}
</style>