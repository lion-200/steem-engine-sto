import { baseEnvironmentConfiguration } from 'base-environment';
import { NativeTokens } from 'common/types';

export const environment: Partial<EnvironmentInterface> = {
    ...baseEnvironmentConfiguration,
    debug: false,
    testing: false,
	MAINTENANCE_MODE: false,
	CHAIN_ID: 'ssc-00000000000000000002',
	RPC_URL: 'https://testapi.steem-engine.com/',
	ACCOUNTS_API_URL: 'https://testaccounts.steem-engine.com',
    CONVERTER_API: 'https://converter-api.steem-engine.com/api',
    NODE_API_URL: 'http://localhost:3000/v1/',
    SCOT_API_URL: 'https://scot-api.steem-engine.com/',
    PRICE_API: 'https://postpromoter.net/api/prices',
	ACCOUNTS_API_URL: 'https://api.steem-engine.com/accounts',
    CONVERTER_API: 'https://converter-api.steem-engine.com/api',
	NATIVE_TOKEN: NativeTokens.Eng,
    STEEMP_ACCOUNT: 'steem-peg',
    AIRDROP: {
        FEE_ACCOUNT: 'steem-eng',
        FEE: '20.000',
        MEMO: 'airdrop-fee',
        TOKEN: NativeTokens.Eng
    },
    SCOTBOT: {
        FEE_ACCOUNT: 'steemsc',
        CHANGE_ACCOUNT: 'null',
        FEES: {
            INITIAL: '0.001',
            SETUP_1: '0.002',
            SETUP_2: '0.003',
            CHANGE: '0.001'
        },
        PUBLIC_KEY: 'STM8YqKpQijsqjkkS2widNTsmNM3SrQe3xipEm2sfC4xMryvwhdBE',
        FEE_ACCOUNT_1: 'holger80',
        FEE_ACCOUNT_2: 'beggars'
    },
    NITROUS: {
        FEE_ACCOUNT: 'beggars',
        FEE: 200,
        FEE_SYMBOL: NativeTokens.Eng
    }
};
