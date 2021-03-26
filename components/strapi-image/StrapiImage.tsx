import { getStrapiMedia } from '@lib/media';
import { StrapiMedia } from '@ts/strapi-types';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Props {
  image: StrapiMedia;
  maxWidth?: number;
  maxHeight?: number;
}

const StrapiImage: React.FC<Props & React.HTMLAttributes<any>> = ({
  image,
  maxWidth,
  maxHeight,
  ...props
}) => {
  const [height, setHeight] = useState<number | null>(null);
  const [width, setWidth] = useState<number | null>(null);

  const imageUrl = getStrapiMedia(image);

  useEffect(() => {
    if (maxWidth && !maxHeight) {
      setHeight((image.height * maxWidth) / image.width);
    }
    if (maxHeight && !maxWidth) {
      setWidth((image.width * maxHeight) / image.height);
    }
  }, []);

  return (
    <div {...props}>
      <Image
        src={imageUrl}
        alt={image.alternativeText || image.name}
        width={width || maxWidth || image.width}
        height={height || maxHeight || image.height}
        objectFit="cover"
      />
    </div>
  );
};

export default StrapiImage;
