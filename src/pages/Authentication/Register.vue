<template>
  <div class="flex flex-center q-pt-lg">
  <q-form class="register-form " @submit.prevent="register">
    <q-card class="register-card">
      <q-toolbar class="text-white q-mb-sm" style="background: radial-gradient(circle, #47c5ff 0%, #12d108 100%)">
        <q-toolbar-title>Register an account</q-toolbar-title>
        <q-space/>
        <q-icon name="person_add" size="30px"/>
      </q-toolbar>
<!--      <q-card-section class="text-center">-->
<!--        <div class="text-h6 text-positive">Register an account</div>-->
<!--      </q-card-section>-->
      <q-card-section>
        <q-input outlined autofocus dense hint="First and Last name"
                 v-model="formData.name"
                 :rules="[
                   val => val.length > 0 || 'Name is required'
                 ]"
        >
          <template v-slot:prepend>
            <q-icon name="person"/>
          </template>
          <template v-slot:append v-if="formData.name.length > 0">
            <q-icon name="close" @click="formData.name = ''"/>
          </template>
        </q-input>
      </q-card-section>
      <q-card-section>
        <q-input outlined dense type="email" hint="example@example.com"
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
        <q-input outlined dense :type="isPassword ? 'password' : 'text'"
                 v-model="formData.password"
                 hint="min character 6"
                 :rules="[
                   val => val.length > 0 || 'Password is required',
                   val => val.length >= 6 || 'Should not be less than 6 character'
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
      <q-card-section>
        <q-input outlined dense type="password" v-model="formData.password_confirmation"
                 hint="min characters 6"
                 :rules="[
                   val => val.length > 0 || 'Password is required',
                   val => val === formData.password || 'Two password do not match',
                   val => val.length >= 6 || 'Should not be less than 6 character'
                 ]"
        >
          <template v-slot:prepend>
            <q-icon name="lock"/>
          </template>
        </q-input>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-checkbox color="positive" v-model="acceptTerms" label="I Accept terms and Conditions" />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn label="Sign Up" class="q-px-md q-mr-sm q-mb-sm text-white" style="background: radial-gradient(circle, #47c5ff 0%, #12d108 100%)"
               type="submit"
               :disable="formData.name === '' || formData.email === '' || formData.password === ''
               || formData.password_confirmation === ''
               || formData.password_confirmation !== formData.password
                || acceptTerms === false" flat
        />
      </q-card-actions>
    </q-card>
  </q-form>
  </div>
</template>

<script>
import User from 'src/Api/User'
import Csrf from 'src/Api/Csrf'
export default {
  name: 'Register.vue',
  data: () => ({
    formData: {
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    },
    isPassword: true,
    acceptTerms: false
  }),
  methods: {
    register () {
      Csrf.getCookie().then(() => {

      })
      User.register(this.formData)
        .then(() => {
          this.$router.push('/login')
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
  min-width: 100px;
}
@media only screen and (max-width: 520px) {
  .register-form{
    width: 90%;
  }
}
</style>
