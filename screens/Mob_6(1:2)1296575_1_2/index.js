import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f4577739-4e7a-4724-b4a6-c1ba402cc8da"
        }}
        style={styles.ImageBackground_1_3}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38f365d3-1834-42d0-8263-58e67f8b1cd1"
        }}
        style={styles.ImageBackground_1_4}
      />
      <View style={styles.View_1_5}>
        <View style={styles.View_1_6}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4a012d01-ce3d-469c-8cc6-a7e951cff2bb"
            }}
            style={styles.ImageBackground_1_7}
          />
        </View>
        <View style={styles.View_1_8}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c638c19b-980c-4ad2-842b-9b55c9debb82"
            }}
            style={styles.ImageBackground_1_9}
          />
        </View>
      </View>
      <View style={styles.View_1_10}>
        <View style={styles.View_1_11}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b991fda-ccbf-411c-a63d-2e568c24f811"
            }}
            style={styles.ImageBackground_1_12}
          />
        </View>
        <View style={styles.View_1_13}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b217c57a-6bf0-45e5-b603-eeed5e9bb4b1"
            }}
            style={styles.ImageBackground_1_14}
          />
        </View>
      </View>
      <View style={styles.View_1_15}>
        <View style={styles.View_1_16}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c0439468-163d-40d5-acc4-0fe46f8bb55b"
            }}
            style={styles.ImageBackground_1_17}
          />
        </View>
        <View style={styles.View_1_18}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4300397b-c18a-46e6-9043-ee5ca12583ce"
            }}
            style={styles.ImageBackground_1_19}
          />
        </View>
      </View>
      <View style={styles.View_1_20}>
        <View style={styles.View_1_21}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b405084e-f76f-4309-8e6e-d20f077b1181"
            }}
            style={styles.ImageBackground_1_22}
          />
        </View>
        <View style={styles.View_1_23}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d0b527da-d354-42cb-afe5-7d519bed26d9"
            }}
            style={styles.ImageBackground_1_24}
          />
        </View>
        <View style={styles.View_1_25}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ab38d563-dcff-44e2-b9b3-1b46e4457989"
            }}
            style={styles.ImageBackground_1_26}
          />
        </View>
      </View>
      <View style={styles.View_1_27}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b03295f9-6ff3-4711-8aed-478ef09e06bc"
          }}
          style={styles.ImageBackground_1_28}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("257%") },
  ImageBackground_1_3: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("103%"),
    minHeight: hp("103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("154%")
  },
  ImageBackground_1_4: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("103%"),
    minHeight: hp("103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("27%")
  },
  View_1_5: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("304%"),
    minHeight: hp("304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("-23%")
  },
  View_1_6: {
    width: wp("22%"),
    height: hp("148%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(246, 248, 254, 1)",
    overflow: "hidden"
  },
  ImageBackground_1_7: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("148%"),
    minHeight: hp("148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_8: {
    width: wp("22%"),
    height: hp("148%"),
    top: hp("156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(246, 248, 254, 1)",
    overflow: "hidden"
  },
  ImageBackground_1_9: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("148%"),
    minHeight: hp("148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_10: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("303%"),
    minHeight: hp("303%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("-23%")
  },
  View_1_11: {
    width: wp("22%"),
    height: hp("148%"),
    top: hp("155%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(246, 248, 254, 1)",
    overflow: "hidden"
  },
  ImageBackground_1_12: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("148%"),
    minHeight: hp("148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_13: {
    width: wp("22%"),
    height: hp("148%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(246, 248, 254, 1)",
    overflow: "hidden"
  },
  ImageBackground_1_14: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("148%"),
    minHeight: hp("148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_15: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("304%"),
    minHeight: hp("304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("-102%")
  },
  View_1_16: {
    width: wp("22%"),
    height: hp("148%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(246, 248, 254, 1)",
    overflow: "hidden"
  },
  ImageBackground_1_17: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("148%"),
    minHeight: hp("148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_18: {
    width: wp("22%"),
    height: hp("148%"),
    top: hp("156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(246, 248, 254, 1)",
    overflow: "hidden"
  },
  ImageBackground_1_19: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("148%"),
    minHeight: hp("148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_20: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("460%"),
    minHeight: hp("460%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("-101%")
  },
  View_1_21: {
    width: wp("22%"),
    height: hp("148%"),
    top: hp("156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(246, 248, 254, 1)",
    overflow: "hidden"
  },
  ImageBackground_1_22: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("148%"),
    minHeight: hp("148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_23: {
    width: wp("22%"),
    height: hp("148%"),
    top: hp("312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(246, 248, 254, 1)",
    overflow: "hidden"
  },
  ImageBackground_1_24: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("148%"),
    minHeight: hp("148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_25: {
    width: wp("22%"),
    height: hp("148%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(246, 248, 254, 1)",
    overflow: "hidden"
  },
  ImageBackground_1_26: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("148%"),
    minHeight: hp("148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_27: {
    width: wp("22%"),
    height: hp("148%"),
    top: hp("211%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    backgroundColor: "rgba(246, 248, 254, 1)",
    overflow: "hidden"
  },
  ImageBackground_1_28: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("148%"),
    minHeight: hp("148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
