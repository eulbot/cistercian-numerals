import { useState } from 'react'
import { Cistercian } from './constants';
import './styles/cistercian.scss'

export const App = () => {

    const [value, setValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        var value = event.target.value;
        setValue(value ? value.replace(/\D/g, '') : '');
    }

    const shift = (coords: [number, number][], rt: boolean, offset: number) => {

        return coords.map(a => {

            let x = rt ? a[0] * -1 : a[0];
            let y = a[1] + offset;

            return [x, y];
        });
    }

    const createPath = (value: string, lr = false, offset = 0) => {

        // Static center bar
        let path = 'M 0 -1.5 L 0 1.5 ';

        for(let i = 0; i < value.length; i++) {

            // Shift coordinates according to digit position
            // Digit 1 and 3 are horizontally mirrored
            let rl = i % 2 !== 0;

            // Digit 0 and 1 have negative vertical offset, 2 and 3 positive
            let offset = (i == 0 || i == 1) ? -1.5 : .5;

            let coords = shift(Cistercian[parseInt(value[value.length - i - 1])], rl, offset);

            path += ' M ' + coords[0].join(' ');
            path += ' L ' + coords.slice(1).map(a => a.join(', '));
        }

        return path;
    }

    return (

        <>
            <span className="input">
                <input type="text" name="value" maxLength={4} value={value} onChange={handleChange} />
            </span>

            <div className="digit">
                <svg viewBox="-1.1 -1.6 2.2 3.2">
                    <path d={createPath(value)} />
                </svg>
            </div>
        </>
    )
}
