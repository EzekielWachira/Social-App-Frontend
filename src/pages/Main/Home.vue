<template>
    <div>
      <div class="col-12">
        <q-list bordered padding class="q-px-md">
          <q-item-label class="q-px-md">
            <q-card style="width: 100%;">
              <q-card-section class="q-mb-none">
                <div class="text-h6">Start a new Post</div>
              </q-card-section>
              <q-separator spaced/>
              <q-card-section class="row q-pt-none">
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
          <q-infinite-scroll @load="onLoad" :offset="250">
            <q-item v-for="(item, index) in items" :key="index">
              <Post style="width: 100%;"/>
            </q-item>
              <template v-slot:loading>
                <div class="row justify-center q-my-md">
                  <q-spinner-dots color="green" size="40px" />
                </div>
              </template>
          </q-infinite-scroll>
        </q-list>
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
    </div>
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
    },
    items: [{}, {}, {}, {}, {}, {}, {}]
  }),
  components: {
    Post
  },
  methods: {
    onLoad (index, done) {
      setTimeout(() => {
        if (this.items) {
          this.items.push({}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {})
          done()
        }
      }, 2000)
    },
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
