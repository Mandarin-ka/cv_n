import styles from './styles.module.scss';

function H({ children, color = 'black', fz }: { children: string; color?: 'black' | 'white'; fz?: number }) {
  return (
    <h2 className={styles.h + ' ' + styles[color]} style={{ fontSize: fz + 'px' }}>
      {children}
    </h2>
  );
}

export default H;
