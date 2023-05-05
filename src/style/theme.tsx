import { useColorScheme, View, Text, Dimensions } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const AcentColor = '#ff4002';
export const ScreenWidth = Dimensions.get('window').width;
export const ScreenHeight = Dimensions.get('window').height;

export const MainThemeColor = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = !isDarkMode ? '#000' : Colors.lighter;
  return theme;
};

export const MainTheme = ({ children }: MainThemeProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: !isDarkMode ? '#000' : Colors.lighter,
    height: '100%',
  };
  return <View style={backgroundStyle}>{children}</View>;
};
export declare interface MainThemeProps {
  children?: JSX.Element;
}

export const MainText = ({ text, size, style, children }: MainTextProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    color: isDarkMode ? Colors.darker : '#fff',
    fontSize: size,
    ...style,
  };
  return (
    <>
      <Text style={backgroundStyle}>{text || children}</Text>
    </>
  );
};
export declare interface MainTextProps {
  text?: string;
  size?: Number;
  style?: React.CSSProperties;
  children?: JSX.Element;
}
