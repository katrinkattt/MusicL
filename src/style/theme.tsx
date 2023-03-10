import { useColorScheme, View, Text, StyleProp } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const AcentColor = '#ff4002';

export const MainTheme = ({ children }: MainThemeProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
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
    color: !isDarkMode ? Colors.darker : '#fff',
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
