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
          app: './src/app',
          routers: './src/routers',
          assets: './src/assets',
        },
      },
    ],
  ],
};
