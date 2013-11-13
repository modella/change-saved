# modella-change-saved

Adds a `attr change saved` for modella.

## Usage Example

    var modella = require('modella'),
        changeSavedEvent = require('modella-change-saved');

    var User = modella('User')
                .attr('username');

    User.use(changeSavedEvent);


    User.on('username change saved', function(user, username) {
      // Update some other records or do whatever else you want.
    });
