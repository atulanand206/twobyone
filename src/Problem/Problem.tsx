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

export function repeat(val: Block): Grid {
    return { blocks: [[val, val], [val, val, val]] }
}