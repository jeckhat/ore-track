import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as Keychain from 'react-native-keychain'
import { Keypair } from '@solana/web3.js'

import { WalletState } from '@store/types'
import { CustomError } from '@models'

const WALLET_STORAGE_KEY = "solana_private_key"
const WALLET_STORAGE_MNENOMIC = "solana_mnenomic"

const initialState: WalletState = {
    publicKey: null,
    useMnemonic: false,
    usePrivateKey: false,
    allowTrx: false
}

interface createWalletAction {
    address: string, useMnemonic: boolean, usePrivateKey: boolean, allowTrx: boolean
}

const walletSlice = createSlice({
    name: 'wallet',
    initialState: initialState,
    reducers: {
        setWallet: (state, action: PayloadAction<createWalletAction>) => {
            const { address, useMnemonic, usePrivateKey, allowTrx } = action.payload
            state.publicKey = address
            state.useMnemonic = useMnemonic
            state.usePrivateKey = usePrivateKey
            state.allowTrx = allowTrx
        },
        clearWallet: (state) => {
            state.publicKey = null;
        }
    }
})

export const walletActions = walletSlice.actions
export const walletReducer = walletSlice.reducer

export async function saveCredentials(keypair: Keypair, mnemonic?: string) {
    const secretKeyArray = Array.from(keypair.secretKey)
    await Keychain.setGenericPassword(WALLET_STORAGE_KEY, JSON.stringify(secretKeyArray), {
        service: 'wallet-keypair',
        accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
    })

    if (mnemonic) {
        await Keychain.setGenericPassword(WALLET_STORAGE_MNENOMIC, mnemonic, {
            service: 'wallet-mnemonic',
            accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
        })
    }
}

export async function getMnemonic() {
    try {
        const credentials = await Keychain.getGenericPassword({
            authenticationPrompt: { title: 'Authenticate to access your Recovery Phrase' },
            service: 'wallet-mnemonic'
        });
        if (credentials) {
            return credentials.password
        }
        throw new CustomError("Not Credetials", 401)
    } catch (error) {
        throw error
    }
}

export async function getKeypair() {
    try {
        const credentials = await Keychain.getGenericPassword({
            authenticationPrompt: { title: 'Authenticate to access your Secret Key' },
            service: 'wallet-keypair'
        });
        if (credentials) {
            const secretKey = JSON.parse(credentials.password)
            return Keypair.fromSecretKey(new Uint8Array(secretKey))
        }
        throw new CustomError("Not Credetials", 401)
    } catch (error) {
        throw error
    }
}

export async function deleteCredentials() {
    await Keychain.resetGenericPassword({ service: 'wallet-mnemonic' })
    await Keychain.resetGenericPassword({ service: 'wallet-keypair' })
}
