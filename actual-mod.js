if (typeof elements !== "undefined") {
    elements.code_element = {
        color: "#00ffcc",
        behavior: behaviors.WALL,
        category: "special",
        state: "solid",

        tick(pixel) {
            if (!pixel.code) return;
            try {
                new Function("pixel", pixel.code)(pixel);
            } catch (e) {
                console.log(e);
            }
        },

        onSelect() {
            elements.code_element.customCode =
                prompt("Enter JS code:", "pixel.temp+=1") || "";
        },

        onPlace(pixel) {
            pixel.code = elements.code_element.customCode || "";
        }
    };
}
