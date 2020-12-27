<template>
<div>
<div class="container-fluid">
<nav class="nav-bar">
<ul class="nav-list">
<div class="logo">
<img src="/img/satyamevJayateLogo.jpeg" alt="LOGO">
</div>
<li><a href="#">Home</a> </li>
<li><a href="#">Change Admin</a></li>
<li><a href="#">Register Land</a> </li>
</ul> 
</nav>
</div>

<div class="container-fluid" style="padding: 30px">
<form action="post">
<label for="buyer">Buyer Address:</label><br>
<input type="text" id="buyer" name="buyer"><br><br>
<label for="buyer">Seller Address:</label><br>
<input type="text" id="seller" name="seller"><br><br>
<label for="buyer">Logitude:</label><br>
<input type="text" id="longitude" name="longitude"><br><br>
<label for="buyer">Latitude:</label><br>
<input type="text" id="latitude" name="latitude"><br><br>
<label for="buyer">Property Address:</label><br>
<input type="text" id="propertyadd" name="propertyadd"><br><br>
<label for="buyer">Property Price:</label><br>
<input type="text" id="propertyprice" name="propertyprice"><br>
</form>
</div> 
</div>
</template>

<script>
export default {
  
}
</script>


<style scoped>
*{
margin: 0px;
padding: 0px;
}

label{
color: red;
}

.container-fluid{
background-image: url('/img/backgroundImage.jpg');
background-repeat: no-repeat;
background-attachment: fixed;
background-size: 100% 100%;
}

form{
width: 300px;
margin: 0 auto;
}
.nav-bar{
width: 100%;
display: flex; 
} 

.logo img{
margin: 3px; 
justify-content: left;
align-items: left;
width: 40%; 
}

.nav-list{
width: 100%;
/* background-color: hotpink; */
display: flex;
text-decoration: none; 
align-items: center;
}

.nav-list li{ 
padding: 20px 20px;
list-style: none; 
display: flex; 
}

.nav-list li a:hover{ 
color: lawngreen;
text-decoration: none;
}

</style>
