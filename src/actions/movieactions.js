export const addForm = (obj) =>
{
    return ( {
                type :'ADD_FORM',
                payload : obj
             })
}

export const removeForm = (obj1) =>
{
    return ({
        type : 'REMOVE_FORM',
        payload : obj1
    })
}

export const displayOne = (name) =>
{
    return ({
        type :'DISPLAY_ONE',
        payload : name

    })
}

export const displayOrder =(OrderName) =>
{
    return ({
        type : 'DISPLAY_ORDER',
        payload : OrderName
    })
}

export const testName = (inp) =>
{
    return ({
        type : 'TEST',
        payload : inp
    })
}