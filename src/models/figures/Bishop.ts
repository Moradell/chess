import { Figure } from "./Figure";
import { Cell } from "../Cell";
import { Colors } from "../../constants/colors.enum";
import { FigureNames } from "../../constants/figureNames.enum";

import blackLogo from '../../assets/black-bishop.png';
import whiteLogo from '../../assets/white-bishop.png';

export class Bishop extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.BISHOP;
    }

    public canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false;
        }
        return true
    }
}
