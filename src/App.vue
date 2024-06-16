<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useDisplay, useTheme } from 'vuetify'
import liff from '@line/liff'
import VConsole from 'vconsole'

const { width, height, mobile } = useDisplay()
const theme = useTheme()
const currentTab = ref('home')
const vConsole = new VConsole()


onMounted(() => {
  console.log(width.value)
  console.log(height.value)
  console.log(mobile.value)
  console.log(vConsole.version)

  liff.init({
    liffId: '1661042942-4mrJnYZP',
  }).then(() => {
    console.log(liff.getContext())
    console.log(liff.getLanguage())
    console.log(liff.getVersion())
    console.log(liff.isInClient())
    console.log(liff.isLoggedIn())
    console.log(liff.getOS())
    console.log(liff.getLineVersion())
  }).catch((error) => {
    console.log(error)
  })
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
      <RouterView />
    </v-main>

    <v-bottom-navigation color="primary" v-model="currentTab">
      <v-btn value="home" to="/">
        <v-icon>home</v-icon>
        <span>หน้าหลัก</span>
      </v-btn>

      <v-btn value="redeem" to="/gift">
        <v-icon>redeem</v-icon>
        <span>ของรางวัล</span>
      </v-btn>

      <v-btn value="notifications" to="/notifications">
        <v-icon>notifications</v-icon>
        <span>การแจ้งเตือน</span>
      </v-btn>

      <v-btn value="menu" to="/menu">
        <v-icon>menu</v-icon>
        <span>เมนู</span>
      </v-btn>

    </v-bottom-navigation>

  </v-app>
</template>

<style scoped></style>
