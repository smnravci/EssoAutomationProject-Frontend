<template>
    <div class="container">
       
        <table class="table table-hover table-primary">
            <colgroup>
                <col style="width: 60px">
                <col style="width: 60px">
                <col style="width: 60px">
              </colgroup>
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
        <Layout title="Dashboard"></Layout>
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
    width: 50%;
    height: -10px;
    padding: 180px 10px 180px 20px;
}
</style>










