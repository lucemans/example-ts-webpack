import {Actor, Engine, GameEvent, Scene, Vector} from "excalibur";
import {Resources} from "../resources";

export class UICursor extends Actor {

    normalSize = new Vector(1, 1);
    clickedSize = new Vector(0.8, 0.8);

    constructor(engine: Engine, scene: Scene) {
        super(-1000, -1000);

        let sprite = Resources.Cursor.asSprite();

        sprite.scale = new Vector(0.02, 0.02);

        this.addDrawing(sprite);

        scene.add(this);

        let actor = this;

        actor.anchor = new Vector(0.10,0.15);

        engine.input.pointers.primary.on('move', function(evt: GameEvent<Engine>) {
            // console.log(this);
            actor.x = evt['worldPos'].x;
            actor.y = evt['worldPos'].y;
        });

        engine.input.pointers.primary.on('down', () => {
            this.scale = this.clickedSize;
        });

        engine.input.pointers.primary.on('up', () => {
            this.scale = this.normalSize;
        });
    }
}