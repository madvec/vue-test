<template>
    <div class=" table-bordered">
        <div class="vue-chart" id="vue-chart">
            <apexchart type="pie" :options="options" :series="series"></apexchart>
        </div>
        <div class="title"><h2>Transactions History</h2></div>
        <div class="content">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book.
        </div>
    </div>
</template>
<script>

import Vue from 'vue';
import VueApexCharts from 'vue-apexcharts';
import { userService } from '../../../_services';
export default {    
    components: {
        apexchart: VueApexCharts
    },
    data() {
        return {            
            series: [50,25,10],    
            options:{       
                labels:['Account - 4125987453'],
                chart:{
                    id:'vue-chart',                
                    type:'pie'
                },
                noData: {
                 text: 'Loading...'
                }                
            },
        }
    },
    props:{
        transaction:{}
    },
    created() {
        this.createDataChart();
    },
    methods: {
        createDataChart() {                

        }
    },
    watch: {
        series() {
            this.VueApexCharts.updateSeries({
                
            })
        }
    }
}
</script>

<style scoped>
    .apexcharts-legend-text, .apexcharts-legend-marker {
        display: none !important;
    }
    .vue-chart {        
        margin: 0 auto;
    }
</style>