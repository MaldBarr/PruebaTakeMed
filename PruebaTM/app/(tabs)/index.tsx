import { Image } from 'expo-image';
import { Platform, StyleSheet, Alert } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import * as Progress from 'react-native-progress';

import userInfo from '@/utils/userInfo.json';
import { Button } from '@react-navigation/elements';

export default function HomeScreen() {

  // Simular sincronización de datos
  async function syncData() {
    console.log('Sincronizando datos con el dispositivo BLE...');
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Datos sincronizados exitosamente');
    // Asegúrate de que Alert.alert se ejecute en el hilo principal
    if (Platform.OS === 'web') {
      window.alert('Sincronización exitosa con el dispositivo BLE');
    } else {
      Alert.alert('Éxito', 'Sincronización exitosa con el dispositivo BLE');
    }
  }


  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hola, {userInfo.nombre}!</ThemedText>
        <HelloWave />
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Pasos diarios</ThemedText>
        <Progress.Circle 
          progress={userInfo.pasos/userInfo.objetivoPasos} 
          size={170} showsText={true} 
          formatText={() => `${userInfo.pasos/userInfo.objetivoPasos*100}%`} 
          textStyle={{fontWeight:'bold'}}
          thickness={10}
        />
        <ThemedText type='defaultSemiBold'>
          {userInfo.pasos} / {userInfo.objetivoPasos}
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <Button onPress={() => syncData()}>
          Sincronizar dispositivo
        </Button>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    marginTop: 20,
    gap: 8,
    marginBottom: 8,
    alignItems: 'center',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
