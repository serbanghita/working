class Component {
  public prototype!: Component & { bitmask: number };
  constructor(public properties: any) {}
}

interface IPositionProps {
  x: number;
  y: number;
}

class Position extends Component {
  constructor(public properties: IPositionProps) {
    super(properties);
  }
}

let BITMASK: number = 1;

function registerComponent<T extends Component>(componentDeclaration: T) {
  componentDeclaration.prototype.bitmask = ++BITMASK;
}

class Entity {
  public id: number = 0;
  public componentsBitmask: number = 0;
  public components: {[key: string]: Component} = {};

  public addComponent<T extends Component>(componentInstance: T) {
    this.componentsBitmask += componentInstance.prototype.bitmask;

    this.components[componentInstance.constructor.name] = componentInstance;
  }
}

const player = new Entity();
player.addComponent(new Position({ x: 10, y: 20 }));

