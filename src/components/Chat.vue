<template>
  <div 
    class="bg-white p-4 h-full"
  >
    <div 
      class="flex flex-col sm:flex-row border-8 max-w-screen-md m-auto"
    >
      <div 
        class="w-full sm:w-5/12 border-b-8 sm:border-r-8 p-4"
      >
        <p
          class="text-3xl font-bold text-yellow-500 mb-4"
        >
          Messages
        </p>
        <div 
          v-for="(user, index) in users" 
          :key="index"
          class="flex items-center mb-4 cursor-pointer"
          @click="changeuser(index)"
        >
          <div 
            class="mr-2"
          >
            <v-img  
              :src="user.image"
              width="40"
              height="40"
              class="rounded-full"
            ></v-img>
          </div>
          <div>
            <v-badge
              :value="index == 2 ? true : false"
              color="amber darken-4"
              content="2"
            >
              <p 
                class="mb-1"
              >
                {{ user.name }}
              </p>
            </v-badge>
            <p 
              class="text-sm mb-0"
            >
              <span 
                class="font-bold"
              >
                {{ user.role }}
              </span>
              <span>
                {{ user.place }}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div 
        class="w-full sm:w-7/12 p-4"
      >
        <div 
          v-for="(user, index) in users" 
          :key="index" 
          v-show="index == userindex"
        >
          <div 
            class="flex items-center mb-4"
          >
            <div 
              class="mr-2"
            >
              <v-img  
                :src="user.image"
                width="40"
                height="40"
                class="rounded-full"
              ></v-img>
            </div>
            <div>
              <p
                class="mb-1"
              >
                {{ user.name }}
              </p>
              <p 
                class="text-sm mb-0"
              >
                <span 
                  class="font-bold"
                >
                  {{ user.role }}
                </span>
                <span>
                  {{ user.place }}
                </span>
              </p>
            </div>
          </div>
          <div
            v-for="(message, number) in user.messages"
            :key="number"
            class="flex"
            :class="message.messageuser == 'user' ? '' : 'justify-end'"
          >
            <div 
              class="text-sm p-2 rounded-lg divide-solid border-2 mb-7 chat-box"
              :class="message.messageuser == 'user' ? 'w-56 border-yellow-500 chat-box-yellow' : 'w-44 border-blue-500 chat-box-blue'"
            >
              {{ message.content }}
            </div>
          </div>
          <div>
            <v-textarea
              solo
              outlined
              hide-details
              name="textarea"
              label="Input message"
              value=""
              v-model="message"
            ></v-textarea>
          </div>
          <div class="text-end">
            <v-btn 
              icon 
              class="transform -rotate-45"
            >
              <v-icon>
                attach_file
              </v-icon>
            </v-btn>
            <v-btn 
              icon
            >
              <v-icon>
                sentiment_satisfied
              </v-icon>
            </v-btn>
            <v-btn 
              icon
              @click="send(index)"
            >
              <v-icon>
                send
              </v-icon>
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  watch: {
  },
  created () {
  },
  name: "Chat",
  data: () => ({
    chatBoxBorderColor: { borderTopColor: "#F59E0B" },
    message: "",
    userindex: 0,
    users: [
      {
        image:'./assets/1.jpg',
        name: 'Rosangela Silva',
        role: 'Tech Hunter',
        place: 'At Nubank',
        messages: [
          {
            messageuser: 'user',
            content: 'Hi Deniis! My name is Rosangelam I hope you and your \
              family are doing great! Deniis, are you available to work \
              if we make a good offer?'
          },
          {
            messageuser: 'me',
            content: 'Hi Rosangela how are you? Absolutely! What its on your mind?'
          }
        ]
      },
      {
        image: './assets/2.jpg',
        name: 'Mariana Camargo',
        role: 'Tech Hunter',
        place: 'At Dev Midia',
        messages: [
          {
            messageuser: 'user',
            content: 'Hi How are you today?'
          },
          {
            messageuser: 'me',
            content: 'I\'m fine, and you?'
          }
        ]
      },
      {
        image: './assets/3.jpg',
        name: 'Mariana Pinto',
        role: 'Project Manager',
        place: 'At Google Cloud',
        messages: [
          {
            messageuser: 'user',
            content: 'Good morning'
          },
          {
            messageuser: 'me',
            content: 'Good morning'
          }
        ]
      }
    ]
  }),
  methods: {
    changeuser(index) {
      this.userindex = index;
    },
    send(index) {
      if (!this.message) return;
      let mymessage = {
        messageuser: 'me',
        content: ''
      }
      mymessage.content = this.message
      this.users[index].messages.push(mymessage)
      this.message = ''
    }
  }
};
</script>

<style>
.chat-box {
  position: relative;
}
.chat-box-yellow::before {
  border-top-color: #F59E0B !important;
}
.chat-box-blue::before {
  border-top-color: #3B82F6 !important;
}
.chat-box:before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -40px;
  transform: translateX(-50%);
  border: 15px solid transparent;
  border-top: 25px solid;
}
.chat-box:after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -33px;
  transform: translateX(-50%);
  border: 13px solid transparent;
  border-top: 21px solid white;
}
</style>
