const express = require('express');
const app = express();
const path = require('path');

// viewed at http://localhost:8088
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/views/index.html'));
});
app.set('PORT', process.env.PORT || 8088);
app.listen(app.get('PORT'), function(error) {
	console.log('Server running at 8088');
});
