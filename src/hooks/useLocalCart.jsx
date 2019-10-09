import React, { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

function useLocalCart(initialValue) {
    const [localCart, setLocalCart] = useLocalStorage("cart", initialValue);
    return [localCart, setLocalCart];
}