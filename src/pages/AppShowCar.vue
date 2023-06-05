<script>
import { store } from '../store.js';
import axios from 'axios';
export default {

    name: 'AppShowCar',
    data() {
        return {
            store,
            car: null

        }
    },
    methods: {
        getSingleCar() {
            const id = this.$route.params.id;
            axios.get(`${this.store.baseURL}/api/cars/${id}`).then(response => {

                this.car = response.data.car;
                console.log(this.car);
            });
        }
    },
    mounted() {

        this.getSingleCar();
    }
}


</script>
<template>
    <div v-if="car" class="card">
        <div class=" card-body">
            <h5 class="card-title">{{ car.brand }} - {{ car.model }}</h5>
            <div class="card-text">{{ car.price }}</div>
            <div class="card-text">{{ car.cc }}</div>
            <div class="card-text">{{ car.year_release }}</div>
        </div>
    </div>
</template>
<style lang="sass">
@use 'bootstrap'
</style>