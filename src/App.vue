<script setup lang="ts">
import { onMounted } from "@vue/runtime-core";
import { RouterLink, RouterView } from "vue-router";

onMounted(() => {
  const links = document.querySelectorAll(".link");
  links.forEach((link) => {
    link.classList.add(".active");
  });
});
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <div class="link active">
          <RouterLink :to="{ name: 'home' }">Home</RouterLink>
        </div>
        <div class="link">
          <RouterLink :to="{ name: 'student-signup' }">Sign Up</RouterLink>
        </div>
        <div class="link">
          <RouterLink :to="{ name: 'student-login' }">Login</RouterLink>
        </div>
        <div class="link">
          <RouterLink :to="{ name: 'lecturer-signup' }">Lecturer Sign Up</RouterLink>
        </div>
        <div class="link">
          <RouterLink :to="{ name: 'lecturer-login' }">Lecturer Login</RouterLink>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>


<style>
nav {
  display: flex;
  justify-content: center;
  gap: 3rem;
  font-size: 2rem;
}
.link {
  color: aliceblue;
  transition: all 0.4s ease;
}

.link:hover {
  color: rgb(214, 127, 255);
}

.active {
  color: rgb(180, 50, 240);
}
</style>
