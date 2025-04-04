import { SafeAreaView, View } from "react-native"

import { ChevronRightIcon } from "@assets/icons"
import { Button, CustomText } from "@components/index"
import { SettingScreenProps } from "@navigations/types"
import { getMnemonic, walletActions } from "@store/actions"
import { Colors } from "@styles/index"
import { store } from "@store/index"

export default function SettingScreen(props: SettingScreenProps) {

    return (
        <SafeAreaView className="flex-1 bg-baseBg">
            <View className="flex-1">
                <Button
                    containerClassName="rounded-2xl mx-4 mb-2 mt-4"
                    className=" bg-baseComponent rouned-sm py-5 items-start"
                    textClassName="text-primary font-PlusJakartaSansSemiBold text-md"
                    title={
                        <View className="flex-row w-full justify-between items-center">
                            <CustomText className="font-PlusJakartaSansSemiBold text-lg text-primary">
                                Account Address
                            </CustomText>
                            <ChevronRightIcon
                                width={25} height={25}
                                color={Colors.primary}
                            />
                        </View>
                    }
                    onPress={() => {}}
                />
                <Button
                    containerClassName="rounded-2xl mx-4 mb-2"
                    className=" bg-baseComponent rouned-sm py-5 items-start"
                    textClassName="text-primary font-PlusJakartaSansSemiBold text-md"
                    title={
                        <View className="flex-row w-full justify-between items-center">
                            <CustomText className="font-PlusJakartaSansSemiBold text-lg text-primary">
                                Show Recovery Phrase
                            </CustomText>
                            <ChevronRightIcon
                                width={25} height={25}
                                color={Colors.primary}
                            />
                        </View>
                    }
                    onPress={async () => {
                        const mnemonic = await getMnemonic()
                        props.navigation.navigate('RecoveryPhrase', {
                            importWallet: false, words: mnemonic, title: "Recovery Phrase"
                        })
                    }}
                />
                <Button
                    containerClassName="rounded-2xl mx-4 mb-6"
                    className=" bg-baseComponent rouned-sm py-5 items-start"
                    textClassName="text-primary font-PlusJakartaSansSemiBold text-md"
                    title={
                        <View className="flex-row w-full justify-between items-center">
                            <CustomText className="font-PlusJakartaSansSemiBold text-lg text-primary">
                                Show Private Key
                            </CustomText>
                            <ChevronRightIcon
                                width={25} height={25}
                                color={Colors.primary}
                            />
                        </View>
                    }
                    onPress={() => {}}
                />
                <Button
                    containerClassName="rounded-2xl mx-4 mb-6"
                    className=" bg-baseComponent rouned-sm py-5 items-start"
                    textClassName="text-primary"
                    title={
                        <View className="flex-row w-full justify-between items-center">
                            <CustomText className="font-PlusJakartaSansSemiBold text-lg text-primary">
                                Rpc Url
                            </CustomText>
                            <ChevronRightIcon
                                width={25} height={25}
                                color={Colors.primary}
                            />
                        </View>
                    }
                    onPress={() => {}}
                />
                <Button
                    containerClassName="rounded-2xl mx-4"
                    className=" bg-baseComponent rouned-sm py-3 items-center"
                    textClassName="text-red-700"
                    title="Disconnect"
                    onPress={() => {
                        store.dispatch(walletActions.clearWallet())
                        props.navigation.navigate("Start")
                    }}
                />
            </View>
        </SafeAreaView>
    )
}