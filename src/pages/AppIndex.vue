<script >
import { store } from '../store.js';
import axios from 'axios';
export default {
    name: 'AppIndex',
    methods: {
        getCars() {

            axios.get(`${this.store.baseURL}/api/cars`).then(response => {
                console.log(response.data.cars);
                this.cars = response.data.cars;
            });
        }
    },
    data() {
        return {
            store,
            cars: []
        }
    },
    mounted() {

        this.getCars();
    }

}



</script>

<template>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Brand</th>
                <th scope="col">Model</th>
                <th scope="col">Price</th>
                <th scope="col">CC</th>
                <th scope="col">Year Release</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(car, index) in cars" :key="index">
                <th scope="row">{{ car.id }}</th>
                <td>{{ car.brand }}</td>
                <td>{{ car.model }}</td>
                <td>{{ car.price }}</td>
                <td>{{ car.cc }}</td>
                <td>{{ car.year_release }}</td>
            </tr>

        </tbody>
    </table>
</template>

<style lang="sass" >
@use 'bootstrap'
</style>
