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
      <h2 data-testid="example-component" className={styles.title}>
        Example Component
      </h2>
      <h3
        data-testid="example-component-counter-text"
        className={styles.subtitle}
      >
        Counter: {counterValue}
      </h3>
      <div className={styles.interface}>
        <button
          data-testid="example-button-addOne"
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
      </div>
    </>
  );
};

export default ExampleComponent;
