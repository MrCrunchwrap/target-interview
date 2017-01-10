import Marionette from 'backbone.marionette';
import productItemViewTemplate from '../templates/productItemViewTemplate.hbs';

export default Marionette.View.extend({
  
  template: productItemViewTemplate,

  onDomRefresh() {

  	// initialize slick carousel
  	this.$('.slider-for').slick({
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: false,
  		fade: true,
  		asNavFor: '.slider-nav'
  	});

  	this.$('.slider-nav').slick({
  		slidesToShow: 3,
  		slidesToScroll: 1,
  		asNavFor: '.slider-for',
  		dots: true,
  		centerMode: true,
  		focusOnSelect: true
  	});
  }
});
