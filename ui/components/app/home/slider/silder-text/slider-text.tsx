import styles from './slider-text.module.scss';

export interface ISliderTextProps {
}

/**
 * Renders a slider text component.
 * @ {ISliderTextProps} props - The props for the slider text component.
 * @ {JSX.Element} - The rendered slider text component.
 */
export function SliderText(props: ISliderTextProps) {
  return (
    <p className={styles.sliderText}>
      {/* Slider custom text */}
    </p>
  );
}
