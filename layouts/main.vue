<template>
  <div>
    <b-navbar toggleable="sm" type="dark">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <b-navbar-brand to="/">BlockChain Real Estate</b-navbar-brand>

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-text><b-link to="/explore"> Explore </b-link> </b-nav-text>
          <b-nav-text><b-link to="/admin"> &nbsp; admin </b-link> </b-nav-text>
          <b-nav-text
            ><b-link> &nbsp; {{ ethaddress }} </b-link>
          </b-nav-text>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <Nuxt />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["isLoggedin", "ethaddress"]),
  },
  mounted() {
    this.$web3.eth.getAccounts((error, accounts) => {
      this.$store.commit("set_logging", true);
      this.$store.commit("set_addredd", accounts[0]);
    });
  },
};
</script>

<style>
</style>