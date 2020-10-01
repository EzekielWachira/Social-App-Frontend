<template>
  <q-page class="q-pt-sm">
    <router-view />
  </q-page>
</template>
<script>
// import Post from 'components/Post'
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
    // Post
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
