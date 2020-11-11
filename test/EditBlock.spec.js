import { shallowMount, mount } from '@vue/test-utils'
import EditBlock from '@/components/EditBlock/'
import EditText from '@/components/EditBlock/EditText'
import EditImage from '@/components/EditBlock/EditImage'

describe('EditBlock', () => {
    const wrapperEmpty = shallowMount(EditBlock)
    test('is a Vue instance', () => {
        expect(wrapperEmpty.vm).toBeTruthy()
    })
})

describe('EditText', () => {
    const sampleText = '1234567890'
    const item = { type: 'text', data: { text: sampleText } }
    const wrapper = mount(EditText, { propsData: { item } })
    test('is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
    })
    test('has textarea and value', () => {
        const textarea = wrapper.find('textarea')
        expect(textarea.exists()).toBe(true)
        expect(textarea.element.value).toEqual(sampleText)
    })
})

describe('EditImage', () => {
    const wrapper = shallowMount(EditImage)
    test('is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
    })
})
