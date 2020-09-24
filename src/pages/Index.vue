<template>
  <q-page class="q-pt-sm">
    <div class="row">
      <div class="col-md-3">
        <div class="q-px-md" style="max-width: 350px">
          <q-list bordered>
            <q-item class="q-my-sm" clickable v-ripple>
              <q-item-section avatar>
                  <q-icon name="event" color="orange"></q-icon>
              </q-item-section>

              <q-item-section>
                <q-item-label>Events</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-badge color="orange">3</q-badge>
              </q-item-section>
            </q-item>
            <q-separator inset="item"/>
            <q-item class="q-my-sm" clickable v-ripple>
              <q-item-section avatar>
                  <q-icon name="today" color="primary"></q-icon>
              </q-item-section>

              <q-item-section>
                <q-item-label>Calendar</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-badge color="primary">3</q-badge>
              </q-item-section>
            </q-item>
            <q-separator inset="item"/>
            <q-item class="q-my-sm" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="forum" color="accent"></q-icon>
              </q-item-section>

              <q-item-section>
                <q-item-label>Forums</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-badge color="accent">3</q-badge>
              </q-item-section>
            </q-item>
            <q-separator inset="item"/>
            <q-item class="q-my-sm" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="bookmarks" color="secondary"></q-icon>
              </q-item-section>

              <q-item-section>
                <q-item-label>BookMarks</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-badge color="secondary">3</q-badge>
              </q-item-section>
            </q-item>
            <q-separator inset="item"/>
            <q-item class="q-my-sm" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="tag" color="blue"></q-icon>
              </q-item-section>

              <q-item-section>
                <q-item-label>Tags</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-badge color="blue">3</q-badge>
              </q-item-section>
            </q-item>
            <q-separator inset="item"/>
            <q-item class="q-my-sm" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="topic" color="brown"></q-icon>
              </q-item-section>

              <q-item-section>
                <q-item-label>Topics</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-badge color="brown">3</q-badge>
              </q-item-section>
            </q-item>
            <q-separator inset="item"/>
            <q-item class="q-my-sm" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="assignment" color="teal"></q-icon>
              </q-item-section>

              <q-item-section>
                <q-item-label>Files</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-badge color="teal">3</q-badge>
              </q-item-section>
            </q-item>
            <q-separator inset="item"/>
            <q-item class="q-my-sm" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="group" color="light-blue-14"></q-icon>
              </q-item-section>

              <q-item-section>
                <q-item-label>Meetings</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-badge color="light-blue-14">3</q-badge>
              </q-item-section>
            </q-item>
            <q-separator inset="item"/>
            <q-item class="q-my-sm" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="list" color="purple"></q-icon>
              </q-item-section>

              <q-item-section>
                <q-item-label>My Todos</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-badge color="purple">3</q-badge>
              </q-item-section>
            </q-item>

            <q-separator />
          </q-list>
        </div>
      </div>
      <div class="col-sm-12 col-md-6">
        <q-list bordered padding class="q-px-md">
          <q-item-label class="q-px-md">
            <q-card style="width: 100%;">
              <q-card-section>
                <div class="text-h6">Start a new Post</div>
              </q-card-section>
              <q-separator spaced/>
              <q-card-section class="row q-pt-none">
                <q-btn color="positive" no-caps icon-right="add" label="Create Post" dense class="q-px-xs"/>
                <q-space/>
                <div class="row">
                  <q-btn icon="camera_alt" color="green" round flat/>
                  <q-separator vertical spaced/>
                  <q-btn icon="image" color="green" round flat/>
                  <q-separator vertical spaced/>
                  <q-btn icon="video_call" color="green" round flat/>
                </div>
              </q-card-section>
            </q-card>
          </q-item-label>
          <q-item v-for="n in 10" :key="n">
            <Post style="width: 100%;"/>
          </q-item>
        </q-list>
      </div>
      <div class="col-md-3 q-px-sm" v-if="$q.screen.gt.sm">
        <q-card v-for="n in 5" :key="n" class="q-mb-sm">
          <q-card-section class="row q-gutter-x-sm">
            <q-avatar color="blue">
              <q-img src="/images/ezzy.jpg"/>
            </q-avatar>
            <div class="column">
              <div class="text-subtitle1">Jane Doe</div>
              <div class="text-subtitle2">Managing Director</div>
            </div>
          </q-card-section>
          <q-card-actions align="right" class="q-pt-none">
            <q-space/>
            <q-btn dense label="Follow" icon-right="add" class="q-px-xs" no-caps color="positive"/>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script>
import Post from 'components/Post'
export default {
  name: 'Index',
  components: {
    Post
  }
}
</script>
<style>
@import "tailwindcss/base";

@import "tailwindcss/components";

@import "tailwindcss/utilities";
</style>
