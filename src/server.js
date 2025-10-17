const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');


app.use(cors({origin:"*"}));

const PORT = process.env.PORT || 1235;


app.listen(PORT, () => {
console.log(`Server berjalan di port ${PORT}`);
});