var ChangeSaved = module.exports = function(Model) {

  Model.on('saving', function(instance, done) {
    var dirty = instance.dirty;
    instance.once('save', function() {
      for(var key in dirty) {
        instance.emit(key + ' change saved', instance[key]());
        instance.model.emit(key + ' change saved', instance, instance[key]());
      }
    });
    if(done) done();
  });
};
