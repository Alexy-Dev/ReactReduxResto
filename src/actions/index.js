const menuLoaded = (newMenu) => {   //загрузка с сервера (успех)
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }                               //В action обычно 3 части
}
const menuRequested = () => {       //запрос на сервер
    return {                        
        type: 'MENU_REQUESTED',
    }
}

const menuError = () => {           //обработка ошибок
    return {
        type: 'MENU_ERROR',
    }
}

const addedToCart = (id) => {
    return {
        type: 'ITEM_ADD_TO_CART',
        payload: id
    };
};

const onDelete = (id) => {
    return {
        type: 'ITEM_REMOVE_FROM_CART',
        payload: id
    }
}

export {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCart,
    onDelete
};