const app = require('./app');
const dataBase = require('./dataBase');
const config = require('./config');

dataBase()
    .then(info => {
    console.log(`Connected to ${info.host}:${info.name}`);
    app.listen(config.PORT, () =>
        console.log(`Server is listenning on PORT ${config.PORT}`)
    );
    })
    .catch(() => {
    console.log('Unable to connect to database');
    process.exit(1);
});



