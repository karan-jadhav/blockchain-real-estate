<template>
  <b-container>
    <b-row class="justify-content-center mt-5">
      <b-col md="4" class="mt-5">
        <h1>Explore Blockchain</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="6" offset="3" class="mt-4">
        <b-input-group class="mt-3">
          <b-form-input placeholder="Address or Property ID"></b-form-input>
          <b-input-group-append>
            <b-button variant="danger">Search</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  layout: "main",
};
</script>

<style>
</style>