import { nanoid } from "nanoid";

import { Colors } from "../constants/colors.enum";
import { Board } from "./Board";
import { Figure } from "./figures/Figure";

export class Cell {
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    figure: Figure | null;
    board: Board;
    available: boolean; // Можно ли переместится на клетку
    id: string;

    constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.board = board;
        this.available = false;
        this.id = nanoid();
    }

    public moveFigure(target: Cell) {
        if (this.figure && this.figure?.canMove(target)) {
            this.figure.moveFigure(target);
            target.figure = this.figure;
            this.figure = null;
        }
    }
}
