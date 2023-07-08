import { colors } from '@tutods-ignite-ui/tokens';
import { getContrast } from 'polished';

export const ColorsGrid = () =>
  Object.entries(colors).map(([key, color]) => (
    <div
      key={key}
      style={{
        backgroundColor: color,
        padding: '2rem',
      }}
    >
      <div
        style={{
          color: getContrast(color, '#FFF') <= 3.5 ? '#000' : '#FFF',
          display: 'flex',
          fontFamily: 'monospace',
          justifyContent: 'space-between',
        }}
      >
        <strong>${key}</strong>

        <span>{color}</span>
      </div>
    </div>
  ));
