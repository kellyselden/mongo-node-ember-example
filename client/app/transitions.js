export default function() {
  this.transition(
    this.fromRoute('home.index'),
    this.toRoute('products.index'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('products.index'),
    this.toRoute('products.product'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
