<template>
  <div class="container-fluid">
    <button class="btn btn-success btn float-right" type="submit" style="margin: 10px 10px;"> Login With Portis</button>         
    
        <div class="box">
          <div class="text">
            <h1 style="margin: 40px 292px;">Property Explorer</h1> 
          </div>
          
             <input type="search" id="search" placeholder="Search">
             
        </div>
    </div>
</template>
<script>
export default {
  
}
</script>


<style scoped>
.nav-bar{
  display: flex;
}

.nav-bar leftNav{
background-color: aqua;
width: 50%;
}
.rightNav b-button{
  background-color: black;
  text-align: right;
  
}

.box{
  font-size: 20px!important;
    width: 100%;
    padding: 15.5px 15.5px 15.5px 50px;
    padding: 270px;
}

#search {
  
    margin: 0 auto;
    display: grid;
}
</style>