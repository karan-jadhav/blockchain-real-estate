<template>
  <div>
    <b-container>
      <b-row class="justify-content-md-center mt-5">
        <b-col md="8">
          <h1>Welcome To Blockchain Real Estate.</h1>
        </b-col>
      </b-row>
      <b-row class="mt-5 justify-content-md-center">
        <b-col md="4" cl>
          <p>Decentralized Property Exchange Platform</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  layout: "main",

  data() {
    return {
      msg: "Admin Page",
    };
  },
  mounted() {
    this.$web3.eth.getAccounts((error, accounts) => {
      console.log(accounts);
    });
  },
};
</script>
