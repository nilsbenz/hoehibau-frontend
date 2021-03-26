import { getStrapiMedia } from '@lib/media';
import { StrapiMedia } from '@ts/strapi-types';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';
import 'react-awesome-slider/dist/styles.css';
import classes from './slider.module.scss';

interface Props {
  images: StrapiMedia[];
}

const Slider: React.FC<Props & React.HTMLAttributes<any>> = ({
  images,
  ...props
}) => {
  if (!images.length) {
    return null;
  }

  return (
    <div {...props}>
      <AwesomeSlider
        animation="scaleOutAnimation"
        className={classes.slider}
        media={images.map((image) => ({ source: getStrapiMedia(image) }))}
        bullets={images.length > 1}
        organicArrows={images.length > 1}
        mobileTouch={images.length > 1}
      />
    </div>
  );
};

export default Slider;
