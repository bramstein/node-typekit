## Node.js Typekit API Client

This is a Node.js module that implements the [Typekit developers API](https://typekit.com/docs/api). It allows you to create, retrieve, delete, update, and publish Typekit kits from your Node.js code.

## Usage

You can install the client using npm:

    $ npm install typekit

and then include it in your code:

    var kit = require('typekit');

    kit.create(token, {
      name: 'Example',
      families: [{id: 'gkmg'}],
      domains: ['localhost']
    }, function (err, data) {
      kit.update(token, data.id, {
        families: ['gkmg', 'gkda']
      }, function (err) {
        kit.publish(token, data.id, function (err) {
          console.log('All done!');
        });
      });
    });

## API

The `typekit` module has the following methods:

* `create(token, data, callback)` Create a new kit;
* `update(token, id, data, callback)` Update an existing kit;
* `get(token, id, callback)` Get an existing kit;
* `list(token, callback)` List all existing kits;
* `remove(token, id, callback)` Remove an existing kit;
* `publish(token, id, callback)` Publish an existing kit.

The `token` parameter should be your Typekit API token. The `id` parameter is a kit identifier, and the `callback` is always called with two arguments: `err` and `data`. If There are no errors `err` is null.

## License and Copyright

The Node.js Typekit API client is licensed under the new BSD license. Copyright 2013 (c) Bram Stein. All rights reserved.
