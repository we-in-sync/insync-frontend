// components/common/AnimatedStepIndicator.js - Simplified Version
import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import { Check } from 'react-native-feather'; // Or your preferred icon library

const AnimatedStepIndicator = ({ currentStep, totalSteps }) => {
    // Create animation values for each step
    const animatedValues = useRef(
        Array(totalSteps).fill().map(() => new Animated.Value(0))
    ).current;

    // Update animations when step changes
    useEffect(() => {
        // Animate all steps
        animatedValues.forEach((anim, index) => {
            Animated.timing(anim, {
                toValue: index + 1 < currentStep ? 2 : index + 1 === currentStep ? 1 : 0,
                duration: 300,
                useNativeDriver: false, // IMPORTANT: Must be false for color animations
            }).start();
        });
    }, [currentStep, animatedValues]);

    return (
        <View style={styles.container}>
            {Array.from({ length: totalSteps }).map((_, index) => (
                <View key={index} style={styles.stepContainer}>
                    {/* Step Circle */}
                    <Animated.View
                        style={[
                            styles.stepCircle,
                            {
                                // Use backgroundColor interpolation with useNativeDriver: false
                                backgroundColor: animatedValues[index].interpolate({
                                    inputRange: [0, 1, 2],
                                    outputRange: ['#6b7280', '#f5f5f4', '#4ade80'] // inactive, active, completed
                                }),
                            }
                        ]}
                    >
                        {/* Number or Checkmark */}
                        {index + 1 < currentStep ? (
                            <Check width={16} height={16} color="#fff" />
                        ) : (
                            <Text style={[
                                styles.stepText,
                                { color: index + 1 === currentStep ? '#1c1917' : '#e7e5e4' }
                            ]}>
                                {index + 1}
                            </Text>
                        )}
                    </Animated.View>

                    {/* Connecting Line (if not last step) */}
                    {index < totalSteps - 1 && (
                        <Animated.View
                            style={[
                                styles.stepLine,
                                {
                                    backgroundColor: index + 1 < currentStep ? '#4ade80' : '#6b7280',
                                }
                            ]}
                        />
                    )}
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
    },
    stepContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    stepCircle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    stepText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    stepLine: {
        height: 3,
        width: 40,
    },
});

export default AnimatedStepIndicator;