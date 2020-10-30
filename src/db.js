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


const MongoClient = require('mongodb').MongoClient;
const populate = require('./populateDb');

const getMongoUri = () => {
    // Datele din process.env sunt cele din fișierul .env, dacă nu există, trebuie creat după modelul .env.example
    const user = encodeURIComponent(process.env.mongoUser);
    const pass = encodeURIComponent(process.env.mongoPass);
    const url = process.env.mongoUrl;
    return `mongodb+srv://${user}:${pass}@${url}/`;
};
const client = new MongoClient(getMongoUri(), { useUnifiedTopology: true });
module.exports = { client };

client
    .connect()
    .then(() => console.log('MongoDB connected'))
    .catch(error => console.error('Error on connecting to MongoDB server', error))
    .then(() => {
        const posts = client.db('app').collection('posts');
        module.exports.posts = posts;
        populate(posts);
    });


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://mighel1998:mighel1998@cluster0.qbak3.mongodb.net/app?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    console.log(await posts.find({}).limit(1).forEach(console.log))
    // perform actions on the collection object
    client.close();
});
