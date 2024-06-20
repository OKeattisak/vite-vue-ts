<script setup lang="ts">
import { faker } from '@faker-js/faker'
</script>

<template>
    <v-container>
        <v-card v-for="_ in 20" variant="tonal" class="mx-auto my-4">
            <v-card-item>
                <v-card-title>
                    {{ faker.person.fullName() }}
                </v-card-title>
            </v-card-item>
            <v-card-text>
                {{ faker.person.jobTitle() }}
            </v-card-text>
        </v-card>
    </v-container>
</template>

<style scoped></style>