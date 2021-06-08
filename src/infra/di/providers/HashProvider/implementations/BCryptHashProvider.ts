import { hash, compare } from 'bcrypt';

import { HashProvider } from '../models/HashProvider';

class BCryptHashProvider implements HashProvider {
  public async generateHash(payload: string, bits: number): Promise<string> {
    return hash(payload, bits);
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }
}

export { BCryptHashProvider };
