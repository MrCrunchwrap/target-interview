import Marionette from 'backbone.marionette';
import productItemViewTemplate from '../templates/productItemViewTemplate.hbs';

export default Marionette.View.extend({
  
  template: productItemViewTemplate,

  ui: {
    $addQuantity: '.product__quantity-value',
    $minusButton: '.js-quantity-minus',
    $plusButton: '.js-quantity-plus'
  },

  events: {
    'click @ui.$plusButton': 'onClickPlus',
    'click @ui.$minusButton': 'onClickMinus'
  },

  onDomRefresh() {

  	// initialize slick carousel
  	this.$('.slider-for').slick({
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: false,
  		fade: true,
  		asNavFor: '.slider-nav'
  	});

  	// initialize slick carousel navigation
  	this.$('.slider-nav').slick({
  		slidesToShow: 3,
  		slidesToScroll: 1,
  		asNavFor: '.slider-for',
  		dots: true,
  		centerMode: true,
  		focusOnSelect: true
  	});
  },

  updateQuantity() {
    // normally you would probably re-render a subview on model change, but this is so tiny
    // it's silly to create a new view for it
    this.getUI('$addQuantity').html(this.model.get('productQuantity'))
  },

  onClickPlus() {
    let quantity = this.model.get('productQuantity');
    this.model.increaseQuantity();
    this.updateQuantity();
  },

  onClickMinus() {
    let quantity = this.model.get('productQuantity');
    this.model.decreaseQuantity();
    this.updateQuantity();
  }
});
