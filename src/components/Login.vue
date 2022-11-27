<template>
        <div class="container">
            <div class="card">
                <div class="card-body" >
                    <h1>Login Page</h1>

                        <label for="username"><b>Username</b></label>
                        <input v-model="user.username" ref="username" type="text" placeholder="Enter username" name="username"/>
                
                        <label for="pwd"><b>Password</b></label>
                        <input v-model="user.password" ref="psw" type="password" placeholder="Enter password" name="pwd"/>

                        <label class="form-check-label">
                            <input class="form-check-input" type="checkbox" name="remember" style="margin-bottom:15px"/>Remember me
                        </label>
        
                    <div class="clearfix">
                        <button type="button" class="signin" v-on:click="login">Log in</button>
                        <button type="button" class="register" v-on:click="register">Register</button>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import Swal from 'sweetalert2';
export default{
        data(){
            return{
                user:{
                    username:"",
                    password:""
                },
            }
        },
        methods:{
            register(){
                this.$router.push({name:'Register'});
            },
            login(){
                if(this.checkValidation()){
                    this.$ajax.post("Users/Login", {Username:this.user.username, Password:this.user.password})
                    .then(response => {
                        if(response.data.hasError){
                            Swal.fire("Invalid username or password!");
                            this.user.username="";
                            this.user.password="";
                        }
                        else if(response.data.token){
                            localStorage.setItem('token', JSON.stringify(response.data));
                            response.data.token="";
                            localStorage.setItem('user', JSON.stringify(response.data));
                            this.$router.push("/cityandcountry");
                        }
                        
                    })
                    .catch(error=> {
                        if(error.response){
                            Swal.fire(error.response.data);
                        }
                    });
                }
            },
            checkValidation(){
                if(!this.user.username){
                    this.$refs.username.focus();
                    Swal.fire("Give username!");
                    return;
                }
                if(!this.user.password){
                    this.$refs.psw.focus();
                    Swal.fire("Give password!");
                    return;
                }
                return true;
            }
        }
    }
</script>

<style scoped>

    .container{
        width: 35%;
        height: -50px;
        padding: 120px 70px 140px 120px;
    }
    input[type=text], input[type=password]{
        width: 100%;
        padding: 15px;
        margin: 5px 0 22px 0;
        display: inline-block;
        border: none;
        background: #f1f1f1;
    }
    input[type=text]:focus, input[type=password]:focus{
        background-color: #ddd;
        outline: none;
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