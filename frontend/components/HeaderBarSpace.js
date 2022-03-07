import { Text } from '@nextui-org/react';
import { Grid } from '@nextui-org/react';
import Link from 'next/link'

const css = {
    wrapperPlaceholder: {
        height: '60px',
        width: `100%`,
        backgroundColor: `white`,
    },
}

function HeaderBarSpace() {
    return ( 
        <div style={css.wrapperPlaceholder}></div>
    );
}

export default HeaderBarSpace;