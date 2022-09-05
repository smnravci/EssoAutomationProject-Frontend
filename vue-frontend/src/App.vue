<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title> Vuetify Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text rounded>Home </v-btn>
      <v-btn text rounded>Login </v-btn>
    </v-app-bar>

    <v-content>
      <v-card width="400" class="mx-auto mt-5">
        <v-card-title>
          <h1 class="display-1">Login</h1>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field label="Username" prepend-icon="mdi-account-circle" />
            <v-text-field
              :type="showPassword ? 'text' : 'password'"
              label="Password"
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
            />
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="success">Register </v-btn>
          <v-btn color="info">Login </v-btn>
        </v-card-actions>
      </v-card>
    </v-content>

    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="teal">
          <strong class="subheading">Vue is cool!</strong>

          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import {VFooter, VCard, VApp, VCardText, VBtn, VSpacer, VDivider, VCardTitle} from 'vuetify'
export default {
  name: "App",
  components:{
    VFooter, VCard, VApp, VCardText, VBtn, VSpacer, VDivider, VCardTitle
    
  },
  data: () => ({
    showPassword: false,
    links:
     ["Home",
     "Login"
     ],
  }),
};
</script>