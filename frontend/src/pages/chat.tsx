function IPhone() {
  return (
    <div className="relative w-[35vw] mx-auto">
      {/* App screen inside phone */}
      <div
        className="absolute top-[1.5%] left-[11%] w-[49.5%] h-[67%] rounded-[2vw] overflow-hidden bg-white shadow-inner"
      >
        <div
          className="w-full h-full overflow-hidden flex items-center justify-center"
        >
          <iframe
            src="https://www.aryancodes.dev"
            title="App Preview"
            className="border-none"
            style={{
              width: "125%",       // make iframe slightly wider to fit scaled content
              height: "125%",
              transform: "scale(0.8)", // zoom out content
              transformOrigin: "0 0",  // keep zoom anchored to top-left
              border: "none",
            }}
          />
        </div>
      </div>

      {/* iPhone frame */}
      <img
        src="./iphone.png"
        alt="iPhone frame"
        className="relative z-10 w-full pointer-events-none"
      />
    </div>
  );
}

export default IPhone;
