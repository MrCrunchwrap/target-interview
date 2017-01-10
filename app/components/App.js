import Marionette from 'backbone.marionette';
import ProductView from './ProductView';
import ProductViewModel from './ProductViewModel'
import bootstrapData from '../assets/item-data.json';

export default Marionette.Application.extend({
  region: '#app',

  onStart() {
    let modelData = bootstrapData.CatalogEntryView[0];
    this.showView(new ProductView({
        model: new ProductViewModel(modelData)
    }));
  }
});
