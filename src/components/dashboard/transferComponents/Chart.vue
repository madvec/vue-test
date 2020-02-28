<template>
    <div class="">
        <div class="vue-chart" id="vue-chart">
            <apexchart type="pie" :options="options" :series="series"></apexchart>
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

<style>
    .vue-chart {
        max-width: 80% ;
    }
    .apexcharts-legend-text, .apexcharts-legend-marker {
        display: none !important;
    }
    .vue-chart {
        width: 100%;
        margin: 0 auto;
    }
</style>