import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Consejos de salud</ThemedText>
      </ThemedView>
      <Collapsible title="Balancea tu dieta">
        <ThemedText>
          Mantén una dieta equilibrada que incluya frutas, verduras, proteínas magras y granos
          enteros. Evita el exceso de azúcares y grasas saturadas.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Realiza actividad física">
        <ThemedText>
          Intenta hacer al menos 150 minutos de actividad física moderada a la semana. Esto puede
          incluir caminar, correr, nadar o practicar deportes.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Mantén una buena hidratación">
        <ThemedText>
          Bebe suficiente agua a lo largo del día. La cantidad recomendada varía, pero generalmente
          se sugiere alrededor de 2 litros (8 vasos) diarios.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Duerme lo suficiente">
        <ThemedText>
          Asegúrate de dormir entre 7 y 9 horas cada noche. Un buen descanso es esencial para la
          salud física y mental.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Maneja el estrés">
        <ThemedText>
          Practica técnicas de manejo del estrés como la meditación, el yoga o simplemente tomarte
          un tiempo para ti mismo. La salud mental es tan importante como la salud física.
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 20,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
