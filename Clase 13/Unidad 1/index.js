var moment = require('moment');
moment.locale('es');

console.log('naci ' + moment('29/05/1989', 'DD/MM/YYYY').fromNow())