import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProfileCard() {
const photoSource = { uri: 'https://media.licdn.com/dms/image/v2/D4D03AQFtzFn-fewgPA/profile-displayphoto-scale_400_400/B4DZng2.KFGQAg-/0/1760414132139?e=1764806400&v=beta&t=hy9X5BfFs8U_qpUhH6XHYcnjAJIqcBGOt5vjZ8fsl84' };

  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>
        <View style={styles.header} />

        <Image source={photoSource} style={styles.avatar} />

        <View style={styles.info}>
          <Text style={styles.name}>Masroor Ahmed</Text>
          <Text style={styles.id}>ID: SP23-BSCS-0065</Text>
          <Text style={styles.role}>Web Developer</Text>

          <View style={styles.actionsRow}>
            <TouchableOpacity style={styles.cta} activeOpacity={0.8}>
              <Text style={styles.ctaText}>Message</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.cta, styles.outline]} activeOpacity={0.8}>
              <Text style={[styles.ctaText, styles.outlineText]}>Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0F172A',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#0B1220',
    borderRadius: 20,
    overflow: 'hidden',
    // subtle shadow (iOS & Android)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 12,
    alignItems: 'center',
  },
  header: {
    height: 90,
    width: '100%',
    backgroundColor: 'linear-gradient(90deg, #06b6d4, #3b82f6)',
    // fallback solid color background
    backgroundColor: '#0ea5e9',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    marginTop: -55,
    borderWidth: 4,
    borderColor: '#0F172A',
    backgroundColor: '#94a3b8',
  },
  info: {
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  name: {
    marginTop: 12,
    fontSize: 22,
    fontWeight: '700',
    color: '#F8FAFC',
  },
  id: {
    marginTop: 4,
    fontSize: 14,
    color: '#94A3B8',
  },
  role: {
    marginTop: 8,
    fontSize: 16,
    color: '#C7F9FF',
    fontWeight: '600',
  },
  actionsRow: {
    marginTop: 16,
    flexDirection: 'row',
    gap: 12,
  },
  cta: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 12,
    backgroundColor: '#06b6d4',
    marginHorizontal: 6,
  },
  ctaText: {
    color: '#041622',
    fontWeight: '700',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#94A3B8',
  },
  outlineText: {
    color: '#94A3B8',
  },
});
