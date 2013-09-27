var ChangeSaved = module.exports = function(Model) {

  Model.on('saving', function(instance) {
    var dirty = instance.dirty;
    instance.on('save', function() {
      for(var key in dirty) {
        instance.emit('changeSaved:'+key, instance[key]());
        instance.model.emit('changeSaved:'+key, instance, instance[key]());
      }
    });
  });
}
