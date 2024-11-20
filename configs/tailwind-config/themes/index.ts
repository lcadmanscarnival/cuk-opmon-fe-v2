export const baseTheme = {
  container: {
    center: true,
    padding: {
      sm: "var(--padding-sm)",
      md: "var(--padding-md)",
      lg: "var(--padding-lg)",
      xl: "var(--padding-xl)",
      "2xl": "var(--padding-2xl)",
    },
  },
  screens: {
    xxs: "320px",
    xs: "425px",
    sm: "576px",
    md: "768px",
    "tab-xl": "992px",
    lg: "1025px",
    xl: "1281px",
    "2xl": "1440px",
  },
  extend: {
    padding: {
      xs: "var(--padding-xs)", // Extra Small: originally 4.5, now directly mapping to 18px
      sm: "var(--padding-sm)", // Small: originally 7.5, now directly mapping to 30px
      md: "var(--padding-md)", // Medium: originally 8.75 and 35, now directly mapping to 35px
      lg: "var(--padding-lg)", // Large: originally 15, now directly mapping to 60px
    },
    margin: {
      sm: "var(--margin-9)", // Small Margin: previously 2.25, now directly mapping to 9px
      md: "var(--margin-18)", // Medium Margin: previously 4.5, now directly mapping to 18px
      lg: "var(--margin-70)", // Large Margin: previously 17.5, now directly mapping to 70px
    },
    gap: {
      md: "var(--gap-medium)", // Medium Gap
    },
    gridTemplateColumns: {
      fullSpan: "repeat(16, minmax(0, 1fr))",
    },
    inset: {
      auto: "auto",
    },
    spacing: {
      largeComponent: "var(--spacing-large-component)",
    },
    width: {
      content: "var(--content-width)",
      "three-tile": "var(--three-tile-width)",
      "four-tile": "var(--four-tile-width)",
      "full-minus-80": "var(--full-minus-80-width)",
      "icon-sm": "var(--width-icon-sm)",
    },
    maxWidth: {
      component: "var(--max-width)",
      container: "var(--max-container-width)",
      "container-fluid": "var(--max-container-fluid)",
    },
    height: {
      xs: "var(--height-extra-small)", // Extra Small Height
      sm: "var(--height-small)", // Small Height
      md: "var(--height-medium)", // Medium Height
      lg: "var(--height-large)", // Large Height
      xl: "var(--height-extra-large)", // Extra Large Height
      xxl: "var(--height-huge)",
      "tile-sm": "var(--height-blog-tile-sm)",
      "tile-md": "var(--height-blog-tile-md)",
      "tile-lg": "var(--height-blog-tile-lg)",
      "icon-sm": "var(--height-icon-sm)",
      "250": "var(--height-250)",
    },
    maxHeight: {
      sm: "var(--height-small)", // Small Height
      tablet: "var(--height-tablet)",
    },
    lineHeight: {
      "lead-1": "var(--lead-1)",
      "lead-2": "var(--lead-2)",
      "lead-3": "var(--lead-3)",
      "lead-4": "var(--lead-4)",
      "lead-5": "var(--lead-5)",
    },
    fontSize: {
      "f-size-1": "var(--font-size-1)",
      "f-size-10": "var(--font-size-10)",
      "f-size-13": "var(--font-size-13)",
      "f-size-18": "var(--font-size-18)",
      "f-size-19": "var(--font-size-19)",
      "f-size-22": "var(--font-size-22)",
      "f-size-24": "var( --font-size-lg)",
    },
    colors: {
      basics: {
        white: "var(--color-white)", // maps to --color-primary1: #ffffff
        rouge: "var(--color-rouge)", // maps to --color-primary2: #b10f26
        navyBlue: "var(--color-navy-blue)", // maps to --color-primary3: #002776
        lightNavyBlue: "var(--color-light-navy-blue)", // maps to --color-light-navy-blue: #002776cc
        deepOceanBlue: "var(--color-deep-ocean-blue)", //maps to --color-deep-ocean-blue: #0c2671
        metallicGold: "var(--color-metallic-gold)", // maps to --color-primary4: #988642
        lightGray: "var(--color-light-gray)", //maps to --color-light-gray: #bcbdcb
        mediumGray: "var(--color-medium-gray)", // maps to --color-primary5: #666666
        deepGray: "var(--color-deep-gray)", // maps to --color-primary6: #333333
        brightBlue: "var(--color-bright-blue)", // Previously secondary1: maps to --color-secondary1: #0076ce
        brightBlueHover: "var(--color-bright-blue-hover)", // Hover state color for bright-blue
        softBeige: "var(--color-soft-beige)", // Previously secondary2: maps to --color-secondary2: #f2f0e8
        vividRed: "var(--color-vivid-red)", // Previously secondary3: maps to --color-secondary3: #e30513
        lightBlueGray: "var(--color-light-blue-gray)",
        metalicGray: "var(--opaque-background8)", // maps to rgba(166, 180, 207, 0.4);
        softGrayBlue: "var(--color-soft-gray-blue)",
        deepBlue: "var(--color-deep-blue)",
        playfulBlue: "var(--color-playful-blue)",
        darkblue: "var(--color-dark-blue)",
        disabledGray: "var(--color-disable-state)",
        "blue-350": "var(--color-blue-350)",
        pastelGray: "var(--color-tertiary3)",
        gradientBlack: "var(--gradient-primary1)",
        borderLightGray: "var(--color-tertiary3)", // maps to --color-tertiary-3: #cccccc
        focusOutline: "var(--color-focus)",
        richRed: "var(--color-richRed)",
        richBlue: "var(--color-richBlue)",
        mediumLightGray: "var(--color-medium-light-gray)",
        lightBlueSky: "var(--color-light-blue-sky)",
        deepNavyBlue: "var(--color-deep-navy)",
        lightBlueBorder: "var(--tile-border-color)",
        lightGrayBorder: "var(--border-color-secondary)",
      },
      background: {
        primary: "var(--background-color)",
        darkTheme: "var(--color-dark-theme-background)",
        gradientSecondary1: "var(--gradient-secondary1)",
        gradientSecondary2: "var(--gradient-secondary2)",
        softGrayBlue: "var(--color-soft-gray-blue)",
        redTheme: "var(--color-tertiary1)",
        grayBackground: "var(--color-gray-background)", //maps to #F2F0E9
        opaqueBackground2: "var(--opaque-background2)",
        lightBlueSky: "var(--color-light-blue-sky)",
        focusRedTheme: "var(--color-tertiary2)",
        rouge: "var(--color-rouge)", // maps to --color-primary2: #B10F26
        disabled: "var(--color-background-disabled)", // maps to #F8F8F8
        lightBlue: "var(--color-lightBlue)", // maps to #BCE4FA
        disabledLightGray: "var(--color-disabled-lightGray)", // maps to #F2F2F2
        floralWhite: "var(--color-background-floral-white)" // maps to #FAF9F7
      },
    },
    backgroundImage: {
      gradientImage: `linear-gradient(to bottom, rgba(0, 0, 0, .6) 0%, rgba(0, 0, 0, 0.2) 59%, transparent 100%)`,
      gradientImageCruise: `linear-gradient(to bottom, rgba(0, 0, 0, .8) 25%, rgba(0, 0, 0, .22) 65%, transparent 100%)`,
      gradientImageTile: `linear-gradient(to top, rgba(0, 0, 0, .81) 0%, rgba(0, 0, 0, 0) 53.13%)`,
    },
    fontFamily: {
      headingLight: "var(--font-heading-light)",
      headingMedium: "var(--font-heading-medium)",
      headingBold: "var(--font-heading-bold)",
      textRegular: "var(--font-text-regular)",
      textSemibold: "var(--font-text-semibold)",
      textBold: "var(--font-text-bold)",
      textIcomoon: "var(--font-text-icomoon)",
    },
    boxShadow: {
      "bottom-box-shadow": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      "tile-shadow": "0 4px 40px rgba(0,0,0,0.15)",
      dropdown: "0px 0px 28px rgba(0, 0, 0, .12)",
      "hero-tile-shadow-1": "0px 2px 20px 5px rgba(0, 0, 0, 0.25)",
      "hero-tile-shadow-2": "0px 4px 30px 0px rgba(0, 0, 0, 0.15)",
      "waveproduct-comparison": "0px 0px 10px 0px rgba(51, 51, 51, .25)",
      "multi-select-dropdown": "0px 0px 40px 0px rgba(0, 0, 0, 0.15)"
    },
    borderRadius: {
      standard: "var(--standard-border-radius)",
    },
    fill: {
      disabled: "var(--color-tertiary3)",
      "navy-blue": "var(--color-navy-blue)",
      "bright-blue": "var(--color-bright-blue)",
      metallicGold: "var(--color-metallic-gold)",
    },
    stroke: {
      disabled: "var(--color-tertiary3)",
      "navy-blue": "var(--color-navy-blue)",
      "bright-blue": "var(--color-bright-blue)",
      metallicGold: "var(--color-metallic-gold)",
    },
    keyframes: {
      "fade-left": {
        "0%": {
          transform: "translateX(-100px)",
          opacity: 0,
        },
        "100%": {
          transform: "translateX(0)",
          opacity: 1,
        },
      },
      "fade-right": {
        "0%": {
          transform: "translateX(100px)",
          opacity: 0,
        },
        "100%": {
          transform: "translateX(0)",
          opacity: 1,
        },
      },
      scale: {
        "0%": {
          transform: "scale(1)",
        },
        "50%": {
          transform: "scale(1.2)",
        },
        "100%": {
          transform: "scale(1)",
        },
      },
      widthExtend: {
        "0%": {
          width: "55px",
        },
        "50%": {
          width: "145px",
        },
        "100%": {
          width: "75px",
        },
      },
      mobileWidthExtend: {
        "0%": {
          width: "85px",
        },
        "50%": {
          width: "165px",
        },
        "100%": {
          width: "85px",
        },
      },
    },
    animation: {
      article: "fade-left 1s ease-in",
      scaleIcon: "scale 1s ease-in-out",
      widthExtendActive: "widthExtend 3s ease-in-out",
      mobileWidthExtendActive: "mobileWidthExtend 3s ease-in-out",
    },
  },
};
