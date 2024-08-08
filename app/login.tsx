import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import React, { useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

enum SignInType {
    Phone,
    Email,
    Google,
    Apple,
}

const Page = () => {
    const [countryCode, setCountryCode] = useState("+1");
    const [phoneNumber, setPhoneNumber] = useState("");
    const keyboardVerticalOffset = Platform.OS === "ios" ? 80 : 0;
    const onSignIn = async (type: SignInType) => {
        if (type === SignInType.Phone) {
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior='padding'
            keyboardVerticalOffset={keyboardVerticalOffset}>
            <View style={defaultStyles.container}>
                <Text style={defaultStyles.header}>Welcome back!</Text>
                <Text style={defaultStyles.descriptionText}>
                    Enter your phone number associated with your account
                </Text>
                <View style={style.inputContainer}>
                    <TextInput
                        style={[style.input, { maxWidth: 90 }]}
                        placeholder='Country code'
                        placeholderTextColor={Colors.gray}
                        value={countryCode}
                    />
                    <TextInput
                        style={[style.input, { flex: 1 }]}
                        placeholder='Mobile number'
                        placeholderTextColor={Colors.gray}
                        keyboardType='numeric'
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                    />
                </View>

                <View style={{ flex: 1 }} />

                <TouchableOpacity
                    style={[
                        defaultStyles.pillButton,
                        phoneNumber !== "" ? style.enable : style.disable,
                        { marginBottom: 20 },
                    ]}
                    onPress={() => onSignIn(SignInType.Phone)}>
                    <Text style={defaultStyles.buttonText}>Continue</Text>
                </TouchableOpacity>

                <View style={style.orContainer}>
                    <View style={style.orDashes}></View>
                    <Text style={style.orText}>or</Text>
                    <View style={style.orDashes}></View>
                </View>

                <TouchableOpacity
                    onPress={() => onSignIn(SignInType.Email)}
                    style={[
                        defaultStyles.pillButton,
                        {
                            flexDirection: "row",
                            gap: 16,
                            marginTop: 20,
                            backgroundColor: "#fff",
                        },
                    ]}>
                    <Ionicons name='mail' size={24} color={"#000"} />
                    <Text style={[defaultStyles.buttonText, { color: "#000" }]}>
                        Continue with email
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => onSignIn(SignInType.Google)}
                    style={[
                        defaultStyles.pillButton,
                        {
                            flexDirection: "row",
                            gap: 16,
                            marginTop: 20,
                            backgroundColor: "#fff",
                        },
                    ]}>
                    <Ionicons name='logo-google' size={24} color={"#000"} />
                    <Text style={[defaultStyles.buttonText, { color: "#000" }]}>
                        Continue with email
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => onSignIn(SignInType.Apple)}
                    style={[
                        defaultStyles.pillButton,
                        {
                            flexDirection: "row",
                            gap: 16,
                            marginTop: 20,
                            backgroundColor: "#fff",
                        },
                    ]}>
                    <Ionicons name='logo-apple' size={24} color={"#000"} />
                    <Text style={[defaultStyles.buttonText, { color: "#000" }]}>
                        Continue with email
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

const style = StyleSheet.create({
    inputContainer: {
        marginVertical: 40,
        flexDirection: "row",
        gap: 8,
    },
    input: {
        backgroundColor: Colors.lightGray,
        padding: 20,
        borderRadius: 16,
        fontSize: 20,
        marginRight: 10,
    },
    enable: {
        backgroundColor: Colors.primary,
    },
    disable: {
        backgroundColor: Colors.primaryMuted,
    },
    orContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
    },
    orDashes: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: Colors.gray,
    },
    orText: {
        color: Colors.gray,
        fontSize: 20,
    },
});

export default Page;
