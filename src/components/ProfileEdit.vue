<template>
  <div 
    class="border-8 pa-5"
  >
    <v-row>
      <v-col
        cols="12"
        lg="6"
        md="6"
      >
        <div>
          <div 
            class="flex justify-between items-center"
          >
            <label for="">
              Name
            </label>
            <v-btn 
              class="my-2"
              dense
              width="120"
              height="30"
            >
              Change
              <v-icon 
                class="pl-2"
              >
                fas fa-pencil-alt
              </v-icon>
            </v-btn>
          </div>
          <v-text-field
            outlined
            dense
            v-model="name"
            placeholder="Name"
            :rules="nameRules"
            required
          >
          </v-text-field>
        </div>
        <div>
          <div 
            class="flex justify-between items-center"
          >
            <label for="">
              Last Name
            </label>
            <v-btn class="my-2"
              dense
              width="120"
              height="30"
            >
              Change
              <v-icon class="pl-2">
                fas fa-pencil-alt
              </v-icon>
            </v-btn>
          </div>
          <v-text-field
            outlined
            dense
            v-model="lastName"
            placeholder="Last Name"
            :rules="nameRules"
            required
          >
          </v-text-field>
        </div>
        <div>
          <div 
            class="flex justify-between items-center"
          >
            <label for="">
              Email
            </label>
            <v-btn 
              class="my-2"
              dense
              width="120"
              height="30"              
            >
              Change
              <v-icon class="pl-2"> 
                fas fa-pencil-alt
              </v-icon>
            </v-btn>
          </div>
          <v-text-field
            outlined
            dense
            v-model="email"
            placeholder="Email"
            :rules="emailRules"
            required
          >
          </v-text-field>
        </div>
        <div>
          <div 
            class="flex justify-between items-center"
          >
            <label for="">
              Password
            </label>
            <v-btn 
              class="my-2"
              dense
              width="120"
              height="30"
            >
              Change
              <v-icon 
                class="pl-2"
              > 
                fas fa-pencil-alt
              </v-icon>
            </v-btn>
          </div>
          <v-text-field
            outlined
            dense
            v-model="password"
            placeholder="Password"
            type="password"
            :rules="[rules.password]"
            required
          >
          </v-text-field>
        </div>
        <div>
          <div 
            class="flex justify-between items-center"
          >
            <label for="">
              Role
            </label>
            <v-btn 
              class="my-2"
              dense
              width="120"
              height="30"
            >
              Change
              <v-icon 
                class="pl-2"
              > 
                fas fa-pencil-alt
              </v-icon>
            </v-btn>
          </div>
          <v-text-field
            outlined
            dense
            v-model="role"
            placeholder="Role"
          >
          </v-text-field>
        </div>
        <div>
          <div 
            class="flex justify-between items-center"
          >
            <label for="">
              Company
            </label>
            <v-btn 
              class="my-2"
              dense
              width="120"
              height="30"
            >
              Change
              <v-icon class="pl-2"> 
                fas fa-pencil-alt
              </v-icon>
            </v-btn>
          </div>
          <v-text-field
            outlined
            dense
            v-model="company"
            placeholder="Company"
          >
          </v-text-field>
        </div>
        <div>
          <div 
            class="flex justify-between items-center"
          >
            <label for="">
              Level
            </label>
              <v-btn 
                class="my-2"
                dense
                width="120"
                height="30"
              >
              Change
              <v-icon 
                class="pl-2"
              > 
                fas fa-pencil-alt
              </v-icon>
            </v-btn>
          </div>
          <v-text-field
            outlined
            dense
            v-model="level"
            placeholder="Level"
          >
          </v-text-field>
        </div>
        <div>
          <div 
            class="flex justify-between items-center"
          >
            <label for="">
              Status
            </label>
            <v-btn 
              class="my-2"
              dense
              width="120"
              height="30"
            >
              Change
              <v-icon 
                class="pl-2"
                dense
                width="120"
                height="30"
              > 
                fas fa-pencil-alt
              </v-icon>
            </v-btn>
          </div>
          <v-text-field
            outlined
            dense
            v-model="status"
            placeholder="Status"
          >
          </v-text-field>
        </div>
      </v-col>
      <v-col
        cols="12"
        lg="6"
        md="6"
      >
        <div 
          class="flex items-center"
        >
          <h5 class="text-h5">
            Company of residency
          </h5>
          <v-card 
            class="pa-2 ml-3"
          >  
            <v-img 
              src="./assets/brasil.png" 
              max-width="30" 
              height="20" 
            >
            </v-img>
          </v-card>
        </div>
        <div>
          <div 
            class="flex justify-between items-center"
          >
            <label for="">
              City
            </label>
            <v-btn 
              class="my-2"
              dense
              width="120"
              height="30"
            >
              Change
              <v-icon class="pl-2"> 
                fas fa-pencil-alt
              </v-icon>
            </v-btn>
          </div>
          <v-text-field
            outlined
            dense
            v-model="city"
            placeholder="City"
          >
          </v-text-field>
        </div>
        <div>
          <div 
            class="flex justify-between items-center"
          >
            <label for="">
              State
            </label>
            <v-btn 
              class="my-2"
              dense
              width="120"
              height="30"
            >
              Change
              <v-icon class="pl-2"> 
                fas fa-pencil-alt
              </v-icon>
            </v-btn>
          </div>
          <v-text-field
            outlined
            dense
            v-model="state"
            placeholder="State"
          >
          </v-text-field>
        </div>
      </v-col>
    </v-row>
    <div 
      class="flex flex-column items-start"
    >
      <label for="">
        Delete Account
      </label>
        <v-dialog
          v-model="dialog"
          persistent
          width="400"
        >
          <template 
            v-slot:activator="{ on, attrs }"
          >
            <v-btn
              dark
              v-bind="attrs"
              v-on="on"
            >
              Delete
            </v-btn>
          </template>
          <v-card 
            class="rounded-lg text-center border-0"
          >
            <div 
              class="border-8 border-blue-500"
            >
              <div 
                class="flex justify-end"
              >
                <v-btn
                  icon
                  dark
                  @click="dialog = false"
                >
                  <v-icon
                    color="orange darken-2"
                  >
                    mdi-close
                  </v-icon>
                </v-btn>
              </div>
              <v-card-title 
                class="text-h4 text-yellow-500 justify-center py-0"
              >
                Delete Account 
              </v-card-title>
              <v-card-title 
                class="text-h5"
              >
                Do you really want to delete your account?
              </v-card-title>
              <v-card-text>
                After deleting your account, you are not going to be abble to acces your repports and our website anymore.
              </v-card-text>
              <v-card-actions 
                class="justify-center"
              >
                <v-btn
                  dark
                  @click="dialog = false"
                >
                  Delete
                </v-btn>
              </v-card-actions>
            </div>
          </v-card>
        </v-dialog>
    </div>
  </div>
</template>
<script>
export default {
  name:'profileEdit',
  data:()=>({
    name:'',
    lastName:'',
    email:'',
    password:'',
    role:'',
    company:'',
    level:'',
    status:'',
    city:'',
    state:'',
    dialog: false,
    valid: false,
     nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      rules: {
          required: value => !!value || "Required.",
          password: value => {
            const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
            return (
              pattern.test(value) ||
              "Min. 8 characters with at least one capital letter, a number and a special character."
            );
          }
        }
  })
}
</script>