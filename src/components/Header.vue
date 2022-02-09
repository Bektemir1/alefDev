<template>
<div class="header">
  <div class="container">
    <div class="d-flex justify-content-between  align-items-center pt-4 pb-4">
      <a> <img src="../assets/logo.png"></a>
      <ul class="d-flex menu m-0">
        <li class="menu-item"><router-link class="router-link" to="/alefDev">Форма</router-link></li>
        <li class="menu-item"><router-link class="router-link" to="/preview">Превью</router-link></li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.header{
  border-bottom:1px solid #e7e7e7;
}

.menu-item {
  list-style: none;
  margin-right:20px;

  font-size:14px;
}
.menu-item .router-link, .menu-item .router-link{
  color: rgba(17, 17, 17, 0.48);
  text-decoration: none;
}
</style>