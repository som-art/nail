import logo from "./logo.svg";
import "./styles/tailwind.css";
import {
  GiSpiralBottle,
  GiWaves,
  GiAzulFlake,
  GiCircle,
  GiCrossMark,
  GiCircleClaws,
  GiNestedHexagons,
  GiSplitCross,
} from "react-icons/gi";
import { CgShapeHexagon } from "react-icons/cg";
import CustomWaveIcon from "./components/CustomWaveIcon";
import CustomAzuleFlake from "./components/CustomAzuleFlake";
import CustomBoomerangSun from "./components/CustomBoomerangSun";
import CustomGiCrossMark from "./components/CustomGiCrossMark";
import "./styles/customStyles.css";
import { useState, useEffect, useRef } from "react";
import "./App.css";

const useMove = () => {
  const [mouseState, setMouseState] = useState({ x: 0, y: 0 });
  const [prevState, setPrevState] = useState({ dx: 0, dy: 0 });

  const [mt, setMt] = useState(0);

  const [ml, setMl] = useState(0);

  const handleMouseMove = (e) => {
    e.persist();
    setMouseState((mouseState) => ({
      ...mouseState,
      x: e.clientX,
      y: e.clientY,
    }));
    if (mouseState.x < prevState.dx) {
      setMl(Math.random() * 10);
    }
    if (mouseState.x > prevState.dx) {
      setMl(-Math.random() * 20);
    }
    if (mouseState.y < prevState.dy) {
      setMt(Math.random() * 10);
    }
    if (mouseState.y > prevState.dy) {
      setMt(-Math.random() * 20);
    }
    setPrevState((prevState) => ({
      ...prevState,
      dx: mouseState.x,
      dy: mouseState.y,
    }));
  };

  return {
    x: mouseState.x,
    y: mouseState.y,
    mt,
    ml,
    handleMouseMove,
  };
};

function App() {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const animate = useRef(window);
  const { x, y, mt, ml, handleMouseMove } = useMove();
  console.log(mt, ml);

  useEffect(() => {
    setTimeout(() => {
      ref.current.className =
        " overflow-x-hidden overflow-y-hidden slideUp hidden";
    }, 10900);
    setTimeout(() => {
      animate.current.style.marginTop = mt + "px";
      animate.current.style.marginLeft = ml + "px";
    });

    // setTimeout(() => {
    //   ref1.current.className = "m-0 p-0";
    // }, 10000);
  }, [mt, ml, window]);

  return (
    <div>
      <div
        scroll="no"
        className=" overflow-x-hidden overflow-y-hidden slideUp relative z-10"
        ref={ref}
      >
        <div className=" h-screen w-screen bg-black overflow-y-hidden overflow-x-hidden">
          <div className="-top-5 right-32 slide1">
            <div className=" bg-gradient-to-r from-pink-400 to-purple-400 rounded-full h-32 w-32 floatingy overflow-y-hidden"></div>
          </div>
          <div className="bottom-10 left-44 slide4">
            <div className=" bg-gradient-to-r from-green-600 to-green-800 rounded-full h-32 w-32 floatingy overflow-y-hidden"></div>
          </div>
          <div>
            <div className=" absolute inset-x-64 inset-y-72 flex justify-center items-center switch">
              <GiSpiralBottle className="text-red-400 h-36 w-36 spin1 " />
            </div>
          </div>
          <div className="slide2">
            <CustomWaveIcon className="floating" />
          </div>
          <div className="bottom-5 right-96 slide4">
            <CgShapeHexagon className=" text-gray-600 h-12 w-12 floating overflow-y-hidden" />
          </div>
          <div className="slide top-20 left-96 transition-all duration-1000">
            <CgShapeHexagon className=" text-gray-600 h-12 w-12 floating overflow-y-hidden" />
          </div>
          <div>
            <div className="slide3 top-72 right-64">
              <CustomAzuleFlake className=" spin" />
            </div>
          </div>
          <div className="slide top-32 left-[130px] transition-all duration-1000">
            <CustomBoomerangSun className=" spin" />
          </div>
          <div className="slide top-52 left-72 transition-all duration-1000 ">
            <GiCircle className="text-gray-600 h-10 w-10 text-2xl floating overflow-y-hidden" />
          </div>
          <div className="slide1 top-44 right-32 transition-all duration-1000">
            <GiCircle className="text-gray-600 h-10 w-10  text-2xl floating overflow-y-hidden" />
          </div>
          <div className="text-white text-8xl absolute font-extrabold bottom-20 inset-x-[320px] font-mono">
            <span>
              <span className="switch1">
                <span>H</span>
              </span>
              <span className="switch2">
                <span>E</span>
              </span>
              <span className="switch3">
                <span>L</span>
              </span>
              <span className="switch4">
                <span>L</span>
              </span>
              <span className="switch5">
                <span>O</span>
              </span>
            </span>
            <span> </span>
            <span>
              <span className="switch7">
                <span>T</span>
              </span>
              <span className="switch8">
                <span>H</span>
              </span>
              <span className="switch9">
                <span>E</span>
              </span>
              <span className="switch10">
                <span>R</span>
              </span>
              <span className="switch11">
                <span>E</span>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="m-0 p-0 absolute top-0 left-0 z-0 overflow-x-hidden overflow-y-hidden">
        <div className="w-screen h-[600px] bgGrad overflow-y-hidden overflow-x-hidden">
          <div className="w-screen top-5 h-32"></div>
          <div className=" w-screen flex justify-center items-center h-[500px]">
            <CustomGiCrossMark className=" overflow-y-hidden" />
          </div>
        </div>
        <div
          className="absolute top-0 left-0 bg-transparent z-10 h-[600px] w-screen transition-all duration-1000 "
          onMouseMove={handleMouseMove}
          ref={animate}
        >
          <GiCircleClaws className="h-10 w-10 absolute text-gray-500 top-12 left-5" />
          <GiCircleClaws className="h-5 w-5 absolute text-gray-500 top-44 left-32" />
          <GiCircleClaws className="h-8 w-8 absolute text-gray-500 top-64 right-64" />
          <GiCrossMark className="h-5 w-5 absolute text-gray-500 top-16 right-12" />
          <GiCrossMark className="h-7 w-7 absolute text-gray-500 top-80 right-20" />
          <GiCrossMark className="h-5 w-5 absolute text-gray-500 top-96 left-24" />
          <GiNestedHexagons className="h-5 w-5 absolute text-gray-500 top-24 right-96" />
          <GiNestedHexagons className="h-5 w-5 absolute text-gray-500 top-60 left-64" />
          <GiNestedHexagons className="h-10 w-10 absolute text-gray-500 top-96 right-52" />
          <div className="h-1 w-28 absolute top-16 left-24 animateGradient"></div>
          <div className="h-1 w-10 absolute top-96 left-64 animateGradient1"></div>
          <div className="h-10 w-1 absolute top-44 right-52 animateGradient2"></div>
          <div className="h-20 w-1 absolute top-96 left-10 animateGradient2"></div>
          <div className="h-32 w-1 absolute top-[450px] right-32 animateGradient3"></div>
          {/* <GiSplitCross className="h-36 w-36 text-red-400" /> */}
        </div>
        <div className="w-screen h-64 text-5xl text-yellow-300 ">
          HELLO WORLD
        </div>
      </div>
    </div>
  );
}

export default App;
