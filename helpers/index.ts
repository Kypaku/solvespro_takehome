export const uuid = () => {
    return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, c =>(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16))
}

export function orderItemsById (arrayObjects: Array<any>, arrayIds: string[]) {
    if (!arrayIds.length) return arrayObjects
    const arrayItems = []
    for (let i = 0; i < arrayObjects.length; i++) {
        arrayItems[arrayIds.indexOf(arrayObjects[i].id)] = arrayObjects[i]
    }
    return arrayItems
}
