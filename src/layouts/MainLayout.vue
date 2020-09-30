<template>
  <q-layout view="hHh lpR lFf">
    <q-header elevated class="bg-positive">
      <q-toolbar class="q-px-lg">
        <q-btn icon="menu" flat @click="drawer = !drawer"/>

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
    <q-drawer
      v-model="drawer"
      show-if-above
      :width="250"
      :breakpoint="700"
      elevated
      content-class="bg- text-"
    >
      <q-list padding class="rounded-borders" style="ma" >
<!--        <q-item-label header class="q-mt-md q-ml-md text-h6 text-positive">Kkonnect</q-item-label>-->

        <q-item clickable v-ripple v-for="link in links" :key="link.title">
          <q-item-section avatar top>
            <q-avatar :icon="link.icon" :color="link.badge_color" text-color="white" />
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">{{ link.title }}</q-item-label>
            <q-item-label caption>February 22nd, 2019</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-badge :color="link.badge_color">{{ link.badge }}</q-badge>
          </q-item-section>
        </q-item>>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
const links = [
  { title: 'Events', icon: 'event', badge: 3, badge_color: 'orange' },
  { title: 'Calendar', icon: 'today', badge: 5, badge_color: 'primary' },
  { title: 'Forums', icon: 'forum', badge: 1, badge_color: 'accent' },
  { title: 'Bookmarks', icon: 'bookmark', badge: 10, badge_color: 'secondary' },
  { title: 'Tags', icon: 'tag', badge: 13, badge_color: 'blue' },
  { title: 'Topics', icon: 'topic', badge: 7, badge_color: 'brown' },
  { title: 'Files', icon: 'assignment', badge: 32, badge_color: 'teal' },
  { title: 'Meetings', icon: 'group', badge: 5, badge_color: 'light-blue-14' },
  { title: 'My Todos', icon: 'list', badge: 4, badge_color: 'purple' }
]
export default {
  data: () => ({
    links,
    drawer: true
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
