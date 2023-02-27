<script setup>
    const route = useRoute()
    const id = route.params.id
    const members = "";
    const data = await fetch(`https://api.github.com/users/${id}`);
    const result = await data.json();
</script>

<template>
    <h1>Detalle del miembro:</h1>
    <p><b>Login:</b> {{ result.login }}</p>
    <p><b>Nombre:</b> {{ result.name }}</p>
    <p><b>Email:</b> {{ result.email }}</p>
    <p><b>Compañia:</b> {{ result.company }}</p>
    <p><b>Bio:</b> {{ result.bio }}</p>
    <p><b>Avatar:</b></p>
    <img :src="result.avatar_url" />
</template>