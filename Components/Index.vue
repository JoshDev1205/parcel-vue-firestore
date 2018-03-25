<template>
  <div class="box is-dark is-bold">
    <div>
    <h2 class="subtitle">Tarea: </h2>
    <input class="input is-primary" type="text" v-model="tarea">
    <button class="button is-success" @click="addToDo()">Agregar</button>
    <span>Total de Tareas Pendientes: {{ countToDo }}</span>
  </div>
  <div>
    <ul>
      <li v-for="(tarea, idx) in tareas" :key="idx">
        <div v-if="!tarea.edit">
          <p>{{ tarea.name }}</p>
        <button class="button is-danger is-outlined" @click="deleteToDo(tarea)">Eliminar</button>
        <button class="button is-info is-outlined" @click="setEditToDo(tarea)">Editar</button>
        </div>
        <div v-else>
          <input class="input is-info" type="text" v-model="tarea.name">
          <button class="button is-info" @click="saveEdit(tarea)">Guardar</button>
          <button class="button is-danger" @click="cancelEdit(tarea)">Cancelar</button>
        </div>
      </li>
    </ul>
  </div>

  </div>

</template>
<script>
import { db } from '../app'
export default {
  name: 'Index',
  data () {
    return {
      tareas: [],
      tarea: ''
    }
  },
  firestore () {
    return {
      tareas: db.collection('tareas')
    }
  },
  computed: {
    countToDo () {
      return this.tareas.length
    }
  },

  methods: {
    addToDo () {
      this.$firestore.tareas.add({name: this.tarea, edit: false})
      this.tarea = ''
    },

    deleteToDo (tarea) {
      this.$firestore.tareas.doc(tarea['.key']).delete()
    },

    setEditToDo (tarea) {
      this.$firestore.tareas.doc(tarea['.key']).update({ edit: true})
    },

    cancelEdit (tarea) {
      this.$firestore.tareas.doc(tarea['.key']).update({ edit: false})
    },

    saveEdit (tarea) {
      this.$firestore.tareas.doc(tarea['.key']).update({ name: tarea.name, edit: false})
    }
  }
}
</script>
<style>
.btn {
  background-color: darkorchid;
}
</style>


