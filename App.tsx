import { QueryClient, QueryClientProvider } from 'react-query';
import RootNavigator from './src/navigation/RootNavigator';
import { ProductProvider } from './src/context/ProductContext';
import { SafeAreaView } from 'react-native';
import { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

const queryClient = new QueryClient();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, where is a warning of font, but I thinnk it's a bug of expo ? becuase the font should have been loaded with loadAsync
        await Font.loadAsync({
          'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
        });
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <QueryClientProvider client={queryClient}>
        <ProductProvider>
          <RootNavigator />
        </ProductProvider>
      </QueryClientProvider>
    </SafeAreaView>
  );
}
