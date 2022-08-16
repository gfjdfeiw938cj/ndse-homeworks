//                                            2 ??????? ??????

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv))
  .usage('Usage: $0 <command> [options]')
  .command('current', 'Current date and time')
  .command('add', 'Future date and time')
  .command('sub', 'Past date and time')
  .example('$0 current --year ', 'current year')
  .alias('y', 'year')
  .describe('y', 'Year')
  .alias('d', 'date')
  .describe('d', 'Date')
  .alias('m', 'month')
  .describe('m', 'Month')
  .demandCommand(1)
  .argv;

const command = argv._[0];

console.log(process.argv)
console.dir(command)
const year = argv.year;
const month = argv.month;
const date = argv.date;

const currentDate = new Date();

switch (command) {
  case 'current':
    if (year) {
      console.log(currentDate.getFullYear())
    } else if (month) {
      console.log(currentDate.getMonth())
    } else if (date) {
      console.log(currentDate.getDate())
    } else {
      console.log(currentDate)
    }
    break;
  case 'add':
    if (year) {
      console.log(new Date(currentDate.getFullYear() + year, currentDate.getMonth(), currentDate.getDate() + 1))
    } else if (month) {
      console.log(new Date(currentDate.getFullYear(), currentDate.getMonth() + month, currentDate.getDate() + 1))
    } else if (date) {
      console.log(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1 + date))
    }
    break;
  case 'sub':
    if (year) {
      console.log(new Date(currentDate.getFullYear() - year, currentDate.getMonth(), currentDate.getDate()))
    } else if (month) {
      console.log(new Date(currentDate.getFullYear(), currentDate.getMonth() - month, currentDate.getDate()))
    } else if (date) {
      console.log(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - date))
    }
    break
}

