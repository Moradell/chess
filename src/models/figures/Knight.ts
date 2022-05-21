import { Figure } from "./Figure";
import { Cell } from "../Cell";
import { Colors } from "../../constants/colors.enum";
import { FigureNames } from "../../constants/figureNames.enum";

import blackLogo from '../../assets/black-knight.png';
import whiteLogo from '../../assets/white-knight.png';

export class Knight extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KNIGHT;
    }
}
