<template>
    <div>
      <div>
        <q-list padding class="q-px-md">
          <q-item-label class="q-px-md">
            <q-card style="width: 100%;">
              <q-card-section class="q-mb-none">
                <div class="text-h6">Start a new Post</div>
              </q-card-section>
              <q-separator spaced/>
              <q-card-section class="row q-pt-none">
                <q-btn color="positive" glossy no-caps icon-right="add" label="Create Post" dense class="q-px-xs"
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
          <q-item v-for="(post, index) in posts" :key="index">
            <q-card class="col-12">
              <q-card-section class="row q-gutter-x-sm">
                <q-avatar color="blue">
                  <q-img src="/images/ezzy.jpg"/>
                </q-avatar>
                <div class="column">
                  <div class="text-subtitle2">{{post.user.name}}</div>
                  <div class="text-subtitle1">{{post.created_at}}</div>
                </div>
                <q-space/>
                <q-btn icon="more_horiz" flat dense style="height: 40px;">
                  <q-menu :offset="[150, 0]">
                    <q-list style="min-width: 100px">
                      <q-item clickable v-close-popup>
                        <q-item-section>Save this post</q-item-section>
                        <q-item-section side>
                          <q-icon name="save" color="deep-orange-13"/>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup>
                        <q-item-section>Share this post</q-item-section>
                        <q-item-section side>
                          <q-icon name="share" color="green"/>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup>
                        <q-item-section>Edit this post</q-item-section>
                        <q-item-section side>
                          <q-icon name="create" color="blue"/>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup>
                        <q-item-section>Message Author</q-item-section>
                        <q-item-section side>
                          <q-icon name="message" color="pink"/>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-btn>
              </q-card-section>
              <q-card-section>
                <div class="text-h6">{{post.title}}</div>
              </q-card-section>
              <q-card-section class="q-pt-none">
                <div class="rounded-borders text-white q-pa-md"
                     style="height: auto; background: linear-gradient(to right, #fc466b, #3f5efb);"
                >{{post.body}}</div>
              </q-card-section>
              <q-separator spaced/>
              <q-card-actions align="left">
                <q-btn icon="thumb_up" flat round :color="post.likes.length > 0 ? 'positive' : 'grey-8'"
                       @click="postLike(posts.length - index)"/>
                <q-btn icon="comment" flat round @click="openCommentDialog( posts.length - index)"/>
                <q-btn icon="share" flat round/>
                <div class="row q-gutter-x-sm">
                  <div class="text-subtitle2">{{post.likes.length}} Likes 💙</div>
                  <div class="text-subtitle2">{{post.comments.length}} Comments 🤙</div>
                </div>
              </q-card-actions>
            </q-card>
          </q-item>
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
      <q-dialog v-model="commentDialog" class="post-dialog" persistent>
        <q-card class="dialog-card">
          <q-card-section>
            <q-toolbar class="text-white" style="background: radial-gradient(circle, #47c5ff 0%, #12d108 100%)">
              <q-toolbar-title>Post a comment</q-toolbar-title>
              <q-space/>
              <q-btn icon="image" flat round dense></q-btn>
              <q-btn icon="video_call" flat round dense/>
              <div>{{selectedPostIndex}}</div>
            </q-toolbar>
          </q-card-section>
          <q-card-section>
            <q-list v-if="postComments.length !== 0">
              <q-scroll-area style="height: 200px; " :bar-style="barStyle" :thumb-style="thumbStyle">
               <q-item v-for="(comment, index) in postComments"
                      :key="index" class="q-pa-md column"
                      clickable v-ripple
              >
                <div class="row">
                  <q-item-section avatar>
                    <q-avatar color="primary" text-color="white">
                      {{ comment.user.name.substr(0, 1).toUpperCase() }}
                    </q-avatar>
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>{{ comment.user.name }}</q-item-label>
                    <q-item-label caption lines="1">{{ comment.user.email }}</q-item-label>
                  </q-item-section>

                  <q-item-section side>
                    <q-icon name="chat_bubble" color="green" />
                  </q-item-section>
                </div>
                <div class="q-mt-md">
                  <q-item-section>
                    <q-item-label class="text-subtitle1">{{comment.body}}</q-item-label>
                  </q-item-section>
                </div>
              </q-item>
              </q-scroll-area>
            </q-list>
            <div v-else>
              <q-card square>
                <q-card-section>No comments for this post. Be the first one to comment</q-card-section>
              </q-card>
            </div>
          </q-card-section>
          <q-card-section>
            <q-card-section>
              <q-input type="textarea" filled
                       v-model="commentData.body" placeholder="Type your comment here"
              />
              <TwemojiTextarea :emojiData="emojiDataAll"
                               :emojiGroups="emojiGroups"
                               v-model="commentData.body"
                               placeholder="Type your comment here"
                               @keyup.enter="postComment"
              >
              </TwemojiTextarea>
            </q-card-section>
            <q-card-actions align="right">
              <q-btn label="Cancel" @click="commentDialog = false" color="red" flat/>
              <q-btn label="Post" color="positive" @click="postComment"/>
            </q-card-actions>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
