<template>
    <div class="table-bordered">        
        <div class="title"><h2>Current Balance</h2></div>
        <div class="content">
            <div class="table-container">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Account No.</th>
                            <th>Balance</th>
                            <th>Date of Last Transfer</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>***123</th>
                            <th>$400.00</th>
                            <th>21/May/2019</th>
                        </tr>
                        <tr>
                            <th>***123</th>
                            <th>$400.00</th>
                            <th>21/May/2019</th>
                        </tr>
                    </tbody>                            
                </table>
            </div>
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
    table {
        font-size:12px;
        text-align: center;
        width: 100%;
    }
    th {
        text-align: center
    }
    .table>thead>tr>th {
        vertical-align: middle;
    }
</style>