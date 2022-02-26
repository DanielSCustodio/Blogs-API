const express = require('express');
const bodyParser = require('body-parser');
const userRouters = require('./routers/userRouters');
const loginRouter = require('./routers/loginRouter');
const categoryRouter = require('./routers/categoryRouter');
const blogPostRouter = require('./routers/blogPostRouter');

const app = express();
app.use(bodyParser.json());

app.use('/post', blogPostRouter);
app.use('/categories', categoryRouter);
app.use('/login', loginRouter);
app.use('/user', userRouters);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
