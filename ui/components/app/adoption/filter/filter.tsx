import { Dropdown, IDropdownProps } from "./dropdown/dropdown";
import { DropdownItemProps } from 'semantic-ui-react'

/**
 * A functional component that renders a list of dropdown filters.
 * @ {Object[]} filters - An array of dropdown filter objects.
 * @ {function} updateFilter - A callback function to update the selected filter.
 * @ The rendered dropdown filters.
 */
export function Filter({ filters, updateFilter }: { filters: IDropdownProps[], updateFilter: (filterName: string, dropdownData: DropdownItemProps) => void }) {
  return (
    <>
      {filters.map((data, index) => {
        return (
          <Dropdown
            key={index}
            updateFilter={updateFilter}
            dropdownTitle={data.dropdownTitle}
            dropdownListData={data.dropdownListData}
          />
        );
      })}
    </>
  );
}
