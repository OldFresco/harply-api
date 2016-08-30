const routes = require('express').Router();
const brain = require('../brain/brain');

routes.get('/health', (req, res) => {
    res.status(200).json({ message: 'All is good' })
})

routes.get('/:message', (req, res) => {
    const message = req.params.message;
    const response = brain.respondTo(message);

    res.status(200).json({ response: response });
});

module.exports = routes;