import { ComponentPropsWithoutRef } from 'react';
import cf from '@/common/utils/class-formatter';

/**
 * Interface for the props of a row component.
 * @ IRowProps
 * @ ComponentPropsWithoutRef<'div'>
 * @ {boolean} useFlexCol - Indicates whether to use flex column layout.
 * @ {boolean} useNegativeMargin - Indicates whether to use negative margin.
 * @ {string[]} customClasses - An array of custom CSS classes to apply to the row.
 */
export interface IRowProps extends ComponentPropsWithoutRef<'div'> {
  useFlexCol: boolean;
  useNegativeMargin: boolean;
  customClasses: string[];
}

/**
 * A functional component that renders a row element with optional custom classes and styles.
 * @ {Partial<IRowProps>} props - An object containing the following optional properties:
 *   - children: The content to be rendered inside the row element.
 *   - useNegativeMargin: A boolean indicating whether to apply negative margin to the row element.
 *   - useFlexCol: A boolean indicating whether to use flex column layout for the row element.
 *   - customClasses: An array of additional CSS classes to be applied to the row element.
 * @ The rendered row element.
 */
function Row({ children, useNegativeMargin, useFlexCol, customClasses = [] }: Partial<IRowProps>) {
  const rowStyles = [useNegativeMargin ? 'negative-margin' : '', 'row', useFlexCol ? 'flex-col' : '', ...customClasses];
  return <div className={cf(rowStyles)}>{children}</div>;
}


export default Row;

