<template>
  <div>
    <b-container>
      <b-row class="justify-content-md-center mt-5">
        <b-col md="8">
          <h1>Logging You In....</h1>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  layout: "main",
  mounted() {
    this.$web3.eth.getAccounts((error, accounts) => {
      console.log("logging accounts data");
      this.$store.commit("set_logging", true);
      this.$store.commit("set_addredd", accounts[0]);
      window.$nuxt.$router.push("/admin/changeAdmin");
    });
  },
};
</script>

<style>
</style>
