import {LScene} from "./scene";
import {Engine} from "excalibur";
import {UIButton} from "../ui/uibutton";
import {UICursor} from "../ui/cursor";

export class MainMenu extends LScene {

    constructor(engine: Engine) {
        super(engine);

        new UIButton("Play", engine.halfCanvasWidth, engine.halfCanvasHeight, 200, this, engine, () => {
            console.log('LETS PLAY DIS GAME!!');
            engine.goToScene('game');
        });
        new UIButton("Credits", engine.halfCanvasWidth, engine.halfCanvasHeight + 100, 400, this, engine);
        new UICursor(engine, this);
    }

}