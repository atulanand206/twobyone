import React from 'react';

export interface Block {
    top: number;
    left: number;
    right: number;
    bottom: number;
    incLeft?: (by: number) => {};
}

export interface Grid {
    blocks: Block[][];
}

export function repeat(): Grid {
    const val = { top: 1, bottom: 0, left: 1, right: 4 };
    return { blocks: [[val, val, val, val], [val, val, val, val], [val, val, val, val]] }
}