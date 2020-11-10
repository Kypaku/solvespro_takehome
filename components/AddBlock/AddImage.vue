<template>
    <div class="add-image">
        <ApolloQuery
            :query="query"
            :variables="{  }"
        >
        <template v-slot="{ result: { loading, error, data } }">
            <!-- Loading -->
            <div v-if="loading" class="loading apollo">Loading...</div>

            <!-- Error -->
            <div v-else-if="error" class="error apollo">An error occurred</div>

            <!-- Result -->
            <div v-else-if="data" class="result apollo">
                <img v-for="(img, i) in data.movies.map(el => el.poster)" :key="i" :src="img" width="200" @click="$emit('setBlock', {type: 'image', data: {imgSrc: img}})"/>
            </div>

            <!-- No result -->
            <div v-else class="no-result apollo">No result :(</div>
        </template>
        </ApolloQuery>
    </div>
</template>

<script lang='ts'>
    import { Vue } from 'vue-property-decorator'

    export default Vue.extend({
        components: {

        },
        data() {
            return {
                query: (gql: any) => gql`
                    query{
                        movies{
                            poster
                        }
                    }`
            }
        },
        computed: {

        },
        methods: {

        },
        created() {
            this.$emit('setBlock', {type: 'image', data: {imgSrc: ''}})
        },        
    })

    </script>

<style lang="scss" scoped>

</style>
