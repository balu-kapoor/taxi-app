import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const IPhone14 = () => {
  return (
    <View style={styles.iphone141}>
      <View style={[styles.mapParent, styles.mapPosition]}>
        <Image
          style={[styles.mapIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/map.png")}
        />
        <View style={[styles.card, styles.mapPosition]} />
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
            style={[styles.cardIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/card.png")}
          />
          <Image
            style={[styles.profileIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/profile.png")}
          />
          <Text style={[styles.home, styles.homeTypo]}>Home</Text>
          <Text style={[styles.bookings, styles.inboxTypo]}>Bookings</Text>
          <Text style={[styles.inbox, styles.inboxTypo]}>Inbox</Text>
          <Text style={[styles.wallet, styles.inboxTypo]}>Wallet</Text>
          <Text style={[styles.profile, styles.inboxTypo]}>Profile</Text>
        </View>
        <View style={[styles.whereWouldYouGo, styles.whereLayout]}>
          <View style={[styles.whereWouldYouGoChild, styles.whereLayout]} />
          <Image
            style={[styles.locationFillIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/locationfill.png")}
          />
          <Text style={[styles.whereWouldYou, styles.rightSidePosition]}>
            Where would you go ?
          </Text>
        </View>
        <Image
          style={styles.locateIcon}
          contentFit="cover"
          source={require("../assets/locate-icon.png")}
        />
        <Image
          style={[styles.notificationIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/notification.png")}
        />
        <Image
          style={[styles.searchIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/search.png")}
        />
        <View style={[styles.iphoneXTopNavbarLight, styles.lightPosition]}>
          <Image
            style={styles.notchIcon}
            contentFit="cover"
            source={require("../assets/notch.png")}
          />
          <View style={[styles.rightSide, styles.rightSidePosition]}>
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
        <View style={[styles.homeIndicatorLight, styles.lightPosition]}>
          <View style={styles.homeIndicator} />
        </View>
        <Image
          style={styles.personIcon}
          contentFit="cover"
          source={require("../assets/person.png")}
        />
        <View style={styles.presetLocations}>
          <View style={[styles.presetLocationsChild, styles.presetBorder]} />
          <View style={[styles.presetLocationsItem, styles.presetBorder]} />
          <View style={[styles.presetLocationsInner, styles.presetBorder]} />
          <Image
            style={[styles.locationFillIcon1, styles.locationIconLayout]}
            contentFit="cover"
            source={require("../assets/locationfill1.png")}
          />
          <Image
            style={[styles.locationFillIcon2, styles.locationIconLayout]}
            contentFit="cover"
            source={require("../assets/locationfill1.png")}
          />
          <Image
            style={[styles.locationFillIcon3, styles.locationIconLayout]}
            contentFit="cover"
            source={require("../assets/locationfill1.png")}
          />
          <Text style={[styles.home1, styles.home1Typo]}>Home</Text>
          <Text style={[styles.office, styles.home1Typo]}>Office</Text>
          <Text
            style={[styles.apartment, styles.home1Typo]}
          >{`Apartment   `}</Text>
        </View>
        <Image
          style={styles.cabsIcon}
          contentFit="cover"
          source={require("../assets/cabs.png")}
        />
      </View>
      <View style={styles.iphone141Child} />
    </View>
  );
};

const styles = StyleSheet.create({
  mapPosition: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    bottom: "47.83%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homeTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
  },
  inboxTypo: {
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    top: 31,
    position: "absolute",
  },
  whereLayout: {
    height: 44,
    width: 311,
    position: "absolute",
  },
  rightSidePosition: {
    top: 17,
    position: "absolute",
  },
  iconLayout: {
    height: 36,
    width: 36,
    top: 60,
    position: "absolute",
  },
  lightPosition: {
    left: "2.05%",
    right: "1.79%",
    width: "96.15%",
    position: "absolute",
  },
  presetBorder: {
    height: 38,
    borderWidth: 2,
    borderColor: Color.colorMediumseagreen,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_lgi,
    position: "absolute",
  },
  locationIconLayout: {
    bottom: "25.64%",
    top: "25.64%",
    width: "4.08%",
    height: "48.72%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  home1Typo: {
    fontSize: FontSize.size_sm,
    top: 11,
    textAlign: "left",
    color: Color.colorMediumseagreen,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  mapIcon: {
    height: "82.05%",
    bottom: "17.95%",
    left: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
  },
  card: {
    height: "21.84%",
    top: "78.16%",
    bottom: "0%",
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    position: "absolute",
    backgroundColor: Color.colorWhite,
    right: "0%",
  },
  homeFillIcon: {
    left: 4,
    width: 26,
    height: 24,
    top: 1,
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
  },
  profileIcon: {
    height: "56.52%",
    width: "7.45%",
    right: "2.17%",
    bottom: "43.48%",
    left: "90.37%",
    top: "0%",
  },
  home: {
    color: Color.colorMediumseagreen,
    top: 31,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    left: 0,
    position: "absolute",
  },
  bookings: {
    left: 64,
  },
  inbox: {
    left: 143,
  },
  wallet: {
    left: 215,
  },
  profile: {
    left: 285,
  },
  nav: {
    top: 756,
    left: 40,
    width: 322,
    height: 46,
    position: "absolute",
  },
  whereWouldYouGoChild: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_2xs,
    backgroundColor: Color.colorWhitesmoke_100,
    top: 0,
    left: 0,
  },
  locationFillIcon: {
    height: "43.18%",
    width: "4.82%",
    top: "34.09%",
    right: "5.14%",
    bottom: "22.73%",
    left: "90.03%",
  },
  whereWouldYou: {
    left: 14,
    color: Color.colorDarkgray_200,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    top: 17,
  },
  whereWouldYouGo: {
    top: 682,
    left: 44,
  },
  locateIcon: {
    top: 550,
    left: 309,
    width: 53,
    height: 53,
    position: "absolute",
  },
  notificationIcon: {
    left: 330,
  },
  searchIcon: {
    left: 283,
  },
  notchIcon: {
    width: 0,
    height: 0,
    top: 0,
    left: 0,
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
    right: 15,
    width: 67,
    height: 11,
  },
  leftSideIcon: {
    top: 12,
    left: 21,
    width: 54,
    height: 21,
    position: "absolute",
  },
  iphoneXTopNavbarLight: {
    height: "5.18%",
    bottom: "94.82%",
    top: "0%",
    overflow: "hidden",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorLightPrimary,
    height: 5,
    width: 134,
    position: "absolute",
  },
  homeIndicatorLight: {
    height: "4%",
    top: "95.23%",
    bottom: "0.77%",
  },
  personIcon: {
    top: 259,
    left: 123,
    width: 146,
    height: 146,
    position: "absolute",
  },
  presetLocationsChild: {
    width: 106,
    height: 38,
    borderWidth: 2,
    borderColor: Color.colorMediumseagreen,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_lgi,
    left: 0,
    top: 1,
  },
  presetLocationsItem: {
    left: 117,
    width: 106,
    height: 38,
    borderWidth: 2,
    borderColor: Color.colorMediumseagreen,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_lgi,
    top: 0,
  },
  presetLocationsInner: {
    left: 234,
    height: 38,
    borderWidth: 2,
    borderColor: Color.colorMediumseagreen,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_lgi,
    width: 134,
    top: 1,
  },
  locationFillIcon1: {
    right: "93.21%",
    left: "2.72%",
  },
  locationFillIcon2: {
    right: "59.78%",
    left: "36.14%",
  },
  locationFillIcon3: {
    right: "28.8%",
    left: "67.12%",
  },
  home1: {
    left: 35,
  },
  office: {
    left: 154,
  },
  apartment: {
    left: 272,
  },
  presetLocations: {
    top: 619,
    left: 15,
    width: 368,
    height: 39,
    position: "absolute",
  },
  cabsIcon: {
    top: 155,
    left: 54,
    width: 298,
    height: 302,
    position: "absolute",
  },
  mapParent: {
    height: "100.65%",
    bottom: "-0.65%",
    top: "0%",
    position: "absolute",
  },
  iphone141Child: {
    top: 672,
    left: 164,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGainsboro,
    width: 62,
    height: 4,
    position: "absolute",
  },
  iphone141: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone14;
