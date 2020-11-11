import { shallowMount } from '@vue/test-utils'
import Block from '@/components/Blocks/Block.vue'

describe('Block', () => {
    const sampleText = '1234567890'
    const sampleTextBlock = { type: 'text', data: { text: sampleText } }
    const sampleImgBlock = { type: 'image', data: { imgSrc: 'https://images.unsplash.com/photo-1604756492314-704dee13ecea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' } }
    const wrapperText = shallowMount(Block, { propsData: { item: sampleTextBlock } })
    const wrapperImg = shallowMount(Block, { propsData: { item: sampleImgBlock } })
    const wrapperEmpty = shallowMount(Block)
    test('is a Vue instance', () => {
        expect(wrapperText.vm).toBeTruthy()
        expect(wrapperImg.vm).toBeTruthy()
        expect(wrapperEmpty.vm).toBeTruthy()
    })
    test('has els with data', () => {
        expect(wrapperText.find('.text').exists()).toBe(true)
        expect(!!~wrapperText.text().indexOf(sampleText)).toBe(true)
        expect(wrapperImg.find('img').exists()).toBe(true)
        expect(wrapperEmpty.find('.block-header').exists()).toBe(false)
    })
})
