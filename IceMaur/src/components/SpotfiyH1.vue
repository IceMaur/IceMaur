<template>
    <h1>
        <RouterLink to="/spotify">
            <i class="fa-brands fa-spotify"></i>
        </RouterLink>
        <slot>Spotify</slot>
    </h1>
</template>

<style scoped lang="less">
h1 .fa-spotify {
    margin-right: 1rem;
}
</style>