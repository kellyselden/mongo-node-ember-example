import CreateRoute from 'client/routes/create';

var type = 'product';

export default CreateRoute.extend({
  model: function() {
    return this._super(type);
  },
  controllerName: type,
  templateName: type
});
