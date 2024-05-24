import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const IPhone143 = () => {
  return (
    <View style={styles.iphone142}>
      <View style={styles.handle} />
      <Text style={styles.selectAddress}>Select Address</Text>
      <View style={[styles.backScreen, styles.cardPosition]}>
        <Image
          style={[styles.mapIcon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/map2.png")}
        />
        <View style={[styles.card, styles.bgPosition1]} />
        <View style={styles.nav}>
          <Image
            style={styles.homeFillIcon}
            contentFit="cover"
            source={require("../assets/homefill.png")}
          />
          <Image
            style={[styles.bookIcon, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/book.png")}
          />
          <Image
            style={[styles.commentMessageIcon, styles.iconPosition2]}
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
          <Text style={styles.home}>Home</Text>
          <Text style={[styles.bookings, styles.inboxTypo]}>Bookings</Text>
          <Text style={[styles.inbox, styles.inboxTypo]}>Inbox</Text>
          <Text style={[styles.wallet, styles.inboxTypo]}>Wallet</Text>
          <Text style={[styles.profile, styles.inboxTypo]}>Profile</Text>
        </View>
        <View style={styles.whereWouldYouGo}>
          <View style={styles.whereWouldYouGoChild} />
          <Image
            style={[styles.locationFillIcon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/locationfill.png")}
          />
          <Text style={styles.whereWouldYou}>Where would you go ?</Text>
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
            style={[styles.locationFillIcon1, styles.locationIconLayout1]}
            contentFit="cover"
            source={require("../assets/locationfill1.png")}
          />
          <Image
            style={[styles.locationFillIcon2, styles.locationIconLayout1]}
            contentFit="cover"
            source={require("../assets/locationfill1.png")}
          />
          <Image
            style={[styles.locationFillIcon3, styles.locationIconLayout1]}
            contentFit="cover"
            source={require("../assets/locationfill1.png")}
          />
          <Text style={[styles.home1, styles.home1Typo]}>Home</Text>
          <Text style={[styles.office, styles.home1Typo]}>Office</Text>
          <Text
            style={[styles.apartment, styles.apartmentPosition]}
          >{`Apartment   `}</Text>
        </View>
        <Image
          style={styles.cabsIcon}
          contentFit="cover"
          source={require("../assets/cabs1.png")}
        />
      </View>
      <View style={[styles.blur, styles.bgPosition]} />
      <View style={[styles.bg, styles.bgPosition]} />
      <View style={styles.fromToDestination}>
        <View style={styles.fromShadowBox} />
        <View style={styles.rectangleViewShadowBox} />
        <Image
          style={[styles.locationFillIcon4, styles.locationIconLayout]}
          contentFit="cover"
          source={require("../assets/locationfill.png")}
        />
        <Image
          style={[styles.locationFillIcon5, styles.locationIconLayout]}
          contentFit="cover"
          source={require("../assets/locationfill1.png")}
        />
        <Text style={[styles.from, styles.fromTypo]}>From</Text>
        <Text style={[styles.destination, styles.fromTypo]}>Destination</Text>
        <Image
          style={[styles.locateIcon1, styles.apartmentPosition]}
          contentFit="cover"
          source={require("../assets/locate-icon1.png")}
        />
        <Image
          style={styles.locateIcon2}
          contentFit="cover"
          source={require("../assets/selected-option.png")}
        />
        <Image
          style={[styles.dotsIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/dots.png")}
        />
        <View style={styles.fromShadowBox} />
        <View style={styles.rectangleViewShadowBox} />
        <Image
          style={[styles.locationFillIcon5, styles.locationIconLayout]}
          contentFit="cover"
          source={require("../assets/locationfill1.png")}
        />
        <Text style={[styles.from, styles.fromTypo]}>From</Text>
        <Text style={[styles.destination, styles.fromTypo]}>Destination</Text>
        <Image
          style={styles.locateIcon2}
          contentFit="cover"
          source={require("../assets/selected-option.png")}
        />
        <Image
          style={[styles.dotsIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/dots.png")}
        />
      </View>
      <View style={[styles.savedPlaced, styles.savedLayout]}>
        <Text style={[styles.savedPlaces, styles.savedPlacesTypo]}>
          Saved Places
        </Text>
        <Image
          style={[styles.favoriteIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/favorite.png")}
        />
        <Image
          style={[styles.savedPlacedChild, styles.savedLayout]}
          contentFit="cover"
          source={require("../assets/vector-39.png")}
        />
        <Image
          style={[styles.chevronRightIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/chevronright.png")}
        />
      </View>
      <View style={[styles.gigaMallPlaza, styles.mallLayout]}>
        <Text style={[styles.gigaMallPlaza1, styles.savedPlacesTypo]}>
          Giga Mall Plaza
        </Text>
        <Text style={[styles.essexStSunnyside, styles.savedPlacesTypo]}>
          8946 Essex St. Sunnyside, In46321
        </Text>
        <Image
          style={[styles.clocktimeIcon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/clocktime1.png")}
        />
      </View>
      <View style={[styles.megaMallPlaza, styles.mallLayout]}>
        <Text style={[styles.gigaMallPlaza1, styles.savedPlacesTypo]}>
          Mega Mall Plaza
        </Text>
        <Text style={[styles.essexStSunnyside, styles.savedPlacesTypo]}>
          8946 Essex St. Sunnyside, In46321
        </Text>
        <Image
          style={[styles.clocktimeIcon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/clocktime1.png")}
        />
      </View>
      <View style={[styles.miniPark, styles.miniParkPosition]}>
        <Text style={[styles.gigaMallPlaza1, styles.savedPlacesTypo]}>
          Mini Park
        </Text>
        <Text style={[styles.essexStSunnyside, styles.savedPlacesTypo]}>
          8946 Essex St. Sunnyside, In46321
        </Text>
        <Image
          style={[styles.clocktimeIcon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/clocktime1.png")}
        />
      </View>
      <View style={[styles.bigRestaurant, styles.miniParkPosition]}>
        <Text style={[styles.gigaMallPlaza1, styles.savedPlacesTypo]}>
          Big Restaurant
        </Text>
        <Text style={[styles.essexStSunnyside, styles.savedPlacesTypo]}>
          8946 Essex St. Sunnyside, In46321
        </Text>
        <Image
          style={[styles.clocktimeIcon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/clocktime1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardPosition: {
    right: "0%",
    left: "0%",
    width: "100%",
  },
  iconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  bgPosition1: {
    borderTopRightRadius: Border.br_11xl,
    borderTopLeftRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
  },
  iconPosition2: {
    bottom: "47.83%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  inboxTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    top: 31,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  iconLayout: {
    height: 36,
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
  locationIconLayout1: {
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
    color: Color.colorMediumseagreen,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  apartmentPosition: {
    left: 272,
    position: "absolute",
  },
  bgPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  locationIconLayout: {
    width: "4.84%",
    height: "15.32%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  fromTypo: {
    fontSize: FontSize.size_mini,
    color: Color.colorDarkgray_200,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  savedLayout: {
    height: 65,
    width: 315,
    position: "absolute",
  },
  savedPlacesTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
  },
  iconPosition: {
    bottom: "32.31%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  mallLayout: {
    height: 48,
    width: 283,
    left: 34,
    position: "absolute",
  },
  miniParkPosition: {
    left: 32,
    height: 48,
    width: 283,
    position: "absolute",
  },
  handle: {
    top: 244,
    left: 158,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGainsboro,
    width: 62,
    height: 4,
    position: "absolute",
  },
  selectAddress: {
    top: 263,
    left: 114,
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "left",
    color: Color.colorBlack,
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
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
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
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    left: 0,
    top: 31,
    textAlign: "left",
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
    width: 322,
    height: 46,
    left: 40,
    position: "absolute",
  },
  whereWouldYouGoChild: {
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_2xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    top: 0,
    height: 44,
    width: 311,
    left: 0,
    position: "absolute",
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
    top: 17,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  whereWouldYouGo: {
    top: 682,
    left: 44,
    height: 44,
    width: 311,
    position: "absolute",
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
    width: 36,
    top: 60,
    height: 36,
  },
  searchIcon: {
    left: 283,
    width: 36,
    top: 60,
    height: 36,
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
    top: 17,
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
    position: "absolute",
  },
  office: {
    left: 154,
    position: "absolute",
  },
  apartment: {
    fontSize: FontSize.size_sm,
    top: 11,
    color: Color.colorMediumseagreen,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
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
  backScreen: {
    height: "100.65%",
    bottom: "-0.65%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  blur: {
    backgroundColor: Color.colorBlack,
    height: 843,
    opacity: 0.6,
    top: 0,
  },
  bg: {
    top: 233,
    height: 611,
    borderTopRightRadius: Border.br_11xl,
    borderTopLeftRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
  },
  fromShadowBox: {
    width: 281,
    left: 28,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_2xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    top: 0,
    height: 44,
    position: "absolute",
  },
  rectangleViewShadowBox: {
    left: 29,
    top: 80,
    width: 281,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_2xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    height: 44,
    position: "absolute",
  },
  locationFillIcon4: {
    top: "76.61%",
    right: "5.16%",
    bottom: "8.06%",
    left: "90%",
  },
  locationFillIcon5: {
    top: "75.81%",
    right: "94.52%",
    bottom: "8.87%",
    left: "0.65%",
  },
  from: {
    top: 13,
    left: 40,
  },
  destination: {
    top: 95,
    left: 38,
  },
  locateIcon1: {
    width: 22,
    height: 22,
    top: 12,
  },
  locateIcon2: {
    top: 15,
    width: 18,
    height: 18,
    left: 0,
    position: "absolute",
  },
  dotsIcon: {
    top: 47,
    left: 9,
    height: 36,
    maxWidth: "100%",
    overflow: "hidden",
  },
  fromToDestination: {
    top: 305,
    width: 310,
    height: 124,
    left: 37,
    position: "absolute",
  },
  savedPlaces: {
    top: 20,
    left: 36,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
  },
  favoriteIcon: {
    height: "38.46%",
    width: "5.41%",
    top: "29.23%",
    right: "93.16%",
    left: "1.43%",
  },
  savedPlacedChild: {
    top: 0,
    left: 0,
  },
  chevronRightIcon: {
    height: "27.69%",
    width: "2.86%",
    top: "40%",
    right: "2.23%",
    left: "94.91%",
  },
  savedPlaced: {
    top: 460,
    left: 33,
  },
  gigaMallPlaza1: {
    left: 37,
    top: 0,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
  },
  essexStSunnyside: {
    top: 25,
    color: Color.colorDimgray,
    left: 37,
  },
  clocktimeIcon: {
    height: "47.92%",
    width: "8.13%",
    top: "20.83%",
    right: "91.87%",
    bottom: "31.25%",
    left: "0%",
  },
  gigaMallPlaza: {
    top: 534,
  },
  megaMallPlaza: {
    top: 603,
  },
  miniPark: {
    top: 670,
  },
  bigRestaurant: {
    top: 737,
  },
  iphone142: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone143;
