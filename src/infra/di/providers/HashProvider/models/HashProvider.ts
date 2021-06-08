interface HashProvider {
  generateHash(payload: string, bits: number): Promise<string>;
  compareHash(payload: string, hashed: string): Promise<boolean>;
}

export { HashProvider };
