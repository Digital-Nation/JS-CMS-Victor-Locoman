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
const get = (table, id) => { // read
    // @todo: scrie funcționalitatea
};
const set = (table, id, updatedItem) => { // update
    // @todo: scrie funcționalitatea
};
const remove = (table, id) => { // delete
    // @todo: scrie funcționalitatea
};

const getAll = (table) => {
    return data[table]; // întoarcem o copie al array-ului, ca să nu-l modifice cineva întâmplător
};
const removeAll = (table) => {
    data[table] = [];
};

module.exports = {add, get, set, remove, getAll, removeAll};
