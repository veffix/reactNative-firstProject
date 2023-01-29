import { View, Text, StyleSheet, Alert } from "react-native";
import { useState, useEffect } from "react";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButtons";

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude)
  }
  else {
    return rndNum
  }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({userNumber, setGameIsOver}) => {
  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userNumber))

  useEffect(() => {
    if(currentGuess === userNumber) setGameIsOver(true)
  }, [currentGuess, userNumber])

  const nextGuessHandler = (direction) => {
    console.log(userNumber)
    if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
    Alert.alert('you lie', "shame on u", [{text: 'sorry', style: 'cancel'}]);
      return;
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess - 1
    }
    else {
      minBoundary = currentGuess + 1
    }
    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
    setCurrentGuess(newRndNumber)
  }
  return <View style={styles.screen}>
   <Title>oppenent's guess</Title>
   <NumberContainer>{currentGuess}</NumberContainer>
  <Text></Text>
    <View>
      <Text>Higher or lower</Text>
      <View>
      <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
      </View>
    </View>
  {/*   <View>LOGS ROUNDS</View> */}
  </View>
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24
  }
})