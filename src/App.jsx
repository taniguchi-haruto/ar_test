// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <a-camera gps-camera rotation-reader>?</a-camera>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// import 'aframe';
// import 'aframe-particle-system-component';
// import {Entity, Scene} from 'aframe-react';
// import React from 'react';
// import ReactDOM from 'react-dom';

// class VRScene extends React.Component {
//   render () {
//     return (
//       <Scene>
//         <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}}/>
//         <Entity particle-system={{preset: 'snow'}}/>
//         <Entity light={{type: 'point'}}/>
//         <Entity gltf-model={{src: 'virtualcity.gltf'}}/>
//         <Entity text={{value: 'Hello, WebVR!'}}/>
//       </Scene>
//     );
//   }
// }

// ReactDOM.render(<VRScene/>, document.querySelector('#sceneContainer'));

// import React, { Component } from 'react'
// // import logo from "./assets/react"
// import './App.css'
// import 'aframe'
// import { Animation, Entity, Scene, } from 'aframe-react'

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       degree: 90,
//       position: "0 10 30",
//       rotation: "0 90 0",
//       rotationY: 90,
//     }

//     this.rotate = this.rotate.bind(this)
//   }

//   componentDidMount() {
//     this.rotate()
//   }

//   componentWillUnmount() {
//     if (this.frameHandle) {
//       cancelAnimationFrame(this.frameHandle)
//       this.frameHandle = null
//     }
//   }

//   rotate() {
//     let newDegree = this.state.degree + 0.1
//     if (newDegree >= 360) {
//       newDegree -= 360
//     }

//     const afterX = 50 * Math.cos(newDegree * (Math.PI / 180));
//     const afterZ = 50 * Math.sin(newDegree * (Math.PI / 180));

//     let newRotationY = this.state.rotationY - 0.1
//     if (newRotationY <= -360) {
//       newRotationY += 360
//     }

//     this.setState({
//       degree: newDegree,
//       position: `${afterX} 0 ${afterZ}`,
//       rotation: `${afterZ} ${newRotationY} ${afterX}`,
//       rotationY: newRotationY,
//     });
//     this.frameHandle = requestAnimationFrame(this.rotate)
//   }

//   render() {
//     return (
//       <Scene>
//         <a-camera gps-camera rotation-reader>?</a-camera>
//         <Entity primitive='a-sky' src='[360度画像]'/>
//         <Entity primitive='a-sphere' color="green" position="-2 10 -3"/>
//         <Entity geometry={{primitive: 'box', width: 5}} position="0 0 -5"/>
//         <Entity rotation={this.state.rotation}>
//           <Entity primitive='a-camera' position={this.state.position}/>
//         </Entity>
//       </Scene>
//     )
//   }
// }

// export default App

import "aframe";
import React from "react";
// import ReactDOM from "react-dom/client";
// import createRoot from "react-dom/client";
// import { Box, Sphere, Cylinder, Plane, Sky, Text } from "react-aframe-ar";
// const domNode = document.getElementById("root");
// const root = createRoot(domNode);
// console.log(root);
import { Scene } from "aframe";
class AppScene extends React.Component {
  render() {
    return (
      <>
        <p>test</p>
        <a-entity camera look-controls position="0 1.6 0"></a-entity>
        {/* <Scene>
          <a-camera gps-camera rotation-reader> */}
        {/* <Box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9" shadow />
          <Sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E" shadow />
          <Cylinder
            position="1 0.75 -3"
            radius="0.5"
            height="1.5"
            color="#FFC65D"
            shadow
          />
          <Plane
            position="0 0 -4"
            rotation="-90 0 0"
            width="4"
            height="4"
            color="#7BC8A4"
            shadow
          />
          <Sky color="#ECECEC" />
          <Text
            value="Hello world, react-aframe-ar!"
            align="center"
            position="0 2.3 -1.5"
            color="#7BC8A4"
          /> */}
        <a-box
          material="color: yellow"
          gps-entity-place="latitude: 35.0; longitude: 139.50"
          position="50 40 0"
        />
        {/* </a-camera>
        </Scene> */}
      </>
    );
  }
}
export default AppScene;

// root.render(<AppScene />, document.querySelector("#sceneContainer"));
