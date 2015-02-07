import CreateRoute from 'client/routes/create';

export default CreateRoute.extend({
  model: function() {
    return this._super('product');
  },
  controllerName: 'products/product',
  templateName: 'products/product'
});
