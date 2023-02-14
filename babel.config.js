module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          screens: './src/screens',
          components: './src/components',
          routers: './src/routers',
          assets: './src/assets',
          lib: './src/lib',
          services: './src/services',
          store: './src/store',
          interfaces: './src/interfaces',
          styles: './src/styles',
          constants: './src/constants',
        },
      },
    ],
  ],
};
