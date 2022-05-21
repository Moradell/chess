import { Figure } from "./Figure";
import { Cell } from "../Cell";
import { Colors } from "../../constants/colors.enum";
import { FigureNames } from "../../constants/figureNames.enum";

import blackLogo from '../../assets/black-pawn.png';
import whiteLogo from '../../assets/white-pawn.png';

export class Pawn extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.PAWN;
    }
}
