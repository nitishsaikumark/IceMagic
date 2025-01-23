export const AddItem = (item) => {
    return {type:"ADD",item:{...item,amount:1}};
}

export const RemoveItem = (item) => {
    return {type:"REMOVE",item:{...item,amount:1}};
}

export const ClearItem = () => {
    return {type:"CLEAR"};
}

