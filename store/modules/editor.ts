import Block, { BlockImg, BlockText } from '~/types/block'
import { uuid, orderItemsById } from '~/helpers'

export interface State {
    blocks: Block[]
}

export default {
    state: {
        blocks: [],
    } as State,
    mutations: {
        CLEAR_BLOCKS: (state: State) => {
            state.blocks = []
        },
        ADD_BLOCK: (state: State, block: Block) => {
            state.blocks.push({ ...block, id: uuid() })
        },
        DEL_BLOCK: (state: State, id: string) => {
            state.blocks = state.blocks.filter(block => block.id !== id)
        },
        EDIT_BLOCK: (state: State, { id, data }: {id: string, data: BlockText | BlockImg}) => {
            const block = state.blocks.find(block => block.id === id)
            block && (block.data = data)
        },
        REARRANGE_BLOCKS: (state: State, orderIds: string[]) => {
            state.blocks = orderItemsById(state.blocks, orderIds)
        },
    }
}
