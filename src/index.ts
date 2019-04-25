import {DisplayMode, Engine, Loader} from 'excalibur';
import { Resources } from './resources';

class Game extends Engine {
  constructor() {
    super({ width: 800, height: 600, displayMode: DisplayMode.FullScreen });
  }

  public start(loader: ex.Loader) {
    return super.start(loader);
  }
}

const game = new Game();

let loader = new Loader();
for (let key in Resources) {
  loader.addResource(Resources[key]);
}

game.start(loader).then(() => {

});
