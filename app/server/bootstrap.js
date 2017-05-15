Meteor.startup(function() {

   let config = Meteor.settings;

  ServiceConfiguration.configurations.remove({
    service: 'facebook'
  });

  ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: config.facebook.APP_ID,
    secret: config.facebook.SECRET
  });

});
