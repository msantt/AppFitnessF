import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    Signup: undefined;
  };

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

