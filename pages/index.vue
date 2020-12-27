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
      <b-row class="mt-5 justify-content-md-center">
        <b-col md="6" offset="4">
          <b-button @click="showLogin" pill variant="primary">
            Login With Portis
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  layout: "main",
  methods: {
    showLogin() {
      this.$portis.showPortis();
    },
  },
};
</script>

<style>
</style>
