import {describe, expect, it , vi} from 'vitest';
import { generateReportData } from './data';

it('should call callback function', () => {
    const logger = vi.fn();
    generateReportData(logger);
    expect(logger).toBeCalled();
})