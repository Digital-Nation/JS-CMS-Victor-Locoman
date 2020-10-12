// vom stoca datele în memorie, prin obiectul local data
// pentru a interacționa cu acest obiect, vom crea metodele CRUD
const data = {
    posts: [],
};
let counter = 0;

const add = (table, item) => { // create
    item.id = counter++;
    data[table].push(item);
    return item;
};
const getBy = (table, key, value) => { // read by key
    const item = data[table].find(dataItem => dataItem[key] === value);
    return item;
};
const get = (table, id) => { // read
    // @todo: scrie funcționalitatea
    return getBy(table, 'id', id);
};
const set = (table, id, updatedItem) => { // update
    // @todo: scrie funcționalitatea
      for (let i = 0; i < data[table].length; i++) {
        let obj = data[table][i];
        if (id.indexOf(obj.id) !== -1) {
            data[table][i] = updatedItem
        }
    }
};
const remove = (table, id) => { // delete
    // @todo: scrie funcționalitatea  
    for (let i = 0; i < data[table].length; i++) {
        let obj = data[table][i];
        if (id.indexOf(obj.id) !== -1) {
            data[table].splice(i, 1);
        }
    }
};

const getAll = (table) => {
    return data[table]; // întoarcem o copie al array-ului, ca să nu-l modifice cineva întâmplător
};
const removeAll = (table) => {
    data[table] = [];
};

module.exports = {add, getBy, get, set, remove, getAll, removeAll};
