<template>
    <v-layout row justify-center>
        <v-btn color="primary" dark @click.native.stop="dialog = true">Добавить блок</v-btn>
        <v-dialog v-model="dialog" fullscreen>
            <v-toolbar
                flat
                dark
                color="primary"
            >
                <v-btn
                icon
                dark
                @click="dialog = false"
                >
                <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-toolbar>
            <v-card>
                <v-card-title class="headline">Добавить новый блок</v-card-title>
                <component v-bind:is="currentAddComponent" v-if="currentAddComponent" @setBlock="res => (block = res)" />
                <v-card-text class="select-type" v-else>
                    <v-btn text @click="currentAddComponent = 'AddText'">Добавить текст</v-btn>
                    <v-btn text @click="currentAddComponent = 'AddImage'">Добавить изображение</v-btn>
                </v-card-text>
                <v-card-actions>
                    <v-btn text v-if="currentAddComponent" @click="(currentAddComponent='', block=null )">Назад</v-btn>
                    <v-spacer/>
                    <v-btn text v-if="currentAddComponent" @click="(ADD_BLOCK(block), dialog = false)">Добавить</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script lang='ts'>
	import {mapMutations} from 'vuex'
    import { Vue } from 'vue-property-decorator'
	import AddText from './AddText.vue'
	import AddImage from './AddImage.vue'

    export default Vue.extend({
        components: {
            AddImage,
            AddText,
        },
        data() {
            return {
                dialog: false,
                currentAddComponent: '',
                block: null,
            }
        },
        computed: {

        },
		methods: {
            ...mapMutations(['ADD_BLOCK']),

        },
    })

    </script>

<style lang="scss" scoped>

</style>
