const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

const routes = require("./api/routes");
routes(app);

if (!module.parent) {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

module.exports = app;
// This is the main server file for the application.
// It sets up an Express server, serves static files from the 'public' directory,
// and includes API routes defined in a separate module.
// The server listens on a specified port, defaulting to 3000 if not set in the environment.        