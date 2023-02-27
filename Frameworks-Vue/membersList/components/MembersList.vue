<script setup>
    import { ref } from 'vue'
    import { useLocalStorage } from '@vueuse/core'

    const orgName = ref('lemoncode');
    const data = ref(null)
    const error = ref(null)
    const name = useLocalStorage('name', orgName)

    onMounted(() => {  
        fetch(`https://api.github.com/orgs/${name.value}/members`)
        .then((res) => res.json())
        .then((json) => {
            data.value = json
        })
        .catch((err) => (error.value = err))

    })

    function busqueda() {
        const name = useLocalStorage('name', orgName)

        const members = fetch(`https://api.github.com/orgs/${name.value}/members`)
        .then((res) => res.json())
        .then((json) => {
            data.value = json
            
        })
        .catch((err) => (error.value = err))

        return members
    }
    
</script>

<template>
  <h1>Lista de miembros: </h1>
  <div>
    <label>Nombre de la organización: </label>
    <input id="pru" type="text" v-model="orgName" />
    <button type="submit" @click="busqueda">Enviar</button>
  </div>
  <div>
    <table>
            <thead>
                <tr>
                  <th>Avatar</th>
                  <th>Id</th>
                  <th>Name</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="member in data">
                  <td><img :src="member.avatar_url" /></td>
                  <td>{{ member.id }}</td>
                  <td><NuxtLink :to="`/detail/${member.login}`">{{ member.login }}</NuxtLink></td>  
                </tr>
            </tbody>
          </table>
  </div>
</template>

<style scoped>
    th {
        background-color: khaki;
    }

    td, th {
        padding: 8px;
    }

    img {
        width: 80px;
    }
</style>