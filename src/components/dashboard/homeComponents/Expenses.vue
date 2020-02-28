<template>
    <div class=" table-bordered">
        <div class="image">
            <div class="img">
                <img src="https://via.placeholder.com/300" alt="" class="img-responsive">
            </div>
        </div>
        <div class="title"><h2>Main Expenses</h2></div>
        <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Laoreet sit amet cursus sit amet dictum sit amet justo.            
            Volutpat maecenas volutpat blandit aliquam etiam erat. Sed tempus 
            urna et pharetra pharetra massa massa. Iaculis eu non diam phasellus 
            vestibulum. Arcu bibendum at varius vel.    
        </div>
    </div>
</template>
<script>

import Vue from 'vue';
import VueApexCharts from 'vue-apexcharts'
export default {
    components: {
        apexchart: VueApexCharts
    },
    data() {
        return {
            series: [44, 55, 13, 43, 22],    
            options:{                        
                chart:{
                    id:'vue-chart',                
                    type:'pie'
                },
                dataLabels: {
                    enabled:false
                }
            },
        }
    },
}
</script>

<style>
    .apexcharts-legend-text, .apexcharts-legend-marker {
        display: none !important;
    }
    .vue-chart {
        max-width: 70%;
        margin: 0 auto;
    }
</style>