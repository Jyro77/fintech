import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useAssets } from "expo-asset";
import { ResizeMode, Video } from "expo-av";
import { Link } from "expo-router";

const Page = () => {
    const [assets] = useAssets([require("@/assets/videos/intro.mp4")]);

    //console.log(assets);

    return (
        <View style={styles.container}>
            {assets && (
                <Video
                    resizeMode={ResizeMode.COVER}
                    isMuted
                    isLooping
                    shouldPlay
                    source={{ uri: assets[0].uri }}
                    style={styles.video}
                />
            )}
            <View style={{ marginTop: 80, padding: 20 }}>
                <Text style={styles.header}>
                    Ready to change the way you money?
                </Text>
            </View>

            <View>
                <Link href={"/login"} asChild>
                    <TouchableOpacity>
                        <Text>Login in</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
    },
    video: {
        width: "100%",
        height: "100%",
        position: "absolute",
    },
    header: {
        fontSize: 36,
        fontWeight: "900",
        textTransform: "uppercase",
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "center",
        padding: 20,
        marginBottom: 60,
        paddingHorizontal: 20,
    },
});
export default Page;
