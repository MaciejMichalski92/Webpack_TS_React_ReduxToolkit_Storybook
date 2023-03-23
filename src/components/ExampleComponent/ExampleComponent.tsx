import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  decrementByOne,
  increaseByMany,
  increaseByOne
} from './ExampleComponent-slice';

import styles from './ExampleComponent.module.scss';

const ExampleComponent = () => {
  const counterValue = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  const handleClick = (caseStr: string, number = 1) => {
    switch (caseStr) {
      case 'addOne':
        dispatch(increaseByOne());
        break;
      case 'subtractOne':
        dispatch(decrementByOne());
        break;
      case 'addValue':
        dispatch(increaseByMany(number));
        break;

      default:
        break;
    }
  };

  return (
    <>
      <h2 className={styles.exampleStyle}>
        Example Counter: {counterValue}
      </h2>
      <button
        className={styles.button}
        onClick={() => handleClick('addOne')}
      >
        +1
      </button>
      <button
        className={styles.button}
        onClick={() => handleClick('subtractOne')}
      >
        -1
      </button>
      <button
        className={styles.button}
        onClick={() => handleClick('addValue', 5)}
      >
        +5
      </button>
    </>
  );
};

export default ExampleComponent;
