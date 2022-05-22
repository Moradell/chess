import { Figure } from "./Figure";
import { Cell } from "../Cell";
import { Colors } from "../../constants/colors.enum";
import { FigureNames } from "../../constants/figureNames.enum";

import blackLogo from '../../assets/black-queen.png';
import whiteLogo from '../../assets/white-queen.png';

export class Queen extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.QUEEN;
    }

    public canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false;
        }

        if (this.cell.isEmptyVertical(target)) {
            return true;
        }

        if (this.cell.isEmptyHorizontal(target)) {
            return true;
        }

        if (this.cell.isEmptyDiagonal(target)) {
            return true;
        }

        return false;
    }
}
