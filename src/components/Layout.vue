<template>
    <button @click="logout">Log out</button>
</template>

<script>
export default({
    data(){
        return{

        }
    },
    created(){
        document.title = this.$props.title;
    },
    props:{
        title:String
    },
    methods:{
        logout(){
            window.localStorage.clear();
            this.$router.push({ name: 'Login' });
        },
    }
})

</script>

<style scoped>
    button{
        background-color: rgb(26, 15, 97);
        width: 20%;
        color: rgb(254, 254, 254);
        border: 2px black; 
        border-radius: 30px;       
        padding: 10px 20px;    
        text-align: center;    
        text-decoration: none;    
        display: inline-block;    
        font-size: 18px;  
        margin: 90px 750px;    
        cursor: pointer;
        transition-duration: 0.3s;
    }
</style>