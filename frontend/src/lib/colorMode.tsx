import {createContext, FC, ReactNode, useCallback, useContext, useMemo} from "react";
import {useLocalStorage} from "@/lib/useLocalStorage";
import {useIsomorphicLayoutEffect} from "react-use";

const COLOR_MODE_KEY = "color-mode";
enum COLOR_MODE_VALUE { "day", "night" }

type ColorModeContextValue = {
    colorMode: number;
    setColorMode: (color: number) => void;
    toggleColorMode: () => void;
}

const ColorModeContext = createContext<ColorModeContextValue>({
    colorMode: COLOR_MODE_VALUE.night,
    setColorMode: () => null,
    toggleColorMode: () => null,
});

export function useColorMode() {
    return useContext(ColorModeContext);
}

export function useColorModeValue<T>(valueOnLight: T, valueOnDark: T): T {
    const { colorMode } = useColorMode();

    switch (colorMode as COLOR_MODE_VALUE) {
        case COLOR_MODE_VALUE.day:
            return valueOnLight;
        case COLOR_MODE_VALUE.night:
            return valueOnDark;
    }
}

export const ColorModeProvider: FC<{ children: ReactNode }> = ({children}) => {
    const [appColorMode, setColorMode] = useLocalStorage<number>(COLOR_MODE_KEY, COLOR_MODE_VALUE.night);
    const toggleColorMode = useCallback(() => {
        setColorMode(appColorMode === COLOR_MODE_VALUE.day ? COLOR_MODE_VALUE.night : COLOR_MODE_VALUE.day);
    }, [appColorMode, setColorMode]);

    const colorMode = appColorMode; // System の色に合わせる場合はここを変更する
    const contextValue: ColorModeContextValue = useMemo(() => ({
        colorMode,
        setColorMode,
        toggleColorMode,
    }), [colorMode, setColorMode, toggleColorMode]);

    useIsomorphicLayoutEffect(() => {
        document.querySelector("html")?.setAttribute("data-color-mode", appColorMode.toString());
    }, [appColorMode]);

    return <ColorModeContext.Provider value={contextValue}>{children}</ColorModeContext.Provider>;
};