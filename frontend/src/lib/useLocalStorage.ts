import {useCallback, useEffect, useState} from "react";

export function useLocalStorage<T>(key, initValue): [T, (value: T) => void] {
    const [state, setStateInternal] = useState<T>(initValue);
    const setValueFromStorage = useCallback(() => {
        const value = window.localStorage.getItem(key);
        if (value === null) return;

        const parsed = JSON.parse(value);
        if (parsed === null || parsed === undefined) return;

        setStateInternal(parsed.__value);
    }, [key]);

    useEffect(() => {
        window.addEventListener("storage", setValueFromStorage);
        return () => window.removeEventListener("storage", setValueFromStorage);
    }, [setValueFromStorage]);

    const setState = useCallback((value: T) => {
        setStateInternal(value);
        window.localStorage.setItem(key, JSON.stringify({__value: value}));
    }, [key]);

    return [state, setState];
}