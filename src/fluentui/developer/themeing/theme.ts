import {
    BrandVariants, createDarkTheme, createLightTheme,
} from '@fluentui/react-components';


const customBrandRamp: BrandVariants = {
    // 10: "#040204",
    // 20: "#1D141F",
    // 30: "#301E35",
    // 40: "#412747",
    // 50: "#52305A",
    // 60: "#63396E",
    // 70: "#764283",
    // 80: "#884C98",
    // 90: "#9B55AE",
    // 100: "#AF5FC4",
    // 110: "#C26ADA",
    // 120: "#CB7EDF",
    // 130: "#D492E4",
    // 140: "#DDA6E9",
    // 150: "#E5B9EE",
    // 160: "#EDCDF3"


    10: "#050202",
    20: "#221312",
    30: "#3A1C1C",
    40: "#4D2424",
    50: "#593130",
    60: "#653F3E",
    70: "#704D4B",
    80: "#7C5B59",
    90: "#886967",
    100: "#947876",
    110: "#A18785",
    120: "#AD9694",
    130: "#B9A5A4",
    140: "#C6B5B4",
    150: "#D2C5C4",
    160: "#DFD5D4"
}

export const customLightTheme = createLightTheme(customBrandRamp)
export const customDarkTheme = createDarkTheme(customBrandRamp)

