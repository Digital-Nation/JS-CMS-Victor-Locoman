const fs = require('fs').promises;

let data = {
  posts: [],
};

const dbFile = 'data.my-json';
fs.readFile(dbFile, { encoding: 'utf-8' })
  .then(content => {
    console.log('content', content);
    if (content) {
      data = JSON.parse(content);
    }
  })
  .catch(error => {
    // no file, keep default data
  });

let counter = 0;

const persistOnFile = () => {
  fs.writeFile(dbFile, JSON.stringify(data)).catch(error => {
    console.log('error on write', error);
    // do nothing, I don't care
  });
};

const add = (table, item) => {
  // create
  item.id = counter++;
  data[table].push(item);
  persistOnFile();
  return item;
};

const getBy = (table, key, value) => {
  // read by key
  const item = data[table].find(dataItem => dataItem[key] === value);
  return item;
};
const get = (table, id) => {
  // read
  return getBy(table, 'id', id);
};
const set = (table, updatedItem) => {
  // update
  const itemIndex = data[table].findIndex(dataItem => dataItem.id === updatedItem.id);
  if (itemIndex === -1) {
    if (counter <= updatedItemid) {
      counter = updatedItemid + 1;
    }
    data[table].push(updatedItem);
    return updatedItem;
  }
  const item = data[table][itemIndex];
  persistOnFile();
  return item;
};
const remove = (table, id) => {
  // delete
  const itemIndex = data[table].findIndex(dataItem => dataItem.id === id);
  delete data[table][itemIndex]; // @todo: fix this with .splice(...)
  persistOnFile();
  return itemIndex === -1 ? false : true;
};

const getAll = table => {
  return data[table].slice(); // întoarcem o copie al array-ului, ca să nu-l modifice cineva întâmplător
};
const removeAll = table => {
  data[table] = [];
  persistOnFile();
};

module.exports = { add, getBy, get, set, remove, getAll, removeAll };
