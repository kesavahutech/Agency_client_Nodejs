const express = require('express');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');

dotenv.config();
const app = express();

const sequelize = require('./Util/database');
const Agency = require('./Model/Agency');
const Client = require('./Model/Client');
const AgencyRoute = require('./Routes/AgencyRoutes');
const ClientRoute = require('./Routes/ClientRoutes');

app.use(bodyparser.json());

app.use(AgencyRoute);
app.use(ClientRoute);


Client.belongsTo(Agency, { constraints: true, onDelete: 'CASCADE' });
Agency.hasMany(Client);

sequelize
// .sync({force : true})
.sync()
.then((result) => app.listen(4000))
.catch((err) => console.log(err)) ;