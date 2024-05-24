import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone142 = () => {
  return (
    <View style={styles.iphone145}>
      <View style={[styles.iphoneXTopNavbarLight, styles.navPosition]}>
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
          source={require("../assets/left-side2.png")}
        />
      </View>
      <View style={[styles.continueButton, styles.continueLayout]}>
        <View style={[styles.continueButtonChild, styles.childBg]} />
        <Text style={[styles.trackDriver, styles.activeNowTypo]}>
          Track Driver
        </Text>
      </View>
      <Text style={[styles.myBookings, styles.activeNowTypo]}>My Bookings</Text>
      <View style={styles.destinationDetails}>
        <Image
          style={[styles.locationIcon, styles.iconCardLayout]}
          contentFit="cover"
          source={require("../assets/location.png")}
        />
        <Image
          style={[styles.clocktimeIcon, styles.iconCardLayout]}
          contentFit="cover"
          source={require("../assets/clocktime.png")}
        />
        <Image
          style={[styles.cardIcon, styles.iconCardLayout]}
          contentFit="cover"
          source={require("../assets/card1.png")}
        />
        <Text style={[styles.km, styles.kmTypo]}>3.3 km</Text>
        <Text style={[styles.mins, styles.kmTypo]}>4 mins</Text>
        <Text style={[styles.text, styles.kmTypo]}>$20.00</Text>
      </View>
      <View style={styles.dateAndTime}>
        <Text
          style={[styles.dateTime, styles.dateTimeTypo]}
        >{`Date & Time`}</Text>
        <Text style={[styles.september1st2023, styles.dateTimeTypo]}>
          September 1st, 2023 | 12:00 PM
        </Text>
      </View>
      <Image
        style={[styles.iphone145Child, styles.tabsPosition1]}
        contentFit="cover"
        source={require("../assets/vector-43.png")}
      />
      <View style={[styles.tabs, styles.tabsPosition1]}>
        <Text style={[styles.activeNow, styles.activeNowTypo]}>Active Now</Text>
        <Text style={[styles.completed, styles.completedTypo]}>Completed</Text>
        <Text style={[styles.cancelled, styles.completedTypo]}>Cancelled</Text>
        <Image
          style={[styles.tabsChild, styles.tabsPosition]}
          contentFit="cover"
          source={require("../assets/vector-41.png")}
        />
        <Image
          style={[styles.tabsItem, styles.tabsPosition]}
          contentFit="cover"
          source={require("../assets/vector-42.png")}
        />
      </View>
      <View style={[styles.nav, styles.navPosition]}>
        <View style={[styles.homeIndicatorLight, styles.locationIconPosition]}>
          <View style={styles.homeIndicator} />
        </View>
        <Image
          style={[styles.commentMessageIcon, styles.iconCardLayout]}
          contentFit="cover"
          source={require("../assets/comment-message.png")}
        />
        <Image
          style={[styles.cardIcon1, styles.iconCardLayout]}
          contentFit="cover"
          source={require("../assets/card.png")}
        />
        <Image
          style={[styles.profileIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/profile.png")}
        />
        <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        <Text style={[styles.bookings, styles.homeTypo]}>Bookings</Text>
        <Text style={[styles.inbox, styles.homeTypo]}>Inbox</Text>
        <Text style={[styles.wallet, styles.homeTypo]}>Wallet</Text>
        <Text style={[styles.profile, styles.homeTypo]}>Profile</Text>
        <Image
          style={[styles.homeIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/home.png")}
        />
        <Image
          style={styles.bookFillIcon}
          contentFit="cover"
          source={require("../assets/bookfill.png")}
        />
      </View>
      <View style={[styles.driverDetails, styles.driverDetailsLayout]}>
        <Text style={[styles.anwarJibawi, styles.anwarJibawiPosition]}>
          Anwar Jibawi
        </Text>
        <Text style={[styles.mrAf212, styles.activeTypo]}>MR-AF-212</Text>
        <Text style={[styles.hyundaiSonata, styles.anwarJibawiPosition]}>
          Hyundai Sonata
        </Text>
        <Image
          style={[styles.maskGroupIcon, styles.driverDetailsLayout]}
          contentFit="cover"
          source={require("../assets/mask-group.png")}
        />
        <View style={[styles.driverDetailsChild, styles.childBg]} />
        <Text style={[styles.active, styles.activeTypo]}>Active</Text>
      </View>
      <View style={styles.locations}>
        <Text
          style={[styles.myCurrentLocation, styles.myCurrentLocationTypo]}
        >{`My Current Location.    `}</Text>
        <Text style={[styles.unitedBankLimited, styles.myCurrentLocationTypo]}>
          United Bank Limited
        </Text>
        <Text style={[styles.oakAveSan, styles.oakAveSanTypo]}>
          35 Oak Ave. San Andreas.
        </Text>
        <Text style={[styles.bankSquareAl, styles.oakAveSanTypo]}>
          Bank Square, AL 63652
        </Text>
        <Image
          style={[styles.locationFillIcon, styles.iconCardLayout]}
          contentFit="cover"
          source={require("../assets/locationfill1.png")}
        />
        <Image
          style={[styles.locateIcon, styles.locateIconLayout]}
          contentFit="cover"
          source={require("../assets/selected-option.png")}
        />
        <Image
          style={[styles.dotsIcon, styles.iconCardLayout]}
          contentFit="cover"
          source={require("../assets/dots.png")}
        />
      </View>
      <Image
        style={[styles.mapIcon, styles.iconCardLayout]}
        contentFit="cover"
        source={require("../assets/map1.png")}
      />
      <Image
        style={[styles.locateIcon1, styles.locateIconLayout]}
        contentFit="cover"
        source={require("../assets/selected-option.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  navPosition: {
    left: "2.05%",
    right: "1.79%",
    width: "96.15%",
    position: "absolute",
  },
  continueLayout: {
    height: 51,
    width: 274,
  },
  childBg: {
    backgroundColor: Color.colorMediumseagreen,
    position: "absolute",
  },
  activeNowTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  iconCardLayout: {
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
  dateTimeTypo: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.arial,
    textAlign: "left",
    position: "absolute",
  },
  tabsPosition1: {
    left: 36,
    position: "absolute",
  },
  completedTypo: {
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  tabsPosition: {
    top: 28,
    maxHeight: "100%",
    position: "absolute",
  },
  locationIconPosition: {
    left: "0%",
    bottom: "0%",
  },
  iconPosition: {
    top: "1.23%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homeTypo: {
    fontFamily: FontFamily.interRegular,
    top: 32,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  driverDetailsLayout: {
    height: 68,
    position: "absolute",
  },
  anwarJibawiPosition: {
    left: 83,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  activeTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  myCurrentLocationTypo: {
    left: 35,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
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
  locateIconLayout: {
    width: 18,
    height: 18,
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
  continueButtonChild: {
    borderRadius: Border.br_6xl_5,
    height: 51,
    width: 274,
    left: 0,
    top: 0,
  },
  trackDriver: {
    top: 14,
    left: 92,
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  continueButton: {
    top: 691,
    left: 67,
    position: "absolute",
  },
  myBookings: {
    top: 56,
    left: 140,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
  },
  locationIcon: {
    height: "95.45%",
    width: "5.47%",
    top: "4.55%",
    right: "94.53%",
    maxHeight: "100%",
    left: "0%",
    bottom: "0%",
  },
  clocktimeIcon: {
    height: "100%",
    width: "7.07%",
    top: "0%",
    right: "55.95%",
    left: "36.98%",
    maxHeight: "100%",
    bottom: "0%",
    maxWidth: "100%",
  },
  cardIcon: {
    height: "68.18%",
    width: "6.75%",
    top: "18.18%",
    right: "19.29%",
    bottom: "13.64%",
    left: "73.95%",
    maxHeight: "100%",
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
    top: "27.84%",
    right: "10.26%",
    bottom: "69.55%",
    left: "10%",
    position: "absolute",
  },
  dateTime: {
    fontSize: FontSize.size_base,
    left: 0,
    top: 0,
  },
  september1st2023: {
    left: 120,
    fontSize: FontSize.size_sm,
    top: 2,
    color: Color.colorGray_200,
  },
  dateAndTime: {
    top: 267,
    left: 40,
    width: 322,
    height: 18,
    position: "absolute",
  },
  iphone145Child: {
    top: 307,
    width: 317,
    maxHeight: "100%",
  },
  activeNow: {
    color: Color.colorMediumseagreen,
    left: 2,
    fontSize: FontSize.size_base,
    top: 0,
  },
  completed: {
    left: 123,
  },
  cancelled: {
    left: 238,
  },
  tabsChild: {
    width: 317,
    left: 0,
  },
  tabsItem: {
    width: 90,
    left: 2,
  },
  tabs: {
    top: 93,
    width: 320,
    height: 28,
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
    height: "41.98%",
    top: "58.02%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  commentMessageIcon: {
    height: "27.16%",
    width: "7.47%",
    top: "3.7%",
    right: "45.6%",
    left: "46.93%",
    bottom: "69.14%",
    maxHeight: "100%",
  },
  cardIcon1: {
    height: "23.46%",
    top: "4.94%",
    right: "26.4%",
    bottom: "71.6%",
    left: "66.67%",
    width: "6.93%",
    maxHeight: "100%",
  },
  profileIcon: {
    height: "32.1%",
    width: "6.4%",
    right: "7.73%",
    bottom: "66.67%",
    left: "85.87%",
  },
  home: {
    left: 31,
    color: Color.colorBlack,
  },
  bookings: {
    left: 95,
    color: Color.colorMediumseagreen,
  },
  inbox: {
    left: 174,
    color: Color.colorBlack,
  },
  wallet: {
    left: 246,
    color: Color.colorBlack,
  },
  profile: {
    left: 316,
    color: Color.colorBlack,
  },
  homeIcon: {
    height: "29.63%",
    right: "83.73%",
    left: "9.33%",
    width: "6.93%",
    bottom: "69.14%",
  },
  bookFillIcon: {
    left: 106,
    width: 25,
    height: 23,
    top: 0,
    position: "absolute",
  },
  nav: {
    height: "9.6%",
    top: "90.17%",
    bottom: "0.24%",
  },
  anwarJibawi: {
    top: 16,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  mrAf212: {
    top: 44,
    left: 267,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  hyundaiSonata: {
    top: 40,
    fontFamily: FontFamily.poppinsRegular,
  },
  maskGroupIcon: {
    width: 68,
    left: 0,
    top: 0,
  },
  driverDetailsChild: {
    left: 280,
    borderRadius: 10,
    width: 52,
    height: 26,
    top: 16,
  },
  active: {
    top: 20,
    left: 287,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorWhite,
  },
  driverDetails: {
    top: 142,
    width: 333,
    left: 31,
  },
  myCurrentLocation: {
    top: 0,
  },
  unitedBankLimited: {
    top: 72,
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
    maxHeight: "100%",
  },
  locateIcon: {
    top: 3,
    left: 0,
  },
  dotsIcon: {
    top: 35,
    left: 9,
    height: 36,
  },
  locations: {
    top: 323,
    left: 91,
    width: 193,
    height: 112,
    position: "absolute",
  },
  mapIcon: {
    height: "19.41%",
    width: "67.95%",
    top: "55.45%",
    right: "15.38%",
    bottom: "25.14%",
    left: "16.67%",
    maxHeight: "100%",
  },
  locateIcon1: {
    top: 501,
    left: 229,
  },
  iphone145: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone142;
