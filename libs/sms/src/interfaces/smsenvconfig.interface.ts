import { Provider } from "../enum/provider.enum";

export interface SmsEnvConfig {
  provider: Provider;
  apiKey: string;
  apiSecret: string;
  from: string;
}