import { Dropdown as SDropdown, DropdownItemProps } from 'semantic-ui-react'
import styles from './dropdown.module.scss';
import { poppins } from "@/common/utils/fonts";

/**
 * Represents the properties of a dropdown component.
 * @ IDropdownProps
 * @ {string} dropdownTitle - The title of the dropdown.
 * @ {DropdownItemProps[]} dropdownListData - An array of dropdown item properties.
 */
export interface IDropdownProps {
  dropdownTitle: string;
  dropdownListData: DropdownItemProps[];
}

export interface IDropdownItemProps extends IDropdownProps {
  updateFilter: (filterName: string, dropdownData: DropdownItemProps) => void;
}

/**
 * Renders a dropdown component with the given props.
 * @ {string} dropdownTitle - The title of the dropdown.
 * @ {Array} dropdownListData - The data for the dropdown options.
 * @ {function} updateFilter - The function to call when the dropdown value changes.
 * @ The rendered dropdown component.
 */
export function Dropdown({ dropdownTitle, dropdownListData, updateFilter }: IDropdownItemProps) {
  return (
    <div className={styles.dropdown}>
      <h3 className={`${styles.dropdownTitle} ${poppins.className}`}>{dropdownTitle}</h3>
      <SDropdown
        placeholder='Any'
        fluid
        search
        selection
        defaultValue='Any'
        onChange={(e, data) => {
          if (data.options) {
            const dropdownData = data.options.filter((option) => option.value === data.value)[0];
            updateFilter(dropdownTitle, dropdownData);
          }
        }}
        options={dropdownListData}
      />
    </div>
  );
}
