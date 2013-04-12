## Usage

````javascript
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
````
