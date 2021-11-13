import { extendTheme } from '@chakra-ui/react';
import { globalStyles } from './styles';

export const FONTS = {
  body: 'Inter'
};

const overrides = {
  fonts: FONTS,
  ...globalStyles,
  components: {}
};

export default extendTheme(overrides);
