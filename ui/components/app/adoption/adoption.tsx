import Container from "@/components/hoc/container/container";
import Row from "@/components/hoc/row/row";
import { Filter } from "./filter/filter";
import PetCard from "./pet-card/pet-card";
import { useCallback, useEffect, useState } from "react";
import { Pet } from "@/common/types";
import styles from "./adoption.module.scss";
import { poppins } from "@/common/utils/fonts";
import { IDropdownProps } from "./filter/dropdown/dropdown";
import { DropdownItemProps } from "semantic-ui-react";

const filters: IDropdownProps[] = [
  {
    dropdownTitle: "ANIMAL TYPE",
    dropdownListData: [
      {
        key: "any",
        text: "Any",
        value: "any",
      },
      {
        key: "cat",
        text: "Cat",
        value: "cat",
      },
      {
        key: "dog",
        text: "Dog",
        value: "dog",
      },
    ],
  },
  {
    dropdownTitle: "AGE",
    dropdownListData: [
      {
        key: "any",
        text: "Any",
        value: "any",
      },
      {
        key: "infant",
        text: "0 - 1",
        value: "infant",
      },
      {
        key: "young",
        text: "1 - 3",
        value: "young",
      },
      {
        key: "adult",
        text: "3 - 7",
        value: "adult",
      },
      {
        key: "senior",
        text: "7+",
        value: "senior",
      },
    ],
  },
  {
    dropdownTitle: "GENDER",
    dropdownListData: [
      {
        key: "any",
        text: "Any",
        value: "any",
      },
      {
        key: "male",
        text: "Male",
        value: "male",
      },
      {
        key: "female",
        text: "Female",
        value: "female",
      },
    ],
  },
];

export type FilterState = {
  dropdownTitle: string;
  dropdownData: DropdownItemProps;
};

const initialFilter: FilterState[] = filters.map((filter) => {
  return {
    dropdownTitle: filter.dropdownTitle,
    dropdownData: filter.dropdownListData[0],
  };
});

export default function Adoption() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [filter, setFilter] = useState<FilterState[]>(initialFilter);

  const emptyDivClasses = ["col-md-3", "no-gutter", styles.emptyDiv].join(" ");

  useEffect(() => {
    // Fetch pets from the API
    const fetchPets = async () => {
      try {
        const response = await fetch("http://localhost:8000/pets");
        const data = await response.json();
        setPets(data);
      } catch (error) {
        console.error("Error fetching pets:", error);
      }
    };

    fetchPets();
  }, []);

  const updateFilterCallback = useCallback(
    (filterName: string, dropdownData: DropdownItemProps) => {
      setFilter((prevFilter) => {
        const updatedFilter = prevFilter.map((filter) => {
          if (filter.dropdownTitle === filterName) {
            return {
              ...filter,
              dropdownData,
            };
          }
          return filter;
        });
        return updatedFilter;
      });
    },
    [setFilter]
  );

  const filterPets = useCallback((pet: Pet) => {
      return filter.every((filter) => {
        if (filter.dropdownData.value === "any") {
          return true;
        }
        if (filter.dropdownTitle === "AGE") {
          switch (filter.dropdownData.value) {
            case "infant":
              return pet.age >= 0 && pet.age <= 1;
            case "young":
              return pet.age > 1 && pet.age <= 3;
            case "adult":
              return pet.age > 3 && pet.age <= 7;
            case "senior":
              return pet.age > 7;
          }
        }
        if (filter.dropdownTitle === 'GENDER') {
          switch (filter.dropdownData.value) {
            case "male":
              return pet.sex.toLowerCase() === 'male';
            case "female":
              return pet.sex.toLowerCase() === 'female';
          }
        }
        if (filter.dropdownTitle === 'ANIMAL TYPE') {
          switch (filter.dropdownData.value) {
            case "cat":
              return pet.animal.toLowerCase() === 'cat';
            case "dog":
              return pet.animal.toLowerCase() === 'dog';
          }
        }
      });
  }, [filter]);

  return (
    <div className={styles.adoptionWrapper}>
      <h2 className={`${styles.adoptionTitle} ${poppins.className}`}>
        Take me home!
      </h2>
      <Container>
        <Row>
          <aside className="col-md-3">
            <Filter filters={filters} updateFilter={updateFilterCallback} />
          </aside>
          <main className="col-md-9">
            <Row customClasses={[styles.rowAdoption]}>
              {pets.filter(filterPets).map((pet, index) => (
                <PetCard
                  key={index}
                  imgUrl={pet.photo}
                  name={pet.name}
                  breed={pet.breed}
                  age={pet.age}
                  petId={pet._id}
                />
              ))}
              {new Array(pets.filter(filterPets).length % 4).fill(0).map((val,index) => (
                <div key={val+index} className={emptyDivClasses}></div>
              ))}
            </Row>
          </main>
        </Row>
      </Container>
    </div>
  );
}
