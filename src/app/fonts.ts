import localFont from 'next/font/local';

export const manrope = localFont({
  src: './fonts/Manrope-Variable.woff2',
  variable: '--font-manrope',
  display: 'swap',
});

export const bespokeSans = localFont({
  src: [
    {
      path: './fonts/BespokeSans-Variable.woff2',
      style: 'normal',
    },
    {
      path: './fonts/BespokeSans-VariableItalic.woff2',
      style: 'italic',
    },
  ],
  variable: '--font-bespoke-sans',
  display: 'swap',
}); 