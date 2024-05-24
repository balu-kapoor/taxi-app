import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const IPhone144 = () => {
  return (
    <View style={styles.iphone143}>
      <Image
        style={[styles.mapIcon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/map3.png")}
      />
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
          source={require("../assets/left-side.png")}
        />
      </View>
      <View style={[styles.card, styles.cardPosition]} />
      <Text style={styles.distance}>Distance</Text>
      <Text style={styles.km}>3.2 km</Text>
      <View style={styles.handle} />
      <View style={[styles.homeIndicatorLight, styles.lightPosition]}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={styles.nav}>
        <Image
          style={styles.homeFillIcon}
          contentFit="cover"
          source={require("../assets/homefill.png")}
        />
        <Image
          style={[styles.bookIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/book.png")}
        />
        <Image
          style={[styles.commentMessageIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/comment-message.png")}
        />
        <Image
          style={[styles.cardIcon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/card.png")}
        />
        <Image
          style={[styles.profileIcon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/profile.png")}
        />
        <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        <Text style={[styles.bookings, styles.homeTypo]}>Bookings</Text>
        <Text style={[styles.inbox, styles.homeTypo]}>Inbox</Text>
        <Text style={[styles.wallet, styles.homeTypo]}>Wallet</Text>
        <Text style={[styles.profile, styles.homeTypo]}>Profile</Text>
      </View>
      <Image
        style={[styles.searchIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/search.png")}
      />
      <Image
        style={[styles.notificationIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/notification.png")}
      />
      <Image
        style={[styles.iphone143Child, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/vector-40.png")}
      />
      <View style={styles.locationData}>
        <Text
          style={[styles.myCurrentLocation, styles.continueToBookTypo]}
        >{`My Current Location.    `}</Text>
        <Text style={[styles.unitedBankLimited, styles.continueToBookTypo]}>
          United Bank Limited
        </Text>
        <Text style={[styles.oakAveSan, styles.oakAveSanTypo]}>
          35 Oak Ave. San Andreas.
        </Text>
        <Text style={[styles.bankSquareAl, styles.oakAveSanTypo]}>
          Bank Square, AL 63652
        </Text>
        <Image
          style={[styles.locationFillIcon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/locationfill1.png")}
        />
        <Image
          style={styles.locateIcon}
          contentFit="cover"
          source={require("../assets/selected-option.png")}
        />
        <Image
          style={[styles.dotsIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/dots.png")}
        />
        <Image
          style={[styles.locationFillIcon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/locationfill1.png")}
        />
        <Image
          style={styles.locateIcon}
          contentFit="cover"
          source={require("../assets/selected-option.png")}
        />
        <Image
          style={[styles.dotsIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/dots.png")}
        />
      </View>
      <View style={[styles.continueButton, styles.continueLayout]}>
        <View style={[styles.continueButtonChild, styles.continueLayout]} />
        <Text style={[styles.continueToBook, styles.continueToBookTypo]}>
          Continue to Book
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout2: {
    maxHeight: "100%",
    position: "absolute",
  },
  lightPosition: {
    left: "2.05%",
    right: "1.79%",
    width: "96.15%",
    position: "absolute",
  },
  cardPosition: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  iconPosition: {
    bottom: "47.83%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homeTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    top: 31,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: 36,
    position: "absolute",
  },
  continueToBookTypo: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  oakAveSanTypo: {
    color: Color.colorGray_300,
    left: 35,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  continueLayout: {
    height: 51,
    width: 274,
    position: "absolute",
  },
  mapIcon: {
    height: "55.81%",
    bottom: "44.19%",
    maxWidth: "100%",
    overflow: "hidden",
    left: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    maxHeight: "100%",
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
    top: 12,
    left: 21,
    width: 54,
    height: 21,
    position: "absolute",
  },
  iphoneXTopNavbarLight: {
    height: "5.21%",
    top: "1.42%",
    bottom: "93.36%",
    overflow: "hidden",
  },
  card: {
    height: "49.17%",
    top: "52.84%",
    bottom: "-2.01%",
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    position: "absolute",
    backgroundColor: Color.colorWhite,
    right: "0%",
  },
  distance: {
    left: 31,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    top: 482,
    color: Color.colorBlack,
    position: "absolute",
  },
  km: {
    left: 311,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    top: 482,
    position: "absolute",
  },
  handle: {
    top: 465,
    left: 164,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGainsboro,
    width: 62,
    height: 4,
    position: "absolute",
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
  homeFillIcon: {
    top: 1,
    left: 4,
    width: 26,
    height: 24,
    position: "absolute",
  },
  bookIcon: {
    height: "50%",
    width: "7.76%",
    top: "2.17%",
    right: "68.94%",
    left: "23.29%",
  },
  commentMessageIcon: {
    height: "47.83%",
    width: "8.7%",
    top: "4.35%",
    right: "46.27%",
    left: "45.03%",
  },
  cardIcon: {
    height: "41.3%",
    width: "8.07%",
    top: "6.52%",
    right: "23.91%",
    bottom: "52.17%",
    left: "68.01%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  profileIcon: {
    height: "56.52%",
    width: "7.45%",
    right: "2.17%",
    bottom: "43.48%",
    left: "90.37%",
    maxWidth: "100%",
    overflow: "hidden",
    top: "0%",
    maxHeight: "100%",
  },
  home: {
    color: Color.colorMediumseagreen,
    left: 0,
  },
  bookings: {
    left: 64,
    color: Color.colorBlack,
  },
  inbox: {
    left: 143,
    color: Color.colorBlack,
  },
  wallet: {
    left: 215,
    color: Color.colorBlack,
  },
  profile: {
    left: 285,
    color: Color.colorBlack,
  },
  nav: {
    top: 768,
    left: 40,
    width: 322,
    height: 46,
    position: "absolute",
  },
  searchIcon: {
    left: 283,
    width: 36,
    height: 36,
    top: 72,
  },
  notificationIcon: {
    left: 330,
    width: 36,
    height: 36,
    top: 72,
  },
  iphone143Child: {
    top: 531,
    width: 339,
    left: 35,
  },
  myCurrentLocation: {
    left: 35,
    color: Color.colorBlack,
    top: 0,
  },
  unitedBankLimited: {
    left: 35,
    top: 72,
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
  },
  oakAveSan: {
    top: 22,
  },
  bankSquareAl: {
    top: 94,
  },
  locationFillIcon: {
    height: "16.96%",
    width: "7.77%",
    top: "73.21%",
    right: "91.19%",
    bottom: "9.82%",
    left: "1.04%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  locateIcon: {
    top: 3,
    width: 18,
    height: 18,
    left: 0,
    position: "absolute",
  },
  dotsIcon: {
    top: 35,
    left: 9,
    maxWidth: "100%",
    overflow: "hidden",
  },
  locationData: {
    top: 553,
    left: 52,
    width: 193,
    height: 112,
    position: "absolute",
  },
  continueButtonChild: {
    borderRadius: Border.br_6xl_5,
    backgroundColor: Color.colorMediumseagreen,
    left: 0,
    top: 0,
  },
  continueToBook: {
    top: 14,
    color: Color.colorWhite,
    left: 67,
  },
  continueButton: {
    top: 691,
    left: 67,
  },
  iphone143: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone144;
