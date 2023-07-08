import styles from './styles.module.scss';

type Props = {
  tokens: Record<string, string>;
};

export const TokensGrid = ({ tokens }: Props) => (
  <div className={styles.grid}>
    {Object.entries(tokens).map(([key, value]) => (
      <div key={key}>
        <strong>{key}</strong>
        <span>{value}</span>
      </div>
    ))}
  </div>
);
