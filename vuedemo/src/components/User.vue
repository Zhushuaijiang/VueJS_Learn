<template>
    <div>
        <h1>User</h1>
        <p>uid={{uid}},{{nationality}}</p>
        <p>$router.params.uid={{$route.params.uid}}</p>
        <p>$router.params.uid={{$route.params.nationality}}</p>

    </div>
</template>

<script>
    export default {
        name: "User",
        props:['uid','nationality']
    }
</script>

<style scoped>

</style>
