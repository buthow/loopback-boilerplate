'use strict';

module.exports = function(Account) {
  /**
   * Sample remote test action endpoint
   * */
  Account.test = function(cb) {
    const OPEN_HOUR = 6;
    const CLOSE_HOUR = 20;
    let currentDate = new Date();
    let currentHour = currentDate.getHours();
    console.log('Current hour is %d', currentHour);
    let response;
    if (currentHour >= OPEN_HOUR && currentHour < CLOSE_HOUR) {
      response = 'We are open for business.';
    } else {
      response = 'Sorry, we are closed. Open daily from 6am to 8pm.';
    }
    cb(null, response);
  };

  /**
   * Sample remote test action endpoint using Async Await support
   * */
  Account.asyncFunction = async () => {
    try {
      return await getData();
    } catch (e) {
      // Optional error exception
      throw e;
    }

  };

  /**
   * Sample remote test action endpoint using Promises support
   * */
  Account.promiseFunction = () => {
    const Promise = require('bluebird');
    return Promise.resolve()
      .then(() => {
        return getData()
      })
      .then(results => {
        return results
      })
      .catch(err => {
        throw err
      })
  };

  /**
   * Sample remote methods
   * */
  Account.remoteMethod(
    'test', {
      http: {
        path: '/test',
        verb: 'get',
      },
      returns: {
        arg: 'status',
        type: 'string',
      },
    }
  );

  Account.remoteMethod(
    'asyncFunction', {
      http: {
        path: '/async',
        verb: 'get',
      },
      returns: {
        arg: 'data',
        type: 'object',
      },
    }
  );
  Account.remoteMethod(
    'promiseFunction', {
      http: {
        path: '/promises',
        verb: 'get',
      },
      returns: {
        arg: 'data',
        type: 'object',
      },
    }
  );
};

function getData() {
  return {
    string: 'Yup, data is here',
  };
}
