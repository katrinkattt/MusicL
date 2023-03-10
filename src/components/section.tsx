import React from 'react';
import type { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';
import { MainText } from '../style/theme';

type SectionProps = PropsWithChildren<{
  title?: string;
  text?: string;
  children?: JSX.Element;
}>;

export const Section = ({ children, title, text }: SectionProps): JSX.Element => {
  return (
    <View style={styles.sectionContainer}>
      <MainText text={title} size={24} style={styles.sectionTitle} />
      <MainText text={text} style={styles.sectionDescription} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    margin: 30,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
