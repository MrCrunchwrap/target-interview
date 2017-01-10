import 'expose?jQuery!jquery';
import './styles/application.less';
import App from 'components/App';

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.start();
});
