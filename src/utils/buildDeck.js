import shuffle from 'lodash.shuffle';
import FontAwesomeClasses from './fontAwesomeClasses';
const NUM_CARDS = 20;
export default () => {
  const fontAwesomeClasses = FontAwesomeClasses();
  let cardsList = [];
  while (cardsList.length < NUM_CARDS) {
    const index = Math.floor(Math.random() * fontAwesomeClasses.length);
    const card = {
      icon: fontAwesomeClasses.splice(index, 1)[0],
      wasSuccessfull: false
    };
    cardsList.push(card);
    cardsList.push({...card});
  }
  return shuffle(cardsList);
};
