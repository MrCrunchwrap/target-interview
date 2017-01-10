import Backbone from 'backbone'

export default Backbone.Model.extend({
  initialize(opts) {
    // TODO: convert this to object hash
    this.set('productFeatures', opts.ItemDescription[0].features);
    this.set('primaryImageUrl', opts.Images[0].PrimaryImage[0].image);
    this.set('showAddToCart', this.showAddToCart(opts.purchasingChannelCode));
    this.set('showPickupInStore', this.showPickupInStore(opts.purchasingChannelCode));
    this.set('priceData', opts.Offers[0].OfferPrice[0]);
    this.set('promos', opts.Promotions);
    this.set('thumbnails', opts.Images[0].AlternateImages)
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
