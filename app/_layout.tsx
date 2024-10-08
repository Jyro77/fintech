import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Link, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import "react-native-reanimated";

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
    const [loaded, error] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
        ...FontAwesome.font,
    });

    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <Stack>
            <Stack.Screen name='index' options={{ headerShown: false }} />
            <Stack.Screen
                name='singup'
                options={{
                    title: "",
                    headerBackTitle: "",
                    headerShadowVisible: false,
                    headerStyle: { backgroundColor: Colors.background },
                }}
            />
            <Stack.Screen
                name='login'
                options={{
                    title: "",
                    headerBackTitle: "",
                    headerShadowVisible: false,
                    headerStyle: { backgroundColor: Colors.background },
                    headerRight: () => (
                        <Link href={"/help"} asChild>
                            <TouchableOpacity>
                                <Ionicons
                                    name='help-circle-outline'
                                    size={34}
                                    color={Colors.dark}
                                />
                            </TouchableOpacity>
                        </Link>
                    ),
                }}
            />

            <Stack.Screen
                name='help'
                options={{ title: "help", presentation: "modal" }}
            />
        </Stack>
    );
};

const RootLayoutNav = () => {
    return <InitialLayout />;
};

export default RootLayoutNav;
