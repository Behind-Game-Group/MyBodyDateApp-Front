import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {View, Text, ImageBackground} from 'react-native';
import StyleAide from '../../../assets/style/styleScreens/styleSettings/StyleContactAndFAQ';
import MenuSlide from '../../components/menus/MenuSlide';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RouteType} from '../../../types/routes/RouteType';
import {TitreUneLigne} from '../../components/titre/TitreUneLigne';
import {BtnNext} from '../../components/boutons/BtnNext';

type HomeProps = {
  navigation: NavigationProp<RouteType, 'Aide'>;
  route: RouteProp<RouteType, 'Aide'>;
};

export const Aide: React.FC<HomeProps> = ({navigation}) => {
  // Masquer la barre de statut au montage de l'écran
  useEffect(() => {
    StatusBar.setHidden(true);
    // Rétablir la visibilité de la barre de statut lors du démontage de l'écran
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);
  return (
    <ImageBackground
      style={StyleAide.bgGradient}
      source={require('../../../assets/images/bg-parametres.png')}>
      <MenuSlide
        navigation={navigation}
        icoPushChange={false}
        backButton="Retour"
        backgroundColor={'white'}
        settingsNavigation={'Settings'}
      />
      <View style={{flex: 5}}>
        <TitreUneLigne
          txtTitle="Aide"
          fontFamily="Comfortaa-Bold"
          color={'#0019A7'}
          fontSize={24}
          textAlign="center"
          fontWeight={'700'}
          top={25}
          left={undefined}
        />
        <View style={StyleAide.separator} />
        <Text style={StyleAide.description}>Trouvez de l'aide</Text>
      </View>
      <View style={{flex: 1}}>
        <BtnNext
          navigation={navigation}
          navigateTo="Contact_et_FAQ"
          propName="SettingsRoute"
          propRoute="Contact_et_FAQ"
          txt="Retour paramètres"
          handleStore={undefined}
          postInfo={undefined}
          background="Blue-border"
          top={0}
          left={0}
          fontSize={18}
        />
      </View>
    </ImageBackground>
  );
};
