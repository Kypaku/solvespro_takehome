<template>
    <div class="front-page">
        <div class="content">
            <div class="mt-3" justify="center">
                <div class="label text-center">Создайте новый уникальный <br />шаблон из блоков:</div>
                <div class="d-flex justify-center mt-7">
                    <v-btn color="primary" x-large @click="createNewPage" class="add-block">Добавить блок</v-btn>
                </div>
            </div>
            <v-row v-show="blocks.length" justify="center" class="mt-8">
                <nuxt-link to="/editor">Ваш шаблон</nuxt-link>
            </v-row>
        </div>
    </div>
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

<style lang="scss" scoped>
    .add-block{
        text-transform: none;
    }
    .front-page{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .label{
        text-align: center;
    }
</style>
