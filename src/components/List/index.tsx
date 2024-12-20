import styles from './styles.module.scss';
import Text from '../Text';
import H from '../H';

function List({
  elements,
  isDecorated,
  h,
  textstyle,
  fz,
}: {
  elements: string[];
  isDecorated?: boolean;
  h: string;
  textstyle?: 'black' | 'white';
  fz?: number;
}) {
  return (
    <div className={`${styles.list}  ${textstyle && styles[textstyle]} ${isDecorated && styles.decorated}`}>
      <H color={textstyle} fz={fz}>
        {h}
      </H>
      <ul className={`${styles.ul} ${isDecorated && styles.decorated}`}>
        {elements.map((e) => (
          <li key={e} className={styles.li}>
            <Text color={textstyle}>{e}</Text>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
