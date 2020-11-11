<template>
    <v-layout row justify-center>
        <v-dialog :value="open" fullscreen @input="val => (!val && exit())">
            <v-toolbar flat dark color="primary">
                <v-btn icon dark @click="exit">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-toolbar>
            <v-card>
                <v-container>
                    <v-card-title class="headline">{{ id ? 'Редактировать блок' : 'Добавить новый блок' }}</v-card-title>
                    <component :is="formComponent" v-if="formComponent" :item="block" @setBlock="res => (block = res)" />
                    <v-card-text v-else class="select-type">
                        <v-btn class="mt-3" @click="formComponent = 'EditText'">Добавить текст</v-btn>
                        <v-btn class="mt-3" @click="formComponent = 'EditImage'">Добавить изображение</v-btn>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text v-if="formComponent && !id" @click="back">Назад</v-btn>
                        <v-spacer />
                        <v-btn text v-if="formComponent" @click="update">{{ id ? 'Редактировать' : 'Добавить' }}</v-btn>
                    </v-card-actions>
                </v-container>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script lang='ts'>
    import { mapMutations, mapGetters } from 'vuex'
    import { Vue } from 'vue-property-decorator'
    import EditText from './EditText.vue'
    import EditImage from './EditImage.vue'
    import Block from '~/types/block'
    import { capitalizeFirstLetter } from '~/helpers'

    export default Vue.extend({
        props: {
            id: String
        },
        components: {
            EditImage,
            EditText,
        },
        data () {
            return {
                formComponent: '',
                block: null as (null | Block),
                open: true,
            }
        },
        computed: {
            ...mapGetters(['blocks'])
        },
        methods: {
            ...mapMutations(['ADD_BLOCK', 'EDIT_BLOCK']),
            back () {
                this.formComponent = ''
                this.block = null
            },
            exit () {
                window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
                this.formComponent = ''
            },
            update () {
                if (this.id) {
                    this.EDIT_BLOCK({ id: this.id, data: this.block?.data })
                } else {
                    this.ADD_BLOCK(this.block)
                }
                this.$router.push('/editor')
                this.formComponent = ''
            }
        },
        created () {
            if (this.id) {
                this.block = this.blocks.find((block: Block) => block.id === this.id)
                if (this.block) {
                    this.formComponent = 'Edit' + capitalizeFirstLetter(this.block?.type)
                }
            }
        },
    })

    </script>

<style lang="scss" scoped>

</style>
