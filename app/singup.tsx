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

const Singup = () => {
    const [countryCode, setCountryCode] = useState("+1");
    const [phoneNumber, setPhoneNumber] = useState("");
    const keyboardVerticalOffset = Platform.OS === "ios" ? 80 : 0;
    const onSignup = async () => {};

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior='padding'
            keyboardVerticalOffset={keyboardVerticalOffset}>
            <View style={defaultStyles.container}>
                <Text style={defaultStyles.header}>Let's get started!</Text>
                <Text style={defaultStyles.descriptionText}>
                    Enter your phone number. We will send you a confirmation
                    code there
                </Text>
                <View style={style.inputContainer}>
                    <TextInput
                        style={style.input}
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

                <Link href={"/login"} replace asChild>
                    <TouchableOpacity>
                        <Text style={defaultStyles.textLink}>
                            Already have an account? Log in
                        </Text>
                    </TouchableOpacity>
                </Link>

                <View style={{ flex: 1 }} />

                <TouchableOpacity
                    style={[
                        defaultStyles.pillButton,
                        phoneNumber !== "" ? style.enable : style.disable,
                        { marginBottom: 20 },
                    ]}
                    onPress={onSignup}>
                    <Text style={defaultStyles.buttonText}>Sign up</Text>
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
        marginBottom: 10,
    },
    enable: {
        backgroundColor: Colors.primary,
    },
    disable: {
        backgroundColor: Colors.primaryMuted,
    },
});

export default Singup;
