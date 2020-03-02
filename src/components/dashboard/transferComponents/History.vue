<template>
    <div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <td>Origin Account</td>
                    <td>Destination Account</td>
                    <td>Transfer Data</td>
                    <td>Amount</td>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>
</template>

<script>
export default {

}
</script>
<style scoped>
    table {
        padding: 15px;
        max-width: 800px;
        margin: 30px auto 0;
    }
    td {
        border:1px solid #000 !important;
        text-align: center;
        padding: 10px;
    }
</style>