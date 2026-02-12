console.log("MOD FILE LOADED");

runAfterLoad(() => {
    console.log("RUN AFTER LOAD WORKED");

    elements.code_element = {
        color: "#00ffcc",
        behavior: behaviors.WALL,
        category: "special",
        state: "solid"
    };
});
