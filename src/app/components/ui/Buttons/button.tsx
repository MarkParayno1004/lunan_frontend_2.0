"use client";

export default function Button() {
  return (
    <button
      className="bg-blue-500 rounded cursor-pointer"
      onClick={() => console.log("clicked")}
    >
      click me!
    </button>
  );
}
