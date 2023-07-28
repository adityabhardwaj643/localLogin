import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { Input, CheckBox } from "@rneui/themed";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const LoginScreenWireframe = () => {
  const [rectangleCheckboxchecked, setRectangleCheckboxchecked] =
    useState(false);

  return (
    <View style={styles.loginScreenWireframe}>
      <Image
        style={[styles.logoBoxIcon, styles.logoBoxIconPosition]}
        contentFit="cover"
        source={require("../assets/logo-box.png")}
      />
      <View style={[styles.frame, styles.frameLayout1]}>
        <Image
          style={[styles.frameChild, styles.frameLayout1]}
          contentFit="cover"
          source={require("../assets/rectangle-51.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/group-51.png")}
        />
        <Input
          placeholder="Email"
          inputStyle={{ color: "rgba(0, 0, 0, 0.53)" }}
          containerStyle={styles.emailTextInputInput}
        />
        <Image
          style={[styles.frameInner, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/group-50.png")}
        />
        <Text style={[styles.forgotPassword, styles.logInFlexBox]}>
          Forgot password?
        </Text>
        <Text style={[styles.newUserRegister, styles.newUserRegisterTypo]}>
          New user register here
        </Text>
        <CheckBox
          style={[styles.rectangleCheckbox, styles.rectangleBorder]}
          checked={rectangleCheckboxchecked}
          onPress={() => setRectangleCheckboxchecked(!rectangleCheckboxchecked)}
          checkedColor="#93cf84"
          containerStyle={styles.rectangleCheckboxLayout}
        />
        <Text style={[styles.receiveDailyEmail, styles.newUserRegisterTypo]}>
          Receive daily email notification for reviews
        </Text>
        <Pressable
          style={[styles.rectanglePressable, styles.rectangleBorder]}
        />
        <Text style={[styles.logIn, styles.logInFlexBox]}>Log in</Text>
        <Input
          placeholder="Password"
          inputStyle={{ color: "rgba(0, 0, 0, 0.53)" }}
          containerStyle={styles.passwordTextInputInput}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emailTextInputInput: { // 
    left: 50,
    top: 35,
    position: "absolute",
  },
  rectangleCheckboxLayout: {
    backgroundColor: "transparent",
    padding: 0,
    left: 48,
    top: 220,
    position: "absolute",
  },
  passwordTextInputInput: {
    left: 50,
    top: 100,
    position: "absolute",
  },
  logoBoxIconPosition: {
    left: 100,
    position: "absolute",
    borderRadius: Border.br_mini,
  },
  frameLayout1: {
    height: 311,
    width: 277,
    position: "absolute",
  },
  frameLayout: {
    width: 35,
    left: 19,
    height: 33,
    position: "absolute",
  },
  logInFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  newUserRegisterTypo: {
    left: 87,
    textAlign: "left",
    color: Color.steelblue,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  rectangleBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  logoBoxIcon: {
    top: 88,
    width: 187,
    height: 102,
    borderRadius: Border.br_mini,
  },
  frameChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_mini,
  },
  frameItem: {
    top: 42,
    height: 33,
  },
  frameInner: {
    top: 109,
    height: 33,
  },
  forgotPassword: {
    top: 259,
    width: 85,
    height: 18,
    color: Color.steelblue,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    left: 94,
  },
  newUserRegister: {
    top: 277,
    width: 161,
    height: 33,
  },
  rectangleCheckbox: {
    backgroundColor: "#93cf84",
    borderColor: "#000",
  },
  receiveDailyEmail: {
    top: 223,
    width: 123,
    height: 40,
  },
  rectanglePressable: {
    top: 172,
    backgroundColor: "#6983dc",
    borderColor: "rgba(0, 0, 0, 0)",
    width: 75,
    height: 37,
    borderRadius: Border.br_mini,
    left: 94,
    position: "absolute",
  },
  logIn: {
    top: 180,
    left: 108,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: "#fffefe",
    width: 47,
    height: 20,
  },
  frame: {
    top: 265,
    left: 56,
    overflow: "hidden",
  },
  loginScreenWireframe: {
    backgroundColor: "rgba(234, 234, 234, 0.5)",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default LoginScreenWireframe;
