<template>

  <div>
    <b-container>
      <b-row class="justify-content-md-center mt-5">
        <b-col md="8">
          <h1>Welcome To Blockchain Real Estate.</h1>
        </b-col>
      </b-row>
      <b-row class="mt-5 justify-content-md-center">
        <b-col md="4">
          <p>Decentralized Property Exchange Platform</p>
        </b-col>
      </b-row>
    </b-container>

  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        blockchain-real-estate
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  layout: "main",
};
</script>

<style>
</style>
