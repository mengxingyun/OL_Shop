<template>
    <div> 商品详情: {{id}} </div>
</template>

<script>
import { ref } from 'vue';
import {useRoute} from 'vue-router';
export default {
    name: "Detail",
    setup() {
        const route = useRoute();
        const id = ref(0);
        id.value = route.query.id;
        return{
            id
        }
    }
}
</script>

<style>

</style>