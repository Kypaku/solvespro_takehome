import { mount } from '@vue/test-utils'
import Block from '@/components/Blocks/Block.vue'

describe('Block', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(Block)
        expect(wrapper.vm).toBeTruthy()
    })
})
