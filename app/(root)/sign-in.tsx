import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

// constants
import images from "@/constants/images";
import icons from "@/constants/icons";

// services
import { login } from "@/lib/appwrite";

const SignIn = () => {
  const handleOnPress = async () => {
    const result = await login();

    if (result) {
      console.log("login success");
    } else {
      Alert.alert("Login failed");
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6 "
          resizeMode="contain"
        />

        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-black-200">
            Welcome to NestFind
          </Text>

          <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">
            Let's Get Closer to {"\n"}
            <Text className="text-primary-300">Your Ideal Home</Text>
          </Text>

          <Text className="text-center text-black-200 mt-12 font-rubik text-lg">
            Login to NestFind with Google
          </Text>

          <TouchableOpacity
            onPress={() => handleOnPress()}
            className="bg-white shadow-md shadow-zinc-300 w-full rounded-full py-4 mt-5"
          >
            <View className="flex flex-row items-center justify-center">
              <Image
                source={icons.google}
                resizeMode="contain"
                className="w-5 h-5"
              />

              <Text className="text-lg text-black-300 font-rubik-medium ml-2 ">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
