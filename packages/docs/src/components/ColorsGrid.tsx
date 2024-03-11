import { colors } from '@ejc-ui/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    if (key.endsWith('-gradient')){
      const color1 = '#' + color.split('#')[2].split(' ')[0]
      const color2 = '#' + color.split('#')[1].split(' ')[0]
      return(
        <div key={key} style={{ background: color, padding: '2rem' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'monospace',
            }}
          >
            <strong style={{ color: getContrast(color1, '#FFF') < 3.5 ? '#000' : '#FFF' }}>
              ${key}
            </strong>
            <span style={{ color: getContrast(color2, '#FFF') < 3.5 ? '#000' : '#FFF' }}>{color1} to {color2}</span>
          </div>
        </div>
      );
    }
    return (
      <div key={key} style={{ background: color, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF',
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}
