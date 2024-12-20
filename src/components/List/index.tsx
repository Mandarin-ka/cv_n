import styles from './styles.module.scss';
import Text from '../Text';
import H from '../H';

function List({
  elements,
  isDecorated,
  h,
  textstyle,
  fz,
  a,
}: {
  elements: string[];
  isDecorated?: boolean;
  h: string;
  textstyle?: 'black' | 'white';
  fz?: number;
  a?: string;
}) {
  return (
    <div className={`${styles.list}  ${textstyle && styles[textstyle]} ${isDecorated && styles.decorated}`}>
      <H color={textstyle} fz={fz}>
        {h}
      </H>
      <ul className={`${styles.ul} ${isDecorated && styles.decorated}`}>
        {elements.map((e) => (
          <li key={e} className={styles.li}>
            {a ? (
              <a href={e}>
                <Text color={textstyle}>{e}</Text>
              </a>
            ) : (
              <Text color={textstyle}>{e}</Text>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
