import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const InfoPage1 = () => {
  return (
    <View style={styles.infoPage1}>
      <Text
        style={[styles.registerKeep, styles.registerTypo]}
      >{`Register & Keep Track of 
On-Campus Placement Activities`}</Text>
      <Text
        style={[styles.hiredgeForGraduating, styles.loginToSdmcetsTypo]}
      >{`HirEdge For Graduating Students 
of SDMCET`}</Text>
      <Image
        style={[styles.infoPage1Child, styles.registerKeepPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-11.png")}
      />
      <View style={[styles.infoPage1Inner, styles.frameParentFlexBox]}>
        <View style={styles.ellipseParent}>
          <Image
            style={styles.frameLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-4.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
        </View>
      </View>
      <View style={[styles.frameParent, styles.frameParentFlexBox]}>
        <View
          style={[
            styles.loginToSdmcetsHireedgeWrapper,
            styles.sdmcetsWrapperFlexBox,
          ]}
        >
          <Text style={[styles.loginToSdmcets, styles.loginToSdmcetsTypo]}>
            Login To SDMCET’s HireEdge
          </Text>
        </View>
        <View
          style={[
            styles.registerToSdmcetsHireedgeWrapper,
            styles.sdmcetsWrapperFlexBox,
          ]}
        >
          <Text style={[styles.registerToSdmcets, styles.registerTypo]}>
            Register To SDMCET’s HireEdge
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  registerTypo: {
    textAlign: "center",
    fontFamily: FontFamily.sairaSemiCondensedMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lgi,
  },
  loginToSdmcetsTypo: {
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.sairaSemiCondensedMedium,
    fontWeight: "500",
  },
  registerKeepPosition: {
    left: "50%",
    position: "absolute",
  },
  frameParentFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  frameLayout: {
    height: 11,
    width: 10,
  },
  sdmcetsWrapperFlexBox: {
    justifyContent: "center",
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_4xl,
    borderRadius: Border.br_xl,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  registerKeep: {
    marginLeft: -141,
    top: 350,
    color: Color.blackApp,
    height: 58,
    width: 280,
    left: "50%",
    position: "absolute",
  },
  hiredgeForGraduating: {
    marginLeft: -145,
    top: 40,
    fontSize: FontSize.size_xl,
    lineHeight: 26,
    left: "50%",
    position: "absolute",
  },
  infoPage1Child: {
    marginLeft: -115,
    top: 122,
    width: 230,
    height: 198,
  },
  frameItem: {
    marginLeft: 4,
  },
  ellipseParent: {
    flexDirection: "row",
  },
  infoPage1Inner: {
    top: 438,
    left: 152,
    flexDirection: "row",
  },
  loginToSdmcets: {
    fontSize: FontSize.size_lgi,
    color: Color.black,
  },
  loginToSdmcetsHireedgeWrapper: {
    backgroundColor: Color.buttonColor,
  },
  registerToSdmcets: {
    color: Color.white,
  },
  registerToSdmcetsHireedgeWrapper: {
    backgroundColor: Color.blackApp,
    marginTop: 24,
    width: 280,
  },
  frameParent: {
    top: 479,
    left: 40,
  },
  infoPage1: {
    backgroundColor: Color.yellowBackground,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default InfoPage1;
