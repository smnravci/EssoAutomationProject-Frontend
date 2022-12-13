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

</style>