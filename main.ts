input.onButtonPressed(Button.A, function () {
    IotLoRaNode.DigitalValue(true, Channels.Four)
    IotLoRaNode.loraTransmitPayload()
})
input.onButtonPressed(Button.B, function () {
    IotLoRaNode.DigitalValue(true, Channels.Five)
    IotLoRaNode.loraTransmitPayload()
})
basic.showIcon(IconNames.No)
IotLoRaNode.SetRegion(region.EU868)
IotLoRaNode.InitialiseRadio(
"260BB901",
"F6383B7A12DA5885959E024BE4893A95",
"7374D7008A350E0F92DAA2D74AC0A640",
SpreadingFactors.Seven
)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    basic.pause(5000)
    basic.showIcon(IconNames.SmallSquare)
    IotLoRaNode.TemperatureValue(input.temperature(), Channels.One)
    IotLoRaNode.LightValue(input.lightLevel(), Channels.Two)
    IotLoRaNode.AnalogueValue(input.soundLevel(), Channels.Three)
    IotLoRaNode.loraTransmitPayload()
    basic.showIcon(IconNames.Diamond)
})
