<template>
    <div class="add-image">
        <ApolloQuery
            :query="query"
            :variables="{  }"
        >
            <template v-slot="{ result: { loading, error, data } }">
                <div v-if="loading" class="loading">Loading...</div>
                <div v-else-if="error" class="error">An error occurred</div>
                <v-row v-else-if="data" class="result">
                    <v-col cols="6" v-for="img in data.movies.map(el => el.poster)" :key="img" class="img-wrap" :class="{active: img === activeImg}">
                        <img :src="img" @click="selectImg(img)" />
                    </v-col>
                </v-row>
                <div v-else class="no-result">Images didn't loaded</div>
            </template>
        </ApolloQuery>
    </div>
</template>

<script lang='ts'>
    import { Vue } from 'vue-property-decorator'
    import { PropType } from 'vue'
    import Block from '~/types/block'

    export default Vue.extend({
        components: {

        },
        props: {
            item: Object as PropType<Block>,
        },
        data () {
            return {
                query: (gql: any) => gql`
                    query{
                        movies{
                            poster
                        }
                    }`,
                activeImg: this.item ? this.item.data.imgSrc : '',
            }
        },
        computed: {

        },
        methods: {
            selectImg (img: string) {
                this.activeImg = img
                this.setBlock(img)
            },
            setBlock (imgSrc: string) {
                this.$emit('setBlock', { type: 'image', data: { imgSrc } })
            }
        },
        created () {
            !this.item && this.setBlock(this.activeImg)
        },
    })

    </script>

<style lang="scss" scoped>
    .img-wrap{
        padding: 5px;
        img{
            width: 100%
        }
        &.active{
            border: 2px solid lightgray;
        }
    }
</style>
