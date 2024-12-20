import styles from './styles.module.scss';

function Text({ children, color }: { children?: JSX.Element | string; color?: 'white' | 'black' }) {
  return <p className={`${styles.text} ${color && styles[color]}`}>{children}</p>;
}

export default Text;
