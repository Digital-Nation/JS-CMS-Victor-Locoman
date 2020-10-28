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

const getBy = (table, key, value) => { // read by key
    // @todo: scrie funcționalitatea
   const item =  data[table].find(dataItem => dataItem[key]===value);
   console.log(item);
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
    data[table].splice(itemIndex,1,'empty');
    // delete data[table][itemIndex];
    return itemIndex === -1 ? false : true;
};

const getAll = (table) => {
  return data[table].slice(); // întoarcem o copie al array-ului, ca să nu-l modifice cineva întâmplător
};
const removeAll = (table) => {
  data[table] = [];
};

module.exports = {add, get, getBy, set, remove, getAll, removeAll, data};
