import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp, CompositeNavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type MainStackParamList = {
    Start: {} | undefined
    PrivateKey: { importWallet?: boolean, words?: string, title?: string, isSeedPhrase?: boolean } | undefined
    BottomTab: {} | undefined
    Token: { mintAddress?: string } | undefined
    Receive: {} | undefined
    DepositStake: { boost?: string } | undefined
    WithdrawStake: { boost?: string } | undefined
    RPC: {} | undefined
}

type NavigationTabsParamList = {
    TabWallet: {} | undefined
    TabPool: {} | undefined
    TabMine: {} | undefined
    TabStake: {} | undefined
    TabSetting: {} | undefined
}

export type StartNavigationProps = {
    navigation: NativeStackNavigationProp<MainStackParamList, 'Start'>
    route: RouteProp<MainStackParamList, 'Start'>
}

export type PrivateKeyNavigationProps = {
    navigation: NativeStackNavigationProp<MainStackParamList, 'PrivateKey'>
    route: RouteProp<MainStackParamList, 'PrivateKey'>
}

export type TabNavigationProps = {
    navigation: NativeStackNavigationProp<MainStackParamList, 'BottomTab'>
    route: RouteProp<MainStackParamList, 'BottomTab'>
}

export type TabWalletScreenProps = {
    navigation: CompositeNavigationProp<BottomTabNavigationProp<NavigationTabsParamList, 'TabWallet'>, NativeStackNavigationProp<MainStackParamList, 'BottomTab'>>
    route: RouteProp<NavigationTabsParamList, 'TabWallet'>
}

export type TabPoolScreenProps = {
    navigation: CompositeNavigationProp<BottomTabNavigationProp<NavigationTabsParamList, 'TabPool'>, NativeStackNavigationProp<MainStackParamList, 'BottomTab'>>
    route: RouteProp<NavigationTabsParamList, 'TabPool'>
}

export type TabMineScreenProps = {
    navigation: CompositeNavigationProp<BottomTabNavigationProp<NavigationTabsParamList, 'TabMine'>, NativeStackNavigationProp<MainStackParamList, 'BottomTab'>>
    route: RouteProp<NavigationTabsParamList, 'TabMine'>
}

export type TabStakeScreenProps = {
    navigation: CompositeNavigationProp<BottomTabNavigationProp<NavigationTabsParamList, 'TabStake'>, NativeStackNavigationProp<MainStackParamList, 'BottomTab'>>
    route: RouteProp<NavigationTabsParamList, 'TabStake'>
}

export type TabSettingScreenProps = {
    navigation: CompositeNavigationProp<BottomTabNavigationProp<NavigationTabsParamList, 'TabSetting'>, NativeStackNavigationProp<MainStackParamList, 'BottomTab'>>
    route: RouteProp<NavigationTabsParamList, 'TabSetting'>
}

export type TokenNavigationProps = {
    navigation: NativeStackNavigationProp<MainStackParamList, 'Token'>
    route: RouteProp<MainStackParamList, 'Token'>
}

export type ReceiveNavigationProps = {
    navigation: NativeStackNavigationProp<MainStackParamList, 'Receive'>
    route: RouteProp<MainStackParamList, 'Receive'>
}

export type DepositStakeNavigationProps = {
    navigation: NativeStackNavigationProp<MainStackParamList, 'DepositStake'>
    route: RouteProp<MainStackParamList, 'DepositStake'>
}

export type WithdrawStakeNavigationProps = {
    navigation: NativeStackNavigationProp<MainStackParamList, 'WithdrawStake'>
    route: RouteProp<MainStackParamList, 'WithdrawStake'>
}

// export type StakeNavigationProps = {
//     navigation: NativeStackNavigationProp<MainStackParamList, 'Stake'>
//     route: RouteProp<MainStackParamList, 'Stake'>
// }

export type RPCNavigationProps = {
    navigation: NativeStackNavigationProp<MainStackParamList, 'RPC'>
    route: RouteProp<MainStackParamList, 'RPC'>
}