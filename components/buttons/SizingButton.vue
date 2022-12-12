 <template>
   <v-container
     fluid
     class="pa-0"
   >
   <h2>Sizing Buttons</h2>
     <v-row align="center">
       <v-col
         cols="12"
         sm="6"
       >
         <div class="text-center" id="SizingButtons">
           <div class="my-2">
             <v-btn
               x-small
               color="secondary"
               dark
               @click="click_extraSmall"
             >
               Extra small Button
             </v-btn>
           </div>
           <div class="my-2">
             <v-btn
               small
               color="primary"
               dark
               @click="click_small"
             >
               Small Button
             </v-btn>
           </div>
           <div class="my-2">
             <v-btn
               color="warning"
               dark
               @click="click_normal"
             >
               Normal Button
             </v-btn>
           </div>
           <div class="my-2">
             <v-btn
               color="error"
               dark
               large
               @click="click_large"
             >
               Large Button
             </v-btn>
           </div>
           <div class="my-2">
             <v-btn
               x-large
               color="success"
               dark
               @click="click_extraLarge"
             >
               Extra large Button
             </v-btn>
           </div>
         </div>
       </v-col>
       <v-col
         cols="12"
         sm="6"
       >
         <div class="text-center" id="SizingIconButtons">
           <div class="my-2">
             <v-btn
               color="secondary"
               fab
               x-small
               dark
               @click="click_television"
             >
               <v-icon>mdi-television</v-icon>
             </v-btn>
           </div>
           <div class="my-2">
             <v-btn
               color="primary"
               fab
               small
               dark
               @click="click_pencil"
             >
               <v-icon>mdi-pencil</v-icon>
             </v-btn>
           </div>
           <div class="my-2">
             <v-btn
               color="warning"
               fab
               dark
               @click="click_circle"
             >
               <v-icon>mdi-account-circle</v-icon>
             </v-btn>
           </div>
           <div class="my-2">
             <v-btn
               color="error"
               fab
               large
               dark
               @click="click_alarm"
             >
               <v-icon>mdi-alarm</v-icon>
             </v-btn>
           </div>
           <div class="my-2">
             <v-btn
               color="success"
               fab
               x-large
               dark
               @click="click_domain"
             >
               <v-icon>mdi-domain</v-icon>
             </v-btn>
           </div>
         </div>
       </v-col>
     </v-row>
     <v-text-field id="sizing-buttons-state" textarea v-model="state" readonly></v-text-field>
   </v-container>
 </template>

 <script>
 export default {
   data: () => ({
     state: '',
   }),

   methods: {
       click_extraSmall() {
         this.state = 'Extra small Button clicked';
       },
       click_small() {
         this.state = 'Small Button clicked';
       },
       click_normal() {
         this.state = 'Normal Button clicked';
       },
       click_large() {
         this.state = 'Large Button clicked';
       },
       click_extraLarge() {
         this.state = 'Extra large Button clicked';
       },
       click_television() {
         this.state = 'Icon button is clicked: television';
       },
       click_pencil() {
         this.state = 'Icon button is clicked: pencil';
       },
       click_circle() {
         this.state = 'Icon button is clicked: circle';
       },
       click_alarm() {
         this.state = 'Icon button is clicked: alarm';
       },
       click_domain() {
         this.state = 'Icon button is clicked: domain';
       },
   },
 };
 </script>