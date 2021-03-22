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
      console.log(accounts[0]);

      // this.$store.commit("set_logging", true);
      // this.$store.commit("set_addredd", accounts[0]);

      // this.$cookies.set("isLoggedin", true);
      // this.$cookies.set("ethadd", accounts[0]);
      this.$setcookie(true, accounts[0]);
      console.log("redirectingggggggggg");
      // window.$nuxt.$router.push("/admin/changeAdmin");
    });
  },
};
</script>

<style>
</style>
