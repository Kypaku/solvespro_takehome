import State from '@/types/store'

export default {
    blocks: (state: State) => state.constructor.blocks,
}
