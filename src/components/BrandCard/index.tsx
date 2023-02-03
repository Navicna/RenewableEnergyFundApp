import React from 'react';
import { Image } from 'react-native';
import { Images } from '../../constants/images';
import { designColors } from '../../modules/ui/colors';
import StyledView, { StyledViewProps } from '../../modules/ui/StyledView';
import Typography from '../../modules/ui/Typography';

type BrandCardProps = {
  type: 'aspira' | 'climeworks' | string;
  description: string;
} & StyledViewProps;

export default function BrandCard({
  type,
  description,
  ...props
}: BrandCardProps) {
  const image = () => {
    const imageHelper: { [key: string]: string } = {
      aspira: Images.skyPicture,
      climeworks: Images.skyPicture,
    };

    return imageHelper[type] || Images.wind;
  };

  const logo = () => {
    const logoHelper: { [key: string]: string } = {
      aspira: Images.logoAspira,
      climeworks: Images.logoClimeworks,
    };

    return logoHelper[type] || Images.wind;
  };

  return (
    <StyledView width={220} {...props}>
      <Image source={image()} />

      <StyledView
        borderWidth={1}
        borderColor={designColors.greyBorder}
        borderEndRadius={4}
        p="s">
        <Image source={logo()} />
        <Typography mt="xs" variant="cardCurrency" numberOfLines={4}>
          {description}
        </Typography>

        <Typography
          mt="xs"
          color={designColors.dark}
          style={{ textDecorationLine: 'underline' }}>
          Read more
        </Typography>
      </StyledView>
    </StyledView>
  );
}
