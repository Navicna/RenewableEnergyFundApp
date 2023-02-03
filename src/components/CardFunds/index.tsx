import React from 'react';
import { Image } from 'react-native';
import { Images } from '../../constants/images';
import { designColors } from '../../modules/ui/colors';
import StyledView, { StyledViewProps } from '../../modules/ui/StyledView';
import Typography from '../../modules/ui/Typography';
import * as Icon from 'phosphor-react-native';

type CardFundsProps = {
  type: 'wind' | 'sun' | 'leaf' | string;
  currency: number;
  percentage: number;
} & StyledViewProps;

export default function CardFunds({
  type,
  currency,
  percentage,
  ...props
}: CardFundsProps) {
  const image = () => {
    const imageHelper: { [key: string]: string } = {
      wind: Images.wind,
      sun: Images.sun,
      leaf: Images.leaf,
    };

    return imageHelper[type] || Images.wind;
  };

  const label = () => {
    const labelHelper: { [key: string]: string } = {
      wind: 'Wind Fund',
      sun: 'Solar Fund',
      leaf: 'Nature Fund',
    };

    return labelHelper[type] || 'Wind Fund';
  };

  const graphic = () => {
    const labelHelper: { [key: string]: string } = {
      wind: Images.graphicGreen,
      sun: Images.graphicRed,
      leaf: Images.graphicGreen,
    };

    return labelHelper[type] || Images.graphicGreen;
  };

  return (
    <StyledView
      borderWidth={1}
      borderColor={designColors.greyBorder}
      borderRadius={4}
      p="s"
      {...props}>
      <Image source={image()} />
      <Typography mt="xs" mb="s" variant="cardFundLabel">
        {label()}
      </Typography>
      <Image source={graphic()} />
      <StyledView flexDirection="row" mt="s">
        <Typography variant="cardCurrency" mr="xs">
          ${currency}
        </Typography>
        <StyledView mt={2}>
          <Icon.ArrowUpRight size="14px" color={designColors.green} />
        </StyledView>
        <StyledView justifyContent="flex-end" bgColor="white">
          <Typography variant="cardCurrencyGreen">{percentage}%</Typography>
        </StyledView>
      </StyledView>
    </StyledView>
  );
}