</template>
<script>
import Post from 'components/Post'
import Poste from 'src/Api/Post'
import Comment from 'src/Api/Comment'
import User from 'src/Api/User'
import Like from 'src/Api/Like'
import { TwemojiTextarea } from '@kevinfaguiar/vue-twemoji-picker'
import EmojiAllData from '@kevinfaguiar/vue-twemoji-picker/emoji-data/en/emoji-all-groups.json'
import EmojiGroups from '@kevinfaguiar/vue-twemoji-picker/emoji-data/emoji-groups.json'
const thumbStyle = {
  right: '4px',
  borderRadius: '5px',
  backgroundColor: '#1ad20d',
  width: '5px',
  opacity: 0.75
}
const barStyle = {
  right: '2px',
  borderRadius: '9px',
  backgroundColor: '#1ad20d',
  width: '9px',
  opacity: 0.2
}
export default {
  name: 'Index',
  data: () => ({
    postDialog: false,
    commentDialog: false,
    previewImage: '',
    barStyle,
    thumbStyle,
    postData: {
      title: '',
      body: '',
      image: ''
    },
    commentData: {
      body: ''
    },
    items: [{}, {}, {}, {}, {}, {}, {}],
    posts: [],
    selectedPostIndex: -1,
    post: null,
    postComments: [],
    liked: false,
    user: null,
    links: [],
    meta: []
  }),
  components: {
    Post,
    TwemojiTextarea
  },
  created () {
    this.$root.$on('initComment', () => {
      this.commentDialog = true
    })
  },
  mounted () {
    this.getUser()
    this.getPosts()
  },
  computed: {
    emojiDataAll () {
      return EmojiAllData
    },
    emojiGroups () {
      return EmojiGroups
    }
  },
  methods: {
    getUser () {
      User.auth()
        .then(response => {
          console.log(response.data)
          this.user = response.data
        })
    },
    getPosts () {
      Poste.getPosts()
        .then(response => {
          this.posts = response.data.data
          this.links.push(response.data.links)
          console.log(response.data.links.next.substr(37, 1))
          this.meta.push(response.data.meta)
          console.log(response.data)
        }).catch(error => {
          console.log(error)
        })
    },
    getPost (postIndex) {
      this.post = []
      Poste.getPost(postIndex)
        .then(response => {
          console.log(response.data.data)
          this.post = response.data.data
          if (response.data.data.comments.length !== 0) {
            this.postComments = response.data.data.comments
          } else {
            this.postComments = []
          }
        }).catch(error => {
          console.log(error)
        })
    },
    openCommentDialog (postIndex) {
      this.selectedPostIndex = postIndex
      this.getPost(postIndex)
      this.commentDialog = true
    },
    postComment () {
      Comment.comment(this.commentData, this.post)
        .then(response => {
          console.log('Comment posted successfully')
          this.commentData.body = ''
          this.getPost(this.selectedPostIndex)
          this.getPosts()
        }).catch(error => {
          console.log(error)
        })
    },
    postLike (postIndex) {
      console.log(postIndex)
      Poste.getPost(postIndex).then(response => {
        if (response.data.data.likes.length !== 0) {
          for (let i = 0; i < response.data.data.likes.length; i++) {
            if (response.data.data.likes[i].user.id === this.user.id) {
              console.log('you cannot like twice')
              Like.deleteLike(response.data.data.likes[i].id)
                .then(response => {
                  console.log(response.data.message)
                  this.getPosts()
                }).catch(error => {
                  console.log(error)
                })
              console.log(response.data.data)
            } else {
              Like.like(response.data.data)
                .then(() => {
                  console.log('Post was liked')
                  console.log(response.data.data)
                  this.getPosts()
                  this.liked = true
                }).catch(error => {
                  console.log(error)
                })
            }
          }
        } else {
          Like.like(response.data.data)
            .then(() => {
              console.log('Post was liked')
              console.log(response.data.data)
              this.getPosts()
              this.liked = true
            }).catch(error => {
              console.log(error)
            })
        }
        // if (response.data.data.likes[0].user.id === this.user.id) {
        //   console.log('you cannot like twice')
        //   Like.deleteLike(response.data.data.likes[0].id)
        //     .then(response => {
        //       console.log(response.data.message)
        //       this.getPosts()
        //     }).catch(error => {
        //       console.log(error)
        //     })
        //   console.log(response.data.data)
        // } else {
        //   Like.like(response.data.data)
        //     .then(() => {
        //       console.log('Post was liked')
        //       console.log(response.data.data)
        //       this.getPosts()
        //       this.liked = true
        //     }).catch(error => {
        //       console.log(error)
        //     })
        // }
      })
    },
    onLoad (index, done) {
      let item = 0
      setTimeout(() => {
        if (this.items) {
          for (let i = 0; i < this.links.length; i++) {
            Poste.getNextPosts(this.links[item].next.substr(37, 1))
              .then(response => {
                this.posts.push(response.data.data)
                this.links.push(response.data.links)
                this.meta.push(response.data.meta)
                item += 1
                console.log(response.data)
              }).catch(error => {
                console.log(error)
              })
          }
          // Poste.getNextPosts(this.links.next.substr(37, 1))
          //   .then(response => {
          //     this.posts.push(response.data.data)
          //     this.links.push(response.data.links)
          //     this.meta.push(response.data.meta)
          //     console.log(response.data)
          //   }).catch(error => {
          //     console.log(error)
          //   })
          this.items.push({}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {})
          done()
        }
      }, 2000)
    },
    submitPost () {
      Poste.post(this.postData)
        .then(() => {
          console.log('Posted successfully')
          this.postData.title = ''
          this.postData.body = ''
          this.getPosts()
          this.postDialog = false
        }).catch(error => {
          console.log(error)
        })
    },
    submitComment () {
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
@media only screen and (max-width: 450px) {
  .q-px-md{
    padding-left: 5px;
    padding-right: 5px;
  }
  .q-item{
    padding: 8px 5px;
  }
}
#emoji-popup{
  width: 100% !important;
}
.emoji-popover-inner{
  width: 100% !important;
}
/*@import "tailwindcss/base";*/

/*@import "tailwindcss/components";*/

/*@import "tailwindcss/utilities";*/
</style>
