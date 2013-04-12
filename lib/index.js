var request = require('request'),
    template = new (require('url-template'))();

var apiUrl = 'https://typekit.com/api/v1/json/kits',
    kitUrl = template.parse(apiUrl + '/{id}'),
    publishUrl = template.parse(apiUrl + '/{id}/publish');

function parseResponse(callback) {
  return function (err, res, body) {
    if (err) {
      callback(err, null);
    } else if (res.statusCode !== 200 && res.statusCode !== 201) {
      callback({
        statusCode: res.statusCode,
        body: JSON.parse(body.toString())
      });
    } else {
      callback(null, JSON.parse(body.toString()));
    }
  };
}

function createHeaders(token) {
  return {
    'X-Typekit-Token': token
  }
}

function create(token, data, callback) {
  request.post({
    url: apiUrl,
    headers: createHeaders(token),
    form: data
  }, parseResponse(callback));
}

function update(token, id, data, callback) {
  request.post({
    url: kitUrl.expand({
      id: id
    }),
    headers: createHeaders(token),
    form: data
  }, parseResponse(callback));
}

function get(token, id, callback) {
  request.get({
    url: kitUrl.expand({
      id: id
    }),
    headers: createHeaders(token)
  }, parseResponse(callback));
}

function list(token, callback) {
  request.get({
    url: apiUrl,
    headers: createHeaders(token)
  }, parseResponse(callback));
}

function remove(token, id, callback) {
  request.del({
    url: kitUrl.expand({
      id: id
    }),
    headers: createHeaders(token)
  }, parseResponse(callback));
}

function publish(token, id, callback) {
  request.post({
    url: publishUrl.expand({
      id: id
    }),
    headers: createHeaders(token)
  }, parseResponse(callback));
}

module.exports = {
  create: create,
  update: update,
  remove: remove,
  get: get,
  list: list,
  publish: publish
};
