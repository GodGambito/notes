const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb+srv://mervin:gambito3@cluster0-7w3jt.mongodb.net/test?retryWrites=true&w=majority', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));
