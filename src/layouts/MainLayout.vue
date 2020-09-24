<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-positive">
      <q-toolbar class="q-px-lg">

        <q-toolbar-title>
          <div class="row"><strong class="text-cyan-12">Kkonnect</strong></div>
        </q-toolbar-title>
        <q-space/>
        <div class="YL__toolbar-input-container row no-wrap">
          <q-input dense outlined square v-model="search" placeholder="Search" class="bg-white col" />
          <q-btn class="YL__toolbar-input-btn" color="grey-3" text-color="grey-8" icon="search" unelevated />
        </div>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round dense flat icon="home" to="/" v-if="$q.screen.gt.sm">
            <q-tooltip>Navigate to home</q-tooltip>
          </q-btn>
          <q-btn round dense flat icon="video_call" v-if="$q.screen.gt.sm">
            <q-tooltip>Create a video or post</q-tooltip>
          </q-btn>
          <q-btn round dense flat icon="apps" v-if="$q.screen.gt.sm">
            <q-tooltip>Apps</q-tooltip>
          </q-btn>
          <q-btn round dense flat icon="message" v-if="$q.screen.gt.sm">
            <q-tooltip>Messages</q-tooltip>
          </q-btn>
          <q-btn round dense flat icon="notifications">
            <q-badge color="red" text-color="white" floating>
              2
            </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="/images/ezzy.jpg">
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data: () => ({
  //
  })
}
</script>
<style lang="sass">
.YL
  &__toolbar-input-container
    min-width: 100px
    width: 55%
  &__toolbar-input-btn
    border-radius: 0
    border-style: solid
    border-width: 1px 1px 1px 0
    border-color: rgba(0,0,0,.24)
    max-width: 60px
    width: 100%
  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem
    &:hover
      color: #000
</style>
