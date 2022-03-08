const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin123@cluster0.huuaj.mongodb.net/catdata?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {console.log('conectado com sucesso')});
mongoose.connection.on('error', () => {console.log('deu ruim')});


const Cat = mongoose.model('Cat',
  {
    name: String,
    age: Number,
    alive: Boolean,
  });


// Como instância

const kitty = new Cat({ name: 'Matilde', age: 7, alive: true });

// kitty.save().then(result => console.log(result));

// com metodo do mogoose (create)

// Cat.create({ name: 'Robson', age: 7, alive: true })


const showCats = async () => {
  const cats = await Cat.find({ name: 'Robson' }, { name: 1, _id: 0 });
  console.log(cats);
}

showCats();