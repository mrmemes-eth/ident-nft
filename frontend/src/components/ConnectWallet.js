import React from "react";

import { NetworkErrorMessage } from "./NetworkErrorMessage";

export function ConnectWallet({ connectWallet, networkError, dismiss }) {
  return (
    <div class="min-h-screen h-full relative flex flex-col items-center md:justify-center">
      <header class="w-full absolute top-0 h-14">
        <div class="flex top-0 items-center justify-between pr-4 pl-4 h-12">
          <div class="flex font-bold">NFT Authentication Framework MVP</div>
          <div class="text-xs text-right text-blue-800">All systems operational</div>
        </div>
      </header>
      <div className="row justify-content-md-center">
        <div className="col-12 text-center">
          {/* Metamask network should be set to Localhost:8545. */}
          {networkError && (
            <NetworkErrorMessage
              message={networkError}
              dismiss={dismiss}
            />
          )}
        </div>
        <div class="max-w-screen-md bg-white rounded-3xl w-11/12 mt-16 md:mt-0 md:p-6 pb-12 py-12 space-y-8">
          <p class="text-3xl text-left tracking-wide leading-relaxed p-2">Hello Fren, <br /> do you have what it takes to pass through?</p>
          <button
            className="mx-auto w-full bg-white shadow-sm hover:shadow-xl font-semibold text-gray-500 rounded-3xl border-2 border-gray-300 p-3 flex"
            type="button"
            onClick={connectWallet}
          >
            <div class="animate-ping absolute rounded-md bg-gradient-to-br from-blue-900 to-pink-700 w-6 h-6 ml-6"></div>
            <div class="relative rounded-md bg-gradient-to-br from-blue-900 to-pink-700 w-6 h-6 ml-6"></div>

            <div class="pl-4 mr-6 tracking-wide">Sign in with NFT</div>
          </button>
          <div class="text-center text-xs">Only holder of a special NFT will by allowed to enter. If you don't have one yet, <a href="">please mint it here</a></div>
        </div>
      </div>
    </div>
  );
}
