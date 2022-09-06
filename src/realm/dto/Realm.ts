import { ObjectType, Field } from '@nestjs/graphql';
import { PublicKey } from '@solana/web3.js';

import { PublicKeyScalar } from '@src/lib/scalars/PublicKey';

@ObjectType({
  description: 'A Realm',
})
export class Realm {
  @Field({
    description: "Url for the Realm's banner",
    nullable: true,
  })
  bannerImageUrl?: string;

  @Field({
    description: "Url for the Realm's icon",
    nullable: true,
  })
  iconUrl?: string;

  @Field({
    description: 'Name of the Realm',
  })
  name: string;

  @Field(() => PublicKeyScalar, {
    description: 'Public key of the governance program the Realm uses',
    nullable: true,
  })
  programPublicKey?: PublicKey;

  @Field(() => PublicKeyScalar, {
    description: 'Public Key address for the Realm',
  })
  publicKey: PublicKey;

  @Field({
    description: 'Symbol for the Realm',
    nullable: true,
  })
  symbol?: string;

  @Field({
    description: 'Twitter handle for the Realm',
    nullable: true,
  })
  twitterHandle?: string;

  @Field({
    description: 'Website url for the Realm',
    nullable: true,
  })
  websiteUrl?: string;
}