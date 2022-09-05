<template>
    <div>
        <div class="container">
            <h3 class="e-shop-font">Login Page</h3>
            <div class="card">
                <div class="card-body">
                    <div class="form-group">
                        <label for="username">Username:</label>
                        <input v-model="user.username" ref="username" type="text" class="form-control" placeholder="Enter username" name="username"/>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input v-model="user.password" ref="psw" type="password" class="form-control" placeholder="Enter password" name="pwd"/>
                    </div>
                    <div class="form-group form-check">
                        <label class="form-check-label">
                            <input class="form-check-input" type="checkbox" name="remember"/>Remember me
                        </label>
                    </div>
                    <div class="clearfix">
                        <button type="button" class="signin" v-on:click="login">Sign in</button>
                        <button type="button" class="signup" v-on:click="signup">Sign up</button>
                    </div>
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
                        username:null,
                        password:null
                    },
                }
            },
        methods:{
            signup(){
                this.$router.push({name:'Register'});
            },
            login(){
                if(this.checkValidation()){
                    this.$ajax.post("Users/Login", {Username:this.user.username, Password:this.user.password})
                    .then(response => {
                        if(response.data.hasError){
                            Swal.fire("Invalid");
                            this.user.username="";
                            this.user.password="";
                        }
                        else if(response.data.token){
                            localStorage.setItem('token', JSON.stringify(response.data));
                            this.$router.push("/countries");
                        }
                        
                    })
                    .catch(error=> {
                        if(error){
                            Swal.fire();
                        }
                    });
                }
            },
            checkValidation(){
                if(!this.user.username){
                    this.$refs.username.focus();
                    Swal.fire("Give username");
                    return;
                }
                if(!this.user.password){
                    this.$refs.password.focus();
                    Swal.fire("Give password");
                    return;
                }
                return true;
            }
        }
    }
</script>

<style scoped>
    .container{
        max-width: 360px;
    }
    button{
        background-color: rgb(26, 15, 97);
        color: rgb(254, 254, 254);
        border: 2px black; 
        border-radius: 30px;       
        padding: 14px 46px;    
        text-align: center;    
        text-decoration: none;    
        display: inline-block;    
        font-size: 16px;    
        margin: 4px 2px;    
        cursor: pointer;
        transition-duration: 0.3s;
    }
    button:hover{
        background-color: lightblue;
    }
    
    
</style>