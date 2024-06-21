<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue'

interface News {
    id: number;
    name: string;
    description: string;
    start_date: Date;
    end_date: Date;
}

const isLoading = ref(true)
const news = ref<News[]>([])
const tab = ref('news')
console.log(isLoading.value)

onMounted(() => {

    try {
        axios.get('https://xpax-api.wynnovas.com/api/memberPotal').then((response) => {
            isLoading.value = false
            console.log(isLoading.value)
            console.log(response.data)
            news.value = response.data.data.news
        }).catch((error) => {
            console.log(error)
        })
    } catch (error) {
        console.log(error)
    }
})

</script>

<template>
    <v-container>

        <v-tabs color="green-darken-3" class="mb-3" v-model="tab">
            <v-tab value="news">ข่าวสาร</v-tab>
            <v-tab value="promotions">โปรโมชั่น</v-tab>
        </v-tabs>

        <v-tabs-window v-model="tab">
            <v-tabs-window-item value="news">
                <v-row>
                    <v-col v-for="item in news" :key="item.id" cols="12" sm="6" md="4" lg="3">
                        <v-card class="mx-auto">
                            <v-card-item class="px-0 py-0">
                                <v-img max-height="350px"
                                    :src="`https://xpax-api.wynnovas.com/api/inforcover/${item.id}.png`"></v-img>
                            </v-card-item>
                            <v-card-text>
                                <div class="item-name py-4">{{ item.name }}</div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-tabs-window-item>

            <v-tabs-window-item value="promotions">
                <v-row>
                    <v-col v-for="item in news" :key="item.id" cols="12" sm="6" md="4" lg="3">
                        <v-card class="mx-auto">
                            <v-card-item class="px-0 py-0">
                                <v-img max-height="350px"
                                    :src="`https://xpax-api.wynnovas.com/api/inforcover/${item.id}.png`"></v-img>
                            </v-card-item>
                            <v-card-text>
                                <div class="item-name py-4">{{ item.name }}</div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-tabs-window-item>
        </v-tabs-window>

    </v-container>
</template>

<style scoped>
.item-name {
    height: 3.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>