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
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  layout: "main",
  computed: {
    ...mapState(["isLoggedin", "ethaddress"]),
  },

  mounted() {
    this.$web3.eth.getAccounts((error, accounts) => {
      console.log("logging accounts data");
      this.$store.commit("set_logging", true);
      this.$store.commit("set_addredd", accounts[0]);
      console.log("redirecting");
      window.$nuxt.$router.push("/admin/youyou");
      console.log("redirected");
    }),
      this.$portis.onLogin((walletAddress, email, reputation) => {
        console.log("logging login daata");
        console.log(walletAddress, email, reputation);
      });
  },
  methods: {
    checklogin() {
      if (this.$store.state.isLoggedin) {
      }
    },
  },
};
</script>

<style>
</style>
