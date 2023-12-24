import Image from "next/image";
import styles from "./pet-card.module.scss";
import { poppins } from "@/common/utils/fonts";
import { useRouter } from "next/navigation";

export interface IPetCardProps {
  imgUrl: string;
  name: string;
  breed: string;
  age: number;
  petId: string;
}

/**
 * A component that represents a pet card.
 * @ {Object} props - The props for the PetCard component.
 * @ {string} props.imgUrl - The URL of the pet's image.
 * @ {string} props.name - The name of the pet.
 * @ {string} props.breed - The breed of the pet.
 * @ {number} props.age - The age of the pet.
 * @ {string} props.petId - The ID of the pet.
 * @ A JSX element representing the pet card.
 */
export default function PetCard({
  imgUrl,
  name,
  breed,
  age,
  petId,
}: IPetCardProps) {
  const router = useRouter();
  return (
    <div className="col-md-3 no-gutter">
      <div
        className={`${styles.petCardContainer} ${poppins.className}`}
        onClick={() => router.push(`/pet/${petId}`)}
      >
        <Image
          src={imgUrl}
          alt={name}
          width={300}
          height={220}
          className={styles.petCardImage}
        />
        <div className={styles.petCardInfo}>
          <p className={styles.petCardName}>{name}</p>
          <p className={styles.petCardPetInfo}>
            <span>{breed}</span>
            <span className={styles.bullet}></span>
            <span>{age}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
