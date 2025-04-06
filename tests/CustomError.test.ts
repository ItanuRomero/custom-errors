import { describe, it, expect } from 'vitest';
import { CustomError } from '../src/CustomError';

describe('CustomError', () => {
  it('should create a custom error', () => {
    const err = new CustomError('fail', 'E_FAIL');
    expect(err.message).toBe('fail');
    expect(err.code).toBe('E_FAIL');
  });
});
