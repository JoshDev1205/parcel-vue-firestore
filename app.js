import Vue from 'vue'
import App from './App.vue'
import VueFirestore from 'vue-firestore'
import firebase from 'firebase/app'
import 'firebase/firestore'
Vue.use(VueFirestore)

// Firebase initialize
firebase.initializeApp({
  apiKey: "AIzaSyDcaejVuRi6Y0M8NF-A1535sYRuU7MkuQ8",
    authDomain: "meetup-2103.firebaseapp.com",
    databaseURL: "https://meetup-2103.firebaseio.com",
    projectId: "meetup-2103",
    storageBucket: "meetup-2103.appspot.com",
    messagingSenderId: "920722773891"
})

export const db = firebase.firestore()


new Vue({
  render: h => h(App),
  el: '#app'
})