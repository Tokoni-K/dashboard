export const themeSettings = (mode) => {
    return {
        palette: {
            mode: mode, ...(mode === "dark" ? {
                color: {
                    background: "#141414", 
                    backgroundnav: "#111111", 
                    background2: "#06050c", 
                    main: "#CCCCCC",
                    text: "#06050c",
                    text2: "#FFBA70",
                    alt: "#CCCCCC",
                    alt2: "#918f8f42",
                    icon: "#FFBA70",
                    input: "#CCCCCC"
                }
            } : {
                color: {
                    background: "#fafafa",
                    backgroundnav: "#ffffff",
                    background2: "#eeeeee",
                    main: "#FF931F",
                    text: "#141414",
                    text2: "#141414",
                    alt: "#FFBA70",
                    alt2: "#FFBA70",
                    icon: "3D3D3D",
                    input: "#F5F5F5"}
            } )}}};
            
// white: {
//     100: "#fafeff",
//     200: "#f5fdff",
//     300: "#f0fdff",
//     400: "#ebfcff",
//     500: "#e6fbff",
//     600: "#b8c9cc",
//     700: "#8a9799",
//     800: "#5c6466",
//     900: "#2e3233"
// },

// orange: {
//     100: "#ffe9d2",
//     200: "#ffd4a5",
//     300: "#ffbe79",
//     400: "#ffa94c",
//     500: "#ff931f",
//     600: "#cc7619",
//     700: "#995813",
//     800: "#663b0c",
//     900: "#331d06"
// },

// white: {
//     100: "#fdffff",
//     200: "#fbfeff",
//     300: "#f9feff",
//     400: "#f7fdff",
//     500: "#f5fdff",
//     600: "#c4cacc",
//     700: "#939899",
//     800: "#626566",
//     900: "#313333"
// },

// black: {
//     100: "#d0d0d0",
//     200: "#a1a1a1",
//     300: "#727272",
//     400: "#434343",
//     500: "#141414",
//     600: "#101010",
//     700: "#0c0c0c",
//     800: "#080808",
//     900: "#040404"
// }