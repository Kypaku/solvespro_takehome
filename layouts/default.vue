<template>
    <v-app light>
        <v-app-bar fixed app class="header">
            <div class="logo" @click="$router.push('/')">App logo</div>
        </v-app-bar>
        <v-main>
            <v-container class="main-container">
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
        font-size: 20px;
        color: #333;
        user-select: none;
        -webkit-user-select: none;
    }
    .main-container{
        height: 100%;
    }
    .header{
        box-shadow: none !important;
    }
</style>
