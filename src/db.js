// vom stoca datele în memorie, prin obiectul local data
// pentru a interacționa cu acest obiect, vom crea metodele CRUD
const data = {
  posts: [],
};
let counter = 0;

const add = (table, item) => {
  // create
  item.id = counter++;
  data[table].push(item);
  return item;
};

<<<<<<< HEAD
const getBy = (table, key, value) => { // read by key
    // @todo: scrie funcționalitatea
   const item =  data[table].find(dataItem => dataItem[key]===value);
   return item;
}; 

const get = (table, id) => { // read
    // @todo: scrie funcționalitatea
   return getBy(table, 'id', id);
};

const set = (table, updatedItem) => { // update
    // @todo: scrie funcționalitatea
    const itemIndex =  data[table].findIndex(dataItem => dataItem.id===updatedItem.id);
    if (itemIndex === -1) {
     	if (counter <= updatedItem.id){
    		counter = updatedItem.id+1;
    	}
    	data[table].push(updatedItem);
    	return updatedItem;
    } else {
    	const item = data[table][itemIndex];
    	return item;
    };
};
const remove = (table, id) => { // delete
    // @todo: scrie funcționalitatea

    const itemIndex =  data[table].findIndex(dataItem => dataItem.slug===id);
    delete data[table][itemIndex];
    return itemIndex === -1 ? false : true;
};

const getAll = (table) => {
    return data[table].slice(); // întoarcem o copie al array-ului, ca să nu-l modifice cineva întâmplător
=======
const getBy = (table, key, value) => {
  // read by key
  const item = data[table].find((dataItem) => dataItem[key] === value);
  return item;
};
const get = (table, id) => {
  // read
  return getBy(table, "id", id);
};
const set = (table, updatedItem) => {
  // update
  const itemIndex = data[table].findIndex(
    (dataItem) => dataItem.id === updatedItem.id
  );
  if (itemIndex === -1) {
    if (counter <= updatedItemid) {
      counter = updatedItemid + 1;
    }
    data[table].push(updatedItem);
    return updatedItem;
  }
  const item = data[table][itemIndex];
  return item;
};
const remove = (table, id) => {
  // delete
  const itemIndex = data[table].findIndex((dataItem) => dataItem.id === id);
  delete data[table][itemIndex];
  return itemIndex === -1 ? false : true;
};

const getAll = (table) => {
  return data[table].slice(); // întoarcem o copie al array-ului, ca să nu-l modifice cineva întâmplător
>>>>>>> acb948e66331317a3d2ef953e01b8ce46f476e3a
};
const removeAll = (table) => {
  data[table] = [];
};

<<<<<<< HEAD
module.exports = {add, get, getBy, set, remove, getAll, removeAll, data};
=======
module.exports = { add, getBy, get, set, remove, getAll, removeAll };
>>>>>>> acb948e66331317a3d2ef953e01b8ce46f476e3a
