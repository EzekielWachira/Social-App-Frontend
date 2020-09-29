<template>
  <q-layout view="lHh Lpr lFf" class="bg-green">
    <q-header elevated class="bg-green">
      <q-toolbar class="q-px-lg justify-center" >
<!--        <q-btn class="q-px-sm" dense flat label="Sign up" to="/register"/>-->
<!--        <q-btn class="q-px-sm" dense flat label="Sign in" to="/login"/>-->
        <q-tabs>
          <q-route-tab active-class="text-cyan-13"
            to="/register"
            exact label="Register"
          />
          <q-route-tab active-class="text-cyan-13"
            to="/login"
            exact label="Login"
          />
        </q-tabs>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'Authorization.vue'
}
</script>

<style scoped>

</style>
