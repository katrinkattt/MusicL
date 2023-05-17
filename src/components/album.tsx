import React from 'react';
import type { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';
import { AcentColor, MainText } from '../style/theme';

type AlbumSectionProps = PropsWithChildren<{
  title?: string;
  // children?: JSX.Element;
}>;

export const AlbumSection = ({ title }: AlbumSectionProps): JSX.Element => {
  return (
    <View style={styles.sectionContainer}>
      <MainText text={title} size={18} style={styles.albumTitle} />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    margin: 20,
    paddingHorizontal: 24,
  },
  albumTitle: {
    fontWeight: '600',
    color: AcentColor,
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
