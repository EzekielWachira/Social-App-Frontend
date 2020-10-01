<template>
  <div class="flex flex-center q-pt-lg">
    <q-form class="register-form" @submit.prevent="login">
      <q-card class="register-card">
        <q-toolbar class="text-white q-mb-sm" style="background: radial-gradient(circle, #47c5ff 0%, #12d108 100%)">
          <q-toolbar-title>Login into your account</q-toolbar-title>
          <q-space/>
          <q-icon name="login" size="30px"/>
        </q-toolbar>
        <q-card-section>
          <q-input outlined autofocus dense type="email" hint="example@example.com"
                   v-model="formData.email"
                   :rules="[
                     val => val.length > 0 || 'Email is required'
                   ]"
          >
            <template v-slot:prepend>
              <q-icon name="mail"/>
            </template>
          </q-input>
        </q-card-section>
        <q-card-section>
          <q-input outlined dense :type="isPassword ? 'password' : 'text'" v-model="formData.password"
                   hint="min character 6"
                   :rules="[
                     val => val.length !== 0 || 'This field is required',
                     val => val.length >= 6 || 'Should not be less that 6 characters'
                   ]"
          >
            <template v-slot:prepend>
              <q-icon name="lock"/>
            </template>
            <template v-slot:append v-if="formData.password.length > 0">
              <q-icon :name="isPassword ? 'visibility' : 'visibility_off' " @click="isPassword = !isPassword"/>
            </template>
          </q-input>
        </q-card-section>
        <q-card-actions align="center" class="column q-gutter-y-sm">
          <q-btn label="Login" class="q-px-md text-white"
                 type="submit" flat
                 :loading="submitting"
                 :disable="formData.email === '' || formData.password === '' || formData.password.length < 6"
                 style="background: radial-gradient(circle, #47c5ff 0%, #12d108 100%)"
          >
            <template v-slot:loading>
              <q-spinner-facebook
                color="white"
              />
            </template>
          </q-btn>
          <div class="text-positive text-subtitle1 cursor-pointer">Forgot your password? </div>
        </q-card-actions>
      </q-card>
    </q-form>
  </div>
</template>

<script>
import User from 'src/Api/User'
export default {
  name: 'Login',
  data: () => ({
    formData: {
      email: '',
      password: ''
    },
    isPassword: true,
    submitting: false
  }),
  methods: {
    login () {
      this.submitting = true
      User.login(this.formData)
        .then(response => {
          this.submitting = false
          this.$root.$emit('login', true)
          localStorage.setItem('token', response.data)
          this.$router.push('/')
        }).catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped lang="scss">
.register-form{
  width: 500px;
  //min-width: auto;
}
@media only screen and (max-width: 520px) {
  .register-form{
    width: 90%;
  }
}
</style>
