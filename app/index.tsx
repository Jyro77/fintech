import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useAssets } from "expo-asset";
import { ResizeMode, Video } from "expo-av";
import { Link } from "expo-router";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";

const Page = () => {
    const [assets] = useAssets([require("@/assets/videos/intro.mp4")]);

    //console.log(assets);

    return (
        <View style={styles.container}>
            {assets && (
                <Video
                    source={{
                        uri: "https://cloud.appwrite.io/v1/storage/buckets/66aaef900004616dd277/files/66ac39c2000181bbf9f8/view?project=66aaeca800165bc2e1f6&mode=admin",
                    }}
                    //source={{ uri: assets[0].uri }}
                    resizeMode={ResizeMode.COVER}
                    isMuted
                    isLooping
                    shouldPlay
                    style={[styles.video, { backgroundColor: "#0f0f0f" }]}
                    onLoad={() => console.log("load")}
                />
            )}
            <View style={{ marginTop: 80, padding: 20 }}>
                <Text style={styles.header}>
                    Ready to change the way you money?
                </Text>
            </View>

            <View style={styles.buttons}>
                <Link
                    href={"/login"}
                    style={[
                        defaultStyles.pillButton,
                        { flex: 1, backgroundColor: Colors.dark },
                    ]}
                    asChild>
                    <TouchableOpacity>
                        <Text
                            style={{
                                color: "white",
                                fontSize: 22,
                                fontWeight: "500",
                            }}>
                            Log in
                        </Text>
                    </TouchableOpacity>
                </Link>
                <Link
                    href={"/singup"}
                    style={[
                        defaultStyles.pillButton,
                        { flex: 1, backgroundColor: "#fff" },
                    ]}
                    asChild>
                    <TouchableOpacity>
                        <Text
                            style={{
                                fontSize: 22,
                                fontWeight: "500",
                            }}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </Link>
            </View>

            <StatusBar style={"light"} />
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
        color: "white",
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
