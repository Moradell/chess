import React from 'react';
import { Colors } from '../../constants/colors.enum';

interface FigureListProps {
    color: Colors;
}

export default function FigureList({ color }: FigureListProps) {
  return (
    <div>
        {color}
    </div>
  );
}
