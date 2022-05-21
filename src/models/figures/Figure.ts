import { nanoid } from 'nanoid';

import logo from '../../assets/black-king.png';
import { Colors } from "../../constants/colors.enum";
import { FigureNames } from '../../constants/figureNames.enum';
import { Cell } from '../Cell';

export class Figure {
    color: Colors;
    logo: typeof logo | null;
    cell: Cell;
    name: FigureNames;
    id: string;

    constructor(color: Colors, cell: Cell){
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = null;
        this.name = FigureNames.FIGURE;
        this.id = nanoid();
    }

    canMove(target: Cell): boolean {
        return true;
    }

    moveFigure(target: Cell) {
        
    }
}
