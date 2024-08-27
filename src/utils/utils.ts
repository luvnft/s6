import { PublicKey } from '@solana/web3.js';
import {
  encodeURL,
  parseURL,
  validateTransfer,
  findReference,
} from '@solana/pay';
import BigNumber from 'bignumber.js';
import { connection } from './constants';

async function verifyTx(
  recipient: PublicKey,
  amount: BigNumber,
  reference: PublicKey,
  memo: string,
) {
  const found = await findReference(connection, reference);
  const response = await validateTransfer(connection, found.signature, {
    recipient,
    amount,
    reference,
    memo,
  });
  return response;
}
