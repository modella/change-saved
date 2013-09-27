# modella-change-saved

Adds a `changeSaved:attr` for modella.

## Usage Example

    var modella = require('modella'),
        changeSavedEvent = require('modella-change-saved');

    var User = modella('User')
                .attr('username');

    User.use(changeSavedEvent);


    User.on('changeSaved:username', function(user, username) {
      // Update some other records or do whatever else you want.
    });
