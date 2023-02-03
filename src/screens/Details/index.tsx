import React from 'react';
import { Image, ScrollView } from 'react-native';
import Header from '../../components/Header';
import { designColors } from '../../modules/ui/colors';
import StyledView from '../../modules/ui/StyledView';
import Typography from '../../modules/ui/Typography';
import * as Icon from 'phosphor-react-native';
import { Images } from '../../constants/images';
import { fullWidth } from '../../constants/metrics';
import { FlatList } from 'react-native';
import BrandCard from '../../components/BrandCard';
import Button from '../../components/Button';

const timeCarousel = ['1h', '1d', '1w', '1m', '1y', 'All'];
const breakdownCarousel = ['Highlighted', 'Value', 'Vintage', 'Registry'];

const column1 = [
  {
    title: 'AUM',
    value: '$430.88m',
  },
  {
    title: 'Vintage Range',
    value: '2019 – 2022',
  },
  {
    title: 'Price at Close',
    value: '$17.68',
  },
];

const column2 = [
  {
    title: 'Issue Date',
    value: '18/04/2022',
  },
  {
    title: 'TER',
    value: '0.15%',
  },
  {
    title: 'Price at Open',
    value: '$17.74',
  },
];

export default function Details() {
  return (
    <ScrollView style={{ backgroundColor: designColors.light }}>
      <Header variant="detailed" />

      <StyledView
        mt="m"
        justifyContent="space-between"
        flexDirection="row"
        mh={20}
        mb="l">
        <StyledView>
          <Typography mb="xs" variant="currencyLarge">
            ${18.23}
          </Typography>
          <StyledView flexDirection="row">
            <StyledView>
              <Icon.ArrowUpRight size="14px" color={designColors.green} />
            </StyledView>
            <StyledView justifyContent="flex-end" bgColor="white">
              <Typography variant="percentageUpper">31.82% ($1.21)</Typography>
            </StyledView>
          </StyledView>
        </StyledView>
        <Typography mb="xs" variant="currencyLarge">
          2022
        </Typography>
      </StyledView>

      <StyledView mb="m">
        <Image
          source={Images.graphicLarge}
          style={{ width: fullWidth }}
          resizeMode="stretch"
        />
        <StyledView position="absolute" left={(fullWidth + 40) / 2} top={-24}>
          <Typography variant="graphicCurrency">$19.02</Typography>
        </StyledView>
        <StyledView position="absolute" left={50} bottom={-24}>
          <Typography variant="graphicCurrency">$19.02</Typography>
        </StyledView>
      </StyledView>

      <StyledView
        flexDirection="row"
        justifyContent="space-between"
        mh={20}
        mt="m">
        {timeCarousel.map((value, index) => (
          <StyledView
            p="xs"
            bgColor={index === 1 ? 'purpleLight' : 'transparent'}
            borderRadius={4}
            key={`carousel-${index}`}>
            <Typography
              variant={index === 1 ? 'carouselPurple' : 'carouselGrey'}>
              {value}
            </Typography>
          </StyledView>
        ))}
      </StyledView>

      <StyledView mh={20} mt="l">
        <Typography variant="header" mb="s">
          {'Info & Stats'}
        </Typography>

        <StyledView flexDirection="row" justifyContent="space-between">
          <StyledView flex={1}>
            {column1.map(({ title, value }, index) => (
              <StyledView key={`column1-${index}`} mb="s">
                <StyledView flexDirection="row" alignItems="center">
                  <Typography mr="xxs" mb="xxs">
                    {title}
                  </Typography>
                  <Icon.Info size="14px" color={designColors.greyMedium} />
                </StyledView>
                <Typography variant="formInput">{value}</Typography>
              </StyledView>
            ))}
          </StyledView>
          <StyledView flex={1}>
            {column2.map(({ title, value }, index) => (
              <StyledView key={`column2-${index}`} mb="s">
                <StyledView flexDirection="row" alignItems="center">
                  <Typography mr="xxs" mb="xxs">
                    {title}
                  </Typography>
                  <Icon.Info size="14px" color={designColors.greyMedium} />
                </StyledView>
                <Typography variant="formInput">{value}</Typography>
              </StyledView>
            ))}
          </StyledView>
        </StyledView>
      </StyledView>

      <StyledView mh={20} mv="l">
        <Typography variant="header" mb="s">
          Fund Breakdown
        </Typography>
        <StyledView flexDirection="row">
          {breakdownCarousel.map((value, index) => (
            <StyledView key={value} mr="m">
              <Typography variant={index === 0 ? 'homeTitle' : 'homeTitleGrey'}>
                {' '}
                {value}
              </Typography>
              {index === 0 && (
                <StyledView height={3} width={90} bgColor="purple" mt="xxs" />
              )}
            </StyledView>
          ))}
        </StyledView>
      </StyledView>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={[
          {
            type: 'aspira',
            description:
              'Aspira is building a modular, direct air capture system with the energy supply integrated into the modules.',
          },
          {
            type: 'climeworks',
            description:
              'uses renewable geothermal energy and waste heat to capture CO₂ directly from the air.',
          },
        ]}
        renderItem={({ item, index }) => (
          <BrandCard
            {...item}
            ml={index === 0 ? 20 : 0}
            mr={index >= 0 ? 15 : 0}
          />
        )}
      />

      <StyledView mh={20} mt="l">
        <Typography variant="header" mb="s">
          Your Portfolio
        </Typography>

        <StyledView justifyContent="space-between" flexDirection="row">
          <StyledView>
            <Typography mb="xs" variant="currencyLarge">
              18 credits
            </Typography>
            <StyledView flexDirection="row">
              <StyledView>
                <Icon.ArrowUpRight size="14px" color={designColors.green} />
              </StyledView>
              <StyledView justifyContent="flex-end" bgColor="white">
                <Typography variant="percentageUpper">8.41%</Typography>
              </StyledView>
            </StyledView>
          </StyledView>
          <StyledView>
            <StyledView alignSelf="flex-end">
              <Typography mb="xs" variant="currencyLarge">
                $328.14
              </Typography>
            </StyledView>
            <Typography mb="xs" variant="formPlaceholder">
              Last purchase 28d ago
            </Typography>
          </StyledView>
        </StyledView>
      </StyledView>

      <StyledView
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        mh={20}
        mv="s">
        <Button title="Sell" variant="outlined" onPress={() => {}} />
        <StyledView width={20} />
        <Button title="Retire credits" variant="secondary" onPress={() => {}} />
      </StyledView>
      <Typography mh={20} mb="m">
        You’ve previously retired 28 credits of this asset
      </Typography>

      <StyledView m={20} p="xs" bgColor="greyLight" borderRadius={4}>
        <Typography color="greyMedium">
          Please note that prices are for reference only and may vary at the
          time of excecuting a buy or sell order. {'\n'}
          {'\n'}
          The information provided is not investment advice, and should not be
          used as a recommendation to buy or sell assets.
        </Typography>
      </StyledView>

      <StyledView mv={20}>
        <Button title="Buy" onPress={() => {}} />
      </StyledView>
    </ScrollView>
  );
}
