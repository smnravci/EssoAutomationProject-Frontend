<template>
    <div class="container">
      <div class="card">
        <div class="card-body">
          <h5>Welcome to the Esso Otomation Application Project! First Log in or If you do not have an account, please register to see cities and countries.</h5>
            <div class="clearfix">
              <button class="button" @click="login()">Log in</button>
              <button class="button" @click="register()">Register</button>
            </div>
        </div>
      </div>
    </div>
</template>
  
<script>

 export default {
  name: "HomeView",
  methods:{
    login(){
      this.$router.push({name:'Login'});
    },
    register(){
      this.$router.push({name:'Register'});
    }
  }
 };
</script>

<style>
  .container{
    width: 35%;
    height: -50px;
    padding: 240px 10px 240px 100px;
  }
  button{
    background-color: rgb(26, 15, 97);
    width: 60%;
    color: rgb(254, 254, 254);
    border: 2px black; 
    border-radius: 30px;       
    padding: 15px 35px;    
    text-align: center;    
    text-decoration: none;    
    display: inline-block;    
    font-size: 18px;  
    margin: 5px 65px;    
    cursor: pointer;
    transition-duration: 0.3s;
}
button:hover{
    background-color: lightblue;
}
</style>