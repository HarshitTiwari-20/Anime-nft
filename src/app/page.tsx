"use client";
import NFTClaimer from "@/app/Components/NFTClaimer";
import { defineChain, getContract } from "thirdweb";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { client } from "./client";

export default function Home() {
  const account = useActiveAccount();

  const AIAContract = getContract({
    client: client,
    chain: defineChain(1320),
    address: "0x371ab1AdF8C2bbA09D004bda99F1DE5B7E1c16d1",
  });

  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <h1 className="text-center text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-12 cursor-pointer">
          Claim your Favourite
          <br />
          Anime NFTs
        </h1>
        <div className="text-center ">
          <ConnectButton
            client={client}
            
          />
        </div>
        <div className="flex flex-row">
          <NFTClaimer
            recieverAddress={account?.address}
            dropContract={AIAContract}
            tokenId={0n}
          />
          <div className="h-auto w-[1px] bg-gray-600 mx-12 mt-8" />
          <NFTClaimer
            recieverAddress={account?.address}
            dropContract={AIAContract}
            tokenId={1n}
          />
        </div>
      </div>
    </main>
  );
}
