## Usage

    var kit = require('typekit');

    kit.create(token, {
      name: 'Example',
      families: ['droidsans:n4'],
      domains: ['localhost']
    }, function (err, id) {
      kit.update(token, id, {
        families: ['droidsans:n4', 'droidsans:n7']
      }, function (err) {
        kit.publish(token, id, function (err) {
          console.log('All done!');
        });
      });
    });

