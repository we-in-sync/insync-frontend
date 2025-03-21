import React, { useEffect, useRef } from 'react';
import { View, Text, Animated } from 'react-native';
import { Check } from 'react-native-feather';

const StepIndicator = ({ currentStep, totalSteps }) => {
    const animatedValues = useRef(
        Array(totalSteps).fill().map(() => new Animated.Value(0))
    ).current;

    useEffect(() => {
        animatedValues.forEach((anim, index) => {
            Animated.timing(anim, {
                toValue: index + 1 < currentStep ? 1 :
                    index + 1 === currentStep ? 0.5 : 0,
                duration: 300,
                useNativeDriver: false,
            }).start();
        });
    }, [currentStep]);

    return (
        <View className="flex-row justify-center items-center my-5">
            {Array.from({ length: totalSteps }).map((_, index) => {
                const backgroundColor = animatedValues[index].interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: ['#6b7280', '#e2e0d4', '#22c55e']
                });

                const lineColor = animatedValues[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: ['#6b7280', '#22c55e']
                });

                return (
                    <View key={index} className="flex-row items-center">
                        <Animated.View
                            style={{
                                width: 32,
                                height: 32,
                                borderRadius: 16,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor,
                            }}
                        >
                            {index + 1 < currentStep ? (
                                <Check width={16} height={16} color="#fff" />
                            ) : (
                                <Text
                                    style={{
                                        fontSize: 14,
                                        fontWeight: 'bold',
                                        color: index + 1 === currentStep ? '#121212' : '#e2e0d4',
                                    }}
                                >
                                    {index + 1}
                                </Text>
                            )}
                        </Animated.View>

                        {index < totalSteps - 1 && (
                            <Animated.View
                                style={{
                                    height: 2,
                                    width: 40,
                                    backgroundColor: lineColor,
                                }}
                            />
                        )}
                    </View>
                );
            })}
        </View>
    );
};

export default StepIndicator;