import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const IPhone141 = () => {
  return (
    <View style={styles.iphone144}>
      <View style={[styles.iphoneXTopNavbarLight, styles.lightPosition]}>
        <Image
          style={styles.notchIcon}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        <View style={styles.rightSide}>
          <Image
            style={styles.batteryIcon}
            contentFit="cover"
            source={require("../assets/battery.png")}
          />
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={styles.mobileSignalIcon}
            contentFit="cover"
            source={require("../assets/mobile-signal.png")}
          />
          <Image
            style={styles.recordingIndicatorIcon}
            contentFit="cover"
            source={require("../assets/recording-indicator.png")}
          />
        </View>
        <Image
          style={styles.leftSideIcon}
          contentFit="cover"
          source={require("../assets/left-side1.png")}
        />
      </View>
      <View style={[styles.homeIndicatorLight, styles.lightPosition]}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={[styles.continueButton, styles.continueLayout]}>
        <View style={[styles.continueButtonChild, styles.continueLayout]} />
        <Text style={[styles.continue, styles.carTypo]}>Continue</Text>
      </View>
      <Image
        style={[styles.arrowLeftIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/arrowleft.png")}
      />
      <Text style={[styles.selectCar, styles.carTypo]}>Select Car</Text>
      <Text style={[styles.selectTheVehicle, styles.enterPromoCodeTypo]}>
        Select the vehicle category you want to Book.
      </Text>
      <View style={styles.promoCode}>
        <Image
          style={styles.promoCodeChild}
          contentFit="cover"
          source={require("../assets/ellipse-30.png")}
        />
        <Text style={[styles.promoCode1, styles.carTypo]}>Promo Code</Text>
        <View style={[styles.promoCodeItem, styles.text3Position]} />
        <Text style={[styles.enterPromoCode, styles.enterPromoCodeTypo]}>
          Enter Promo Code
        </Text>
        <Image
          style={[styles.arrowRightIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/arrowright.png")}
        />
      </View>
      <View style={styles.destinationDetails}>
        <Image
          style={[styles.locationIcon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/location.png")}
        />
        <Image
          style={[styles.clocktimeIcon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/clocktime.png")}
        />
        <Image
          style={[styles.cardIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/card1.png")}
        />
        <Text style={[styles.km, styles.kmTypo]}>3.3 km</Text>
        <Text style={[styles.mins, styles.kmTypo]}>4 mins</Text>
        <Text style={[styles.text, styles.kmTypo]}>$20.00</Text>
      </View>
      <View style={[styles.sedanCar, styles.carLayout]}>
        <View style={styles.childShadowBox} />
        <Image
          style={styles.option1Icon}
          contentFit="cover"
          source={require("../assets/option1.png")}
        />
        <Text style={[styles.car, styles.carPosition]}>Car</Text>
        <Text style={[styles.sedan, styles.textTypo]}>Sedan</Text>
        <Text style={[styles.nearby, styles.nearbyTypo]}>3 Nearby</Text>
        <Text style={[styles.text1, styles.textTypo]}>$25.00</Text>
        <View style={[styles.sedanCar1, styles.sedanLayout]}>
          <Image
            style={[styles.sedanCarItem, styles.sedanLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-28.png")}
          />
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/3.png")}
          />
        </View>
      </View>
      <View style={[styles.bike, styles.carLayout]}>
        <View style={styles.childShadowBox} />
        <Image
          style={[styles.selectedOptionIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/selected-option.png")}
        />
        <Text style={[styles.bike1, styles.carTypo]}>Bike</Text>
        <Text style={[styles.nearby1, styles.nearbyTypo]}>11 Nearby</Text>
        <Text style={[styles.text2, styles.textTypo]}>$10.00</Text>
        <View style={[styles.bike2, styles.bikeLayout]}>
          <Image
            style={[styles.bikeItem, styles.bikeLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-27.png")}
          />
          <Image
            style={styles.icon1}
            contentFit="cover"
            source={require("../assets/1.png")}
          />
        </View>
      </View>
      <View style={[styles.hatchbackCar, styles.carLayout]}>
        <View style={styles.childShadowBox} />
        <Image
          style={[styles.option2Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/option1.png")}
        />
        <Text style={[styles.nearby2, styles.nearbyTypo]}>7 Nearby</Text>
        <Text style={[styles.hatchback, styles.car1Position]}>Hatchback</Text>
        <Text style={[styles.car1, styles.car1Position]}>Car</Text>
        <Text style={[styles.text3, styles.textTypo]}>$17.00</Text>
        <View style={[styles.hatchBackCar, styles.bikeLayout]}>
          <Image
            style={[styles.bikeItem, styles.bikeLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-27.png")}
          />
          <Image
            style={[styles.icon2, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/2.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lightPosition: {
    left: "2.05%",
    right: "1.79%",
    width: "96.15%",
    position: "absolute",
  },
  continueLayout: {
    height: 51,
    width: 274,
    position: "absolute",
  },
  carTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  enterPromoCodeTypo: {
    fontFamily: FontFamily.poppinsRegular,
    left: 58,
    textAlign: "left",
    position: "absolute",
  },
  text3Position: {
    top: 32,
    position: "absolute",
  },
  iconPosition1: {
    bottom: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  kmTypo: {
    fontFamily: FontFamily.arial,
    top: 2,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  carLayout: {
    height: 83,
    width: 330,
    position: "absolute",
  },
  carPosition: {
    top: 19,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
  },
  nearbyTypo: {
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  sedanLayout: {
    height: 64,
    width: 64,
    position: "absolute",
  },
  iconLayout: {
    height: 57,
    width: 57,
    position: "absolute",
  },
  iconPosition: {
    top: 33,
    height: 18,
    width: 18,
    position: "absolute",
  },
  bikeLayout: {
    height: 62,
    width: 62,
    position: "absolute",
  },
  car1Position: {
    top: 15,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  notchIcon: {
    width: 0,
    height: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  batteryIcon: {
    right: 0,
    width: 24,
    height: 11,
    top: 0,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  recordingIndicatorIcon: {
    top: -9,
    right: 56,
    width: 6,
    height: 6,
    display: "none",
    position: "absolute",
  },
  rightSide: {
    top: 17,
    right: 15,
    width: 67,
    height: 11,
    position: "absolute",
  },
  leftSideIcon: {
    left: 21,
    width: 54,
    height: 21,
    top: 12,
    position: "absolute",
  },
  iphoneXTopNavbarLight: {
    height: "5.21%",
    top: "1.42%",
    bottom: "93.36%",
    overflow: "hidden",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorLightPrimary,
    width: 134,
    height: 5,
    position: "absolute",
  },
  homeIndicatorLight: {
    height: "4.03%",
    top: "95.73%",
    bottom: "0.24%",
  },
  continueButtonChild: {
    borderRadius: Border.br_6xl_5,
    backgroundColor: Color.colorMediumseagreen,
    left: 0,
    top: 0,
  },
  continue: {
    top: 14,
    left: 101,
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  continueButton: {
    top: 691,
    left: 67,
  },
  arrowLeftIcon: {
    height: "1.66%",
    width: "4.1%",
    top: "7.11%",
    right: "85.38%",
    bottom: "91.23%",
    left: "10.51%",
  },
  selectCar: {
    top: 56,
    left: 154,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  selectTheVehicle: {
    top: 103,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
  },
  promoCodeChild: {
    top: 36,
    left: 282,
    width: 32,
    height: 32,
    position: "absolute",
  },
  promoCode1: {
    left: 110,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  promoCodeItem: {
    borderRadius: Border.br_2xs,
    backgroundColor: "#f1f1f1",
    width: 270,
    height: 42,
    left: 0,
  },
  enterPromoCode: {
    top: 40,
    color: "#b4b4b4",
    fontSize: FontSize.size_base,
  },
  arrowRightIcon: {
    height: "16.22%",
    width: "4.46%",
    top: "62.16%",
    right: "2.87%",
    bottom: "21.62%",
    left: "92.68%",
  },
  promoCode: {
    top: 473,
    left: 41,
    width: 314,
    height: 74,
    position: "absolute",
  },
  locationIcon: {
    height: "95.45%",
    width: "5.47%",
    top: "4.55%",
    right: "94.53%",
    left: "0%",
  },
  clocktimeIcon: {
    height: "100%",
    width: "7.07%",
    top: "0%",
    right: "55.95%",
    left: "36.98%",
  },
  cardIcon: {
    height: "68.18%",
    width: "6.75%",
    top: "18.18%",
    right: "19.29%",
    bottom: "13.64%",
    left: "73.95%",
  },
  km: {
    left: 26,
  },
  mins: {
    left: 147,
  },
  text: {
    left: 262,
  },
  destinationDetails: {
    height: "2.61%",
    width: "79.74%",
    top: "73.22%",
    right: "9.74%",
    bottom: "24.17%",
    left: "10.51%",
    position: "absolute",
  },
  childShadowBox: {
    borderRadius: Border.br_lgi,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 83,
    width: 330,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  option1Icon: {
    top: 31,
    height: 18,
    width: 18,
    left: 279,
    position: "absolute",
  },
  car: {
    left: 85,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  sedan: {
    left: 119,
    top: 19,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  nearby: {
    top: 42,
    left: 85,
  },
  text1: {
    top: 28,
    left: 222,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  sedanCarItem: {
    left: 0,
    top: 0,
  },
  icon: {
    top: 3,
    left: 4,
  },
  sedanCar1: {
    top: 9,
    left: 9,
  },
  sedanCar: {
    top: 243,
    left: 32,
    width: 330,
  },
  selectedOptionIcon: {
    left: 279,
    top: 33,
  },
  bike1: {
    top: 18,
    left: 85,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  nearby1: {
    top: 39,
    left: 85,
  },
  text2: {
    top: 30,
    left: 227,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  bikeItem: {
    left: 0,
    top: 0,
  },
  icon1: {
    top: 7,
    left: 8,
    width: 47,
    height: 47,
    position: "absolute",
  },
  bike2: {
    top: 10,
    left: 12,
  },
  bike: {
    top: 147,
    left: 32,
    width: 330,
  },
  option2Icon: {
    left: 283,
  },
  nearby2: {
    top: 44,
    left: 89,
  },
  hatchback: {
    left: 123,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
  },
  car1: {
    left: 89,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  text3: {
    left: 232,
    top: 32,
    position: "absolute",
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  icon2: {
    left: 3,
    top: 2,
    height: 57,
    width: 57,
  },
  hatchBackCar: {
    left: 14,
    top: 12,
  },
  hatchbackCar: {
    top: 339,
    left: 28,
  },
  iphone144: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone141;
