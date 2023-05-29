module.exports = {
    "env": {
       "test": {
           presets: [
               '@babel/preset-env',
               ['@babel/preset-react', {runtime: 'automatic'}],
               "next/babel",
           ],
       },
       "dev": {
           presets: [
               "next/babel"
           ]
       }
    }

};
