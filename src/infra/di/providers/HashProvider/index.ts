import { container } from 'tsyringe';

import { BCryptHashProvider } from './implementations/BCryptHashProvider';
import { HashProvider } from './models/HashProvider';

container.registerSingleton<HashProvider>('HashProvider', BCryptHashProvider);
