<script setup lang="ts">
import { onMounted } from 'vue'
import { useDisplay, useTheme } from 'vuetify'
import { faker } from '@faker-js/faker'

const { width, height, mobile } = useDisplay()
const theme = useTheme()

onMounted(() => {
  console.log(width.value)
  console.log(height.value)
  console.log(mobile.value)
})

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
  <v-app>
    <v-app-bar>
      <v-spacer></v-spacer>
      <v-btn @click="toggleTheme" text="Toggle"></v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-card v-for="_ in 100" variant="tonal" class="mx-auto my-4">
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
    </v-main>
  </v-app>
</template>

<style scoped></style>
