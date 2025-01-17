import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';

import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';

import Header from './components/Header';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator 
        screenOptions={{ 
          headerShown: false, 
          cardStyle: { 
            backgroundColor: '#f2f3f5' 
          }
        }}
      >
        <Screen 
          name="OrphanagesMap" 
          component={OrphanagesMap} 
          options={{
            headerShown: true,
            header: () => <Header showCancel={false} title="Orfanato" />
          }}
        />

        <Screen 
          name="OrphanageDetails" 
          component={OrphanageDetails} 
        />

        <Screen 
          name="SelectMapPosition" 
          options={{
            headerShown: true,
            header: () => <Header title="Selecione no mapa" />
          }}
          component={SelectMapPosition} 
        />

        <Screen 
          name="OrphanageData" 
          component={OrphanageData} 
          options={{
            headerShown: true,
            header: () => <Header title="Informe os dados" />
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}