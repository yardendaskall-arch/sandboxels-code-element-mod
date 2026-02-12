console.log("MOD TOP-LEVEL LOADED ✅");

if (typeof runAfterLoad === "function") {
  runAfterLoad(() => {
    console.log("runAfterLoad fired ✅");

    // Add element
    elements.code_element = {
      color: "#00ffcc",
      behavior: behaviors.WALL,
      category: "special",
      state: "solid"
    };

    console.log("code_element registered ✅", !!elements.code_element);
  });
} else {
  console.log("runAfterLoad missing ❌, registering immediately");
  elements.code_element = {
    color: "#00ffcc",
    behavior: behaviors.WALL,
    category: "special",
    state: "solid"
  };
  console.log("code_element registered ✅", !!elements.code_element);
}
