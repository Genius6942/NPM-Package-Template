import styles from "rollup-plugin-styles";
import { terser } from "rollup-plugin-terser";

const name = 'replitNpmTemplate';

export default [
  {
    input: "src/index.js",
    output: [
      {
        format: "esm",
        name: name,
        file: "dist/" + name + ".module.js",
        indent: "\t"
      },
    ],
    plugins: [styles()],
  },
  
  {
    input: "src/index.js",
    output: [
      {
        format: "umd",
        name: name,
        file: "dist/" + name + ".js",
        indent: "\t",
      },
      {
        format: "cjs",
        name: name,
        file: "dist/" + name + ".cjs",
        indent: "\t",
      },
    ],
    plugins: [styles()],
  },

  {
    input: "src/index.js",
    output: [
      {
        format: "umd",
        name: name,
        file: "dist/" + name + ".min.js",
        indent: "\t",
      },
    ],
    plugins: [styles(), terser()],
  },
];
