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
              <q-card-section class="q-mb-none">
                <div class="text-h6">Start a new Post</div>
              </q-card-section>
              <q-separator spaced/>
              <q-card-section class="row q-pt-none">
                <q-btn color="positive" no-caps icon-right="add" label="Create Post" dense class="q-px-xs"/>
                <q-btn color="positive" no-caps icon-right="add" label="Create Post" dense class="q-px-xs"
                  @click="postDialog = true"/>
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
    <q-dialog v-model="postDialog" class="post-dialog" persistent>
      <q-card class="dialog-card">
        <q-card-section>
          <q-toolbar class="text-white" style="background: radial-gradient(circle, #47c5ff 0%, #12d108 100%)">
            <q-toolbar-title>Create new post</q-toolbar-title>
            <q-space/>
            <q-btn icon="image" flat round dense></q-btn>
            <q-btn icon="video_call" flat round dense/>
          </q-toolbar>
        </q-card-section>
<!--        <q-card-section class="text-white" style="background: radial-gradient(circle, #47c5ff 0%, #12d108 100%)">-->
<!--          <div class="text-h6">Create New Post</div>-->
<!--        </q-card-section>-->
<!--        <q-separator spaced color="positive"/>-->
        <q-card-section>
          <q-input v-model="postData.title" outlined placeholder="Post title" autofocus dense>
            <template v-slot:append>
              <q-icon name="close" @click="postData.title = ''"/>
            </template>
          </q-input>
        </q-card-section>
        <q-card-section>
          <q-input type="textarea" filled v-model="postData.body" placeholder="Post body"/>
        </q-card-section>
        <q-card-section>
          <q-file color="grey-3"  @change="createImage()" outlined label-color="positive" v-model="postData.image"
                  placeholder="Selected File to Post" dense>
            <template v-slot:prepend>
              <q-icon name="image" color="positive"/>
            </template>
            <template v-slot:append>
              <q-icon name="video_call" color="positive" />
            </template>
          </q-file>
        </q-card-section>
<!--        <q-card-section>-->
          <q-img :src="getImage()"  height="200px"/>
<!--          <div class="image" :style="{'background-image': `url(${previewImage})`}"/>-->
<!--        </q-card-section>-->
        <q-card-actions align="right">
          <q-btn label="Cancel" @click="postDialog = false" color="red" flat/>
          <q-btn label="Post" color="positive" @click="submitPost"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>
<script>
import Post from 'components/Post'
export default {
  name: 'Index',
  data: () => ({
    postDialog: false,
    previewImage: '',
    postData: {
      title: '',
      body: '',
      image: ''
    }
  }),
  components: {
    Post
  },
  methods: {
    submitPost () {
      //
    },
    onImageChange (e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      this.createImage(files[0])
    },
    createImage (e) {
      const file = e.target().files[0]
      const reader = new FileReader()
      if (file.size < 2111775) {
        reader.onloadend = (file) => {
          this.postData.image = reader.result
        }
        reader.readAsDataURL(file)
      } else {
        alert('file size cannot be longer that 2mbs')
      }
      // reader.onload = (e) => {
      //   this.previewImage = e.target.result
      // }
      // reader.readAsDataURL(imageFile)
    },
    getImage () {
      // (this.postData.image.length > 100) ?
      const photo = this.postData.image
      return photo
    }
    // selectImage () {
    //   this.$refs.imageInput.click()
    // },
    // pickFile () {
    //   const input = this.$refs.imageInput
    //   const file = input.files
    //   if (file && input[0]) {
    //     const reader = new FileReader()
    //     reader.onload = e => (
    //       this.previewImage = e.target.result
    //     )
    //     reader.readAsDataURL(file[0])
    //     this.$emit('input', file[0])
    //   }
    // }
  }
}
</script>
<style lang="scss">
.dialog-card{
  width: 500px;
  min-width: 150px;
}
.image{
  height: 200px;
}
.post-dialog::-webkit-scrollbar-thumb{
  width: .25rem;
  background: #21BA45;
}
.post-dialog::-webkit-scrollbar{
  width: 3px;
}
/*@import "tailwindcss/base";*/

/*@import "tailwindcss/components";*/

/*@import "tailwindcss/utilities";*/
</style>
