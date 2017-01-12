import Backbone from 'backbone'

export default Backbone.Model.extend({
  defaults: {
    productQuantity: 1
  },

  initialize(opts) {
    this.set({
      con: opts.CustomerReview[0].Con[0],
      pro: opts.CustomerReview[0].Pro[0],
      productFeatures: opts.ItemDescription[0].features,
      primaryImageUrl: opts.Images[0].PrimaryImage[0].image,
      showAddToCart: this.showAddToCart(opts.purchasingChannelCode),
      showPickupInStore: this.showPickupInStore(opts.purchasingChannelCode),
      priceData: opts.Offers[0].OfferPrice[0],
      promos: opts.Promotions,
      thumbnails: opts.Images[0].AlternateImages,
    })
  },

  increaseQuantity() {
    this.set('productQuantity', this.get('productQuantity') + 1);
  },

  decreaseQuantity() {
    if (this.get('productQuantity') > 0) {
      this.set('productQuantity', this.get('productQuantity') - 1);
    }
  },

  showAddToCart(purchasingChannelCode) {
    let code = parseInt(purchasingChannelCode, 10)
    if (code === 0 || code === 1) {
      return true;
    } else {
      return false;
    }
  },

  showPickupInStore(purchasingChannelCode) {
    let code = parseInt(purchasingChannelCode, 10)
    if (code === 0 || code === 2) {
      return true;
    } else {
      return false;
    }
  }
});
