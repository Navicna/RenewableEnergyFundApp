import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image } from 'react-native';
import { ScrollView } from 'react-native';
import CardEmpty from '../../components/CardEmpty';
import CardFunds from '../../components/CardFunds';
import Header from '../../components/Header';
import { Images } from '../../constants/images';
import { responsiveWidth } from '../../constants/metrics';
import { designColors } from '../../modules/ui/colors';
import StyledView from '../../modules/ui/StyledView';
import Typography from '../../modules/ui/Typography';

const data = [
  {
    type: 'wind',
    currency: 1032.23,
    percentage: 3.51,
  },
  {
    type: 'sun',
    currency: 986.61,
    percentage: 0.13,
  },
  {
    type: 'leaf',
    currency: 1122.95,
    percentage: 3.51,
  },
];

export default function Home() {
  const { navigate } = useNavigation();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: designColors.light }}>
      <StyledView>
        <Header variant="home" />

        <Typography variant="header" ml={20} mv="m">
          Funds
        </Typography>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={data}
          renderItem={({ item, index }) => (
            <CardFunds
              {...item}
              ml={index === 0 ? 20 : 0}
              mr={index >= 0 ? 15 : 0}
              key={`card-funds-${index}`}
              onPress={() => index === 0 && navigate('Trade' as never)}
            />
          )}
        />

        <StyledView
          bgColor="purple"
          flexDirection="row"
          justifyContent="space-between"
          width={responsiveWidth(20)}
          borderRadius={10}
          alignSelf="center"
          mv="m"
          p="s">
          <StyledView justifyContent="center">
            <Typography variant="purpleCardLabel" mb="xs">
              Learn more about{'\n'}carbon credits
            </Typography>
            <Typography variant="purpleCardDescription">
              Check out our top tips!
            </Typography>
          </StyledView>
          <Image source={Images.businessStatistics} />
        </StyledView>

        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={Array(3)}
          renderItem={({ index }) => (
            <CardEmpty
              ml={index === 0 ? 20 : 0}
              mr={index >= 0 ? 15 : 0}
              mb="m"
              key={`card-empty-${index}`}
            />
          )}
        />
      </StyledView>
    </ScrollView>
  );
}
