import { TouchableOpacity } from "react-native";
import { Text } from "react-native";

const Index = ({
  marginTop,
  backgroundColor,
  width,
  position,
  ZIndex,
  height,
  lable,
  justifyContent,
  fontFamily,
  marginHorizontal,
  alignItems,
  onPress,
  marginBottom,
  borderTopStartRadius,
  borderBottomEndRadius,
  elevation,
  color,
  fontSize,
  fontWeight,
  lineHeight,
}) => {
  // const theme = useTheme();
  // const { themeColor, setThemeColor } = usethemeContext();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ZIndex: ZIndex ? ZIndex : null,
        marginTop: marginTop ? marginTop : 41,
        marginBottom: marginBottom ? marginBottom : null,
        backgroundColor: backgroundColor ? backgroundColor : "#F6851F",
        marginHorizontal: marginHorizontal ? marginHorizontal : 0,
        position: position ? position : "",
        ...Platform.select({
          ios: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.4,
            shadowRadius: 4,
          },
          android: {
            elevation: elevation ? elevation : 20,
          },
        }),
        borderTopStartRadius: borderTopStartRadius ? borderTopStartRadius : 10,
        borderBottomEndRadius: borderBottomEndRadius ? borderBottomEndRadius : 10,
        width: width ? width : 115,
        height: height ? height : 34,
        justifyContent: justifyContent ? justifyContent : "center",
        alignItems: alignItems ? alignItems : "center",
      }}
    >
      <Text
        style={{
          color: color ? color : "#fff",
          fontSize: fontSize ? fontSize : 20,
          // fontFamily: fontFamily ? fontFamily : "Poppins-SemiBold",
          fontWeight: fontWeight ? fontWeight : 700,
          lineHeight: lineHeight ? lineHeight : 30,
        }}
      >
        {lable ? lable : "Continue"}
      </Text>
    </TouchableOpacity>
  );
};
export default Index;
