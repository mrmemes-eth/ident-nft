import React from "react";

import { NetworkErrorMessage } from "./NetworkErrorMessage";

export function ConnectWallet({ connectWallet, networkError, dismiss }) {
  return (
    <div className="container">
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
        <div className="col-6 p-4 text-center">
          <p class="text-xl">This is a proof of concept</p>
          <button
            className="mx-auto bg-white shadow-sm hover:shadow-xl font-semibold text-gray-500 rounded-3xl border-2 border-gray-300 p-3 flex"
            type="button"
            onClick={connectWallet}
          >
            <div class="animate-ping absolute rounded-md bg-gradient-to-br from-blue-900 to-pink-700 w-6 h-6 ml-6"></div> 
            <div class="relative rounded-md bg-gradient-to-br from-blue-900 to-pink-700 w-6 h-6 ml-6"></div> 

            <div class="pl-4 mr-6">Sign in with NFT</div>
          </button>
        </div>
      </div>
    </div>
  );
}
