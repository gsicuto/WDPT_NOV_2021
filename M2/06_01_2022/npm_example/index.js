import chalk from 'chalk';
import axios from 'axios';

console.log(chalk.red('Hello world!'));

axios.get('https://restcountries.com/v2/name/peru')
.then(result => console.log(result));