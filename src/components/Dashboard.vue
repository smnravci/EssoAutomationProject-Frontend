<template>
    <div class="container">
    <Layout title="Dashboard"></Layout>
        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th scope="col">Country Code</th>
                    <th scope="col">City</th>
                    <th scope="col">Country</th>
                </tr>
            </thead>
            <tbody>            
                    <tr v-for="city in cities" v-bind:key="city.id">
                        <th >{{ city.countryId }}</th>
                        <th> {{ city.name  }}</th>
                        <th v-for="country in countries.filter(country => country.id ===city.countryId)" v-bind:key="country.id">{{ country.name }}</th>
                       
                    </tr>
                    
            </tbody>
        </table>
    </div>
</template>

<script>
import Swal from 'sweetalert2'
import Layout from './Layout.vue'

export default({
    data(){
        return{
            cities:[],
            countries:[]
        }
    },
    components:{
        Layout
    },
    async created(){
        await this.getCities();
        await this.getCountries();
    },
    setup(){

    },
    methods:{
        getTokenConfig(){
            var token = JSON.parse(localStorage.getItem('token'));
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            return config;
        },
        async getCities(){
            await this.$ajax.get("Cities/Get",this.getTokenConfig())
                .then(response => {                    
                    this.cities = response.data.data    
                    console.log(response.data)                           
                })
                .catch(error => {
                    if(error.response){
                        Swal.fire(error.response.data);
                    }
                });
        },
        async getCountries(){
            await this.$ajax.get("Countries/Get",this.getTokenConfig())
                .then(response => {
                    this.countries = response.data.data
                })
                .catch(error => {
                    if(error.response){
                        Swal.fire(error.response.data);
                    }
                });
        }
    }
})

</script>

<style scoped>
.container{
    width: 30%;
    height: -50px;
    padding: 200px 10px 200px 20px;
}
</style>












<!-- <template>
    <div  style="position: relative; /*or static*/;
    width: 50%;
    height: 800px;
    margin: 0 auto">
        <h3 class="d-flex justify-content-center" style="color:white">
            Esso Otomation Project
        </h3>
        <h5 class="d-flex justify-content-center" style="color:white">
            Cities and Countries
        </h5>

        <nav class="navbar navbar-expand-sm bg-light navbar-dark" style="position: relative; /*or static*/;
        width: 50%;
        padding-left: 100px;
        margin: 0 auto">
            <ul class="navbar-nav">
                <li class="nav-item m-1">
                    <router-link class="btn btn-light btn-outline-primary" to="/city">City</router-link>
                </li>
                <li class="nav-item m-1">
                    <router-link class="btn btn-light btn-outline-primary" to="/country">Country</router-link>
                </li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';

export default {
    component: {
        RouterLink,
        RouterView
    },
    data() {
        return {

        }
    }
}
</script> -->
