<<<<<<< HEAD

import EventEmitter from "eventemitter3";

export default class Beat extends EventEmitter {
    static get events() {
        return {
            BIT: 'bit'
        }
    }

    constructor() {
        super();
        setInterval(() => {
            console.log('bit')
            this.emit(Beat.events.BIT)
        }, 600);
    }
}

=======
export default class Beat {
  static get events() {
    return {
      BIT: "bit",
    };
  }

  constructor() {
    setInterval(() => {
      console.log("bit");
    }, 600);
  }
}
>>>>>>> dev
