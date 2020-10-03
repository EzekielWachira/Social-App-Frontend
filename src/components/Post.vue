<template>
  <q-card>
    <q-card-section class="row q-gutter-x-sm">
      <q-avatar color="blue">
        <q-img src="/images/ezzy.jpg"/>
      </q-avatar>
      <div class="column">
        <div class="text-subtitle2">John Doe</div>
        <div class="text-subtitle1">3hrs ago</div>
      </div>
      <q-space/>
      <q-btn icon="more_horiz" flat dense round/>
    </q-card-section>
    <q-card-section>
      <q-img src="/images/car.jpg" height="320px"/>
    </q-card-section>
    <q-separator spaced/>
    <q-card-actions align="left">
      <q-btn icon="thumb_up" flat round/>
      <q-btn icon="comment" flat round @click="initCommentDialog"/>
      <q-btn icon="share" flat round/>
      <div class="row q-gutter-x-sm">
        <div class="text-subtitle2">12 Likes 💙</div>
        <div class="text-subtitle2">2 Comments 🤙</div>
      </div>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: 'Post',
  methods: {
    initCommentDialog () {
      this.$root.$emit('initComment')
    }
  }
}
</script>

<style scoped>

</style>
