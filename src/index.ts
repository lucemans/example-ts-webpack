import {DisplayMode, Engine, Loader} from 'excalibur';
import { Resources } from './resources';
import {UIButton} from "./ui/uibutton";
import {UICursor} from "./ui/cursor";

class Game extends Engine {
  constructor() {
    super({ width: 1920, height: 1080, displayMode: DisplayMode.FullScreen });
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

loader.suppressPlayButton = true;

game.start(loader).then(() => {
    let button = new UIButton("Play", game.halfCanvasWidth, game.halfCanvasHeight, 200, game.currentScene, game);
    new UIButton("Credits", game.halfCanvasWidth, game.halfCanvasHeight + 100, 400, game.currentScene, game);
    let cursor = new UICursor(game, game.currentScene);
});

let elem = document.createElement('style');
elem.innerHTML = '* { cursor: none; }';
document.getElementsByTagName('html').item(0).appendChild(elem);
