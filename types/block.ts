export default interface Block {
    id: string
    type: string
    data: BlockText & BlockImg
}

export interface BlockText {
    text: string
}

export interface BlockImg {
    imgSrc: string
}
