var express = required('express');

const port = process.env.PORT || 5000;
const app = express();

// this is to serve the frontend part
app.use(express.static('build/'));

// your backend routes here
app.get('/api/xyz', (req, res) => {});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});