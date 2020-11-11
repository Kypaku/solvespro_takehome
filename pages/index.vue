<template>
    <v-row justify="center" align="center">
        <div v-show="blocks.length">
            <nuxt-link to="/editor">Ваш шаблон</nuxt-link>
        </div>
        <div class="mt-3">
            <div class="label">Создайте новый уникальный шаблон из блоков:</div>
            <div class="d-flex justify-center mt-3">
                <v-btn @click="createNewPage">Добавить блок</v-btn>
            </div>
        </div>
    </v-row>
</template>

<script lang='ts'>
    import { mapGetters, mapMutations } from 'vuex'
    import { Vue } from 'vue-property-decorator'

    export default Vue.extend({
        components: {

        },
        data () {
            return {

            }
        },
        computed: {
            ...mapGetters(['blocks'])
        },
        methods: {
            ...mapMutations(['CLEAR_BLOCKS']),
            createNewPage () {
                this.CLEAR_BLOCKS()
                this.$router.push('/editor/add')
            },
        },
    })
</script>
