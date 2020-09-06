const views = require('../../../views');
const responses = require('../../../requests/index');
const ApiService = require('../../../services/ApiService');

class App extends views.ModelViewSet {
  retrieve(router, dataBase) {
    dataBase.then((db) => {
      return router.get('/:id', async function (req, res) {
        const id = req.params.id;
        const params = {
          Symbol: 'tETHUSD',
          Precision: 'P0',
        };
        const url = `https://api.stg.deversifi.com/bfx/v2/book/${params.Symbol}/${params.Precision}`;
        const urlMock = `https://api.deversifi.com/bfx/v2/book/tETHUSD/R0`;
        const response = await ApiService.get(urlMock, params);
        responses.sendOk(req, res, { response });
      });
    });
  }
}

const app = new App();

exports.app = app.router;
