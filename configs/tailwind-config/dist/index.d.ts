import { ClassValue } from 'clsx';

declare function cn(...inputs: ClassValue[]): string;

declare const baseTheme: {
    container: {
        center: boolean;
        padding: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
            "2xl": string;
        };
    };
    screens: {
        xxs: string;
        xs: string;
        sm: string;
        md: string;
        "tab-xl": string;
        lg: string;
        xl: string;
        "2xl": string;
    };
    extend: {
        padding: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
        };
        margin: {
            sm: string;
            md: string;
            lg: string;
        };
        gap: {
            md: string;
        };
        gridTemplateColumns: {
            fullSpan: string;
        };
        inset: {
            auto: string;
        };
        spacing: {
            largeComponent: string;
        };
        width: {
            content: string;
            "three-tile": string;
            "four-tile": string;
            "full-minus-80": string;
            "icon-sm": string;
        };
        maxWidth: {
            component: string;
            container: string;
            "container-fluid": string;
        };
        height: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xxl: string;
            "tile-sm": string;
            "tile-md": string;
            "tile-lg": string;
            "icon-sm": string;
            "250": string;
        };
        maxHeight: {
            sm: string;
            tablet: string;
        };
        lineHeight: {
            "lead-1": string;
            "lead-2": string;
            "lead-3": string;
            "lead-4": string;
            "lead-5": string;
        };
        fontSize: {
            "f-size-1": string;
            "f-size-10": string;
            "f-size-13": string;
            "f-size-18": string;
            "f-size-19": string;
            "f-size-22": string;
            "f-size-24": string;
        };
        colors: {
            basics: {
                white: string;
                rouge: string;
                navyBlue: string;
                lightNavyBlue: string;
                deepOceanBlue: string;
                metallicGold: string;
                lightGray: string;
                mediumGray: string;
                deepGray: string;
                brightBlue: string;
                brightBlueHover: string;
                softBeige: string;
                vividRed: string;
                lightBlueGray: string;
                metalicGray: string;
                softGrayBlue: string;
                deepBlue: string;
                playfulBlue: string;
                darkblue: string;
                disabledGray: string;
                "blue-350": string;
                pastelGray: string;
                gradientBlack: string;
                borderLightGray: string;
                focusOutline: string;
                richRed: string;
                richBlue: string;
                mediumLightGray: string;
                lightBlueSky: string;
                deepNavyBlue: string;
                lightBlueBorder: string;
                lightGrayBorder: string;
            };
            background: {
                primary: string;
                darkTheme: string;
                gradientSecondary1: string;
                gradientSecondary2: string;
                softGrayBlue: string;
                redTheme: string;
                grayBackground: string;
                opaqueBackground2: string;
                lightBlueSky: string;
                focusRedTheme: string;
                rouge: string;
                disabled: string;
                lightBlue: string;
                disabledLightGray: string;
                floralWhite: string;
            };
        };
        backgroundImage: {
            gradientImage: string;
            gradientImageCruise: string;
            gradientImageTile: string;
        };
        fontFamily: {
            headingLight: string;
            headingMedium: string;
            headingBold: string;
            textRegular: string;
            textSemibold: string;
            textBold: string;
            textIcomoon: string;
        };
        boxShadow: {
            "bottom-box-shadow": string;
            "tile-shadow": string;
            dropdown: string;
            "hero-tile-shadow-1": string;
            "hero-tile-shadow-2": string;
            "waveproduct-comparison": string;
            "multi-select-dropdown": string;
        };
        borderRadius: {
            standard: string;
        };
        fill: {
            disabled: string;
            "navy-blue": string;
            "bright-blue": string;
            metallicGold: string;
        };
        stroke: {
            disabled: string;
            "navy-blue": string;
            "bright-blue": string;
            metallicGold: string;
        };
        keyframes: {
            "fade-left": {
                "0%": {
                    transform: string;
                    opacity: number;
                };
                "100%": {
                    transform: string;
                    opacity: number;
                };
            };
            "fade-right": {
                "0%": {
                    transform: string;
                    opacity: number;
                };
                "100%": {
                    transform: string;
                    opacity: number;
                };
            };
            scale: {
                "0%": {
                    transform: string;
                };
                "50%": {
                    transform: string;
                };
                "100%": {
                    transform: string;
                };
            };
            widthExtend: {
                "0%": {
                    width: string;
                };
                "50%": {
                    width: string;
                };
                "100%": {
                    width: string;
                };
            };
            mobileWidthExtend: {
                "0%": {
                    width: string;
                };
                "50%": {
                    width: string;
                };
                "100%": {
                    width: string;
                };
            };
        };
        animation: {
            article: string;
            scaleIcon: string;
            widthExtendActive: string;
            mobileWidthExtendActive: string;
        };
    };
};

declare const postConfig: {
    plugins: {
        "postcss-import": {};
        tailwindcss: {};
        autoprefixer: {};
    };
};

declare const tailwindConfig: {
    darkMode: string[];
    content: string[];
    theme: {
        extend: {
            colors: {
                neutral: {
                    0: string;
                    200: string;
                    500: string;
                    600: string;
                    800: string;
                };
                test: {
                    200: string;
                };
                brand: {
                    primary: {
                        800: string;
                    };
                    secondary: {
                        400: string;
                        800: string;
                    };
                };
            };
        };
        container: {
            center: boolean;
            padding: {
                sm: string;
                md: string;
                lg: string;
                xl: string;
                "2xl": string;
            };
        };
        screens: {
            xxs: string;
            xs: string;
            sm: string;
            md: string;
            "tab-xl": string;
            lg: string;
            xl: string;
            "2xl": string;
        };
    };
    plugins: never[];
};

export { baseTheme, cn, postConfig, tailwindConfig };
