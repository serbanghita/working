interface Component {
  bitmask: number;
  prototype: {
    bitmask: number;
  }
}

class Component {
  // public prototype!: Component & { bitmask: number };
  constructor(public properties: {}) {
    this.properties = properties;
  }
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

let BITMASK: number = 0b1;

// This fn adds an unique bitmask to each "registered" Component class.
function registerComponent(componentDeclaration: typeof Component) {
  componentDeclaration.prototype.bitmask = ((BITMASK << 0b1) | 0b1);
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

// Here we register our components.
registerComponent(Position);
// registerComponent(Body)
// registerComponent(Renderable)
// ...etc...

const player = new Entity();
player.addComponent(new Position({ x: 10, y: 20 }));
