import { Pet } from "@/common/types";
import { getAgeText } from "@/common/utils/pet-age";
import Container from "@/components/hoc/container/container";
import Row from "@/components/hoc/row/row";
import Image from "next/image";
import styles from "./pet-component.module.scss";
import ShelterMap from "./shelter-map/shelter-map";

type Props = {
  pet: Pet;
};

/**
 * Renders a component that displays information about a pet, including its image, details, and shelter information.
 * @ {Props} pet - The pet object containing information such as name, age, sex, story, shelterId, etc.
 * @ The rendered component.
 */
export default function PetComponent({ pet }: Props) {
  return (
    <>
      <div className={styles.petImageWrapper}>
        <Image src={pet.photo} alt={pet.name} fill />
      </div>
      <Container>
        <Row>
          <div className="col-md-9">
            <div className={styles.petDetailsHolder}>
              <h2 className={styles.petHeading}>About</h2>
              <hr className={styles.petDivider} />
              <div className={styles.petDetails}>
                {getAgeText(pet.age)}
                <span className={styles.bullet}></span>
                {pet.sex}
              </div>
              <hr className={styles.petDivider} />
              <div>
                <h2 className={styles.petHeading}>Meet {pet.name}</h2>
                {pet.story}
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className={styles.shelterDetailsHolder}>
              <h3 className={styles.shelterHeading}>{pet.shelterId?.name}</h3>

              <ShelterMap address={pet.shelterId?.location} />
              <div className={styles.shelterInfo}>
                <Image className={styles.shelterInfoIcon}
                  src="/images/location.svg"
                  alt="Video Gallery"
                  width={14}
                  height={13}
                />
                <span>{pet.shelterId?.location}</span>
              </div>
              <div className={styles.shelterInfo}>
                <Image className={styles.shelterInfoIcon}
                  src="/images/email.svg"
                  alt="Video Gallery"
                  width={14}
                  height={13}
                />
                <span>{pet.shelterId?.email}</span>
              </div>
              <div className={styles.shelterInfo}>
                <Image className={styles.shelterInfoIcon}
                  src="/images/phone.svg"
                  alt="Video Gallery"
                  width={14}
                  height={13}
                />
                <span>{pet.shelterId?.phone}</span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}
