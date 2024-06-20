<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue'

interface Product {
    id: number;
    productName: string;
    productImage: string;
    product: string;
    price: number;
}

const isLoading = ref(true)
const products = ref<Product[]>([]);
console.log(isLoading.value)

onMounted(() => {

    try {
        axios.get('https://666f7a4bf1e1da2be522e3a2.mockapi.io/products').then((response) => {
            isLoading.value = false
            console.log(isLoading.value)
            console.log(response.data)
            products.value = response.data
        }).catch((error) => {
            console.log(error)
        }).finally(function () {
            // always executed
        })
    } catch (error) {
        console.log(error)
    }
})
</script>

<template>
    <v-container>
        <template v-if="isLoading">
            <v-row justify="center" align="center" style="height: 85dvh;">
                <v-col cols="auto">
                    <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
                </v-col>
            </v-row>
        </template>
        <template v-else>
            <v-row>
                <v-col v-for="product in products" :key="product.id" cols="6" md="3">
                    <v-card class="mx-auto">
                        <v-img height="150px" :src="product.productImage" cover></v-img>
                        <v-card-text class="product-detail">
                            {{ product.productName }}
                        </v-card-text>

                        <v-badge color="primary" inline :content="product.product"></v-badge>

                        <v-card-actions class="product-detail">
                            {{ product.price }} พอยท์
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </template>
    </v-container>
</template>

<style scoped>
.product-detail {
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>