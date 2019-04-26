import {DisplayMode, Engine, Loader} from 'excalibur';
import { Resources } from './resources';
import {UIButton} from "./ui/uibutton";
import {UICursor} from "./ui/cursor";
import {MainMenu} from "./scenes/mainmenu";

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
    game.addScene('main', new MainMenu(game));

    game.goToScene('main');
});

let elem = document.createElement('style');
elem.innerHTML = '* { cursor: none; }';
document.getElementsByTagName('html').item(0).appendChild(elem);
