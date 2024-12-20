import { makeStyles } from "@material-ui/core";

const useCommonStyles = makeStyles((theme: any) => ({
    scroll: {
        overflowY: "auto",
        overflowX: "hidden",
        "&::-webkit-scrollbar": {
            width: theme.spacing(0.5),
        },
        "&::-webkit-scrollbar-track": {},
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: theme.colors.primary,
        },
    },
    transparentButton: {
        // backgroundColor: opacify(-0.9, theme.colors.white),
        borderRadius: theme.spacing(0.75),
        color: theme.colors.white,
        // "&:hover": {
        //   backgroundColor: opacify(-0.5, theme.colors.white),
        // },
    },
    textAlignRight: {
        textAlign: "right",
    },
    row: {
        display: "flex",
        alignItems: "center",
    },
    fadeAnimation: {
        transition: "all 1s",
        opacity: 0,
        "&.visible": {
            opacity: 1,
        },
    },
    hideBelowWide: {
        [theme.breakpoints.down("sm")]: {
            display: "none !important",
        },
    },
    showBelowWide: {
        [theme.breakpoints.up("md")]: {
            display: "none !important",
        },
    },
    maxHeightTransition: {
        overflow: "hidden",
        maxHeight: 0,
        transition: "max-height 0.5s cubic-bezier(0, 1, 0, 1)",
        "&.visible": {
            maxHeight: 2000,
            transition: "max-height 1s ease-in-out",
        },
    },
    noDecoration: {
        textDecoration: "none !important",
    },
    boxShadow: {
        boxShadow: "0px 6px 8px -4px rgba(127, 144, 159, 0.16)",
    },
    border: {
        border: "1px solid #E8EBED",
    },
    separator: {
        height: 0,
        width: "100%",
        border: "1px dashed #C5CDD3",
        marginTop: "16px",
        marginBottom: "16px",
    },
    lineSeparator: {
        height: 0,
        width: "100%",
        border: "1px solid #E8EBED",
        marginTop: "40px",
        marginBottom: "40px",
    },
    button: {
        height: "40px",
    },
    containerShadow: {
        boxShadow: "0px 12px 20px -8px rgba(5, 43, 72, 0.12)",
    },
    borderRadius12: {
        borderRadius: "12px",
    },
    borderRadius6: {
        borderRadius: "6px",
    },
    borderRadius3: {
        borderRadius: "3px",
    },
    borderRadius16: {
        borderRadius: "16px",
    },
    textBig: {
        fontSize: "32px",
        lineHeight: "40px",
    },
    textMid: {
        fontSize: "24px",
        lineHeight: "32px",
    },
    textSmall: {
        fontSize: "16px",
        lineHeight: "24px",
    },
    pin: {
        position: "relative",
    },
    spread: {
        display: "flex",
        justifyContent: "space-between",
    },
    clearFix: {
        overflow: "auto",

        "&::after": {
            content: "''",
            clear: "both",
            display: "table",
        },
    },
}));

export default useCommonStyles;
