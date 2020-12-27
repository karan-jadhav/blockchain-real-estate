<template>
  <div>
    <b-navbar toggleable="sm" type="dark">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <b-navbar-brand to="/">BlockChain Real Estate</b-navbar-brand>

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-text><b-link to="/explore"> Explore</b-link> </b-nav-text>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <Nuxt />
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>