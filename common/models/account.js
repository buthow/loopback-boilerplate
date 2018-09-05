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
   * Sample remote methods for current test action
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
};
