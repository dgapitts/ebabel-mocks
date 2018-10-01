'use strict';

/**
 * `mockTHREEx`
 * Mock THREEx.js for unit testing purposes.
 */
const mockTHREEx = {
  WindowResize: class WindowResize {
    constructor() {}
  }
};

/**
 * `mockTHREE`
 * Mock THREE.js for unit testing purposes.
 */
const mockTHREE = {
  Clock: class Clock {
    constructor() {
      this.start = () => {};
    }
  },

  PointLight: class PointLight {
    constructor() {
      this.position = {
        set: () => {}
      };
    }
  },

  Scene: class Scene {
    constructor() {}
    add() {}
  },

  PerspectiveCamera: class PerspectiveCamera {
    constructor() {
      this.position = {
        set: () => {}
      };
      this.rotation = {
        set: () => {}
      };
    }
    add() {}
  },

  AudioListener: class AudioListener {
    constructor() {}
  },

  Audio: class Audio {
    constructor() {}
  },

  AudioLoader: class AudioLoader {
    constructor() {}
    load() {}
  },

  WebGLRenderer: class WebGLRenderer {
    constructor() {
      this.domElement = document.createElement('canvas');
    }
    setClearColor() {}
    setSize() {}
  },

  BoxBufferGeometry: class BoxBufferGeometry {
    constructor() {}
  },

  TextureLoader: class TextureLoader {
    constructor() {}
    load() {}
  },

  MeshBasicMaterial: class MeshBasicMaterial {
    constructor() {}
  },

  Mesh: class Mesh {
    constructor() {
      this.position = {
        set: () => {}
      };
    }
  },

  Box3: class Box3 {
    constructor() {}
    setFromObject() {
      return {
        getSize: () => {},
        getCenter: () => {}
      };
    }
  },

  Vector3: class Vector3 {
    constructor() {}
  },
};

/**
 * `dataStore`
 * Mock dataStore for unit testing purposes.
*/
const mockDataStore = {
  player: {
    creation: {},
    state: {
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
  },
};

module.exports = {
  mockTHREEx,
  mockTHREE,
  mockDataStore,
};
