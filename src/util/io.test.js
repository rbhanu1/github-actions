import {it, describe, expect, vi} from 'vitest';
import writeData from './io'
import {promises as fs} from 'fs'
import exp from 'constants';

vi.mock('fs');
vi.mock('path', () => {
  return {
    default: {
      join: (...args)=> {
        return args[args.length -1 ];
      }
    }
  }
})


it('should call writeFile function', ()=> {
  const data = 'test text';
  //writeData(data, 'test-file.txt');
  //return expect(writeData(data, 'test-file.txt')).resolves.toBeUndefined();
})

it('should call writeFile function using mock', ()=> {
  const data = 'test text';
  const filename = 'test-file2.txt';
  writeData(data, filename);
  //expect(fs.writeFile).toBeCalled();
  expect(fs.writeFile).toBeCalledWith(filename, data);
})