/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        backgroundPosition: {
            bottom: "bottom",
            "bottom-4": "center bottom 1rem",
            center: "center",
            left: "left",
            "left-bottom": "left bottom",
            "left-top": "left top",
            right: "right",
            "right-bottom": "right bottom",
            "right-top": "right top",

            top: "top",
            "top-4": "center top 1rem",
        },
        backgroundSize: {
            auto: "auto",
            cover: "cover",
            contain: "contain",
            "50%": "50%",
            16: "27rem",
        },
        container: {
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1150px",
            },
        },
        extend: {
            fontFamily: {
                sans: ["'Poppins'"],
            },
        },
    },
    plugins: [],
};
