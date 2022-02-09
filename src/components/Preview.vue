<template>
<div>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-12 m-auto">
        <h3 class="title">Персональные данные</h3>
        <h2 v-if="personal_info.name !== '' && personal_info.age !== ''" class="name">{{personal_info.name}}, {{personal_info.age}} лет </h2>

        <h3 class="title">Дети</h3>
        <div v-for="item in children" :key="item.id">

          <div v-if="item.name !==''" class="preview-child">
            {{item.name}} {{item.age}} <span v-if="item.age!==''">лет</span>
          </div>
      </div>

      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Preview",
  data(){
    return{

        personal_info:{
          name:'',
          age:''
        },
        children:[]

    }
  },
  mounted(){
    this.children  = JSON.parse(localStorage.getItem('children'))
    this.personal_info  = JSON.parse(localStorage.getItem('personal_info'))
  }
}
</script>

<style scoped>
.name{
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 60px;
}
.title{
  font-size: 14px;
  margin-top: 30px;
  margin-bottom:20px;
}
.preview-child{
  background: #F1F1F1;
  border-radius: 5px;
  font-weight: 600;
  padding:10px 20px;
  display: inline-block;
  margin-bottom: 20px;
}
</style>