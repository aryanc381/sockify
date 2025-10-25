function IPhone15() {
  return (
    <div className="relative w-[30vw] mx-auto scale-[1.10] ml-[-31.5vw] mt-[2vw]">
      <div
        className="absolute bg-red-500 scale-[0.515] top-[-24%] left-[-12.3%] w-[87%] h-[122%] rounded-t-[0vw] rounded-[3vw] overflow-hidden shadow-inner"
        style={{
          backgroundColor: "black", 
        }}
      >
        <iframe
          src="https://kahaani.site"
          title="App Preview"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            transform: "scale(1)",
            transformOrigin: "center center",
          }}
        />
      </div>

     
      <img
        src="./iphone.png"
        alt="iPhone 15 Frame"
        className="relative scale-[1] z-10 pointer-events-none select-none"
      />
    </div>
  );
}

export default IPhone15;
