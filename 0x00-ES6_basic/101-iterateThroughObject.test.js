import createEmployeesObject from "./11-createEmployeesObject.js";
import createReportObject from './12-createReportObject.js';
import createIteratorObject from './100-createIteratorObject.js';
import iterateThroughObject from './101-iterateThroughObject.js';

test('Correctly iterates through object', () => {
  const employees = {
    ...createEmployeesObject('engineering', ['John Doe', 'Guillaume Salva']),
    ...createEmployeesObject('design', ['Kanye East', 'Jay Li'])
  };

  const report = createReportObject(employees);
  const reportWithIterator = createIteratorObject(report);
  const result = iterateThroughObject(reportWithIterator);

  expect(result).toBe('John Doe | Guillaume Salva | Kanye East | Jay Li');
});

