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
    <v-app-bar title="App bar">
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

    <v-bottom-navigation color="primary">
      <v-btn value="home">
        <v-icon>home</v-icon>
        <span>หน้าหลัก</span>
      </v-btn>

      <v-btn value="redeem">
        <v-icon>redeem</v-icon>
        <span>ของรางวัล</span>
      </v-btn>

      <v-btn value="notifications">
        <v-icon>notifications</v-icon>
        <span>การแจ้งเตือน</span>
      </v-btn>

      <v-btn value="menu">
        <v-icon>menu</v-icon>
        <span>เมนู</span>
      </v-btn>

    </v-bottom-navigation>

  </v-app>
</template>

<style scoped></style>
