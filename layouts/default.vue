<template>
    <v-app light>
        <v-app-bar fixed app>
            <div class="logo" @click="$router.push('/')">App logo</div>
        </v-app-bar>
        <v-main>
            <v-container>
                <nuxt />
            </v-container>
        </v-main>
        <v-footer app>
            <span>&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        data () {
            return {

            }
        }
    }
</script>

<style lang="scss">
    .logo{
        cursor: pointer;
        font-size: 22px;
        user-select: none;
        -webkit-user-select: none;
    }
</style>
