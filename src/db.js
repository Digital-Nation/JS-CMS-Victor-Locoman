const data = {
    posts: [],
};

let counter = 0;

const add = (table, item) => {
    item.id = counter++;
    data[table].push(item);
    return item;
};

const getBy = (table, key, value) => {
    const item = data[table].find(dataItem => dataItem[key] === value);
    return item;
};

const get = (table, id) => {
    return getBy(table, 'id', id);
};

const set = (table, updatedItem) => {
    const itemIndex = data[table].findIndex(dataItem => dataItem.id === updatedItem.id);
    if (itemIndex === -1) {
        if (counter <= updatedItem.id) {
            counter = updatedItem.id + 1;
        }
        data[table].push(updatedItem);
        return updatedItem;
    }

    const item = data[table][itemIndex];
    return item;
};

const remove = (table, id) => {
    const itemIndex = data[table].findIndex(dataItem => dataItem.id === updateItem.id);
    delete data[table][itemIndex];
    return itemIndex === -1 ? false : true;
};

const getAll = (table) => {
    return data[table].slice();
};

const removeAll = (table) => {
    data[table] = [];
};

module.exports = { add, getBy, get, set, remove, getAll, removeAll };