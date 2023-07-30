import '../styles/TokensGrid.scss';

type Props = {
  tokens: Record<string, string>;
  hasRemValue?: boolean;
};

export const TokensGrid = ({ hasRemValue = false, tokens }: Props) => (
  <div className="grid">
    {Object.entries(tokens).map(([key, value]) => (
      <div key={key}>
        <strong>{key}</strong>

        <p>
          <span>{value}</span>
          {hasRemValue && <span>{Number(value.replace('rem', '')) * 16}px</span>}
        </p>
      </div>
    ))}
  </div>
);
