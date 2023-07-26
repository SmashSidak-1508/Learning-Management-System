
const app = require('./app');

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`your app running at http:localhost:${PORT}`)
})
