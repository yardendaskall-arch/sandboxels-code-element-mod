// Sandboxels programmable element mod

elements.code_element = {
    color: "#00ffcc",
    behavior: behaviors.WALL,
    category: "special",
    state: "solid",

    tick: function(pixel) {
        if (!pixel.code) return;

        try {
            new Function("pixel", pixel.code)(pixel);
        } catch (e) {
            console.log("Code error:", e);
        }
    },

    onSelect: function() {
        let code = prompt(
            "Enter JS code for this element.\nExample:\npixel.temp += 1;"
        );
        if (code !== null) {
            elements.code_element.customCode = code;
        }
    },

    onPlace: function(pixel) {
        pixel.code = elements.code_element.customCode || "";
    }
};
