import { Roboto, Kanit } from '@next/font/google';

const roboto_init = Roboto({
    subsets: ['latin'],
    weight: ['100', '400', '700'],
    variable: '--font-roboto',
});

const kanit_init = Kanit({
    subsets: ['thai'],
    weight: ['100', '400', '700'],
    variable: '--font-kanit',
});

export const roboto = roboto_init.variable;
export const kanit = kanit_init.variable;