function IPhone15() {
  return (
    <div className="relative w-[30vw] mx-auto scale-[1.10] mt-[2vw]">
      {/* iPhone 15 Screen */}
      <div
        className="absolute bg-red-500 scale-[0.515] top-[-24%] left-[-12.3%] w-[87%] h-[122%] rounded-[3vw] overflow-hidden shadow-inner"
        style={{
          backgroundColor: "black", // fallback while iframe loads
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

      {/* iPhone 15 Frame Image */}
      <img
        src="./iphone.png" // replace with your iPhone 15 frame image
        alt="iPhone 15 Frame"
        className="relative scale-[1] z-10 pointer-events-none select-none"
      />
    </div>
  );
}

export default IPhone15;
