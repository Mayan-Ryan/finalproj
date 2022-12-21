
const mysql = require('mysql');

const connection = mysql.createConnection({
	host : 'localhost',
	database : 'acm',
	user : 'root',
	password : 'manav'
});

connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('MySQL Database is connected Successfully');
	}
});

module.exports = connection;

