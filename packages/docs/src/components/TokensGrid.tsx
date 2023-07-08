import styles from '../styles/TokensGrid.module.css';

type Props = {
  tokens: Record<string, string>;
};

export const TokensGrid = ({ tokens }: Props) => (
  <table className={styles.table}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      {Object.entries(tokens).map(([key, value]) => (
        <tr key={key}>
          <td>{key}</td>
          <td>{value}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
