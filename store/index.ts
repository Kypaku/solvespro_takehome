import constructor from './modules/constructor'
import getters from './getters'

export default {
    modules: {
        constructor
    },
    getters,
    actions: {
        // async nuxtServerInit ({ dispatch, commit, getters }) {
        //     dispatch('checkAuth')
        //     const user = getters.user
        //     let loginActionsPromise
        //     if(user){
        //         const experied = dispatch('setTimerToRefresh', {expiration: getters.expiration, user, token: getters.refresh_token, provider: getters.provider})
        //         loginActionsPromise = dispatch('loginActions', experied)
        //     }
        //     const language = ls('language')
        //     if(language){
        //         // this.$i18n.locale = language
        //         commit('SET_LANGUAGE', language)
        //     }
        //     const categories = ls('categories')
        //     categories && commit('SET_CATEGORIES', categories)
        //     const catsPromise = dispatch('getCategories')
        //     const brands = ls('brands')
        //     brands && commit('SET_BRANDS', brands)
        //     const brandsPromise = dispatch('getBrands')
        //     const gender = ls('gender')
        //     gender != undefined && commit('SET_GENDER', gender)
        //     const colorsPromise = dispatch('getColors')
        //     const colors = ls('colors')
        //     colors && commit('SET_COLORS', colors)
        //     const materialsPromise = dispatch('getMaterials')
        //     const materials = ls('materials')
        //     materials && commit('SET_MATERIALS', materials)
        //     const sizesPromise = dispatch('getSizes')
        //     const sizes = ls('sizes')
        //     sizes && commit('SET_SIZES', sizes)
        //     commit('SET_LOADED', Promise.all([
        //         catsPromise,
        //         brandsPromise,
        //         colorsPromise,
        //         materialsPromise,
        //         sizesPromise,
        //         loginActionsPromise
        //     ]))
        // }
    }
}
