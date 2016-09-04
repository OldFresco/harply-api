/** -------DOMAINS OF ABILITY-------- **/

// Allow user to login
var loginDomain = {
    handle: function(message) {
        return 'I need proof that you\'re you: ';
    }
};

// Provide lolz
var memesDomain = {
    handle: function(message) {
        return 'lolz galore: ';
    }
};

// Provide the latest trending topics across platforms
var newsDomain = {
    handle: function(message) {
        return 'What\'s new: ';
    }
};

// Provide the latest trending tweets
var twitterDomain = {
    handle: function(message) {
        return 'Twitter\'s saying a lot: ';
    }
};

// Provide a feed of trending videos
var videosDomain = {
    handle: function(message) {
        return 'Watch this: ';
    }
};

// Provide food recomendations
var foodDomain = {
    handle: function(message) {
        return 'Some meals you might like: ';
    }
};

// Make film recomendations
var movieDomain = {
    handle: function(message) {
        return 'Some films you might like: ';
    }
};

// Make song recomendations
var songDomain = {
    handle: function(message) {
        return 'Some songs you might like: ';
    }
};

// Provide a feed of trending insta posts
var instaDomain = {
    handle: function(message) {
        return 'Here\s what\s new on the gram: ';
    }
};

// Provide a feed of random media
var instaDomain = {
    handle: function(message) {
        return 'Random: ';
    }
};

// Make small talk
var smallTalkDomain = {
    handle: function(message) {
        return 'Chit chat';
    }
};

/** -------UTILITIES-------- **/

module.exports = {
    respondTo: function(message) {

        switch (message) {
            case 'login plz':
                return loginDomain.handle(message);
            case 'memes plz':
                return memesDomain.handle(message);
            case 'news plz':
                return newsDomain.handle(message);
            case 'tweets plz':
                return twitterDomain.handle(message);
            case 'food plz':
                return foodDomain.handle(message);
            case 'vids plz':
                return videoDomain.handle(message);
            case 'movie plz':
                return movieDomain.handle(message);
            case 'song plz':
                return songDomain.handle(message);
            case 'insta plz':
                return instaDomain.handle(message);
            case 'randoms plz':
                return randomDomain.handle(message);
            default:
                return smallTalkDomain.handle(message);
        };
    }
};