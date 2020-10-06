// vom stoca datele în memorie, prin obiectul local data
// pentru a interacționa cu acest obiect, vom crea metodele CRUD
const data = {
  posts: [],
};
let counter = 0;

const add = (table, item) => {
  // create
  item.id = counter++;

  if (!item.title || !item.content) {
    return { status: 400, msg: 'Provide title and content' };
  }
  data[table].push(item);
  return item;
};
const get = (table, id) => {
  // read
  // @todo: scrie funcționalitatea
  const itemToGet = data[table].find((item) => item.id === id);
  if (!itemToGet) {
    return { status: 400, msg: 'Post not found' };
  }
  return { ...itemToGet };
};
const set = (table, id, updatedItem) => {
  // update
  // @todo: scrie funcționalitatea
  const itemIndex = data[table].findIndex((item) => item.id === id);
  data[table][itemIndex] = { ...data[table][itemIndex], ...updatedItem };
  return { ...data[table][itemIndex] };
};
const remove = (table, id) => {
  // delete
  // @todo: scrie funcționalitatea
  const itemIndex = data[table].findIndex((item) => item.id === id);
  data[table].splice(itemIndex, 1);
};

const getAll = (table) => {
  const posts = data[table].slice();

  return posts; // întoarcem o copie al array-ului, ca să nu-l modifice cineva întâmplător
};
const removeAll = (table) => {
  data[table] = [];
};

module.exports = { add, get, set, remove, getAll, removeAll };
