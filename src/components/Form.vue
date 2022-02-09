<template>
<div class="container form">
  <div  class="row">
    <div class="col-lg-8 col-12  m-auto">
      <h2 class="form-title">Персональные данные</h2>
      <div class="form-input" :class="{active: validation}">
        <label for="name" >Имя</label>
        <input v-model="personal_info.name" id="name">
      </div>
      <div class="form-input" :class="{active: validation}">
        <label for="age">Возраст</label>
        <input v-model="personal_info.age" id="age">
      </div>

      <div class="child-wrapper">
        <div class=" d-flex justify-content-between align-items-center mb-3">
          <h2 class="form-title m-0">Дети (макс. 5)</h2>
          <button v-if="children.length<5" @click="addChild()" class="add-child"><img class="mr-2" src="../assets/Union.svg"> Добавить ребенка</button>
        </div>

        <div class="child-form" v-for="child in children" :key="child.id">
          <div class="form-input" :class="{active: child.valid === true}">
            <label :for="'child-name'+child.id">Имя</label>
            <input  v-model="child.name" :id="'child-name'+child.id">
          </div>
          <div class="form-input" :class="{active: child.valid === true}">
            <label :for="'child-age'+child.id">Возраст</label>
            <input  v-model="child.age" :id="'child-age'+child.id">
          </div>
          <span @click="removeChild(child.id)" class="delete-child">Удалить</span>
        </div>


        <button v-if="showSave" @click="saveData()" class="save">Сохранить</button>
      </div>



    </div>
  </div>

</div>
</template>

<script>

export default {
  name: "Form",
  data(){
    return{
      validation:false,
      children:[],
      personal_info:{
        name:'',
        age:''
      },
    }
  },
  computed:{
      showSave(){
        if(this.children.length === 0){
          return false
        }
        else{
          return true
        }
      },

  },
  methods:{
    addChild(){
      if(this.children.length<5){
        this.children.push(
            {
              valid:false,
              id:Date.now(),
              name:'',
              age:''
            }
        )
      }
      else{
        alert('Max child is 5')
      }
    },
    removeChild(id){
     this.children =  this.children.filter(item=>item.id !== id)
      if(this.children.length === 0){
        localStorage.removeItem('children')
      }
    },
    saveData(){
         if(this.personal_info.name === '' || this.personal_info.age === ''){
           this.validation = true;
         }

         else{
           this.validation = false
           localStorage.setItem('children', JSON.stringify(this.children))
           localStorage.setItem('personal_info', JSON.stringify(this.personal_info))
           alert('You have saved your data')
         }













    }

  },
  mounted(){
    const children  = JSON.parse(localStorage.getItem('children'))
    const personal_info  = JSON.parse(localStorage.getItem('personal_info'))
    if(children){
      this.children = children;
    }
    if(personal_info){
      this.personal_info = personal_info
    }
  }

}
</script>

<style scoped>
.form{
  margin-top:30px;
}
.form-input.active{
  border:1px solid red;
}
.form-title{
  font-size:16px;
  color:#111;
  margin-bottom:20px;
}

.form-input{
  margin-bottom: 10px;
  border:1px solid #f1f1f1;
  padding:10px;
  font-size:13px;
  color: rgba(17, 17, 17, 0.48);
  border-radius:4px;


}
.form-input input, .form-input label{
  width: 100%;

}
.form-input label{
  margin-bottom: 0;
  padding-bottom:5px;
}
.form-input input, .form-input input:focus{
  outline:none;
  border:none;
}
.child-wrapper{
  margin-top: 30px;
}
.add-child{
  color:#01A7FD;
  border:2px solid #01A7FD;
  padding:10px 30px;
  background: none;
  font-size:14px;
  border-radius:40px;
}
.child-form{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.child-form .form-input{
  width:100%;
  margin-right: 20px;
}
.delete-child{
  color:#01A7FD;
  font-size:14px;
  cursor:pointer;
}
.save{
  background: #01A7FD;
  border:none;
  margin-top: 40px;
  border-radius:30px;
  color:#fff;
  padding:10px 25px;
  margin-bottom:100px;
}
@media(max-width:576px){
  .child-form{
    flex-direction: column;
  }
}
</style>